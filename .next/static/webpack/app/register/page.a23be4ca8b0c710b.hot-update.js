"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./app/register/page.js":
/*!******************************!*\
  !*** ./app/register/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Register() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        password: \"\"\n    });\n    const handelChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handelSubmit = async (e)=>{\n        setFormData({\n            id: \"\",\n            name: \"\",\n            email: \"\",\n            phone: \"\",\n            password: \"\"\n        });\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/register\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            if (response.ok) {\n                router.push(\"/\");\n                console.log(\"Registration successful\");\n            } else {\n                console.error(\"Registration failed\");\n            }\n        } catch (error) {\n            console.error(\"An error occurred during registration:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-600 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white text-2xl font-bold\",\n                            children: \"jsCodeLab\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"text-white hover:text-gray-300\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white shadow-md p-8 rounded-md w-96\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-bold mb-4\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                            lineNumber: 70,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handelSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"w-full p-2 border rounded\",\n                                        placeholder: \"Name\",\n                                        maxLength: 15,\n                                        required: true,\n                                        name: \"name\",\n                                        value: formData.name,\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"w-full p-2 border rounded\",\n                                        placeholder: \"id\",\n                                        maxLength: 10,\n                                        required: true,\n                                        name: \"id\",\n                                        value: formData.id,\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        className: \"w-full p-2 border rounded\",\n                                        placeholder: \"Email\",\n                                        required: true,\n                                        name: \"email\",\n                                        value: formData.email,\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"tel\",\n                                        className: \"w-full p-2 border rounded\",\n                                        maxLength: 10,\n                                        required: true,\n                                        placeholder: \"Phone Number\",\n                                        name: \"phone\",\n                                        value: formData.phone,\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        className: \"w-full p-2 border rounded\",\n                                        maxLength: 10,\n                                        required: true,\n                                        placeholder: \"Password\",\n                                        name: \"password\",\n                                        value: formData.password,\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                            lineNumber: 71,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\register\\\\page.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(Register, \"3imGbH+oZ5UbWHt0nYnnBkgkbZQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3Rlci9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDTztBQUNKO0FBQ2U7QUFHN0IsU0FBU0k7O0lBRXBCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUV4QixNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7UUFDckNPLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtJQUNkO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUVsQixNQUFNLEVBQUVMLElBQUksRUFBRU0sS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENULFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0csS0FBSyxFQUFFTTtRQUFNO0lBQzdDO0lBRUEsTUFBTUUsZUFBZSxPQUFPSDtRQUV4QlAsWUFDSTtZQUNJQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFVBQVU7UUFDZDtRQUVKRSxFQUFFSSxjQUFjO1FBQ2hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO2dCQUMxQ0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNuQjtZQUN6QjtZQUNBLElBQUlhLFNBQVNPLEVBQUUsRUFBRTtnQkFDYnJCLE9BQU9zQixJQUFJLENBQUM7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQztZQUNoQixPQUFPO2dCQUNIRCxRQUFRRSxLQUFLLENBQUM7WUFDbEI7UUFDSixFQUFFLE9BQU9BLE9BQU87WUFDWkYsUUFBUUUsS0FBSyxDQUFDLDBDQUEwQ0E7UUFDNUQ7SUFFSjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0QsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFnQzs7Ozs7O3NDQUMvQyw4REFBQ0Q7c0NBQ0MsNEVBQUM3QixrREFBSUE7Z0NBQUMrQixNQUFLO2dDQUFJRCxXQUFVOzBDQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFHRixXQUFVO3NDQUEwQjs7Ozs7O3NDQUN4Qyw4REFBQ0c7NEJBQUtDLFVBQVVuQjs7OENBQ1osOERBQUNjO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDSzt3Q0FBTUMsTUFBSzt3Q0FDUk4sV0FBVTt3Q0FDVk8sYUFBWTt3Q0FDWkMsV0FBVzt3Q0FDWEMsUUFBUTt3Q0FDUmhDLE1BQUs7d0NBQ0xNLE9BQU9ULFNBQVNHLElBQUk7d0NBQ3BCaUMsVUFBVTdCOzs7Ozs7Ozs7Ozs4Q0FFbEIsOERBQUNrQjtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0s7d0NBQU1DLE1BQUs7d0NBQ1JOLFdBQVU7d0NBQ1ZPLGFBQVk7d0NBQ1pDLFdBQVc7d0NBQ1hDLFFBQVE7d0NBQ1JoQyxNQUFLO3dDQUNMTSxPQUFPVCxTQUFTRSxFQUFFO3dDQUNsQmtDLFVBQVU3Qjs7Ozs7Ozs7Ozs7OENBRWxCLDhEQUFDa0I7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNLO3dDQUFNQyxNQUFLO3dDQUNSTixXQUFVO3dDQUNWTyxhQUFZO3dDQUNaRSxRQUFRO3dDQUNSaEMsTUFBSzt3Q0FDTE0sT0FBT1QsU0FBU0ksS0FBSzt3Q0FDckJnQyxVQUFVN0I7Ozs7Ozs7Ozs7OzhDQUVsQiw4REFBQ2tCO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDSzt3Q0FBTUMsTUFBSzt3Q0FDUk4sV0FBVTt3Q0FDVlEsV0FBVzt3Q0FDWEMsUUFBUTt3Q0FDUkYsYUFBWTt3Q0FDWjlCLE1BQUs7d0NBQ0xNLE9BQU9ULFNBQVNLLEtBQUs7d0NBQ3JCK0IsVUFBVTdCOzs7Ozs7Ozs7Ozs4Q0FFbEIsOERBQUNrQjtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0s7d0NBQU1DLE1BQUs7d0NBQ1JOLFdBQVU7d0NBQ1ZRLFdBQVc7d0NBQ1hDLFFBQVE7d0NBQ1JGLGFBQVk7d0NBQ1o5QixNQUFLO3dDQUNMTSxPQUFPVCxTQUFTTSxRQUFRO3dDQUN4QjhCLFVBQVU3Qjs7Ozs7Ozs7Ozs7OENBRWxCLDhEQUFDOEI7b0NBQ0dMLE1BQUs7b0NBQ0xOLFdBQVU7OENBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJCO0dBNUh3QjVCOztRQUVMRCxzREFBU0E7OztLQUZKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVnaXN0ZXIvcGFnZS5qcz8wYmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaGFuZGVsQ2hhbmdlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRlbFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEZvcm1EYXRhKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCBwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcIj5qc0NvZGVMYWI8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMFwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIHAtOCByb3VuZGVkLW1kIHctOTZcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlJlZ2lzdGVyPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kZWxTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVJvdXRlciIsIlJlZ2lzdGVyIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImlkIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsImhhbmRlbENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRlbFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/register/page.js\n"));

/***/ })

});