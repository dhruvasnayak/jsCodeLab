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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contestid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Contestid() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Test Case Failed!\");\n    const [qnData, setQnData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [qnArray, setQnArray] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        try {\n            fetch(\"http://localhost:3000/api/contest-question\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id: params.contestid\n                })\n            }).then((response1)=>response1.json()).then((data1)=>{\n                setQnArray(data1);\n                setQnData(data1[0]);\n            }).catch((error1)=>{\n                console.error(\"Error:\", error1);\n            });\n        } catch (error1) {\n            console.error(\"Error\", error1);\n        }\n    }, []);\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.output == capturedConsoleOutput) {\n            // try {\n            //   const response = fetch('/api/add-points', {\n            //     method: 'POST',\n            //     headers: {\n            //       'Content-Type': 'application/json',\n            //     },\n            //     body: JSON.stringify({uid:params.user,qid:params.question}),\n            //   })\n            // } catch (error) {\n            //   console.error('Registration Failed', error);\n            // }\n            // console.log(\"India\")\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    const handleSelectChange = (event1)=>{\n        if (event1.target.value == \"1\") {\n            setQnData(qnArray[0]);\n            setSelectedOption(\"1\");\n        }\n        if (event1.target.value == \"2\") {\n            setQnData(qnArray[1]);\n            setSelectedOption(\"2\");\n        }\n        if (event1.target.value == \"3\") {\n            setQnData(qnArray[2]);\n            setSelectedOption(\"3\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main bg-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \" bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline\",\n                                    value: selectedOption,\n                                    onChange: handleSelectChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"1\",\n                                            children: \"Questo1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 141,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"2\",\n                                            children: \"Q2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"3\",\n                                            children: \"Q3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 143,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                    value: qnData.qton_description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 146,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                    placeholder: \"output\",\n                                    readOnly: true,\n                                    value: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                            lineNumber: 134,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-2  \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"code-box\",\n                                    width: \"840px\",\n                                    height: \"460px\",\n                                    value: code,\n                                    options: {\n                                        mode: \"js\",\n                                        theme: \"dracula\"\n                                    },\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 153,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-around\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleRunCode,\n                                                className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    children: \"Run\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                    lineNumber: 166,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                lineNumber: 165,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 164,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleSubmitCode,\n                                                className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    children: \"Submit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                    lineNumber: 171,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                lineNumber: 170,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 169,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 163,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                            lineNumber: 151,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                        lineNumber: 180,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 179,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 185,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n            lineNumber: 132,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n        lineNumber: 131,\n        columnNumber: 9\n    }, this);\n}\n_s(Contestid, \"251EU8+0Thb5tvMIHMqiRbGTsfk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Contestid;\nvar _c;\n$RefreshReg$(_c, \"Contestid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vY29udGVzdC9vbmdvaW5nL1tjb250ZXN0aWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDSDtBQUNXO0FBQ1g7QUFDRztBQUdoQyxTQUFTTTs7SUFFcEIsTUFBTUMsVUFBVSxJQUFNSixxREFBS0EsQ0FBQztJQUM1QixNQUFNSyxVQUFVLElBQU1MLHFEQUFLQSxDQUFDO0lBRTVCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUV2RCxNQUFNVyxTQUFTZCwwREFBU0E7SUFFeEJJLGdEQUFTQSxDQUFDO1FBQ04sSUFBSTtZQUNBVyxNQUFNLDhDQUE4QztnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxJQUFJUCxPQUFPUSxTQUFTO2dCQUFDO1lBQ2hELEdBQ0tDLElBQUksQ0FBQyxDQUFDQyxZQUFhQSxVQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0c7Z0JBQ0hmLFdBQVdlO2dCQUNYakIsVUFBVWlCLEtBQUksQ0FBQyxFQUFFO1lBQ3JCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1lBQzVCO1FBQ1IsRUFBRSxPQUFPQSxRQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxTQUFTQTtRQUMzQjtJQUNKLEdBQUcsRUFBRTtJQUdMLElBQUlFO0lBQ0osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUM4QixRQUFRQyxVQUFVLEdBQUcvQiwrQ0FB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Qyw0RUFBQ2M7OERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUTdCLDhEQUFDZjtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7Ozs7Ozs7Ozs7OEJBS0wsOERBQUMvQywwREFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0F0THdCSTs7UUFTTEwsc0RBQVNBOzs7S0FUSksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1t1c2VyXS9jb250ZXN0L29uZ29pbmcvW2NvbnRlc3RpZF0vcGFnZS5qcz8xNWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdAdWl3L3JlYWN0LWNvZGVtaXJyb3InO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZXN0aWQoKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5MSA9ICgpID0+IHRvYXN0KCdURVNUIENBU0UgUEFTU0VEIScpO1xyXG4gICAgY29uc3Qgbm90aWZ5MiA9ICgpID0+IHRvYXN0KFwiVGVzdCBDYXNlIEZhaWxlZCFcIik7XHJcblxyXG4gICAgY29uc3QgW3FuRGF0YSwgc2V0UW5EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtxbkFycmF5LCBzZXRRbkFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY29udGVzdC1xdWVzdGlvbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZDogcGFyYW1zLmNvbnRlc3RpZCB9KSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRRbkFycmF5KGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UW5EYXRhKGRhdGFbMF0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgdmFyIGNhcHR1cmVkQ29uc29sZU91dHB1dDtcclxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCdjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIVwiKScpO1xyXG4gICAgY29uc3QgW291dHB1dCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXdDb2RlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29kZShuZXdDb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0Q29kZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvbnNvbGVMb2cgPSBjb25zb2xlLmxvZztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCArPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBldmFsKGNvZGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IG9yaWdpbmFsQ29uc29sZUxvZztcclxuXHJcbiAgICAgICAgICAgIHNldFJlc3VsdChjYXB0dXJlZENvbnNvbGVPdXRwdXQpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRSZXN1bHQoYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocW5EYXRhLm91dHB1dCA9PSBjYXB0dXJlZENvbnNvbGVPdXRwdXQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCgnL2FwaS9hZGQtcG9pbnRzJywge1xyXG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VpZDpwYXJhbXMudXNlcixxaWQ6cGFyYW1zLnF1ZXN0aW9ufSksXHJcbiAgICAgICAgICAgIC8vICAgfSlcclxuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmVycm9yKCdSZWdpc3RyYXRpb24gRmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW5kaWFcIilcclxuICAgICAgICAgICAgbm90aWZ5MSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5MigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUnVuQ29kZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgKz0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXZhbChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzZXRRbkRhdGEocW5BcnJheVswXSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICBzZXRRbkRhdGEocW5BcnJheVsxXSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKFwiMlwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCIzXCIpIHtcclxuICAgICAgICAgICAgc2V0UW5EYXRhKHFuQXJyYXlbMl0pO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihcIjNcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4gYmctZ3JheS00MDAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBob3Zlcjpib3JkZXItZ3JheS01MDAgcHgtNCBweS0yIHJvdW5kZWQgc2hhZG93IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UXVlc3RvMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5RMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5RMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgdmFsdWU9e3FuRGF0YS5xdG9uX2Rlc2NyaXB0aW9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3ctWzM1MHB4XSBtLTIgaC1bMjQwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItOCcgcGxhY2Vob2xkZXI9J291dHB1dCcgcmVhZE9ubHkgdmFsdWU9e291dHB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMiAgJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2RlTWlycm9yIGNsYXNzTmFtZT0nY29kZS1ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nODQwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ2MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2pzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2RyYWN1bGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYXJvdW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG0tMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVSdW5Db2RlfSBjbGFzc05hbWU9J2JvcmRlci1zb2xpZCBib3JkZXItMiBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVszMDBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gPlJ1bjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlU3VibWl0Q29kZX0gY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgcm91bmRlZC1sZyB3LVszMDBweF0gcC0xIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsiQ29kZU1pcnJvciIsInVzZVBhcmFtcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRlc3RpZCIsIm5vdGlmeTEiLCJub3RpZnkyIiwicW5EYXRhIiwic2V0UW5EYXRhIiwicW5BcnJheSIsInNldFFuQXJyYXkiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwicGFyYW1zIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsImNvbnRlc3RpZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJjYXB0dXJlZENvbnNvbGVPdXRwdXQiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldFJlc3VsdCIsImhhbmRsZUNoYW5nZSIsIm5ld0NvZGUiLCJoYW5kbGVTdWJtaXRDb2RlIiwiZSIsIm9yaWdpbmFsQ29uc29sZUxvZyIsImxvZyIsIm1lc3NhZ2UiLCJldmFsIiwiaGFuZGxlUnVuQ29kZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInRleHRhcmVhIiwicXRvbl9kZXNjcmlwdGlvbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJtb2RlIiwidGhlbWUiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/contest/ongoing/[contestid]/page.js\n"));

/***/ })

});