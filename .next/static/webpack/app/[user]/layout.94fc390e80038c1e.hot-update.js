"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[user]/layout",{

/***/ "(app-pages-browser)/./app/[user]/layout.js":
/*!******************************!*\
  !*** ./app/[user]/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Navbar */ \"(app-pages-browser)/./Components/Navbar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const home = \"/\".concat(params.user, \"/home\");\n    const contest = \"/\".concat(params.user, \"/contest\");\n    const profile = \"/\".concat(params.user, \"/profile\");\n    const problems = \"/\".concat(params.user, \"/problems\");\n    console.log(params.user);\n    console.log(params);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                home: home,\n                contest: contest,\n                profile: profile,\n                problems: problems\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dhruv\\\\OneDrive\\\\Desktop\\\\myn\\\\projects\\\\dbms\\\\jsCodeLab\\\\app\\\\[user]\\\\layout.js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, this);\n}\n_s(RootLayout, \"+jVsTcECDRo3yq2d7EQxlN9Ixog=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlcl0vbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDSDtBQUUxQixTQUFTRSxXQUFXLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjs7SUFFL0IsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLE9BQU8sSUFBZ0IsT0FBWkQsT0FBT0UsSUFBSSxFQUFDO0lBQzdCLE1BQU1DLFVBQVUsSUFBZ0IsT0FBWkgsT0FBT0UsSUFBSSxFQUFDO0lBQ2hDLE1BQU1FLFVBQVUsSUFBZ0IsT0FBWkosT0FBT0UsSUFBSSxFQUFDO0lBQ2hDLE1BQU1HLFdBQVcsSUFBZ0IsT0FBWkwsT0FBT0UsSUFBSSxFQUFDO0lBRWpDSSxRQUFRQyxHQUFHLENBQUNQLE9BQU9FLElBQUk7SUFFdkJJLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDZCxxQkFDSSw4REFBQ1E7OzBCQUNELDhEQUFDWCwwREFBTUE7Z0JBQUNJLE1BQU1BO2dCQUFNRSxTQUFTQTtnQkFBU0MsU0FBU0E7Z0JBQVNDLFVBQVVBOzs7Ozs7WUFDakVOOzs7Ozs7O0FBR1A7R0FqQndCRDs7UUFFTEYsc0RBQVNBOzs7S0FGSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1t1c2VyXS9sYXlvdXQuanM/NDNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL0NvbXBvbmVudHMvTmF2YmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtjaGlsZHJlbn0pe1xyXG4gICAgXHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxyXG4gICAgY29uc3QgaG9tZSA9IGAvJHtwYXJhbXMudXNlcn0vaG9tZWBcclxuICAgIGNvbnN0IGNvbnRlc3QgPSBgLyR7cGFyYW1zLnVzZXJ9L2NvbnRlc3RgXHJcbiAgICBjb25zdCBwcm9maWxlID0gYC8ke3BhcmFtcy51c2VyfS9wcm9maWxlYFxyXG4gICAgY29uc3QgcHJvYmxlbXMgPSBgLyR7cGFyYW1zLnVzZXJ9L3Byb2JsZW1zYFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcy51c2VyKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBob21lPXtob21lfSBjb250ZXN0PXtjb250ZXN0fSBwcm9maWxlPXtwcm9maWxlfSBwcm9ibGVtcz17cHJvYmxlbXN9Lz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsidXNlUGFyYW1zIiwiTmF2YmFyIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwicGFyYW1zIiwiaG9tZSIsInVzZXIiLCJjb250ZXN0IiwicHJvZmlsZSIsInByb2JsZW1zIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[user]/layout.js\n"));

/***/ })

});