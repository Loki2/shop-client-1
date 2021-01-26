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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_6__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n //Link Uri\n//const uri = process.env.BACKEND_URI\n\nconst uri = 'http://localhost:5000/graphql'; //Create Http Linl\n\nconst httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__[\"createHttpLink\"])({\n  uri,\n  fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default())\n});\nlet cookies; //Set Authorization Link\n\nconst authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__[\"setContext\"])((_, {\n  headers\n}) => {\n  //Get token from cookies\n  //Server Side \n  if (headers) {\n    cookies = cookie__WEBPACK_IMPORTED_MODULE_6___default.a.parse(header.cookie || '');\n  } //Client side\n\n\n  if (false) {}\n\n  const token = cookies && cookies.jwtToken || '';\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token ? `Bearer ${token}` : ''\n    })\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_5___default()(({\n  initialState\n}) => {\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    link: authLink.concat(httpLink),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n} //  {\n//     render: ({ Page, props }) => {\n//       return (\n//         <ApolloProvider client={props.apollo}>\n//           <Page {...props} />\n//         </ApolloProvider>\n//       );\n//     }\n//   }\n));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vYXBvbGxvQ2xpZW50LmpzP2Y1NWYiXSwibmFtZXMiOlsidXJpIiwiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsImZldGNoIiwiY29va2llcyIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwiY29va2llIiwicGFyc2UiLCJoZWFkZXIiLCJ0b2tlbiIsImp3dFRva2VuIiwiYXV0aG9yaXphdGlvbiIsIndpdGhBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQSxNQUFNQSxHQUFHLEdBQUcsK0JBQVosQyxDQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsdUVBQWMsQ0FBQztBQUFDRixLQUFEO0FBQU1HLG9FQUFLQTtBQUFYLENBQUQsQ0FBL0I7QUFFQSxJQUFJQyxPQUFKLEMsQ0FDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHNFQUFVLENBQUMsQ0FBQ0MsQ0FBRCxFQUFJO0FBQUNDO0FBQUQsQ0FBSixLQUFrQjtBQUM1QztBQUdBO0FBQ0EsTUFBR0EsT0FBSCxFQUFZO0FBQ1ZKLFdBQU8sR0FBR0ssNkNBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxNQUFNLENBQUNGLE1BQVAsSUFBaUIsRUFBOUIsQ0FBVjtBQUNELEdBUDJDLENBUzVDOzs7QUFDQSxhQUFpQyxFQUVoQzs7QUFFRCxRQUFNRyxLQUFLLEdBQUdSLE9BQU8sSUFBSUEsT0FBTyxDQUFDUyxRQUFuQixJQUErQixFQUE3QztBQUNBLFNBQU87QUFDTEwsV0FBTyxrQ0FDRkEsT0FERTtBQUVMTSxtQkFBYSxFQUFFRixLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QjtBQUZ0QztBQURGLEdBQVA7QUFNRCxDQXJCMEIsQ0FBM0I7QUF3QmVHLHNIQUFVLENBQUMsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBc0I7QUFDOUMsU0FBTyxJQUFJQywwREFBSixDQUFpQjtBQUN0QkMsUUFBSSxFQUFFYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JsQixRQUFoQixDQURnQjtBQUV0Qm1CLFNBQUssRUFBRSxJQUFJQyxtRUFBSixHQUFvQkMsT0FBcEIsQ0FBNEJOLFlBQVksSUFBSSxFQUE1QztBQUZlLEdBQWpCLENBQVA7QUFJRCxDQUx3QixDQU16QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkeUIsQ0FBekIiLCJmaWxlIjoiLi9hcG9sbG8vYXBvbGxvQ2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcG9sbG9DbGllbnR9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHtjcmVhdGVIdHRwTGlua30gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQge3NldENvbnRleHR9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnO1xuaW1wb3J0IHtJbk1lbW9yeUNhY2hlfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICduZXh0LXdpdGgtYXBvbGxvJztcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuLy9MaW5rIFVyaVxuLy9jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSSVxuY29uc3QgdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsJ1xuLy9DcmVhdGUgSHR0cCBMaW5sXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHt1cmksIGZldGNofSk7XG5cbmxldCBjb29raWVzXG4vL1NldCBBdXRob3JpemF0aW9uIExpbmtcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywge2hlYWRlcnN9KSA9PiB7XG4gIC8vR2V0IHRva2VuIGZyb20gY29va2llc1xuICBcblxuICAvL1NlcnZlciBTaWRlIFxuICBpZihoZWFkZXJzKSB7XG4gICAgY29va2llcyA9IGNvb2tpZS5wYXJzZShoZWFkZXIuY29va2llIHx8ICcnKVxuICB9XG5cbiAgLy9DbGllbnQgc2lkZVxuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgY29va2llcyA9IGNvb2tpZS5wYXJzZShkb2N1bWVudC5jb29raWUgfHwgJycpXG4gIH1cblxuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMgJiYgY29va2llcy5qd3RUb2tlbiB8fCAnJ1xuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIC4uLmhlYWRlcnMsXG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcbiAgICB9XG4gIH1cbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbygoeyBpbml0aWFsU3RhdGUgfSkgPT4ge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSlcbiAgfSk7XG59LFxuLy8gIHtcbi8vICAgICByZW5kZXI6ICh7IFBhZ2UsIHByb3BzIH0pID0+IHtcbi8vICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3Byb3BzLmFwb2xsb30+XG4vLyAgICAgICAgICAgPFBhZ2Ugey4uLnByb3BzfSAvPlxuLy8gICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH1cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/apolloClient.js\n");

