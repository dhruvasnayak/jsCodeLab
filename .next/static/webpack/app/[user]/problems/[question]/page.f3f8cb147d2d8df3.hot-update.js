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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Code() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Test Case Failed!\");\n    const qnData = {\n        qnid: 1,\n        qndesc: \"print hello world!\",\n        qnout: \"hello world!\"\n    };\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.qnout == capturedConsoleOutput) {\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1; // Append console output to the variable\n            };\n            // Execute the JavaScript code\n            eval(code);\n            // Restore the original console.log function\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main bg-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: qnData.qndesc,\n                        className: \"w-[350px] h-[515px] m-2 border-solid border-8 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"code-box\",\n                                width: \"800px\",\n                                height: \"460px\",\n                                value: code,\n                                options: {\n                                    mode: \"js\",\n                                    theme: \"dracula\"\n                                },\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleRunCode,\n                                            className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Run\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleSubmitCode,\n                                            className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Submit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"border-solid border-2 border-gray-900 \",\n                        placeholder: \"output\",\n                        rows: 14,\n                        cols: 70,\n                        readOnly: true,\n                        value: output,\n                        style: {\n                            whiteSpace: \"pre-wrap\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 114,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n}\n_s(Code, \"bn8+Aj7UQncPtDWj0wy0ZO29YeI=\");\n_c = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpQztBQUNjO0FBRVE7QUFDUjtBQUcvQyxTQUFTSTs7SUFFTCxNQUFNQyxVQUFVLElBQU1GLHFEQUFLQSxDQUFDO0lBQzVCLE1BQU1HLFVBQVUsSUFBTUgscURBQUtBLENBQUM7SUFFNUIsTUFBTUksU0FBUztRQUNYQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FBTztJQUNYO0lBRUEsSUFBS0M7SUFDTCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCSixRQUFRSTtJQUNaO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBRXRCLElBQUk7WUFDQVIsd0JBQXdCO1lBQ3hCLE1BQU1TLHFCQUFxQkMsUUFBUUMsR0FBRztZQUV0Q0QsUUFBUUMsR0FBRyxHQUFHLENBQUNDO2dCQUNYWix5QkFBeUJZO1lBQzdCO1lBQ0FDLEtBQUtaO1lBQ0xTLFFBQVFDLEdBQUcsR0FBR0Y7WUFFZEwsVUFBVUo7UUFFZCxFQUFFLE9BQU9jLE9BQU87WUFDWlYsVUFBVSxVQUF3QixPQUFkVSxNQUFNRixPQUFPO1FBQ3JDO1FBRUEsSUFBSWhCLE9BQU9HLEtBQUssSUFBSUMsdUJBQXVCO1lBQ3ZDTjtRQUNKLE9BQ0s7WUFDREM7UUFDSjtJQUVKO0lBQ0EsTUFBTW9CLGdCQUFnQixDQUFDUDtRQUNuQixJQUFJO1lBQ0FSLHdCQUF3QjtZQUN4QixNQUFNUyxxQkFBcUJDLFFBQVFDLEdBQUc7WUFDdENELFFBQVFDLEdBQUcsR0FBRyxDQUFDQztnQkFDWFoseUJBQXlCWSxVQUFTLHdDQUF3QztZQUM5RTtZQUVBLDhCQUE4QjtZQUM5QkMsS0FBS1o7WUFFTCw0Q0FBNEM7WUFDNUNTLFFBQVFDLEdBQUcsR0FBR0Y7WUFFZEwsVUFBVUo7UUFFZCxFQUFFLE9BQU9jLE9BQU87WUFDWlYsVUFBVSxVQUF3QixPQUFkVSxNQUFNRixPQUFPO1FBQ3JDO0lBR0o7SUFHQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQVNDLE9BQU92QixPQUFPRSxNQUFNO3dCQUFFbUIsV0FBVTs7Ozs7O2tDQUUxQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDM0IsNkRBQVVBO2dDQUFDMkIsV0FBVTtnQ0FDbEJHLE9BQU07Z0NBQ05DLFFBQU87Z0NBQ1BGLE9BQU9sQjtnQ0FDUHFCLFNBQVM7b0NBQ0xDLE1BQU07b0NBQ05DLE9BQU87Z0NBQ1g7Z0NBQ0FDLFVBQVVwQjs7Ozs7OzBDQUVkLDhEQUFDVztnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSVUsU0FBU1g7NENBQWVFLFdBQVU7c0RBQ25DLDRFQUFDVTswREFBUTs7Ozs7Ozs7Ozs7Ozs7OztrREFHakIsOERBQUNYO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSVUsU0FBU25COzRDQUFrQlUsV0FBVTtzREFDdEMsNEVBQUNVOzBEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVE3Qiw4REFBQ1g7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEOzhCQUNHLDRFQUFDRTt3QkFBU0QsV0FBVTt3QkFBeUNXLGFBQVk7d0JBQVNDLE1BQU07d0JBQUlDLE1BQU07d0JBQUlDLFFBQVE7d0JBQUNaLE9BQU9oQjt3QkFBUTZCLE9BQU87NEJBQUVDLFlBQVk7d0JBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3RLLDhEQUFDMUMsMERBQWNBOzs7Ozs7Ozs7OztBQUszQjtHQWxIU0U7S0FBQUE7QUFvSFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1t1c2VyXS9wcm9ibGVtcy9bcXVlc3Rpb25dL3BhZ2UuanM/NzU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ0B1aXcvcmVhY3QtY29kZW1pcnJvcic7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29kZSgpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZnkxID0gKCkgPT4gdG9hc3QoJ1RFU1QgQ0FTRSBQQVNTRUQhJyk7XHJcbiAgICBjb25zdCBub3RpZnkyID0gKCkgPT4gdG9hc3QoXCJUZXN0IENhc2UgRmFpbGVkIVwiKTtcclxuXHJcbiAgICBjb25zdCBxbkRhdGEgPSB7XHJcbiAgICAgICAgcW5pZDogMSxcclxuICAgICAgICBxbmRlc2M6IFwicHJpbnQgaGVsbG8gd29ybGQhXCIsXHJcbiAgICAgICAgcW5vdXQ6IFwiaGVsbG8gd29ybGQhXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgOyBcclxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCdjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIVwiKScpO1xyXG4gICAgY29uc3QgW291dHB1dCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXdDb2RlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29kZShuZXdDb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0Q29kZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvbnNvbGVMb2cgPSBjb25zb2xlLmxvZztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCArPSBtZXNzYWdlOyBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBvcmlnaW5hbENvbnNvbGVMb2c7XHJcblxyXG4gICAgICAgICAgICBzZXRSZXN1bHQoY2FwdHVyZWRDb25zb2xlT3V0cHV0KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHFuRGF0YS5xbm91dCA9PSBjYXB0dXJlZENvbnNvbGVPdXRwdXQpIHtcclxuICAgICAgICAgICAgbm90aWZ5MSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5MigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVSdW5Db2RlID0gKGUpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCArPSBtZXNzYWdlOyAvLyBBcHBlbmQgY29uc29sZSBvdXRwdXQgdG8gdGhlIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIHRoZSBKYXZhU2NyaXB0IGNvZGVcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGNvbnNvbGUubG9nIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4gYmctZ3JheS00MDAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3FuRGF0YS5xbmRlc2N9IGNsYXNzTmFtZT0ndy1bMzUwcHhdIGgtWzUxNXB4XSBtLTIgYm9yZGVyLXNvbGlkIGJvcmRlci04ICc+XHJcbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTIgbWwtNSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2RlTWlycm9yIGNsYXNzTmFtZT0nY29kZS1ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc4MDBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSc0NjBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdqcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2RyYWN1bGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1hcm91bmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVSdW5Db2RlfSBjbGFzc05hbWU9J2JvcmRlci1zb2xpZCBib3JkZXItMiBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVszMDBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+UnVuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdENvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgdy1bMzAwcHhdIHAtMSB0ZXh0LWNlbnRlciAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2JvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItZ3JheS05MDAgJyBwbGFjZWhvbGRlcj0nb3V0cHV0JyByb3dzPXsxNH0gY29scz17NzB9IHJlYWRPbmx5IHZhbHVlPXtvdXRwdXR9IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb2RlTWlycm9yIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkNvZGUiLCJub3RpZnkxIiwibm90aWZ5MiIsInFuRGF0YSIsInFuaWQiLCJxbmRlc2MiLCJxbm91dCIsImNhcHR1cmVkQ29uc29sZU91dHB1dCIsImNvZGUiLCJzZXRDb2RlIiwib3V0cHV0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQ2hhbmdlIiwibmV3Q29kZSIsImhhbmRsZVN1Ym1pdENvZGUiLCJlIiwib3JpZ2luYWxDb25zb2xlTG9nIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJldmFsIiwiZXJyb3IiLCJoYW5kbGVSdW5Db2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsIm1vZGUiLCJ0aGVtZSIsIm9uQ2hhbmdlIiwib25DbGljayIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwicm93cyIsImNvbHMiLCJyZWFkT25seSIsInN0eWxlIiwid2hpdGVTcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/problems/[question]/page.js\n"));

/***/ })

});