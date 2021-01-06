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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mq0t");


/***/ }),

/***/ "SZXZ":
/***/ (function(module, exports) {

// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';
// export default class TakeMoney extends React.Component {
//   // ...
//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={(token) => {
//             console.log('token', token)
//         }}
//         stripeKey="pk_test_51I49DEFIPEY2MboGb6l7dTmuN4XurhKPOlxuQApPyGkk7qBclzNmJTtyulIiszTVIDKQBS6YIBQqhlbbfmVUDSpS00RDaMaEmG"
//       />
//     )
//   }
// }

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ek5X":
/***/ (function(module, exports) {

module.exports = require("react-load-script");

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

/***/ "mq0t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Checkout/CheckOutItems.jsx
var __jsx = external_react_default.a.createElement;


const CheckOutItems = ({
  item
}) => {
  return __jsx(external_react_default.a.Fragment, null, __jsx("tr", null, __jsx("td", null, item.product.name), __jsx("td", null, "$", item.product.price), __jsx("td", null, item.qualtity), __jsx("td", null, "$", item.product.price * item.qualtity)));
};

/* harmony default export */ var Checkout_CheckOutItems = (CheckOutItems);
// CONCATENATED MODULE: ./components/Checkout/CheckOutList.jsx
var CheckOutList_jsx = external_react_default.a.createElement;



const CheckOutList = ({
  carts
}) => {
  return CheckOutList_jsx(external_react_default.a.Fragment, null, CheckOutList_jsx("div", {
    className: "summary-checkout"
  }, CheckOutList_jsx("h3", {
    className: "bill-title"
  }, "Summary Product:"), CheckOutList_jsx("div", {
    className: "table-responsive"
  }, CheckOutList_jsx("table", null, CheckOutList_jsx("thead", null, CheckOutList_jsx("tr", null, CheckOutList_jsx("th", null, "Product"), CheckOutList_jsx("th", null, "Price"), CheckOutList_jsx("th", null, "Qty"), CheckOutList_jsx("th", null, "Total Price"))), CheckOutList_jsx("tbody", null, carts.map(item => CheckOutList_jsx(Checkout_CheckOutItems, {
    key: item.id,
    item: item
  }))), CheckOutList_jsx("tfoot", null, CheckOutList_jsx("tr", null, CheckOutList_jsx("th", null), CheckOutList_jsx("th", null), CheckOutList_jsx("th", null, "Total Amount:"), CheckOutList_jsx("th", null, "$", carts.length > 0 && carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price, 0))), CheckOutList_jsx("tr", null, CheckOutList_jsx("th", null), CheckOutList_jsx("th", null), CheckOutList_jsx("th", null, "VAT 10%:"), CheckOutList_jsx("th", null, "$", carts.length > 0 && carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price * 10 / 100, 0))), CheckOutList_jsx("tr", null, CheckOutList_jsx("th", null), CheckOutList_jsx("th", null), CheckOutList_jsx("th", null, "Shipping:"), CheckOutList_jsx("th", null, "$10")), CheckOutList_jsx("tr", null, CheckOutList_jsx("th", null), CheckOutList_jsx("th", null), CheckOutList_jsx("th", null, "Total Charge:"), CheckOutList_jsx("th", null, "$", carts.length > 0 && carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price + sum * 10 / 100, 0))))))));
};

/* harmony default export */ var Checkout_CheckOutList = (CheckOutList);
// EXTERNAL MODULE: external "react-load-script"
var external_react_load_script_ = __webpack_require__("ek5X");
var external_react_load_script_default = /*#__PURE__*/__webpack_require__.n(external_react_load_script_);

// CONCATENATED MODULE: ./components/Checkout/CheckoutWithCreditCard.jsx
var CheckoutWithCreditCard_jsx = external_react_default.a.createElement;


let OmiseCard;

const CheckoutWithCreditCard = ({
  carts
}) => {
  const amount = carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price, 0);
  console.log(process.env.OMISE_PUBLIC_KEY);

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.OMISE_PUBLIC_KEY,
      current: 'thb',
      frameLabel: 'Ozone Shoppy',
      submitLabel: 'Pay Now!',
      buttonLabel: 'Pay With Omise'
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      otherPaymentMethod: []
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    //const { cart, user, createCreditCardcharge } = props;
    OmiseCard.open({
      frameScription: 'Invoice #8723',
      amount: amount * 100,
      onCreateTokensuccess: token => {
        console.log(token); //createCreditCardcharge(user.email, user.username, cart.amount, token)
      },
      onFormClosed: () => {}
    });
  };

  const handleClick = () => {
    creditCardConfigure();
    omiseCardHandler();
  };

  return CheckoutWithCreditCard_jsx("div", {
    className: "own-form"
  }, CheckoutWithCreditCard_jsx(external_react_load_script_default.a, {
    url: "https://cdn.omise.co/omise.js",
    onLoad: handleLoadScript
  }), CheckoutWithCreditCard_jsx("form", {
    action: ""
  }, CheckoutWithCreditCard_jsx("button", {
    id: "credit-card",
    className: "btn-payment__omise",
    type: "button",
    disabled: !amount,
    onClick: handleClick
  }, "Pay Now! With Omise")));
};

