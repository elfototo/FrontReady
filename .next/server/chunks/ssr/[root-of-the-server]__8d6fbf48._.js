module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/data/exercise.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\n\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n\\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"},{\"id\":2,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\n// This is a warm up question to help you\\n// get familiar with the editor.\\n// Most of the code has been filled in for you.\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n          // Fix the bug in the next line\\n          // to complete the question.\\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"},{\"id\":3,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n          \\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"}]"));}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/components/codeEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$loader$2f$lib$2f$es$2f$loader$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__loader$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/loader/lib/es/loader/index.js [app-ssr] (ecmascript) <export default as loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$GitHub$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/GitHub.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Monokai$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Monokai.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Dracula$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Dracula.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$dark$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Solarized-dark.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$light$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Solarized-light.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Cobalt$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Cobalt.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Tomorrow$2d$Night$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Tomorrow-Night.json (json)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const themes = {
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$GitHub$2e$json__$28$json$29$__["default"],
    monokai: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Monokai$2e$json__$28$json$29$__["default"],
    dracula: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Dracula$2e$json__$28$json$29$__["default"],
    "solarized-dark": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$dark$2e$json__$28$json$29$__["default"],
    "solarized-light": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$light$2e$json__$28$json$29$__["default"],
    cobalt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Cobalt$2e$json__$28$json$29$__["default"],
    "tomorrow-night": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Tomorrow$2d$Night$2e$json__$28$json$29$__["default"]
};
function CodeEditor({ code, exercise, // jsValue,
// tsxValue,
// htmlValue,
// cssValue,
setCode, onChange }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dracula");
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("App.tsx");
    // темы редактора
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$loader$2f$lib$2f$es$2f$loader$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__loader$3e$__["loader"].init().then((monacoInstance)=>{
            Object.entries(themes).forEach(([name, themeData])=>{
                monacoInstance.editor.defineTheme(name, themeData);
            });
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const handleThemeChange = (newTheme)=>{
        setTheme(newTheme);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const files = {
        "App.tsx": {
            name: "App.tsx",
            language: "javascript",
            value: code["App.tsx"] || ""
        },
        "index.tsx": {
            name: "index.tsx",
            language: "typescript",
            value: code["index.tsx"] || ""
        },
        "styles.css": {
            name: "styles.css",
            language: "css",
            value: code["styles.css"] || ""
        },
        "index.html": {
            name: "index.html",
            language: "html",
            value: code["index.html"] || ""
        }
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
    function getInitialCode(exercise) {
        return {
            "index.html": exercise.html ?? "",
            "styles.css": exercise.css ?? "",
            "App.tsx": exercise.app ?? "",
            "index.tsx": exercise.index ?? ""
        };
    }
    const handlerClean = (e)=>{
        if (!exercise) return;
        const initial = getInitialCode(exercise);
        // 1. Убираем сохранённое из localStorage
        localStorage.removeItem(`exercise-${exercise.id}`);
        // 2. Возвращаем код к исходному
        setCode(initial);
    };
    const handleCodeChange = (val)=>{
        onChange({
            "index.html": activeFile === "index.html" ? val || undefined : code["index.html"],
            "styles.css": activeFile === "styles.css" ? val || undefined : code["styles.css"],
            "App.tsx": activeFile === "App.tsx" ? val || undefined : code["App.tsx"],
            "index.tsx": activeFile === "index.tsx" ? val || undefined : code["index.tsx"]
        });
    }; // ← следим только за id, а не за setCode
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: Object.keys(files).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                                disabled: activeFile === f,
                                onClick: ()=>setActiveFile(f),
                                children: f
                            }, f, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gap-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: theme,
                                onChange: (e)=>handleThemeChange(e.target.value),
                                className: "border rounded p-1 w-48",
                                children: Object.keys(themes).map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: name,
                                        children: name
                                    }, name, false, {
                                        fileName: "[project]/src/app/components/codeEditor.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-full",
                                onClick: handlerClean,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbWashDrycleanOff"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/codeEditor.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                height: "50vh",
                theme: theme,
                path: files[activeFile].name,
                defaultLanguage: files[activeFile].language,
                defaultValue: files[activeFile].value,
                value: files[activeFile].value,
                onChange: handleCodeChange
            }, void 0, false, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/codeEditor.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/brawser.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Brawser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/standalone/babel.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Brawser({ code, setCode }) {
    function sanitizeReactCode(source) {
        return source// убираем import React или import * as React
        .replace(/import\s+(React|.*\*\s+as\s+React).*;\s*/g, "")// убираем import { useState } from 'react';
        .replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*/g, "")// убираем export default
        .replace(/export\s+default\s+/g, "");
    }
    const [compiledJS, setCompiledJS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (code["App.tsx"]) {
            try {
                const sanitized = sanitizeReactCode(code["App.tsx"]);
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"](sanitized, {
                    filename: "file.tsx",
                    presets: [
                        "react",
                        "typescript"
                    ]
                }).code;
                setCompiledJS(result || "");
            } catch (err) {
                console.error("Ошибка компиляции TSX:", err);
                setCompiledJS("");
            }
        } else {
            setCompiledJS("");
        }
    }, [
        code,
        setCompiledJS
    ]);
    const [compiledTSX, setCompiledTSX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (code["index.tsx"]) {
            try {
                // Транспилируем TSX с React и TypeScript в JS
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"](code["index.tsx"], {
                    filename: "file.tsx",
                    presets: [
                        "react",
                        "typescript"
                    ]
                }).code;
                setCompiledTSX(result || "");
            } catch (err) {
                console.error("Ошибка компиляции TSX:", err);
                setCompiledTSX("");
            }
        } else {
            setCompiledTSX("");
        }
    }, [
        code
    ]);
    const srcDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
        code,
        compiledJS
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
        title: "preview",
        srcDoc: srcDoc,
        sandbox: "allow-scripts allow-same-origin",
        width: "100%",
        height: "100%",
        style: {
            border: "1px solid #ccc",
            borderRadius: "8px"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/brawser.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/exercise/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExercisePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$exercise$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/data/exercise.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$codeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/codeEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$brawser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/brawser.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function ExercisePage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const exercises = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$exercise$2e$json__$28$json$29$__["default"];
    const exercise = exercises.find((ex)=>ex.id === Number(id));
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        "index.html": exercise?.html || undefined,
        "styles.css": exercise?.css || undefined,
        "App.tsx": exercise?.app || undefined,
        "index.tsx": exercise?.index || undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCode({
            "index.html": exercise?.html || undefined,
            "styles.css": exercise?.css || undefined,
            "App.tsx": exercise?.app || undefined,
            "index.tsx": exercise?.index || undefined
        });
    }, [
        exercise
    ]);
    // console.log("code", code);
    // console.log("exercise", exercise);
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!exercise) {
            console.log("exercise", exercise);
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("typeof window", "undefined");
            return;
        }
        //TURBOPACK unreachable
        ;
        const key = undefined;
        const saved = undefined;
    }, [
        exercise,
        setCode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!exercise) return;
        if (!initialized) return;
        const key = `exercise-${exercise.id}`;
        localStorage.setItem(key, JSON.stringify(code));
        console.log("сохранили изменения в localStorage", key, code);
    }, [
        code,
        exercise,
        initialized
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans grid grid-rows-[20px_1fr_20px] items-center p-8 pb-20 gap-16 sm:p-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl",
                        children: exercise?.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowRotateLeft"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                " назад"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 text-gray-400 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbCodeCircleFilled"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            exercise?.theme
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiFireFill"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            exercise?.dificult
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiClock"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            exercise?.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-100 dark:bg-blue-950 p-5 my-5 rounded-xl",
                                children: exercise?.requirements
                            }, void 0, false, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$codeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            code: code,
                            exercise: exercise,
                            setCode: setCode,
                            onChange: (newCode)=>setCode(newCode)
                        }, void 0, false, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$brawser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            code: code,
                            setCode: setCode
                        }, void 0, false, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/exercise/[id]/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8d6fbf48._.js.map