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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bled/blockeditor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bled/beui.js":
/*!**************************!*\
  !*** ./src/bled/beui.js ***!
  \**************************/
/*! exports provided: icons, mycyan, injectStyle, Ask, tooltips, textTools, addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectStyle", function() { return injectStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTools", function() { return textTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });
var icons = {};

icons.bold = __webpack_require__(/*! ./svg/text_bold.svg */ "./src/bled/svg/text_bold.svg");
icons.italic = __webpack_require__(/*! ./svg/text_italic.svg */ "./src/bled/svg/text_italic.svg");
icons.underline = __webpack_require__(/*! ./svg/text_underline.svg */ "./src/bled/svg/text_underline.svg");
icons.strike = __webpack_require__(/*! ./svg/text_strike.svg */ "./src/bled/svg/text_strike.svg");
icons.sup = __webpack_require__(/*! ./svg/text_sup.svg */ "./src/bled/svg/text_sup.svg");
icons.sub = __webpack_require__(/*! ./svg/text_sub.svg */ "./src/bled/svg/text_sub.svg");
icons.link = __webpack_require__(/*! ./svg/text_link.svg */ "./src/bled/svg/text_link.svg");

icons.up = __webpack_require__(/*! ./svg/arrow_upward-24px.svg */ "./src/bled/svg/arrow_upward-24px.svg");
icons.down = __webpack_require__(/*! ./svg/arrow_downward-24px.svg */ "./src/bled/svg/arrow_downward-24px.svg");
icons.del = __webpack_require__(/*! ./svg/clear-24px.svg */ "./src/bled/svg/clear-24px.svg");
icons.add = __webpack_require__(/*! ./svg/add-24px.svg */ "./src/bled/svg/add-24px.svg");

icons.flat = {};

icons.flat.link = __webpack_require__(/*! ./svg/link-24px.svg */ "./src/bled/svg/link-24px.svg");
icons.flat.quote = __webpack_require__(/*! ./svg/format_quote-24px.svg */ "./src/bled/svg/format_quote-24px.svg");
icons.flat.list = __webpack_require__(/*! ./svg/format_list_bulleted-24px.svg */ "./src/bled/svg/format_list_bulleted-24px.svg");
icons.flat.video = __webpack_require__(/*! ./svg/play_circle_filled-24px.svg */ "./src/bled/svg/play_circle_filled-24px.svg");
icons.flat.quote = __webpack_require__(/*! ./svg/format_quote-24px.svg */ "./src/bled/svg/format_quote-24px.svg");
icons.flat.image = __webpack_require__(/*! ./svg/add_photo_alternate-24px.svg */ "./src/bled/svg/add_photo_alternate-24px.svg");



var mycyan = "#3ED9E3";


function injectStyle(ststr){
    let s = document.createElement("style");
    s.innerHTML = ststr;
    document.head.appendChild(s);
}

//injectStyle(`body{color: #444;}`);

function Ask(pr) {
    return new Promise(function (resolve, reject) {
        let r = prompt(pr);
        if (r) { resolve(r) } else { reject("No input") };
    })
}

