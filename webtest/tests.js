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
        rect.style.fontSize = "0.7em";
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
            "editor": "",
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

var constructors = {};
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

constructors.paragraph = function (data, el, id, editor) {
    let bc = document.createElement("p");
    bc.setAttribute("contenteditable", true);
    //bc.style.whiteSpace = "pre-wrap";
    el.appendChild(bc);
    let re = /<div|p|h>/gi;

    let blc = {
        my: this,
        id: id, //!!!!!!!!!!!!!!!!!!!    
        data: data ? data : {
            text: ""
        },
        element: el,
        editor: editor,
        _p: bc,
        type: "paragraph",
        clean: function (t) {

        },
        render: function () {
            this._p.innerHTML = this.data.text;
        },
        save: function () {
            return {
                text: this._p.innerHTML
            }
        }
    }
    blc._p.addEventListener("paste" , function(e){
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
                //sel.anchorNode.innerHTML = leavehere;
                //np = newly inserted block id
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
            //console.log(this.element.querySelector(".header_preview").innerHTML)
            this.text = this.element.querySelector(".header_preview").innerHTML;
            this.element.innerHTML = "";
            let myh = document.createElement("h" + this.level);
            myh.setAttribute("contenteditable", true);
            myh.classList.add("header_preview");
            myh.innerHTML = this.text;
            this.element.appendChild(myh)

        },
        //mytag: 

        render: function () {
            let myh = document.createElement("h" + this.level);
            myh.setAttribute("contenteditable", true);
            myh.classList.add("header_preview");
            myh.innerHTML = this.text;
            this.element.appendChild(myh);
            //this.refresh();
        },
        save: function () {
            let txt = this.element.querySelector(".header_preview").innerHTML;
            return {
                "text": txt,
                "level": this.level
            }

        }

    }
    let opts = document.createElement("select");
    opts.style.display = "block";
    //opts.type="select";
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
    templates.addToolbar(blc);
    blc.addToToolbar(opts)
    return blc;
}

constructors.code = function (data, el, id, editor) {
    let pre = document.createElement("pre");
    let cd = document.createElement("code");
    pre.appendChild(cd);
    cd.setAttribute("contenteditable", true);
    cd.dataset.no_text_toolbox = true;
    cd.addEventListener("paste" , function(e){
        //we need to strip formatting here
        let paste = (event.clipboardData || window.clipboardData).getData('text');          
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));    
        event.preventDefault();
    })
    el.appendChild(pre);
    let langs = ["None" , "Auto", "Arduino", 'JavaScript', "Processing", "Python", "C++", "Bash", "Basic", "Brainfuck"];
    //
    let opts = document.createElement("select");
    langs.forEach(function (e) {
        let mi = document.createElement("option");
        mi.value = e;
        mi.label = e;
        mi.innerHTML = e;
        if (data && data.language && e == data.language) {
            mi.selected = true;
        }
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
    templates.addToolbar(blc);
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
    blcite.innerHTML = data && data.caption ? data.caption : ""
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
    pimg.src = data && data.file ? data.file.url : "";

    let blc = {
        element: el,
        render: function () {
            console.log("render image")
        },
    }
    templates.twoPanels(blc);
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

    blc.addToEditor(templates.formRow([upld, upldbtn]));
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
    blc.addToEditor(templates.formRow([srclabel, srcinput]));
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

    blc.addToEditor(templates.formRow([stretched, stretchlabel,
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
        data: data ? data : {file: {url: null}},
        render: function () { },
    }
    if (!blc.data.file) {
        blc.data.file = {};
    }
    templates.twoPanels(blc);
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

    blc.addToEditor(templates.formRow([upld, upldbtn]));
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
    blc.addToEditor(templates.formRow([srclabel, srcinput]));
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
    blc.addToEditor(templates.formRow(pels));

    blc.save = function () {
        return blc.data;
    }
    if(!(data&& data.file && data.file.url)){
        blc.goEditMode();
    }

    return blc;
}


constructors.list = function (data, el, id, editor) {
    let blc = {
        element: el,
        list_element: null,
        type: data && data.style && data.style == "ordered" ? "ol" : "ul",
        render: function () { },
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
    templates.addToolbar(blc);
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

function makeBasicEditor(el) {
    let editor = new BlockEditor({
        selector: el
    });

    editor.registerEditor({
        type: "paragraph",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.paragraph,
        make: constructors.paragraph,
        label: "Paragraph"
    });
    editor.registerEditor({
        type: "divider",
        make: constructors.divider,
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].divider,
        label: 'Divider'
    });
    editor.registerEditor({
        type: "header",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].header,
        make: constructors.header,
        label: 'Header'
    });
    editor.registerEditor({
        type: "code",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].code,
        make: constructors.code,
        label: 'Code snippet'
    });
    editor.registerEditor({
        type: "raw",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].raw,
        make: constructors.raw,
        label: 'Raw HTML'
    });
    editor.registerEditor({
        type: "quote",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.quote,
        make: constructors.blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.image,
        make: constructors.image,
        label: 'Image'
    });
    editor.registerEditor({
        type: "video",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.video,
        make: constructors.video,
        label: 'Video'
    });
    editor.registerEditor({
        type: "list",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.list,
        make: constructors.list,
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

/***/ "./src/bled/ui.js":
/*!************************!*\
  !*** ./src/bled/ui.js ***!
  \************************/
/*! exports provided: icons, mycyan, Colours, injectStyle, Ask, tooltips, textTools, addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colours", function() { return Colours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectStyle", function() { return injectStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTools", function() { return textTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
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


function injectStyle(ststr) {
    let e = document.querySelector("style#block_editor_injected_style");
    if (!e) {
        console.log("attaching stylesheet for style injection");
        e = document.createElement("style");
        e.id = "block_editor_injected_style";
        document.head.appendChild(e);    
    }
    e.innerHTML += ststr;
}



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
    tt.appendChild(ttin);
    //ttin.style.backgroundColor = Colours.dark;
    //ttin.style.color = "white";
    ttin.style.pointerEvents = "none";
    ttin.style.fontSize = "12px";
    ttin.style.padding = "4px 8px";
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

function textTools() {
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
    }, "Remove link")
    addButton(icons.noformat, function (e) {
        document.execCommand("removeFormat");
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

function addBlockControls(block, items, ed) {
    /**
     * 
     * block_editor_unit
     */
    block.classList.add(Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
        "border": "1px solid transparent",
        "&:hover":{
            borderColor: Colours.light
        },
        "& *[contenteditable='true']:empty" : {
            "backgroundColor" : Colours.pale,
            "minHeight" : "1rem",
            "minWidth" : "1rem"
        }

    }))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3Qvc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L3NoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L3dlYWstbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlYXRlLWVtb3Rpb24vZGlzdC9jcmVhdGUtZW1vdGlvbi5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW1vdGlvbi9kaXN0L2Vtb3Rpb24uZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9ibGVkL2Jsb2NrZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9hZGQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Fycm93X2Rvd253YXJkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9hcnJvd191cHdhcmQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NsZWFyLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9jb2RlLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9jb2RlLW15LTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9kaXZpZGVyLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfYm9sZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X2l0YWxpYy0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X2xpc3RfYnVsbGV0ZWQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9xdW90ZS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X3N0cmlrZXRocm91Z2gtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF91bmRlcmxpbmVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9oZWFkZXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2luc2VydF9waG90by1vdXRsaW5lZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvbGluay0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvbGlua19vZmYtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3BhcmFncmFwaC1yZW1peC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvcmVtb3ZlLWZvcm1hdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfYm9sZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfaXRhbGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9saW5rLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdHJpa2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3VwLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF91bmRlcmxpbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy92aWRlb2NhbS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC90ZXN0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDUDtBQUNOOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1REFBTTs7QUFFekIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx5REFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqTjNCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsZ0ZBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQ2pDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ1J2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0U7QUFDRjs7QUFFdkMsZ1JBQWdSLHVDQUF1QztBQUN2VDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZ0VBQU87QUFDOUI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHlEQUFRO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDs7QUFFaEQsY0FBYyxLQUFxQztBQUNuRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxJQUFxQztBQUN4RCxxUEFBcVAsWUFBWSxrSUFBa0ksYUFBYTtBQUNoWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLDBCQUEwQjtBQUN2RCxTQUFTO0FBQ1Qsc0ZBQXNGO0FBQ3RGO0FBQ0EsT0FBTztBQUNQLGdEQUFnRCxhQUFvQjtBQUNwRTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBOztBQUVBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLEdBQUcsT0FBTztBQUM3Qzs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLHFFQUFxRTtBQUNyRSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdILGlCQUFpQixpQkFBaUI7QUFDbEM7O0FBRUE7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsNkRBQVU7O0FBRXZCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7O0FDalUzQjtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLGFBQWE7O0FBRXJCLGlDQUFpQyxvQ0FBb0M7O0FBRXJFLHlCQUF5Qix1QkFBdUIsRUFBRTtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQW9CO0FBQ3ZFO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUN0SXRCO0FBQUE7QUFDQTtBQUNBLHlLQUF5SyxPQUFPO0FBQ2hMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRixxQ0FBcUMseUNBQXlDO0FBQ2hLOztBQUVBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpTUFBaU07QUFDak07O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELDZEQUE2RCxPQUFPO0FBQ3BIO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RtQjFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRDVCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7QUN2QzdDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNmM0I7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDWTtBQUNjOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMEVBQW1COztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWMsOERBQVcsVUFBVTs7QUFFbkM7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUEscUJBQXFCLDBFQUFlO0FBQ3BDLElBQUksbUVBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0E7O0FBRUEscUJBQXFCLDBFQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywwQkFBMEI7QUFDdEUsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsZUFBZTtBQUN6RjtBQUNBOztBQUVBLHFCQUFxQiwwRUFBZTtBQUNwQztBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLGVBQWU7QUFDekY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrRUFBbUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9JN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUUzQyxxQkFBcUIsOERBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNHOzs7Ozs7Ozs7Ozs7O0FDZHRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7O0FBRXBCO0FBQ1A7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOzs7QUFHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsa0JBQWtCO0FBQ2pDLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQVc7QUFDbkIsUUFBUSw2Q0FBWTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMkNBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFXO0FBQ25CLFFBQVEsNkNBQVk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkNBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBZ0I7QUFDeEIsUUFBUSxvREFBbUI7O0FBRTNCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUErRCwwQ0FBUztBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyQ0FBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFHOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMENBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMENBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTyxXQUFXO0FBQy9DLDZCQUE2QixFQUFFO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsRUFBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNsakNBLCtMOzs7Ozs7Ozs7OztBQ0FBLGdIOzs7Ozs7Ozs7OztBQ0FBLDZHOzs7Ozs7Ozs7OztBQ0FBLHVKOzs7Ozs7Ozs7OztBQ0FBLHdQOzs7Ozs7Ozs7OztBQ0FBLDBOQUEwTix5REFBeUQsV0FBVyx3Tjs7Ozs7Ozs7Ozs7QUNBOVIsME5BQTBOLHlEQUF5RCxXQUFXLHdjOzs7Ozs7Ozs7OztBQ0E5UixpWTs7Ozs7Ozs7Ozs7QUNBQSw0TTs7Ozs7Ozs7Ozs7QUNBQSxrVDs7Ozs7Ozs7Ozs7QUNBQSxvTTs7Ozs7Ozs7Ozs7QUNBQSxrTjs7Ozs7Ozs7Ozs7QUNBQSwrUTs7Ozs7Ozs7Ozs7QUNBQSwwTkFBME4seURBQXlELFdBQVcsZ1M7Ozs7Ozs7Ozs7O0FDQTlSLHVTOzs7Ozs7Ozs7OztBQ0FBLCtXOzs7Ozs7Ozs7OztBQ0FBLHdnQjs7Ozs7Ozs7Ozs7QUNBQSwwTkFBME4seURBQXlELFdBQVcsNkk7Ozs7Ozs7Ozs7O0FDQTlSLHFpQjs7Ozs7Ozs7Ozs7QUNBQSxpeUc7Ozs7Ozs7Ozs7O0FDQUEsaTVEOzs7Ozs7Ozs7OztBQ0FBLDY0Rjs7Ozs7Ozs7Ozs7QUNBQSxzNUU7Ozs7Ozs7Ozs7O0FDQUEsd3FDOzs7Ozs7Ozs7OztBQ0FBLGtqRTs7Ozs7Ozs7Ozs7QUNBQSwwc0Y7Ozs7Ozs7Ozs7O0FDQUEsNlE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUMyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLGVBQWUsK0RBQXNCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdCQUFnQjtBQUN6RDs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7O0FBRTNCOztBQUVQLGFBQWEsbUJBQU8sQ0FBQyx5REFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLDZEQUF1QjtBQUM5QyxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLDZEQUF1QjtBQUM5QyxZQUFZLG1CQUFPLENBQUMsdURBQW9CO0FBQ3hDLFlBQVksbUJBQU8sQ0FBQyx1REFBb0I7QUFDeEMsYUFBYSxtQkFBTyxDQUFDLHlEQUFxQjs7QUFFMUMsZUFBZSxtQkFBTyxDQUFDLDZEQUF1QjtBQUM5QyxhQUFhLG1CQUFPLENBQUMsK0RBQXdCO0FBQzdDLFlBQVksbUJBQU8sQ0FBQyx5REFBcUI7QUFDekMsaUJBQWlCLG1CQUFPLENBQUMsaUVBQXlCOztBQUVsRCxXQUFXLG1CQUFPLENBQUMseUVBQTZCO0FBQ2hELGFBQWEsbUJBQU8sQ0FBQyw2RUFBK0I7QUFDcEQsWUFBWSxtQkFBTyxDQUFDLDJEQUFzQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdURBQW9CO0FBQ3hDLGdCQUFnQixtQkFBTyxDQUFDLCtEQUF3Qjs7QUFFaEQ7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMsdUVBQTRCO0FBQzFELHdCQUF3QixtQkFBTyxDQUFDLDJFQUE4QjtBQUM5RCwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBa0M7QUFDckUsd0JBQXdCLG1CQUFPLENBQUMseUZBQXFDO0FBQ3JFLHNCQUFzQixtQkFBTyxDQUFDLHlEQUFxQjtBQUNuRCx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBeUI7O0FBRTFELHVCQUF1QixtQkFBTyxDQUFDLHlFQUE2QjtBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx5RkFBcUM7QUFDbkUsdUJBQXVCLG1CQUFPLENBQUMsaUVBQXlCO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLHlFQUE2QjtBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQywyRkFBc0M7QUFDckUsMkJBQTJCLG1CQUFPLENBQUMsK0VBQWdDOzs7O0FBSTVELHVCQUF1QjtBQUN2QjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxjQUFjLG1EQUFHO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7Ozs7QUFJTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7QUFJTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDIiwiZmlsZSI6InRlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxlZC90ZXN0aW5nLmpzXCIpO1xuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBTdHlsaXMgZnJvbSAnQGVtb3Rpb24vc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMvdHJlZS9tYXN0ZXIvcGx1Z2lucy9ydWxlLXNoZWV0XG4vLyBpbmxpbmVkIHRvIGF2b2lkIHVtZCB3cmFwcGVyIGFuZCBwZWVyRGVwIHdhcm5pbmdzL2luc3RhbGxpbmcgc3R5bGlzXG4vLyBzaW5jZSB3ZSB1c2Ugc3R5bGlzIGFmdGVyIGNsb3N1cmUgY29tcGlsZXJcbnZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nO1xudmFyIG5lZWRsZSA9IGRlbGltaXRlciArICd9JztcblxuZnVuY3Rpb24gdG9TaGVldChibG9jaykge1xuICBpZiAoYmxvY2spIHtcbiAgICBTaGVldC5jdXJyZW50Lmluc2VydChibG9jayArICd9Jyk7XG4gIH1cbn1cblxudmFyIFNoZWV0ID0ge1xuICBjdXJyZW50OiBudWxsXG59O1xudmFyIHJ1bGVTaGVldCA9IGZ1bmN0aW9uIHJ1bGVTaGVldChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG4gIHN3aXRjaCAoY29udGV4dCkge1xuICAgIC8vIHByb3BlcnR5XG4gICAgY2FzZSAxOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKGNvbnRlbnQuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEBpbXBvcnRcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoY29udGVudCArICc7Jyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgbFxuXG4gICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBiXG4gICAgICAgICAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxuICAgICAgICAgICAgICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gc2VsZWN0b3JcblxuICAgIGNhc2UgMjpcbiAgICAgIHtcbiAgICAgICAgaWYgKG5zID09PSAwKSByZXR1cm4gY29udGVudCArIGRlbGltaXRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gYXQtcnVsZVxuXG4gICAgY2FzZSAzOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKG5zKSB7XG4gICAgICAgICAgLy8gQGZvbnQtZmFjZSwgQHBhZ2VcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoc2VsZWN0b3JzWzBdICsgY29udGVudCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBjYXNlIC0yOlxuICAgICAge1xuICAgICAgICBjb250ZW50LnNwbGl0KG5lZWRsZSkuZm9yRWFjaCh0b1NoZWV0KTtcbiAgICAgIH1cbiAgfVxufTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb24gY3JlYXRlQ2FjaGUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleSB8fCAnY3NzJztcbiAgdmFyIHN0eWxpc09wdGlvbnM7XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBzdHlsaXNPcHRpb25zID0ge1xuICAgICAgcHJlZml4OiBvcHRpb25zLnByZWZpeFxuICAgIH07XG4gIH1cblxuICB2YXIgc3R5bGlzID0gbmV3IFN0eWxpcyhzdHlsaXNPcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcblxuICB2YXIgY29udGFpbmVyO1xuXG4gIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb24tXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvbi1cIiArIGtleSk7IC8vICRGbG93Rml4TWVcblxuICAgICAgYXR0cmliLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaW5zZXJ0ZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAge1xuICAgIHN0eWxpcy51c2Uob3B0aW9ucy5zdHlsaXNQbHVnaW5zKShydWxlU2hlZXQpO1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICB2YXIgbmFtZSA9IHNlcmlhbGl6ZWQubmFtZTtcbiAgICAgIFNoZWV0LmN1cnJlbnQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwID0gc2VyaWFsaXplZC5tYXA7XG4gICAgICAgIFNoZWV0LmN1cnJlbnQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBtYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yLCBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtuYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmY3MzcxYTRjZDdlNjAwOWVmNjFkMGFcbiAgICB2YXIgY29tbWVudFN0YXJ0ID0gL1xcL1xcKi9nO1xuICAgIHZhciBjb21tZW50RW5kID0gL1xcKlxcLy9nO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdoaWxlIChjb21tZW50U3RhcnQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICBjb21tZW50RW5kLmxhc3RJbmRleCA9IGNvbW1lbnRTdGFydC5sYXN0SW5kZXg7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSBjb21tZW50RW5kLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBzdHlsZXMgaGF2ZSBhbiB1bnRlcm1pbmF0ZWQgY29tbWVudCAoXCIvKlwiIHdpdGhvdXQgY29ycmVzcG9uZGluZyBcIiovXCIpLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmbGFnID0gJ2Vtb3Rpb24tZGlzYWJsZS1zZXJ2ZXItcmVuZGVyaW5nLXVuc2FmZS1zZWxlY3Rvci13YXJuaW5nLXBsZWFzZS1kby1ub3QtdXNlLXRoaXMtdGhlLXdhcm5pbmctZXhpc3RzLWZvci1hLXJlYXNvbic7XG4gICAgICAgICAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGNvbnRlbnQubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmVSZWdFeHAgPSBuZXcgUmVnRXhwKHVuc2FmZVBzZXVkb0NsYXNzICsgXCIuKlxcXFwvXFxcXCogXCIgKyBmbGFnICsgXCIgXFxcXCpcXFxcL1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlID0gaWdub3JlUmVnRXhwLnRlc3QoY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3MgJiYgIWlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeVxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FjaGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qcy9ibG9iL21hc3Rlci9tdXJtdXJoYXNoMl9nYy5qc1xuZnVuY3Rpb24gbXVybXVyaGFzaDJfMzJfZ2Moc3RyKSB7XG4gIHZhciBsID0gc3RyLmxlbmd0aCxcbiAgICAgIGggPSBsIF4gbCxcbiAgICAgIGkgPSAwLFxuICAgICAgaztcblxuICB3aGlsZSAobCA+PSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPSAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICAgIGsgXj0gayA+Pj4gMjQ7XG4gICAgayA9IChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChrID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gICAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNikgXiBrO1xuICAgIGwgLT0gNDtcbiAgICArK2k7XG4gIH1cblxuICBzd2l0Y2ggKGwpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPSAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoaCA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gIGggXj0gaCA+Pj4gMTU7XG4gIHJldHVybiAoaCA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXJoYXNoMl8zMl9nYztcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbnZhciBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IHRydWU7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24sIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0LCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiAmJiBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyAmJiBjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCBpcyBub3QgcmVjb21tZW5kZWQgYW5kIHdpbGwgY2F1c2UgcHJvYmxlbXMgd2l0aCBjb21wb3NpdGlvbi5cXG4nICsgJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCB3aWxsIGJlIGNvbXBsZXRlbHkgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uJyk7XG4gICAgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiAhY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKjsvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvLztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldLCBzdHlsZXMuY2hhckNvZGVBdChzdHlsZXMubGVuZ3RoIC0gMSkgPT09IDQ2KTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHZhciBfdGFnID0gY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShfdGFnLCBiZWZvcmUpO1xuICAgICAgdGhpcy50YWdzLnB1c2goX3RhZyk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHJlYWxseSBob3QgcGF0aFxuICAgICAgICAvLyB3ZSBjaGVjayB0aGUgc2Vjb25kIGNoYXJhY3RlciBmaXJzdCBiZWNhdXNlIGhhdmluZyBcImlcIlxuICAgICAgICAvLyBhcyB0aGUgc2Vjb25kIGNoYXJhY3RlciB3aWxsIGhhcHBlbiBsZXNzIG9mdGVuIHRoYW5cbiAgICAgICAgLy8gaGF2aW5nIFwiQFwiIGFzIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7IC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIC8vIHdlIG5lZWQgdG8gaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYmVmb3JlIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZXJlIHdpbGwgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGVjaG5pY2FsbHkgdGhpcyBtZWFucyB0aGF0IHRoZSBAaW1wb3J0IHJ1bGVzIHdpbGxcbiAgICAgICAgLy8gX3VzdWFsbHlfKG5vdCBhbHdheXMgc2luY2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgc3R5bGUgdGFncylcbiAgICAgICAgLy8gYmUgdGhlIGZpcnN0IG9uZXMgaW4gcHJvZCBhbmQgZ2VuZXJhbGx5IGxhdGVyIGluIGRldlxuICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCByZWFsbHkgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkIHRob3VnaFxuICAgICAgICAvLyBAaW1wb3J0IGlzIGdlbmVyYWxseSBvbmx5IHVzZWQgZm9yIGZvbnQgZmFjZXMgZnJvbSBnb29nbGUgZm9udHMgYW5kIGV0Yy5cbiAgICAgICAgLy8gc28gd2hpbGUgdGhpcyBjb3VsZCBiZSB0ZWNobmljYWxseSBjb3JyZWN0IHRoZW4gaXQgd291bGQgYmUgc2xvd2VyIGFuZCBsYXJnZXJcbiAgICAgICAgLy8gZm9yIGEgdGlueSBiaXQgb2YgY29ycmVjdG5lc3MgdGhhdCB3b24ndCBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGRcbiAgICAgICAgaXNJbXBvcnRSdWxlID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwidmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWVzKSB7XG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSAmJiBjYWNoZS5jb21wYXQgIT09IHVuZGVmaW5lZCkgJiYgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPSBzZXJpYWxpemVkLnN0eWxlcztcbiAgfVxuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoXCIuXCIgKyBjbGFzc05hbWUsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfTtcbiIsInZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIHdlYWtNZW1vaXplKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZSBmbG93IGRvZXNuJ3QgaW5jbHVkZSBhbGwgbm9uLXByaW1pdGl2ZSB0eXBlcyBhcyBhbGxvd2VkIGZvciB3ZWFrbWFwc1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZS5oYXMoYXJnKSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGNhY2hlLmdldChhcmcpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBmdW5jKGFyZyk7XG4gICAgY2FjaGUuc2V0KGFyZywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2Vha01lbW9pemU7XG4iLCJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcblxuZnVuY3Rpb24gaW5zZXJ0V2l0aG91dFNjb3BpbmcoY2FjaGUsIHNlcmlhbGl6ZWQpIHtcbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjYWNoZS5pbnNlcnQoJycsIHNlcmlhbGl6ZWQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkLCBjc3MsIGNsYXNzTmFtZSkge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIGNyZWF0ZUVtb3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uKG9wdGlvbnMpIHtcbiAgdmFyIGNhY2hlID0gY3JlYXRlQ2FjaGUob3B0aW9ucyk7IC8vICRGbG93Rml4TWVcblxuICBjYWNoZS5zaGVldC5zcGVlZHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLmN0ciAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcGVlZHkgbXVzdCBiZSBjaGFuZ2VkIGJlZm9yZSBhbnkgcnVsZXMgYXJlIGluc2VydGVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1NwZWVkeSA9IHZhbHVlO1xuICB9O1xuXG4gIGNhY2hlLmNvbXBhdCA9IHRydWU7XG5cbiAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCwgdW5kZWZpbmVkKTtcbiAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkKTtcbiAgICB2YXIgYW5pbWF0aW9uID0gXCJhbmltYXRpb24tXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gICAgaW5zZXJ0V2l0aG91dFNjb3BpbmcoY2FjaGUsIHtcbiAgICAgIG5hbWU6IHNlcmlhbGl6ZWQubmFtZSxcbiAgICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgYW5pbWF0aW9uICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiXG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgfTtcblxuICB2YXIgaW5qZWN0R2xvYmFsID0gZnVuY3Rpb24gaW5qZWN0R2xvYmFsKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNhY2hlLnJlZ2lzdGVyZWQpO1xuICAgIGluc2VydFdpdGhvdXRTY29waW5nKGNhY2hlLCBzZXJpYWxpemVkKTtcbiAgfTtcblxuICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoY2FjaGUucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNzczogY3NzLFxuICAgIGN4OiBjeCxcbiAgICBpbmplY3RHbG9iYWw6IGluamVjdEdsb2JhbCxcbiAgICBrZXlmcmFtZXM6IGtleWZyYW1lcyxcbiAgICBoeWRyYXRlOiBmdW5jdGlvbiBoeWRyYXRlKGlkcykge1xuICAgICAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtrZXldID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmx1c2g6IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgY2FjaGUucmVnaXN0ZXJlZCA9IHt9O1xuICAgICAgY2FjaGUuaW5zZXJ0ZWQgPSB7fTtcbiAgICAgIGNhY2hlLnNoZWV0LmZsdXNoKCk7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgc2hlZXQ6IGNhY2hlLnNoZWV0LFxuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBnZXRSZWdpc3RlcmVkU3R5bGVzOiBnZXRSZWdpc3RlcmVkU3R5bGVzLmJpbmQobnVsbCwgY2FjaGUucmVnaXN0ZXJlZCksXG4gICAgbWVyZ2U6IG1lcmdlLmJpbmQobnVsbCwgY2FjaGUucmVnaXN0ZXJlZCwgY3NzKVxuICB9O1xufTtcblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW1vdGlvbjtcbiIsImltcG9ydCBjcmVhdGVFbW90aW9uIGZyb20gJ2NyZWF0ZS1lbW90aW9uJztcblxudmFyIF9jcmVhdGVFbW90aW9uID0gY3JlYXRlRW1vdGlvbigpLFxuICAgIGZsdXNoID0gX2NyZWF0ZUVtb3Rpb24uZmx1c2gsXG4gICAgaHlkcmF0ZSA9IF9jcmVhdGVFbW90aW9uLmh5ZHJhdGUsXG4gICAgY3ggPSBfY3JlYXRlRW1vdGlvbi5jeCxcbiAgICBtZXJnZSA9IF9jcmVhdGVFbW90aW9uLm1lcmdlLFxuICAgIGdldFJlZ2lzdGVyZWRTdHlsZXMgPSBfY3JlYXRlRW1vdGlvbi5nZXRSZWdpc3RlcmVkU3R5bGVzLFxuICAgIGluamVjdEdsb2JhbCA9IF9jcmVhdGVFbW90aW9uLmluamVjdEdsb2JhbCxcbiAgICBrZXlmcmFtZXMgPSBfY3JlYXRlRW1vdGlvbi5rZXlmcmFtZXMsXG4gICAgY3NzID0gX2NyZWF0ZUVtb3Rpb24uY3NzLFxuICAgIHNoZWV0ID0gX2NyZWF0ZUVtb3Rpb24uc2hlZXQsXG4gICAgY2FjaGUgPSBfY3JlYXRlRW1vdGlvbi5jYWNoZTtcblxuZXhwb3J0IHsgY2FjaGUsIGNzcywgY3gsIGZsdXNoLCBnZXRSZWdpc3RlcmVkU3R5bGVzLCBoeWRyYXRlLCBpbmplY3RHbG9iYWwsIGtleWZyYW1lcywgbWVyZ2UsIHNoZWV0IH07XG4iLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi91aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tFZGl0b3Ioe1xuICAgIHNlbGVjdG9yXG59KSB7XG4gICAgY29uc3QgbXkgPSB0aGlzO1xuICAgIC8vXG4gICAgbGV0IG1pbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbmUuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9vdXRlcl9jb250YWluZXJcIik7XG4gICAgbWluZS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBtaW5lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgbGV0IHRoZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhleS5hcHBlbmRDaGlsZChtaW5lKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBtaW5lOyAvL3RoaXMgZWxlbWVudCBpcyBtaW5lXG5cblxuICAgIHRoaXMuZWRpdG9ycyA9IHtcbiAgICAgICAgLy9cInplcm9cIjp7XG4gICAgICAgIC8vXG4gICAgICAgIC8vfVxuICAgIH07IC8vIG51bGw7IC8vcGFyYW1zLmVkaXRvcnM7IC8vICBhdmFpbGFibGUgYmxvY2tzIGVkaXRvcnNcbiAgICB0aGlzLmJsb2NrcyA9IG51bGw7IC8vIGJsb2NrcyBhcnJheVxuICAgIHRoaXMuYWRkTWVudSA9IFtdO1xuXG4gICAgdmFyIF9jdXJyZW50X2lkID0gMDtcblxuICAgIHRoaXMuX21ha2VJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX2N1cnJlbnRfaWQrKztcbiAgICAgICAgcmV0dXJuIF9jdXJyZW50X2lkO1xuICAgIH1cblxuICAgIHRoaXMudXBsb2FkID0gZnVuY3Rpb24gKGYsIHRlc3R1cmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIHVwbG9hZFwiLCBmKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiMVwiICxcbiAgICAgICAgICAgICAgICBmaWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICB1cmw6IHRlc3R1cmwgPyB0ZXN0dXJsIDogXCJraXR0eS5qcGVnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VXBsb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICB0aGlzLnVwbG9hZCA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldEJsb2NrcyA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICAgICAgbWluZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5fY3VycmVudF9pZCA9IDE7XG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoZXkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgVUkudG9vbHRpcHMoKTtcbiAgICAgICAgVUkudGV4dFRvb2xzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgLy9hZGQgc2VybyBibG9ja1xuXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuYmxvY2tzID0ge307XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lZGl0b3JzKVxuICAgICAgICAvL1wiYWRkXCIgbWVudVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFkZGVkIGhhbmRsZXIgZm9yXCIsIGUpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG15LmVkaXRvcnNbZV07XG4gICAgICAgICAgICBteS5hZGRNZW51LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogdmFsLmxhYmVsLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB2YWwuaWNvbiA/IHZhbC5pY29uIDogbnVsbCxcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKHJlZmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG15LmFkZE5ld0Jsb2NrKGUsIG51bGwsIHJlZmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAvL1plcm8gYmxvY2tcblxuICAgICAgICBsZXQgemVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHplcm8uY2xhc3NMaXN0LmFkZChcInN0YXJ0aW5nX2Jsb2NrXCIpO1xuICAgICAgICAvL3plcm8uc3R5bGUuaGVpZ2h0ID0gXCI4cHhcIjtcbiAgICAgICAgemVyby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB6ZXJvLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0zMnB4XCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luUmlnaHQgPSBcIi0zMnB4XCI7XG4gICAgICAgIHplcm8uc3R5bGUucGFkZGluZyA9IFwiMHB4IDMycHhcIlxuICAgICAgICB6ZXJvLmRhdGFzZXQuYmxvY2tfaWQgPSBcInN0YXJ0XCI7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSS5Db2xvdXJzLmxpZ2h0O1xuICAgICAgICByZWN0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICByZWN0LmlubmVySFRNTCA9IFwiRURJVCBNT0RFXCI7XG4gICAgICAgIHJlY3Quc3R5bGUucGFkZGluZyA9IFwiMC41ZW0gMHB4XCI7XG4gICAgICAgIHJlY3Quc3R5bGUubGV0dGVyU3BhY2luZyA9IFwiLjVlbVwiO1xuICAgICAgICByZWN0LnN0eWxlLmZvbnRTaXplID0gXCIwLjdlbVwiO1xuICAgICAgICByZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgcmVjdC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB6ZXJvLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKHplcm8sIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIG1pbmUuYXBwZW5kQ2hpbGQoemVybyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuc2V0QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgIC8vc3RhcnQgVUlcbiAgICAgICAgVUkudG9vbHRpcHMoKTtcbiAgICAgICAgVUkudGV4dFRvb2xzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZCA9PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgICAgIC8vIHZhciBzdGFydCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIGJJRCA9IHRoaXMuX21ha2VJRCgpO1xuICAgICAgICBsZXQgYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgIGRvbWJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfdW5pdFwiKTtcbiAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja19pZCA9IGJJRDtcbiAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcblxuXG4gICAgICAgIGJjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB7c2F2ZTogKCk9PiBkYXRhICwgcmVuZGVyOiAoKT0+IG51bGx9XG4gICAgICAgICAgICAvL3RoaXMuYmxvY2tzW2JJRF0gPSBibG9jaztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIC8vcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBiY29udGVudC5pbm5lckhUTUwgPSBcIlVua25vd24gYmxvY2s6IDxzdHJvbmc+XCIrdHlwZSArIFwiPC9zdHJvbmc+XCI7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAgVUkuQ29sb3Vycy5saWdodDtcbiAgICAgICAgICAgIGJjb250ZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgYmNvbnRlbnQuc3R5bGUuZm9udFNpemUgPSBcIjJlbVwiO1xuICAgICAgICAgICAgYmNvbnRlbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIyZW0gMGVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKGRvbWJsb2NrLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBVSS5hZGRCbG9ja0NvbnRyb2xzKGRvbWJsb2NrLCBudWxsLCB0aGlzKTtcblxuICAgICAgICBpZiAocmVmaWQgJiYgcmVmZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tYmxvY2ssIHJlZmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkb21ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2sucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiBiSUQ7XG4gICAgfSAvL2FkZCBuZXcgYmxvY2tcblxuICAgIHRoaXMucmVtb3ZlQmxvY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9maW5kIGJsb2NrIGluZGV4XG4gICAgICAgIGxldCBlbGlkeCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2Fubm91bmNlIGRlbGV0aW9uIHRvIGJsb2NrXG4gICAgICAgIGlmIChcImJlZm9yZURlbGV0ZVwiIGluIHRoaXMuYmxvY2tzW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5ibG9ja3NbaWRdLmJlZm9yZURlbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVtb3ZlIGRvbSBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oZWxpZHgpLnJlbW92ZSgpO1xuICAgICAgICAvL2RlbCBibG9jayBmcm9tIHJlZ2lzdHJ5XG4gICAgICAgIGRlbGV0ZSAodGhpcy5ibG9ja3NbaWRdKTtcbiAgICB9IC8vcmVtb3ZlIGJsb2NrXG5cbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoY2xiKSB7XG4gICAgICAgIGxldCBkdCA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIGR0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZS5kYXRhc2V0LmJsb2NrX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBteS5ibG9ja3NbZS5kYXRhc2V0LmJsb2NrX2lkXS5zYXZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGxldCBteWRhdGEgPSB7XG4gICAgICAgICAgICBcImVkaXRvclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJibG9ja3NcIjogZHRcbiAgICAgICAgfTtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcIiVjRWRpdG9yIHNhdmluZ1wiLCAoXCJjb2xvcjogXCIgKyBVSS5teWN5YW4pKTtcbiAgICAgICAgY29uc29sZS5sb2cobXlkYXRhKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgIGlmIChjbGIpIHtcbiAgICAgICAgICAgIGNsYihteWRhdGEpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBteWRhdGE7XG4gICAgfVxuXG59XG5cbnZhciBjb25zdHJ1Y3RvcnMgPSB7fTtcbnZhciB0ZW1wbGF0ZXMgPSB7fVxuXG50ZW1wbGF0ZXMuZm9ybVJvdyA9IGZ1bmN0aW9uIChlbGVtZW50c19hcnJheSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWxlbWVudHNfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjhweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09IFwiTEFCRUxcIiAmJiBpICE9IDApIHtcbiAgICAgICAgICAgIGUuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVUkuQ29sb3Vycy5wYWxlO1xuICAgIHRieC5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0Ynguc3R5bGUuZm9udFNpemUgPSBcIi44ZW1cIlxuICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGJ4LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuICAgIC8vdGJ4LnN0eWxlLmJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSg2MiwyMTcsMjI3LDAuNSkgMTAwJSlcIiAgOyBcblxuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YngpOyAvL2FkZCB0byBlZGl0b3JfaXRlbSwgIW5vdCEgYmxvY2sgY29udGVudCBjb250YWluZXJcbiAgICBibG9jay5hZGRUb1Rvb2xiYXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsLnRhZ05hbWUgPT0gXCJMQUJFTFwiKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGJ4LmFwcGVuZENoaWxkKGVsKVxuICAgIH1cbn1cblxudGVtcGxhdGVzLnR3b1BhbmVscyA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIC8vbGV0IG1vZGUgPSBcInByZXZpZXdcIjtcbiAgICBsZXQgcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBwLmNsYXNzTGlzdC5hZGQoXCJibG9ja19wcmV2aWV3X3BhbmVsXCIpO1xuICAgIHBwLmNsYXNzTGlzdC5hZGQoXCJvbmVfb2ZfdHdvX3BhbmVsc1wiKTtcbiAgICBwcC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBwcC5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBwcC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgbGV0IGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdF9wYW5lbFwiKTtcbiAgICBlcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgZXAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgLy9lcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGVwLnN0eWxlLmJvcmRlclRvcCA9IFwiMnB4IHNvbGlkIFwiICsgVUkubXljeWFuO1xuICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlcC5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICAvL1xuICAgIGxldCBlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlYnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0X2J1dHRvblwiKTtcbiAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuICAgIGVidG4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZWJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGVidG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDRweFwiO1xuICAgIGVidG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbiAgICBlYnRuLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgZWJ0bi5zdHlsZS5yaWdodCA9IFwiOHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5ib3R0b20gPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICBlYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBlZGl0bW9kZSA9IGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCI7XG4gICAgICAgIGlmIChlZGl0bW9kZSkge1xuICAgICAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiUFJFVklFV1wiO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAvL1xuICAgIHBwLmFwcGVuZENoaWxkKGVidG4pO1xuICAgIC8vXG4gICAgY29uc29sZS5sb2coYmxvY2spXG4gICAgYmxvY2suZWxlbWVudC5hcHBlbmRDaGlsZChwcCk7XG4gICAgYmxvY2suZWxlbWVudC5hcHBlbmRDaGlsZChlcCk7XG4gICAgLy9cbiAgICBibG9jay5hZGRUb1ByZXZpZXcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBwcC5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGJsb2NrLmFkZFRvRWRpdG9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBibG9jay5nb0VkaXRNb2RlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcblxuICAgIH1cbiAgICBibG9jay5nb1ByZXZpZXdNb2RlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuXG4gICAgfVxuICAgIGJsb2NrLmlzSW5FZGl0TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiKTtcbiAgICB9XG5cbn1cblxuY29uc3RydWN0b3JzLnBhcmFncmFwaCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBiYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAvL2JjLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZS13cmFwXCI7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmMpO1xuICAgIGxldCByZSA9IC88ZGl2fHB8aD4vZ2k7XG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBteTogdGhpcyxcbiAgICAgICAgaWQ6IGlkLCAvLyEhISEhISEhISEhISEhISEhISEgICAgXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge1xuICAgICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgZWRpdG9yOiBlZGl0b3IsXG4gICAgICAgIF9wOiBiYyxcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgY2xlYW46IGZ1bmN0aW9uICh0KSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9wLmlubmVySFRNTCA9IHRoaXMuZGF0YS50ZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3AuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiICwgZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vd2UgbmVlZCB0byBzdHJpcCBmb3JtYXR0aW5nIGhlcmVcbiAgICAgICAgbGV0IHBhc3RlID0gKGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTsgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzZWxlY3Rpb24uZGVsZXRlRnJvbURvY3VtZW50KCk7XG4gICAgICAgIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmluc2VydE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFzdGUpKTsgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBibGMuX3AuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgbWFnaWMgPSBcIiMhI1wiXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbnRlciBwcmVzc2VkXCIsIGUuc2hpZnRLZXkgPT0gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0VGV4dFwiLCBmYWxzZSwgbWFnaWMpO1xuICAgICAgICAgICAgICAgIGxldCBjbGlja2F0ID0gYmxjLl9wLmlubmVySFRNTC5pbmRleE9mKG1hZ2ljKVxuICAgICAgICAgICAgICAgIGxldCB0ZXh0bGVmdCA9IGJsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIGNsaWNrYXQpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0bmV4dCA9IGJsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKGNsaWNrYXQgKyBtYWdpYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dGxlZnQsIFwifFwiICwgdGV4dG5leHQpO1xuICAgICAgICAgICAgICAgIGJsYy5fcC5pbm5lckhUTUwgPSB0ZXh0bGVmdDsgLy9ibGMuX3AuaW5uZXJIVE1MLnN1YnN0cmluZygwICwgY2xpY2thdCk7XG4gICAgICAgICAgICAgICAgbGV0IG5wID0gZWRpdG9yLmFkZE5ld0Jsb2NrKFwicGFyYWdyYXBoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dG5leHRcbiAgICAgICAgICAgICAgICB9LCBibGMuaWQpO1xuICAgICAgICAgICAgICAgIC8vc2VsLmFuY2hvck5vZGUuaW5uZXJIVE1MID0gbGVhdmVoZXJlO1xuICAgICAgICAgICAgICAgIC8vbnAgPSBuZXdseSBpbnNlcnRlZCBibG9jayBpZFxuICAgICAgICAgICAgICAgIGJsYy5lZGl0b3IuYmxvY2tzW25wXS5fcC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuZGl2aWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8aHI+XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdHJ1Y3RvcnMuaGVhZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgLy9teXRhZy5cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICAvL2lkOiBpZCxcbiAgICAgICAgdGV4dDogZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIkhlYWRlclwiLFxuICAgICAgICBsZXZlbDogZGF0YSAmJiBkYXRhLmxldmVsID8gZGF0YS5sZXZlbCA6IDEsXG4gICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MKVxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aClcblxuICAgICAgICB9LFxuICAgICAgICAvL215dGFnOiBcblxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKTtcbiAgICAgICAgICAgIC8vdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiB0eHQsXG4gICAgICAgICAgICAgICAgXCJsZXZlbFwiOiB0aGlzLmxldmVsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBvcHRzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy9vcHRzLnR5cGU9XCJzZWxlY3RcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICBvcHQudmFsdWUgPSBpO1xuICAgICAgICBvcHQubGFiZWwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgb3B0LmlubmVySFRNTCA9IFwibGV2ZWwgXCIgKyBpO1xuICAgICAgICBpZiAoaSA9PSBibGMubGV2ZWwpIHtcbiAgICAgICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9XG4gICAgb3B0cy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBudiA9IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgYmxjLmxldmVsID0gbnY7XG4gICAgICAgIGJsYy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICBibGMuYWRkVG9Ub29sYmFyKG9wdHMpXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgICBsZXQgY2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcbiAgICBwcmUuYXBwZW5kQ2hpbGQoY2QpO1xuICAgIGNkLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBjZC5kYXRhc2V0Lm5vX3RleHRfdG9vbGJveCA9IHRydWU7XG4gICAgY2QuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy93ZSBuZWVkIHRvIHN0cmlwIGZvcm1hdHRpbmcgaGVyZVxuICAgICAgICBsZXQgcGFzdGUgPSAoZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YSkuZ2V0RGF0YSgndGV4dCcpOyAgICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHNlbGVjdGlvbi5kZWxldGVGcm9tRG9jdW1lbnQoKTtcbiAgICAgICAgc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuaW5zZXJ0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXN0ZSkpOyAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgIGVsLmFwcGVuZENoaWxkKHByZSk7XG4gICAgbGV0IGxhbmdzID0gW1wiTm9uZVwiICwgXCJBdXRvXCIsIFwiQXJkdWlub1wiLCAnSmF2YVNjcmlwdCcsIFwiUHJvY2Vzc2luZ1wiLCBcIlB5dGhvblwiLCBcIkMrK1wiLCBcIkJhc2hcIiwgXCJCYXNpY1wiLCBcIkJyYWluZnVja1wiXTtcbiAgICAvL1xuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBsYW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1pLnZhbHVlID0gZTtcbiAgICAgICAgbWkubGFiZWwgPSBlO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxhbmd1YWdlICYmIGUgPT0gZGF0YS5sYW5ndWFnZSkge1xuICAgICAgICAgICAgbWkuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuICAgIC8vXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjZC5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY29kZSA/IGRhdGEuY29kZSA6IFwiIyAgdHlwZVxcbiMgIGhlcmVcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjZC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKTtcbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5yYXcgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcblxuICAgIGxldCBlZGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZWRpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgZWRpLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGVkaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBlZGkuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgXCIgKyBVSS5teWN5YW47XG4gICAgZWRpLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgIGlmIChkYXRhICYmIGRhdGEuaHRtbCkge1xuICAgICAgICBlZGkudmFsdWUgPSBkYXRhLmh0bWw7XG4gICAgfVxuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGVkaSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbDogZWRpLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBibGM7XG5cbn1cblxuY29uc3RydWN0b3JzLmJsb2NrcXVvdGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmxjdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJsb2NrcXVvdGVcIik7XG4gICAgYmxjdGFnLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCBibGNpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgYmxjaW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGxldCBibGZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGxldCBibGNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2l0ZVwiKTtcbiAgICBibGZvb3QuYXBwZW5kQ2hpbGQoYmxjaXRlKTtcbiAgICBibGNpdGUuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuXG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsY2luKTtcbiAgICBibGN0YWcuYXBwZW5kQ2hpbGQoYmxmb290KTtcbiAgICBibGNpbi5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwi0KbQuNGC0LDRgtCwXCI7XG4gICAgYmxjaXRlLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCJcIlxuICAgIGxldCBibG9jayA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChibGN0YWcpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGJsY2luLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBibGNpdGUuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5pbWFnZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBmaWd0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGxldCBwaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwaW1nLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgbGV0IGZjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XG4gICAgZmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGZjLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCJcIjtcbiAgICBmaWd0YWcuYXBwZW5kQ2hpbGQocGltZyk7XG4gICAgZmlndGFnLmFwcGVuZENoaWxkKGZjKTtcbiAgICBwaW1nLnNyYyA9IGRhdGEgJiYgZGF0YS5maWxlID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBpbWFnZVwiKVxuICAgICAgICB9LFxuICAgIH1cbiAgICB0ZW1wbGF0ZXMudHdvUGFuZWxzKGJsYyk7XG4gICAgYmxjLmFkZFRvUHJldmlldyhmaWd0YWcpO1xuICAgIC8vZWRpdFxuICAgIC8vLy91cGxvYWRcbiAgICBsZXQgdXBsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkLnR5cGUgPSBcImZpbGVcIjtcbiAgICB1cGxkLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBsZXQgdXBsZGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkYnRuLnZhbHVlID0gXCJ1cGxvYWRcIjtcbiAgICB1cGxkYnRuLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgdXBsZGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZWRpdG9yLnVwbG9hZCh1cGxkLmZpbGVzWzBdKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBwaW1nLnNyYyA9IHIuZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbdXBsZCwgdXBsZGJ0bl0pKTtcbiAgICAvLy8vZWRpdCBzcmNcbiAgICBsZXQgc3JjbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3JjbGFiZWwuaW5uZXJIVE1MID0gXCJTb3VyY2UgVVJMXCI7XG4gICAgbGV0IHNyY2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNyY2lucHV0LnN0eWxlLmZsZXhHcm93ID0gMjtcbiAgICBzcmNpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc3JjaW5wdXQudmFsdWUgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICBzcmNpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcGltZy5zcmMgPSB0aGlzLnZhbHVlO1xuICAgIH0pXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzcmNsYWJlbCwgc3JjaW5wdXRdKSk7XG4gICAgLy8vL2NsYXNzZXNcbiAgICAvLy8vLy9zdHJldGNoZWRcbiAgICBsZXQgc3RyZXRjaGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHN0cmV0Y2hsYWJlbC5pbm5lckhUTUwgPSBcInN0cmV0Y2hlZFwiXG4gICAgbGV0IHN0cmV0Y2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdHJldGNoZWQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBzdHJldGNoZWQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcmlnaHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGVmdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBub3Jlc2l6ZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWd0YWcuY2xhc3NMaXN0LnJlbW92ZShcInN0cmV0Y2hlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5zdHJldGNoZWQ7XG4gICAgLy8vLy8vbm9yZXNpemVcbiAgICBsZXQgbnJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBucmxhYmVsLmlubmVySFRNTCA9IFwibm8gcmVzaXplXCJcbiAgICBsZXQgbm9yZXNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm9yZXNpemUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBub3Jlc2l6ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIG5vcmVzaXplLmNoZWNrZWQgPSBkYXRhICYmIChkYXRhLm5vcmVzaXplIHx8IGRhdGEud2l0aGJhY2tncm91bmQpO1xuICAgIC8vLy8vbGVmdFxuICAgIGxldCBsbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGxhYmVsLmlubmVySFRNTCA9IFwibGVmdFwiXG4gICAgbGV0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGVmdC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGxlZnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmlnaHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBsZWZ0LmNoZWNrZWQgPSBkYXRhICYmIGRhdGEubGVmdDtcbiAgICAvLy8vcmlnaHRcbiAgICBsZXQgcmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHJsYWJlbC5pbm5lckhUTUwgPSBcInJpZ2h0XCJcbiAgICBsZXQgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcmlnaHQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICByaWdodC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICBsZWZ0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICByaWdodC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLnJpZ2h0O1xuXG4gICAgLy8vL2JvcmRlclxuICAgIGxldCBibGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYmxhYmVsLmlubmVySFRNTCA9IFwiYm9yZGVyXCJcbiAgICBsZXQgYm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGJvcmRlci50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGJvcmRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICBwaW1nLmNsYXNzTGlzdC5hZGQoXCJib3JkZXJlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGltZy5jbGFzc0xpc3QucmVtb3ZlKFwiYm9yZGVyZWRcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBib3JkZXIuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5ib3JkZXI7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3N0cmV0Y2hlZCwgc3RyZXRjaGxhYmVsLFxuICAgICAgICBub3Jlc2l6ZSwgbnJsYWJlbCxcbiAgICAgICAgbGVmdCwgbGxhYmVsLFxuICAgICAgICByaWdodCwgcmxhYmVsLFxuICAgICAgICBib3JkZXIsIGJsYWJlbFxuICAgIF0pKTtcblxuICAgIC8vXG4gICAgYmxjLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHJldGNoZWQ6IHN0cmV0Y2hlZC5jaGVja2VkLFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LmNoZWNrZWQsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LmNoZWNrZWQsXG4gICAgICAgICAgICBub3Jlc2l6ZTogbm9yZXNpemUuY2hlY2tlZCxcbiAgICAgICAgICAgIHdpdGhCYWNrZ3JvdW5kOiBub3Jlc2l6ZS5jaGVja2VkLFxuICAgICAgICAgICAgYm9yZGVyOiBib3JkZXIuY2hlY2tlZCxcbiAgICAgICAgICAgIHdpdGhCb3JkZXI6IGJvcmRlci5jaGVja2VkLFxuICAgICAgICAgICAgY2FwdGlvbjogZmMuaW5uZXJIVE1MLFxuICAgICAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgICAgIHVybDogc3JjaW5wdXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YSAmJiBkYXRhLmZpbGUgJiYgZGF0YS5maWxlLnVybCkge1xuICAgICAgICBibGMuZ29QcmV2aWV3TW9kZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJsYy5nb0VkaXRNb2RlKCk7XG4gICAgfVxuICAgIC8vXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLnZpZGVvID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7ZmlsZToge3VybDogbnVsbH19LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICB9XG4gICAgaWYgKCFibGMuZGF0YS5maWxlKSB7XG4gICAgICAgIGJsYy5kYXRhLmZpbGUgPSB7fTtcbiAgICB9XG4gICAgdGVtcGxhdGVzLnR3b1BhbmVscyhibGMpO1xuICAgIC8vcHJldmlld1xuICAgIGxldCB2dGFnID0gYmxjLmFkZFRvUHJldmlldyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIikpO1xuICAgIHZ0YWcuc3R5bGUubWF4V2lkdGggPSBcIjEwMCVcIjtcbiAgICAvL2xldCBzcmN0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICAgIC8vdnRhZy5hcHBlbmRDaGlsZChzcmN0YWcpO1xuICAgIHZ0YWcuc3JjID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgLy9lZGl0b3JcbiAgICAvLy8vdXBsb2FkICAgICBcbiAgICBsZXQgdXBsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkLnR5cGUgPSBcImZpbGVcIjtcbiAgICB1cGxkLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBsZXQgdXBsZGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkYnRuLnZhbHVlID0gXCJ1cGxvYWRcIjtcbiAgICB1cGxkYnRuLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgdXBsZGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZWRpdG9yLnVwbG9hZCh1cGxkLmZpbGVzWzBdKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICB2dGFnLnNyYyA9IHIuZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgIGJsYy5kYXRhLmZpbGUudXJsID0gci5maWxlLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZ0YWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICAgICAgYmxjLmRhdGEuZmlsZS51cmwgPSB0aGlzLnZhbHVlO1xuICAgIH0pXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzcmNsYWJlbCwgc3JjaW5wdXRdKSk7XG4gICAgLy8vL3BhcmFtc1xuICAgIGxldCBwYXJhbXMgPSBbe1xuICAgICAgICBuYW1lOiBcImF1dG9wbGF5XCIsXG4gICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5hdXRvcGxheSxcbiAgICAgICAgbGFiZWw6IFwiYXV0b3BsYXlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5jb250cm9scyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJsb29wXCIsXG4gICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5sb29wLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm11dGVkXCIsXG4gICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5tdXRlZCxcbiAgICB9LFxuXG4gICAgXVxuICAgIGxldCBwZWxzID0gW107XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFibGMuZGF0YVtlLm5hbWVdKSB7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcGxhYmVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgcGxhYmVsLmlubmVySFRNTCA9IGUubmFtZTtcbiAgICAgICAgbGV0IHBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcGNoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIHBjaGVjay5jaGVja2VkID0gZGF0YSAmJiBkYXRhW2UubmFtZV07XG4gICAgICAgIHBjaGVjay5vbmNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBibGMuZGF0YSwgZS5uYW1lKTtcbiAgICAgICAgICAgIGJsYy5kYXRhW2UubmFtZV0gPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB2dGFnLnNldEF0dHJpYnV0ZShlLm5hbWUsIHRoaXMuY2hlY2tlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHBlbHMucHVzaChwY2hlY2spO1xuICAgICAgICBwZWxzLnB1c2gocGxhYmVsKTtcblxuXG4gICAgfSk7XG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KHBlbHMpKTtcblxuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmxjLmRhdGE7XG4gICAgfVxuICAgIGlmKCEoZGF0YSYmIGRhdGEuZmlsZSAmJiBkYXRhLmZpbGUudXJsKSl7XG4gICAgICAgIGJsYy5nb0VkaXRNb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYztcbn1cblxuXG5jb25zdHJ1Y3RvcnMubGlzdCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBsaXN0X2VsZW1lbnQ6IG51bGwsXG4gICAgICAgIHR5cGU6IGRhdGEgJiYgZGF0YS5zdHlsZSAmJiBkYXRhLnN0eWxlID09IFwib3JkZXJlZFwiID8gXCJvbFwiIDogXCJ1bFwiLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IGJsYy50eXBlID09IFwib2xcIiA/IFwib3JkZXJlZFwiIDogXCJ1bm9yZGVyZWRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IEFycmF5LmZyb20odGhpcy5saXN0X2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpKS5tYXAoZSA9PiBlLmlubmVySFRNTClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vZWRpdG9yXG4gICAgLy8vL291dGVyIGxpc3RcbiAgICBibGMubGlzdF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChibGMudHlwZSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmxjLmxpc3RfZWxlbWVudCk7XG4gICAgLy8vL2RvIHdlIGhhdmUgZGF0YVxuICAgIGlmIChkYXRhICYmIGRhdGEuaXRlbXMpIHtcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGwuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgIGwuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgYWRkU21hcnRSZW1vdmUobClcbiAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuYXBwZW5kQ2hpbGQobCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vLy8vbWFrZSBMSSBkZWxldGFibGUgXG4gICAgZnVuY3Rpb24gYWRkU21hcnRSZW1vdmUoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5rZXlDb2RlICwgdGhpcy5pbm5lckhUTUwubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiB0aGlzLmlubmVySFRNTC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzICYmIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIG5pLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvL3doZXJlP1xuICAgICAgICAgICAgICAgIGxldCBteW5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChteW5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5pbnNlcnRCZWZvcmUobmksIG15bmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChuaSk7IC8vYXQuLi4/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFNtYXJ0UmVtb3ZlKG5pKTtcbiAgICAgICAgICAgICAgICBuaS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8vLy9jaGFuZ2xlIGxpc3QgdHlwZSB0b1xuICAgIGZ1bmN0aW9uIHNldFR5cGUodG4pIHtcblxuICAgICAgICBsZXQgbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRuKTtcbiAgICAgICAgbGV0IGxpc3MgPSBBcnJheS5mcm9tKGJsYy5saXN0X2VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGxpc3MuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIG5lLmFwcGVuZENoaWxkKGUpXG4gICAgICAgIH0pO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50ID0gbmU7XG4gICAgICAgIGJsYy50eXBlID0gdG47XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKG5lKTtcbiAgICB9XG4gICAgLy8vL1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgLy9yYWRpb2J1dHRvbnNcbiAgICAvL1xuICAgIGxldCByYnRucyA9IFt7XG4gICAgICAgIHZhbHVlOiBcInVsXCIsXG4gICAgICAgIGxhYmVsOiBcIlVub3JkZXJlZFwiXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdmFsdWU6IFwib2xcIixcbiAgICAgICAgbGFiZWw6IFwiT3JkZXJlZFwiXG4gICAgfVxuICAgIF07XG4gICAgcmJ0bnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcImxpc3RfYnV0dG9uc19cIiArIGlkO1xuICAgICAgICByYWRpby52YWx1ZSA9IGUudmFsdWU7XG4gICAgICAgIHJhZGlvLmNoZWNrZWQgPSAoYmxjLnR5cGUgPT0gZS52YWx1ZSk7XG4gICAgICAgIHJhZGlvLm9uY2hhbmdlID0gZXYgPT4gc2V0VHlwZShlLnZhbHVlKTtcbiAgICAgICAgbGV0IGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGJsLmlubmVySFRNTCA9IGUubGFiZWw7XG4gICAgICAgIGJsYy5hZGRUb1Rvb2xiYXIocmFkaW8pO1xuICAgICAgICBibGMuYWRkVG9Ub29sYmFyKGxibCk7XG4gICAgfSk7XG4gICAgLy8vLyBhZGQgYnV0dG9uXG4gICAgbGV0IGFkZF9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZF9iLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGFkZF9iLnZhbHVlID0gXCIraXRlbVwiO1xuICAgIGFkZF9iLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBsaXN0IGl0ZW1cIjtcbiAgICBhZGRfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld2xpLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgYWRkU21hcnRSZW1vdmUobmV3bGkpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKG5ld2xpKTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb1Rvb2xiYXIoYWRkX2IpO1xuICAgIHJldHVybiBibGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQmFzaWNFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHtcbiAgICAgICAgc2VsZWN0b3I6IGVsXG4gICAgfSk7XG5cbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5wYXJhZ3JhcGgsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5wYXJhZ3JhcGgsXG4gICAgICAgIGxhYmVsOiBcIlBhcmFncmFwaFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5kaXZpZGVyLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5kaXZpZGVyLFxuICAgICAgICBsYWJlbDogJ0RpdmlkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuaGVhZGVyLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaGVhZGVyLFxuICAgICAgICBsYWJlbDogJ0hlYWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImNvZGVcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuY29kZSxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmNvZGUsXG4gICAgICAgIGxhYmVsOiAnQ29kZSBzbmlwcGV0J1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicmF3XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLnJhdyxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnJhdyxcbiAgICAgICAgbGFiZWw6ICdSYXcgSFRNTCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnF1b3RlLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuYmxvY2txdW90ZSxcbiAgICAgICAgbGFiZWw6ICdCbG9ja3F1b3RlJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMubWF0ZXJpYWwuaW1hZ2UsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5pbWFnZSxcbiAgICAgICAgbGFiZWw6ICdJbWFnZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInZpZGVvXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnZpZGVvLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMudmlkZW8sXG4gICAgICAgIGxhYmVsOiAnVmlkZW8nXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLmxpc3QsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5saXN0LFxuICAgICAgICBsYWJlbDogXCJMaXN0XCIsXG4gICAgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhVSS5pY29ucy5tYXRlcmlhbC5saXN0KTtcblxuICAgIHJldHVybiBlZGl0b3I7XG59XG4vLyAgbXkuY3VycmVudF9lZGl0b3IgPSBuZXcgZWRpdG9yX2ZuKGw0LCBlZGl0b3JfZWxlbWVudCwgbXkuY3VycmVudF92aWV3LmZpbGUuY29udGVudCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGF0aWRFZGl0b3IobDQsIGVkaXRvcl9lbGVtZW50X3NlbGVjdG9yLCBmaWxlX2NvbnRlbnQpIHtcbiAgICBsZXQgZWQgPSBtYWtlQmFzaWNFZGl0b3IoZWRpdG9yX2VsZW1lbnRfc2VsZWN0b3IpO1xuICAgIGVkLnNldEJsb2NrcyhmaWxlX2NvbnRlbnQpO1xuICAgIHJldHVybiBlZDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNMjAgMTJsLTEuNDEtMS40MUwxMyAxNi4xN1Y0aC0ydjEyLjE3bC01LjU4LTUuNTlMNCAxMmw4IDggOC04elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTJsMS40MSAxLjQxTDExIDcuODNWMjBoMlY3LjgzbDUuNTggNS41OUwyMCAxMmwtOC04LTggOHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48Zz48cGF0aCBkPVxcXCJNNS43LDEzLjNoMTEuNXYySDUuN1YxMy4zeiBNNi4zLDcuOGgxMS41djJINi4zVjcuOHogTTkuMywzLjJoMS44TDksMjAuNkg3LjJMOS4zLDMuMnogTTE0LjMsMy4yaDEuOGwtMi4xLDE3LjRoLTEuOSBMMTQuMywzLjJ6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiNC41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyAtNi40NTY3IDE3LjU0MzMpXFxcIiB3aWR0aD1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI3LjFcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNy41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyA2LjQ1NjcgMzAuNDU2NylcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjcuMVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjFcXFwiIHk9XFxcIjExXFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCg2LjEyMzIzNGUtMTcgLTEgMSA2LjEyMzIzNGUtMTcgNi4yMDQ5NjhlLTAyIDI0LjA2MilcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjEuOVxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNS42IDEwLjc5Yy45Ny0uNjcgMS42NS0xLjc3IDEuNjUtMi43OSAwLTIuMjYtMS43NS00LTQtNEg3djE0aDcuMDRjMi4wOSAwIDMuNzEtMS43IDMuNzEtMy43OSAwLTEuNTItLjg2LTIuODItMi4xNS0zLjQyek0xMCA2LjVoM2MuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41aC0zdi0zem0zLjUgOUgxMHYtM2gzLjVjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMCA0djNoMi4yMWwtMy40MiA4SDZ2M2g4di0zaC0yLjIxbDMuNDItOEgxOFY0elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTAuNWMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41em0wLTZjLS44IDAtMS41LjctMS41IDEuNVMzLjIgNy41IDQgNy41IDUuNSA2LjggNS41IDYgNC44IDQuNSA0IDQuNXptMCAxMmMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41ek03IDE5aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnptMC04djJoMTRWNUg3elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02IDE3aDNsMi00VjdINXY2aDN6bTggMGgzbDItNFY3aC02djZoM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMCAxOWg0di0zaC00djN6TTUgNHYzaDV2M2g0VjdoNVY0SDV6TTMgMTRoMTh2LTJIM3YyelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgMTdjMy4zMSAwIDYtMi42OSA2LTZWM2gtMi41djhjMCAxLjkzLTEuNTcgMy41LTMuNSAzLjVTOC41IDEyLjkzIDguNSAxMVYzSDZ2OGMwIDMuMzEgMi42OSA2IDYgNnptLTcgMnYyaDE0di0ySDV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIxMFxcXCIgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiNFxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE4XFxcIiB3aWR0aD1cXFwiMTJcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNC44NiA4Ljg2bC0zIDMuODdMOSAxMy4xNCA2IDE3aDEybC0zLjg2LTUuMTR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zLjkgMTJjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFoNFY3SDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xek04IDEzaDh2LTJIOHYyem05LTZoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjFzLTEuMzkgMy4xLTMuMSAzLjFoLTRWMTdoNGMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDBWMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTcgN2gtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMSAwIDEuNDMtLjk4IDIuNjMtMi4zMSAyLjk4bDEuNDYgMS40NkMyMC44OCAxNS42MSAyMiAxMy45NSAyMiAxMmMwLTIuNzYtMi4yNC01LTUtNXptLTEgNGgtMi4xOWwyIDJIMTZ6TTIgNC4yN2wzLjExIDMuMTFDMy4yOSA4LjEyIDIgOS45MSAyIDEyYzAgMi43NiAyLjI0IDUgNSA1aDR2LTEuOUg3Yy0xLjcxIDAtMy4xLTEuMzktMy4xLTMuMSAwLTEuNTkgMS4yMS0yLjkgMi43Ni0zLjA3TDguNzMgMTFIOHYyaDIuNzNMMTMgMTUuMjdWMTdoMS43M2w0LjAxIDRMMjAgMTkuNzQgMy4yNyAzIDIgNC4yN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAyNFYwXFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBkPVxcXCJNOSwxMXYxMGgyVjVoMnYxNmgyVjVoMlYzSDlDNi44LDMsNSw0LjgsNSw3UzYuOCwxMSw5LDExelxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0wLDBoMjR2MjRIMFYwelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgNjQwIDUxMlxcXCI+PHBhdGggZD1cXFwiTTMzNiA0MTZoLTExLjE3bDkuMjYtMjcuNzdMMjY3IDMzNi40IDI0MC40OSA0MTZIMjA4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZ6bTI5Ny44MiA0Mi4xTDM3NyAyNTkuNTkgNDI2LjE3IDExMkg1NDR2MzJhMTYgMTYgMCAwIDAgMTYgMTZoMzJhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZIMTc2YTE2IDE2IDAgMCAwLTE2IDE2djQzLjlMNDUuNDYgMy4zOEExNiAxNiAwIDAgMCAyMyA2LjE5TDMuMzcgMzEuNDZhMTYgMTYgMCAwIDAgMi44MSAyMi40NWw1ODguMzYgNDU0LjcyYTE2IDE2IDAgMCAwIDIyLjQ2LTIuODFsMTkuNjQtMjUuMjdhMTYgMTYgMCAwIDAtMi44Mi0yMi40NXpNMzA5LjkxIDIwNy43NkwyMjQgMTQxLjM2VjExMmgxMTcuODN6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjMwNjggMTkuMzI0MkMxMC44Njc0IDE5LjU3NDIgMTEuMzk3NyAxOS42OTkyIDExLjg5NzcgMTkuNjk5MkMxNC43NDYyIDE5LjY5OTIgMTYuMTcwNSAxOC4zOTA2IDE2LjE3MDUgMTUuNzczNEMxNi4xNzA1IDE0Ljg4MjggMTYuMDE1MiAxNC4xNzk3IDE1LjcwNDUgMTMuNjY0MUMxNS41IDEzLjMyMDMgMTUuMjY3IDEzLjAzMTIgMTUuMDA1NyAxMi43OTY5QzE0Ljc0NDMgMTIuNTYyNSAxNC40ODg2IDEyLjM4MDkgMTQuMjM4NiAxMi4yNTJDMTMuOTg4NiAxMi4xMjMgMTMuNjgzNyAxMi4wMjU0IDEzLjMyMzkgMTEuOTU5QzEyLjk2NCAxMS44OTI2IDEyLjY0NTggMTEuODUxNiAxMi4zNjkzIDExLjgzNTlDMTIuMDkyOCAxMS44MjAzIDExLjczNDggMTEuODEyNSAxMS4yOTU1IDExLjgxMjVDMTAuNzQyNCAxMS44MTI1IDEwLjM1OTggMTEuODUxNiAxMC4xNDc3IDExLjkyOTdDMTAuMTQ3NyAxMi4zNDM4IDEwLjE0NTggMTIuOTY0OCAxMC4xNDIgMTMuNzkzQzEwLjEzODMgMTQuNjIxMSAxMC4xMzY0IDE1LjIzODMgMTAuMTM2NCAxNS42NDQ1QzEwLjEzNjQgMTUuNzA3IDEwLjEzMjYgMTUuOTcwNyAxMC4xMjUgMTYuNDM1NUMxMC4xMTc0IDE2LjkwMDQgMTAuMTE1NSAxNy4yNzczIDEwLjExOTMgMTcuNTY2NEMxMC4xMjMxIDE3Ljg1NTUgMTAuMTQwMiAxOC4xODE2IDEwLjE3MDUgMTguNTQ0OUMxMC4yMDA4IDE4LjkwODIgMTAuMjQ2MiAxOS4xNjggMTAuMzA2OCAxOS4zMjQyWk0xMC4xNDc3IDEwLjU4MkMxMC40NjU5IDEwLjYzNjcgMTAuODc4OCAxMC42NjQxIDExLjM4NjQgMTAuNjY0MUMxMi4wMDc2IDEwLjY2NDEgMTIuNTQ5MiAxMC42MTMzIDEzLjAxMTQgMTAuNTExN0MxMy40NzM1IDEwLjQxMDIgMTMuODkwMiAxMC4yMzYzIDE0LjI2MTQgOS45OTAyM0MxNC42MzI2IDkuNzQ0MTQgMTQuOTE0OCA5LjM5NDUzIDE1LjEwOCA4Ljk0MTQxQzE1LjMwMTEgOC40ODgyOCAxNS4zOTc3IDcuOTMzNTkgMTUuMzk3NyA3LjI3NzM0QzE1LjM5NzcgNi43MzA0NyAxNS4yODc5IDYuMjUxOTUgMTUuMDY4MiA1Ljg0MThDMTQuODQ4NSA1LjQzMTY0IDE0LjU0OTIgNS4xMTEzMyAxNC4xNzA1IDQuODgwODZDMTMuNzkxNyA0LjY1MDM5IDEzLjM4MjYgNC40ODA0NyAxMi45NDMyIDQuMzcxMDlDMTIuNTAzOCA0LjI2MTcyIDEyLjAzNDEgNC4yMDcwMyAxMS41MzQxIDQuMjA3MDNDMTEuMTU1MyA0LjIwNzAzIDEwLjY2MjkgNC4yNTc4MSAxMC4wNTY4IDQuMzU5MzhDMTAuMDU2OCA0Ljc1IDEwLjA3MiA1LjMzOTg0IDEwLjEwMjMgNi4xMjg5MUMxMC4xMzI2IDYuOTE3OTcgMTAuMTQ3NyA3LjUxMTcyIDEwLjE0NzcgNy45MTAxNkMxMC4xNDc3IDguMTIxMDkgMTAuMTQ1OCA4LjQzMzU5IDEwLjE0MiA4Ljg0NzY2QzEwLjEzODMgOS4yNjE3MiAxMC4xMzY0IDkuNTcwMzEgMTAuMTM2NCA5Ljc3MzQ0QzEwLjEzNjQgMTAuMTMyOCAxMC4xNDAyIDEwLjQwMjMgMTAuMTQ3NyAxMC41ODJaTTQgMjFMNC4wMjI3MyAxOS44OTg0QzQuMTM2MzYgMTkuODY3MiA0LjQ1ODMzIDE5LjgwNDcgNC45ODg2NCAxOS43MTA5QzUuNTE4OTQgMTkuNjE3MiA1LjkyMDQ1IDE5LjUxMTcgNi4xOTMxOCAxOS4zOTQ1QzYuMjQ2MjEgMTkuMzAwOCA2LjI5MzU2IDE5LjE5NTMgNi4zMzUyMyAxOS4wNzgxQzYuMzc2ODkgMTguOTYwOSA2LjQwOTA5IDE4LjgzMDEgNi40MzE4MiAxOC42ODU1QzYuNDU0NTUgMTguNTQxIDYuNDc1MzggMTguNDE0MSA2LjQ5NDMyIDE4LjMwNDdDNi41MTMyNiAxOC4xOTUzIDYuNTI0NjIgMTguMDQ4OCA2LjUyODQxIDE3Ljg2NTJDNi41MzIyIDE3LjY4MTYgNi41MzQwOSAxNy41NDg4IDYuNTM0MDkgMTcuNDY2OFYxNi42OTkyQzYuNTM0MDkgOS4wMjczNCA2LjQ1MDc2IDUuMDIzNDQgNi4yODQwOSA0LjY4NzVDNi4yNTM3OSA0LjYyNSA2LjE3MDQ1IDQuNTY4MzYgNi4wMzQwOSA0LjUxNzU4QzUuODk3NzMgNC40NjY4IDUuNzI5MTcgNC40MjM4MyA1LjUyODQxIDQuMzg4NjdDNS4zMjc2NSA0LjM1MzUyIDUuMTQwMTUgNC4zMjYxNyA0Ljk2NTkxIDQuMzA2NjRDNC43OTE2NyA0LjI4NzExIDQuNjA3OTUgNC4yNjk1MyA0LjQxNDc3IDQuMjUzOTFDNC4yMjE1OSA0LjIzODI4IDQuMTA2MDYgNC4yMjY1NiA0LjA2ODE4IDQuMjE4NzVMNC4wMjI3MyAzLjI0NjA5QzQuNzY1MTUgMy4yMzA0NyA2LjA1MzAzIDMuMTg1NTUgNy44ODYzNiAzLjExMTMzQzkuNzE5NyAzLjAzNzExIDExLjEzMjYgMyAxMi4xMjUgM0MxMi4yOTkyIDMgMTIuNTU2OCAzLjAwMTk1IDEyLjg5NzcgMy4wMDU4NkMxMy4yMzg2IDMuMDA5NzcgMTMuNDk2MiAzLjAxMTcyIDEzLjY3MDUgMy4wMTE3MkMxNC4yMDA4IDMuMDExNzIgMTQuNzE3OCAzLjA2MjUgMTUuMjIxNiAzLjE2NDA2QzE1LjcyNTQgMy4yNjU2MiAxNi4yMTIxIDMuNDI5NjkgMTYuNjgxOCAzLjY1NjI1QzE3LjE1MTUgMy44ODI4MSAxNy41NjA2IDQuMTYwMTYgMTcuOTA5MSA0LjQ4ODI4QzE4LjI1NzYgNC44MTY0MSAxOC41Mzc5IDUuMjI0NjEgMTguNzUgNS43MTI4OUMxOC45NjIxIDYuMjAxMTcgMTkuMDY4MiA2LjczODI4IDE5LjA2ODIgNy4zMjQyMkMxOS4wNjgyIDcuNzMwNDcgMTkuMDA1NyA4LjEwMzUyIDE4Ljg4MDcgOC40NDMzNkMxOC43NTU3IDguNzgzMiAxOC42MDggOS4wNjQ0NSAxOC40Mzc1IDkuMjg3MTFDMTguMjY3IDkuNTA5NzcgMTguMDIyNyA5LjczNDM4IDE3LjcwNDUgOS45NjA5NEMxNy4zODY0IDEwLjE4NzUgMTcuMTA5OCAxMC4zNjMzIDE2Ljg3NSAxMC40ODgzQzE2LjY0MDIgMTAuNjEzMyAxNi4zMjIgMTAuNzY5NSAxNS45MjA1IDEwLjk1N0MxNy4wODcxIDExLjIzMDUgMTguMDU4NyAxMS43NTM5IDE4LjgzNTIgMTIuNTI3M0MxOS42MTE3IDEzLjMwMDggMjAgMTQuMjY5NSAyMCAxNS40MzM2QzIwIDE2LjIxNDggMTkuODY3NCAxNi45MTYgMTkuNjAyMyAxNy41MzcxQzE5LjMzNzEgMTguMTU4MiAxOC45ODMgMTguNjY4IDE4LjUzOTggMTkuMDY2NEMxOC4wOTY2IDE5LjQ2NDggMTcuNTczOSAxOS43OTg4IDE2Ljk3MTYgMjAuMDY4NEMxNi4zNjkzIDIwLjMzNzkgMTUuNzUgMjAuNTI3MyAxNS4xMTM2IDIwLjYzNjdDMTQuNDc3MyAyMC43NDYxIDEzLjgxMDYgMjAuODAwOCAxMy4xMTM2IDIwLjgwMDhDMTIuNzgwMyAyMC44MDA4IDEyLjI4MDMgMjAuNzg5MSAxMS42MTM2IDIwLjc2NTZDMTAuOTQ3IDIwLjc0MjIgMTAuNDQ3IDIwLjczMDUgMTAuMTEzNiAyMC43MzA1QzkuMzEwNjEgMjAuNzMwNSA4LjE0NzczIDIwLjc3MzQgNi42MjUgMjAuODU5NEM1LjEwMjI3IDIwLjk0NTMgNC4yMjcyNyAyMC45OTIyIDQgMjFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTYgMjAuOTc2Nkw2LjE5OTIyIDE5Ljk4MDVDNi4zNzEwOSAxOS45MjU4IDYuNjExMzMgMTkuODYxMyA2LjkxOTkyIDE5Ljc4NzFDNy4yMjg1MiAxOS43MTI5IDcuNTA5NzcgMTkuNjM4NyA3Ljc2MzY3IDE5LjU2NDVDOC4wMTc1OCAxOS40OTAyIDguMjUgMTkuMzk4NCA4LjQ2MDk0IDE5LjI4OTFDOC42Nzk2OSAxOS4wMTU2IDguODM5ODQgMTguNjIxMSA4Ljk0MTQxIDE4LjEwNTVDOC45NDkyMiAxOC4wNTA4IDkuMTkxNDEgMTYuOTIxOSA5LjY2Nzk3IDE0LjcxODhDMTAuMTQ0NSAxMi41MTU2IDEwLjU4OTggMTAuMzkyNiAxMS4wMDM5IDguMzQ5NjFDMTEuNDE4IDYuMzA2NjQgMTEuNjIxMSA1LjE0ODQ0IDExLjYxMzMgNC44NzVWNC41ODIwM0MxMS40MjU4IDQuNDgwNDcgMTEuMjEyOSA0LjQwODIgMTAuOTc0NiA0LjM2NTIzQzEwLjczNjMgNC4zMjIyNyAxMC40NjQ4IDQuMjkxMDIgMTAuMTYwMiA0LjI3MTQ4QzkuODU1NDcgNC4yNTE5NSA5LjYyODkxIDQuMjMwNDcgOS40ODA0NyA0LjIwNzAzTDkuNzAzMTIgM0M5Ljk2MDk0IDMuMDE1NjIgMTAuNDI5NyAzLjA0MTAyIDExLjEwOTQgMy4wNzYxN0MxMS43ODkxIDMuMTExMzMgMTIuMzczIDMuMTM4NjcgMTIuODYxMyAzLjE1ODJDMTMuMzQ5NiAzLjE3NzczIDEzLjgyMDMgMy4xODc1IDE0LjI3MzQgMy4xODc1QzE0LjY0ODQgMy4xODc1IDE1LjAzMzIgMy4xNzc3MyAxNS40Mjc3IDMuMTU4MkMxNS44MjIzIDMuMTM4NjcgMTYuMjk0OSAzLjExMTMzIDE2Ljg0NTcgMy4wNzYxN0MxNy4zOTY1IDMuMDQxMDIgMTcuNzgxMiAzLjAxNTYyIDE4IDNDMTcuOTYwOSAzLjMwNDY5IDE3Ljg4NjcgMy42NTIzNCAxNy43NzczIDQuMDQyOTdDMTcuNTQzIDQuMTIxMDkgMTcuMTQ2NSA0LjIzMjQyIDE2LjU4NzkgNC4zNzY5NUMxNi4wMjkzIDQuNTIxNDggMTUuNjA1NSA0LjY1MjM0IDE1LjMxNjQgNC43Njk1M0MxNS4yNTM5IDQuOTE3OTcgMTUuMTk5MiA1LjA4Mzk4IDE1LjE1MjMgNS4yNjc1OEMxNS4xMDU1IDUuNDUxMTcgMTUuMDcwMyA1LjYwNzQyIDE1LjA0NjkgNS43MzYzM0MxNS4wMjM0IDUuODY1MjMgMTQuOTk0MSA2LjA0Mjk3IDE0Ljk1OSA2LjI2OTUzQzE0LjkyMzggNi40OTYwOSAxNC44OTg0IDYuNjYwMTYgMTQuODgyOCA2Ljc2MTcyQzE0LjY3MTkgNy45MTc5NyAxNC4zMzAxIDkuNTU2NjQgMTMuODU3NCAxMS42Nzc3QzEzLjM4NDggMTMuNzk4OCAxMy4wODIgMTUuMTg3NSAxMi45NDkyIDE1Ljg0MzhDMTIuOTMzNiAxNS45MTQxIDEyLjg4MjggMTYuMTQwNiAxMi43OTY5IDE2LjUyMzRDMTIuNzEwOSAxNi45MDYyIDEyLjYzMjggMTcuMjU3OCAxMi41NjI1IDE3LjU3ODFDMTIuNDkyMiAxNy44OTg0IDEyLjQyOTcgMTguMjI0NiAxMi4zNzUgMTguNTU2NkMxMi4zMjAzIDE4Ljg4ODcgMTIuMjk2OSAxOS4xMTMzIDEyLjMwNDcgMTkuMjMwNUwxMi4zMTY0IDE5LjQ0MTRDMTIuNDQ5MiAxOS40NzI3IDEzLjE3MTkgMTkuNTkzOCAxNC40ODQ0IDE5LjgwNDdDMTQuNDYwOSAyMC4xNDg0IDE0LjM5ODQgMjAuNTM1MiAxNC4yOTY5IDIwLjk2NDhDMTQuMjEwOSAyMC45NjQ4IDE0LjA4NCAyMC45NzA3IDEzLjkxNiAyMC45ODI0QzEzLjc0OCAyMC45OTQxIDEzLjYyMTEgMjEgMTMuNTM1MiAyMUMxMy4zMDg2IDIxIDEyLjk2ODggMjAuOTYwOSAxMi41MTU2IDIwLjg4MjhDMTIuMDYyNSAyMC44MDQ3IDExLjcyNjYgMjAuNzY1NiAxMS41MDc4IDIwLjc2NTZDMTAuNDI5NyAyMC43NSA5LjYyNSAyMC43NDIyIDkuMDkzNzUgMjAuNzQyMkM4LjY5NTMxIDIwLjc0MjIgOC4xMzY3MiAyMC43NzczIDcuNDE3OTcgMjAuODQ3N0M2LjY5OTIyIDIwLjkxOCA2LjIyNjU2IDIwLjk2MDkgNiAyMC45NzY2WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xOC4xMTc2IDE1Ljc2NDdDMTguMTE3NiAxNS41MDMzIDE4LjAyNjEgMTUuMjgxIDE3Ljg0MzEgMTUuMDk4TDE1LjgwMzkgMTMuMDU4OEMxNS42MjA5IDEyLjg3NTggMTUuMzk4NyAxMi43ODQzIDE1LjEzNzMgMTIuNzg0M0MxNC44NjI3IDEyLjc4NDMgMTQuNjI3NSAxMi44ODg5IDE0LjQzMTQgMTMuMDk4QzE0LjQ1MSAxMy4xMTc2IDE0LjUxMzEgMTMuMTc4MSAxNC42MTc2IDEzLjI3OTRDMTQuNzIyMiAxMy4zODA3IDE0Ljc5MjUgMTMuNDUxIDE0LjgyODQgMTMuNDkwMkMxNC44NjQ0IDEzLjUyOTQgMTQuOTEzNCAxMy41OTE1IDE0Ljk3NTUgMTMuNjc2NUMxNS4wMzc2IDEzLjc2MTQgMTUuMDgwMSAxMy44NDQ4IDE1LjEwMjkgMTMuOTI2NUMxNS4xMjU4IDE0LjAwODIgMTUuMTM3MyAxNC4wOTggMTUuMTM3MyAxNC4xOTYxQzE1LjEzNzMgMTQuNDU3NSAxNS4wNDU4IDE0LjY3OTcgMTQuODYyNyAxNC44NjI3QzE0LjY3OTcgMTUuMDQ1OCAxNC40NTc1IDE1LjEzNzMgMTQuMTk2MSAxNS4xMzczQzE0LjA5OCAxNS4xMzczIDE0LjAwODIgMTUuMTI1OCAxMy45MjY1IDE1LjEwMjlDMTMuODQ0OCAxNS4wODAxIDEzLjc2MTQgMTUuMDM3NiAxMy42NzY1IDE0Ljk3NTVDMTMuNTkxNSAxNC45MTM0IDEzLjUyOTQgMTQuODY0NCAxMy40OTAyIDE0LjgyODRDMTMuNDUxIDE0Ljc5MjUgMTMuMzgwNyAxNC43MjIyIDEzLjI3OTQgMTQuNjE3NkMxMy4xNzgxIDE0LjUxMzEgMTMuMTE3NiAxNC40NTEgMTMuMDk4IDE0LjQzMTRDMTIuODgyNCAxNC42MzQgMTIuNzc0NSAxNC44NzI1IDEyLjc3NDUgMTUuMTQ3MUMxMi43NzQ1IDE1LjQwODUgMTIuODY2IDE1LjYzMDcgMTMuMDQ5IDE1LjgxMzdMMTUuMDY4NiAxNy44NDMxQzE1LjI0NTEgMTguMDE5NiAxNS40NjczIDE4LjEwNzggMTUuNzM1MyAxOC4xMDc4QzE1Ljk5NjcgMTguMTA3OCAxNi4yMTkgMTguMDIyOSAxNi40MDIgMTcuODUyOUwxNy44NDMxIDE2LjQyMTZDMTguMDI2MSAxNi4yMzg2IDE4LjExNzYgMTYuMDE5NiAxOC4xMTc2IDE1Ljc2NDdaTTExLjIyNTUgOC44NTI5NEMxMS4yMjU1IDguNTkxNSAxMS4xMzQgOC4zNjkyOCAxMC45NTEgOC4xODYyN0w4LjkzMTM3IDYuMTU2ODZDOC43NDgzNyA1Ljk3Mzg2IDguNTI2MTQgNS44ODIzNSA4LjI2NDcxIDUuODgyMzVDOC4wMDk4IDUuODgyMzUgNy43ODc1OCA1Ljk3MDU5IDcuNTk4MDQgNi4xNDcwNkw2LjE1Njg2IDcuNTc4NDNDNS45NzM4NiA3Ljc2MTQ0IDUuODgyMzUgNy45ODAzOSA1Ljg4MjM1IDguMjM1MjlDNS44ODIzNSA4LjQ5NjczIDUuOTczODYgOC43MTg5NSA2LjE1Njg2IDguOTAxOTZMOC4xOTYwOCAxMC45NDEyQzguMzcyNTUgMTEuMTE3NiA4LjU5NDc3IDExLjIwNTkgOC44NjI3NSAxMS4yMDU5QzkuMTM3MjYgMTEuMjA1OSA5LjM3MjU1IDExLjEwNDYgOS41Njg2MyAxMC45MDJDOS41NDkwMiAxMC44ODI0IDkuNDg2OTMgMTAuODIxOSA5LjM4MjM1IDEwLjcyMDZDOS4yNzc3OCAxMC42MTkzIDkuMjA3NTIgMTAuNTQ5IDkuMTcxNTcgMTAuNTA5OEM5LjEzNTYyIDEwLjQ3MDYgOS4wODY2IDEwLjQwODUgOS4wMjQ1MSAxMC4zMjM1QzguOTYyNDIgMTAuMjM4NiA4LjkxOTkzIDEwLjE1NTIgOC44OTcwNiAxMC4wNzM1QzguODc0MTggOS45OTE4MyA4Ljg2Mjc1IDkuOTAxOTYgOC44NjI3NSA5LjgwMzkyQzguODYyNzUgOS41NDI0OCA4Ljk1NDI1IDkuMzIwMjYgOS4xMzcyNiA5LjEzNzI2QzkuMzIwMjYgOC45NTQyNSA5LjU0MjQ4IDguODYyNzUgOS44MDM5MiA4Ljg2Mjc1QzkuOTAxOTYgOC44NjI3NSA5Ljk5MTgzIDguODc0MTggMTAuMDczNSA4Ljg5NzA2QzEwLjE1NTIgOC45MTk5MyAxMC4yMzg2IDguOTYyNDIgMTAuMzIzNSA5LjAyNDUxQzEwLjQwODUgOS4wODY2IDEwLjQ3MDYgOS4xMzU2MiAxMC41MDk4IDkuMTcxNTdDMTAuNTQ5IDkuMjA3NTIgMTAuNjE5MyA5LjI3Nzc4IDEwLjcyMDYgOS4zODIzNUMxMC44MjE5IDkuNDg2OTMgMTAuODgyNCA5LjU0OTAyIDEwLjkwMiA5LjU2ODYzQzExLjExNzYgOS4zNjYwMSAxMS4yMjU1IDkuMTI3NDUgMTEuMjI1NSA4Ljg1Mjk0Wk0yMCAxNS43NjQ3QzIwIDE2LjU0OSAxOS43MjIyIDE3LjIxMjQgMTkuMTY2NyAxNy43NTQ5TDE3LjcyNTUgMTkuMTg2M0MxNy4xODMgMTkuNzI4OCAxNi41MTk2IDIwIDE1LjczNTMgMjBDMTQuOTQ0NCAyMCAxNC4yNzc4IDE5LjcyMjIgMTMuNzM1MyAxOS4xNjY3TDExLjcxNTcgMTcuMTM3M0MxMS4xNzMyIDE2LjU5NDggMTAuOTAyIDE1LjkzMTQgMTAuOTAyIDE1LjE0NzFDMTAuOTAyIDE0LjM0MzEgMTEuMTg5NSAxMy42NjAxIDExLjc2NDcgMTMuMDk4TDEwLjkwMiAxMi4yMzUzQzEwLjMzOTkgMTIuODEwNSA5LjY2MDEzIDEzLjA5OCA4Ljg2Mjc1IDEzLjA5OEM4LjA3ODQzIDEzLjA5OCA3LjQxMTc2IDEyLjgyMzUgNi44NjI3NSAxMi4yNzQ1TDQuODIzNTMgMTAuMjM1M0M0LjI3NDUxIDkuNjg2MjcgNCA5LjAxOTYxIDQgOC4yMzUyOUM0IDcuNDUwOTggNC4yNzc3OCA2Ljc4NzU4IDQuODMzMzMgNi4yNDUxTDYuMjc0NTEgNC44MTM3M0M2LjgxNjk5IDQuMjcxMjQgNy40ODAzOSA0IDguMjY0NzEgNEM5LjA1NTU2IDQgOS43MjIyMiA0LjI3Nzc4IDEwLjI2NDcgNC44MzMzM0wxMi4yODQzIDYuODYyNzVDMTIuODI2OCA3LjQwNTIzIDEzLjA5OCA4LjA2ODYzIDEzLjA5OCA4Ljg1Mjk0QzEzLjA5OCA5LjY1Njg2IDEyLjgxMDUgMTAuMzM5OSAxMi4yMzUzIDEwLjkwMkwxMy4wOTggMTEuNzY0N0MxMy42NjAxIDExLjE4OTUgMTQuMzM5OSAxMC45MDIgMTUuMTM3MyAxMC45MDJDMTUuOTIxNiAxMC45MDIgMTYuNTg4MiAxMS4xNzY1IDE3LjEzNzMgMTEuNzI1NUwxOS4xNzY1IDEzLjc2NDdDMTkuNzI1NSAxNC4zMTM3IDIwIDE0Ljk4MDQgMjAgMTUuNzY0N1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjEuNzk4MyAxMkMyMS45MDg2IDEyIDIxLjk5OTIgMTIuMDM1MiAyMi4wNzAxIDEyLjEwNTVDMjIuMTQxIDEyLjE3NTggMjIuMTc2NSAxMi4yNjU2IDIyLjE3NjUgMTIuMzc1VjEzLjEyNUMyMi4xNzY1IDEzLjIzNDQgMjIuMTQxIDEzLjMyNDIgMjIuMDcwMSAxMy4zOTQ1QzIxLjk5OTIgMTMuNDY0OCAyMS45MDg2IDEzLjUgMjEuNzk4MyAxMy41SDEuMzc4MTVDMS4yNjc4NiAxMy41IDEuMTc3MjYgMTMuNDY0OCAxLjEwNjM2IDEzLjM5NDVDMS4wMzU0NSAxMy4zMjQyIDEgMTMuMjM0NCAxIDEzLjEyNVYxMi4zNzVDMSAxMi4yNjU2IDEuMDM1NDUgMTIuMTc1OCAxLjEwNjM2IDEyLjEwNTVDMS4xNzcyNiAxMi4wMzUyIDEuMjY3ODYgMTIgMS4zNzgxNSAxMkgyMS43OTgzWk02LjcwNzcyIDExLjI1QzYuNDg3MTMgMTAuOTc2NiA2LjI4NjI0IDEwLjY2NDEgNi4xMDUwNCAxMC4zMTI1QzUuNzI2ODkgOS41NDY4OCA1LjUzNzgyIDguODEyNSA1LjUzNzgyIDguMTA5MzhDNS41Mzc4MiA2LjY5NTMxIDYuMDY1NjUgNS40ODgyOCA3LjEyMTMyIDQuNDg4MjhDOC4xNjkxMiAzLjQ5NjA5IDkuNzE3MTcgMyAxMS43NjU1IDNDMTIuMTU5NCAzIDEyLjgxNzIgMy4wNzQyMiAxMy43MzkgMy4yMjI2NkMxNC4yNTg5IDMuMzE2NDEgMTQuOTU2MSAzLjUwMzkxIDE1LjgzMDYgMy43ODUxNkMxNS45MDk0IDQuMDgyMDMgMTUuOTkyMSA0LjU0Mjk3IDE2LjA3ODggNS4xNjc5N0MxNi4xODkxIDYuMTI4OTEgMTYuMjQ0MiA2Ljg0Mzc1IDE2LjI0NDIgNy4zMTI1QzE2LjI0NDIgNy40NTMxMiAxNi4yMjQ1IDcuNjI4OTEgMTYuMTg1MSA3LjgzOTg0TDE2LjA0MzMgNy44NzVMMTUuMDUwNyA3LjgwNDY5TDE0Ljg4NTIgNy43ODEyNUMxNC40OTEzIDYuNjE3MTkgMTQuMDg1NiA1LjgxNjQxIDEzLjY2ODEgNS4zNzg5MUMxMi45NzQ4IDQuNjY3OTcgMTIuMTQ3NiA0LjMxMjUgMTEuMTg2NCA0LjMxMjVDMTAuMjg4MyA0LjMxMjUgOS41NzE0MyA0LjU0Mjk3IDkuMDM1NzEgNS4wMDM5MUM4LjUwNzg4IDUuNDU3MDMgOC4yNDM5NiA2LjAyNzM0IDguMjQzOTYgNi43MTQ4NEM4LjI0Mzk2IDcuMjg1MTYgOC41MDM5NCA3LjgzMjAzIDkuMDIzOSA4LjM1NTQ3QzkuNTQzODUgOC44Nzg5MSAxMC42NDI5IDkuMzgyODEgMTIuMzIwOSA5Ljg2NzE5QzEyLjg2NDUgMTAuMDIzNCAxMy41NDYgMTAuMjgxMiAxNC4zNjUzIDEwLjY0MDZDMTQuODIyMiAxMC44NTk0IDE1LjE5NjQgMTEuMDYyNSAxNS40ODc5IDExLjI1SDYuNzA3NzJaTTEyLjY5OTEgMTQuMjVIMTcuNTU1OUMxNy42MTExIDE0LjU1NDcgMTcuNjM4NyAxNC45MTQxIDE3LjYzODcgMTUuMzI4MUMxNy42Mzg3IDE2LjE5NTMgMTcuNDc3MiAxNy4wMjM0IDE3LjE1NDEgMTcuODEyNUMxNi45NzMgMTguMjUgMTYuNjkzMyAxOC42NTYyIDE2LjMxNTEgMTkuMDMxMkMxNi4wMjM2IDE5LjMwNDcgMTUuNTk0MyAxOS42MjExIDE1LjAyNyAxOS45ODA1QzE0LjM5NjggMjAuMzU1NSAxMy43OTQxIDIwLjYxMzMgMTMuMjE5IDIwLjc1MzlDMTIuNTg4OCAyMC45MTggMTEuNzg5MSAyMSAxMC44MjAxIDIxQzkuOTIyMDEgMjEgOS4xNTM4OSAyMC45MTAyIDguNTE1NzYgMjAuNzMwNUw2Ljg2MTM0IDIwLjI2MTdDNi40MTIyOSAyMC4xMzY3IDYuMTI4NjggMjAuMDI3MyA2LjAxMDUgMTkuOTMzNkM1Ljk0NzQ4IDE5Ljg3MTEgNS45MTU5NyAxOS43ODUyIDUuOTE1OTcgMTkuNjc1OFYxOS41MjM0QzUuOTE1OTcgMTguNjc5NyA1LjkwODA5IDE4LjA3MDMgNS44OTIzMyAxNy42OTUzQzUuODg0NDUgMTcuNDYwOSA1Ljg4NDQ1IDE3LjE5NTMgNS44OTIzMyAxNi44OTg0TDUuOTE1OTcgMTYuNDY0OFYxNS45NDkyTDcuMTIxMzIgMTUuOTI1OEM3LjIzOTUgMTYuMTkxNCA3LjM1NzY3IDE2LjQ2ODggNy40NzU4NCAxNi43NTc4QzcuNTk0MDEgMTcuMDQ2OSA3LjY4MjY0IDE3LjI2NTYgNy43NDE3MyAxNy40MTQxQzcuODAwODEgMTcuNTYyNSA3Ljg1MDA1IDE3LjY2OCA3Ljg4OTQ0IDE3LjczMDVDOC4xNjUxOCAxOC4xNzU4IDguNDgwMyAxOC41NDMgOC44MzQ4MiAxOC44MzJDOS4xNzM1OCAxOS4xMTMzIDkuNTg3MTggMTkuMzM1OSAxMC4wNzU2IDE5LjVDMTAuNTQwNCAxOS42NzE5IDExLjA2MDQgMTkuNzU3OCAxMS42MzU1IDE5Ljc1NzhDMTIuMTM5NyAxOS43NTc4IDEyLjY4NzIgMTkuNjUyMyAxMy4yNzgxIDE5LjQ0MTRDMTMuODg0NyAxOS4yMzgzIDE0LjM2NTMgMTguOTAyMyAxNC43MTk4IDE4LjQzMzZDMTUuMDkwMSAxNy45NTcgMTUuMjc1MiAxNy40NTMxIDE1LjI3NTIgMTYuOTIxOUMxNS4yNzUyIDE2LjI2NTYgMTQuOTU2MSAxNS42NTIzIDE0LjMxOCAxNS4wODJDMTQuMDUwMiAxNC44NTU1IDEzLjUxMDUgMTQuNTc4MSAxMi42OTkxIDE0LjI1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk03IDQuNTU1NTZDNyA0LjQwNTA5IDcuMDU1NjYgNC4yNzQ4OSA3LjE2Njk5IDQuMTY0OTNDNy4yNzgzMiA0LjA1NDk4IDcuNDEwMTYgNCA3LjU2MjUgNEwxNS40Mzc1IDRDMTUuNTg5OCA0IDE1LjcyMTcgNC4wNTQ5OCAxNS44MzMgNC4xNjQ5M0MxNS45NDQzIDQuMjc0ODggMTYgNC40MDUwOSAxNiA0LjU1NTU2QzE2IDQuNzA2MDIgMTUuOTQ0MyA0LjgzNjIzIDE1LjgzMyA0Ljk0NjE4TDExLjg5NTUgOC44MzUwN0MxMS43ODQyIDguOTQ1MDIgMTEuNjUyMyA5IDExLjUgOUMxMS4zNDc3IDkgMTEuMjE1OCA4Ljk0NTAyIDExLjEwNDUgOC44MzUwN0w3LjE2Njk5IDQuOTQ2MThDNy4wNTU2NiA0LjgzNjIzIDcgNC43MDYwMiA3IDQuNTU1NTZaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE0LjM5NTUgMjFIOS40MzQ1N1YxOS45MjU4TDExLjcxOTcgMTcuNTIzNEMxMi4yODI5IDE2Ljg4MjIgMTIuNTY0NSAxNi4zNzI3IDEyLjU2NDUgMTUuOTk1MUMxMi41NjQ1IDE1LjY4OTEgMTIuNDk3NyAxNS40NTY0IDEyLjM2NDMgMTUuMjk2OUMxMi4yMzA4IDE1LjEzNzQgMTIuMDM3MSAxNS4wNTc2IDExLjc4MzIgMTUuMDU3NkMxMS41MzI2IDE1LjA1NzYgMTEuMzI5MSAxNS4xNjUgMTEuMTcyOSAxNS4zNzk5QzExLjAxNjYgMTUuNTkxNSAxMC45Mzg1IDE1Ljg1NjggMTAuOTM4NSAxNi4xNzU4SDkuMjg4MDlDOS4yODgwOSAxNS43Mzk2IDkuMzk3MTQgMTUuMzM3NiA5LjYxNTIzIDE0Ljk2OTdDOS44MzMzMyAxNC41OTg2IDEwLjEzNjEgMTQuMzA4OSAxMC41MjM0IDE0LjEwMDZDMTAuOTEwOCAxMy44OTIzIDExLjM0MzggMTMuNzg4MSAxMS44MjIzIDEzLjc4ODFDMTIuNTkwNSAxMy43ODgxIDEzLjE4MTMgMTMuOTY1NSAxMy41OTQ3IDE0LjMyMDNDMTQuMDExNCAxNC42NzUxIDE0LjIxOTcgMTUuMTg0NiAxNC4yMTk3IDE1Ljg0ODZDMTQuMjE5NyAxNi4xMjg2IDE0LjE2NzYgMTYuNDAyIDE0LjA2MzUgMTYuNjY4OUMxMy45NTkzIDE2LjkzMjYgMTMuNzk2NSAxNy4yMTA5IDEzLjU3NTIgMTcuNTAzOUMxMy4zNTcxIDE3Ljc5MzYgMTMuMDAzOSAxOC4xODI2IDEyLjUxNTYgMTguNjcwOUwxMS41OTc3IDE5LjczMDVIMTQuMzk1NVYyMVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuNjQ5MyA0LjE4NzVWNC44NzMwNUMxMC42NDkzIDQuOTIzODMgMTAuNjI4NCA0Ljk2NjggMTAuNTg2NyA1LjAwMTk1QzEwLjU0NDkgNS4wMzcxMSAxMC40OTU1IDUuMDU0NjkgMTAuNDM4NCA1LjA1NDY5SDguNDczOTZWOS44MTI1QzguNDczOTYgOS44NjMyOCA4LjQ1NDE5IDkuOTA3MjMgOC40MTQ2MyA5Ljk0NDM0QzguMzc1MDggOS45ODE0NSA4LjMyNjc0IDEwIDguMjY5NjEgMTBINy4zNzk3QzcuMzIyNTcgMTAgNy4yNzMxMyA5Ljk4MjQyIDcuMjMxMzggOS45NDcyN0M3LjE4OTYzIDkuOTEyMTEgNy4xNjg3NSA5Ljg2NzE5IDcuMTY4NzUgOS44MTI1VjUuMDU0NjlINS4yMTA5NEM1LjE1MzgxIDUuMDU0NjkgNS4xMDQzNyA1LjAzNzExIDUuMDYyNjIgNS4wMDE5NUM1LjAyMDg3IDQuOTY2OCA1IDQuOTIzODMgNSA0Ljg3MzA1VjQuMTg3NUM1IDQuMTMyODEgNS4wMTk3OCA0LjA4Nzg5IDUuMDU5MzMgNC4wNTI3M0M1LjA5ODg4IDQuMDE3NTggNS4xNDk0MiA0IDUuMjEwOTQgNEgxMC40Mzg0QzEwLjQ5NTUgNCAxMC41NDQ5IDQuMDE4NTUgMTAuNTg2NyA0LjA1NTY2QzEwLjYyODQgNC4wOTI3NyAxMC42NDkzIDQuMTM2NzIgMTAuNjQ5MyA0LjE4NzVaTTE3LjQ5MTggNC4xNjk5MkwxNy45OTkzIDkuODAwNzhDMTguMDAzNyA5Ljg1MTU2IDE3Ljk4NjIgOS44OTg0NCAxNy45NDY2IDkuOTQxNDFDMTcuOTAyNyA5Ljk4MDQ3IDE3Ljg1MjEgMTAgMTcuNzk1IDEwSDE2LjkxMTdDMTYuODU4OSAxMCAxNi44MTI4IDkuOTgzNCAxNi43NzMyIDkuOTUwMkMxNi43MzM3IDkuOTE2OTkgMTYuNzExNyA5Ljg3Njk1IDE2LjcwNzMgOS44MzAwOEwxNi40MDQxIDYuMzg0NzdMMTUuMTU4MiA4Ljg3NUMxNS4xMjMgOC45NDkyMiAxNS4wNTkzIDguOTg2MzMgMTQuOTY3IDguOTg2MzNIMTQuMTc2QzE0LjA4ODEgOC45ODYzMyAxNC4wMjQ0IDguOTQ5MjIgMTMuOTg0OCA4Ljg3NUwxMi43NDU2IDYuMzczMDVMMTIuNDQ4OSA5LjgzMDA4QzEyLjQ0NDUgOS44NzY5NSAxMi40MjI1IDkuOTE2OTkgMTIuMzgzIDkuOTUwMkMxMi4zNDM0IDkuOTgzNCAxMi4yOTczIDEwIDEyLjI0NDYgMTBIMTEuMzU0NkMxMS4yOTc1IDEwIDExLjI0NyA5Ljk4MDQ3IDExLjIwMyA5Ljk0MTQxQzExLjE2MzUgOS45MDIzNCAxMS4xNDM3IDkuODU1NDcgMTEuMTQzNyA5LjgwMDc4TDExLjY1NzkgNC4xNjk5MkMxMS42NjIzIDQuMTIzMDUgMTEuNjg0MiA0LjA4MzAxIDExLjcyMzggNC4wNDk4QzExLjc2MzMgNC4wMTY2IDExLjgwOTUgNCAxMS44NjIyIDRIMTIuNzk4M0MxMi44ODYyIDQgMTIuOTQ5OSA0LjAzNzExIDEyLjk4OTUgNC4xMTEzM0wxNC40Mzk3IDcuMTU4MkMxNC40ODM2IDcuMjUxOTUgMTQuNTI3NiA3LjM1MTU2IDE0LjU3MTUgNy40NTcwM0MxNC41ODQ3IDcuNDI5NjkgMTQuNjA1NiA3LjM4MTg0IDE0LjYzNDEgNy4zMTM0OEMxNC42NjI3IDcuMjQ1MTIgMTQuNjg1OCA3LjE5MzM2IDE0LjcwMzQgNy4xNTgyTDE2LjE2MDIgNC4xMTEzM0MxNi4xOTk3IDQuMDM3MTEgMTYuMjYzNSA0IDE2LjM1MTQgNEgxNy4yODA4QzE3LjMzNzkgNCAxNy4zODYzIDQuMDE2NiAxNy40MjU4IDQuMDQ5OEMxNy40NjU0IDQuMDgzMDEgMTcuNDg3NCA0LjEyMzA1IDE3LjQ5MTggNC4xNjk5MlpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYgMjAuNDQ0NEMxNiAyMC41OTQ5IDE1Ljk0NDMgMjAuNzI1MSAxNS44MzMgMjAuODM1MUMxNS43MjE3IDIwLjk0NSAxNS41ODk4IDIxIDE1LjQzNzUgMjFINy41NjI1QzcuNDEwMTYgMjEgNy4yNzgzMiAyMC45NDUgNy4xNjY5OSAyMC44MzUxQzcuMDU1NjYgMjAuNzI1MSA3IDIwLjU5NDkgNyAyMC40NDQ0QzcgMjAuMjk0IDcuMDU1NjYgMjAuMTYzOCA3LjE2Njk5IDIwLjA1MzhMMTEuMTA0NSAxNi4xNjQ5QzExLjIxNTggMTYuMDU1IDExLjM0NzcgMTYgMTEuNSAxNkMxMS42NTIzIDE2IDExLjc4NDIgMTYuMDU1IDExLjg5NTUgMTYuMTY0OUwxNS44MzMgMjAuMDUzOEMxNS45NDQzIDIwLjE2MzggMTYgMjAuMjk0IDE2IDIwLjQ0NDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMuNTYyNSA0LjExMzI4QzMuMjczNDQgNC4wOTc2NiAzLjA5NzY2IDQuMDgyMDMgMy4wMzUxNiA0LjA2NjQxTDMgMy4wMzUxNkMzLjEwMTU2IDMuMDI3MzQgMy4yNTc4MSAzLjAyMzQ0IDMuNDY4NzUgMy4wMjM0NEMzLjkzNzUgMy4wMjM0NCA0LjM3NSAzLjAzOTA2IDQuNzgxMjUgMy4wNzAzMUM1LjgxMjUgMy4xMjUgNi40NjA5NCAzLjE1MjM0IDYuNzI2NTYgMy4xNTIzNEM3LjM5ODQ0IDMuMTUyMzQgOC4wNTQ2OSAzLjE0MDYyIDguNjk1MzEgMy4xMTcxOUM5LjYwMTU2IDMuMDg1OTQgMTAuMTcxOSAzLjA2NjQxIDEwLjQwNjIgMy4wNTg1OUMxMC44NDM4IDMuMDU4NTkgMTEuMTc5NyAzLjA1MDc4IDExLjQxNDEgMy4wMzUxNkwxMS40MDIzIDMuMTk5MjJMMTEuNDI1OCAzLjk0OTIyVjQuMDU0NjlDMTAuOTU3IDQuMTI1IDEwLjQ3MjcgNC4xNjAxNiA5Ljk3MjY2IDQuMTYwMTZDOS41MDM5MSA0LjE2MDE2IDkuMTk1MzEgNC4yNTc4MSA5LjA0Njg4IDQuNDUzMTJDOC45NDUzMSA0LjU2MjUgOC44OTQ1MyA1LjA3ODEyIDguODk0NTMgNkM4Ljg5NDUzIDYuMTAxNTYgOC44OTY0OCA2LjIyODUyIDguOTAwMzkgNi4zODA4NkM4LjkwNDMgNi41MzMyIDguOTA2MjUgNi42MzI4MSA4LjkwNjI1IDYuNjc5NjlMOC45MTc5NyA5LjM2MzI4TDkuMDgyMDMgMTIuNjQ0NUM5LjEyODkxIDEzLjYxMzMgOS4zMjgxMiAxNC40MDIzIDkuNjc5NjkgMTUuMDExN0M5Ljk1MzEyIDE1LjQ3MjcgMTAuMzI4MSAxNS44MzIgMTAuODA0NyAxNi4wODk4QzExLjQ5MjIgMTYuNDU3IDEyLjE4MzYgMTYuNjQwNiAxMi44Nzg5IDE2LjY0MDZDMTMuNjkxNCAxNi42NDA2IDE0LjQzNzUgMTYuNTMxMiAxNS4xMTcyIDE2LjMxMjVDMTUuNTU0NyAxNi4xNzE5IDE1Ljk0MTQgMTUuOTcyNyAxNi4yNzczIDE1LjcxNDhDMTYuNjUyMyAxNS40MzM2IDE2LjkwNjIgMTUuMTgzNiAxNy4wMzkxIDE0Ljk2NDhDMTcuMzIwMyAxNC41MjczIDE3LjUyNzMgMTQuMDgyIDE3LjY2MDIgMTMuNjI4OUMxNy44MjQyIDEzLjA1ODYgMTcuOTA2MiAxMi4xNjQxIDE3LjkwNjIgMTAuOTQ1M0MxNy45MDYyIDEwLjMyODEgMTcuODkyNiA5LjgyODEyIDE3Ljg2NTIgOS40NDUzMUMxNy44Mzc5IDkuMDYyNSAxNy43OTQ5IDguNTgzOTggMTcuNzM2MyA4LjAwOTc3QzE3LjY3NzcgNy40MzU1NSAxNy42MjUgNi44MTI1IDE3LjU3ODEgNi4xNDA2MkwxNy41MzEyIDUuNDQ5MjJDMTcuNDkyMiA0LjkyNTc4IDE3LjM5ODQgNC41ODIwMyAxNy4yNSA0LjQxNzk3QzE2Ljk4NDQgNC4xNDQ1MyAxNi42ODM2IDQuMDExNzIgMTYuMzQ3NyA0LjAxOTUzTDE1LjE3NTggNC4wNDI5N0wxNS4wMTE3IDQuMDA3ODFMMTUuMDM1MiAzSDE2LjAxOTVMMTguNDIxOSAzLjExNzE5QzE5LjAxNTYgMy4xNDA2MiAxOS43ODEyIDMuMTAxNTYgMjAuNzE4OCAzTDIwLjkyOTcgMy4wMjM0NEMyMC45NzY2IDMuMzIwMzEgMjEgMy41MTk1MyAyMSAzLjYyMTA5QzIxIDMuNjc1NzggMjAuOTg0NCAzLjc5Njg4IDIwLjk1MzEgMy45ODQzOEMyMC42MDE2IDQuMDc4MTIgMjAuMjczNCA0LjEyODkxIDE5Ljk2ODggNC4xMzY3MkMxOS4zOTg0IDQuMjIyNjYgMTkuMDg5OCA0LjI4OTA2IDE5LjA0MyA0LjMzNTk0QzE4LjkyNTggNC40NTMxMiAxOC44NjcyIDQuNjEzMjggMTguODY3MiA0LjgxNjQxQzE4Ljg2NzIgNC44NzEwOSAxOC44NzMgNC45NzY1NiAxOC44ODQ4IDUuMTMyODFDMTguODk2NSA1LjI4OTA2IDE4LjkwMjMgNS40MTAxNiAxOC45MDIzIDUuNDk2MDlDMTguOTY0OCA1LjY0NDUzIDE5LjA1MDggNy4xOTE0MSAxOS4xNjAyIDEwLjEzNjdDMTkuMjA3IDExLjY2MDIgMTkuMTQ4NCAxMi44NDc3IDE4Ljk4NDQgMTMuNjk5MkMxOC44NjcyIDE0LjI5MyAxOC43MDcgMTQuNzY5NSAxOC41MDM5IDE1LjEyODlDMTguMjA3IDE1LjYzNjcgMTcuNzY5NSAxNi4xMTcyIDE3LjE5MTQgMTYuNTcwM0MxNi42MDU1IDE3LjAxNTYgMTUuODk0NSAxNy4zNjMzIDE1LjA1ODYgMTcuNjEzM0MxNC4yMDcgMTcuODcxMSAxMy4yMTA5IDE4IDEyLjA3MDMgMThDMTAuNzY1NiAxOCA5LjY1NjI1IDE3LjgyMDMgOC43NDIxOSAxNy40NjA5QzcuODEyNSAxNy4wOTM4IDcuMTEzMjggMTYuNjE3MiA2LjY0NDUzIDE2LjAzMTJDNi4xNjc5NyAxNS40Mzc1IDUuODQzNzUgMTQuNjc1OCA1LjY3MTg4IDEzLjc0NjFDNS41NDY4OCAxMy4xMjExIDUuNDg0MzggMTIuMTk1MyA1LjQ4NDM4IDEwLjk2ODhWNy4wNjY0MUM1LjQ4NDM4IDUuNTk3NjYgNS40MTc5NyA0Ljc2NTYyIDUuMjg1MTYgNC41NzAzMUM1LjA4OTg0IDQuMjg5MDYgNC41MTU2MiA0LjEzNjcyIDMuNTYyNSA0LjExMzI4Wk0yMSAyMC42MjVWMTkuODc1QzIxIDE5Ljc2NTYgMjAuOTY0OCAxOS42NzU4IDIwLjg5NDUgMTkuNjA1NUMyMC44MjQyIDE5LjUzNTIgMjAuNzM0NCAxOS41IDIwLjYyNSAxOS41SDMuMzc1QzMuMjY1NjIgMTkuNSAzLjE3NTc4IDE5LjUzNTIgMy4xMDU0NyAxOS42MDU1QzMuMDM1MTYgMTkuNjc1OCAzIDE5Ljc2NTYgMyAxOS44NzVWMjAuNjI1QzMgMjAuNzM0NCAzLjAzNTE2IDIwLjgyNDIgMy4xMDU0NyAyMC44OTQ1QzMuMTc1NzggMjAuOTY0OCAzLjI2NTYyIDIxIDMuMzc1IDIxSDIwLjYyNUMyMC43MzQ0IDIxIDIwLjgyNDIgMjAuOTY0OCAyMC44OTQ1IDIwLjg5NDVDMjAuOTY0OCAyMC44MjQyIDIxIDIwLjczNDQgMjEgMjAuNjI1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNSA4djhINVY4aDEwbTEtMkg0Yy0uNTUgMC0xIC40NS0xIDF2MTBjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xdi0zLjVsNCA0di0xMWwtNCA0VjdjMC0uNTUtLjQ1LTEtMS0xelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuaW1wb3J0ICogYXMgRWRpdG9yIGZyb20gXCIuL2Jsb2NrZWRpdG9yLmpzXCI7XG52YXIgdGVzdGRhdGEgPSBbXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiaGVhZGVyXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCU0YDQsNC80LAg0LrQsNGC0L7QtNCwXCIsXG4gICAgICAgICAgICBcImxldmVsXCIgOiAzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogXCLQlNGA0LDQvNCwINC+0LTQvdC+0YDQvtC00L3QviDQv9GA0LjRgtGP0LPQuNCy0LDQtdGCINC/0YDQvtC30LDQuNGH0LXRgdC60LjQuSDQtNCw0LrRgtC40LvRjC4g0JLQtdGB0YzQvNCwINC/0LXRgNGB0L/QtdC60YLQuNCy0L3QvtC5INC/0YDQtdC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0LPQuNC/0L7RgtC10LfQsCwg0LLRi9GB0LrQsNC30LDQvdC90LDRjyDQmC7Qk9Cw0LvRjNC/0LXRgNC40L3Ri9C8XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwibGlzdFwiLFxuICAgICAgICBcImRhdGFcIiA6e1xuICAgICAgICAgICAgXCJzdHlsZVwiIDogXCJvcmRlcmVkXCIsXG4gICAgICAgICAgICBcIml0ZW1zXCIgOiAgW1wiRmlyc3QgaXRlbVwiICwgXCJTZWNvbmQgSXRlbVwiICwgXCJUaGlyZCBJdGVtXCJdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcImZjdWtcIixcbiAgICAgICAgXCJkYXRhXCIgOntcbiAgICAgICAgICAgIFwic3R5bGVcIiA6IFwib3JkZXJlZFwiLFxuICAgICAgICAgICAgXCJpdGVtc1wiIDogIFtcIkZpcnN0IGl0ZW1cIiAsIFwiU2Vjb25kIEl0ZW1cIiAsIFwiVGhpcmQgSXRlbVwiXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIiA6IFwi0J/QtdGA0LLQvtC1INC/0L7Qu9GD0YHRgtC40YjQuNC1INC40LfRj9GJ0L3QviDQuNC70LvRjtGB0YLRgNC40YDRg9C10YIg0LvQuNGA0LjRh9C10YHQutC40Lkg0L/QsNGA0LDRhNGA0LDQty5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJkaXZpZGVyXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge31cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogYNCh0LvQtdC00YPQtdGCINC+0YLQvNC10YLQuNGC0YwsINGH0YLQviDQutCw0YLQvtC0INGB0YPQsdGB0YLRgNCw0YLQvdC+INCy0LfQstC10YjQuNCy0LDQtdGCINC00LXRgdGC0YDRg9C60YLQuNCy0L3Ri9C5IFxuICAgICAgICAgICAg0LHQtdC70L7Qui4g0JTQsNC20LUg0LIg0Y3RgtC+0Lwg0LrQvtGA0L7RgtC60L7QvCDRhNGA0LDQs9C80LXQvdGC0LUg0LLQuNC00L3Qviwg0YfRgtC+INCy0YvQv9Cw0YDQuNCy0LDQvdC40LUg0LTQsNC10YIgXG4gICAgICAgICAgICDQsdGL0LvQuNC90L3Ri9C5INC+0LTQuNC90L3QsNC00YbQsNGC0LjRgdC70L7QttC90LjQui5gXG4gICAgICAgIH1cbiAgICB9LFxuXG5dXG5cbnZhciBteWVkaXRvciA9IEVkaXRvci5tYWtlQmFzaWNFZGl0b3IoXCIjZWRpdGVkX2NvbnRlbnRcIik7XG5teWVkaXRvci5zdGFydCh0ZXN0ZGF0YSk7XG5cbi8vc2F2ZSB0ZXN0XG5sZXQgc2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5zYi50eXBlPVwiYnV0dG9uXCI7XG5zYi52YWx1ZSA9IFwic2F2ZVwiO1xuc2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgZnVuY3Rpb24oKXtteWVkaXRvci5zYXZlKCl9KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2IpXG5cblxuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ2Vtb3Rpb24nO1xuXG5leHBvcnQgdmFyIGljb25zID0ge307XG5cbmljb25zLmJvbGQgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9ib2xkLnN2Z1wiKTtcbmljb25zLml0YWxpYyA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2l0YWxpYy5zdmdcIik7XG5pY29ucy51bmRlcmxpbmUgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF91bmRlcmxpbmUuc3ZnXCIpO1xuaWNvbnMuc3RyaWtlID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3RyaWtlLnN2Z1wiKTtcbmljb25zLnN1cCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1cC5zdmdcIik7XG5pY29ucy5zdWIgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdWIuc3ZnXCIpO1xuaWNvbnMubGluayA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2xpbmsuc3ZnXCIpO1xuXG5pY29ucy5oZWFkZXIgPSByZXF1aXJlKFwiLi9zdmcvaGVhZGVyLTI0cHguc3ZnXCIpO1xuaWNvbnMuY29kZSA9IHJlcXVpcmUoXCIuL3N2Zy9jb2RlLW15LTI0cHguc3ZnXCIpO1xuaWNvbnMucmF3ID0gcmVxdWlyZShcIi4vc3ZnL2NvZGUtMjRweC5zdmdcIik7XG5pY29ucy5ub2Zvcm1hdCA9IHJlcXVpcmUoXCIuL3N2Zy9yZW1vdmUtZm9ybWF0LnN2Z1wiKTtcblxuaWNvbnMudXAgPSByZXF1aXJlKFwiLi9zdmcvYXJyb3dfdXB3YXJkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZG93biA9IHJlcXVpcmUoXCIuL3N2Zy9hcnJvd19kb3dud2FyZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRlbCA9IHJlcXVpcmUoXCIuL3N2Zy9jbGVhci0yNHB4LnN2Z1wiKTtcbmljb25zLmFkZCA9IHJlcXVpcmUoXCIuL3N2Zy9hZGQtMjRweC5zdmdcIik7XG5pY29ucy5kaXZpZGVyID0gcmVxdWlyZShcIi4vc3ZnL2RpdmlkZXItMjRweC5zdmdcIik7XG5cbmljb25zLm1hdGVyaWFsID0ge307XG5cbmljb25zLm1hdGVyaWFsLmJvbGQgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X2JvbGQtMjRweC5zdmdcIik7XG5pY29ucy5tYXRlcmlhbC5pdGFsaWMgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X2l0YWxpYy0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnVuZGVybGluZSA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfdW5kZXJsaW5lZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnN0cmlrZSA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfc3RyaWtldGhyb3VnaC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLmxpbmsgPSByZXF1aXJlKFwiLi9zdmcvbGluay0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLmxpbmtvZmYgPSByZXF1aXJlKFwiLi9zdmcvbGlua19vZmYtMjRweC5zdmdcIik7XG5cbmljb25zLm1hdGVyaWFsLnF1b3RlID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9xdW90ZS0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLmxpc3QgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X2xpc3RfYnVsbGV0ZWQtMjRweC5zdmdcIik7XG5pY29ucy5tYXRlcmlhbC52aWRlbyA9IHJlcXVpcmUoXCIuL3N2Zy92aWRlb2NhbS0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnF1b3RlID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9xdW90ZS0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLmltYWdlID0gcmVxdWlyZShcIi4vc3ZnL2luc2VydF9waG90by1vdXRsaW5lZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnBhcmFncmFwaCA9IHJlcXVpcmUoXCIuL3N2Zy9wYXJhZ3JhcGgtcmVtaXgtMjRweC5zdmdcIik7XG5cblxuXG5leHBvcnQgdmFyIG15Y3lhbiA9IFwiIzNFRDlFM1wiOyAvL3JlbW92ZVxuZXhwb3J0IHZhciBDb2xvdXJzID0ge1xuICAgIFwibGlnaHRcIjogXCIjM0VEOUUzXCIsXG4gICAgXCJkYXJrXCI6IFwiIzAwQTFBQlwiLFxuICAgIFwicGFsZVwiOiBcIiNDNEY3RkFcIixcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTdHlsZShzdHN0cikge1xuICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlI2Jsb2NrX2VkaXRvcl9pbmplY3RlZF9zdHlsZVwiKTtcbiAgICBpZiAoIWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2hpbmcgc3R5bGVzaGVldCBmb3Igc3R5bGUgaW5qZWN0aW9uXCIpO1xuICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBlLmlkID0gXCJibG9ja19lZGl0b3JfaW5qZWN0ZWRfc3R5bGVcIjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlKTsgICAgXG4gICAgfVxuICAgIGUuaW5uZXJIVE1MICs9IHN0c3RyO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFzayhwcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCByID0gcHJvbXB0KHByKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHJlc29sdmUocilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5vIGlucHV0XCIpXG4gICAgICAgIH07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgIGxldCB0dHMgPSBjc3Moe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG91cnMuZGFyayxcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIlxuICAgIH0pXG4gICAgbGV0IHR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHQuc3R5bGUuekluZGV4ID0gMjA7XG4gICAgdHQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gICAgbGV0IHR0aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0aW4uY2xhc3NOYW1lID0gdHRzO1xuICAgIHR0LmFwcGVuZENoaWxkKHR0aW4pO1xuICAgIC8vdHRpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBDb2xvdXJzLmRhcms7XG4gICAgLy90dGluLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHR0aW4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHR0aW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcbiAgICB0dGluLnN0eWxlLnBhZGRpbmcgPSBcIjRweCA4cHhcIjtcbiAgICB0dGluLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHR0aW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIycHhcIjtcbiAgICB0dGluLnN0eWxlLmJveFNoYWRvdyA9IFwiMXB4IDFweCAzcHggMnB4ICMwMDAwMDAyMlwiO1xuICAgIHR0aW4uc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIHR0aW4uc3R5bGUuYm90dG9tID0gXCIxNnB4XCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR0KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCB0dGIgPSB0dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIHR0LnN0eWxlLnRvcCA9IChlLmNsaWVudFkgLSB0dGIgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG4gICAgICAgIHR0LnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XG5cbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5kYXRhc2V0LmhpbnQpIHtcbiAgICAgICAgICAgIHR0aW4uaW5uZXJIVE1MID0gZS50YXJnZXQuZGF0YXNldC5oaW50O1xuICAgICAgICAgICAgLy8gdHQuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICAgICAgICAgICAgLy8gIHR0LnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XG4gICAgICAgICAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRUb29scygpIHtcbiAgICBsZXQgdHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dG9vbHMuc3R5bGUubWluV2lkdGggPSBcIjEwMHB4XCI7XG4gICAgdHRvb2xzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgLy90dG9vbHMuc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgdHRvb2xzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENvbG91cnMuZGFyaztcbiAgICB0dG9vbHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dG9vbHMuc3R5bGUucGFkZGluZyA9IFwiMHB4IDhweFwiO1xuICAgIGNvbnNvbGUubG9nKFwiYXBwZW5kIHRleHQgdG9vbHNcIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR0b29scyk7XG4gICAgLy9idXR0b25zXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uKGxibCwgZnVuYywgaGludCkge1xuICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGIuaW5uZXJIVE1MID0gbGJsO1xuICAgICAgICBiLnN0eWxlLndpZHRoID0gXCIxOHB4XCI7XG4gICAgICAgIGIuc3R5bGUuaGVpZ2h0ID0gXCIxOHB4XCI7XG4gICAgICAgIGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgYi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jKTtcbiAgICAgICAgYi5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgICAgICBiLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBiLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgICAgICBiLm9ubW91c2VvdmVyID0gKCkgPT4gYi5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICBiLm9ubW91c2VvdXQgPSAoKSA9PiBiLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XG4gICAgICAgIGxldCBzdiA9IGIucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgc3Yuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiOyAvLy5zdHlsZS5wb2ludGVyRXZlbnRzKFwibm9uZVwiKTtcbiAgICAgICAgaWYgKGhpbnQpIHtcbiAgICAgICAgICAgIGIuZGF0YXNldC5oaW50ID0gaGludFxuICAgICAgICB9O1xuICAgICAgICB0dG9vbHMuYXBwZW5kQ2hpbGQoYik7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGljb25zLm1hdGVyaWFsLmJvbGQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJib2xkXCIsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJvbGRcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIkJvbGRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwuaXRhbGljLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIml0YWxpY1wiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiSXRhbGljXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLm1hdGVyaWFsLnVuZGVybGluZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJVbmRlcmxpbmVcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwuc3RyaWtlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHJpa2VUaHJvdWdoXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdHJpa2VcIilcbiAgICAvKlxuICAgIGFkZEJ1dHRvbihcInNtYWxsXCIgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzbWFsbFwiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZGVjcmVhc2VGb250U2l6ZVwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgKi9cbiAgICBhZGRCdXR0b24oaWNvbnMuc3VwLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3VwZXJzY3JpcHRcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN1cGVyc2NyaXB0XCIpXG4gICAgYWRkQnV0dG9uKGljb25zLnN1YiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1YnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3Vic2NyaXB0XCIpXG4gICAgYWRkQnV0dG9uKGljb25zLm1hdGVyaWFsLmxpbmssIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIEFzayhcIkVudGVyIFVSTFwiKVxuICAgICAgICAgICAgLnRoZW4ociA9PiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNyZWF0ZUxpbmtcIiwgZmFsc2UsIHVuZXNjYXBlKHIpKSlcbiAgICAgICAgICAgIC5jYXRjaChyID0+IGNvbnNvbGUubG9nKHIpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiTWFrZSBsaW5rXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLm1hdGVyaWFsLmxpbmtvZmYsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5saW5rXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJSZW1vdmUgbGlua1wiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5ub2Zvcm1hdCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJyZW1vdmVGb3JtYXRcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlJlbW92ZSBmb3JtYXR0aW5nXCIpXG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlbCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICAgICAgbGV0IGNlID0gZWw7XG4gICAgICAgIC8vaWYoIWNlKXtyZXR1cm4gbnVsbH07XG4gICAgICAgIHdoaWxlICghY2UuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpICYmIGNlLm5vZGVOYW1lICE9IFwiQk9EWVwiKSB7XG4gICAgICAgICAgICBjZSA9IGNlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoIWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXB0b1wiICwgY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpO1xuICAgICAgICBsZXQgZWljID0gdGVzdEVkaXRhYmxlQ29udGFpbmVyKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKGVpYyAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlaWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUubGVmdCA9IHRndC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGxldCB0dGhlID0gdHRvb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcCAtIHR0aGUgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG5cbiAgICAgICAgICAgIC8vfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0X3Rvb2xib3hcIikpIHtcbiAgICAgICAgICAgIC8vdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG59XG5leHBvcnQgZnVuY3Rpb24gYWRkUGx1c0J1dHRvbihibG9jaywgbWVudSkge1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoIW1lbnUpIHtcbiAgICAgICAgbWVudSA9IFt7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgY2xpY2tlZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZW51MiBjbGlja2VkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG4gICAgLy9tZW51XG4gICAgbGV0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKTtcbiAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZGQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgZGQuc3R5bGUudG9wID0gXCIxMDAlXCI7XG4gICAgZGQuc3R5bGUubGVmdCA9IDA7XG4gICAgZGQuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGRkLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUubWF4V2lkdGggPSBcIjEwMHB4XCI7XG4gICAgZGQuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMnB4IDZweCByZ2JhKDAlLCAwJSwgMCUsIDAuMzA0KVwiXG4gICAgLy9kZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmF5XCJcbiAgICBtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGVsZW1lbnQuaWNvbjtcbiAgICAgICAgLy9taS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIG1pLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZmVyLWJveFwiO1xuICAgICAgICBtaS5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIlxuICAgICAgICBtaS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBtaS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICAgICAgICBtaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIG1pLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZmlsbCA9IENvbG91cnMubGlnaHQ7XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gQ29sb3Vycy5saWdodDtcbiAgICAgICAgbWkuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICAgICAgbWkuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCJcbiAgICAgICAgbGV0IG1pc3ZnID0gbWkucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgaWYgKG1pc3ZnKSB7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICAgICAgbWlzdmcuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgbWkub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBtaS5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICAgICAgbWkuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgfTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1pLnN0eWxlLmZpbGwgPSBDb2xvdXJzLmxpZ2h0O1xuICAgICAgICAgICAgbWkuc3R5bGUuY29sb3IgPSBDb2xvdXJzLmxpZ2h0XG4gICAgICAgIH07XG5cblxuICAgICAgICBtaS5kYXRhc2V0LmhpbnQgPSBlbGVtZW50LmxhYmVsO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmhhbmRsZXIoYmxvY2suZGF0YXNldC5ibG9ja19pZCk7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRkLmFwcGVuZENoaWxkKG1pKVxuICAgIH0pO1xuICAgIC8vXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoZGQpO1xuXG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRkb3duXCIpO1xuICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDEwMCUsIDEwMCUsIDEwMCUsIDAuMDExKVwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5maWxsID0gQ29sb3Vycy5saWdodDtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrQ29udHJvbHMoYmxvY2ssIGl0ZW1zLCBlZCkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGJsb2NrX2VkaXRvcl91bml0XG4gICAgICovXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjc3Moe1xuICAgICAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICBcIiY6aG92ZXJcIjp7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogQ29sb3Vycy5saWdodFxuICAgICAgICB9LFxuICAgICAgICBcIiYgKltjb250ZW50ZWRpdGFibGU9J3RydWUnXTplbXB0eVwiIDoge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIiA6IENvbG91cnMucGFsZSxcbiAgICAgICAgICAgIFwibWluSGVpZ2h0XCIgOiBcIjFyZW1cIixcbiAgICAgICAgICAgIFwibWluV2lkdGhcIiA6IFwiMXJlbVwiXG4gICAgICAgIH1cblxuICAgIH0pKVxuICAgIGJsb2NrLnN0eWxlLnBhZGRpbmcgPSBcIjAgMzJweFwiO1xuICAgIGJsb2NrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgYmxvY2suc3R5bGUubWFyZ2luID0gXCIwIC0zMnB4XCJcbiAgICBpZiAoIWl0ZW1zICYmIGVkKSB7XG4gICAgICAgIGl0ZW1zID0gW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJNb3ZlIGJsb2NrIHVwXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMudXAsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlZC5tb3ZlVXAoYmxvY2suZGF0YXNldC5ibG9ja19pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1vdmUgYmxvY2sgZG93blwiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLmRvd24sXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVsZXRlIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZGVsLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWQucmVtb3ZlQmxvY2soYmxvY2suZGF0YXNldC5ibG9ja19pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgIH1cbiAgICAvL1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBvdXJjbGFzcyA9IFwiY3RybHNcIiArIGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgbGV0IGN0cmxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKFwiY29tbW9uX2Jsb2NrX2NvbnRyb2xzXCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQob3VyY2xhc3MpO1xuICAgIGN0cmxzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XG4gICAgY3RybHMuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgY3RybHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmZWVcIjtcbiAgICAvL2N0cmxzLnN0eWxlLmJvcmRlckxlZnQgPSBcIjNweCBzb2xpZCBcIiArIENvbG91cnMubGlnaHQ7XG4gICAgY3RybHMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgY3RybHMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY3RybHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGN0cmxzLnN0eWxlLnpJbmRleCA9IDY7XG4gICAgICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICBjdHJscy5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSk7XG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgY3RybHMuc3R5bGUuekluZGV4ID0gNTtcbiAgICAgICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIGN0cmxzLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xuICAgICAgICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9KTtcblxuXG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGUuaWNvbjtcbiAgICAgICAgbWkucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBtaS5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICAgICAgbWkuc3R5bGUuZmlsbCA9IENvbG91cnMubGlnaHQ7XG4gICAgICAgIG1pLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGUubGFiZWw7XG4gICAgICAgIGN0cmxzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGN0cmxzKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==