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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _fonts_YanoneKaffeesatz_Bold_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/YanoneKaffeesatz-Bold.ttf */ "./src/fonts/YanoneKaffeesatz-Bold.ttf");
/* harmony import */ var _fonts_YanoneKaffeesatz_Light_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/YanoneKaffeesatz-Light.ttf */ "./src/fonts/YanoneKaffeesatz-Light.ttf");
/* harmony import */ var _fonts_YanoneKaffeesatz_Medium_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/YanoneKaffeesatz-Medium.ttf */ "./src/fonts/YanoneKaffeesatz-Medium.ttf");
/* harmony import */ var _img_main_background_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/main-background.jpg */ "./src/img/main-background.jpg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_YanoneKaffeesatz_Bold_ttf__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_YanoneKaffeesatz_Light_ttf__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_YanoneKaffeesatz_Medium_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_main_background_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\r\n  font-family: 'YanoneKaffesatz-Bold';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Light';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\r\n  font-weight: 300;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Medium';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('ttf');\r\n  font-weight: 400;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'YanoneKaffeesatz-Bold', sans-serif;\r\n  background-color: rgba(1, 1, 1, 0.6);\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #3b5249;\r\n  height: 50px;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33.33%;\r\n  height: 50px;\r\n  font-size: 3.5vw;\r\n  font-family: 'YanoneKaffeesatz-Medium', sans-serif;\r\n  color: white;\r\n}\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  width: 80%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  z-index: 3;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 768px) {\r\n  #content {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .tab-container {\r\n    display: flex;\r\n    position: fixed;\r\n    width: 30%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: #3b5249;\r\n    height: 100vh;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .tab-child {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 3.5vw;\r\n    font-family: 'YanoneKaffeesatz-Medium', sans-serif;\r\n    color: white;\r\n  }\r\n\r\n  .main-container {\r\n    margin-top: auto;\r\n    margin-left: auto;\r\n    width: 70%;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center fixed;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    flex-flow: column nowrap;\r\n  }\r\n\r\n  .coffee-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://src/css/index.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,0DAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,0DAA6D;EAC7D,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,0DAA8D;EAC9D,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gDAAgD;EAChD,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAmD;EACnD,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,kDAAkD;EAClD,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;;;AAIA;EACE;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,UAAU;IACV,MAAM;IACN,OAAO;IACP,SAAS;IACT,yBAAyB;IACzB,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kDAAkD;IAClD,YAAY;EACd;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,iFAA2E;IAC3E,4BAA4B;IAC5B,sBAAsB;IACtB,wBAAwB;EAC1B;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,6BAA6B;IAC7B,mBAAmB;EACrB;AACF","sourcesContent":["@font-face {\r\n  font-family: 'YanoneKaffesatz-Bold';\r\n  src: url('../fonts/YanoneKaffeesatz-Bold.ttf') format('ttf');\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Light';\r\n  src: url('../fonts/YanoneKaffeesatz-Light.ttf') format('ttf');\r\n  font-weight: 300;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Medium';\r\n  src: url('../fonts/YanoneKaffeesatz-Medium.ttf') format('ttf');\r\n  font-weight: 400;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'YanoneKaffeesatz-Bold', sans-serif;\r\n  background-color: rgba(1, 1, 1, 0.6);\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url('../img/main-background.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #3b5249;\r\n  height: 50px;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33.33%;\r\n  height: 50px;\r\n  font-size: 3.5vw;\r\n  font-family: 'YanoneKaffeesatz-Medium', sans-serif;\r\n  color: white;\r\n}\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  width: 80%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  z-index: 3;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 768px) {\r\n  #content {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .tab-container {\r\n    display: flex;\r\n    position: fixed;\r\n    width: 30%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: #3b5249;\r\n    height: 100vh;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .tab-child {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 3.5vw;\r\n    font-family: 'YanoneKaffeesatz-Medium', sans-serif;\r\n    color: white;\r\n  }\r\n\r\n  .main-container {\r\n    margin-top: auto;\r\n    margin-left: auto;\r\n    width: 70%;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url('../img/main-background.jpg') no-repeat center center fixed;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    flex-flow: column nowrap;\r\n  }\r\n\r\n  .coffee-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/fonts/YanoneKaffeesatz-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/YanoneKaffeesatz-Bold.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d9a77162cd809aa544d5bc935de65af9.ttf");

