"use client";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { TbWashDrycleanOff } from "react-icons/tb";
import github from "monaco-themes/themes/GitHub.json";
import monokai from "monaco-themes/themes/Monokai.json";
import dracula from "monaco-themes/themes/Dracula.json";
import solarizedDark from "monaco-themes/themes/Solarized-dark.json";
import solarizedLight from "monaco-themes/themes/Solarized-light.json";
import cobalt from "monaco-themes/themes/Cobalt.json";
import tomorrowNight from "monaco-themes/themes/Tomorrow-Night.json";
import type { editor } from "monaco-editor";

const themes: Record<string, editor.IStandaloneThemeData> = {
  github: github as editor.IStandaloneThemeData,
  monokai: monokai as editor.IStandaloneThemeData,
  dracula: dracula as editor.IStandaloneThemeData,
  "solarized-dark": solarizedDark as editor.IStandaloneThemeData,
  "solarized-light": solarizedLight as editor.IStandaloneThemeData,
  cobalt: cobalt as editor.IStandaloneThemeData,
  "tomorrow-night": tomorrowNight as editor.IStandaloneThemeData,
};

type Language = "index.html" | "styles.css" | "App.tsx" | "index.tsx";

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
  index: string;
  [key: string]: unknown;
};

export default function CodeEditor({
  code,
  exercise,
  // jsValue,
  // tsxValue,
  // htmlValue,
  // cssValue,
  setCode,
  onChange,
}: {
  code: { [key: string]: string | undefined };
  exercise: Exercise | undefined;
  // jsValue: string | undefined;
  // tsxValue: string | undefined;
  // htmlValue: string | undefined;
  // cssValue: string | undefined;
  setCode: (code: {
    "index.html": string | undefined;
    "styles.css": string | undefined;
    "App.tsx": string | undefined;
    "index.tsx": string | undefined;
  }) => void;
  onChange: (code: {
    "index.html": string | undefined;
    "styles.css": string | undefined;
    "App.tsx": string | undefined;
    "index.tsx": string | undefined;
  }) => void;
}) {

  const [theme, setTheme] = useState<string>("dracula");
  const [activeFile, setActiveFile] = useState<Language>("App.tsx");

  // темы редактора
  useEffect(() => {
    loader.init().then((monacoInstance) => {
      Object.entries(themes).forEach(([name, themeData]) => {
        monacoInstance.editor.defineTheme(name, themeData);
      });
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("editorTheme");
      if (saved) setTheme(saved);
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("editorTheme", newTheme);
    }
  };

  const files: Record<
    string,
    { name: string; language: string; value: string | undefined }
  > = {
    "App.tsx": {
      name: "App.tsx",
      language: "javascript",
      value: code["App.tsx"] || "",
    },
    "index.tsx": {
      name: "index.tsx",
      language: "typescript",
      value: code["index.tsx"] || "",
    },
    "styles.css": {
      name: "styles.css",
      language: "css",
      value: code["styles.css"] || "",
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: code["index.html"] || ""
    },
  };

//   const files: Record<Language, { name: string; language: string; value: string }> = {
//   "App.tsx": {
//     name: "App.tsx",
//     language: "typescript",
//     value: code["App.tsx"] ?? "",
//   },
//   "index.tsx": {
//     name: "index.tsx",
//     language: "typescript",
//     value: code["index.tsx"] ?? "",
//   },
//   "styles.css": {
//     name: "styles.css",
//     language: "css",
//     value: code["styles.css"] ?? "",
//   },
//   "index.html": {
//     name: "index.html",
//     language: "html",
//     value: code["index.html"] ?? "",
//   },
// };

  // кнопка сброса
  function getInitialCode(exercise: Exercise): Record<Language, string> {
    return {
      "index.html": exercise.html ?? "",
      "styles.css": exercise.css ?? "",
      "App.tsx": exercise.app ?? "",
      "index.tsx": exercise.index ?? "",
    };
  }

  const handlerClean = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!exercise) return;

    const initial = getInitialCode(exercise);

    // 1. Убираем сохранённое из localStorage
    localStorage.removeItem(`exercise-${exercise.id}`);

    // 2. Возвращаем код к исходному
    setCode(initial);
  };

  const handleCodeChange = (val: string | undefined) => {
    onChange({
      "index.html": activeFile === "index.html" ? val || undefined : code["index.html"],
      "styles.css": activeFile === "styles.css" ? val || undefined : code["styles.css"],
      "App.tsx": activeFile === "App.tsx" ? val || undefined : code["App.tsx"],
      "index.tsx": activeFile === "index.tsx" ? val || undefined : code["index.tsx"],
    });
  }; // ← следим только за id, а не за setCode

  return (
    <div className="shadow-2xl">
      <div className="flex justify-between">
        <div className="flex gap-1">
          {(Object.keys(files) as Language[]).map((f) => (
            <button
              key={f}
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              disabled={activeFile === f}
              onClick={() => setActiveFile(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="gap-2 flex items-center">
          <select
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
            className="border rounded p-1 w-48"
          >
            {Object.keys(themes).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <button
            className="text-gray-500 cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            onClick={handlerClean}
          >
            <TbWashDrycleanOff />
          </button>
        </div>
      </div>

      <Editor
        height="50vh"
        theme={theme}
        path={files[activeFile].name}
        defaultLanguage={files[activeFile].language}
        defaultValue={files[activeFile].value}
        value={files[activeFile].value}
        onChange={handleCodeChange}
      />
    </div>
  );
}
