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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function editor({
    selector
}) {
    const my = this;
    //
    let mine = document.createElement("div");
    mine.classList.add("block_editor_outer_container");
    let they = document.querySelector(selector);
    they.innerHTML = "";
    they.appendChild(mine);
    this.element = mine; //this element is mine

    this.editors = params.editors; //  available blocks editors
    this.blocks = null; // blocks array

    var _current_id = 0;

    this._makeID = function () {
        _current_id++;
        return _current_id;
    }

    this.start = function (blocks) {
        this.element.innerHTML = "";
        this.blocks = [];
        if (blocks) {
            blocks.forEach(e => this.addNewBlockFromSource(e));
        }

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
            upper.insertBefore(theblock);
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
            nextnext.insertBefore(theblock);
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

    this.addNewBlock = function (type, data, refid) { //ref=instert after that block
        //if there is ref id, we have to insert after
        //find next element
        if (refid) {
            let nextidx = this.ID2Index(refid) + 1;
            var refel = this.element.blockElementByIndex(nextidx);
        }

        //create block of type 
        if (type in this.editors) {
            let bID = this._makeID();
            let bcontent = document.createElement("div");
            bcontent.classList.add("block_content_container");
            var block = this.editors[type].make(data, bcontent, bID, this); //block made
            this.blocks[bID] = block;
        } else {
            console.log("no editor for", name);
            return null;
        }

        //create DOM element for editor
        let domblock = document.createElement("div");
        domblock.appendChild(block.element);
        domblock.classList.add("block_editor_unit");
        domblock.dataset.block_id = bID;
        domblock.dataset.block_type = btype;

        //add corresponding dom el. to container
        if (refid && refel) {
            refel.insertBefore(domblock);
        } else {
            this.element.appendChild(domblock);
        }
        block.render();

    } //add new block

    this.removeBlock = function (id) {
        //find block index
        let elidx = this.ID2Index(id);
        //announce deletion to block
        this.blocks[id].delete();
        //remove dom element
        this.element.querySelectorAll(".be_unit").item(elidx).remove();
        //del block from registry
        delete(this.blocks[id]);
    } //remove block

    this.save = function () {
        let dt = [];
        this.element.querySelectorAll(".be_item")
            .forEach(e => dt.push({
                "type": e.dataset.block_type,
                "data": this.blocks[e.dataset.block_id].save()
            }));
        let mydata = {
            "blocks": dt
        };
        console.log("Editor saving", mydata);
        return mydata;
    }

}



function addToolbar(block) {
    let tbx = document.createElement("div");
    tbx.classList.add("block_toolbar");
    block.element.parentNode.appendChild(tbx); //add to editor_item, !not! block content container
    block.addToToolbar = function (el) {
        tbx.appendChild(el)
    }
}

function paragraph(data, el, id, editor) {
    let bc = document.createElement("p");
    bc.setAttribute("contenteditable", true);
    el.appendChild(bc);

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
        render: function () {
            this._p.innerHTML = this.data.text;
        },
        save: function () {
            return {
                text: this._p.innerHTML
            }
        }
    }

    blc._p.addEventListener("keyup", function (e) {
        if (e.keyCode == 13) {
            console.log("enter pressed")
        }
    })
    return blc;
}

