/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_AmaticSC_Bold_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/AmaticSC-Bold.woff */ "./src/fonts/AmaticSC-Bold.woff");
/* harmony import */ var _fonts_AmaticSC_Bold_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/AmaticSC-Bold.woff2 */ "./src/fonts/AmaticSC-Bold.woff2");
/* harmony import */ var _fonts_OldStandardTT_Regular_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/OldStandardTT-Regular.woff2 */ "./src/fonts/OldStandardTT-Regular.woff2");
/* harmony import */ var _fonts_OldStandardTT_Regular_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/OldStandardTT-Regular.woff */ "./src/fonts/OldStandardTT-Regular.woff");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_AmaticSC_Bold_woff__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_AmaticSC_Bold_woff2__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_OldStandardTT_Regular_woff2__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_OldStandardTT_Regular_woff__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'Amatic-SC';\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Old-Standard';\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n  font-weight: 400;\n}\n", "",{"version":3,"sources":["webpack://src/css/fonts.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB;;0DAEoD;EACpD,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B;;0DAE2D;EAC3D,gBAAgB;AAClB","sourcesContent":["@font-face {\n  font-family: 'Amatic-SC';\n  src:\n    url('../fonts/AmaticSC-Bold.woff') format('woff2'),\n    url('../fonts/AmaticSC-Bold.woff2') format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Old-Standard';\n  src:\n    url('../fonts/OldStandardTT-Regular.woff2') format('woff2'),\n    url('../fonts/OldStandardTT-Regular.woff') format('woff');\n  font-weight: 400;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_main_background_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/main-background.svg */ "./src/img/main-background.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_main_background_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Amatic-SC', cursive;\r\n  font-size: 6vw;\r\n  color: #1e2022;\r\n  margin: 0;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #f0f5f9;\r\n  height: 6vh;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n  color: #1e2022;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33.33%;\r\n  height: 50px;\r\n  font-size: 5vw;\r\n  color: #1e2022;\r\n  font-family: 'Amatic-SC', cursive;\r\n}\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  padding: 0 20px;\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  background-color: #f0f5f9;\r\n  width: 100%;\r\n  font-family: 'Old-standard', serif;\r\n  font-style: normal;\r\n  max-width: 400px;\r\n  height: min-content;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 11px 0.4px rgba(82, 97, 107, 1);\r\n  -moz-box-shadow: 0 0 11px 0.4px rgba(82, 97, 107, 1);\r\n  box-shadow: 0 0 11px 0.4px rgba(82, 97, 107, 1);\r\n  flex-flow: column nowrap;\r\n  margin-bottom: 20px;\r\n  border-radius: 10px;\r\n  color: #1e2022;\r\n}\r\n\r\n.coffee-item > img {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  border-radius: 20px;\r\n  height: 80%;\r\n}\r\n\r\n.coffee-item > button {\r\n  font-family: 'Old-standard', serif;\r\n  border: none;\r\n  width: 60%;\r\n  height: min-content;\r\n  border-radius: 5px;\r\n  padding: 2px;\r\n  margin: 20px 0;\r\n  text-align: center;\r\n  background-color: #1e2022;\r\n  font-size: 4vw;\r\n  color: #fff;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  h1 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  #content {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .tab-container {\r\n    display: flex;\r\n    position: fixed;\r\n    width: 30%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 100vh;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .tab-child {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .main-container {\r\n    margin-top: auto;\r\n    margin-left: auto;\r\n    width: 70%;\r\n    min-height: 95vh;\r\n    height: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n  }\r\n\r\n  .coffee-container {\r\n    width: 90%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n  }\r\n\r\n  .coffee-item {\r\n    padding-bottom: 10px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/css/index.css"],"names":[],"mappings":";AACA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,cAAc;EACd,cAAc;EACd,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAmD;EACnD,0BAA0B;EAC1B,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,uDAAuD;EACvD,oDAAoD;EACpD,+CAA+C;EAC/C,wBAAwB;EACxB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,WAAW;AACb;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,UAAU;IACV,MAAM;IACN,OAAO;IACP,SAAS;IACT,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wBAAwB;EAC1B;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,oBAAoB;EACtB;AACF","sourcesContent":["\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Amatic-SC', cursive;\r\n  font-size: 6vw;\r\n  color: #1e2022;\r\n  margin: 0;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url('../img/main-background.svg');\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #f0f5f9;\r\n  height: 6vh;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n  color: #1e2022;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33.33%;\r\n  height: 50px;\r\n  font-size: 5vw;\r\n  color: #1e2022;\r\n  font-family: 'Amatic-SC', cursive;\r\n}\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  padding: 0 20px;\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  background-color: #f0f5f9;\r\n  width: 100%;\r\n  font-family: 'Old-standard', serif;\r\n  font-style: normal;\r\n  max-width: 400px;\r\n  height: min-content;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 11px 0.4px rgba(82, 97, 107, 1);\r\n  -moz-box-shadow: 0 0 11px 0.4px rgba(82, 97, 107, 1);\r\n  box-shadow: 0 0 11px 0.4px rgba(82, 97, 107, 1);\r\n  flex-flow: column nowrap;\r\n  margin-bottom: 20px;\r\n  border-radius: 10px;\r\n  color: #1e2022;\r\n}\r\n\r\n.coffee-item > img {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  border-radius: 20px;\r\n  height: 80%;\r\n}\r\n\r\n.coffee-item > button {\r\n  font-family: 'Old-standard', serif;\r\n  border: none;\r\n  width: 60%;\r\n  height: min-content;\r\n  border-radius: 5px;\r\n  padding: 2px;\r\n  margin: 20px 0;\r\n  text-align: center;\r\n  background-color: #1e2022;\r\n  font-size: 4vw;\r\n  color: #fff;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  h1 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  #content {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .tab-container {\r\n    display: flex;\r\n    position: fixed;\r\n    width: 30%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 100vh;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .tab-child {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .main-container {\r\n    margin-top: auto;\r\n    margin-left: auto;\r\n    width: 70%;\r\n    min-height: 95vh;\r\n    height: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n  }\r\n\r\n  .coffee-container {\r\n    width: 90%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n  }\r\n\r\n  .coffee-item {\r\n    padding-bottom: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/classes/CoffeeBean.js":
/*!***********************************!*\
  !*** ./src/classes/CoffeeBean.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class CoffeeBean {
  constructor(region, process, profile, description, img) {
    this.region = region;
    this.process = process;
    this.profile = profile;
    this.description = description;
    this.img = img;
  }

  get region() { return this._region; }

  get process() { return this._process; }

  get profile() { return this._profile; }

  get description() { return this._description; }

  get img() { return this._img; }

  set region(value) {
    this._region = value;
  }

  set process(value) {
    this._process = value;
  }

  set profile(value) {
    this._profile = value;
  }

  set description(value) {
    this._description = value;
  }

  set img(value) {
    this._img = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CoffeeBean);

/***/ }),

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/fonts/AmaticSC-Bold.woff":
/*!**************************************!*\
  !*** ./src/fonts/AmaticSC-Bold.woff ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5a0d3e706c41c60d096b03cf63805a97.woff");

/***/ }),