function tooltips() {
    let tt = document.createElement("div");
    tt.style.position = "absolute";
    tt.style.display = "none";
    tt.style.zIndex = 20;
    tt.style.pointerEvents = "none";

    let ttin = document.createElement("div");
    tt.appendChild(ttin);
    ttin.style.backgroundColor = "rgba(100%, 100%, 100%, 0.8)";
    ttin.style.color = "#888888";
    ttin.style.pointerEvents = "none";
    ttin.style.fontSize = "12px";
    ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "4px";
    ttin.style.boxShadow = "2px 2px 2px 1px gray";
    ttin.style.right = "50%";
    ttin.style.bottom = "8px";

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
    ttools.style.backgroundColor = mycyan;
    ttools.style.position = "absolute";
    ttools.style.display = "none";
    ttools.style.padding = "0px 4px";
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
        b.onmouseover = ()=> b.style.fill = "black";
        b.onmouseout = ()=> b.style.fill = "white";
        let sv = b.querySelector("svg");
        sv.style.pointerEvents = "none";//.style.pointerEvents("none");
        if (hint) { b.dataset.hint = hint };
        ttools.appendChild(b);
    }

    addButton(icons.bold, function (e) {
        console.log("bold", document.getSelection())
        document.execCommand("bold");
        e.preventDefault();
    }, "Bold")
    addButton(icons.italic, function (e) {
        console.log("italic", document.getSelection())
        document.execCommand("italic");
        e.preventDefault();
    }, "Italic")
    addButton(icons.underline, function (e) {
        //console.log("italic" , document.getSelection())
        document.execCommand("underline");
        e.preventDefault();
    }, "Underline")
    addButton(icons.strike, function (e) {
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
    addButton(icons.link, function (e) {
        Ask("Enter URL")
            .then(r => document.execCommand("createLink", false, unescape(r)))
            .catch(r=>console.log(r));
        e.preventDefault();
    }, "Make link")

    //
    function testEditableContainer(el){
        //console.log("test");
        let ce = el;
        while(!ce.getAttribute("contenteditable") && ce.nodeName!="BODY"){            
            ce = ce.parentNode;
            //console.log("upto" , ce);
        }
        if (ce.getAttribute("contenteditable")){
            return ce;
        }else{
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
        menu = [
            {
                "label": "test",
                "handler": function () { console.log("menu clicked") }
            },
            {
                "label": "test2",
                "handler": function () { console.log("menu2 clicked") }
            },
            {
                "label": "test3",
                "handler": function () { console.log("menu3 clicked") }
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
        mi.style.padding = "2px"
        mi.style.borderRadius = "5px";
        mi.style.margin = "2px";
        mi.style.cursor = "pointer";
        mi.style.display = "inline-block";
        mi.style.overflow = "hidden";
        mi.style.fill = mycyan;
        mi.style.color = mycyan;
        let misvg = mi.querySelector("svg");
        if(misvg){
            misvg.style.pointerEvents = "none";
            misvg.style.width="24px";
            misvg.style.height="24px";
        }
        mi.onmouseover = ()=> {mi.style.fill="black" ; mi.style.color="black"};
        mi.onmouseout = ()=> {mi.style.fill=mycyan ; mi.style.color=mycyan};

        
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
    button.style.fill = mycyan;
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
    if (!items && ed) {
        items = [
            {
                label: "move block up",
                icon: icons.up,
                handler: function () { ed.moveUp(block.dataset.block_id) }
            },
            {
                label: "move block down",
                icon: icons.down,
                handler: function () { ed.moveDown(block.dataset.block_id) }
            },
            {
                label: "delete block",
                icon: icons.del,
                handler: function () { ed.removeBlock(block.dataset.block_id) }
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
    ctrls.style.backgroundColor = "#ffffffee";
    ctrls.style.borderLeft = "3px solid " + mycyan;
    ctrls.style.color = "white";
    ctrls.style.textAlign = "center";
    ctrls.style.display = "none";
    ctrls.addEventListener("mouseover", () => { ctrls.style.zIndex = 6; ctrls.style.display = "block" });
    ctrls.addEventListener("mouseout", () => { ctrls.style.zIndex = "initial"; ctrls.style.display = "none" });

    block.addEventListener("mouseover", () => { ctrls.style.zIndex = 5; ctrls.style.display = "block" });
    block.addEventListener("mouseout", () => { ctrls.style.zIndex = "initial"; ctrls.style.display = "none" });



    items.forEach(function (e) {
        let mi = document.createElement("div");
        mi.innerHTML = e.icon;
        mi.querySelector("svg").style.pointerEvents = "none";
        mi.style.cursor = "pointer";
        mi.style.height="24px";
        mi.style.fill = mycyan;
        mi.style.overflow = "hidden";
        mi.addEventListener("click", function () {
            e.handler(block.dataset.block_id);
        });
        mi.dataset.hint = e.label;
        ctrls.appendChild(mi);
    });

    block.appendChild(ctrls)

}

/***/ }),

/***/ "./src/bled/blockeditor.js":
/*!*********************************!*\
  !*** ./src/bled/blockeditor.js ***!
  \*********************************/
/*! exports provided: BlockEditor, makeTypicalEditor, makeLatidEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEditor", function() { return BlockEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTypicalEditor", function() { return makeTypicalEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeLatidEditor", function() { return makeLatidEditor; });
/* harmony import */ var _beui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beui */ "./src/bled/beui.js");


function BlockEditor({
    selector
}) {
    const my = this;
    //
    let mine = document.createElement("div");
    mine.classList.add("block_editor_outer_container");
    mine.style.minHeight = "64px";
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
                url: testurl ? testurl : "kitty.jpeg"
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

    }

    this.start = function (blocks) {
        //add sero block

        //this.element.innerHTML = "";
        this.blocks = {};
        //console.log(this.editors)
        //"add" menu
        Object.keys(this.editors).forEach(function (e) {

            console.log("added handler for", e);
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
        zero.style.height = "8px";
        zero.style.wifth = "100%";
        zero.style.marginLeft = "-32px";
        zero.dataset.block_id = "start";
        _beui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](zero, this.addMenu);
        mine.appendChild(zero);
        //
        this.setBlocks(blocks);
        //start UI
        _beui__WEBPACK_IMPORTED_MODULE_0__["tooltips"]();
        _beui__WEBPACK_IMPORTED_MODULE_0__["textTools"]();
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
        if (type in this.editors) {


            var domblock = document.createElement("div");
            var bID = this._makeID();
            let bcontent = document.createElement("div");
            domblock.appendChild(bcontent);
            domblock.classList.add("block_editor_unit");
            domblock.dataset.block_id = bID;
            domblock.dataset.block_type = type;


            bcontent.classList.add("block_content_container");
            var block = this.editors[type].make(data, bcontent, bID, this); //block made
            this.blocks[bID] = block;
            _beui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](domblock, this.addMenu);
            _beui__WEBPACK_IMPORTED_MODULE_0__["addBlockControls"](domblock, null, this);

        } else {
            console.log("no editor for", type);
            return null;
        }

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
        delete(this.blocks[id]);
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
            "blocks": dt
        };
        console.log("Editor saving", mydata);
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
    tbx.style.backgroundColor = "gray";
    tbx.style.minHeight = "24px";
    tbx.style.fontSize = ".8em"
    tbx.style.display = "flex";
    tbx.style.padding = "4px";

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
    ep.style.borderTop = "2px solid " + _beui__WEBPACK_IMPORTED_MODULE_0__["mycyan"];
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

    blc._p.addEventListener("keydown", function (e) {
        const magic = "#!#"
        if (e.keyCode == 13) {
            console.log("enter pressed", e.shiftKey == true);
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
            el.innerHTML = "<hr />";
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
    el.appendChild(pre);
    let langs = ["Auto", "Arduino", 'JavaScript', "Processing", "Python", "C++", "Bash", "Basic", "Brainfuck"];
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
            cd.innerHTML = data && data.text ? data.text : "#  type\n#  here";
        },
        save: function () {
            return {
                text: cd.innerHTML,
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
    edi.style.border = "2px solid " + _beui__WEBPACK_IMPORTED_MODULE_0__["mycyan"];
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
    blcite.innerHTML = data && data.caption ? data.caption : "Подпись"
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
    fc.innerHTML = data && data.caption ? data.caption : "Подпис"
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
                pimg.src = r.url;
                srcinput.value = r.url;
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
        data: data ? data : {},
        render: function () {},
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
                vtag.src = r.url;
                srcinput.value = r.url;
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

    return blc;
}
/**
 * {
    "type" : "list",
    "data" : {
        "style" : "unordered",
        "items" : [
            "This is a block-styled editor",
            "Clean output data",
            "Simple and powerful API"
        ]
    }
},
 */

constructors.list = function (data, el, id, editor) {
    let blc = {
        element: el,
        list_element: null,
        type: data && data.style && data.style == "ordered" ? "ol" : "ul",
        render: function () {},
        save: function () {
            return {
                "style": this.type == "ol" ? "ordered" : "unordered",
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
    add_b.addEventListener("click", function () {
        let newli = document.createElement("li");
        newli.setAttribute("contenteditable", true);
        addSmartRemove(newli);
        blc.list_element.appendChild(newli);
    })
    blc.addToToolbar(add_b);
    return blc;
}

function makeTypicalEditor(el) {
    let editor = new BlockEditor({
        selector: el
    });

    editor.registerEditor({
        type: "paragraph",
        icon: "¶",
        make: constructors.paragraph,
        label: "Paragraph"
    });
    editor.registerEditor({
        type: "divider",
        make: constructors.divider,
        icon: "—",
        label: 'Divider'
    });
    editor.registerEditor({
        type: "header",
        icon: "H",
        make: constructors.header,
        label: 'Header'
    });
    editor.registerEditor({
        type: "code",
        icon: "{}",
        make: constructors.code,
        label: 'Code snippet'
    });
    editor.registerEditor({
        type: "raw",
        icon: "<>",
        make: constructors.raw,
        label: 'Raw HTML'
    });
    editor.registerEditor({
        type: "quote",
        icon: _beui__WEBPACK_IMPORTED_MODULE_0__["icons"].flat.quote,
        make: constructors.blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: _beui__WEBPACK_IMPORTED_MODULE_0__["icons"].flat.image,
        make: constructors.image,
        label: 'Image'
    });
    editor.registerEditor({
        type: "video",
        icon: _beui__WEBPACK_IMPORTED_MODULE_0__["icons"].flat.video,
        make: constructors.video,
        label: 'Video'
    });
    editor.registerEditor({
        type: "list",
        icon: _beui__WEBPACK_IMPORTED_MODULE_0__["icons"].flat.list,
        make: constructors.list,
        label: "List",
    });
    console.log(_beui__WEBPACK_IMPORTED_MODULE_0__["icons"].flat.list);

    return editor;
}
//  my.current_editor = new editor_fn(l4, editor_element, my.current_view.file.content);

function makeLatidEditor(l4, editor_element_selector, file_content) {
    let ed = makeTypicalEditor(editor_element_selector);
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

/***/ "./src/bled/svg/add_photo_alternate-24px.svg":
/*!***************************************************!*\
  !*** ./src/bled/svg/add_photo_alternate-24px.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg>"

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

/***/ "./src/bled/svg/link-24px.svg":
/*!************************************!*\
  !*** ./src/bled/svg/link-24px.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/play_circle_filled-24px.svg":
/*!**************************************************!*\
  !*** ./src/bled/svg/play_circle_filled-24px.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z\"></path></svg>"

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvYmV1aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9ibG9ja2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYWRkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9hZGRfcGhvdG9fYWx0ZXJuYXRlLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9hcnJvd19kb3dud2FyZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYXJyb3dfdXB3YXJkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9jbGVhci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X2xpc3RfYnVsbGV0ZWQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9xdW90ZS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvbGluay0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvcGxheV9jaXJjbGVfZmlsbGVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X2JvbGQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X2l0YWxpYy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfbGluay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3RyaWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdWIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N1cC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfdW5kZXJsaW5lLnN2ZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPOztBQUVQLGFBQWEsbUJBQU8sQ0FBQyx5REFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLDZEQUF1QjtBQUM5QyxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLDZEQUF1QjtBQUM5QyxZQUFZLG1CQUFPLENBQUMsdURBQW9CO0FBQ3hDLFlBQVksbUJBQU8sQ0FBQyx1REFBb0I7QUFDeEMsYUFBYSxtQkFBTyxDQUFDLHlEQUFxQjs7QUFFMUMsV0FBVyxtQkFBTyxDQUFDLHlFQUE2QjtBQUNoRCxhQUFhLG1CQUFPLENBQUMsNkVBQStCO0FBQ3BELFlBQVksbUJBQU8sQ0FBQywyREFBc0I7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVEQUFvQjs7QUFFeEM7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMseURBQXFCO0FBQy9DLG1CQUFtQixtQkFBTyxDQUFDLHlFQUE2QjtBQUN4RCxrQkFBa0IsbUJBQU8sQ0FBQyx5RkFBcUM7QUFDL0QsbUJBQW1CLG1CQUFPLENBQUMscUZBQW1DO0FBQzlELG1CQUFtQixtQkFBTyxDQUFDLHlFQUE2QjtBQUN4RCxtQkFBbUIsbUJBQU8sQ0FBQyx1RkFBb0M7Ozs7QUFJeEQ7OztBQUdBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGFBQWE7O0FBRTFCO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQixhQUFhLE9BQU87QUFDcEMsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQsOEJBQThCLHNCQUFzQjs7O0FBR3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0IsZ0NBQWdDO0FBQ3ZHLDhDQUE4QyxnQ0FBZ0MsK0JBQStCOztBQUU3RywrQ0FBK0Msd0JBQXdCLGdDQUFnQztBQUN2Ryw4Q0FBOEMsZ0NBQWdDLCtCQUErQjs7OztBQUk3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNuWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFdEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOzs7QUFHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsa0JBQWtCO0FBQ2pDLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQVc7QUFDbkIsUUFBUSwrQ0FBWTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLFlBQVksbURBQWdCO0FBQzVCLFlBQVksc0RBQW1COztBQUUvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRDQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNENBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLDJDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMsMkNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYywyQ0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLDJDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0JBQWdCLDJDQUFROztBQUV4QjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3ZnQ0EsK0w7Ozs7Ozs7Ozs7O0FDQUEscVQ7Ozs7Ozs7Ozs7O0FDQUEsZ0g7Ozs7Ozs7Ozs7O0FDQUEsNkc7Ozs7Ozs7Ozs7O0FDQUEsdUo7Ozs7Ozs7Ozs7O0FDQUEsa1Q7Ozs7Ozs7Ozs7O0FDQUEsb007Ozs7Ozs7Ozs7O0FDQUEsK1c7Ozs7Ozs7Ozs7O0FDQUEsc1A7Ozs7Ozs7Ozs7O0FDQUEsaXlHOzs7Ozs7Ozs7OztBQ0FBLGk1RDs7Ozs7Ozs7Ozs7QUNBQSw2NEY7Ozs7Ozs7Ozs7O0FDQUEsczVFOzs7Ozs7Ozs7OztBQ0FBLHdxQzs7Ozs7Ozs7Ozs7QUNBQSxrakU7Ozs7Ozs7Ozs7O0FDQUEsMHNGIiwiZmlsZSI6ImJsb2NrZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibGVkL2Jsb2NrZWRpdG9yLmpzXCIpO1xuIiwiZXhwb3J0IHZhciBpY29ucyA9IHt9O1xuXG5pY29ucy5ib2xkID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfYm9sZC5zdmdcIik7XG5pY29ucy5pdGFsaWMgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9pdGFsaWMuc3ZnXCIpO1xuaWNvbnMudW5kZXJsaW5lID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfdW5kZXJsaW5lLnN2Z1wiKTtcbmljb25zLnN0cmlrZSA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N0cmlrZS5zdmdcIik7XG5pY29ucy5zdXAgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdXAuc3ZnXCIpO1xuaWNvbnMuc3ViID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3ViLnN2Z1wiKTtcbmljb25zLmxpbmsgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9saW5rLnN2Z1wiKTtcblxuaWNvbnMudXAgPSByZXF1aXJlKFwiLi9zdmcvYXJyb3dfdXB3YXJkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZG93biA9IHJlcXVpcmUoXCIuL3N2Zy9hcnJvd19kb3dud2FyZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRlbCA9IHJlcXVpcmUoXCIuL3N2Zy9jbGVhci0yNHB4LnN2Z1wiKTtcbmljb25zLmFkZCA9IHJlcXVpcmUoXCIuL3N2Zy9hZGQtMjRweC5zdmdcIik7XG5cbmljb25zLmZsYXQgPSB7fTtcblxuaWNvbnMuZmxhdC5saW5rID0gcmVxdWlyZShcIi4vc3ZnL2xpbmstMjRweC5zdmdcIik7XG5pY29ucy5mbGF0LnF1b3RlID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9xdW90ZS0yNHB4LnN2Z1wiKTtcbmljb25zLmZsYXQubGlzdCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2Z1wiKTtcbmljb25zLmZsYXQudmlkZW8gPSByZXF1aXJlKFwiLi9zdmcvcGxheV9jaXJjbGVfZmlsbGVkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZmxhdC5xdW90ZSA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfcXVvdGUtMjRweC5zdmdcIik7XG5pY29ucy5mbGF0LmltYWdlID0gcmVxdWlyZShcIi4vc3ZnL2FkZF9waG90b19hbHRlcm5hdGUtMjRweC5zdmdcIik7XG5cblxuXG5leHBvcnQgdmFyIG15Y3lhbiA9IFwiIzNFRDlFM1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTdHlsZShzdHN0cil7XG4gICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgcy5pbm5lckhUTUwgPSBzdHN0cjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xufVxuXG4vL2luamVjdFN0eWxlKGBib2R5e2NvbG9yOiAjNDQ0O31gKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFzayhwcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCByID0gcHJvbXB0KHByKTtcbiAgICAgICAgaWYgKHIpIHsgcmVzb2x2ZShyKSB9IGVsc2UgeyByZWplY3QoXCJObyBpbnB1dFwiKSB9O1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICBsZXQgdHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dC5zdHlsZS56SW5kZXggPSAyMDtcbiAgICB0dC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgICBsZXQgdHRpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuYXBwZW5kQ2hpbGQodHRpbik7XG4gICAgdHRpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTAwJSwgMTAwJSwgMTAwJSwgMC44KVwiO1xuICAgIHR0aW4uc3R5bGUuY29sb3IgPSBcIiM4ODg4ODhcIjtcbiAgICB0dGluLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0dGluLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XG4gICAgdHRpbi5zdHlsZS5wYWRkaW5nID0gXCI0cHggOHB4XCI7XG4gICAgdHRpbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0dGluLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XG4gICAgdHRpbi5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggMnB4IDFweCBncmF5XCI7XG4gICAgdHRpbi5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3R0b20gPSBcIjhweFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuZGF0YXNldC5oaW50KSB7XG4gICAgICAgICAgICB0dGluLmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQuaGludDtcbiAgICAgICAgICAgIC8vIHR0LnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcbiAgICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9vbHMoKSB7XG4gICAgbGV0IHR0b29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHRvb2xzLnN0eWxlLm1pbldpZHRoID0gXCIxMDBweFwiO1xuICAgIHR0b29scy5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgIC8vdHRvb2xzLnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHR0b29scy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBteWN5YW47XG4gICAgdHRvb2xzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHRvb2xzLnN0eWxlLnBhZGRpbmcgPSBcIjBweCA0cHhcIjtcbiAgICBjb25zb2xlLmxvZyhcImFwcGVuZCB0ZXh0IHRvb2xzXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dG9vbHMpO1xuICAgIC8vYnV0dG9uc1xuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihsYmwsIGZ1bmMsIGhpbnQpIHtcbiAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBiLmlubmVySFRNTCA9IGxibDtcbiAgICAgICAgYi5zdHlsZS53aWR0aCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmhlaWdodCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XG4gICAgICAgIGIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuYyk7XG4gICAgICAgIGIuY2xhc3NMaXN0LmFkZChcInRleHRfdG9vbGJveFwiKTtcbiAgICAgICAgYi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgYi5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICAgICAgYi5vbm1vdXNlb3ZlciA9ICgpPT4gYi5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICBiLm9ubW91c2VvdXQgPSAoKT0+IGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgbGV0IHN2ID0gYi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBzdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7Ly8uc3R5bGUucG9pbnRlckV2ZW50cyhcIm5vbmVcIik7XG4gICAgICAgIGlmIChoaW50KSB7IGIuZGF0YXNldC5oaW50ID0gaGludCB9O1xuICAgICAgICB0dG9vbHMuYXBwZW5kQ2hpbGQoYik7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGljb25zLmJvbGQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9sZFwiLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJCb2xkXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLml0YWxpYywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWNcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJJdGFsaWNcIilcbiAgICBhZGRCdXR0b24oaWNvbnMudW5kZXJsaW5lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlVuZGVybGluZVwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5zdHJpa2UsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN0cmlrZVwiKVxuICAgIC8qXG4gICAgYWRkQnV0dG9uKFwic21hbGxcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWNyZWFzZUZvbnRTaXplXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICAqL1xuICAgIGFkZEJ1dHRvbihpY29ucy5zdXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3VwZXJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3ViLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdWJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubGluaywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgQXNrKFwiRW50ZXIgVVJMXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiLCBmYWxzZSwgdW5lc2NhcGUocikpKVxuICAgICAgICAgICAgLmNhdGNoKHI9PmNvbnNvbGUubG9nKHIpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiTWFrZSBsaW5rXCIpXG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlbCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBsZXQgY2UgPSBlbDtcbiAgICAgICAgd2hpbGUoIWNlLmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiBjZS5ub2RlTmFtZSE9XCJCT0RZXCIpeyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2UgPSBjZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVwdG9cIiAsIGNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2UuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKXtcbiAgICAgICAgICAgIHJldHVybiBjZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKTtcbiAgICAgICAgbGV0IGVpYyA9IHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlLnRhcmdldCk7XG4gICAgICAgIGlmIChlaWMgJiYgIWUudGFyZ2V0LmRhdGFzZXQubm9fdGV4dF90b29sYm94KSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tcIiAsIHR0b29scyk7XG4gICAgICAgICAgICBsZXQgdGd0ID0gZWljLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmxlZnQgPSB0Z3QubGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBsZXQgdHRoZSA9IHR0b29scy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUudG9wID0gKHRndC50b3AgLSB0dGhlICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuXG4gICAgICAgIC8vfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0X3Rvb2xib3hcIikpIHtcbiAgICAgICAgICAgIC8vdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG59XG5leHBvcnQgZnVuY3Rpb24gYWRkUGx1c0J1dHRvbihibG9jaywgbWVudSkge1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoIW1lbnUpIHtcbiAgICAgICAgbWVudSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwibWVudSBjbGlja2VkXCIpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51MiBjbGlja2VkXCIpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QzXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51MyBjbGlja2VkXCIpIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbiAgICAvL21lbnVcbiAgICBsZXQgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRkLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpO1xuICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkZC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBkZC5zdHlsZS56SW5kZXggPSAxMDtcbiAgICBkZC5zdHlsZS50b3AgPSBcIjEwMCVcIjtcbiAgICBkZC5zdHlsZS5sZWZ0ID0gMDtcbiAgICBkZC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICBkZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgZGQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICBkZC5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwcHhcIjtcbiAgICBkZC5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggNnB4IHJnYmEoMCUsIDAlLCAwJSwgMC4zMDQpXCJcbiAgICAvL2RkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGdyYXlcIlxuICAgIG1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZWxlbWVudC5pY29uO1xuICAgICAgICAvL21pLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiMnB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBtaS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG1pLnN0eWxlLmZpbGwgPSBteWN5YW47XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gbXljeWFuO1xuICAgICAgICBsZXQgbWlzdmcgPSBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBpZihtaXN2Zyl7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aD1cIjI0cHhcIjtcbiAgICAgICAgICAgIG1pc3ZnLnN0eWxlLmhlaWdodD1cIjI0cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBtaS5vbm1vdXNlb3ZlciA9ICgpPT4ge21pLnN0eWxlLmZpbGw9XCJibGFja1wiIDsgbWkuc3R5bGUuY29sb3I9XCJibGFja1wifTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpPT4ge21pLnN0eWxlLmZpbGw9bXljeWFuIDsgbWkuc3R5bGUuY29sb3I9bXljeWFufTtcblxuICAgICAgICBcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkZC5hcHBlbmRDaGlsZChtaSlcbiAgICB9KTtcbiAgICAvL1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGRkKTtcblxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZG93blwiKTtcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjAxMSlcIjtcbiAgICBidXR0b24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuZmlsbCA9IG15Y3lhbjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrQ29udHJvbHMoYmxvY2ssIGl0ZW1zLCBlZCkge1xuICAgIGlmICghaXRlbXMgJiYgZWQpIHtcbiAgICAgICAgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayB1cFwiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLnVwLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgZWQubW92ZVVwKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZG93bixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVEb3duKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiZGVsZXRlIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZGVsLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgZWQucmVtb3ZlQmxvY2soYmxvY2suZGF0YXNldC5ibG9ja19pZCkgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICB9XG4gICAgLy9cbiAgICBibG9jay5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBsZXQgb3VyY2xhc3MgPSBcImN0cmxzXCIgKyBibG9jay5kYXRhc2V0LmJsb2NrX2lkO1xuICAgIGxldCBjdHJscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChcImNvbW1vbl9ibG9ja19jb250cm9sc1wiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKG91cmNsYXNzKTtcbiAgICBjdHJscy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBjdHJscy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xuICAgIGN0cmxzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZmVlXCI7XG4gICAgY3RybHMuc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIFwiICsgbXljeWFuO1xuICAgIGN0cmxzLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSA2OyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiIH0pO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7IGN0cmxzLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgfSk7XG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gNTsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiB9KTtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIH0pO1xuXG5cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZS5pY29uO1xuICAgICAgICBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmhlaWdodD1cIjI0cHhcIjtcbiAgICAgICAgbWkuc3R5bGUuZmlsbCA9IG15Y3lhbjtcbiAgICAgICAgbWkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZS5sYWJlbDtcbiAgICAgICAgY3RybHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY3RybHMpXG5cbn0iLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9iZXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0VkaXRvcih7XG4gICAgc2VsZWN0b3Jcbn0pIHtcbiAgICBjb25zdCBteSA9IHRoaXM7XG4gICAgLy9cbiAgICBsZXQgbWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX291dGVyX2NvbnRhaW5lclwiKTtcbiAgICBtaW5lLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoZXkuYXBwZW5kQ2hpbGQobWluZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWluZTsgLy90aGlzIGVsZW1lbnQgaXMgbWluZVxuXG5cbiAgICB0aGlzLmVkaXRvcnMgPSB7XG4gICAgICAgIC8vXCJ6ZXJvXCI6e1xuICAgICAgICAvL1xuICAgICAgICAvL31cbiAgICB9OyAvLyBudWxsOyAvL3BhcmFtcy5lZGl0b3JzOyAvLyAgYXZhaWxhYmxlIGJsb2NrcyBlZGl0b3JzXG4gICAgdGhpcy5ibG9ja3MgPSBudWxsOyAvLyBibG9ja3MgYXJyYXlcbiAgICB0aGlzLmFkZE1lbnUgPSBbXTtcblxuICAgIHZhciBfY3VycmVudF9pZCA9IDA7XG5cbiAgICB0aGlzLl9tYWtlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jdXJyZW50X2lkKys7XG4gICAgICAgIHJldHVybiBfY3VycmVudF9pZDtcbiAgICB9XG5cbiAgICB0aGlzLnVwbG9hZCA9IGZ1bmN0aW9uIChmLCB0ZXN0dXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdGluZyB1cGxvYWRcIiwgZik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICB1cmw6IHRlc3R1cmwgPyB0ZXN0dXJsIDogXCJraXR0eS5qcGVnXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VXBsb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICB0aGlzLnVwbG9hZCA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldEJsb2NrcyA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICAgICAgbWluZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5fY3VycmVudF9pZCA9IDE7XG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoZXkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgIH1cblxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIC8vYWRkIHNlcm8gYmxvY2tcblxuICAgICAgICAvL3RoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRpdG9ycylcbiAgICAgICAgLy9cImFkZFwiIG1lbnVcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkZWQgaGFuZGxlciBmb3JcIiwgZSk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbXkuZWRpdG9yc1tlXTtcbiAgICAgICAgICAgIG15LmFkZE1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVmaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXkuYWRkTmV3QmxvY2soZSwgbnVsbCwgcmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vWmVybyBibG9ja1xuXG4gICAgICAgIGxldCB6ZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgemVyby5jbGFzc0xpc3QuYWRkKFwic3RhcnRpbmdfYmxvY2tcIik7XG4gICAgICAgIHplcm8uc3R5bGUuaGVpZ2h0ID0gXCI4cHhcIjtcbiAgICAgICAgemVyby5zdHlsZS53aWZ0aCA9IFwiMTAwJVwiO1xuICAgICAgICB6ZXJvLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0zMnB4XCI7XG4gICAgICAgIHplcm8uZGF0YXNldC5ibG9ja19pZCA9IFwic3RhcnRcIjtcbiAgICAgICAgVUkuYWRkUGx1c0J1dHRvbih6ZXJvLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBtaW5lLmFwcGVuZENoaWxkKHplcm8pO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLnNldEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAvL3N0YXJ0IFVJXG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgICAgIFVJLnRleHRUb29scygpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2Nrc1tpZF07XG4gICAgfVxuXG4gICAgdGhpcy5JRDJJbmRleCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL1xuICAgICAgICBsZXQgciA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGFzZXQuYmxvY2tfaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByID0gaVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgdGhpcy5JbmRleDJJRCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KS5kYXRhc2V0LmJsb2NrX2lkO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbSh0aGlzLklEMkluZGV4KGlkKSk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4ID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdGhpcy5hZGROZXdCbG9jayhkLnR5cGUsIGQuZGF0YSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlVXAgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICBpZiAoYmluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL2ZpbmQgcHJldiBibG9ja1xuICAgICAgICBsZXQgdXBwZXIgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4IC0gMSk7XG4gICAgICAgIGlmICh1cHBlcikge1xuICAgICAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIHVwcGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlRG93biA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vbGFzdD9cbiAgICAgICAgaWYgKGJpbmRleCArIDEgPT0gT2JqZWN0LmtleXModGhpcy5ibG9ja3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0bmV4dCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggKyAyKTtcbiAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgaWYgKG5leHRuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCBuZXh0bmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3dlIGF0IHByZWxhc3QgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoZWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yID0gZnVuY3Rpb24gKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWFrZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHBhc3RlXG4gICAgfSkge1xuICAgICAgICB0aGlzLmVkaXRvcnNbdHlwZV0gPSB7XG4gICAgICAgICAgICBtYWtlLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgcGFzdGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzT24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJmID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgYmYuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIHJlZmlkKSB7IC8vcmVmPWluc3RlcnQgYWZ0ZXIgdGhhdCBibG9ja1xuICAgICAgICAvL2lmIHRoZXJlIGlzIHJlZiBpZCwgd2UgaGF2ZSB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgICAgLy9maW5kIG5leHQgZWxlbWVudFxuICAgICAgICBpZiAocmVmaWQgPT0gXCJzdGFydFwiKSB7XG4gICAgICAgICAgICAvLyB2YXIgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KDApO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZmlkKSB7XG4gICAgICAgICAgICBsZXQgbmV4dGlkeCA9IHRoaXMuSUQySW5kZXgocmVmaWQpICsgMTtcbiAgICAgICAgICAgIHZhciByZWZlbCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChuZXh0aWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIGJsb2NrIG9mIHR5cGUgXG4gICAgICAgIGlmICh0eXBlIGluIHRoaXMuZWRpdG9ycykge1xuXG5cbiAgICAgICAgICAgIHZhciBkb21ibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgYklEID0gdGhpcy5fbWFrZUlEKCk7XG4gICAgICAgICAgICBsZXQgYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZG9tYmxvY2suYXBwZW5kQ2hpbGQoYmNvbnRlbnQpO1xuICAgICAgICAgICAgZG9tYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl91bml0XCIpO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja19pZCA9IGJJRDtcbiAgICAgICAgICAgIGRvbWJsb2NrLmRhdGFzZXQuYmxvY2tfdHlwZSA9IHR5cGU7XG5cblxuICAgICAgICAgICAgYmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5lZGl0b3JzW3R5cGVdLm1ha2UoZGF0YSwgYmNvbnRlbnQsIGJJRCwgdGhpcyk7IC8vYmxvY2sgbWFkZVxuICAgICAgICAgICAgdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICAgICAgVUkuYWRkUGx1c0J1dHRvbihkb21ibG9jaywgdGhpcy5hZGRNZW51KTtcbiAgICAgICAgICAgIFVJLmFkZEJsb2NrQ29udHJvbHMoZG9tYmxvY2ssIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGVkaXRvciBmb3JcIiwgdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWZpZCAmJiByZWZlbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkb21ibG9jaywgcmVmZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvbWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIGJJRDtcbiAgICB9IC8vYWRkIG5ldyBibG9ja1xuXG4gICAgdGhpcy5yZW1vdmVCbG9jayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL2ZpbmQgYmxvY2sgaW5kZXhcbiAgICAgICAgbGV0IGVsaWR4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vYW5ub3VuY2UgZGVsZXRpb24gdG8gYmxvY2tcbiAgICAgICAgaWYgKFwiYmVmb3JlRGVsZXRlXCIgaW4gdGhpcy5ibG9ja3NbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uYmVmb3JlRGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlKHRoaXMuYmxvY2tzW2lkXSk7XG4gICAgfSAvL3JlbW92ZSBibG9ja1xuXG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24gKGNsYikge1xuICAgICAgICBsZXQgZHQgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIilcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICBkdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGUuZGF0YXNldC5ibG9ja190eXBlLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogbXkuYmxvY2tzW2UuZGF0YXNldC5ibG9ja19pZF0uc2F2ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBsZXQgbXlkYXRhID0ge1xuICAgICAgICAgICAgXCJibG9ja3NcIjogZHRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFZGl0b3Igc2F2aW5nXCIsIG15ZGF0YSk7XG4gICAgICAgIGlmIChjbGIpIHtcbiAgICAgICAgICAgIGNsYihteWRhdGEpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBteWRhdGE7XG4gICAgfVxuXG59XG5cbnZhciBjb25zdHJ1Y3RvcnMgPSB7fTtcbnZhciB0ZW1wbGF0ZXMgPSB7fVxuXG50ZW1wbGF0ZXMuZm9ybVJvdyA9IGZ1bmN0aW9uIChlbGVtZW50c19hcnJheSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWxlbWVudHNfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjhweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09IFwiTEFCRUxcIiAmJiBpICE9IDApIHtcbiAgICAgICAgICAgIGUuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgdGJ4LnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHRieC5zdHlsZS5mb250U2l6ZSA9IFwiLjhlbVwiXG4gICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0Ynguc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XG5cbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09IFwiTEFCRUxcIikge1xuICAgICAgICAgICAgZWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbnRlbXBsYXRlcy50d29QYW5lbHMgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAvL2xldCBtb2RlID0gXCJwcmV2aWV3XCI7XG4gICAgbGV0IHBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfcHJldmlld19wYW5lbFwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgcHAuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgcHAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgcHAuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgIGxldCBlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRfcGFuZWxcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIGVwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIC8vZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlcC5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXAuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgLy9cbiAgICBsZXQgZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdF9idXR0b25cIik7XG4gICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICBlYnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcbiAgICBlYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZWJ0bi5zdHlsZS56SW5kZXggPSA1O1xuICAgIGVidG4uc3R5bGUucmlnaHQgPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZWRpdG1vZGUgPSBlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiO1xuICAgICAgICBpZiAoZWRpdG1vZGUpIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9cbiAgICBwcC5hcHBlbmRDaGlsZChlYnRuKTtcbiAgICAvL1xuICAgIGNvbnNvbGUubG9nKGJsb2NrKVxuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHApO1xuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXApO1xuICAgIC8vXG4gICAgYmxvY2suYWRkVG9QcmV2aWV3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBibG9jay5hZGRUb0VkaXRvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgYmxvY2suZ29FZGl0TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG5cbiAgICB9XG4gICAgYmxvY2suZ29QcmV2aWV3TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcblxuICAgIH1cbiAgICBibG9jay5pc0luRWRpdE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZXAuc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIik7XG4gICAgfVxuXG59XG5cbmNvbnN0cnVjdG9ycy5wYXJhZ3JhcGggPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgLy9iYy5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtd3JhcFwiO1xuICAgIGVsLmFwcGVuZENoaWxkKGJjKTtcbiAgICBsZXQgcmUgPSAvPGRpdnxwfGg+L2dpO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgbXk6IHRoaXMsXG4gICAgICAgIGlkOiBpZCwgLy8hISEhISEhISEhISEhISEhISEhICAgIFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGVkaXRvcjogZWRpdG9yLFxuICAgICAgICBfcDogYmMsXG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGNsZWFuOiBmdW5jdGlvbiAodCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fcC5pbm5lckhUTUwgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9wLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IG1hZ2ljID0gXCIjISNcIlxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCBtYWdpYyk7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrYXQgPSBibGMuX3AuaW5uZXJIVE1MLmluZGV4T2YobWFnaWMpXG4gICAgICAgICAgICAgICAgbGV0IHRleHRsZWZ0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgY2xpY2thdCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRuZXh0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoY2xpY2thdCArIG1hZ2ljLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0bGVmdCwgXCJ8XCIgLCB0ZXh0bmV4dCk7XG4gICAgICAgICAgICAgICAgYmxjLl9wLmlubmVySFRNTCA9IHRleHRsZWZ0OyAvL2JsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKDAgLCBjbGlja2F0KTtcbiAgICAgICAgICAgICAgICBsZXQgbnAgPSBlZGl0b3IuYWRkTmV3QmxvY2soXCJwYXJhZ3JhcGhcIiwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0bmV4dFxuICAgICAgICAgICAgICAgIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgLy9zZWwuYW5jaG9yTm9kZS5pbm5lckhUTUwgPSBsZWF2ZWhlcmU7XG4gICAgICAgICAgICAgICAgLy9ucCA9IG5ld2x5IGluc2VydGVkIGJsb2NrIGlkXG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5kaXZpZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxociAvPlwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3RydWN0b3JzLmhlYWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIC8vbXl0YWcuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgLy9pZDogaWQsXG4gICAgICAgIHRleHQ6IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCJIZWFkZXJcIixcbiAgICAgICAgbGV2ZWw6IGRhdGEgJiYgZGF0YS5sZXZlbCA/IGRhdGEubGV2ZWwgOiAxLFxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTClcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpXG5cbiAgICAgICAgfSxcbiAgICAgICAgLy9teXRhZzogXG5cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aCk7XG4gICAgICAgICAgICAvL3RoaXMucmVmcmVzaCgpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdHh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogdHh0LFxuICAgICAgICAgICAgICAgIFwibGV2ZWxcIjogdGhpcy5sZXZlbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vb3B0cy50eXBlPVwic2VsZWN0XCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIG9wdC5pbm5lckhUTUwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgaWYgKGkgPT0gYmxjLmxldmVsKSB7XG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIG9wdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbnYgPSBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGJsYy5sZXZlbCA9IG52O1xuICAgICAgICBibGMucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5jb2RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgbGV0IGNkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgcHJlLmFwcGVuZENoaWxkKGNkKTtcbiAgICBjZC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgY2QuZGF0YXNldC5ub190ZXh0X3Rvb2xib3ggPSB0cnVlO1xuICAgIGVsLmFwcGVuZENoaWxkKHByZSk7XG4gICAgbGV0IGxhbmdzID0gW1wiQXV0b1wiLCBcIkFyZHVpbm9cIiwgJ0phdmFTY3JpcHQnLCBcIlByb2Nlc3NpbmdcIiwgXCJQeXRob25cIiwgXCJDKytcIiwgXCJCYXNoXCIsIFwiQmFzaWNcIiwgXCJCcmFpbmZ1Y2tcIl07XG4gICAgLy9cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBtaS52YWx1ZSA9IGU7XG4gICAgICAgIG1pLmxhYmVsID0gZTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sYW5ndWFnZSAmJiBlID09IGRhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIG1pLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcbiAgICAvL1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2QuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIiMgIHR5cGVcXG4jICBoZXJlXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogY2QuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cyk7XG4gICAgcmV0dXJuIGJsYztcblxufVxuXG5jb25zdHJ1Y3RvcnMucmF3ID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG5cbiAgICBsZXQgZWRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGVkaS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGVkaS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBlZGkuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgZWRpLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIFwiICsgVUkubXljeWFuO1xuICAgIGVkaS5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmh0bWwpIHtcbiAgICAgICAgZWRpLnZhbHVlID0gZGF0YS5odG1sO1xuICAgIH1cblxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlZGkpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWw6IGVkaS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJsY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xuICAgIGJsY3RhZy5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgYmxjaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGJsY2luLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBsZXQgYmxmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBsZXQgYmxjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNpdGVcIik7XG4gICAgYmxmb290LmFwcGVuZENoaWxkKGJsY2l0ZSk7XG4gICAgYmxjaXRlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGNpbik7XG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsZm9vdCk7XG4gICAgYmxjaW4uaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcItCm0LjRgtCw0YLQsFwiO1xuICAgIGJsY2l0ZS5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwi0J/QvtC00L/QuNGB0YxcIlxuICAgIGxldCBibG9jayA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChibGN0YWcpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGJsY2luLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBibGNpdGUuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5pbWFnZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBmaWd0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGxldCBwaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwaW1nLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgbGV0IGZjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XG4gICAgZmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGZjLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCLQn9C+0LTQv9C40YFcIlxuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChwaW1nKTtcbiAgICBmaWd0YWcuYXBwZW5kQ2hpbGQoZmMpO1xuICAgIHBpbWcuc3JjID0gZGF0YSAmJiBkYXRhLmZpbGUgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGltYWdlXCIpXG4gICAgICAgIH0sXG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICBibGMuYWRkVG9QcmV2aWV3KGZpZ3RhZyk7XG4gICAgLy9lZGl0XG4gICAgLy8vL3VwbG9hZFxuICAgIGxldCB1cGxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGQudHlwZSA9IFwiZmlsZVwiO1xuICAgIHVwbGQuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIGxldCB1cGxkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGRidG4udmFsdWUgPSBcInVwbG9hZFwiO1xuICAgIHVwbGRidG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICB1cGxkYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlZGl0b3IudXBsb2FkKHVwbGQuZmlsZXNbMF0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHBpbWcuc3JjID0gci51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHBpbWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3JjbGFiZWwsIHNyY2lucHV0XSkpO1xuICAgIC8vLy9jbGFzc2VzXG4gICAgLy8vLy8vc3RyZXRjaGVkXG4gICAgbGV0IHN0cmV0Y2hsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdHJldGNobGFiZWwuaW5uZXJIVE1MID0gXCJzdHJldGNoZWRcIlxuICAgIGxldCBzdHJldGNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RyZXRjaGVkLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgc3RyZXRjaGVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbm9yZXNpemUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlndGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJldGNoZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuc3RyZXRjaGVkO1xuICAgIC8vLy8vL25vcmVzaXplXG4gICAgbGV0IG5ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbnJsYWJlbC5pbm5lckhUTUwgPSBcIm5vIHJlc2l6ZVwiXG4gICAgbGV0IG5vcmVzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vcmVzaXplLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbm9yZXNpemUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBub3Jlc2l6ZS5jaGVja2VkID0gZGF0YSAmJiAoZGF0YS5ub3Jlc2l6ZSB8fCBkYXRhLndpdGhiYWNrZ3JvdW5kKTtcbiAgICAvLy8vL2xlZnRcbiAgICBsZXQgbGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxsYWJlbC5pbm5lckhUTUwgPSBcImxlZnRcIlxuICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxlZnQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsZWZ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGVmdC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmxlZnQ7XG4gICAgLy8vL3JpZ2h0XG4gICAgbGV0IHJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBybGFiZWwuaW5uZXJIVE1MID0gXCJyaWdodFwiXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHJpZ2h0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcmlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGVmdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmlnaHQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5yaWdodDtcblxuICAgIC8vLy9ib3JkZXJcbiAgICBsZXQgYmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGJsYWJlbC5pbm5lckhUTUwgPSBcImJvcmRlclwiXG4gICAgbGV0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBib3JkZXIudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBib3JkZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcGltZy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlcmVkXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYm9yZGVyLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuYm9yZGVyO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzdHJldGNoZWQsIHN0cmV0Y2hsYWJlbCxcbiAgICAgICAgbm9yZXNpemUsIG5ybGFiZWwsXG4gICAgICAgIGxlZnQsIGxsYWJlbCxcbiAgICAgICAgcmlnaHQsIHJsYWJlbCxcbiAgICAgICAgYm9yZGVyLCBibGFiZWxcbiAgICBdKSk7XG5cbiAgICAvL1xuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyZXRjaGVkOiBzdHJldGNoZWQuY2hlY2tlZCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodC5jaGVja2VkLFxuICAgICAgICAgICAgbGVmdDogbGVmdC5jaGVja2VkLFxuICAgICAgICAgICAgbm9yZXNpemU6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQmFja2dyb3VuZDogbm9yZXNpemUuY2hlY2tlZCxcbiAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQm9yZGVyOiBib3JkZXIuY2hlY2tlZCxcbiAgICAgICAgICAgIGNhcHRpb246IGZjLmlubmVySFRNTCxcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IHNyY2lucHV0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5maWxlICYmIGRhdGEuZmlsZS51cmwpIHtcbiAgICAgICAgYmxjLmdvUHJldmlld01vZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy52aWRlbyA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge30sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge30sXG4gICAgfVxuICAgIGlmICghYmxjLmRhdGEuZmlsZSkge1xuICAgICAgICBibGMuZGF0YS5maWxlID0ge307XG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICAvL3ByZXZpZXdcbiAgICBsZXQgdnRhZyA9IGJsYy5hZGRUb1ByZXZpZXcoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpKTtcbiAgICB2dGFnLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgLy9sZXQgc3JjdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgICAvL3Z0YWcuYXBwZW5kQ2hpbGQoc3JjdGFnKTtcbiAgICB2dGFnLnNyYyA9IGRhdGEgJiYgZGF0YS5maWxlLnVybCA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuICAgIC8vZWRpdG9yXG4gICAgLy8vL3VwbG9hZCAgICAgXG4gICAgbGV0IHVwbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZC50eXBlID0gXCJmaWxlXCI7XG4gICAgdXBsZC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbGV0IHVwbGRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZGJ0bi52YWx1ZSA9IFwidXBsb2FkXCI7XG4gICAgdXBsZGJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHVwbGRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVkaXRvci51cGxvYWQodXBsZC5maWxlc1swXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgdnRhZy5zcmMgPSByLnVybDtcbiAgICAgICAgICAgICAgICBzcmNpbnB1dC52YWx1ZSA9IHIudXJsO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbdXBsZCwgdXBsZGJ0bl0pKTtcbiAgICAvLy8vZWRpdCBzcmNcbiAgICBsZXQgc3JjbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3JjbGFiZWwuaW5uZXJIVE1MID0gXCJTb3VyY2UgVVJMXCI7XG4gICAgbGV0IHNyY2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNyY2lucHV0LnN0eWxlLmZsZXhHcm93ID0gMjtcbiAgICBzcmNpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc3JjaW5wdXQudmFsdWUgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICBzcmNpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdnRhZy5zcmMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBibGMuZGF0YS5maWxlLnVybCA9IHRoaXMudmFsdWU7XG4gICAgfSlcbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3NyY2xhYmVsLCBzcmNpbnB1dF0pKTtcbiAgICAvLy8vcGFyYW1zXG4gICAgbGV0IHBhcmFtcyA9IFt7XG4gICAgICAgICAgICBuYW1lOiBcImF1dG9wbGF5XCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuYXV0b3BsYXksXG4gICAgICAgICAgICBsYWJlbDogXCJhdXRvcGxheVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5jb250cm9scyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJsb29wXCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEubG9vcCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtdXRlZFwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLm11dGVkLFxuICAgICAgICB9LFxuXG4gICAgXVxuICAgIGxldCBwZWxzID0gW107XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFibGMuZGF0YVtlLm5hbWVdKSB7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcGxhYmVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgcGxhYmVsLmlubmVySFRNTCA9IGUubmFtZTtcbiAgICAgICAgbGV0IHBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcGNoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIHBjaGVjay5jaGVja2VkID0gZGF0YSAmJiBkYXRhW2UubmFtZV07XG4gICAgICAgIHBjaGVjay5vbmNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBibGMuZGF0YSwgZS5uYW1lKTtcbiAgICAgICAgICAgIGJsYy5kYXRhW2UubmFtZV0gPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB2dGFnLnNldEF0dHJpYnV0ZShlLm5hbWUsIHRoaXMuY2hlY2tlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHBlbHMucHVzaChwY2hlY2spO1xuICAgICAgICBwZWxzLnB1c2gocGxhYmVsKTtcblxuXG4gICAgfSk7XG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KHBlbHMpKTtcblxuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmxjLmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYztcbn1cbi8qKlxuICoge1xuICAgIFwidHlwZVwiIDogXCJsaXN0XCIsXG4gICAgXCJkYXRhXCIgOiB7XG4gICAgICAgIFwic3R5bGVcIiA6IFwidW5vcmRlcmVkXCIsXG4gICAgICAgIFwiaXRlbXNcIiA6IFtcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIGJsb2NrLXN0eWxlZCBlZGl0b3JcIixcbiAgICAgICAgICAgIFwiQ2xlYW4gb3V0cHV0IGRhdGFcIixcbiAgICAgICAgICAgIFwiU2ltcGxlIGFuZCBwb3dlcmZ1bCBBUElcIlxuICAgICAgICBdXG4gICAgfVxufSxcbiAqL1xuXG5jb25zdHJ1Y3RvcnMubGlzdCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBsaXN0X2VsZW1lbnQ6IG51bGwsXG4gICAgICAgIHR5cGU6IGRhdGEgJiYgZGF0YS5zdHlsZSAmJiBkYXRhLnN0eWxlID09IFwib3JkZXJlZFwiID8gXCJvbFwiIDogXCJ1bFwiLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjogdGhpcy50eXBlID09IFwib2xcIiA/IFwib3JkZXJlZFwiIDogXCJ1bm9yZGVyZWRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IEFycmF5LmZyb20odGhpcy5saXN0X2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpKS5tYXAoZSA9PiBlLmlubmVySFRNTClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vZWRpdG9yXG4gICAgLy8vL291dGVyIGxpc3RcbiAgICBibGMubGlzdF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChibGMudHlwZSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmxjLmxpc3RfZWxlbWVudCk7XG4gICAgLy8vL2RvIHdlIGhhdmUgZGF0YVxuICAgIGlmIChkYXRhICYmIGRhdGEuaXRlbXMpIHtcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGwuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgIGwuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgYWRkU21hcnRSZW1vdmUobClcbiAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuYXBwZW5kQ2hpbGQobCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vLy8vbWFrZSBMSSBkZWxldGFibGUgXG4gICAgZnVuY3Rpb24gYWRkU21hcnRSZW1vdmUoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5rZXlDb2RlICwgdGhpcy5pbm5lckhUTUwubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiB0aGlzLmlubmVySFRNTC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzICYmIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIG5pLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvL3doZXJlP1xuICAgICAgICAgICAgICAgIGxldCBteW5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChteW5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5pbnNlcnRCZWZvcmUobmksIG15bmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChuaSk7IC8vYXQuLi4/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFNtYXJ0UmVtb3ZlKG5pKTtcbiAgICAgICAgICAgICAgICBuaS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8vLy9jaGFuZ2xlIGxpc3QgdHlwZSB0b1xuICAgIGZ1bmN0aW9uIHNldFR5cGUodG4pIHtcblxuICAgICAgICBsZXQgbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRuKTtcbiAgICAgICAgbGV0IGxpc3MgPSBBcnJheS5mcm9tKGJsYy5saXN0X2VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGxpc3MuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIG5lLmFwcGVuZENoaWxkKGUpXG4gICAgICAgIH0pO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50ID0gbmU7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKG5lKTtcbiAgICB9XG4gICAgLy8vL1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgLy9yYWRpb2J1dHRvbnNcbiAgICAvL1xuICAgIGxldCByYnRucyA9IFt7XG4gICAgICAgICAgICB2YWx1ZTogXCJ1bFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiVW5vcmRlcmVkXCJcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJvbFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiT3JkZXJlZFwiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHJidG5zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJsaXN0X2J1dHRvbnNfXCIgKyBpZDtcbiAgICAgICAgcmFkaW8udmFsdWUgPSBlLnZhbHVlO1xuICAgICAgICByYWRpby5jaGVja2VkID0gKGJsYy50eXBlID09IGUudmFsdWUpO1xuICAgICAgICByYWRpby5vbmNoYW5nZSA9IGV2ID0+IHNldFR5cGUoZS52YWx1ZSk7XG4gICAgICAgIGxldCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxibC5pbm5lckhUTUwgPSBlLmxhYmVsO1xuICAgICAgICBibGMuYWRkVG9Ub29sYmFyKHJhZGlvKTtcbiAgICAgICAgYmxjLmFkZFRvVG9vbGJhcihsYmwpO1xuICAgIH0pO1xuICAgIC8vLy8gYWRkIGJ1dHRvblxuICAgIGxldCBhZGRfYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRfYi50eXBlID0gXCJidXR0b25cIjtcbiAgICBhZGRfYi52YWx1ZSA9IFwiK2l0ZW1cIjtcbiAgICBhZGRfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld2xpLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgYWRkU21hcnRSZW1vdmUobmV3bGkpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKG5ld2xpKTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb1Rvb2xiYXIoYWRkX2IpO1xuICAgIHJldHVybiBibGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVHlwaWNhbEVkaXRvcihlbCkge1xuICAgIGxldCBlZGl0b3IgPSBuZXcgQmxvY2tFZGl0b3Ioe1xuICAgICAgICBzZWxlY3RvcjogZWxcbiAgICB9KTtcblxuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGljb246IFwiwrZcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnBhcmFncmFwaCxcbiAgICAgICAgbGFiZWw6IFwiUGFyYWdyYXBoXCJcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImRpdmlkZXJcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmRpdmlkZXIsXG4gICAgICAgIGljb246IFwi4oCUXCIsXG4gICAgICAgIGxhYmVsOiAnRGl2aWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImhlYWRlclwiLFxuICAgICAgICBpY29uOiBcIkhcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmhlYWRlcixcbiAgICAgICAgbGFiZWw6ICdIZWFkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIGljb246IFwie31cIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmNvZGUsXG4gICAgICAgIGxhYmVsOiAnQ29kZSBzbmlwcGV0J1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicmF3XCIsXG4gICAgICAgIGljb246IFwiPD5cIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnJhdyxcbiAgICAgICAgbGFiZWw6ICdSYXcgSFRNTCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLmZsYXQucXVvdGUsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlLFxuICAgICAgICBsYWJlbDogJ0Jsb2NrcXVvdGUnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5mbGF0LmltYWdlLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaW1hZ2UsXG4gICAgICAgIGxhYmVsOiAnSW1hZ2UnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5mbGF0LnZpZGVvLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMudmlkZW8sXG4gICAgICAgIGxhYmVsOiAnVmlkZW8nXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLmZsYXQubGlzdCxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmxpc3QsXG4gICAgICAgIGxhYmVsOiBcIkxpc3RcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhVSS5pY29ucy5mbGF0Lmxpc3QpO1xuXG4gICAgcmV0dXJuIGVkaXRvcjtcbn1cbi8vICBteS5jdXJyZW50X2VkaXRvciA9IG5ldyBlZGl0b3JfZm4obDQsIGVkaXRvcl9lbGVtZW50LCBteS5jdXJyZW50X3ZpZXcuZmlsZS5jb250ZW50KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMYXRpZEVkaXRvcihsNCwgZWRpdG9yX2VsZW1lbnRfc2VsZWN0b3IsIGZpbGVfY29udGVudCkge1xuICAgIGxldCBlZCA9IG1ha2VUeXBpY2FsRWRpdG9yKGVkaXRvcl9lbGVtZW50X3NlbGVjdG9yKTtcbiAgICBlZC5zZXRCbG9ja3MoZmlsZV9jb250ZW50KTtcbiAgICByZXR1cm4gZWQ7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xOSA3djIuOTlzLTEuOTkuMDEtMiAwVjdoLTNzLjAxLTEuOTkgMC0yaDNWMmgydjNoM3YyaC0zem0tMyA0VjhoLTNWNUg1Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0ydi04aC0zek01IDE5bDMtNCAyIDMgMy00IDQgNUg1elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk0yMCAxMmwtMS40MS0xLjQxTDEzIDE2LjE3VjRoLTJ2MTIuMTdsLTUuNTgtNS41OUw0IDEybDggOCA4LTh6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNNCAxMmwxLjQxIDEuNDFMMTEgNy44M1YyMGgyVjcuODNsNS41OCA1LjU5TDIwIDEybC04LTgtOCA4elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk00IDEwLjVjLS44IDAtMS41LjctMS41IDEuNXMuNyAxLjUgMS41IDEuNSAxLjUtLjcgMS41LTEuNS0uNy0xLjUtMS41LTEuNXptMC02Yy0uOCAwLTEuNS43LTEuNSAxLjVTMy4yIDcuNSA0IDcuNSA1LjUgNi44IDUuNSA2IDQuOCA0LjUgNCA0LjV6bTAgMTJjLS44IDAtMS41LjctMS41IDEuNXMuNyAxLjUgMS41IDEuNSAxLjUtLjcgMS41LTEuNS0uNy0xLjUtMS41LTEuNXpNNyAxOWgxNHYtMkg3djJ6bTAtNmgxNHYtMkg3djJ6bTAtOHYyaDE0VjVIN3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiAxN2gzbDItNFY3SDV2Nmgzem04IDBoM2wyLTRWN2gtNnY2aDN6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMy45IDEyYzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xaDRWN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDR2LTEuOUg3Yy0xLjcxIDAtMy4xLTEuMzktMy4xLTMuMXpNOCAxM2g4di0ySDh2MnptOS02aC00djEuOWg0YzEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xcy0xLjM5IDMuMS0zLjEgMy4xaC00VjE3aDRjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNC41di05bDYgNC41LTYgNC41elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMC4zMDY4IDE5LjMyNDJDMTAuODY3NCAxOS41NzQyIDExLjM5NzcgMTkuNjk5MiAxMS44OTc3IDE5LjY5OTJDMTQuNzQ2MiAxOS42OTkyIDE2LjE3MDUgMTguMzkwNiAxNi4xNzA1IDE1Ljc3MzRDMTYuMTcwNSAxNC44ODI4IDE2LjAxNTIgMTQuMTc5NyAxNS43MDQ1IDEzLjY2NDFDMTUuNSAxMy4zMjAzIDE1LjI2NyAxMy4wMzEyIDE1LjAwNTcgMTIuNzk2OUMxNC43NDQzIDEyLjU2MjUgMTQuNDg4NiAxMi4zODA5IDE0LjIzODYgMTIuMjUyQzEzLjk4ODYgMTIuMTIzIDEzLjY4MzcgMTIuMDI1NCAxMy4zMjM5IDExLjk1OUMxMi45NjQgMTEuODkyNiAxMi42NDU4IDExLjg1MTYgMTIuMzY5MyAxMS44MzU5QzEyLjA5MjggMTEuODIwMyAxMS43MzQ4IDExLjgxMjUgMTEuMjk1NSAxMS44MTI1QzEwLjc0MjQgMTEuODEyNSAxMC4zNTk4IDExLjg1MTYgMTAuMTQ3NyAxMS45Mjk3QzEwLjE0NzcgMTIuMzQzOCAxMC4xNDU4IDEyLjk2NDggMTAuMTQyIDEzLjc5M0MxMC4xMzgzIDE0LjYyMTEgMTAuMTM2NCAxNS4yMzgzIDEwLjEzNjQgMTUuNjQ0NUMxMC4xMzY0IDE1LjcwNyAxMC4xMzI2IDE1Ljk3MDcgMTAuMTI1IDE2LjQzNTVDMTAuMTE3NCAxNi45MDA0IDEwLjExNTUgMTcuMjc3MyAxMC4xMTkzIDE3LjU2NjRDMTAuMTIzMSAxNy44NTU1IDEwLjE0MDIgMTguMTgxNiAxMC4xNzA1IDE4LjU0NDlDMTAuMjAwOCAxOC45MDgyIDEwLjI0NjIgMTkuMTY4IDEwLjMwNjggMTkuMzI0MlpNMTAuMTQ3NyAxMC41ODJDMTAuNDY1OSAxMC42MzY3IDEwLjg3ODggMTAuNjY0MSAxMS4zODY0IDEwLjY2NDFDMTIuMDA3NiAxMC42NjQxIDEyLjU0OTIgMTAuNjEzMyAxMy4wMTE0IDEwLjUxMTdDMTMuNDczNSAxMC40MTAyIDEzLjg5MDIgMTAuMjM2MyAxNC4yNjE0IDkuOTkwMjNDMTQuNjMyNiA5Ljc0NDE0IDE0LjkxNDggOS4zOTQ1MyAxNS4xMDggOC45NDE0MUMxNS4zMDExIDguNDg4MjggMTUuMzk3NyA3LjkzMzU5IDE1LjM5NzcgNy4yNzczNEMxNS4zOTc3IDYuNzMwNDcgMTUuMjg3OSA2LjI1MTk1IDE1LjA2ODIgNS44NDE4QzE0Ljg0ODUgNS40MzE2NCAxNC41NDkyIDUuMTExMzMgMTQuMTcwNSA0Ljg4MDg2QzEzLjc5MTcgNC42NTAzOSAxMy4zODI2IDQuNDgwNDcgMTIuOTQzMiA0LjM3MTA5QzEyLjUwMzggNC4yNjE3MiAxMi4wMzQxIDQuMjA3MDMgMTEuNTM0MSA0LjIwNzAzQzExLjE1NTMgNC4yMDcwMyAxMC42NjI5IDQuMjU3ODEgMTAuMDU2OCA0LjM1OTM4QzEwLjA1NjggNC43NSAxMC4wNzIgNS4zMzk4NCAxMC4xMDIzIDYuMTI4OTFDMTAuMTMyNiA2LjkxNzk3IDEwLjE0NzcgNy41MTE3MiAxMC4xNDc3IDcuOTEwMTZDMTAuMTQ3NyA4LjEyMTA5IDEwLjE0NTggOC40MzM1OSAxMC4xNDIgOC44NDc2NkMxMC4xMzgzIDkuMjYxNzIgMTAuMTM2NCA5LjU3MDMxIDEwLjEzNjQgOS43NzM0NEMxMC4xMzY0IDEwLjEzMjggMTAuMTQwMiAxMC40MDIzIDEwLjE0NzcgMTAuNTgyWk00IDIxTDQuMDIyNzMgMTkuODk4NEM0LjEzNjM2IDE5Ljg2NzIgNC40NTgzMyAxOS44MDQ3IDQuOTg4NjQgMTkuNzEwOUM1LjUxODk0IDE5LjYxNzIgNS45MjA0NSAxOS41MTE3IDYuMTkzMTggMTkuMzk0NUM2LjI0NjIxIDE5LjMwMDggNi4yOTM1NiAxOS4xOTUzIDYuMzM1MjMgMTkuMDc4MUM2LjM3Njg5IDE4Ljk2MDkgNi40MDkwOSAxOC44MzAxIDYuNDMxODIgMTguNjg1NUM2LjQ1NDU1IDE4LjU0MSA2LjQ3NTM4IDE4LjQxNDEgNi40OTQzMiAxOC4zMDQ3QzYuNTEzMjYgMTguMTk1MyA2LjUyNDYyIDE4LjA0ODggNi41Mjg0MSAxNy44NjUyQzYuNTMyMiAxNy42ODE2IDYuNTM0MDkgMTcuNTQ4OCA2LjUzNDA5IDE3LjQ2NjhWMTYuNjk5MkM2LjUzNDA5IDkuMDI3MzQgNi40NTA3NiA1LjAyMzQ0IDYuMjg0MDkgNC42ODc1QzYuMjUzNzkgNC42MjUgNi4xNzA0NSA0LjU2ODM2IDYuMDM0MDkgNC41MTc1OEM1Ljg5NzczIDQuNDY2OCA1LjcyOTE3IDQuNDIzODMgNS41Mjg0MSA0LjM4ODY3QzUuMzI3NjUgNC4zNTM1MiA1LjE0MDE1IDQuMzI2MTcgNC45NjU5MSA0LjMwNjY0QzQuNzkxNjcgNC4yODcxMSA0LjYwNzk1IDQuMjY5NTMgNC40MTQ3NyA0LjI1MzkxQzQuMjIxNTkgNC4yMzgyOCA0LjEwNjA2IDQuMjI2NTYgNC4wNjgxOCA0LjIxODc1TDQuMDIyNzMgMy4yNDYwOUM0Ljc2NTE1IDMuMjMwNDcgNi4wNTMwMyAzLjE4NTU1IDcuODg2MzYgMy4xMTEzM0M5LjcxOTcgMy4wMzcxMSAxMS4xMzI2IDMgMTIuMTI1IDNDMTIuMjk5MiAzIDEyLjU1NjggMy4wMDE5NSAxMi44OTc3IDMuMDA1ODZDMTMuMjM4NiAzLjAwOTc3IDEzLjQ5NjIgMy4wMTE3MiAxMy42NzA1IDMuMDExNzJDMTQuMjAwOCAzLjAxMTcyIDE0LjcxNzggMy4wNjI1IDE1LjIyMTYgMy4xNjQwNkMxNS43MjU0IDMuMjY1NjIgMTYuMjEyMSAzLjQyOTY5IDE2LjY4MTggMy42NTYyNUMxNy4xNTE1IDMuODgyODEgMTcuNTYwNiA0LjE2MDE2IDE3LjkwOTEgNC40ODgyOEMxOC4yNTc2IDQuODE2NDEgMTguNTM3OSA1LjIyNDYxIDE4Ljc1IDUuNzEyODlDMTguOTYyMSA2LjIwMTE3IDE5LjA2ODIgNi43MzgyOCAxOS4wNjgyIDcuMzI0MjJDMTkuMDY4MiA3LjczMDQ3IDE5LjAwNTcgOC4xMDM1MiAxOC44ODA3IDguNDQzMzZDMTguNzU1NyA4Ljc4MzIgMTguNjA4IDkuMDY0NDUgMTguNDM3NSA5LjI4NzExQzE4LjI2NyA5LjUwOTc3IDE4LjAyMjcgOS43MzQzOCAxNy43MDQ1IDkuOTYwOTRDMTcuMzg2NCAxMC4xODc1IDE3LjEwOTggMTAuMzYzMyAxNi44NzUgMTAuNDg4M0MxNi42NDAyIDEwLjYxMzMgMTYuMzIyIDEwLjc2OTUgMTUuOTIwNSAxMC45NTdDMTcuMDg3MSAxMS4yMzA1IDE4LjA1ODcgMTEuNzUzOSAxOC44MzUyIDEyLjUyNzNDMTkuNjExNyAxMy4zMDA4IDIwIDE0LjI2OTUgMjAgMTUuNDMzNkMyMCAxNi4yMTQ4IDE5Ljg2NzQgMTYuOTE2IDE5LjYwMjMgMTcuNTM3MUMxOS4zMzcxIDE4LjE1ODIgMTguOTgzIDE4LjY2OCAxOC41Mzk4IDE5LjA2NjRDMTguMDk2NiAxOS40NjQ4IDE3LjU3MzkgMTkuNzk4OCAxNi45NzE2IDIwLjA2ODRDMTYuMzY5MyAyMC4zMzc5IDE1Ljc1IDIwLjUyNzMgMTUuMTEzNiAyMC42MzY3QzE0LjQ3NzMgMjAuNzQ2MSAxMy44MTA2IDIwLjgwMDggMTMuMTEzNiAyMC44MDA4QzEyLjc4MDMgMjAuODAwOCAxMi4yODAzIDIwLjc4OTEgMTEuNjEzNiAyMC43NjU2QzEwLjk0NyAyMC43NDIyIDEwLjQ0NyAyMC43MzA1IDEwLjExMzYgMjAuNzMwNUM5LjMxMDYxIDIwLjczMDUgOC4xNDc3MyAyMC43NzM0IDYuNjI1IDIwLjg1OTRDNS4xMDIyNyAyMC45NDUzIDQuMjI3MjcgMjAuOTkyMiA0IDIxWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk02IDIwLjk3NjZMNi4xOTkyMiAxOS45ODA1QzYuMzcxMDkgMTkuOTI1OCA2LjYxMTMzIDE5Ljg2MTMgNi45MTk5MiAxOS43ODcxQzcuMjI4NTIgMTkuNzEyOSA3LjUwOTc3IDE5LjYzODcgNy43NjM2NyAxOS41NjQ1QzguMDE3NTggMTkuNDkwMiA4LjI1IDE5LjM5ODQgOC40NjA5NCAxOS4yODkxQzguNjc5NjkgMTkuMDE1NiA4LjgzOTg0IDE4LjYyMTEgOC45NDE0MSAxOC4xMDU1QzguOTQ5MjIgMTguMDUwOCA5LjE5MTQxIDE2LjkyMTkgOS42Njc5NyAxNC43MTg4QzEwLjE0NDUgMTIuNTE1NiAxMC41ODk4IDEwLjM5MjYgMTEuMDAzOSA4LjM0OTYxQzExLjQxOCA2LjMwNjY0IDExLjYyMTEgNS4xNDg0NCAxMS42MTMzIDQuODc1VjQuNTgyMDNDMTEuNDI1OCA0LjQ4MDQ3IDExLjIxMjkgNC40MDgyIDEwLjk3NDYgNC4zNjUyM0MxMC43MzYzIDQuMzIyMjcgMTAuNDY0OCA0LjI5MTAyIDEwLjE2MDIgNC4yNzE0OEM5Ljg1NTQ3IDQuMjUxOTUgOS42Mjg5MSA0LjIzMDQ3IDkuNDgwNDcgNC4yMDcwM0w5LjcwMzEyIDNDOS45NjA5NCAzLjAxNTYyIDEwLjQyOTcgMy4wNDEwMiAxMS4xMDk0IDMuMDc2MTdDMTEuNzg5MSAzLjExMTMzIDEyLjM3MyAzLjEzODY3IDEyLjg2MTMgMy4xNTgyQzEzLjM0OTYgMy4xNzc3MyAxMy44MjAzIDMuMTg3NSAxNC4yNzM0IDMuMTg3NUMxNC42NDg0IDMuMTg3NSAxNS4wMzMyIDMuMTc3NzMgMTUuNDI3NyAzLjE1ODJDMTUuODIyMyAzLjEzODY3IDE2LjI5NDkgMy4xMTEzMyAxNi44NDU3IDMuMDc2MTdDMTcuMzk2NSAzLjA0MTAyIDE3Ljc4MTIgMy4wMTU2MiAxOCAzQzE3Ljk2MDkgMy4zMDQ2OSAxNy44ODY3IDMuNjUyMzQgMTcuNzc3MyA0LjA0Mjk3QzE3LjU0MyA0LjEyMTA5IDE3LjE0NjUgNC4yMzI0MiAxNi41ODc5IDQuMzc2OTVDMTYuMDI5MyA0LjUyMTQ4IDE1LjYwNTUgNC42NTIzNCAxNS4zMTY0IDQuNzY5NTNDMTUuMjUzOSA0LjkxNzk3IDE1LjE5OTIgNS4wODM5OCAxNS4xNTIzIDUuMjY3NThDMTUuMTA1NSA1LjQ1MTE3IDE1LjA3MDMgNS42MDc0MiAxNS4wNDY5IDUuNzM2MzNDMTUuMDIzNCA1Ljg2NTIzIDE0Ljk5NDEgNi4wNDI5NyAxNC45NTkgNi4yNjk1M0MxNC45MjM4IDYuNDk2MDkgMTQuODk4NCA2LjY2MDE2IDE0Ljg4MjggNi43NjE3MkMxNC42NzE5IDcuOTE3OTcgMTQuMzMwMSA5LjU1NjY0IDEzLjg1NzQgMTEuNjc3N0MxMy4zODQ4IDEzLjc5ODggMTMuMDgyIDE1LjE4NzUgMTIuOTQ5MiAxNS44NDM4QzEyLjkzMzYgMTUuOTE0MSAxMi44ODI4IDE2LjE0MDYgMTIuNzk2OSAxNi41MjM0QzEyLjcxMDkgMTYuOTA2MiAxMi42MzI4IDE3LjI1NzggMTIuNTYyNSAxNy41NzgxQzEyLjQ5MjIgMTcuODk4NCAxMi40Mjk3IDE4LjIyNDYgMTIuMzc1IDE4LjU1NjZDMTIuMzIwMyAxOC44ODg3IDEyLjI5NjkgMTkuMTEzMyAxMi4zMDQ3IDE5LjIzMDVMMTIuMzE2NCAxOS40NDE0QzEyLjQ0OTIgMTkuNDcyNyAxMy4xNzE5IDE5LjU5MzggMTQuNDg0NCAxOS44MDQ3QzE0LjQ2MDkgMjAuMTQ4NCAxNC4zOTg0IDIwLjUzNTIgMTQuMjk2OSAyMC45NjQ4QzE0LjIxMDkgMjAuOTY0OCAxNC4wODQgMjAuOTcwNyAxMy45MTYgMjAuOTgyNEMxMy43NDggMjAuOTk0MSAxMy42MjExIDIxIDEzLjUzNTIgMjFDMTMuMzA4NiAyMSAxMi45Njg4IDIwLjk2MDkgMTIuNTE1NiAyMC44ODI4QzEyLjA2MjUgMjAuODA0NyAxMS43MjY2IDIwLjc2NTYgMTEuNTA3OCAyMC43NjU2QzEwLjQyOTcgMjAuNzUgOS42MjUgMjAuNzQyMiA5LjA5Mzc1IDIwLjc0MjJDOC42OTUzMSAyMC43NDIyIDguMTM2NzIgMjAuNzc3MyA3LjQxNzk3IDIwLjg0NzdDNi42OTkyMiAyMC45MTggNi4yMjY1NiAyMC45NjA5IDYgMjAuOTc2NlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTguMTE3NiAxNS43NjQ3QzE4LjExNzYgMTUuNTAzMyAxOC4wMjYxIDE1LjI4MSAxNy44NDMxIDE1LjA5OEwxNS44MDM5IDEzLjA1ODhDMTUuNjIwOSAxMi44NzU4IDE1LjM5ODcgMTIuNzg0MyAxNS4xMzczIDEyLjc4NDNDMTQuODYyNyAxMi43ODQzIDE0LjYyNzUgMTIuODg4OSAxNC40MzE0IDEzLjA5OEMxNC40NTEgMTMuMTE3NiAxNC41MTMxIDEzLjE3ODEgMTQuNjE3NiAxMy4yNzk0QzE0LjcyMjIgMTMuMzgwNyAxNC43OTI1IDEzLjQ1MSAxNC44Mjg0IDEzLjQ5MDJDMTQuODY0NCAxMy41Mjk0IDE0LjkxMzQgMTMuNTkxNSAxNC45NzU1IDEzLjY3NjVDMTUuMDM3NiAxMy43NjE0IDE1LjA4MDEgMTMuODQ0OCAxNS4xMDI5IDEzLjkyNjVDMTUuMTI1OCAxNC4wMDgyIDE1LjEzNzMgMTQuMDk4IDE1LjEzNzMgMTQuMTk2MUMxNS4xMzczIDE0LjQ1NzUgMTUuMDQ1OCAxNC42Nzk3IDE0Ljg2MjcgMTQuODYyN0MxNC42Nzk3IDE1LjA0NTggMTQuNDU3NSAxNS4xMzczIDE0LjE5NjEgMTUuMTM3M0MxNC4wOTggMTUuMTM3MyAxNC4wMDgyIDE1LjEyNTggMTMuOTI2NSAxNS4xMDI5QzEzLjg0NDggMTUuMDgwMSAxMy43NjE0IDE1LjAzNzYgMTMuNjc2NSAxNC45NzU1QzEzLjU5MTUgMTQuOTEzNCAxMy41Mjk0IDE0Ljg2NDQgMTMuNDkwMiAxNC44Mjg0QzEzLjQ1MSAxNC43OTI1IDEzLjM4MDcgMTQuNzIyMiAxMy4yNzk0IDE0LjYxNzZDMTMuMTc4MSAxNC41MTMxIDEzLjExNzYgMTQuNDUxIDEzLjA5OCAxNC40MzE0QzEyLjg4MjQgMTQuNjM0IDEyLjc3NDUgMTQuODcyNSAxMi43NzQ1IDE1LjE0NzFDMTIuNzc0NSAxNS40MDg1IDEyLjg2NiAxNS42MzA3IDEzLjA0OSAxNS44MTM3TDE1LjA2ODYgMTcuODQzMUMxNS4yNDUxIDE4LjAxOTYgMTUuNDY3MyAxOC4xMDc4IDE1LjczNTMgMTguMTA3OEMxNS45OTY3IDE4LjEwNzggMTYuMjE5IDE4LjAyMjkgMTYuNDAyIDE3Ljg1MjlMMTcuODQzMSAxNi40MjE2QzE4LjAyNjEgMTYuMjM4NiAxOC4xMTc2IDE2LjAxOTYgMTguMTE3NiAxNS43NjQ3Wk0xMS4yMjU1IDguODUyOTRDMTEuMjI1NSA4LjU5MTUgMTEuMTM0IDguMzY5MjggMTAuOTUxIDguMTg2MjdMOC45MzEzNyA2LjE1Njg2QzguNzQ4MzcgNS45NzM4NiA4LjUyNjE0IDUuODgyMzUgOC4yNjQ3MSA1Ljg4MjM1QzguMDA5OCA1Ljg4MjM1IDcuNzg3NTggNS45NzA1OSA3LjU5ODA0IDYuMTQ3MDZMNi4xNTY4NiA3LjU3ODQzQzUuOTczODYgNy43NjE0NCA1Ljg4MjM1IDcuOTgwMzkgNS44ODIzNSA4LjIzNTI5QzUuODgyMzUgOC40OTY3MyA1Ljk3Mzg2IDguNzE4OTUgNi4xNTY4NiA4LjkwMTk2TDguMTk2MDggMTAuOTQxMkM4LjM3MjU1IDExLjExNzYgOC41OTQ3NyAxMS4yMDU5IDguODYyNzUgMTEuMjA1OUM5LjEzNzI2IDExLjIwNTkgOS4zNzI1NSAxMS4xMDQ2IDkuNTY4NjMgMTAuOTAyQzkuNTQ5MDIgMTAuODgyNCA5LjQ4NjkzIDEwLjgyMTkgOS4zODIzNSAxMC43MjA2QzkuMjc3NzggMTAuNjE5MyA5LjIwNzUyIDEwLjU0OSA5LjE3MTU3IDEwLjUwOThDOS4xMzU2MiAxMC40NzA2IDkuMDg2NiAxMC40MDg1IDkuMDI0NTEgMTAuMzIzNUM4Ljk2MjQyIDEwLjIzODYgOC45MTk5MyAxMC4xNTUyIDguODk3MDYgMTAuMDczNUM4Ljg3NDE4IDkuOTkxODMgOC44NjI3NSA5LjkwMTk2IDguODYyNzUgOS44MDM5MkM4Ljg2Mjc1IDkuNTQyNDggOC45NTQyNSA5LjMyMDI2IDkuMTM3MjYgOS4xMzcyNkM5LjMyMDI2IDguOTU0MjUgOS41NDI0OCA4Ljg2Mjc1IDkuODAzOTIgOC44NjI3NUM5LjkwMTk2IDguODYyNzUgOS45OTE4MyA4Ljg3NDE4IDEwLjA3MzUgOC44OTcwNkMxMC4xNTUyIDguOTE5OTMgMTAuMjM4NiA4Ljk2MjQyIDEwLjMyMzUgOS4wMjQ1MUMxMC40MDg1IDkuMDg2NiAxMC40NzA2IDkuMTM1NjIgMTAuNTA5OCA5LjE3MTU3QzEwLjU0OSA5LjIwNzUyIDEwLjYxOTMgOS4yNzc3OCAxMC43MjA2IDkuMzgyMzVDMTAuODIxOSA5LjQ4NjkzIDEwLjg4MjQgOS41NDkwMiAxMC45MDIgOS41Njg2M0MxMS4xMTc2IDkuMzY2MDEgMTEuMjI1NSA5LjEyNzQ1IDExLjIyNTUgOC44NTI5NFpNMjAgMTUuNzY0N0MyMCAxNi41NDkgMTkuNzIyMiAxNy4yMTI0IDE5LjE2NjcgMTcuNzU0OUwxNy43MjU1IDE5LjE4NjNDMTcuMTgzIDE5LjcyODggMTYuNTE5NiAyMCAxNS43MzUzIDIwQzE0Ljk0NDQgMjAgMTQuMjc3OCAxOS43MjIyIDEzLjczNTMgMTkuMTY2N0wxMS43MTU3IDE3LjEzNzNDMTEuMTczMiAxNi41OTQ4IDEwLjkwMiAxNS45MzE0IDEwLjkwMiAxNS4xNDcxQzEwLjkwMiAxNC4zNDMxIDExLjE4OTUgMTMuNjYwMSAxMS43NjQ3IDEzLjA5OEwxMC45MDIgMTIuMjM1M0MxMC4zMzk5IDEyLjgxMDUgOS42NjAxMyAxMy4wOTggOC44NjI3NSAxMy4wOThDOC4wNzg0MyAxMy4wOTggNy40MTE3NiAxMi44MjM1IDYuODYyNzUgMTIuMjc0NUw0LjgyMzUzIDEwLjIzNTNDNC4yNzQ1MSA5LjY4NjI3IDQgOS4wMTk2MSA0IDguMjM1MjlDNCA3LjQ1MDk4IDQuMjc3NzggNi43ODc1OCA0LjgzMzMzIDYuMjQ1MUw2LjI3NDUxIDQuODEzNzNDNi44MTY5OSA0LjI3MTI0IDcuNDgwMzkgNCA4LjI2NDcxIDRDOS4wNTU1NiA0IDkuNzIyMjIgNC4yNzc3OCAxMC4yNjQ3IDQuODMzMzNMMTIuMjg0MyA2Ljg2Mjc1QzEyLjgyNjggNy40MDUyMyAxMy4wOTggOC4wNjg2MyAxMy4wOTggOC44NTI5NEMxMy4wOTggOS42NTY4NiAxMi44MTA1IDEwLjMzOTkgMTIuMjM1MyAxMC45MDJMMTMuMDk4IDExLjc2NDdDMTMuNjYwMSAxMS4xODk1IDE0LjMzOTkgMTAuOTAyIDE1LjEzNzMgMTAuOTAyQzE1LjkyMTYgMTAuOTAyIDE2LjU4ODIgMTEuMTc2NSAxNy4xMzczIDExLjcyNTVMMTkuMTc2NSAxMy43NjQ3QzE5LjcyNTUgMTQuMzEzNyAyMCAxNC45ODA0IDIwIDE1Ljc2NDdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTIxLjc5ODMgMTJDMjEuOTA4NiAxMiAyMS45OTkyIDEyLjAzNTIgMjIuMDcwMSAxMi4xMDU1QzIyLjE0MSAxMi4xNzU4IDIyLjE3NjUgMTIuMjY1NiAyMi4xNzY1IDEyLjM3NVYxMy4xMjVDMjIuMTc2NSAxMy4yMzQ0IDIyLjE0MSAxMy4zMjQyIDIyLjA3MDEgMTMuMzk0NUMyMS45OTkyIDEzLjQ2NDggMjEuOTA4NiAxMy41IDIxLjc5ODMgMTMuNUgxLjM3ODE1QzEuMjY3ODYgMTMuNSAxLjE3NzI2IDEzLjQ2NDggMS4xMDYzNiAxMy4zOTQ1QzEuMDM1NDUgMTMuMzI0MiAxIDEzLjIzNDQgMSAxMy4xMjVWMTIuMzc1QzEgMTIuMjY1NiAxLjAzNTQ1IDEyLjE3NTggMS4xMDYzNiAxMi4xMDU1QzEuMTc3MjYgMTIuMDM1MiAxLjI2Nzg2IDEyIDEuMzc4MTUgMTJIMjEuNzk4M1pNNi43MDc3MiAxMS4yNUM2LjQ4NzEzIDEwLjk3NjYgNi4yODYyNCAxMC42NjQxIDYuMTA1MDQgMTAuMzEyNUM1LjcyNjg5IDkuNTQ2ODggNS41Mzc4MiA4LjgxMjUgNS41Mzc4MiA4LjEwOTM4QzUuNTM3ODIgNi42OTUzMSA2LjA2NTY1IDUuNDg4MjggNy4xMjEzMiA0LjQ4ODI4QzguMTY5MTIgMy40OTYwOSA5LjcxNzE3IDMgMTEuNzY1NSAzQzEyLjE1OTQgMyAxMi44MTcyIDMuMDc0MjIgMTMuNzM5IDMuMjIyNjZDMTQuMjU4OSAzLjMxNjQxIDE0Ljk1NjEgMy41MDM5MSAxNS44MzA2IDMuNzg1MTZDMTUuOTA5NCA0LjA4MjAzIDE1Ljk5MjEgNC41NDI5NyAxNi4wNzg4IDUuMTY3OTdDMTYuMTg5MSA2LjEyODkxIDE2LjI0NDIgNi44NDM3NSAxNi4yNDQyIDcuMzEyNUMxNi4yNDQyIDcuNDUzMTIgMTYuMjI0NSA3LjYyODkxIDE2LjE4NTEgNy44Mzk4NEwxNi4wNDMzIDcuODc1TDE1LjA1MDcgNy44MDQ2OUwxNC44ODUyIDcuNzgxMjVDMTQuNDkxMyA2LjYxNzE5IDE0LjA4NTYgNS44MTY0MSAxMy42NjgxIDUuMzc4OTFDMTIuOTc0OCA0LjY2Nzk3IDEyLjE0NzYgNC4zMTI1IDExLjE4NjQgNC4zMTI1QzEwLjI4ODMgNC4zMTI1IDkuNTcxNDMgNC41NDI5NyA5LjAzNTcxIDUuMDAzOTFDOC41MDc4OCA1LjQ1NzAzIDguMjQzOTYgNi4wMjczNCA4LjI0Mzk2IDYuNzE0ODRDOC4yNDM5NiA3LjI4NTE2IDguNTAzOTQgNy44MzIwMyA5LjAyMzkgOC4zNTU0N0M5LjU0Mzg1IDguODc4OTEgMTAuNjQyOSA5LjM4MjgxIDEyLjMyMDkgOS44NjcxOUMxMi44NjQ1IDEwLjAyMzQgMTMuNTQ2IDEwLjI4MTIgMTQuMzY1MyAxMC42NDA2QzE0LjgyMjIgMTAuODU5NCAxNS4xOTY0IDExLjA2MjUgMTUuNDg3OSAxMS4yNUg2LjcwNzcyWk0xMi42OTkxIDE0LjI1SDE3LjU1NTlDMTcuNjExMSAxNC41NTQ3IDE3LjYzODcgMTQuOTE0MSAxNy42Mzg3IDE1LjMyODFDMTcuNjM4NyAxNi4xOTUzIDE3LjQ3NzIgMTcuMDIzNCAxNy4xNTQxIDE3LjgxMjVDMTYuOTczIDE4LjI1IDE2LjY5MzMgMTguNjU2MiAxNi4zMTUxIDE5LjAzMTJDMTYuMDIzNiAxOS4zMDQ3IDE1LjU5NDMgMTkuNjIxMSAxNS4wMjcgMTkuOTgwNUMxNC4zOTY4IDIwLjM1NTUgMTMuNzk0MSAyMC42MTMzIDEzLjIxOSAyMC43NTM5QzEyLjU4ODggMjAuOTE4IDExLjc4OTEgMjEgMTAuODIwMSAyMUM5LjkyMjAxIDIxIDkuMTUzODkgMjAuOTEwMiA4LjUxNTc2IDIwLjczMDVMNi44NjEzNCAyMC4yNjE3QzYuNDEyMjkgMjAuMTM2NyA2LjEyODY4IDIwLjAyNzMgNi4wMTA1IDE5LjkzMzZDNS45NDc0OCAxOS44NzExIDUuOTE1OTcgMTkuNzg1MiA1LjkxNTk3IDE5LjY3NThWMTkuNTIzNEM1LjkxNTk3IDE4LjY3OTcgNS45MDgwOSAxOC4wNzAzIDUuODkyMzMgMTcuNjk1M0M1Ljg4NDQ1IDE3LjQ2MDkgNS44ODQ0NSAxNy4xOTUzIDUuODkyMzMgMTYuODk4NEw1LjkxNTk3IDE2LjQ2NDhWMTUuOTQ5Mkw3LjEyMTMyIDE1LjkyNThDNy4yMzk1IDE2LjE5MTQgNy4zNTc2NyAxNi40Njg4IDcuNDc1ODQgMTYuNzU3OEM3LjU5NDAxIDE3LjA0NjkgNy42ODI2NCAxNy4yNjU2IDcuNzQxNzMgMTcuNDE0MUM3LjgwMDgxIDE3LjU2MjUgNy44NTAwNSAxNy42NjggNy44ODk0NCAxNy43MzA1QzguMTY1MTggMTguMTc1OCA4LjQ4MDMgMTguNTQzIDguODM0ODIgMTguODMyQzkuMTczNTggMTkuMTEzMyA5LjU4NzE4IDE5LjMzNTkgMTAuMDc1NiAxOS41QzEwLjU0MDQgMTkuNjcxOSAxMS4wNjA0IDE5Ljc1NzggMTEuNjM1NSAxOS43NTc4QzEyLjEzOTcgMTkuNzU3OCAxMi42ODcyIDE5LjY1MjMgMTMuMjc4MSAxOS40NDE0QzEzLjg4NDcgMTkuMjM4MyAxNC4zNjUzIDE4LjkwMjMgMTQuNzE5OCAxOC40MzM2QzE1LjA5MDEgMTcuOTU3IDE1LjI3NTIgMTcuNDUzMSAxNS4yNzUyIDE2LjkyMTlDMTUuMjc1MiAxNi4yNjU2IDE0Ljk1NjEgMTUuNjUyMyAxNC4zMTggMTUuMDgyQzE0LjA1MDIgMTQuODU1NSAxMy41MTA1IDE0LjU3ODEgMTIuNjk5MSAxNC4yNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNyA0LjU1NTU2QzcgNC40MDUwOSA3LjA1NTY2IDQuMjc0ODkgNy4xNjY5OSA0LjE2NDkzQzcuMjc4MzIgNC4wNTQ5OCA3LjQxMDE2IDQgNy41NjI1IDRMMTUuNDM3NSA0QzE1LjU4OTggNCAxNS43MjE3IDQuMDU0OTggMTUuODMzIDQuMTY0OTNDMTUuOTQ0MyA0LjI3NDg4IDE2IDQuNDA1MDkgMTYgNC41NTU1NkMxNiA0LjcwNjAyIDE1Ljk0NDMgNC44MzYyMyAxNS44MzMgNC45NDYxOEwxMS44OTU1IDguODM1MDdDMTEuNzg0MiA4Ljk0NTAyIDExLjY1MjMgOSAxMS41IDlDMTEuMzQ3NyA5IDExLjIxNTggOC45NDUwMiAxMS4xMDQ1IDguODM1MDdMNy4xNjY5OSA0Ljk0NjE4QzcuMDU1NjYgNC44MzYyMyA3IDQuNzA2MDIgNyA0LjU1NTU2WlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNC4zOTU1IDIxSDkuNDM0NTdWMTkuOTI1OEwxMS43MTk3IDE3LjUyMzRDMTIuMjgyOSAxNi44ODIyIDEyLjU2NDUgMTYuMzcyNyAxMi41NjQ1IDE1Ljk5NTFDMTIuNTY0NSAxNS42ODkxIDEyLjQ5NzcgMTUuNDU2NCAxMi4zNjQzIDE1LjI5NjlDMTIuMjMwOCAxNS4xMzc0IDEyLjAzNzEgMTUuMDU3NiAxMS43ODMyIDE1LjA1NzZDMTEuNTMyNiAxNS4wNTc2IDExLjMyOTEgMTUuMTY1IDExLjE3MjkgMTUuMzc5OUMxMS4wMTY2IDE1LjU5MTUgMTAuOTM4NSAxNS44NTY4IDEwLjkzODUgMTYuMTc1OEg5LjI4ODA5QzkuMjg4MDkgMTUuNzM5NiA5LjM5NzE0IDE1LjMzNzYgOS42MTUyMyAxNC45Njk3QzkuODMzMzMgMTQuNTk4NiAxMC4xMzYxIDE0LjMwODkgMTAuNTIzNCAxNC4xMDA2QzEwLjkxMDggMTMuODkyMyAxMS4zNDM4IDEzLjc4ODEgMTEuODIyMyAxMy43ODgxQzEyLjU5MDUgMTMuNzg4MSAxMy4xODEzIDEzLjk2NTUgMTMuNTk0NyAxNC4zMjAzQzE0LjAxMTQgMTQuNjc1MSAxNC4yMTk3IDE1LjE4NDYgMTQuMjE5NyAxNS44NDg2QzE0LjIxOTcgMTYuMTI4NiAxNC4xNjc2IDE2LjQwMiAxNC4wNjM1IDE2LjY2ODlDMTMuOTU5MyAxNi45MzI2IDEzLjc5NjUgMTcuMjEwOSAxMy41NzUyIDE3LjUwMzlDMTMuMzU3MSAxNy43OTM2IDEzLjAwMzkgMTguMTgyNiAxMi41MTU2IDE4LjY3MDlMMTEuNTk3NyAxOS43MzA1SDE0LjM5NTVWMjFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjY0OTMgNC4xODc1VjQuODczMDVDMTAuNjQ5MyA0LjkyMzgzIDEwLjYyODQgNC45NjY4IDEwLjU4NjcgNS4wMDE5NUMxMC41NDQ5IDUuMDM3MTEgMTAuNDk1NSA1LjA1NDY5IDEwLjQzODQgNS4wNTQ2OUg4LjQ3Mzk2VjkuODEyNUM4LjQ3Mzk2IDkuODYzMjggOC40NTQxOSA5LjkwNzIzIDguNDE0NjMgOS45NDQzNEM4LjM3NTA4IDkuOTgxNDUgOC4zMjY3NCAxMCA4LjI2OTYxIDEwSDcuMzc5N0M3LjMyMjU3IDEwIDcuMjczMTMgOS45ODI0MiA3LjIzMTM4IDkuOTQ3MjdDNy4xODk2MyA5LjkxMjExIDcuMTY4NzUgOS44NjcxOSA3LjE2ODc1IDkuODEyNVY1LjA1NDY5SDUuMjEwOTRDNS4xNTM4MSA1LjA1NDY5IDUuMTA0MzcgNS4wMzcxMSA1LjA2MjYyIDUuMDAxOTVDNS4wMjA4NyA0Ljk2NjggNSA0LjkyMzgzIDUgNC44NzMwNVY0LjE4NzVDNSA0LjEzMjgxIDUuMDE5NzggNC4wODc4OSA1LjA1OTMzIDQuMDUyNzNDNS4wOTg4OCA0LjAxNzU4IDUuMTQ5NDIgNCA1LjIxMDk0IDRIMTAuNDM4NEMxMC40OTU1IDQgMTAuNTQ0OSA0LjAxODU1IDEwLjU4NjcgNC4wNTU2NkMxMC42Mjg0IDQuMDkyNzcgMTAuNjQ5MyA0LjEzNjcyIDEwLjY0OTMgNC4xODc1Wk0xNy40OTE4IDQuMTY5OTJMMTcuOTk5MyA5LjgwMDc4QzE4LjAwMzcgOS44NTE1NiAxNy45ODYyIDkuODk4NDQgMTcuOTQ2NiA5Ljk0MTQxQzE3LjkwMjcgOS45ODA0NyAxNy44NTIxIDEwIDE3Ljc5NSAxMEgxNi45MTE3QzE2Ljg1ODkgMTAgMTYuODEyOCA5Ljk4MzQgMTYuNzczMiA5Ljk1MDJDMTYuNzMzNyA5LjkxNjk5IDE2LjcxMTcgOS44NzY5NSAxNi43MDczIDkuODMwMDhMMTYuNDA0MSA2LjM4NDc3TDE1LjE1ODIgOC44NzVDMTUuMTIzIDguOTQ5MjIgMTUuMDU5MyA4Ljk4NjMzIDE0Ljk2NyA4Ljk4NjMzSDE0LjE3NkMxNC4wODgxIDguOTg2MzMgMTQuMDI0NCA4Ljk0OTIyIDEzLjk4NDggOC44NzVMMTIuNzQ1NiA2LjM3MzA1TDEyLjQ0ODkgOS44MzAwOEMxMi40NDQ1IDkuODc2OTUgMTIuNDIyNSA5LjkxNjk5IDEyLjM4MyA5Ljk1MDJDMTIuMzQzNCA5Ljk4MzQgMTIuMjk3MyAxMCAxMi4yNDQ2IDEwSDExLjM1NDZDMTEuMjk3NSAxMCAxMS4yNDcgOS45ODA0NyAxMS4yMDMgOS45NDE0MUMxMS4xNjM1IDkuOTAyMzQgMTEuMTQzNyA5Ljg1NTQ3IDExLjE0MzcgOS44MDA3OEwxMS42NTc5IDQuMTY5OTJDMTEuNjYyMyA0LjEyMzA1IDExLjY4NDIgNC4wODMwMSAxMS43MjM4IDQuMDQ5OEMxMS43NjMzIDQuMDE2NiAxMS44MDk1IDQgMTEuODYyMiA0SDEyLjc5ODNDMTIuODg2MiA0IDEyLjk0OTkgNC4wMzcxMSAxMi45ODk1IDQuMTExMzNMMTQuNDM5NyA3LjE1ODJDMTQuNDgzNiA3LjI1MTk1IDE0LjUyNzYgNy4zNTE1NiAxNC41NzE1IDcuNDU3MDNDMTQuNTg0NyA3LjQyOTY5IDE0LjYwNTYgNy4zODE4NCAxNC42MzQxIDcuMzEzNDhDMTQuNjYyNyA3LjI0NTEyIDE0LjY4NTggNy4xOTMzNiAxNC43MDM0IDcuMTU4MkwxNi4xNjAyIDQuMTExMzNDMTYuMTk5NyA0LjAzNzExIDE2LjI2MzUgNCAxNi4zNTE0IDRIMTcuMjgwOEMxNy4zMzc5IDQgMTcuMzg2MyA0LjAxNjYgMTcuNDI1OCA0LjA0OThDMTcuNDY1NCA0LjA4MzAxIDE3LjQ4NzQgNC4xMjMwNSAxNy40OTE4IDQuMTY5OTJaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE2IDIwLjQ0NDRDMTYgMjAuNTk0OSAxNS45NDQzIDIwLjcyNTEgMTUuODMzIDIwLjgzNTFDMTUuNzIxNyAyMC45NDUgMTUuNTg5OCAyMSAxNS40Mzc1IDIxSDcuNTYyNUM3LjQxMDE2IDIxIDcuMjc4MzIgMjAuOTQ1IDcuMTY2OTkgMjAuODM1MUM3LjA1NTY2IDIwLjcyNTEgNyAyMC41OTQ5IDcgMjAuNDQ0NEM3IDIwLjI5NCA3LjA1NTY2IDIwLjE2MzggNy4xNjY5OSAyMC4wNTM4TDExLjEwNDUgMTYuMTY0OUMxMS4yMTU4IDE2LjA1NSAxMS4zNDc3IDE2IDExLjUgMTZDMTEuNjUyMyAxNiAxMS43ODQyIDE2LjA1NSAxMS44OTU1IDE2LjE2NDlMMTUuODMzIDIwLjA1MzhDMTUuOTQ0MyAyMC4xNjM4IDE2IDIwLjI5NCAxNiAyMC40NDQ0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zLjU2MjUgNC4xMTMyOEMzLjI3MzQ0IDQuMDk3NjYgMy4wOTc2NiA0LjA4MjAzIDMuMDM1MTYgNC4wNjY0MUwzIDMuMDM1MTZDMy4xMDE1NiAzLjAyNzM0IDMuMjU3ODEgMy4wMjM0NCAzLjQ2ODc1IDMuMDIzNDRDMy45Mzc1IDMuMDIzNDQgNC4zNzUgMy4wMzkwNiA0Ljc4MTI1IDMuMDcwMzFDNS44MTI1IDMuMTI1IDYuNDYwOTQgMy4xNTIzNCA2LjcyNjU2IDMuMTUyMzRDNy4zOTg0NCAzLjE1MjM0IDguMDU0NjkgMy4xNDA2MiA4LjY5NTMxIDMuMTE3MTlDOS42MDE1NiAzLjA4NTk0IDEwLjE3MTkgMy4wNjY0MSAxMC40MDYyIDMuMDU4NTlDMTAuODQzOCAzLjA1ODU5IDExLjE3OTcgMy4wNTA3OCAxMS40MTQxIDMuMDM1MTZMMTEuNDAyMyAzLjE5OTIyTDExLjQyNTggMy45NDkyMlY0LjA1NDY5QzEwLjk1NyA0LjEyNSAxMC40NzI3IDQuMTYwMTYgOS45NzI2NiA0LjE2MDE2QzkuNTAzOTEgNC4xNjAxNiA5LjE5NTMxIDQuMjU3ODEgOS4wNDY4OCA0LjQ1MzEyQzguOTQ1MzEgNC41NjI1IDguODk0NTMgNS4wNzgxMiA4Ljg5NDUzIDZDOC44OTQ1MyA2LjEwMTU2IDguODk2NDggNi4yMjg1MiA4LjkwMDM5IDYuMzgwODZDOC45MDQzIDYuNTMzMiA4LjkwNjI1IDYuNjMyODEgOC45MDYyNSA2LjY3OTY5TDguOTE3OTcgOS4zNjMyOEw5LjA4MjAzIDEyLjY0NDVDOS4xMjg5MSAxMy42MTMzIDkuMzI4MTIgMTQuNDAyMyA5LjY3OTY5IDE1LjAxMTdDOS45NTMxMiAxNS40NzI3IDEwLjMyODEgMTUuODMyIDEwLjgwNDcgMTYuMDg5OEMxMS40OTIyIDE2LjQ1NyAxMi4xODM2IDE2LjY0MDYgMTIuODc4OSAxNi42NDA2QzEzLjY5MTQgMTYuNjQwNiAxNC40Mzc1IDE2LjUzMTIgMTUuMTE3MiAxNi4zMTI1QzE1LjU1NDcgMTYuMTcxOSAxNS45NDE0IDE1Ljk3MjcgMTYuMjc3MyAxNS43MTQ4QzE2LjY1MjMgMTUuNDMzNiAxNi45MDYyIDE1LjE4MzYgMTcuMDM5MSAxNC45NjQ4QzE3LjMyMDMgMTQuNTI3MyAxNy41MjczIDE0LjA4MiAxNy42NjAyIDEzLjYyODlDMTcuODI0MiAxMy4wNTg2IDE3LjkwNjIgMTIuMTY0MSAxNy45MDYyIDEwLjk0NTNDMTcuOTA2MiAxMC4zMjgxIDE3Ljg5MjYgOS44MjgxMiAxNy44NjUyIDkuNDQ1MzFDMTcuODM3OSA5LjA2MjUgMTcuNzk0OSA4LjU4Mzk4IDE3LjczNjMgOC4wMDk3N0MxNy42Nzc3IDcuNDM1NTUgMTcuNjI1IDYuODEyNSAxNy41NzgxIDYuMTQwNjJMMTcuNTMxMiA1LjQ0OTIyQzE3LjQ5MjIgNC45MjU3OCAxNy4zOTg0IDQuNTgyMDMgMTcuMjUgNC40MTc5N0MxNi45ODQ0IDQuMTQ0NTMgMTYuNjgzNiA0LjAxMTcyIDE2LjM0NzcgNC4wMTk1M0wxNS4xNzU4IDQuMDQyOTdMMTUuMDExNyA0LjAwNzgxTDE1LjAzNTIgM0gxNi4wMTk1TDE4LjQyMTkgMy4xMTcxOUMxOS4wMTU2IDMuMTQwNjIgMTkuNzgxMiAzLjEwMTU2IDIwLjcxODggM0wyMC45Mjk3IDMuMDIzNDRDMjAuOTc2NiAzLjMyMDMxIDIxIDMuNTE5NTMgMjEgMy42MjEwOUMyMSAzLjY3NTc4IDIwLjk4NDQgMy43OTY4OCAyMC45NTMxIDMuOTg0MzhDMjAuNjAxNiA0LjA3ODEyIDIwLjI3MzQgNC4xMjg5MSAxOS45Njg4IDQuMTM2NzJDMTkuMzk4NCA0LjIyMjY2IDE5LjA4OTggNC4yODkwNiAxOS4wNDMgNC4zMzU5NEMxOC45MjU4IDQuNDUzMTIgMTguODY3MiA0LjYxMzI4IDE4Ljg2NzIgNC44MTY0MUMxOC44NjcyIDQuODcxMDkgMTguODczIDQuOTc2NTYgMTguODg0OCA1LjEzMjgxQzE4Ljg5NjUgNS4yODkwNiAxOC45MDIzIDUuNDEwMTYgMTguOTAyMyA1LjQ5NjA5QzE4Ljk2NDggNS42NDQ1MyAxOS4wNTA4IDcuMTkxNDEgMTkuMTYwMiAxMC4xMzY3QzE5LjIwNyAxMS42NjAyIDE5LjE0ODQgMTIuODQ3NyAxOC45ODQ0IDEzLjY5OTJDMTguODY3MiAxNC4yOTMgMTguNzA3IDE0Ljc2OTUgMTguNTAzOSAxNS4xMjg5QzE4LjIwNyAxNS42MzY3IDE3Ljc2OTUgMTYuMTE3MiAxNy4xOTE0IDE2LjU3MDNDMTYuNjA1NSAxNy4wMTU2IDE1Ljg5NDUgMTcuMzYzMyAxNS4wNTg2IDE3LjYxMzNDMTQuMjA3IDE3Ljg3MTEgMTMuMjEwOSAxOCAxMi4wNzAzIDE4QzEwLjc2NTYgMTggOS42NTYyNSAxNy44MjAzIDguNzQyMTkgMTcuNDYwOUM3LjgxMjUgMTcuMDkzOCA3LjExMzI4IDE2LjYxNzIgNi42NDQ1MyAxNi4wMzEyQzYuMTY3OTcgMTUuNDM3NSA1Ljg0Mzc1IDE0LjY3NTggNS42NzE4OCAxMy43NDYxQzUuNTQ2ODggMTMuMTIxMSA1LjQ4NDM4IDEyLjE5NTMgNS40ODQzOCAxMC45Njg4VjcuMDY2NDFDNS40ODQzOCA1LjU5NzY2IDUuNDE3OTcgNC43NjU2MiA1LjI4NTE2IDQuNTcwMzFDNS4wODk4NCA0LjI4OTA2IDQuNTE1NjIgNC4xMzY3MiAzLjU2MjUgNC4xMTMyOFpNMjEgMjAuNjI1VjE5Ljg3NUMyMSAxOS43NjU2IDIwLjk2NDggMTkuNjc1OCAyMC44OTQ1IDE5LjYwNTVDMjAuODI0MiAxOS41MzUyIDIwLjczNDQgMTkuNSAyMC42MjUgMTkuNUgzLjM3NUMzLjI2NTYyIDE5LjUgMy4xNzU3OCAxOS41MzUyIDMuMTA1NDcgMTkuNjA1NUMzLjAzNTE2IDE5LjY3NTggMyAxOS43NjU2IDMgMTkuODc1VjIwLjYyNUMzIDIwLjczNDQgMy4wMzUxNiAyMC44MjQyIDMuMTA1NDcgMjAuODk0NUMzLjE3NTc4IDIwLjk2NDggMy4yNjU2MiAyMSAzLjM3NSAyMUgyMC42MjVDMjAuNzM0NCAyMSAyMC44MjQyIDIwLjk2NDggMjAuODk0NSAyMC44OTQ1QzIwLjk2NDggMjAuODI0MiAyMSAyMC43MzQ0IDIxIDIwLjYyNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiJdLCJzb3VyY2VSb290IjoiIn0=