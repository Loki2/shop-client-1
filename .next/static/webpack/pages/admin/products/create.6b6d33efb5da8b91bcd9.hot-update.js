webpackHotUpdate_N_E("pages/admin/products/create",{

/***/ "./graphql/Products.js":
/*!*****************************!*\
  !*** ./graphql/Products.js ***!
  \*****************************/
/*! exports provided: MY_PRODUCTS, QUERY_PRODUCTS, QUERY_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MY_PRODUCTS\", function() { return MY_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERY_PRODUCTS\", function() { return QUERY_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERY_PRODUCT\", function() { return QUERY_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_PRODUCT\", function() { return CREATE_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_PRODUCT\", function() { return UPDATE_PRODUCT; });\n/* harmony import */ var _Users_ailaodev_Desktop_Projects_Shoppin_shop_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject5() {\n  var data = Object(_Users_ailaodev_Desktop_Projects_Shoppin_shop_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation UPDATE_PRODUCT(\\n    $id: ID!\\n    $name: String\\n    $description: String\\n    $price: Float\\n    $stockqty: Int\\n    $imageUrl: String\\n  ) {\\n    updateProduct(\\n      id: $id\\n      name: $name\\n      description: $description\\n      price: $price\\n      stockqty: $stockqty\\n      imageUrl: $imageUrl\\n    ) {\\n      id\\n      name\\n      description\\n      price\\n      stockqty\\n      imageUrl\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_ailaodev_Desktop_Projects_Shoppin_shop_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nmutation CREATE_PRODUCT(\\n    $name: String!\\n    $description: String!\\n    $price: Float!\\n    $stockqty:Int\\n    $imageUrl: String!\\n  ){\\n    createProduct(\\n      name: $name\\n      description: $description\\n      price: $price\\n      stockqty: $stockqty\\n      imageUrl: $imageUrl\\n    ){\\n      id\\n      name\\n      description\\n      price\\n      stockqty\\n      imageUrl\\n    }\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_ailaodev_Desktop_Projects_Shoppin_shop_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query QUERY_PRODUCT($id: ID!) {\\n    product(id: $id) {\\n      id\\n      name\\n      description\\n      imageUrl\\n      price\\n      createdAt\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_ailaodev_Desktop_Projects_Shoppin_shop_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query {\\n    products {\\n      id\\n      name\\n      description\\n      price\\n      imageUrl\\n      createdAt\\n      user {\\n        id\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_ailaodev_Desktop_Projects_Shoppin_shop_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query MY_PRODUCTS {\\n    user {\\n      id\\n      username\\n      email\\n      products {\\n        id\\n        name\\n        description\\n        price\\n        stockqty\\n        imageUrl\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar MY_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nvar QUERY_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());\nvar QUERY_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());\nvar CREATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());\nvar UPDATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9Qcm9kdWN0cy5qcz8yNDU4Il0sIm5hbWVzIjpbIk1ZX1BST0RVQ1RTIiwiZ3FsIiwiUVVFUllfUFJPRFVDVFMiLCJRVUVSWV9QUk9EVUNUIiwiQ1JFQVRFX1BST0RVQ1QiLCJVUERBVEVfUFJPRFVDVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHQyxrREFBSCxtQkFBakI7QUFrQkEsSUFBTUMsY0FBYyxHQUFHRCxrREFBSCxvQkFBcEI7QUFnQkEsSUFBTUUsYUFBYSxHQUFHRixrREFBSCxvQkFBbkI7QUFhQSxJQUFNRyxjQUFjLEdBQUdILGtEQUFILG9CQUFwQjtBQXlCQSxJQUFNSSxjQUFjLEdBQUdKLGtEQUFILG9CQUFwQiIsImZpbGUiOiIuL2dyYXBocWwvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuXG5leHBvcnQgY29uc3QgTVlfUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IE1ZX1BST0RVQ1RTIHtcbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgICAgZW1haWxcbiAgICAgIHByb2R1Y3RzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBzdG9ja3F0eVxuICAgICAgICBpbWFnZVVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1BST0RVQ1RTID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgcHJvZHVjdHMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgICAgaW1hZ2VVcmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUVVFUllfUFJPRFVDVCA9IGdxbGBcbiAgcXVlcnkgUVVFUllfUFJPRFVDVCgkaWQ6IElEISkge1xuICAgIHByb2R1Y3QoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBpbWFnZVVybFxuICAgICAgcHJpY2VcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QUk9EVUNUID0gZ3FsYFxubXV0YXRpb24gQ1JFQVRFX1BST0RVQ1QoXG4gICAgJG5hbWU6IFN0cmluZyFcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcbiAgICAkcHJpY2U6IEZsb2F0IVxuICAgICRzdG9ja3F0eTpJbnRcbiAgICAkaW1hZ2VVcmw6IFN0cmluZyFcbiAgKXtcbiAgICBjcmVhdGVQcm9kdWN0KFxuICAgICAgbmFtZTogJG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICAgIHByaWNlOiAkcHJpY2VcbiAgICAgIHN0b2NrcXR5OiAkc3RvY2txdHlcbiAgICAgIGltYWdlVXJsOiAkaW1hZ2VVcmxcbiAgICApe1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgICAgc3RvY2txdHlcbiAgICAgIGltYWdlVXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0RVQ1QgPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUKFxuICAgICRpZDogSUQhXG4gICAgJG5hbWU6IFN0cmluZ1xuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgJHByaWNlOiBGbG9hdFxuICAgICRzdG9ja3F0eTogSW50XG4gICAgJGltYWdlVXJsOiBTdHJpbmdcbiAgKSB7XG4gICAgdXBkYXRlUHJvZHVjdChcbiAgICAgIGlkOiAkaWRcbiAgICAgIG5hbWU6ICRuYW1lXG4gICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICBwcmljZTogJHByaWNlXG4gICAgICBzdG9ja3F0eTogJHN0b2NrcXR5XG4gICAgICBpbWFnZVVybDogJGltYWdlVXJsXG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgICBzdG9ja3F0eVxuICAgICAgaW1hZ2VVcmxcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./graphql/Products.js\n");

/***/ })

})