/***/ "./src/fonts/AmaticSC-Bold.woff2":
/*!***************************************!*\
  !*** ./src/fonts/AmaticSC-Bold.woff2 ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c849dd6c62f912fc68a5f9c9e5aa8eb9.woff2");

/***/ }),

/***/ "./src/fonts/OldStandardTT-Regular.woff":
/*!**********************************************!*\
  !*** ./src/fonts/OldStandardTT-Regular.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a0b4a5296fa498b43dd5daa68d892dd.woff");

/***/ }),

/***/ "./src/fonts/OldStandardTT-Regular.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/OldStandardTT-Regular.woff2 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b64cfa56f8c116e0c4f753340066860d.woff2");

/***/ }),

/***/ "./src/img/bean.svg":
/*!**************************!*\
  !*** ./src/img/bean.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "37ca6d2684cad8f8c7dc8bc825595eec.svg");

/***/ }),

/***/ "./src/img/beans-bag-chiapas.svg":
/*!***************************************!*\
  !*** ./src/img/beans-bag-chiapas.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8837fada556cae5b1832875122444bef.svg");

/***/ }),

/***/ "./src/img/beans-bag-veracruz.svg":
/*!****************************************!*\
  !*** ./src/img/beans-bag-veracruz.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a882c34e34b579eeb86f16b993c383a2.svg");

/***/ }),

/***/ "./src/img/beans-bag.svg":
/*!*******************************!*\
  !*** ./src/img/beans-bag.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f4c29059666c1dd3ce0ad792e91d3574.svg");

/***/ }),

/***/ "./src/img/main-background.svg":
/*!*************************************!*\
  !*** ./src/img/main-background.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8e44959c9958a4d770759d0a57e71e50.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_domCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domCreation */ "./src/modules/domCreation.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/fonts.css */ "./src/css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");





Object(_modules_domCreation__WEBPACK_IMPORTED_MODULE_0__["createTabs"])();
Object(_modules_domCreation__WEBPACK_IMPORTED_MODULE_0__["createPage"])('Historia del Café Mexicano');
Object(_modules_home__WEBPACK_IMPORTED_MODULE_3__["default"])();


