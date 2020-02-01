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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blockeditor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/beui.js":
/*!*********************!*\
  !*** ./src/beui.js ***!
  \*********************/
/*! exports provided: icons, mycyan, Ask, tooltips, textTools, addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTools", function() { return textTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });
var icons = {};

icons.bold = __webpack_require__(/*! ./svg/text_bold.svg */ "./src/svg/text_bold.svg");
icons.italic = __webpack_require__(/*! ./svg/text_italic.svg */ "./src/svg/text_italic.svg");
icons.underline = __webpack_require__(/*! ./svg/text_underline.svg */ "./src/svg/text_underline.svg");
icons.strike = __webpack_require__(/*! ./svg/text_strike.svg */ "./src/svg/text_strike.svg");
icons.sup = __webpack_require__(/*! ./svg/text_sup.svg */ "./src/svg/text_sup.svg");
icons.sub = __webpack_require__(/*! ./svg/text_sub.svg */ "./src/svg/text_sub.svg");
icons.link = __webpack_require__(/*! ./svg/text_link.svg */ "./src/svg/text_link.svg");


var mycyan = "#3ED9E3";

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
        b.style.overflow = "hidden";
        b.addEventListener("mousedown", func);
        b.classList.add("text_toolbox");
        b.style.cursor = "pointer";
        b.style.padding = "4px";
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

    document.body.addEventListener("click", function (e) {
        //console.log(e.target.getAttribute("contenteditable"));
        if (e.target.getAttribute("contenteditable") && !e.target.dataset.no_text_toolbox) {
            //console.log("click" , ttools);
            let tgt = e.target.getBoundingClientRect();
            ttools.style.left = tgt.left + "px";
            ttools.style.display = "flex";
            let tthe = ttools.getBoundingClientRect().height;
            ttools.style.top = (tgt.top - tthe + window.scrollY) + "px";

        } else if (e.target.classList.contains("text_toolbox")) {
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
    button.style.color = mycyan;
    button.style.opacity = "0";
    button.style.display = "block"
    //button.style.borderRadius = "12px";
    button.style.transition = "opacity .5s";
    button.dataset.hint = "Add new block";
    button.innerHTML = "+";


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
                icon: "🡡",
                handler: function () { ed.moveUp(block.dataset.block_id) }
            },
            {
                label: "move block down",
                icon: "🡣",
                handler: function () { ed.moveDown(block.dataset.block_id) }
            },
            {
                label: "delete block",
                icon: "✕",
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
    ctrls.style.backgroundColor = mycyan;
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
        mi.style.cursor = "pointer";
        mi.addEventListener("click", function () {
            e.handler(block.dataset.block_id);
        });
        mi.dataset.hint = e.label;
        ctrls.appendChild(mi);
    });

    block.appendChild(ctrls)

}

/***/ }),

/***/ "./src/blockeditor.js":
/*!****************************!*\
  !*** ./src/blockeditor.js ***!
  \****************************/
/*! exports provided: BlockEditor, makeTypicalEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEditor", function() { return BlockEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTypicalEditor", function() { return makeTypicalEditor; });
/* harmony import */ var _beui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beui */ "./src/beui.js");


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

    this.upload = function (f) {
        return new Promise(function (resolve, reject) {
            resolve({ url: "kitty.jpeg" });
        })
    }

    this.setUploadFunction = function (func) {
        this.upload = func;
        return this;
    }

    this.start = function (blocks) {
        //add sero block

        //this.element.innerHTML = "";
        this.blocks = [];
        //console.log(this.editors)
        //add menu
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
        //

        let zero = document.createElement("div");
        zero.classList.add("starting_block");
        zero.style.height = "8px";
        zero.style.wifth = "100%";
        zero.style.marginLeft = "-32px";
        zero.dataset.block_id = "start";

        _beui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](zero, this.addMenu);
        
        mine.appendChild(zero);
        //
        if (blocks) {
            blocks.forEach(e => this.addNewBlockFromSource(e));
        }
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

        //create DOM element for editor

        // domblock.appendChild(block.element);


        //add corresponding dom el. to container
        //if(start){

        //}
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

    this.save = function () {
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
            console.log(e);
            e.style.marginLeft = "8px";
        }
        if (e.nodeName == "Z") {
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
    tbx.style.display = "block";
    tbx.style.padding = "4px";

    block.element.parentNode.appendChild(tbx); //add to editor_item, !not! block content container
    block.addToToolbar = function (el) {
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
    }
    block.addToEditor = function (e) {
        ep.appendChild(e);
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
        if (e.keyCode == 13) {
            console.log("enter pressed", e.shiftKey == true);
            if (e.shiftKey) {
                //
            } else {
                let np = blc.editor.addNewBlock("paragraph", {
                    "text": ""
                }, blc.id);
                //np = newly inserted block id
                blc.editor.blocks[np]._p.focus();
                e.preventDefault();
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
    srcinput.addEventListener("keyup", function (e) { pimg.src = this.value; })
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
    noresize.onclick = function () { if (this.checked) { stretched.checked = false } };
    noresize.checked = data && (data.noresize || data.withbackground);
    /////left
    let llabel = document.createElement("label");
    llabel.innerHTML = "left"
    let left = document.createElement("input");
    left.type = "checkbox";
    left.onclick = function () { if (this.checked) { right.checked = false; stretched.checked = false } };
    left.checked = data && data.left;
    ////right
    let rlabel = document.createElement("label");
    rlabel.innerHTML = "right"
    let right = document.createElement("input");
    right.type = "checkbox";
    right.onclick = function () { if (this.checked) { left.checked = false; stretched.checked = false } }
    right.checked = data && data.right;

     ////border
     let blabel = document.createElement("label");
     blabel.innerHTML = "border"
     let border = document.createElement("input");
     border.type = "checkbox";
     border.onclick = function () { if(this.checked){pimg.classList.add("bordered")}else{pimg.classList.remove("bordered")} }
     border.checked = data && data.border;

    blc.addToEditor(templates.formRow([stretchlabel, stretched,
        nrlabel, noresize,
        llabel, left,
        rlabel, right,
    blabel,border]));

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
        icon: "«»",
        make: constructors.blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: "pic",
        make: constructors.image,
        label: 'Image'
    });

    return editor;
}

/***/ }),

/***/ "./src/svg/text_bold.svg":
/*!*******************************!*\
  !*** ./src/svg/text_bold.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.3068 19.3242C10.8674 19.5742 11.3977 19.6992 11.8977 19.6992C14.7462 19.6992 16.1705 18.3906 16.1705 15.7734C16.1705 14.8828 16.0152 14.1797 15.7045 13.6641C15.5 13.3203 15.267 13.0312 15.0057 12.7969C14.7443 12.5625 14.4886 12.3809 14.2386 12.252C13.9886 12.123 13.6837 12.0254 13.3239 11.959C12.964 11.8926 12.6458 11.8516 12.3693 11.8359C12.0928 11.8203 11.7348 11.8125 11.2955 11.8125C10.7424 11.8125 10.3598 11.8516 10.1477 11.9297C10.1477 12.3438 10.1458 12.9648 10.142 13.793C10.1383 14.6211 10.1364 15.2383 10.1364 15.6445C10.1364 15.707 10.1326 15.9707 10.125 16.4355C10.1174 16.9004 10.1155 17.2773 10.1193 17.5664C10.1231 17.8555 10.1402 18.1816 10.1705 18.5449C10.2008 18.9082 10.2462 19.168 10.3068 19.3242ZM10.1477 10.582C10.4659 10.6367 10.8788 10.6641 11.3864 10.6641C12.0076 10.6641 12.5492 10.6133 13.0114 10.5117C13.4735 10.4102 13.8902 10.2363 14.2614 9.99023C14.6326 9.74414 14.9148 9.39453 15.108 8.94141C15.3011 8.48828 15.3977 7.93359 15.3977 7.27734C15.3977 6.73047 15.2879 6.25195 15.0682 5.8418C14.8485 5.43164 14.5492 5.11133 14.1705 4.88086C13.7917 4.65039 13.3826 4.48047 12.9432 4.37109C12.5038 4.26172 12.0341 4.20703 11.5341 4.20703C11.1553 4.20703 10.6629 4.25781 10.0568 4.35938C10.0568 4.75 10.072 5.33984 10.1023 6.12891C10.1326 6.91797 10.1477 7.51172 10.1477 7.91016C10.1477 8.12109 10.1458 8.43359 10.142 8.84766C10.1383 9.26172 10.1364 9.57031 10.1364 9.77344C10.1364 10.1328 10.1402 10.4023 10.1477 10.582ZM4 21L4.02273 19.8984C4.13636 19.8672 4.45833 19.8047 4.98864 19.7109C5.51894 19.6172 5.92045 19.5117 6.19318 19.3945C6.24621 19.3008 6.29356 19.1953 6.33523 19.0781C6.37689 18.9609 6.40909 18.8301 6.43182 18.6855C6.45455 18.541 6.47538 18.4141 6.49432 18.3047C6.51326 18.1953 6.52462 18.0488 6.52841 17.8652C6.5322 17.6816 6.53409 17.5488 6.53409 17.4668V16.6992C6.53409 9.02734 6.45076 5.02344 6.28409 4.6875C6.25379 4.625 6.17045 4.56836 6.03409 4.51758C5.89773 4.4668 5.72917 4.42383 5.52841 4.38867C5.32765 4.35352 5.14015 4.32617 4.96591 4.30664C4.79167 4.28711 4.60795 4.26953 4.41477 4.25391C4.22159 4.23828 4.10606 4.22656 4.06818 4.21875L4.02273 3.24609C4.76515 3.23047 6.05303 3.18555 7.88636 3.11133C9.7197 3.03711 11.1326 3 12.125 3C12.2992 3 12.5568 3.00195 12.8977 3.00586C13.2386 3.00977 13.4962 3.01172 13.6705 3.01172C14.2008 3.01172 14.7178 3.0625 15.2216 3.16406C15.7254 3.26562 16.2121 3.42969 16.6818 3.65625C17.1515 3.88281 17.5606 4.16016 17.9091 4.48828C18.2576 4.81641 18.5379 5.22461 18.75 5.71289C18.9621 6.20117 19.0682 6.73828 19.0682 7.32422C19.0682 7.73047 19.0057 8.10352 18.8807 8.44336C18.7557 8.7832 18.608 9.06445 18.4375 9.28711C18.267 9.50977 18.0227 9.73438 17.7045 9.96094C17.3864 10.1875 17.1098 10.3633 16.875 10.4883C16.6402 10.6133 16.322 10.7695 15.9205 10.957C17.0871 11.2305 18.0587 11.7539 18.8352 12.5273C19.6117 13.3008 20 14.2695 20 15.4336C20 16.2148 19.8674 16.916 19.6023 17.5371C19.3371 18.1582 18.983 18.668 18.5398 19.0664C18.0966 19.4648 17.5739 19.7988 16.9716 20.0684C16.3693 20.3379 15.75 20.5273 15.1136 20.6367C14.4773 20.7461 13.8106 20.8008 13.1136 20.8008C12.7803 20.8008 12.2803 20.7891 11.6136 20.7656C10.947 20.7422 10.447 20.7305 10.1136 20.7305C9.31061 20.7305 8.14773 20.7734 6.625 20.8594C5.10227 20.9453 4.22727 20.9922 4 21Z\" fill=\"black\"></path></svg>"

/***/ }),

/***/ "./src/svg/text_italic.svg":
/*!*********************************!*\
  !*** ./src/svg/text_italic.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 20.9766L6.19922 19.9805C6.37109 19.9258 6.61133 19.8613 6.91992 19.7871C7.22852 19.7129 7.50977 19.6387 7.76367 19.5645C8.01758 19.4902 8.25 19.3984 8.46094 19.2891C8.67969 19.0156 8.83984 18.6211 8.94141 18.1055C8.94922 18.0508 9.19141 16.9219 9.66797 14.7188C10.1445 12.5156 10.5898 10.3926 11.0039 8.34961C11.418 6.30664 11.6211 5.14844 11.6133 4.875V4.58203C11.4258 4.48047 11.2129 4.4082 10.9746 4.36523C10.7363 4.32227 10.4648 4.29102 10.1602 4.27148C9.85547 4.25195 9.62891 4.23047 9.48047 4.20703L9.70312 3C9.96094 3.01562 10.4297 3.04102 11.1094 3.07617C11.7891 3.11133 12.373 3.13867 12.8613 3.1582C13.3496 3.17773 13.8203 3.1875 14.2734 3.1875C14.6484 3.1875 15.0332 3.17773 15.4277 3.1582C15.8223 3.13867 16.2949 3.11133 16.8457 3.07617C17.3965 3.04102 17.7812 3.01562 18 3C17.9609 3.30469 17.8867 3.65234 17.7773 4.04297C17.543 4.12109 17.1465 4.23242 16.5879 4.37695C16.0293 4.52148 15.6055 4.65234 15.3164 4.76953C15.2539 4.91797 15.1992 5.08398 15.1523 5.26758C15.1055 5.45117 15.0703 5.60742 15.0469 5.73633C15.0234 5.86523 14.9941 6.04297 14.959 6.26953C14.9238 6.49609 14.8984 6.66016 14.8828 6.76172C14.6719 7.91797 14.3301 9.55664 13.8574 11.6777C13.3848 13.7988 13.082 15.1875 12.9492 15.8438C12.9336 15.9141 12.8828 16.1406 12.7969 16.5234C12.7109 16.9062 12.6328 17.2578 12.5625 17.5781C12.4922 17.8984 12.4297 18.2246 12.375 18.5566C12.3203 18.8887 12.2969 19.1133 12.3047 19.2305L12.3164 19.4414C12.4492 19.4727 13.1719 19.5938 14.4844 19.8047C14.4609 20.1484 14.3984 20.5352 14.2969 20.9648C14.2109 20.9648 14.084 20.9707 13.916 20.9824C13.748 20.9941 13.6211 21 13.5352 21C13.3086 21 12.9688 20.9609 12.5156 20.8828C12.0625 20.8047 11.7266 20.7656 11.5078 20.7656C10.4297 20.75 9.625 20.7422 9.09375 20.7422C8.69531 20.7422 8.13672 20.7773 7.41797 20.8477C6.69922 20.918 6.22656 20.9609 6 20.9766Z\" fill=\"black\"></path></svg>"

/***/ }),