/***/ }),

/***/ "./components/Layouts.jsx":
/*!********************************!*\
  !*** ./components/Layouts.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/loki/Desktop/Projects/Shoppin/shop-client/components/Layouts.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import Navigation from './Navigation';\n// import { AuthContext } from '../contexts/AuthProvider';\n\nfunction Layouts({\n  children\n}) {\n  // const { user, setAuthUser } = useContext(AuthContext);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"Ozone Shoppy\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  })), children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dHMuanN4PzJjYmYiXSwibmFtZXMiOlsiTGF5b3V0cyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUErQjtBQUMzQjtBQUVBLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBTVNBLFFBTlQsQ0FESjtBQVVIOztBQUVjRCxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsICB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuLy8gaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbi8vIGltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aFByb3ZpZGVyJztcblxuXG5mdW5jdGlvbiBMYXlvdXRzKHsgY2hpbGRyZW4gfSkge1xuICAgIC8vIGNvbnN0IHsgdXNlciwgc2V0QXV0aFVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Pem9uZSBTaG9wcHk8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICB7LyogPE5hdmlnYXRpb24gLz4gKi99XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layouts.jsx\n");

/***/ }),

/***/ "./contexts/AuthProvider.js":
/*!**********************************!*\
  !*** ./contexts/AuthProvider.js ***!
  \**********************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/loki/Desktop/Projects/Shoppin/shop-client/contexts/AuthProvider.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nconst AuthProvider = ({\n  children,\n  userData\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(userData); //Use Effect For Logout Automatic every tabs every windows\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const synLogout = e => {\n      if (e.key === \"logout\") {\n        setUser(null);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/Products\");\n      }\n    };\n\n    window.addEventListener(\"storage\", synLogout);\n    return () => {\n      window.removeEventListener(\"storage\", synLogout);\n      window.localStorage.removeItem(\"logout\");\n    };\n  }, []);\n\n  const setAuthUser = userInfo => setUser(userInfo); //Create Logout on Context provider\n\n\n  const signout = () => {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(\"jwtToken\");\n    setUser(null);\n    localStorage.setItem(\"logout\", Date.now());\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/\");\n  };\n\n  return __jsx(AuthContext.Provider, {\n    value: {\n      user,\n      setAuthUser,\n      signout\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9BdXRoUHJvdmlkZXIuanM/OWYyNyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN5bkxvZ291dCIsImUiLCJrZXkiLCJSb3V0ZXIiLCJwdXNoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0QXV0aFVzZXIiLCJ1c2VySW5mbyIsInNpZ25vdXQiLCJDb29raWVzIiwicmVtb3ZlIiwic2V0SXRlbSIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFDUCxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0QjtBQUMzQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUNILFFBQUQsQ0FBaEMsQ0FEMkMsQ0FFM0M7O0FBQ0FJLHlEQUFTLENBQUMsTUFBTTtBQUNWLFVBQU1DLFNBQVMsR0FBSUMsQ0FBRCxJQUFPO0FBQ25CLFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFFBQWQsRUFBd0I7QUFDbEJMLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDQU0sMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVo7QUFDTDtBQUNOLEtBTEQ7O0FBTUFDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNOLFNBQW5DO0FBQ0EsV0FBTyxNQUFNO0FBQ1BLLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NQLFNBQXRDO0FBQ0FLLFlBQU0sQ0FBQ0csWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0IsUUFBL0I7QUFDTCxLQUhEO0FBSUwsR0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxRQUFNQyxXQUFXLEdBQUlDLFFBQUQsSUFBY2QsT0FBTyxDQUFDYyxRQUFELENBQXpDLENBakIyQyxDQWtCM0M7OztBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ2hCQyxvREFBTyxDQUFDQyxNQUFSLENBQWUsVUFBZjtBQUNBakIsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBVyxnQkFBWSxDQUFDTyxPQUFiLENBQXFCLFFBQXJCLEVBQStCQyxJQUFJLENBQUNDLEdBQUwsRUFBL0I7QUFDQWQsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDTCxHQUxEOztBQU1BLFNBQ00sTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRVIsVUFBRjtBQUFRYyxpQkFBUjtBQUFxQkU7QUFBckIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPbEIsUUFEUCxDQUROO0FBS0wsQ0E5QkQ7O0FBZ0NlRCwyRUFBZiIsImZpbGUiOiIuL2NvbnRleHRzL0F1dGhQcm92aWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgdXNlckRhdGEgfSkgPT4ge1xuICAgICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuICAgICAgLy9Vc2UgRWZmZWN0IEZvciBMb2dvdXQgQXV0b21hdGljIGV2ZXJ5IHRhYnMgZXZlcnkgd2luZG93c1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN5bkxvZ291dCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwibG9nb3V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9Qcm9kdWN0c1wiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luTG9nb3V0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luTG9nb3V0KTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IHNldEF1dGhVc2VyID0gKHVzZXJJbmZvKSA9PiBzZXRVc2VyKHVzZXJJbmZvKTtcbiAgICAgIC8vQ3JlYXRlIExvZ291dCBvbiBDb250ZXh0IHByb3ZpZGVyXG4gICAgICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJqd3RUb2tlblwiKTtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ291dFwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldEF1dGhVc2VyLCBzaWdub3V0IH19PlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoUHJvdmlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthProvider.js\n");

/***/ }),

