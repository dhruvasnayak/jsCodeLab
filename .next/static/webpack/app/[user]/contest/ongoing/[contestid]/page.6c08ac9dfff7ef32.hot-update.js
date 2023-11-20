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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contestid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Contestid() {\n    _s();\n    const notify1 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"TEST CASE PASSED!\");\n    const notify2 = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Test Case Failed!\");\n    const [qnData, setQnData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [qnArray, setQnArray] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        try {\n            fetch(\"http://localhost:3000/api/contest-question\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id: params.contestid\n                })\n            }).then((response1)=>response1.json()).then((data1)=>{\n                setQnArray(data1);\n                setQnData(data1[0]);\n            }).catch((error1)=>{\n                console.error(\"Error:\", error1);\n            });\n        } catch (error1) {\n            console.error(\"Error\", error1);\n        }\n    }, []);\n    var capturedConsoleOutput;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('console.log(\"hello world!\")');\n    const [output, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleChange = (newCode1)=>{\n        setCode(newCode1);\n    };\n    const handleSubmitCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n        if (qnData.output == capturedConsoleOutput) {\n            // try {\n            //   const response = fetch('/api/add-points', {\n            //     method: 'POST',\n            //     headers: {\n            //       'Content-Type': 'application/json',\n            //     },\n            //     body: JSON.stringify({uid:params.user,qid:params.question}),\n            //   })\n            // } catch (error) {\n            //   console.error('Registration Failed', error);\n            // }\n            // console.log(\"India\")\n            notify1();\n        } else {\n            notify2();\n        }\n    };\n    const handleRunCode = (e)=>{\n        try {\n            capturedConsoleOutput = \"\";\n            const originalConsoleLog = console.log;\n            console.log = (message1)=>{\n                capturedConsoleOutput += message1;\n            };\n            eval(code);\n            console.log = originalConsoleLog;\n            setResult(capturedConsoleOutput);\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        }\n    };\n    const handleSelectChange = (event1)=>{\n        if (event1.target.value == \"1\") {\n            setQnData(qnArray[1]);\n            sselectedOption(\"1\");\n        }\n        if (event1.target.value == \"2\") {\n            setQnData(qnArray[2]);\n            selectedOption(\"2\");\n        }\n        if (event1.target.value == \"3\") {\n            setQnData(qnArray[3]);\n            selectedOption(\"3\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main bg-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: selectedOption,\n                                    onChange: handleSelectChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"1\",\n                                            children: \"Q1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"2\",\n                                            children: \"Q2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 141,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"3\",\n                                            children: \"Q3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                    value: qnData.qton_description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"w-[350px] m-2 h-[240px] border-solid border-8\",\n                                    placeholder: \"output\",\n                                    readOnly: true,\n                                    value: output\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 147,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                            lineNumber: 137,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-2  \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"code-box\",\n                                    width: \"840px\",\n                                    height: \"460px\",\n                                    value: code,\n                                    options: {\n                                        mode: \"js\",\n                                        theme: \"dracula\"\n                                    },\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-around\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleRunCode,\n                                                className: \"border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    children: \"Run\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                    lineNumber: 165,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                lineNumber: 164,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 163,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleSubmitCode,\n                                                className: \"border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    children: \"Submit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                    lineNumber: 170,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                                lineNumber: 169,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                            lineNumber: 168,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                                    lineNumber: 162,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                            lineNumber: 150,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 136,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                        lineNumber: 179,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 178,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n                    lineNumber: 184,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n            lineNumber: 135,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\contest\\\\ongoing\\\\[contestid]\\\\page.js\",\n        lineNumber: 134,\n        columnNumber: 9\n    }, this);\n}\n_s(Contestid, \"251EU8+0Thb5tvMIHMqiRbGTsfk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Contestid;\nvar _c;\n$RefreshReg$(_c, \"Contestid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vY29udGVzdC9vbmdvaW5nL1tjb250ZXN0aWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDSDtBQUNXO0FBQ1g7QUFDRztBQUdoQyxTQUFTTTs7SUFFcEIsTUFBTUMsVUFBVSxJQUFNSixxREFBS0EsQ0FBQztJQUM1QixNQUFNSyxVQUFVLElBQU1MLHFEQUFLQSxDQUFDO0lBRTVCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUV2RCxNQUFNVyxTQUFTZCwwREFBU0E7SUFFeEJJLGdEQUFTQSxDQUFDO1FBQ04sSUFBSTtZQUNBVyxNQUFNLDhDQUE4QztnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxJQUFJUCxPQUFPUSxTQUFTO2dCQUFDO1lBQ2hELEdBQ0tDLElBQUksQ0FBQyxDQUFDQyxZQUFhQSxVQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0c7Z0JBQ0hmLFdBQVdlO2dCQUNYakIsVUFBVWlCLEtBQUksQ0FBQyxFQUFFO1lBQ3JCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1lBQzVCO1FBQ1IsRUFBRSxPQUFPQSxRQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxTQUFTQTtRQUMzQjtJQUNKLEdBQUcsRUFBRTtJQUdMLElBQUlFO0lBQ0osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUM4QixRQUFRQyxVQUFVLEdBQUcvQiwrQ0FB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UTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFRN0IsOERBQUNmO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ2hELDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQjtHQXJMd0JJOztRQVNMTCxzREFBU0E7OztLQVRKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW3VzZXJdL2NvbnRlc3Qvb25nb2luZy9bY29udGVzdGlkXS9wYWdlLmpzPzE1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ0B1aXcvcmVhY3QtY29kZW1pcnJvcic7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlc3RpZCgpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZnkxID0gKCkgPT4gdG9hc3QoJ1RFU1QgQ0FTRSBQQVNTRUQhJyk7XHJcbiAgICBjb25zdCBub3RpZnkyID0gKCkgPT4gdG9hc3QoXCJUZXN0IENhc2UgRmFpbGVkIVwiKTtcclxuXHJcbiAgICBjb25zdCBbcW5EYXRhLCBzZXRRbkRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3FuQXJyYXksIHNldFFuQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jb250ZXN0LXF1ZXN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiBwYXJhbXMuY29udGVzdGlkIH0pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFFuQXJyYXkoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRRbkRhdGEoZGF0YVswXSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICB2YXIgY2FwdHVyZWRDb25zb2xlT3V0cHV0O1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJ2NvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpJyk7XHJcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld0NvZGUpID0+IHtcclxuICAgICAgICBzZXRDb2RlKG5ld0NvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRDb2RlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRDb25zb2xlT3V0cHV0ICs9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xyXG5cclxuICAgICAgICAgICAgc2V0UmVzdWx0KGNhcHR1cmVkQ29uc29sZU91dHB1dCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChxbkRhdGEub3V0cHV0ID09IGNhcHR1cmVkQ29uc29sZU91dHB1dCkge1xyXG5cclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgLy8gICBjb25zdCByZXNwb25zZSA9IGZldGNoKCcvYXBpL2FkZC1wb2ludHMnLCB7XHJcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dWlkOnBhcmFtcy51c2VyLHFpZDpwYXJhbXMucXVlc3Rpb259KSxcclxuICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBGYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbmRpYVwiKVxyXG4gICAgICAgICAgICBub3RpZnkxKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSdW5Db2RlID0gKGUpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjYXB0dXJlZENvbnNvbGVPdXRwdXQgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkQ29uc29sZU91dHB1dCArPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBldmFsKGNvZGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBvcmlnaW5hbENvbnNvbGVMb2c7XHJcblxyXG4gICAgICAgICAgICBzZXRSZXN1bHQoY2FwdHVyZWRDb25zb2xlT3V0cHV0KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWU9PVwiMVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0UW5EYXRhKHFuQXJyYXlbMV0pO1xyXG4gICAgICAgICAgICBzc2VsZWN0ZWRPcHRpb24oXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWU9PVwiMlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0UW5EYXRhKHFuQXJyYXlbMl0pO1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbihcIjJcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWU9PVwiM1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0UW5EYXRhKHFuQXJyYXlbM10pO1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbihcIjNcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbiBiZy1ncmF5LTQwMCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UTE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UTI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+UTM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSd3LVszNTBweF0gbS0yIGgtWzI0MHB4XSBib3JkZXItc29saWQgYm9yZGVyLTgnIHZhbHVlPXtxbkRhdGEucXRvbl9kZXNjcmlwdGlvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSd3LVszNTBweF0gbS0yIGgtWzI0MHB4XSBib3JkZXItc29saWQgYm9yZGVyLTgnIHBsYWNlaG9sZGVyPSdvdXRwdXQnIHJlYWRPbmx5IHZhbHVlPXtvdXRwdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTIgICc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29kZU1pcnJvciBjbGFzc05hbWU9J2NvZGUtYm94J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9Jzg0MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSc0NjBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdqcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICdkcmFjdWxhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlUnVuQ29kZX0gY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgdy1bMzAwcHhdIHAtMSB0ZXh0LWNlbnRlciAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5SdW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdENvZGV9IGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgdy1bMzAwcHhdIHAtMSB0ZXh0LWNlbnRlciAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59Il0sIm5hbWVzIjpbIkNvZGVNaXJyb3IiLCJ1c2VQYXJhbXMiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250ZXN0aWQiLCJub3RpZnkxIiwibm90aWZ5MiIsInFuRGF0YSIsInNldFFuRGF0YSIsInFuQXJyYXkiLCJzZXRRbkFycmF5Iiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsInBhcmFtcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJjb250ZXN0aWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FwdHVyZWRDb25zb2xlT3V0cHV0IiwiY29kZSIsInNldENvZGUiLCJvdXRwdXQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdDb2RlIiwiaGFuZGxlU3VibWl0Q29kZSIsImUiLCJvcmlnaW5hbENvbnNvbGVMb2ciLCJsb2ciLCJtZXNzYWdlIiwiZXZhbCIsImhhbmRsZVJ1bkNvZGUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3NlbGVjdGVkT3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInF0b25fZGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwibW9kZSIsInRoZW1lIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/contest/ongoing/[contestid]/page.js\n"));

/***/ })

});