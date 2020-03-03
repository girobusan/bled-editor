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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bled/testing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/create-emotion/dist/create-emotion.browser.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/create-emotion/dist/create-emotion.browser.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");




function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if ( true && this.ctr !== 0) {
      throw new Error('speedy must be changed before any rules are inserted');
    }

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered, undefined);
    Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: _emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"].bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/emotion/dist/emotion.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/emotion/dist/emotion.esm.js ***!
  \**************************************************/
/*! exports provided: cache, css, cx, flush, getRegisteredStyles, hydrate, injectGlobal, keyframes, merge, sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/create-emotion.browser.esm.js");


var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;




/***/ }),

/***/ "./src/bled/blockeditor.js":
/*!*********************************!*\
  !*** ./src/bled/blockeditor.js ***!
  \*********************************/
/*! exports provided: BlockEditor, makeBasicEditor, makeLatidEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEditor", function() { return BlockEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBasicEditor", function() { return makeBasicEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeLatidEditor", function() { return makeLatidEditor; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/bled/ui.js");
/* harmony import */ var _coreblocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreblocks */ "./src/bled/coreblocks.js");



function BlockEditor({
    selector
}) {
    const my = this;
    //
    let mine = document.createElement("div");
    mine.classList.add("block_editor_outer_container");
    mine.style.minHeight = "64px";
    mine.style.width = "100%";
    let they = document.querySelector(selector);
    they.innerHTML = "";
    they.appendChild(mine);
    this.element = mine; //this element is mine


    this.editors = {
        //"zero":{
        //
        //}
    }; // null; //params.editors; //  available blocks editors
    this.blocks = null; // blocks array
    this.addMenu = [];

    var _current_id = 0;

    this._makeID = function () {
        _current_id++;
        return _current_id;
    }

    this.upload = function (f, testurl) {
        console.log("Testing upload", f);
        return new Promise(function (resolve, reject) {
            resolve({
                success: "1" ,
                file: {
                     url: testurl ? testurl : "kitty.jpeg"
                }
               
            });
        })
    }

    this.setUploadFunction = function (func) {
        this.upload = func;
        return this;
    }
    this.setBlocks = function (blocks) {
        this.blocks = {};
        mine.querySelectorAll(".block_editor_unit").forEach(e => e.remove());
        this._current_id = 1;
        if (blocks) {
            blocks.forEach(e => this.addNewBlockFromSource(e));
        }
    }

    this.hide = function () {
        this.element.remove();
    }

    this.show = function () {
        let they = document.querySelector(selector);
        they.innerHTML = "";
        they.appendChild(this.element);
        _ui__WEBPACK_IMPORTED_MODULE_0__["tooltips"]();
        _ui__WEBPACK_IMPORTED_MODULE_0__["textTools"]();
    }

    this.start = function (blocks) {
        //add sero block

        //this.element.innerHTML = "";
        this.blocks = {};
        //console.log(this.editors)
        //"add" menu
        Object.keys(this.editors).forEach(function (e) {

            //console.log("added handler for", e);
            let val = my.editors[e];
            my.addMenu.push({
                "label": val.label,
                "icon": val.icon ? val.icon : null,
                "handler": function (refid) {
                    my.addNewBlock(e, null, refid);
                }
            })
        })
        //Zero block

        let zero = document.createElement("div");
        zero.classList.add("starting_block");
        //zero.style.height = "8px";
        zero.style.width = "100%";
        zero.style.marginLeft = "-32px";
        zero.style.marginRight = "-32px";
        zero.style.padding = "0px 32px"
        zero.dataset.block_id = "start";
        //
        let rect = document.createElement("div");
        rect.style.backgroundColor = _ui__WEBPACK_IMPORTED_MODULE_0__["Colours"].light;
        rect.style.color = "white";
        rect.innerHTML = "EDIT MODE";
        rect.style.padding = "0.5em 0px";
        rect.style.letterSpacing = ".5em";
        rect.style.fontSize = "10px";
        rect.style.fontWeight = "bold";
        rect.style.height = "100%";
        rect.style.textAlign = "center";
        zero.appendChild(rect);
        _ui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](zero, this.addMenu);
        mine.appendChild(zero);
        //
        this.setBlocks(blocks);
        //start UI
        _ui__WEBPACK_IMPORTED_MODULE_0__["tooltips"]();
        _ui__WEBPACK_IMPORTED_MODULE_0__["textTools"]();
        _ui__WEBPACK_IMPORTED_MODULE_0__["addCommonStyles"](this.element);
    }

    this.blockByID = function (id) {
        return this.blocks[id];
    }

    this.ID2Index = function (id) {
        //
        let r = null;
        this.element.querySelectorAll(".block_editor_unit").forEach((e, i) => {
            if (e.dataset.block_id == id) {
                r = i
            }
        });
        return r;
    }

    this.Index2ID = function (idx) {
        return this.element.querySelectorAll(".block_editor_unit").item(idx).dataset.block_id;
    }

    this.blockElementByID = function (id) {
        return this.element.querySelectorAll(".block_editor_unit").item(this.ID2Index(id));
    }

    this.blockElementByIndex = function (idx) {
        return this.element.querySelectorAll(".block_editor_unit").item(idx);
    }

    this.addNewBlockFromSource = function (d) {
        this.addNewBlock(d.type, d.data, null);
    }

    this.moveUp = function (id) {
        let bindex = this.ID2Index(id);
        if (bindex == 0) {
            return false;
        }
        //find prev block
        let upper = this.blockElementByIndex(bindex - 1);
        if (upper) {
            let theblock = this.blockElementByID(id);
            this.element.insertBefore(theblock, upper);
            return true;
        } else {
            return false;
        }
    }

    this.moveDown = function (id) {
        let bindex = this.ID2Index(id);
        //last?
        if (bindex + 1 == Object.keys(this.blocks).length) {
            return false;
        }
        let nextnext = this.blockElementByIndex(bindex + 2);
        let theblock = this.blockElementByID(id);
        if (nextnext) {
            this.element.insertBefore(theblock, nextnext);
        } else {
            //we at prelast element
            this.element.appendChild(theblock);
        }
        return true;
    }

    this.registerEditor = function ({
        type,
        make,
        icon,
        label,
        paste
    }) {
        this.editors[type] = {
            make,
            icon,
            label,
            paste
        };
    }

    this.focusOn = function (id) {
        let bf = this.blockElementByID(id);
        bf.focus();
    }

    this.addNewBlock = function (type, data, refid) { //ref=instert after that block
        //if there is ref id, we have to insert after
        //find next element
        if (refid == "start") {
            // var start = true;
            var refel = this.blockElementByIndex(0);
        } else if (refid) {
            let nextidx = this.ID2Index(refid) + 1;
            var refel = this.blockElementByIndex(nextidx);
        }

        //create block of type 
        var domblock = document.createElement("div");
        var bID = this._makeID();
        let bcontent = document.createElement("div");
        domblock.appendChild(bcontent);
        domblock.classList.add("block_editor_unit");
        domblock.dataset.block_id = bID;
        domblock.dataset.block_type = type;


        bcontent.classList.add("block_content_container");
        if (type in this.editors) {
            var block = this.editors[type].make(data, bcontent, bID, this); //block made
        } else {
            var block = {save: ()=> data , render: ()=> null}
            //this.blocks[bID] = block;
            console.log("no editor for", type);
            //return null;
            bcontent.innerHTML = "Unknown block: <strong>"+type + "</strong>";
            bcontent.style.backgroundColor =  _ui__WEBPACK_IMPORTED_MODULE_0__["Colours"].light;
            bcontent.style.color = "white";
            bcontent.style.fontSize = "2em";
            bcontent.style.textAlign = 'center';
            bcontent.style.padding = "2em 0em";
        }
        this.blocks[bID] = block;
        _ui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](domblock, this.addMenu);
        _ui__WEBPACK_IMPORTED_MODULE_0__["addBlockControls"](domblock, null, this);

        if (refid && refel) {
            this.element.insertBefore(domblock, refel);
        } else {
            this.element.appendChild(domblock);
        }
        block.render();
        return bID;
    } //add new block

    this.removeBlock = function (id) {
        //find block index
        let elidx = this.ID2Index(id);
        //announce deletion to block
        if ("beforeDelete" in this.blocks[id]) {
            this.blocks[id].beforeDelete();
        }
        //remove dom element
        this.element.querySelectorAll(".block_editor_unit").item(elidx).remove();
        //del block from registry
        delete (this.blocks[id]);
    } //remove block

    this.save = function (clb) {
        let dt = [];
        this.element.querySelectorAll(".block_editor_unit")
            .forEach(function (e) {
                //console.log(e);
                dt.push({
                    "type": e.dataset.block_type,
                    "data": my.blocks[e.dataset.block_id].save()
                })
            });
        let mydata = {
            "editor": "BlEd/1.0b",
            "blocks": dt
        };
       
        console.groupCollapsed("%cEditor saving", ("color: " + _ui__WEBPACK_IMPORTED_MODULE_0__["mycyan"]));
        console.log(mydata);
        console.groupEnd();

        if (clb) {
            clb(mydata)
        };
        return mydata;
    }

}




function makeBasicEditor(el) {
    let editor = new BlockEditor({
        selector: el
    });

    editor.registerEditor({
        type: "paragraph",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.paragraph,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].paragraph,
        label: "Paragraph"
    });
    editor.registerEditor({
        type: "divider",
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].divider,
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].divider,
        label: 'Divider'
    });
    editor.registerEditor({
        type: "header",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].header,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].header,
        label: 'Header'
    });
    editor.registerEditor({
        type: "code",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].code,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].code,
        label: 'Code snippet'
    });
    editor.registerEditor({
        type: "raw",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].raw,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].raw,
        label: 'Raw HTML'
    });
    editor.registerEditor({
        type: "quote",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.quote,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.image,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].image,
        label: 'Image'
    });
    editor.registerEditor({
        type: "video",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.video,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].video,
        label: 'Video'
    });
    editor.registerEditor({
        type: "list",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.list,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].list,
        label: "List",
    });
    //console.log(UI.icons.material.list);

    return editor;
}
//  my.current_editor = new editor_fn(l4, editor_element, my.current_view.file.content);

function makeLatidEditor(l4, editor_element_selector, file_content) {
    let ed = makeBasicEditor(editor_element_selector);
    ed.setBlocks(file_content);
    return ed;
}

/***/ }),

/***/ "./src/bled/coreblocks.js":
/*!********************************!*\
  !*** ./src/bled/coreblocks.js ***!
  \********************************/
/*! exports provided: constructors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructors", function() { return constructors; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/bled/ui.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "./src/bled/tools.js");



var constructors = {};


constructors.paragraph = function (data, el, id, editor) {
    let bc = document.createElement("p");
    bc.setAttribute("contenteditable", true);
    el.appendChild(bc);
    //let re = /<div|p|h>/gi;

    let blc = {
        my: this,
        id: id, //!!!!!!!!!!!!!!!!!!!    
        data: data ? data : {
            text: ""
        },
        element: el,
        editor: editor,
        _p: bc,
        //type: "paragraph",
        //clean: function (t) {
        //},
        render: function () {
            this._p.innerHTML = this.data.text;
        },
        save: function () {
            return {
                text: this._p.innerHTML
            }
        }
    }
    blc._p.addEventListener("paste", function (e) {
        //we need to strip formatting here
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));
        event.preventDefault();
    });

    blc._p.addEventListener("keydown", function (e) {
        const magic = "#!#"
        if (e.keyCode == 13) {
            //console.log("enter pressed", e.shiftKey == true);
            if (e.shiftKey) {
                //
            } else {
                document.execCommand("insertText", false, magic);
                let clickat = blc._p.innerHTML.indexOf(magic)
                let textleft = blc._p.innerHTML.substring(0, clickat);
                let textnext = blc._p.innerHTML.substring(clickat + magic.length);
                //console.log(textleft, "|" , textnext);
                blc._p.innerHTML = textleft; //blc._p.innerHTML.substring(0 , clickat);
                let np = editor.addNewBlock("paragraph", {
                    text: textnext
                }, blc.id);
                blc.editor.blocks[np]._p.focus();
                e.preventDefault();
                return;
            };
        }
    })
    return blc;
}

constructors.divider = function (data, el, id, editor) {
    return {
        element: el,
        id: id,
        render: function () {
            el.innerHTML = "<hr>";
        },
        save: function () {
            return {};
        }
    }
}


constructors.header = function (data, el, id, editor) {
    //mytag.

    let blc = {
        element: el,
        //id: id,
        text: data && data.text ? data.text : "Header",
        level: data && data.level ? data.level : 1,
        refresh: function () {
            let alreadythere = this.element.querySelector("h1,h2,h3,h4,h5,h6");
            if (alreadythere) {
                this.text = alreadythere.innerHTML;
            }
            this.element.innerHTML = "";
            let myh = document.createElement("h" + this.level);
            myh.setAttribute("contenteditable", true);
            myh.innerHTML = this.text;
            this.element.appendChild(myh);
        },
        //mytag: 
        render: function () {
            this.refresh();
        },
        save: function () {
            let txt = this.element.querySelector("h1,h2,h3,h4,h5,h6").innerHTML;
            return {
                "text": txt,
                "level": this.level
            }
        }
    }
    let opts = document.createElement("select");
    opts.style.display = "block";   
    for (let i = 1; i < 7; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.label = "level " + i;
        opt.innerHTML = "level " + i;
        if (i == blc.level) {
            opt.setAttribute("selected", true)
        }
        opts.appendChild(opt);
    }
    opts.addEventListener("change", function (e) {
        let nv = opts[opts.selectedIndex].value;
        blc.level = nv;
        blc.refresh();
    });
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].addToolbar(blc);
    blc.addToToolbar(opts)
    return blc;
}

constructors.code = function (data, el, id, editor) {
    let pre = document.createElement("pre");
    let cd = document.createElement("code");
    pre.appendChild(cd);
    cd.setAttribute("contenteditable", true);
    cd.dataset.no_text_toolbox = true;
    cd.addEventListener("paste", function (e) {
        //we need to strip formatting here
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));
        event.preventDefault();
    })
    el.appendChild(pre);
    let langs = [    "", "auto", "arduino", "bash", "basic" , "cpp", "html", 'javascript',  "processing", "python",   ];
    let lbls =  ["No highlighting", "Auto", "Arduino", "Bash", "Basic" , "C++", "HTML", 'Java Script', "Processing", "Python",   ];
    //
    let opts = document.createElement("select");
    langs.forEach(function (e ,i) {
        let mi = document.createElement("option");
        mi.value = e;
        mi.label = lbls[i];
        mi.innerHTML = e;
        if (data && data.language && e == data.language) {
            mi.selected = true;        }
        opts.appendChild(mi);
    });
    //

    let blc = {
        element: el,
        render: function () {
            cd.innerHTML = data && data.code ? data.code : "#  type\n#  here";
        },
        save: function () {
            return {
                code: cd.innerHTML,
                language: opts[opts.selectedIndex].value
            }
        }
    }
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].addToolbar(blc);
    blc.addToToolbar(opts);
    return blc;
}

constructors.raw = function (data, el, id, editor) {

    let edi = document.createElement("textarea");
    edi.style.width = "100%";
    edi.style.minHeight = "64px";
    edi.style.boxSizing = "border-box";
    edi.style.border = "2px solid " + _ui__WEBPACK_IMPORTED_MODULE_0__["mycyan"];
    edi.style.padding = "8px";
    if (data && data.html) {
        edi.value = data.html;
    }
    let blc = {
        render: function () {
            el.appendChild(edi);
        },
        save: function () {
            return {
                html: edi.value
            };
        }
    }
    return blc;
}

constructors.blockquote = function (data, el, id, editor) {
    let blctag = document.createElement("blockquote");
    blctag.style.minHeight = "64px";
    let blcin = document.createElement("span");

    blcin.setAttribute("contenteditable", true);
    let blfoot = document.createElement("footer");
    let blcite = document.createElement("cite");
    blfoot.appendChild(blcite);
    blcite.setAttribute("contenteditable", true);

    blctag.appendChild(blcin);
    blctag.appendChild(blfoot);
    blcin.innerHTML = data && data.text ? data.text : "Цитата";
    blcite.innerHTML = data && data.caption ? data.caption : "";

    let block = {
        render: function () {
            el.appendChild(blctag);
        },
        save: function () {
            return {
                text: blcin.innerHTML,
                caption: blcite.innerHTML
            }
        }
    }
    return block;
}

constructors.image = function (data, el, id, editor) {
    let figtag = document.createElement("figure");
    let pimg = document.createElement("img");
    pimg.style.maxWidth = "100%";
    let fc = document.createElement("figcaption");
    fc.setAttribute("contenteditable", true);
    fc.innerHTML = data && data.caption ? data.caption : "";
    figtag.appendChild(pimg);
    figtag.appendChild(fc);
    pimg.src = data && data.file ? data.file.url : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMwMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjI5OSIgaGVpZ2h0PSIxOTkiIGZpbGw9IiNDNEM0QzQiIHN0cm9rZT0iYmxhY2siLz4KPGxpbmUgeTE9Ii0wLjUiIHgyPSIzNDkuNTY5IiB5Mj0iLTAuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NTgxOTkgLTAuNTEzMzE3IDAuODU3MjU3IDAuNTE0ODg4IDAgMTgwKSIgc3Ryb2tlPSIjNkY2RjZGIi8+CjxsaW5lIHkxPSItMC41IiB4Mj0iMzQ4LjMxIiB5Mj0iLTAuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NTc3MjkgMC41MTQxMDIgLTAuODU3NzI5IDAuNTE0MTAyIDAgMC41NjAxODEpIiBzdHJva2U9IiM2RjZGNkYiLz4KPC9nPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjI5OSIgaGVpZ2h0PSIxNzkiIHN0cm9rZT0iIzZGNkY2RiIvPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

    let blc = {
        element: el,
        render: function () {
            console.log("render image")
        },
    }
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].twoPanels(blc);
    blc.addToPreview(figtag);
    //edit
    ////upload
    let upld = document.createElement("input");
    upld.type = "file";
    upld.style.flexGrow = 1;
    let upldbtn = document.createElement("input");
    upldbtn.value = "upload";
    upldbtn.type = "button"
    upldbtn.addEventListener("click", function (e) {
        editor.upload(upld.files[0])
            .then(function (r) {
                pimg.src = r.file.url;
                srcinput.value = r.file.url;
            })
    });

    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([upld, upldbtn]));
    ////edit src
    let srclabel = document.createElement("label");
    srclabel.innerHTML = "Source URL";
    let srcinput = document.createElement("input");
    srcinput.style.flexGrow = 2;
    srcinput.type = "text";
    srcinput.value = data && data.file.url ? data.file.url : "";
    srcinput.addEventListener("keyup", function (e) {
        pimg.src = this.value;
    })
    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([srclabel, srcinput]));
    ////classes
    //////stretched
    let stretchlabel = document.createElement("label");
    stretchlabel.innerHTML = "stretched"
    let stretched = document.createElement("input");
    stretched.type = "checkbox";
    stretched.onclick = function () {
        if (this.checked) {
            right.checked = false;
            left.checked = false;
            noresize.checked = false;
        } else {
            figtag.classList.remove("stretched");
        }
    }
    stretched.checked = data && data.stretched;
    //////noresize
    let nrlabel = document.createElement("label");
    nrlabel.innerHTML = "no resize"
    let noresize = document.createElement("input");
    noresize.type = "checkbox";
    noresize.onclick = function () {
        if (this.checked) {
            stretched.checked = false
        }
    };
    noresize.checked = data && (data.noresize || data.withbackground);
    /////left
    let llabel = document.createElement("label");
    llabel.innerHTML = "left"
    let left = document.createElement("input");
    left.type = "checkbox";
    left.onclick = function () {
        if (this.checked) {
            right.checked = false;
            stretched.checked = false
        }
    };
    left.checked = data && data.left;
    ////right
    let rlabel = document.createElement("label");
    rlabel.innerHTML = "right"
    let right = document.createElement("input");
    right.type = "checkbox";
    right.onclick = function () {
        if (this.checked) {
            left.checked = false;
            stretched.checked = false
        }
    }
    right.checked = data && data.right;

    ////border
    let blabel = document.createElement("label");
    blabel.innerHTML = "border"
    let border = document.createElement("input");
    border.type = "checkbox";
    border.onclick = function () {
        if (this.checked) {
            pimg.classList.add("bordered")
        } else {
            pimg.classList.remove("bordered")
        }
    }
    border.checked = data && data.border;

    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([stretched, stretchlabel,
        noresize, nrlabel,
        left, llabel,
        right, rlabel,
        border, blabel
    ]));

    //
    blc.save = function () {
        return {
            stretched: stretched.checked,
            right: right.checked,
            left: left.checked,
            noresize: noresize.checked,
            withBackground: noresize.checked,
            border: border.checked,
            withBorder: border.checked,
            caption: fc.innerHTML,
            file: {
                url: srcinput.value
            }
        }
    }
    if (data && data.file && data.file.url) {
        blc.goPreviewMode();
    } else {
        blc.goEditMode();
    }
    //
    return blc;
}

constructors.video = function (data, el, id, editor) {
    console.log(data);
    let blc = {
        element: el,
        id: id,
        data: data ? data : {
            file: {
                url: null
            }
        },
        render: function () {},
    }
    if (!blc.data.file) {
        blc.data.file = {};
    }
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].twoPanels(blc);
    //preview
    let vtag = blc.addToPreview(document.createElement("video"));
    vtag.style.maxWidth = "100%";
    //let srctag = document.createElement("source");
    //vtag.appendChild(srctag);
    vtag.src = data && data.file.url ? data.file.url : "";
    //editor
    ////upload     
    let upld = document.createElement("input");
    upld.type = "file";
    upld.style.flexGrow = 1;
    let upldbtn = document.createElement("input");
    upldbtn.value = "upload";
    upldbtn.type = "button"
    upldbtn.addEventListener("click", function (e) {
        editor.upload(upld.files[0])
            .then(function (r) {
                vtag.src = r.file.url;
                srcinput.value = r.file.url;
                blc.data.file.url = r.file.url;
            })
    });

    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([upld, upldbtn]));
    ////edit src
    let srclabel = document.createElement("label");
    srclabel.innerHTML = "Source URL";
    let srcinput = document.createElement("input");
    srcinput.style.flexGrow = 2;
    srcinput.type = "text";
    srcinput.value = data && data.file.url ? data.file.url : "";
    srcinput.addEventListener("keyup", function (e) {
        vtag.src = this.value;
        blc.data.file.url = this.value;
    })
    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([srclabel, srcinput]));
    ////params
    let params = [{
            name: "autoplay",
            checked: data && data.autoplay,
            label: "autoplay"
        },
        {
            name: "controls",
            checked: data && data.controls,
        },
        {
            name: "loop",
            checked: data && data.loop,
        },
        {
            name: "muted",
            checked: data && data.muted,
        },

    ]
    let pels = [];
    params.forEach(function (e) {
        if (!blc.data[e.name]) {
            blc.data[e.name] = false;
        }
        let plabel = document.createElement("label");
        plabel.style.flexGrow = 1;
        plabel.innerHTML = e.name;
        let pcheck = document.createElement("input");
        pcheck.type = "checkbox";
        pcheck.checked = data && data[e.name];
        pcheck.onclick = function (ev) {
            console.log(e, blc.data, e.name);
            blc.data[e.name] = this.checked;
            vtag.setAttribute(e.name, this.checked);
        };
        pels.push(pcheck);
        pels.push(plabel);


    });
    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow(pels));

    blc.save = function () {
        return blc.data;
    }
    if (!(data && data.file && data.file.url)) {
        blc.goEditMode();
    }

    return blc;
}


constructors.list = function (data, el, id, editor) {
    let blc = {
        element: el,
        list_element: null,
        type: data && data.style && data.style == "ordered" ? "ol" : "ul",
        render: function () {},
        save: function () {
            return {
                "style": blc.type == "ol" ? "ordered" : "unordered",
                "items": Array.from(this.list_element.querySelectorAll("li")).map(e => e.innerHTML)
            }
        }

    }
    //editor
    ////outer list
    blc.list_element = document.createElement(blc.type);
    el.appendChild(blc.list_element);
    ////do we have data
    if (data && data.items) {
        data.items.forEach(function (e) {
            let l = document.createElement("li");
            l.innerHTML = e;
            l.setAttribute("contenteditable", true);
            addSmartRemove(l)
            blc.list_element.appendChild(l);
        })
    }
    /////make LI deletable 
    function addSmartRemove(el) {
        el.addEventListener("keydown", function (e) {
            //console.log(e.keyCode , this.innerHTML.length);
            if (e.keyCode == 8 && this.innerHTML.length == 0) {
                this.remove();
            }
            if (e.keyCode == 13 && this.innerHTML.length > 0) {
                e.preventDefault();
                let ni = document.createElement("li");
                ni.setAttribute("contenteditable", true);
                //where?
                let mynext = this.nextSibling;
                if (mynext) {
                    blc.list_element.insertBefore(ni, mynext);
                } else {
                    blc.list_element.appendChild(ni); //at...?
                }
                addSmartRemove(ni);
                ni.focus();
                return;
            }
        })
    }
    /////changle list type to
    function setType(tn) {

        let ne = document.createElement(tn);
        let liss = Array.from(blc.list_element.childNodes);
        liss.forEach(e => {
            ne.appendChild(e)
        });
        blc.list_element.remove();
        blc.list_element = ne;
        blc.type = tn;
        el.appendChild(ne);
    }
    ////
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].addToolbar(blc);
    //radiobuttons
    //
    let rbtns = [{
            value: "ul",
            label: "Unordered"

        },
        {
            value: "ol",
            label: "Ordered"
        }
    ];
    rbtns.forEach(function (e) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "list_buttons_" + id;
        radio.value = e.value;
        radio.checked = (blc.type == e.value);
        radio.onchange = ev => setType(e.value);
        let lbl = document.createElement("label");
        lbl.innerHTML = e.label;
        blc.addToToolbar(radio);
        blc.addToToolbar(lbl);
    });
    //// add button
    let add_b = document.createElement("input");
    add_b.type = "button";
    add_b.value = "+item";
    add_b.dataset.hint = "Add new list item";
    add_b.addEventListener("click", function () {
        let newli = document.createElement("li");
        newli.setAttribute("contenteditable", true);
        addSmartRemove(newli);
        blc.list_element.appendChild(newli);
    })
    blc.addToToolbar(add_b);
    return blc;
}

/***/ }),

/***/ "./src/bled/svg/add-24px.svg":
/*!***********************************!*\
  !*** ./src/bled/svg/add-24px.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/arrow_downward-24px.svg":
/*!**********************************************!*\
  !*** ./src/bled/svg/arrow_downward-24px.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/arrow_upward-24px.svg":
/*!********************************************!*\
  !*** ./src/bled/svg/arrow_upward-24px.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/clear-24px.svg":
/*!*************************************!*\
  !*** ./src/bled/svg/clear-24px.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/code-24px.svg":
/*!************************************!*\
  !*** ./src/bled/svg/code-24px.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"></path><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/code-my-24px.svg":
/*!***************************************!*\
  !*** ./src/bled/svg/code-my-24px.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path><g><path d=\"M5.7,13.3h11.5v2H5.7V13.3z M6.3,7.8h11.5v2H6.3V7.8z M9.3,3.2h1.8L9,20.6H7.2L9.3,3.2z M14.3,3.2h1.8l-2.1,17.4h-1.9 L14.3,3.2z\"></path></g></svg>"

/***/ }),

/***/ "./src/bled/svg/divider-24px.svg":
/*!***************************************!*\
  !*** ./src/bled/svg/divider-24px.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path><rect x=\"4.5\" y=\"8.5\" transform=\"matrix(9.042269e-13 -1 1 9.042269e-13 -6.4567 17.5433)\" width=\"2\" height=\"7.1\"></rect><rect x=\"17.5\" y=\"8.5\" transform=\"matrix(9.042269e-13 -1 1 9.042269e-13 6.4567 30.4567)\" width=\"2\" height=\"7.1\"></rect><rect x=\"11.1\" y=\"11\" transform=\"matrix(6.123234e-17 -1 1 6.123234e-17 6.204968e-02 24.062)\" width=\"2\" height=\"1.9\"></rect></svg>"

/***/ }),

/***/ "./src/bled/svg/format_bold-24px.svg":
/*!*******************************************!*\
  !*** ./src/bled/svg/format_bold-24px.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/format_italic-24px.svg":
/*!*********************************************!*\
  !*** ./src/bled/svg/format_italic-24px.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/format_list_bulleted-24px.svg":
/*!****************************************************!*\
  !*** ./src/bled/svg/format_list_bulleted-24px.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg><path d=\"M4 10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0-6c-.8 0-1.5.7-1.5 1.5S3.2 7.5 4 7.5 5.5 6.8 5.5 6 4.8 4.5 4 4.5zm0 12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/format_quote-24px.svg":
/*!********************************************!*\
  !*** ./src/bled/svg/format_quote-24px.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/format_strikethrough-24px.svg":
/*!****************************************************!*\
  !*** ./src/bled/svg/format_strikethrough-24px.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/format_underlined-24px.svg":
/*!*************************************************!*\
  !*** ./src/bled/svg/format_underlined-24px.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/header-24px.svg":
/*!**************************************!*\
  !*** ./src/bled/svg/header-24px.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path><rect x=\"4\" y=\"10\" width=\"14\" height=\"2\"></rect><rect x=\"4\" y=\"4\" width=\"16\" height=\"4\"></rect><rect x=\"4\" y=\"14\" width=\"16\" height=\"2\"></rect><rect x=\"4\" y=\"18\" width=\"12\" height=\"2\"></rect></svg>"

/***/ }),

