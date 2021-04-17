module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/apolloClient.js":
/*!********************************!*\
  !*** ./apollo/apolloClient.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_6__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n //Link Uri\n//const uri = process.env.BACKEND_URI \n\nconst uri = 'http://188.166.178.217:4000/graphql'; //Create Http Link\n\nconst httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__[\"createHttpLink\"])({\n  uri,\n  fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default())\n});\nlet cookies; //Set Authorization Link\n\nconst authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__[\"setContext\"])((_, {\n  headers\n}) => {\n  //Get token from cookies\n  //Server Side \n  if (headers) {\n    cookies = cookie__WEBPACK_IMPORTED_MODULE_6___default.a.parse(header.cookie || '');\n  } //Client side\n\n\n  if (false) {}\n\n  const token = cookies && cookies.jwtToken || '';\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token ? `Bearer ${token}` : ''\n    })\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_5___default()(({\n  initialState\n}) => {\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    link: authLink.concat(httpLink),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n} //  {\n//     render: ({ Page, props }) => {\n//       return (\n//         <ApolloProvider client={props.apollo}>\n//           <Page {...props} />\n//         </ApolloProvider>\n//       );\n//     }\n//   }\n));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vYXBvbGxvQ2xpZW50LmpzP2Y1NWYiXSwibmFtZXMiOlsidXJpIiwiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsImZldGNoIiwiY29va2llcyIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwiY29va2llIiwicGFyc2UiLCJoZWFkZXIiLCJ0b2tlbiIsImp3dFRva2VuIiwiYXV0aG9yaXphdGlvbiIsIndpdGhBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQSxNQUFNQSxHQUFHLEdBQUcscUNBQVosQyxDQUVBOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsdUVBQWMsQ0FBQztBQUFDRixLQUFEO0FBQU1HLG9FQUFLQTtBQUFYLENBQUQsQ0FBL0I7QUFFQSxJQUFJQyxPQUFKLEMsQ0FDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHNFQUFVLENBQUMsQ0FBQ0MsQ0FBRCxFQUFJO0FBQUNDO0FBQUQsQ0FBSixLQUFrQjtBQUM1QztBQUdBO0FBQ0EsTUFBR0EsT0FBSCxFQUFZO0FBQ1ZKLFdBQU8sR0FBR0ssNkNBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxNQUFNLENBQUNGLE1BQVAsSUFBaUIsRUFBOUIsQ0FBVjtBQUNELEdBUDJDLENBUzVDOzs7QUFDQSxhQUFpQyxFQUVoQzs7QUFFRCxRQUFNRyxLQUFLLEdBQUdSLE9BQU8sSUFBSUEsT0FBTyxDQUFDUyxRQUFuQixJQUErQixFQUE3QztBQUNBLFNBQU87QUFDTEwsV0FBTyxrQ0FDRkEsT0FERTtBQUVMTSxtQkFBYSxFQUFFRixLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QjtBQUZ0QztBQURGLEdBQVA7QUFNRCxDQXJCMEIsQ0FBM0I7QUF3QmVHLHNIQUFVLENBQUMsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBc0I7QUFDOUMsU0FBTyxJQUFJQywwREFBSixDQUFpQjtBQUN0QkMsUUFBSSxFQUFFYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JsQixRQUFoQixDQURnQjtBQUV0Qm1CLFNBQUssRUFBRSxJQUFJQyxtRUFBSixHQUFvQkMsT0FBcEIsQ0FBNEJOLFlBQVksSUFBSSxFQUE1QztBQUZlLEdBQWpCLENBQVA7QUFJQyxDQUxzQixDQU16QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkeUIsQ0FBekIiLCJmaWxlIjoiLi9hcG9sbG8vYXBvbGxvQ2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcG9sbG9DbGllbnR9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHtjcmVhdGVIdHRwTGlua30gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQge3NldENvbnRleHR9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtJbk1lbW9yeUNhY2hlfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICduZXh0LXdpdGgtYXBvbGxvJztcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuLy9MaW5rIFVyaVxuLy9jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSSSBcbmNvbnN0IHVyaSA9ICdodHRwOi8vMTg4LjE2Ni4xNzguMjE3OjQwMDAvZ3JhcGhxbCdcblxuLy9DcmVhdGUgSHR0cCBMaW5rXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHt1cmksIGZldGNofSk7XG5cbmxldCBjb29raWVzXG4vL1NldCBBdXRob3JpemF0aW9uIExpbmtcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywge2hlYWRlcnN9KSA9PiB7XG4gIC8vR2V0IHRva2VuIGZyb20gY29va2llc1xuICBcblxuICAvL1NlcnZlciBTaWRlIFxuICBpZihoZWFkZXJzKSB7XG4gICAgY29va2llcyA9IGNvb2tpZS5wYXJzZShoZWFkZXIuY29va2llIHx8ICcnKVxuICB9XG5cbiAgLy9DbGllbnQgc2lkZVxuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgY29va2llcyA9IGNvb2tpZS5wYXJzZShkb2N1bWVudC5jb29raWUgfHwgJycpXG4gIH1cblxuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMgJiYgY29va2llcy5qd3RUb2tlbiB8fCAnJ1xuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIC4uLmhlYWRlcnMsXG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcbiAgICB9XG4gIH1cbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbygoeyBpbml0aWFsU3RhdGUgfSkgPT4ge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSlcbiAgfSk7XG4gIH0sXG4vLyAge1xuLy8gICAgIHJlbmRlcjogKHsgUGFnZSwgcHJvcHMgfSkgPT4ge1xuLy8gICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17cHJvcHMuYXBvbGxvfT5cbi8vICAgICAgICAgICA8UGFnZSB7Li4ucHJvcHN9IC8+XG4vLyAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4vLyAgICAgICApO1xuLy8gICAgIH1cbi8vICAgfVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/apolloClient.js\n");

/***/ }),