/***/ }),

/***/ "./src/fonts/YanoneKaffeesatz-Light.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/YanoneKaffeesatz-Light.ttf ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e61d347f2244bce0af8e5f3c013221b0.ttf");

/***/ }),

/***/ "./src/fonts/YanoneKaffeesatz-Medium.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/YanoneKaffeesatz-Medium.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "87ac7ac4cd191d2706745478701589ba.ttf");

/***/ }),

/***/ "./src/img/main-background.jpg":
/*!*************************************!*\
  !*** ./src/img/main-background.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "958c4733b584d48b6fbe0dd6adc83d14.jpg");

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
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");




Object(_modules_domCreation__WEBPACK_IMPORTED_MODULE_0__["createTabs"])();
Object(_modules_domCreation__WEBPACK_IMPORTED_MODULE_0__["createPage"])();
Object(_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"])();


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
/* harmony import */ var _img_main_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/main-background.jpg */ "./src/img/main-background.jpg");
/* harmony import */ var _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedHTMLElements */ "./src/modules/sharedHTMLElements.js");



// import renderAbout from './about';


const headline = document.createElement('h1');
const subheadline = document.createElement('h1');
const imgContainer = document.createElement('div');
const imgTitle = document.createElement('h3');
const img = document.createElement('img');
const info = document.createElement('p');

const createTabs = () => {
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].innerHTML = '';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].style.backgroundImage = _img_main_background_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
  Object(_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["root"]);
};

const createPage = () => {
  // creating elements
  // adding classes to HTML elements
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].classList.add('main-container');
  info.classList.add('main-info');
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].classList.add('main-headline');
  imgContainer.classList.add('main-img-container');
  imgTitle.classList.add('img-title');
  img.classList.add('main-img');

  // adding elements to HTML
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"].style.backgroundImage = _img_main_background_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
  imgTitle.innerHTML = 'Zongolica, Veracruz';

  headline.innerHTML = 'Historia Mexicana del Café';
  subheadline.innerHTML = 'Coffee beans for sale';
  info.innerHTML = 'This coffee tastes like heaven';
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].appendChild(headline);
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"].appendChild(subheadline);
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
  Object(_domCreation__WEBPACK_IMPORTED_MODULE_0__["createPage"])();
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




const coffeeContainer = document.createElement('div');
const COFFEECATALOG = [
  new _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    'https://videohive.img.customer.envatousercontent.com/files/126e43a5-9a07-4955-bc89-66082140a2e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef8c83cdcb37c63be8973250ed222d11',
  ),
  new _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    'https://videohive.img.customer.envatousercontent.com/files/126e43a5-9a07-4955-bc89-66082140a2e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef8c83cdcb37c63be8973250ed222d11',
  ),
  new _classes_CoffeeBean__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavours',
    'https://videohive.img.customer.envatousercontent.com/files/126e43a5-9a07-4955-bc89-66082140a2e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef8c83cdcb37c63be8973250ed222d11',
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
      const headlineElement = document.createElement('h2');
      const imgElement = document.createElement('img');
      const itemContainer = document.createElement('div');
      const subHeadlineElement = document.createElement('h3');
      const infoElement = document.createElement('h4');
      const pElement = document.createElement('p');
      itemContainer.classList.add('coffee-item');
      headlineElement.innerHTML = coffee.region;
      imgElement.src = coffee.img;
      itemContainer.appendChild(headlineElement);
      itemContainer.appendChild(imgElement);
      itemContainer.appendChild(coffeeSectionBuilder(subHeadlineElement, infoElement, 'Process', coffee.process));
      itemContainer.appendChild(coffeeSectionBuilder(subHeadlineElement, infoElement, 'Profile', coffee.profile));
      itemContainer.appendChild(coffeeSectionBuilder(subHeadlineElement, pElement, 'Description', coffee.description));
      coffeeContainer.appendChild(itemContainer);
    });
  }
  return coffeeContainer;
};