/***/ "./src/svg/text_link.svg":
/*!*******************************!*\
  !*** ./src/svg/text_link.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.1176 15.7647C18.1176 15.5033 18.0261 15.281 17.8431 15.098L15.8039 13.0588C15.6209 12.8758 15.3987 12.7843 15.1373 12.7843C14.8627 12.7843 14.6275 12.8889 14.4314 13.098C14.451 13.1176 14.5131 13.1781 14.6176 13.2794C14.7222 13.3807 14.7925 13.451 14.8284 13.4902C14.8644 13.5294 14.9134 13.5915 14.9755 13.6765C15.0376 13.7614 15.0801 13.8448 15.1029 13.9265C15.1258 14.0082 15.1373 14.098 15.1373 14.1961C15.1373 14.4575 15.0458 14.6797 14.8627 14.8627C14.6797 15.0458 14.4575 15.1373 14.1961 15.1373C14.098 15.1373 14.0082 15.1258 13.9265 15.1029C13.8448 15.0801 13.7614 15.0376 13.6765 14.9755C13.5915 14.9134 13.5294 14.8644 13.4902 14.8284C13.451 14.7925 13.3807 14.7222 13.2794 14.6176C13.1781 14.5131 13.1176 14.451 13.098 14.4314C12.8824 14.634 12.7745 14.8725 12.7745 15.1471C12.7745 15.4085 12.866 15.6307 13.049 15.8137L15.0686 17.8431C15.2451 18.0196 15.4673 18.1078 15.7353 18.1078C15.9967 18.1078 16.219 18.0229 16.402 17.8529L17.8431 16.4216C18.0261 16.2386 18.1176 16.0196 18.1176 15.7647ZM11.2255 8.85294C11.2255 8.5915 11.134 8.36928 10.951 8.18627L8.93137 6.15686C8.74837 5.97386 8.52614 5.88235 8.26471 5.88235C8.0098 5.88235 7.78758 5.97059 7.59804 6.14706L6.15686 7.57843C5.97386 7.76144 5.88235 7.98039 5.88235 8.23529C5.88235 8.49673 5.97386 8.71895 6.15686 8.90196L8.19608 10.9412C8.37255 11.1176 8.59477 11.2059 8.86275 11.2059C9.13726 11.2059 9.37255 11.1046 9.56863 10.902C9.54902 10.8824 9.48693 10.8219 9.38235 10.7206C9.27778 10.6193 9.20752 10.549 9.17157 10.5098C9.13562 10.4706 9.0866 10.4085 9.02451 10.3235C8.96242 10.2386 8.91993 10.1552 8.89706 10.0735C8.87418 9.99183 8.86275 9.90196 8.86275 9.80392C8.86275 9.54248 8.95425 9.32026 9.13726 9.13726C9.32026 8.95425 9.54248 8.86275 9.80392 8.86275C9.90196 8.86275 9.99183 8.87418 10.0735 8.89706C10.1552 8.91993 10.2386 8.96242 10.3235 9.02451C10.4085 9.0866 10.4706 9.13562 10.5098 9.17157C10.549 9.20752 10.6193 9.27778 10.7206 9.38235C10.8219 9.48693 10.8824 9.54902 10.902 9.56863C11.1176 9.36601 11.2255 9.12745 11.2255 8.85294ZM20 15.7647C20 16.549 19.7222 17.2124 19.1667 17.7549L17.7255 19.1863C17.183 19.7288 16.5196 20 15.7353 20C14.9444 20 14.2778 19.7222 13.7353 19.1667L11.7157 17.1373C11.1732 16.5948 10.902 15.9314 10.902 15.1471C10.902 14.3431 11.1895 13.6601 11.7647 13.098L10.902 12.2353C10.3399 12.8105 9.66013 13.098 8.86275 13.098C8.07843 13.098 7.41176 12.8235 6.86275 12.2745L4.82353 10.2353C4.27451 9.68627 4 9.01961 4 8.23529C4 7.45098 4.27778 6.78758 4.83333 6.2451L6.27451 4.81373C6.81699 4.27124 7.48039 4 8.26471 4C9.05556 4 9.72222 4.27778 10.2647 4.83333L12.2843 6.86275C12.8268 7.40523 13.098 8.06863 13.098 8.85294C13.098 9.65686 12.8105 10.3399 12.2353 10.902L13.098 11.7647C13.6601 11.1895 14.3399 10.902 15.1373 10.902C15.9216 10.902 16.5882 11.1765 17.1373 11.7255L19.1765 13.7647C19.7255 14.3137 20 14.9804 20 15.7647Z\" fill=\"black\"></path></svg>"

/***/ }),

/***/ "./src/svg/text_strike.svg":
/*!*********************************!*\
  !*** ./src/svg/text_strike.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.7983 12C21.9086 12 21.9992 12.0352 22.0701 12.1055C22.141 12.1758 22.1765 12.2656 22.1765 12.375V13.125C22.1765 13.2344 22.141 13.3242 22.0701 13.3945C21.9992 13.4648 21.9086 13.5 21.7983 13.5H1.37815C1.26786 13.5 1.17726 13.4648 1.10636 13.3945C1.03545 13.3242 1 13.2344 1 13.125V12.375C1 12.2656 1.03545 12.1758 1.10636 12.1055C1.17726 12.0352 1.26786 12 1.37815 12H21.7983ZM6.70772 11.25C6.48713 10.9766 6.28624 10.6641 6.10504 10.3125C5.72689 9.54688 5.53782 8.8125 5.53782 8.10938C5.53782 6.69531 6.06565 5.48828 7.12132 4.48828C8.16912 3.49609 9.71717 3 11.7655 3C12.1594 3 12.8172 3.07422 13.739 3.22266C14.2589 3.31641 14.9561 3.50391 15.8306 3.78516C15.9094 4.08203 15.9921 4.54297 16.0788 5.16797C16.1891 6.12891 16.2442 6.84375 16.2442 7.3125C16.2442 7.45312 16.2245 7.62891 16.1851 7.83984L16.0433 7.875L15.0507 7.80469L14.8852 7.78125C14.4913 6.61719 14.0856 5.81641 13.6681 5.37891C12.9748 4.66797 12.1476 4.3125 11.1864 4.3125C10.2883 4.3125 9.57143 4.54297 9.03571 5.00391C8.50788 5.45703 8.24396 6.02734 8.24396 6.71484C8.24396 7.28516 8.50394 7.83203 9.0239 8.35547C9.54385 8.87891 10.6429 9.38281 12.3209 9.86719C12.8645 10.0234 13.546 10.2812 14.3653 10.6406C14.8222 10.8594 15.1964 11.0625 15.4879 11.25H6.70772ZM12.6991 14.25H17.5559C17.6111 14.5547 17.6387 14.9141 17.6387 15.3281C17.6387 16.1953 17.4772 17.0234 17.1541 17.8125C16.973 18.25 16.6933 18.6562 16.3151 19.0312C16.0236 19.3047 15.5943 19.6211 15.027 19.9805C14.3968 20.3555 13.7941 20.6133 13.219 20.7539C12.5888 20.918 11.7891 21 10.8201 21C9.92201 21 9.15389 20.9102 8.51576 20.7305L6.86134 20.2617C6.41229 20.1367 6.12868 20.0273 6.0105 19.9336C5.94748 19.8711 5.91597 19.7852 5.91597 19.6758V19.5234C5.91597 18.6797 5.90809 18.0703 5.89233 17.6953C5.88445 17.4609 5.88445 17.1953 5.89233 16.8984L5.91597 16.4648V15.9492L7.12132 15.9258C7.2395 16.1914 7.35767 16.4688 7.47584 16.7578C7.59401 17.0469 7.68264 17.2656 7.74173 17.4141C7.80081 17.5625 7.85005 17.668 7.88944 17.7305C8.16518 18.1758 8.4803 18.543 8.83482 18.832C9.17358 19.1133 9.58718 19.3359 10.0756 19.5C10.5404 19.6719 11.0604 19.7578 11.6355 19.7578C12.1397 19.7578 12.6872 19.6523 13.2781 19.4414C13.8847 19.2383 14.3653 18.9023 14.7198 18.4336C15.0901 17.957 15.2752 17.4531 15.2752 16.9219C15.2752 16.2656 14.9561 15.6523 14.318 15.082C14.0502 14.8555 13.5105 14.5781 12.6991 14.25Z\" fill=\"black\"></path></svg>"

/***/ }),

/***/ "./src/svg/text_sub.svg":
/*!******************************!*\
  !*** ./src/svg/text_sub.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 4.55556C7 4.40509 7.05566 4.27489 7.16699 4.16493C7.27832 4.05498 7.41016 4 7.5625 4L15.4375 4C15.5898 4 15.7217 4.05498 15.833 4.16493C15.9443 4.27488 16 4.40509 16 4.55556C16 4.70602 15.9443 4.83623 15.833 4.94618L11.8955 8.83507C11.7842 8.94502 11.6523 9 11.5 9C11.3477 9 11.2158 8.94502 11.1045 8.83507L7.16699 4.94618C7.05566 4.83623 7 4.70602 7 4.55556Z\" fill=\"black\"></path><path d=\"M14.3955 21H9.43457V19.9258L11.7197 17.5234C12.2829 16.8822 12.5645 16.3727 12.5645 15.9951C12.5645 15.6891 12.4977 15.4564 12.3643 15.2969C12.2308 15.1374 12.0371 15.0576 11.7832 15.0576C11.5326 15.0576 11.3291 15.165 11.1729 15.3799C11.0166 15.5915 10.9385 15.8568 10.9385 16.1758H9.28809C9.28809 15.7396 9.39714 15.3376 9.61523 14.9697C9.83333 14.5986 10.1361 14.3089 10.5234 14.1006C10.9108 13.8923 11.3438 13.7881 11.8223 13.7881C12.5905 13.7881 13.1813 13.9655 13.5947 14.3203C14.0114 14.6751 14.2197 15.1846 14.2197 15.8486C14.2197 16.1286 14.1676 16.402 14.0635 16.6689C13.9593 16.9326 13.7965 17.2109 13.5752 17.5039C13.3571 17.7936 13.0039 18.1826 12.5156 18.6709L11.5977 19.7305H14.3955V21Z\" fill=\"black\"></path></svg>"

/***/ }),

/***/ "./src/svg/text_sup.svg":
/*!******************************!*\
  !*** ./src/svg/text_sup.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6493 4.1875V4.87305C10.6493 4.92383 10.6284 4.9668 10.5867 5.00195C10.5449 5.03711 10.4955 5.05469 10.4384 5.05469H8.47396V9.8125C8.47396 9.86328 8.45419 9.90723 8.41463 9.94434C8.37508 9.98145 8.32674 10 8.26961 10H7.3797C7.32257 10 7.27313 9.98242 7.23138 9.94727C7.18963 9.91211 7.16875 9.86719 7.16875 9.8125V5.05469H5.21094C5.15381 5.05469 5.10437 5.03711 5.06262 5.00195C5.02087 4.9668 5 4.92383 5 4.87305V4.1875C5 4.13281 5.01978 4.08789 5.05933 4.05273C5.09888 4.01758 5.14942 4 5.21094 4H10.4384C10.4955 4 10.5449 4.01855 10.5867 4.05566C10.6284 4.09277 10.6493 4.13672 10.6493 4.1875ZM17.4918 4.16992L17.9993 9.80078C18.0037 9.85156 17.9862 9.89844 17.9466 9.94141C17.9027 9.98047 17.8521 10 17.795 10H16.9117C16.8589 10 16.8128 9.9834 16.7732 9.9502C16.7337 9.91699 16.7117 9.87695 16.7073 9.83008L16.4041 6.38477L15.1582 8.875C15.123 8.94922 15.0593 8.98633 14.967 8.98633H14.176C14.0881 8.98633 14.0244 8.94922 13.9848 8.875L12.7456 6.37305L12.4489 9.83008C12.4445 9.87695 12.4225 9.91699 12.383 9.9502C12.3434 9.9834 12.2973 10 12.2446 10H11.3546C11.2975 10 11.247 9.98047 11.203 9.94141C11.1635 9.90234 11.1437 9.85547 11.1437 9.80078L11.6579 4.16992C11.6623 4.12305 11.6842 4.08301 11.7238 4.0498C11.7633 4.0166 11.8095 4 11.8622 4H12.7983C12.8862 4 12.9499 4.03711 12.9895 4.11133L14.4397 7.1582C14.4836 7.25195 14.5276 7.35156 14.5715 7.45703C14.5847 7.42969 14.6056 7.38184 14.6341 7.31348C14.6627 7.24512 14.6858 7.19336 14.7034 7.1582L16.1602 4.11133C16.1997 4.03711 16.2635 4 16.3514 4H17.2808C17.3379 4 17.3863 4.0166 17.4258 4.0498C17.4654 4.08301 17.4874 4.12305 17.4918 4.16992Z\" fill=\"black\"></path><path d=\"M16 20.4444C16 20.5949 15.9443 20.7251 15.833 20.8351C15.7217 20.945 15.5898 21 15.4375 21H7.5625C7.41016 21 7.27832 20.945 7.16699 20.8351C7.05566 20.7251 7 20.5949 7 20.4444C7 20.294 7.05566 20.1638 7.16699 20.0538L11.1045 16.1649C11.2158 16.055 11.3477 16 11.5 16C11.6523 16 11.7842 16.055 11.8955 16.1649L15.833 20.0538C15.9443 20.1638 16 20.294 16 20.4444Z\" fill=\"black\"></path></svg>"

/***/ }),

