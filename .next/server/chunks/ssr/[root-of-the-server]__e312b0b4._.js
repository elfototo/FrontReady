module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/data/exercise.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"app\":\"import { useState } from 'react';\\n\\n// Это разминочный вопрос, который поможет тебе\\n// познакомиться с редактором.\\n// Большая часть кода уже заполнена за тебя.\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n        onClick={() => {\\n          // Исправь ошибку в следующей строке, \\n          // чтобы завершить задание.\\n          setCount(count - 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<!doctype html>\\n<html lang='en'>\\n  <head>\\n    <meta charset='UTF-8' />\\n    <meta\\n      name='viewport'\\n      content='width=device-width, initial-scale=1.0' />\\n  </head>\\n  <body>\\n    <div id='root'></div>\\n  </body>\\n</html>\",\"css\":\"body {\\n  font-family: sans-serif;\\n}\",\"tests\":[{\"description\":\"Один клик увеличивает значение на 1\",\"query\":\"button\",\"clicks\":1,\"type\":\"increment\"}]}]"));}),
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
function CodeEditor({ code, exercise, setCode, onChange }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dracula");
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("App.js");
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
        return {
            "index.html": exercise.html ?? "",
            "styles.css": exercise.css ?? "",
            "App.js": exercise.app ?? ""
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
            "App.js": activeFile === "App.js" ? val || undefined : code["App.js"]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between flex-wrap",
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
                                lineNumber: 152,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 150,
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
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-full",
                                onClick: handlerClean,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbWashDrycleanOff"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/codeEditor.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                height: "70vh",
                theme: theme,
                path: files[activeFile].name,
                defaultLanguage: files[activeFile].language,
                defaultValue: files[activeFile].value,
                value: files[activeFile].value,
                onChange: handleCodeChange
            }, void 0, false, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/codeEditor.tsx",
        lineNumber: 148,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.debounce/index.js [app-ssr] (ecmascript)");
"use client";
;
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
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
            try {
                if (code["App.js"]) {
                    const sanitized = sanitizeReactCode(code["App.js"]);
                    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$standalone$2f$babel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"](sanitized, {
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
        }, 300), [
        code
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        run(); // используем
        return ()=>{
            run.cancel(); // чистим при размонтировании
        };
    }, [
        run
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
        id: "preview",
        title: "preview",
        srcDoc: srcDoc,
        sandbox: "allow-scripts allow-same-origin",
        width: "100%",
        height: "100%",
        style: {
            borderRadius: "8px"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/brawser.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/runTests.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runTests",
    ()=>runTests
]);
async function runTests(tests) {
    console.groupCollapsed(`[runTests] start — ${new Date().toLocaleTimeString()}`);
    console.log("tests:", JSON.parse(JSON.stringify(tests)));
    // helper
    const tick = (ms = 50)=>new Promise((r)=>setTimeout(r, ms));
    const parseNumberFromText = (text)=>{
        const m = text.match(/-?\d+/);
        return m ? parseInt(m[0], 10) : null;
    };
    const iframe = document.getElementById("preview");
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
    const results = [];
    for (const t of tests){
        console.groupCollapsed(`[test] ${t.description}`);
        console.log("selector:", t.query, "clicks:", t.clicks ?? 0, "type:", t.type ?? "equals", "expectText:", t.expectText);
        const res = {
            description: t.description,
            pass: false
        };
        try {
            const el = doc.querySelector(t.query);
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
            for(let i = 0; i < clicks; i++){
                el.dispatchEvent(new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true
                }));
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
    const passed = results.filter((r)=>r.pass).length;
    console.log(`[runTests] finished — passed ${passed}/${results.length}`);
    console.groupEnd();
    return results;
}
}),
"[project]/src/app/components/testsConsole.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestsConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$drag$2d$sizing$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-drag-sizing/dist/index.es.js [app-ssr] (ecmascript)");
;
;
;
function TestsConsole({ code, exercise, results = [] }) {
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const srcDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Рендерим список результатов прямо в HTML iframe
        const resultHTML = results.length === 0 ? `<p style="color:gray;">Нет результатов</p>` : results.map((r)=>`
              <div style="margin:4px 0; font-family: monospace; color:${r.pass ? "green" : "red"}">
                ${r.pass ? "✅" : "❌"} ${r.description}
                ${!r.pass && r.error ? `<div style="color:#555;">${r.error}</div>` : ""}
              </div>
            `).join("");
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
    }, [
        results
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white rounded-b-xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end p-2 bg-slate-200 border-y-1 border-slate-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-white px-2 rounded-xl",
                    onClick: ()=>setCollapsed(!collapsed),
                    children: collapsed ? "Открыть" : "Закрыть"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/testsConsole.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/testsConsole.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$drag$2d$sizing$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragSizing"], {
                direction: "vertical",
                defaultSize: 200,
                minSize: 100,
                maxSize: 500,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    id: "tests",
                    title: "tests",
                    srcDoc: srcDoc,
                    sandbox: "allow-scripts allow-same-origin",
                    width: "100%",
                    height: "100%",
                    style: {
                        backgroundColor: "#f8fafc"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/testsConsole.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/testsConsole.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/testsConsole.tsx",
        lineNumber: 85,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$runTests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/runTests.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$testsConsole$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/testsConsole.tsx [app-ssr] (ecmascript)");
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
;
function ExercisePage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const exercises = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$exercise$2e$json__$28$json$29$__["default"];
    const exercise = exercises.find((ex)=>ex.id === Number(id));
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        "index.html": exercise?.html || undefined,
        "styles.css": exercise?.css || undefined,
        "App.js": exercise?.app || undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCode({
            "index.html": exercise?.html || undefined,
            "styles.css": exercise?.css || undefined,
            "App.js": exercise?.app || undefined
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
    const [testResults, setTestResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleCheck = async ()=>{
        if (!exercise?.tests) {
            console.log("Нет тестов для этого упражнения");
            return;
        }
        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$runTests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runTests"])(exercise.tests);
        setTestResults(results); // сохраняем в state
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative font-sans px-16 mt-10 h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl",
                        children: exercise?.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 128,
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
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                " назад"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 text-slate-400 whitespace-nowrap flex-wrap mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbCodeCircleFilled"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            exercise?.theme
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiFireFill"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            exercise?.dificult
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiClock"], {}, void 0, false, {
                                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            exercise?.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-100 dark:bg-blue-950 p-5 my-5 rounded-xl",
                                children: exercise?.requirements
                            }, void 0, false, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex gap-5 h-full mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$codeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    code: code,
                                    exercise: exercise,
                                    setCode: setCode,
                                    onChange: (newCode)=>setCode(newCode)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 relative border-1 border-slate-300 rounded-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$brawser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        code: code,
                                        setCode: setCode
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$testsConsole$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            code: code,
                                            exercise: exercise,
                                            results: testResults
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exercise/[id]/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 w-full h-20 bg-slate-200 flex justify-end items-center px-16 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-2 bg-white cursor-pointer rounded-xl",
                    onClick: handleCheck,
                    children: "Проверть"
                }, void 0, false, {
                    fileName: "[project]/src/app/exercise/[id]/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/exercise/[id]/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/exercise/[id]/page.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e312b0b4._.js.map