/***/ "./graphql/User.js":
/*!*************************!*\
  !*** ./graphql/User.js ***!
  \*************************/
/*! exports provided: QUERY_USER, SIGN_UP, LOG_IN, REQUEST_RESET_PASSWORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERY_USER\", function() { return QUERY_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP\", function() { return SIGN_UP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN\", function() { return LOG_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_RESET_PASSWORD\", function() { return REQUEST_RESET_PASSWORD; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Export global User\n */\n\nconst QUERY_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n      query QUERY_USER {\n            user {\n                  id\n                  username\n                  email\n                  products {\n                        id\n                        name\n                        description\n                        price\n                  }\n                  carts {\n                        id\n                        product {\n                              name\n                              description\n                              imageUrl\n                              price\n                        }\n                        qualtity\n                  }\n                  orders {\n                        id\n                        items {\n                              product {\n                                    name\n                                    description\n                                    price\n                                    imageUrl\n                              }\n                              qualtity\n                        }\n                  }\n                  cards {\n                        id\n                        cardInfo {\n                              id\n                              expiration_month\n                              expiration_year\n                              brand\n                              last_digits\n                        }\n                  }\n            }\n      }\n`;\nconst SIGN_UP = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n      mutation SIGN_UP(\n            $username: String!\n            $email: String!\n            $password: String!\n      ) {\n            signup(username: $username, email: $email, password: $password) {\n                  id\n                  username\n                  email\n            }\n      }\n`;\nconst LOG_IN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n      mutation LOG_IN($email: String!, $password: String!) {\n            login(email: $email, password: $password) {\n                  user {\n                        id\n                        username\n                        email\n                        products {\n                              id\n                              name\n                              description\n                              imageUrl\n                              price\n                        }\n                        carts {\n                              id\n                              product {\n                                    name\n                                    description\n                                    price\n                                    imageUrl\n                              }\n                              qualtity\n                        }\n                        orders {\n                              id\n                              items {\n                                    product {\n                                          name\n                                          description\n                                          price\n                                          imageUrl\n                                    }\n                                    qualtity\n                              }\n                        }\n                        cards {\n                              id\n                              cardInfo {\n                                    id\n                                    expiration_month\n                                    expiration_year\n                                    brand\n                                    last_digits\n                              }\n                        }\n                  }\n                  jwt\n            }\n      }\n`;\nconst REQUEST_RESET_PASSWORD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n      mutation REQUEST_RESET_PASSWORD($email: String!) {\n            requestResetPassword(email: $email) {\n                  message\n            }\n      }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncmFwaHFsL1VzZXIuanM/NjA5ZiJdLCJuYW1lcyI6WyJRVUVSWV9VU0VSIiwiZ3FsIiwiU0lHTl9VUCIsIkxPR19JTiIsIlJFUVVFU1RfUkVTRVRfUEFTU1dPUkQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUEsVUFBVSxHQUFHQyxrREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTlDTztBQWdEQSxNQUFNQyxPQUFPLEdBQUdELGtEQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTUUsTUFBTSxHQUFHRixrREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbERPO0FBb0RBLE1BQU1HLHNCQUFzQixHQUFHSCxrREFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTyIsImZpbGUiOiIuL2dyYXBocWwvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbi8qKlxuICogRXhwb3J0IGdsb2JhbCBVc2VyXG4gKi9cbmV4cG9ydCBjb25zdCBRVUVSWV9VU0VSID0gZ3FsYFxuICAgICAgcXVlcnkgUVVFUllfVVNFUiB7XG4gICAgICAgICAgICB1c2VyIHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhcnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWx0aXR5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvcmRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbHRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhcmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl9tb250aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl95ZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9kaWdpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQID0gZ3FsYFxuICAgICAgbXV0YXRpb24gU0lHTl9VUChcbiAgICAgICAgICAgICR1c2VybmFtZTogU3RyaW5nIVxuICAgICAgICAgICAgJGVtYWlsOiBTdHJpbmchXG4gICAgICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcbiAgICAgICkge1xuICAgICAgICAgICAgc2lnbnVwKHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIH1cbiAgICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMT0dfSU4gPSBncWxgXG4gICAgICBtdXRhdGlvbiBMT0dfSU4oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIGxvZ2luKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgIHVzZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWx0aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbHRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl9tb250aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl95ZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9kaWdpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGp3dFxuICAgICAgICAgICAgfVxuICAgICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUkVTRVRfUEFTU1dPUkQgPSBncWxgXG4gICAgICBtdXRhdGlvbiBSRVFVRVNUX1JFU0VUX1BBU1NXT1JEKCRlbWFpbDogU3RyaW5nISkge1xuICAgICAgICAgICAgcmVxdWVzdFJlc2V0UGFzc3dvcmQoZW1haWw6ICRlbWFpbCkge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./graphql/User.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts */ \"./components/Layouts.jsx\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/AuthProvider */ \"./contexts/AuthProvider.js\");\n/* harmony import */ var _apollo_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apollo/apolloClient */ \"./apollo/apolloClient.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _graphql_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/User */ \"./graphql/User.js\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _quasar_extras_ionicons_v4_ionicons_v4_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @quasar/extras/ionicons-v4/ionicons-v4.css */ \"./node_modules/@quasar/extras/ionicons-v4/ionicons-v4.css\");\n/* harmony import */ var _quasar_extras_ionicons_v4_ionicons_v4_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_quasar_extras_ionicons_v4_ionicons_v4_css__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/home/loki/Desktop/Projects/Shoppin/shop-client/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// import App from 'next/app'\n\n\n\n\n\n\n\n\n //const Backend_uri = process.env.BACKEND_URI\n// function MyApp({ Component, pageProps, apollo }) {\n//   return (\n//    <ApolloProvider client={apollo}>\n//       <Layout>\n//         <Component {...pageProps} />\n//       </Layout>\n//    </ApolloProvider>\n//   )\n// }\n\nfunction App({\n  Component,\n  pageProps,\n  apollo,\n  user\n}) {\n  return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: apollo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(_contexts_AuthProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    userData: user,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 19\n    }\n  }, __jsx(_components_Layouts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 31\n    }\n  })))));\n}\n\nApp.getInitialProps = async ({\n  ctx,\n  router\n}) => {\n  // calls page's `getInitialProps` and fills `appProps.pageProps`\n  if (false) {} //console.log('Router -->', router)\n\n\n  const {\n    headers\n  } = ctx.req;\n  const cookies = headers && cookie__WEBPACK_IMPORTED_MODULE_6___default.a.parse(headers.cookie || \"\");\n  const token = cookies && cookies.jwtToken;\n\n  if (!token) {\n    if (router.pathname === \"/admin\" || router.pathname === \"/admin/products\" || router.pathname === \"/Carts\" || router.pathname === \"/Brands\" || router.pathname === \"/Categories\" || router.pathname === \"/Myproducts\" || router.pathname === \"/Myproducts/createProduct\" || router.pathname === \"/Profile\" || router.pathname === \"/Custorder\" || router.pathname === \"/Checkout\" || router.pathname === \"/Bank\") {\n      //Use OR To Protected more Routers\n      ctx.res.writeHead(302, {\n        Location: \"/Signin\"\n      }); //302 Redirect Route code\n\n      ctx.res.end();\n    } //Add More Protected route here\n\n\n    return null;\n  } //\"http://localhost:5000/graphql\"\n\n\n  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"http://localhost:5000/graphql\", {\n    method: \"post\",\n    headers: {\n      \"Content-type\": \"application/json\",\n      authorization: `Bearer ${token}` || \"\"\n    },\n    body: JSON.stringify(_graphql_User__WEBPACK_IMPORTED_MODULE_7__[\"QUERY_USER\"])\n  }); //console.log(\"response data:\", response);\n\n  if (response.ok) {\n    const result = await response.json();\n    return {\n      user: result.data.user\n    }; //console.log('User Info -->',  result)\n  } else {\n    if (router.pathname === \"/Carts\") {\n      ctx.res.writeHead(302, {\n        Location: '/Signin'\n      }); //302 Redirect Route code\n\n      ctx.res.end();\n    } //Add More Protected route here\n\n\n    return null;\n  }\n\n  console.log(ctx.req.headers);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_apollo_apolloClient__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvIiwidXNlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJvdXRlciIsImhlYWRlcnMiLCJyZXEiLCJjb29raWVzIiwiY29va2llIiwicGFyc2UiLCJ0b2tlbiIsImp3dFRva2VuIiwicGF0aG5hbWUiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJRVUVSWV9VU0VSIiwib2siLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QkMsUUFBeEI7QUFBZ0NDO0FBQWhDLENBQWIsRUFBcUQ7QUFDL0MsU0FDTSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUQsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNLE1BQUMsOERBQUQ7QUFBYyxZQUFRLEVBQUVDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxNQUFDLFNBQUQsZUFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRE4sQ0FETixDQUROLENBRE47QUFTTDs7QUFJREYsR0FBRyxDQUFDSyxlQUFKLEdBQXVCLE9BQU87QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQVAsS0FBMkI7QUFDNUM7QUFDQSxhQUFxQixFQUZ1QixDQU01Qzs7O0FBRUEsUUFBTTtBQUFFQztBQUFGLE1BQWNGLEdBQUcsQ0FBQ0csR0FBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLE9BQU8sSUFBSUcsNkNBQU0sQ0FBQ0MsS0FBUCxDQUFhSixPQUFPLENBQUNHLE1BQVIsSUFBa0IsRUFBL0IsQ0FBM0I7QUFDQSxRQUFNRSxLQUFLLEdBQUdILE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxRQUFqQzs7QUFFQSxNQUFJLENBQUNELEtBQUwsRUFBWTtBQUNOLFFBQ1FOLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixRQUFwQixJQUNBUixNQUFNLENBQUNRLFFBQVAsS0FBb0IsaUJBRHBCLElBRUFSLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixRQUZwQixJQUdBUixNQUFNLENBQUNRLFFBQVAsS0FBb0IsU0FIcEIsSUFJQVIsTUFBTSxDQUFDUSxRQUFQLEtBQW9CLGFBSnBCLElBS0FSLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixhQUxwQixJQU1BUixNQUFNLENBQUNRLFFBQVAsS0FBb0IsMkJBTnBCLElBT0FSLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixVQVBwQixJQVFBUixNQUFNLENBQUNRLFFBQVAsS0FBb0IsWUFScEIsSUFTQVIsTUFBTSxDQUFDUSxRQUFQLEtBQW9CLFdBVHBCLElBVUFSLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixPQVg1QixFQVlFO0FBQ0k7QUFDQVQsU0FBRyxDQUFDVSxHQUFKLENBQVFDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQXZCLEVBRkosQ0FFcUQ7O0FBQ2pEWixTQUFHLENBQUNVLEdBQUosQ0FBUUcsR0FBUjtBQUNMLEtBakJLLENBa0JOOzs7QUFDQSxXQUFPLElBQVA7QUFDTCxHQWhDMkMsQ0FpQzVDOzs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMseURBQUssQ0FBQywrQkFBRCxFQUFrQztBQUN4REMsVUFBTSxFQUFFLE1BRGdEO0FBRXhEZCxXQUFPLEVBQUU7QUFDSCxzQkFBZ0Isa0JBRGI7QUFFSGUsbUJBQWEsRUFBRyxVQUFTVixLQUFNLEVBQWhCLElBQXFCO0FBRmpDLEtBRitDO0FBTXhEVyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyx3REFBZjtBQU5rRCxHQUFsQyxDQUE1QixDQWxDNEMsQ0EwQzVDOztBQUNBLE1BQUlQLFFBQVEsQ0FBQ1EsRUFBYixFQUFpQjtBQUNYLFVBQU1DLE1BQU0sR0FBRyxNQUFNVCxRQUFRLENBQUNVLElBQVQsRUFBckI7QUFDQSxXQUFPO0FBQUUxQixVQUFJLEVBQUV5QixNQUFNLENBQUNFLElBQVAsQ0FBWTNCO0FBQXBCLEtBQVAsQ0FGVyxDQUdYO0FBQ0wsR0FKRCxNQUlPO0FBQ0QsUUFBR0csTUFBTSxDQUFDUSxRQUFQLEtBQW9CLFFBQXZCLEVBQWlDO0FBQy9CVCxTQUFHLENBQUNVLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFDQyxnQkFBUSxFQUFFO0FBQVgsT0FBdkIsRUFEK0IsQ0FDZTs7QUFDOUNaLFNBQUcsQ0FBQ1UsR0FBSixDQUFRRyxHQUFSO0FBQ0QsS0FKQSxDQUtEOzs7QUFDQSxXQUFPLElBQVA7QUFDTDs7QUFDRGEsU0FBTyxDQUFDQyxHQUFSLENBQVkzQixHQUFHLENBQUNHLEdBQUosQ0FBUUQsT0FBcEI7QUFDTCxDQXhERDs7QUEwRGUwQixtSUFBWSxDQUFDbEMsR0FBRCxDQUEzQiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0c1wiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IEF1dGhQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvQXV0aFByb3ZpZGVyXCI7XG5pbXBvcnQgYXBvbGxvQ2xpZW50IGZyb20gXCIuLi9hcG9sbG8vYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcbmltcG9ydCB7IFFVRVJZX1VTRVIgfSBmcm9tIFwiLi4vZ3JhcGhxbC9Vc2VyXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLnNjc3NcIjtcbmltcG9ydCAnQHF1YXNhci9leHRyYXMvaW9uaWNvbnMtdjQvaW9uaWNvbnMtdjQuY3NzJztcblxuXG4vL2NvbnN0IEJhY2tlbmRfdXJpID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9VUklcblxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4vLyAgIClcbi8vIH1cblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsbywgdXNlciB9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbiAgICAgICAgICAgICAgICAgIDxBdXRoUHJvdmlkZXIgdXNlckRhdGE9e3VzZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKTtcbn1cblxuXG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSAgYXN5bmMgKHsgY3R4LCByb3V0ZXIgfSkgPT4ge1xuICAgICAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuIF9fTkVYVF9EQVRBX18ucHJvcHMucGFnZVByb3BzO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKCdSb3V0ZXIgLS0+Jywgcm91dGVyKVxuXG4gICAgICBjb25zdCB7IGhlYWRlcnMgfSA9IGN0eC5yZXE7XG4gICAgICBjb25zdCBjb29raWVzID0gaGVhZGVycyAmJiBjb29raWUucGFyc2UoaGVhZGVycy5jb29raWUgfHwgXCJcIik7XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMgJiYgY29va2llcy5qd3RUb2tlbjtcblxuICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pbi9wcm9kdWN0c1wifHxcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9DYXJ0c1wiIHx8XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvQnJhbmRzXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9DYXRlZ29yaWVzXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9NeXByb2R1Y3RzXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9NeXByb2R1Y3RzL2NyZWF0ZVByb2R1Y3RcIiB8fFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1Byb2ZpbGVcIiB8fFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL0N1c3RvcmRlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvQ2hlY2tvdXRcIiB8fFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL0JhbmtcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAvL1VzZSBPUiBUbyBQcm90ZWN0ZWQgbW9yZSBSb3V0ZXJzXG4gICAgICAgICAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL1NpZ25pblwiIH0pOyAvLzMwMiBSZWRpcmVjdCBSb3V0ZSBjb2RlXG4gICAgICAgICAgICAgICAgICBjdHgucmVzLmVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9BZGQgTW9yZSBQcm90ZWN0ZWQgcm91dGUgaGVyZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvL1wiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIlxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIHx8IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoUVVFUllfVVNFUiksXG4gICAgICB9KTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyZXNwb25zZSBkYXRhOlwiLCByZXNwb25zZSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZXI6IHJlc3VsdC5kYXRhLnVzZXIgfTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VzZXIgSW5mbyAtLT4nLCAgcmVzdWx0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHJvdXRlci5wYXRobmFtZSA9PT0gXCIvQ2FydHNcIikge1xuICAgICAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtMb2NhdGlvbjogJy9TaWduaW4nfSkgLy8zMDIgUmVkaXJlY3QgUm91dGUgY29kZVxuICAgICAgICAgICAgICBjdHgucmVzLmVuZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0FkZCBNb3JlIFByb3RlY3RlZCByb3V0ZSBoZXJlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGN0eC5yZXEuaGVhZGVycylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwb2xsb0NsaWVudChBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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