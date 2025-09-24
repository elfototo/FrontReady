(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/exercise.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\n// This is a warm up question to help you\\n// get familiar with the editor.\\n// Most of the code has been filled in for you.\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n          // Fix the bug in the next line\\n          // to complete the question.\\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"index\":\"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\n\\nimport App from './App';\\n\\nimport './styles.css';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>,\\n);\"}]"));}),
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
    let { code, exercise, jsValue, tsxValue, htmlValue, cssValue, setCode, onChange } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dracula");
    const [activeLang, setActiveLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("App.tsx");
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
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("App.tsx");
    const files = {
        "App.tsx": {
            name: "App.tsx",
            language: "javascript",
            value: jsValue
        },
        "index.tsx": {
            name: "index.tsx",
            language: "typescript",
            value: tsxValue
        },
        "styles.css": {
            name: "styles.css",
            language: "css",
            value: cssValue
        },
        "index.html": {
            name: "index.html",
            language: "html",
            value: htmlValue
        }
    };
    const file = files[fileName];
    function getInitialCode(exercise) {
        var _exercise_html, _exercise_css, _exercise_app, _exercise_index;
        return {
            "index.html": (_exercise_html = exercise.html) !== null && _exercise_html !== void 0 ? _exercise_html : "",
            "styles.css": (_exercise_css = exercise.css) !== null && _exercise_css !== void 0 ? _exercise_css : "",
            "App.tsx": (_exercise_app = exercise.app) !== null && _exercise_app !== void 0 ? _exercise_app : "",
            "index.tsx": (_exercise_index = exercise.index) !== null && _exercise_index !== void 0 ? _exercise_index : ""
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
            "index.html": activeLang === "index.html" ? val || "" : htmlValue,
            "styles.css": activeLang === "styles.css" ? val || "" : cssValue,
            "App.tsx": activeLang === "App.tsx" ? val || "" : jsValue,
            "index.tsx": activeLang === "index.tsx" ? val || "" : tsxValue
        });
    };
    const fileMap = {
        "App.tsx": {
            language: "javascript",
            value: jsValue
        },
        "index.tsx": {
            language: "typescript",
            value: tsxValue
        },
        "styles.css": {
            language: "css",
            value: cssValue
        },
        "index.html": {
            language: "html",
            value: htmlValue
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if (Object.values(code).some({
                "CodeEditor.useEffect": (val)=>val
            }["CodeEditor.useEffect"])) {
                localStorage.setItem("exercise-".concat(exercise === null || exercise === void 0 ? void 0 : exercise.id), JSON.stringify(code));
            }
        }
    }["CodeEditor.useEffect"], [
        code,
        exercise
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if (exercise) {
                const initial = {
                    "index.html": "",
                    "styles.css": "",
                    "App.tsx": "",
                    "index.tsx": ""
                };
                if (exercise.app) {
                    initial["App.tsx"] = exercise.app;
                }
                if (exercise.html) {
                    initial["index.html"] = exercise.html;
                }
                if (exercise.css) {
                    initial["styles.css"] = exercise.css;
                }
                if (exercise.index) {
                    initial["index.tsx"] = exercise.index;
                }
                const saved = localStorage.getItem("exercise-".concat(exercise.id));
                if (saved) {
                    setCode(JSON.parse(saved));
                } else {
                    setCode(initial);
                }
            }
        }
    }["CodeEditor.useEffect"], [
        exercise,
        setCode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                                disabled: fileName === "App.tsx",
                                onClick: ()=>setFileName("App.tsx"),
                                children: "App.tsx"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                                disabled: fileName === "index.tsx",
                                onClick: ()=>setFileName("index.tsx"),
                                children: "index.tsx"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                                disabled: fileName === "styles.css",
                                onClick: ()=>setFileName("styles.css"),
                                children: "styles.css"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                                disabled: fileName === "index.html",
                                onClick: ()=>setFileName("index.html"),
                                children: "index.html"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 203,
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
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-full",
                                onClick: handlerClean,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbWashDrycleanOff"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/codeEditor.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                height: "50vh",
                theme: theme,
                path: file.name,
                defaultLanguage: file.language,
                defaultValue: file.value,
                value: fileMap[activeLang].value,
                onChange: handleCodeChange
            }, void 0, false, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/codeEditor.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(CodeEditor, "VEDNBrMhgYvh+4SJtVbb+NYP440=");
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Brawser(param) {
    let { code, exercise, jsValue, tsxValue, htmlValue, cssValue, setCode } = param;
    _s();
    function sanitizeReactCode(source) {
        return source// убираем import React или import * as React
        .replace(/import\s+(React|.*\*\s+as\s+React).*;\s*/g, "")// убираем import { useState } from 'react';
        .replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*/g, "")// убираем export default
        .replace(/export\s+default\s+/g, "");
    }
    const [compiledJS, setCompiledJS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Brawser.useEffect": ()=>{
            if (jsValue) {
                try {
                    const sanitized = sanitizeReactCode(jsValue);
                    console.log("sanitized", sanitized);
                    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"](sanitized, {
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
        }
    }["Brawser.useEffect"], [
        jsValue,
        setCompiledJS
    ]);
    const [compiledTSX, setCompiledTSX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Brawser.useEffect": ()=>{
            if (tsxValue) {
                try {
                    // Транспилируем TSX с React и TypeScript в JS
                    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"](tsxValue, {
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
        }
    }["Brawser.useEffect"], [
        tsxValue
    ]);
    const srcDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Brawser.useMemo[srcDoc]": ()=>{
            return '\n      <!DOCTYPE html>\n      <html lang="en">\n        <head>\n          <meta charset="UTF-8" />\n          <style>'.concat(cssValue || "", "</style>\n        </head>\n        <body>\n          ").concat(htmlValue || "<div id='root'></div>", '\n          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>\n          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>\n          <script>\n          const { useState, StrictMode } = React;\n            const { createRoot } = ReactDOM;\n            try {\n              ').concat(compiledJS, '\n              if (typeof App !== "undefined") {\n                const root = document.getElementById("root");\n                ReactDOM.createRoot(root).render(React.createElement(App));\n              }\n            } catch (e) {\n              document.body.innerHTML += \'<pre style="color:red">\' + e + \'</pre>\';\n            }\n          </script>\n        </body>\n      </html>\n    ');
        }
    }["Brawser.useMemo[srcDoc]"], [
        htmlValue,
        cssValue,
        compiledJS
    ]);
    console.log("srcDoc", srcDoc);
    console.log("compiledJS", compiledJS);
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
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(Brawser, "cNzInrcKkOAtNMaeKn+mUyin2Rg=");
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
        "App.tsx": (exercise === null || exercise === void 0 ? void 0 : exercise.app) || undefined,
        "index.tsx": (exercise === null || exercise === void 0 ? void 0 : exercise.index) || undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExercisePage.useEffect": ()=>{
            setCode({
                "index.html": (exercise === null || exercise === void 0 ? void 0 : exercise.html) || undefined,
                "styles.css": (exercise === null || exercise === void 0 ? void 0 : exercise.css) || undefined,
                "App.tsx": (exercise === null || exercise === void 0 ? void 0 : exercise.app) || undefined,
                "index.tsx": (exercise === null || exercise === void 0 ? void 0 : exercise.index) || undefined
            });
        }
    }["ExercisePage.useEffect"], [
        exercise
    ]);
    console.log("code", code);
    console.log("exercise", exercise);
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
                        lineNumber: 61,
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
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                " назад"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 60,
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
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            exercise === null || exercise === void 0 ? void 0 : exercise.theme
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiFireFill"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            exercise === null || exercise === void 0 ? void 0 : exercise.dificult
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiClock"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            exercise === null || exercise === void 0 ? void 0 : exercise.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-100 dark:bg-blue-950 p-5 my-5 rounded-xl",
                                children: exercise === null || exercise === void 0 ? void 0 : exercise.requirements
                            }, void 0, false, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$codeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            code: code,
                            exercise: exercise,
                            jsValue: code["App.tsx"],
                            tsxValue: code["index.tsx"],
                            htmlValue: code["index.html"],
                            cssValue: code["styles.css"],
                            setCode: setCode,
                            onChange: (newCode)=>setCode(newCode)
                        }, void 0, false, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$brawser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            code: code,
                            exercise: exercise,
                            jsValue: code["App.tsx"],
                            tsxValue: code["index.tsx"],
                            htmlValue: code["index.html"],
                            cssValue: code["styles.css"],
                            setCode: setCode
                        }, void 0, false, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/exercise/[id]/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ExercisePage, "PHTE28jSu5VRy99ZtXwXPd4T750=");
_c = ExercisePage;
var _c;
__turbopack_context__.k.register(_c, "ExercisePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_74d016e7._.js.map