/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedHTMLElements */ "./src/modules/sharedHTMLElements.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ "./src/modules/eventListeners.js");





const aboutContainer = document.createElement('div');
const aboutParagraph = document.createElement('p');
const shippingParagraph = document.createElement('p');


const addingAttributes = () => {
  aboutContainer.classList.add('about-container');
  aboutParagraph.classList.add('about-paragraph');
  shippingParagraph.classList.add('about-paragraph');
  shippingParagraph.id = 'shipping-paragraph';
};

const renderAbout = () => {
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].innerHTML = '';
  Object(_eventListeners__WEBPACK_IMPORTED_MODULE_1__["default"])();
  aboutParagraph.innerHTML = 'We are a speciality coffee shop focused on selling the greatest mexican coffee beans.';
  shippingParagraph.innerHTML = 'Check our products and shipping offers';
  addingAttributes();

  aboutContainer.appendChild(aboutParagraph);
  aboutContainer.appendChild(shippingParagraph);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["headlineContainer"]);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].appendChild(aboutContainer);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["root"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"]);
//   I need to add some text in here.
};


/* harmony default export */ __webpack_exports__["default"] = (renderAbout);

/***/ }),

/***/ "./src/modules/domCreation.js":
/*!************************************!*\
  !*** ./src/modules/domCreation.js ***!
  \************************************/
/*! exports provided: createPage, createTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTabs", function() { return createTabs; });
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/modules/tabs.js");
/* harmony import */ var _img_main_background_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/main-background.svg */ "./src/img/main-background.svg");
/* harmony import */ var _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedHTMLElements */ "./src/modules/sharedHTMLElements.js");



// import renderAbout from './about';
const imgContainer = document.createElement('div');
const imgTitle = document.createElement('h3');
const img = document.createElement('img');
const info = document.createElement('p');

const createTabs = () => {
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].innerHTML = '';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].style.backgroundImage = _img_main_background_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  Object(_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["root"]);
};

const createPage = (headlineText) => {
  // creating elements
  // adding classes to HTML elements
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].classList.add('main-container');
  info.classList.add('main-info');
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].classList.add('main-headline');
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].id = 'headlineContainer';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["subheadline"].id = 'subheadline';
  imgContainer.classList.add('main-img-container');
  imgTitle.classList.add('img-title');
  img.classList.add('main-img');

  // adding elements to HTML
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].style.backgroundImage = _img_main_background_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  imgTitle.innerHTML = 'Zongolica, Veracruz';

  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headline"].innerHTML = headlineText;
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["subheadline"].innerHTML = 'Coffee beans for sale';
  info.innerHTML = 'This coffee tastes like heaven';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headline"]);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["subheadline"]);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"]);
  imgContainer.appendChild(info);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["root"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"]);
};

// const tabsEvent = () => {
//   const homeTab = document.getElementById('Home');
//   const aboutTab = document.getElementById('About');
//   const productTab = document.getElementById('Product');
//   homeTab.addEventListener('click', createPage);
//   aboutTab.addEventListener('click', renderAbout);
// }



/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./src/modules/products.js");





const eventListenerCreation = () => {
  const aboutTab = document.getElementById('About');
  const homeTab = document.getElementById('Home');
  const productsTab = document.getElementById('Product');
  aboutTab.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_0__["default"], false);
  homeTab.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__["default"], false);
  productsTab.addEventListener('click', _products__WEBPACK_IMPORTED_MODULE_2__["default"], false);
};

/* harmony default export */ __webpack_exports__["default"] = (eventListenerCreation);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreation */ "./src/modules/domCreation.js");
/* harmony import */ var _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharedHTMLElements */ "./src/modules/sharedHTMLElements.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ "./src/modules/eventListeners.js");




const home = () => {
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_1__["mainContainer"].innerHTML = '';
  Object(_eventListeners__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_domCreation__WEBPACK_IMPORTED_MODULE_0__["createPage"])('Historia del Café Mexicano');
};

/* harmony default export */ __webpack_exports__["default"] = (home);


/***/ }),

/***/ "./src/modules/products.js":
/*!*********************************!*\
  !*** ./src/modules/products.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedHTMLElements */ "./src/modules/sharedHTMLElements.js");
/* harmony import */ var _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/CoffeeBean */ "./src/classes/CoffeeBean.js");
/* harmony import */ var _img_beans_bag_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/beans-bag.svg */ "./src/img/beans-bag.svg");
/* harmony import */ var _img_beans_bag_chiapas_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/beans-bag-chiapas.svg */ "./src/img/beans-bag-chiapas.svg");
/* harmony import */ var _img_beans_bag_veracruz_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/beans-bag-veracruz.svg */ "./src/img/beans-bag-veracruz.svg");







