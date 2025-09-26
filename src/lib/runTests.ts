export type TestCase = {
  description: string;
  query: string;
  clicks?: number;
  expectText?: string;
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
    
  const iframe = document.getElementById("preview") as HTMLIFrameElement | null;
  if (!iframe) {
    console.warn("iframe #preview не найден");
    return [];
  }

  const tick = (ms = 50) => new Promise<void>((r) => setTimeout(r, ms));
  await tick(100);

  const doc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!doc) {
    console.warn("iframe документ не доступен");
    return [];
  }

  const results: TestResult[] = [];

  for (const t of tests) {
    const res: TestResult = { description: t.description, pass: false };
    try {
      const el = doc.querySelector(t.query) as HTMLElement | null;
      if (!el) {
        res.reason = "Элемент не найден";
        results.push(res);
        continue;
      }

      const clicks = t.clicks ?? 0;
      for (let i = 0; i < clicks; i++) {
        el.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true })
        );
        await tick(30);
      }

      const actual = (el.textContent || "").trim();
      res.expected = t.expectText;
      res.actual = actual;
      res.pass = t.expectText === undefined ? true : actual === t.expectText;
    } catch (err) {
      res.error = err instanceof Error ? err.message : String(err);
    }

    results.push(res);
  }

  return results;
}
