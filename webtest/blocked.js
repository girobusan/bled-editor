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
/*! exports provided: tooltips, addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });

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
    ttin.style.bottom = "24px";

    document.body.appendChild(tt);

    window.addEventListener("mousemove" , function(e){
        tt.style.top = e.clientY + "px";
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
    };// null; //params.editors; //  available blocks editors
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
        
        _beui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](zero , this.addMenu);
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
        if (refid=="start"){
          // var start = true;
           var refel = this.blockElementByIndex(0);
        }
        else if (refid) {
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
            }
            );
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

templates.twoPanels = function(block){
    //let mode = "preview";
    let pp = document.createElement("div");
    pp.classList.add("block_preview_panel");
    pp.classList.add("one_of_two_panels");
    pp.style.position="relative";
    pp.style.width = "100%";

    let ep = document.createElement("div");
    ep.classList.add("block_edit_panel");
    ep.classList.add("one_of_two_panels");
    ep.style.display = "none";
    //
    ebtn = document.createElement("div");
    ebtn.classList.add("edit_button");
    ebtn.innerHTML = "EDIT";
    ebtn.style.position = "absolute";
    ebtn.style.backgroundColor = "silver";
    ebtn.style.padding = "2px 4px";
    ebtn.style.color = "white"
    ebtn.style.zIndex = 5;
    ebtn.style.right = "8px";
    ebtn.style.bottom = "8px";

    ebtn.addEventListener("click" , function(){
        let editmode = ep.style.display != "none";
        if(editmode){
            ep.style.display = "none";
            ebtn.innerHTML = "EDIT";
        }else{
            ep.style.display = "block";
            ebtn.innerHTML = "PREVIEW";
        }
    })
    //
    pp.appendChild(ebtn);
    //
    block.element.appendChild(pp);
    block.element.appendChild(ep);
    //
    block.addToPreview = function(e){
        pp.appendChild(e);
    }
    block.addToEditor = function(e){
        ep.appendChild(e);
    }
    block.goEditMode = function(e){
        ep.style.display = "block";
        ebtn.innerHTML = "PREVIEW";

    }
    block.goPreviewMode = function(e){
        ep.style.display = "none";
        ebtn.innerHTML = "EDIT";

    }
    block.isInEditMode = function(){
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
                let np = blc.editor.addNewBlock("paragraph", { "text": "" }, blc.id);
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
            return { "text": txt, "level": this.level }

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

constructors.code = function(data, el, id, editor){
    let pre = document.createElement("pre");
    let cd = document.createElement("code");
    pre.appendChild(cd);
    cd.setAttribute("contenteditable" , true);
    el.appendChild(pre);
    let langs = ["Auto" , "Arduino" , 'JavaScript' ,"Processing" , "Python" ,  "C++" , "Bash" , "Basic" , "Brainfuck"];
    //
    let opts = document.createElement("select");
    langs.forEach(function(e){
        let mi = document.createElement("option");
        mi.value = e;
        mi.label = e;
        if(data&&data.language&&e==data.language){
            mi.selected = true;
        }
        opts.appendChild(mi);
    });
    //

   let blc =  {
       element: el,
        render: function(){
            cd.innerHTML = data && data.text ? data.text: "#  type\n#  here";
        },
        save: function(){
            return {text:cd.innerHTML, language: opts[opts.selectedIndex].value}
        }
    }
    templates.addToolbar(blc);
    //
   /*
    opts.addEventListener("change" , function(){
        console.log(opts[opts.selectedIndex].value);
    })
    */
    blc.addToToolbar(opts);
    return blc;

}

