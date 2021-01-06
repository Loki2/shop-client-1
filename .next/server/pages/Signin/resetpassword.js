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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dvGk");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dvGk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");

// CONCATENATED MODULE: ./components/ResetPassword.jsx
var __jsx = external_react_default.a.createElement;


 // const REQUEST_RESET_PASSWORD = gql`
//  mutation REQUEST_RESET_PASSWORD($email: String!) {
//     requestResetPassword(email: $email){
//       message
//     }
// }
// `

const ResetPassword = () => {
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])(''); // const [message, setMessage] = useState('')
  // const [requestResetPassword, {loading, error}] = useMutation(REQUEST_RESET_PASSWORD, {
  //   variables: { email }, 
  //   onCompleted: data => {
  //     if(data) {
  //       setMessage(data.requestResetPassword.message)
  //     }
  // }})

  const handleChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault(); //await requestResetPassword()
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx("div", {
    style: {
      margin: '100px'
    }
  }, __jsx("form", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: '45%'
    },
    onSubmit: handleSubmit
  }, __jsx("h3", null, "Reset Password Form"), __jsx("hr", null), __jsx("div", {
    style: {
      width: '100%',
      margin: 'auto'
    }
  }), __jsx("input", {
    style: {
      margin: '5px',
      height: '30px'
    },
    type: "password",
    name: "password",
    placeholder: "Enter New Password",
    value: password,
    onChange: handleChange
  }), __jsx("div", {
    style: {
      width: '100%',
      margin: 'auto'
    }
  }), __jsx("button", {
    style: {
      margin: '5px',
      padding: '10px',
      background: 'teal',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px'
    },
    type: "submit" //disabled={loading}

  }, "Submit")));
};

/* harmony default export */ var components_ResetPassword = (ResetPassword);
// CONCATENATED MODULE: ./pages/Signin/resetpassword.jsx
var resetpassword_jsx = external_react_default.a.createElement;



const ResetPasswordPage = () => {
  return resetpassword_jsx(components_ResetPassword, null);
};

/* harmony default export */ var resetpassword = __webpack_exports__["default"] = (ResetPasswordPage);

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });