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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/testing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/beui.js":
/*!*********************!*\
  !*** ./src/beui.js ***!
  \*********************/
/*! exports provided: icons, mycyan, tooltips, textTools, addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
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

function tooltips(){
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
    ttin.style.fontSize="12px";
    ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "4px";
    ttin.style.boxShadow = "2px 2px 2px 1px gray";
    ttin.style.right = "50%";
    ttin.style.bottom = "8px";

    document.body.appendChild(tt);

    window.addEventListener("mousemove" , function(e){
        let ttb = tt.getBoundingClientRect().height;
        tt.style.top = (e.clientY - ttb + window.scrollY) + "px";
        tt.style.left = e.clientX + "px";

    })
        window.addEventListener("mouseover" , function(e){
        if(e.target&&e.target.dataset.hint){
        ttin.innerHTML = e.target.dataset.hint;
       // tt.style.top = e.clientY + "px";
          //  tt.style.left = e.clientX + "px";
        tt.style.display = "block";
        }else{            
            tt.style.display = "none";
        }
    })
}

function textTools(){
    let ttools = document.createElement("div");
    ttools.style.minWidth = "100px";
    ttools.classList.add("text_toolbox");
    //ttools.style.minHeight = "24px";
    ttools.style.backgroundColor = mycyan;
    ttools.style.position = "absolute";
    ttools.style.display = "none";
    ttools.style.padding="0px 4px";
    console.log("append text tools")
    document.body.appendChild(ttools);
    //buttons
    function addButton(lbl,func , hint){
        let b = document.createElement("div");
        b.style.display = "inline-block";
        b.innerHTML = lbl;
        b.style.width = "18px";
        b.style.height="18px";
        b.style.overflow = "hidden";
        b.addEventListener("mousedown" , func);
        b.classList.add("text_toolbox");
        b.style.cursor = "pointer";
        b.style.padding = "4px";
        let sv = b.querySelector("svg");
        sv.style.pointerEvents ="none";//.style.pointerEvents("none");
        if(hint){b.dataset.hint = hint};
        ttools.appendChild(b);
    }

    addButton(icons.bold , function(e){
        console.log("bold" , document.getSelection())
        document.execCommand("bold");
        e.preventDefault();
    } , "Bold")
    addButton(icons.italic , function(e){
        console.log("italic" , document.getSelection())
        document.execCommand("italic");
        e.preventDefault();
    } , "Italic")
    addButton(icons.underline , function(e){
        //console.log("italic" , document.getSelection())
        document.execCommand("underline");
        e.preventDefault();
    } , "Underline")
    addButton(icons.strike , function(e){
        //console.log("italic" , document.getSelection())
        document.execCommand("strikeThrough");
        e.preventDefault();
    } , "Strike")
    /*
    addButton("small" , function(e){
        console.log("small" , document.getSelection())
        document.execCommand("decreaseFontSize");
        e.preventDefault();
    })
    */
    addButton(icons.sup , function(e){
       // console.log("italic" , document.getSelection())
        document.execCommand("superscript");
        e.preventDefault();
    } , "Superscript")
    addButton(icons.sub , function(e){
        // console.log("italic" , document.getSelection())
         document.execCommand("subscript");
         e.preventDefault();
     } , "Subscript")
    addButton(icons.link , function(e){
        let ur = prompt("enter URL");
        if(!ur){ return }
        //console.log("link" , document.getSelection())
        document.execCommand("createLink" , false ,  unescape(ur));
        e.preventDefault();
    } , "Make link")

    //

    document.body.addEventListener("click" , function(e){
        //console.log(e.target.getAttribute("contenteditable"));
    if(e.target.getAttribute("contenteditable") && !e.target.dataset.no_text_toolbox){
        //console.log("click" , ttools);
        let tgt = e.target.getBoundingClientRect();
        ttools.style.left = tgt.left + "px";
        ttools.style.display = "flex";
        let tthe = ttools.getBoundingClientRect().height;
        ttools.style.top = (tgt.top-tthe + window.scrollY) + "px";
        
    }else if(e.target.classList.contains("text_toolbox")){
        //ttools.style.display = "block";
    }else{
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

function addBlockControls(block, items , ed) {
    if (!items&&ed) {
        items = [
            {
                label: "move block up",
                icon: "🡡",
                handler: function () { ed.moveUp(block.dataset.block_id)}
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
    }else{
        items=[];
    }
    //
    block.style.position = "relative";
    let ourclass = "ctrls"+block.dataset.block_id;
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
    ctrls.addEventListener("mouseover", () => {ctrls.style.zIndex=6 ; ctrls.style.display = "block"} );
    ctrls.addEventListener("mouseout", () => {ctrls.style.zIndex="initial" ;  ctrls.style.display = "none"});

    block.addEventListener("mouseover", () => { ctrls.style.zIndex=5 ; ctrls.style.display = "block"});
    block.addEventListener("mouseout", () => { ctrls.style.zIndex="initial" ; ctrls.style.display = "none"});



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

/***/ }),

/***/ "./src/testing.js":
/*!************************!*\
  !*** ./src/testing.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockeditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockeditor.js */ "./src/blockeditor.js");
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

var myeditor = _blockeditor_js__WEBPACK_IMPORTED_MODULE_0__["makeTypicalEditor"]("#edited_content");
myeditor.start(testdata);

//save test
let sb = document.createElement("input");
sb.type="button";
sb.value = "save";
sb.addEventListener('click' , function(){myeditor.save()});
document.body.appendChild(sb)




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdmcvdGV4dF9ib2xkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3RleHRfaXRhbGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnL3RleHRfbGluay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3N0cmlrZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3N1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3N1cC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy90ZXh0X3VuZGVybGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPOztBQUVQLGFBQWEsbUJBQU8sQ0FBQyxvREFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLHdEQUF1QjtBQUM5QyxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBMEI7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLHdEQUF1QjtBQUM5QyxZQUFZLG1CQUFPLENBQUMsa0RBQW9CO0FBQ3hDLFlBQVksbUJBQU8sQ0FBQyxrREFBb0I7QUFDeEMsYUFBYSxtQkFBTyxDQUFDLG9EQUFxQjs7O0FBR25DOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQiwrQkFBK0I7QUFDcEcsOENBQThDLDhCQUE4QiwrQkFBK0I7O0FBRTNHLCtDQUErQyx1QkFBdUIsK0JBQStCO0FBQ3JHLDhDQUE4QywrQkFBK0IsOEJBQThCOzs7O0FBSTNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNqVUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7O0FBRXRCO0FBQ1A7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7O0FBR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLGtCQUFrQjtBQUNqQyx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLG1EQUFnQjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQVc7QUFDbkIsUUFBUSwrQ0FBWTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLFlBQVksbURBQWdCO0FBQzVCLFlBQVksc0RBQW1COztBQUUvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNENBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDRDQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCx1QkFBdUIsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQiw0QkFBNEI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQix1QkFBdUIsNEJBQTRCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvQkFBb0Isc0JBQXNCLDRCQUE0QjtBQUN2Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQiwrQkFBK0IsS0FBSyxrQ0FBa0M7QUFDM0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUN6dUJBLDh6Rzs7Ozs7Ozs7Ozs7QUNBQSw4NkQ7Ozs7Ozs7Ozs7O0FDQUEsMDZGOzs7Ozs7Ozs7OztBQ0FBLG03RTs7Ozs7Ozs7Ozs7QUNBQSxvdEM7Ozs7Ozs7Ozs7O0FDQUEsOGxFOzs7Ozs7Ozs7OztBQ0FBLHV1Rjs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQzJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLGVBQWUsaUVBQXdCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdCQUFnQjtBQUN6RCIsImZpbGUiOiJ0ZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Rlc3RpbmcuanNcIik7XG4iLCJleHBvcnQgdmFyIGljb25zID0ge307XG5cbmljb25zLmJvbGQgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9ib2xkLnN2Z1wiKTtcbmljb25zLml0YWxpYyA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2l0YWxpYy5zdmdcIik7XG5pY29ucy51bmRlcmxpbmUgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF91bmRlcmxpbmUuc3ZnXCIpO1xuaWNvbnMuc3RyaWtlID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3RyaWtlLnN2Z1wiKTtcbmljb25zLnN1cCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1cC5zdmdcIik7XG5pY29ucy5zdWIgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdWIuc3ZnXCIpO1xuaWNvbnMubGluayA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2xpbmsuc3ZnXCIpO1xuXG5cbmV4cG9ydCB2YXIgbXljeWFuID0gXCIjM0VEOUUzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b29sdGlwcygpe1xuICAgIGxldCB0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHR0LnN0eWxlLnpJbmRleCA9IDIwO1xuICAgIHR0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjsgICAgXG5cbiAgICBsZXQgdHRpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuYXBwZW5kQ2hpbGQodHRpbik7XG4gICAgdHRpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTAwJSwgMTAwJSwgMTAwJSwgMC44KVwiO1xuICAgIHR0aW4uc3R5bGUuY29sb3IgPSBcIiM4ODg4ODhcIjtcbiAgICB0dGluLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0dGluLnN0eWxlLmZvbnRTaXplPVwiMTJweFwiO1xuICAgIHR0aW4uc3R5bGUucGFkZGluZyA9IFwiNHB4IDhweFwiO1xuICAgIHR0aW4uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjRweFwiO1xuICAgIHR0aW4uc3R5bGUuYm94U2hhZG93ID0gXCIycHggMnB4IDJweCAxcHggZ3JheVwiO1xuICAgIHR0aW4uc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIHR0aW4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHQpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZihlLnRhcmdldCYmZS50YXJnZXQuZGF0YXNldC5oaW50KXtcbiAgICAgICAgdHRpbi5pbm5lckhUTUwgPSBlLnRhcmdldC5kYXRhc2V0LmhpbnQ7XG4gICAgICAgLy8gdHQuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9ZWxzZXsgICAgICAgICAgICBcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9vbHMoKXtcbiAgICBsZXQgdHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dG9vbHMuc3R5bGUubWluV2lkdGggPSBcIjEwMHB4XCI7XG4gICAgdHRvb2xzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgLy90dG9vbHMuc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgdHRvb2xzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG15Y3lhbjtcbiAgICB0dG9vbHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dG9vbHMuc3R5bGUucGFkZGluZz1cIjBweCA0cHhcIjtcbiAgICBjb25zb2xlLmxvZyhcImFwcGVuZCB0ZXh0IHRvb2xzXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dG9vbHMpO1xuICAgIC8vYnV0dG9uc1xuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihsYmwsZnVuYyAsIGhpbnQpe1xuICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGIuaW5uZXJIVE1MID0gbGJsO1xuICAgICAgICBiLnN0eWxlLndpZHRoID0gXCIxOHB4XCI7XG4gICAgICAgIGIuc3R5bGUuaGVpZ2h0PVwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIgLCBmdW5jKTtcbiAgICAgICAgYi5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgICAgICBiLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBiLnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuICAgICAgICBsZXQgc3YgPSBiLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gICAgICAgIHN2LnN0eWxlLnBvaW50ZXJFdmVudHMgPVwibm9uZVwiOy8vLnN0eWxlLnBvaW50ZXJFdmVudHMoXCJub25lXCIpO1xuICAgICAgICBpZihoaW50KXtiLmRhdGFzZXQuaGludCA9IGhpbnR9O1xuICAgICAgICB0dG9vbHMuYXBwZW5kQ2hpbGQoYik7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGljb25zLmJvbGQgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJib2xkXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSAsIFwiQm9sZFwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5pdGFsaWMgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIml0YWxpY1wiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gLCBcIkl0YWxpY1wiKVxuICAgIGFkZEJ1dHRvbihpY29ucy51bmRlcmxpbmUgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSAsIFwiVW5kZXJsaW5lXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLnN0cmlrZSAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHJpa2VUaHJvdWdoXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSAsIFwiU3RyaWtlXCIpXG4gICAgLypcbiAgICBhZGRCdXR0b24oXCJzbWFsbFwiICwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic21hbGxcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImRlY3JlYXNlRm9udFNpemVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgICovXG4gICAgYWRkQnV0dG9uKGljb25zLnN1cCAsIGZ1bmN0aW9uKGUpe1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gLCBcIlN1cGVyc2NyaXB0XCIpXG4gICAgYWRkQnV0dG9uKGljb25zLnN1YiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1YnNjcmlwdFwiKTtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgfSAsIFwiU3Vic2NyaXB0XCIpXG4gICAgYWRkQnV0dG9uKGljb25zLmxpbmsgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgbGV0IHVyID0gcHJvbXB0KFwiZW50ZXIgVVJMXCIpO1xuICAgICAgICBpZighdXIpeyByZXR1cm4gfVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibGlua1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiICwgZmFsc2UgLCAgdW5lc2NhcGUodXIpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gLCBcIk1ha2UgbGlua1wiKVxuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpO1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tcIiAsIHR0b29scyk7XG4gICAgICAgIGxldCB0Z3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdHRvb2xzLnN0eWxlLmxlZnQgPSB0Z3QubGVmdCArIFwicHhcIjtcbiAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbGV0IHR0aGUgPSB0dG9vbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dG9vbHMuc3R5bGUudG9wID0gKHRndC50b3AtdHRoZSArIHdpbmRvdy5zY3JvbGxZKSArIFwicHhcIjtcbiAgICAgICAgXG4gICAgfWVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dF90b29sYm94XCIpKXtcbiAgICAgICAgLy90dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9ZWxzZXtcbiAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgfSk7XG4gICAgIFxuIFxuICAgIFxufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsdXNCdXR0b24oYmxvY2ssIG1lbnUpIHtcbiAgICBibG9jay5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBsZXQgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgaWYgKCFtZW51KSB7XG4gICAgICAgIG1lbnUgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUgY2xpY2tlZFwiKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0MlwiLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwibWVudTIgY2xpY2tlZFwiKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0M1wiLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwibWVudTMgY2xpY2tlZFwiKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG4gICAgLy9tZW51XG4gICAgbGV0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKTtcbiAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZGQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgZGQuc3R5bGUudG9wID0gXCIxMDAlXCI7XG4gICAgZGQuc3R5bGUubGVmdCA9IDA7XG4gICAgZGQuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGRkLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUubWF4V2lkdGggPSBcIjEwMHB4XCI7XG4gICAgZGQuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMnB4IDZweCByZ2JhKDAlLCAwJSwgMCUsIDAuMzA0KVwiXG4gICAgLy9kZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmF5XCJcbiAgICBtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGVsZW1lbnQuaWNvbjtcbiAgICAgICAgLy9taS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIG1pLnN0eWxlLnBhZGRpbmcgPSBcIjJweFwiXG4gICAgICAgIG1pLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICAgIG1pLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XG4gICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBtaS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkZC5hcHBlbmRDaGlsZChtaSlcbiAgICB9KTtcbiAgICAvL1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGRkKTtcblxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZG93blwiKTtcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjAxMSlcIjtcbiAgICBidXR0b24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuY29sb3IgPSBteWN5YW47XG4gICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIC8vYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTJweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IC41c1wiO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmhpbnQgPSBcIkFkZCBuZXcgYmxvY2tcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG5cblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gNTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL21lbnVoaWRkZW4gPSAhbWVudWhpZGRlbjtcbiAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIilcbiAgICAgICAgLy8gLmZvckVhY2goZT0+ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKTtcbiAgICAgICAgbGV0IGlzaGlkZGVuID0gZGQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIjtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpc2hpZGRlbilcbiAgICAgICAgaWYgKCFpc2hpZGRlbikge1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxLjA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZGQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBibG9jay5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmxvY2tDb250cm9scyhibG9jaywgaXRlbXMgLCBlZCkge1xuICAgIGlmICghaXRlbXMmJmVkKSB7XG4gICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIvCfoaFcIixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCLwn6GjXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcImRlbGV0ZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwi4pyVXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5yZW1vdmVCbG9jayhibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9ZWxzZXtcbiAgICAgICAgaXRlbXM9W107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiK2Jsb2NrLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgbGV0IGN0cmxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKFwiY29tbW9uX2Jsb2NrX2NvbnRyb2xzXCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQob3VyY2xhc3MpO1xuICAgIGN0cmxzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XG4gICAgY3RybHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbXljeWFuO1xuICAgIGN0cmxzLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge2N0cmxzLnN0eWxlLnpJbmRleD02IDsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIn0gKTtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge2N0cmxzLnN0eWxlLnpJbmRleD1cImluaXRpYWxcIiA7ICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJ9KTtcblxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXg9NSA7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJ9KTtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXg9XCJpbml0aWFsXCIgOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJ9KTtcblxuXG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGUuaWNvbjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLmhhbmRsZXIoYmxvY2suZGF0YXNldC5ibG9ja19pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtaS5kYXRhc2V0LmhpbnQgPSBlLmxhYmVsO1xuICAgICAgICBjdHJscy5hcHBlbmRDaGlsZChtaSk7XG4gICAgfSk7XG5cbiAgICBibG9jay5hcHBlbmRDaGlsZChjdHJscylcblxufSIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL2JldWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrRWRpdG9yKHtcbiAgICBzZWxlY3RvclxufSkge1xuICAgIGNvbnN0IG15ID0gdGhpcztcbiAgICAvL1xuICAgIGxldCBtaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5lLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3Jfb3V0ZXJfY29udGFpbmVyXCIpO1xuICAgIG1pbmUuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgbGV0IHRoZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhleS5hcHBlbmRDaGlsZChtaW5lKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBtaW5lOyAvL3RoaXMgZWxlbWVudCBpcyBtaW5lXG5cblxuICAgIHRoaXMuZWRpdG9ycyA9IHtcbiAgICAgICAgLy9cInplcm9cIjp7XG4gICAgICAgIC8vXG4gICAgICAgIC8vfVxuICAgIH07IC8vIG51bGw7IC8vcGFyYW1zLmVkaXRvcnM7IC8vICBhdmFpbGFibGUgYmxvY2tzIGVkaXRvcnNcbiAgICB0aGlzLmJsb2NrcyA9IG51bGw7IC8vIGJsb2NrcyBhcnJheVxuICAgIHRoaXMuYWRkTWVudSA9IFtdO1xuXG4gICAgdmFyIF9jdXJyZW50X2lkID0gMDtcblxuICAgIHRoaXMuX21ha2VJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX2N1cnJlbnRfaWQrKztcbiAgICAgICAgcmV0dXJuIF9jdXJyZW50X2lkO1xuICAgIH1cblxuICAgIHRoaXMudXBsb2FkID0gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyB1cmw6IFwia2l0dHkuanBlZ1wiIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VXBsb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICB0aGlzLnVwbG9hZCA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIC8vYWRkIHNlcm8gYmxvY2tcblxuICAgICAgICAvL3RoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IFtdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRpdG9ycylcbiAgICAgICAgLy9hZGQgbWVudVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkZWQgaGFuZGxlciBmb3JcIiwgZSk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbXkuZWRpdG9yc1tlXTtcbiAgICAgICAgICAgIG15LmFkZE1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVmaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXkuYWRkTmV3QmxvY2soZSwgbnVsbCwgcmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vXG5cbiAgICAgICAgbGV0IHplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB6ZXJvLmNsYXNzTGlzdC5hZGQoXCJzdGFydGluZ19ibG9ja1wiKTtcbiAgICAgICAgemVyby5zdHlsZS5oZWlnaHQgPSBcIjhweFwiO1xuICAgICAgICB6ZXJvLnN0eWxlLndpZnRoID0gXCIxMDAlXCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luTGVmdCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5kYXRhc2V0LmJsb2NrX2lkID0gXCJzdGFydFwiO1xuXG4gICAgICAgIFVJLmFkZFBsdXNCdXR0b24oemVybywgdGhpcy5hZGRNZW51KTtcbiAgICAgICAgXG4gICAgICAgIG1pbmUuYXBwZW5kQ2hpbGQoemVybyk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgICAgIFVJLnRleHRUb29scygpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2Nrc1tpZF07XG4gICAgfVxuXG4gICAgdGhpcy5JRDJJbmRleCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL1xuICAgICAgICBsZXQgciA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGFzZXQuYmxvY2tfaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByID0gaVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgdGhpcy5JbmRleDJJRCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KS5kYXRhc2V0LmJsb2NrX2lkO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbSh0aGlzLklEMkluZGV4KGlkKSk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4ID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdGhpcy5hZGROZXdCbG9jayhkLnR5cGUsIGQuZGF0YSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlVXAgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICBpZiAoYmluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL2ZpbmQgcHJldiBibG9ja1xuICAgICAgICBsZXQgdXBwZXIgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4IC0gMSk7XG4gICAgICAgIGlmICh1cHBlcikge1xuICAgICAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIHVwcGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlRG93biA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vbGFzdD9cbiAgICAgICAgaWYgKGJpbmRleCArIDEgPT0gT2JqZWN0LmtleXModGhpcy5ibG9ja3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0bmV4dCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggKyAyKTtcbiAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgaWYgKG5leHRuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCBuZXh0bmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3dlIGF0IHByZWxhc3QgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoZWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yID0gZnVuY3Rpb24gKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWFrZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHBhc3RlXG4gICAgfSkge1xuICAgICAgICB0aGlzLmVkaXRvcnNbdHlwZV0gPSB7XG4gICAgICAgICAgICBtYWtlLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgcGFzdGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzT24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJmID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgYmYuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIHJlZmlkKSB7IC8vcmVmPWluc3RlcnQgYWZ0ZXIgdGhhdCBibG9ja1xuICAgICAgICAvL2lmIHRoZXJlIGlzIHJlZiBpZCwgd2UgaGF2ZSB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgICAgLy9maW5kIG5leHQgZWxlbWVudFxuICAgICAgICBpZiAocmVmaWQgPT0gXCJzdGFydFwiKSB7XG4gICAgICAgICAgICAvLyB2YXIgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KDApO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZmlkKSB7XG4gICAgICAgICAgICBsZXQgbmV4dGlkeCA9IHRoaXMuSUQySW5kZXgocmVmaWQpICsgMTtcbiAgICAgICAgICAgIHZhciByZWZlbCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChuZXh0aWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIGJsb2NrIG9mIHR5cGUgXG4gICAgICAgIGlmICh0eXBlIGluIHRoaXMuZWRpdG9ycykge1xuXG5cbiAgICAgICAgICAgIHZhciBkb21ibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgYklEID0gdGhpcy5fbWFrZUlEKCk7XG4gICAgICAgICAgICBsZXQgYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZG9tYmxvY2suYXBwZW5kQ2hpbGQoYmNvbnRlbnQpO1xuICAgICAgICAgICAgZG9tYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl91bml0XCIpO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja19pZCA9IGJJRDtcbiAgICAgICAgICAgIGRvbWJsb2NrLmRhdGFzZXQuYmxvY2tfdHlwZSA9IHR5cGU7XG5cblxuICAgICAgICAgICAgYmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5lZGl0b3JzW3R5cGVdLm1ha2UoZGF0YSwgYmNvbnRlbnQsIGJJRCwgdGhpcyk7IC8vYmxvY2sgbWFkZVxuICAgICAgICAgICAgdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICAgICAgVUkuYWRkUGx1c0J1dHRvbihkb21ibG9jaywgdGhpcy5hZGRNZW51KTtcbiAgICAgICAgICAgIFVJLmFkZEJsb2NrQ29udHJvbHMoZG9tYmxvY2ssIG51bGwsIHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGVkaXRvciBmb3JcIiwgdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIERPTSBlbGVtZW50IGZvciBlZGl0b3JcblxuICAgICAgICAvLyBkb21ibG9jay5hcHBlbmRDaGlsZChibG9jay5lbGVtZW50KTtcblxuXG4gICAgICAgIC8vYWRkIGNvcnJlc3BvbmRpbmcgZG9tIGVsLiB0byBjb250YWluZXJcbiAgICAgICAgLy9pZihzdGFydCl7XG5cbiAgICAgICAgLy99XG4gICAgICAgIGlmIChyZWZpZCAmJiByZWZlbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkb21ibG9jaywgcmVmZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvbWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIGJJRDtcbiAgICB9IC8vYWRkIG5ldyBibG9ja1xuXG4gICAgdGhpcy5yZW1vdmVCbG9jayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL2ZpbmQgYmxvY2sgaW5kZXhcbiAgICAgICAgbGV0IGVsaWR4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vYW5ub3VuY2UgZGVsZXRpb24gdG8gYmxvY2tcbiAgICAgICAgaWYgKFwiYmVmb3JlRGVsZXRlXCIgaW4gdGhpcy5ibG9ja3NbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uYmVmb3JlRGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlICh0aGlzLmJsb2Nrc1tpZF0pO1xuICAgIH0gLy9yZW1vdmUgYmxvY2tcblxuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGR0ID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgZHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBlLmRhdGFzZXQuYmxvY2tfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG15LmJsb2Nrc1tlLmRhdGFzZXQuYmxvY2tfaWRdLnNhdmUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgbGV0IG15ZGF0YSA9IHtcbiAgICAgICAgICAgIFwiYmxvY2tzXCI6IGR0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdG9yIHNhdmluZ1wiLCBteWRhdGEpO1xuICAgICAgICByZXR1cm4gbXlkYXRhO1xuICAgIH1cblxufVxuXG52YXIgY29uc3RydWN0b3JzID0ge307XG52YXIgdGVtcGxhdGVzID0ge31cblxudGVtcGxhdGVzLmZvcm1Sb3cgPSBmdW5jdGlvbiAoZWxlbWVudHNfYXJyYXkpIHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjhweFwiO1xuICAgIGVsZW1lbnRzX2FycmF5LmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIGUuc3R5bGUubWFyZ2luTGVmdCA9IFwiOHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUubm9kZU5hbWUgPT0gXCJaXCIpIHtcbiAgICAgICAgICAgIGUuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgdGJ4LnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHRieC5zdHlsZS5mb250U2l6ZSA9IFwiLjhlbVwiXG4gICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGJ4LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuXG4gICAgYmxvY2suZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRieCk7IC8vYWRkIHRvIGVkaXRvcl9pdGVtLCAhbm90ISBibG9jayBjb250ZW50IGNvbnRhaW5lclxuICAgIGJsb2NrLmFkZFRvVG9vbGJhciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB0YnguYXBwZW5kQ2hpbGQoZWwpXG4gICAgfVxufVxuXG50ZW1wbGF0ZXMudHdvUGFuZWxzID0gZnVuY3Rpb24gKGJsb2NrKSB7XG4gICAgLy9sZXQgbW9kZSA9IFwicHJldmlld1wiO1xuICAgIGxldCBwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHAuY2xhc3NMaXN0LmFkZChcImJsb2NrX3ByZXZpZXdfcGFuZWxcIik7XG4gICAgcHAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIHBwLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHBwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIHBwLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgICBsZXQgZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVwLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0X3BhbmVsXCIpO1xuICAgIGVwLmNsYXNzTGlzdC5hZGQoXCJvbmVfb2ZfdHdvX3BhbmVsc1wiKTtcbiAgICBlcC5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICAvL2VwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgZXAuc3R5bGUuYm9yZGVyVG9wID0gXCIycHggc29saWQgXCIgKyBVSS5teWN5YW47XG4gICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVwLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgIC8vXG4gICAgbGV0IGVidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVidG4uY2xhc3NMaXN0LmFkZChcImVkaXRfYnV0dG9uXCIpO1xuICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgZWJ0bi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBlYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgZWJ0bi5zdHlsZS5wYWRkaW5nID0gXCIycHggNHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxuICAgIGVidG4uc3R5bGUuekluZGV4ID0gNTtcbiAgICBlYnRuLnN0eWxlLnJpZ2h0ID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGVkaXRtb2RlID0gZXAuc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKGVkaXRtb2RlKSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vXG4gICAgcHAuYXBwZW5kQ2hpbGQoZWJ0bik7XG4gICAgLy9cbiAgICBjb25zb2xlLmxvZyhibG9jaylcbiAgICBibG9jay5lbGVtZW50LmFwcGVuZENoaWxkKHBwKTtcbiAgICBibG9jay5lbGVtZW50LmFwcGVuZENoaWxkKGVwKTtcbiAgICAvL1xuICAgIGJsb2NrLmFkZFRvUHJldmlldyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHBwLmFwcGVuZENoaWxkKGUpO1xuICAgIH1cbiAgICBibG9jay5hZGRUb0VkaXRvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLmFwcGVuZENoaWxkKGUpO1xuICAgIH1cbiAgICBibG9jay5nb0VkaXRNb2RlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcblxuICAgIH1cbiAgICBibG9jay5nb1ByZXZpZXdNb2RlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuXG4gICAgfVxuICAgIGJsb2NrLmlzSW5FZGl0TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiKTtcbiAgICB9XG5cbn1cblxuY29uc3RydWN0b3JzLnBhcmFncmFwaCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBiYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAvL2JjLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZS13cmFwXCI7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmMpO1xuICAgIGxldCByZSA9IC88ZGl2fHB8aD4vZ2k7XG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBteTogdGhpcyxcbiAgICAgICAgaWQ6IGlkLCAvLyEhISEhISEhISEhISEhISEhISEgICAgXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge1xuICAgICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgZWRpdG9yOiBlZGl0b3IsXG4gICAgICAgIF9wOiBiYyxcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgY2xlYW46IGZ1bmN0aW9uICh0KSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9wLmlubmVySFRNTCA9IHRoaXMuZGF0YS50ZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3AuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibGMuX3AuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBwcmVzc2VkXCIsIGUuc2hpZnRLZXkgPT0gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBucCA9IGJsYy5lZGl0b3IuYWRkTmV3QmxvY2soXCJwYXJhZ3JhcGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgLy9ucCA9IG5ld2x5IGluc2VydGVkIGJsb2NrIGlkXG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmRpdmlkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGhyIC8+XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdHJ1Y3RvcnMuaGVhZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgLy9teXRhZy5cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICAvL2lkOiBpZCxcbiAgICAgICAgdGV4dDogZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIkhlYWRlclwiLFxuICAgICAgICBsZXZlbDogZGF0YSAmJiBkYXRhLmxldmVsID8gZGF0YS5sZXZlbCA6IDEsXG4gICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MKVxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aClcblxuICAgICAgICB9LFxuICAgICAgICAvL215dGFnOiBcblxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKTtcbiAgICAgICAgICAgIC8vdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiB0eHQsXG4gICAgICAgICAgICAgICAgXCJsZXZlbFwiOiB0aGlzLmxldmVsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBvcHRzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy9vcHRzLnR5cGU9XCJzZWxlY3RcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICBvcHQudmFsdWUgPSBpO1xuICAgICAgICBvcHQubGFiZWwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgaWYgKGkgPT0gYmxjLmxldmVsKSB7XG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIG9wdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbnYgPSBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGJsYy5sZXZlbCA9IG52O1xuICAgICAgICBibGMucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5jb2RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgbGV0IGNkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgcHJlLmFwcGVuZENoaWxkKGNkKTtcbiAgICBjZC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgY2QuZGF0YXNldC5ub190ZXh0X3Rvb2xib3ggPSB0cnVlO1xuICAgIGVsLmFwcGVuZENoaWxkKHByZSk7XG4gICAgbGV0IGxhbmdzID0gW1wiQXV0b1wiLCBcIkFyZHVpbm9cIiwgJ0phdmFTY3JpcHQnLCBcIlByb2Nlc3NpbmdcIiwgXCJQeXRob25cIiwgXCJDKytcIiwgXCJCYXNoXCIsIFwiQmFzaWNcIiwgXCJCcmFpbmZ1Y2tcIl07XG4gICAgLy9cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBtaS52YWx1ZSA9IGU7XG4gICAgICAgIG1pLmxhYmVsID0gZTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sYW5ndWFnZSAmJiBlID09IGRhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIG1pLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcbiAgICAvL1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2QuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIiMgIHR5cGVcXG4jICBoZXJlXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogY2QuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cyk7XG4gICAgcmV0dXJuIGJsYztcblxufVxuXG5jb25zdHJ1Y3RvcnMucmF3ID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG5cbiAgICBsZXQgZWRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGVkaS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGVkaS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBlZGkuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgZWRpLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIFwiICsgVUkubXljeWFuO1xuICAgIGVkaS5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmh0bWwpIHtcbiAgICAgICAgZWRpLnZhbHVlID0gZGF0YS5odG1sO1xuICAgIH1cblxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlZGkpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWw6IGVkaS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJsY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xuICAgIGJsY3RhZy5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgYmxjaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGJsY2luLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBsZXQgYmxmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBsZXQgYmxjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNpdGVcIik7XG4gICAgYmxmb290LmFwcGVuZENoaWxkKGJsY2l0ZSk7XG4gICAgYmxjaXRlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGNpbik7XG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsZm9vdCk7XG4gICAgYmxjaW4uaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcItCm0LjRgtCw0YLQsFwiO1xuICAgIGJsY2l0ZS5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwi0J/QvtC00L/QuNGB0YxcIlxuICAgIGxldCBibG9jayA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChibGN0YWcpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGJsY2luLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBibGNpdGUuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5pbWFnZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBmaWd0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGxldCBwaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwaW1nLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgbGV0IGZjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XG4gICAgZmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGZjLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCLQn9C+0LTQv9C40YFcIlxuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChwaW1nKTtcbiAgICBmaWd0YWcuYXBwZW5kQ2hpbGQoZmMpO1xuICAgIHBpbWcuc3JjID0gZGF0YSAmJiBkYXRhLmZpbGUgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGltYWdlXCIpXG4gICAgICAgIH0sXG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICBibGMuYWRkVG9QcmV2aWV3KGZpZ3RhZyk7XG4gICAgLy9lZGl0XG4gICAgLy8vL3VwbG9hZFxuICAgIGxldCB1cGxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGQudHlwZSA9IFwiZmlsZVwiO1xuICAgIHVwbGQuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIGxldCB1cGxkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGRidG4udmFsdWUgPSBcInVwbG9hZFwiO1xuICAgIHVwbGRidG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICB1cGxkYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlZGl0b3IudXBsb2FkKHVwbGQuZmlsZXNbMF0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHBpbWcuc3JjID0gci51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7IHBpbWcuc3JjID0gdGhpcy52YWx1ZTsgfSlcbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3NyY2xhYmVsLCBzcmNpbnB1dF0pKTtcbiAgICAvLy8vY2xhc3Nlc1xuICAgIC8vLy8vL3N0cmV0Y2hlZFxuICAgIGxldCBzdHJldGNobGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3RyZXRjaGxhYmVsLmlubmVySFRNTCA9IFwic3RyZXRjaGVkXCJcbiAgICBsZXQgc3RyZXRjaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN0cmV0Y2hlZC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHN0cmV0Y2hlZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICByaWdodC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZWZ0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vcmVzaXplLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZ3RhZy5jbGFzc0xpc3QucmVtb3ZlKFwic3RyZXRjaGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLnN0cmV0Y2hlZDtcbiAgICAvLy8vLy9ub3Jlc2l6ZVxuICAgIGxldCBucmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5ybGFiZWwuaW5uZXJIVE1MID0gXCJubyByZXNpemVcIlxuICAgIGxldCBub3Jlc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3Jlc2l6ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIG5vcmVzaXplLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IGlmICh0aGlzLmNoZWNrZWQpIHsgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZSB9IH07XG4gICAgbm9yZXNpemUuY2hlY2tlZCA9IGRhdGEgJiYgKGRhdGEubm9yZXNpemUgfHwgZGF0YS53aXRoYmFja2dyb3VuZCk7XG4gICAgLy8vLy9sZWZ0XG4gICAgbGV0IGxsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsbGFiZWwuaW5uZXJIVE1MID0gXCJsZWZ0XCJcbiAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZWZ0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbGVmdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyBpZiAodGhpcy5jaGVja2VkKSB7IHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTsgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZSB9IH07XG4gICAgbGVmdC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmxlZnQ7XG4gICAgLy8vL3JpZ2h0XG4gICAgbGV0IHJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBybGFiZWwuaW5uZXJIVE1MID0gXCJyaWdodFwiXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHJpZ2h0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcmlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHsgaWYgKHRoaXMuY2hlY2tlZCkgeyBsZWZ0LmNoZWNrZWQgPSBmYWxzZTsgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZSB9IH1cbiAgICByaWdodC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLnJpZ2h0O1xuXG4gICAgIC8vLy9ib3JkZXJcbiAgICAgbGV0IGJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgYmxhYmVsLmlubmVySFRNTCA9IFwiYm9yZGVyXCJcbiAgICAgbGV0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgYm9yZGVyLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgIGJvcmRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyBpZih0aGlzLmNoZWNrZWQpe3BpbWcuY2xhc3NMaXN0LmFkZChcImJvcmRlcmVkXCIpfWVsc2V7cGltZy5jbGFzc0xpc3QucmVtb3ZlKFwiYm9yZGVyZWRcIil9IH1cbiAgICAgYm9yZGVyLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuYm9yZGVyO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzdHJldGNobGFiZWwsIHN0cmV0Y2hlZCxcbiAgICAgICAgbnJsYWJlbCwgbm9yZXNpemUsXG4gICAgICAgIGxsYWJlbCwgbGVmdCxcbiAgICAgICAgcmxhYmVsLCByaWdodCxcbiAgICBibGFiZWwsYm9yZGVyXSkpO1xuXG4gICAgLy9cbiAgICBibGMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0cmV0Y2hlZDogc3RyZXRjaGVkLmNoZWNrZWQsXG4gICAgICAgICAgICByaWdodDogcmlnaHQuY2hlY2tlZCxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQuY2hlY2tlZCxcbiAgICAgICAgICAgIG5vcmVzaXplOiBub3Jlc2l6ZS5jaGVja2VkLFxuICAgICAgICAgICAgd2l0aEJhY2tncm91bmQ6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICBib3JkZXI6IGJvcmRlci5jaGVja2VkLFxuICAgICAgICAgICAgd2l0aEJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICBjYXB0aW9uOiBmYy5pbm5lckhUTUwsXG4gICAgICAgICAgICBmaWxlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBzcmNpbnB1dC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhICYmIGRhdGEuZmlsZSAmJiBkYXRhLmZpbGUudXJsKSB7XG4gICAgICAgIGJsYy5nb1ByZXZpZXdNb2RlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxjLmdvRWRpdE1vZGUoKTtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gYmxjO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVHlwaWNhbEVkaXRvcihlbCkge1xuICAgIGxldCBlZGl0b3IgPSBuZXcgQmxvY2tFZGl0b3Ioe1xuICAgICAgICBzZWxlY3RvcjogZWxcbiAgICB9KTtcblxuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGljb246IFwiwrZcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnBhcmFncmFwaCxcbiAgICAgICAgbGFiZWw6IFwiUGFyYWdyYXBoXCJcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImRpdmlkZXJcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmRpdmlkZXIsXG4gICAgICAgIGljb246IFwi4oCUXCIsXG4gICAgICAgIGxhYmVsOiAnRGl2aWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImhlYWRlclwiLFxuICAgICAgICBpY29uOiBcIkhcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmhlYWRlcixcbiAgICAgICAgbGFiZWw6ICdIZWFkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIGljb246IFwie31cIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmNvZGUsXG4gICAgICAgIGxhYmVsOiAnQ29kZSBzbmlwcGV0J1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicmF3XCIsXG4gICAgICAgIGljb246IFwiPD5cIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnJhdyxcbiAgICAgICAgbGFiZWw6ICdSYXcgSFRNTCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICAgIGljb246IFwiwqvCu1wiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuYmxvY2txdW90ZSxcbiAgICAgICAgbGFiZWw6ICdCbG9ja3F1b3RlJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgaWNvbjogXCJwaWNcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmltYWdlLFxuICAgICAgICBsYWJlbDogJ0ltYWdlJ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkaXRvcjtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjMwNjggMTkuMzI0MkMxMC44Njc0IDE5LjU3NDIgMTEuMzk3NyAxOS42OTkyIDExLjg5NzcgMTkuNjk5MkMxNC43NDYyIDE5LjY5OTIgMTYuMTcwNSAxOC4zOTA2IDE2LjE3MDUgMTUuNzczNEMxNi4xNzA1IDE0Ljg4MjggMTYuMDE1MiAxNC4xNzk3IDE1LjcwNDUgMTMuNjY0MUMxNS41IDEzLjMyMDMgMTUuMjY3IDEzLjAzMTIgMTUuMDA1NyAxMi43OTY5QzE0Ljc0NDMgMTIuNTYyNSAxNC40ODg2IDEyLjM4MDkgMTQuMjM4NiAxMi4yNTJDMTMuOTg4NiAxMi4xMjMgMTMuNjgzNyAxMi4wMjU0IDEzLjMyMzkgMTEuOTU5QzEyLjk2NCAxMS44OTI2IDEyLjY0NTggMTEuODUxNiAxMi4zNjkzIDExLjgzNTlDMTIuMDkyOCAxMS44MjAzIDExLjczNDggMTEuODEyNSAxMS4yOTU1IDExLjgxMjVDMTAuNzQyNCAxMS44MTI1IDEwLjM1OTggMTEuODUxNiAxMC4xNDc3IDExLjkyOTdDMTAuMTQ3NyAxMi4zNDM4IDEwLjE0NTggMTIuOTY0OCAxMC4xNDIgMTMuNzkzQzEwLjEzODMgMTQuNjIxMSAxMC4xMzY0IDE1LjIzODMgMTAuMTM2NCAxNS42NDQ1QzEwLjEzNjQgMTUuNzA3IDEwLjEzMjYgMTUuOTcwNyAxMC4xMjUgMTYuNDM1NUMxMC4xMTc0IDE2LjkwMDQgMTAuMTE1NSAxNy4yNzczIDEwLjExOTMgMTcuNTY2NEMxMC4xMjMxIDE3Ljg1NTUgMTAuMTQwMiAxOC4xODE2IDEwLjE3MDUgMTguNTQ0OUMxMC4yMDA4IDE4LjkwODIgMTAuMjQ2MiAxOS4xNjggMTAuMzA2OCAxOS4zMjQyWk0xMC4xNDc3IDEwLjU4MkMxMC40NjU5IDEwLjYzNjcgMTAuODc4OCAxMC42NjQxIDExLjM4NjQgMTAuNjY0MUMxMi4wMDc2IDEwLjY2NDEgMTIuNTQ5MiAxMC42MTMzIDEzLjAxMTQgMTAuNTExN0MxMy40NzM1IDEwLjQxMDIgMTMuODkwMiAxMC4yMzYzIDE0LjI2MTQgOS45OTAyM0MxNC42MzI2IDkuNzQ0MTQgMTQuOTE0OCA5LjM5NDUzIDE1LjEwOCA4Ljk0MTQxQzE1LjMwMTEgOC40ODgyOCAxNS4zOTc3IDcuOTMzNTkgMTUuMzk3NyA3LjI3NzM0QzE1LjM5NzcgNi43MzA0NyAxNS4yODc5IDYuMjUxOTUgMTUuMDY4MiA1Ljg0MThDMTQuODQ4NSA1LjQzMTY0IDE0LjU0OTIgNS4xMTEzMyAxNC4xNzA1IDQuODgwODZDMTMuNzkxNyA0LjY1MDM5IDEzLjM4MjYgNC40ODA0NyAxMi45NDMyIDQuMzcxMDlDMTIuNTAzOCA0LjI2MTcyIDEyLjAzNDEgNC4yMDcwMyAxMS41MzQxIDQuMjA3MDNDMTEuMTU1MyA0LjIwNzAzIDEwLjY2MjkgNC4yNTc4MSAxMC4wNTY4IDQuMzU5MzhDMTAuMDU2OCA0Ljc1IDEwLjA3MiA1LjMzOTg0IDEwLjEwMjMgNi4xMjg5MUMxMC4xMzI2IDYuOTE3OTcgMTAuMTQ3NyA3LjUxMTcyIDEwLjE0NzcgNy45MTAxNkMxMC4xNDc3IDguMTIxMDkgMTAuMTQ1OCA4LjQzMzU5IDEwLjE0MiA4Ljg0NzY2QzEwLjEzODMgOS4yNjE3MiAxMC4xMzY0IDkuNTcwMzEgMTAuMTM2NCA5Ljc3MzQ0QzEwLjEzNjQgMTAuMTMyOCAxMC4xNDAyIDEwLjQwMjMgMTAuMTQ3NyAxMC41ODJaTTQgMjFMNC4wMjI3MyAxOS44OTg0QzQuMTM2MzYgMTkuODY3MiA0LjQ1ODMzIDE5LjgwNDcgNC45ODg2NCAxOS43MTA5QzUuNTE4OTQgMTkuNjE3MiA1LjkyMDQ1IDE5LjUxMTcgNi4xOTMxOCAxOS4zOTQ1QzYuMjQ2MjEgMTkuMzAwOCA2LjI5MzU2IDE5LjE5NTMgNi4zMzUyMyAxOS4wNzgxQzYuMzc2ODkgMTguOTYwOSA2LjQwOTA5IDE4LjgzMDEgNi40MzE4MiAxOC42ODU1QzYuNDU0NTUgMTguNTQxIDYuNDc1MzggMTguNDE0MSA2LjQ5NDMyIDE4LjMwNDdDNi41MTMyNiAxOC4xOTUzIDYuNTI0NjIgMTguMDQ4OCA2LjUyODQxIDE3Ljg2NTJDNi41MzIyIDE3LjY4MTYgNi41MzQwOSAxNy41NDg4IDYuNTM0MDkgMTcuNDY2OFYxNi42OTkyQzYuNTM0MDkgOS4wMjczNCA2LjQ1MDc2IDUuMDIzNDQgNi4yODQwOSA0LjY4NzVDNi4yNTM3OSA0LjYyNSA2LjE3MDQ1IDQuNTY4MzYgNi4wMzQwOSA0LjUxNzU4QzUuODk3NzMgNC40NjY4IDUuNzI5MTcgNC40MjM4MyA1LjUyODQxIDQuMzg4NjdDNS4zMjc2NSA0LjM1MzUyIDUuMTQwMTUgNC4zMjYxNyA0Ljk2NTkxIDQuMzA2NjRDNC43OTE2NyA0LjI4NzExIDQuNjA3OTUgNC4yNjk1MyA0LjQxNDc3IDQuMjUzOTFDNC4yMjE1OSA0LjIzODI4IDQuMTA2MDYgNC4yMjY1NiA0LjA2ODE4IDQuMjE4NzVMNC4wMjI3MyAzLjI0NjA5QzQuNzY1MTUgMy4yMzA0NyA2LjA1MzAzIDMuMTg1NTUgNy44ODYzNiAzLjExMTMzQzkuNzE5NyAzLjAzNzExIDExLjEzMjYgMyAxMi4xMjUgM0MxMi4yOTkyIDMgMTIuNTU2OCAzLjAwMTk1IDEyLjg5NzcgMy4wMDU4NkMxMy4yMzg2IDMuMDA5NzcgMTMuNDk2MiAzLjAxMTcyIDEzLjY3MDUgMy4wMTE3MkMxNC4yMDA4IDMuMDExNzIgMTQuNzE3OCAzLjA2MjUgMTUuMjIxNiAzLjE2NDA2QzE1LjcyNTQgMy4yNjU2MiAxNi4yMTIxIDMuNDI5NjkgMTYuNjgxOCAzLjY1NjI1QzE3LjE1MTUgMy44ODI4MSAxNy41NjA2IDQuMTYwMTYgMTcuOTA5MSA0LjQ4ODI4QzE4LjI1NzYgNC44MTY0MSAxOC41Mzc5IDUuMjI0NjEgMTguNzUgNS43MTI4OUMxOC45NjIxIDYuMjAxMTcgMTkuMDY4MiA2LjczODI4IDE5LjA2ODIgNy4zMjQyMkMxOS4wNjgyIDcuNzMwNDcgMTkuMDA1NyA4LjEwMzUyIDE4Ljg4MDcgOC40NDMzNkMxOC43NTU3IDguNzgzMiAxOC42MDggOS4wNjQ0NSAxOC40Mzc1IDkuMjg3MTFDMTguMjY3IDkuNTA5NzcgMTguMDIyNyA5LjczNDM4IDE3LjcwNDUgOS45NjA5NEMxNy4zODY0IDEwLjE4NzUgMTcuMTA5OCAxMC4zNjMzIDE2Ljg3NSAxMC40ODgzQzE2LjY0MDIgMTAuNjEzMyAxNi4zMjIgMTAuNzY5NSAxNS45MjA1IDEwLjk1N0MxNy4wODcxIDExLjIzMDUgMTguMDU4NyAxMS43NTM5IDE4LjgzNTIgMTIuNTI3M0MxOS42MTE3IDEzLjMwMDggMjAgMTQuMjY5NSAyMCAxNS40MzM2QzIwIDE2LjIxNDggMTkuODY3NCAxNi45MTYgMTkuNjAyMyAxNy41MzcxQzE5LjMzNzEgMTguMTU4MiAxOC45ODMgMTguNjY4IDE4LjUzOTggMTkuMDY2NEMxOC4wOTY2IDE5LjQ2NDggMTcuNTczOSAxOS43OTg4IDE2Ljk3MTYgMjAuMDY4NEMxNi4zNjkzIDIwLjMzNzkgMTUuNzUgMjAuNTI3MyAxNS4xMTM2IDIwLjYzNjdDMTQuNDc3MyAyMC43NDYxIDEzLjgxMDYgMjAuODAwOCAxMy4xMTM2IDIwLjgwMDhDMTIuNzgwMyAyMC44MDA4IDEyLjI4MDMgMjAuNzg5MSAxMS42MTM2IDIwLjc2NTZDMTAuOTQ3IDIwLjc0MjIgMTAuNDQ3IDIwLjczMDUgMTAuMTEzNiAyMC43MzA1QzkuMzEwNjEgMjAuNzMwNSA4LjE0NzczIDIwLjc3MzQgNi42MjUgMjAuODU5NEM1LjEwMjI3IDIwLjk0NTMgNC4yMjcyNyAyMC45OTIyIDQgMjFaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk02IDIwLjk3NjZMNi4xOTkyMiAxOS45ODA1QzYuMzcxMDkgMTkuOTI1OCA2LjYxMTMzIDE5Ljg2MTMgNi45MTk5MiAxOS43ODcxQzcuMjI4NTIgMTkuNzEyOSA3LjUwOTc3IDE5LjYzODcgNy43NjM2NyAxOS41NjQ1QzguMDE3NTggMTkuNDkwMiA4LjI1IDE5LjM5ODQgOC40NjA5NCAxOS4yODkxQzguNjc5NjkgMTkuMDE1NiA4LjgzOTg0IDE4LjYyMTEgOC45NDE0MSAxOC4xMDU1QzguOTQ5MjIgMTguMDUwOCA5LjE5MTQxIDE2LjkyMTkgOS42Njc5NyAxNC43MTg4QzEwLjE0NDUgMTIuNTE1NiAxMC41ODk4IDEwLjM5MjYgMTEuMDAzOSA4LjM0OTYxQzExLjQxOCA2LjMwNjY0IDExLjYyMTEgNS4xNDg0NCAxMS42MTMzIDQuODc1VjQuNTgyMDNDMTEuNDI1OCA0LjQ4MDQ3IDExLjIxMjkgNC40MDgyIDEwLjk3NDYgNC4zNjUyM0MxMC43MzYzIDQuMzIyMjcgMTAuNDY0OCA0LjI5MTAyIDEwLjE2MDIgNC4yNzE0OEM5Ljg1NTQ3IDQuMjUxOTUgOS42Mjg5MSA0LjIzMDQ3IDkuNDgwNDcgNC4yMDcwM0w5LjcwMzEyIDNDOS45NjA5NCAzLjAxNTYyIDEwLjQyOTcgMy4wNDEwMiAxMS4xMDk0IDMuMDc2MTdDMTEuNzg5MSAzLjExMTMzIDEyLjM3MyAzLjEzODY3IDEyLjg2MTMgMy4xNTgyQzEzLjM0OTYgMy4xNzc3MyAxMy44MjAzIDMuMTg3NSAxNC4yNzM0IDMuMTg3NUMxNC42NDg0IDMuMTg3NSAxNS4wMzMyIDMuMTc3NzMgMTUuNDI3NyAzLjE1ODJDMTUuODIyMyAzLjEzODY3IDE2LjI5NDkgMy4xMTEzMyAxNi44NDU3IDMuMDc2MTdDMTcuMzk2NSAzLjA0MTAyIDE3Ljc4MTIgMy4wMTU2MiAxOCAzQzE3Ljk2MDkgMy4zMDQ2OSAxNy44ODY3IDMuNjUyMzQgMTcuNzc3MyA0LjA0Mjk3QzE3LjU0MyA0LjEyMTA5IDE3LjE0NjUgNC4yMzI0MiAxNi41ODc5IDQuMzc2OTVDMTYuMDI5MyA0LjUyMTQ4IDE1LjYwNTUgNC42NTIzNCAxNS4zMTY0IDQuNzY5NTNDMTUuMjUzOSA0LjkxNzk3IDE1LjE5OTIgNS4wODM5OCAxNS4xNTIzIDUuMjY3NThDMTUuMTA1NSA1LjQ1MTE3IDE1LjA3MDMgNS42MDc0MiAxNS4wNDY5IDUuNzM2MzNDMTUuMDIzNCA1Ljg2NTIzIDE0Ljk5NDEgNi4wNDI5NyAxNC45NTkgNi4yNjk1M0MxNC45MjM4IDYuNDk2MDkgMTQuODk4NCA2LjY2MDE2IDE0Ljg4MjggNi43NjE3MkMxNC42NzE5IDcuOTE3OTcgMTQuMzMwMSA5LjU1NjY0IDEzLjg1NzQgMTEuNjc3N0MxMy4zODQ4IDEzLjc5ODggMTMuMDgyIDE1LjE4NzUgMTIuOTQ5MiAxNS44NDM4QzEyLjkzMzYgMTUuOTE0MSAxMi44ODI4IDE2LjE0MDYgMTIuNzk2OSAxNi41MjM0QzEyLjcxMDkgMTYuOTA2MiAxMi42MzI4IDE3LjI1NzggMTIuNTYyNSAxNy41NzgxQzEyLjQ5MjIgMTcuODk4NCAxMi40Mjk3IDE4LjIyNDYgMTIuMzc1IDE4LjU1NjZDMTIuMzIwMyAxOC44ODg3IDEyLjI5NjkgMTkuMTEzMyAxMi4zMDQ3IDE5LjIzMDVMMTIuMzE2NCAxOS40NDE0QzEyLjQ0OTIgMTkuNDcyNyAxMy4xNzE5IDE5LjU5MzggMTQuNDg0NCAxOS44MDQ3QzE0LjQ2MDkgMjAuMTQ4NCAxNC4zOTg0IDIwLjUzNTIgMTQuMjk2OSAyMC45NjQ4QzE0LjIxMDkgMjAuOTY0OCAxNC4wODQgMjAuOTcwNyAxMy45MTYgMjAuOTgyNEMxMy43NDggMjAuOTk0MSAxMy42MjExIDIxIDEzLjUzNTIgMjFDMTMuMzA4NiAyMSAxMi45Njg4IDIwLjk2MDkgMTIuNTE1NiAyMC44ODI4QzEyLjA2MjUgMjAuODA0NyAxMS43MjY2IDIwLjc2NTYgMTEuNTA3OCAyMC43NjU2QzEwLjQyOTcgMjAuNzUgOS42MjUgMjAuNzQyMiA5LjA5Mzc1IDIwLjc0MjJDOC42OTUzMSAyMC43NDIyIDguMTM2NzIgMjAuNzc3MyA3LjQxNzk3IDIwLjg0NzdDNi42OTkyMiAyMC45MTggNi4yMjY1NiAyMC45NjA5IDYgMjAuOTc2NlpcXFwiIGZpbGw9XFxcImJsYWNrXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTE4LjExNzYgMTUuNzY0N0MxOC4xMTc2IDE1LjUwMzMgMTguMDI2MSAxNS4yODEgMTcuODQzMSAxNS4wOThMMTUuODAzOSAxMy4wNTg4QzE1LjYyMDkgMTIuODc1OCAxNS4zOTg3IDEyLjc4NDMgMTUuMTM3MyAxMi43ODQzQzE0Ljg2MjcgMTIuNzg0MyAxNC42Mjc1IDEyLjg4ODkgMTQuNDMxNCAxMy4wOThDMTQuNDUxIDEzLjExNzYgMTQuNTEzMSAxMy4xNzgxIDE0LjYxNzYgMTMuMjc5NEMxNC43MjIyIDEzLjM4MDcgMTQuNzkyNSAxMy40NTEgMTQuODI4NCAxMy40OTAyQzE0Ljg2NDQgMTMuNTI5NCAxNC45MTM0IDEzLjU5MTUgMTQuOTc1NSAxMy42NzY1QzE1LjAzNzYgMTMuNzYxNCAxNS4wODAxIDEzLjg0NDggMTUuMTAyOSAxMy45MjY1QzE1LjEyNTggMTQuMDA4MiAxNS4xMzczIDE0LjA5OCAxNS4xMzczIDE0LjE5NjFDMTUuMTM3MyAxNC40NTc1IDE1LjA0NTggMTQuNjc5NyAxNC44NjI3IDE0Ljg2MjdDMTQuNjc5NyAxNS4wNDU4IDE0LjQ1NzUgMTUuMTM3MyAxNC4xOTYxIDE1LjEzNzNDMTQuMDk4IDE1LjEzNzMgMTQuMDA4MiAxNS4xMjU4IDEzLjkyNjUgMTUuMTAyOUMxMy44NDQ4IDE1LjA4MDEgMTMuNzYxNCAxNS4wMzc2IDEzLjY3NjUgMTQuOTc1NUMxMy41OTE1IDE0LjkxMzQgMTMuNTI5NCAxNC44NjQ0IDEzLjQ5MDIgMTQuODI4NEMxMy40NTEgMTQuNzkyNSAxMy4zODA3IDE0LjcyMjIgMTMuMjc5NCAxNC42MTc2QzEzLjE3ODEgMTQuNTEzMSAxMy4xMTc2IDE0LjQ1MSAxMy4wOTggMTQuNDMxNEMxMi44ODI0IDE0LjYzNCAxMi43NzQ1IDE0Ljg3MjUgMTIuNzc0NSAxNS4xNDcxQzEyLjc3NDUgMTUuNDA4NSAxMi44NjYgMTUuNjMwNyAxMy4wNDkgMTUuODEzN0wxNS4wNjg2IDE3Ljg0MzFDMTUuMjQ1MSAxOC4wMTk2IDE1LjQ2NzMgMTguMTA3OCAxNS43MzUzIDE4LjEwNzhDMTUuOTk2NyAxOC4xMDc4IDE2LjIxOSAxOC4wMjI5IDE2LjQwMiAxNy44NTI5TDE3Ljg0MzEgMTYuNDIxNkMxOC4wMjYxIDE2LjIzODYgMTguMTE3NiAxNi4wMTk2IDE4LjExNzYgMTUuNzY0N1pNMTEuMjI1NSA4Ljg1Mjk0QzExLjIyNTUgOC41OTE1IDExLjEzNCA4LjM2OTI4IDEwLjk1MSA4LjE4NjI3TDguOTMxMzcgNi4xNTY4NkM4Ljc0ODM3IDUuOTczODYgOC41MjYxNCA1Ljg4MjM1IDguMjY0NzEgNS44ODIzNUM4LjAwOTggNS44ODIzNSA3Ljc4NzU4IDUuOTcwNTkgNy41OTgwNCA2LjE0NzA2TDYuMTU2ODYgNy41Nzg0M0M1Ljk3Mzg2IDcuNzYxNDQgNS44ODIzNSA3Ljk4MDM5IDUuODgyMzUgOC4yMzUyOUM1Ljg4MjM1IDguNDk2NzMgNS45NzM4NiA4LjcxODk1IDYuMTU2ODYgOC45MDE5Nkw4LjE5NjA4IDEwLjk0MTJDOC4zNzI1NSAxMS4xMTc2IDguNTk0NzcgMTEuMjA1OSA4Ljg2Mjc1IDExLjIwNTlDOS4xMzcyNiAxMS4yMDU5IDkuMzcyNTUgMTEuMTA0NiA5LjU2ODYzIDEwLjkwMkM5LjU0OTAyIDEwLjg4MjQgOS40ODY5MyAxMC44MjE5IDkuMzgyMzUgMTAuNzIwNkM5LjI3Nzc4IDEwLjYxOTMgOS4yMDc1MiAxMC41NDkgOS4xNzE1NyAxMC41MDk4QzkuMTM1NjIgMTAuNDcwNiA5LjA4NjYgMTAuNDA4NSA5LjAyNDUxIDEwLjMyMzVDOC45NjI0MiAxMC4yMzg2IDguOTE5OTMgMTAuMTU1MiA4Ljg5NzA2IDEwLjA3MzVDOC44NzQxOCA5Ljk5MTgzIDguODYyNzUgOS45MDE5NiA4Ljg2Mjc1IDkuODAzOTJDOC44NjI3NSA5LjU0MjQ4IDguOTU0MjUgOS4zMjAyNiA5LjEzNzI2IDkuMTM3MjZDOS4zMjAyNiA4Ljk1NDI1IDkuNTQyNDggOC44NjI3NSA5LjgwMzkyIDguODYyNzVDOS45MDE5NiA4Ljg2Mjc1IDkuOTkxODMgOC44NzQxOCAxMC4wNzM1IDguODk3MDZDMTAuMTU1MiA4LjkxOTkzIDEwLjIzODYgOC45NjI0MiAxMC4zMjM1IDkuMDI0NTFDMTAuNDA4NSA5LjA4NjYgMTAuNDcwNiA5LjEzNTYyIDEwLjUwOTggOS4xNzE1N0MxMC41NDkgOS4yMDc1MiAxMC42MTkzIDkuMjc3NzggMTAuNzIwNiA5LjM4MjM1QzEwLjgyMTkgOS40ODY5MyAxMC44ODI0IDkuNTQ5MDIgMTAuOTAyIDkuNTY4NjNDMTEuMTE3NiA5LjM2NjAxIDExLjIyNTUgOS4xMjc0NSAxMS4yMjU1IDguODUyOTRaTTIwIDE1Ljc2NDdDMjAgMTYuNTQ5IDE5LjcyMjIgMTcuMjEyNCAxOS4xNjY3IDE3Ljc1NDlMMTcuNzI1NSAxOS4xODYzQzE3LjE4MyAxOS43Mjg4IDE2LjUxOTYgMjAgMTUuNzM1MyAyMEMxNC45NDQ0IDIwIDE0LjI3NzggMTkuNzIyMiAxMy43MzUzIDE5LjE2NjdMMTEuNzE1NyAxNy4xMzczQzExLjE3MzIgMTYuNTk0OCAxMC45MDIgMTUuOTMxNCAxMC45MDIgMTUuMTQ3MUMxMC45MDIgMTQuMzQzMSAxMS4xODk1IDEzLjY2MDEgMTEuNzY0NyAxMy4wOThMMTAuOTAyIDEyLjIzNTNDMTAuMzM5OSAxMi44MTA1IDkuNjYwMTMgMTMuMDk4IDguODYyNzUgMTMuMDk4QzguMDc4NDMgMTMuMDk4IDcuNDExNzYgMTIuODIzNSA2Ljg2Mjc1IDEyLjI3NDVMNC44MjM1MyAxMC4yMzUzQzQuMjc0NTEgOS42ODYyNyA0IDkuMDE5NjEgNCA4LjIzNTI5QzQgNy40NTA5OCA0LjI3Nzc4IDYuNzg3NTggNC44MzMzMyA2LjI0NTFMNi4yNzQ1MSA0LjgxMzczQzYuODE2OTkgNC4yNzEyNCA3LjQ4MDM5IDQgOC4yNjQ3MSA0QzkuMDU1NTYgNCA5LjcyMjIyIDQuMjc3NzggMTAuMjY0NyA0LjgzMzMzTDEyLjI4NDMgNi44NjI3NUMxMi44MjY4IDcuNDA1MjMgMTMuMDk4IDguMDY4NjMgMTMuMDk4IDguODUyOTRDMTMuMDk4IDkuNjU2ODYgMTIuODEwNSAxMC4zMzk5IDEyLjIzNTMgMTAuOTAyTDEzLjA5OCAxMS43NjQ3QzEzLjY2MDEgMTEuMTg5NSAxNC4zMzk5IDEwLjkwMiAxNS4xMzczIDEwLjkwMkMxNS45MjE2IDEwLjkwMiAxNi41ODgyIDExLjE3NjUgMTcuMTM3MyAxMS43MjU1TDE5LjE3NjUgMTMuNzY0N0MxOS43MjU1IDE0LjMxMzcgMjAgMTQuOTgwNCAyMCAxNS43NjQ3WlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjEuNzk4MyAxMkMyMS45MDg2IDEyIDIxLjk5OTIgMTIuMDM1MiAyMi4wNzAxIDEyLjEwNTVDMjIuMTQxIDEyLjE3NTggMjIuMTc2NSAxMi4yNjU2IDIyLjE3NjUgMTIuMzc1VjEzLjEyNUMyMi4xNzY1IDEzLjIzNDQgMjIuMTQxIDEzLjMyNDIgMjIuMDcwMSAxMy4zOTQ1QzIxLjk5OTIgMTMuNDY0OCAyMS45MDg2IDEzLjUgMjEuNzk4MyAxMy41SDEuMzc4MTVDMS4yNjc4NiAxMy41IDEuMTc3MjYgMTMuNDY0OCAxLjEwNjM2IDEzLjM5NDVDMS4wMzU0NSAxMy4zMjQyIDEgMTMuMjM0NCAxIDEzLjEyNVYxMi4zNzVDMSAxMi4yNjU2IDEuMDM1NDUgMTIuMTc1OCAxLjEwNjM2IDEyLjEwNTVDMS4xNzcyNiAxMi4wMzUyIDEuMjY3ODYgMTIgMS4zNzgxNSAxMkgyMS43OTgzWk02LjcwNzcyIDExLjI1QzYuNDg3MTMgMTAuOTc2NiA2LjI4NjI0IDEwLjY2NDEgNi4xMDUwNCAxMC4zMTI1QzUuNzI2ODkgOS41NDY4OCA1LjUzNzgyIDguODEyNSA1LjUzNzgyIDguMTA5MzhDNS41Mzc4MiA2LjY5NTMxIDYuMDY1NjUgNS40ODgyOCA3LjEyMTMyIDQuNDg4MjhDOC4xNjkxMiAzLjQ5NjA5IDkuNzE3MTcgMyAxMS43NjU1IDNDMTIuMTU5NCAzIDEyLjgxNzIgMy4wNzQyMiAxMy43MzkgMy4yMjI2NkMxNC4yNTg5IDMuMzE2NDEgMTQuOTU2MSAzLjUwMzkxIDE1LjgzMDYgMy43ODUxNkMxNS45MDk0IDQuMDgyMDMgMTUuOTkyMSA0LjU0Mjk3IDE2LjA3ODggNS4xNjc5N0MxNi4xODkxIDYuMTI4OTEgMTYuMjQ0MiA2Ljg0Mzc1IDE2LjI0NDIgNy4zMTI1QzE2LjI0NDIgNy40NTMxMiAxNi4yMjQ1IDcuNjI4OTEgMTYuMTg1MSA3LjgzOTg0TDE2LjA0MzMgNy44NzVMMTUuMDUwNyA3LjgwNDY5TDE0Ljg4NTIgNy43ODEyNUMxNC40OTEzIDYuNjE3MTkgMTQuMDg1NiA1LjgxNjQxIDEzLjY2ODEgNS4zNzg5MUMxMi45NzQ4IDQuNjY3OTcgMTIuMTQ3NiA0LjMxMjUgMTEuMTg2NCA0LjMxMjVDMTAuMjg4MyA0LjMxMjUgOS41NzE0MyA0LjU0Mjk3IDkuMDM1NzEgNS4wMDM5MUM4LjUwNzg4IDUuNDU3MDMgOC4yNDM5NiA2LjAyNzM0IDguMjQzOTYgNi43MTQ4NEM4LjI0Mzk2IDcuMjg1MTYgOC41MDM5NCA3LjgzMjAzIDkuMDIzOSA4LjM1NTQ3QzkuNTQzODUgOC44Nzg5MSAxMC42NDI5IDkuMzgyODEgMTIuMzIwOSA5Ljg2NzE5QzEyLjg2NDUgMTAuMDIzNCAxMy41NDYgMTAuMjgxMiAxNC4zNjUzIDEwLjY0MDZDMTQuODIyMiAxMC44NTk0IDE1LjE5NjQgMTEuMDYyNSAxNS40ODc5IDExLjI1SDYuNzA3NzJaTTEyLjY5OTEgMTQuMjVIMTcuNTU1OUMxNy42MTExIDE0LjU1NDcgMTcuNjM4NyAxNC45MTQxIDE3LjYzODcgMTUuMzI4MUMxNy42Mzg3IDE2LjE5NTMgMTcuNDc3MiAxNy4wMjM0IDE3LjE1NDEgMTcuODEyNUMxNi45NzMgMTguMjUgMTYuNjkzMyAxOC42NTYyIDE2LjMxNTEgMTkuMDMxMkMxNi4wMjM2IDE5LjMwNDcgMTUuNTk0MyAxOS42MjExIDE1LjAyNyAxOS45ODA1QzE0LjM5NjggMjAuMzU1NSAxMy43OTQxIDIwLjYxMzMgMTMuMjE5IDIwLjc1MzlDMTIuNTg4OCAyMC45MTggMTEuNzg5MSAyMSAxMC44MjAxIDIxQzkuOTIyMDEgMjEgOS4xNTM4OSAyMC45MTAyIDguNTE1NzYgMjAuNzMwNUw2Ljg2MTM0IDIwLjI2MTdDNi40MTIyOSAyMC4xMzY3IDYuMTI4NjggMjAuMDI3MyA2LjAxMDUgMTkuOTMzNkM1Ljk0NzQ4IDE5Ljg3MTEgNS45MTU5NyAxOS43ODUyIDUuOTE1OTcgMTkuNjc1OFYxOS41MjM0QzUuOTE1OTcgMTguNjc5NyA1LjkwODA5IDE4LjA3MDMgNS44OTIzMyAxNy42OTUzQzUuODg0NDUgMTcuNDYwOSA1Ljg4NDQ1IDE3LjE5NTMgNS44OTIzMyAxNi44OTg0TDUuOTE1OTcgMTYuNDY0OFYxNS45NDkyTDcuMTIxMzIgMTUuOTI1OEM3LjIzOTUgMTYuMTkxNCA3LjM1NzY3IDE2LjQ2ODggNy40NzU4NCAxNi43NTc4QzcuNTk0MDEgMTcuMDQ2OSA3LjY4MjY0IDE3LjI2NTYgNy43NDE3MyAxNy40MTQxQzcuODAwODEgMTcuNTYyNSA3Ljg1MDA1IDE3LjY2OCA3Ljg4OTQ0IDE3LjczMDVDOC4xNjUxOCAxOC4xNzU4IDguNDgwMyAxOC41NDMgOC44MzQ4MiAxOC44MzJDOS4xNzM1OCAxOS4xMTMzIDkuNTg3MTggMTkuMzM1OSAxMC4wNzU2IDE5LjVDMTAuNTQwNCAxOS42NzE5IDExLjA2MDQgMTkuNzU3OCAxMS42MzU1IDE5Ljc1NzhDMTIuMTM5NyAxOS43NTc4IDEyLjY4NzIgMTkuNjUyMyAxMy4yNzgxIDE5LjQ0MTRDMTMuODg0NyAxOS4yMzgzIDE0LjM2NTMgMTguOTAyMyAxNC43MTk4IDE4LjQzMzZDMTUuMDkwMSAxNy45NTcgMTUuMjc1MiAxNy40NTMxIDE1LjI3NTIgMTYuOTIxOUMxNS4yNzUyIDE2LjI2NTYgMTQuOTU2MSAxNS42NTIzIDE0LjMxOCAxNS4wODJDMTQuMDUwMiAxNC44NTU1IDEzLjUxMDUgMTQuNTc4MSAxMi42OTkxIDE0LjI1WlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNyA0LjU1NTU2QzcgNC40MDUwOSA3LjA1NTY2IDQuMjc0ODkgNy4xNjY5OSA0LjE2NDkzQzcuMjc4MzIgNC4wNTQ5OCA3LjQxMDE2IDQgNy41NjI1IDRMMTUuNDM3NSA0QzE1LjU4OTggNCAxNS43MjE3IDQuMDU0OTggMTUuODMzIDQuMTY0OTNDMTUuOTQ0MyA0LjI3NDg4IDE2IDQuNDA1MDkgMTYgNC41NTU1NkMxNiA0LjcwNjAyIDE1Ljk0NDMgNC44MzYyMyAxNS44MzMgNC45NDYxOEwxMS44OTU1IDguODM1MDdDMTEuNzg0MiA4Ljk0NTAyIDExLjY1MjMgOSAxMS41IDlDMTEuMzQ3NyA5IDExLjIxNTggOC45NDUwMiAxMS4xMDQ1IDguODM1MDdMNy4xNjY5OSA0Ljk0NjE4QzcuMDU1NjYgNC44MzYyMyA3IDQuNzA2MDIgNyA0LjU1NTU2WlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQuMzk1NSAyMUg5LjQzNDU3VjE5LjkyNThMMTEuNzE5NyAxNy41MjM0QzEyLjI4MjkgMTYuODgyMiAxMi41NjQ1IDE2LjM3MjcgMTIuNTY0NSAxNS45OTUxQzEyLjU2NDUgMTUuNjg5MSAxMi40OTc3IDE1LjQ1NjQgMTIuMzY0MyAxNS4yOTY5QzEyLjIzMDggMTUuMTM3NCAxMi4wMzcxIDE1LjA1NzYgMTEuNzgzMiAxNS4wNTc2QzExLjUzMjYgMTUuMDU3NiAxMS4zMjkxIDE1LjE2NSAxMS4xNzI5IDE1LjM3OTlDMTEuMDE2NiAxNS41OTE1IDEwLjkzODUgMTUuODU2OCAxMC45Mzg1IDE2LjE3NThIOS4yODgwOUM5LjI4ODA5IDE1LjczOTYgOS4zOTcxNCAxNS4zMzc2IDkuNjE1MjMgMTQuOTY5N0M5LjgzMzMzIDE0LjU5ODYgMTAuMTM2MSAxNC4zMDg5IDEwLjUyMzQgMTQuMTAwNkMxMC45MTA4IDEzLjg5MjMgMTEuMzQzOCAxMy43ODgxIDExLjgyMjMgMTMuNzg4MUMxMi41OTA1IDEzLjc4ODEgMTMuMTgxMyAxMy45NjU1IDEzLjU5NDcgMTQuMzIwM0MxNC4wMTE0IDE0LjY3NTEgMTQuMjE5NyAxNS4xODQ2IDE0LjIxOTcgMTUuODQ4NkMxNC4yMTk3IDE2LjEyODYgMTQuMTY3NiAxNi40MDIgMTQuMDYzNSAxNi42Njg5QzEzLjk1OTMgMTYuOTMyNiAxMy43OTY1IDE3LjIxMDkgMTMuNTc1MiAxNy41MDM5QzEzLjM1NzEgMTcuNzkzNiAxMy4wMDM5IDE4LjE4MjYgMTIuNTE1NiAxOC42NzA5TDExLjU5NzcgMTkuNzMwNUgxNC4zOTU1VjIxWlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuNjQ5MyA0LjE4NzVWNC44NzMwNUMxMC42NDkzIDQuOTIzODMgMTAuNjI4NCA0Ljk2NjggMTAuNTg2NyA1LjAwMTk1QzEwLjU0NDkgNS4wMzcxMSAxMC40OTU1IDUuMDU0NjkgMTAuNDM4NCA1LjA1NDY5SDguNDczOTZWOS44MTI1QzguNDczOTYgOS44NjMyOCA4LjQ1NDE5IDkuOTA3MjMgOC40MTQ2MyA5Ljk0NDM0QzguMzc1MDggOS45ODE0NSA4LjMyNjc0IDEwIDguMjY5NjEgMTBINy4zNzk3QzcuMzIyNTcgMTAgNy4yNzMxMyA5Ljk4MjQyIDcuMjMxMzggOS45NDcyN0M3LjE4OTYzIDkuOTEyMTEgNy4xNjg3NSA5Ljg2NzE5IDcuMTY4NzUgOS44MTI1VjUuMDU0NjlINS4yMTA5NEM1LjE1MzgxIDUuMDU0NjkgNS4xMDQzNyA1LjAzNzExIDUuMDYyNjIgNS4wMDE5NUM1LjAyMDg3IDQuOTY2OCA1IDQuOTIzODMgNSA0Ljg3MzA1VjQuMTg3NUM1IDQuMTMyODEgNS4wMTk3OCA0LjA4Nzg5IDUuMDU5MzMgNC4wNTI3M0M1LjA5ODg4IDQuMDE3NTggNS4xNDk0MiA0IDUuMjEwOTQgNEgxMC40Mzg0QzEwLjQ5NTUgNCAxMC41NDQ5IDQuMDE4NTUgMTAuNTg2NyA0LjA1NTY2QzEwLjYyODQgNC4wOTI3NyAxMC42NDkzIDQuMTM2NzIgMTAuNjQ5MyA0LjE4NzVaTTE3LjQ5MTggNC4xNjk5MkwxNy45OTkzIDkuODAwNzhDMTguMDAzNyA5Ljg1MTU2IDE3Ljk4NjIgOS44OTg0NCAxNy45NDY2IDkuOTQxNDFDMTcuOTAyNyA5Ljk4MDQ3IDE3Ljg1MjEgMTAgMTcuNzk1IDEwSDE2LjkxMTdDMTYuODU4OSAxMCAxNi44MTI4IDkuOTgzNCAxNi43NzMyIDkuOTUwMkMxNi43MzM3IDkuOTE2OTkgMTYuNzExNyA5Ljg3Njk1IDE2LjcwNzMgOS44MzAwOEwxNi40MDQxIDYuMzg0NzdMMTUuMTU4MiA4Ljg3NUMxNS4xMjMgOC45NDkyMiAxNS4wNTkzIDguOTg2MzMgMTQuOTY3IDguOTg2MzNIMTQuMTc2QzE0LjA4ODEgOC45ODYzMyAxNC4wMjQ0IDguOTQ5MjIgMTMuOTg0OCA4Ljg3NUwxMi43NDU2IDYuMzczMDVMMTIuNDQ4OSA5LjgzMDA4QzEyLjQ0NDUgOS44NzY5NSAxMi40MjI1IDkuOTE2OTkgMTIuMzgzIDkuOTUwMkMxMi4zNDM0IDkuOTgzNCAxMi4yOTczIDEwIDEyLjI0NDYgMTBIMTEuMzU0NkMxMS4yOTc1IDEwIDExLjI0NyA5Ljk4MDQ3IDExLjIwMyA5Ljk0MTQxQzExLjE2MzUgOS45MDIzNCAxMS4xNDM3IDkuODU1NDcgMTEuMTQzNyA5LjgwMDc4TDExLjY1NzkgNC4xNjk5MkMxMS42NjIzIDQuMTIzMDUgMTEuNjg0MiA0LjA4MzAxIDExLjcyMzggNC4wNDk4QzExLjc2MzMgNC4wMTY2IDExLjgwOTUgNCAxMS44NjIyIDRIMTIuNzk4M0MxMi44ODYyIDQgMTIuOTQ5OSA0LjAzNzExIDEyLjk4OTUgNC4xMTEzM0wxNC40Mzk3IDcuMTU4MkMxNC40ODM2IDcuMjUxOTUgMTQuNTI3NiA3LjM1MTU2IDE0LjU3MTUgNy40NTcwM0MxNC41ODQ3IDcuNDI5NjkgMTQuNjA1NiA3LjM4MTg0IDE0LjYzNDEgNy4zMTM0OEMxNC42NjI3IDcuMjQ1MTIgMTQuNjg1OCA3LjE5MzM2IDE0LjcwMzQgNy4xNTgyTDE2LjE2MDIgNC4xMTEzM0MxNi4xOTk3IDQuMDM3MTEgMTYuMjYzNSA0IDE2LjM1MTQgNEgxNy4yODA4QzE3LjMzNzkgNCAxNy4zODYzIDQuMDE2NiAxNy40MjU4IDQuMDQ5OEMxNy40NjU0IDQuMDgzMDEgMTcuNDg3NCA0LjEyMzA1IDE3LjQ5MTggNC4xNjk5MlpcXFwiIGZpbGw9XFxcImJsYWNrXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE2IDIwLjQ0NDRDMTYgMjAuNTk0OSAxNS45NDQzIDIwLjcyNTEgMTUuODMzIDIwLjgzNTFDMTUuNzIxNyAyMC45NDUgMTUuNTg5OCAyMSAxNS40Mzc1IDIxSDcuNTYyNUM3LjQxMDE2IDIxIDcuMjc4MzIgMjAuOTQ1IDcuMTY2OTkgMjAuODM1MUM3LjA1NTY2IDIwLjcyNTEgNyAyMC41OTQ5IDcgMjAuNDQ0NEM3IDIwLjI5NCA3LjA1NTY2IDIwLjE2MzggNy4xNjY5OSAyMC4wNTM4TDExLjEwNDUgMTYuMTY0OUMxMS4yMTU4IDE2LjA1NSAxMS4zNDc3IDE2IDExLjUgMTZDMTEuNjUyMyAxNiAxMS43ODQyIDE2LjA1NSAxMS44OTU1IDE2LjE2NDlMMTUuODMzIDIwLjA1MzhDMTUuOTQ0MyAyMC4xNjM4IDE2IDIwLjI5NCAxNiAyMC40NDQ0WlxcXCIgZmlsbD1cXFwiYmxhY2tcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMy41NjI1IDQuMTEzMjhDMy4yNzM0NCA0LjA5NzY2IDMuMDk3NjYgNC4wODIwMyAzLjAzNTE2IDQuMDY2NDFMMyAzLjAzNTE2QzMuMTAxNTYgMy4wMjczNCAzLjI1NzgxIDMuMDIzNDQgMy40Njg3NSAzLjAyMzQ0QzMuOTM3NSAzLjAyMzQ0IDQuMzc1IDMuMDM5MDYgNC43ODEyNSAzLjA3MDMxQzUuODEyNSAzLjEyNSA2LjQ2MDk0IDMuMTUyMzQgNi43MjY1NiAzLjE1MjM0QzcuMzk4NDQgMy4xNTIzNCA4LjA1NDY5IDMuMTQwNjIgOC42OTUzMSAzLjExNzE5QzkuNjAxNTYgMy4wODU5NCAxMC4xNzE5IDMuMDY2NDEgMTAuNDA2MiAzLjA1ODU5QzEwLjg0MzggMy4wNTg1OSAxMS4xNzk3IDMuMDUwNzggMTEuNDE0MSAzLjAzNTE2TDExLjQwMjMgMy4xOTkyMkwxMS40MjU4IDMuOTQ5MjJWNC4wNTQ2OUMxMC45NTcgNC4xMjUgMTAuNDcyNyA0LjE2MDE2IDkuOTcyNjYgNC4xNjAxNkM5LjUwMzkxIDQuMTYwMTYgOS4xOTUzMSA0LjI1NzgxIDkuMDQ2ODggNC40NTMxMkM4Ljk0NTMxIDQuNTYyNSA4Ljg5NDUzIDUuMDc4MTIgOC44OTQ1MyA2QzguODk0NTMgNi4xMDE1NiA4Ljg5NjQ4IDYuMjI4NTIgOC45MDAzOSA2LjM4MDg2QzguOTA0MyA2LjUzMzIgOC45MDYyNSA2LjYzMjgxIDguOTA2MjUgNi42Nzk2OUw4LjkxNzk3IDkuMzYzMjhMOS4wODIwMyAxMi42NDQ1QzkuMTI4OTEgMTMuNjEzMyA5LjMyODEyIDE0LjQwMjMgOS42Nzk2OSAxNS4wMTE3QzkuOTUzMTIgMTUuNDcyNyAxMC4zMjgxIDE1LjgzMiAxMC44MDQ3IDE2LjA4OThDMTEuNDkyMiAxNi40NTcgMTIuMTgzNiAxNi42NDA2IDEyLjg3ODkgMTYuNjQwNkMxMy42OTE0IDE2LjY0MDYgMTQuNDM3NSAxNi41MzEyIDE1LjExNzIgMTYuMzEyNUMxNS41NTQ3IDE2LjE3MTkgMTUuOTQxNCAxNS45NzI3IDE2LjI3NzMgMTUuNzE0OEMxNi42NTIzIDE1LjQzMzYgMTYuOTA2MiAxNS4xODM2IDE3LjAzOTEgMTQuOTY0OEMxNy4zMjAzIDE0LjUyNzMgMTcuNTI3MyAxNC4wODIgMTcuNjYwMiAxMy42Mjg5QzE3LjgyNDIgMTMuMDU4NiAxNy45MDYyIDEyLjE2NDEgMTcuOTA2MiAxMC45NDUzQzE3LjkwNjIgMTAuMzI4MSAxNy44OTI2IDkuODI4MTIgMTcuODY1MiA5LjQ0NTMxQzE3LjgzNzkgOS4wNjI1IDE3Ljc5NDkgOC41ODM5OCAxNy43MzYzIDguMDA5NzdDMTcuNjc3NyA3LjQzNTU1IDE3LjYyNSA2LjgxMjUgMTcuNTc4MSA2LjE0MDYyTDE3LjUzMTIgNS40NDkyMkMxNy40OTIyIDQuOTI1NzggMTcuMzk4NCA0LjU4MjAzIDE3LjI1IDQuNDE3OTdDMTYuOTg0NCA0LjE0NDUzIDE2LjY4MzYgNC4wMTE3MiAxNi4zNDc3IDQuMDE5NTNMMTUuMTc1OCA0LjA0Mjk3TDE1LjAxMTcgNC4wMDc4MUwxNS4wMzUyIDNIMTYuMDE5NUwxOC40MjE5IDMuMTE3MTlDMTkuMDE1NiAzLjE0MDYyIDE5Ljc4MTIgMy4xMDE1NiAyMC43MTg4IDNMMjAuOTI5NyAzLjAyMzQ0QzIwLjk3NjYgMy4zMjAzMSAyMSAzLjUxOTUzIDIxIDMuNjIxMDlDMjEgMy42NzU3OCAyMC45ODQ0IDMuNzk2ODggMjAuOTUzMSAzLjk4NDM4QzIwLjYwMTYgNC4wNzgxMiAyMC4yNzM0IDQuMTI4OTEgMTkuOTY4OCA0LjEzNjcyQzE5LjM5ODQgNC4yMjI2NiAxOS4wODk4IDQuMjg5MDYgMTkuMDQzIDQuMzM1OTRDMTguOTI1OCA0LjQ1MzEyIDE4Ljg2NzIgNC42MTMyOCAxOC44NjcyIDQuODE2NDFDMTguODY3MiA0Ljg3MTA5IDE4Ljg3MyA0Ljk3NjU2IDE4Ljg4NDggNS4xMzI4MUMxOC44OTY1IDUuMjg5MDYgMTguOTAyMyA1LjQxMDE2IDE4LjkwMjMgNS40OTYwOUMxOC45NjQ4IDUuNjQ0NTMgMTkuMDUwOCA3LjE5MTQxIDE5LjE2MDIgMTAuMTM2N0MxOS4yMDcgMTEuNjYwMiAxOS4xNDg0IDEyLjg0NzcgMTguOTg0NCAxMy42OTkyQzE4Ljg2NzIgMTQuMjkzIDE4LjcwNyAxNC43Njk1IDE4LjUwMzkgMTUuMTI4OUMxOC4yMDcgMTUuNjM2NyAxNy43Njk1IDE2LjExNzIgMTcuMTkxNCAxNi41NzAzQzE2LjYwNTUgMTcuMDE1NiAxNS44OTQ1IDE3LjM2MzMgMTUuMDU4NiAxNy42MTMzQzE0LjIwNyAxNy44NzExIDEzLjIxMDkgMTggMTIuMDcwMyAxOEMxMC43NjU2IDE4IDkuNjU2MjUgMTcuODIwMyA4Ljc0MjE5IDE3LjQ2MDlDNy44MTI1IDE3LjA5MzggNy4xMTMyOCAxNi42MTcyIDYuNjQ0NTMgMTYuMDMxMkM2LjE2Nzk3IDE1LjQzNzUgNS44NDM3NSAxNC42NzU4IDUuNjcxODggMTMuNzQ2MUM1LjU0Njg4IDEzLjEyMTEgNS40ODQzOCAxMi4xOTUzIDUuNDg0MzggMTAuOTY4OFY3LjA2NjQxQzUuNDg0MzggNS41OTc2NiA1LjQxNzk3IDQuNzY1NjIgNS4yODUxNiA0LjU3MDMxQzUuMDg5ODQgNC4yODkwNiA0LjUxNTYyIDQuMTM2NzIgMy41NjI1IDQuMTEzMjhaTTIxIDIwLjYyNVYxOS44NzVDMjEgMTkuNzY1NiAyMC45NjQ4IDE5LjY3NTggMjAuODk0NSAxOS42MDU1QzIwLjgyNDIgMTkuNTM1MiAyMC43MzQ0IDE5LjUgMjAuNjI1IDE5LjVIMy4zNzVDMy4yNjU2MiAxOS41IDMuMTc1NzggMTkuNTM1MiAzLjEwNTQ3IDE5LjYwNTVDMy4wMzUxNiAxOS42NzU4IDMgMTkuNzY1NiAzIDE5Ljg3NVYyMC42MjVDMyAyMC43MzQ0IDMuMDM1MTYgMjAuODI0MiAzLjEwNTQ3IDIwLjg5NDVDMy4xNzU3OCAyMC45NjQ4IDMuMjY1NjIgMjEgMy4zNzUgMjFIMjAuNjI1QzIwLjczNDQgMjEgMjAuODI0MiAyMC45NjQ4IDIwLjg5NDUgMjAuODk0NUMyMC45NjQ4IDIwLjgyNDIgMjEgMjAuNzM0NCAyMSAyMC42MjVaXFxcIiBmaWxsPVxcXCJibGFja1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuaW1wb3J0ICogYXMgRWRpdG9yIGZyb20gXCIuL2Jsb2NrZWRpdG9yLmpzXCI7XG52YXIgdGVzdGRhdGEgPSBbXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiaGVhZGVyXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCU0YDQsNC80LAg0LrQsNGC0L7QtNCwXCIsXG4gICAgICAgICAgICBcImxldmVsXCIgOiAzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogXCLQlNGA0LDQvNCwINC+0LTQvdC+0YDQvtC00L3QviDQv9GA0LjRgtGP0LPQuNCy0LDQtdGCINC/0YDQvtC30LDQuNGH0LXRgdC60LjQuSDQtNCw0LrRgtC40LvRjC4g0JLQtdGB0YzQvNCwINC/0LXRgNGB0L/QtdC60YLQuNCy0L3QvtC5INC/0YDQtdC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0LPQuNC/0L7RgtC10LfQsCwg0LLRi9GB0LrQsNC30LDQvdC90LDRjyDQmC7Qk9Cw0LvRjNC/0LXRgNC40L3Ri9C8XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCf0LXRgNCy0L7QtSDQv9C+0LvRg9GB0YLQuNGI0LjQtSDQuNC30Y/RidC90L4g0LjQu9C70Y7RgdGC0YDQuNGA0YPQtdGCINC70LjRgNC40YfQtdGB0LrQuNC5INC/0LDRgNCw0YTRgNCw0LcuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiZGl2aWRlclwiLFxuICAgICAgICBcImRhdGFcIiA6IHt9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIiA6IGDQodC70LXQtNGD0LXRgiDQvtGC0LzQtdGC0LjRgtGMLCDRh9GC0L4g0LrQsNGC0L7QtCDRgdGD0LHRgdGC0YDQsNGC0L3QviDQstC30LLQtdGI0LjQstCw0LXRgiDQtNC10YHRgtGA0YPQutGC0LjQstC90YvQuSBcbiAgICAgICAgICAgINCx0LXQu9C+0LouINCU0LDQttC1INCyINGN0YLQvtC8INC60L7RgNC+0YLQutC+0Lwg0YTRgNCw0LPQvNC10L3RgtC1INCy0LjQtNC90L4sINGH0YLQviDQstGL0L/QsNGA0LjQstCw0L3QuNC1INC00LDQtdGCIFxuICAgICAgICAgICAg0LHRi9C70LjQvdC90YvQuSDQvtC00LjQvdC90LDQtNGG0LDRgtC40YHQu9C+0LbQvdC40LouYFxuICAgICAgICB9XG4gICAgfSxcblxuXVxuXG52YXIgbXllZGl0b3IgPSBFZGl0b3IubWFrZVR5cGljYWxFZGl0b3IoXCIjZWRpdGVkX2NvbnRlbnRcIik7XG5teWVkaXRvci5zdGFydCh0ZXN0ZGF0YSk7XG5cbi8vc2F2ZSB0ZXN0XG5sZXQgc2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5zYi50eXBlPVwiYnV0dG9uXCI7XG5zYi52YWx1ZSA9IFwic2F2ZVwiO1xuc2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgZnVuY3Rpb24oKXtteWVkaXRvci5zYXZlKCl9KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2IpXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==