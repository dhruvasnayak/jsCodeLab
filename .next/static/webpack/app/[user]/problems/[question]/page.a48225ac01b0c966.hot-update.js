"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[user]/problems/[question]/page",{

/***/ "(app-pages-browser)/./app/[user]/problems/[question]/page.js":
/*!************************************************!*\
  !*** ./app/[user]/problems/[question]/page.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Code() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Test Case Failed!\");\n    const qnData = {\n        qnid: 1,\n        qndesc: \"print hello world!\",\n        qnout: \"hello world!\"\n    };\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.qnout == capturedConsoleOutput) {\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main bg-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                value: qnData.qndesc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                placeholder: \"output\",\n                                readOnly: true,\n                                value: output\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2  \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"code-box\",\n                                width: \"840px\",\n                                height: \"460px\",\n                                value: code,\n                                options: {\n                                    mode: \"js\",\n                                    theme: \"dracula\"\n                                },\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleRunCode,\n                                            className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Run\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleSubmitCode,\n                                            className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Submit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 105,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_s(Code, \"bn8+Aj7UQncPtDWj0wy0ZO29YeI=\");\n_c = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2M7QUFDSDtBQUNXO0FBQ1I7QUFHL0MsU0FBU0s7O0lBRUwsTUFBTUMsVUFBVSxJQUFNRixxREFBS0EsQ0FBQztJQUM1QixNQUFNRyxVQUFVLElBQU1ILHFEQUFLQSxDQUFDO0lBRTVCLE1BQU1JLFNBQVM7UUFDWEMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQU87SUFDWDtJQUVBLElBQUlDO0lBQ0osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUM7SUFFckMsTUFBTWlCLGVBQWUsQ0FBQ0M7UUFDbEJKLFFBQVFJO0lBQ1o7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFFdEIsSUFBSTtZQUNBUix3QkFBd0I7WUFDeEIsTUFBTVMscUJBQXFCQyxRQUFRQyxHQUFHO1lBRXRDRCxRQUFRQyxHQUFHLEdBQUcsQ0FBQ0M7Z0JBQ1haLHlCQUF5Qlk7WUFDN0I7WUFDQUMsS0FBS1o7WUFDTFMsUUFBUUMsR0FBRyxHQUFHRjtZQUVkTCxVQUFVSjtRQUVkLEVBQUUsT0FBT2MsT0FBTztZQUNaVixVQUFVLFVBQXdCLE9BQWRVLE1BQU1GLE9BQU87UUFDckM7UUFFQSxJQUFJaEIsT0FBT0csS0FBSyxJQUFJQyx1QkFBdUI7WUFDdkNOO1FBQ0osT0FDSztZQUNEQztRQUNKO0lBRUo7SUFDQSxNQUFNb0IsZ0JBQWdCLENBQUNQO1FBQ25CLElBQUk7WUFDQVIsd0JBQXdCO1lBQ3hCLE1BQU1TLHFCQUFxQkMsUUFBUUMsR0FBRztZQUN0Q0QsUUFBUUMsR0FBRyxHQUFHLENBQUNDO2dCQUNYWix5QkFBeUJZO1lBQzdCO1lBQ0FDLEtBQUtaO1lBRUxTLFFBQVFDLEdBQUcsR0FBR0Y7WUFFZEwsVUFBVUo7UUFFZCxFQUFFLE9BQU9jLE9BQU87WUFDWlYsVUFBVSxVQUF3QixPQUFkVSxNQUFNRixPQUFPO1FBQ3JDO0lBR0o7SUFHQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7OzBDQUNHLDhEQUFDRTtnQ0FBU0QsV0FBVTtnQ0FBZ0RFLE9BQU92QixPQUFPRSxNQUFNOzs7Ozs7MENBRXhGLDhEQUFDb0I7Z0NBQVNELFdBQVU7Z0NBQWdERyxhQUFZO2dDQUFTQyxRQUFRO2dDQUFDRixPQUFPaEI7Ozs7Ozs7Ozs7OztrQ0FHN0csOERBQUNhO3dCQUFJQyxXQUFVOzswQ0FFWCw4REFBQzVCLDZEQUFVQTtnQ0FBQzRCLFdBQVU7Z0NBQ2xCSyxPQUFNO2dDQUNOQyxRQUFPO2dDQUNQSixPQUFPbEI7Z0NBQ1B1QixTQUFTO29DQUNMQyxNQUFNO29DQUNOQyxPQUFPO2dDQUNYO2dDQUNBQyxVQUFVdEI7Ozs7OzswQ0FFZCw4REFBQ1c7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0Q7NENBQUlZLFNBQVNiOzRDQUFlRSxXQUFVO3NEQUNuQyw0RUFBQ1k7MERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR2pCLDhEQUFDYjt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0Q7NENBQUlZLFNBQVNyQjs0Q0FBa0JVLFdBQVU7c0RBQ3RDLDRFQUFDWTswREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRN0IsOERBQUNiO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDs7Ozs7Ozs7OzswQkFLTCw4REFBQ3pCLDBEQUFjQTs7Ozs7Ozs7Ozs7QUFLM0I7R0FsSFNFO0tBQUFBO0FBb0hULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzPzc1NTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdAdWl3L3JlYWN0LWNvZGVtaXJyb3InO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcblxyXG5mdW5jdGlvbiBDb2RlKCkge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmeTEgPSAoKSA9PiB0b2FzdCgnVEVTVCBDQVNFIFBBU1NFRCEnKTtcclxuICAgIGNvbnN0IG5vdGlmeTIgPSAoKSA9PiB0b2FzdChcIlRlc3QgQ2FzZSBGYWlsZWQhXCIpO1xyXG5cclxuICAgIGNvbnN0IHFuRGF0YSA9IHtcclxuICAgICAgICBxbmlkOiAxLFxyXG4gICAgICAgIHFuZGVzYzogXCJwcmludCBoZWxsbyB3b3JsZCFcIixcclxuICAgICAgICBxbm91dDogXCJoZWxsbyB3b3JsZCFcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2FwdHVyZWRDb25zb2xlT3V0cHV0O1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJ2NvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld0NvZGUpID0+IHtcclxuICAgICAgICBzZXRDb2RlKG5ld0NvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRDb2RlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ICs9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxbkRhdGEucW5vdXQgPT0gY2FwdHVyZWRDb25zb2xlT3V0cHV0KSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgKz0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4gYmctZ3JheS00MDAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgdmFsdWU9e3FuRGF0YS5xbmRlc2N9ID5cclxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgcGxhY2Vob2xkZXI9J291dHB1dCcgcmVhZE9ubHkgdmFsdWU9e291dHB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMiAgJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvZGVNaXJyb3IgY2xhc3NOYW1lPSdjb2RlLWJveCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9Jzg0MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ2MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2pzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnZHJhY3VsYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVJ1bkNvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHctWzMwMHB4XSBwLTEgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5SdW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlU3VibWl0Q29kZX0gY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVszMDBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29kZU1pcnJvciIsInVzZVBhcmFtcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJDb2RlIiwibm90aWZ5MSIsIm5vdGlmeTIiLCJxbkRhdGEiLCJxbmlkIiwicW5kZXNjIiwicW5vdXQiLCJjYXB0dXJlZENvbnNvbGVPdXRwdXQiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldFJlc3VsdCIsImhhbmRsZUNoYW5nZSIsIm5ld0NvZGUiLCJoYW5kbGVTdWJtaXRDb2RlIiwiZSIsIm9yaWdpbmFsQ29uc29sZUxvZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXZhbCIsImVycm9yIiwiaGFuZGxlUnVuQ29kZSIsImRpdiIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwibW9kZSIsInRoZW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/problems/[question]/page.js\n"));

/***/ })

});