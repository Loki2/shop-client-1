module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FwFp");


/***/ }),

/***/ "FwFp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./graphql/Products.js
var Products = __webpack_require__("JFjd");

// EXTERNAL MODULE: ./contexts/AuthProvider.js
var AuthProvider = __webpack_require__("nycs");

// EXTERNAL MODULE: ./graphql/Carts.js
var Carts = __webpack_require__("kAMa");

// CONCATENATED MODULE: ./components/ProductDetail/index.jsx
var __jsx = external_react_default.a.createElement;







const ProductDetail = () => {
  const route = Object(router_["useRouter"])();
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(Products["c" /* QUERY_PRODUCT */], {
    variables: {
      id: route.query.productId
    }
  }); //console.log('ProductID:', route.query.productId)

  const {
    user
  } = Object(external_react_["useContext"])(AuthProvider["a" /* AuthContext */]); // console.log("produc Id", data)

  const [addToCart] = Object(react_hooks_["useMutation"])(Carts["a" /* ADD_TO_CART */], {
    onCompleted: data => {
      console.log('data', data);
    },
    refetchQueries: [{
      query: Products["b" /* MY_PRODUCTS */]
    }]
  });

  const handleAddToCart = async id => {
    // console.log('product_id:',  id)
    if (!user) {
      return router_default.a.push('/signin');
    }

    await addToCart({
      variables: {
        id
      }
    });
  }; //    console.log('result', data)


  if (error) return __jsx("p", null, "Ooops....! Something went wrong, Plz try again later");
  if (loading) return __jsx("p", null, "loading...");
  return __jsx("div", {
    className: "product-detail-card"
  }, __jsx("div", {
    className: "product-detail-cover"
  }, __jsx("div", {
    className: "product-image"
  }, __jsx("img", {
    src: data.product.imageUrl,
    alt: data.product.description
  })), __jsx("div", {
    className: "product-info"
  }, __jsx("h3", {
    className: "header-title"
  }, "Product Detail"), __jsx("div", {
    className: "box-head"
  }, __jsx("h2", {
    className: "product-name"
  }, data.product.name)), __jsx("div", {
    className: "box-content"
  }, __jsx("p", {
    className: "product-desc"
  }, data.product.description)), __jsx("div", {
    className: "product-size"
  }, __jsx("h3", null, data.product.name)), __jsx("div", {
    className: "product-color"
  }, __jsx("h3", null, data.product.name)), __jsx("div", {
    className: "product-rating"
  }, __jsx("h3", null, data.product.name)), __jsx("div", {
    className: "transport-service"
  }, __jsx("h5", null, data.product.name)), __jsx("div", {
    className: "product-price"
  }, __jsx("h1", null, " $", data.product.price)))), __jsx("div", {
    className: "product-detail-action"
  }, __jsx("hr", null), __jsx("div", {
    className: "box-footer"
  }, __jsx("button", {
    className: "btn-back",
    onClick: () => router_default.a.push('/products')
  }, "Back"), __jsx("button", {
    className: "btn-submit",
    onClick: () => handleAddToCart(data.product.id)
  }, "ADD CART"))));
};

/* harmony default export */ var components_ProductDetail = (ProductDetail);
// CONCATENATED MODULE: ./pages/Products/[productId].jsx
var _productId_jsx = external_react_default.a.createElement;



const ProductPage = () => {
  return _productId_jsx("div", {
    className: "product-detail-page"
  }, _productId_jsx("div", {
    className: "product-detail-content"
  }, _productId_jsx("main", null, _productId_jsx(components_ProductDetail, null), _productId_jsx("div", {
    className: "product-release"
  }, _productId_jsx("h4", null, "product you like")))));
};

/* harmony default export */ var _productId_ = __webpack_exports__["default"] = (ProductPage);

/***/ }),

/***/ "JFjd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MY_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QUERY_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QUERY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_PRODUCT; });
/* unused harmony export UPDATE_PRODUCT */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const MY_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
      query MY_PRODUCTS {
            user {
                  id
                  username
                  email
                  products {
                        id
                        name
                        description
                        price
                        stockqty
                        imageUrl
                  }
            }
      }
`;
const QUERY_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
      query {
            products {
                  id
                  name
                  description
                  price
                  stockqty
                  imageUrl
                  createdAt
                  user {
                        id
                  }
            }
      }
`;
const QUERY_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
      query QUERY_PRODUCT($id: ID!) {
            product(id: $id) {
                  id
                  name
                  description
                  imageUrl
                  price
                  createdAt
            }
      }
`;
const CREATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
      mutation CREATE_PRODUCT(
            $name: String!
            $description: String!
            $price: Float!
            $stockqty: Int!
            $imageUrl: String!
      ) {
            createProduct(
                  name: $name
                  description: $description
                  price: $price
                  stockqty: $stockqty
                  imageUrl: $imageUrl
            ) {
                  name
                  description
                  price
                  stockqty
                  imageUrl
            }
      }
`;
const UPDATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
      mutation UPDATE_PRODUCT(
            $id: ID!
            $name: String
            $description: String
            $price: Float
            $stockqty: Int
            $imageUrl: String
      ) {
            updateProduct(
                  id: $id
                  name: $name
                  description: $description
                  price: $price
                  stockqty: $stockqty
                  imageUrl: $imageUrl
            ) {
                  id
                  name
                  description
                  price
                  stockqty
                  imageUrl
            }
      }
`;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kAMa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MY_CARTS; });
/* unused harmony export DELETE_CART */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ADD_TO_CART = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
      mutation ADD_TO_CART($id: ID!) {
            addToCart(id: $id) {
                  id
                  product {
                        id
                        name
                        description
                        imageUrl
                        price
                  }
                  qualtity
            }
      }
`;
const MY_CARTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query MY_CARTS {
        user {
                id
                username
                email
                carts{
                    id
                    product{
                            name
                            description
                            imageUrl
                            price
                        }
                        qualtity
                }
            }
    }
`;
const DELETE_CART = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation DELETE_CART($id: ID!){
        deleteCart(id: $id){
            id
        }
    }
`;

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nycs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const AuthProvider = ({
  children,
  userData
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userData); //Use Effect For Logout Automatic every tabs every windows

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const synLogout = e => {
      if (e.key === 'logout') {
        setUser(null);
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/products');
      }
    };

    window.addEventListener('storage', synLogout);
    return () => {
      window.removeEventListener('storage', synLogout);
      window.localStorage.removeItem('logout');
    };
  }, []);

  const setAuthUser = userInfo => setUser(userInfo); //Create Logout on Context provider


  const signout = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwtToken');
    setUser(null);
    localStorage.setItem('logout', Date.now());
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/products');
  };

  return __jsx(AuthContext.Provider, {
    value: {
      user,
      setAuthUser,
      signout
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["b"] = (AuthProvider);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });