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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Code() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Test Case Failed!\");\n    const qnData = {\n        qnid: 1,\n        qndesc: \"print hello world!\",\n        qnout: \"hello world!\"\n    };\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.qnout == capturedConsoleOutput) {\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main bg-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: qnData.qndesc,\n                        className: \"w-[350px] h-[250px] m-2 border-solid border-8 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"code-box\",\n                                width: \"800px\",\n                                height: \"460px\",\n                                value: code,\n                                options: {\n                                    mode: \"js\",\n                                    theme: \"dracula\"\n                                },\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleRunCode,\n                                            className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[250px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Run\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleSubmitCode,\n                                            className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[250px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Submit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"border-solid border-2 border-gray-900 \",\n                        placeholder: \"output\",\n                        rows: 5,\n                        cols: 70,\n                        readOnly: true,\n                        value: output,\n                        style: {\n                            whiteSpace: \"pre-wrap\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 111,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_s(Code, \"bn8+Aj7UQncPtDWj0wy0ZO29YeI=\");\n_c = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpQztBQUNjO0FBRVE7QUFDUjtBQUcvQyxTQUFTSTs7SUFFTCxNQUFNQyxVQUFVLElBQU1GLHFEQUFLQSxDQUFDO0lBQzVCLE1BQU1HLFVBQVUsSUFBTUgscURBQUtBLENBQUM7SUFFNUIsTUFBTUksU0FBUztRQUNYQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FBTztJQUNYO0lBRUEsSUFBS0M7SUFDTCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCSixRQUFRSTtJQUNaO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBRXRCLElBQUk7WUFDQVIsd0JBQXdCO1lBQ3hCLE1BQU1TLHFCQUFxQkMsUUFBUUMsR0FBRztZQUV0Q0QsUUFBUUMsR0FBRyxHQUFHLENBQUNDO2dCQUNYWix5QkFBeUJZO1lBQzdCO1lBQ0FDLEtBQUtaO1lBQ0xTLFFBQVFDLEdBQUcsR0FBR0Y7WUFFZEwsVUFBVUo7UUFFZCxFQUFFLE9BQU9jLE9BQU87WUFDWlYsVUFBVSxVQUF3QixPQUFkVSxNQUFNRixPQUFPO1FBQ3JDO1FBRUEsSUFBSWhCLE9BQU9HLEtBQUssSUFBSUMsdUJBQXVCO1lBQ3ZDTjtRQUNKLE9BQ0s7WUFDREM7UUFDSjtJQUVKO0lBQ0EsTUFBTW9CLGdCQUFnQixDQUFDUDtRQUNuQixJQUFJO1lBQ0FSLHdCQUF3QjtZQUN4QixNQUFNUyxxQkFBcUJDLFFBQVFDLEdBQUc7WUFDdENELFFBQVFDLEdBQUcsR0FBRyxDQUFDQztnQkFDWFoseUJBQXlCWTtZQUM3QjtZQUNBQyxLQUFLWjtZQUVMUyxRQUFRQyxHQUFHLEdBQUdGO1lBRWRMLFVBQVVKO1FBRWQsRUFBRSxPQUFPYyxPQUFPO1lBQ1pWLFVBQVUsVUFBd0IsT0FBZFUsTUFBTUYsT0FBTztRQUNyQztJQUdKO0lBR0EscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFTQyxPQUFPdkIsT0FBT0UsTUFBTTt3QkFBRW1CLFdBQVU7Ozs7OztrQ0FFMUMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFWCw4REFBQzNCLDZEQUFVQTtnQ0FBQzJCLFdBQVU7Z0NBQ2xCRyxPQUFNO2dDQUNOQyxRQUFPO2dDQUNQRixPQUFPbEI7Z0NBQ1BxQixTQUFTO29DQUNMQyxNQUFNO29DQUNOQyxPQUFPO2dDQUNYO2dDQUNBQyxVQUFVcEI7Ozs7OzswQ0FFZCw4REFBQ1c7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0Q7NENBQUlVLFNBQVNYOzRDQUFlRSxXQUFVO3NEQUNuQyw0RUFBQ1U7MERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR2pCLDhEQUFDWDt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0Q7NENBQUlVLFNBQVNuQjs0Q0FBa0JVLFdBQVU7c0RBQ3RDLDRFQUFDVTswREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRN0IsOERBQUNYO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDs4QkFDRyw0RUFBQ0U7d0JBQVNELFdBQVU7d0JBQXlDVyxhQUFZO3dCQUFTQyxNQUFNO3dCQUFHQyxNQUFNO3dCQUFJQyxRQUFRO3dCQUFDWixPQUFPaEI7d0JBQVE2QixPQUFPOzRCQUFFQyxZQUFZO3dCQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtySyw4REFBQzFDLDBEQUFjQTs7Ozs7Ozs7Ozs7QUFLM0I7R0EvR1NFO0tBQUFBO0FBaUhULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzPzc1NTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdAdWl3L3JlYWN0LWNvZGVtaXJyb3InO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvZGUoKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5MSA9ICgpID0+IHRvYXN0KCdURVNUIENBU0UgUEFTU0VEIScpO1xyXG4gICAgY29uc3Qgbm90aWZ5MiA9ICgpID0+IHRvYXN0KFwiVGVzdCBDYXNlIEZhaWxlZCFcIik7XHJcblxyXG4gICAgY29uc3QgcW5EYXRhID0ge1xyXG4gICAgICAgIHFuaWQ6IDEsXHJcbiAgICAgICAgcW5kZXNjOiBcInByaW50IGhlbGxvIHdvcmxkIVwiLFxyXG4gICAgICAgIHFub3V0OiBcImhlbGxvIHdvcmxkIVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciAgY2FwdHVyZWRDb25zb2xlT3V0cHV0IDsgXHJcbiAgICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCFcIiknKTtcclxuICAgIGNvbnN0IFtvdXRwdXQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmV3Q29kZSkgPT4ge1xyXG4gICAgICAgIHNldENvZGUobmV3Q29kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdENvZGUgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgKz0gbWVzc2FnZTsgXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxbkRhdGEucW5vdXQgPT0gY2FwdHVyZWRDb25zb2xlT3V0cHV0KSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgKz0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4gYmctZ3JheS00MDAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3FuRGF0YS5xbmRlc2N9IGNsYXNzTmFtZT0ndy1bMzUwcHhdIGgtWzI1MHB4XSBtLTIgYm9yZGVyLXNvbGlkIGJvcmRlci04ICc+XHJcbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTIgbWwtNSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2RlTWlycm9yIGNsYXNzTmFtZT0nY29kZS1ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc4MDBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSc0NjBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdqcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2RyYWN1bGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1hcm91bmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVSdW5Db2RlfSBjbGFzc05hbWU9J2JvcmRlci1zb2xpZCBib3JkZXItMiBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVsyNTBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+UnVuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdENvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgdy1bMjUwcHhdIHAtMSB0ZXh0LWNlbnRlciAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2JvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItZ3JheS05MDAgJyBwbGFjZWhvbGRlcj0nb3V0cHV0JyByb3dzPXs1fSBjb2xzPXs3MH0gcmVhZE9ubHkgdmFsdWU9e291dHB1dH0gc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvZGVNaXJyb3IiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiQ29kZSIsIm5vdGlmeTEiLCJub3RpZnkyIiwicW5EYXRhIiwicW5pZCIsInFuZGVzYyIsInFub3V0IiwiY2FwdHVyZWRDb25zb2xlT3V0cHV0IiwiY29kZSIsInNldENvZGUiLCJvdXRwdXQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdDb2RlIiwiaGFuZGxlU3VibWl0Q29kZSIsImUiLCJvcmlnaW5hbENvbnNvbGVMb2ciLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImV2YWwiLCJlcnJvciIsImhhbmRsZVJ1bkNvZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwibW9kZSIsInRoZW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiYnV0dG9uIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwiY29scyIsInJlYWRPbmx5Iiwic3R5bGUiLCJ3aGl0ZVNwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/problems/[question]/page.js\n"));

/***/ })

});