function divider(data, el, id, editor) {
    return {
        element: el,
        id: id,
        render: function () {
            el.innerHTML = "<hr />";
        },
        save: function () {
            return {};
        }
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QixrQ0FBa0M7QUFDbEMsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJibG9ja2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBlZGl0b3Ioe1xuICAgIHNlbGVjdG9yXG59KSB7XG4gICAgY29uc3QgbXkgPSB0aGlzO1xuICAgIC8vXG4gICAgbGV0IG1pbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbmUuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9vdXRlcl9jb250YWluZXJcIik7XG4gICAgbGV0IHRoZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhleS5hcHBlbmRDaGlsZChtaW5lKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBtaW5lOyAvL3RoaXMgZWxlbWVudCBpcyBtaW5lXG5cbiAgICB0aGlzLmVkaXRvcnMgPSBwYXJhbXMuZWRpdG9yczsgLy8gIGF2YWlsYWJsZSBibG9ja3MgZWRpdG9yc1xuICAgIHRoaXMuYmxvY2tzID0gbnVsbDsgLy8gYmxvY2tzIGFycmF5XG5cbiAgICB2YXIgX2N1cnJlbnRfaWQgPSAwO1xuXG4gICAgdGhpcy5fbWFrZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY3VycmVudF9pZCsrO1xuICAgICAgICByZXR1cm4gX2N1cnJlbnRfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9ja3NbaWRdO1xuICAgIH1cblxuICAgIHRoaXMuSUQySW5kZXggPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHIgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhc2V0LmJsb2NrX2lkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgciA9IGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHRoaXMuSW5kZXgySUQgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCkuZGF0YXNldC5ibG9ja19pZDtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0odGhpcy5JRDJJbmRleChpZCkpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXMuYWRkTmV3QmxvY2soZC50eXBlLCBkLmRhdGEsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMubW92ZVVwID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgaWYgKGJpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9maW5kIHByZXYgYmxvY2tcbiAgICAgICAgbGV0IHVwcGVyID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCAtIDEpO1xuICAgICAgICBpZiAodXBwZXIpIHtcbiAgICAgICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgICAgICB1cHBlci5pbnNlcnRCZWZvcmUodGhlYmxvY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIG5leHRuZXh0Lmluc2VydEJlZm9yZSh0aGVibG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3dlIGF0IHByZWxhc3QgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoZWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yID0gZnVuY3Rpb24gKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWFrZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHBhc3RlXG4gICAgfSkge1xuICAgICAgICB0aGlzLmVkaXRvcnNbdHlwZV0gPSB7XG4gICAgICAgICAgICBtYWtlLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgcGFzdGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIHJlZmlkKSB7IC8vcmVmPWluc3RlcnQgYWZ0ZXIgdGhhdCBibG9ja1xuICAgICAgICAvL2lmIHRoZXJlIGlzIHJlZiBpZCwgd2UgaGF2ZSB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgICAgLy9maW5kIG5leHQgZWxlbWVudFxuICAgICAgICBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5lbGVtZW50LmJsb2NrRWxlbWVudEJ5SW5kZXgobmV4dGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBibG9jayBvZiB0eXBlIFxuICAgICAgICBpZiAodHlwZSBpbiB0aGlzLmVkaXRvcnMpIHtcbiAgICAgICAgICAgIGxldCBiSUQgPSB0aGlzLl9tYWtlSUQoKTtcbiAgICAgICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBiY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfY29udGVudF9jb250YWluZXJcIik7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGVkaXRvciBmb3JcIiwgbmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIERPTSBlbGVtZW50IGZvciBlZGl0b3JcbiAgICAgICAgbGV0IGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZG9tYmxvY2suYXBwZW5kQ2hpbGQoYmxvY2suZWxlbWVudCk7XG4gICAgICAgIGRvbWJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfdW5pdFwiKTtcbiAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja19pZCA9IGJJRDtcbiAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gYnR5cGU7XG5cbiAgICAgICAgLy9hZGQgY29ycmVzcG9uZGluZyBkb20gZWwuIHRvIGNvbnRhaW5lclxuICAgICAgICBpZiAocmVmaWQgJiYgcmVmZWwpIHtcbiAgICAgICAgICAgIHJlZmVsLmluc2VydEJlZm9yZShkb21ibG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLnJlbmRlcigpO1xuXG4gICAgfSAvL2FkZCBuZXcgYmxvY2tcblxuICAgIHRoaXMucmVtb3ZlQmxvY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9maW5kIGJsb2NrIGluZGV4XG4gICAgICAgIGxldCBlbGlkeCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2Fubm91bmNlIGRlbGV0aW9uIHRvIGJsb2NrXG4gICAgICAgIHRoaXMuYmxvY2tzW2lkXS5kZWxldGUoKTtcbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmVfdW5pdFwiKS5pdGVtKGVsaWR4KS5yZW1vdmUoKTtcbiAgICAgICAgLy9kZWwgYmxvY2sgZnJvbSByZWdpc3RyeVxuICAgICAgICBkZWxldGUodGhpcy5ibG9ja3NbaWRdKTtcbiAgICB9IC8vcmVtb3ZlIGJsb2NrXG5cbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkdCA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iZV9pdGVtXCIpXG4gICAgICAgICAgICAuZm9yRWFjaChlID0+IGR0LnB1c2goe1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBlLmRhdGFzZXQuYmxvY2tfdHlwZSxcbiAgICAgICAgICAgICAgICBcImRhdGFcIjogdGhpcy5ibG9ja3NbZS5kYXRhc2V0LmJsb2NrX2lkXS5zYXZlKClcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbGV0IG15ZGF0YSA9IHtcbiAgICAgICAgICAgIFwiYmxvY2tzXCI6IGR0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdG9yIHNhdmluZ1wiLCBteWRhdGEpO1xuICAgICAgICByZXR1cm4gbXlkYXRhO1xuICAgIH1cblxufVxuXG5cblxuZnVuY3Rpb24gYWRkVG9vbGJhcihibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcmFncmFwaChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBiYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBteTogdGhpcyxcbiAgICAgICAgaWQ6IGlkLCAvLyEhISEhISEhISEhISEhISEhISEgICAgXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge1xuICAgICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgZWRpdG9yOiBlZGl0b3IsXG4gICAgICAgIF9wOiBiYyxcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9wLmlubmVySFRNTCA9IHRoaXMuZGF0YS50ZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3AuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibGMuX3AuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgcHJlc3NlZFwiKVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYmxjO1xufVxuXG5mdW5jdGlvbiBkaXZpZGVyKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxociAvPlwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==