"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/[adminid]/del-qn/page",{

/***/ "(app-pages-browser)/./app/admin/[adminid]/del-qn/page.js":
/*!********************************************!*\
  !*** ./app/admin/[adminid]/del-qn/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DelQN; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction DelQN() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [qnData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        qn_id: \"\",\n        qn_output: \"\",\n        qn_solution: \"\",\n        qn_admin: params.adminid\n    });\n    const handelChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...qnData,\n            [name]: value\n        });\n    };\n    const handelSubmit = async (e)=>{\n        const temp = qnData;\n        console.log(qnData);\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/add-qn\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(temp)\n            }).then((data)=>{\n                console.log(data);\n            }).catch((error)=>{\n                console.error(\"Error:\", error);\n            });\n        } catch (error) {\n            console.error(\"Failed\", error);\n        }\n        setFormData({\n            qn_id: \"\",\n            qn_desc: \"\",\n            qn_points: 0,\n            qn_output: \"\",\n            qn_solution: \"\",\n            qn_admin: params.adminid\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 mt-5 max-w-[900px] mx-auto bg-red-300 rounded-md shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: handelSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"questionId\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"qn_id\",\n                            name: \"qn_id\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question ID\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"adminId\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Question ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"admin_id\",\n                            name: \"admin_id\",\n                            className: \"mt-1 p-2 w-full border rounded-md\",\n                            placeholder: \"Enter question ID\",\n                            onChange: handelChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"px-4 py-2 w-[250px] text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\admin\\\\[adminid]\\\\del-qn\\\\page.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(DelQN, \"CMJAPlefkoUgqXDC9vko9lJJ4II=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = DelQN;\nvar _c;\n$RefreshReg$(_c, \"DelQN\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9bYWRtaW5pZF0vZGVsLXFuL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUU3QixTQUFTRTs7SUFFcEIsTUFBTUMsU0FBU0YsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ0csUUFBUUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNuQ00sT0FBTztRQUNQQyxXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFBVU4sT0FBT08sT0FBTztJQUM1QjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFFbEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDVixZQUFZO1lBQUUsR0FBR0QsTUFBTTtZQUFFLENBQUNTLEtBQUssRUFBRUM7UUFBTTtJQUMzQztJQUVBLE1BQU1FLGVBQWUsT0FBT0o7UUFFeEIsTUFBTUssT0FBT2I7UUFDYmMsUUFBUUMsR0FBRyxDQUFDZjtRQUVaUSxFQUFFUSxjQUFjO1FBQ2hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZUFBZTtnQkFDeENDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVjtZQUN6QixHQUNLVyxJQUFJLENBQUNDLENBQUFBO2dCQUNGWCxRQUFRQyxHQUFHLENBQUNVO1lBQ2hCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7Z0JBQ0hiLFFBQVFhLEtBQUssQ0FBQyxVQUFVQTtZQUM1QjtRQUNSLEVBQUUsT0FBT0EsT0FBTztZQUNaYixRQUFRYSxLQUFLLENBQUMsVUFBVUE7UUFDNUI7UUFFQTFCLFlBQ0k7WUFDSUMsT0FBTztZQUNQMEIsU0FBUztZQUNUQyxXQUFXO1lBQ1gxQixXQUFXO1lBQ1hDLGFBQWE7WUFDYkMsVUFBVU4sT0FBT08sT0FBTztRQUM1QjtJQUdSO0lBQ0EscUJBQ0ksOERBQUN3QjtRQUFJQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFLRCxXQUFVO1lBQVlFLFVBQVVyQjs7OEJBQ2xDLDhEQUFDa0I7O3NDQUNHLDhEQUFDSTs0QkFBTUMsU0FBUTs0QkFBYUosV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHaEYsOERBQUNLOzRCQUNHQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIN0IsTUFBSzs0QkFDTHNCLFdBQVU7NEJBQ1ZRLGFBQVk7NEJBQ1pDLFVBQVVqQzs7Ozs7Ozs7Ozs7OzhCQUdsQiw4REFBQ3VCOztzQ0FDRyw4REFBQ0k7NEJBQU1DLFNBQVE7NEJBQVVKLFdBQVU7c0NBQTBDOzs7Ozs7c0NBRzdFLDhEQUFDSzs0QkFDR0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSDdCLE1BQUs7NEJBQ0xzQixXQUFVOzRCQUNWUSxhQUFZOzRCQUNaQyxVQUFVakM7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUN1QjtvQkFBSUMsV0FBVTs4QkFDUCw0RUFBQ1U7d0JBQ0dKLE1BQUs7d0JBQ0xOLFdBQVU7a0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0E3RndCakM7O1FBRUxELHNEQUFTQTs7O0tBRkpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9bYWRtaW5pZF0vZGVsLXFuL3BhZ2UuanM/ZTIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbFFOKCkge1xyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnN0IFtxbkRhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBxbl9pZDogXCJcIixcclxuICAgICAgICBxbl9vdXRwdXQ6IFwiXCIsXHJcbiAgICAgICAgcW5fc29sdXRpb246IFwiXCIsXHJcbiAgICAgICAgcW5fYWRtaW46IHBhcmFtcy5hZG1pbmlkXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4ucW5EYXRhLCBbbmFtZV06IHZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGVsU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHFuRGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxbkRhdGEpXHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkZC1xbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGVtcCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Rm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHFuX2lkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcW5fZGVzYzogXCJcIixcclxuICAgICAgICAgICAgICAgIHFuX3BvaW50czogMCxcclxuICAgICAgICAgICAgICAgIHFuX291dHB1dDogXCJcIixcclxuICAgICAgICAgICAgICAgIHFuX3NvbHV0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcW5fYWRtaW46IHBhcmFtcy5hZG1pbmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG10LTUgbWF4LXctWzkwMHB4XSBteC1hdXRvIGJnLXJlZC0zMDAgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIiBvblN1Ym1pdD17aGFuZGVsU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25JZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFF1ZXN0aW9uIElEXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicW5faWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxbl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgdy1mdWxsIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHF1ZXN0aW9uIElEXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkbWluSWRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBRdWVzdGlvbiBJRFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImFkbWluX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRtaW5faWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBxdWVzdGlvbiBJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHctWzI1MHB4XSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiRGVsUU4iLCJwYXJhbXMiLCJxbkRhdGEiLCJzZXRGb3JtRGF0YSIsInFuX2lkIiwicW5fb3V0cHV0IiwicW5fc29sdXRpb24iLCJxbl9hZG1pbiIsImFkbWluaWQiLCJoYW5kZWxDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGVsU3VibWl0IiwidGVtcCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJxbl9kZXNjIiwicW5fcG9pbnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/[adminid]/del-qn/page.js\n"));

/***/ })

});