/***/ "./src/bled/svg/insert_photo-outlined-24px.svg":
/*!*****************************************************!*\
  !*** ./src/bled/svg/insert_photo-outlined-24px.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"></path><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/link-24px.svg":
/*!************************************!*\
  !*** ./src/bled/svg/link-24px.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/link_off-24px.svg":
/*!****************************************!*\
  !*** ./src/bled/svg/link_off-24px.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"></path><path d=\"M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z\"></path><path d=\"M0 24V0\" fill=\"none\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/paragraph-remix-24px.svg":
/*!***********************************************!*\
  !*** ./src/bled/svg/paragraph-remix-24px.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path d=\"M9,11v10h2V5h2v16h2V5h2V3H9C6.8,3,5,4.8,5,7S6.8,11,9,11z\"></path><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/remove-format.svg":
/*!****************************************!*\
  !*** ./src/bled/svg/remove-format.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/symbols_24px.svg":
/*!***************************************!*\
  !*** ./src/bled/svg/symbols_24px.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M12.7266 7.3335H10.4092V8.95361H12.8086C14.5654 8.95361 15.9565 9.38086 16.9819 10.2354C18.0142 11.083 18.5303 12.228 18.5303 13.6704C18.5303 15.1196 18.0176 16.2852 16.9922 17.167C15.9736 18.042 14.6167 18.4863 12.9214 18.5H7.3125V7.3335H5.55908V5.45703H7.3125V3.57031H10.4092V5.45703H12.7266V7.3335ZM10.4092 11.4351V16.0288H12.8599C13.646 16.0288 14.2715 15.8135 14.7363 15.3828C15.208 14.9521 15.4438 14.3745 15.4438 13.6499C15.4438 12.9731 15.2183 12.4399 14.7671 12.0503C14.3228 11.6538 13.7109 11.4487 12.9316 11.4351H10.4092Z\"></path></g><defs><clipPath id=\"clip0\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/bled/svg/text_bold.svg":
/*!************************************!*\
  !*** ./src/bled/svg/text_bold.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.3068 19.3242C10.8674 19.5742 11.3977 19.6992 11.8977 19.6992C14.7462 19.6992 16.1705 18.3906 16.1705 15.7734C16.1705 14.8828 16.0152 14.1797 15.7045 13.6641C15.5 13.3203 15.267 13.0312 15.0057 12.7969C14.7443 12.5625 14.4886 12.3809 14.2386 12.252C13.9886 12.123 13.6837 12.0254 13.3239 11.959C12.964 11.8926 12.6458 11.8516 12.3693 11.8359C12.0928 11.8203 11.7348 11.8125 11.2955 11.8125C10.7424 11.8125 10.3598 11.8516 10.1477 11.9297C10.1477 12.3438 10.1458 12.9648 10.142 13.793C10.1383 14.6211 10.1364 15.2383 10.1364 15.6445C10.1364 15.707 10.1326 15.9707 10.125 16.4355C10.1174 16.9004 10.1155 17.2773 10.1193 17.5664C10.1231 17.8555 10.1402 18.1816 10.1705 18.5449C10.2008 18.9082 10.2462 19.168 10.3068 19.3242ZM10.1477 10.582C10.4659 10.6367 10.8788 10.6641 11.3864 10.6641C12.0076 10.6641 12.5492 10.6133 13.0114 10.5117C13.4735 10.4102 13.8902 10.2363 14.2614 9.99023C14.6326 9.74414 14.9148 9.39453 15.108 8.94141C15.3011 8.48828 15.3977 7.93359 15.3977 7.27734C15.3977 6.73047 15.2879 6.25195 15.0682 5.8418C14.8485 5.43164 14.5492 5.11133 14.1705 4.88086C13.7917 4.65039 13.3826 4.48047 12.9432 4.37109C12.5038 4.26172 12.0341 4.20703 11.5341 4.20703C11.1553 4.20703 10.6629 4.25781 10.0568 4.35938C10.0568 4.75 10.072 5.33984 10.1023 6.12891C10.1326 6.91797 10.1477 7.51172 10.1477 7.91016C10.1477 8.12109 10.1458 8.43359 10.142 8.84766C10.1383 9.26172 10.1364 9.57031 10.1364 9.77344C10.1364 10.1328 10.1402 10.4023 10.1477 10.582ZM4 21L4.02273 19.8984C4.13636 19.8672 4.45833 19.8047 4.98864 19.7109C5.51894 19.6172 5.92045 19.5117 6.19318 19.3945C6.24621 19.3008 6.29356 19.1953 6.33523 19.0781C6.37689 18.9609 6.40909 18.8301 6.43182 18.6855C6.45455 18.541 6.47538 18.4141 6.49432 18.3047C6.51326 18.1953 6.52462 18.0488 6.52841 17.8652C6.5322 17.6816 6.53409 17.5488 6.53409 17.4668V16.6992C6.53409 9.02734 6.45076 5.02344 6.28409 4.6875C6.25379 4.625 6.17045 4.56836 6.03409 4.51758C5.89773 4.4668 5.72917 4.42383 5.52841 4.38867C5.32765 4.35352 5.14015 4.32617 4.96591 4.30664C4.79167 4.28711 4.60795 4.26953 4.41477 4.25391C4.22159 4.23828 4.10606 4.22656 4.06818 4.21875L4.02273 3.24609C4.76515 3.23047 6.05303 3.18555 7.88636 3.11133C9.7197 3.03711 11.1326 3 12.125 3C12.2992 3 12.5568 3.00195 12.8977 3.00586C13.2386 3.00977 13.4962 3.01172 13.6705 3.01172C14.2008 3.01172 14.7178 3.0625 15.2216 3.16406C15.7254 3.26562 16.2121 3.42969 16.6818 3.65625C17.1515 3.88281 17.5606 4.16016 17.9091 4.48828C18.2576 4.81641 18.5379 5.22461 18.75 5.71289C18.9621 6.20117 19.0682 6.73828 19.0682 7.32422C19.0682 7.73047 19.0057 8.10352 18.8807 8.44336C18.7557 8.7832 18.608 9.06445 18.4375 9.28711C18.267 9.50977 18.0227 9.73438 17.7045 9.96094C17.3864 10.1875 17.1098 10.3633 16.875 10.4883C16.6402 10.6133 16.322 10.7695 15.9205 10.957C17.0871 11.2305 18.0587 11.7539 18.8352 12.5273C19.6117 13.3008 20 14.2695 20 15.4336C20 16.2148 19.8674 16.916 19.6023 17.5371C19.3371 18.1582 18.983 18.668 18.5398 19.0664C18.0966 19.4648 17.5739 19.7988 16.9716 20.0684C16.3693 20.3379 15.75 20.5273 15.1136 20.6367C14.4773 20.7461 13.8106 20.8008 13.1136 20.8008C12.7803 20.8008 12.2803 20.7891 11.6136 20.7656C10.947 20.7422 10.447 20.7305 10.1136 20.7305C9.31061 20.7305 8.14773 20.7734 6.625 20.8594C5.10227 20.9453 4.22727 20.9922 4 21Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/text_italic.svg":
/*!**************************************!*\
  !*** ./src/bled/svg/text_italic.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 20.9766L6.19922 19.9805C6.37109 19.9258 6.61133 19.8613 6.91992 19.7871C7.22852 19.7129 7.50977 19.6387 7.76367 19.5645C8.01758 19.4902 8.25 19.3984 8.46094 19.2891C8.67969 19.0156 8.83984 18.6211 8.94141 18.1055C8.94922 18.0508 9.19141 16.9219 9.66797 14.7188C10.1445 12.5156 10.5898 10.3926 11.0039 8.34961C11.418 6.30664 11.6211 5.14844 11.6133 4.875V4.58203C11.4258 4.48047 11.2129 4.4082 10.9746 4.36523C10.7363 4.32227 10.4648 4.29102 10.1602 4.27148C9.85547 4.25195 9.62891 4.23047 9.48047 4.20703L9.70312 3C9.96094 3.01562 10.4297 3.04102 11.1094 3.07617C11.7891 3.11133 12.373 3.13867 12.8613 3.1582C13.3496 3.17773 13.8203 3.1875 14.2734 3.1875C14.6484 3.1875 15.0332 3.17773 15.4277 3.1582C15.8223 3.13867 16.2949 3.11133 16.8457 3.07617C17.3965 3.04102 17.7812 3.01562 18 3C17.9609 3.30469 17.8867 3.65234 17.7773 4.04297C17.543 4.12109 17.1465 4.23242 16.5879 4.37695C16.0293 4.52148 15.6055 4.65234 15.3164 4.76953C15.2539 4.91797 15.1992 5.08398 15.1523 5.26758C15.1055 5.45117 15.0703 5.60742 15.0469 5.73633C15.0234 5.86523 14.9941 6.04297 14.959 6.26953C14.9238 6.49609 14.8984 6.66016 14.8828 6.76172C14.6719 7.91797 14.3301 9.55664 13.8574 11.6777C13.3848 13.7988 13.082 15.1875 12.9492 15.8438C12.9336 15.9141 12.8828 16.1406 12.7969 16.5234C12.7109 16.9062 12.6328 17.2578 12.5625 17.5781C12.4922 17.8984 12.4297 18.2246 12.375 18.5566C12.3203 18.8887 12.2969 19.1133 12.3047 19.2305L12.3164 19.4414C12.4492 19.4727 13.1719 19.5938 14.4844 19.8047C14.4609 20.1484 14.3984 20.5352 14.2969 20.9648C14.2109 20.9648 14.084 20.9707 13.916 20.9824C13.748 20.9941 13.6211 21 13.5352 21C13.3086 21 12.9688 20.9609 12.5156 20.8828C12.0625 20.8047 11.7266 20.7656 11.5078 20.7656C10.4297 20.75 9.625 20.7422 9.09375 20.7422C8.69531 20.7422 8.13672 20.7773 7.41797 20.8477C6.69922 20.918 6.22656 20.9609 6 20.9766Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/text_link.svg":
/*!************************************!*\
  !*** ./src/bled/svg/text_link.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.1176 15.7647C18.1176 15.5033 18.0261 15.281 17.8431 15.098L15.8039 13.0588C15.6209 12.8758 15.3987 12.7843 15.1373 12.7843C14.8627 12.7843 14.6275 12.8889 14.4314 13.098C14.451 13.1176 14.5131 13.1781 14.6176 13.2794C14.7222 13.3807 14.7925 13.451 14.8284 13.4902C14.8644 13.5294 14.9134 13.5915 14.9755 13.6765C15.0376 13.7614 15.0801 13.8448 15.1029 13.9265C15.1258 14.0082 15.1373 14.098 15.1373 14.1961C15.1373 14.4575 15.0458 14.6797 14.8627 14.8627C14.6797 15.0458 14.4575 15.1373 14.1961 15.1373C14.098 15.1373 14.0082 15.1258 13.9265 15.1029C13.8448 15.0801 13.7614 15.0376 13.6765 14.9755C13.5915 14.9134 13.5294 14.8644 13.4902 14.8284C13.451 14.7925 13.3807 14.7222 13.2794 14.6176C13.1781 14.5131 13.1176 14.451 13.098 14.4314C12.8824 14.634 12.7745 14.8725 12.7745 15.1471C12.7745 15.4085 12.866 15.6307 13.049 15.8137L15.0686 17.8431C15.2451 18.0196 15.4673 18.1078 15.7353 18.1078C15.9967 18.1078 16.219 18.0229 16.402 17.8529L17.8431 16.4216C18.0261 16.2386 18.1176 16.0196 18.1176 15.7647ZM11.2255 8.85294C11.2255 8.5915 11.134 8.36928 10.951 8.18627L8.93137 6.15686C8.74837 5.97386 8.52614 5.88235 8.26471 5.88235C8.0098 5.88235 7.78758 5.97059 7.59804 6.14706L6.15686 7.57843C5.97386 7.76144 5.88235 7.98039 5.88235 8.23529C5.88235 8.49673 5.97386 8.71895 6.15686 8.90196L8.19608 10.9412C8.37255 11.1176 8.59477 11.2059 8.86275 11.2059C9.13726 11.2059 9.37255 11.1046 9.56863 10.902C9.54902 10.8824 9.48693 10.8219 9.38235 10.7206C9.27778 10.6193 9.20752 10.549 9.17157 10.5098C9.13562 10.4706 9.0866 10.4085 9.02451 10.3235C8.96242 10.2386 8.91993 10.1552 8.89706 10.0735C8.87418 9.99183 8.86275 9.90196 8.86275 9.80392C8.86275 9.54248 8.95425 9.32026 9.13726 9.13726C9.32026 8.95425 9.54248 8.86275 9.80392 8.86275C9.90196 8.86275 9.99183 8.87418 10.0735 8.89706C10.1552 8.91993 10.2386 8.96242 10.3235 9.02451C10.4085 9.0866 10.4706 9.13562 10.5098 9.17157C10.549 9.20752 10.6193 9.27778 10.7206 9.38235C10.8219 9.48693 10.8824 9.54902 10.902 9.56863C11.1176 9.36601 11.2255 9.12745 11.2255 8.85294ZM20 15.7647C20 16.549 19.7222 17.2124 19.1667 17.7549L17.7255 19.1863C17.183 19.7288 16.5196 20 15.7353 20C14.9444 20 14.2778 19.7222 13.7353 19.1667L11.7157 17.1373C11.1732 16.5948 10.902 15.9314 10.902 15.1471C10.902 14.3431 11.1895 13.6601 11.7647 13.098L10.902 12.2353C10.3399 12.8105 9.66013 13.098 8.86275 13.098C8.07843 13.098 7.41176 12.8235 6.86275 12.2745L4.82353 10.2353C4.27451 9.68627 4 9.01961 4 8.23529C4 7.45098 4.27778 6.78758 4.83333 6.2451L6.27451 4.81373C6.81699 4.27124 7.48039 4 8.26471 4C9.05556 4 9.72222 4.27778 10.2647 4.83333L12.2843 6.86275C12.8268 7.40523 13.098 8.06863 13.098 8.85294C13.098 9.65686 12.8105 10.3399 12.2353 10.902L13.098 11.7647C13.6601 11.1895 14.3399 10.902 15.1373 10.902C15.9216 10.902 16.5882 11.1765 17.1373 11.7255L19.1765 13.7647C19.7255 14.3137 20 14.9804 20 15.7647Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/text_strike.svg":
/*!**************************************!*\
  !*** ./src/bled/svg/text_strike.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.7983 12C21.9086 12 21.9992 12.0352 22.0701 12.1055C22.141 12.1758 22.1765 12.2656 22.1765 12.375V13.125C22.1765 13.2344 22.141 13.3242 22.0701 13.3945C21.9992 13.4648 21.9086 13.5 21.7983 13.5H1.37815C1.26786 13.5 1.17726 13.4648 1.10636 13.3945C1.03545 13.3242 1 13.2344 1 13.125V12.375C1 12.2656 1.03545 12.1758 1.10636 12.1055C1.17726 12.0352 1.26786 12 1.37815 12H21.7983ZM6.70772 11.25C6.48713 10.9766 6.28624 10.6641 6.10504 10.3125C5.72689 9.54688 5.53782 8.8125 5.53782 8.10938C5.53782 6.69531 6.06565 5.48828 7.12132 4.48828C8.16912 3.49609 9.71717 3 11.7655 3C12.1594 3 12.8172 3.07422 13.739 3.22266C14.2589 3.31641 14.9561 3.50391 15.8306 3.78516C15.9094 4.08203 15.9921 4.54297 16.0788 5.16797C16.1891 6.12891 16.2442 6.84375 16.2442 7.3125C16.2442 7.45312 16.2245 7.62891 16.1851 7.83984L16.0433 7.875L15.0507 7.80469L14.8852 7.78125C14.4913 6.61719 14.0856 5.81641 13.6681 5.37891C12.9748 4.66797 12.1476 4.3125 11.1864 4.3125C10.2883 4.3125 9.57143 4.54297 9.03571 5.00391C8.50788 5.45703 8.24396 6.02734 8.24396 6.71484C8.24396 7.28516 8.50394 7.83203 9.0239 8.35547C9.54385 8.87891 10.6429 9.38281 12.3209 9.86719C12.8645 10.0234 13.546 10.2812 14.3653 10.6406C14.8222 10.8594 15.1964 11.0625 15.4879 11.25H6.70772ZM12.6991 14.25H17.5559C17.6111 14.5547 17.6387 14.9141 17.6387 15.3281C17.6387 16.1953 17.4772 17.0234 17.1541 17.8125C16.973 18.25 16.6933 18.6562 16.3151 19.0312C16.0236 19.3047 15.5943 19.6211 15.027 19.9805C14.3968 20.3555 13.7941 20.6133 13.219 20.7539C12.5888 20.918 11.7891 21 10.8201 21C9.92201 21 9.15389 20.9102 8.51576 20.7305L6.86134 20.2617C6.41229 20.1367 6.12868 20.0273 6.0105 19.9336C5.94748 19.8711 5.91597 19.7852 5.91597 19.6758V19.5234C5.91597 18.6797 5.90809 18.0703 5.89233 17.6953C5.88445 17.4609 5.88445 17.1953 5.89233 16.8984L5.91597 16.4648V15.9492L7.12132 15.9258C7.2395 16.1914 7.35767 16.4688 7.47584 16.7578C7.59401 17.0469 7.68264 17.2656 7.74173 17.4141C7.80081 17.5625 7.85005 17.668 7.88944 17.7305C8.16518 18.1758 8.4803 18.543 8.83482 18.832C9.17358 19.1133 9.58718 19.3359 10.0756 19.5C10.5404 19.6719 11.0604 19.7578 11.6355 19.7578C12.1397 19.7578 12.6872 19.6523 13.2781 19.4414C13.8847 19.2383 14.3653 18.9023 14.7198 18.4336C15.0901 17.957 15.2752 17.4531 15.2752 16.9219C15.2752 16.2656 14.9561 15.6523 14.318 15.082C14.0502 14.8555 13.5105 14.5781 12.6991 14.25Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/text_sub.svg":
/*!***********************************!*\
  !*** ./src/bled/svg/text_sub.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 4.55556C7 4.40509 7.05566 4.27489 7.16699 4.16493C7.27832 4.05498 7.41016 4 7.5625 4L15.4375 4C15.5898 4 15.7217 4.05498 15.833 4.16493C15.9443 4.27488 16 4.40509 16 4.55556C16 4.70602 15.9443 4.83623 15.833 4.94618L11.8955 8.83507C11.7842 8.94502 11.6523 9 11.5 9C11.3477 9 11.2158 8.94502 11.1045 8.83507L7.16699 4.94618C7.05566 4.83623 7 4.70602 7 4.55556Z\"></path><path d=\"M14.3955 21H9.43457V19.9258L11.7197 17.5234C12.2829 16.8822 12.5645 16.3727 12.5645 15.9951C12.5645 15.6891 12.4977 15.4564 12.3643 15.2969C12.2308 15.1374 12.0371 15.0576 11.7832 15.0576C11.5326 15.0576 11.3291 15.165 11.1729 15.3799C11.0166 15.5915 10.9385 15.8568 10.9385 16.1758H9.28809C9.28809 15.7396 9.39714 15.3376 9.61523 14.9697C9.83333 14.5986 10.1361 14.3089 10.5234 14.1006C10.9108 13.8923 11.3438 13.7881 11.8223 13.7881C12.5905 13.7881 13.1813 13.9655 13.5947 14.3203C14.0114 14.6751 14.2197 15.1846 14.2197 15.8486C14.2197 16.1286 14.1676 16.402 14.0635 16.6689C13.9593 16.9326 13.7965 17.2109 13.5752 17.5039C13.3571 17.7936 13.0039 18.1826 12.5156 18.6709L11.5977 19.7305H14.3955V21Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/text_sup.svg":
/*!***********************************!*\
  !*** ./src/bled/svg/text_sup.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6493 4.1875V4.87305C10.6493 4.92383 10.6284 4.9668 10.5867 5.00195C10.5449 5.03711 10.4955 5.05469 10.4384 5.05469H8.47396V9.8125C8.47396 9.86328 8.45419 9.90723 8.41463 9.94434C8.37508 9.98145 8.32674 10 8.26961 10H7.3797C7.32257 10 7.27313 9.98242 7.23138 9.94727C7.18963 9.91211 7.16875 9.86719 7.16875 9.8125V5.05469H5.21094C5.15381 5.05469 5.10437 5.03711 5.06262 5.00195C5.02087 4.9668 5 4.92383 5 4.87305V4.1875C5 4.13281 5.01978 4.08789 5.05933 4.05273C5.09888 4.01758 5.14942 4 5.21094 4H10.4384C10.4955 4 10.5449 4.01855 10.5867 4.05566C10.6284 4.09277 10.6493 4.13672 10.6493 4.1875ZM17.4918 4.16992L17.9993 9.80078C18.0037 9.85156 17.9862 9.89844 17.9466 9.94141C17.9027 9.98047 17.8521 10 17.795 10H16.9117C16.8589 10 16.8128 9.9834 16.7732 9.9502C16.7337 9.91699 16.7117 9.87695 16.7073 9.83008L16.4041 6.38477L15.1582 8.875C15.123 8.94922 15.0593 8.98633 14.967 8.98633H14.176C14.0881 8.98633 14.0244 8.94922 13.9848 8.875L12.7456 6.37305L12.4489 9.83008C12.4445 9.87695 12.4225 9.91699 12.383 9.9502C12.3434 9.9834 12.2973 10 12.2446 10H11.3546C11.2975 10 11.247 9.98047 11.203 9.94141C11.1635 9.90234 11.1437 9.85547 11.1437 9.80078L11.6579 4.16992C11.6623 4.12305 11.6842 4.08301 11.7238 4.0498C11.7633 4.0166 11.8095 4 11.8622 4H12.7983C12.8862 4 12.9499 4.03711 12.9895 4.11133L14.4397 7.1582C14.4836 7.25195 14.5276 7.35156 14.5715 7.45703C14.5847 7.42969 14.6056 7.38184 14.6341 7.31348C14.6627 7.24512 14.6858 7.19336 14.7034 7.1582L16.1602 4.11133C16.1997 4.03711 16.2635 4 16.3514 4H17.2808C17.3379 4 17.3863 4.0166 17.4258 4.0498C17.4654 4.08301 17.4874 4.12305 17.4918 4.16992Z\"></path><path d=\"M16 20.4444C16 20.5949 15.9443 20.7251 15.833 20.8351C15.7217 20.945 15.5898 21 15.4375 21H7.5625C7.41016 21 7.27832 20.945 7.16699 20.8351C7.05566 20.7251 7 20.5949 7 20.4444C7 20.294 7.05566 20.1638 7.16699 20.0538L11.1045 16.1649C11.2158 16.055 11.3477 16 11.5 16C11.6523 16 11.7842 16.055 11.8955 16.1649L15.833 20.0538C15.9443 20.1638 16 20.294 16 20.4444Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/text_underline.svg":
/*!*****************************************!*\
  !*** ./src/bled/svg/text_underline.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5625 4.11328C3.27344 4.09766 3.09766 4.08203 3.03516 4.06641L3 3.03516C3.10156 3.02734 3.25781 3.02344 3.46875 3.02344C3.9375 3.02344 4.375 3.03906 4.78125 3.07031C5.8125 3.125 6.46094 3.15234 6.72656 3.15234C7.39844 3.15234 8.05469 3.14062 8.69531 3.11719C9.60156 3.08594 10.1719 3.06641 10.4062 3.05859C10.8438 3.05859 11.1797 3.05078 11.4141 3.03516L11.4023 3.19922L11.4258 3.94922V4.05469C10.957 4.125 10.4727 4.16016 9.97266 4.16016C9.50391 4.16016 9.19531 4.25781 9.04688 4.45312C8.94531 4.5625 8.89453 5.07812 8.89453 6C8.89453 6.10156 8.89648 6.22852 8.90039 6.38086C8.9043 6.5332 8.90625 6.63281 8.90625 6.67969L8.91797 9.36328L9.08203 12.6445C9.12891 13.6133 9.32812 14.4023 9.67969 15.0117C9.95312 15.4727 10.3281 15.832 10.8047 16.0898C11.4922 16.457 12.1836 16.6406 12.8789 16.6406C13.6914 16.6406 14.4375 16.5312 15.1172 16.3125C15.5547 16.1719 15.9414 15.9727 16.2773 15.7148C16.6523 15.4336 16.9062 15.1836 17.0391 14.9648C17.3203 14.5273 17.5273 14.082 17.6602 13.6289C17.8242 13.0586 17.9062 12.1641 17.9062 10.9453C17.9062 10.3281 17.8926 9.82812 17.8652 9.44531C17.8379 9.0625 17.7949 8.58398 17.7363 8.00977C17.6777 7.43555 17.625 6.8125 17.5781 6.14062L17.5312 5.44922C17.4922 4.92578 17.3984 4.58203 17.25 4.41797C16.9844 4.14453 16.6836 4.01172 16.3477 4.01953L15.1758 4.04297L15.0117 4.00781L15.0352 3H16.0195L18.4219 3.11719C19.0156 3.14062 19.7812 3.10156 20.7188 3L20.9297 3.02344C20.9766 3.32031 21 3.51953 21 3.62109C21 3.67578 20.9844 3.79688 20.9531 3.98438C20.6016 4.07812 20.2734 4.12891 19.9688 4.13672C19.3984 4.22266 19.0898 4.28906 19.043 4.33594C18.9258 4.45312 18.8672 4.61328 18.8672 4.81641C18.8672 4.87109 18.873 4.97656 18.8848 5.13281C18.8965 5.28906 18.9023 5.41016 18.9023 5.49609C18.9648 5.64453 19.0508 7.19141 19.1602 10.1367C19.207 11.6602 19.1484 12.8477 18.9844 13.6992C18.8672 14.293 18.707 14.7695 18.5039 15.1289C18.207 15.6367 17.7695 16.1172 17.1914 16.5703C16.6055 17.0156 15.8945 17.3633 15.0586 17.6133C14.207 17.8711 13.2109 18 12.0703 18C10.7656 18 9.65625 17.8203 8.74219 17.4609C7.8125 17.0938 7.11328 16.6172 6.64453 16.0312C6.16797 15.4375 5.84375 14.6758 5.67188 13.7461C5.54688 13.1211 5.48438 12.1953 5.48438 10.9688V7.06641C5.48438 5.59766 5.41797 4.76562 5.28516 4.57031C5.08984 4.28906 4.51562 4.13672 3.5625 4.11328ZM21 20.625V19.875C21 19.7656 20.9648 19.6758 20.8945 19.6055C20.8242 19.5352 20.7344 19.5 20.625 19.5H3.375C3.26562 19.5 3.17578 19.5352 3.10547 19.6055C3.03516 19.6758 3 19.7656 3 19.875V20.625C3 20.7344 3.03516 20.8242 3.10547 20.8945C3.17578 20.9648 3.26562 21 3.375 21H20.625C20.7344 21 20.8242 20.9648 20.8945 20.8945C20.9648 20.8242 21 20.7344 21 20.625Z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/videocam-24px.svg":
/*!****************************************!*\
  !*** ./src/bled/svg/videocam-24px.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"></path><path d=\"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z\"></path></svg>"

/***/ }),

/***/ "./src/bled/testing.js":
/*!*****************************!*\
  !*** ./src/bled/testing.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockeditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockeditor.js */ "./src/bled/blockeditor.js");
console.log("testing");

var testdata = [
    {
        "type" : "header",
        "data" : {
            "text" : "Драма катода",
            "level" : 3
        }
    },
    {
        "type" : "paragraph",
        "data" : {
            "text" : "Драма однородно притягивает прозаический дактиль. Весьма перспективной представляется гипотеза, высказанная И.Гальпериным"
        }
    },
    {
        "type" : "list",
        "data" :{
            "style" : "ordered",
            "items" :  ["First item" , "Second Item" , "Third Item"]
        }
    },
    {
        "type" : "fcuk",
        "data" :{
            "style" : "ordered",
            "items" :  ["First item" , "Second Item" , "Third Item"]
        }
    },
    {
        "type" : "paragraph",
        "data" : {
            "text" : "Первое полустишие изящно иллюстрирует лирический парафраз."
        }
    },
    {
        "type" : "divider",
        "data" : {}
    },
    {
        "type" : "paragraph",
        "data" : {
            "text" : `Следует отметить, что катод субстратно взвешивает деструктивный 
            белок. Даже в этом коротком фрагменте видно, что выпаривание дает 
            былинный одиннадцатисложник.`
        }
    },

]

var myeditor = _blockeditor_js__WEBPACK_IMPORTED_MODULE_0__["makeBasicEditor"]("#edited_content");
myeditor.start(testdata);

//save test
let sb = document.createElement("input");
sb.type="button";
sb.value = "save";
sb.addEventListener('click' , function(){myeditor.save()});
document.body.appendChild(sb)




/***/ }),

/***/ "./src/bled/tools.js":
/*!***************************!*\
  !*** ./src/bled/tools.js ***!
  \***************************/