const renderProduct = () => {
  _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_0__["mainContainer"].innerHTML = '';
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
/*! exports provided: root, mainContainer, headlineContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainContainer", function() { return mainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headlineContainer", function() { return headlineContainer; });
const root = document.getElementById('content');
const mainContainer = document.createElement('div');
const headlineContainer = document.createElement('div');



/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Db2ZmZWVCZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotTGlnaHQudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9ZYW5vbmVLYWZmZWVzYXR6LU1lZGl1bS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tYWluLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9kb21DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NoYXJlZEhUTUxFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3Mi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IjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vZm9udHMvWWFub25lS2FmZmVlc2F0ei1Cb2xkLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9mb250cy9ZYW5vbmVLYWZmZWVzYXR6LUxpZ2h0LnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9mb250cy9ZYW5vbmVLYWZmZWVzYXR6LU1lZGl1bS50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vaW1nL21haW4tYmFja2dyb3VuZC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVzYXR6LUJvbGQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVzYXR6LUxpZ2h0JztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlc2F0ei1NZWRpdW0nO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlZXNhdHotQm9sZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNik7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1MjQ5O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzMuMzMlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzLjV2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVlc2F0ei1NZWRpdW0nLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW5mbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1wYXJhZ3JhcGgge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWl0ZW0ge1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1MjQ5O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWItY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzLjV2dztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdZYW5vbmVLYWZmZWVzYXR6LU1lZGl1bScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29mZmVlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFtQztFQUNuQywwREFBNEQ7RUFDNUQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBEQUE2RDtFQUM3RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMERBQThEO0VBQzlELGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlEQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtEQUFrRDtFQUNsRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7OztBQUlBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtEQUFrRDtJQUNsRCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUZBQTJFO0lBQzNFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVzYXR6LUJvbGQnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotQm9sZC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlc2F0ei1MaWdodCc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvWWFub25lS2FmZmVlc2F0ei1MaWdodC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlc2F0ei1NZWRpdW0nO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotTWVkaXVtLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlZXNhdHotQm9sZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuNik7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWcvbWFpbi1iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjUyNDk7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi50YWItY2hpbGQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMy4zMyU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDMuNXZ3O1xcclxcbiAgZm9udC1mYW1pbHk6ICdZYW5vbmVLYWZmZWVzYXR6LU1lZGl1bScsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWhlYWRsaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbWcge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbmZvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXBhcmFncmFwaCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtaXRlbSB7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFiLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjUyNDk7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYi1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMuNXZ3O1xcclxcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlZXNhdHotTWVkaXVtJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL21haW4tYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvZmZlZS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQ29mZmVlQmVhbiB7XG4gIGNvbnN0cnVjdG9yKHJlZ2lvbiwgcHJvY2VzcywgcHJvZmlsZSwgZGVzY3JpcHRpb24sIGltZykge1xuICAgIHRoaXMucmVnaW9uID0gcmVnaW9uO1xuICAgIHRoaXMucHJvY2VzcyA9IHByb2Nlc3M7XG4gICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gIH1cblxuICBnZXQgcmVnaW9uKCkgeyByZXR1cm4gdGhpcy5fcmVnaW9uOyB9XG5cbiAgZ2V0IHByb2Nlc3MoKSB7IHJldHVybiB0aGlzLl9wcm9jZXNzOyB9XG5cbiAgZ2V0IHByb2ZpbGUoKSB7IHJldHVybiB0aGlzLl9wcm9maWxlOyB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247IH1cblxuICBnZXQgaW1nKCkgeyByZXR1cm4gdGhpcy5faW1nOyB9XG5cbiAgc2V0IHJlZ2lvbih2YWx1ZSkge1xuICAgIHRoaXMuX3JlZ2lvbiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHByb2Nlc3ModmFsdWUpIHtcbiAgICB0aGlzLl9wcm9jZXNzID0gdmFsdWU7XG4gIH1cblxuICBzZXQgcHJvZmlsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3Byb2ZpbGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBzZXQgaW1nKHZhbHVlKSB7XG4gICAgdGhpcy5faW1nID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29mZmVlQmVhbjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDlhNzcxNjJjZDgwOWFhNTQ0ZDViYzkzNWRlNjVhZjkudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU2MWQzNDdmMjI0NGJjZTBhZjhlNWYzYzAxMzIyMWIwLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4N2FjN2FjNGNkMTkxZDI3MDY3NDU0Nzg3MDE1ODliYS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTU4YzQ3MzNiNTg0ZDQ4YjZmYmUwZGQ2YWRjODNkMTQuanBnXCI7IiwiaW1wb3J0IHsgY3JlYXRlUGFnZSwgY3JlYXRlVGFicyB9IGZyb20gJy4vbW9kdWxlcy9kb21DcmVhdGlvbic7XG5pbXBvcnQgJy4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5cbmNyZWF0ZVRhYnMoKTtcbmNyZWF0ZVBhZ2UoKTtcbmhvbWUoKTtcbiIsIlxuaW1wb3J0IHsgcm9vdCwgbWFpbkNvbnRhaW5lciwgaGVhZGxpbmVDb250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMnO1xuXG5cbmNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IHNoaXBwaW5nUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5cbmNvbnN0IGFkZGluZ0F0dHJpYnV0ZXMgPSAoKSA9PiB7XG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xuICBhYm91dFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYXJhZ3JhcGgnKTtcbiAgc2hpcHBpbmdQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYWdyYXBoJyk7XG4gIHNoaXBwaW5nUGFyYWdyYXBoLmlkID0gJ3NoaXBwaW5nLXBhcmFncmFwaCc7XG59O1xuXG5jb25zdCByZW5kZXJBYm91dCA9ICgpID0+IHtcbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgZXZlbnRMaXN0ZW5lckNyZWF0aW9uKCk7XG4gIGFib3V0UGFyYWdyYXBoLmlubmVySFRNTCA9ICdXZSBhcmUgYSBzcGVjaWFsaXR5IGNvZmZlZSBzaG9wIGZvY3VzZWQgb24gc2VsbGluZyB0aGUgZ3JlYXRlc3QgbWV4aWNhbiBjb2ZmZWUgYmVhbnMuJztcbiAgc2hpcHBpbmdQYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0NoZWNrIG91ciBwcm9kdWN0cyBhbmQgc2hpcHBpbmcgb2ZmZXJzJztcbiAgYWRkaW5nQXR0cmlidXRlcygpO1xuXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcHBpbmdQYXJhZ3JhcGgpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lQ29udGFpbmVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4vLyAgIEkgbmVlZCB0byBhZGQgc29tZSB0ZXh0IGluIGhlcmUuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0OyIsImltcG9ydCB0YWJCdWlsZGVyIGZyb20gJy4vdGFicyc7XG5pbXBvcnQgTWFpbkJhY2tncm91bmQgZnJvbSAnLi4vaW1nL21haW4tYmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IHsgcm9vdCwgbWFpbkNvbnRhaW5lciwgaGVhZGxpbmVDb250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG4vLyBpbXBvcnQgcmVuZGVyQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5cblxuY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3Qgc3ViaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmNvbnN0IGNyZWF0ZVRhYnMgPSAoKSA9PiB7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gTWFpbkJhY2tncm91bmQ7XG4gIHRhYkJ1aWxkZXIocm9vdCk7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAvLyBjcmVhdGluZyBlbGVtZW50c1xuICAvLyBhZGRpbmcgY2xhc3NlcyB0byBIVE1MIGVsZW1lbnRzXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKCdtYWluLWluZm8nKTtcbiAgaGVhZGxpbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkbGluZScpO1xuICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1pbWctY29udGFpbmVyJyk7XG4gIGltZ1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ltZy10aXRsZScpO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWFpbi1pbWcnKTtcblxuICAvLyBhZGRpbmcgZWxlbWVudHMgdG8gSFRNTFxuICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IE1haW5CYWNrZ3JvdW5kO1xuICBpbWdUaXRsZS5pbm5lckhUTUwgPSAnWm9uZ29saWNhLCBWZXJhY3J1eic7XG5cbiAgaGVhZGxpbmUuaW5uZXJIVE1MID0gJ0hpc3RvcmlhIE1leGljYW5hIGRlbCBDYWbDqSc7XG4gIHN1YmhlYWRsaW5lLmlubmVySFRNTCA9ICdDb2ZmZWUgYmVhbnMgZm9yIHNhbGUnO1xuICBpbmZvLmlubmVySFRNTCA9ICdUaGlzIGNvZmZlZSB0YXN0ZXMgbGlrZSBoZWF2ZW4nO1xuICBoZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmhlYWRsaW5lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZUNvbnRhaW5lcik7XG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn07XG5cbi8vIGNvbnN0IHRhYnNFdmVudCA9ICgpID0+IHtcbi8vICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG4vLyAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0Jyk7XG4vLyAgIGNvbnN0IHByb2R1Y3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdCcpO1xuLy8gICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUGFnZSk7XG4vLyAgIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWJvdXQpO1xuLy8gfVxuXG5leHBvcnQge1xuICBjcmVhdGVQYWdlLFxuICBjcmVhdGVUYWJzLFxufTsiLCJcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgcmVuZGVyUHJvZHVjdCBmcm9tICcuL3Byb2R1Y3RzJztcblxuY29uc3QgZXZlbnRMaXN0ZW5lckNyZWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBYm91dCcpO1xuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hvbWUnKTtcbiAgY29uc3QgcHJvZHVjdHNUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdCcpO1xuICBhYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFib3V0LCBmYWxzZSk7XG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lLCBmYWxzZSk7XG4gIHByb2R1Y3RzVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyUHJvZHVjdCwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uOyIsImltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tICcuL2RvbUNyZWF0aW9uJztcbmltcG9ydCB7IG1haW5Db250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMnO1xuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBldmVudExpc3RlbmVyQ3JlYXRpb24oKTtcbiAgY3JlYXRlUGFnZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiIsIlxuaW1wb3J0IHsgcm9vdCwgbWFpbkNvbnRhaW5lciwgaGVhZGxpbmVDb250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG5pbXBvcnQgQ29mZmVlQmVhbnMgZnJvbSAnLi4vY2xhc3Nlcy9Db2ZmZWVCZWFuJztcblxuY29uc3QgY29mZmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBDT0ZGRUVDQVRBTE9HID0gW1xuICBuZXcgQ29mZmVlQmVhbnMoXG4gICAgJ09heGFjYScsXG4gICAgJ1dhc2hlZCcsXG4gICAgJ0Nob2NvbGF0ZSwgTnV0cycsXG4gICAgJ0NvZmZlZSBiZWFuIHdpdGggYSBjbGFzc2ljIHRhc3RlLCBzdHJvbmcgYW5kIG1hcmtlZCBmbGF2b3JzJyxcbiAgICAnaHR0cHM6Ly92aWRlb2hpdmUuaW1nLmN1c3RvbWVyLmVudmF0b3VzZXJjb250ZW50LmNvbS9maWxlcy8xMjZlNDNhNS05YTA3LTQ5NTUtYmM4OS02NjA4MjE0MGEyZTkvaW5saW5lX2ltYWdlX3ByZXZpZXcuanBnP2F1dG89Y29tcHJlc3MlMkNmb3JtYXQmZml0PWNyb3AmY3JvcD10b3AmbWF4LWg9ODAwMCZtYXgtdz01OTAmcz1lZjhjODNjZGNiMzdjNjNiZTg5NzMyNTBlZDIyMmQxMScsXG4gICksXG4gIG5ldyBDb2ZmZWVCZWFucyhcbiAgICAnT2F4YWNhJyxcbiAgICAnV2FzaGVkJyxcbiAgICAnQ2hvY29sYXRlLCBOdXRzJyxcbiAgICAnQ29mZmVlIGJlYW4gd2l0aCBhIGNsYXNzaWMgdGFzdGUsIHN0cm9uZyBhbmQgbWFya2VkIGZsYXZvcnMnLFxuICAgICdodHRwczovL3ZpZGVvaGl2ZS5pbWcuY3VzdG9tZXIuZW52YXRvdXNlcmNvbnRlbnQuY29tL2ZpbGVzLzEyNmU0M2E1LTlhMDctNDk1NS1iYzg5LTY2MDgyMTQwYTJlOS9pbmxpbmVfaW1hZ2VfcHJldmlldy5qcGc/YXV0bz1jb21wcmVzcyUyQ2Zvcm1hdCZmaXQ9Y3JvcCZjcm9wPXRvcCZtYXgtaD04MDAwJm1heC13PTU5MCZzPWVmOGM4M2NkY2IzN2M2M2JlODk3MzI1MGVkMjIyZDExJyxcbiAgKSxcbiAgbmV3IENvZmZlZUJlYW5zKFxuICAgICdPYXhhY2EnLFxuICAgICdXYXNoZWQnLFxuICAgICdDaG9jb2xhdGUsIE51dHMnLFxuICAgICdDb2ZmZWUgYmVhbiB3aXRoIGEgY2xhc3NpYyB0YXN0ZSwgc3Ryb25nIGFuZCBtYXJrZWQgZmxhdm91cnMnLFxuICAgICdodHRwczovL3ZpZGVvaGl2ZS5pbWcuY3VzdG9tZXIuZW52YXRvdXNlcmNvbnRlbnQuY29tL2ZpbGVzLzEyNmU0M2E1LTlhMDctNDk1NS1iYzg5LTY2MDgyMTQwYTJlOS9pbmxpbmVfaW1hZ2VfcHJldmlldy5qcGc/YXV0bz1jb21wcmVzcyUyQ2Zvcm1hdCZmaXQ9Y3JvcCZjcm9wPXRvcCZtYXgtaD04MDAwJm1heC13PTU5MCZzPWVmOGM4M2NkY2IzN2M2M2JlODk3MzI1MGVkMjIyZDExJyxcbiAgKSxcbl07XG5cbmNvbnN0IGNvZmZlZVNlY3Rpb25CdWlsZGVyID0gKHN1YkhlYWRsaW5lLCBpbmZvLCBzdWJDb250ZW50LCBpbmZvQ29udGVudCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1zZWN0aW9uLWNvbnRhaW5lcicpO1xuICBzdWJIZWFkbGluZS5pbm5lckhUTUwgPSBzdWJDb250ZW50O1xuICBpbmZvLmlubmVySFRNTCA9IGluZm9Db250ZW50O1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViSGVhZGxpbmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBpdGVtQnVpbGRlciA9ICgpID0+IHtcbiAgY29mZmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1jb250YWluZXInKTtcbiAgaWYgKGNvZmZlZUNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIENPRkZFRUNBVEFMT0cuZm9yRWFjaChjb2ZmZWUgPT4ge1xuICAgICAgY29uc3QgaGVhZGxpbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHN1YkhlYWRsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWl0ZW0nKTtcbiAgICAgIGhlYWRsaW5lRWxlbWVudC5pbm5lckhUTUwgPSBjb2ZmZWUucmVnaW9uO1xuICAgICAgaW1nRWxlbWVudC5zcmMgPSBjb2ZmZWUuaW1nO1xuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZUVsZW1lbnQpO1xuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlU2VjdGlvbkJ1aWxkZXIoc3ViSGVhZGxpbmVFbGVtZW50LCBpbmZvRWxlbWVudCwgJ1Byb2Nlc3MnLCBjb2ZmZWUucHJvY2VzcykpO1xuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVTZWN0aW9uQnVpbGRlcihzdWJIZWFkbGluZUVsZW1lbnQsIGluZm9FbGVtZW50LCAnUHJvZmlsZScsIGNvZmZlZS5wcm9maWxlKSk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZVNlY3Rpb25CdWlsZGVyKHN1YkhlYWRsaW5lRWxlbWVudCwgcEVsZW1lbnQsICdEZXNjcmlwdGlvbicsIGNvZmZlZS5kZXNjcmlwdGlvbikpO1xuICAgICAgY29mZmVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjb2ZmZWVDb250YWluZXI7XG59O1xuXG5jb25zdCByZW5kZXJQcm9kdWN0ID0gKCkgPT4ge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lQ29udGFpbmVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQnVpbGRlcigpKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclByb2R1Y3Q7IiwiY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBoZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5leHBvcnQge1xuICByb290LFxuICBtYWluQ29udGFpbmVyLFxuICBoZWFkbGluZUNvbnRhaW5lcixcbn07IiwiY29uc3QgdGFiVGV4dCA9IFsnSG9tZScsICdQcm9kdWN0JywgJ0Fib3V0J107XG5cbmNvbnN0IGNoaWxkQ29udGVudCA9IChjaGlsZCwgdGV4dENvbnRlbnQpID0+IHtcbiAgY2hpbGQuaW5uZXJIVE1MID0gdGV4dENvbnRlbnQ7XG4gIGNoaWxkLmlkID0gdGV4dENvbnRlbnQ7XG4gIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3RhYi1jaGlsZCcpO1xufTtcblxuY29uc3QgY2hpbGRNYWtlciA9IChwYXJlbnQsIG51bU9mQ2hpbGRzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZDaGlsZHM7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hpbGRDb250ZW50KGNoaWxkLCB0YWJUZXh0W2ldKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCB0YWJCdWlsZGVyID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250YWluZXInKTtcbiAgY2hpbGRNYWtlcih0YWJDb250YWluZXIsIDMpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhYkJ1aWxkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==