const html = document.getElementsByTagName('html');


const coffeeContainer = document.createElement('div');
const COFFEECATALOG = [
  new _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    _img_beans_bag_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  ),
  new _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Veracruz',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    _img_beans_bag_chiapas_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  ),
  new _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Chiapas',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavours',
    _img_beans_bag_veracruz_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  ),
];

const coffeeSectionBuilder = (subHeadline, info, subContent, infoContent) => {
  const container = document.createElement('div');
  container.classList.add('coffee-section-container');
  subHeadline.innerHTML = subContent;
  info.innerHTML = infoContent;
  container.appendChild(subHeadline);
  container.appendChild(info);
  return container;
};

const itemBuilder = () => {
  coffeeContainer.classList.add('coffee-container');
  if (coffeeContainer.childNodes.length === 0) {
    COFFEECATALOG.forEach(coffee => {
      const imgElement = document.createElement('img');
      const itemContainer = document.createElement('div');
      const addToCart = document.createElement('button');
      itemContainer.classList.add('coffee-item');
      imgElement.src = coffee.img;
      addToCart.innerHTML = 'Add to Cart';
      itemContainer.appendChild(imgElement);
      itemContainer.appendChild(addToCart);
      coffeeContainer.appendChild(itemContainer);
    });
  }
  return coffeeContainer;
};

const renderProduct = () => {
  document.body.style.backgroundColor = '#c9d6df';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].innerHTML = '';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["headline"].innerHTML = '';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["headlineContainer"]);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].appendChild(itemBuilder());
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["root"].appendChild(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"]);
};

/* harmony default export */ __webpack_exports__["default"] = (renderProduct);

/***/ }),

/***/ "./src/modules/sharedHTMLElements.js":
/*!*******************************************!*\
  !*** ./src/modules/sharedHTMLElements.js ***!
  \*******************************************/
/*! exports provided: root, mainContainer, headlineContainer, headline, subheadline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainContainer", function() { return mainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headlineContainer", function() { return headlineContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headline", function() { return headline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subheadline", function() { return subheadline; });
const root = document.getElementById('content');
const mainContainer = document.createElement('div');
const headlineContainer = document.createElement('div');
const headline = document.createElement('h1');
const subheadline = document.createElement('h1');



/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_bean_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/bean.svg */ "./src/img/bean.svg");


const tabText = ['Home', 'Product', 'About'];

const childContent = (child, textContent) => {
  child.innerHTML = textContent;
  child.id = textContent;
  child.classList.add('tab-child');
};

const childMaker = (parent, numOfChilds) => {
  for (let i = 0; i < numOfChilds; i += 1) {
    const child = document.createElement('div');
    childContent(child, tabText[i]);
    parent.appendChild(child);
  }
};

const tabBuilder = (parent) => {
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-container');
  childMaker(tabContainer, 3);
  parent.appendChild(tabContainer);
};