/*! exports provided: templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/bled/ui.js");


var templates = {}

templates.formRow = function (elements_array) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.marginBottom = "8px";
    elements_array.forEach(function (e, i) {
        if (i > 0) {
            //console.log(e);
            e.style.marginLeft = "8px";
        }
        if (e.nodeName == "LABEL" && i != 0) {
            e.style.flexGrow = 1;
        }
        row.appendChild(e);
    });
    return row;
}

templates.addToolbar = function (block) {
    let tbx = document.createElement("div");
    tbx.classList.add("block_toolbar");
    tbx.style.backgroundColor = _ui__WEBPACK_IMPORTED_MODULE_0__["Colours"].pale;
    tbx.style.minHeight = "24px";
    tbx.style.fontSize = ".8em"
    tbx.style.display = "flex";
    tbx.style.padding = "4px";
    //tbx.style.background = "linear-gradient(0deg, rgba(0,0,0,0) 50%, rgba(62,217,227,0.5) 100%)"  ; 

    block.element.parentNode.appendChild(tbx); //add to editor_item, !not! block content container
    block.addToToolbar = function (el) {
        if (el.tagName == "LABEL") {
            el.style.flexGrow = 1;
        }
        tbx.appendChild(el)
    }
}

templates.twoPanels = function (block) {
    //let mode = "preview";
    let pp = document.createElement("div");
    pp.classList.add("block_preview_panel");
    pp.classList.add("one_of_two_panels");
    pp.style.position = "relative";
    pp.style.minHeight = "64px";
    pp.style.width = "100%";

    let ep = document.createElement("div");
    ep.classList.add("block_edit_panel");
    ep.classList.add("one_of_two_panels");
    ep.style.minHeight = "64px";
    //ep.style.backgroundColor = "silver";
    ep.style.borderTop = "2px solid " + _ui__WEBPACK_IMPORTED_MODULE_0__["mycyan"];
    ep.style.display = "none";
    ep.style.padding = "8px";
    //
    let ebtn = document.createElement("div");
    ebtn.classList.add("edit_button");
    ebtn.innerHTML = "EDIT";
    ebtn.style.position = "absolute";
    ebtn.style.backgroundColor = "silver";
    ebtn.style.padding = "2px 4px";
    ebtn.style.color = "white"
    ebtn.style.zIndex = 5;
    ebtn.style.right = "8px";
    ebtn.style.bottom = "8px";
    ebtn.style.cursor = "pointer";

    ebtn.addEventListener("click", function () {
        let editmode = ep.style.display != "none";
        if (editmode) {
            ep.style.display = "none";
            ebtn.innerHTML = "EDIT";
        } else {
            ep.style.display = "block";
            ebtn.innerHTML = "PREVIEW";
        }
    })
    //
    pp.appendChild(ebtn);
    //
    console.log(block)
    block.element.appendChild(pp);
    block.element.appendChild(ep);
    //
    block.addToPreview = function (e) {
        pp.appendChild(e);
        return e;
    }
    block.addToEditor = function (e) {
        ep.appendChild(e);
        return e;
    }
    block.goEditMode = function (e) {
        ep.style.display = "block";
        ebtn.innerHTML = "PREVIEW";

    }
    block.goPreviewMode = function (e) {
        ep.style.display = "none";
        ebtn.innerHTML = "EDIT";

    }
    block.isInEditMode = function () {
        return (ep.style.display != "none");
    }

}

/***/ }),

/***/ "./src/bled/ui.js":
/*!************************!*\
  !*** ./src/bled/ui.js ***!
  \************************/
/*! exports provided: icons, mycyan, Colours, Ask, tooltips, textTools, addPlusButton, addCommonStyles, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colours", function() { return Colours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTools", function() { return textTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommonStyles", function() { return addCommonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");


var icons = {};

icons.bold = __webpack_require__(/*! ./svg/text_bold.svg */ "./src/bled/svg/text_bold.svg");
icons.italic = __webpack_require__(/*! ./svg/text_italic.svg */ "./src/bled/svg/text_italic.svg");
icons.underline = __webpack_require__(/*! ./svg/text_underline.svg */ "./src/bled/svg/text_underline.svg");
icons.strike = __webpack_require__(/*! ./svg/text_strike.svg */ "./src/bled/svg/text_strike.svg");
icons.sup = __webpack_require__(/*! ./svg/text_sup.svg */ "./src/bled/svg/text_sup.svg");
icons.sub = __webpack_require__(/*! ./svg/text_sub.svg */ "./src/bled/svg/text_sub.svg");
icons.link = __webpack_require__(/*! ./svg/text_link.svg */ "./src/bled/svg/text_link.svg");

icons.header = __webpack_require__(/*! ./svg/header-24px.svg */ "./src/bled/svg/header-24px.svg");
icons.code = __webpack_require__(/*! ./svg/code-my-24px.svg */ "./src/bled/svg/code-my-24px.svg");
icons.raw = __webpack_require__(/*! ./svg/code-24px.svg */ "./src/bled/svg/code-24px.svg");
icons.noformat = __webpack_require__(/*! ./svg/remove-format.svg */ "./src/bled/svg/remove-format.svg");

icons.up = __webpack_require__(/*! ./svg/arrow_upward-24px.svg */ "./src/bled/svg/arrow_upward-24px.svg");
icons.down = __webpack_require__(/*! ./svg/arrow_downward-24px.svg */ "./src/bled/svg/arrow_downward-24px.svg");
icons.del = __webpack_require__(/*! ./svg/clear-24px.svg */ "./src/bled/svg/clear-24px.svg");
icons.add = __webpack_require__(/*! ./svg/add-24px.svg */ "./src/bled/svg/add-24px.svg");
icons.divider = __webpack_require__(/*! ./svg/divider-24px.svg */ "./src/bled/svg/divider-24px.svg");
icons.symbols = __webpack_require__(/*! ./svg/symbols_24px.svg */ "./src/bled/svg/symbols_24px.svg");

icons.material = {};

icons.material.bold = __webpack_require__(/*! ./svg/format_bold-24px.svg */ "./src/bled/svg/format_bold-24px.svg");
icons.material.italic = __webpack_require__(/*! ./svg/format_italic-24px.svg */ "./src/bled/svg/format_italic-24px.svg");
icons.material.underline = __webpack_require__(/*! ./svg/format_underlined-24px.svg */ "./src/bled/svg/format_underlined-24px.svg");
icons.material.strike = __webpack_require__(/*! ./svg/format_strikethrough-24px.svg */ "./src/bled/svg/format_strikethrough-24px.svg");
icons.material.link = __webpack_require__(/*! ./svg/link-24px.svg */ "./src/bled/svg/link-24px.svg");
icons.material.linkoff = __webpack_require__(/*! ./svg/link_off-24px.svg */ "./src/bled/svg/link_off-24px.svg");

icons.material.quote = __webpack_require__(/*! ./svg/format_quote-24px.svg */ "./src/bled/svg/format_quote-24px.svg");
icons.material.list = __webpack_require__(/*! ./svg/format_list_bulleted-24px.svg */ "./src/bled/svg/format_list_bulleted-24px.svg");
icons.material.video = __webpack_require__(/*! ./svg/videocam-24px.svg */ "./src/bled/svg/videocam-24px.svg");
icons.material.quote = __webpack_require__(/*! ./svg/format_quote-24px.svg */ "./src/bled/svg/format_quote-24px.svg");
icons.material.image = __webpack_require__(/*! ./svg/insert_photo-outlined-24px.svg */ "./src/bled/svg/insert_photo-outlined-24px.svg");
icons.material.paragraph = __webpack_require__(/*! ./svg/paragraph-remix-24px.svg */ "./src/bled/svg/paragraph-remix-24px.svg");



var mycyan = "#3ED9E3"; //remove
var Colours = {
    "light": "#3ED9E3",
    "dark": "#00A1AB",
    "pale": "#C4F7FA",

}

/*
export function injectStyle(ststr) {
    let e = document.querySelector("style#block_editor_injected_style");
    if (!e) {
        console.log("attaching stylesheet for style injection");
        e = document.createElement("style");
        e.id = "block_editor_injected_style";
        document.head.appendChild(e);    
    }
    e.innerHTML += ststr;
}
*/


function Ask(pr) {
    return new Promise(function (resolve, reject) {
        let r = prompt(pr);
        if (r) {
            resolve(r)
        } else {
            reject("No input")
        };
    })
}

function tooltips() {
    //console.log("engaging tooltips");
    let teststyle = document.createElement("style");
    teststyle.id = "test_style";
    teststyle.innerHTML = `.editortooltip{
        background-color: ${ Colours.dark};
        color: white;
        padding: 4px 8px;
    }`
    document.head.appendChild(teststyle);
    let tts = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
        backgroundColor: Colours.dark,
        color: "white"
    })
    let tt = document.createElement("div");
    tt.style.position = "absolute";
    tt.style.display = "none";
    tt.style.zIndex = 20;
    tt.style.pointerEvents = "none";

    let ttin = document.createElement("div");
    ttin.className = tts;
    ttin.classList.add("editortooltip")
    tt.appendChild(ttin);
    //ttin.style.backgroundColor = Colours.dark;
    //ttin.style.color = "white";
    ttin.style.pointerEvents = "none";
    ttin.style.fontSize = "12px";
    //ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "2px";
    ttin.style.boxShadow = "1px 1px 3px 2px #00000022";
    ttin.style.right = "50%";
    ttin.style.bottom = "16px";

    document.body.appendChild(tt);

    window.addEventListener("mousemove", function (e) {
        let ttb = tt.getBoundingClientRect().height;
        tt.style.top = (e.clientY - ttb + window.scrollY) + "px";
        tt.style.left = e.clientX + "px";

    })
    window.addEventListener("mouseover", function (e) {
        if (e.target && e.target.dataset.hint) {
            ttin.innerHTML = e.target.dataset.hint;
            // tt.style.top = e.clientY + "px";
            //  tt.style.left = e.clientX + "px";
            tt.style.display = "block";
        } else {
            tt.style.display = "none";
        }
    })
}

function getSymbol(posX, posY) {
    console.log("position" , posX , posY)
    const symbols = "«»“”–—·¶Ѣѣ¤₽€£×≈".split("");
    
    //create table
    return new Promise(function (res, rej) {
        let test = document.querySelector(".block_editor_symbols_table");
        if (test){
            test.remove();
            rej();
        }
        let symboltable = document.createElement("div");
        symboltable.classList.add("block_editor_symbols_table")
        symboltable.style.display = "flex";
        symboltable.style.flexWrap = "wrap";
        symboltable.style.position = "absolute";
        symboltable.style.width = "96px";
        symboltable.style.boxSizing = "content-box"
        symboltable.style.backgroundColor = "white";
        symboltable.style.borderColor = "black";
        symboltable.style.borderTop = "1px solid black";
        symboltable.style.borderLeft = "1px solid black";
        symboltable.style.position = "absolute";
        symboltable.style.top = posY + "px";
        symboltable.style.left = posX + "px";
        //populate
        symbols.forEach(function (z) {
            let sb = document.createElement("div");
            sb.style.display = "inline-block";
            sb.style.width = "24px";
            sb.style.height = "24px";
            sb.style.textAlign = "center";
            sb.style.borderBottom = "1px solid black";
            sb.style.borderRight = "1px solid black";
            sb.style.borderColor = '#000000';
            sb.style.boxSizing = "border-box"
            sb.innerText = z;
            sb.addEventListener("click", (e) => {
                //console.log(z);
               symboltable.remove();
               res(z);
            })
            symboltable.appendChild(sb);
        })
        //
        document.body.appendChild(symboltable);
    });
}

function textTools() {
    let current_element = null;
    let ttools = document.createElement("div");
    ttools.style.minWidth = "100px";
    ttools.classList.add("text_toolbox");
    //ttools.style.minHeight = "24px";
    ttools.style.backgroundColor = Colours.dark;
    ttools.style.position = "absolute";
    ttools.style.display = "none";
    ttools.style.padding = "0px 8px";
    console.log("append text tools")
    document.body.appendChild(ttools);
    //buttons
    function addButton(lbl, func, hint) {
        let b = document.createElement("div");
        b.style.display = "inline-block";
        b.innerHTML = lbl;
        b.style.width = "18px";
        b.style.height = "18px";
        b.style.fill = "white";
        b.style.overflow = "hidden";
        b.addEventListener("mousedown", func);
        b.classList.add("text_toolbox");
        b.style.cursor = "pointer";
        b.style.padding = "8px";
        b.onmouseover = () => b.style.fill = "black";
        b.onmouseout = () => b.style.fill = "white";
        let sv = b.querySelector("svg");
        sv.style.pointerEvents = "none"; //.style.pointerEvents("none");
        if (hint) {
            b.dataset.hint = hint
        };
        ttools.appendChild(b);
    }

    addButton(icons.material.bold, function (e) {
        //console.log("bold", document.getSelection())
        document.execCommand("bold");
        e.preventDefault();
    }, "Bold")
    addButton(icons.material.italic, function (e) {
        //console.log("italic", document.getSelection())
        document.execCommand("italic");
        e.preventDefault();
    }, "Italic")
    addButton(icons.material.underline, function (e) {
        //console.log("italic" , document.getSelection())
        document.execCommand("underline");
        e.preventDefault();
    }, "Underline")
    addButton(icons.material.strike, function (e) {
        //console.log("italic" , document.getSelection())
        document.execCommand("strikeThrough");
        e.preventDefault();
    }, "Strike")
    /*
    addButton("small" , function(e){
        console.log("small" , document.getSelection())
        document.execCommand("decreaseFontSize");
        e.preventDefault();
    })
    */
    addButton(icons.sup, function (e) {
        // console.log("italic" , document.getSelection())
        document.execCommand("superscript");
        e.preventDefault();
    }, "Superscript")
    addButton(icons.sub, function (e) {
        // console.log("italic" , document.getSelection())
        document.execCommand("subscript");
        e.preventDefault();
    }, "Subscript")
    addButton(icons.material.link, function (e) {
        Ask("Enter URL")
            .then(r => document.execCommand("createLink", false, unescape(r)))
            .catch(r => console.log(r));
        e.preventDefault();
    }, "Make link")
    addButton(icons.material.linkoff, function (e) {
        document.execCommand("unlink");
        e.preventDefault();
    }, "Remove link");

    addButton(icons.symbols, function (e) {
        //document.execCommand("unlink");
        const magic = "|#?";
        let prevtext = current_element.innerHTML;
        document.execCommand("insertText", false, magic);
        let textwithanchor = current_element.innerHTML;
        current_element.innerHTML = prevtext;
        let csel = document.getSelection();
        console.log("EVENT" , e)
        
        getSymbol(e.clientX , e.clientY+window.scrollY)
        .then( r=>{console.log('INPUT' ,r) ;  current_element.innerHTML = textwithanchor.replace(magic , r)})  
        .catch()      
        e.preventDefault();
    }, "Symbols");

    addButton(icons.noformat, function (e) {
        document.execCommand("removeFormat");
        let ifcolalpsed = document.getSelection().isCollapsed
        if (ifcolalpsed) {
            //console.log("CURRENT" , current_element , current_element.contenteditable)
            current_element.innerHTML = current_element.innerHTML.replace(/\<[^>]*\>/g, "");
        } else {
            document.execCommand("removeFormat");
        }
        e.preventDefault();
    }, "Remove formatting")

    //
    function testEditableContainer(el) {
        //console.log("test");
        let ce = el;
        //if(!ce){return null};
        while (!ce.getAttribute("contenteditable") && ce.nodeName != "BODY") {
            ce = ce.parentNode;
            if (!ce) {
                return null
            };
            //console.log("upto" , ce);
        }
        if (ce.getAttribute("contenteditable")) {
            return ce;
        } else {
            return null;
        }
    }

    document.body.addEventListener("click", function (e) {
        //console.log(e.target.getAttribute("contenteditable"));
        let eic = testEditableContainer(e.target);
        if (eic && !e.target.dataset.no_text_toolbox) {
            current_element = eic;
            //console.log("click" , ttools);
            let tgt = eic.getBoundingClientRect();
            ttools.style.left = tgt.left + "px";
            ttools.style.display = "flex";
            let tthe = ttools.getBoundingClientRect().height;
            ttools.style.top = (tgt.top - tthe + window.scrollY) + "px";

            //} else if (e.target.classList.contains("text_toolbox")) {
            //ttools.style.display = "block";
        } else {
            ttools.style.display = "none";
        }
    });
}
function addPlusButton(block, menu) {
    block.style.position = "relative";
    let menuhidden = true;
    if (!menu) {
        menu = [{
                "label": "test",
                "handler": function () {
                    console.log("menu clicked")
                }
            },
            {
                "label": "test2",
                "handler": function () {
                    console.log("menu2 clicked")
                }
            },
            {
                "label": "test3",
                "handler": function () {
                    console.log("menu3 clicked")
                }
            }
        ]
    }
    //menu
    let dd = document.createElement("div");
    dd.classList.add("block_editor_add_dropdown");
    dd.style.display = "none";
    dd.style.position = "absolute";
    dd.style.zIndex = 10;
    dd.style.top = "100%";
    dd.style.left = 0;
    dd.style.padding = "5px";
    dd.style.backgroundColor = "white";
    dd.style.borderRadius = "5px";
    dd.style.maxWidth = "100px";
    dd.style.boxShadow = "2px 2px 6px rgba(0%, 0%, 0%, 0.304)"
    //dd.style.border = "1px solid gray"
    menu.forEach(element => {
        let mi = document.createElement("div");
        mi.innerHTML = element.icon;
        //mi.style.backgroundColor = "white";
        mi.style.boxSizing = "borfer-box";
        mi.style.padding = "4px"
        mi.style.borderRadius = "5px";
        mi.style.margin = "0px";
        mi.style.cursor = "pointer";
        mi.style.display = "inline-block";
        mi.style.overflow = "hidden";
        mi.style.textAlign = "center";
        mi.style.fill = Colours.light;
        mi.style.color = Colours.light;
        mi.style.width = "24px";
        mi.style.height = "24px"
        let misvg = mi.querySelector("svg");
        if (misvg) {
            misvg.style.pointerEvents = "none";
            misvg.style.width = "24px";
            misvg.style.height = "24px";
        }
        mi.onmouseover = () => {
            mi.style.fill = "black";
            mi.style.color = "black"
        };
        mi.onmouseout = () => {
            mi.style.fill = Colours.light;
            mi.style.color = Colours.light
        };


        mi.dataset.hint = element.label;
        mi.addEventListener("click", e => {
            element.handler(block.dataset.block_id);
            dd.style.display = "none";
            menuhidden = true;
        });
        dd.appendChild(mi)
    });
    //
    block.appendChild(dd);


    let button = document.createElement("div");
    button.classList.add("ddown");
    button.style.width = "24px";
    button.style.height = "24px";
    button.style.left = "0px";
    button.style.fontSize = "24px";
    button.style.cursor = "pointer";
    button.style.bottom = "0px";
    button.style.position = "absolute";
    button.style.backgroundColor = "rgba(100%, 100%, 100%, 0.011)";
    button.style.textAlign = "center";
    button.style.fill = Colours.light;
    button.style.opacity = "0";
    button.style.display = "block"
    //button.style.borderRadius = "12px";
    button.style.transition = "opacity .5s";
    button.dataset.hint = "Add new block";
    button.innerHTML = icons.add;
    button.querySelector("svg").style.pointerEvents = "none";


    button.addEventListener("mouseover", function (e) {
        button.style.opacity = 1.0;
        button.style.zIndex = 5;
        e.preventDefault();
        return true;
    })

    button.addEventListener("click", function (e) {
        //menuhidden = !menuhidden;
        //document.querySelectorAll(".block_editor_add_dropdown")
        // .forEach(e=>e.style.display="none");
        let ishidden = dd.style.display == "none";
        //console.log(ishidden)
        if (!ishidden) {
            menuhidden = true;
            dd.style.display = "none"
        } else {
            menuhidden = false;
            dd.style.display = "block"
        }
    })

    block.addEventListener("mouseover", function (e) {

        button.style.opacity = 1.0;
        button.style.zIndex = 10;
        e.preventDefault();
        return true;
    })
    block.addEventListener("mouseout", function (e) {
        if (dd.style.display == "none") {
            button.style.opacity = 0;
            button.style.zIndex = "initial";
        }
    })
    block.appendChild(button);



}
function addCommonStyles(editorel) {
    let styleid = "blockeditor_common_styles";
    if (!document.getElementById(styleid)) {
        let stag = document.createElement("style");
        stag.id = styleid;
        stag.innerHTML =
            "*[contenteditable='true']:empty{ " +
            "background-color:" + Colours.pale + ";" +
            "border-bottom: 1px dashed " + Colours.dark + ";" +
            "min-height: 1rem;" +
            "min-width: 1rem;" +
            "display: block;" +
            "}" +
            ".block_editor_unit{" +
            "border: 1px solid transparent;" +
            "border-width: 1px 1px 1px 1px ;" +
            "}" +
            ".block_editor_unit:hover{" +
            "border-color:" + Colours.pale + ";" +
            "}" +
            "div.common_block_controls div:hover svg{fill:black;}"
        "div.ddown:hover svg{fill:black;}"
        editorel.appendChild(stag);
    }

}

function addBlockControls(block, items, ed) {
    /**
     * 
     * block_editor_unit
     */

    block.style.padding = "0 32px";
    block.style.width = "100%";
    block.style.margin = "0 -32px"
    if (!items && ed) {
        items = [{
                label: "Move block up",
                icon: icons.up,
                handler: function () {
                    ed.moveUp(block.dataset.block_id)
                }
            },
            {
                label: "Move block down",
                icon: icons.down,
                handler: function () {
                    ed.moveDown(block.dataset.block_id)
                }
            },
            {
                label: "Delete block",
                icon: icons.del,
                handler: function () {
                    ed.removeBlock(block.dataset.block_id)
                }
            }
        ]
    } else {
        items = [];
    }
    //
    block.style.position = "relative";
    let ourclass = "ctrls" + block.dataset.block_id;
    let ctrls = document.createElement("div");
    ctrls.classList.add("common_block_controls");
    ctrls.classList.add(ourclass);
    ctrls.style.position = "absolute";
    ctrls.style.top = "0px";
    ctrls.style.right = "0px";
    ctrls.style.width = "32px";
    ctrls.style.boxSizing = "border-box";
    ctrls.style.backgroundColor = "#ffffffee";
    //ctrls.style.borderLeft = "3px solid " + Colours.light;
    ctrls.style.color = "white";
    ctrls.style.textAlign = "center";
    ctrls.style.display = "none";
    ctrls.addEventListener("mouseover", () => {
        ctrls.style.zIndex = 6;
        ctrls.style.display = "block"
    });
    ctrls.addEventListener("mouseout", () => {
        ctrls.style.zIndex = "initial";
        ctrls.style.display = "none"
    });

    block.addEventListener("mouseover", () => {
        ctrls.style.zIndex = 5;
        ctrls.style.display = "block"
    });
    block.addEventListener("mouseout", () => {
        ctrls.style.zIndex = "initial";
        ctrls.style.display = "none"
    });



    items.forEach(function (e) {
        let mi = document.createElement("div");
        mi.innerHTML = e.icon;
        mi.querySelector("svg").style.pointerEvents = "none";
        mi.style.cursor = "pointer";
        mi.style.height = "24px";
        mi.style.fill = Colours.light;
        mi.style.overflow = "hidden";
        mi.addEventListener("click", function () {
            e.handler(block.dataset.block_id);
        });
        mi.dataset.hint = e.label;
        ctrls.appendChild(mi);
    });

    block.appendChild(ctrls)

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3Qvc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L3NoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L3dlYWstbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlYXRlLWVtb3Rpb24vZGlzdC9jcmVhdGUtZW1vdGlvbi5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW1vdGlvbi9kaXN0L2Vtb3Rpb24uZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9ibGVkL2Jsb2NrZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ibGVkL2NvcmVibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2FkZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYXJyb3dfZG93bndhcmQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Fycm93X3Vwd2FyZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvY2xlYXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtbXktMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2RpdmlkZXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9ib2xkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfaXRhbGljLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfc3RyaWtldGhyb3VnaC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X3VuZGVybGluZWQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2hlYWRlci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9saW5rLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9saW5rX29mZi0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvcGFyYWdyYXBoLXJlbWl4LTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9yZW1vdmUtZm9ybWF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvc3ltYm9sc18yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9ib2xkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9pdGFsaWMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X2xpbmsuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N0cmlrZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3ViLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3VuZGVybGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3ZpZGVvY2FtLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3Rlc3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvdWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1C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RUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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d0RBQVU7QUFDeEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL1dBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBR1Y7O0FBRVY7OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5QkFBeUIsZ0VBQWdFO0FBQzVHO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsbURBQW1EO0FBQ25ELDREQUE0RDtBQUM1RCw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QixjQUFjO0FBQ2QsZ0NBQWdDO0FBQ2hDLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsY0FBYztBQUNkLHNDQUFzQztBQUN0QywrQ0FBK0M7QUFDL0MsY0FBYztBQUNkLHFEQUFxRCxZQUFZO0FBQ2pFLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLEMiLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibGVkL3Rlc3RpbmcuanNcIik7XG4iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGh5c3VsdGFuL3N0eWxpcy5qcy90cmVlL21hc3Rlci9wbHVnaW5zL3J1bGUtc2hlZXRcbi8vIGlubGluZWQgdG8gYXZvaWQgdW1kIHdyYXBwZXIgYW5kIHBlZXJEZXAgd2FybmluZ3MvaW5zdGFsbGluZyBzdHlsaXNcbi8vIHNpbmNlIHdlIHVzZSBzdHlsaXMgYWZ0ZXIgY2xvc3VyZSBjb21waWxlclxudmFyIGRlbGltaXRlciA9ICcvKnwqLyc7XG52YXIgbmVlZGxlID0gZGVsaW1pdGVyICsgJ30nO1xuXG5mdW5jdGlvbiB0b1NoZWV0KGJsb2NrKSB7XG4gIGlmIChibG9jaykge1xuICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KGJsb2NrICsgJ30nKTtcbiAgfVxufVxuXG52YXIgU2hlZXQgPSB7XG4gIGN1cnJlbnQ6IG51bGxcbn07XG52YXIgcnVsZVNoZWV0ID0gZnVuY3Rpb24gcnVsZVNoZWV0KGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycywgcGFyZW50cywgbGluZSwgY29sdW1uLCBsZW5ndGgsIG5zLCBkZXB0aCwgYXQpIHtcbiAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgLy8gcHJvcGVydHlcbiAgICBjYXNlIDE6XG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAoY29udGVudC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gQGltcG9ydFxuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChjb250ZW50ICsgJzsnKTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBsXG5cbiAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICAgICAgICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICAgICAgICAgIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyBzZWxlY3RvclxuXG4gICAgY2FzZSAyOlxuICAgICAge1xuICAgICAgICBpZiAobnMgPT09IDApIHJldHVybiBjb250ZW50ICsgZGVsaW1pdGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyBhdC1ydWxlXG5cbiAgICBjYXNlIDM6XG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAobnMpIHtcbiAgICAgICAgICAvLyBAZm9udC1mYWNlLCBAcGFnZVxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChzZWxlY3RvcnNbMF0gKyBjb250ZW50KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGNhc2UgLTI6XG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQuc3BsaXQobmVlZGxlKS5mb3JFYWNoKHRvU2hlZXQpO1xuICAgICAgfVxuICB9XG59O1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5IHx8ICdjc3MnO1xuICB2YXIgc3R5bGlzT3B0aW9ucztcblxuICBpZiAob3B0aW9ucy5wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHN0eWxpc09wdGlvbnMgPSB7XG4gICAgICBwcmVmaXg6IG9wdGlvbnMucHJlZml4XG4gICAgfTtcbiAgfVxuXG4gIHZhciBzdHlsaXMgPSBuZXcgU3R5bGlzKHN0eWxpc09wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGlmICgvW15hLXotXS8udGVzdChrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbW90aW9uIGtleSBtdXN0IG9ubHkgY29udGFpbiBsb3dlciBjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIGFuZCAtIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHBhc3NlZFwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5zZXJ0ZWQgPSB7fTsgLy8gJEZsb3dGaXhNZVxuXG4gIHZhciBjb250YWluZXI7XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbi1cIiArIGtleSArIFwiXVwiKTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uLVwiICsga2V5KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBhdHRyaWIuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpbnNlcnRlZFtpZF0gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT09IGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcblxuICB7XG4gICAgc3R5bGlzLnVzZShvcHRpb25zLnN0eWxpc1BsdWdpbnMpKHJ1bGVTaGVldCk7XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIHZhciBuYW1lID0gc2VyaWFsaXplZC5uYW1lO1xuICAgICAgU2hlZXQuY3VycmVudCA9IHNoZWV0O1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtYXAgPSBzZXJpYWxpemVkLm1hcDtcbiAgICAgICAgU2hlZXQuY3VycmVudCA9IHtcbiAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgICAgICAgICBzaGVldC5pbnNlcnQocnVsZSArIG1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IsIHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW25hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZjczNzFhNGNkN2U2MDA5ZWY2MWQwYVxuICAgIHZhciBjb21tZW50U3RhcnQgPSAvXFwvXFwqL2c7XG4gICAgdmFyIGNvbW1lbnRFbmQgPSAvXFwqXFwvL2c7XG4gICAgc3R5bGlzLnVzZShmdW5jdGlvbiAoY29udGV4dCwgY29udGVudCkge1xuICAgICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2hpbGUgKGNvbW1lbnRTdGFydC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgIGNvbW1lbnRFbmQubGFzdEluZGV4ID0gY29tbWVudFN0YXJ0Lmxhc3RJbmRleDtcblxuICAgICAgICAgICAgICBpZiAoY29tbWVudEVuZC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IGNvbW1lbnRFbmQubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHN0eWxlcyBoYXZlIGFuIHVudGVybWluYXRlZCBjb21tZW50IChcIi8qXCIgd2l0aG91dCBjb3JyZXNwb25kaW5nIFwiKi9cIikuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycykge1xuICAgICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcbiAgICAgICAgICAgIHZhciB1bnNhZmVQc2V1ZG9DbGFzc2VzID0gY29udGVudC5tYXRjaCgvKDpmaXJzdHw6bnRofDpudGgtbGFzdCktY2hpbGQvZyk7XG5cbiAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzc2VzICYmIGNhY2hlLmNvbXBhdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB1bnNhZmVQc2V1ZG9DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKHVuc2FmZVBzZXVkb0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZVJlZ0V4cCA9IG5ldyBSZWdFeHAodW5zYWZlUHNldWRvQ2xhc3MgKyBcIi4qXFxcXC9cXFxcKiBcIiArIGZsYWcgKyBcIiBcXFxcKlxcXFwvXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmUgPSBpZ25vcmVSZWdFeHAudGVzdChjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzcyAmJiAhaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5XG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYWNoZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBtdXJtdXJoYXNoMiB2aWEgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzL2Jsb2IvbWFzdGVyL211cm11cmhhc2gyX2djLmpzXG5mdW5jdGlvbiBtdXJtdXJoYXNoMl8zMl9nYyhzdHIpIHtcbiAgdmFyIGwgPSBzdHIubGVuZ3RoLFxuICAgICAgaCA9IGwgXiBsLFxuICAgICAgaSA9IDAsXG4gICAgICBrO1xuXG4gIHdoaWxlIChsID49IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9IChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChrID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gICAgayBePSBrID4+PiAyNDtcbiAgICBrID0gKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGsgPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KTtcbiAgICBoID0gKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGggPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KSBeIGs7XG4gICAgbCAtPSA0O1xuICAgICsraTtcbiAgfVxuXG4gIHN3aXRjaCAobCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gIH1cblxuICBoIF49IGggPj4+IDEzO1xuICBoID0gKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGggPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KTtcbiAgaCBePSBoID4+PiAxNTtcbiAgcmV0dXJuIChoID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11cm11cmhhc2gyXzMyX2djO1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IgPSBcIllvdSBoYXZlIGlsbGVnYWwgZXNjYXBlIHNlcXVlbmNlIGluIHlvdXIgdGVtcGxhdGUgbGl0ZXJhbCwgbW9zdCBsaWtlbHkgaW5zaWRlIGNvbnRlbnQncyBwcm9wZXJ0eSB2YWx1ZS5cXG5CZWNhdXNlIHlvdSB3cml0ZSB5b3VyIENTUyBpbnNpZGUgYSBKYXZhU2NyaXB0IHN0cmluZyB5b3UgYWN0dWFsbHkgaGF2ZSB0byBkbyBkb3VibGUgZXNjYXBpbmcsIHNvIGZvciBleGFtcGxlIFxcXCJjb250ZW50OiAnXFxcXDAwZDcnO1xcXCIgc2hvdWxkIGJlY29tZSBcXFwiY29udGVudDogJ1xcXFxcXFxcMDBkNyc7XFxcIi5cXG5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6XFxuaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvVGVtcGxhdGVfbGl0ZXJhbHMjRVMyMDE4X3JldmlzaW9uX29mX2lsbGVnYWxfZXNjYXBlX3NlcXVlbmNlc1wiO1xudmFyIFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SID0gXCJZb3UgaGF2ZSBwYXNzZWQgaW4gZmFsc3kgdmFsdWUgYXMgc3R5bGUgb2JqZWN0J3Mga2V5IChjYW4gaGFwcGVuIHdoZW4gaW4gZXhhbXBsZSB5b3UgcGFzcyB1bmV4cG9ydGVkIGNvbXBvbmVudCBhcyBjb21wdXRlZCBrZXkpLlwiO1xudmFyIGh5cGhlbmF0ZVJlZ2V4ID0gL1tBLVpdfF5tcy9nO1xudmFyIGFuaW1hdGlvblJlZ2V4ID0gL19FTU9fKFteX10rPylfKFteXSo/KV9FTU9fL2c7XG5cbnZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkuY2hhckNvZGVBdCgxKSA9PT0gNDU7XG59O1xuXG52YXIgaXNQcm9jZXNzYWJsZVZhbHVlID0gZnVuY3Rpb24gaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xufTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBtZW1vaXplKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgbmFtZTogcDEsXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXG4gICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaWYgKHVuaXRsZXNzW2tleV0gIT09IDEgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBjb250ZW50VmFsdWVQYXR0ZXJuID0gLyhhdHRyfGNhbGN8Y291bnRlcnM/fHVybClcXCgvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnY291bnRlcicsICdvcGVuLXF1b3RlJywgJ2Nsb3NlLXF1b3RlJywgJ25vLW9wZW4tcXVvdGUnLCAnbm8tY2xvc2UtcXVvdGUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3Ugc2VlbSB0byBiZSB1c2luZyBhIHZhbHVlIGZvciAnY29udGVudCcgd2l0aG91dCBxdW90ZXMsIHRyeSByZXBsYWNpbmcgaXQgd2l0aCBgY29udGVudDogJ1xcXCJcIiArIHZhbHVlICsgXCJcXFwiJ2BcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2Nlc3NlZCA9IG9sZFByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpO1xuXG4gICAgaWYgKHByb2Nlc3NlZCAhPT0gJycgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiBrZXkuaW5kZXhPZignLScpICE9PSAtMSAmJiBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVXNpbmcga2ViYWItY2FzZSBmb3IgY3NzIHByb3BlcnRpZXMgaW4gb2JqZWN0cyBpcyBub3Qgc3VwcG9ydGVkLiBEaWQgeW91IG1lYW4gXCIgKyBrZXkucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKS5yZXBsYWNlKGh5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChzdHIsIF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSkgKyBcIj9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgfTtcbn1cblxudmFyIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzID0gdHJ1ZTtcblxuZnVuY3Rpb24gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbiwgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbikge1xuICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb24uX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi50b1N0cmluZygpID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZW9mIGludGVycG9sYXRpb24pIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uYW5pbSA9PT0gMSkge1xuICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgIG5hbWU6IGludGVycG9sYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczogaW50ZXJwb2xhdGlvbi5zdHlsZXMsXG4gICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBuZXh0ID0gaW50ZXJwb2xhdGlvbi5uZXh0O1xuXG4gICAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBtb3N0IGVmZmljaWVudCB0aGluZyBldmVyIGJ1dCB0aGlzIGlzIGEgcHJldHR5IHJhcmUgY2FzZVxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlIHdpbGwgYmUgdmVyeSBmZXcgaXRlcmF0aW9ucyBvZiB0aGlzIGdlbmVyYWxseVxuICAgICAgICAgICAgd2hpbGUgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlczogbmV4dC5zdHlsZXMsXG4gICAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlcyA9IGludGVycG9sYXRpb24uc3R5bGVzICsgXCI7XCI7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gaW50ZXJwb2xhdGlvbi5tYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQsIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGdW5jdGlvbnMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIGluIGNzcyBjYWxscyB3aWxsIGJlIHN0cmluZ2lmaWVkLlxcbicgKyAnSWYgeW91IHdhbnQgdG8gaGF2ZSBhIGNzcyBjYWxsIGJhc2VkIG9uIHByb3BzLCBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjc3MgY2FsbCBsaWtlIHRoaXNcXG4nICsgJ2xldCBkeW5hbWljU3R5bGUgPSAocHJvcHMpID0+IGNzc2Bjb2xvcjogJHtwcm9wcy5jb2xvcn1gXFxuJyArICdJdCBjYW4gYmUgY2FsbGVkIGRpcmVjdGx5IHdpdGggcHJvcHMgb3IgaW50ZXJwb2xhdGVkIGluIGEgc3R5bGVkIGNhbGwgbGlrZSB0aGlzXFxuJyArIFwibGV0IFNvbWVDb21wb25lbnQgPSBzdHlsZWQoJ2RpdicpYCR7ZHluYW1pY1N0eWxlfWBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuICAgICAgICB2YXIgcmVwbGFjZWQgPSBpbnRlcnBvbGF0aW9uLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgdmFyIGZha2VWYXJOYW1lID0gXCJhbmltYXRpb25cIiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xuICAgICAgICAgIHJldHVybiBcIiR7XCIgKyBmYWtlVmFyTmFtZSArIFwifVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdga2V5ZnJhbWVzYCBvdXRwdXQgZ290IGludGVycG9sYXRlZCBpbnRvIHBsYWluIHN0cmluZywgcGxlYXNlIHdyYXAgaXQgd2l0aCBgY3NzYC5cXG5cXG4nICsgJ0luc3RlYWQgb2YgZG9pbmcgdGhpczpcXG5cXG4nICsgW10uY29uY2F0KG1hdGNoZWQsIFtcImBcIiArIHJlcGxhY2VkICsgXCJgXCJdKS5qb2luKCdcXG4nKSArICdcXG5cXG5Zb3Ugc2hvdWxkIHdyYXAgaXQgd2l0aCBgY3NzYCBsaWtlIHRoaXM6XFxuXFxuJyArIChcImNzc2BcIiArIHJlcGxhY2VkICsgXCJgXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgfSAvLyBmaW5hbGl6ZSBzdHJpbmcgdmFsdWVzIChyZWd1bGFyIHN0cmluZ3MgYW5kIGZ1bmN0aW9ucyBpbnRlcnBvbGF0ZWQgaW50byBjc3MgY2FsbHMpXG5cblxuICBpZiAocmVnaXN0ZXJlZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICB2YXIgY2FjaGVkID0gcmVnaXN0ZXJlZFtpbnRlcnBvbGF0aW9uXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uICYmIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzICYmIGNhY2hlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcignSW50ZXJwb2xhdGluZyBhIGNsYXNzTmFtZSBmcm9tIGNzc2BgIGlzIG5vdCByZWNvbW1lbmRlZCBhbmQgd2lsbCBjYXVzZSBwcm9ibGVtcyB3aXRoIGNvbXBvc2l0aW9uLlxcbicgKyAnSW50ZXJwb2xhdGluZyBhIGNsYXNzTmFtZSBmcm9tIGNzc2BgIHdpbGwgYmUgY29tcGxldGVseSB1bnN1cHBvcnRlZCBpbiBhIGZ1dHVyZSBtYWpvciB2ZXJzaW9uIG9mIEVtb3Rpb24nKTtcbiAgICBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkICYmICFjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uID8gY2FjaGVkIDogaW50ZXJwb2xhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XG4gIHZhciBzdHJpbmcgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmpbaV0sIGZhbHNlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIHJlZ2lzdGVyZWRbdmFsdWVdICsgXCJ9XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGJhYmVsLXBsdWdpbi1lbW90aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycgJiYgKHJlZ2lzdGVyZWQgPT0gbnVsbCB8fCByZWdpc3RlcmVkW3ZhbHVlWzBdXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB2YWx1ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xuICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUsIGZhbHNlKTtcblxuICAgICAgICAgIHN3aXRjaCAoX2tleSkge1xuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfa2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO1xcbntdKylcXHMqOy9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHNvdXJjZU1hcFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncywgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgfVxuXG4gICAgc3R5bGVzICs9IHN0cmluZ3NbMF07XG4gIH0gLy8gd2Ugc3RhcnQgYXQgMSBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIGZpcnN0IGFyZ1xuXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGFyZ3NbaV0sIHN0eWxlcy5jaGFyQ29kZUF0KHN0eWxlcy5sZW5ndGggLSAxKSA9PT0gNDYpO1xuXG4gICAgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHN0cmluZ3NbaV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZU1hcDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0eWxlcyA9IHN0eWxlcy5yZXBsYWNlKHNvdXJjZU1hcFBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgc291cmNlTWFwID0gbWF0Y2g7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0gLy8gdXNpbmcgYSBnbG9iYWwgcmVnZXggd2l0aCAuZXhlYyBpcyBzdGF0ZWZ1bCBzbyBsYXN0SW5kZXggaGFzIHRvIGJlIHJlc2V0IGVhY2ggdGltZVxuXG5cbiAgbGFiZWxQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gIHZhciBpZGVudGlmaWVyTmFtZSA9ICcnO1xuICB2YXIgbWF0Y2g7IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWI4MDljMmNmMjk0OTgwMGEwZjYxZmI1XG5cbiAgd2hpbGUgKChtYXRjaCA9IGxhYmVsUGF0dGVybi5leGVjKHN0eWxlcykpICE9PSBudWxsKSB7XG4gICAgaWRlbnRpZmllck5hbWUgKz0gJy0nICsgLy8gJEZsb3dGaXhNZSB3ZSBrbm93IGl0J3Mgbm90IG51bGxcbiAgICBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFNlcmlhbGl6ZWRTdHlsZXMgdHlwZSBkb2Vzbid0IGhhdmUgdG9TdHJpbmcgcHJvcGVydHkgKGFuZCB3ZSBkb24ndCB3YW50IHRvIGFkZCBpdClcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgbWFwOiBzb3VyY2VNYXAsXG4gICAgICBuZXh0OiBjdXJzb3IsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufTtcblxuZXhwb3J0IHsgc2VyaWFsaXplU3R5bGVzIH07XG4iLCIvKlxuXG5CYXNlZCBvZmYgZ2xhbW9yJ3MgU3R5bGVTaGVldCwgdGhhbmtzIFN1bmlsIOKdpO+4j1xuXG5oaWdoIHBlcmZvcm1hbmNlIFN0eWxlU2hlZXQgZm9yIGNzcy1pbi1qcyBzeXN0ZW1zXG5cbi0gdXNlcyBtdWx0aXBsZSBzdHlsZSB0YWdzIGJlaGluZCB0aGUgc2NlbmVzIGZvciBtaWxsaW9ucyBvZiBydWxlc1xuLSB1c2VzIGBpbnNlcnRSdWxlYCBmb3IgYXBwZW5kaW5nIGluIHByb2R1Y3Rpb24gZm9yICptdWNoKiBmYXN0ZXIgcGVyZm9ybWFuY2VcblxuLy8gdXNhZ2VcblxuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0J1xuXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KHsga2V5OiAnJywgY29udGFpbmVyOiBkb2N1bWVudC5oZWFkIH0pXG5cbnN0eWxlU2hlZXQuaW5zZXJ0KCcjYm94IHsgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9Jylcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXRcblxuc3R5bGVTaGVldC5mbHVzaCgpXG4tIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXQgb2YgYWxsIGl0cyBjb250ZW50c1xuXG4qL1xuLy8gJEZsb3dGaXhNZVxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdGlvbnMua2V5KTtcblxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRpb25zLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA6IG9wdGlvbnMuc3BlZWR5O1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgICB0aGlzLm5vbmNlID0gb3B0aW9ucy5ub25jZTsgLy8ga2V5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSwgaXQncyB1c2VkIHRvIGlkZW50aWZ5IGRpZmZlcmVudCBzaGVldHNcblxuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdmFyIF90YWcgPSBjcmVhdGVTdHlsZUVsZW1lbnQodGhpcyk7XG5cbiAgICAgIHZhciBiZWZvcmU7XG5cbiAgICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMuYmVmb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKF90YWcsIGJlZm9yZSk7XG4gICAgICB0aGlzLnRhZ3MucHVzaChfdGFnKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXTtcblxuICAgIGlmICh0aGlzLmlzU3BlZWR5KSB7XG4gICAgICB2YXIgc2hlZXQgPSBzaGVldEZvclRhZyh0YWcpO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyB0aGlzIGlzIGEgcmVhbGx5IGhvdCBwYXRoXG4gICAgICAgIC8vIHdlIGNoZWNrIHRoZSBzZWNvbmQgY2hhcmFjdGVyIGZpcnN0IGJlY2F1c2UgaGF2aW5nIFwiaVwiXG4gICAgICAgIC8vIGFzIHRoZSBzZWNvbmQgY2hhcmFjdGVyIHdpbGwgaGFwcGVuIGxlc3Mgb2Z0ZW4gdGhhblxuICAgICAgICAvLyBoYXZpbmcgXCJAXCIgYXMgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICB2YXIgaXNJbXBvcnRSdWxlID0gcnVsZS5jaGFyQ29kZUF0KDEpID09PSAxMDUgJiYgcnVsZS5jaGFyQ29kZUF0KDApID09PSA2NDsgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuXG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgLy8gd2UgbmVlZCB0byBpbnNlcnQgQGltcG9ydCBydWxlcyBiZWZvcmUgYW55dGhpbmcgZWxzZVxuICAgICAgICAvLyBvdGhlcndpc2UgdGhlcmUgd2lsbCBiZSBhbiBlcnJvclxuICAgICAgICAvLyB0ZWNobmljYWxseSB0aGlzIG1lYW5zIHRoYXQgdGhlIEBpbXBvcnQgcnVsZXMgd2lsbFxuICAgICAgICAvLyBfdXN1YWxseV8obm90IGFsd2F5cyBzaW5jZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBzdHlsZSB0YWdzKVxuICAgICAgICAvLyBiZSB0aGUgZmlyc3Qgb25lcyBpbiBwcm9kIGFuZCBnZW5lcmFsbHkgbGF0ZXIgaW4gZGV2XG4gICAgICAgIC8vIHRoaXMgc2hvdWxkbid0IHJlYWxseSBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGQgdGhvdWdoXG4gICAgICAgIC8vIEBpbXBvcnQgaXMgZ2VuZXJhbGx5IG9ubHkgdXNlZCBmb3IgZm9udCBmYWNlcyBmcm9tIGdvb2dsZSBmb250cyBhbmQgZXRjLlxuICAgICAgICAvLyBzbyB3aGlsZSB0aGlzIGNvdWxkIGJlIHRlY2huaWNhbGx5IGNvcnJlY3QgdGhlbiBpdCB3b3VsZCBiZSBzbG93ZXIgYW5kIGxhcmdlclxuICAgICAgICAvLyBmb3IgYSB0aW55IGJpdCBvZiBjb3JyZWN0bmVzcyB0aGF0IHdvbid0IG1hdHRlciBpbiB0aGUgcmVhbCB3b3JsZFxuICAgICAgICBpc0ltcG9ydFJ1bGUgPyAwIDogc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJ2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmF3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByYXdDbGFzc05hbWU7XG59XG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKCAvLyB3ZSBvbmx5IG5lZWQgdG8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgaWYgdGhlXG4gIC8vIGNsYXNzIG5hbWUgY291bGQgYmUgdXNlZCBmdXJ0aGVyIGRvd25cbiAgLy8gdGhlIHRyZWUgYnV0IGlmIGl0J3MgYSBzdHJpbmcgdGFnLCB3ZSBrbm93IGl0IHdvbid0XG4gIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gYWRkIGl0IHRvIHJlZ2lzdGVyZWQgY2FjaGUuXG4gIC8vIHRoaXMgaW1wcm92ZXMgbWVtb3J5IHVzYWdlIHNpbmNlIHdlIGNhbiBhdm9pZCBzdG9yaW5nIHRoZSB3aG9sZSBzdHlsZSBzdHJpbmdcbiAgKGlzU3RyaW5nVGFnID09PSBmYWxzZSB8fCAvLyB3ZSBuZWVkIHRvIGFsd2F5cyBzdG9yZSBpdCBpZiB3ZSdyZSBpbiBjb21wYXQgbW9kZSBhbmRcbiAgLy8gaW4gbm9kZSBzaW5jZSBlbW90aW9uLXNlcnZlciByZWxpZXMgb24gd2hldGhlciBhIHN0eWxlIGlzIGluXG4gIC8vIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIGtub3cgd2hldGhlciBhIHN0eWxlIGlzIGdsb2JhbCBvciBub3RcbiAgLy8gYWxzbywgbm90ZSB0aGF0IHRoaXMgY2hlY2sgd2lsbCBiZSBkZWFkIGNvZGUgZWxpbWluYXRlZCBpbiB0aGUgYnJvd3NlclxuICBpc0Jyb3dzZXIgPT09IGZhbHNlICYmIGNhY2hlLmNvbXBhdCAhPT0gdW5kZWZpbmVkKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChcIi5cIiArIGNsYXNzTmFtZSwgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9O1xuIiwidmFyIHdlYWtNZW1vaXplID0gZnVuY3Rpb24gd2Vha01lbW9pemUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lIGZsb3cgZG9lc24ndCBpbmNsdWRlIGFsbCBub24tcHJpbWl0aXZlIHR5cGVzIGFzIGFsbG93ZWQgZm9yIHdlYWttYXBzXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlLmhhcyhhcmcpKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IGZ1bmMoYXJnKTtcbiAgICBjYWNoZS5zZXQoYXJnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWFrTWVtb2l6ZTtcbiIsImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuXG5mdW5jdGlvbiBpbnNlcnRXaXRob3V0U2NvcGluZyhjYWNoZSwgc2VyaWFsaXplZCkge1xuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNhY2hlLmluc2VydCgnJywgc2VyaWFsaXplZCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgY3JlYXRlRW1vdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb24ob3B0aW9ucykge1xuICB2YXIgY2FjaGUgPSBjcmVhdGVDYWNoZShvcHRpb25zKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGNhY2hlLnNoZWV0LnNwZWVkeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuY3RyICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NwZWVkeSBtdXN0IGJlIGNoYW5nZWQgYmVmb3JlIGFueSBydWxlcyBhcmUgaW5zZXJ0ZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gdmFsdWU7XG4gIH07XG5cbiAgY2FjaGUuY29tcGF0ID0gdHJ1ZTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkLCB1bmRlZmluZWQpO1xuICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgIHJldHVybiBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgfTtcblxuICB2YXIga2V5ZnJhbWVzID0gZnVuY3Rpb24ga2V5ZnJhbWVzKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNhY2hlLnJlZ2lzdGVyZWQpO1xuICAgIHZhciBhbmltYXRpb24gPSBcImFuaW1hdGlvbi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgICBpbnNlcnRXaXRob3V0U2NvcGluZyhjYWNoZSwge1xuICAgICAgbmFtZTogc2VyaWFsaXplZC5uYW1lLFxuICAgICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBhbmltYXRpb24gKyBcIntcIiArIHNlcmlhbGl6ZWQuc3R5bGVzICsgXCJ9XCJcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pbWF0aW9uO1xuICB9O1xuXG4gIHZhciBpbmplY3RHbG9iYWwgPSBmdW5jdGlvbiBpbmplY3RHbG9iYWwoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG4gICAgaW5zZXJ0V2l0aG91dFNjb3BpbmcoY2FjaGUsIHNlcmlhbGl6ZWQpO1xuICB9O1xuXG4gIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShjYWNoZS5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIGluamVjdEdsb2JhbDogaW5qZWN0R2xvYmFsLFxuICAgIGtleWZyYW1lczoga2V5ZnJhbWVzLFxuICAgIGh5ZHJhdGU6IGZ1bmN0aW9uIGh5ZHJhdGUoaWRzKSB7XG4gICAgICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW2tleV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmbHVzaDogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICBjYWNoZS5yZWdpc3RlcmVkID0ge307XG4gICAgICBjYWNoZS5pbnNlcnRlZCA9IHt9O1xuICAgICAgY2FjaGUuc2hlZXQuZmx1c2goKTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBzaGVldDogY2FjaGUuc2hlZXQsXG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIGdldFJlZ2lzdGVyZWRTdHlsZXM6IGdldFJlZ2lzdGVyZWRTdHlsZXMuYmluZChudWxsLCBjYWNoZS5yZWdpc3RlcmVkKSxcbiAgICBtZXJnZTogbWVyZ2UuYmluZChudWxsLCBjYWNoZS5yZWdpc3RlcmVkLCBjc3MpXG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbW90aW9uO1xuIiwiaW1wb3J0IGNyZWF0ZUVtb3Rpb24gZnJvbSAnY3JlYXRlLWVtb3Rpb24nO1xuXG52YXIgX2NyZWF0ZUVtb3Rpb24gPSBjcmVhdGVFbW90aW9uKCksXG4gICAgZmx1c2ggPSBfY3JlYXRlRW1vdGlvbi5mbHVzaCxcbiAgICBoeWRyYXRlID0gX2NyZWF0ZUVtb3Rpb24uaHlkcmF0ZSxcbiAgICBjeCA9IF9jcmVhdGVFbW90aW9uLmN4LFxuICAgIG1lcmdlID0gX2NyZWF0ZUVtb3Rpb24ubWVyZ2UsXG4gICAgZ2V0UmVnaXN0ZXJlZFN0eWxlcyA9IF9jcmVhdGVFbW90aW9uLmdldFJlZ2lzdGVyZWRTdHlsZXMsXG4gICAgaW5qZWN0R2xvYmFsID0gX2NyZWF0ZUVtb3Rpb24uaW5qZWN0R2xvYmFsLFxuICAgIGtleWZyYW1lcyA9IF9jcmVhdGVFbW90aW9uLmtleWZyYW1lcyxcbiAgICBjc3MgPSBfY3JlYXRlRW1vdGlvbi5jc3MsXG4gICAgc2hlZXQgPSBfY3JlYXRlRW1vdGlvbi5zaGVldCxcbiAgICBjYWNoZSA9IF9jcmVhdGVFbW90aW9uLmNhY2hlO1xuXG5leHBvcnQgeyBjYWNoZSwgY3NzLCBjeCwgZmx1c2gsIGdldFJlZ2lzdGVyZWRTdHlsZXMsIGh5ZHJhdGUsIGluamVjdEdsb2JhbCwga2V5ZnJhbWVzLCBtZXJnZSwgc2hlZXQgfTtcbiIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge2NvbnN0cnVjdG9ycyBhcyBDb3JlYmxvY2tzIH0gICBmcm9tIFwiLi9jb3JlYmxvY2tzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0VkaXRvcih7XG4gICAgc2VsZWN0b3Jcbn0pIHtcbiAgICBjb25zdCBteSA9IHRoaXM7XG4gICAgLy9cbiAgICBsZXQgbWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX291dGVyX2NvbnRhaW5lclwiKTtcbiAgICBtaW5lLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIG1pbmUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGV5LmFwcGVuZENoaWxkKG1pbmUpO1xuICAgIHRoaXMuZWxlbWVudCA9IG1pbmU7IC8vdGhpcyBlbGVtZW50IGlzIG1pbmVcblxuXG4gICAgdGhpcy5lZGl0b3JzID0ge1xuICAgICAgICAvL1wiemVyb1wiOntcbiAgICAgICAgLy9cbiAgICAgICAgLy99XG4gICAgfTsgLy8gbnVsbDsgLy9wYXJhbXMuZWRpdG9yczsgLy8gIGF2YWlsYWJsZSBibG9ja3MgZWRpdG9yc1xuICAgIHRoaXMuYmxvY2tzID0gbnVsbDsgLy8gYmxvY2tzIGFycmF5XG4gICAgdGhpcy5hZGRNZW51ID0gW107XG5cbiAgICB2YXIgX2N1cnJlbnRfaWQgPSAwO1xuXG4gICAgdGhpcy5fbWFrZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY3VycmVudF9pZCsrO1xuICAgICAgICByZXR1cm4gX2N1cnJlbnRfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGxvYWQgPSBmdW5jdGlvbiAoZiwgdGVzdHVybCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RpbmcgdXBsb2FkXCIsIGYpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCIxXCIgLFxuICAgICAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgIHVybDogdGVzdHVybCA/IHRlc3R1cmwgOiBcImtpdHR5LmpwZWdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRVcGxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIHRoaXMudXBsb2FkID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuc2V0QmxvY2tzID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgICAgICBtaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLl9jdXJyZW50X2lkID0gMTtcbiAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgYmxvY2tzLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZShlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhleS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBVSS50b29sdGlwcygpO1xuICAgICAgICBVSS50ZXh0VG9vbHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICAvL2FkZCBzZXJvIGJsb2NrXG5cbiAgICAgICAgLy90aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkaXRvcnMpXG4gICAgICAgIC8vXCJhZGRcIiBtZW51XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZWRpdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWRkZWQgaGFuZGxlciBmb3JcIiwgZSk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbXkuZWRpdG9yc1tlXTtcbiAgICAgICAgICAgIG15LmFkZE1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVmaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXkuYWRkTmV3QmxvY2soZSwgbnVsbCwgcmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vWmVybyBibG9ja1xuXG4gICAgICAgIGxldCB6ZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgemVyby5jbGFzc0xpc3QuYWRkKFwic3RhcnRpbmdfYmxvY2tcIik7XG4gICAgICAgIC8vemVyby5zdHlsZS5oZWlnaHQgPSBcIjhweFwiO1xuICAgICAgICB6ZXJvLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luTGVmdCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5zdHlsZS5wYWRkaW5nID0gXCIwcHggMzJweFwiXG4gICAgICAgIHplcm8uZGF0YXNldC5ibG9ja19pZCA9IFwic3RhcnRcIjtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJLkNvbG91cnMubGlnaHQ7XG4gICAgICAgIHJlY3Quc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHJlY3QuaW5uZXJIVE1MID0gXCJFRElUIE1PREVcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5wYWRkaW5nID0gXCIwLjVlbSAwcHhcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gXCIuNWVtXCI7XG4gICAgICAgIHJlY3Quc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIHJlY3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgIHJlY3Quc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgemVyby5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgVUkuYWRkUGx1c0J1dHRvbih6ZXJvLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBtaW5lLmFwcGVuZENoaWxkKHplcm8pO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLnNldEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAvL3N0YXJ0IFVJXG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgICAgIFVJLnRleHRUb29scygpO1xuICAgICAgICBVSS5hZGRDb21tb25TdHlsZXModGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9ja3NbaWRdO1xuICAgIH1cblxuICAgIHRoaXMuSUQySW5kZXggPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHIgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhc2V0LmJsb2NrX2lkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgciA9IGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHRoaXMuSW5kZXgySUQgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCkuZGF0YXNldC5ibG9ja19pZDtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0odGhpcy5JRDJJbmRleChpZCkpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXMuYWRkTmV3QmxvY2soZC50eXBlLCBkLmRhdGEsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMubW92ZVVwID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgaWYgKGJpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9maW5kIHByZXYgYmxvY2tcbiAgICAgICAgbGV0IHVwcGVyID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCAtIDEpO1xuICAgICAgICBpZiAodXBwZXIpIHtcbiAgICAgICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCB1cHBlcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubW92ZURvd24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2xhc3Q/XG4gICAgICAgIGlmIChiaW5kZXggKyAxID09IE9iamVjdC5rZXlzKHRoaXMuYmxvY2tzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dG5leHQgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4ICsgMik7XG4gICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgIGlmIChuZXh0bmV4dCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgbmV4dG5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy93ZSBhdCBwcmVsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGVibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpc3RlckVkaXRvciA9IGZ1bmN0aW9uICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIG1ha2UsXG4gICAgICAgIGljb24sXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBwYXN0ZVxuICAgIH0pIHtcbiAgICAgICAgdGhpcy5lZGl0b3JzW3R5cGVdID0ge1xuICAgICAgICAgICAgbWFrZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIHBhc3RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c09uID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiZiA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgIGJmLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9jayA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCByZWZpZCkgeyAvL3JlZj1pbnN0ZXJ0IGFmdGVyIHRoYXQgYmxvY2tcbiAgICAgICAgLy9pZiB0aGVyZSBpcyByZWYgaWQsIHdlIGhhdmUgdG8gaW5zZXJ0IGFmdGVyXG4gICAgICAgIC8vZmluZCBuZXh0IGVsZW1lbnRcbiAgICAgICAgaWYgKHJlZmlkID09IFwic3RhcnRcIikge1xuICAgICAgICAgICAgLy8gdmFyIHN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciByZWZlbCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWZpZCkge1xuICAgICAgICAgICAgbGV0IG5leHRpZHggPSB0aGlzLklEMkluZGV4KHJlZmlkKSArIDE7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgobmV4dGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBibG9jayBvZiB0eXBlIFxuICAgICAgICB2YXIgZG9tYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgYklEID0gdGhpcy5fbWFrZUlEKCk7XG4gICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJjb250ZW50KTtcbiAgICAgICAgZG9tYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl91bml0XCIpO1xuICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX3R5cGUgPSB0eXBlO1xuXG5cbiAgICAgICAgYmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAodHlwZSBpbiB0aGlzLmVkaXRvcnMpIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZWRpdG9yc1t0eXBlXS5tYWtlKGRhdGEsIGJjb250ZW50LCBiSUQsIHRoaXMpOyAvL2Jsb2NrIG1hZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHtzYXZlOiAoKT0+IGRhdGEgLCByZW5kZXI6ICgpPT4gbnVsbH1cbiAgICAgICAgICAgIC8vdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBlZGl0b3IgZm9yXCIsIHR5cGUpO1xuICAgICAgICAgICAgLy9yZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGJjb250ZW50LmlubmVySFRNTCA9IFwiVW5rbm93biBibG9jazogPHN0cm9uZz5cIit0eXBlICsgXCI8L3N0cm9uZz5cIjtcbiAgICAgICAgICAgIGJjb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICBVSS5Db2xvdXJzLmxpZ2h0O1xuICAgICAgICAgICAgYmNvbnRlbnQuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS5mb250U2l6ZSA9IFwiMmVtXCI7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGJjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjJlbSAwZW1cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgIFVJLmFkZFBsdXNCdXR0b24oZG9tYmxvY2ssIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIFVJLmFkZEJsb2NrQ29udHJvbHMoZG9tYmxvY2ssIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIGlmIChyZWZpZCAmJiByZWZlbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkb21ibG9jaywgcmVmZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvbWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIGJJRDtcbiAgICB9IC8vYWRkIG5ldyBibG9ja1xuXG4gICAgdGhpcy5yZW1vdmVCbG9jayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL2ZpbmQgYmxvY2sgaW5kZXhcbiAgICAgICAgbGV0IGVsaWR4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vYW5ub3VuY2UgZGVsZXRpb24gdG8gYmxvY2tcbiAgICAgICAgaWYgKFwiYmVmb3JlRGVsZXRlXCIgaW4gdGhpcy5ibG9ja3NbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uYmVmb3JlRGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlICh0aGlzLmJsb2Nrc1tpZF0pO1xuICAgIH0gLy9yZW1vdmUgYmxvY2tcblxuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChjbGIpIHtcbiAgICAgICAgbGV0IGR0ID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgZHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBlLmRhdGFzZXQuYmxvY2tfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG15LmJsb2Nrc1tlLmRhdGFzZXQuYmxvY2tfaWRdLnNhdmUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgbGV0IG15ZGF0YSA9IHtcbiAgICAgICAgICAgIFwiZWRpdG9yXCI6IFwiQmxFZC8xLjBiXCIsXG4gICAgICAgICAgICBcImJsb2Nrc1wiOiBkdFxuICAgICAgICB9O1xuICAgICAgIFxuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiJWNFZGl0b3Igc2F2aW5nXCIsIChcImNvbG9yOiBcIiArIFVJLm15Y3lhbikpO1xuICAgICAgICBjb25zb2xlLmxvZyhteWRhdGEpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgaWYgKGNsYikge1xuICAgICAgICAgICAgY2xiKG15ZGF0YSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG15ZGF0YTtcbiAgICB9XG5cbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCYXNpY0VkaXRvcihlbCkge1xuICAgIGxldCBlZGl0b3IgPSBuZXcgQmxvY2tFZGl0b3Ioe1xuICAgICAgICBzZWxlY3RvcjogZWxcbiAgICB9KTtcblxuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnBhcmFncmFwaCxcbiAgICAgICAgbWFrZTogQ29yZWJsb2Nrcy5wYXJhZ3JhcGgsXG4gICAgICAgIGxhYmVsOiBcIlBhcmFncmFwaFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IENvcmVibG9ja3MuZGl2aWRlcixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuZGl2aWRlcixcbiAgICAgICAgbGFiZWw6ICdEaXZpZGVyJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLmhlYWRlcixcbiAgICAgICAgbWFrZTogQ29yZWJsb2Nrcy5oZWFkZXIsXG4gICAgICAgIGxhYmVsOiAnSGVhZGVyJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiY29kZVwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5jb2RlLFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLmNvZGUsXG4gICAgICAgIGxhYmVsOiAnQ29kZSBzbmlwcGV0J1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicmF3XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLnJhdyxcbiAgICAgICAgbWFrZTogQ29yZWJsb2Nrcy5yYXcsXG4gICAgICAgIGxhYmVsOiAnUmF3IEhUTUwnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJxdW90ZVwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5xdW90ZSxcbiAgICAgICAgbWFrZTogQ29yZWJsb2Nrcy5ibG9ja3F1b3RlLFxuICAgICAgICBsYWJlbDogJ0Jsb2NrcXVvdGUnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5pbWFnZSxcbiAgICAgICAgbWFrZTogQ29yZWJsb2Nrcy5pbWFnZSxcbiAgICAgICAgbGFiZWw6ICdJbWFnZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInZpZGVvXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnZpZGVvLFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLnZpZGVvLFxuICAgICAgICBsYWJlbDogJ1ZpZGVvJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5saXN0LFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLmxpc3QsXG4gICAgICAgIGxhYmVsOiBcIkxpc3RcIixcbiAgICB9KTtcbiAgICAvL2NvbnNvbGUubG9nKFVJLmljb25zLm1hdGVyaWFsLmxpc3QpO1xuXG4gICAgcmV0dXJuIGVkaXRvcjtcbn1cbi8vICBteS5jdXJyZW50X2VkaXRvciA9IG5ldyBlZGl0b3JfZm4obDQsIGVkaXRvcl9lbGVtZW50LCBteS5jdXJyZW50X3ZpZXcuZmlsZS5jb250ZW50KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMYXRpZEVkaXRvcihsNCwgZWRpdG9yX2VsZW1lbnRfc2VsZWN0b3IsIGZpbGVfY29udGVudCkge1xuICAgIGxldCBlZCA9IG1ha2VCYXNpY0VkaXRvcihlZGl0b3JfZWxlbWVudF9zZWxlY3Rvcik7XG4gICAgZWQuc2V0QmxvY2tzKGZpbGVfY29udGVudCk7XG4gICAgcmV0dXJuIGVkO1xufSIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge1xuICAgIHRlbXBsYXRlc1xufSBmcm9tIFwiLi90b29sc1wiO1xuXG5leHBvcnQgdmFyIGNvbnN0cnVjdG9ycyA9IHt9O1xuXG5cbmNvbnN0cnVjdG9ycy5wYXJhZ3JhcGggPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmMpO1xuICAgIC8vbGV0IHJlID0gLzxkaXZ8cHxoPi9naTtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIG15OiB0aGlzLFxuICAgICAgICBpZDogaWQsIC8vISEhISEhISEhISEhISEhISEhISAgICBcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBlZGl0b3I6IGVkaXRvcixcbiAgICAgICAgX3A6IGJjLFxuICAgICAgICAvL3R5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIC8vY2xlYW46IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIC8vfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9wLmlubmVySFRNTCA9IHRoaXMuZGF0YS50ZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3AuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL3dlIG5lZWQgdG8gc3RyaXAgZm9ybWF0dGluZyBoZXJlXG4gICAgICAgIGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzZWxlY3Rpb24uZGVsZXRlRnJvbURvY3VtZW50KCk7XG4gICAgICAgIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmluc2VydE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFzdGUpKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBtYWdpYyA9IFwiIyEjXCJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCBtYWdpYyk7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrYXQgPSBibGMuX3AuaW5uZXJIVE1MLmluZGV4T2YobWFnaWMpXG4gICAgICAgICAgICAgICAgbGV0IHRleHRsZWZ0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgY2xpY2thdCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRuZXh0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoY2xpY2thdCArIG1hZ2ljLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0bGVmdCwgXCJ8XCIgLCB0ZXh0bmV4dCk7XG4gICAgICAgICAgICAgICAgYmxjLl9wLmlubmVySFRNTCA9IHRleHRsZWZ0OyAvL2JsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKDAgLCBjbGlja2F0KTtcbiAgICAgICAgICAgICAgICBsZXQgbnAgPSBlZGl0b3IuYWRkTmV3QmxvY2soXCJwYXJhZ3JhcGhcIiwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0bmV4dFxuICAgICAgICAgICAgICAgIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5kaXZpZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxocj5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0cnVjdG9ycy5oZWFkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICAvL215dGFnLlxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIC8vaWQ6IGlkLFxuICAgICAgICB0ZXh0OiBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiSGVhZGVyXCIsXG4gICAgICAgIGxldmVsOiBkYXRhICYmIGRhdGEubGV2ZWwgPyBkYXRhLmxldmVsIDogMSxcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGFscmVhZHl0aGVyZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDEsaDIsaDMsaDQsaDUsaDZcIik7XG4gICAgICAgICAgICBpZiAoYWxyZWFkeXRoZXJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gYWxyZWFkeXRoZXJlLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vbXl0YWc6IFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdHh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSxoMixoMyxoNCxoNSxoNlwiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiB0eHQsXG4gICAgICAgICAgICAgICAgXCJsZXZlbFwiOiB0aGlzLmxldmVsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG9wdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIG9wdHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgICBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIG9wdC5pbm5lckhUTUwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgaWYgKGkgPT0gYmxjLmxldmVsKSB7XG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIG9wdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbnYgPSBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGJsYy5sZXZlbCA9IG52O1xuICAgICAgICBibGMucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5jb2RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgbGV0IGNkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgcHJlLmFwcGVuZENoaWxkKGNkKTtcbiAgICBjZC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgY2QuZGF0YXNldC5ub190ZXh0X3Rvb2xib3ggPSB0cnVlO1xuICAgIGNkLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL3dlIG5lZWQgdG8gc3RyaXAgZm9ybWF0dGluZyBoZXJlXG4gICAgICAgIGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzZWxlY3Rpb24uZGVsZXRlRnJvbURvY3VtZW50KCk7XG4gICAgICAgIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmluc2VydE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFzdGUpKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgIGVsLmFwcGVuZENoaWxkKHByZSk7XG4gICAgbGV0IGxhbmdzID0gWyAgICBcIlwiLCBcImF1dG9cIiwgXCJhcmR1aW5vXCIsIFwiYmFzaFwiLCBcImJhc2ljXCIgLCBcImNwcFwiLCBcImh0bWxcIiwgJ2phdmFzY3JpcHQnLCAgXCJwcm9jZXNzaW5nXCIsIFwicHl0aG9uXCIsICAgXTtcbiAgICBsZXQgbGJscyA9ICBbXCJObyBoaWdobGlnaHRpbmdcIiwgXCJBdXRvXCIsIFwiQXJkdWlub1wiLCBcIkJhc2hcIiwgXCJCYXNpY1wiICwgXCJDKytcIiwgXCJIVE1MXCIsICdKYXZhIFNjcmlwdCcsIFwiUHJvY2Vzc2luZ1wiLCBcIlB5dGhvblwiLCAgIF07XG4gICAgLy9cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAoZSAsaSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBtaS52YWx1ZSA9IGU7XG4gICAgICAgIG1pLmxhYmVsID0gbGJsc1tpXTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sYW5ndWFnZSAmJiBlID09IGRhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIG1pLnNlbGVjdGVkID0gdHJ1ZTsgICAgICAgIH1cbiAgICAgICAgb3B0cy5hcHBlbmRDaGlsZChtaSk7XG4gICAgfSk7XG4gICAgLy9cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNkLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jb2RlID8gZGF0YS5jb2RlIDogXCIjICB0eXBlXFxuIyAgaGVyZVwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvZGU6IGNkLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogb3B0c1tvcHRzLnNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICBibGMuYWRkVG9Ub29sYmFyKG9wdHMpO1xuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5yYXcgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcblxuICAgIGxldCBlZGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZWRpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgZWRpLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGVkaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBlZGkuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgXCIgKyBVSS5teWN5YW47XG4gICAgZWRpLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgIGlmIChkYXRhICYmIGRhdGEuaHRtbCkge1xuICAgICAgICBlZGkudmFsdWUgPSBkYXRhLmh0bWw7XG4gICAgfVxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZWRpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sOiBlZGkudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmJsb2NrcXVvdGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmxjdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJsb2NrcXVvdGVcIik7XG4gICAgYmxjdGFnLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCBibGNpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgYmxjaW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGxldCBibGZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGxldCBibGNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2l0ZVwiKTtcbiAgICBibGZvb3QuYXBwZW5kQ2hpbGQoYmxjaXRlKTtcbiAgICBibGNpdGUuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuXG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsY2luKTtcbiAgICBibGN0YWcuYXBwZW5kQ2hpbGQoYmxmb290KTtcbiAgICBibGNpbi5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwi0KbQuNGC0LDRgtCwXCI7XG4gICAgYmxjaXRlLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCJcIjtcblxuICAgIGxldCBibG9jayA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChibGN0YWcpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGJsY2luLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBibGNpdGUuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdHJ1Y3RvcnMuaW1hZ2UgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgZmlndGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcbiAgICBsZXQgcGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGltZy5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwJVwiO1xuICAgIGxldCBmYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xuICAgIGZjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBmYy5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwiXCI7XG4gICAgZmlndGFnLmFwcGVuZENoaWxkKHBpbWcpO1xuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChmYyk7XG4gICAgcGltZy5zcmMgPSBkYXRhICYmIGRhdGEuZmlsZSA/IGRhdGEuZmlsZS51cmwgOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU16QXdJaUJvWldsbmFIUTlJakU0TUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRE13TUNBeE9EQWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4bklHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdNQ2tpUGdvOGNtVmpkQ0I0UFNJd0xqVWlJSGs5SWpBdU5TSWdkMmxrZEdnOUlqSTVPU0lnYUdWcFoyaDBQU0l4T1RraUlHWnBiR3c5SWlORE5FTTBRelFpSUhOMGNtOXJaVDBpWW14aFkyc2lMejRLUEd4cGJtVWdlVEU5SWkwd0xqVWlJSGd5UFNJek5Ea3VOVFk1SWlCNU1qMGlMVEF1TlNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01DNDROVGd4T1RrZ0xUQXVOVEV6TXpFM0lEQXVPRFUzTWpVM0lEQXVOVEUwT0RnNElEQWdNVGd3S1NJZ2MzUnliMnRsUFNJak5rWTJSalpHSWk4K0NqeHNhVzVsSUhreFBTSXRNQzQxSWlCNE1qMGlNelE0TGpNeElpQjVNajBpTFRBdU5TSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NQzQ0TlRjM01qa2dNQzQxTVRReE1ESWdMVEF1T0RVM056STVJREF1TlRFME1UQXlJREFnTUM0MU5qQXhPREVwSWlCemRISnZhMlU5SWlNMlJqWkdOa1lpTHo0S1BDOW5QZ284Y21WamRDQjRQU0l3TGpVaUlIazlJakF1TlNJZ2QybGtkR2c5SWpJNU9TSWdhR1ZwWjJoMFBTSXhOemtpSUhOMGNtOXJaVDBpSXpaR05rWTJSaUl2UGdvOFpHVm1jejRLUEdOc2FYQlFZWFJvSUdsa1BTSmpiR2x3TUNJK0Nqd3ZZMnhwY0ZCaGRHZytDand2WkdWbWN6NEtQQzl6ZG1jK0NnPT1cIjtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGltYWdlXCIpXG4gICAgICAgIH0sXG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICBibGMuYWRkVG9QcmV2aWV3KGZpZ3RhZyk7XG4gICAgLy9lZGl0XG4gICAgLy8vL3VwbG9hZFxuICAgIGxldCB1cGxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGQudHlwZSA9IFwiZmlsZVwiO1xuICAgIHVwbGQuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIGxldCB1cGxkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGRidG4udmFsdWUgPSBcInVwbG9hZFwiO1xuICAgIHVwbGRidG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICB1cGxkYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlZGl0b3IudXBsb2FkKHVwbGQuZmlsZXNbMF0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHBpbWcuc3JjID0gci5maWxlLnVybDtcbiAgICAgICAgICAgICAgICBzcmNpbnB1dC52YWx1ZSA9IHIuZmlsZS51cmw7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFt1cGxkLCB1cGxkYnRuXSkpO1xuICAgIC8vLy9lZGl0IHNyY1xuICAgIGxldCBzcmNsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzcmNsYWJlbC5pbm5lckhUTUwgPSBcIlNvdXJjZSBVUkxcIjtcbiAgICBsZXQgc3JjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3JjaW5wdXQuc3R5bGUuZmxleEdyb3cgPSAyO1xuICAgIHNyY2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBzcmNpbnB1dC52YWx1ZSA9IGRhdGEgJiYgZGF0YS5maWxlLnVybCA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuICAgIHNyY2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBwaW1nLnNyYyA9IHRoaXMudmFsdWU7XG4gICAgfSlcbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3NyY2xhYmVsLCBzcmNpbnB1dF0pKTtcbiAgICAvLy8vY2xhc3Nlc1xuICAgIC8vLy8vL3N0cmV0Y2hlZFxuICAgIGxldCBzdHJldGNobGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3RyZXRjaGxhYmVsLmlubmVySFRNTCA9IFwic3RyZXRjaGVkXCJcbiAgICBsZXQgc3RyZXRjaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN0cmV0Y2hlZC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHN0cmV0Y2hlZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICByaWdodC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZWZ0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vcmVzaXplLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZ3RhZy5jbGFzc0xpc3QucmVtb3ZlKFwic3RyZXRjaGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLnN0cmV0Y2hlZDtcbiAgICAvLy8vLy9ub3Jlc2l6ZVxuICAgIGxldCBucmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5ybGFiZWwuaW5uZXJIVE1MID0gXCJubyByZXNpemVcIlxuICAgIGxldCBub3Jlc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3Jlc2l6ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIG5vcmVzaXplLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG4gICAgbm9yZXNpemUuY2hlY2tlZCA9IGRhdGEgJiYgKGRhdGEubm9yZXNpemUgfHwgZGF0YS53aXRoYmFja2dyb3VuZCk7XG4gICAgLy8vLy9sZWZ0XG4gICAgbGV0IGxsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsbGFiZWwuaW5uZXJIVE1MID0gXCJsZWZ0XCJcbiAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZWZ0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbGVmdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICByaWdodC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxlZnQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5sZWZ0O1xuICAgIC8vLy9yaWdodFxuICAgIGxldCBybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcmxhYmVsLmlubmVySFRNTCA9IFwicmlnaHRcIlxuICAgIGxldCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICByaWdodC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHJpZ2h0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJpZ2h0LmNoZWNrZWQgPSBkYXRhICYmIGRhdGEucmlnaHQ7XG5cbiAgICAvLy8vYm9yZGVyXG4gICAgbGV0IGJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBibGFiZWwuaW5uZXJIVE1MID0gXCJib3JkZXJcIlxuICAgIGxldCBib3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYm9yZGVyLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgYm9yZGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHBpbWcuY2xhc3NMaXN0LmFkZChcImJvcmRlcmVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXJlZFwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIGJvcmRlci5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmJvcmRlcjtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3RyZXRjaGVkLCBzdHJldGNobGFiZWwsXG4gICAgICAgIG5vcmVzaXplLCBucmxhYmVsLFxuICAgICAgICBsZWZ0LCBsbGFiZWwsXG4gICAgICAgIHJpZ2h0LCBybGFiZWwsXG4gICAgICAgIGJvcmRlciwgYmxhYmVsXG4gICAgXSkpO1xuXG4gICAgLy9cbiAgICBibGMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0cmV0Y2hlZDogc3RyZXRjaGVkLmNoZWNrZWQsXG4gICAgICAgICAgICByaWdodDogcmlnaHQuY2hlY2tlZCxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQuY2hlY2tlZCxcbiAgICAgICAgICAgIG5vcmVzaXplOiBub3Jlc2l6ZS5jaGVja2VkLFxuICAgICAgICAgICAgd2l0aEJhY2tncm91bmQ6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICBib3JkZXI6IGJvcmRlci5jaGVja2VkLFxuICAgICAgICAgICAgd2l0aEJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICBjYXB0aW9uOiBmYy5pbm5lckhUTUwsXG4gICAgICAgICAgICBmaWxlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBzcmNpbnB1dC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhICYmIGRhdGEuZmlsZSAmJiBkYXRhLmZpbGUudXJsKSB7XG4gICAgICAgIGJsYy5nb1ByZXZpZXdNb2RlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxjLmdvRWRpdE1vZGUoKTtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMudmlkZW8gPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHtcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7fSxcbiAgICB9XG4gICAgaWYgKCFibGMuZGF0YS5maWxlKSB7XG4gICAgICAgIGJsYy5kYXRhLmZpbGUgPSB7fTtcbiAgICB9XG4gICAgdGVtcGxhdGVzLnR3b1BhbmVscyhibGMpO1xuICAgIC8vcHJldmlld1xuICAgIGxldCB2dGFnID0gYmxjLmFkZFRvUHJldmlldyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIikpO1xuICAgIHZ0YWcuc3R5bGUubWF4V2lkdGggPSBcIjEwMCVcIjtcbiAgICAvL2xldCBzcmN0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICAgIC8vdnRhZy5hcHBlbmRDaGlsZChzcmN0YWcpO1xuICAgIHZ0YWcuc3JjID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgLy9lZGl0b3JcbiAgICAvLy8vdXBsb2FkICAgICBcbiAgICBsZXQgdXBsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkLnR5cGUgPSBcImZpbGVcIjtcbiAgICB1cGxkLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBsZXQgdXBsZGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkYnRuLnZhbHVlID0gXCJ1cGxvYWRcIjtcbiAgICB1cGxkYnRuLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgdXBsZGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZWRpdG9yLnVwbG9hZCh1cGxkLmZpbGVzWzBdKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICB2dGFnLnNyYyA9IHIuZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgIGJsYy5kYXRhLmZpbGUudXJsID0gci5maWxlLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZ0YWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICAgICAgYmxjLmRhdGEuZmlsZS51cmwgPSB0aGlzLnZhbHVlO1xuICAgIH0pXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzcmNsYWJlbCwgc3JjaW5wdXRdKSk7XG4gICAgLy8vL3BhcmFtc1xuICAgIGxldCBwYXJhbXMgPSBbe1xuICAgICAgICAgICAgbmFtZTogXCJhdXRvcGxheVwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLmF1dG9wbGF5LFxuICAgICAgICAgICAgbGFiZWw6IFwiYXV0b3BsYXlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuY29udHJvbHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibG9vcFwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLmxvb3AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibXV0ZWRcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5tdXRlZCxcbiAgICAgICAgfSxcblxuICAgIF1cbiAgICBsZXQgcGVscyA9IFtdO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYmxjLmRhdGFbZS5uYW1lXSkge1xuICAgICAgICAgICAgYmxjLmRhdGFbZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHBsYWJlbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgICAgIHBsYWJlbC5pbm5lckhUTUwgPSBlLm5hbWU7XG4gICAgICAgIGxldCBwY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHBjaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBwY2hlY2suY2hlY2tlZCA9IGRhdGEgJiYgZGF0YVtlLm5hbWVdO1xuICAgICAgICBwY2hlY2sub25jbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgYmxjLmRhdGEsIGUubmFtZSk7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgdnRhZy5zZXRBdHRyaWJ1dGUoZS5uYW1lLCB0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9O1xuICAgICAgICBwZWxzLnB1c2gocGNoZWNrKTtcbiAgICAgICAgcGVscy5wdXNoKHBsYWJlbCk7XG5cblxuICAgIH0pO1xuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhwZWxzKSk7XG5cbiAgICBibGMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJsYy5kYXRhO1xuICAgIH1cbiAgICBpZiAoIShkYXRhICYmIGRhdGEuZmlsZSAmJiBkYXRhLmZpbGUudXJsKSkge1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBibGM7XG59XG5cblxuY29uc3RydWN0b3JzLmxpc3QgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgbGlzdF9lbGVtZW50OiBudWxsLFxuICAgICAgICB0eXBlOiBkYXRhICYmIGRhdGEuc3R5bGUgJiYgZGF0YS5zdHlsZSA9PSBcIm9yZGVyZWRcIiA/IFwib2xcIiA6IFwidWxcIixcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IGJsYy50eXBlID09IFwib2xcIiA/IFwib3JkZXJlZFwiIDogXCJ1bm9yZGVyZWRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IEFycmF5LmZyb20odGhpcy5saXN0X2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpKS5tYXAoZSA9PiBlLmlubmVySFRNTClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vZWRpdG9yXG4gICAgLy8vL291dGVyIGxpc3RcbiAgICBibGMubGlzdF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChibGMudHlwZSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmxjLmxpc3RfZWxlbWVudCk7XG4gICAgLy8vL2RvIHdlIGhhdmUgZGF0YVxuICAgIGlmIChkYXRhICYmIGRhdGEuaXRlbXMpIHtcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGwuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgIGwuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgYWRkU21hcnRSZW1vdmUobClcbiAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuYXBwZW5kQ2hpbGQobCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vLy8vbWFrZSBMSSBkZWxldGFibGUgXG4gICAgZnVuY3Rpb24gYWRkU21hcnRSZW1vdmUoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5rZXlDb2RlICwgdGhpcy5pbm5lckhUTUwubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiB0aGlzLmlubmVySFRNTC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzICYmIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIG5pLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvL3doZXJlP1xuICAgICAgICAgICAgICAgIGxldCBteW5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChteW5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5pbnNlcnRCZWZvcmUobmksIG15bmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChuaSk7IC8vYXQuLi4/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFNtYXJ0UmVtb3ZlKG5pKTtcbiAgICAgICAgICAgICAgICBuaS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8vLy9jaGFuZ2xlIGxpc3QgdHlwZSB0b1xuICAgIGZ1bmN0aW9uIHNldFR5cGUodG4pIHtcblxuICAgICAgICBsZXQgbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRuKTtcbiAgICAgICAgbGV0IGxpc3MgPSBBcnJheS5mcm9tKGJsYy5saXN0X2VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGxpc3MuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIG5lLmFwcGVuZENoaWxkKGUpXG4gICAgICAgIH0pO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50ID0gbmU7XG4gICAgICAgIGJsYy50eXBlID0gdG47XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKG5lKTtcbiAgICB9XG4gICAgLy8vL1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgLy9yYWRpb2J1dHRvbnNcbiAgICAvL1xuICAgIGxldCByYnRucyA9IFt7XG4gICAgICAgICAgICB2YWx1ZTogXCJ1bFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiVW5vcmRlcmVkXCJcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJvbFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiT3JkZXJlZFwiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHJidG5zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJsaXN0X2J1dHRvbnNfXCIgKyBpZDtcbiAgICAgICAgcmFkaW8udmFsdWUgPSBlLnZhbHVlO1xuICAgICAgICByYWRpby5jaGVja2VkID0gKGJsYy50eXBlID09IGUudmFsdWUpO1xuICAgICAgICByYWRpby5vbmNoYW5nZSA9IGV2ID0+IHNldFR5cGUoZS52YWx1ZSk7XG4gICAgICAgIGxldCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxibC5pbm5lckhUTUwgPSBlLmxhYmVsO1xuICAgICAgICBibGMuYWRkVG9Ub29sYmFyKHJhZGlvKTtcbiAgICAgICAgYmxjLmFkZFRvVG9vbGJhcihsYmwpO1xuICAgIH0pO1xuICAgIC8vLy8gYWRkIGJ1dHRvblxuICAgIGxldCBhZGRfYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRfYi50eXBlID0gXCJidXR0b25cIjtcbiAgICBhZGRfYi52YWx1ZSA9IFwiK2l0ZW1cIjtcbiAgICBhZGRfYi5kYXRhc2V0LmhpbnQgPSBcIkFkZCBuZXcgbGlzdCBpdGVtXCI7XG4gICAgYWRkX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5ld2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBuZXdsaS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgIGFkZFNtYXJ0UmVtb3ZlKG5ld2xpKTtcbiAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChuZXdsaSk7XG4gICAgfSlcbiAgICBibGMuYWRkVG9Ub29sYmFyKGFkZF9iKTtcbiAgICByZXR1cm4gYmxjO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk0yMCAxMmwtMS40MS0xLjQxTDEzIDE2LjE3VjRoLTJ2MTIuMTdsLTUuNTgtNS41OUw0IDEybDggOCA4LTh6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNNCAxMmwxLjQxIDEuNDFMMTEgNy44M1YyMGgyVjcuODNsNS41OCA1LjU5TDIwIDEybC04LTgtOCA4elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDBWMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj4gLnN0MHtmaWxsOm5vbmU7fSA8L3N0eWxlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0wLDBoMjR2MjRIMFYwelxcXCI+PC9wYXRoPjxnPjxwYXRoIGQ9XFxcIk01LjcsMTMuM2gxMS41djJINS43VjEzLjN6IE02LjMsNy44aDExLjV2Mkg2LjNWNy44eiBNOS4zLDMuMmgxLjhMOSwyMC42SDcuMkw5LjMsMy4yeiBNMTQuMywzLjJoMS44bC0yLjEsMTcuNGgtMS45IEwxNC4zLDMuMnpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI0LjVcXFwiIHk9XFxcIjguNVxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoOS4wNDIyNjllLTEzIC0xIDEgOS4wNDIyNjllLTEzIC02LjQ1NjcgMTcuNTQzMylcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjcuMVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjE3LjVcXFwiIHk9XFxcIjguNVxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoOS4wNDIyNjllLTEzIC0xIDEgOS4wNDIyNjllLTEzIDYuNDU2NyAzMC40NTY3KVxcXCIgd2lkdGg9XFxcIjJcXFwiIGhlaWdodD1cXFwiNy4xXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTEuMVxcXCIgeT1cXFwiMTFcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDYuMTIzMjM0ZS0xNyAtMSAxIDYuMTIzMjM0ZS0xNyA2LjIwNDk2OGUtMDIgMjQuMDYyKVxcXCIgd2lkdGg9XFxcIjJcXFwiIGhlaWdodD1cXFwiMS45XFxcIj48L3JlY3Q+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNNCAxMC41Yy0uOCAwLTEuNS43LTEuNSAxLjVzLjcgMS41IDEuNSAxLjUgMS41LS43IDEuNS0xLjUtLjctMS41LTEuNS0xLjV6bTAtNmMtLjggMC0xLjUuNy0xLjUgMS41UzMuMiA3LjUgNCA3LjUgNS41IDYuOCA1LjUgNiA0LjggNC41IDQgNC41em0wIDEyYy0uOCAwLTEuNS43LTEuNSAxLjVzLjcgMS41IDEuNSAxLjUgMS41LS43IDEuNS0xLjUtLjctMS41LTEuNS0xLjV6TTcgMTloMTR2LTJIN3Yyem0wLTZoMTR2LTJIN3Yyem0wLTh2MmgxNFY1SDd6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTYgMTdoM2wyLTRWN0g1djZoM3ptOCAwaDNsMi00VjdoLTZ2NmgzelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwIDE5aDR2LTNoLTR2M3pNNSA0djNoNXYzaDRWN2g1VjRINXpNMyAxNGgxOHYtMkgzdjJ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMiAxN2MzLjMxIDAgNi0yLjY5IDYtNlYzaC0yLjV2OGMwIDEuOTMtMS41NyAzLjUtMy41IDMuNVM4LjUgMTIuOTMgOC41IDExVjNINnY4YzAgMy4zMSAyLjY5IDYgNiA2em0tNyAydjJoMTR2LTJINXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj4gLnN0MHtmaWxsOm5vbmU7fSA8L3N0eWxlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0wLDBoMjR2MjRIMFYwelxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjEwXFxcIiB3aWR0aD1cXFwiMTRcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjRcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCI0XFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiMTRcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIyXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiMThcXFwiIHdpZHRoPVxcXCIxMlxcXCIgaGVpZ2h0PVxcXCIyXFxcIj48L3JlY3Q+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS00Ljg2IDguODZsLTMgMy44N0w5IDEzLjE0IDYgMTdoMTJsLTMuODYtNS4xNHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNyA3aC00djEuOWg0YzEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xIDAgMS40My0uOTggMi42My0yLjMxIDIuOThsMS40NiAxLjQ2QzIwLjg4IDE1LjYxIDIyIDEzLjk1IDIyIDEyYzAtMi43Ni0yLjI0LTUtNS01em0tMSA0aC0yLjE5bDIgMkgxNnpNMiA0LjI3bDMuMTEgMy4xMUMzLjI5IDguMTIgMiA5LjkxIDIgMTJjMCAyLjc2IDIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xIDAtMS41OSAxLjIxLTIuOSAyLjc2LTMuMDdMOC43MyAxMUg4djJoMi43M0wxMyAxNS4yN1YxN2gxLjczbDQuMDEgNEwyMCAxOS43NCAzLjI3IDMgMiA0LjI3elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDI0VjBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj4gLnN0MHtmaWxsOm5vbmU7fSA8L3N0eWxlPjxwYXRoIGQ9XFxcIk05LDExdjEwaDJWNWgydjE2aDJWNWgyVjNIOUM2LjgsMyw1LDQuOCw1LDdTNi44LDExLDksMTF6XFxcIj48L3BhdGg+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA2NDAgNTEyXFxcIj48cGF0aCBkPVxcXCJNMzM2IDQxNmgtMTEuMTdsOS4yNi0yNy43N0wyNjcgMzM2LjQgMjQwLjQ5IDQxNkgyMDhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNnptMjk3LjgyIDQyLjFMMzc3IDI1OS41OSA0MjYuMTcgMTEySDU0NHYzMmExNiAxNiAwIDAgMCAxNiAxNmgzMmExNiAxNiAwIDAgMCAxNi0xNlY0OGExNiAxNiAwIDAgMC0xNi0xNkgxNzZhMTYgMTYgMCAwIDAtMTYgMTZ2NDMuOUw0NS40NiAzLjM4QTE2IDE2IDAgMCAwIDIzIDYuMTlMMy4zNyAzMS40NmExNiAxNiAwIDAgMCAyLjgxIDIyLjQ1bDU4OC4zNiA0NTQuNzJhMTYgMTYgMCAwIDAgMjIuNDYtMi44MWwxOS42NC0yNS4yN2ExNiAxNiAwIDAgMC0yLjgyLTIyLjQ1ek0zMDkuOTEgMjA3Ljc2TDIyNCAxNDEuMzZWMTEyaDExNy44M3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDApXFxcIj48cGF0aCBkPVxcXCJNMTIuNzI2NiA3LjMzMzVIMTAuNDA5MlY4Ljk1MzYxSDEyLjgwODZDMTQuNTY1NCA4Ljk1MzYxIDE1Ljk1NjUgOS4zODA4NiAxNi45ODE5IDEwLjIzNTRDMTguMDE0MiAxMS4wODMgMTguNTMwMyAxMi4yMjggMTguNTMwMyAxMy42NzA0QzE4LjUzMDMgMTUuMTE5NiAxOC4wMTc2IDE2LjI4NTIgMTYuOTkyMiAxNy4xNjdDMTUuOTczNiAxOC4wNDIgMTQuNjE2NyAxOC40ODYzIDEyLjkyMTQgMTguNUg3LjMxMjVWNy4zMzM1SDUuNTU5MDhWNS40NTcwM0g3LjMxMjVWMy41NzAzMUgxMC40MDkyVjUuNDU3MDNIMTIuNzI2NlY3LjMzMzVaTTEwLjQwOTIgMTEuNDM1MVYxNi4wMjg4SDEyLjg1OTlDMTMuNjQ2IDE2LjAyODggMTQuMjcxNSAxNS44MTM1IDE0LjczNjMgMTUuMzgyOEMxNS4yMDggMTQuOTUyMSAxNS40NDM4IDE0LjM3NDUgMTUuNDQzOCAxMy42NDk5QzE1LjQ0MzggMTIuOTczMSAxNS4yMTgzIDEyLjQzOTkgMTQuNzY3MSAxMi4wNTAzQzE0LjMyMjggMTEuNjUzOCAxMy43MTA5IDExLjQ0ODcgMTIuOTMxNiAxMS40MzUxSDEwLjQwOTJaXFxcIj48L3BhdGg+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD1cXFwiY2xpcDBcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgZmlsbD1cXFwid2hpdGVcXFwiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuMzA2OCAxOS4zMjQyQzEwLjg2NzQgMTkuNTc0MiAxMS4zOTc3IDE5LjY5OTIgMTEuODk3NyAxOS42OTkyQzE0Ljc0NjIgMTkuNjk5MiAxNi4xNzA1IDE4LjM5MDYgMTYuMTcwNSAxNS43NzM0QzE2LjE3MDUgMTQuODgyOCAxNi4wMTUyIDE0LjE3OTcgMTUuNzA0NSAxMy42NjQxQzE1LjUgMTMuMzIwMyAxNS4yNjcgMTMuMDMxMiAxNS4wMDU3IDEyLjc5NjlDMTQuNzQ0MyAxMi41NjI1IDE0LjQ4ODYgMTIuMzgwOSAxNC4yMzg2IDEyLjI1MkMxMy45ODg2IDEyLjEyMyAxMy42ODM3IDEyLjAyNTQgMTMuMzIzOSAxMS45NTlDMTIuOTY0IDExLjg5MjYgMTIuNjQ1OCAxMS44NTE2IDEyLjM2OTMgMTEuODM1OUMxMi4wOTI4IDExLjgyMDMgMTEuNzM0OCAxMS44MTI1IDExLjI5NTUgMTEuODEyNUMxMC43NDI0IDExLjgxMjUgMTAuMzU5OCAxMS44NTE2IDEwLjE0NzcgMTEuOTI5N0MxMC4xNDc3IDEyLjM0MzggMTAuMTQ1OCAxMi45NjQ4IDEwLjE0MiAxMy43OTNDMTAuMTM4MyAxNC42MjExIDEwLjEzNjQgMTUuMjM4MyAxMC4xMzY0IDE1LjY0NDVDMTAuMTM2NCAxNS43MDcgMTAuMTMyNiAxNS45NzA3IDEwLjEyNSAxNi40MzU1QzEwLjExNzQgMTYuOTAwNCAxMC4xMTU1IDE3LjI3NzMgMTAuMTE5MyAxNy41NjY0QzEwLjEyMzEgMTcuODU1NSAxMC4xNDAyIDE4LjE4MTYgMTAuMTcwNSAxOC41NDQ5QzEwLjIwMDggMTguOTA4MiAxMC4yNDYyIDE5LjE2OCAxMC4zMDY4IDE5LjMyNDJaTTEwLjE0NzcgMTAuNTgyQzEwLjQ2NTkgMTAuNjM2NyAxMC44Nzg4IDEwLjY2NDEgMTEuMzg2NCAxMC42NjQxQzEyLjAwNzYgMTAuNjY0MSAxMi41NDkyIDEwLjYxMzMgMTMuMDExNCAxMC41MTE3QzEzLjQ3MzUgMTAuNDEwMiAxMy44OTAyIDEwLjIzNjMgMTQuMjYxNCA5Ljk5MDIzQzE0LjYzMjYgOS43NDQxNCAxNC45MTQ4IDkuMzk0NTMgMTUuMTA4IDguOTQxNDFDMTUuMzAxMSA4LjQ4ODI4IDE1LjM5NzcgNy45MzM1OSAxNS4zOTc3IDcuMjc3MzRDMTUuMzk3NyA2LjczMDQ3IDE1LjI4NzkgNi4yNTE5NSAxNS4wNjgyIDUuODQxOEMxNC44NDg1IDUuNDMxNjQgMTQuNTQ5MiA1LjExMTMzIDE0LjE3MDUgNC44ODA4NkMxMy43OTE3IDQuNjUwMzkgMTMuMzgyNiA0LjQ4MDQ3IDEyLjk0MzIgNC4zNzEwOUMxMi41MDM4IDQuMjYxNzIgMTIuMDM0MSA0LjIwNzAzIDExLjUzNDEgNC4yMDcwM0MxMS4xNTUzIDQuMjA3MDMgMTAuNjYyOSA0LjI1NzgxIDEwLjA1NjggNC4zNTkzOEMxMC4wNTY4IDQuNzUgMTAuMDcyIDUuMzM5ODQgMTAuMTAyMyA2LjEyODkxQzEwLjEzMjYgNi45MTc5NyAxMC4xNDc3IDcuNTExNzIgMTAuMTQ3NyA3LjkxMDE2QzEwLjE0NzcgOC4xMjEwOSAxMC4xNDU4IDguNDMzNTkgMTAuMTQyIDguODQ3NjZDMTAuMTM4MyA5LjI2MTcyIDEwLjEzNjQgOS41NzAzMSAxMC4xMzY0IDkuNzczNDRDMTAuMTM2NCAxMC4xMzI4IDEwLjE0MDIgMTAuNDAyMyAxMC4xNDc3IDEwLjU4MlpNNCAyMUw0LjAyMjczIDE5Ljg5ODRDNC4xMzYzNiAxOS44NjcyIDQuNDU4MzMgMTkuODA0NyA0Ljk4ODY0IDE5LjcxMDlDNS41MTg5NCAxOS42MTcyIDUuOTIwNDUgMTkuNTExNyA2LjE5MzE4IDE5LjM5NDVDNi4yNDYyMSAxOS4zMDA4IDYuMjkzNTYgMTkuMTk1MyA2LjMzNTIzIDE5LjA3ODFDNi4zNzY4OSAxOC45NjA5IDYuNDA5MDkgMTguODMwMSA2LjQzMTgyIDE4LjY4NTVDNi40NTQ1NSAxOC41NDEgNi40NzUzOCAxOC40MTQxIDYuNDk0MzIgMTguMzA0N0M2LjUxMzI2IDE4LjE5NTMgNi41MjQ2MiAxOC4wNDg4IDYuNTI4NDEgMTcuODY1MkM2LjUzMjIgMTcuNjgxNiA2LjUzNDA5IDE3LjU0ODggNi41MzQwOSAxNy40NjY4VjE2LjY5OTJDNi41MzQwOSA5LjAyNzM0IDYuNDUwNzYgNS4wMjM0NCA2LjI4NDA5IDQuNjg3NUM2LjI1Mzc5IDQuNjI1IDYuMTcwNDUgNC41NjgzNiA2LjAzNDA5IDQuNTE3NThDNS44OTc3MyA0LjQ2NjggNS43MjkxNyA0LjQyMzgzIDUuNTI4NDEgNC4zODg2N0M1LjMyNzY1IDQuMzUzNTIgNS4xNDAxNSA0LjMyNjE3IDQuOTY1OTEgNC4zMDY2NEM0Ljc5MTY3IDQuMjg3MTEgNC42MDc5NSA0LjI2OTUzIDQuNDE0NzcgNC4yNTM5MUM0LjIyMTU5IDQuMjM4MjggNC4xMDYwNiA0LjIyNjU2IDQuMDY4MTggNC4yMTg3NUw0LjAyMjczIDMuMjQ2MDlDNC43NjUxNSAzLjIzMDQ3IDYuMDUzMDMgMy4xODU1NSA3Ljg4NjM2IDMuMTExMzNDOS43MTk3IDMuMDM3MTEgMTEuMTMyNiAzIDEyLjEyNSAzQzEyLjI5OTIgMyAxMi41NTY4IDMuMDAxOTUgMTIuODk3NyAzLjAwNTg2QzEzLjIzODYgMy4wMDk3NyAxMy40OTYyIDMuMDExNzIgMTMuNjcwNSAzLjAxMTcyQzE0LjIwMDggMy4wMTE3MiAxNC43MTc4IDMuMDYyNSAxNS4yMjE2IDMuMTY0MDZDMTUuNzI1NCAzLjI2NTYyIDE2LjIxMjEgMy40Mjk2OSAxNi42ODE4IDMuNjU2MjVDMTcuMTUxNSAzLjg4MjgxIDE3LjU2MDYgNC4xNjAxNiAxNy45MDkxIDQuNDg4MjhDMTguMjU3NiA0LjgxNjQxIDE4LjUzNzkgNS4yMjQ2MSAxOC43NSA1LjcxMjg5QzE4Ljk2MjEgNi4yMDExNyAxOS4wNjgyIDYuNzM4MjggMTkuMDY4MiA3LjMyNDIyQzE5LjA2ODIgNy43MzA0NyAxOS4wMDU3IDguMTAzNTIgMTguODgwNyA4LjQ0MzM2QzE4Ljc1NTcgOC43ODMyIDE4LjYwOCA5LjA2NDQ1IDE4LjQzNzUgOS4yODcxMUMxOC4yNjcgOS41MDk3NyAxOC4wMjI3IDkuNzM0MzggMTcuNzA0NSA5Ljk2MDk0QzE3LjM4NjQgMTAuMTg3NSAxNy4xMDk4IDEwLjM2MzMgMTYuODc1IDEwLjQ4ODNDMTYuNjQwMiAxMC42MTMzIDE2LjMyMiAxMC43Njk1IDE1LjkyMDUgMTAuOTU3QzE3LjA4NzEgMTEuMjMwNSAxOC4wNTg3IDExLjc1MzkgMTguODM1MiAxMi41MjczQzE5LjYxMTcgMTMuMzAwOCAyMCAxNC4yNjk1IDIwIDE1LjQzMzZDMjAgMTYuMjE0OCAxOS44Njc0IDE2LjkxNiAxOS42MDIzIDE3LjUzNzFDMTkuMzM3MSAxOC4xNTgyIDE4Ljk4MyAxOC42NjggMTguNTM5OCAxOS4wNjY0QzE4LjA5NjYgMTkuNDY0OCAxNy41NzM5IDE5Ljc5ODggMTYuOTcxNiAyMC4wNjg0QzE2LjM2OTMgMjAuMzM3OSAxNS43NSAyMC41MjczIDE1LjExMzYgMjAuNjM2N0MxNC40NzczIDIwLjc0NjEgMTMuODEwNiAyMC44MDA4IDEzLjExMzYgMjAuODAwOEMxMi43ODAzIDIwLjgwMDggMTIuMjgwMyAyMC43ODkxIDExLjYxMzYgMjAuNzY1NkMxMC45NDcgMjAuNzQyMiAxMC40NDcgMjAuNzMwNSAxMC4xMTM2IDIwLjczMDVDOS4zMTA2MSAyMC43MzA1IDguMTQ3NzMgMjAuNzczNCA2LjYyNSAyMC44NTk0QzUuMTAyMjcgMjAuOTQ1MyA0LjIyNzI3IDIwLjk5MjIgNCAyMVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNiAyMC45NzY2TDYuMTk5MjIgMTkuOTgwNUM2LjM3MTA5IDE5LjkyNTggNi42MTEzMyAxOS44NjEzIDYuOTE5OTIgMTkuNzg3MUM3LjIyODUyIDE5LjcxMjkgNy41MDk3NyAxOS42Mzg3IDcuNzYzNjcgMTkuNTY0NUM4LjAxNzU4IDE5LjQ5MDIgOC4yNSAxOS4zOTg0IDguNDYwOTQgMTkuMjg5MUM4LjY3OTY5IDE5LjAxNTYgOC44Mzk4NCAxOC42MjExIDguOTQxNDEgMTguMTA1NUM4Ljk0OTIyIDE4LjA1MDggOS4xOTE0MSAxNi45MjE5IDkuNjY3OTcgMTQuNzE4OEMxMC4xNDQ1IDEyLjUxNTYgMTAuNTg5OCAxMC4zOTI2IDExLjAwMzkgOC4zNDk2MUMxMS40MTggNi4zMDY2NCAxMS42MjExIDUuMTQ4NDQgMTEuNjEzMyA0Ljg3NVY0LjU4MjAzQzExLjQyNTggNC40ODA0NyAxMS4yMTI5IDQuNDA4MiAxMC45NzQ2IDQuMzY1MjNDMTAuNzM2MyA0LjMyMjI3IDEwLjQ2NDggNC4yOTEwMiAxMC4xNjAyIDQuMjcxNDhDOS44NTU0NyA0LjI1MTk1IDkuNjI4OTEgNC4yMzA0NyA5LjQ4MDQ3IDQuMjA3MDNMOS43MDMxMiAzQzkuOTYwOTQgMy4wMTU2MiAxMC40Mjk3IDMuMDQxMDIgMTEuMTA5NCAzLjA3NjE3QzExLjc4OTEgMy4xMTEzMyAxMi4zNzMgMy4xMzg2NyAxMi44NjEzIDMuMTU4MkMxMy4zNDk2IDMuMTc3NzMgMTMuODIwMyAzLjE4NzUgMTQuMjczNCAzLjE4NzVDMTQuNjQ4NCAzLjE4NzUgMTUuMDMzMiAzLjE3NzczIDE1LjQyNzcgMy4xNTgyQzE1LjgyMjMgMy4xMzg2NyAxNi4yOTQ5IDMuMTExMzMgMTYuODQ1NyAzLjA3NjE3QzE3LjM5NjUgMy4wNDEwMiAxNy43ODEyIDMuMDE1NjIgMTggM0MxNy45NjA5IDMuMzA0NjkgMTcuODg2NyAzLjY1MjM0IDE3Ljc3NzMgNC4wNDI5N0MxNy41NDMgNC4xMjEwOSAxNy4xNDY1IDQuMjMyNDIgMTYuNTg3OSA0LjM3Njk1QzE2LjAyOTMgNC41MjE0OCAxNS42MDU1IDQuNjUyMzQgMTUuMzE2NCA0Ljc2OTUzQzE1LjI1MzkgNC45MTc5NyAxNS4xOTkyIDUuMDgzOTggMTUuMTUyMyA1LjI2NzU4QzE1LjEwNTUgNS40NTExNyAxNS4wNzAzIDUuNjA3NDIgMTUuMDQ2OSA1LjczNjMzQzE1LjAyMzQgNS44NjUyMyAxNC45OTQxIDYuMDQyOTcgMTQuOTU5IDYuMjY5NTNDMTQuOTIzOCA2LjQ5NjA5IDE0Ljg5ODQgNi42NjAxNiAxNC44ODI4IDYuNzYxNzJDMTQuNjcxOSA3LjkxNzk3IDE0LjMzMDEgOS41NTY2NCAxMy44NTc0IDExLjY3NzdDMTMuMzg0OCAxMy43OTg4IDEzLjA4MiAxNS4xODc1IDEyLjk0OTIgMTUuODQzOEMxMi45MzM2IDE1LjkxNDEgMTIuODgyOCAxNi4xNDA2IDEyLjc5NjkgMTYuNTIzNEMxMi43MTA5IDE2LjkwNjIgMTIuNjMyOCAxNy4yNTc4IDEyLjU2MjUgMTcuNTc4MUMxMi40OTIyIDE3Ljg5ODQgMTIuNDI5NyAxOC4yMjQ2IDEyLjM3NSAxOC41NTY2QzEyLjMyMDMgMTguODg4NyAxMi4yOTY5IDE5LjExMzMgMTIuMzA0NyAxOS4yMzA1TDEyLjMxNjQgMTkuNDQxNEMxMi40NDkyIDE5LjQ3MjcgMTMuMTcxOSAxOS41OTM4IDE0LjQ4NDQgMTkuODA0N0MxNC40NjA5IDIwLjE0ODQgMTQuMzk4NCAyMC41MzUyIDE0LjI5NjkgMjAuOTY0OEMxNC4yMTA5IDIwLjk2NDggMTQuMDg0IDIwLjk3MDcgMTMuOTE2IDIwLjk4MjRDMTMuNzQ4IDIwLjk5NDEgMTMuNjIxMSAyMSAxMy41MzUyIDIxQzEzLjMwODYgMjEgMTIuOTY4OCAyMC45NjA5IDEyLjUxNTYgMjAuODgyOEMxMi4wNjI1IDIwLjgwNDcgMTEuNzI2NiAyMC43NjU2IDExLjUwNzggMjAuNzY1NkMxMC40Mjk3IDIwLjc1IDkuNjI1IDIwLjc0MjIgOS4wOTM3NSAyMC43NDIyQzguNjk1MzEgMjAuNzQyMiA4LjEzNjcyIDIwLjc3NzMgNy40MTc5NyAyMC44NDc3QzYuNjk5MjIgMjAuOTE4IDYuMjI2NTYgMjAuOTYwOSA2IDIwLjk3NjZaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTE4LjExNzYgMTUuNzY0N0MxOC4xMTc2IDE1LjUwMzMgMTguMDI2MSAxNS4yODEgMTcuODQzMSAxNS4wOThMMTUuODAzOSAxMy4wNTg4QzE1LjYyMDkgMTIuODc1OCAxNS4zOTg3IDEyLjc4NDMgMTUuMTM3MyAxMi43ODQzQzE0Ljg2MjcgMTIuNzg0MyAxNC42Mjc1IDEyLjg4ODkgMTQuNDMxNCAxMy4wOThDMTQuNDUxIDEzLjExNzYgMTQuNTEzMSAxMy4xNzgxIDE0LjYxNzYgMTMuMjc5NEMxNC43MjIyIDEzLjM4MDcgMTQuNzkyNSAxMy40NTEgMTQuODI4NCAxMy40OTAyQzE0Ljg2NDQgMTMuNTI5NCAxNC45MTM0IDEzLjU5MTUgMTQuOTc1NSAxMy42NzY1QzE1LjAzNzYgMTMuNzYxNCAxNS4wODAxIDEzLjg0NDggMTUuMTAyOSAxMy45MjY1QzE1LjEyNTggMTQuMDA4MiAxNS4xMzczIDE0LjA5OCAxNS4xMzczIDE0LjE5NjFDMTUuMTM3MyAxNC40NTc1IDE1LjA0NTggMTQuNjc5NyAxNC44NjI3IDE0Ljg2MjdDMTQuNjc5NyAxNS4wNDU4IDE0LjQ1NzUgMTUuMTM3MyAxNC4xOTYxIDE1LjEzNzNDMTQuMDk4IDE1LjEzNzMgMTQuMDA4MiAxNS4xMjU4IDEzLjkyNjUgMTUuMTAyOUMxMy44NDQ4IDE1LjA4MDEgMTMuNzYxNCAxNS4wMzc2IDEzLjY3NjUgMTQuOTc1NUMxMy41OTE1IDE0LjkxMzQgMTMuNTI5NCAxNC44NjQ0IDEzLjQ5MDIgMTQuODI4NEMxMy40NTEgMTQuNzkyNSAxMy4zODA3IDE0LjcyMjIgMTMuMjc5NCAxNC42MTc2QzEzLjE3ODEgMTQuNTEzMSAxMy4xMTc2IDE0LjQ1MSAxMy4wOTggMTQuNDMxNEMxMi44ODI0IDE0LjYzNCAxMi43NzQ1IDE0Ljg3MjUgMTIuNzc0NSAxNS4xNDcxQzEyLjc3NDUgMTUuNDA4NSAxMi44NjYgMTUuNjMwNyAxMy4wNDkgMTUuODEzN0wxNS4wNjg2IDE3Ljg0MzFDMTUuMjQ1MSAxOC4wMTk2IDE1LjQ2NzMgMTguMTA3OCAxNS43MzUzIDE4LjEwNzhDMTUuOTk2NyAxOC4xMDc4IDE2LjIxOSAxOC4wMjI5IDE2LjQwMiAxNy44NTI5TDE3Ljg0MzEgMTYuNDIxNkMxOC4wMjYxIDE2LjIzODYgMTguMTE3NiAxNi4wMTk2IDE4LjExNzYgMTUuNzY0N1pNMTEuMjI1NSA4Ljg1Mjk0QzExLjIyNTUgOC41OTE1IDExLjEzNCA4LjM2OTI4IDEwLjk1MSA4LjE4NjI3TDguOTMxMzcgNi4xNTY4NkM4Ljc0ODM3IDUuOTczODYgOC41MjYxNCA1Ljg4MjM1IDguMjY0NzEgNS44ODIzNUM4LjAwOTggNS44ODIzNSA3Ljc4NzU4IDUuOTcwNTkgNy41OTgwNCA2LjE0NzA2TDYuMTU2ODYgNy41Nzg0M0M1Ljk3Mzg2IDcuNzYxNDQgNS44ODIzNSA3Ljk4MDM5IDUuODgyMzUgOC4yMzUyOUM1Ljg4MjM1IDguNDk2NzMgNS45NzM4NiA4LjcxODk1IDYuMTU2ODYgOC45MDE5Nkw4LjE5NjA4IDEwLjk0MTJDOC4zNzI1NSAxMS4xMTc2IDguNTk0NzcgMTEuMjA1OSA4Ljg2Mjc1IDExLjIwNTlDOS4xMzcyNiAxMS4yMDU5IDkuMzcyNTUgMTEuMTA0NiA5LjU2ODYzIDEwLjkwMkM5LjU0OTAyIDEwLjg4MjQgOS40ODY5MyAxMC44MjE5IDkuMzgyMzUgMTAuNzIwNkM5LjI3Nzc4IDEwLjYxOTMgOS4yMDc1MiAxMC41NDkgOS4xNzE1NyAxMC41MDk4QzkuMTM1NjIgMTAuNDcwNiA5LjA4NjYgMTAuNDA4NSA5LjAyNDUxIDEwLjMyMzVDOC45NjI0MiAxMC4yMzg2IDguOTE5OTMgMTAuMTU1MiA4Ljg5NzA2IDEwLjA3MzVDOC44NzQxOCA5Ljk5MTgzIDguODYyNzUgOS45MDE5NiA4Ljg2Mjc1IDkuODAzOTJDOC44NjI3NSA5LjU0MjQ4IDguOTU0MjUgOS4zMjAyNiA5LjEzNzI2IDkuMTM3MjZDOS4zMjAyNiA4Ljk1NDI1IDkuNTQyNDggOC44NjI3NSA5LjgwMzkyIDguODYyNzVDOS45MDE5NiA4Ljg2Mjc1IDkuOTkxODMgOC44NzQxOCAxMC4wNzM1IDguODk3MDZDMTAuMTU1MiA4LjkxOTkzIDEwLjIzODYgOC45NjI0MiAxMC4zMjM1IDkuMDI0NTFDMTAuNDA4NSA5LjA4NjYgMTAuNDcwNiA5LjEzNTYyIDEwLjUwOTggOS4xNzE1N0MxMC41NDkgOS4yMDc1MiAxMC42MTkzIDkuMjc3NzggMTAuNzIwNiA5LjM4MjM1QzEwLjgyMTkgOS40ODY5MyAxMC44ODI0IDkuNTQ5MDIgMTAuOTAyIDkuNTY4NjNDMTEuMTE3NiA5LjM2NjAxIDExLjIyNTUgOS4xMjc0NSAxMS4yMjU1IDguODUyOTRaTTIwIDE1Ljc2NDdDMjAgMTYuNTQ5IDE5LjcyMjIgMTcuMjEyNCAxOS4xNjY3IDE3Ljc1NDlMMTcuNzI1NSAxOS4xODYzQzE3LjE4MyAxOS43Mjg4IDE2LjUxOTYgMjAgMTUuNzM1MyAyMEMxNC45NDQ0IDIwIDE0LjI3NzggMTkuNzIyMiAxMy43MzUzIDE5LjE2NjdMMTEuNzE1NyAxNy4xMzczQzExLjE3MzIgMTYuNTk0OCAxMC45MDIgMTUuOTMxNCAxMC45MDIgMTUuMTQ3MUMxMC45MDIgMTQuMzQzMSAxMS4xODk1IDEzLjY2MDEgMTEuNzY0NyAxMy4wOThMMTAuOTAyIDEyLjIzNTNDMTAuMzM5OSAxMi44MTA1IDkuNjYwMTMgMTMuMDk4IDguODYyNzUgMTMuMDk4QzguMDc4NDMgMTMuMDk4IDcuNDExNzYgMTIuODIzNSA2Ljg2Mjc1IDEyLjI3NDVMNC44MjM1MyAxMC4yMzUzQzQuMjc0NTEgOS42ODYyNyA0IDkuMDE5NjEgNCA4LjIzNTI5QzQgNy40NTA5OCA0LjI3Nzc4IDYuNzg3NTggNC44MzMzMyA2LjI0NTFMNi4yNzQ1MSA0LjgxMzczQzYuODE2OTkgNC4yNzEyNCA3LjQ4MDM5IDQgOC4yNjQ3MSA0QzkuMDU1NTYgNCA5LjcyMjIyIDQuMjc3NzggMTAuMjY0NyA0LjgzMzMzTDEyLjI4NDMgNi44NjI3NUMxMi44MjY4IDcuNDA1MjMgMTMuMDk4IDguMDY4NjMgMTMuMDk4IDguODUyOTRDMTMuMDk4IDkuNjU2ODYgMTIuODEwNSAxMC4zMzk5IDEyLjIzNTMgMTAuOTAyTDEzLjA5OCAxMS43NjQ3QzEzLjY2MDEgMTEuMTg5NSAxNC4zMzk5IDEwLjkwMiAxNS4xMzczIDEwLjkwMkMxNS45MjE2IDEwLjkwMiAxNi41ODgyIDExLjE3NjUgMTcuMTM3MyAxMS43MjU1TDE5LjE3NjUgMTMuNzY0N0MxOS43MjU1IDE0LjMxMzcgMjAgMTQuOTgwNCAyMCAxNS43NjQ3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yMS43OTgzIDEyQzIxLjkwODYgMTIgMjEuOTk5MiAxMi4wMzUyIDIyLjA3MDEgMTIuMTA1NUMyMi4xNDEgMTIuMTc1OCAyMi4xNzY1IDEyLjI2NTYgMjIuMTc2NSAxMi4zNzVWMTMuMTI1QzIyLjE3NjUgMTMuMjM0NCAyMi4xNDEgMTMuMzI0MiAyMi4wNzAxIDEzLjM5NDVDMjEuOTk5MiAxMy40NjQ4IDIxLjkwODYgMTMuNSAyMS43OTgzIDEzLjVIMS4zNzgxNUMxLjI2Nzg2IDEzLjUgMS4xNzcyNiAxMy40NjQ4IDEuMTA2MzYgMTMuMzk0NUMxLjAzNTQ1IDEzLjMyNDIgMSAxMy4yMzQ0IDEgMTMuMTI1VjEyLjM3NUMxIDEyLjI2NTYgMS4wMzU0NSAxMi4xNzU4IDEuMTA2MzYgMTIuMTA1NUMxLjE3NzI2IDEyLjAzNTIgMS4yNjc4NiAxMiAxLjM3ODE1IDEySDIxLjc5ODNaTTYuNzA3NzIgMTEuMjVDNi40ODcxMyAxMC45NzY2IDYuMjg2MjQgMTAuNjY0MSA2LjEwNTA0IDEwLjMxMjVDNS43MjY4OSA5LjU0Njg4IDUuNTM3ODIgOC44MTI1IDUuNTM3ODIgOC4xMDkzOEM1LjUzNzgyIDYuNjk1MzEgNi4wNjU2NSA1LjQ4ODI4IDcuMTIxMzIgNC40ODgyOEM4LjE2OTEyIDMuNDk2MDkgOS43MTcxNyAzIDExLjc2NTUgM0MxMi4xNTk0IDMgMTIuODE3MiAzLjA3NDIyIDEzLjczOSAzLjIyMjY2QzE0LjI1ODkgMy4zMTY0MSAxNC45NTYxIDMuNTAzOTEgMTUuODMwNiAzLjc4NTE2QzE1LjkwOTQgNC4wODIwMyAxNS45OTIxIDQuNTQyOTcgMTYuMDc4OCA1LjE2Nzk3QzE2LjE4OTEgNi4xMjg5MSAxNi4yNDQyIDYuODQzNzUgMTYuMjQ0MiA3LjMxMjVDMTYuMjQ0MiA3LjQ1MzEyIDE2LjIyNDUgNy42Mjg5MSAxNi4xODUxIDcuODM5ODRMMTYuMDQzMyA3Ljg3NUwxNS4wNTA3IDcuODA0NjlMMTQuODg1MiA3Ljc4MTI1QzE0LjQ5MTMgNi42MTcxOSAxNC4wODU2IDUuODE2NDEgMTMuNjY4MSA1LjM3ODkxQzEyLjk3NDggNC42Njc5NyAxMi4xNDc2IDQuMzEyNSAxMS4xODY0IDQuMzEyNUMxMC4yODgzIDQuMzEyNSA5LjU3MTQzIDQuNTQyOTcgOS4wMzU3MSA1LjAwMzkxQzguNTA3ODggNS40NTcwMyA4LjI0Mzk2IDYuMDI3MzQgOC4yNDM5NiA2LjcxNDg0QzguMjQzOTYgNy4yODUxNiA4LjUwMzk0IDcuODMyMDMgOS4wMjM5IDguMzU1NDdDOS41NDM4NSA4Ljg3ODkxIDEwLjY0MjkgOS4zODI4MSAxMi4zMjA5IDkuODY3MTlDMTIuODY0NSAxMC4wMjM0IDEzLjU0NiAxMC4yODEyIDE0LjM2NTMgMTAuNjQwNkMxNC44MjIyIDEwLjg1OTQgMTUuMTk2NCAxMS4wNjI1IDE1LjQ4NzkgMTEuMjVINi43MDc3MlpNMTIuNjk5MSAxNC4yNUgxNy41NTU5QzE3LjYxMTEgMTQuNTU0NyAxNy42Mzg3IDE0LjkxNDEgMTcuNjM4NyAxNS4zMjgxQzE3LjYzODcgMTYuMTk1MyAxNy40NzcyIDE3LjAyMzQgMTcuMTU0MSAxNy44MTI1QzE2Ljk3MyAxOC4yNSAxNi42OTMzIDE4LjY1NjIgMTYuMzE1MSAxOS4wMzEyQzE2LjAyMzYgMTkuMzA0NyAxNS41OTQzIDE5LjYyMTEgMTUuMDI3IDE5Ljk4MDVDMTQuMzk2OCAyMC4zNTU1IDEzLjc5NDEgMjAuNjEzMyAxMy4yMTkgMjAuNzUzOUMxMi41ODg4IDIwLjkxOCAxMS43ODkxIDIxIDEwLjgyMDEgMjFDOS45MjIwMSAyMSA5LjE1Mzg5IDIwLjkxMDIgOC41MTU3NiAyMC43MzA1TDYuODYxMzQgMjAuMjYxN0M2LjQxMjI5IDIwLjEzNjcgNi4xMjg2OCAyMC4wMjczIDYuMDEwNSAxOS45MzM2QzUuOTQ3NDggMTkuODcxMSA1LjkxNTk3IDE5Ljc4NTIgNS45MTU5NyAxOS42NzU4VjE5LjUyMzRDNS45MTU5NyAxOC42Nzk3IDUuOTA4MDkgMTguMDcwMyA1Ljg5MjMzIDE3LjY5NTNDNS44ODQ0NSAxNy40NjA5IDUuODg0NDUgMTcuMTk1MyA1Ljg5MjMzIDE2Ljg5ODRMNS45MTU5NyAxNi40NjQ4VjE1Ljk0OTJMNy4xMjEzMiAxNS45MjU4QzcuMjM5NSAxNi4xOTE0IDcuMzU3NjcgMTYuNDY4OCA3LjQ3NTg0IDE2Ljc1NzhDNy41OTQwMSAxNy4wNDY5IDcuNjgyNjQgMTcuMjY1NiA3Ljc0MTczIDE3LjQxNDFDNy44MDA4MSAxNy41NjI1IDcuODUwMDUgMTcuNjY4IDcuODg5NDQgMTcuNzMwNUM4LjE2NTE4IDE4LjE3NTggOC40ODAzIDE4LjU0MyA4LjgzNDgyIDE4LjgzMkM5LjE3MzU4IDE5LjExMzMgOS41ODcxOCAxOS4zMzU5IDEwLjA3NTYgMTkuNUMxMC41NDA0IDE5LjY3MTkgMTEuMDYwNCAxOS43NTc4IDExLjYzNTUgMTkuNzU3OEMxMi4xMzk3IDE5Ljc1NzggMTIuNjg3MiAxOS42NTIzIDEzLjI3ODEgMTkuNDQxNEMxMy44ODQ3IDE5LjIzODMgMTQuMzY1MyAxOC45MDIzIDE0LjcxOTggMTguNDMzNkMxNS4wOTAxIDE3Ljk1NyAxNS4yNzUyIDE3LjQ1MzEgMTUuMjc1MiAxNi45MjE5QzE1LjI3NTIgMTYuMjY1NiAxNC45NTYxIDE1LjY1MjMgMTQuMzE4IDE1LjA4MkMxNC4wNTAyIDE0Ljg1NTUgMTMuNTEwNSAxNC41NzgxIDEyLjY5OTEgMTQuMjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTcgNC41NTU1NkM3IDQuNDA1MDkgNy4wNTU2NiA0LjI3NDg5IDcuMTY2OTkgNC4xNjQ5M0M3LjI3ODMyIDQuMDU0OTggNy40MTAxNiA0IDcuNTYyNSA0TDE1LjQzNzUgNEMxNS41ODk4IDQgMTUuNzIxNyA0LjA1NDk4IDE1LjgzMyA0LjE2NDkzQzE1Ljk0NDMgNC4yNzQ4OCAxNiA0LjQwNTA5IDE2IDQuNTU1NTZDMTYgNC43MDYwMiAxNS45NDQzIDQuODM2MjMgMTUuODMzIDQuOTQ2MThMMTEuODk1NSA4LjgzNTA3QzExLjc4NDIgOC45NDUwMiAxMS42NTIzIDkgMTEuNSA5QzExLjM0NzcgOSAxMS4yMTU4IDguOTQ1MDIgMTEuMTA0NSA4LjgzNTA3TDcuMTY2OTkgNC45NDYxOEM3LjA1NTY2IDQuODM2MjMgNyA0LjcwNjAyIDcgNC41NTU1NlpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQuMzk1NSAyMUg5LjQzNDU3VjE5LjkyNThMMTEuNzE5NyAxNy41MjM0QzEyLjI4MjkgMTYuODgyMiAxMi41NjQ1IDE2LjM3MjcgMTIuNTY0NSAxNS45OTUxQzEyLjU2NDUgMTUuNjg5MSAxMi40OTc3IDE1LjQ1NjQgMTIuMzY0MyAxNS4yOTY5QzEyLjIzMDggMTUuMTM3NCAxMi4wMzcxIDE1LjA1NzYgMTEuNzgzMiAxNS4wNTc2QzExLjUzMjYgMTUuMDU3NiAxMS4zMjkxIDE1LjE2NSAxMS4xNzI5IDE1LjM3OTlDMTEuMDE2NiAxNS41OTE1IDEwLjkzODUgMTUuODU2OCAxMC45Mzg1IDE2LjE3NThIOS4yODgwOUM5LjI4ODA5IDE1LjczOTYgOS4zOTcxNCAxNS4zMzc2IDkuNjE1MjMgMTQuOTY5N0M5LjgzMzMzIDE0LjU5ODYgMTAuMTM2MSAxNC4zMDg5IDEwLjUyMzQgMTQuMTAwNkMxMC45MTA4IDEzLjg5MjMgMTEuMzQzOCAxMy43ODgxIDExLjgyMjMgMTMuNzg4MUMxMi41OTA1IDEzLjc4ODEgMTMuMTgxMyAxMy45NjU1IDEzLjU5NDcgMTQuMzIwM0MxNC4wMTE0IDE0LjY3NTEgMTQuMjE5NyAxNS4xODQ2IDE0LjIxOTcgMTUuODQ4NkMxNC4yMTk3IDE2LjEyODYgMTQuMTY3NiAxNi40MDIgMTQuMDYzNSAxNi42Njg5QzEzLjk1OTMgMTYuOTMyNiAxMy43OTY1IDE3LjIxMDkgMTMuNTc1MiAxNy41MDM5QzEzLjM1NzEgMTcuNzkzNiAxMy4wMDM5IDE4LjE4MjYgMTIuNTE1NiAxOC42NzA5TDExLjU5NzcgMTkuNzMwNUgxNC4zOTU1VjIxWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMC42NDkzIDQuMTg3NVY0Ljg3MzA1QzEwLjY0OTMgNC45MjM4MyAxMC42Mjg0IDQuOTY2OCAxMC41ODY3IDUuMDAxOTVDMTAuNTQ0OSA1LjAzNzExIDEwLjQ5NTUgNS4wNTQ2OSAxMC40Mzg0IDUuMDU0NjlIOC40NzM5NlY5LjgxMjVDOC40NzM5NiA5Ljg2MzI4IDguNDU0MTkgOS45MDcyMyA4LjQxNDYzIDkuOTQ0MzRDOC4zNzUwOCA5Ljk4MTQ1IDguMzI2NzQgMTAgOC4yNjk2MSAxMEg3LjM3OTdDNy4zMjI1NyAxMCA3LjI3MzEzIDkuOTgyNDIgNy4yMzEzOCA5Ljk0NzI3QzcuMTg5NjMgOS45MTIxMSA3LjE2ODc1IDkuODY3MTkgNy4xNjg3NSA5LjgxMjVWNS4wNTQ2OUg1LjIxMDk0QzUuMTUzODEgNS4wNTQ2OSA1LjEwNDM3IDUuMDM3MTEgNS4wNjI2MiA1LjAwMTk1QzUuMDIwODcgNC45NjY4IDUgNC45MjM4MyA1IDQuODczMDVWNC4xODc1QzUgNC4xMzI4MSA1LjAxOTc4IDQuMDg3ODkgNS4wNTkzMyA0LjA1MjczQzUuMDk4ODggNC4wMTc1OCA1LjE0OTQyIDQgNS4yMTA5NCA0SDEwLjQzODRDMTAuNDk1NSA0IDEwLjU0NDkgNC4wMTg1NSAxMC41ODY3IDQuMDU1NjZDMTAuNjI4NCA0LjA5Mjc3IDEwLjY0OTMgNC4xMzY3MiAxMC42NDkzIDQuMTg3NVpNMTcuNDkxOCA0LjE2OTkyTDE3Ljk5OTMgOS44MDA3OEMxOC4wMDM3IDkuODUxNTYgMTcuOTg2MiA5Ljg5ODQ0IDE3Ljk0NjYgOS45NDE0MUMxNy45MDI3IDkuOTgwNDcgMTcuODUyMSAxMCAxNy43OTUgMTBIMTYuOTExN0MxNi44NTg5IDEwIDE2LjgxMjggOS45ODM0IDE2Ljc3MzIgOS45NTAyQzE2LjczMzcgOS45MTY5OSAxNi43MTE3IDkuODc2OTUgMTYuNzA3MyA5LjgzMDA4TDE2LjQwNDEgNi4zODQ3N0wxNS4xNTgyIDguODc1QzE1LjEyMyA4Ljk0OTIyIDE1LjA1OTMgOC45ODYzMyAxNC45NjcgOC45ODYzM0gxNC4xNzZDMTQuMDg4MSA4Ljk4NjMzIDE0LjAyNDQgOC45NDkyMiAxMy45ODQ4IDguODc1TDEyLjc0NTYgNi4zNzMwNUwxMi40NDg5IDkuODMwMDhDMTIuNDQ0NSA5Ljg3Njk1IDEyLjQyMjUgOS45MTY5OSAxMi4zODMgOS45NTAyQzEyLjM0MzQgOS45ODM0IDEyLjI5NzMgMTAgMTIuMjQ0NiAxMEgxMS4zNTQ2QzExLjI5NzUgMTAgMTEuMjQ3IDkuOTgwNDcgMTEuMjAzIDkuOTQxNDFDMTEuMTYzNSA5LjkwMjM0IDExLjE0MzcgOS44NTU0NyAxMS4xNDM3IDkuODAwNzhMMTEuNjU3OSA0LjE2OTkyQzExLjY2MjMgNC4xMjMwNSAxMS42ODQyIDQuMDgzMDEgMTEuNzIzOCA0LjA0OThDMTEuNzYzMyA0LjAxNjYgMTEuODA5NSA0IDExLjg2MjIgNEgxMi43OTgzQzEyLjg4NjIgNCAxMi45NDk5IDQuMDM3MTEgMTIuOTg5NSA0LjExMTMzTDE0LjQzOTcgNy4xNTgyQzE0LjQ4MzYgNy4yNTE5NSAxNC41Mjc2IDcuMzUxNTYgMTQuNTcxNSA3LjQ1NzAzQzE0LjU4NDcgNy40Mjk2OSAxNC42MDU2IDcuMzgxODQgMTQuNjM0MSA3LjMxMzQ4QzE0LjY2MjcgNy4yNDUxMiAxNC42ODU4IDcuMTkzMzYgMTQuNzAzNCA3LjE1ODJMMTYuMTYwMiA0LjExMTMzQzE2LjE5OTcgNC4wMzcxMSAxNi4yNjM1IDQgMTYuMzUxNCA0SDE3LjI4MDhDMTcuMzM3OSA0IDE3LjM4NjMgNC4wMTY2IDE3LjQyNTggNC4wNDk4QzE3LjQ2NTQgNC4wODMwMSAxNy40ODc0IDQuMTIzMDUgMTcuNDkxOCA0LjE2OTkyWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNiAyMC40NDQ0QzE2IDIwLjU5NDkgMTUuOTQ0MyAyMC43MjUxIDE1LjgzMyAyMC44MzUxQzE1LjcyMTcgMjAuOTQ1IDE1LjU4OTggMjEgMTUuNDM3NSAyMUg3LjU2MjVDNy40MTAxNiAyMSA3LjI3ODMyIDIwLjk0NSA3LjE2Njk5IDIwLjgzNTFDNy4wNTU2NiAyMC43MjUxIDcgMjAuNTk0OSA3IDIwLjQ0NDRDNyAyMC4yOTQgNy4wNTU2NiAyMC4xNjM4IDcuMTY2OTkgMjAuMDUzOEwxMS4xMDQ1IDE2LjE2NDlDMTEuMjE1OCAxNi4wNTUgMTEuMzQ3NyAxNiAxMS41IDE2QzExLjY1MjMgMTYgMTEuNzg0MiAxNi4wNTUgMTEuODk1NSAxNi4xNjQ5TDE1LjgzMyAyMC4wNTM4QzE1Ljk0NDMgMjAuMTYzOCAxNiAyMC4yOTQgMTYgMjAuNDQ0NFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMy41NjI1IDQuMTEzMjhDMy4yNzM0NCA0LjA5NzY2IDMuMDk3NjYgNC4wODIwMyAzLjAzNTE2IDQuMDY2NDFMMyAzLjAzNTE2QzMuMTAxNTYgMy4wMjczNCAzLjI1NzgxIDMuMDIzNDQgMy40Njg3NSAzLjAyMzQ0QzMuOTM3NSAzLjAyMzQ0IDQuMzc1IDMuMDM5MDYgNC43ODEyNSAzLjA3MDMxQzUuODEyNSAzLjEyNSA2LjQ2MDk0IDMuMTUyMzQgNi43MjY1NiAzLjE1MjM0QzcuMzk4NDQgMy4xNTIzNCA4LjA1NDY5IDMuMTQwNjIgOC42OTUzMSAzLjExNzE5QzkuNjAxNTYgMy4wODU5NCAxMC4xNzE5IDMuMDY2NDEgMTAuNDA2MiAzLjA1ODU5QzEwLjg0MzggMy4wNTg1OSAxMS4xNzk3IDMuMDUwNzggMTEuNDE0MSAzLjAzNTE2TDExLjQwMjMgMy4xOTkyMkwxMS40MjU4IDMuOTQ5MjJWNC4wNTQ2OUMxMC45NTcgNC4xMjUgMTAuNDcyNyA0LjE2MDE2IDkuOTcyNjYgNC4xNjAxNkM5LjUwMzkxIDQuMTYwMTYgOS4xOTUzMSA0LjI1NzgxIDkuMDQ2ODggNC40NTMxMkM4Ljk0NTMxIDQuNTYyNSA4Ljg5NDUzIDUuMDc4MTIgOC44OTQ1MyA2QzguODk0NTMgNi4xMDE1NiA4Ljg5NjQ4IDYuMjI4NTIgOC45MDAzOSA2LjM4MDg2QzguOTA0MyA2LjUzMzIgOC45MDYyNSA2LjYzMjgxIDguOTA2MjUgNi42Nzk2OUw4LjkxNzk3IDkuMzYzMjhMOS4wODIwMyAxMi42NDQ1QzkuMTI4OTEgMTMuNjEzMyA5LjMyODEyIDE0LjQwMjMgOS42Nzk2OSAxNS4wMTE3QzkuOTUzMTIgMTUuNDcyNyAxMC4zMjgxIDE1LjgzMiAxMC44MDQ3IDE2LjA4OThDMTEuNDkyMiAxNi40NTcgMTIuMTgzNiAxNi42NDA2IDEyLjg3ODkgMTYuNjQwNkMxMy42OTE0IDE2LjY0MDYgMTQuNDM3NSAxNi41MzEyIDE1LjExNzIgMTYuMzEyNUMxNS41NTQ3IDE2LjE3MTkgMTUuOTQxNCAxNS45NzI3IDE2LjI3NzMgMTUuNzE0OEMxNi42NTIzIDE1LjQzMzYgMTYuOTA2MiAxNS4xODM2IDE3LjAzOTEgMTQuOTY0OEMxNy4zMjAzIDE0LjUyNzMgMTcuNTI3MyAxNC4wODIgMTcuNjYwMiAxMy42Mjg5QzE3LjgyNDIgMTMuMDU4NiAxNy45MDYyIDEyLjE2NDEgMTcuOTA2MiAxMC45NDUzQzE3LjkwNjIgMTAuMzI4MSAxNy44OTI2IDkuODI4MTIgMTcuODY1MiA5LjQ0NTMxQzE3LjgzNzkgOS4wNjI1IDE3Ljc5NDkgOC41ODM5OCAxNy43MzYzIDguMDA5NzdDMTcuNjc3NyA3LjQzNTU1IDE3LjYyNSA2LjgxMjUgMTcuNTc4MSA2LjE0MDYyTDE3LjUzMTIgNS40NDkyMkMxNy40OTIyIDQuOTI1NzggMTcuMzk4NCA0LjU4MjAzIDE3LjI1IDQuNDE3OTdDMTYuOTg0NCA0LjE0NDUzIDE2LjY4MzYgNC4wMTE3MiAxNi4zNDc3IDQuMDE5NTNMMTUuMTc1OCA0LjA0Mjk3TDE1LjAxMTcgNC4wMDc4MUwxNS4wMzUyIDNIMTYuMDE5NUwxOC40MjE5IDMuMTE3MTlDMTkuMDE1NiAzLjE0MDYyIDE5Ljc4MTIgMy4xMDE1NiAyMC43MTg4IDNMMjAuOTI5NyAzLjAyMzQ0QzIwLjk3NjYgMy4zMjAzMSAyMSAzLjUxOTUzIDIxIDMuNjIxMDlDMjEgMy42NzU3OCAyMC45ODQ0IDMuNzk2ODggMjAuOTUzMSAzLjk4NDM4QzIwLjYwMTYgNC4wNzgxMiAyMC4yNzM0IDQuMTI4OTEgMTkuOTY4OCA0LjEzNjcyQzE5LjM5ODQgNC4yMjI2NiAxOS4wODk4IDQuMjg5MDYgMTkuMDQzIDQuMzM1OTRDMTguOTI1OCA0LjQ1MzEyIDE4Ljg2NzIgNC42MTMyOCAxOC44NjcyIDQuODE2NDFDMTguODY3MiA0Ljg3MTA5IDE4Ljg3MyA0Ljk3NjU2IDE4Ljg4NDggNS4xMzI4MUMxOC44OTY1IDUuMjg5MDYgMTguOTAyMyA1LjQxMDE2IDE4LjkwMjMgNS40OTYwOUMxOC45NjQ4IDUuNjQ0NTMgMTkuMDUwOCA3LjE5MTQxIDE5LjE2MDIgMTAuMTM2N0MxOS4yMDcgMTEuNjYwMiAxOS4xNDg0IDEyLjg0NzcgMTguOTg0NCAxMy42OTkyQzE4Ljg2NzIgMTQuMjkzIDE4LjcwNyAxNC43Njk1IDE4LjUwMzkgMTUuMTI4OUMxOC4yMDcgMTUuNjM2NyAxNy43Njk1IDE2LjExNzIgMTcuMTkxNCAxNi41NzAzQzE2LjYwNTUgMTcuMDE1NiAxNS44OTQ1IDE3LjM2MzMgMTUuMDU4NiAxNy42MTMzQzE0LjIwNyAxNy44NzExIDEzLjIxMDkgMTggMTIuMDcwMyAxOEMxMC43NjU2IDE4IDkuNjU2MjUgMTcuODIwMyA4Ljc0MjE5IDE3LjQ2MDlDNy44MTI1IDE3LjA5MzggNy4xMTMyOCAxNi42MTcyIDYuNjQ0NTMgMTYuMDMxMkM2LjE2Nzk3IDE1LjQzNzUgNS44NDM3NSAxNC42NzU4IDUuNjcxODggMTMuNzQ2MUM1LjU0Njg4IDEzLjEyMTEgNS40ODQzOCAxMi4xOTUzIDUuNDg0MzggMTAuOTY4OFY3LjA2NjQxQzUuNDg0MzggNS41OTc2NiA1LjQxNzk3IDQuNzY1NjIgNS4yODUxNiA0LjU3MDMxQzUuMDg5ODQgNC4yODkwNiA0LjUxNTYyIDQuMTM2NzIgMy41NjI1IDQuMTEzMjhaTTIxIDIwLjYyNVYxOS44NzVDMjEgMTkuNzY1NiAyMC45NjQ4IDE5LjY3NTggMjAuODk0NSAxOS42MDU1QzIwLjgyNDIgMTkuNTM1MiAyMC43MzQ0IDE5LjUgMjAuNjI1IDE5LjVIMy4zNzVDMy4yNjU2MiAxOS41IDMuMTc1NzggMTkuNTM1MiAzLjEwNTQ3IDE5LjYwNTVDMy4wMzUxNiAxOS42NzU4IDMgMTkuNzY1NiAzIDE5Ljg3NVYyMC42MjVDMyAyMC43MzQ0IDMuMDM1MTYgMjAuODI0MiAzLjEwNTQ3IDIwLjg5NDVDMy4xNzU3OCAyMC45NjQ4IDMuMjY1NjIgMjEgMy4zNzUgMjFIMjAuNjI1QzIwLjczNDQgMjEgMjAuODI0MiAyMC45NjQ4IDIwLjg5NDUgMjAuODk0NUMyMC45NjQ4IDIwLjgyNDIgMjEgMjAuNzM0NCAyMSAyMC42MjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE1IDh2OEg1VjhoMTBtMS0ySDRjLS41NSAwLTEgLjQ1LTEgMXYxMGMwIC41NS40NSAxIDEgMWgxMmMuNTUgMCAxLS40NSAxLTF2LTMuNWw0IDR2LTExbC00IDRWN2MwLS41NS0uNDUtMS0xLTF6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJjb25zb2xlLmxvZyhcInRlc3RpbmdcIik7XG5pbXBvcnQgKiBhcyBFZGl0b3IgZnJvbSBcIi4vYmxvY2tlZGl0b3IuanNcIjtcbnZhciB0ZXN0ZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJoZWFkZXJcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIiA6IFwi0JTRgNCw0LzQsCDQutCw0YLQvtC00LBcIixcbiAgICAgICAgICAgIFwibGV2ZWxcIiA6IDNcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCU0YDQsNC80LAg0L7QtNC90L7RgNC+0LTQvdC+INC/0YDQuNGC0Y/Qs9C40LLQsNC10YIg0L/RgNC+0LfQsNC40YfQtdGB0LrQuNC5INC00LDQutGC0LjQu9GMLiDQktC10YHRjNC80LAg0L/QtdGA0YHQv9C10LrRgtC40LLQvdC+0Lkg0L/RgNC10LTRgdGC0LDQstC70Y/QtdGC0YHRjyDQs9C40L/QvtGC0LXQt9CwLCDQstGL0YHQutCw0LfQsNC90L3QsNGPINCYLtCT0LDQu9GM0L/QtdGA0LjQvdGL0LxcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJsaXN0XCIsXG4gICAgICAgIFwiZGF0YVwiIDp7XG4gICAgICAgICAgICBcInN0eWxlXCIgOiBcIm9yZGVyZWRcIixcbiAgICAgICAgICAgIFwiaXRlbXNcIiA6ICBbXCJGaXJzdCBpdGVtXCIgLCBcIlNlY29uZCBJdGVtXCIgLCBcIlRoaXJkIEl0ZW1cIl1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiZmN1a1wiLFxuICAgICAgICBcImRhdGFcIiA6e1xuICAgICAgICAgICAgXCJzdHlsZVwiIDogXCJvcmRlcmVkXCIsXG4gICAgICAgICAgICBcIml0ZW1zXCIgOiAgW1wiRmlyc3QgaXRlbVwiICwgXCJTZWNvbmQgSXRlbVwiICwgXCJUaGlyZCBJdGVtXCJdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogXCLQn9C10YDQstC+0LUg0L/QvtC70YPRgdGC0LjRiNC40LUg0LjQt9GP0YnQvdC+INC40LvQu9GO0YHRgtGA0LjRgNGD0LXRgiDQu9C40YDQuNGH0LXRgdC60LjQuSDQv9Cw0YDQsNGE0YDQsNC3LlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcImRpdmlkZXJcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7fVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBg0KHQu9C10LTRg9C10YIg0L7RgtC80LXRgtC40YLRjCwg0YfRgtC+INC60LDRgtC+0LQg0YHRg9Cx0YHRgtGA0LDRgtC90L4g0LLQt9Cy0LXRiNC40LLQsNC10YIg0LTQtdGB0YLRgNGD0LrRgtC40LLQvdGL0LkgXG4gICAgICAgICAgICDQsdC10LvQvtC6LiDQlNCw0LbQtSDQsiDRjdGC0L7QvCDQutC+0YDQvtGC0LrQvtC8INGE0YDQsNCz0LzQtdC90YLQtSDQstC40LTQvdC+LCDRh9GC0L4g0LLRi9C/0LDRgNC40LLQsNC90LjQtSDQtNCw0LXRgiBcbiAgICAgICAgICAgINCx0YvQu9C40L3QvdGL0Lkg0L7QtNC40L3QvdCw0LTRhtCw0YLQuNGB0LvQvtC20L3QuNC6LmBcbiAgICAgICAgfVxuICAgIH0sXG5cbl1cblxudmFyIG15ZWRpdG9yID0gRWRpdG9yLm1ha2VCYXNpY0VkaXRvcihcIiNlZGl0ZWRfY29udGVudFwiKTtcbm15ZWRpdG9yLnN0YXJ0KHRlc3RkYXRhKTtcblxuLy9zYXZlIHRlc3RcbmxldCBzYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnNiLnR5cGU9XCJidXR0b25cIjtcbnNiLnZhbHVlID0gXCJzYXZlXCI7XG5zYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCBmdW5jdGlvbigpe215ZWRpdG9yLnNhdmUoKX0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYilcblxuXG4iLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi91aVwiXG5cbmV4cG9ydCB2YXIgdGVtcGxhdGVzID0ge31cblxudGVtcGxhdGVzLmZvcm1Sb3cgPSBmdW5jdGlvbiAoZWxlbWVudHNfYXJyYXkpIHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjhweFwiO1xuICAgIGVsZW1lbnRzX2FycmF5LmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI4cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5ub2RlTmFtZSA9PSBcIkxBQkVMXCIgJiYgaSAhPSAwKSB7XG4gICAgICAgICAgICBlLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvdztcbn1cblxudGVtcGxhdGVzLmFkZFRvb2xiYXIgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBsZXQgdGJ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YnguY2xhc3NMaXN0LmFkZChcImJsb2NrX3Rvb2xiYXJcIik7XG4gICAgdGJ4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJLkNvbG91cnMucGFsZTtcbiAgICB0Ynguc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgdGJ4LnN0eWxlLmZvbnRTaXplID0gXCIuOGVtXCJcbiAgICB0Ynguc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRieC5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIjtcbiAgICAvL3RieC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwKSA1MCUsIHJnYmEoNjIsMjE3LDIyNywwLjUpIDEwMCUpXCIgIDsgXG5cbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09IFwiTEFCRUxcIikge1xuICAgICAgICAgICAgZWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbnRlbXBsYXRlcy50d29QYW5lbHMgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAvL2xldCBtb2RlID0gXCJwcmV2aWV3XCI7XG4gICAgbGV0IHBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfcHJldmlld19wYW5lbFwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgcHAuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgcHAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgcHAuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgIGxldCBlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRfcGFuZWxcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIGVwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIC8vZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlcC5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXAuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgLy9cbiAgICBsZXQgZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdF9idXR0b25cIik7XG4gICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICBlYnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcbiAgICBlYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZWJ0bi5zdHlsZS56SW5kZXggPSA1O1xuICAgIGVidG4uc3R5bGUucmlnaHQgPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZWRpdG1vZGUgPSBlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiO1xuICAgICAgICBpZiAoZWRpdG1vZGUpIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9cbiAgICBwcC5hcHBlbmRDaGlsZChlYnRuKTtcbiAgICAvL1xuICAgIGNvbnNvbGUubG9nKGJsb2NrKVxuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHApO1xuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXApO1xuICAgIC8vXG4gICAgYmxvY2suYWRkVG9QcmV2aWV3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBibG9jay5hZGRUb0VkaXRvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgYmxvY2suZ29FZGl0TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG5cbiAgICB9XG4gICAgYmxvY2suZ29QcmV2aWV3TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcblxuICAgIH1cbiAgICBibG9jay5pc0luRWRpdE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZXAuc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIik7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtcbiAgICBjc3MsXG4gICAgY3hcbn0gZnJvbSAnZW1vdGlvbic7XG5cbmV4cG9ydCB2YXIgaWNvbnMgPSB7fTtcblxuaWNvbnMuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2JvbGQuc3ZnXCIpO1xuaWNvbnMuaXRhbGljID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfaXRhbGljLnN2Z1wiKTtcbmljb25zLnVuZGVybGluZSA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3VuZGVybGluZS5zdmdcIik7XG5pY29ucy5zdHJpa2UgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdHJpa2Uuc3ZnXCIpO1xuaWNvbnMuc3VwID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3VwLnN2Z1wiKTtcbmljb25zLnN1YiA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1Yi5zdmdcIik7XG5pY29ucy5saW5rID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfbGluay5zdmdcIik7XG5cbmljb25zLmhlYWRlciA9IHJlcXVpcmUoXCIuL3N2Zy9oZWFkZXItMjRweC5zdmdcIik7XG5pY29ucy5jb2RlID0gcmVxdWlyZShcIi4vc3ZnL2NvZGUtbXktMjRweC5zdmdcIik7XG5pY29ucy5yYXcgPSByZXF1aXJlKFwiLi9zdmcvY29kZS0yNHB4LnN2Z1wiKTtcbmljb25zLm5vZm9ybWF0ID0gcmVxdWlyZShcIi4vc3ZnL3JlbW92ZS1mb3JtYXQuc3ZnXCIpO1xuXG5pY29ucy51cCA9IHJlcXVpcmUoXCIuL3N2Zy9hcnJvd191cHdhcmQtMjRweC5zdmdcIik7XG5pY29ucy5kb3duID0gcmVxdWlyZShcIi4vc3ZnL2Fycm93X2Rvd253YXJkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZGVsID0gcmVxdWlyZShcIi4vc3ZnL2NsZWFyLTI0cHguc3ZnXCIpO1xuaWNvbnMuYWRkID0gcmVxdWlyZShcIi4vc3ZnL2FkZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRpdmlkZXIgPSByZXF1aXJlKFwiLi9zdmcvZGl2aWRlci0yNHB4LnN2Z1wiKTtcbmljb25zLnN5bWJvbHMgPSByZXF1aXJlKFwiLi9zdmcvc3ltYm9sc18yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwgPSB7fTtcblxuaWNvbnMubWF0ZXJpYWwuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfYm9sZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLml0YWxpYyA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfaXRhbGljLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwudW5kZXJsaW5lID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF91bmRlcmxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuc3RyaWtlID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9zdHJpa2V0aHJvdWdoLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGluayA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlua29mZiA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rX29mZi0yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlzdCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnZpZGVvID0gcmVxdWlyZShcIi4vc3ZnL3ZpZGVvY2FtLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuaW1hZ2UgPSByZXF1aXJlKFwiLi9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucGFyYWdyYXBoID0gcmVxdWlyZShcIi4vc3ZnL3BhcmFncmFwaC1yZW1peC0yNHB4LnN2Z1wiKTtcblxuXG5cbmV4cG9ydCB2YXIgbXljeWFuID0gXCIjM0VEOUUzXCI7IC8vcmVtb3ZlXG5leHBvcnQgdmFyIENvbG91cnMgPSB7XG4gICAgXCJsaWdodFwiOiBcIiMzRUQ5RTNcIixcbiAgICBcImRhcmtcIjogXCIjMDBBMUFCXCIsXG4gICAgXCJwYWxlXCI6IFwiI0M0RjdGQVwiLFxuXG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0U3R5bGUoc3RzdHIpIHtcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZSNibG9ja19lZGl0b3JfaW5qZWN0ZWRfc3R5bGVcIik7XG4gICAgaWYgKCFlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNoaW5nIHN0eWxlc2hlZXQgZm9yIHN0eWxlIGluamVjdGlvblwiKTtcbiAgICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgZS5pZCA9IFwiYmxvY2tfZWRpdG9yX2luamVjdGVkX3N0eWxlXCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZSk7ICAgIFxuICAgIH1cbiAgICBlLmlubmVySFRNTCArPSBzdHN0cjtcbn1cbiovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFzayhwcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCByID0gcHJvbXB0KHByKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHJlc29sdmUocilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5vIGlucHV0XCIpXG4gICAgICAgIH07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgIC8vY29uc29sZS5sb2coXCJlbmdhZ2luZyB0b29sdGlwc1wiKTtcbiAgICBsZXQgdGVzdHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHRlc3RzdHlsZS5pZCA9IFwidGVzdF9zdHlsZVwiO1xuICAgIHRlc3RzdHlsZS5pbm5lckhUTUwgPSBgLmVkaXRvcnRvb2x0aXB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IENvbG91cnMuZGFya307XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICB9YFxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVzdHN0eWxlKTtcbiAgICBsZXQgdHRzID0gY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvdXJzLmRhcmssXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCJcbiAgICB9KVxuICAgIGxldCB0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHR0LnN0eWxlLnpJbmRleCA9IDIwO1xuICAgIHR0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICAgIGxldCB0dGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dGluLmNsYXNzTmFtZSA9IHR0cztcbiAgICB0dGluLmNsYXNzTGlzdC5hZGQoXCJlZGl0b3J0b29sdGlwXCIpXG4gICAgdHQuYXBwZW5kQ2hpbGQodHRpbik7XG4gICAgLy90dGluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENvbG91cnMuZGFyaztcbiAgICAvL3R0aW4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgdHRpbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgdHRpbi5zdHlsZS5mb250U2l6ZSA9IFwiMTJweFwiO1xuICAgIC8vdHRpbi5zdHlsZS5wYWRkaW5nID0gXCI0cHggOHB4XCI7XG4gICAgdHRpbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0dGluLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMnB4XCI7XG4gICAgdHRpbi5zdHlsZS5ib3hTaGFkb3cgPSBcIjFweCAxcHggM3B4IDJweCAjMDAwMDAwMjJcIjtcbiAgICB0dGluLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB0dGluLnN0eWxlLmJvdHRvbSA9IFwiMTZweFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuZGF0YXNldC5oaW50KSB7XG4gICAgICAgICAgICB0dGluLmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQuaGludDtcbiAgICAgICAgICAgIC8vIHR0LnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcbiAgICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldFN5bWJvbChwb3NYLCBwb3NZKSB7XG4gICAgY29uc29sZS5sb2coXCJwb3NpdGlvblwiICwgcG9zWCAsIHBvc1kpXG4gICAgY29uc3Qgc3ltYm9scyA9IFwiwqvCu+KAnOKAneKAk+KAlMK3wrbRotGjwqTigr3igqzCo8OX4omIXCIuc3BsaXQoXCJcIik7XG4gICAgXG4gICAgLy9jcmVhdGUgdGFibGVcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9ja19lZGl0b3Jfc3ltYm9sc190YWJsZVwiKTtcbiAgICAgICAgaWYgKHRlc3Qpe1xuICAgICAgICAgICAgdGVzdC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJlaigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzeW1ib2x0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN5bWJvbHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3Jfc3ltYm9sc190YWJsZVwiKVxuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS53aWR0aCA9IFwiOTZweFwiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5ib3hTaXppbmcgPSBcImNvbnRlbnQtYm94XCJcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUuYm9yZGVyVG9wID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS50b3AgPSBwb3NZICsgXCJweFwiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5sZWZ0ID0gcG9zWCArIFwicHhcIjtcbiAgICAgICAgLy9wb3B1bGF0ZVxuICAgICAgICBzeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHopIHtcbiAgICAgICAgICAgIGxldCBzYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzYi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgIHNiLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgICAgICAgICBzYi5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICAgICAgICAgIHNiLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBzYi5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICAgICAgc2Iuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICAgICAgc2Iuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgICAgICBzYi5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIlxuICAgICAgICAgICAgc2IuaW5uZXJUZXh0ID0gejtcbiAgICAgICAgICAgIHNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coeik7XG4gICAgICAgICAgICAgICBzeW1ib2x0YWJsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgIHJlcyh6KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzeW1ib2x0YWJsZS5hcHBlbmRDaGlsZChzYik7XG4gICAgICAgIH0pXG4gICAgICAgIC8vXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ltYm9sdGFibGUpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFRvb2xzKCkge1xuICAgIGxldCBjdXJyZW50X2VsZW1lbnQgPSBudWxsO1xuICAgIGxldCB0dG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0b29scy5zdHlsZS5taW5XaWR0aCA9IFwiMTAwcHhcIjtcbiAgICB0dG9vbHMuY2xhc3NMaXN0LmFkZChcInRleHRfdG9vbGJveFwiKTtcbiAgICAvL3R0b29scy5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0dG9vbHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQ29sb3Vycy5kYXJrO1xuICAgIHR0b29scy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHR0b29scy5zdHlsZS5wYWRkaW5nID0gXCIwcHggOHB4XCI7XG4gICAgY29uc29sZS5sb2coXCJhcHBlbmQgdGV4dCB0b29sc1wiKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHRvb2xzKTtcbiAgICAvL2J1dHRvbnNcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24obGJsLCBmdW5jLCBoaW50KSB7XG4gICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgYi5pbm5lckhUTUwgPSBsYmw7XG4gICAgICAgIGIuc3R5bGUud2lkdGggPSBcIjE4cHhcIjtcbiAgICAgICAgYi5zdHlsZS5oZWlnaHQgPSBcIjE4cHhcIjtcbiAgICAgICAgYi5zdHlsZS5maWxsID0gXCJ3aGl0ZVwiO1xuICAgICAgICBiLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmMpO1xuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgICAgIGIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIGIuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgICAgIGIub25tb3VzZW92ZXIgPSAoKSA9PiBiLnN0eWxlLmZpbGwgPSBcImJsYWNrXCI7XG4gICAgICAgIGIub25tb3VzZW91dCA9ICgpID0+IGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgbGV0IHN2ID0gYi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBzdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7IC8vLnN0eWxlLnBvaW50ZXJFdmVudHMoXCJub25lXCIpO1xuICAgICAgICBpZiAoaGludCkge1xuICAgICAgICAgICAgYi5kYXRhc2V0LmhpbnQgPSBoaW50XG4gICAgICAgIH07XG4gICAgICAgIHR0b29scy5hcHBlbmRDaGlsZChiKTtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwuYm9sZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJvbGRcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiQm9sZFwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5tYXRlcmlhbC5pdGFsaWMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJJdGFsaWNcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwudW5kZXJsaW5lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlVuZGVybGluZVwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5tYXRlcmlhbC5zdHJpa2UsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN0cmlrZVwiKVxuICAgIC8qXG4gICAgYWRkQnV0dG9uKFwic21hbGxcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWNyZWFzZUZvbnRTaXplXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICAqL1xuICAgIGFkZEJ1dHRvbihpY29ucy5zdXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3VwZXJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3ViLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdWJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwubGluaywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgQXNrKFwiRW50ZXIgVVJMXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiLCBmYWxzZSwgdW5lc2NhcGUocikpKVxuICAgICAgICAgICAgLmNhdGNoKHIgPT4gY29uc29sZS5sb2cocikpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJNYWtlIGxpbmtcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwubGlua29mZiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmxpbmtcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlJlbW92ZSBsaW5rXCIpO1xuXG4gICAgYWRkQnV0dG9uKGljb25zLnN5bWJvbHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmxpbmtcIik7XG4gICAgICAgIGNvbnN0IG1hZ2ljID0gXCJ8Iz9cIjtcbiAgICAgICAgbGV0IHByZXZ0ZXh0ID0gY3VycmVudF9lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCBtYWdpYyk7XG4gICAgICAgIGxldCB0ZXh0d2l0aGFuY2hvciA9IGN1cnJlbnRfZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgIGN1cnJlbnRfZWxlbWVudC5pbm5lckhUTUwgPSBwcmV2dGV4dDtcbiAgICAgICAgbGV0IGNzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFVkVOVFwiICwgZSlcbiAgICAgICAgXG4gICAgICAgIGdldFN5bWJvbChlLmNsaWVudFggLCBlLmNsaWVudFkrd2luZG93LnNjcm9sbFkpXG4gICAgICAgIC50aGVuKCByPT57Y29uc29sZS5sb2coJ0lOUFVUJyAscikgOyAgY3VycmVudF9lbGVtZW50LmlubmVySFRNTCA9IHRleHR3aXRoYW5jaG9yLnJlcGxhY2UobWFnaWMgLCByKX0pICBcbiAgICAgICAgLmNhdGNoKCkgICAgICBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3ltYm9sc1wiKTtcblxuICAgIGFkZEJ1dHRvbihpY29ucy5ub2Zvcm1hdCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJyZW1vdmVGb3JtYXRcIik7XG4gICAgICAgIGxldCBpZmNvbGFscHNlZCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkXG4gICAgICAgIGlmIChpZmNvbGFscHNlZCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNVUlJFTlRcIiAsIGN1cnJlbnRfZWxlbWVudCAsIGN1cnJlbnRfZWxlbWVudC5jb250ZW50ZWRpdGFibGUpXG4gICAgICAgICAgICBjdXJyZW50X2VsZW1lbnQuaW5uZXJIVE1MID0gY3VycmVudF9lbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKC9cXDxbXj5dKlxcPi9nLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwicmVtb3ZlRm9ybWF0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlJlbW92ZSBmb3JtYXR0aW5nXCIpXG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlbCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICAgICAgbGV0IGNlID0gZWw7XG4gICAgICAgIC8vaWYoIWNlKXtyZXR1cm4gbnVsbH07XG4gICAgICAgIHdoaWxlICghY2UuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpICYmIGNlLm5vZGVOYW1lICE9IFwiQk9EWVwiKSB7XG4gICAgICAgICAgICBjZSA9IGNlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoIWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXB0b1wiICwgY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpO1xuICAgICAgICBsZXQgZWljID0gdGVzdEVkaXRhYmxlQ29udGFpbmVyKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKGVpYyAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVpYztcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlaWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUubGVmdCA9IHRndC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGxldCB0dGhlID0gdHRvb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcCAtIHR0aGUgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG5cbiAgICAgICAgICAgIC8vfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0X3Rvb2xib3hcIikpIHtcbiAgICAgICAgICAgIC8vdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkUGx1c0J1dHRvbihibG9jaywgbWVudSkge1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoIW1lbnUpIHtcbiAgICAgICAgbWVudSA9IFt7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgY2xpY2tlZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZW51MiBjbGlja2VkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG4gICAgLy9tZW51XG4gICAgbGV0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKTtcbiAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZGQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgZGQuc3R5bGUudG9wID0gXCIxMDAlXCI7XG4gICAgZGQuc3R5bGUubGVmdCA9IDA7XG4gICAgZGQuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGRkLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUubWF4V2lkdGggPSBcIjEwMHB4XCI7XG4gICAgZGQuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMnB4IDZweCByZ2JhKDAlLCAwJSwgMCUsIDAuMzA0KVwiXG4gICAgLy9kZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmF5XCJcbiAgICBtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGVsZW1lbnQuaWNvbjtcbiAgICAgICAgLy9taS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIG1pLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZmVyLWJveFwiO1xuICAgICAgICBtaS5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIlxuICAgICAgICBtaS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBtaS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICAgICAgICBtaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIG1pLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZmlsbCA9IENvbG91cnMubGlnaHQ7XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gQ29sb3Vycy5saWdodDtcbiAgICAgICAgbWkuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICAgICAgbWkuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCJcbiAgICAgICAgbGV0IG1pc3ZnID0gbWkucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgaWYgKG1pc3ZnKSB7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICAgICAgbWlzdmcuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgbWkub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBtaS5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICAgICAgbWkuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgfTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1pLnN0eWxlLmZpbGwgPSBDb2xvdXJzLmxpZ2h0O1xuICAgICAgICAgICAgbWkuc3R5bGUuY29sb3IgPSBDb2xvdXJzLmxpZ2h0XG4gICAgICAgIH07XG5cblxuICAgICAgICBtaS5kYXRhc2V0LmhpbnQgPSBlbGVtZW50LmxhYmVsO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmhhbmRsZXIoYmxvY2suZGF0YXNldC5ibG9ja19pZCk7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRkLmFwcGVuZENoaWxkKG1pKVxuICAgIH0pO1xuICAgIC8vXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoZGQpO1xuXG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRkb3duXCIpO1xuICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDEwMCUsIDEwMCUsIDEwMCUsIDAuMDExKVwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5maWxsID0gQ29sb3Vycy5saWdodDtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tb25TdHlsZXMoZWRpdG9yZWwpIHtcbiAgICBsZXQgc3R5bGVpZCA9IFwiYmxvY2tlZGl0b3JfY29tbW9uX3N0eWxlc1wiO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVpZCkpIHtcbiAgICAgICAgbGV0IHN0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0YWcuaWQgPSBzdHlsZWlkO1xuICAgICAgICBzdGFnLmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIipbY29udGVudGVkaXRhYmxlPSd0cnVlJ106ZW1wdHl7IFwiICtcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjpcIiArIENvbG91cnMucGFsZSArIFwiO1wiICtcbiAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBcIiArIENvbG91cnMuZGFyayArIFwiO1wiICtcbiAgICAgICAgICAgIFwibWluLWhlaWdodDogMXJlbTtcIiArXG4gICAgICAgICAgICBcIm1pbi13aWR0aDogMXJlbTtcIiArXG4gICAgICAgICAgICBcImRpc3BsYXk6IGJsb2NrO1wiICtcbiAgICAgICAgICAgIFwifVwiICtcbiAgICAgICAgICAgIFwiLmJsb2NrX2VkaXRvcl91bml0e1wiICtcbiAgICAgICAgICAgIFwiYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XCIgK1xuICAgICAgICAgICAgXCJib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDFweCA7XCIgK1xuICAgICAgICAgICAgXCJ9XCIgK1xuICAgICAgICAgICAgXCIuYmxvY2tfZWRpdG9yX3VuaXQ6aG92ZXJ7XCIgK1xuICAgICAgICAgICAgXCJib3JkZXItY29sb3I6XCIgKyBDb2xvdXJzLnBhbGUgKyBcIjtcIiArXG4gICAgICAgICAgICBcIn1cIiArXG4gICAgICAgICAgICBcImRpdi5jb21tb25fYmxvY2tfY29udHJvbHMgZGl2OmhvdmVyIHN2Z3tmaWxsOmJsYWNrO31cIlxuICAgICAgICBcImRpdi5kZG93bjpob3ZlciBzdmd7ZmlsbDpibGFjazt9XCJcbiAgICAgICAgZWRpdG9yZWwuYXBwZW5kQ2hpbGQoc3RhZyk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCbG9ja0NvbnRyb2xzKGJsb2NrLCBpdGVtcywgZWQpIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBibG9ja19lZGl0b3JfdW5pdFxuICAgICAqL1xuXG4gICAgYmxvY2suc3R5bGUucGFkZGluZyA9IFwiMCAzMnB4XCI7XG4gICAgYmxvY2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBibG9jay5zdHlsZS5tYXJnaW4gPSBcIjAgLTMycHhcIlxuICAgIGlmICghaXRlbXMgJiYgZWQpIHtcbiAgICAgICAgaXRlbXMgPSBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpY29ucy51cCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZG93bixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkLm1vdmVEb3duKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEZWxldGUgYmxvY2tcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpY29ucy5kZWwsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlZC5yZW1vdmVCbG9jayhibG9jay5kYXRhc2V0LmJsb2NrX2lkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiICsgYmxvY2suZGF0YXNldC5ibG9ja19pZDtcbiAgICBsZXQgY3RybHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQoXCJjb21tb25fYmxvY2tfY29udHJvbHNcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChvdXJjbGFzcyk7XG4gICAgY3RybHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY3RybHMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBjdHJscy5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBjdHJscy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZlZVwiO1xuICAgIC8vY3RybHMuc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIFwiICsgQ29sb3Vycy5saWdodDtcbiAgICBjdHJscy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBjdHJscy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgY3RybHMuc3R5bGUuekluZGV4ID0gNjtcbiAgICAgICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIGN0cmxzLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xuICAgICAgICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9KTtcblxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBjdHJscy5zdHlsZS56SW5kZXggPSA1O1xuICAgICAgICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSk7XG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgY3RybHMuc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0pO1xuXG5cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZS5pY29uO1xuICAgICAgICBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgICAgICBtaS5zdHlsZS5maWxsID0gQ29sb3Vycy5saWdodDtcbiAgICAgICAgbWkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZS5sYWJlbDtcbiAgICAgICAgY3RybHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY3RybHMpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9