(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/exercise.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"theme\":\"UI coding\",\"title\":\"Counter (Счётчик)\",\"dificult\":\"Лёгкая\",\"time\":\"5 min\",\"note\":\"Это короткий разминочный вопрос, который поможет тебе привыкнуть к рабочему пространству для кодинга. Реальные UI-вопросы на интервью будут сложнее.\",\"requirements\":\"Сделать так, чтобы текст внутри кнопки отображал количество раз, сколько по ней кликнули.\",\"javascript\":\"import { useState } from 'react';\\n\\n// This is a warm up question to help you\\n// get familiar with the editor.\\n// Most of the code has been filled in for you.\\nexport default function App() {\\n  const [count, setCount] = useState(0);\\n\\n  return (\\n    <div>\\n      <button\\n\\n      onClick={() => {\\n          // Fix the bug in the next line\\n          // to complete the question.\\n          setCount(count + 1);\\n        }}>\\n        Clicks: {count}\\n      </button>\\n    </div>\\n  );\\n}\",\"html\":\"<>\",\"css\":\"<>\",\"tsx\":\"<>\"}]"));}),
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
    let { exercise, jsValue, tsxValue, htmlValue, cssValue } = param;
    _s();
    const [activeLang, setActiveLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("javascript");
    const [userCode, setUserCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        javascript: "",
        html: "",
        css: "",
        tsx: ""
    });
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dracula");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if (exercise) {
                const initial = {
                    html: "",
                    css: "",
                    javascript: "",
                    tsx: ""
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
                const saved = localStorage.getItem("exercise-".concat(exercise.id));
                if (saved) {
                    setUserCode(JSON.parse(saved));
                } else {
                    setUserCode(initial);
                }
            }
        }
    }["CodeEditor.useEffect"], [
        exercise
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if (Object.values(userCode).some({
                "CodeEditor.useEffect": (val)=>val
            }["CodeEditor.useEffect"])) {
                localStorage.setItem("exercise-".concat(exercise === null || exercise === void 0 ? void 0 : exercise.id), JSON.stringify(userCode));
            }
        }
    }["CodeEditor.useEffect"], [
        userCode,
        exercise
    ]);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("script.js");
    const files = {
        "script.js": {
            name: "script.js",
            language: "javascript",
            value: jsValue
        },
        "script.tsx": {
            name: "script.tsx",
            language: "typescript",
            value: tsxValue
        },
        "style.css": {
            name: "style.css",
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
        var _exercise_html, _exercise_css, _exercise_javascript, _exercise_tsx;
        return {
            html: (_exercise_html = exercise.html) !== null && _exercise_html !== void 0 ? _exercise_html : "",
            css: (_exercise_css = exercise.css) !== null && _exercise_css !== void 0 ? _exercise_css : "",
            javascript: (_exercise_javascript = exercise.javascript) !== null && _exercise_javascript !== void 0 ? _exercise_javascript : "",
            tsx: (_exercise_tsx = exercise.tsx) !== null && _exercise_tsx !== void 0 ? _exercise_tsx : ""
        };
    }
    const handlerClean = (e)=>{
        if (!exercise) return;
        const initial = getInitialCode(exercise);
        // 1. Убираем сохранённое из localStorage
        localStorage.removeItem("exercise-".concat(exercise.id));
        // 2. Возвращаем код к исходному
        setUserCode(initial);
    };
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
                                className: "p-2 bg-gray-100 hover:bg-gray-200",
                                disabled: fileName === "script.js",
                                onClick: ()=>setFileName("script.js"),
                                children: "script.js"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 hover:bg-gray-200",
                                disabled: fileName === "script.tsx",
                                onClick: ()=>setFileName("script.tsx"),
                                children: "script.tsx"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 hover:bg-gray-200",
                                disabled: fileName === "style.css",
                                onClick: ()=>setFileName("style.css"),
                                children: "style.css"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-gray-100 hover:bg-gray-200",
                                disabled: fileName === "index.html",
                                onClick: ()=>setFileName("index.html"),
                                children: "index.html"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 182,
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
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-full",
                                onClick: handlerClean,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbWashDrycleanOff"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/codeEditor.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/codeEditor.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/codeEditor.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                height: "80vh",
                theme: theme,
                path: file.name,
                defaultLanguage: file.language,
                defaultValue: file.value,
                value: userCode[activeLang],
                onChange: (val)=>setUserCode((prev)=>({
                            ...prev,
                            [activeLang]: val || ""
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/components/codeEditor.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/codeEditor.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s(CodeEditor, "mR8iDei9E5lU23OsTyLD/1BRHF4=");
_c = CodeEditor;
var _c;
__turbopack_context__.k.register(_c, "CodeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/exercise/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/exercise/[id]/page.tsx'\n\nExpected ident");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_app_59f965d8._.js.map