/***/ "./components/Layouts.jsx":
/*!********************************!*\
  !*** ./components/Layouts.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ailaodev/Desktop/Projects/Shoppin/shop-client/components/Layouts.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import Navigation from './Navigation';\n// import { AuthContext } from '../contexts/AuthProvider';\n\nfunction Layouts({\n  children\n}) {\n  //const { user, setAuthUser } = useContext(AuthContext);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Ozone.com\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })), children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dHMuanN4PzJjYmYiXSwibmFtZXMiOlsiTGF5b3V0cyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUErQjtBQUM3QjtBQUVBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUdBLFFBTkgsQ0FERjtBQVVEOztBQUVjRCxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuLy8gaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbi8vIGltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aFByb3ZpZGVyJztcblxuZnVuY3Rpb24gTGF5b3V0cyh7IGNoaWxkcmVuIH0pIHtcbiAgLy9jb25zdCB7IHVzZXIsIHNldEF1dGhVc2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk96b25lLmNvbTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiA8TmF2aWdhdGlvbiAvPiAqL31cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layouts.jsx\n");

/***/ }),

/***/ "./contexts/AuthProvider.js":
/*!**********************************!*\
  !*** ./contexts/AuthProvider.js ***!
  \**********************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ailaodev/Desktop/Projects/Shoppin/shop-client/contexts/AuthProvider.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nconst AuthProvider = ({\n  children,\n  userData\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(userData); //Use Effect For Logout Automatic every tabs every windows\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const synLogout = e => {\n      if (e.key === \"logout\") {\n        setUser(null);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/Products\");\n      }\n    };\n\n    window.addEventListener(\"storage\", synLogout);\n    return () => {\n      window.removeEventListener(\"storage\", synLogout);\n      window.localStorage.removeItem(\"logout\");\n    };\n  }, []);\n\n  const setAuthUser = userInfo => setUser(userInfo); //Create Logout on Context provider\n\n\n  const signout = () => {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(\"jwtToken\");\n    setUser(null);\n    localStorage.setItem(\"logout\", Date.now());\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/\");\n  };\n\n  return __jsx(AuthContext.Provider, {\n    value: {\n      user,\n      setAuthUser,\n      signout\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9BdXRoUHJvdmlkZXIuanM/OWYyNyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN5bkxvZ291dCIsImUiLCJrZXkiLCJSb3V0ZXIiLCJwdXNoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0QXV0aFVzZXIiLCJ1c2VySW5mbyIsInNpZ25vdXQiLCJDb29raWVzIiwicmVtb3ZlIiwic2V0SXRlbSIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFDUCxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0QjtBQUMzQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUNILFFBQUQsQ0FBaEMsQ0FEMkMsQ0FFM0M7O0FBQ0FJLHlEQUFTLENBQUMsTUFBTTtBQUNWLFVBQU1DLFNBQVMsR0FBSUMsQ0FBRCxJQUFPO0FBQ25CLFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFFBQWQsRUFBd0I7QUFDbEJMLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDQU0sMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVo7QUFDTDtBQUNOLEtBTEQ7O0FBTUFDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNOLFNBQW5DO0FBQ0EsV0FBTyxNQUFNO0FBQ1BLLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NQLFNBQXRDO0FBQ0FLLFlBQU0sQ0FBQ0csWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0IsUUFBL0I7QUFDTCxLQUhEO0FBSUwsR0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxRQUFNQyxXQUFXLEdBQUlDLFFBQUQsSUFBY2QsT0FBTyxDQUFDYyxRQUFELENBQXpDLENBakIyQyxDQWtCM0M7OztBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ2hCQyxvREFBTyxDQUFDQyxNQUFSLENBQWUsVUFBZjtBQUNBakIsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBVyxnQkFBWSxDQUFDTyxPQUFiLENBQXFCLFFBQXJCLEVBQStCQyxJQUFJLENBQUNDLEdBQUwsRUFBL0I7QUFDQWQsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDTCxHQUxEOztBQU1BLFNBQ00sTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRVIsVUFBRjtBQUFRYyxpQkFBUjtBQUFxQkU7QUFBckIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPbEIsUUFEUCxDQUROO0FBS0wsQ0E5QkQ7O0FBZ0NlRCwyRUFBZiIsImZpbGUiOiIuL2NvbnRleHRzL0F1dGhQcm92aWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgdXNlckRhdGEgfSkgPT4ge1xuICAgICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuICAgICAgLy9Vc2UgRWZmZWN0IEZvciBMb2dvdXQgQXV0b21hdGljIGV2ZXJ5IHRhYnMgZXZlcnkgd2luZG93c1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN5bkxvZ291dCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwibG9nb3V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9Qcm9kdWN0c1wiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luTG9nb3V0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luTG9nb3V0KTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IHNldEF1dGhVc2VyID0gKHVzZXJJbmZvKSA9PiBzZXRVc2VyKHVzZXJJbmZvKTtcbiAgICAgIC8vQ3JlYXRlIExvZ291dCBvbiBDb250ZXh0IHByb3ZpZGVyXG4gICAgICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJqd3RUb2tlblwiKTtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ291dFwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldEF1dGhVc2VyLCBzaWdub3V0IH19PlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoUHJvdmlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthProvider.js\n");

/***/ }),

