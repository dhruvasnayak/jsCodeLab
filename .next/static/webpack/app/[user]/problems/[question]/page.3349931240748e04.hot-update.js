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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function Code() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Test Case Failed!\");\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [qnData, setQnData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        try {\n            const response1 = fetch(\"/api/get-question\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id: params.question\n                })\n            }).then((response1)=>response1.json()).then((data1)=>{\n                console.log(\"Fetched question data: \", data1[0]);\n                setQnData(data1[0]);\n            }).catch((error1)=>{\n                console.error(\"Error:\", error1);\n            });\n        } catch (error1) {\n            console.error(\"Registration Failed\", error1);\n        }\n    }, []);\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.qnout == capturedConsoleOutput) {\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main bg-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                value: qnData.qndesc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                placeholder: \"output\",\n                                readOnly: true,\n                                value: output\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2  \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"code-box\",\n                                width: \"840px\",\n                                height: \"460px\",\n                                value: code,\n                                options: {\n                                    mode: \"js\",\n                                    theme: \"dracula\"\n                                },\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 109,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleRunCode,\n                                            className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Run\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 122,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center m-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: handleSubmitCode,\n                                            className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Submit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                    lineNumber: 136,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 135,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\problems\\\\[question]\\\\page.js\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, this);\n}\n_s(Code, \"0YRqWtXQEwak+FcAUZV5o49P3Gs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRStDO0FBQ0g7QUFDVztBQUNYO0FBQ0c7QUFHL0MsZUFBZU07O0lBRVgsTUFBTUMsVUFBVSxJQUFNSixxREFBS0EsQ0FBQztJQUM1QixNQUFNSyxVQUFVLElBQU1MLHFEQUFLQSxDQUFDO0lBRTVCLE1BQU1NLFNBQVNSLDBEQUFTQTtJQUV4QixNQUFNLENBQUNTLFFBQU9DLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUVyQ0MsZ0RBQVNBLENBQUM7UUFDTixJQUFJO1lBQ0YsTUFBTU8sWUFBV0MsTUFBTSxxQkFBcUI7Z0JBQzFDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsSUFBSVYsT0FBT1csUUFBUTtnQkFBQztZQUM3QyxHQUNHQyxJQUFJLENBQUNULENBQUFBLFlBQVlBLFVBQVNVLElBQUksSUFDOUJELElBQUksQ0FBQ0UsQ0FBQUE7Z0JBQ0pDLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJGLEtBQUksQ0FBQyxFQUFFO2dCQUM5Q1osVUFBVVksS0FBSSxDQUFDLEVBQUU7WUFDbkIsR0FDQ0csS0FBSyxDQUFDQyxDQUFBQTtnQkFDTEgsUUFBUUcsS0FBSyxDQUFDLFVBQVVBO1lBQzFCO1FBQ0osRUFBRSxPQUFPQSxRQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBSVAsSUFBSUM7SUFDSixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQzJCLFFBQVFDLFVBQVUsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU02QixlQUFlLENBQUNDO1FBQ2xCSixRQUFRSTtJQUNaO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBRXRCLElBQUk7WUFDQVIsd0JBQXdCO1lBQ3hCLE1BQU1TLHFCQUFxQmIsUUFBUUMsR0FBRztZQUV0Q0QsUUFBUUMsR0FBRyxHQUFHLENBQUNhO2dCQUNYVix5QkFBeUJVO1lBQzdCO1lBQ0FDLEtBQUtWO1lBQ0xMLFFBQVFDLEdBQUcsR0FBR1k7WUFFZEwsVUFBVUo7UUFFZCxFQUFFLE9BQU9ELE9BQU87WUFDWkssVUFBVSxVQUF3QixPQUFkTCxNQUFNVyxPQUFPO1FBQ3JDO1FBRUEsSUFBSTVCLE9BQU84QixLQUFLLElBQUlaLHVCQUF1QjtZQUN2Q3JCO1FBQ0osT0FDSztZQUNEQztRQUNKO0lBRUo7SUFDQSxNQUFNaUMsZ0JBQWdCLENBQUNMO1FBQ25CLElBQUk7WUFDQVIsd0JBQXdCO1lBQ3hCLE1BQU1TLHFCQUFxQmIsUUFBUUMsR0FBRztZQUN0Q0QsUUFBUUMsR0FBRyxHQUFHLENBQUNhO2dCQUNYVix5QkFBeUJVO1lBQzdCO1lBQ0FDLEtBQUtWO1lBRUxMLFFBQVFDLEdBQUcsR0FBR1k7WUFFZEwsVUFBVUo7UUFFZCxFQUFFLE9BQU9ELE9BQU87WUFDWkssVUFBVSxVQUF3QixPQUFkTCxNQUFNVyxPQUFPO1FBQ3JDO0lBR0o7SUFHQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7OzBDQUNHLDhEQUFDRTtnQ0FBU0QsV0FBVTtnQ0FBZ0RFLE9BQU9uQyxPQUFPb0MsTUFBTTs7Ozs7OzBDQUV4Riw4REFBQ0Y7Z0NBQVNELFdBQVU7Z0NBQWdESSxhQUFZO2dDQUFTQyxRQUFRO2dDQUFDSCxPQUFPZDs7Ozs7Ozs7Ozs7O2tDQUc3Ryw4REFBQ1c7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDM0MsNkRBQVVBO2dDQUFDMkMsV0FBVTtnQ0FDbEJNLE9BQU07Z0NBQ05DLFFBQU87Z0NBQ1BMLE9BQU9oQjtnQ0FDUHNCLFNBQVM7b0NBQ0xDLE1BQU07b0NBQ05DLE9BQU87Z0NBQ1g7Z0NBQ0FDLFVBQVVyQjs7Ozs7OzBDQUVkLDhEQUFDUztnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSWEsU0FBU2Q7NENBQWVFLFdBQVU7c0RBQ25DLDRFQUFDYTswREFBUTs7Ozs7Ozs7Ozs7Ozs7OztrREFHakIsOERBQUNkO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSWEsU0FBU3BCOzRDQUFrQlEsV0FBVTtzREFDdEMsNEVBQUNhOzBEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVE3Qiw4REFBQ2Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEOzs7Ozs7Ozs7OzBCQUtMLDhEQUFDeEMsMERBQWNBOzs7Ozs7Ozs7OztBQUszQjtHQXhJZUk7O1FBS0lMLHNEQUFTQTs7O0tBTGJLO0FBMElmLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bdXNlcl0vcHJvYmxlbXMvW3F1ZXN0aW9uXS9wYWdlLmpzPzc1NTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ0B1aXcvcmVhY3QtY29kZW1pcnJvcic7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIENvZGUoKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5MSA9ICgpID0+IHRvYXN0KCdURVNUIENBU0UgUEFTU0VEIScpO1xyXG4gICAgY29uc3Qgbm90aWZ5MiA9ICgpID0+IHRvYXN0KFwiVGVzdCBDYXNlIEZhaWxlZCFcIik7XHJcblxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcclxuXHJcbiAgICBjb25zdCBbcW5EYXRhLHNldFFuRGF0YV0gPSB1c2VTdGF0ZSh7fSk7IFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goJy9hcGkvZ2V0LXF1ZXN0aW9uJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6IHBhcmFtcy5xdWVzdGlvbiB9KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIHF1ZXN0aW9uIGRhdGE6IFwiLCBkYXRhWzBdKTsgXHJcbiAgICAgICAgICAgICAgc2V0UW5EYXRhKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBGYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbXSk7XHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICB2YXIgY2FwdHVyZWRDb25zb2xlT3V0cHV0O1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJ2NvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld0NvZGUpID0+IHtcclxuICAgICAgICBzZXRDb2RlKG5ld0NvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRDb2RlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ICs9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxbkRhdGEucW5vdXQgPT0gY2FwdHVyZWRDb25zb2xlT3V0cHV0KSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmeTIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgKz0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4gYmctZ3JheS00MDAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgdmFsdWU9e3FuRGF0YS5xbmRlc2N9ID5cclxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgcGxhY2Vob2xkZXI9J291dHB1dCcgcmVhZE9ubHkgdmFsdWU9e291dHB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMiAgJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvZGVNaXJyb3IgY2xhc3NOYW1lPSdjb2RlLWJveCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9Jzg0MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ2MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2pzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnZHJhY3VsYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVJ1bkNvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHctWzMwMHB4XSBwLTEgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5SdW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlU3VibWl0Q29kZX0gY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVszMDBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGU7Il0sIm5hbWVzIjpbIkNvZGVNaXJyb3IiLCJ1c2VQYXJhbXMiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb2RlIiwibm90aWZ5MSIsIm5vdGlmeTIiLCJwYXJhbXMiLCJxbkRhdGEiLCJzZXRRbkRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJxdWVzdGlvbiIsInRoZW4iLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiY2FwdHVyZWRDb25zb2xlT3V0cHV0IiwiY29kZSIsInNldENvZGUiLCJvdXRwdXQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdDb2RlIiwiaGFuZGxlU3VibWl0Q29kZSIsImUiLCJvcmlnaW5hbENvbnNvbGVMb2ciLCJtZXNzYWdlIiwiZXZhbCIsInFub3V0IiwiaGFuZGxlUnVuQ29kZSIsImRpdiIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwidmFsdWUiLCJxbmRlc2MiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwibW9kZSIsInRoZW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/problems/[question]/page.js\n"));

/***/ })

});