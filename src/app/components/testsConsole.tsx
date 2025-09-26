import { useState, useMemo } from "react";
import { DragSizing } from "react-drag-sizing";
import { TestCase, runTests } from "@/lib/runTests";

type TestResult = {
  description: string;
  pass: boolean;
  error?: string;
};

type Test = {
  description: string;
  query: string;
  clicks?: number;
  expectText?: string;
  type?: string; // вместо литералов
};

type Exercise = {
  id: number;
  theme: string;
  title: string;
  dificult: string;
  time: string;
  note: string;
  requirements: string;
  html: string;
  app: string;
  css: string;
  tests: Test[];
  [key: string]: unknown;
};

export default function TestsConsole({
  code,
  exercise,
  results = [],
}: {
  code: { [key: string]: string | undefined };
  exercise: Exercise | undefined;
  results?: TestResult[];
}) {
  const [collapsed, setCollapsed] = useState(false);

  const srcDoc = useMemo(() => {
    // Рендерим список результатов прямо в HTML iframe
    const resultHTML =
      results.length === 0
        ? `<p style="color:gray;">Нет результатов</p>`
        : results
            .map(
              (r) => `
              <div style="margin:4px 0; font-family: monospace; color:${
                r.pass ? "green" : "red"
              }">
                ${r.pass ? "✅" : "❌"} ${r.description}
                ${
                  !r.pass && r.error
                    ? `<div style="color:#555;">${r.error}</div>`
                    : ""
                }
              </div>
            `
            )
            .join("");

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: sans-serif; padding: 10px; background: #f8fafc; }
          </style>
        </head>
        <body>
          <h3 style="margin:0 0 10px 0;">Результаты тестов</h3>
          ${resultHTML}
        </body>
      </html>
    `;
  }, [results]);

  return (
    <div className="w-full bg-white rounded-b-xl overflow-hidden">
      {/* Кнопка скрыть / открыть */}
      <div className="flex justify-end p-2 bg-slate-200 border-y-1 border-slate-300">
        <button
          className="bg-white px-2 rounded-xl"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Открыть" : "Закрыть"}
        </button>
      </div>

      {!collapsed && (
        <DragSizing
          direction="vertical"
          defaultSize={200}
          minSize={100}
          maxSize={500}
          className="w-full"
        >
          <iframe
            id="tests"
            title="tests"
            srcDoc={srcDoc}
            sandbox="allow-scripts allow-same-origin"
            width="100%"
            height="100%"
            style={{
              backgroundColor: "#f8fafc",
            }}
          />
        </DragSizing>
      )}
    </div>
  );
}
