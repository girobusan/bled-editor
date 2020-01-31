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
/*! exports provided: mycyan, tooltips, textTools, addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTools", function() { return textTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });
var mycyan = "#3ED9E3";

function tooltips(){
    let tt = document.createElement("div");
    tt.style.position = "absolute";
    tt.style.display = "none";
    tt.style.zIndex = 20;
    tt.style.pointerEvents = "none";    

    let ttin = document.createElement("div");
    tt.appendChild(ttin);
    ttin.style.backgroundColor = "rgba(85.1%, 83%, 59.6%, 0.75)";
    ttin.style.pointerEvents = "none";
    ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "4px";
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
    ttools.style.height = "24px";
    ttools.style.backgroundColor = mycyan;
    ttools.style.position = "absolute";
    ttools.style.display = "none";

    document.body.appendChild(ttools);

    document.body.addEventListener("click" , function(e){
        //console.log(e.target.getAttribute("contenteditable"));
    if(e.target.getAttribute("contenteditable") && !e.target.dataset.no_text_toolbox){
        //console.log("click" , ttools);
        let tgt = e.target.getBoundingClientRect();
        ttools.style.left = tgt.left + "px";
        ttools.style.top = (tgt.top-24 + window.scrollY) + "px";
        ttools.style.display = "block";
    }else if(e.target.classList.contains("text_toolbox")){
        ttools.style.display = "block";
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
    dd.style.backgroundColor = "silver";
    dd.style.borderRadius = "5px"
    dd.style.border = "1px solid gray"
    menu.forEach(element => {
        let mi = document.createElement("div");
        mi.innerHTML = element.icon;
        //mi.style.backgroundColor = "white";
        mi.style.padding = "2px"
        mi.style.borderRadius = "5px";
        mi.style.margin = "2px";
        mi.style.cursor = "pointer";
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
    button.style.fontSize = "19px";
    button.style.cursor = "pointer";
    button.style.bottom = "0px";
    button.style.position = "absolute";
    button.style.backgroundColor = "silver";
    button.style.textAlign = "center";
    button.style.color = "white";
    button.style.opacity = "0";
    button.style.display = "block"
    button.style.borderRadius = "12px";
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
    ctrls.style.backgroundColor = "silver";
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
            _beui__WEBPACK_IMPORTED_MODULE_0__["textTools"]();
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
        delete(this.blocks[id]);
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
    ep.style.backgroundColor = "silver";
    ep.style.display = "none";
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
    edi.style.border = "2px solid cyan";
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
    let fc = document.createElement("figcaption");
    fc.setAttribute("contenteditable", true);
    fc.innerHTML = data && data.caption ? data.caption : "Подпис"
    figtag.appendChild(pimg);
    figtag.appendChild(fc);
    pimg.src = data && data.file ? data.file.url : "kitty.jpg";

    let blc = {
        element: el,
        render: function () {
            console.log("render image")
        },
        save: function () {
            return {
                caption: fc.innerHTML
            }
        }
    }
    templates.twoPanels(blc);
    blc.addToPreview(figtag);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR087QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQyIsImZpbGUiOiJibG9ja2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tlZGl0b3IuanNcIik7XG4iLCJleHBvcnQgdmFyIG15Y3lhbiA9IFwiIzNFRDlFM1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9vbHRpcHMoKXtcbiAgICBsZXQgdHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dC5zdHlsZS56SW5kZXggPSAyMDtcbiAgICB0dC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7ICAgIFxuXG4gICAgbGV0IHR0aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0LmFwcGVuZENoaWxkKHR0aW4pO1xuICAgIHR0aW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDg1LjElLCA4MyUsIDU5LjYlLCAwLjc1KVwiO1xuICAgIHR0aW4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHR0aW4uc3R5bGUucGFkZGluZyA9IFwiNHB4IDhweFwiO1xuICAgIHR0aW4uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjRweFwiO1xuICAgIHR0aW4uc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIHR0aW4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHQpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZihlLnRhcmdldCYmZS50YXJnZXQuZGF0YXNldC5oaW50KXtcbiAgICAgICAgdHRpbi5pbm5lckhUTUwgPSBlLnRhcmdldC5kYXRhc2V0LmhpbnQ7XG4gICAgICAgLy8gdHQuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9ZWxzZXsgICAgICAgICAgICBcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9vbHMoKXtcbiAgICBsZXQgdHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dG9vbHMuc3R5bGUubWluV2lkdGggPSBcIjEwMHB4XCI7XG4gICAgdHRvb2xzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgdHRvb2xzLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgIHR0b29scy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBteWN5YW47XG4gICAgdHRvb2xzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR0b29scyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKTtcbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikgJiYgIWUudGFyZ2V0LmRhdGFzZXQubm9fdGV4dF90b29sYm94KXtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNsaWNrXCIgLCB0dG9vbHMpO1xuICAgICAgICBsZXQgdGd0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHR0b29scy5zdHlsZS5sZWZ0ID0gdGd0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcC0yNCArIHdpbmRvdy5zY3JvbGxZKSArIFwicHhcIjtcbiAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfWVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dF90b29sYm94XCIpKXtcbiAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfWVsc2V7XG4gICAgICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIH0pO1xuICAgICBcbiBcbiAgICBcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGJsb2NrLCBtZW51KSB7XG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vbWVudVxuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgIGRkLnN0eWxlLnRvcCA9IFwiMTAwJVwiO1xuICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgZGQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIlxuICAgIGRkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGdyYXlcIlxuICAgIG1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZWxlbWVudC5pY29uO1xuICAgICAgICAvL21pLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiMnB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgIG1pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZGQuYXBwZW5kQ2hpbGQobWkpXG4gICAgfSk7XG4gICAgLy9cbiAgICBibG9jay5hcHBlbmRDaGlsZChkZCk7XG5cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGRvd25cIik7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjE5cHhcIjtcbiAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTJweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IC41c1wiO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmhpbnQgPSBcIkFkZCBuZXcgYmxvY2tcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG5cblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gNTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL21lbnVoaWRkZW4gPSAhbWVudWhpZGRlbjtcbiAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIilcbiAgICAgICAgLy8gLmZvckVhY2goZT0+ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKTtcbiAgICAgICAgbGV0IGlzaGlkZGVuID0gZGQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIjtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpc2hpZGRlbilcbiAgICAgICAgaWYgKCFpc2hpZGRlbikge1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxLjA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZGQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBibG9jay5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmxvY2tDb250cm9scyhibG9jaywgaXRlbXMgLCBlZCkge1xuICAgIGlmICghaXRlbXMmJmVkKSB7XG4gICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIvCfoaFcIixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCLwn6GjXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcImRlbGV0ZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwi4pyVXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5yZW1vdmVCbG9jayhibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9ZWxzZXtcbiAgICAgICAgaXRlbXM9W107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiK2Jsb2NrLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgbGV0IGN0cmxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKFwiY29tbW9uX2Jsb2NrX2NvbnRyb2xzXCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQob3VyY2xhc3MpO1xuICAgIGN0cmxzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XG4gICAgY3RybHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBjdHJscy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtjdHJscy5zdHlsZS56SW5kZXg9NiA7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJ9ICk7XG4gICAgY3RybHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtjdHJscy5zdHlsZS56SW5kZXg9XCJpbml0aWFsXCIgOyAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwifSk7XG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4PTUgOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wifSk7XG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4PVwiaW5pdGlhbFwiIDsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwifSk7XG5cblxuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlLmljb247XG4gICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZS5sYWJlbDtcbiAgICAgICAgY3RybHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY3RybHMpXG5cbn0iLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9iZXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0VkaXRvcih7XG4gICAgc2VsZWN0b3Jcbn0pIHtcbiAgICBjb25zdCBteSA9IHRoaXM7XG4gICAgLy9cbiAgICBsZXQgbWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX291dGVyX2NvbnRhaW5lclwiKTtcbiAgICBtaW5lLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoZXkuYXBwZW5kQ2hpbGQobWluZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWluZTsgLy90aGlzIGVsZW1lbnQgaXMgbWluZVxuXG5cbiAgICB0aGlzLmVkaXRvcnMgPSB7XG4gICAgICAgIC8vXCJ6ZXJvXCI6e1xuICAgICAgICAvL1xuICAgICAgICAvL31cbiAgICB9OyAvLyBudWxsOyAvL3BhcmFtcy5lZGl0b3JzOyAvLyAgYXZhaWxhYmxlIGJsb2NrcyBlZGl0b3JzXG4gICAgdGhpcy5ibG9ja3MgPSBudWxsOyAvLyBibG9ja3MgYXJyYXlcbiAgICB0aGlzLmFkZE1lbnUgPSBbXTtcblxuICAgIHZhciBfY3VycmVudF9pZCA9IDA7XG5cbiAgICB0aGlzLl9tYWtlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jdXJyZW50X2lkKys7XG4gICAgICAgIHJldHVybiBfY3VycmVudF9pZDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICAvL2FkZCBzZXJvIGJsb2NrXG5cbiAgICAgICAgLy90aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBbXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkaXRvcnMpXG4gICAgICAgIC8vYWRkIG1lbnVcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGVkIGhhbmRsZXIgZm9yXCIsIGUpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG15LmVkaXRvcnNbZV07XG4gICAgICAgICAgICBteS5hZGRNZW51LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogdmFsLmxhYmVsLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB2YWwuaWNvbiA/IHZhbC5pY29uIDogbnVsbCxcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKHJlZmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG15LmFkZE5ld0Jsb2NrKGUsIG51bGwsIHJlZmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAvL1xuXG4gICAgICAgIGxldCB6ZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgemVyby5jbGFzc0xpc3QuYWRkKFwic3RhcnRpbmdfYmxvY2tcIik7XG4gICAgICAgIHplcm8uc3R5bGUuaGVpZ2h0ID0gXCI4cHhcIjtcbiAgICAgICAgemVyby5zdHlsZS53aWZ0aCA9IFwiMTAwJVwiO1xuICAgICAgICB6ZXJvLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0zMnB4XCI7XG4gICAgICAgIHplcm8uZGF0YXNldC5ibG9ja19pZCA9IFwic3RhcnRcIjtcblxuICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKHplcm8sIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIG1pbmUuYXBwZW5kQ2hpbGQoemVybyk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZCA9PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgICAgIC8vIHZhciBzdGFydCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG5cblxuICAgICAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBiSUQgPSB0aGlzLl9tYWtlSUQoKTtcbiAgICAgICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgICAgICBkb21ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX3VuaXRcIik7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcblxuXG4gICAgICAgICAgICBiY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfY29udGVudF9jb250YWluZXJcIik7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKGRvbWJsb2NrLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICAgICAgVUkuYWRkQmxvY2tDb250cm9scyhkb21ibG9jaywgbnVsbCwgdGhpcyk7XG4gICAgICAgICAgICBVSS50ZXh0VG9vbHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgRE9NIGVsZW1lbnQgZm9yIGVkaXRvclxuXG4gICAgICAgIC8vIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJsb2NrLmVsZW1lbnQpO1xuXG5cbiAgICAgICAgLy9hZGQgY29ycmVzcG9uZGluZyBkb20gZWwuIHRvIGNvbnRhaW5lclxuICAgICAgICAvL2lmKHN0YXJ0KXtcblxuICAgICAgICAvL31cbiAgICAgICAgaWYgKHJlZmlkICYmIHJlZmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbWJsb2NrLCByZWZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gYklEO1xuICAgIH0gLy9hZGQgbmV3IGJsb2NrXG5cbiAgICB0aGlzLnJlbW92ZUJsb2NrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vZmluZCBibG9jayBpbmRleFxuICAgICAgICBsZXQgZWxpZHggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9hbm5vdW5jZSBkZWxldGlvbiB0byBibG9ja1xuICAgICAgICBpZiAoXCJiZWZvcmVEZWxldGVcIiBpbiB0aGlzLmJsb2Nrc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2lkXS5iZWZvcmVEZWxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBkb20gZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGVsaWR4KS5yZW1vdmUoKTtcbiAgICAgICAgLy9kZWwgYmxvY2sgZnJvbSByZWdpc3RyeVxuICAgICAgICBkZWxldGUodGhpcy5ibG9ja3NbaWRdKTtcbiAgICB9IC8vcmVtb3ZlIGJsb2NrXG5cbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkdCA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIGR0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZS5kYXRhc2V0LmJsb2NrX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBteS5ibG9ja3NbZS5kYXRhc2V0LmJsb2NrX2lkXS5zYXZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGxldCBteWRhdGEgPSB7XG4gICAgICAgICAgICBcImJsb2Nrc1wiOiBkdFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXRvciBzYXZpbmdcIiwgbXlkYXRhKTtcbiAgICAgICAgcmV0dXJuIG15ZGF0YTtcbiAgICB9XG5cbn1cblxudmFyIGNvbnN0cnVjdG9ycyA9IHt9O1xudmFyIHRlbXBsYXRlcyA9IHt9XG5cblxudGVtcGxhdGVzLmFkZFRvb2xiYXIgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBsZXQgdGJ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YnguY2xhc3NMaXN0LmFkZChcImJsb2NrX3Rvb2xiYXJcIik7XG4gICAgdGJ4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIHRieC5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0Ynguc3R5bGUuZm9udFNpemUgPSBcIi44ZW1cIlxuICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRieC5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIjtcblxuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YngpOyAvL2FkZCB0byBlZGl0b3JfaXRlbSwgIW5vdCEgYmxvY2sgY29udGVudCBjb250YWluZXJcbiAgICBibG9jay5hZGRUb1Rvb2xiYXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdGJ4LmFwcGVuZENoaWxkKGVsKVxuICAgIH1cbn1cblxudGVtcGxhdGVzLnR3b1BhbmVscyA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIC8vbGV0IG1vZGUgPSBcInByZXZpZXdcIjtcbiAgICBsZXQgcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBwLmNsYXNzTGlzdC5hZGQoXCJibG9ja19wcmV2aWV3X3BhbmVsXCIpO1xuICAgIHBwLmNsYXNzTGlzdC5hZGQoXCJvbmVfb2ZfdHdvX3BhbmVsc1wiKTtcbiAgICBwcC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBwcC5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBwcC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgbGV0IGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdF9wYW5lbFwiKTtcbiAgICBlcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgZXAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy9cbiAgICBsZXQgZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdF9idXR0b25cIik7XG4gICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICBlYnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcbiAgICBlYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZWJ0bi5zdHlsZS56SW5kZXggPSA1O1xuICAgIGVidG4uc3R5bGUucmlnaHQgPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZWRpdG1vZGUgPSBlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiO1xuICAgICAgICBpZiAoZWRpdG1vZGUpIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9cbiAgICBwcC5hcHBlbmRDaGlsZChlYnRuKTtcbiAgICAvL1xuICAgIGNvbnNvbGUubG9nKGJsb2NrKVxuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHApO1xuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXApO1xuICAgIC8vXG4gICAgYmxvY2suYWRkVG9QcmV2aWV3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfVxuICAgIGJsb2NrLmFkZFRvRWRpdG9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfVxuICAgIGJsb2NrLmdvRWRpdE1vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiUFJFVklFV1wiO1xuXG4gICAgfVxuICAgIGJsb2NrLmdvUHJldmlld01vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG5cbiAgICB9XG4gICAgYmxvY2suaXNJbkVkaXRNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpO1xuICAgIH1cblxufVxuXG5jb25zdHJ1Y3RvcnMucGFyYWdyYXBoID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIC8vYmMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG4gICAgbGV0IHJlID0gLzxkaXZ8cHxoPi9naTtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIG15OiB0aGlzLFxuICAgICAgICBpZDogaWQsIC8vISEhISEhISEhISEhISEhISEhISAgICBcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBlZGl0b3I6IGVkaXRvcixcbiAgICAgICAgX3A6IGJjLFxuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3AuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fcC5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5wID0gYmxjLmVkaXRvci5hZGROZXdCbG9jayhcInBhcmFncmFwaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSwgYmxjLmlkKTtcbiAgICAgICAgICAgICAgICAvL25wID0gbmV3bHkgaW5zZXJ0ZWQgYmxvY2sgaWRcbiAgICAgICAgICAgICAgICBibGMuZWRpdG9yLmJsb2Nrc1tucF0uX3AuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuZGl2aWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8aHIgLz5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0cnVjdG9ycy5oZWFkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICAvL215dGFnLlxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIC8vaWQ6IGlkLFxuICAgICAgICB0ZXh0OiBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiSGVhZGVyXCIsXG4gICAgICAgIGxldmVsOiBkYXRhICYmIGRhdGEubGV2ZWwgPyBkYXRhLmxldmVsIDogMSxcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUwpXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKVxuXG4gICAgICAgIH0sXG4gICAgICAgIC8vbXl0YWc6IFxuXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpO1xuICAgICAgICAgICAgLy90aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHR4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHR4dCxcbiAgICAgICAgICAgICAgICBcImxldmVsXCI6IHRoaXMubGV2ZWxcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgbGV0IG9wdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIG9wdHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAvL29wdHMudHlwZT1cInNlbGVjdFwiO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgIG9wdC52YWx1ZSA9IGk7XG4gICAgICAgIG9wdC5sYWJlbCA9IFwibGV2ZWwgXCIgKyBpO1xuICAgICAgICBpZiAoaSA9PSBibGMubGV2ZWwpIHtcbiAgICAgICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9XG4gICAgb3B0cy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBudiA9IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgYmxjLmxldmVsID0gbnY7XG4gICAgICAgIGJsYy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICBibGMuYWRkVG9Ub29sYmFyKG9wdHMpXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgICBsZXQgY2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcbiAgICBwcmUuYXBwZW5kQ2hpbGQoY2QpO1xuICAgIGNkLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBjZC5kYXRhc2V0Lm5vX3RleHRfdG9vbGJveCA9IHRydWU7XG4gICAgZWwuYXBwZW5kQ2hpbGQocHJlKTtcbiAgICBsZXQgbGFuZ3MgPSBbXCJBdXRvXCIsIFwiQXJkdWlub1wiLCAnSmF2YVNjcmlwdCcsIFwiUHJvY2Vzc2luZ1wiLCBcIlB5dGhvblwiLCBcIkMrK1wiLCBcIkJhc2hcIiwgXCJCYXNpY1wiLCBcIkJyYWluZnVja1wiXTtcbiAgICAvL1xuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBsYW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1pLnZhbHVlID0gZTtcbiAgICAgICAgbWkubGFiZWwgPSBlO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxhbmd1YWdlICYmIGUgPT0gZGF0YS5sYW5ndWFnZSkge1xuICAgICAgICAgICAgbWkuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuICAgIC8vXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjZC5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiIyAgdHlwZVxcbiMgIGhlcmVcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBjZC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKTtcbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5yYXcgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcblxuICAgIGxldCBlZGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZWRpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgZWRpLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGVkaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBlZGkuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgY3lhblwiO1xuICAgIGVkaS5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmh0bWwpIHtcbiAgICAgICAgZWRpLnZhbHVlID0gZGF0YS5odG1sO1xuICAgIH1cblxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlZGkpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWw6IGVkaS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJsY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xuICAgIGJsY3RhZy5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgYmxjaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGJsY2luLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBsZXQgYmxmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBsZXQgYmxjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNpdGVcIik7XG4gICAgYmxmb290LmFwcGVuZENoaWxkKGJsY2l0ZSk7XG4gICAgYmxjaXRlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGNpbik7XG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsZm9vdCk7XG4gICAgYmxjaW4uaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcItCm0LjRgtCw0YLQsFwiO1xuICAgIGJsY2l0ZS5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwi0J/QvtC00L/QuNGB0YxcIlxuICAgIGxldCBibG9jayA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChibGN0YWcpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGJsY2luLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBibGNpdGUuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5pbWFnZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBmaWd0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGxldCBwaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgZmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcbiAgICBmYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgZmMuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLmNhcHRpb24gPyBkYXRhLmNhcHRpb24gOiBcItCf0L7QtNC/0LjRgVwiXG4gICAgZmlndGFnLmFwcGVuZENoaWxkKHBpbWcpO1xuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChmYyk7XG4gICAgcGltZy5zcmMgPSBkYXRhICYmIGRhdGEuZmlsZSA/IGRhdGEuZmlsZS51cmwgOiBcImtpdHR5LmpwZ1wiO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgaW1hZ2VcIilcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBmYy5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZW1wbGF0ZXMudHdvUGFuZWxzKGJsYyk7XG4gICAgYmxjLmFkZFRvUHJldmlldyhmaWd0YWcpO1xuICAgIHJldHVybiBibGM7XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVR5cGljYWxFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHtcbiAgICAgICAgc2VsZWN0b3I6IGVsXG4gICAgfSk7XG5cbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBpY29uOiBcIsK2XCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5wYXJhZ3JhcGgsXG4gICAgICAgIGxhYmVsOiBcIlBhcmFncmFwaFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5kaXZpZGVyLFxuICAgICAgICBpY29uOiBcIuKAlFwiLFxuICAgICAgICBsYWJlbDogJ0RpdmlkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgaWNvbjogXCJIXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5oZWFkZXIsXG4gICAgICAgIGxhYmVsOiAnSGVhZGVyJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiY29kZVwiLFxuICAgICAgICBpY29uOiBcInt9XCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5jb2RlLFxuICAgICAgICBsYWJlbDogJ0NvZGUgc25pcHBldCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInJhd1wiLFxuICAgICAgICBpY29uOiBcIjw+XCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5yYXcsXG4gICAgICAgIGxhYmVsOiAnUmF3IEhUTUwnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJxdW90ZVwiLFxuICAgICAgICBpY29uOiBcIsKrwrtcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmJsb2NrcXVvdGUsXG4gICAgICAgIGxhYmVsOiAnQmxvY2txdW90ZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgIGljb246IFwicGljXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5pbWFnZSxcbiAgICAgICAgbGFiZWw6ICdJbWFnZSdcbiAgICB9KTtcblxuICAgIHJldHVybiBlZGl0b3I7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==