function makeTypicalEditor(el) {
    let editor = new BlockEditor({ selector: el });

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

    return editor;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0JBQXNCLCtCQUErQjtBQUNwRyw4Q0FBOEMsOEJBQThCLCtCQUErQjs7QUFFM0csK0NBQStDLHVCQUF1QiwrQkFBK0I7QUFDckcsOENBQThDLCtCQUErQiw4QkFBOEI7Ozs7QUFJM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQzlNQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFdEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOzs7QUFHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVEsa0JBQWtCO0FBQ2hDLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQVc7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxZQUFZLG1EQUFnQjtBQUM1QixZQUFZLHNEQUFtQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4REFBOEQsYUFBYTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1Asa0NBQWtDLGVBQWU7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDIiwiZmlsZSI6ImJsb2NrZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja2VkaXRvci5qc1wiKTtcbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIHRvb2x0aXBzKCl7XG4gICAgbGV0IHR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHQuc3R5bGUuekluZGV4ID0gMjA7XG4gICAgdHQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIFxuXG4gICAgbGV0IHR0aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0LmFwcGVuZENoaWxkKHR0aW4pO1xuICAgIHR0aW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDg1LjElLCA4MyUsIDU5LjYlLCAwLjc1KVwiO1xuICAgIHR0aW4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHR0aW4uc3R5bGUucGFkZGluZyA9IFwiNHB4IDhweFwiO1xuICAgIHR0aW4uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjRweFwiO1xuICAgIHR0aW4uc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIHR0aW4uc3R5bGUuYm90dG9tID0gXCIyNHB4XCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR0KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdHQuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZihlLnRhcmdldCYmZS50YXJnZXQuZGF0YXNldC5oaW50KXtcbiAgICAgICAgdHRpbi5pbm5lckhUTUwgPSBlLnRhcmdldC5kYXRhc2V0LmhpbnQ7XG4gICAgICAgLy8gdHQuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGJsb2NrLCBtZW51KSB7XG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vbWVudVxuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgIGRkLnN0eWxlLnRvcCA9IFwiMTAwJVwiO1xuICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgZGQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIlxuICAgIGRkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGdyYXlcIlxuICAgIG1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZWxlbWVudC5pY29uO1xuICAgICAgICAvL21pLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiMnB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgIG1pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZGQuYXBwZW5kQ2hpbGQobWkpXG4gICAgfSk7XG4gICAgLy9cbiAgICBibG9jay5hcHBlbmRDaGlsZChkZCk7XG5cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGRvd25cIik7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjE5cHhcIjtcbiAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTJweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IC41c1wiO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmhpbnQgPSBcIkFkZCBuZXcgYmxvY2tcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG5cblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gNTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL21lbnVoaWRkZW4gPSAhbWVudWhpZGRlbjtcbiAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIilcbiAgICAgICAgLy8gLmZvckVhY2goZT0+ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKTtcbiAgICAgICAgbGV0IGlzaGlkZGVuID0gZGQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIjtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpc2hpZGRlbilcbiAgICAgICAgaWYgKCFpc2hpZGRlbikge1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxLjA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZGQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBibG9jay5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmxvY2tDb250cm9scyhibG9jaywgaXRlbXMgLCBlZCkge1xuICAgIGlmICghaXRlbXMmJmVkKSB7XG4gICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIvCfoaFcIixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCLwn6GjXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcImRlbGV0ZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwi4pyVXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5yZW1vdmVCbG9jayhibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9ZWxzZXtcbiAgICAgICAgaXRlbXM9W107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiK2Jsb2NrLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgbGV0IGN0cmxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKFwiY29tbW9uX2Jsb2NrX2NvbnRyb2xzXCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQob3VyY2xhc3MpO1xuICAgIGN0cmxzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLndpZHRoID0gXCIzMnB4XCI7XG4gICAgY3RybHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBjdHJscy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtjdHJscy5zdHlsZS56SW5kZXg9NiA7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJ9ICk7XG4gICAgY3RybHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtjdHJscy5zdHlsZS56SW5kZXg9XCJpbml0aWFsXCIgOyAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwifSk7XG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4PTUgOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wifSk7XG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4PVwiaW5pdGlhbFwiIDsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwifSk7XG5cblxuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlLmljb247XG4gICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZS5sYWJlbDtcbiAgICAgICAgY3RybHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY3RybHMpXG5cbn0iLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9iZXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0VkaXRvcih7XG4gICAgc2VsZWN0b3Jcbn0pIHtcbiAgICBjb25zdCBteSA9IHRoaXM7XG4gICAgLy9cbiAgICBsZXQgbWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX291dGVyX2NvbnRhaW5lclwiKTtcbiAgICBtaW5lLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoZXkuYXBwZW5kQ2hpbGQobWluZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWluZTsgLy90aGlzIGVsZW1lbnQgaXMgbWluZVxuXG5cbiAgICB0aGlzLmVkaXRvcnMgPSB7XG4gICAgICAgIC8vXCJ6ZXJvXCI6e1xuICAgICAgICAvL1xuICAgICAgICAvL31cbiAgICB9Oy8vIG51bGw7IC8vcGFyYW1zLmVkaXRvcnM7IC8vICBhdmFpbGFibGUgYmxvY2tzIGVkaXRvcnNcbiAgICB0aGlzLmJsb2NrcyA9IG51bGw7IC8vIGJsb2NrcyBhcnJheVxuICAgIHRoaXMuYWRkTWVudSA9IFtdO1xuXG4gICAgdmFyIF9jdXJyZW50X2lkID0gMDtcblxuICAgIHRoaXMuX21ha2VJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX2N1cnJlbnRfaWQrKztcbiAgICAgICAgcmV0dXJuIF9jdXJyZW50X2lkO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIC8vYWRkIHNlcm8gYmxvY2tcblxuICAgICAgICAvL3RoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IFtdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRpdG9ycylcbiAgICAgICAgLy9hZGQgbWVudVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkZWQgaGFuZGxlciBmb3JcIiwgZSk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbXkuZWRpdG9yc1tlXTtcbiAgICAgICAgICAgIG15LmFkZE1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVmaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXkuYWRkTmV3QmxvY2soZSwgbnVsbCwgcmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vXG5cbiAgICAgICAgbGV0IHplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB6ZXJvLmNsYXNzTGlzdC5hZGQoXCJzdGFydGluZ19ibG9ja1wiKTtcbiAgICAgICAgemVyby5zdHlsZS5oZWlnaHQgPSBcIjhweFwiO1xuICAgICAgICB6ZXJvLnN0eWxlLndpZnRoID0gXCIxMDAlXCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luTGVmdCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5kYXRhc2V0LmJsb2NrX2lkID0gXCJzdGFydFwiO1xuICAgICAgICBcbiAgICAgICAgVUkuYWRkUGx1c0J1dHRvbih6ZXJvICwgdGhpcy5hZGRNZW51KTtcbiAgICAgICAgbWluZS5hcHBlbmRDaGlsZCh6ZXJvKTtcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgYmxvY2tzLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZShlKSk7XG4gICAgICAgIH1cbiAgICAgICAgVUkudG9vbHRpcHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9ja3NbaWRdO1xuICAgIH1cblxuICAgIHRoaXMuSUQySW5kZXggPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHIgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhc2V0LmJsb2NrX2lkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgciA9IGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHRoaXMuSW5kZXgySUQgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCkuZGF0YXNldC5ibG9ja19pZDtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0odGhpcy5JRDJJbmRleChpZCkpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXMuYWRkTmV3QmxvY2soZC50eXBlLCBkLmRhdGEsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMubW92ZVVwID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgaWYgKGJpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9maW5kIHByZXYgYmxvY2tcbiAgICAgICAgbGV0IHVwcGVyID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCAtIDEpO1xuICAgICAgICBpZiAodXBwZXIpIHtcbiAgICAgICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCB1cHBlcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubW92ZURvd24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2xhc3Q/XG4gICAgICAgIGlmIChiaW5kZXggKyAxID09IE9iamVjdC5rZXlzKHRoaXMuYmxvY2tzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dG5leHQgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4ICsgMik7XG4gICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgIGlmIChuZXh0bmV4dCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgbmV4dG5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy93ZSBhdCBwcmVsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGVibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpc3RlckVkaXRvciA9IGZ1bmN0aW9uICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIG1ha2UsXG4gICAgICAgIGljb24sXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBwYXN0ZVxuICAgIH0pIHtcbiAgICAgICAgdGhpcy5lZGl0b3JzW3R5cGVdID0ge1xuICAgICAgICAgICAgbWFrZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIHBhc3RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c09uID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiZiA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgIGJmLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9jayA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCByZWZpZCkgeyAvL3JlZj1pbnN0ZXJ0IGFmdGVyIHRoYXQgYmxvY2tcbiAgICAgICAgLy9pZiB0aGVyZSBpcyByZWYgaWQsIHdlIGhhdmUgdG8gaW5zZXJ0IGFmdGVyXG4gICAgICAgIC8vZmluZCBuZXh0IGVsZW1lbnRcbiAgICAgICAgaWYgKHJlZmlkPT1cInN0YXJ0XCIpe1xuICAgICAgICAgIC8vIHZhciBzdGFydCA9IHRydWU7XG4gICAgICAgICAgIHZhciByZWZlbCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWZpZCkge1xuICAgICAgICAgICAgbGV0IG5leHRpZHggPSB0aGlzLklEMkluZGV4KHJlZmlkKSArIDE7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgobmV4dGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBibG9jayBvZiB0eXBlIFxuICAgICAgICBpZiAodHlwZSBpbiB0aGlzLmVkaXRvcnMpIHtcblxuXG4gICAgICAgICAgICB2YXIgZG9tYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGJJRCA9IHRoaXMuX21ha2VJRCgpO1xuICAgICAgICAgICAgbGV0IGJjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJjb250ZW50KTtcbiAgICAgICAgICAgIGRvbWJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfdW5pdFwiKTtcbiAgICAgICAgICAgIGRvbWJsb2NrLmRhdGFzZXQuYmxvY2tfaWQgPSBiSUQ7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX3R5cGUgPSB0eXBlO1xuXG5cbiAgICAgICAgICAgIGJjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZWRpdG9yc1t0eXBlXS5tYWtlKGRhdGEsIGJjb250ZW50LCBiSUQsIHRoaXMpOyAvL2Jsb2NrIG1hZGVcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2JJRF0gPSBibG9jaztcbiAgICAgICAgICAgIFVJLmFkZFBsdXNCdXR0b24oZG9tYmxvY2ssIHRoaXMuYWRkTWVudSk7XG4gICAgICAgICAgICBVSS5hZGRCbG9ja0NvbnRyb2xzKGRvbWJsb2NrLCBudWxsLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgRE9NIGVsZW1lbnQgZm9yIGVkaXRvclxuXG4gICAgICAgIC8vIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJsb2NrLmVsZW1lbnQpO1xuXG5cbiAgICAgICAgLy9hZGQgY29ycmVzcG9uZGluZyBkb20gZWwuIHRvIGNvbnRhaW5lclxuICAgICAgICAvL2lmKHN0YXJ0KXtcblxuICAgICAgICAvL31cbiAgICAgICAgaWYgKHJlZmlkICYmIHJlZmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbWJsb2NrLCByZWZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gYklEO1xuICAgIH0gLy9hZGQgbmV3IGJsb2NrXG5cbiAgICB0aGlzLnJlbW92ZUJsb2NrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vZmluZCBibG9jayBpbmRleFxuICAgICAgICBsZXQgZWxpZHggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9hbm5vdW5jZSBkZWxldGlvbiB0byBibG9ja1xuICAgICAgICBpZiAoXCJiZWZvcmVEZWxldGVcIiBpbiB0aGlzLmJsb2Nrc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2lkXS5iZWZvcmVEZWxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBkb20gZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGVsaWR4KS5yZW1vdmUoKTtcbiAgICAgICAgLy9kZWwgYmxvY2sgZnJvbSByZWdpc3RyeVxuICAgICAgICBkZWxldGUgKHRoaXMuYmxvY2tzW2lkXSk7XG4gICAgfSAvL3JlbW92ZSBibG9ja1xuXG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZHQgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIilcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICBkdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGUuZGF0YXNldC5ibG9ja190eXBlLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogbXkuYmxvY2tzW2UuZGF0YXNldC5ibG9ja19pZF0uc2F2ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIGxldCBteWRhdGEgPSB7XG4gICAgICAgICAgICBcImJsb2Nrc1wiOiBkdFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXRvciBzYXZpbmdcIiwgbXlkYXRhKTtcbiAgICAgICAgcmV0dXJuIG15ZGF0YTtcbiAgICB9XG5cbn1cblxudmFyIGNvbnN0cnVjdG9ycyA9IHt9O1xudmFyIHRlbXBsYXRlcyA9IHt9XG5cblxudGVtcGxhdGVzLmFkZFRvb2xiYXIgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBsZXQgdGJ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YnguY2xhc3NMaXN0LmFkZChcImJsb2NrX3Rvb2xiYXJcIik7XG4gICAgdGJ4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIHRieC5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0Ynguc3R5bGUuZm9udFNpemUgPSBcIi44ZW1cIlxuICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRieC5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIjtcblxuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YngpOyAvL2FkZCB0byBlZGl0b3JfaXRlbSwgIW5vdCEgYmxvY2sgY29udGVudCBjb250YWluZXJcbiAgICBibG9jay5hZGRUb1Rvb2xiYXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdGJ4LmFwcGVuZENoaWxkKGVsKVxuICAgIH1cbn1cblxudGVtcGxhdGVzLnR3b1BhbmVscyA9IGZ1bmN0aW9uKGJsb2NrKXtcbiAgICAvL2xldCBtb2RlID0gXCJwcmV2aWV3XCI7XG4gICAgbGV0IHBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfcHJldmlld19wYW5lbFwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgcHAuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiO1xuICAgIHBwLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgICBsZXQgZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVwLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0X3BhbmVsXCIpO1xuICAgIGVwLmNsYXNzTGlzdC5hZGQoXCJvbmVfb2ZfdHdvX3BhbmVsc1wiKTtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy9cbiAgICBlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlYnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0X2J1dHRvblwiKTtcbiAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuICAgIGVidG4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZWJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGVidG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDRweFwiO1xuICAgIGVidG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbiAgICBlYnRuLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgZWJ0bi5zdHlsZS5yaWdodCA9IFwiOHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5ib3R0b20gPSBcIjhweFwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBlZGl0bW9kZSA9IGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCI7XG4gICAgICAgIGlmKGVkaXRtb2RlKXtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vXG4gICAgcHAuYXBwZW5kQ2hpbGQoZWJ0bik7XG4gICAgLy9cbiAgICBibG9jay5lbGVtZW50LmFwcGVuZENoaWxkKHBwKTtcbiAgICBibG9jay5lbGVtZW50LmFwcGVuZENoaWxkKGVwKTtcbiAgICAvL1xuICAgIGJsb2NrLmFkZFRvUHJldmlldyA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICBwcC5hcHBlbmRDaGlsZChlKTtcbiAgICB9XG4gICAgYmxvY2suYWRkVG9FZGl0b3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgZXAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfVxuICAgIGJsb2NrLmdvRWRpdE1vZGUgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcblxuICAgIH1cbiAgICBibG9jay5nb1ByZXZpZXdNb2RlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcblxuICAgIH1cbiAgICBibG9jay5pc0luRWRpdE1vZGUgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpO1xuICAgIH1cblxufVxuXG5jb25zdHJ1Y3RvcnMucGFyYWdyYXBoID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIC8vYmMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG4gICAgbGV0IHJlID0gLzxkaXZ8cHxoPi9naTtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIG15OiB0aGlzLFxuICAgICAgICBpZDogaWQsIC8vISEhISEhISEhISEhISEhISEhISAgICBcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBlZGl0b3I6IGVkaXRvcixcbiAgICAgICAgX3A6IGJjLFxuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3AuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fcC5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5wID0gYmxjLmVkaXRvci5hZGROZXdCbG9jayhcInBhcmFncmFwaFwiLCB7IFwidGV4dFwiOiBcIlwiIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgLy9ucCA9IG5ld2x5IGluc2VydGVkIGJsb2NrIGlkXG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmRpdmlkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGhyIC8+XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdHJ1Y3RvcnMuaGVhZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgLy9teXRhZy5cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICAvL2lkOiBpZCxcbiAgICAgICAgdGV4dDogZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIkhlYWRlclwiLFxuICAgICAgICBsZXZlbDogZGF0YSAmJiBkYXRhLmxldmVsID8gZGF0YS5sZXZlbCA6IDEsXG4gICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MKVxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aClcblxuICAgICAgICB9LFxuICAgICAgICAvL215dGFnOiBcblxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKTtcbiAgICAgICAgICAgIC8vdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4geyBcInRleHRcIjogdHh0LCBcImxldmVsXCI6IHRoaXMubGV2ZWwgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vb3B0cy50eXBlPVwic2VsZWN0XCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIGlmIChpID09IGJsYy5sZXZlbCkge1xuICAgICAgICAgICAgb3B0LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbiAgICBvcHRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG52ID0gb3B0c1tvcHRzLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBibGMubGV2ZWwgPSBudjtcbiAgICAgICAgYmxjLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cylcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuY29kZSA9IGZ1bmN0aW9uKGRhdGEsIGVsLCBpZCwgZWRpdG9yKXtcbiAgICBsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgICBsZXQgY2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcbiAgICBwcmUuYXBwZW5kQ2hpbGQoY2QpO1xuICAgIGNkLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiICwgdHJ1ZSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQocHJlKTtcbiAgICBsZXQgbGFuZ3MgPSBbXCJBdXRvXCIgLCBcIkFyZHVpbm9cIiAsICdKYXZhU2NyaXB0JyAsXCJQcm9jZXNzaW5nXCIgLCBcIlB5dGhvblwiICwgIFwiQysrXCIgLCBcIkJhc2hcIiAsIFwiQmFzaWNcIiAsIFwiQnJhaW5mdWNrXCJdO1xuICAgIC8vXG4gICAgbGV0IG9wdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGxhbmdzLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1pLnZhbHVlID0gZTtcbiAgICAgICAgbWkubGFiZWwgPSBlO1xuICAgICAgICBpZihkYXRhJiZkYXRhLmxhbmd1YWdlJiZlPT1kYXRhLmxhbmd1YWdlKXtcbiAgICAgICAgICAgIG1pLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcbiAgICAvL1xuXG4gICBsZXQgYmxjID0gIHtcbiAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2QuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQ6IFwiIyAgdHlwZVxcbiMgIGhlcmVcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7dGV4dDpjZC5pbm5lckhUTUwsIGxhbmd1YWdlOiBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWV9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICAvL1xuICAgLypcbiAgICBvcHRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZSk7XG4gICAgfSlcbiAgICAqL1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cyk7XG4gICAgcmV0dXJuIGJsYztcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVR5cGljYWxFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHsgc2VsZWN0b3I6IGVsIH0pO1xuXG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgaWNvbjogXCLCtlwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMucGFyYWdyYXBoLFxuICAgICAgICBsYWJlbDogXCJQYXJhZ3JhcGhcIlxuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiZGl2aWRlclwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuZGl2aWRlcixcbiAgICAgICAgaWNvbjogXCLigJRcIixcbiAgICAgICAgbGFiZWw6ICdEaXZpZGVyJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIGljb246IFwiSFwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaGVhZGVyLFxuICAgICAgICBsYWJlbDogJ0hlYWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImNvZGVcIixcbiAgICAgICAgaWNvbjogXCJ7fVwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuY29kZSxcbiAgICAgICAgbGFiZWw6ICdDb2RlIHNuaXBwZXQnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRpdG9yO1xufSJdLCJzb3VyY2VSb290IjoiIn0=