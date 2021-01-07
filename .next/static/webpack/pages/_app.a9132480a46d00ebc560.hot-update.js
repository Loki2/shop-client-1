webpackHotUpdate_N_E("pages/_app",{

/***/ "./apollo/apolloClient.js":
/*!********************************!*\
  !*** ./apollo/apolloClient.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ \"./node_modules/apollo-client/bundle.esm.js\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ \"./node_modules/apollo-link-http/lib/bundle.esm.js\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-context */ \"./node_modules/apollo-link-context/lib/bundle.esm.js\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ \"./node_modules/apollo-cache-inmemory/lib/bundle.esm.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-with-apollo */ \"./node_modules/next-with-apollo/lib/index.js\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cookie */ \"./node_modules/cookie/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_7__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n //Link Uri\n//const uri = process.env.BACKEND_URI\n\nvar uri = 'http://localhost:5000/graphql'; //Create Http Linl\n\nvar httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__[\"createHttpLink\"])({\n  uri: uri,\n  fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default.a\n});\nvar cookies; //Set Authorization Link\n\nvar authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_3__[\"setContext\"])(function (_, _ref) {\n  var headers = _ref.headers;\n\n  //Get token from cookies\n  //Server Side \n  if (headers) {\n    cookies = cookie__WEBPACK_IMPORTED_MODULE_7___default.a.parse(header.cookie || '');\n  } //Client side\n\n\n  if (true) {\n    cookies = cookie__WEBPACK_IMPORTED_MODULE_7___default.a.parse(document.cookie || '');\n  }\n\n  var token = cookies && cookies.jwtToken || '';\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token ? \"Bearer \".concat(token) : ''\n    })\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = next_with_apollo__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c(_ref2) {\n  var initialState = _ref2.initialState;\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n    link: authLink.concat(httpLink),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n} //  {\n//     render: ({ Page, props }) => {\n//       return (\n//         <ApolloProvider client={props.apollo}>\n//           <Page {...props} />\n//         </ApolloProvider>\n//       );\n//     }\n//   }\n));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$withApollo\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL2Fwb2xsb0NsaWVudC5qcz9mNTVmIl0sIm5hbWVzIjpbInVyaSIsImh0dHBMaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJmZXRjaCIsImNvb2tpZXMiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsImNvb2tpZSIsInBhcnNlIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJ0b2tlbiIsImp3dFRva2VuIiwiYXV0aG9yaXphdGlvbiIsIndpdGhBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsK0JBQVosQyxDQUNBOztBQUNBLElBQU1DLFFBQVEsR0FBR0MsdUVBQWMsQ0FBQztBQUFDRixLQUFHLEVBQUhBLEdBQUQ7QUFBTUcsT0FBSyxFQUFMQSx5REFBS0E7QUFBWCxDQUFELENBQS9CO0FBRUEsSUFBSUMsT0FBSixDLENBQ0E7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHQyxzRUFBVSxDQUFDLFVBQUNDLENBQUQsUUFBa0I7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7O0FBQzVDO0FBR0E7QUFDQSxNQUFHQSxPQUFILEVBQVk7QUFDVkosV0FBTyxHQUFHSyw2Q0FBTSxDQUFDQyxLQUFQLENBQWFDLE1BQU0sQ0FBQ0YsTUFBUCxJQUFpQixFQUE5QixDQUFWO0FBQ0QsR0FQMkMsQ0FTNUM7OztBQUNBLFlBQWlDO0FBQy9CTCxXQUFPLEdBQUdLLDZDQUFNLENBQUNDLEtBQVAsQ0FBYUUsUUFBUSxDQUFDSCxNQUFULElBQW1CLEVBQWhDLENBQVY7QUFDRDs7QUFFRCxNQUFNSSxLQUFLLEdBQUdULE9BQU8sSUFBSUEsT0FBTyxDQUFDVSxRQUFuQixJQUErQixFQUE3QztBQUNBLFNBQU87QUFDTE4sV0FBTyxrQ0FDRkEsT0FERTtBQUVMTyxtQkFBYSxFQUFFRixLQUFLLG9CQUFhQSxLQUFiLElBQXVCO0FBRnRDO0FBREYsR0FBUDtBQU1ELENBckIwQixDQUEzQjtBQXdCZSxxRUFBQUcsdURBQVUsTUFBQyxtQkFBc0I7QUFBQSxNQUFuQkMsWUFBbUIsU0FBbkJBLFlBQW1CO0FBQzlDLFNBQU8sSUFBSUMsMERBQUosQ0FBaUI7QUFDdEJDLFFBQUksRUFBRWQsUUFBUSxDQUFDZSxNQUFULENBQWdCbkIsUUFBaEIsQ0FEZ0I7QUFFdEJvQixTQUFLLEVBQUUsSUFBSUMsbUVBQUosR0FBb0JDLE9BQXBCLENBQTRCTixZQUFZLElBQUksRUFBNUM7QUFGZSxHQUFqQixDQUFQO0FBSUQsQ0FMd0IsQ0FNekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZHlCLENBQXpCIiwiZmlsZSI6Ii4vYXBvbGxvL2Fwb2xsb0NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBvbGxvQ2xpZW50fSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7Y3JlYXRlSHR0cExpbmt9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHtzZXRDb250ZXh0fSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcbmltcG9ydCB7SW5NZW1vcnlDYWNoZX0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcbi8vTGluayBVcmlcbi8vY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9VUklcbmNvbnN0IHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbCdcbi8vQ3JlYXRlIEh0dHAgTGlubFxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7dXJpLCBmZXRjaH0pO1xuXG5sZXQgY29va2llc1xuLy9TZXQgQXV0aG9yaXphdGlvbiBMaW5rXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHtoZWFkZXJzfSkgPT4ge1xuICAvL0dldCB0b2tlbiBmcm9tIGNvb2tpZXNcbiAgXG5cbiAgLy9TZXJ2ZXIgU2lkZSBcbiAgaWYoaGVhZGVycykge1xuICAgIGNvb2tpZXMgPSBjb29raWUucGFyc2UoaGVhZGVyLmNvb2tpZSB8fCAnJylcbiAgfVxuXG4gIC8vQ2xpZW50IHNpZGVcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIGNvb2tpZXMgPSBjb29raWUucGFyc2UoZG9jdW1lbnQuY29va2llIHx8ICcnKVxuICB9XG5cbiAgY29uc3QgdG9rZW4gPSBjb29raWVzICYmIGNvb2tpZXMuand0VG9rZW4gfHwgJydcbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXG4gICAgfVxuICB9XG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oKHsgaW5pdGlhbFN0YXRlIH0pID0+IHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCkucmVzdG9yZShpbml0aWFsU3RhdGUgfHwge30pXG4gIH0pO1xufSxcbi8vICB7XG4vLyAgICAgcmVuZGVyOiAoeyBQYWdlLCBwcm9wcyB9KSA9PiB7XG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtwcm9wcy5hcG9sbG99PlxuLy8gICAgICAgICAgIDxQYWdlIHsuLi5wcm9wc30gLz5cbi8vICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbi8vICAgICAgICk7XG4vLyAgICAgfVxuLy8gICB9XG4pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/apolloClient.js\n");

/***/ })

})