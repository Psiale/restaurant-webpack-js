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
/* harmony import */ var _img_main_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/main-background.jpg */ "./src/img/main-background.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_main_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33%;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  width: 80%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  z-index: 3;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/css/index.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAmD;EACnD,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B","sourcesContent":["body,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url('../img/main-background.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.tab-container {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\n.tab-child {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33%;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.main-headline {\r\n  width: 100%;\r\n  height: min-content;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main-img-container {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.main-info {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.about-container {\r\n  width: 100%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.about-paragraph {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.coffee-container {\r\n  width: 80%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.coffee-item {\r\n  z-index: 3;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ "./src/modules/eventListeners.js");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Db2ZmZWVCZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tYWluLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9kb21DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NoYXJlZEhUTUxFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltZy9tYWluLWJhY2tncm91bmQuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jaGlsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW5mbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1wYXJhZ3JhcGgge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWl0ZW0ge1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5REFBbUQ7RUFDbkQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWcvbWFpbi1iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jaGlsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW5mbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1wYXJhZ3JhcGgge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWl0ZW0ge1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIENvZmZlZUJlYW4ge1xuICBjb25zdHJ1Y3RvcihyZWdpb24sIHByb2Nlc3MsIHByb2ZpbGUsIGRlc2NyaXB0aW9uLCBpbWcpIHtcbiAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgICB0aGlzLnByb2Nlc3MgPSBwcm9jZXNzO1xuICAgIHRoaXMucHJvZmlsZSA9IHByb2ZpbGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1nID0gaW1nO1xuICB9XG5cbiAgZ2V0IHJlZ2lvbigpIHsgcmV0dXJuIHRoaXMuX3JlZ2lvbjsgfVxuXG4gIGdldCBwcm9jZXNzKCkgeyByZXR1cm4gdGhpcy5fcHJvY2VzczsgfVxuXG4gIGdldCBwcm9maWxlKCkgeyByZXR1cm4gdGhpcy5fcHJvZmlsZTsgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHsgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uOyB9XG5cbiAgZ2V0IGltZygpIHsgcmV0dXJuIHRoaXMuX2ltZzsgfVxuXG4gIHNldCByZWdpb24odmFsdWUpIHtcbiAgICB0aGlzLl9yZWdpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBwcm9jZXNzKHZhbHVlKSB7XG4gICAgdGhpcy5fcHJvY2VzcyA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHByb2ZpbGUodmFsdWUpIHtcbiAgICB0aGlzLl9wcm9maWxlID0gdmFsdWU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGltZyh2YWx1ZSkge1xuICAgIHRoaXMuX2ltZyA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZmZlZUJlYW47IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEwOTg0Y2E0MzliOTRjMmRkOTQxZWVhMzRmODFjMjMyLmpwZ1wiOyIsImltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tICcuL21vZHVsZXMvZG9tQ3JlYXRpb24nO1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xuXG5cbmNyZWF0ZVBhZ2UoKTtcbmhvbWUoKTtcbiIsIlxuaW1wb3J0IHsgcm9vdCwgbWFpbkNvbnRhaW5lciwgaGVhZGxpbmVDb250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMnO1xuXG5cbmNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IHNoaXBwaW5nUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5cbmNvbnN0IGFkZGluZ0F0dHJpYnV0ZXMgPSAoKSA9PiB7XG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xuICBhYm91dFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYXJhZ3JhcGgnKTtcbiAgc2hpcHBpbmdQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYWdyYXBoJyk7XG4gIHNoaXBwaW5nUGFyYWdyYXBoLmlkID0gJ3NoaXBwaW5nLXBhcmFncmFwaCc7XG59O1xuXG5jb25zdCByZW5kZXJBYm91dCA9ICgpID0+IHtcbiAgZXZlbnRMaXN0ZW5lckNyZWF0aW9uKCk7XG4gIGFib3V0UGFyYWdyYXBoLmlubmVySFRNTCA9ICdXZSBhcmUgYSBzcGVjaWFsaXR5IGNvZmZlZSBzaG9wIGZvY3VzZWQgb24gc2VsbGluZyB0aGUgZ3JlYXRlc3QgbWV4aWNhbiBjb2ZmZWUgYmVhbnMuJztcbiAgc2hpcHBpbmdQYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0NoZWNrIG91ciBwcm9kdWN0cyBhbmQgc2hpcHBpbmcgb2ZmZXJzJztcbiAgYWRkaW5nQXR0cmlidXRlcygpO1xuXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcHBpbmdQYXJhZ3JhcGgpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lQ29udGFpbmVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4vLyAgIEkgbmVlZCB0byBhZGQgc29tZSB0ZXh0IGluIGhlcmUuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0OyIsImltcG9ydCB0YWJCdWlsZGVyIGZyb20gJy4vdGFicyc7XG5pbXBvcnQgTWFpbkJhY2tncm91bmQgZnJvbSAnLi4vaW1nL21haW4tYmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IHsgcm9vdCwgbWFpbkNvbnRhaW5lciwgaGVhZGxpbmVDb250YWluZXIgfSBmcm9tICcuL3NoYXJlZEhUTUxFbGVtZW50cyc7XG4vLyBpbXBvcnQgcmVuZGVyQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5cblxuY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3Qgc3ViaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmNvbnN0IGNyZWF0ZVRhYnMgPSAoKSA9PiB7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gTWFpbkJhY2tncm91bmQ7XG4gIHRhYkJ1aWxkZXIobWFpbkNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAvLyBjcmVhdGluZyBlbGVtZW50c1xuICAvLyBhZGRpbmcgY2xhc3NlcyB0byBIVE1MIGVsZW1lbnRzXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKCdtYWluLWluZm8nKTtcbiAgaGVhZGxpbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkbGluZScpO1xuICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1pbWctY29udGFpbmVyJyk7XG4gIGltZ1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ltZy10aXRsZScpO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWFpbi1pbWcnKTtcblxuICAvLyBhZGRpbmcgZWxlbWVudHMgdG8gSFRNTFxuICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IE1haW5CYWNrZ3JvdW5kO1xuICBpbWdUaXRsZS5pbm5lckhUTUwgPSAnWm9uZ29saWNhLCBWZXJhY3J1eic7XG5cbiAgaGVhZGxpbmUuaW5uZXJIVE1MID0gJ0hpc3RvcmlhIE1leGljYW5hIGRlbCBDYWbDqSc7XG4gIHN1YmhlYWRsaW5lLmlubmVySFRNTCA9ICdDb2ZmZWUgYmVhbnMgZm9yIHNhbGUnO1xuICBpbmZvLmlubmVySFRNTCA9ICdUaGlzIGNvZmZlZSB0YXN0ZXMgbGlrZSBoZWF2ZW4nO1xuICBoZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmhlYWRsaW5lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZUNvbnRhaW5lcik7XG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn07XG5cbi8vIGNvbnN0IHRhYnNFdmVudCA9ICgpID0+IHtcbi8vICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG4vLyAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0Jyk7XG4vLyAgIGNvbnN0IHByb2R1Y3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdCcpO1xuLy8gICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUGFnZSk7XG4vLyAgIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWJvdXQpO1xuLy8gfVxuXG5leHBvcnQge1xuICBjcmVhdGVQYWdlLFxuICBtYWluQ29udGFpbmVyLFxuICBoZWFkbGluZUNvbnRhaW5lcixcbiAgcm9vdCxcbiAgY3JlYXRlVGFicyxcbn07IiwiaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gJy4vZG9tQ3JlYXRpb24nO1xuaW1wb3J0IHJlbmRlckFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCByZW5kZXJQcm9kdWN0IGZyb20gJy4vcHJvZHVjdHMnO1xuXG5jb25zdCBldmVudExpc3RlbmVyQ3JlYXRpb24gPSAoKSA9PiB7XG4gIGNyZWF0ZVRhYnMoKTtcbiAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWJvdXQnKTtcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG4gIGNvbnN0IHByb2R1Y3RzVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Byb2R1Y3QnKTtcbiAgYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJBYm91dCwgZmFsc2UpO1xuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZSwgZmFsc2UpO1xuICBwcm9kdWN0c1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclByb2R1Y3QsIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXJDcmVhdGlvbjsiLCJpbXBvcnQgeyBjcmVhdGVQYWdlIH0gZnJvbSAnLi9kb21DcmVhdGlvbic7XG5pbXBvcnQgeyBtYWluQ29udGFpbmVyIH0gZnJvbSAnLi9zaGFyZWRIVE1MRWxlbWVudHMnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJDcmVhdGlvbiBmcm9tICcuL2V2ZW50TGlzdGVuZXJzJztcblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgZXZlbnRMaXN0ZW5lckNyZWF0aW9uKCk7XG4gIGNyZWF0ZVBhZ2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iLCJcbmltcG9ydCB7IHJvb3QsIG1haW5Db250YWluZXIsIGhlYWRsaW5lQ29udGFpbmVyIH0gZnJvbSAnLi9zaGFyZWRIVE1MRWxlbWVudHMnO1xuaW1wb3J0IENvZmZlZUJlYW5zIGZyb20gJy4uL2NsYXNzZXMvQ29mZmVlQmVhbic7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lckNyZWF0aW9uIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMnO1xuXG5jb25zdCBjb2ZmZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IENPRkZFRUNBVEFMT0cgPSBbXG4gIG5ldyBDb2ZmZWVCZWFucyhcbiAgICAnT2F4YWNhJyxcbiAgICAnV2FzaGVkJyxcbiAgICAnQ2hvY29sYXRlLCBOdXRzJyxcbiAgICAnQ29mZmVlIGJlYW4gd2l0aCBhIGNsYXNzaWMgdGFzdGUsIHN0cm9uZyBhbmQgbWFya2VkIGZsYXZvcnMnLFxuICAgICdodHRwczovL3ZpZGVvaGl2ZS5pbWcuY3VzdG9tZXIuZW52YXRvdXNlcmNvbnRlbnQuY29tL2ZpbGVzLzEyNmU0M2E1LTlhMDctNDk1NS1iYzg5LTY2MDgyMTQwYTJlOS9pbmxpbmVfaW1hZ2VfcHJldmlldy5qcGc/YXV0bz1jb21wcmVzcyUyQ2Zvcm1hdCZmaXQ9Y3JvcCZjcm9wPXRvcCZtYXgtaD04MDAwJm1heC13PTU5MCZzPWVmOGM4M2NkY2IzN2M2M2JlODk3MzI1MGVkMjIyZDExJyxcbiAgKSxcbiAgbmV3IENvZmZlZUJlYW5zKFxuICAgICdPYXhhY2EnLFxuICAgICdXYXNoZWQnLFxuICAgICdDaG9jb2xhdGUsIE51dHMnLFxuICAgICdDb2ZmZWUgYmVhbiB3aXRoIGEgY2xhc3NpYyB0YXN0ZSwgc3Ryb25nIGFuZCBtYXJrZWQgZmxhdm9ycycsXG4gICAgJ2h0dHBzOi8vdmlkZW9oaXZlLmltZy5jdXN0b21lci5lbnZhdG91c2VyY29udGVudC5jb20vZmlsZXMvMTI2ZTQzYTUtOWEwNy00OTU1LWJjODktNjYwODIxNDBhMmU5L2lubGluZV9pbWFnZV9wcmV2aWV3LmpwZz9hdXRvPWNvbXByZXNzJTJDZm9ybWF0JmZpdD1jcm9wJmNyb3A9dG9wJm1heC1oPTgwMDAmbWF4LXc9NTkwJnM9ZWY4YzgzY2RjYjM3YzYzYmU4OTczMjUwZWQyMjJkMTEnLFxuICApLFxuICBuZXcgQ29mZmVlQmVhbnMoXG4gICAgJ09heGFjYScsXG4gICAgJ1dhc2hlZCcsXG4gICAgJ0Nob2NvbGF0ZSwgTnV0cycsXG4gICAgJ0NvZmZlZSBiZWFuIHdpdGggYSBjbGFzc2ljIHRhc3RlLCBzdHJvbmcgYW5kIG1hcmtlZCBmbGF2b3VycycsXG4gICAgJ2h0dHBzOi8vdmlkZW9oaXZlLmltZy5jdXN0b21lci5lbnZhdG91c2VyY29udGVudC5jb20vZmlsZXMvMTI2ZTQzYTUtOWEwNy00OTU1LWJjODktNjYwODIxNDBhMmU5L2lubGluZV9pbWFnZV9wcmV2aWV3LmpwZz9hdXRvPWNvbXByZXNzJTJDZm9ybWF0JmZpdD1jcm9wJmNyb3A9dG9wJm1heC1oPTgwMDAmbWF4LXc9NTkwJnM9ZWY4YzgzY2RjYjM3YzYzYmU4OTczMjUwZWQyMjJkMTEnLFxuICApLFxuXTtcblxuY29uc3QgY29mZmVlU2VjdGlvbkJ1aWxkZXIgPSAoc3ViSGVhZGxpbmUsIGluZm8sIHN1YkNvbnRlbnQsIGluZm9Db250ZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLXNlY3Rpb24tY29udGFpbmVyJyk7XG4gIHN1YkhlYWRsaW5lLmlubmVySFRNTCA9IHN1YkNvbnRlbnQ7XG4gIGluZm8uaW5uZXJIVE1MID0gaW5mb0NvbnRlbnQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJIZWFkbGluZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGl0ZW1CdWlsZGVyID0gKCkgPT4ge1xuICBjb2ZmZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWNvbnRhaW5lcicpO1xuICBpZiAoY29mZmVlQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgQ09GRkVFQ0FUQUxPRy5mb3JFYWNoKGNvZmZlZSA9PiB7XG4gICAgICBjb25zdCBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3Qgc3ViSGVhZGxpbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaXRlbScpO1xuICAgICAgaGVhZGxpbmVFbGVtZW50LmlubmVySFRNTCA9IGNvZmZlZS5yZWdpb247XG4gICAgICBpbWdFbGVtZW50LnNyYyA9IGNvZmZlZS5pbWc7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lRWxlbWVudCk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVTZWN0aW9uQnVpbGRlcihzdWJIZWFkbGluZUVsZW1lbnQsIGluZm9FbGVtZW50LCAnUHJvY2VzcycsIGNvZmZlZS5wcm9jZXNzKSk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZVNlY3Rpb25CdWlsZGVyKHN1YkhlYWRsaW5lRWxlbWVudCwgaW5mb0VsZW1lbnQsICdQcm9maWxlJywgY29mZmVlLnByb2ZpbGUpKTtcbiAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlU2VjdGlvbkJ1aWxkZXIoc3ViSGVhZGxpbmVFbGVtZW50LCBwRWxlbWVudCwgJ0Rlc2NyaXB0aW9uJywgY29mZmVlLmRlc2NyaXB0aW9uKSk7XG4gICAgICBjb2ZmZWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvZmZlZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IHJlbmRlclByb2R1Y3QgPSAoKSA9PiB7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVDb250YWluZXIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1CdWlsZGVyKCkpO1xuICByb290LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvZHVjdDsiLCJjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhlYWRsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmV4cG9ydCB7XG4gIHJvb3QsXG4gIG1haW5Db250YWluZXIsXG4gIGhlYWRsaW5lQ29udGFpbmVyLFxufTsiLCJjb25zdCB0YWJUZXh0ID0gWydIb21lJywgJ1Byb2R1Y3QnLCAnQWJvdXQnXTtcbmNvbnN0IGNoaWxkQ29udGVudCA9IChjaGlsZCwgdGV4dENvbnRlbnQpID0+IHtcbiAgY2hpbGQuaW5uZXJIVE1MID0gdGV4dENvbnRlbnQ7XG4gIGNoaWxkLmlkID0gdGV4dENvbnRlbnQ7XG4gIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3RhYi1jaGlsZCcpO1xufTtcblxuY29uc3QgY2hpbGRNYWtlciA9IChwYXJlbnQsIG51bU9mQ2hpbGRzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZDaGlsZHM7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hpbGRDb250ZW50KGNoaWxkLCB0YWJUZXh0W2ldKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCB0YWJCdWlsZGVyID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250YWluZXInKTtcbiAgY2hpbGRNYWtlcih0YWJDb250YWluZXIsIDMpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhYkJ1aWxkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==