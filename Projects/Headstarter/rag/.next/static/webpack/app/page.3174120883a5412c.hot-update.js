"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi, I'm the Rate My Professor support assistant. How can I help you today?\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const sendMessage = async ()=>{\n        // Optimistically update the state\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        setMessage(\"\"); // Clear the input field\n        try {\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    ...messages,\n                    {\n                        role: \"user\",\n                        content: message\n                    }\n                ])\n            });\n            if (response.body) {\n                const reader = response.body.getReader();\n                const decoder = new TextDecoder();\n                let result = \"\";\n                const processText = async (param)=>{\n                    let { done, value } = param;\n                    if (done) {\n                        return result;\n                    }\n                    const text = decoder.decode(value || new Uint8Array(), {\n                        stream: true\n                    });\n                    result += text;\n                    setMessages((prevMessages)=>{\n                        const lastMessage = prevMessages[prevMessages.length - 1];\n                        const otherMessages = prevMessages.slice(0, prevMessages.length - 1);\n                        return [\n                            ...otherMessages,\n                            {\n                                ...lastMessage,\n                                content: lastMessage.content + text\n                            }\n                        ];\n                    });\n                    const { done: readerDone, value: readerValue } = await reader.read();\n                    return processText({\n                        done: readerDone,\n                        value: readerValue\n                    });\n                };\n                await reader.read().then(processText);\n            }\n        } catch (error) {\n            console.error(\"Error sending message:\", error);\n        // Handle the error gracefully, e.g., show an error message\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-svh flex justify-center align-middle m-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-2/4 h-5/6 border p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-auto max-h-full\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center \".concat(message.role === \"assistant\" ? \"justify-start\" : \"justify-end\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white p-2 rounded-md \".concat(message.role === \"assistant\" ? \"bg-red-400 left-0\" : \"bg-blue-400\"),\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"flex-row space-x-3 w-1/2 border p-3 rounded-sm mr-3\",\n                    value: message,\n                    onChange: (e)=>{\n                        setMessage(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded\",\n                    onClick: sendMessage,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"DKTJecn4y/Qnh/QPzvpBBRoCs6I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQU1UO0dBL0d3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPGFueT4oW1xuICAgIHtcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIkhpLCBJJ20gdGhlIFJhdGUgTXkgUHJvZmVzc29yIHN1cHBvcnQgYXNzaXN0YW50LiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk/XCIsXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIE9wdGltaXN0aWNhbGx5IHVwZGF0ZSB0aGUgc3RhdGVcbiAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzOiBhbnkpID0+IFtcbiAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IG1lc3NhZ2UgfSxcbiAgICAgIHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogXCJcIiB9LFxuICAgIF0pO1xuXG4gICAgc2V0TWVzc2FnZShcIlwiKTsgLy8gQ2xlYXIgdGhlIGlucHV0IGZpZWxkXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2hhdFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICAgIC4uLm1lc3NhZ2VzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICAgICAgY29udGVudDogbWVzc2FnZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2UuYm9keSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NUZXh0ID0gYXN5bmMgKHsgZG9uZSwgdmFsdWUgfTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRleHQgPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSB8fCBuZXcgVWludDhBcnJheSgpLCB7XG4gICAgICAgICAgICBzdHJlYW06IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzdWx0ICs9IHRleHQ7XG5cbiAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RNZXNzYWdlID0gcHJldk1lc3NhZ2VzW3ByZXZNZXNzYWdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyTWVzc2FnZXMgPSBwcmV2TWVzc2FnZXMuc2xpY2UoXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHByZXZNZXNzYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgLi4ub3RoZXJNZXNzYWdlcyxcbiAgICAgICAgICAgICAgeyAuLi5sYXN0TWVzc2FnZSwgY29udGVudDogbGFzdE1lc3NhZ2UuY29udGVudCArIHRleHQgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCB7IGRvbmU6IHJlYWRlckRvbmUsIHZhbHVlOiByZWFkZXJWYWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc1RleHQoeyBkb25lOiByZWFkZXJEb25lLCB2YWx1ZTogcmVhZGVyVmFsdWUgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgcmVhZGVyLnJlYWQoKS50aGVuKHByb2Nlc3NUZXh0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgbWVzc2FnZTpcIiwgZXJyb3IpO1xuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBncmFjZWZ1bGx5LCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXN2aCBmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi80IGgtNS82IGJvcmRlciBwLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIG1heC1oLWZ1bGxcIj5cbiAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fSAvLyBBZGQgYSB1bmlxdWUga2V5IGZvciBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiA/IFwianVzdGlmeS1zdGFydFwiIDogXCJqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1yZWQtNDAwIGxlZnQtMFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtcm93IHNwYWNlLXgtMyB3LTEvMiBib3JkZXIgcC0zIHJvdW5kZWQtc20gbXItM1wiXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMyBweC00IHJvdW5kZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgU2VuZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwicmVzdWx0IiwicHJvY2Vzc1RleHQiLCJkb25lIiwidmFsdWUiLCJ0ZXh0IiwiZGVjb2RlIiwiVWludDhBcnJheSIsInN0cmVhbSIsImxhc3RNZXNzYWdlIiwibGVuZ3RoIiwib3RoZXJNZXNzYWdlcyIsInNsaWNlIiwicmVhZGVyRG9uZSIsInJlYWRlclZhbHVlIiwicmVhZCIsInRoZW4iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});