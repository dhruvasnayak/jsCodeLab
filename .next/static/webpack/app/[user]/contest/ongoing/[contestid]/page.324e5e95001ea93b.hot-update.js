"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[user]/contest/ongoing/[contestid]/page",{

/***/ "(app-pages-browser)/./app/[user]/contest/ongoing/[contestid]/page.js":
/*!********************************************************!*\
  !*** ./app/[user]/contest/ongoing/[contestid]/page.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contestid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Contestid() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Test Case Failed!\");\n    const [qnData, setQnData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [qnArray, setQnArray] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [q1solved, setQ1] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [q2solved, setQ2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [q3solved, setQ3] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        try {\n            fetch(\"http://localhost:3000/api/contest-question\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id: params.contestid\n                })\n            }).then((response1)=>response1.json()).then((data1)=>{\n                setQnArray(data1);\n                setQnData(data1[0]);\n            }).catch((error1)=>{\n                console.error(\"Error:\", error1);\n            });\n        } catch (error1) {\n            console.error(\"Error\", error1);\n        }\n    }, []);\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.output == capturedConsoleOutput) {\n            // try {\n            if (qnData.qton_id == qnArray[0].qton_id) {\n                setQ1(true);\n            }\n            if (qnData.qton_id == qnArray[1].qton_id) {\n                setQ2(true);\n            }\n            if (qnData.qton_id == qnArray[2].qton_id) {\n                setQ3(true);\n            }\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    const handleSelectChange = (event1)=>{\n        if (event1.target.value == \"1\") {\n            setQnData(qnArray[0]);\n            setSelectedOption(\"1\");\n        }\n        if (event1.target.value == \"2\") {\n            setQnData(qnArray[1]);\n            setSelectedOption(\"2\");\n        }\n        if (event1.target.value == \"3\") {\n            setQnData(qnArray[2]);\n            setSelectedOption(\"3\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main bg-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"relative left-5 mt-1 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline\",\n                                    value: selectedOption,\n                                    onChange: handleSelectChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"1\",\n                                            children: \"Question 1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 147,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"2\",\n                                            children: \"Question 2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 148,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"3\",\n                                            children: \"Question 3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 149,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"w-[350px] m-1 h-[220px] border-solid border-8\",\n                                    value: qnData.qton_description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"w-[350px] m-2 h-[230px] border-solid border-8\",\n                                    placeholder: \"output\",\n                                    readOnly: true,\n                                    value: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 154,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                            lineNumber: 140,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-2  \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"code-box\",\n                                    width: \"840px\",\n                                    height: \"460px\",\n                                    value: code,\n                                    options: {\n                                        mode: \"js\",\n                                        theme: \"dracula\"\n                                    },\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 159,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-around\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleRunCode,\n                                                className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    children: \"Run\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                    lineNumber: 172,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                lineNumber: 171,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 170,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleSubmitCode,\n                                                className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    children: \"Submit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                    lineNumber: 177,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                lineNumber: 176,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 175,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                            lineNumber: 157,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 139,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                        lineNumber: 186,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 185,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 191,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n            lineNumber: 138,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n        lineNumber: 137,\n        columnNumber: 9\n    }, this);\n}\n_s(Contestid, \"sFgsi9qCclwhAFfXJv2najdVSzk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Contestid;\nvar _c;\n$RefreshReg$(_c, \"Contestid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vY29udGVzdC9vbmdvaW5nL1tjb250ZXN0aWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDSDtBQUNXO0FBQ1g7QUFDRztBQUdoQyxTQUFTTTs7SUFFcEIsTUFBTUMsVUFBVSxJQUFNSixxREFBS0EsQ0FBQztJQUM1QixNQUFNSyxVQUFVLElBQU1MLHFEQUFLQSxDQUFDO0lBRTVCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUN2RCxNQUFNLENBQUNXLFVBQVNDLE1BQU0sR0FBR1osK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDYSxVQUFTQyxNQUFNLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ2UsVUFBU0MsTUFBTSxHQUFHaEIsK0NBQVFBLENBQUM7SUFFbEMsTUFBTWlCLFNBQVNwQiwwREFBU0E7SUFFeEJJLGdEQUFTQSxDQUFDO1FBQ04sSUFBSTtZQUNBaUIsTUFBTSw4Q0FBOEM7Z0JBQ2hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsSUFBSVAsT0FBT1EsU0FBUztnQkFBQztZQUNoRCxHQUNLQyxJQUFJLENBQUMsQ0FBQ0MsWUFBYUEsVUFBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO2dCQUNIckIsV0FBV3FCO2dCQUNYdkIsVUFBVXVCLEtBQUksQ0FBQyxFQUFFO1lBQ3JCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1lBQzVCO1FBQ1IsRUFBRSxPQUFPQSxRQUFPO1lB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UDZCLFNBQVM7d0NBQ0xDLE1BQU07d0NBQ05DLE9BQU87b0NBQ1g7b0NBQ0FWLFVBQVVqQjs7Ozs7OzhDQUVkLDhEQUFDYztvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNYLDRFQUFDRDtnREFBSWMsU0FBU25CO2dEQUFlTSxXQUFVOzBEQUNuQyw0RUFBQ2M7OERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR2pCLDhEQUFDZjs0Q0FBSUMsV0FBVTtzREFDWCw0RUFBQ0Q7Z0RBQUljLFNBQVMxQjtnREFBa0JhLFdBQVU7MERBQ3RDLDRFQUFDYzs4REFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFRN0IsOERBQUNmO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ3RELDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQjtHQTVMd0JJOztRQVlMTCxzREFBU0E7OztLQVpKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW3VzZXJdL2NvbnRlc3Qvb25nb2luZy9bY29udGVzdGlkXS9wYWdlLmpzPzE1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ0B1aXcvcmVhY3QtY29kZW1pcnJvcic7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlc3RpZCgpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZnkxID0gKCkgPT4gdG9hc3QoJ1RFU1QgQ0FTRSBQQVNTRUQhJyk7XHJcbiAgICBjb25zdCBub3RpZnkyID0gKCkgPT4gdG9hc3QoXCJUZXN0IENhc2UgRmFpbGVkIVwiKTtcclxuXHJcbiAgICBjb25zdCBbcW5EYXRhLCBzZXRRbkRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3FuQXJyYXksIHNldFFuQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcTFzb2x2ZWQsc2V0UTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Eyc29sdmVkLHNldFEyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtxM3NvbHZlZCxzZXRRM10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jb250ZXN0LXF1ZXN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiBwYXJhbXMuY29udGVzdGlkIH0pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFFuQXJyYXkoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRRbkRhdGEoZGF0YVswXSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICB2YXIgY2FwdHVyZWRDb25zb2xlT3V0cHV0O1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJ2NvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld0NvZGUpID0+IHtcclxuICAgICAgICBzZXRDb2RlKG5ld0NvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRDb2RlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ICs9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxbkRhdGEub3V0cHV0ID09IGNhcHR1cmVkQ29uc29sZU91dHB1dCkge1xyXG5cclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZihxbkRhdGEucXRvbl9pZCA9PSBxbkFycmF5WzBdLnF0b25faWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNldFExKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHFuRGF0YS5xdG9uX2lkID09IHFuQXJyYXlbMV0ucXRvbl9pZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0UTIodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocW5EYXRhLnF0b25faWQgPT0gcW5BcnJheVsyXS5xdG9uX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXRRMyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub3RpZnkxKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSdW5Db2RlID0gKGUpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCArPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBldmFsKGNvZGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBvcmlnaW5hbENvbnNvbGVMb2c7XHJcblxyXG4gICAgICAgICAgICBzZXRSZXN1bHQoY2FwdHVyZWRDb25zb2xlT3V0cHV0KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHNldFFuRGF0YShxbkFycmF5WzBdKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb24oXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHNldFFuRGF0YShxbkFycmF5WzFdKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb24oXCIyXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIjNcIikge1xyXG4gICAgICAgICAgICBzZXRRbkRhdGEocW5BcnJheVsyXSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKFwiM1wiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbiBiZy1ncmF5LTQwMCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGxlZnQtNSBtdC0xIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS00MDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwIHB4LTQgcHktMiByb3VuZGVkIHNoYWRvdyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlF1ZXN0aW9uIDE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UXVlc3Rpb24gMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5RdWVzdGlvbiAzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0ndy1bMzUwcHhdIG0tMSBoLVsyMjBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci04JyB2YWx1ZT17cW5EYXRhLnF0b25fZGVzY3JpcHRpb259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0ndy1bMzUwcHhdIG0tMiBoLVsyMzBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci04JyBwbGFjZWhvbGRlcj0nb3V0cHV0JyByZWFkT25seSB2YWx1ZT17b3V0cHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS0yICAnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvZGVNaXJyb3IgY2xhc3NOYW1lPSdjb2RlLWJveCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc4NDBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nNDYwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnanMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnZHJhY3VsYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1hcm91bmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVJ1bkNvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHctWzMwMHB4XSBwLTEgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+UnVuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVTdWJtaXRDb2RlfSBjbGFzc05hbWU9J2JvcmRlci1zb2xpZCBib3JkZXItMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHctWzMwMHB4XSBwLTEgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwidXNlUGFyYW1zIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGVzdGlkIiwibm90aWZ5MSIsIm5vdGlmeTIiLCJxbkRhdGEiLCJzZXRRbkRhdGEiLCJxbkFycmF5Iiwic2V0UW5BcnJheSIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJxMXNvbHZlZCIsInNldFExIiwicTJzb2x2ZWQiLCJzZXRRMiIsInEzc29sdmVkIiwic2V0UTMiLCJwYXJhbXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiY29udGVzdGlkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImNhcHR1cmVkQ29uc29sZU91dHB1dCIsImNvZGUiLCJzZXRDb2RlIiwib3V0cHV0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQ2hhbmdlIiwibmV3Q29kZSIsImhhbmRsZVN1Ym1pdENvZGUiLCJlIiwib3JpZ2luYWxDb25zb2xlTG9nIiwibG9nIiwibWVzc2FnZSIsImV2YWwiLCJxdG9uX2lkIiwiaGFuZGxlUnVuQ29kZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInRleHRhcmVhIiwicXRvbl9kZXNjcmlwdGlvbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJtb2RlIiwidGhlbWUiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/contest/ongoing/[contestid]/page.js\n"));

/***/ })

});