/***/ "./graphql/User.js":
/*!*************************!*\
  !*** ./graphql/User.js ***!
  \*************************/
/*! exports provided: QUERY_USER, SIGN_UP, LOG_IN, REQUEST_RESET_PASSWORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERY_USER\", function() { return QUERY_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP\", function() { return SIGN_UP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN\", function() { return LOG_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_RESET_PASSWORD\", function() { return REQUEST_RESET_PASSWORD; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Export global User\n */\n\nconst QUERY_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query QUERY_USER {\n    user {\n      id\n      username\n      email\n      products {\n        id\n        name\n        description\n        price\n        stockqty\n        imageUrl\n      }\n      carts {\n        id\n        product {\n          name\n          description\n          imageUrl\n          price\n        }\n        quantity\n      }\n      orders {\n        id\n        items {\n          product {\n            name\n            description\n            price\n            imageUrl\n          }\n          quantity\n        }\n      }\n      cards {\n        id\n        cardInfo {\n          id\n          expiration_month\n          expiration_year\n          brand\n          last_digits\n        }\n      }\n    }\n  }\n`;\nconst SIGN_UP = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  mutation SIGN_UP($username: String!, $email: String!, $password: String!) {\n    signup(username: $username, email: $email, password: $password) {\n      id\n      username\n      email\n    }\n  }\n`;\nconst LOG_IN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  mutation LOG_IN($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      user {\n        id\n        username\n        email\n        products {\n          id\n          name\n          description\n          imageUrl\n          price\n        }\n        carts {\n          id\n          product {\n            name\n            description\n            price\n            imageUrl\n          }\n          quantity\n        }\n        orders {\n          id\n          items {\n            product {\n              name\n              description\n              price\n              imageUrl\n            }\n            quantity\n          }\n        }\n        cards {\n          id\n          cardInfo {\n            id\n            expiration_month\n            expiration_year\n            brand\n            last_digits\n          }\n        }\n      }\n      jwt\n    }\n  }\n`;\nconst REQUEST_RESET_PASSWORD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  mutation REQUEST_RESET_PASSWORD($email: String!) {\n    requestResetPassword(email: $email) {\n      message\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncmFwaHFsL1VzZXIuanM/NjA5ZiJdLCJuYW1lcyI6WyJRVUVSWV9VU0VSIiwiZ3FsIiwiU0lHTl9VUCIsIkxPR19JTiIsIlJFUVVFU1RfUkVTRVRfUEFTU1dPUkQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUEsVUFBVSxHQUFHQyxrREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoRE87QUFrREEsTUFBTUMsT0FBTyxHQUFHRCxrREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUk87QUFVQSxNQUFNRSxNQUFNLEdBQUdGLGtEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsRE87QUFvREEsTUFBTUcsc0JBQXNCLEdBQUdILGtEQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PIiwiZmlsZSI6Ii4vZ3JhcGhxbC9Vc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcblxuLyoqXG4gKiBFeHBvcnQgZ2xvYmFsIFVzZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFFVRVJZX1VTRVIgPSBncWxgXG4gIHF1ZXJ5IFFVRVJZX1VTRVIge1xuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgICBlbWFpbFxuICAgICAgcHJvZHVjdHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIHN0b2NrcXR5XG4gICAgICAgIGltYWdlVXJsXG4gICAgICB9XG4gICAgICBjYXJ0cyB7XG4gICAgICAgIGlkXG4gICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIGltYWdlVXJsXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBxdWFudGl0eVxuICAgICAgfVxuICAgICAgb3JkZXJzIHtcbiAgICAgICAgaWRcbiAgICAgICAgaXRlbXMge1xuICAgICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgIH1cbiAgICAgICAgICBxdWFudGl0eVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXJkcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGNhcmRJbmZvIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGV4cGlyYXRpb25fbW9udGhcbiAgICAgICAgICBleHBpcmF0aW9uX3llYXJcbiAgICAgICAgICBicmFuZFxuICAgICAgICAgIGxhc3RfZGlnaXRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQID0gZ3FsYFxuICBtdXRhdGlvbiBTSUdOX1VQKCR1c2VybmFtZTogU3RyaW5nISwgJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICBzaWdudXAodXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgICBlbWFpbFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExPR19JTiA9IGdxbGBcbiAgbXV0YXRpb24gTE9HX0lOKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgbG9naW4oZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICAgIHVzZXJuYW1lXG4gICAgICAgIGVtYWlsXG4gICAgICAgIHByb2R1Y3RzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIGltYWdlVXJsXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBjYXJ0cyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcm9kdWN0IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgaW1hZ2VVcmxcbiAgICAgICAgICB9XG4gICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgfVxuICAgICAgICBvcmRlcnMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgcHJvZHVjdCB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgaW1hZ2VVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhcmRzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGNhcmRJbmZvIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBleHBpcmF0aW9uX21vbnRoXG4gICAgICAgICAgICBleHBpcmF0aW9uX3llYXJcbiAgICAgICAgICAgIGJyYW5kXG4gICAgICAgICAgICBsYXN0X2RpZ2l0c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgand0XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9SRVNFVF9QQVNTV09SRCA9IGdxbGBcbiAgbXV0YXRpb24gUkVRVUVTVF9SRVNFVF9QQVNTV09SRCgkZW1haWw6IFN0cmluZyEpIHtcbiAgICByZXF1ZXN0UmVzZXRQYXNzd29yZChlbWFpbDogJGVtYWlsKSB7XG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/User.js\n");

/***/ }),

/***/ "./node_modules/@quasar/extras/ionicons-v4/ionicons-v4.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@quasar/extras/ionicons-v4/ionicons-v4.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcXVhc2FyL2V4dHJhcy9pb25pY29ucy12NC9pb25pY29ucy12NC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@quasar/extras/ionicons-v4/ionicons-v4.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts */ \"./components/Layouts.jsx\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/AuthProvider */ \"./contexts/AuthProvider.js\");\n/* harmony import */ var _apollo_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apollo/apolloClient */ \"./apollo/apolloClient.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _graphql_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/User */ \"./graphql/User.js\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _quasar_extras_ionicons_v4_ionicons_v4_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @quasar/extras/ionicons-v4/ionicons-v4.css */ \"./node_modules/@quasar/extras/ionicons-v4/ionicons-v4.css\");\n/* harmony import */ var _quasar_extras_ionicons_v4_ionicons_v4_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_quasar_extras_ionicons_v4_ionicons_v4_css__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/ailaodev/Desktop/Projects/Shoppin/shop-client/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// import App from 'next/app'\n\n\n\n\n\n\n\n\n // import dotenv from \"dotenv\";\n// dotenv.config();\n\nconst Backend_uri = process.env.BACKEND_URI; // function MyApp({ Component, pageProps, apollo }) {\n//   return (\n//    <ApolloProvider client={apollo}>\n//       <Layout>\n//         <Component {...pageProps} />\n//       </Layout>\n//    </ApolloProvider>\n//   )\n// }\n\nfunction App({\n  Component,\n  pageProps,\n  apollo,\n  user\n}) {\n  return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: apollo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(_contexts_AuthProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    userData: user,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Layouts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  })))));\n}\n\nApp.getInitialProps = async ({\n  ctx,\n  router\n}) => {\n  // calls page's `getInitialProps` and fills `appProps.pageProps`\n  if (false) {} //console.log('Router -->', router)\n\n\n  const {\n    headers\n  } = ctx.req;\n  const cookies = headers && cookie__WEBPACK_IMPORTED_MODULE_6___default.a.parse(headers.cookie || \"\");\n  const token = cookies && cookies.jwtToken;\n\n  if (!token) {\n    if (router.pathname === \"/admin\" || router.pathname === \"/admin/products\" || router.pathname === \"/admin/products/create\" || router.pathname === \"/admin/products/ProductInfo\" || router.pathname === \"/admin/profiles\" || router.pathname === \"/admin/banks\" || router.pathname === \"/admin/sale\" || router.pathname === \"/admin/brands\" || router.pathname === \"/Categories\" || router.pathname === \"/admin/orders\" || router.pathname === \"/Checkout\" || router.pathname === \"/Carts\") {\n      //Use OR To Protected more Routers\n      ctx.res.writeHead(302, {\n        Location: \"/Signin\"\n      }); //302 Redirect Route code\n\n      ctx.res.end();\n    } //Add More Protected route here\n\n\n    return null;\n  } //\"http://localhost:5002/graphql\"\n  //\"http://192.168.100.14:5002/graphql\"\n\n\n  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${Backend_uri}`, {\n    method: \"post\",\n    headers: {\n      \"Content-type\": \"application/json\",\n      authorization: `Bearer ${token}` || \"\"\n    },\n    body: JSON.stringify(_graphql_User__WEBPACK_IMPORTED_MODULE_7__[\"QUERY_USER\"])\n  }); //console.log(\"response data:\", response);\n\n  if (response.ok) {\n    const result = await response.json();\n    return {\n      user: result.data.user\n    }; //console.log('User Info -->',  result)\n  } else {\n    if (router.pathname === \"/Carts\") {\n      ctx.res.writeHead(302, {\n        Location: \"/Signin\"\n      }); //302 Redirect Route code\n\n      ctx.res.end();\n    } //Add More Protected route here\n\n\n    return null;\n  }\n\n  console.log(ctx.req.headers);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_apollo_apolloClient__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQmFja2VuZF91cmkiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkkiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJ1c2VyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwicm91dGVyIiwiaGVhZGVycyIsInJlcSIsImNvb2tpZXMiLCJjb29raWUiLCJwYXJzZSIsInRva2VuIiwiand0VG9rZW4iLCJwYXRobmFtZSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlFVRVJZX1VTRVIiLCJvayIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBLE1BQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWhDLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QkMsUUFBeEI7QUFBZ0NDO0FBQWhDLENBQWIsRUFBcUQ7QUFDbkQsU0FDRSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUQsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBYyxZQUFRLEVBQUVDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7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OlsiLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dHNcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHRzL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IGFwb2xsb0NsaWVudCBmcm9tIFwiLi4vYXBvbGxvL2Fwb2xsb0NsaWVudFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5pbXBvcnQgeyBRVUVSWV9VU0VSIH0gZnJvbSBcIi4uL2dyYXBocWwvVXNlclwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XG5pbXBvcnQgXCJAcXVhc2FyL2V4dHJhcy9pb25pY29ucy12NC9pb25pY29ucy12NC5jc3NcIjtcbi8vIGltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuLy8gZG90ZW52LmNvbmZpZygpO1xuY29uc3QgQmFja2VuZF91cmkgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSSVxuXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG8gfSkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgPC9BcG9sbG9Qcm92aWRlcj5cbi8vICAgKVxuLy8gfVxuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvLCB1c2VyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgPEF1dGhQcm92aWRlciB1c2VyRGF0YT17dXNlcn0+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJvdXRlciB9KSA9PiB7XG4gIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBfX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcbiAgfVxuXG4gIC8vY29uc29sZS5sb2coJ1JvdXRlciAtLT4nLCByb3V0ZXIpXG5cbiAgY29uc3QgeyBoZWFkZXJzIH0gPSBjdHgucmVxO1xuICBjb25zdCBjb29raWVzID0gaGVhZGVycyAmJiBjb29raWUucGFyc2UoaGVhZGVycy5jb29raWUgfHwgXCJcIik7XG4gIGNvbnN0IHRva2VuID0gY29va2llcyAmJiBjb29raWVzLmp3dFRva2VuO1xuXG4gIGlmICghdG9rZW4pIHtcbiAgICBpZiAoXG4gICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgfHxcbiAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWRtaW4vcHJvZHVjdHNcIiB8fFxuICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pbi9wcm9kdWN0cy9jcmVhdGVcIiB8fFxuICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pbi9wcm9kdWN0cy9Qcm9kdWN0SW5mb1wiIHx8XG4gICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluL3Byb2ZpbGVzXCIgfHxcbiAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWRtaW4vYmFua3NcIiB8fFxuICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pbi9zYWxlXCIgfHxcbiAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWRtaW4vYnJhbmRzXCIgfHxcbiAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvQ2F0ZWdvcmllc1wiIHx8XG4gICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluL29yZGVyc1wiIHx8XG4gICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL0NoZWNrb3V0XCIgfHxcbiAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvQ2FydHNcIlxuICAgICkge1xuICAgICAgLy9Vc2UgT1IgVG8gUHJvdGVjdGVkIG1vcmUgUm91dGVyc1xuICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi9TaWduaW5cIiB9KTsgLy8zMDIgUmVkaXJlY3QgUm91dGUgY29kZVxuICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICB9XG4gICAgLy9BZGQgTW9yZSBQcm90ZWN0ZWQgcm91dGUgaGVyZVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vXCJodHRwOi8vbG9jYWxob3N0OjUwMDIvZ3JhcGhxbFwiXG4gIC8vXCJodHRwOi8vMTkyLjE2OC4xMDAuMTQ6NTAwMi9ncmFwaHFsXCJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCYWNrZW5kX3VyaX1gLCB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIHx8IFwiXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShRVUVSWV9VU0VSKSxcbiAgfSk7XG4gIC8vY29uc29sZS5sb2coXCJyZXNwb25zZSBkYXRhOlwiLCByZXNwb25zZSk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4geyB1c2VyOiByZXN1bHQuZGF0YS51c2VyIH07XG4gICAgLy9jb25zb2xlLmxvZygnVXNlciBJbmZvIC0tPicsICByZXN1bHQpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gXCIvQ2FydHNcIikge1xuICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi9TaWduaW5cIiB9KTsgLy8zMDIgUmVkaXJlY3QgUm91dGUgY29kZVxuICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICB9XG4gICAgLy9BZGQgTW9yZSBQcm90ZWN0ZWQgcm91dGUgaGVyZVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnNvbGUubG9nKGN0eC5yZXEuaGVhZGVycyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcG9sbG9DbGllbnQoQXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIj80YmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1jYWNoZS1pbm1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-cache-inmemory\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-context\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCI/YmQ1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-context\n");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCI/MTExMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-http\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-with-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCI/YmE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LXdpdGgtYXBvbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-with-apollo\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });