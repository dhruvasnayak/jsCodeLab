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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Code() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Test Case Failed!\");\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const qnData = {\n        qnid: 1,\n        qndesc: \"print hello world!\",\n        qnout: \"hello world!\"\n    };\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.qnout == capturedConsoleOutput) {\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main bg-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                value: qnData.qndesc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                placeholder: \"output\",\n                                readOnly: true,\n                                value: output\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2  \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"code-box\",\n                                width: \"840px\",\n                                height: \"460px\",\n                                value: code,\n                                options: {\n                                    mode: \"js\",\n                                    theme: \"dracula\"\n                                },\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleRunCode,\n                                            className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Run\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleSubmitCode,\n                                            className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Submit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n}\n_s(Code, \"Z9CNHVZUJR5npJvZiZElafBaHqE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2M7QUFDSDtBQUNXO0FBQ1I7QUFHL0MsU0FBU0s7O0lBRUwsTUFBTUMsVUFBVSxJQUFNRixxREFBS0EsQ0FBQztJQUM1QixNQUFNRyxVQUFVLElBQU1ILHFEQUFLQSxDQUFDO0lBRTVCLE1BQU1JLFNBQVNOLDBEQUFTQTtJQUd4QixNQUFNTyxTQUFTO1FBQ1hDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1g7SUFFQSxJQUFJQztJQUNKLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNa0IsZUFBZSxDQUFDQztRQUNsQkosUUFBUUk7SUFDWjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUV0QixJQUFJO1lBQ0FSLHdCQUF3QjtZQUN4QixNQUFNUyxxQkFBcUJDLFFBQVFDLEdBQUc7WUFFdENELFFBQVFDLEdBQUcsR0FBRyxDQUFDQztnQkFDWFoseUJBQXlCWTtZQUM3QjtZQUNBQyxLQUFLWjtZQUNMUyxRQUFRQyxHQUFHLEdBQUdGO1lBRWRMLFVBQVVKO1FBRWQsRUFBRSxPQUFPYyxPQUFPO1lBQ1pWLFVBQVUsVUFBd0IsT0FBZFUsTUFBTUYsT0FBTztRQUNyQztRQUVBLElBQUloQixPQUFPRyxLQUFLLElBQUlDLHVCQUF1QjtZQUN2Q1A7UUFDSixPQUNLO1lBQ0RDO1FBQ0o7SUFFSjtJQUNBLE1BQU1xQixnQkFBZ0IsQ0FBQ1A7UUFDbkIsSUFBSTtZQUNBUix3QkFBd0I7WUFDeEIsTUFBTVMscUJBQXFCQyxRQUFRQyxHQUFHO1lBQ3RDRCxRQUFRQyxHQUFHLEdBQUcsQ0FBQ0M7Z0JBQ1haLHlCQUF5Qlk7WUFDN0I7WUFDQUMsS0FBS1o7WUFFTFMsUUFBUUMsR0FBRyxHQUFHRjtZQUVkTCxVQUFVSjtRQUVkLEVBQUUsT0FBT2MsT0FBTztZQUNaVixVQUFVLFVBQXdCLE9BQWRVLE1BQU1GLE9BQU87UUFDckM7SUFHSjtJQUdBLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDs7MENBQ0csOERBQUNFO2dDQUFTRCxXQUFVO2dDQUFnREUsT0FBT3ZCLE9BQU9FLE1BQU07Ozs7OzswQ0FFeEYsOERBQUNvQjtnQ0FBU0QsV0FBVTtnQ0FBZ0RHLGFBQVk7Z0NBQVNDLFFBQVE7Z0NBQUNGLE9BQU9oQjs7Ozs7Ozs7Ozs7O2tDQUc3Ryw4REFBQ2E7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDN0IsNkRBQVVBO2dDQUFDNkIsV0FBVTtnQ0FDbEJLLE9BQU07Z0NBQ05DLFFBQU87Z0NBQ1BKLE9BQU9sQjtnQ0FDUHVCLFNBQVM7b0NBQ0xDLE1BQU07b0NBQ05DLE9BQU87Z0NBQ1g7Z0NBQ0FDLFVBQVV0Qjs7Ozs7OzBDQUVkLDhEQUFDVztnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSVksU0FBU2I7NENBQWVFLFdBQVU7c0RBQ25DLDRFQUFDWTswREFBUTs7Ozs7Ozs7Ozs7Ozs7OztrREFHakIsOERBQUNiO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSVksU0FBU3JCOzRDQUFrQlUsV0FBVTtzREFDdEMsNEVBQUNZOzBEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVE3Qiw4REFBQ2I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEOzs7Ozs7Ozs7OzBCQUtMLDhEQUFDMUIsMERBQWNBOzs7Ozs7Ozs7OztBQUszQjtHQXJIU0U7O1FBS1VILHNEQUFTQTs7O0tBTG5CRztBQXVIVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW3VzZXJdL3Byb2JsZW1zL1txdWVzdGlvbl0vcGFnZS5qcz83NTUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSAnQHVpdy9yZWFjdC1jb2RlbWlycm9yJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29kZSgpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZnkxID0gKCkgPT4gdG9hc3QoJ1RFU1QgQ0FTRSBQQVNTRUQhJyk7XHJcbiAgICBjb25zdCBub3RpZnkyID0gKCkgPT4gdG9hc3QoXCJUZXN0IENhc2UgRmFpbGVkIVwiKTtcclxuXHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHFuRGF0YSA9IHtcclxuICAgICAgICBxbmlkOiAxLFxyXG4gICAgICAgIHFuZGVzYzogXCJwcmludCBoZWxsbyB3b3JsZCFcIixcclxuICAgICAgICBxbm91dDogXCJoZWxsbyB3b3JsZCFcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2FwdHVyZWRDb25zb2xlT3V0cHV0O1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJ2NvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld0NvZGUpID0+IHtcclxuICAgICAgICBzZXRDb2RlKG5ld0NvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRDb2RlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ICs9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxbkRhdGEucW5vdXQgPT0gY2FwdHVyZWRDb25zb2xlT3V0cHV0KSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgKz0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4gYmctZ3JheS00MDAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgdmFsdWU9e3FuRGF0YS5xbmRlc2N9ID5cclxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgcGxhY2Vob2xkZXI9J291dHB1dCcgcmVhZE9ubHkgdmFsdWU9e291dHB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMiAgJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvZGVNaXJyb3IgY2xhc3NOYW1lPSdjb2RlLWJveCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9Jzg0MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ2MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2pzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnZHJhY3VsYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVJ1bkNvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHctWzMwMHB4XSBwLTEgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5SdW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlU3VibWl0Q29kZX0gY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVszMDBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29kZU1pcnJvciIsInVzZVBhcmFtcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJDb2RlIiwibm90aWZ5MSIsIm5vdGlmeTIiLCJwYXJhbXMiLCJxbkRhdGEiLCJxbmlkIiwicW5kZXNjIiwicW5vdXQiLCJjYXB0dXJlZENvbnNvbGVPdXRwdXQiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldFJlc3VsdCIsImhhbmRsZUNoYW5nZSIsIm5ld0NvZGUiLCJoYW5kbGVTdWJtaXRDb2RlIiwiZSIsIm9yaWdpbmFsQ29uc29sZUxvZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXZhbCIsImVycm9yIiwiaGFuZGxlUnVuQ29kZSIsImRpdiIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwibW9kZSIsInRoZW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/problems/[question]/page.js\n"));

/***/ })

});