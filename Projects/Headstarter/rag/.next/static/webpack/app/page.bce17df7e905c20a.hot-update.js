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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi, I'm the Rate My Professor support assistant. How can I help you today?\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const sendMessage = async ()=>{\n        // Optimistically update the state\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        setMessage(\"\"); // Clear the input field\n        try {\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    ...messages,\n                    {\n                        role: \"user\",\n                        content: message\n                    }\n                ])\n            });\n            if (response.body) {\n                const reader = response.body.getReader();\n                const decoder = new TextDecoder();\n                let result = \"\";\n                const processText = async (param)=>{\n                    let { done, value } = param;\n                    if (done) {\n                        return result;\n                    }\n                    const text = decoder.decode(value || new Uint8Array(), {\n                        stream: true\n                    });\n                    result += text;\n                    setMessages((prevMessages)=>{\n                        const lastMessage = prevMessages[prevMessages.length - 1];\n                        const otherMessages = prevMessages.slice(0, prevMessages.length - 1);\n                        return [\n                            ...otherMessages,\n                            {\n                                ...lastMessage,\n                                content: lastMessage.content + text\n                            }\n                        ];\n                    });\n                    const { done: readerDone, value: readerValue } = await reader.read();\n                    return processText({\n                        done: readerDone,\n                        value: readerValue\n                    });\n                };\n                await reader.read().then(processText);\n            }\n        } catch (error) {\n            console.error(\"Error sending message:\", error);\n        // Handle the error gracefully, e.g., show an error message\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-svh flex justify-center align-middle m-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-3/4 h-5/6 border p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-auto max-h-full\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center \".concat(message.role === \"assistant\" ? \"justify-start\" : \"justify-end\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white p-2 rounded-md \".concat(message.role === \"assistant\" ? \"bg-red-400\" : \"bg-blue-400\"),\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"flex-row space-x-3 w-1/2 border p-4\",\n                    value: message,\n                    onChange: (e)=>{\n                        setMessage(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                    onClick: sendMessage,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Projects\\\\Headstarter-2\\\\Headstarter\\\\Projects\\\\Headstarter\\\\rag\\\\app\\\\page.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"DKTJecn4y/Qnh/QPzvpBBRoCs6I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FBTVQ7R0E3R3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8YW55PihbXG4gICAge1xuICAgICAgcm9sZTogXCJhc3Npc3RhbnRcIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiSGksIEknbSB0aGUgUmF0ZSBNeSBQcm9mZXNzb3Igc3VwcG9ydCBhc3Npc3RhbnQuIEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheT9cIixcbiAgICB9LFxuICBdKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gT3B0aW1pc3RpY2FsbHkgdXBkYXRlIHRoZSBzdGF0ZVxuICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4gW1xuICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9LFxuICAgICAgeyByb2xlOiBcImFzc2lzdGFudFwiLCBjb250ZW50OiBcIlwiIH0sXG4gICAgXSk7XG5cbiAgICBzZXRNZXNzYWdlKFwiXCIpOyAvLyBDbGVhciB0aGUgaW5wdXQgZmllbGRcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jaGF0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgICAgLi4ubWVzc2FnZXMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1RleHQgPSBhc3luYyAoeyBkb25lLCB2YWx1ZSB9OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGRlY29kZXIuZGVjb2RlKHZhbHVlIHx8IG5ldyBVaW50OEFycmF5KCksIHtcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXN1bHQgKz0gdGV4dDtcblxuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdE1lc3NhZ2UgPSBwcmV2TWVzc2FnZXNbcHJldk1lc3NhZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJNZXNzYWdlcyA9IHByZXZNZXNzYWdlcy5zbGljZShcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgcHJldk1lc3NhZ2VzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAuLi5vdGhlck1lc3NhZ2VzLFxuICAgICAgICAgICAgICB7IC4uLmxhc3RNZXNzYWdlLCBjb250ZW50OiBsYXN0TWVzc2FnZS5jb250ZW50ICsgdGV4dCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHsgZG9uZTogcmVhZGVyRG9uZSwgdmFsdWU6IHJlYWRlclZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICAgIHJldHVybiBwcm9jZXNzVGV4dCh7IGRvbmU6IHJlYWRlckRvbmUsIHZhbHVlOiByZWFkZXJWYWx1ZSB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCByZWFkZXIucmVhZCgpLnRoZW4ocHJvY2Vzc1RleHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBtZXNzYWdlOlwiLCBlcnJvcik7XG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGdyYWNlZnVsbHksIGUuZy4sIHNob3cgYW4gZXJyb3IgbWVzc2FnZVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc3ZoIGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIG0tMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgaC01LzYgYm9yZGVyIHAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gbWF4LWgtZnVsbFwiPlxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9IC8vIEFkZCBhIHVuaXF1ZSBrZXkgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyICR7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCJqdXN0aWZ5LXN0YXJ0XCIgOiBcImp1c3RpZnktZW5kXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvbGUgPT09IFwiYXNzaXN0YW50XCIgPyBcImJnLXJlZC00MDBcIiA6IFwiYmctYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXJvdyBzcGFjZS14LTMgdy0xLzIgYm9yZGVyIHAtNFwiXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgU2VuZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwicmVzdWx0IiwicHJvY2Vzc1RleHQiLCJkb25lIiwidmFsdWUiLCJ0ZXh0IiwiZGVjb2RlIiwiVWludDhBcnJheSIsInN0cmVhbSIsImxhc3RNZXNzYWdlIiwibGVuZ3RoIiwib3RoZXJNZXNzYWdlcyIsInNsaWNlIiwicmVhZGVyRG9uZSIsInJlYWRlclZhbHVlIiwicmVhZCIsInRoZW4iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});