/* harmony default export */ var Checkout_CheckoutWithCreditCard = (CheckoutWithCreditCard);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./graphql/Carts.js
var Carts = __webpack_require__("kAMa");

// EXTERNAL MODULE: ./components/Checkout/CheckoutStripe.jsx
var CheckoutStripe = __webpack_require__("wL7q");

// CONCATENATED MODULE: ./components/Checkout/CheckoutInternetBanking.jsx
var CheckoutInternetBanking_jsx = external_react_default.a.createElement;


let CheckoutInternetBanking_OmiseCard;

const CheckoutWithInternetbanking = ({
  carts
}) => {
  //     const amount = carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price, 0)
  //     console.log(process.env.OMISE_PUBLIC_KEY)
  //     const  handleLoadScript = () => {
  //         OmiseCard = window.OmiseCard
  //         OmiseCard.configure({
  //             publicKey: process.env.OMISE_PUBLIC_KEY,
  //             current: 'thb',
  //             frameLabel: 'Ozone Shoppy',
  //             submitLabel: 'Pay Now!',
  //             buttonLabel: 'Pay With Omise'
  //         })
  //     }
  //     const internetbankingConfig = () => {
  //         OmiseCard.configure({
  //             defaultPaymentMethod: 'internet_banking',
  //             otherPaymentMethod: [
  //                 'alipay',
  //                 'unipay',
  //                 'net_banking'
  //             ]
  //         })
  //         OmiseCard.configureButton('#internet__banking')
  //         OmiseCard.attach()
  //     }
  // const omiseCardHandler = () => {
  //     //const { cart, user, createCreditCardcharge } = props;
  //     OmiseCard.open({
  //         frameScription: 'Invoice #8723',
  //         amount: amount * 100,
  //         onCreateTokensuccess: token => {
  //             console.log(token)
  //             //createCreditCardcharge(user.email, user.username, cart.amount, token)
  //         },
  //         onFormClosed: () => {}
  //     })
  // }
  // const handleClick = () => {
  //     internetbankingConfig()
  //     omiseCardHandler()
  // }
  return CheckoutInternetBanking_jsx("div", {
    className: "own-form"
  }, CheckoutInternetBanking_jsx("form", {
    action: ""
  }, CheckoutInternetBanking_jsx("button", {
    id: "credit-card",
    className: "btn-payment__omise",
    type: "button" // disabled={!amount}
    // onClick={handleClick}

  }, "Pay Now! With Internet Banking")));
};

/* harmony default export */ var CheckoutInternetBanking = (CheckoutWithInternetbanking);
// EXTERNAL MODULE: ./components/Checkout/ReactCheckout.jsx
var ReactCheckout = __webpack_require__("SZXZ");

// CONCATENATED MODULE: ./components/Checkout/index.jsx
var Checkout_jsx = external_react_default.a.createElement;









