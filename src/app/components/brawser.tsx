"use client";
import { useEffect, useMemo, useState } from "react";
import * as Babel from "@babel/standalone";
import debounce from "lodash.debounce";

export default function Brawser({
  code,
  setCode,
}: {
  code: { [key: string]: string | undefined };
  setCode: (code: {
    "index.html": string | undefined;
    "styles.css": string | undefined;
    "App.js": string | undefined;
  }) => void;
}) {
  function sanitizeReactCode(source: string): string {
    return (
      source
        // убираем import React или import * as React
        .replace(/import\s+(React|.*\*\s+as\s+React).*;\s*/g, "")
        // убираем import { useState } from 'react';
        .replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*/g, "")
        // убираем export default
        .replace(/export\s+default\s+/g, "")
    );
  }

  const [compiledJS, setCompiledJS] = useState("");

  const run = useMemo(
    () =>
      debounce(() => {
        try {
          if (code["App.js"]) {
            const sanitized = sanitizeReactCode(code["App.js"]);
            const result = Babel.transform(sanitized, {
              filename: "file.js",
              presets: ["react", "env"],
            }).code;
            setCompiledJS(result || "");
          }
        } catch (err) {
          console.error("Ошибка компиляции TSX:", err);
          setCompiledJS("");
        }
      }, 300),
    [code]
  );

  useEffect(() => {
    run(); // используем

    return () => {
      run.cancel(); // чистим при размонтировании
    };
  }, [run]);

  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <style>${code["styles.css"]}</style>
        </head>
        <body>
          ${code["index.html"] || "<div id='root'></div>"}
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script>
          const { useState, StrictMode } = React;
            const { createRoot } = ReactDOM;
            try {
              ${compiledJS}
              if (typeof App !== "undefined") {
                const root = document.getElementById("root");
                ReactDOM.createRoot(root).render(React.createElement(App));
              }
            } catch (e) {
              document.body.innerHTML += '<pre style="color:red">' + e + '</pre>';
            }
          </script>
        </body>
      </html>
    `;
  }, [code, compiledJS]);

  return (
    <iframe
      id="preview"
      title="preview"
      srcDoc={srcDoc}
      sandbox="allow-scripts allow-same-origin"
      width="100%"
      height="100%"
      style={{
        borderRadius: "8px",
      }}
    />
  );
}
