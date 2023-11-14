"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/[adminid]/add-qn/page",{

/***/ "(app-pages-browser)/./app/admin/[adminid]/add-qn/page.js":
/*!********************************************!*\
  !*** ./app/admin/[adminid]/add-qn/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddQn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddQn() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [qnData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        qn_id: \"\",\n        qn_desc: \"\",\n        qn_points: 0,\n        qn_output: \"\",\n        qn_solution: \"\",\n        qn_admin: params.adminid\n    });\n    const handelChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...qnData,\n            [name]: value\n        });\n    };\n    const handelSubmit = async (e)=>{\n        const temp = qnData;\n        console.log(qnData);\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/add-qn\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(temp)\n            }).then((data)=>{\n                console.log(data);\n            }).catch((error)=>{\n                console.error(\"Error:\", error);\n            });\n        } catch (error) {\n            console.error(\"Failed\", error);\n        }\n        setFormData({\n            qn_id: \"\",\n            qn_desc: \"\",\n            qn_points: 0,\n            qn_output: \"\",\n            qn_solution: \"\",\n            qn_admin: params.adminid\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 mt-5 max-w-[900px] mx-auto bg-red-300 rounded-md shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: handelSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionId\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"qn_id\",\n                            name: \"qn_id\",\n                            value: qnData.qn_id,\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question ID\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionPoints\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question Points\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            id: \"qn_points\",\n                            name: \"qn_points\",\n                            value: qnData.qn_points,\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question points\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionDescription\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question Description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"qn_desc\",\n                            name: \"qn_desc\",\n                            value: qnData.qn_desc,\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question description\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"output\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Output\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"qn_output\",\n                            name: \"qn_output\",\n                            value: qnData.qn_output,\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter output\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"solution\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Solution\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 122,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"qn_solution\",\n                            name: \"qn_solution\",\n                            value: qnData.qn_solution,\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter solution\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 121,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"px-4 py-2 w-[250px] text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                        lineNumber: 135,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n            lineNumber: 66,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_s(AddQn, \"ZVBoPrknbcIHbex3S4SXsChkxqA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = AddQn;\nvar _c;\n$RefreshReg$(_c, \"AddQn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9bYWRtaW5pZF0vYWRkLXFuL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUc3QixTQUFTRTs7SUFFcEIsTUFBTUMsU0FBU0YsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ0csUUFBUUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNuQ00sT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQVVSLE9BQU9TLE9BQU87SUFDNUI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBRWxCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1osWUFBWTtZQUFFLEdBQUdELE1BQU07WUFBRSxDQUFDVyxLQUFLLEVBQUVDO1FBQU07SUFDM0M7SUFFQSxNQUFNRSxlQUFlLE9BQU9KO1FBRXhCLE1BQU1LLE9BQU9mO1FBQ2JnQixRQUFRQyxHQUFHLENBQUNqQjtRQUVaVSxFQUFFUSxjQUFjO1FBQ2hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZUFBZTtnQkFDeENDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVjtZQUN6QixHQUNLVyxJQUFJLENBQUNDLENBQUFBO2dCQUNGWCxRQUFRQyxHQUFHLENBQUNVO1lBQ2hCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7Z0JBQ0hiLFFBQVFhLEtBQUssQ0FBQyxVQUFVQTtZQUM1QjtRQUNSLEVBQUUsT0FBT0EsT0FBTztZQUNaYixRQUFRYSxLQUFLLENBQUMsVUFBVUE7UUFDNUI7UUFFQTVCLFlBQ0k7WUFDSUMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxhQUFhO1lBQ2JDLFVBQVVSLE9BQU9TLE9BQU87UUFDNUI7SUFJUjtJQUVBLHFCQUNJLDhEQUFDc0I7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7WUFBS0QsV0FBVTtZQUFZRSxVQUFVbkI7OzhCQUNsQyw4REFBQ2dCOztzQ0FDRyw4REFBQ0k7NEJBQU1DLFNBQVE7NEJBQWFKLFdBQVU7c0NBQTBDOzs7Ozs7c0NBR2hGLDhEQUFDSzs0QkFDR0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSDNCLE1BQUs7NEJBQ0xDLE9BQU9aLE9BQU9FLEtBQUs7NEJBQ25CNkIsV0FBVTs0QkFDVlEsYUFBWTs0QkFDWkMsVUFBVS9COzs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDcUI7O3NDQUNHLDhEQUFDSTs0QkFBTUMsU0FBUTs0QkFBaUJKLFdBQVU7c0NBQTBDOzs7Ozs7c0NBR3BGLDhEQUFDSzs0QkFDR0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSDNCLE1BQUs7NEJBQ0xDLE9BQU9aLE9BQU9JLFNBQVM7NEJBQ3ZCMkIsV0FBVTs0QkFDVlEsYUFBWTs0QkFDWkMsVUFBVS9COzs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDcUI7O3NDQUNHLDhEQUFDSTs0QkFBTUMsU0FBUTs0QkFBc0JKLFdBQVU7c0NBQTBDOzs7Ozs7c0NBR3pGLDhEQUFDVTs0QkFDR0gsSUFBRzs0QkFDSDNCLE1BQUs7NEJBQ0xDLE9BQU9aLE9BQU9HLE9BQU87NEJBQ3JCNEIsV0FBVTs0QkFDVlEsYUFBWTs0QkFDWkMsVUFBVS9COzs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDcUI7O3NDQUNHLDhEQUFDSTs0QkFBTUMsU0FBUTs0QkFBU0osV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHNUUsOERBQUNVOzRCQUNHSCxJQUFHOzRCQUNIM0IsTUFBSzs0QkFDTEMsT0FBT1osT0FBT0ssU0FBUzs0QkFDdkIwQixXQUFVOzRCQUNWUSxhQUFZOzRCQUNaQyxVQUFVL0I7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNxQjs7c0NBQ0csOERBQUNJOzRCQUFNQyxTQUFROzRCQUFXSixXQUFVO3NDQUEwQzs7Ozs7O3NDQUc5RSw4REFBQ1U7NEJBQ0dILElBQUc7NEJBQ0gzQixNQUFLOzRCQUNMQyxPQUFPWixPQUFPTSxXQUFXOzRCQUN6QnlCLFdBQVU7NEJBQ1ZRLGFBQVk7NEJBQ1pDLFVBQVUvQjs7Ozs7Ozs7Ozs7OzhCQUdsQiw4REFBQ3FCO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDVzt3QkFDR0wsTUFBSzt3QkFDTE4sV0FBVTtrQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQTFJd0JqQzs7UUFFTEQsc0RBQVNBOzs7S0FGSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluL1thZG1pbmlkXS9hZGQtcW4vcGFnZS5qcz8wZjI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFFuKCkge1xyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnN0IFtxbkRhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBxbl9pZDogXCJcIixcclxuICAgICAgICBxbl9kZXNjOiBcIlwiLFxyXG4gICAgICAgIHFuX3BvaW50czogMCxcclxuICAgICAgICBxbl9vdXRwdXQ6IFwiXCIsXHJcbiAgICAgICAgcW5fc29sdXRpb246IFwiXCIsXHJcbiAgICAgICAgcW5fYWRtaW46IHBhcmFtcy5hZG1pbmlkXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4ucW5EYXRhLCBbbmFtZV06IHZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGVsU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHFuRGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxbkRhdGEpXHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkZC1xbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGVtcCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Rm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHFuX2lkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcW5fZGVzYzogXCJcIixcclxuICAgICAgICAgICAgICAgIHFuX3BvaW50czogMCxcclxuICAgICAgICAgICAgICAgIHFuX291dHB1dDogXCJcIixcclxuICAgICAgICAgICAgICAgIHFuX3NvbHV0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcW5fYWRtaW46IHBhcmFtcy5hZG1pbmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG10LTUgbWF4LXctWzkwMHB4XSBteC1hdXRvIGJnLXJlZC0zMDAgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS00XCIgb25TdWJtaXQ9e2hhbmRlbFN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25JZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWVzdGlvbiBJRFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxbl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxbl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxbkRhdGEucW5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcXVlc3Rpb24gSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblBvaW50c1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWVzdGlvbiBQb2ludHNcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxbl9wb2ludHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicW5fcG9pbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3FuRGF0YS5xbl9wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcXVlc3Rpb24gcG9pbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25EZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWVzdGlvbiBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicW5fZGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxbl9kZXNjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3FuRGF0YS5xbl9kZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiB3LWZ1bGwgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHF1ZXN0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3V0cHV0XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE91dHB1dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicW5fb3V0cHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInFuX291dHB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxbkRhdGEucW5fb3V0cHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiB3LWZ1bGwgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG91dHB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvbHV0aW9uXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbHV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxbl9zb2x1dGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxbl9zb2x1dGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxbkRhdGEucW5fc29sdXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc29sdXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdy1bMjUwcHhdIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsIkFkZFFuIiwicGFyYW1zIiwicW5EYXRhIiwic2V0Rm9ybURhdGEiLCJxbl9pZCIsInFuX2Rlc2MiLCJxbl9wb2ludHMiLCJxbl9vdXRwdXQiLCJxbl9zb2x1dGlvbiIsInFuX2FkbWluIiwiYWRtaW5pZCIsImhhbmRlbENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kZWxTdWJtaXQiLCJ0ZW1wIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/[adminid]/add-qn/page.js\n"));

/***/ })

});