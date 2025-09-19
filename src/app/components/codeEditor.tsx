"use client";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useEffect, useState } from "react";

type Language = "html" | "css" | "javascript" | "tsx";

type Exercise = {
  id: number;
  theme: string;
  title: string;
  dificult: string;
  time: string;
  note: string;
  requirements: string;
  html: string;
  javascript: string;
  css: string;
  tsx: string;
  [key: string]: unknown;
};

export default function CodeEditor({
  exercise,
  jsValue,
  tsxValue,
  htmlValue,
  cssValue,
}: {
  exercise: Exercise | undefined;
  jsValue: string | undefined;
  tsxValue: string | undefined;
  htmlValue: string | undefined;
  cssValue: string | undefined;
}) {
  const [activeLang, setActiveLang] = useState<Language>("javascript");

  const [userCode, setUserCode] = useState<Record<Language, string>>({
    javascript: "",
    html: "",
    css: "",
    tsx: "",
  });

  useEffect(() => {
    if (exercise) {
      const initial: Record<Language, string> = {
        html: "",
        css: "",
        javascript: "",
        tsx: "",
      };

      if (exercise.javascript) {
        initial["javascript"] = exercise.javascript;
      }
      if (exercise.html) {
        initial["html"] = exercise.html;
      }
      if (exercise.css) {
        initial["css"] = exercise.css;
      }
      if (exercise.tsx) {
        initial["tsx"] = exercise.tsx;
      }

      const saved = localStorage.getItem(`exercise-${exercise.id}`);
      if(saved) {
        setUserCode(JSON.parse(saved));
      } else {
        setUserCode(initial)
      }
    }
  }, [exercise]);

  useEffect(() => {
    if (Object.values(userCode).some((val) => val)) {
      localStorage.setItem(`exercise-${exercise?.id}`, JSON.stringify(userCode));
    }
  }, [userCode, exercise]);

  const [fileName, setFileName] = useState("script.js");

  const files: Record<
    string,
    { name: string; language: string; value: string | undefined }
  > = {
    "script.js": {
      name: "script.js",
      language: "javascript",
      value: jsValue,
    },
    "script.tsx": {
      name: "script.tsx",
      language: "typescript",
      value: tsxValue,
    },
    "style.css": {
      name: "style.css",
      language: "css",
      value: cssValue,
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: htmlValue,
    },
  };

  const file = files[fileName];

  return (
    <>
      <div className="flex gap-1">
        <button
          className="p-2 bg-gray-100 hover:bg-gray-200"
          disabled={fileName === "script.js"}
          onClick={() => setFileName("script.js")}
        >
          script.js
        </button>
        <button
          className="p-2 bg-gray-100 hover:bg-gray-200"
          disabled={fileName === "script.tsx"}
          onClick={() => setFileName("script.tsx")}
        >
          script.tsx
        </button>
        <button
          className="p-2 bg-gray-100 hover:bg-gray-200"
          disabled={fileName === "style.css"}
          onClick={() => setFileName("style.css")}
        >
          style.css
        </button>
        <button
          className="p-2 bg-gray-100 hover:bg-gray-200"
          disabled={fileName === "index.html"}
          onClick={() => setFileName("index.html")}
        >
          index.html
        </button>
      </div>

      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        value={userCode[activeLang]} 
        onChange={(val: string) =>
          setUserCode((prev) => ({ ...prev, [activeLang]: val || "" }))
        }
      />
    </>
  );
}
