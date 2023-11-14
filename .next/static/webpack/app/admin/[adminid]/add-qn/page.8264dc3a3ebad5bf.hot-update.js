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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddQn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddQn() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        qn_id: \"\",\n        qn_desc: \"\",\n        qn_points: 0,\n        qn_output: \"\",\n        qn_solution: \"\",\n        qn_admin: params.adminid\n    });\n    const handelChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handelSubmit = async (e)=>{\n        const temp = formData;\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/add-\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            }).then((response)=>response.json()).then((data)=>{\n                if (data[0].admin_id == temp.id && data[0].admin_password == temp.password) {\n                    router.push(\"/admin/\".concat(data[0].admin_id));\n                    console.log(\"logged\");\n                } else {\n                    console.log(\"not logged\");\n                }\n            }).catch((error)=>{\n                console.error(\"Error:\", error);\n            });\n        } catch (error) {\n            console.error(\"Registration Failed\", error);\n        }\n        setFormData({\n            id: \"\",\n            password: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 mt-5 max-w-[900px] mx-auto bg-red-300 rounded-md shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: handelSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionId\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"questionId\",\n                            name: \"questionId\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question ID\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionPoints\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question Points\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"questionPoints\",\n                            name: \"questionPoints\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question points\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionDescription\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question Description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"questionDescription\",\n                            name: \"questionDescription\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question description\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"output\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Output\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"output\",\n                            name: \"output\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter output\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"solution\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Solution\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"solution\",\n                            name: \"solution\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter solution\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                            lineNumber: 121,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"px-4 py-2 w-[250px] text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                        lineNumber: 130,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n                    lineNumber: 129,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n            lineNumber: 66,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\add-qn\\\\page.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_s(AddQn, \"Q8dLRJ/F6NVcu3kFJpnReF5hxtY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = AddQn;\nvar _c;\n$RefreshReg$(_c, \"AddQn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9bYWRtaW5pZF0vYWRkLXFuL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUc3QixTQUFTRTs7SUFFcEIsTUFBTUMsU0FBU0YsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNyQ00sT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQVVSLE9BQU9TLE9BQU87SUFDNUI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBRWxCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1osWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDVyxLQUFLLEVBQUVDO1FBQU07SUFDN0M7SUFFQSxNQUFNRSxlQUFlLE9BQU9KO1FBRXhCLE1BQU1LLE9BQU9mO1FBQ2JVLEVBQUVNLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxhQUFhO2dCQUN0Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUN2QjtZQUN6QixHQUNLd0IsSUFBSSxDQUFDUCxDQUFBQSxXQUFZQSxTQUFTUSxJQUFJLElBQzlCRCxJQUFJLENBQUNFLENBQUFBO2dCQUNGLElBQUlBLElBQUksQ0FBQyxFQUFFLENBQUNDLFFBQVEsSUFBSVosS0FBS2EsRUFBRSxJQUFJRixJQUFJLENBQUMsRUFBRSxDQUFDRyxjQUFjLElBQUlkLEtBQUtlLFFBQVEsRUFBRTtvQkFFeEVDLE9BQU9DLElBQUksQ0FBQyxVQUEyQixPQUFqQk4sSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUTtvQkFDdENNLFFBQVFDLEdBQUcsQ0FBQztnQkFDaEIsT0FDSztvQkFDREQsUUFBUUMsR0FBRyxDQUFDO2dCQUNoQjtZQUNKLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7Z0JBQ0hILFFBQVFHLEtBQUssQ0FBQyxVQUFVQTtZQUM1QjtRQUNSLEVBQUUsT0FBT0EsT0FBTztZQUNaSCxRQUFRRyxLQUFLLENBQUMsdUJBQXVCQTtRQUN6QztRQUVBbkMsWUFDSTtZQUNJMkIsSUFBSTtZQUNKRSxVQUFVO1FBQ2Q7SUFFUjtJQUVBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDQztZQUFLRCxXQUFVO1lBQVlFLFVBQVUxQjs7OEJBQ2xDLDhEQUFDdUI7O3NDQUNHLDhEQUFDSTs0QkFBTUMsU0FBUTs0QkFBYUosV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHaEYsOERBQUNLOzRCQUNHQyxNQUFLOzRCQUNMaEIsSUFBRzs0QkFDSGpCLE1BQUs7NEJBQ0wyQixXQUFVOzRCQUNWTyxhQUFZOzRCQUNaQyxVQUFVckM7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUM0Qjs7c0NBQ0csOERBQUNJOzRCQUFNQyxTQUFROzRCQUFpQkosV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHcEYsOERBQUNLOzRCQUNHQyxNQUFLOzRCQUNMaEIsSUFBRzs0QkFDSGpCLE1BQUs7NEJBQ0wyQixXQUFVOzRCQUNWTyxhQUFZOzRCQUNaQyxVQUFVckM7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUM0Qjs7c0NBQ0csOERBQUNJOzRCQUFNQyxTQUFROzRCQUFzQkosV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHekYsOERBQUNTOzRCQUNHbkIsSUFBRzs0QkFDSGpCLE1BQUs7NEJBQ0wyQixXQUFVOzRCQUNWTyxhQUFZOzRCQUNaQyxVQUFVckM7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUM0Qjs7c0NBQ0csOERBQUNJOzRCQUFNQyxTQUFROzRCQUFTSixXQUFVO3NDQUEwQzs7Ozs7O3NDQUc1RSw4REFBQ1M7NEJBQ0duQixJQUFHOzRCQUNIakIsTUFBSzs0QkFDTDJCLFdBQVU7NEJBQ1ZPLGFBQVk7NEJBQ1pDLFVBQVVyQzs7Ozs7Ozs7Ozs7OzhCQUdsQiw4REFBQzRCOztzQ0FDRyw4REFBQ0k7NEJBQU1DLFNBQVE7NEJBQVdKLFdBQVU7c0NBQTBDOzs7Ozs7c0NBRzlFLDhEQUFDUzs0QkFDR25CLElBQUc7NEJBQ0hqQixNQUFLOzRCQUNMMkIsV0FBVTs0QkFDVk8sYUFBWTs0QkFDWkMsVUFBVXJDOzs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDNEI7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNVO3dCQUNHSixNQUFLO3dCQUNMTixXQUFVO2tDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBckl3QnhDOztRQUVMRCxzREFBU0E7OztLQUZKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vW2FkbWluaWRdL2FkZC1xbi9wYWdlLmpzPzBmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkUW4oKSB7XHJcblxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcW5faWQ6IFwiXCIsXHJcbiAgICAgICAgcW5fZGVzYzogXCJcIixcclxuICAgICAgICBxbl9wb2ludHM6IDAsXHJcbiAgICAgICAgcW5fb3V0cHV0OiBcIlwiLFxyXG4gICAgICAgIHFuX3NvbHV0aW9uOiBcIlwiLFxyXG4gICAgICAgIHFuX2FkbWluOiBwYXJhbXMuYWRtaW5pZFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGVsU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGZvcm1EYXRhXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRkLScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0uYWRtaW5faWQgPT0gdGVtcC5pZCAmJiBkYXRhWzBdLmFkbWluX3Bhc3N3b3JkID09IHRlbXAucGFzc3dvcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYWRtaW4vJHtkYXRhWzBdLmFkbWluX2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgbG9nZ2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIEZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEZvcm1EYXRhKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgbXQtNSBtYXgtdy1bOTAwcHhdIG14LWF1dG8gYmctcmVkLTMwMCByb3VuZGVkLW1kIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIiBvblN1Ym1pdD17aGFuZGVsU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvbklkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1ZXN0aW9uIElEXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1ZXN0aW9uSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcXVlc3Rpb24gSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblBvaW50c1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWVzdGlvbiBQb2ludHNcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVlc3Rpb25Qb2ludHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25Qb2ludHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiB3LWZ1bGwgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHF1ZXN0aW9uIHBvaW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uRGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVlc3Rpb24gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1ZXN0aW9uRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcXVlc3Rpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdXRwdXRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT3V0cHV0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRwdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3V0cHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgdy1mdWxsIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBvdXRwdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb2x1dGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic29sdXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic29sdXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiB3LWZ1bGwgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNvbHV0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHctWzI1MHB4XSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJBZGRRbiIsInBhcmFtcyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJxbl9pZCIsInFuX2Rlc2MiLCJxbl9wb2ludHMiLCJxbl9vdXRwdXQiLCJxbl9zb2x1dGlvbiIsInFuX2FkbWluIiwiYWRtaW5pZCIsImhhbmRlbENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kZWxTdWJtaXQiLCJ0ZW1wIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImpzb24iLCJkYXRhIiwiYWRtaW5faWQiLCJpZCIsImFkbWluX3Bhc3N3b3JkIiwicGFzc3dvcmQiLCJyb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/[adminid]/add-qn/page.js\n"));

/***/ })

});