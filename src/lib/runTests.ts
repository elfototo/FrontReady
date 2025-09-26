export type TestCase = {
  description: string;
  query: string;
  clicks?: number;
  expectText?: string;
  type?: "equals" | "increment" | "includes" | "regex" | string;
};

export type TestResult = {
  description: string;
  pass: boolean;
  expected?: string;
  actual?: string;
  reason?: string;
  error?: string;
};

export async function runTests(tests: TestCase[]): Promise<TestResult[]> {
  console.groupCollapsed(`[runTests] start — ${new Date().toLocaleTimeString()}`);
  console.log("tests:", JSON.parse(JSON.stringify(tests)));

  // helper
  const tick = (ms = 50) => new Promise<void>((r) => setTimeout(r, ms));
  const parseNumberFromText = (text: string): number | null => {
    const m = text.match(/-?\d+/);
    return m ? parseInt(m[0], 10) : null;
  };

  const iframe = document.getElementById("preview") as HTMLIFrameElement | null;
  if (!iframe) {
    console.warn("[runTests] iframe #preview не найден — тесты отменены");
    console.groupEnd();
    return [];
  }

  console.log("[runTests] found iframe #preview, waiting short tick for stability...");
  await tick(80);

  const doc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!doc) {
    console.warn("[runTests] iframe.document недоступен — тесты отменены");
    console.groupEnd();
    return [];
  }

  console.log("[runTests] iframe document ready. body length:", (doc.body?.innerHTML || "").length);

  const results: TestResult[] = [];

  for (const t of tests) {
    console.groupCollapsed(`[test] ${t.description}`);
    console.log("selector:", t.query, "clicks:", t.clicks ?? 0, "type:", t.type ?? "equals", "expectText:", t.expectText);

    const res: TestResult = { description: t.description, pass: false };

    try {
      const el = doc.querySelector(t.query) as HTMLElement | null;
      if (!el) {
        res.reason = "Элемент не найден";
        console.warn(`[test] Элемент не найден по селектору "${t.query}"`);
        // для дебага — небольшая подсказка: первые 300 символов body
        const snippet = (doc.body?.innerText || "").slice(0, 500);
        console.debug("[test] body snippet (start, 500 chars):", snippet);
        results.push(res);
        console.groupEnd();
        continue;
      }

      const beforeText = (el.textContent || "").trim();
      console.log("[test] beforeText:", JSON.stringify(beforeText));

      const clicks = t.clicks ?? 0;
      for (let i = 0; i < clicks; i++) {
        el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
        // даём React обработать setState
        await tick(25);
      }

      const afterText = (el.textContent || "").trim();
      console.log("[test] afterText:", JSON.stringify(afterText));

      // обработка типов тестов
      const type = t.type ?? "equals";

      if (type === "increment") {
        const beforeNum = parseNumberFromText(beforeText);
        const afterNum = parseNumberFromText(afterText);
        console.log(`[test] parsed numbers before=${String(beforeNum)} after=${String(afterNum)}`);

        if (beforeNum === null || afterNum === null) {
          res.pass = false;
          res.reason = `Не удалось распарсить числа (before="${beforeText}", after="${afterText}")`;
          res.actual = afterText;
          console.warn("[test] fail:", res.reason);
        } else {
          res.expected = String(beforeNum + clicks);
          res.actual = String(afterNum);
          res.pass = afterNum === beforeNum + clicks;
          console.log(`[test] expected numeric after = ${res.expected}, actual = ${res.actual}`);
        }
      } else if (type === "includes") {
        const actual = afterText;
        res.actual = actual;
        res.expected = t.expectText;
        res.pass = typeof t.expectText === "string" ? actual.includes(t.expectText) : false;
        console.log(`[test] includes?`, res.pass);
      } else if (type === "regex") {
        try {
          const re = new RegExp(t.expectText ?? "");
          const actual = afterText;
          res.actual = actual;
          res.expected = String(t.expectText);
          res.pass = re.test(actual);
          console.log(`[test] regex test?`, res.pass);
        } catch (reErr) {
          res.pass = false;
          res.error = reErr instanceof Error ? reErr.message : String(reErr);
          console.error("[test] regex error:", res.error);
        }
      } else {
        // equals (по умолчанию) — сравнение строковое
        res.expected = t.expectText;
        res.actual = afterText;
        res.pass = t.expectText === undefined ? true : afterText === t.expectText;
        console.log(`[test] equals?`, res.pass, "expected:", res.expected, "actual:", res.actual);
      }
    } catch (err) {
      res.error = err instanceof Error ? err.message : String(err);
      console.error("[test] exception:", res.error);
    }

    results.push(res);
    if (res.pass) console.log(`✅ ${t.description}`);
    else console.warn(`❌ ${t.description}`, res);
    console.groupEnd();
  }

  // summary
  const passed = results.filter((r) => r.pass).length;
  console.log(`[runTests] finished — passed ${passed}/${results.length}`);
  console.groupEnd();

  return results;
}