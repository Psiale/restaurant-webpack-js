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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\r\n  font-family: 'YanoneKaffesatz-Bold';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Light';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\r\n  font-weight: 300;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Medium';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('ttf');\r\n  font-weight: 400;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'YanoneKaffeesatz-Bold', sans-serif;\r\n  font-size: 6vw;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: row nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 33%;\r\n  background-color: #519872;\r\n  height: 100vh;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 3.5vw;\r\n  font-family: 'YanoneKaffeesatz-Medium', sans-serif;\r\n  color: white;\r\n}\r\n\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  width: 80%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  z-index: 3;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/css/index.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,0DAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,0DAA6D;EAC7D,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,0DAA8D;EAC9D,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gDAAgD;EAChD,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAmD;EACnD,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kDAAkD;EAClD,YAAY;AACd;;;AAGA;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B","sourcesContent":["@font-face {\r\n  font-family: 'YanoneKaffesatz-Bold';\r\n  src: url('../fonts/YanoneKaffeesatz-Bold.ttf') format('ttf');\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Light';\r\n  src: url('../fonts/YanoneKaffeesatz-Light.ttf') format('ttf');\r\n  font-weight: 300;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'YanoneKaffesatz-Medium';\r\n  src: url('../fonts/YanoneKaffeesatz-Medium.ttf') format('ttf');\r\n  font-weight: 400;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'YanoneKaffeesatz-Bold', sans-serif;\r\n  font-size: 6vw;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url('../img/main-background.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: row nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 33%;\r\n  background-color: #519872;\r\n  height: 100vh;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 3.5vw;\r\n  font-family: 'YanoneKaffeesatz-Medium', sans-serif;\r\n  color: white;\r\n}\r\n\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  width: 80%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  z-index: 3;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "10984ca439b94c2dd941eea34f81c232.jpg");

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
/*! exports provided: createPage, mainContainer, headlineContainer, root, createTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTabs", function() { return createTabs; });
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/modules/tabs.js");
/* harmony import */ var _img_main_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/main-background.jpg */ "./src/img/main-background.jpg");
/* harmony import */ var _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedHTMLElements */ "./src/modules/sharedHTMLElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainContainer", function() { return _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headlineContainer", function() { return _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["headlineContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["root"]; });




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
  Object(_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(_sharedHTMLElements__WEBPACK_IMPORTED_MODULE_2__["mainContainer"]);
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
/* harmony import */ var _domCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreation */ "./src/modules/domCreation.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products */ "./src/modules/products.js");





const eventListenerCreation = () => {
  Object(_domCreation__WEBPACK_IMPORTED_MODULE_0__["createTabs"])();
  const aboutTab = document.getElementById('About');
  const homeTab = document.getElementById('Home');
  const productsTab = document.getElementById('Product');
  aboutTab.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_1__["default"], false);
  homeTab.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__["default"], false);
  productsTab.addEventListener('click', _products__WEBPACK_IMPORTED_MODULE_3__["default"], false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Db2ZmZWVCZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotTGlnaHQudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9ZYW5vbmVLYWZmZWVzYXR6LU1lZGl1bS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tYWluLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9kb21DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NoYXJlZEhUTUxFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3Mi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IiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ZvbnRzL1lhbm9uZUthZmZlZXNhdHotQm9sZC50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vZm9udHMvWWFub25lS2FmZmVlc2F0ei1MaWdodC50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vZm9udHMvWWFub25lS2FmZmVlc2F0ei1NZWRpdW0udHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL2ltZy9tYWluLWJhY2tncm91bmQuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlc2F0ei1Cb2xkJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlc2F0ei1MaWdodCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdZYW5vbmVLYWZmZXNhdHotTWVkaXVtJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdZYW5vbmVLYWZmZWVzYXR6LUJvbGQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2dnc7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTk4NzI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMy41dnc7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlZXNhdHotTWVkaXVtJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1haW4taGVhZGxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFyYWdyYXBoIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1pdGVtIHtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFtQztFQUNuQywwREFBNEQ7RUFDNUQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBEQUE2RDtFQUM3RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMERBQThEO0VBQzlELGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5REFBbUQ7RUFDbkQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrREFBa0Q7RUFDbEQsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdZYW5vbmVLYWZmZXNhdHotQm9sZCc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvWWFub25lS2FmZmVlc2F0ei1Cb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVzYXR6LUxpZ2h0JztcXHJcXG4gIHNyYzogdXJsKCcuLi9mb250cy9ZYW5vbmVLYWZmZWVzYXR6LUxpZ2h0LnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVzYXR6LU1lZGl1bSc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvWWFub25lS2FmZmVlc2F0ei1NZWRpdW0udHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lS2FmZmVlc2F0ei1Cb2xkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL21haW4tYmFja2dyb3VuZC5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTk4NzI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMy41dnc7XFxyXFxuICBmb250LWZhbWlseTogJ1lhbm9uZUthZmZlZXNhdHotTWVkaXVtJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1haW4taGVhZGxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFyYWdyYXBoIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1pdGVtIHtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBDb2ZmZWVCZWFuIHtcbiAgY29uc3RydWN0b3IocmVnaW9uLCBwcm9jZXNzLCBwcm9maWxlLCBkZXNjcmlwdGlvbiwgaW1nKSB7XG4gICAgdGhpcy5yZWdpb24gPSByZWdpb247XG4gICAgdGhpcy5wcm9jZXNzID0gcHJvY2VzcztcbiAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgfVxuXG4gIGdldCByZWdpb24oKSB7IHJldHVybiB0aGlzLl9yZWdpb247IH1cblxuICBnZXQgcHJvY2VzcygpIHsgcmV0dXJuIHRoaXMuX3Byb2Nlc3M7IH1cblxuICBnZXQgcHJvZmlsZSgpIHsgcmV0dXJuIHRoaXMuX3Byb2ZpbGU7IH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjsgfVxuXG4gIGdldCBpbWcoKSB7IHJldHVybiB0aGlzLl9pbWc7IH1cblxuICBzZXQgcmVnaW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fcmVnaW9uID0gdmFsdWU7XG4gIH1cblxuICBzZXQgcHJvY2Vzcyh2YWx1ZSkge1xuICAgIHRoaXMuX3Byb2Nlc3MgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBwcm9maWxlKHZhbHVlKSB7XG4gICAgdGhpcy5fcHJvZmlsZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBpbWcodmFsdWUpIHtcbiAgICB0aGlzLl9pbWcgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2ZmZWVCZWFuOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOWE3NzE2MmNkODA5YWE1NDRkNWJjOTM1ZGU2NWFmOS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTYxZDM0N2YyMjQ0YmNlMGFmOGU1ZjNjMDEzMjIxYjAudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg3YWM3YWM0Y2QxOTFkMjcwNjc0NTQ3ODcwMTU4OWJhLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMDk4NGNhNDM5Yjk0YzJkZDk0MWVlYTM0ZjgxYzIzMi5qcGdcIjsiLCJpbXBvcnQgeyBjcmVhdGVQYWdlIH0gZnJvbSAnLi9tb2R1bGVzL2RvbUNyZWF0aW9uJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vbW9kdWxlcy9ob21lJztcblxuXG5jcmVhdGVQYWdlKCk7XG5ob21lKCk7XG4iLCJcbmltcG9ydCB7IHJvb3QsIG1haW5Db250YWluZXIsIGhlYWRsaW5lQ29udGFpbmVyIH0gZnJvbSAnLi9zaGFyZWRIVE1MRWxlbWVudHMnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJDcmVhdGlvbiBmcm9tICcuL2V2ZW50TGlzdGVuZXJzJztcblxuXG5jb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBzaGlwcGluZ1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXG5jb25zdCBhZGRpbmdBdHRyaWJ1dGVzID0gKCkgPT4ge1xuICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcbiAgYWJvdXRQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYWdyYXBoJyk7XG4gIHNoaXBwaW5nUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhcmFncmFwaCcpO1xuICBzaGlwcGluZ1BhcmFncmFwaC5pZCA9ICdzaGlwcGluZy1wYXJhZ3JhcGgnO1xufTtcblxuY29uc3QgcmVuZGVyQWJvdXQgPSAoKSA9PiB7XG4gIGV2ZW50TGlzdGVuZXJDcmVhdGlvbigpO1xuICBhYm91dFBhcmFncmFwaC5pbm5lckhUTUwgPSAnV2UgYXJlIGEgc3BlY2lhbGl0eSBjb2ZmZWUgc2hvcCBmb2N1c2VkIG9uIHNlbGxpbmcgdGhlIGdyZWF0ZXN0IG1leGljYW4gY29mZmVlIGJlYW5zLic7XG4gIHNoaXBwaW5nUGFyYWdyYXBoLmlubmVySFRNTCA9ICdDaGVjayBvdXIgcHJvZHVjdHMgYW5kIHNoaXBwaW5nIG9mZmVycyc7XG4gIGFkZGluZ0F0dHJpYnV0ZXMoKTtcblxuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhcmFncmFwaCk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBwaW5nUGFyYWdyYXBoKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZUNvbnRhaW5lcik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICByb290LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuLy8gICBJIG5lZWQgdG8gYWRkIHNvbWUgdGV4dCBpbiBoZXJlLlxufTtcblxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBYm91dDsiLCJpbXBvcnQgdGFiQnVpbGRlciBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IE1haW5CYWNrZ3JvdW5kIGZyb20gJy4uL2ltZy9tYWluLWJhY2tncm91bmQuanBnJztcbmltcG9ydCB7IHJvb3QsIG1haW5Db250YWluZXIsIGhlYWRsaW5lQ29udGFpbmVyIH0gZnJvbSAnLi9zaGFyZWRIVE1MRWxlbWVudHMnO1xuLy8gaW1wb3J0IHJlbmRlckFib3V0IGZyb20gJy4vYWJvdXQnO1xuXG5cbmNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IHN1YmhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaW1nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5jb25zdCBjcmVhdGVUYWJzID0gKCkgPT4ge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IE1haW5CYWNrZ3JvdW5kO1xuICB0YWJCdWlsZGVyKG1haW5Db250YWluZXIpO1xufTtcblxuY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcbiAgLy8gY3JlYXRpbmcgZWxlbWVudHNcbiAgLy8gYWRkaW5nIGNsYXNzZXMgdG8gSFRNTCBlbGVtZW50c1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gIGluZm8uY2xhc3NMaXN0LmFkZCgnbWFpbi1pbmZvJyk7XG4gIGhlYWRsaW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGxpbmUnKTtcbiAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4taW1nLWNvbnRhaW5lcicpO1xuICBpbWdUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbWctdGl0bGUnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ21haW4taW1nJyk7XG5cbiAgLy8gYWRkaW5nIGVsZW1lbnRzIHRvIEhUTUxcbiAgbWFpbkNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBNYWluQmFja2dyb3VuZDtcbiAgaW1nVGl0bGUuaW5uZXJIVE1MID0gJ1pvbmdvbGljYSwgVmVyYWNydXonO1xuXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9ICdIaXN0b3JpYSBNZXhpY2FuYSBkZWwgQ2Fmw6knO1xuICBzdWJoZWFkbGluZS5pbm5lckhUTUwgPSAnQ29mZmVlIGJlYW5zIGZvciBzYWxlJztcbiAgaW5mby5pbm5lckhUTUwgPSAnVGhpcyBjb2ZmZWUgdGFzdGVzIGxpa2UgaGVhdmVuJztcbiAgaGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBoZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJoZWFkbGluZSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVDb250YWluZXIpO1xuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG59O1xuXG4vLyBjb25zdCB0YWJzRXZlbnQgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSG9tZScpO1xuLy8gICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBYm91dCcpO1xuLy8gICBjb25zdCBwcm9kdWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Byb2R1Y3QnKTtcbi8vICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVBhZ2UpO1xuLy8gICBhYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFib3V0KTtcbi8vIH1cblxuZXhwb3J0IHtcbiAgY3JlYXRlUGFnZSxcbiAgbWFpbkNvbnRhaW5lcixcbiAgaGVhZGxpbmVDb250YWluZXIsXG4gIHJvb3QsXG4gIGNyZWF0ZVRhYnMsXG59OyIsImltcG9ydCB7IGNyZWF0ZVRhYnMgfSBmcm9tICcuL2RvbUNyZWF0aW9uJztcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgcmVuZGVyUHJvZHVjdCBmcm9tICcuL3Byb2R1Y3RzJztcblxuY29uc3QgZXZlbnRMaXN0ZW5lckNyZWF0aW9uID0gKCkgPT4ge1xuICBjcmVhdGVUYWJzKCk7XG4gIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0Jyk7XG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSG9tZScpO1xuICBjb25zdCBwcm9kdWN0c1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9kdWN0Jyk7XG4gIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWJvdXQsIGZhbHNlKTtcbiAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUsIGZhbHNlKTtcbiAgcHJvZHVjdHNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJQcm9kdWN0LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVyQ3JlYXRpb247IiwiaW1wb3J0IHsgY3JlYXRlUGFnZSB9IGZyb20gJy4vZG9tQ3JlYXRpb24nO1xuaW1wb3J0IHsgbWFpbkNvbnRhaW5lciB9IGZyb20gJy4vc2hhcmVkSFRNTEVsZW1lbnRzJztcbmltcG9ydCBldmVudExpc3RlbmVyQ3JlYXRpb24gZnJvbSAnLi9ldmVudExpc3RlbmVycyc7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGV2ZW50TGlzdGVuZXJDcmVhdGlvbigpO1xuICBjcmVhdGVQYWdlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiXG5pbXBvcnQgeyByb290LCBtYWluQ29udGFpbmVyLCBoZWFkbGluZUNvbnRhaW5lciB9IGZyb20gJy4vc2hhcmVkSFRNTEVsZW1lbnRzJztcbmltcG9ydCBDb2ZmZWVCZWFucyBmcm9tICcuLi9jbGFzc2VzL0NvZmZlZUJlYW4nO1xuXG5jb25zdCBjb2ZmZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IENPRkZFRUNBVEFMT0cgPSBbXG4gIG5ldyBDb2ZmZWVCZWFucyhcbiAgICAnT2F4YWNhJyxcbiAgICAnV2FzaGVkJyxcbiAgICAnQ2hvY29sYXRlLCBOdXRzJyxcbiAgICAnQ29mZmVlIGJlYW4gd2l0aCBhIGNsYXNzaWMgdGFzdGUsIHN0cm9uZyBhbmQgbWFya2VkIGZsYXZvcnMnLFxuICAgICdodHRwczovL3ZpZGVvaGl2ZS5pbWcuY3VzdG9tZXIuZW52YXRvdXNlcmNvbnRlbnQuY29tL2ZpbGVzLzEyNmU0M2E1LTlhMDctNDk1NS1iYzg5LTY2MDgyMTQwYTJlOS9pbmxpbmVfaW1hZ2VfcHJldmlldy5qcGc/YXV0bz1jb21wcmVzcyUyQ2Zvcm1hdCZmaXQ9Y3JvcCZjcm9wPXRvcCZtYXgtaD04MDAwJm1heC13PTU5MCZzPWVmOGM4M2NkY2IzN2M2M2JlODk3MzI1MGVkMjIyZDExJyxcbiAgKSxcbiAgbmV3IENvZmZlZUJlYW5zKFxuICAgICdPYXhhY2EnLFxuICAgICdXYXNoZWQnLFxuICAgICdDaG9jb2xhdGUsIE51dHMnLFxuICAgICdDb2ZmZWUgYmVhbiB3aXRoIGEgY2xhc3NpYyB0YXN0ZSwgc3Ryb25nIGFuZCBtYXJrZWQgZmxhdm9ycycsXG4gICAgJ2h0dHBzOi8vdmlkZW9oaXZlLmltZy5jdXN0b21lci5lbnZhdG91c2VyY29udGVudC5jb20vZmlsZXMvMTI2ZTQzYTUtOWEwNy00OTU1LWJjODktNjYwODIxNDBhMmU5L2lubGluZV9pbWFnZV9wcmV2aWV3LmpwZz9hdXRvPWNvbXByZXNzJTJDZm9ybWF0JmZpdD1jcm9wJmNyb3A9dG9wJm1heC1oPTgwMDAmbWF4LXc9NTkwJnM9ZWY4YzgzY2RjYjM3YzYzYmU4OTczMjUwZWQyMjJkMTEnLFxuICApLFxuICBuZXcgQ29mZmVlQmVhbnMoXG4gICAgJ09heGFjYScsXG4gICAgJ1dhc2hlZCcsXG4gICAgJ0Nob2NvbGF0ZSwgTnV0cycsXG4gICAgJ0NvZmZlZSBiZWFuIHdpdGggYSBjbGFzc2ljIHRhc3RlLCBzdHJvbmcgYW5kIG1hcmtlZCBmbGF2b3VycycsXG4gICAgJ2h0dHBzOi8vdmlkZW9oaXZlLmltZy5jdXN0b21lci5lbnZhdG91c2VyY29udGVudC5jb20vZmlsZXMvMTI2ZTQzYTUtOWEwNy00OTU1LWJjODktNjYwODIxNDBhMmU5L2lubGluZV9pbWFnZV9wcmV2aWV3LmpwZz9hdXRvPWNvbXByZXNzJTJDZm9ybWF0JmZpdD1jcm9wJmNyb3A9dG9wJm1heC1oPTgwMDAmbWF4LXc9NTkwJnM9ZWY4YzgzY2RjYjM3YzYzYmU4OTczMjUwZWQyMjJkMTEnLFxuICApLFxuXTtcblxuY29uc3QgY29mZmVlU2VjdGlvbkJ1aWxkZXIgPSAoc3ViSGVhZGxpbmUsIGluZm8sIHN1YkNvbnRlbnQsIGluZm9Db250ZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLXNlY3Rpb24tY29udGFpbmVyJyk7XG4gIHN1YkhlYWRsaW5lLmlubmVySFRNTCA9IHN1YkNvbnRlbnQ7XG4gIGluZm8uaW5uZXJIVE1MID0gaW5mb0NvbnRlbnQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJIZWFkbGluZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGl0ZW1CdWlsZGVyID0gKCkgPT4ge1xuICBjb2ZmZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWNvbnRhaW5lcicpO1xuICBpZiAoY29mZmVlQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgQ09GRkVFQ0FUQUxPRy5mb3JFYWNoKGNvZmZlZSA9PiB7XG4gICAgICBjb25zdCBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3Qgc3ViSGVhZGxpbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaXRlbScpO1xuICAgICAgaGVhZGxpbmVFbGVtZW50LmlubmVySFRNTCA9IGNvZmZlZS5yZWdpb247XG4gICAgICBpbWdFbGVtZW50LnNyYyA9IGNvZmZlZS5pbWc7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lRWxlbWVudCk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVTZWN0aW9uQnVpbGRlcihzdWJIZWFkbGluZUVsZW1lbnQsIGluZm9FbGVtZW50LCAnUHJvY2VzcycsIGNvZmZlZS5wcm9jZXNzKSk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZVNlY3Rpb25CdWlsZGVyKHN1YkhlYWRsaW5lRWxlbWVudCwgaW5mb0VsZW1lbnQsICdQcm9maWxlJywgY29mZmVlLnByb2ZpbGUpKTtcbiAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlU2VjdGlvbkJ1aWxkZXIoc3ViSGVhZGxpbmVFbGVtZW50LCBwRWxlbWVudCwgJ0Rlc2NyaXB0aW9uJywgY29mZmVlLmRlc2NyaXB0aW9uKSk7XG4gICAgICBjb2ZmZWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvZmZlZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IHJlbmRlclByb2R1Y3QgPSAoKSA9PiB7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVDb250YWluZXIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1CdWlsZGVyKCkpO1xuICByb290LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvZHVjdDsiLCJjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhlYWRsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmV4cG9ydCB7XG4gIHJvb3QsXG4gIG1haW5Db250YWluZXIsXG4gIGhlYWRsaW5lQ29udGFpbmVyLFxufTsiLCJjb25zdCB0YWJUZXh0ID0gWydIb21lJywgJ1Byb2R1Y3QnLCAnQWJvdXQnXTtcblxuY29uc3QgY2hpbGRDb250ZW50ID0gKGNoaWxkLCB0ZXh0Q29udGVudCkgPT4ge1xuICBjaGlsZC5pbm5lckhUTUwgPSB0ZXh0Q29udGVudDtcbiAgY2hpbGQuaWQgPSB0ZXh0Q29udGVudDtcbiAgY2hpbGQuY2xhc3NMaXN0LmFkZCgndGFiLWNoaWxkJyk7XG59O1xuXG5jb25zdCBjaGlsZE1ha2VyID0gKHBhcmVudCwgbnVtT2ZDaGlsZHMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZkNoaWxkczsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGlsZENvbnRlbnQoY2hpbGQsIHRhYlRleHRbaV0pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHRhYkJ1aWxkZXIgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpO1xuICBjaGlsZE1ha2VyKHRhYkNvbnRhaW5lciwgMyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFiQnVpbGRlcjsiXSwic291cmNlUm9vdCI6IiJ9