/***/ "./src/svg/text_underline.svg":
/*!************************************!*\
  !*** ./src/svg/text_underline.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5625 4.11328C3.27344 4.09766 3.09766 4.08203 3.03516 4.06641L3 3.03516C3.10156 3.02734 3.25781 3.02344 3.46875 3.02344C3.9375 3.02344 4.375 3.03906 4.78125 3.07031C5.8125 3.125 6.46094 3.15234 6.72656 3.15234C7.39844 3.15234 8.05469 3.14062 8.69531 3.11719C9.60156 3.08594 10.1719 3.06641 10.4062 3.05859C10.8438 3.05859 11.1797 3.05078 11.4141 3.03516L11.4023 3.19922L11.4258 3.94922V4.05469C10.957 4.125 10.4727 4.16016 9.97266 4.16016C9.50391 4.16016 9.19531 4.25781 9.04688 4.45312C8.94531 4.5625 8.89453 5.07812 8.89453 6C8.89453 6.10156 8.89648 6.22852 8.90039 6.38086C8.9043 6.5332 8.90625 6.63281 8.90625 6.67969L8.91797 9.36328L9.08203 12.6445C9.12891 13.6133 9.32812 14.4023 9.67969 15.0117C9.95312 15.4727 10.3281 15.832 10.8047 16.0898C11.4922 16.457 12.1836 16.6406 12.8789 16.6406C13.6914 16.6406 14.4375 16.5312 15.1172 16.3125C15.5547 16.1719 15.9414 15.9727 16.2773 15.7148C16.6523 15.4336 16.9062 15.1836 17.0391 14.9648C17.3203 14.5273 17.5273 14.082 17.6602 13.6289C17.8242 13.0586 17.9062 12.1641 17.9062 10.9453C17.9062 10.3281 17.8926 9.82812 17.8652 9.44531C17.8379 9.0625 17.7949 8.58398 17.7363 8.00977C17.6777 7.43555 17.625 6.8125 17.5781 6.14062L17.5312 5.44922C17.4922 4.92578 17.3984 4.58203 17.25 4.41797C16.9844 4.14453 16.6836 4.01172 16.3477 4.01953L15.1758 4.04297L15.0117 4.00781L15.0352 3H16.0195L18.4219 3.11719C19.0156 3.14062 19.7812 3.10156 20.7188 3L20.9297 3.02344C20.9766 3.32031 21 3.51953 21 3.62109C21 3.67578 20.9844 3.79688 20.9531 3.98438C20.6016 4.07812 20.2734 4.12891 19.9688 4.13672C19.3984 4.22266 19.0898 4.28906 19.043 4.33594C18.9258 4.45312 18.8672 4.61328 18.8672 4.81641C18.8672 4.87109 18.873 4.97656 18.8848 5.13281C18.8965 5.28906 18.9023 5.41016 18.9023 5.49609C18.9648 5.64453 19.0508 7.19141 19.1602 10.1367C19.207 11.6602 19.1484 12.8477 18.9844 13.6992C18.8672 14.293 18.707 14.7695 18.5039 15.1289C18.207 15.6367 17.7695 16.1172 17.1914 16.5703C16.6055 17.0156 15.8945 17.3633 15.0586 17.6133C14.207 17.8711 13.2109 18 12.0703 18C10.7656 18 9.65625 17.8203 8.74219 17.4609C7.8125 17.0938 7.11328 16.6172 6.64453 16.0312C6.16797 15.4375 5.84375 14.6758 5.67188 13.7461C5.54688 13.1211 5.48438 12.1953 5.48438 10.9688V7.06641C5.48438 5.59766 5.41797 4.76562 5.28516 4.57031C5.08984 4.28906 4.51562 4.13672 3.5625 4.11328ZM21 20.625V19.875C21 19.7656 20.9648 19.6758 20.8945 19.6055C20.8242 19.5352 20.7344 19.5 20.625 19.5H3.375C3.26562 19.5 3.17578 19.5352 3.10547 19.6055C3.03516 19.6758 3 19.7656 3 19.875V20.625C3 20.7344 3.03516 20.8242 3.10547 20.8945C3.17578 20.9648 3.26562 21 3.375 21H20.625C20.7344 21 20.8242 20.9648 20.8945 20.8945C20.9648 20.8242 21 20.7344 21 20.625Z\" fill=\"black\"></path></svg>"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdmcvdGV4dF9ib2xkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3RleHRfaXRhbGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3RleHRfbGluay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3N0cmlrZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3N1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3N1cC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3VuZGVybGluZS5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87O0FBRVAsYUFBYSxtQkFBTyxDQUFDLG9EQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsd0RBQXVCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLDhEQUEwQjtBQUNwRCxlQUFlLG1CQUFPLENBQUMsd0RBQXVCO0FBQzlDLFlBQVksbUJBQU8sQ0FBQyxrREFBb0I7QUFDeEMsWUFBWSxtQkFBTyxDQUFDLGtEQUFvQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMsb0RBQXFCOzs7QUFHbkM7O0FBRUE7QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWEsT0FBTztBQUNwQyxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCLGdDQUFnQztBQUN2Ryw4Q0FBOEMsZ0NBQWdDLCtCQUErQjs7QUFFN0csK0NBQStDLHdCQUF3QixnQ0FBZ0M7QUFDdkcsOENBQThDLGdDQUFnQywrQkFBK0I7Ozs7QUFJN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ3ZVQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFdEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOzs7QUFHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsa0JBQWtCO0FBQ2pDLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QyxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsbURBQWdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBVztBQUNuQixRQUFRLCtDQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsWUFBWSxtREFBZ0I7QUFDNUIsWUFBWSxzREFBbUI7O0FBRS9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0Q0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNENBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHVCQUF1QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CLDRCQUE0QjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CLHVCQUF1Qiw0QkFBNEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9CQUFvQixzQkFBc0IsNEJBQTRCO0FBQ3ZHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCLCtCQUErQixLQUFLLGtDQUFrQztBQUMzSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDOzs7Ozs7Ozs7OztBQ3p1QkEsOHpHOzs7Ozs7Ozs7OztBQ0FBLDg2RDs7Ozs7Ozs7Ozs7QUNBQSwwNkY7Ozs7Ozs7Ozs7O0FDQUEsbTdFOzs7Ozs7Ozs7OztBQ0FBLG90Qzs7Ozs7Ozs7Ozs7QUNBQSw4bEU7Ozs7Ozs7Ozs7O0FDQUEsdXVGIiwiZmlsZSI6ImJsb2NrZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja2VkaXRvci5qc1wiKTtcbiIsImV4cG9ydCB2YXIgaWNvbnMgPSB7fTtcblxuaWNvbnMuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2JvbGQuc3ZnXCIpO1xuaWNvbnMuaXRhbGljID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfaXRhbGljLnN2Z1wiKTtcbmljb25zLnVuZGVybGluZSA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3VuZGVybGluZS5zdmdcIik7XG5pY29ucy5zdHJpa2UgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdHJpa2Uuc3ZnXCIpO1xuaWNvbnMuc3VwID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3VwLnN2Z1wiKTtcbmljb25zLnN1YiA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1Yi5zdmdcIik7XG5pY29ucy5saW5rID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfbGluay5zdmdcIik7XG5cblxuZXhwb3J0IHZhciBteWN5YW4gPSBcIiMzRUQ5RTNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFzayhwcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCByID0gcHJvbXB0KHByKTtcbiAgICAgICAgaWYgKHIpIHsgcmVzb2x2ZShyKSB9IGVsc2UgeyByZWplY3QoXCJObyBpbnB1dFwiKSB9O1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICBsZXQgdHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dC5zdHlsZS56SW5kZXggPSAyMDtcbiAgICB0dC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgICBsZXQgdHRpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuYXBwZW5kQ2hpbGQodHRpbik7XG4gICAgdHRpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTAwJSwgMTAwJSwgMTAwJSwgMC44KVwiO1xuICAgIHR0aW4uc3R5bGUuY29sb3IgPSBcIiM4ODg4ODhcIjtcbiAgICB0dGluLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0dGluLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XG4gICAgdHRpbi5zdHlsZS5wYWRkaW5nID0gXCI0cHggOHB4XCI7XG4gICAgdHRpbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0dGluLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XG4gICAgdHRpbi5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggMnB4IDFweCBncmF5XCI7XG4gICAgdHRpbi5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3R0b20gPSBcIjhweFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuZGF0YXNldC5oaW50KSB7XG4gICAgICAgICAgICB0dGluLmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQuaGludDtcbiAgICAgICAgICAgIC8vIHR0LnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcbiAgICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9vbHMoKSB7XG4gICAgbGV0IHR0b29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHRvb2xzLnN0eWxlLm1pbldpZHRoID0gXCIxMDBweFwiO1xuICAgIHR0b29scy5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgIC8vdHRvb2xzLnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHR0b29scy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBteWN5YW47XG4gICAgdHRvb2xzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHRvb2xzLnN0eWxlLnBhZGRpbmcgPSBcIjBweCA0cHhcIjtcbiAgICBjb25zb2xlLmxvZyhcImFwcGVuZCB0ZXh0IHRvb2xzXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dG9vbHMpO1xuICAgIC8vYnV0dG9uc1xuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihsYmwsIGZ1bmMsIGhpbnQpIHtcbiAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBiLmlubmVySFRNTCA9IGxibDtcbiAgICAgICAgYi5zdHlsZS53aWR0aCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmhlaWdodCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmMpO1xuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgICAgIGIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIGIuc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XG4gICAgICAgIGxldCBzdiA9IGIucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgc3Yuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiOy8vLnN0eWxlLnBvaW50ZXJFdmVudHMoXCJub25lXCIpO1xuICAgICAgICBpZiAoaGludCkgeyBiLmRhdGFzZXQuaGludCA9IGhpbnQgfTtcbiAgICAgICAgdHRvb2xzLmFwcGVuZENoaWxkKGIpO1xuICAgIH1cblxuICAgIGFkZEJ1dHRvbihpY29ucy5ib2xkLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJvbGRcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiQm9sZFwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5pdGFsaWMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRhbGljXCIsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIml0YWxpY1wiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiSXRhbGljXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLnVuZGVybGluZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJVbmRlcmxpbmVcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3RyaWtlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHJpa2VUaHJvdWdoXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdHJpa2VcIilcbiAgICAvKlxuICAgIGFkZEJ1dHRvbihcInNtYWxsXCIgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzbWFsbFwiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZGVjcmVhc2VGb250U2l6ZVwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgKi9cbiAgICBhZGRCdXR0b24oaWNvbnMuc3VwLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3VwZXJzY3JpcHRcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN1cGVyc2NyaXB0XCIpXG4gICAgYWRkQnV0dG9uKGljb25zLnN1YiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1YnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3Vic2NyaXB0XCIpXG4gICAgYWRkQnV0dG9uKGljb25zLmxpbmssIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIEFzayhcIkVudGVyIFVSTFwiKVxuICAgICAgICAgICAgLnRoZW4ociA9PiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNyZWF0ZUxpbmtcIiwgZmFsc2UsIHVuZXNjYXBlKHIpKSlcbiAgICAgICAgICAgIC5jYXRjaChyPT5jb25zb2xlLmxvZyhyKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIk1ha2UgbGlua1wiKVxuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS5sZWZ0ID0gdGd0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgbGV0IHR0aGUgPSB0dG9vbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLnRvcCA9ICh0Z3QudG9wIC0gdHRoZSArIHdpbmRvdy5zY3JvbGxZKSArIFwicHhcIjtcblxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRfdG9vbGJveFwiKSkge1xuICAgICAgICAgICAgLy90dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGJsb2NrLCBtZW51KSB7XG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vbWVudVxuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgIGRkLnN0eWxlLnRvcCA9IFwiMTAwJVwiO1xuICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBkZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLm1heFdpZHRoID0gXCIxMDBweFwiO1xuICAgIGRkLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCA2cHggcmdiYSgwJSwgMCUsIDAlLCAwLjMwNClcIlxuICAgIC8vZGQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JheVwiXG4gICAgbWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlbGVtZW50Lmljb247XG4gICAgICAgIC8vbWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBtaS5zdHlsZS5wYWRkaW5nID0gXCIycHhcIlxuICAgICAgICBtaS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBtaS5zdHlsZS5tYXJnaW4gPSBcIjJweFwiO1xuICAgICAgICBtaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgIG1pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZGQuYXBwZW5kQ2hpbGQobWkpXG4gICAgfSk7XG4gICAgLy9cbiAgICBibG9jay5hcHBlbmRDaGlsZChkZCk7XG5cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGRvd25cIik7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTAwJSwgMTAwJSwgMTAwJSwgMC4wMTEpXCI7XG4gICAgYnV0dG9uLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gbXljeWFuO1xuICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAvL2J1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcbiAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAuNXNcIjtcbiAgICBidXR0b24uZGF0YXNldC5oaW50ID0gXCJBZGQgbmV3IGJsb2NrXCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrQ29udHJvbHMoYmxvY2ssIGl0ZW1zLCBlZCkge1xuICAgIGlmICghaXRlbXMgJiYgZWQpIHtcbiAgICAgICAgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayB1cFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwi8J+hoVwiLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgZWQubW92ZVVwKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCLwn6GjXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcImRlbGV0ZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwi4pyVXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5yZW1vdmVCbG9jayhibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgIH1cbiAgICAvL1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBvdXJjbGFzcyA9IFwiY3RybHNcIiArIGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgbGV0IGN0cmxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKFwiY29tbW9uX2Jsb2NrX2NvbnRyb2xzXCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQob3VyY2xhc3MpO1xuICAgIGN0cmxzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XG4gICAgY3RybHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbXljeWFuO1xuICAgIGN0cmxzLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSA2OyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiIH0pO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7IGN0cmxzLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgfSk7XG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gNTsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiB9KTtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIH0pO1xuXG5cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZS5pY29uO1xuICAgICAgICBtaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGUubGFiZWw7XG4gICAgICAgIGN0cmxzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGN0cmxzKVxuXG59IiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vYmV1aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tFZGl0b3Ioe1xuICAgIHNlbGVjdG9yXG59KSB7XG4gICAgY29uc3QgbXkgPSB0aGlzO1xuICAgIC8vXG4gICAgbGV0IG1pbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbmUuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9vdXRlcl9jb250YWluZXJcIik7XG4gICAgbWluZS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGV5LmFwcGVuZENoaWxkKG1pbmUpO1xuICAgIHRoaXMuZWxlbWVudCA9IG1pbmU7IC8vdGhpcyBlbGVtZW50IGlzIG1pbmVcblxuXG4gICAgdGhpcy5lZGl0b3JzID0ge1xuICAgICAgICAvL1wiemVyb1wiOntcbiAgICAgICAgLy9cbiAgICAgICAgLy99XG4gICAgfTsgLy8gbnVsbDsgLy9wYXJhbXMuZWRpdG9yczsgLy8gIGF2YWlsYWJsZSBibG9ja3MgZWRpdG9yc1xuICAgIHRoaXMuYmxvY2tzID0gbnVsbDsgLy8gYmxvY2tzIGFycmF5XG4gICAgdGhpcy5hZGRNZW51ID0gW107XG5cbiAgICB2YXIgX2N1cnJlbnRfaWQgPSAwO1xuXG4gICAgdGhpcy5fbWFrZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY3VycmVudF9pZCsrO1xuICAgICAgICByZXR1cm4gX2N1cnJlbnRfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGxvYWQgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHVybDogXCJraXR0eS5qcGVnXCIgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRVcGxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIHRoaXMudXBsb2FkID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgLy9hZGQgc2VybyBibG9ja1xuXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lZGl0b3JzKVxuICAgICAgICAvL2FkZCBtZW51XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZWRpdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRlZCBoYW5kbGVyIGZvclwiLCBlKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBteS5lZGl0b3JzW2VdO1xuICAgICAgICAgICAgbXkuYWRkTWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHZhbC5sYWJlbCxcbiAgICAgICAgICAgICAgICBcImljb25cIjogdmFsLmljb24gPyB2YWwuaWNvbiA6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uIChyZWZpZCkge1xuICAgICAgICAgICAgICAgICAgICBteS5hZGROZXdCbG9jayhlLCBudWxsLCByZWZpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy9cblxuICAgICAgICBsZXQgemVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHplcm8uY2xhc3NMaXN0LmFkZChcInN0YXJ0aW5nX2Jsb2NrXCIpO1xuICAgICAgICB6ZXJvLnN0eWxlLmhlaWdodCA9IFwiOHB4XCI7XG4gICAgICAgIHplcm8uc3R5bGUud2lmdGggPSBcIjEwMCVcIjtcbiAgICAgICAgemVyby5zdHlsZS5tYXJnaW5MZWZ0ID0gXCItMzJweFwiO1xuICAgICAgICB6ZXJvLmRhdGFzZXQuYmxvY2tfaWQgPSBcInN0YXJ0XCI7XG5cbiAgICAgICAgVUkuYWRkUGx1c0J1dHRvbih6ZXJvLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBcbiAgICAgICAgbWluZS5hcHBlbmRDaGlsZCh6ZXJvKTtcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgYmxvY2tzLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZShlKSk7XG4gICAgICAgIH1cbiAgICAgICAgVUkudG9vbHRpcHMoKTtcbiAgICAgICAgVUkudGV4dFRvb2xzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZCA9PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgICAgIC8vIHZhciBzdGFydCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG5cblxuICAgICAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBiSUQgPSB0aGlzLl9tYWtlSUQoKTtcbiAgICAgICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgICAgICBkb21ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX3VuaXRcIik7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcblxuXG4gICAgICAgICAgICBiY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfY29udGVudF9jb250YWluZXJcIik7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKGRvbWJsb2NrLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICAgICAgVUkuYWRkQmxvY2tDb250cm9scyhkb21ibG9jaywgbnVsbCwgdGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgRE9NIGVsZW1lbnQgZm9yIGVkaXRvclxuXG4gICAgICAgIC8vIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJsb2NrLmVsZW1lbnQpO1xuXG5cbiAgICAgICAgLy9hZGQgY29ycmVzcG9uZGluZyBkb20gZWwuIHRvIGNvbnRhaW5lclxuICAgICAgICAvL2lmKHN0YXJ0KXtcblxuICAgICAgICAvL31cbiAgICAgICAgaWYgKHJlZmlkICYmIHJlZmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbWJsb2NrLCByZWZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gYklEO1xuICAgIH0gLy9hZGQgbmV3IGJsb2NrXG5cbiAgICB0aGlzLnJlbW92ZUJsb2NrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vZmluZCBibG9jayBpbmRleFxuICAgICAgICBsZXQgZWxpZHggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9hbm5vdW5jZSBkZWxldGlvbiB0byBibG9ja1xuICAgICAgICBpZiAoXCJiZWZvcmVEZWxldGVcIiBpbiB0aGlzLmJsb2Nrc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2lkXS5iZWZvcmVEZWxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBkb20gZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGVsaWR4KS5yZW1vdmUoKTtcbiAgICAgICAgLy9kZWwgYmxvY2sgZnJvbSByZWdpc3RyeVxuICAgICAgICBkZWxldGUgKHRoaXMuYmxvY2tzW2lkXSk7XG4gICAgfSAvL3JlbW92ZSBibG9ja1xuXG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZHQgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIilcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICBkdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGUuZGF0YXNldC5ibG9ja190eXBlLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogbXkuYmxvY2tzW2UuZGF0YXNldC5ibG9ja19pZF0uc2F2ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBsZXQgbXlkYXRhID0ge1xuICAgICAgICAgICAgXCJibG9ja3NcIjogZHRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFZGl0b3Igc2F2aW5nXCIsIG15ZGF0YSk7XG4gICAgICAgIHJldHVybiBteWRhdGE7XG4gICAgfVxuXG59XG5cbnZhciBjb25zdHJ1Y3RvcnMgPSB7fTtcbnZhciB0ZW1wbGF0ZXMgPSB7fVxuXG50ZW1wbGF0ZXMuZm9ybVJvdyA9IGZ1bmN0aW9uIChlbGVtZW50c19hcnJheSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWxlbWVudHNfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI4cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5ub2RlTmFtZSA9PSBcIlpcIikge1xuICAgICAgICAgICAgZS5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByb3c7XG59XG5cbnRlbXBsYXRlcy5hZGRUb29sYmFyID0gZnVuY3Rpb24gKGJsb2NrKSB7XG4gICAgbGV0IHRieCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGJ4LmNsYXNzTGlzdC5hZGQoXCJibG9ja190b29sYmFyXCIpO1xuICAgIHRieC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcbiAgICB0Ynguc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgdGJ4LnN0eWxlLmZvbnRTaXplID0gXCIuOGVtXCJcbiAgICB0Ynguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0Ynguc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XG5cbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbnRlbXBsYXRlcy50d29QYW5lbHMgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAvL2xldCBtb2RlID0gXCJwcmV2aWV3XCI7XG4gICAgbGV0IHBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfcHJldmlld19wYW5lbFwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgcHAuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgcHAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgcHAuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgIGxldCBlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRfcGFuZWxcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIGVwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIC8vZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlcC5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXAuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgLy9cbiAgICBsZXQgZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdF9idXR0b25cIik7XG4gICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICBlYnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcbiAgICBlYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZWJ0bi5zdHlsZS56SW5kZXggPSA1O1xuICAgIGVidG4uc3R5bGUucmlnaHQgPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZWRpdG1vZGUgPSBlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiO1xuICAgICAgICBpZiAoZWRpdG1vZGUpIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9cbiAgICBwcC5hcHBlbmRDaGlsZChlYnRuKTtcbiAgICAvL1xuICAgIGNvbnNvbGUubG9nKGJsb2NrKVxuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHApO1xuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXApO1xuICAgIC8vXG4gICAgYmxvY2suYWRkVG9QcmV2aWV3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfVxuICAgIGJsb2NrLmFkZFRvRWRpdG9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfVxuICAgIGJsb2NrLmdvRWRpdE1vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiUFJFVklFV1wiO1xuXG4gICAgfVxuICAgIGJsb2NrLmdvUHJldmlld01vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG5cbiAgICB9XG4gICAgYmxvY2suaXNJbkVkaXRNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpO1xuICAgIH1cblxufVxuXG5jb25zdHJ1Y3RvcnMucGFyYWdyYXBoID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIC8vYmMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG4gICAgbGV0IHJlID0gLzxkaXZ8cHxoPi9naTtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIG15OiB0aGlzLFxuICAgICAgICBpZDogaWQsIC8vISEhISEhISEhISEhISEhISEhISAgICBcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBlZGl0b3I6IGVkaXRvcixcbiAgICAgICAgX3A6IGJjLFxuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3AuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fcC5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5wID0gYmxjLmVkaXRvci5hZGROZXdCbG9jayhcInBhcmFncmFwaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSwgYmxjLmlkKTtcbiAgICAgICAgICAgICAgICAvL25wID0gbmV3bHkgaW5zZXJ0ZWQgYmxvY2sgaWRcbiAgICAgICAgICAgICAgICBibGMuZWRpdG9yLmJsb2Nrc1tucF0uX3AuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuZGl2aWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8aHIgLz5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0cnVjdG9ycy5oZWFkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICAvL215dGFnLlxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIC8vaWQ6IGlkLFxuICAgICAgICB0ZXh0OiBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiSGVhZGVyXCIsXG4gICAgICAgIGxldmVsOiBkYXRhICYmIGRhdGEubGV2ZWwgPyBkYXRhLmxldmVsIDogMSxcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUwpXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKVxuXG4gICAgICAgIH0sXG4gICAgICAgIC8vbXl0YWc6IFxuXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpO1xuICAgICAgICAgICAgLy90aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHR4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHR4dCxcbiAgICAgICAgICAgICAgICBcImxldmVsXCI6IHRoaXMubGV2ZWxcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgbGV0IG9wdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIG9wdHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAvL29wdHMudHlwZT1cInNlbGVjdFwiO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgIG9wdC52YWx1ZSA9IGk7XG4gICAgICAgIG9wdC5sYWJlbCA9IFwibGV2ZWwgXCIgKyBpO1xuICAgICAgICBpZiAoaSA9PSBibGMubGV2ZWwpIHtcbiAgICAgICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9XG4gICAgb3B0cy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBudiA9IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgYmxjLmxldmVsID0gbnY7XG4gICAgICAgIGJsYy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICBibGMuYWRkVG9Ub29sYmFyKG9wdHMpXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgICBsZXQgY2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcbiAgICBwcmUuYXBwZW5kQ2hpbGQoY2QpO1xuICAgIGNkLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBjZC5kYXRhc2V0Lm5vX3RleHRfdG9vbGJveCA9IHRydWU7XG4gICAgZWwuYXBwZW5kQ2hpbGQocHJlKTtcbiAgICBsZXQgbGFuZ3MgPSBbXCJBdXRvXCIsIFwiQXJkdWlub1wiLCAnSmF2YVNjcmlwdCcsIFwiUHJvY2Vzc2luZ1wiLCBcIlB5dGhvblwiLCBcIkMrK1wiLCBcIkJhc2hcIiwgXCJCYXNpY1wiLCBcIkJyYWluZnVja1wiXTtcbiAgICAvL1xuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBsYW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1pLnZhbHVlID0gZTtcbiAgICAgICAgbWkubGFiZWwgPSBlO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxhbmd1YWdlICYmIGUgPT0gZGF0YS5sYW5ndWFnZSkge1xuICAgICAgICAgICAgbWkuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuICAgIC8vXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjZC5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiIyAgdHlwZVxcbiMgIGhlcmVcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBjZC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKTtcbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5yYXcgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcblxuICAgIGxldCBlZGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZWRpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgZWRpLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGVkaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBlZGkuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgXCIgKyBVSS5teWN5YW47XG4gICAgZWRpLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgIGlmIChkYXRhICYmIGRhdGEuaHRtbCkge1xuICAgICAgICBlZGkudmFsdWUgPSBkYXRhLmh0bWw7XG4gICAgfVxuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGVkaSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbDogZWRpLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBibGM7XG5cbn1cblxuY29uc3RydWN0b3JzLmJsb2NrcXVvdGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmxjdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJsb2NrcXVvdGVcIik7XG4gICAgYmxjdGFnLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCBibGNpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgYmxjaW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGxldCBibGZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGxldCBibGNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2l0ZVwiKTtcbiAgICBibGZvb3QuYXBwZW5kQ2hpbGQoYmxjaXRlKTtcbiAgICBibGNpdGUuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuXG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsY2luKTtcbiAgICBibGN0YWcuYXBwZW5kQ2hpbGQoYmxmb290KTtcbiAgICBibGNpbi5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwi0KbQuNGC0LDRgtCwXCI7XG4gICAgYmxjaXRlLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCLQn9C+0LTQv9C40YHRjFwiXG4gICAgbGV0IGJsb2NrID0ge1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGJsY3RhZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogYmxjaW4uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGNhcHRpb246IGJsY2l0ZS5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxvY2s7XG5cbn1cblxuY29uc3RydWN0b3JzLmltYWdlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGZpZ3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gICAgbGV0IHBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBpbWcuc3R5bGUubWF4V2lkdGggPSBcIjEwMCVcIjtcbiAgICBsZXQgZmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcbiAgICBmYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgZmMuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLmNhcHRpb24gPyBkYXRhLmNhcHRpb24gOiBcItCf0L7QtNC/0LjRgVwiXG4gICAgZmlndGFnLmFwcGVuZENoaWxkKHBpbWcpO1xuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChmYyk7XG4gICAgcGltZy5zcmMgPSBkYXRhICYmIGRhdGEuZmlsZSA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgaW1hZ2VcIilcbiAgICAgICAgfSxcbiAgICB9XG4gICAgdGVtcGxhdGVzLnR3b1BhbmVscyhibGMpO1xuICAgIGJsYy5hZGRUb1ByZXZpZXcoZmlndGFnKTtcbiAgICAvL2VkaXRcbiAgICAvLy8vdXBsb2FkXG4gICAgbGV0IHVwbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZC50eXBlID0gXCJmaWxlXCI7XG4gICAgdXBsZC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbGV0IHVwbGRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZGJ0bi52YWx1ZSA9IFwidXBsb2FkXCI7XG4gICAgdXBsZGJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHVwbGRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVkaXRvci51cGxvYWQodXBsZC5maWxlc1swXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgcGltZy5zcmMgPSByLnVybDtcbiAgICAgICAgICAgICAgICBzcmNpbnB1dC52YWx1ZSA9IHIudXJsO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbdXBsZCwgdXBsZGJ0bl0pKTtcbiAgICAvLy8vZWRpdCBzcmNcbiAgICBsZXQgc3JjbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3JjbGFiZWwuaW5uZXJIVE1MID0gXCJTb3VyY2UgVVJMXCI7XG4gICAgbGV0IHNyY2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNyY2lucHV0LnN0eWxlLmZsZXhHcm93ID0gMjtcbiAgICBzcmNpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc3JjaW5wdXQudmFsdWUgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICBzcmNpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHsgcGltZy5zcmMgPSB0aGlzLnZhbHVlOyB9KVxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3JjbGFiZWwsIHNyY2lucHV0XSkpO1xuICAgIC8vLy9jbGFzc2VzXG4gICAgLy8vLy8vc3RyZXRjaGVkXG4gICAgbGV0IHN0cmV0Y2hsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdHJldGNobGFiZWwuaW5uZXJIVE1MID0gXCJzdHJldGNoZWRcIlxuICAgIGxldCBzdHJldGNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RyZXRjaGVkLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgc3RyZXRjaGVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbm9yZXNpemUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlndGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJldGNoZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuc3RyZXRjaGVkO1xuICAgIC8vLy8vL25vcmVzaXplXG4gICAgbGV0IG5ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbnJsYWJlbC5pbm5lckhUTUwgPSBcIm5vIHJlc2l6ZVwiXG4gICAgbGV0IG5vcmVzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vcmVzaXplLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbm9yZXNpemUub25jbGljayA9IGZ1bmN0aW9uICgpIHsgaWYgKHRoaXMuY2hlY2tlZCkgeyBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlIH0gfTtcbiAgICBub3Jlc2l6ZS5jaGVja2VkID0gZGF0YSAmJiAoZGF0YS5ub3Jlc2l6ZSB8fCBkYXRhLndpdGhiYWNrZ3JvdW5kKTtcbiAgICAvLy8vL2xlZnRcbiAgICBsZXQgbGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxsYWJlbC5pbm5lckhUTUwgPSBcImxlZnRcIlxuICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxlZnQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsZWZ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IGlmICh0aGlzLmNoZWNrZWQpIHsgcmlnaHQuY2hlY2tlZCA9IGZhbHNlOyBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlIH0gfTtcbiAgICBsZWZ0LmNoZWNrZWQgPSBkYXRhICYmIGRhdGEubGVmdDtcbiAgICAvLy8vcmlnaHRcbiAgICBsZXQgcmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHJsYWJlbC5pbm5lckhUTUwgPSBcInJpZ2h0XCJcbiAgICBsZXQgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcmlnaHQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICByaWdodC5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyBpZiAodGhpcy5jaGVja2VkKSB7IGxlZnQuY2hlY2tlZCA9IGZhbHNlOyBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlIH0gfVxuICAgIHJpZ2h0LmNoZWNrZWQgPSBkYXRhICYmIGRhdGEucmlnaHQ7XG5cbiAgICAgLy8vL2JvcmRlclxuICAgICBsZXQgYmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICBibGFiZWwuaW5uZXJIVE1MID0gXCJib3JkZXJcIlxuICAgICBsZXQgYm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICBib3JkZXIudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgYm9yZGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IGlmKHRoaXMuY2hlY2tlZCl7cGltZy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyZWRcIil9ZWxzZXtwaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXJlZFwiKX0gfVxuICAgICBib3JkZXIuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5ib3JkZXI7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3N0cmV0Y2hsYWJlbCwgc3RyZXRjaGVkLFxuICAgICAgICBucmxhYmVsLCBub3Jlc2l6ZSxcbiAgICAgICAgbGxhYmVsLCBsZWZ0LFxuICAgICAgICBybGFiZWwsIHJpZ2h0LFxuICAgIGJsYWJlbCxib3JkZXJdKSk7XG5cbiAgICAvL1xuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyZXRjaGVkOiBzdHJldGNoZWQuY2hlY2tlZCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodC5jaGVja2VkLFxuICAgICAgICAgICAgbGVmdDogbGVmdC5jaGVja2VkLFxuICAgICAgICAgICAgbm9yZXNpemU6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQmFja2dyb3VuZDogbm9yZXNpemUuY2hlY2tlZCxcbiAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQm9yZGVyOiBib3JkZXIuY2hlY2tlZCxcbiAgICAgICAgICAgIGNhcHRpb246IGZjLmlubmVySFRNTCxcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IHNyY2lucHV0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5maWxlICYmIGRhdGEuZmlsZS51cmwpIHtcbiAgICAgICAgYmxjLmdvUHJldmlld01vZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBibGM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUeXBpY2FsRWRpdG9yKGVsKSB7XG4gICAgbGV0IGVkaXRvciA9IG5ldyBCbG9ja0VkaXRvcih7XG4gICAgICAgIHNlbGVjdG9yOiBlbFxuICAgIH0pO1xuXG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgaWNvbjogXCLCtlwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMucGFyYWdyYXBoLFxuICAgICAgICBsYWJlbDogXCJQYXJhZ3JhcGhcIlxuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiZGl2aWRlclwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuZGl2aWRlcixcbiAgICAgICAgaWNvbjogXCLigJRcIixcbiAgICAgICAgbGFiZWw6ICdEaXZpZGVyJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIGljb246IFwiSFwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaGVhZGVyLFxuICAgICAgICBsYWJlbDogJ0hlYWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImNvZGVcIixcbiAgICAgICAgaWNvbjogXCJ7fVwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuY29kZSxcbiAgICAgICAgbGFiZWw6ICdDb2RlIHNuaXBwZXQnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJyYXdcIixcbiAgICAgICAgaWNvbjogXCI8PlwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMucmF3LFxuICAgICAgICBsYWJlbDogJ1JhdyBIVE1MJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicXVvdGVcIixcbiAgICAgICAgaWNvbjogXCLCq8K7XCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlLFxuICAgICAgICBsYWJlbDogJ0Jsb2NrcXVvdGUnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICBpY29uOiBcInBpY1wiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaW1hZ2UsXG4gICAgICAgIGxhYmVsOiAnSW1hZ2UnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRpdG9yO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuMzA2OCAxOS4zMjQyQzEwLjg2NzQgMTkuNTc0MiAxMS4zOTc3IDE5LjY5OTIgMTEuODk3NyAxOS42OTkyQzE0Ljc0NjIgMTkuNjk5MiAxNi4xNzA1IDE4LjM5MDYgMTYuMTcwNSAxNS43NzM0QzE2LjE3MDUgMTQuODgyOCAxNi4wMTUyIDE0LjE3OTcgMTUuNzA0NSAxMy42NjQxQzE1LjUgMTMuMzIwMyAxNS4yNjcgMTMuMDMxMiAxNS4wMDU3IDEyLjc5NjlDMTQuNzQ0MyAxMi41NjI1IDE0LjQ4ODYgMTIuMzgwOSAxNC4yMzg2IDEyLjI1MkMxMy45ODg2IDEyLjEyMyAxMy42ODM3IDEyLjAyNTQgMTMuMzIzOSAxMS45NTlDMTIuOTY0IDExLjg5MjYgMTIuNjQ1OCAxMS44NTE2IDEyLjM2OTMgMTEuODM1OUMxMi4wOTI4IDExLjgyMDMgMTEuNzM0OCAxMS44MTI1IDExLjI5NTUgMTEuODEyNUMxMC43NDI0IDExLjgxMjUgMTAuMzU5OCAxMS44NTE2IDEwLjE0NzcgMTEuOTI5N0MxMC4xNDc3IDEyLjM0MzggMTAuMTQ1OCAxMi45NjQ4IDEwLjE0MiAxMy43OTNDMTAuMTM4MyAxNC42MjExIDEwLjEzNjQgMTUuMjM4MyAxMC4xMzY0IDE1LjY0NDVDMTAuMTM2NCAxNS43MDcgMTAuMTMyNiAxNS45NzA3IDEwLjEyNSAxNi40MzU1QzEwLjExNzQgMTYuOTAwNCAxMC4xMTU1IDE3LjI3NzMgMTAuMTE5MyAxNy41NjY0QzEwLjEyMzEgMTcuODU1NSAxMC4xNDAyIDE4LjE4MTYgMTAuMTcwNSAxOC41NDQ5QzEwLjIwMDggMTguOTA4MiAxMC4yNDYyIDE5LjE2OCAxMC4zMDY4IDE5LjMyNDJaTTEwLjE0NzcgMTAuNTgyQzEwLjQ2NTkgMTAuNjM2NyAxMC44Nzg4IDEwLjY2NDEgMTEuMzg2NCAxMC42NjQxQzEyLjAwNzYgMTAuNjY0MSAxMi41NDkyIDEwLjYxMzMgMTMuMDExNCAxMC41MTE3QzEzLjQ3MzUgMTAuNDEwMiAxMy44OTAyIDEwLjIzNjMgMTQuMjYxNCA5Ljk5MDIzQzE0LjYzMjYgOS43NDQxNCAxNC45MTQ4IDkuMzk0NTMgMTUuMTA4IDguOTQxNDFDMTUuMzAxMSA4LjQ4ODI4IDE1LjM5NzcgNy45MzM1OSAxNS4zOTc3IDcuMjc3MzRDMTUuMzk3NyA2LjczMDQ3IDE1LjI4NzkgNi4yNTE5NSAxNS4wNjgyIDUuODQxOEMxNC44NDg1IDUuNDMxNjQgMTQuNTQ5MiA1LjExMTMzIDE0LjE3MDUgNC44ODA4NkMxMy43OTE3IDQuNjUwMzkgMTMuMzgyNiA0LjQ4MDQ3IDEyLjk0MzIgNC4zNzEwOUMxMi41MDM4IDQuMjYxNzIgMTIuMDM0MSA0LjIwNzAzIDExLjUzNDEgNC4yMDcwM0MxMS4xNTUzIDQuMjA3MDMgMTAuNjYyOSA0LjI1NzgxIDEwLjA1NjggNC4zNTkzOEMxMC4wNTY4IDQuNzUgMTAuMDcyIDUuMzM5ODQgMTAuMTAyMyA2LjEyODkxQzEwLjEzMjYgNi45MTc5NyAxMC4xNDc3IDcuNTExNzIgMTAuMTQ3NyA3LjkxMDE2QzEwLjE0NzcgOC4xMjEwOSAxMC4xNDU4IDguNDMzNTkgMTAuMTQyIDguODQ3NjZDMTAuMTM4MyA5LjI2MTcyIDEwLjEzNjQgOS41NzAzMSAxMC4xMzY0IDkuNzczNDRDMTAuMTM2NCAxMC4xMzI4IDEwLjE0MDIgMTAuNDAyMyAxMC4xNDc3IDEwLjU4MlpNNCAyMUw0LjAyMjczIDE5Ljg5ODRDNC4xMzYzNiAxOS44NjcyIDQuNDU4MzMgMTkuODA0NyA0Ljk4ODY0IDE5LjcxMDlDNS41MTg5NCAxOS42MTcyIDUuOTIwNDUgMTkuNTExNyA2LjE5MzE4IDE5LjM5NDVDNi4yNDYyMSAxOS4zMDA4IDYuMjkzNTYgMTkuMTk1MyA2LjMzNTIzIDE5LjA3ODFDNi4zNzY4OSAxOC45NjA5IDYuNDA5MDkgMTguODMwMSA2LjQzMTgyIDE4LjY4NTVDNi40NTQ1NSAxOC41NDEgNi40NzUzOCAxOC40MTQxIDYuNDk0MzIgMTguMzA0N0M2LjUxMzI2IDE4LjE5NTMgNi41MjQ2MiAxOC4wNDg4IDYuNTI4NDEgMTcuODY1MkM2LjUzMjIgMTcuNjgxNiA2LjUzNDA5IDE3LjU0ODggNi41MzQwOSAxNy40NjY4VjE2LjY5OTJDNi41MzQwOSA5LjAyNzM0IDYuNDUwNzYgNS4wMjM0NCA2LjI4NDA5IDQuNjg3NUM2LjI1Mzc5IDQuNjI1IDYuMTcwNDUgNC41NjgzNiA2LjAzNDA5IDQuNTE3NThDNS44OTc3MyA0LjQ2NjggNS43MjkxNyA0LjQyMzgzIDUuNTI4NDEgNC4zODg2N0M1LjMyNzY1IDQuMzUzNTIgNS4xNDAxNSA0LjMyNjE3IDQuOTY1OTEgNC4zMDY2NEM0Ljc5MTY3IDQuMjg3MTEgNC42MDc5NSA0LjI2OTUzIDQuNDE0NzcgNC4yNTM5MUM0LjIyMTU5IDQuMjM4MjggNC4xMDYwNiA0LjIyNjU2IDQuMDY4MTggNC4yMTg3NUw0LjAyMjczIDMuMjQ2MDlDNC43NjUxNSAzLjIzMDQ3IDYuMDUzMDMgMy4xODU1NSA3Ljg4NjM2IDMuMTExMzNDOS43MTk3IDMuMDM3MTEgMTEuMTMyNiAzIDEyLjEyNSAzQzEyLjI5OTIgMyAxMi41NTY4IDMuMDAxOTUgMTIuODk3NyAzLjAwNTg2QzEzLjIzODYgMy4wMDk3NyAxMy40OTYyIDMuMDExNzIgMTMuNjcwNSAzLjAxMTcyQzE0LjIwMDggMy4wMTE3MiAxNC43MTc4IDMuMDYyNSAxNS4yMjE2IDMuMTY0MDZDMTUuNzI1NCAzLjI2NTYyIDE2LjIxMjEgMy40Mjk2OSAxNi42ODE4IDMuNjU2MjVDMTcuMTUxNSAzLjg4MjgxIDE3LjU2MDYgNC4xNjAxNiAxNy45MDkxIDQuNDg4MjhDMTguMjU3NiA0LjgxNjQxIDE4LjUzNzkgNS4yMjQ2MSAxOC43NSA1LjcxMjg5QzE4Ljk2MjEgNi4yMDExNyAxOS4wNjgyIDYuNzM4MjggMTkuMDY4MiA3LjMyNDIyQzE5LjA2ODIgNy43MzA0NyAxOS4wMDU3IDguMTAzNTIgMTguODgwNyA4LjQ0MzM2QzE4Ljc1NTcgOC43ODMyIDE4LjYwOCA5LjA2NDQ1IDE4LjQzNzUgOS4yODcxMUMxOC4yNjcgOS41MDk3NyAxOC4wMjI3IDkuNzM0MzggMTcuNzA0NSA5Ljk2MDk0QzE3LjM4NjQgMTAuMTg3NSAxNy4xMDk4IDEwLjM2MzMgMTYuODc1IDEwLjQ4ODNDMTYuNjQwMiAxMC42MTMzIDE2LjMyMiAxMC43Njk1IDE1LjkyMDUgMTAuOTU3QzE3LjA4NzEgMTEuMjMwNSAxOC4wNTg3IDExLjc1MzkgMTguODM1MiAxMi41MjczQzE5LjYxMTcgMTMuMzAwOCAyMCAxNC4yNjk1IDIwIDE1LjQzMzZDMjAgMTYuMjE0OCAxOS44Njc0IDE2LjkxNiAxOS42MDIzIDE3LjUzNzFDMTkuMzM3MSAxOC4xNTgyIDE4Ljk4MyAxOC42NjggMTguNTM5OCAxOS4wNjY0QzE4LjA5NjYgMTkuNDY0OCAxNy41NzM5IDE5Ljc5ODggMTYuOTcxNiAyMC4wNjg0QzE2LjM2OTMgMjAuMzM3OSAxNS43NSAyMC41MjczIDE1LjExMzYgMjAuNjM2N0MxNC40NzczIDIwLjc0NjEgMTMuODEwNiAyMC44MDA4IDEzLjExMzYgMjAuODAwOEMxMi43ODAzIDIwLjgwMDggMTIuMjgwMyAyMC43ODkxIDExLjYxMzYgMjAuNzY1NkMxMC45NDcgMjAuNzQyMiAxMC40NDcgMjAuNzMwNSAxMC4xMTM2IDIwLjczMDVDOS4zMTA2MSAyMC43MzA1IDguMTQ3NzMgMjAuNzczNCA2LjYyNSAyMC44NTk0QzUuMTAyMjcgMjAuOTQ1MyA0LjIyNzI3IDIwLjk5MjIgNCAyMVpcXFwiIGZpbGw9XFxcImJsYWNrXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTYgMjAuOTc2Nkw2LjE5OTIyIDE5Ljk4MDVDNi4zNzEwOSAxOS45MjU4IDYuNjExMzMgMTkuODYxMyA2LjkxOTkyIDE5Ljc4NzFDNy4yMjg1MiAxOS43MTI5IDcuNTA5NzcgMTkuNjM4NyA3Ljc2MzY3IDE5LjU2NDVDOC4wMTc1OCAxOS40OTAyIDguMjUgMTkuMzk4NCA4LjQ2MDk0IDE5LjI4OTFDOC42Nzk2OSAxOS4wMTU2IDguODM5ODQgMTguNjIxMSA4Ljk0MTQxIDE4LjEwNTVDOC45NDkyMiAxOC4wNTA4IDkuMTkxNDEgMTYuOTIxOSA5LjY2Nzk3IDE0LjcxODhDMTAuMTQ0NSAxMi41MTU2IDEwLjU4OTggMTAuMzkyNiAxMS4wMDM5IDguMzQ5NjFDMTEuNDE4IDYuMzA2NjQgMTEuNjIxMSA1LjE0ODQ0IDExLjYxMzMgNC44NzVWNC41ODIwM0MxMS40MjU4IDQuNDgwNDcgMTEuMjEyOSA0LjQwODIgMTAuOTc0NiA0LjM2NTIzQzEwLjczNjMgNC4zMjIyNyAxMC40NjQ4IDQuMjkxMDIgMTAuMTYwMiA0LjI3MTQ4QzkuODU1NDcgNC4yNTE5NSA5LjYyODkxIDQuMjMwNDcgOS40ODA0NyA0LjIwNzAzTDkuNzAzMTIgM0M5Ljk2MDk0IDMuMDE1NjIgMTAuNDI5NyAzLjA0MTAyIDExLjEwOTQgMy4wNzYxN0MxMS43ODkxIDMuMTExMzMgMTIuMzczIDMuMTM4NjcgMTIuODYxMyAzLjE1ODJDMTMuMzQ5NiAzLjE3NzczIDEzLjgyMDMgMy4xODc1IDE0LjI3MzQgMy4xODc1QzE0LjY0ODQgMy4xODc1IDE1LjAzMzIgMy4xNzc3MyAxNS40Mjc3IDMuMTU4MkMxNS44MjIzIDMuMTM4NjcgMTYuMjk0OSAzLjExMTMzIDE2Ljg0NTcgMy4wNzYxN0MxNy4zOTY1IDMuMDQxMDIgMTcuNzgxMiAzLjAxNTYyIDE4IDNDMTcuOTYwOSAzLjMwNDY5IDE3Ljg4NjcgMy42NTIzNCAxNy43NzczIDQuMDQyOTdDMTcuNTQzIDQuMTIxMDkgMTcuMTQ2NSA0LjIzMjQyIDE2LjU4NzkgNC4zNzY5NUMxNi4wMjkzIDQuNTIxNDggMTUuNjA1NSA0LjY1MjM0IDE1LjMxNjQgNC43Njk1M0MxNS4yNTM5IDQuOTE3OTcgMTUuMTk5MiA1LjA4Mzk4IDE1LjE1MjMgNS4yNjc1OEMxNS4xMDU1IDUuNDUxMTcgMTUuMDcwMyA1LjYwNzQyIDE1LjA0NjkgNS43MzYzM0MxNS4wMjM0IDUuODY1MjMgMTQuOTk0MSA2LjA0Mjk3IDE0Ljk1OSA2LjI2OTUzQzE0LjkyMzggNi40OTYwOSAxNC44OTg0IDYuNjYwMTYgMTQuODgyOCA2Ljc2MTcyQzE0LjY3MTkgNy45MTc5NyAxNC4zMzAxIDkuNTU2NjQgMTMuODU3NCAxMS42Nzc3QzEzLjM4NDggMTMuNzk4OCAxMy4wODIgMTUuMTg3NSAxMi45NDkyIDE1Ljg0MzhDMTIuOTMzNiAxNS45MTQxIDEyLjg4MjggMTYuMTQwNiAxMi43OTY5IDE2LjUyMzRDMTIuNzEwOSAxNi45MDYyIDEyLjYzMjggMTcuMjU3OCAxMi41NjI1IDE3LjU3ODFDMTIuNDkyMiAxNy44OTg0IDEyLjQyOTcgMTguMjI0NiAxMi4zNzUgMTguNTU2NkMxMi4zMjAzIDE4Ljg4ODcgMTIuMjk2OSAxOS4xMTMzIDEyLjMwNDcgMTkuMjMwNUwxMi4zMTY0IDE5LjQ0MTRDMTIuNDQ5MiAxOS40NzI3IDEzLjE3MTkgMTkuNTkzOCAxNC40ODQ0IDE5LjgwNDdDMTQuNDYwOSAyMC4xNDg0IDE0LjM5ODQgMjAuNTM1MiAxNC4yOTY5IDIwLjk2NDhDMTQuMjEwOSAyMC45NjQ4IDE0LjA4NCAyMC45NzA3IDEzLjkxNiAyMC45ODI0QzEzLjc0OCAyMC45OTQxIDEzLjYyMTEgMjEgMTMuNTM1MiAyMUMxMy4zMDg2IDIxIDEyLjk2ODggMjAuOTYwOSAxMi41MTU2IDIwLjg4MjhDMTIuMDYyNSAyMC44MDQ3IDExLjcyNjYgMjAuNzY1NiAxMS41MDc4IDIwLjc2NTZDMTAuNDI5NyAyMC43NSA5LjYyNSAyMC43NDIyIDkuMDkzNzUgMjAuNzQyMkM4LjY5NTMxIDIwLjc0MjIgOC4xMzY3MiAyMC43NzczIDcuNDE3OTcgMjAuODQ3N0M2LjY5OTIyIDIwLjkxOCA2LjIyNjU2IDIwLjk2MDkgNiAyMC45NzY2WlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTguMTE3NiAxNS43NjQ3QzE4LjExNzYgMTUuNTAzMyAxOC4wMjYxIDE1LjI4MSAxNy44NDMxIDE1LjA5OEwxNS44MDM5IDEzLjA1ODhDMTUuNjIwOSAxMi44NzU4IDE1LjM5ODcgMTIuNzg0MyAxNS4xMzczIDEyLjc4NDNDMTQuODYyNyAxMi43ODQzIDE0LjYyNzUgMTIuODg4OSAxNC40MzE0IDEzLjA5OEMxNC40NTEgMTMuMTE3NiAxNC41MTMxIDEzLjE3ODEgMTQuNjE3NiAxMy4yNzk0QzE0LjcyMjIgMTMuMzgwNyAxNC43OTI1IDEzLjQ1MSAxNC44Mjg0IDEzLjQ5MDJDMTQuODY0NCAxMy41Mjk0IDE0LjkxMzQgMTMuNTkxNSAxNC45NzU1IDEzLjY3NjVDMTUuMDM3NiAxMy43NjE0IDE1LjA4MDEgMTMuODQ0OCAxNS4xMDI5IDEzLjkyNjVDMTUuMTI1OCAxNC4wMDgyIDE1LjEzNzMgMTQuMDk4IDE1LjEzNzMgMTQuMTk2MUMxNS4xMzczIDE0LjQ1NzUgMTUuMDQ1OCAxNC42Nzk3IDE0Ljg2MjcgMTQuODYyN0MxNC42Nzk3IDE1LjA0NTggMTQuNDU3NSAxNS4xMzczIDE0LjE5NjEgMTUuMTM3M0MxNC4wOTggMTUuMTM3MyAxNC4wMDgyIDE1LjEyNTggMTMuOTI2NSAxNS4xMDI5QzEzLjg0NDggMTUuMDgwMSAxMy43NjE0IDE1LjAzNzYgMTMuNjc2NSAxNC45NzU1QzEzLjU5MTUgMTQuOTEzNCAxMy41Mjk0IDE0Ljg2NDQgMTMuNDkwMiAxNC44Mjg0QzEzLjQ1MSAxNC43OTI1IDEzLjM4MDcgMTQuNzIyMiAxMy4yNzk0IDE0LjYxNzZDMTMuMTc4MSAxNC41MTMxIDEzLjExNzYgMTQuNDUxIDEzLjA5OCAxNC40MzE0QzEyLjg4MjQgMTQuNjM0IDEyLjc3NDUgMTQuODcyNSAxMi43NzQ1IDE1LjE0NzFDMTIuNzc0NSAxNS40MDg1IDEyLjg2NiAxNS42MzA3IDEzLjA0OSAxNS44MTM3TDE1LjA2ODYgMTcuODQzMUMxNS4yNDUxIDE4LjAxOTYgMTUuNDY3MyAxOC4xMDc4IDE1LjczNTMgMTguMTA3OEMxNS45OTY3IDE4LjEwNzggMTYuMjE5IDE4LjAyMjkgMTYuNDAyIDE3Ljg1MjlMMTcuODQzMSAxNi40MjE2QzE4LjAyNjEgMTYuMjM4NiAxOC4xMTc2IDE2LjAxOTYgMTguMTE3NiAxNS43NjQ3Wk0xMS4yMjU1IDguODUyOTRDMTEuMjI1NSA4LjU5MTUgMTEuMTM0IDguMzY5MjggMTAuOTUxIDguMTg2MjdMOC45MzEzNyA2LjE1Njg2QzguNzQ4MzcgNS45NzM4NiA4LjUyNjE0IDUuODgyMzUgOC4yNjQ3MSA1Ljg4MjM1QzguMDA5OCA1Ljg4MjM1IDcuNzg3NTggNS45NzA1OSA3LjU5ODA0IDYuMTQ3MDZMNi4xNTY4NiA3LjU3ODQzQzUuOTczODYgNy43NjE0NCA1Ljg4MjM1IDcuOTgwMzkgNS44ODIzNSA4LjIzNTI5QzUuODgyMzUgOC40OTY3MyA1Ljk3Mzg2IDguNzE4OTUgNi4xNTY4NiA4LjkwMTk2TDguMTk2MDggMTAuOTQxMkM4LjM3MjU1IDExLjExNzYgOC41OTQ3NyAxMS4yMDU5IDguODYyNzUgMTEuMjA1OUM5LjEzNzI2IDExLjIwNTkgOS4zNzI1NSAxMS4xMDQ2IDkuNTY4NjMgMTAuOTAyQzkuNTQ5MDIgMTAuODgyNCA5LjQ4NjkzIDEwLjgyMTkgOS4zODIzNSAxMC43MjA2QzkuMjc3NzggMTAuNjE5MyA5LjIwNzUyIDEwLjU0OSA5LjE3MTU3IDEwLjUwOThDOS4xMzU2MiAxMC40NzA2IDkuMDg2NiAxMC40MDg1IDkuMDI0NTEgMTAuMzIzNUM4Ljk2MjQyIDEwLjIzODYgOC45MTk5MyAxMC4xNTUyIDguODk3MDYgMTAuMDczNUM4Ljg3NDE4IDkuOTkxODMgOC44NjI3NSA5LjkwMTk2IDguODYyNzUgOS44MDM5MkM4Ljg2Mjc1IDkuNTQyNDggOC45NTQyNSA5LjMyMDI2IDkuMTM3MjYgOS4xMzcyNkM5LjMyMDI2IDguOTU0MjUgOS41NDI0OCA4Ljg2Mjc1IDkuODAzOTIgOC44NjI3NUM5LjkwMTk2IDguODYyNzUgOS45OTE4MyA4Ljg3NDE4IDEwLjA3MzUgOC44OTcwNkMxMC4xNTUyIDguOTE5OTMgMTAuMjM4NiA4Ljk2MjQyIDEwLjMyMzUgOS4wMjQ1MUMxMC40MDg1IDkuMDg2NiAxMC40NzA2IDkuMTM1NjIgMTAuNTA5OCA5LjE3MTU3QzEwLjU0OSA5LjIwNzUyIDEwLjYxOTMgOS4yNzc3OCAxMC43MjA2IDkuMzgyMzVDMTAuODIxOSA5LjQ4NjkzIDEwLjg4MjQgOS41NDkwMiAxMC45MDIgOS41Njg2M0MxMS4xMTc2IDkuMzY2MDEgMTEuMjI1NSA5LjEyNzQ1IDExLjIyNTUgOC44NTI5NFpNMjAgMTUuNzY0N0MyMCAxNi41NDkgMTkuNzIyMiAxNy4yMTI0IDE5LjE2NjcgMTcuNzU0OUwxNy43MjU1IDE5LjE4NjNDMTcuMTgzIDE5LjcyODggMTYuNTE5NiAyMCAxNS43MzUzIDIwQzE0Ljk0NDQgMjAgMTQuMjc3OCAxOS43MjIyIDEzLjczNTMgMTkuMTY2N0wxMS43MTU3IDE3LjEzNzNDMTEuMTczMiAxNi41OTQ4IDEwLjkwMiAxNS45MzE0IDEwLjkwMiAxNS4xNDcxQzEwLjkwMiAxNC4zNDMxIDExLjE4OTUgMTMuNjYwMSAxMS43NjQ3IDEzLjA5OEwxMC45MDIgMTIuMjM1M0MxMC4zMzk5IDEyLjgxMDUgOS42NjAxMyAxMy4wOTggOC44NjI3NSAxMy4wOThDOC4wNzg0MyAxMy4wOTggNy40MTE3NiAxMi44MjM1IDYuODYyNzUgMTIuMjc0NUw0LjgyMzUzIDEwLjIzNTNDNC4yNzQ1MSA5LjY4NjI3IDQgOS4wMTk2MSA0IDguMjM1MjlDNCA3LjQ1MDk4IDQuMjc3NzggNi43ODc1OCA0LjgzMzMzIDYuMjQ1MUw2LjI3NDUxIDQuODEzNzNDNi44MTY5OSA0LjI3MTI0IDcuNDgwMzkgNCA4LjI2NDcxIDRDOS4wNTU1NiA0IDkuNzIyMjIgNC4yNzc3OCAxMC4yNjQ3IDQuODMzMzNMMTIuMjg0MyA2Ljg2Mjc1QzEyLjgyNjggNy40MDUyMyAxMy4wOTggOC4wNjg2MyAxMy4wOTggOC44NTI5NEMxMy4wOTggOS42NTY4NiAxMi44MTA1IDEwLjMzOTkgMTIuMjM1MyAxMC45MDJMMTMuMDk4IDExLjc2NDdDMTMuNjYwMSAxMS4xODk1IDE0LjMzOTkgMTAuOTAyIDE1LjEzNzMgMTAuOTAyQzE1LjkyMTYgMTAuOTAyIDE2LjU4ODIgMTEuMTc2NSAxNy4xMzczIDExLjcyNTVMMTkuMTc2NSAxMy43NjQ3QzE5LjcyNTUgMTQuMzEzNyAyMCAxNC45ODA0IDIwIDE1Ljc2NDdaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yMS43OTgzIDEyQzIxLjkwODYgMTIgMjEuOTk5MiAxMi4wMzUyIDIyLjA3MDEgMTIuMTA1NUMyMi4xNDEgMTIuMTc1OCAyMi4xNzY1IDEyLjI2NTYgMjIuMTc2NSAxMi4zNzVWMTMuMTI1QzIyLjE3NjUgMTMuMjM0NCAyMi4xNDEgMTMuMzI0MiAyMi4wNzAxIDEzLjM5NDVDMjEuOTk5MiAxMy40NjQ4IDIxLjkwODYgMTMuNSAyMS43OTgzIDEzLjVIMS4zNzgxNUMxLjI2Nzg2IDEzLjUgMS4xNzcyNiAxMy40NjQ4IDEuMTA2MzYgMTMuMzk0NUMxLjAzNTQ1IDEzLjMyNDIgMSAxMy4yMzQ0IDEgMTMuMTI1VjEyLjM3NUMxIDEyLjI2NTYgMS4wMzU0NSAxMi4xNzU4IDEuMTA2MzYgMTIuMTA1NUMxLjE3NzI2IDEyLjAzNTIgMS4yNjc4NiAxMiAxLjM3ODE1IDEySDIxLjc5ODNaTTYuNzA3NzIgMTEuMjVDNi40ODcxMyAxMC45NzY2IDYuMjg2MjQgMTAuNjY0MSA2LjEwNTA0IDEwLjMxMjVDNS43MjY4OSA5LjU0Njg4IDUuNTM3ODIgOC44MTI1IDUuNTM3ODIgOC4xMDkzOEM1LjUzNzgyIDYuNjk1MzEgNi4wNjU2NSA1LjQ4ODI4IDcuMTIxMzIgNC40ODgyOEM4LjE2OTEyIDMuNDk2MDkgOS43MTcxNyAzIDExLjc2NTUgM0MxMi4xNTk0IDMgMTIuODE3MiAzLjA3NDIyIDEzLjczOSAzLjIyMjY2QzE0LjI1ODkgMy4zMTY0MSAxNC45NTYxIDMuNTAzOTEgMTUuODMwNiAzLjc4NTE2QzE1LjkwOTQgNC4wODIwMyAxNS45OTIxIDQuNTQyOTcgMTYuMDc4OCA1LjE2Nzk3QzE2LjE4OTEgNi4xMjg5MSAxNi4yNDQyIDYuODQzNzUgMTYuMjQ0MiA3LjMxMjVDMTYuMjQ0MiA3LjQ1MzEyIDE2LjIyNDUgNy42Mjg5MSAxNi4xODUxIDcuODM5ODRMMTYuMDQzMyA3Ljg3NUwxNS4wNTA3IDcuODA0NjlMMTQuODg1MiA3Ljc4MTI1QzE0LjQ5MTMgNi42MTcxOSAxNC4wODU2IDUuODE2NDEgMTMuNjY4MSA1LjM3ODkxQzEyLjk3NDggNC42Njc5NyAxMi4xNDc2IDQuMzEyNSAxMS4xODY0IDQuMzEyNUMxMC4yODgzIDQuMzEyNSA5LjU3MTQzIDQuNTQyOTcgOS4wMzU3MSA1LjAwMzkxQzguNTA3ODggNS40NTcwMyA4LjI0Mzk2IDYuMDI3MzQgOC4yNDM5NiA2LjcxNDg0QzguMjQzOTYgNy4yODUxNiA4LjUwMzk0IDcuODMyMDMgOS4wMjM5IDguMzU1NDdDOS41NDM4NSA4Ljg3ODkxIDEwLjY0MjkgOS4zODI4MSAxMi4zMjA5IDkuODY3MTlDMTIuODY0NSAxMC4wMjM0IDEzLjU0NiAxMC4yODEyIDE0LjM2NTMgMTAuNjQwNkMxNC44MjIyIDEwLjg1OTQgMTUuMTk2NCAxMS4wNjI1IDE1LjQ4NzkgMTEuMjVINi43MDc3MlpNMTIuNjk5MSAxNC4yNUgxNy41NTU5QzE3LjYxMTEgMTQuNTU0NyAxNy42Mzg3IDE0LjkxNDEgMTcuNjM4NyAxNS4zMjgxQzE3LjYzODcgMTYuMTk1MyAxNy40NzcyIDE3LjAyMzQgMTcuMTU0MSAxNy44MTI1QzE2Ljk3MyAxOC4yNSAxNi42OTMzIDE4LjY1NjIgMTYuMzE1MSAxOS4wMzEyQzE2LjAyMzYgMTkuMzA0NyAxNS41OTQzIDE5LjYyMTEgMTUuMDI3IDE5Ljk4MDVDMTQuMzk2OCAyMC4zNTU1IDEzLjc5NDEgMjAuNjEzMyAxMy4yMTkgMjAuNzUzOUMxMi41ODg4IDIwLjkxOCAxMS43ODkxIDIxIDEwLjgyMDEgMjFDOS45MjIwMSAyMSA5LjE1Mzg5IDIwLjkxMDIgOC41MTU3NiAyMC43MzA1TDYuODYxMzQgMjAuMjYxN0M2LjQxMjI5IDIwLjEzNjcgNi4xMjg2OCAyMC4wMjczIDYuMDEwNSAxOS45MzM2QzUuOTQ3NDggMTkuODcxMSA1LjkxNTk3IDE5Ljc4NTIgNS45MTU5NyAxOS42NzU4VjE5LjUyMzRDNS45MTU5NyAxOC42Nzk3IDUuOTA4MDkgMTguMDcwMyA1Ljg5MjMzIDE3LjY5NTNDNS44ODQ0NSAxNy40NjA5IDUuODg0NDUgMTcuMTk1MyA1Ljg5MjMzIDE2Ljg5ODRMNS45MTU5NyAxNi40NjQ4VjE1Ljk0OTJMNy4xMjEzMiAxNS45MjU4QzcuMjM5NSAxNi4xOTE0IDcuMzU3NjcgMTYuNDY4OCA3LjQ3NTg0IDE2Ljc1NzhDNy41OTQwMSAxNy4wNDY5IDcuNjgyNjQgMTcuMjY1NiA3Ljc0MTczIDE3LjQxNDFDNy44MDA4MSAxNy41NjI1IDcuODUwMDUgMTcuNjY4IDcuODg5NDQgMTcuNzMwNUM4LjE2NTE4IDE4LjE3NTggOC40ODAzIDE4LjU0MyA4LjgzNDgyIDE4LjgzMkM5LjE3MzU4IDE5LjExMzMgOS41ODcxOCAxOS4zMzU5IDEwLjA3NTYgMTkuNUMxMC41NDA0IDE5LjY3MTkgMTEuMDYwNCAxOS43NTc4IDExLjYzNTUgMTkuNzU3OEMxMi4xMzk3IDE5Ljc1NzggMTIuNjg3MiAxOS42NTIzIDEzLjI3ODEgMTkuNDQxNEMxMy44ODQ3IDE5LjIzODMgMTQuMzY1MyAxOC45MDIzIDE0LjcxOTggMTguNDMzNkMxNS4wOTAxIDE3Ljk1NyAxNS4yNzUyIDE3LjQ1MzEgMTUuMjc1MiAxNi45MjE5QzE1LjI3NTIgMTYuMjY1NiAxNC45NTYxIDE1LjY1MjMgMTQuMzE4IDE1LjA4MkMxNC4wNTAyIDE0Ljg1NTUgMTMuNTEwNSAxNC41NzgxIDEyLjY5OTEgMTQuMjVaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk03IDQuNTU1NTZDNyA0LjQwNTA5IDcuMDU1NjYgNC4yNzQ4OSA3LjE2Njk5IDQuMTY0OTNDNy4yNzgzMiA0LjA1NDk4IDcuNDEwMTYgNCA3LjU2MjUgNEwxNS40Mzc1IDRDMTUuNTg5OCA0IDE1LjcyMTcgNC4wNTQ5OCAxNS44MzMgNC4xNjQ5M0MxNS45NDQzIDQuMjc0ODggMTYgNC40MDUwOSAxNiA0LjU1NTU2QzE2IDQuNzA2MDIgMTUuOTQ0MyA0LjgzNjIzIDE1LjgzMyA0Ljk0NjE4TDExLjg5NTUgOC44MzUwN0MxMS43ODQyIDguOTQ1MDIgMTEuNjUyMyA5IDExLjUgOUMxMS4zNDc3IDkgMTEuMjE1OCA4Ljk0NTAyIDExLjEwNDUgOC44MzUwN0w3LjE2Njk5IDQuOTQ2MThDNy4wNTU2NiA0LjgzNjIzIDcgNC43MDYwMiA3IDQuNTU1NTZaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNC4zOTU1IDIxSDkuNDM0NTdWMTkuOTI1OEwxMS43MTk3IDE3LjUyMzRDMTIuMjgyOSAxNi44ODIyIDEyLjU2NDUgMTYuMzcyNyAxMi41NjQ1IDE1Ljk5NTFDMTIuNTY0NSAxNS42ODkxIDEyLjQ5NzcgMTUuNDU2NCAxMi4zNjQzIDE1LjI5NjlDMTIuMjMwOCAxNS4xMzc0IDEyLjAzNzEgMTUuMDU3NiAxMS43ODMyIDE1LjA1NzZDMTEuNTMyNiAxNS4wNTc2IDExLjMyOTEgMTUuMTY1IDExLjE3MjkgMTUuMzc5OUMxMS4wMTY2IDE1LjU5MTUgMTAuOTM4NSAxNS44NTY4IDEwLjkzODUgMTYuMTc1OEg5LjI4ODA5QzkuMjg4MDkgMTUuNzM5NiA5LjM5NzE0IDE1LjMzNzYgOS42MTUyMyAxNC45Njk3QzkuODMzMzMgMTQuNTk4NiAxMC4xMzYxIDE0LjMwODkgMTAuNTIzNCAxNC4xMDA2QzEwLjkxMDggMTMuODkyMyAxMS4zNDM4IDEzLjc4ODEgMTEuODIyMyAxMy43ODgxQzEyLjU5MDUgMTMuNzg4MSAxMy4xODEzIDEzLjk2NTUgMTMuNTk0NyAxNC4zMjAzQzE0LjAxMTQgMTQuNjc1MSAxNC4yMTk3IDE1LjE4NDYgMTQuMjE5NyAxNS44NDg2QzE0LjIxOTcgMTYuMTI4NiAxNC4xNjc2IDE2LjQwMiAxNC4wNjM1IDE2LjY2ODlDMTMuOTU5MyAxNi45MzI2IDEzLjc5NjUgMTcuMjEwOSAxMy41NzUyIDE3LjUwMzlDMTMuMzU3MSAxNy43OTM2IDEzLjAwMzkgMTguMTgyNiAxMi41MTU2IDE4LjY3MDlMMTEuNTk3NyAxOS43MzA1SDE0LjM5NTVWMjFaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMC42NDkzIDQuMTg3NVY0Ljg3MzA1QzEwLjY0OTMgNC45MjM4MyAxMC42Mjg0IDQuOTY2OCAxMC41ODY3IDUuMDAxOTVDMTAuNTQ0OSA1LjAzNzExIDEwLjQ5NTUgNS4wNTQ2OSAxMC40Mzg0IDUuMDU0NjlIOC40NzM5NlY5LjgxMjVDOC40NzM5NiA5Ljg2MzI4IDguNDU0MTkgOS45MDcyMyA4LjQxNDYzIDkuOTQ0MzRDOC4zNzUwOCA5Ljk4MTQ1IDguMzI2NzQgMTAgOC4yNjk2MSAxMEg3LjM3OTdDNy4zMjI1NyAxMCA3LjI3MzEzIDkuOTgyNDIgNy4yMzEzOCA5Ljk0NzI3QzcuMTg5NjMgOS45MTIxMSA3LjE2ODc1IDkuODY3MTkgNy4xNjg3NSA5LjgxMjVWNS4wNTQ2OUg1LjIxMDk0QzUuMTUzODEgNS4wNTQ2OSA1LjEwNDM3IDUuMDM3MTEgNS4wNjI2MiA1LjAwMTk1QzUuMDIwODcgNC45NjY4IDUgNC45MjM4MyA1IDQuODczMDVWNC4xODc1QzUgNC4xMzI4MSA1LjAxOTc4IDQuMDg3ODkgNS4wNTkzMyA0LjA1MjczQzUuMDk4ODggNC4wMTc1OCA1LjE0OTQyIDQgNS4yMTA5NCA0SDEwLjQzODRDMTAuNDk1NSA0IDEwLjU0NDkgNC4wMTg1NSAxMC41ODY3IDQuMDU1NjZDMTAuNjI4NCA0LjA5Mjc3IDEwLjY0OTMgNC4xMzY3MiAxMC42NDkzIDQuMTg3NVpNMTcuNDkxOCA0LjE2OTkyTDE3Ljk5OTMgOS44MDA3OEMxOC4wMDM3IDkuODUxNTYgMTcuOTg2MiA5Ljg5ODQ0IDE3Ljk0NjYgOS45NDE0MUMxNy45MDI3IDkuOTgwNDcgMTcuODUyMSAxMCAxNy43OTUgMTBIMTYuOTExN0MxNi44NTg5IDEwIDE2LjgxMjggOS45ODM0IDE2Ljc3MzIgOS45NTAyQzE2LjczMzcgOS45MTY5OSAxNi43MTE3IDkuODc2OTUgMTYuNzA3MyA5LjgzMDA4TDE2LjQwNDEgNi4zODQ3N0wxNS4xNTgyIDguODc1QzE1LjEyMyA4Ljk0OTIyIDE1LjA1OTMgOC45ODYzMyAxNC45NjcgOC45ODYzM0gxNC4xNzZDMTQuMDg4MSA4Ljk4NjMzIDE0LjAyNDQgOC45NDkyMiAxMy45ODQ4IDguODc1TDEyLjc0NTYgNi4zNzMwNUwxMi40NDg5IDkuODMwMDhDMTIuNDQ0NSA5Ljg3Njk1IDEyLjQyMjUgOS45MTY5OSAxMi4zODMgOS45NTAyQzEyLjM0MzQgOS45ODM0IDEyLjI5NzMgMTAgMTIuMjQ0NiAxMEgxMS4zNTQ2QzExLjI5NzUgMTAgMTEuMjQ3IDkuOTgwNDcgMTEuMjAzIDkuOTQxNDFDMTEuMTYzNSA5LjkwMjM0IDExLjE0MzcgOS44NTU0NyAxMS4xNDM3IDkuODAwNzhMMTEuNjU3OSA0LjE2OTkyQzExLjY2MjMgNC4xMjMwNSAxMS42ODQyIDQuMDgzMDEgMTEuNzIzOCA0LjA0OThDMTEuNzYzMyA0LjAxNjYgMTEuODA5NSA0IDExLjg2MjIgNEgxMi43OTgzQzEyLjg4NjIgNCAxMi45NDk5IDQuMDM3MTEgMTIuOTg5NSA0LjExMTMzTDE0LjQzOTcgNy4xNTgyQzE0LjQ4MzYgNy4yNTE5NSAxNC41Mjc2IDcuMzUxNTYgMTQuNTcxNSA3LjQ1NzAzQzE0LjU4NDcgNy40Mjk2OSAxNC42MDU2IDcuMzgxODQgMTQuNjM0MSA3LjMxMzQ4QzE0LjY2MjcgNy4yNDUxMiAxNC42ODU4IDcuMTkzMzYgMTQuNzAzNCA3LjE1ODJMMTYuMTYwMiA0LjExMTMzQzE2LjE5OTcgNC4wMzcxMSAxNi4yNjM1IDQgMTYuMzUxNCA0SDE3LjI4MDhDMTcuMzM3OSA0IDE3LjM4NjMgNC4wMTY2IDE3LjQyNTggNC4wNDk4QzE3LjQ2NTQgNC4wODMwMSAxNy40ODc0IDQuMTIzMDUgMTcuNDkxOCA0LjE2OTkyWlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYgMjAuNDQ0NEMxNiAyMC41OTQ5IDE1Ljk0NDMgMjAuNzI1MSAxNS44MzMgMjAuODM1MUMxNS43MjE3IDIwLjk0NSAxNS41ODk4IDIxIDE1LjQzNzUgMjFINy41NjI1QzcuNDEwMTYgMjEgNy4yNzgzMiAyMC45NDUgNy4xNjY5OSAyMC44MzUxQzcuMDU1NjYgMjAuNzI1MSA3IDIwLjU5NDkgNyAyMC40NDQ0QzcgMjAuMjk0IDcuMDU1NjYgMjAuMTYzOCA3LjE2Njk5IDIwLjA1MzhMMTEuMTA0NSAxNi4xNjQ5QzExLjIxNTggMTYuMDU1IDExLjM0NzcgMTYgMTEuNSAxNkMxMS42NTIzIDE2IDExLjc4NDIgMTYuMDU1IDExLjg5NTUgMTYuMTY0OUwxNS44MzMgMjAuMDUzOEMxNS45NDQzIDIwLjE2MzggMTYgMjAuMjk0IDE2IDIwLjQ0NDRaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zLjU2MjUgNC4xMTMyOEMzLjI3MzQ0IDQuMDk3NjYgMy4wOTc2NiA0LjA4MjAzIDMuMDM1MTYgNC4wNjY0MUwzIDMuMDM1MTZDMy4xMDE1NiAzLjAyNzM0IDMuMjU3ODEgMy4wMjM0NCAzLjQ2ODc1IDMuMDIzNDRDMy45Mzc1IDMuMDIzNDQgNC4zNzUgMy4wMzkwNiA0Ljc4MTI1IDMuMDcwMzFDNS44MTI1IDMuMTI1IDYuNDYwOTQgMy4xNTIzNCA2LjcyNjU2IDMuMTUyMzRDNy4zOTg0NCAzLjE1MjM0IDguMDU0NjkgMy4xNDA2MiA4LjY5NTMxIDMuMTE3MTlDOS42MDE1NiAzLjA4NTk0IDEwLjE3MTkgMy4wNjY0MSAxMC40MDYyIDMuMDU4NTlDMTAuODQzOCAzLjA1ODU5IDExLjE3OTcgMy4wNTA3OCAxMS40MTQxIDMuMDM1MTZMMTEuNDAyMyAzLjE5OTIyTDExLjQyNTggMy45NDkyMlY0LjA1NDY5QzEwLjk1NyA0LjEyNSAxMC40NzI3IDQuMTYwMTYgOS45NzI2NiA0LjE2MDE2QzkuNTAzOTEgNC4xNjAxNiA5LjE5NTMxIDQuMjU3ODEgOS4wNDY4OCA0LjQ1MzEyQzguOTQ1MzEgNC41NjI1IDguODk0NTMgNS4wNzgxMiA4Ljg5NDUzIDZDOC44OTQ1MyA2LjEwMTU2IDguODk2NDggNi4yMjg1MiA4LjkwMDM5IDYuMzgwODZDOC45MDQzIDYuNTMzMiA4LjkwNjI1IDYuNjMyODEgOC45MDYyNSA2LjY3OTY5TDguOTE3OTcgOS4zNjMyOEw5LjA4MjAzIDEyLjY0NDVDOS4xMjg5MSAxMy42MTMzIDkuMzI4MTIgMTQuNDAyMyA5LjY3OTY5IDE1LjAxMTdDOS45NTMxMiAxNS40NzI3IDEwLjMyODEgMTUuODMyIDEwLjgwNDcgMTYuMDg5OEMxMS40OTIyIDE2LjQ1NyAxMi4xODM2IDE2LjY0MDYgMTIuODc4OSAxNi42NDA2QzEzLjY5MTQgMTYuNjQwNiAxNC40Mzc1IDE2LjUzMTIgMTUuMTE3MiAxNi4zMTI1QzE1LjU1NDcgMTYuMTcxOSAxNS45NDE0IDE1Ljk3MjcgMTYuMjc3MyAxNS43MTQ4QzE2LjY1MjMgMTUuNDMzNiAxNi45MDYyIDE1LjE4MzYgMTcuMDM5MSAxNC45NjQ4QzE3LjMyMDMgMTQuNTI3MyAxNy41MjczIDE0LjA4MiAxNy42NjAyIDEzLjYyODlDMTcuODI0MiAxMy4wNTg2IDE3LjkwNjIgMTIuMTY0MSAxNy45MDYyIDEwLjk0NTNDMTcuOTA2MiAxMC4zMjgxIDE3Ljg5MjYgOS44MjgxMiAxNy44NjUyIDkuNDQ1MzFDMTcuODM3OSA5LjA2MjUgMTcuNzk0OSA4LjU4Mzk4IDE3LjczNjMgOC4wMDk3N0MxNy42Nzc3IDcuNDM1NTUgMTcuNjI1IDYuODEyNSAxNy41NzgxIDYuMTQwNjJMMTcuNTMxMiA1LjQ0OTIyQzE3LjQ5MjIgNC45MjU3OCAxNy4zOTg0IDQuNTgyMDMgMTcuMjUgNC40MTc5N0MxNi45ODQ0IDQuMTQ0NTMgMTYuNjgzNiA0LjAxMTcyIDE2LjM0NzcgNC4wMTk1M0wxNS4xNzU4IDQuMDQyOTdMMTUuMDExNyA0LjAwNzgxTDE1LjAzNTIgM0gxNi4wMTk1TDE4LjQyMTkgMy4xMTcxOUMxOS4wMTU2IDMuMTQwNjIgMTkuNzgxMiAzLjEwMTU2IDIwLjcxODggM0wyMC45Mjk3IDMuMDIzNDRDMjAuOTc2NiAzLjMyMDMxIDIxIDMuNTE5NTMgMjEgMy42MjEwOUMyMSAzLjY3NTc4IDIwLjk4NDQgMy43OTY4OCAyMC45NTMxIDMuOTg0MzhDMjAuNjAxNiA0LjA3ODEyIDIwLjI3MzQgNC4xMjg5MSAxOS45Njg4IDQuMTM2NzJDMTkuMzk4NCA0LjIyMjY2IDE5LjA4OTggNC4yODkwNiAxOS4wNDMgNC4zMzU5NEMxOC45MjU4IDQuNDUzMTIgMTguODY3MiA0LjYxMzI4IDE4Ljg2NzIgNC44MTY0MUMxOC44NjcyIDQuODcxMDkgMTguODczIDQuOTc2NTYgMTguODg0OCA1LjEzMjgxQzE4Ljg5NjUgNS4yODkwNiAxOC45MDIzIDUuNDEwMTYgMTguOTAyMyA1LjQ5NjA5QzE4Ljk2NDggNS42NDQ1MyAxOS4wNTA4IDcuMTkxNDEgMTkuMTYwMiAxMC4xMzY3QzE5LjIwNyAxMS42NjAyIDE5LjE0ODQgMTIuODQ3NyAxOC45ODQ0IDEzLjY5OTJDMTguODY3MiAxNC4yOTMgMTguNzA3IDE0Ljc2OTUgMTguNTAzOSAxNS4xMjg5QzE4LjIwNyAxNS42MzY3IDE3Ljc2OTUgMTYuMTE3MiAxNy4xOTE0IDE2LjU3MDNDMTYuNjA1NSAxNy4wMTU2IDE1Ljg5NDUgMTcuMzYzMyAxNS4wNTg2IDE3LjYxMzNDMTQuMjA3IDE3Ljg3MTEgMTMuMjEwOSAxOCAxMi4wNzAzIDE4QzEwLjc2NTYgMTggOS42NTYyNSAxNy44MjAzIDguNzQyMTkgMTcuNDYwOUM3LjgxMjUgMTcuMDkzOCA3LjExMzI4IDE2LjYxNzIgNi42NDQ1MyAxNi4wMzEyQzYuMTY3OTcgMTUuNDM3NSA1Ljg0Mzc1IDE0LjY3NTggNS42NzE4OCAxMy43NDYxQzUuNTQ2ODggMTMuMTIxMSA1LjQ4NDM4IDEyLjE5NTMgNS40ODQzOCAxMC45Njg4VjcuMDY2NDFDNS40ODQzOCA1LjU5NzY2IDUuNDE3OTcgNC43NjU2MiA1LjI4NTE2IDQuNTcwMzFDNS4wODk4NCA0LjI4OTA2IDQuNTE1NjIgNC4xMzY3MiAzLjU2MjUgNC4xMTMyOFpNMjEgMjAuNjI1VjE5Ljg3NUMyMSAxOS43NjU2IDIwLjk2NDggMTkuNjc1OCAyMC44OTQ1IDE5LjYwNTVDMjAuODI0MiAxOS41MzUyIDIwLjczNDQgMTkuNSAyMC42MjUgMTkuNUgzLjM3NUMzLjI2NTYyIDE5LjUgMy4xNzU3OCAxOS41MzUyIDMuMTA1NDcgMTkuNjA1NUMzLjAzNTE2IDE5LjY3NTggMyAxOS43NjU2IDMgMTkuODc1VjIwLjYyNUMzIDIwLjczNDQgMy4wMzUxNiAyMC44MjQyIDMuMTA1NDcgMjAuODk0NUMzLjE3NTc4IDIwLjk2NDggMy4yNjU2MiAyMSAzLjM3NSAyMUgyMC42MjVDMjAuNzM0NCAyMSAyMC44MjQyIDIwLjk2NDggMjAuODk0NSAyMC44OTQ1QzIwLjk2NDggMjAuODI0MiAyMSAyMC43MzQ0IDIxIDIwLjYyNVpcXFwiIGZpbGw9XFxcImJsYWNrXFxcIj48L3BhdGg+PC9zdmc+XCIiXSwic291cmNlUm9vdCI6IiJ9