/* harmony default export */ __webpack_exports__["default"] = (tabBuilder);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Db2ZmZWVCZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvZm9udHMuY3NzP2UzZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvQW1hdGljU0MtQm9sZC53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9BbWF0aWNTQy1Cb2xkLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9mb250cy9PbGRTdGFuZGFyZFRULVJlZ3VsYXIud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvT2xkU3RhbmRhcmRUVC1SZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmVhbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iZWFucy1iYWctY2hpYXBhcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iZWFucy1iYWctdmVyYWNydXouc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmVhbnMtYmFnLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21haW4tYmFja2dyb3VuZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RvbUNyZWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc2hhcmVkSFRNTEVsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUNPO0FBQzNCO0FBQ0M7QUFDUTtBQUNEO0FBQ2hGLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLGlFQUE2QjtBQUN0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Q0EsTUFBTSwyREFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaUVBQWE7QUFDZixFQUFFLDREQUFRO0FBQ1YsRUFBRSxpRUFBYSxhQUFhLHFFQUFpQjtBQUM3QyxFQUFFLGlFQUFhO0FBQ2YsRUFBRSx3REFBSSxhQUFhLGlFQUFhO0FBQ2hDOztBQUVlLDRFQUFhLEU7Ozs7Ozs7Ozs7OztBQzFFNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQW1DOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9mb250cy9BbWF0aWNTQy1Cb2xkLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vZm9udHMvQW1hdGljU0MtQm9sZC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9mb250cy9PbGRTdGFuZGFyZFRULVJlZ3VsYXIud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vZm9udHMvT2xkU3RhbmRhcmRUVC1SZWd1bGFyLndvZmZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljLVNDJztcXG4gIHNyYzpcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09sZC1TdGFuZGFyZCc7XFxuICBzcmM6XFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvZm9udHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCOzswREFFb0Q7RUFDcEQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQjs7MERBRTJEO0VBQzNELGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljLVNDJztcXG4gIHNyYzpcXG4gICAgdXJsKCcuLi9mb250cy9BbWF0aWNTQy1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi4vZm9udHMvQW1hdGljU0MtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPbGQtU3RhbmRhcmQnO1xcbiAgc3JjOlxcbiAgICB1cmwoJy4uL2ZvbnRzL09sZFN0YW5kYXJkVFQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuLi9mb250cy9PbGRTdGFuZGFyZFRULVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltZy9tYWluLWJhY2tncm91bmQuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBbWF0aWMtU0MnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiA2dnc7XFxyXFxuICBjb2xvcjogIzFlMjAyMjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY1Zjk7XFxyXFxuICBoZWlnaHQ6IDZ2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGNvbG9yOiAjMWUyMDIyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzMuMzMlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiA1dnc7XFxyXFxuICBjb2xvcjogIzFlMjAyMjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljLVNDJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFyYWdyYXBoIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY1Zjk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT2xkLXN0YW5kYXJkJywgc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTFweCAwLjRweCByZ2JhKDgyLCA5NywgMTA3LCAxKTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDExcHggMC40cHggcmdiYSg4MiwgOTcsIDEwNywgMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTFweCAwLjRweCByZ2JhKDgyLCA5NywgMTA3LCAxKTtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICMxZTIwMjI7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtaXRlbSA+IGltZyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtaXRlbSA+IGJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogJ09sZC1zdGFuZGFyZCcsIHNlcmlmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMjI7XFxyXFxuICBmb250LXNpemU6IDR2dztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWItY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbWluLWhlaWdodDogOTV2aDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29mZmVlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2ZmZWUtaXRlbSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlEQUFtRDtFQUNuRCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdURBQXVEO0VBQ3ZELG9EQUFvRDtFQUNwRCwrQ0FBK0M7RUFDL0Msd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljLVNDJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgY29sb3I6ICMxZTIwMjI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9tYWluLWJhY2tncm91bmQuc3ZnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY1Zjk7XFxyXFxuICBoZWlnaHQ6IDZ2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGNvbG9yOiAjMWUyMDIyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzMuMzMlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiA1dnc7XFxyXFxuICBjb2xvcjogIzFlMjAyMjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljLVNDJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFyYWdyYXBoIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY1Zjk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT2xkLXN0YW5kYXJkJywgc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTFweCAwLjRweCByZ2JhKDgyLCA5NywgMTA3LCAxKTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDExcHggMC40cHggcmdiYSg4MiwgOTcsIDEwNywgMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTFweCAwLjRweCByZ2JhKDgyLCA5NywgMTA3LCAxKTtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICMxZTIwMjI7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtaXRlbSA+IGltZyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtaXRlbSA+IGJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogJ09sZC1zdGFuZGFyZCcsIHNlcmlmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMjI7XFxyXFxuICBmb250LXNpemU6IDR2dztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWItY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbWluLWhlaWdodDogOTV2aDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29mZmVlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2ZmZWUtaXRlbSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQ29mZmVlQmVhbiB7XG4gIGNvbnN0cnVjdG9yKHJlZ2lvbiwgcHJvY2VzcywgcHJvZmlsZSwgZGVzY3JpcHRpb24sIGltZykge1xuICAgIHRoaXMucmVnaW9uID0gcmVnaW9uO1xuICAgIHRoaXMucHJvY2VzcyA9IHByb2Nlc3M7XG4gICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gIH1cblxuICBnZXQgcmVnaW9uKCkgeyByZXR1cm4gdGhpcy5fcmVnaW9uOyB9XG5cbiAgZ2V0IHByb2Nlc3MoKSB7IHJldHVybiB0aGlzLl9wcm9jZXNzOyB9XG5cbiAgZ2V0IHByb2ZpbGUoKSB7IHJldHVybiB0aGlzLl9wcm9maWxlOyB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247IH1cblxuICBnZXQgaW1nKCkgeyByZXR1cm4gdGhpcy5faW1nOyB9XG5cbiAgc2V0IHJlZ2lvbih2YWx1ZSkge1xuICAgIHRoaXMuX3JlZ2lvbiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHByb2Nlc3ModmFsdWUpIHtcbiAgICB0aGlzLl9wcm9jZXNzID0gdmFsdWU7XG4gIH1cblxuICBzZXQgcHJvZmlsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3Byb2ZpbGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBzZXQgaW1nKHZhbHVlKSB7XG4gICAgdGhpcy5faW1nID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29mZmVlQmVhbjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9udHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWEwZDNlNzA2YzQxYzYwZDA5NmIwM2NmNjM4MDVhOTcud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjODQ5ZGQ2YzYyZjkxMmZjNjhhNWY5YzllNWFhOGViOS53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YTBiNGE1Mjk2ZmE0OThiNDNkZDVkYWE2OGQ4OTJkZC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI2NGNmYTU2ZjhjMTE2ZTBjNGY3NTMzNDAwNjY4NjBkLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3Y2E2ZDI2ODRjYWQ4ZjhjN2RjOGJjODI1NTk1ZWVjLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ODM3ZmFkYTU1NmNhZTViMTgzMjg3NTEyMjQ0NGJlZi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTg4MmMzNGUzNGI1NzllZWI4NmYxNmI5OTNjMzgzYTIuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY0YzI5MDU5NjY2YzFkZDNjZTBhZDc5MmU5MWQzNTc0LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZTQ0OTU5Yzk5NThhNGQ3NzA3NTlkMGE1N2U3MWU1MC5zdmdcIjsiLCJpbXBvcnQgeyBjcmVhdGVQYWdlLCBjcmVhdGVUYWJzIH0gZnJvbSAnLi9tb2R1bGVzL2RvbUNyZWF0aW9uJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnLi9jc3MvZm9udHMuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vbW9kdWxlcy9ob21lJztcblxuY3JlYXRlVGFicygpO1xuY3JlYXRlUGFnZSgnSGlzdG9yaWEgZGVsIENhZsOpIE1leGljYW5vJyk7XG5ob21lKCk7XG4iLCJcbmltcG9ydCB7IHJvb3QsIG1haW5Db250YWluZXIsIGhlYWRsaW5lQ29udGFpbmVyIH0gZnJvbSAnLi9zaGFyZWRIVE1MRWxlbWVudHMnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJDcmVhdGlvbiBmcm9tICcuL2V2ZW50TGlzdGVuZXJzJztcblxuXG5jb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBzaGlwcGluZ1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXG5jb25zdCBhZGRpbmdBdHRyaWJ1dGVzID0gKCkgPT4ge1xuICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcbiAgYWJvdXRQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYWdyYXBoJyk7XG4gIHNoaXBwaW5nUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhcmFncmFwaCcpO1xuICBzaGlwcGluZ1BhcmFncmFwaC5pZCA9ICdzaGlwcGluZy1wYXJhZ3JhcGgnO1xufTtcblxuY29uc3QgcmVuZGVyQWJvdXQgPSAoKSA9PiB7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGV2ZW50TGlzdGVuZXJDcmVhdGlvbigpO1xuICBhYm91dFBhcmFncmFwaC5pbm5lckhUTUwgPSAnV2UgYXJlIGEgc3BlY2lhbGl0eSBjb2ZmZWUgc2hvcCBmb2N1c2VkIG9uIHNlbGxpbmcgdGhlIGdyZWF0ZXN0IG1leGljYW4gY29mZmVlIGJlYW5zLic7XG4gIHNoaXBwaW5nUGFyYWdyYXBoLmlubmVySFRNTCA9ICdDaGVjayBvdXIgcHJvZHVjdHMgYW5kIHNoaXBwaW5nIG9mZmVycyc7XG4gIGFkZGluZ0F0dHJpYnV0ZXMoKTtcblxuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhcmFncmFwaCk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBwaW5nUGFyYWdyYXBoKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZUNvbnRhaW5lcik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICByb290LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuLy8gICBJIG5lZWQgdG8gYWRkIHNvbWUgdGV4dCBpbiBoZXJlLlxufTtcblxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBYm91dDsiLCJpbXBvcnQgdGFiQnVpbGRlciBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IE1haW5CYWNrZ3JvdW5kIGZyb20gJy4uL2ltZy9tYWluLWJhY2tncm91bmQuc3ZnJztcbmltcG9ydCB7XG4gIHJvb3QsIG1haW5Db250YWluZXIsIGhlYWRsaW5lQ29udGFpbmVyLCBoZWFkbGluZSwgc3ViaGVhZGxpbmUsXG59IGZyb20gJy4vc2hhcmVkSFRNTEVsZW1lbnRzJztcbi8vIGltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL2Fib3V0JztcbmNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaW1nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5jb25zdCBjcmVhdGVUYWJzID0gKCkgPT4ge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IE1haW5CYWNrZ3JvdW5kO1xuICB0YWJCdWlsZGVyKHJvb3QpO1xufTtcblxuY29uc3QgY3JlYXRlUGFnZSA9IChoZWFkbGluZVRleHQpID0+IHtcbiAgLy8gY3JlYXRpbmcgZWxlbWVudHNcbiAgLy8gYWRkaW5nIGNsYXNzZXMgdG8gSFRNTCBlbGVtZW50c1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gIGluZm8uY2xhc3NMaXN0LmFkZCgnbWFpbi1pbmZvJyk7XG4gIGhlYWRsaW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGxpbmUnKTtcbiAgaGVhZGxpbmVDb250YWluZXIuaWQgPSAnaGVhZGxpbmVDb250YWluZXInO1xuICBzdWJoZWFkbGluZS5pZCA9ICdzdWJoZWFkbGluZSc7XG4gIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWltZy1jb250YWluZXInKTtcbiAgaW1nVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW1nLXRpdGxlJyk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtYWluLWltZycpO1xuXG4gIC8vIGFkZGluZyBlbGVtZW50cyB0byBIVE1MXG4gIG1haW5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gTWFpbkJhY2tncm91bmQ7XG4gIGltZ1RpdGxlLmlubmVySFRNTCA9ICdab25nb2xpY2EsIFZlcmFjcnV6JztcblxuICBoZWFkbGluZS5pbm5lckhUTUwgPSBoZWFkbGluZVRleHQ7XG4gIHN1YmhlYWRsaW5lLmlubmVySFRNTCA9ICdDb2ZmZWUgYmVhbnMgZm9yIHNhbGUnO1xuICBpbmZvLmlubmVySFRNTCA9ICdUaGlzIGNvZmZlZSB0YXN0ZXMgbGlrZSBoZWF2ZW4nO1xuICBoZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmhlYWRsaW5lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZUNvbnRhaW5lcik7XG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn07XG5cbi8vIGNvbnN0IHRhYnNFdmVudCA9ICgpID0+IHtcbi8vICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG4vLyAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0Jyk7XG4vLyAgIGNvbnN0IHByb2R1Y3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdCcpO1xuLy8gICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUGFnZSk7XG4vLyAgIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWJvdXQpO1xuLy8gfVxuXG5leHBvcnQge1xuICBjcmVhdGVQYWdlLFxuICBjcmVhdGVUYWJzLFxufTsiLCJcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgcmVuZGVyUHJvZHVjdCBmcm9tICcuL3Byb2R1Y3RzJztcblxuY29uc3QgZXZlbnRMaXN0ZW5lckNyZWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBYm91dCcpO1xuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hvbWUnKTtcbiAgY29uc3QgcHJvZHVjdHNUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdCcpO1xuICBhYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFib3V0LCBmYWxzZSk7XG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lLCBmYWxzZSk7XG4gIHByb2R1Y3RzVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyUHJvZHVjdCwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uOyIsImltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tICcuL2RvbUNyZWF0aW9uJztcbmltcG9ydCB7IG1haW5Db250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMnO1xuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBldmVudExpc3RlbmVyQ3JlYXRpb24oKTtcbiAgY3JlYXRlUGFnZSgnSGlzdG9yaWEgZGVsIENhZsOpIE1leGljYW5vJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiXG5pbXBvcnQge1xuICByb290LCBtYWluQ29udGFpbmVyLCBoZWFkbGluZUNvbnRhaW5lciwgaGVhZGxpbmUsXG59IGZyb20gJy4vc2hhcmVkSFRNTEVsZW1lbnRzJztcbmltcG9ydCBDb2ZmZWVCZWFucyBmcm9tICcuLi9jbGFzc2VzL0NvZmZlZUJlYW4nO1xuaW1wb3J0IENvZmZlZUJhZyBmcm9tICcuLi9pbWcvYmVhbnMtYmFnLnN2Zyc7XG5pbXBvcnQgQ29mZmVlQmFnMSBmcm9tICcuLi9pbWcvYmVhbnMtYmFnLWNoaWFwYXMuc3ZnJztcbmltcG9ydCBDb2ZmZWVCYWcyIGZyb20gJy4uL2ltZy9iZWFucy1iYWctdmVyYWNydXouc3ZnJztcblxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJyk7XG5cblxuY29uc3QgY29mZmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBDT0ZGRUVDQVRBTE9HID0gW1xuICBuZXcgQ29mZmVlQmVhbnMoXG4gICAgJ09heGFjYScsXG4gICAgJ1dhc2hlZCcsXG4gICAgJ0Nob2NvbGF0ZSwgTnV0cycsXG4gICAgJ0NvZmZlZSBiZWFuIHdpdGggYSBjbGFzc2ljIHRhc3RlLCBzdHJvbmcgYW5kIG1hcmtlZCBmbGF2b3JzJyxcbiAgICBDb2ZmZWVCYWcsXG4gICksXG4gIG5ldyBDb2ZmZWVCZWFucyhcbiAgICAnVmVyYWNydXonLFxuICAgICdXYXNoZWQnLFxuICAgICdDaG9jb2xhdGUsIE51dHMnLFxuICAgICdDb2ZmZWUgYmVhbiB3aXRoIGEgY2xhc3NpYyB0YXN0ZSwgc3Ryb25nIGFuZCBtYXJrZWQgZmxhdm9ycycsXG4gICAgQ29mZmVlQmFnMSxcbiAgKSxcbiAgbmV3IENvZmZlZUJlYW5zKFxuICAgICdDaGlhcGFzJyxcbiAgICAnV2FzaGVkJyxcbiAgICAnQ2hvY29sYXRlLCBOdXRzJyxcbiAgICAnQ29mZmVlIGJlYW4gd2l0aCBhIGNsYXNzaWMgdGFzdGUsIHN0cm9uZyBhbmQgbWFya2VkIGZsYXZvdXJzJyxcbiAgICBDb2ZmZWVCYWcyLFxuICApLFxuXTtcblxuY29uc3QgY29mZmVlU2VjdGlvbkJ1aWxkZXIgPSAoc3ViSGVhZGxpbmUsIGluZm8sIHN1YkNvbnRlbnQsIGluZm9Db250ZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLXNlY3Rpb24tY29udGFpbmVyJyk7XG4gIHN1YkhlYWRsaW5lLmlubmVySFRNTCA9IHN1YkNvbnRlbnQ7XG4gIGluZm8uaW5uZXJIVE1MID0gaW5mb0NvbnRlbnQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJIZWFkbGluZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGl0ZW1CdWlsZGVyID0gKCkgPT4ge1xuICBjb2ZmZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWNvbnRhaW5lcicpO1xuICBpZiAoY29mZmVlQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgQ09GRkVFQ0FUQUxPRy5mb3JFYWNoKGNvZmZlZSA9PiB7XG4gICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBhZGRUb0NhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWl0ZW0nKTtcbiAgICAgIGltZ0VsZW1lbnQuc3JjID0gY29mZmVlLmltZztcbiAgICAgIGFkZFRvQ2FydC5pbm5lckhUTUwgPSAnQWRkIHRvIENhcnQnO1xuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9DYXJ0KTtcbiAgICAgIGNvZmZlZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY29mZmVlQ29udGFpbmVyO1xufTtcblxuY29uc3QgcmVuZGVyUHJvZHVjdCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M5ZDZkZic7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGhlYWRsaW5lLmlubmVySFRNTCA9ICcnO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lQ29udGFpbmVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQnVpbGRlcigpKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclByb2R1Y3Q7IiwiY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBoZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3Qgc3ViaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG5leHBvcnQge1xuICByb290LFxuICBtYWluQ29udGFpbmVyLFxuICBoZWFkbGluZUNvbnRhaW5lcixcbiAgaGVhZGxpbmUsXG4gIHN1YmhlYWRsaW5lLFxufTsiLCJpbXBvcnQgQmVhbiBmcm9tICcuLi9pbWcvYmVhbi5zdmcnO1xuXG5jb25zdCB0YWJUZXh0ID0gWydIb21lJywgJ1Byb2R1Y3QnLCAnQWJvdXQnXTtcblxuY29uc3QgY2hpbGRDb250ZW50ID0gKGNoaWxkLCB0ZXh0Q29udGVudCkgPT4ge1xuICBjaGlsZC5pbm5lckhUTUwgPSB0ZXh0Q29udGVudDtcbiAgY2hpbGQuaWQgPSB0ZXh0Q29udGVudDtcbiAgY2hpbGQuY2xhc3NMaXN0LmFkZCgndGFiLWNoaWxkJyk7XG59O1xuXG5jb25zdCBjaGlsZE1ha2VyID0gKHBhcmVudCwgbnVtT2ZDaGlsZHMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZkNoaWxkczsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGlsZENvbnRlbnQoY2hpbGQsIHRhYlRleHRbaV0pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHRhYkJ1aWxkZXIgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpO1xuICBjaGlsZE1ha2VyKHRhYkNvbnRhaW5lciwgMyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFiQnVpbGRlcjsiXSwic291cmNlUm9vdCI6IiJ9