const CheckOut = () => {
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(Carts["b" /* MY_CARTS */]); //
  // console.log("User Cart:", data)

  if (error) return Checkout_jsx("p", null, "Ooops....! Something went wrong, Plz Login try again later");
  if (loading) return Checkout_jsx("p", null, "Empty Cart Loading...");
  return Checkout_jsx(external_react_default.a.Fragment, null, Checkout_jsx("div", {
    className: "checkout-content"
  }, Checkout_jsx("main", null, Checkout_jsx("section", {
    className: "recent-checkout"
  }, Checkout_jsx("div", {
    className: "checkout-grid"
  }, Checkout_jsx(Checkout_CheckOutList, {
    carts: data.user.carts
  }), Checkout_jsx("div", {
    className: "checkout-card"
  }, Checkout_jsx("h3", {
    className: "bill-title"
  }, "Billing Information:"), Checkout_jsx("div", {
    className: "checkout-card-item"
  }, Checkout_jsx("div", {
    className: "checkout-header-cards"
  }, Checkout_jsx("div", {
    className: "checkout-header-card-single"
  }, Checkout_jsx("div", {
    className: "card-body"
  }, Checkout_jsx("span", {
    className: "ti-briefcase"
  }), Checkout_jsx("div", null, Checkout_jsx("h5", null, "Master Card"), Checkout_jsx("h4", null, "$30,405.00"))), Checkout_jsx("div", {
    className: "card-footer"
  }, Checkout_jsx("a", {
    href: ""
  }, "View all"))), Checkout_jsx("div", {
    className: "checkout-header-card-single"
  }, Checkout_jsx("div", {
    className: "card-body"
  }, Checkout_jsx("span", {
    className: "ti-reload"
  }), Checkout_jsx("div", null, Checkout_jsx("h5", null, "BCEL Account"), Checkout_jsx("h4", null, "$21,249.00"))), Checkout_jsx("div", {
    className: "card-footer"
  }, Checkout_jsx("a", {
    href: ""
  }, "View all"))), Checkout_jsx("div", {
    className: "checkout-header-card-single"
  }, Checkout_jsx("div", {
    className: "card-body"
  }, Checkout_jsx("span", {
    className: "ti-check-box"
  }), Checkout_jsx("div", null, Checkout_jsx("h5", null, "Paypal Account"), Checkout_jsx("h4", null, "$74,905.00"))), Checkout_jsx("div", {
    className: "card-footer"
  }, Checkout_jsx("a", {
    href: ""
  }, "View all"))), Checkout_jsx("div", {
    className: "checkout-header-card-single"
  }, Checkout_jsx("div", {
    className: "card-body"
  }, Checkout_jsx("span", {
    className: "ti-book"
  }), Checkout_jsx("div", null, Checkout_jsx("h5", null, "Union Pay"), Checkout_jsx("h4", null, "$174,905.00"))), Checkout_jsx("div", {
    className: "card-footer"
  }, Checkout_jsx("a", {
    href: ""
  }, "View all"))))), Checkout_jsx("div", {
    className: "checkout-info-cards"
  }, Checkout_jsx("div", {
    className: "summary-checkout-single"
  }, Checkout_jsx("h3", null, "1. Billing Address"), Checkout_jsx("form", {
    action: "",
    method: "post"
  }, Checkout_jsx("div", {
    className: "info-state"
  }, Checkout_jsx("label", {
    htmlFor: "fullname"
  }, "Full Name:"), Checkout_jsx("input", {
    type: "text",
    name: "fullname",
    placeholder: "Enter Fullname"
  }), Checkout_jsx("label", {
    htmlFor: "address"
  }, "Address:"), Checkout_jsx("input", {
    type: "text",
    name: "address",
    placeholder: "Enter Address"
  }), Checkout_jsx("label", {
    htmlFor: "city"
  }, "City:"), Checkout_jsx("input", {
    type: "text",
    name: "city",
    placeholder: "NY, New York"
  }), Checkout_jsx("label", {
    htmlFor: "contact"
  }, "Contact No:"), Checkout_jsx("input", {
    type: "text",
    name: "contact",
    placeholder: "Contact No."
  })), Checkout_jsx("div", {
    className: "select-state"
  }, Checkout_jsx("label", {
    htmlFor: "state"
  }, "Province:"), Checkout_jsx("input", {
    type: "text",
    name: "state",
    placeholder: "Enter Province"
  }), Checkout_jsx("label", {
    htmlFor: "zip"
  }, "Zip Code:"), Checkout_jsx("input", {
    type: "text",
    name: "zip",
    placeholder: "Zip Code"
  })), Checkout_jsx("div", {
    className: "submit-state"
  }, Checkout_jsx("button", {
    className: "btn__cancel",
    type: ""
  }, "Back Cart"), Checkout_jsx("button", {
    className: "btn__submit",
    type: "submit"
  }, "Check Out")))), Checkout_jsx("div", {
    className: "summary-checkout-single"
  }, Checkout_jsx("h3", null, "2. Credit Card No")))))))));
};

/* harmony default export */ var Checkout = (CheckOut);
// CONCATENATED MODULE: ./pages/Checkout/index.jsx
var pages_Checkout_jsx = external_react_default.a.createElement;



const CheckOuts = () => {
  return pages_Checkout_jsx("div", {
    className: "checkout-page"
  }, pages_Checkout_jsx(Checkout, null));
};

/* harmony default export */ var pages_Checkout = __webpack_exports__["default"] = (CheckOuts);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "wL7q":
/***/ (function(module, exports) {

// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements()
//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         const {error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: elements.getElement(CardElement)
//         });
//         if(!error){
//             const { id } = paymentMethod;
//             console.log(paymentMethod)
//         }
//     }
//     return <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" className="btn_payment__stripe" disabled={!stripe}>
//             Pay Now!
//         </button>
//     </form>
// }
// const CheckoutStripe = () => {
//     console.log(process.env.STRIPE_PUBLIC_KEY)
//     return (
//         <div>
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm />
//             </Elements>
//         </div>
//     )
// }
// export default CheckoutStripe;

/***/ })

/******/ });