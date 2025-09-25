(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/exercise.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\n\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n\\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"},{\"id\":2,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\n// This is a warm up question to help you\\n// get familiar with the editor.\\n// Most of the code has been filled in for you.\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n          // Fix the bug in the next line\\n          // to complete the question.\\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"},{\"id\":3,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n          \\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"}]"));}),
"[project]/src/app/components/codeEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$loader$2f$lib$2f$es$2f$loader$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__loader$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/loader/lib/es/loader/index.js [app-client] (ecmascript) <export default as loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$GitHub$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/GitHub.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Monokai$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Monokai.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Dracula$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Dracula.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$dark$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Solarized-dark.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$light$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Solarized-light.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Cobalt$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Cobalt.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Tomorrow$2d$Night$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-themes/themes/Tomorrow-Night.json (json)");
;
var _s = __turbopack_context__.k.signature();
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
const themes = {
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$GitHub$2e$json__$28$json$29$__["default"],
    monokai: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Monokai$2e$json__$28$json$29$__["default"],
    dracula: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Dracula$2e$json__$28$json$29$__["default"],
    "solarized-dark": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$dark$2e$json__$28$json$29$__["default"],
    "solarized-light": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Solarized$2d$light$2e$json__$28$json$29$__["default"],
    cobalt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Cobalt$2e$json__$28$json$29$__["default"],
    "tomorrow-night": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$themes$2f$themes$2f$Tomorrow$2d$Night$2e$json__$28$json$29$__["default"]
};
function CodeEditor(param) {
    let { code, exercise, setCode, onChange } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dracula");
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("App.js");
    // темы редактора
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$loader$2f$lib$2f$es$2f$loader$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__loader$3e$__["loader"].init().then({
                "CodeEditor.useEffect": (monacoInstance)=>{
                    Object.entries(themes).forEach({
                        "CodeEditor.useEffect": (param)=>{
                            let [name, themeData] = param;
                            monacoInstance.editor.defineTheme(name, themeData);
                        }
                    }["CodeEditor.useEffect"]);
                }
            }["CodeEditor.useEffect"]);
        }
    }["CodeEditor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("editorTheme");
                if (saved) setTheme(saved);
            }
        }
    }["CodeEditor.useEffect"], []);
    const handleThemeChange = (newTheme)=>{
        setTheme(newTheme);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("editorTheme", newTheme);
        }
    };
    const files = {
        "App.js": {
            name: "App.js",
            language: "javascript",
            value: code["App.js"] || ""
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
    // кнопка сброса
    function getInitialCode(exercise) {
        var _exercise_html, _exercise_css, _exercise_app;
        return {
            "index.html": (_exercise_html = exercise.html) !== null && _exercise_html !== void 0 ? _exercise_html : "",
            "styles.css": (_exercise_css = exercise.css) !== null && _exercise_css !== void 0 ? _exercise_css : "",
            "App.js": (_exercise_app = exercise.app) !== null && _exercise_app !== void 0 ? _exercise_app : ""
        };
    }
    const handlerClean = (e)=>{
        if (!exercise) return;
        const initial = getInitialCode(exercise);
        // 1. Убираем сохранённое из localStorage
        localStorage.removeItem("exercise-".concat(exercise.id));
        // 2. Возвращаем код к исходному
        setCode(initial);
    };
    const handleCodeChange = (val)=>{
        onChange({
            "index.html": activeFile === "index.html" ? val || undefined : code["index.html"],
            "styles.css": activeFile === "styles.css" ? val || undefined : code["styles.css"],
            "App.js": activeFile === "App.js" ? val || undefined : code["App.js"]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: Object.keys(files).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                                disabled: activeFile === f,
                                onClick: ()=>setActiveFile(f),
                                children: f
                            }, f, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gap-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: theme,
                                onChange: (e)=>handleThemeChange(e.target.value),
                                className: "border rounded p-1 w-48",
                                children: Object.keys(themes).map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: name,
                                        children: name
                                    }, name, false, {
                                        fileName: "[project]/src/app/components/codeEditor.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-full",
                                onClick: handlerClean,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbWashDrycleanOff"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/codeEditor.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                height: "50vh",
                theme: theme,
                path: files[activeFile].name,
                defaultLanguage: files[activeFile].language,
                defaultValue: files[activeFile].value,
                value: files[activeFile].value,
                onChange: handleCodeChange
            }, void 0, false, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/codeEditor.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(CodeEditor, "iImucpL607vSJ22IbhwO9hPYgMI=");
_c = CodeEditor;
var _c;
__turbopack_context__.k.register(_c, "CodeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/brawser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Brawser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/standalone/babel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.debounce/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Brawser(param) {
    let { code, setCode } = param;
    _s();
    function sanitizeReactCode(source) {
        return source// убираем import React или import * as React
        .replace(/import\s+(React|.*\*\s+as\s+React).*;\s*/g, "")// убираем import { useState } from 'react';
        .replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*/g, "")// убираем export default
        .replace(/export\s+default\s+/g, "");
    }
    const [compiledJS, setCompiledJS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Brawser.useMemo[run]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                "Brawser.useMemo[run]": ()=>{
                    try {
                        if (code["App.js"]) {
                            const sanitized = sanitizeReactCode(code["App.js"]);
                            const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"](sanitized, {
                                filename: "file.js",
                                presets: [
                                    "react",
                                    "env"
                                ]
                            }).code;
                            setCompiledJS(result || "");
                        }
                    } catch (err) {
                        console.error("Ошибка компиляции TSX:", err);
                        setCompiledJS("");
                    }
                }
            }["Brawser.useMemo[run]"], 300)
    }["Brawser.useMemo[run]"], [
        code
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Brawser.useEffect": ()=>{
            run(); // используем
            return ({
                "Brawser.useEffect": ()=>{
                    run.cancel(); // чистим при размонтировании
                }
            })["Brawser.useEffect"];
        }
    }["Brawser.useEffect"], [
        run
    ]);
    const srcDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Brawser.useMemo[srcDoc]": ()=>{
            return '\n      <!DOCTYPE html>\n      <html lang="en">\n        <head>\n          <meta charset="UTF-8" />\n          <style>'.concat(code["styles.css"], "</style>\n        </head>\n        <body>\n          ").concat(code["index.html"] || "<div id='root'></div>", '\n          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>\n          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>\n          <script>\n          const { useState, StrictMode } = React;\n            const { createRoot } = ReactDOM;\n            try {\n              ').concat(compiledJS, '\n              if (typeof App !== "undefined") {\n                const root = document.getElementById("root");\n                ReactDOM.createRoot(root).render(React.createElement(App));\n              }\n            } catch (e) {\n              document.body.innerHTML += \'<pre style="color:red">\' + e + \'</pre>\';\n            }\n          </script>\n        </body>\n      </html>\n    ');
        }
    }["Brawser.useMemo[srcDoc]"], [
        code,
        compiledJS
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
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
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(Brawser, "TtACE8eearsTvAGluKBvYZf1vrI=");
_c = Brawser;
var _c;
__turbopack_context__.k.register(_c, "Brawser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/exercise/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExercisePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$exercise$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/data/exercise.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$codeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/codeEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$brawser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/brawser.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ExercisePage(param) {
    let { params } = param;
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const exercises = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$exercise$2e$json__$28$json$29$__["default"];
    const exercise = exercises.find((ex)=>ex.id === Number(id));
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "index.html": (exercise === null || exercise === void 0 ? void 0 : exercise.html) || undefined,
        "styles.css": (exercise === null || exercise === void 0 ? void 0 : exercise.css) || undefined,
        "App.js": (exercise === null || exercise === void 0 ? void 0 : exercise.app) || undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExercisePage.useEffect": ()=>{
            setCode({
                "index.html": (exercise === null || exercise === void 0 ? void 0 : exercise.html) || undefined,
                "styles.css": (exercise === null || exercise === void 0 ? void 0 : exercise.css) || undefined,
                "App.js": (exercise === null || exercise === void 0 ? void 0 : exercise.app) || undefined
            });
        }
    }["ExercisePage.useEffect"], [
        exercise
    ]);
    // console.log("code", code);
    // console.log("exercise", exercise);
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExercisePage.useEffect": ()=>{
            if (!exercise) {
                console.log("exercise", exercise);
                return;
            }
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const key = "exercise-".concat(exercise.id);
            const saved = localStorage.getItem(key);
            console.log("key", key, "saved", saved);
            if (saved) {
                setCode(JSON.parse(saved));
                console.log("есть сохраненное");
            } else {
                var _exercise_html, _exercise_css, _exercise_app;
                const initial = {
                    "index.html": (_exercise_html = exercise.html) !== null && _exercise_html !== void 0 ? _exercise_html : "",
                    "styles.css": (_exercise_css = exercise.css) !== null && _exercise_css !== void 0 ? _exercise_css : "",
                    "App.js": (_exercise_app = exercise.app) !== null && _exercise_app !== void 0 ? _exercise_app : ""
                };
                setCode(initial);
                console.log("нет сохраненного, ставим:", initial);
            }
            // выставляем флаг ТОЛЬКО после загрузки из localStorage/инициализации
            setInitialized(true);
        }
    }["ExercisePage.useEffect"], [
        exercise,
        setCode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExercisePage.useEffect": ()=>{
            if (!exercise) return;
            if (!initialized) return;
            const key = "exercise-".concat(exercise.id);
            localStorage.setItem(key, JSON.stringify(code));
            console.log("сохранили изменения в localStorage", key, code);
        }
    }["ExercisePage.useEffect"], [
        code,
        exercise,
        initialized
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans grid grid-rows-[20px_1fr_20px] items-center p-8 pb-20 gap-16 sm:p-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl",
                        children: exercise === null || exercise === void 0 ? void 0 : exercise.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowRotateLeft"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                " назад"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 text-gray-400 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbCodeCircleFilled"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            exercise === null || exercise === void 0 ? void 0 : exercise.theme
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiFireFill"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            exercise === null || exercise === void 0 ? void 0 : exercise.dificult
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiClock"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            exercise === null || exercise === void 0 ? void 0 : exercise.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-100 dark:bg-blue-950 p-5 my-5 rounded-xl",
                                children: exercise === null || exercise === void 0 ? void 0 : exercise.requirements
                            }, void 0, false, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$codeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            code: code,
                            exercise: exercise,
                            setCode: setCode,
                            onChange: (newCode)=>setCode(newCode)
                        }, void 0, false, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$brawser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            code: code,
                            setCode: setCode
                        }, void 0, false, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/exercise/[id]/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(ExercisePage, "FFDn81VYpVE/Nbj+vQHX4BI6ZkI=");
_c = ExercisePage;
var _c;
__turbopack_context__.k.register(_c, "ExercisePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_74d016e7._.js.map