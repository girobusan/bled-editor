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
/*! exports provided: addPlusButton, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });


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
        mi.innerHTML = element.label;
        mi.style.backgroundColor = "white";
        mi.style.padding = "2px"
        mi.style.borderRadius = "5px";
        mi.style.margin = "2px";
        mi.style.cursor = "pointer";
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
    ctrls.style.backgroundColor = "rgb(36.1%, 82.3%, 93.3%)";
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
        })
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
    tbx.style.display = "block";
    tbx.style.padding = "4px";
    /*
    block.element.parentNode.addEventListener("mouseover" , function(){
        tbx.style.display = "block"
    });
    block.element.parentNode.addEventListener("mouseout" , function(){
        tbx.style.display = "none"
    })

*/
    block.element.parentNode.appendChild(tbx); //add to editor_item, !not! block content container
    block.addToToolbar = function (el) {
        tbx.appendChild(el)
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

/*
    {
        "type": "header",
        "data": 
        {
          "text": "Заголовок",
          "level": 3
        }
    }


*/

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

function makeTypicalEditor(el) {
    let editor = new BlockEditor({ selector: el });

    editor.registerEditor({
        type: "paragraph",
        make: constructors.paragraph,
        label: "p"
    });
    editor.registerEditor({
        type: "divider",
        make: constructors.divider,
        label: '--'
    });
    editor.registerEditor({
        type: "header",
        make: constructors.header,
        label: 'H'
    });

    return editor;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0JBQXNCLCtCQUErQjtBQUNwRyw4Q0FBOEMsOEJBQThCLCtCQUErQjs7QUFFM0csK0NBQStDLHVCQUF1QiwrQkFBK0I7QUFDckcsOENBQThDLCtCQUErQiw4QkFBOEI7Ozs7QUFJM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUN2S0E7QUFBQTtBQUFBO0FBQUE7QUFBNkI7O0FBRXRCO0FBQ1A7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7O0FBR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxRQUFRLGtCQUFrQjtBQUNoQyx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsbURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLFlBQVksbURBQWdCO0FBQzVCLFlBQVksc0RBQW1CO0FBQy9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4REFBOEQsYUFBYTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGtDQUFrQyxlQUFlOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDIiwiZmlsZSI6ImJsb2NrZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja2VkaXRvci5qc1wiKTtcbiIsIlxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGx1c0J1dHRvbihibG9jaywgbWVudSkge1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoIW1lbnUpIHtcbiAgICAgICAgbWVudSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwibWVudSBjbGlja2VkXCIpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51MiBjbGlja2VkXCIpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QzXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51MyBjbGlja2VkXCIpIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbiAgICAvL21lbnVcbiAgICBsZXQgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRkLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpO1xuICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkZC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBkZC5zdHlsZS56SW5kZXggPSAxMDtcbiAgICBkZC5zdHlsZS50b3AgPSBcIjEwMCVcIjtcbiAgICBkZC5zdHlsZS5sZWZ0ID0gMDtcbiAgICBkZC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICBkZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGRkLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCJcbiAgICBkZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmF5XCJcbiAgICBtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgIG1pLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiMnB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZGQuYXBwZW5kQ2hpbGQobWkpXG4gICAgfSk7XG4gICAgLy9cbiAgICBibG9jay5hcHBlbmRDaGlsZChkZCk7XG5cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGRvd25cIik7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjE5cHhcIjtcbiAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTJweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IC41c1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcblxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxLjA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSA1O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vbWVudWhpZGRlbiA9ICFtZW51aGlkZGVuO1xuICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKVxuICAgICAgICAvLyAuZm9yRWFjaChlPT5lLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpO1xuICAgICAgICBsZXQgaXNoaWRkZW4gPSBkZC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGlzaGlkZGVuKVxuICAgICAgICBpZiAoIWlzaGlkZGVuKSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChkZC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCbG9ja0NvbnRyb2xzKGJsb2NrLCBpdGVtcyAsIGVkKSB7XG4gICAgaWYgKCFpdGVtcyYmZWQpIHtcbiAgICAgICAgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayB1cFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwi8J+hoVwiLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgZWQubW92ZVVwKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJtb3ZlIGJsb2NrIGRvd25cIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIvCfoaNcIixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVEb3duKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiZGVsZXRlIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCLinJVcIixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLnJlbW92ZUJsb2NrKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1lbHNle1xuICAgICAgICBpdGVtcz1bXTtcbiAgICB9XG4gICAgLy9cbiAgICBibG9jay5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBsZXQgb3VyY2xhc3MgPSBcImN0cmxzXCIrYmxvY2suZGF0YXNldC5ibG9ja19pZDtcbiAgICBsZXQgY3RybHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQoXCJjb21tb25fYmxvY2tfY29udHJvbHNcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChvdXJjbGFzcyk7XG4gICAgY3RybHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY3RybHMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBjdHJscy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNi4xJSwgODIuMyUsIDkzLjMlKVwiO1xuICAgIGN0cmxzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge2N0cmxzLnN0eWxlLnpJbmRleD02IDsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIn0gKTtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge2N0cmxzLnN0eWxlLnpJbmRleD1cImluaXRpYWxcIiA7ICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJ9KTtcblxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXg9NSA7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJ9KTtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXg9XCJpbml0aWFsXCIgOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJ9KTtcblxuXG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGUuaWNvbjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLmhhbmRsZXIoYmxvY2suZGF0YXNldC5ibG9ja19pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIGN0cmxzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGN0cmxzKVxuXG59IiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vYmV1aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tFZGl0b3Ioe1xuICAgIHNlbGVjdG9yXG59KSB7XG4gICAgY29uc3QgbXkgPSB0aGlzO1xuICAgIC8vXG4gICAgbGV0IG1pbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbmUuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9vdXRlcl9jb250YWluZXJcIik7XG4gICAgbWluZS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGV5LmFwcGVuZENoaWxkKG1pbmUpO1xuICAgIHRoaXMuZWxlbWVudCA9IG1pbmU7IC8vdGhpcyBlbGVtZW50IGlzIG1pbmVcblxuXG4gICAgdGhpcy5lZGl0b3JzID0ge1xuICAgICAgICAvL1wiemVyb1wiOntcbiAgICAgICAgLy9cbiAgICAgICAgLy99XG4gICAgfTsvLyBudWxsOyAvL3BhcmFtcy5lZGl0b3JzOyAvLyAgYXZhaWxhYmxlIGJsb2NrcyBlZGl0b3JzXG4gICAgdGhpcy5ibG9ja3MgPSBudWxsOyAvLyBibG9ja3MgYXJyYXlcbiAgICB0aGlzLmFkZE1lbnUgPSBbXTtcblxuICAgIHZhciBfY3VycmVudF9pZCA9IDA7XG5cbiAgICB0aGlzLl9tYWtlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jdXJyZW50X2lkKys7XG4gICAgICAgIHJldHVybiBfY3VycmVudF9pZDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICAvL2FkZCBzZXJvIGJsb2NrXG5cbiAgICAgICAgLy90aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBbXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkaXRvcnMpXG4gICAgICAgIC8vYWRkIG1lbnVcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGVkIGhhbmRsZXIgZm9yXCIsIGUpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG15LmVkaXRvcnNbZV07XG4gICAgICAgICAgICBteS5hZGRNZW51LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogdmFsLmxhYmVsLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB2YWwuaWNvbiA/IHZhbC5pY29uIDogbnVsbCxcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKHJlZmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG15LmFkZE5ld0Jsb2NrKGUsIG51bGwsIHJlZmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAvL1xuXG4gICAgICAgIGxldCB6ZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgemVyby5jbGFzc0xpc3QuYWRkKFwic3RhcnRpbmdfYmxvY2tcIik7XG4gICAgICAgIHplcm8uc3R5bGUuaGVpZ2h0ID0gXCI4cHhcIjtcbiAgICAgICAgemVyby5zdHlsZS53aWZ0aCA9IFwiMTAwJVwiO1xuICAgICAgICB6ZXJvLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0zMnB4XCI7XG4gICAgICAgIHplcm8uZGF0YXNldC5ibG9ja19pZCA9IFwic3RhcnRcIjtcbiAgICAgICAgXG4gICAgICAgIFVJLmFkZFBsdXNCdXR0b24oemVybyAsIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIG1pbmUuYXBwZW5kQ2hpbGQoemVybyk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZD09XCJzdGFydFwiKXtcbiAgICAgICAgICAvLyB2YXIgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG5cblxuICAgICAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBiSUQgPSB0aGlzLl9tYWtlSUQoKTtcbiAgICAgICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgICAgICBkb21ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX3VuaXRcIik7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcblxuXG4gICAgICAgICAgICBiY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfY29udGVudF9jb250YWluZXJcIik7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKGRvbWJsb2NrLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICAgICAgVUkuYWRkQmxvY2tDb250cm9scyhkb21ibG9jaywgbnVsbCwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGVkaXRvciBmb3JcIiwgdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIERPTSBlbGVtZW50IGZvciBlZGl0b3JcblxuICAgICAgICAvLyBkb21ibG9jay5hcHBlbmRDaGlsZChibG9jay5lbGVtZW50KTtcblxuXG4gICAgICAgIC8vYWRkIGNvcnJlc3BvbmRpbmcgZG9tIGVsLiB0byBjb250YWluZXJcbiAgICAgICAgLy9pZihzdGFydCl7XG5cbiAgICAgICAgLy99XG4gICAgICAgIGlmIChyZWZpZCAmJiByZWZlbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkb21ibG9jaywgcmVmZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvbWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIGJJRDtcbiAgICB9IC8vYWRkIG5ldyBibG9ja1xuXG4gICAgdGhpcy5yZW1vdmVCbG9jayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL2ZpbmQgYmxvY2sgaW5kZXhcbiAgICAgICAgbGV0IGVsaWR4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vYW5ub3VuY2UgZGVsZXRpb24gdG8gYmxvY2tcbiAgICAgICAgaWYgKFwiYmVmb3JlRGVsZXRlXCIgaW4gdGhpcy5ibG9ja3NbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uYmVmb3JlRGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlICh0aGlzLmJsb2Nrc1tpZF0pO1xuICAgIH0gLy9yZW1vdmUgYmxvY2tcblxuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGR0ID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgZHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBlLmRhdGFzZXQuYmxvY2tfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG15LmJsb2Nrc1tlLmRhdGFzZXQuYmxvY2tfaWRdLnNhdmUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICBsZXQgbXlkYXRhID0ge1xuICAgICAgICAgICAgXCJibG9ja3NcIjogZHRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFZGl0b3Igc2F2aW5nXCIsIG15ZGF0YSk7XG4gICAgICAgIHJldHVybiBteWRhdGE7XG4gICAgfVxuXG59XG5cbnZhciBjb25zdHJ1Y3RvcnMgPSB7fTtcbnZhciB0ZW1wbGF0ZXMgPSB7fVxuXG5cbnRlbXBsYXRlcy5hZGRUb29sYmFyID0gZnVuY3Rpb24gKGJsb2NrKSB7XG4gICAgbGV0IHRieCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGJ4LmNsYXNzTGlzdC5hZGQoXCJibG9ja190b29sYmFyXCIpO1xuICAgIHRieC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcbiAgICB0Ynguc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGJ4LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuICAgIC8qXG4gICAgYmxvY2suZWxlbWVudC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSk7XG4gICAgYmxvY2suZWxlbWVudC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiICwgZnVuY3Rpb24oKXtcbiAgICAgICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0pXG5cbiovXG4gICAgYmxvY2suZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRieCk7IC8vYWRkIHRvIGVkaXRvcl9pdGVtLCAhbm90ISBibG9jayBjb250ZW50IGNvbnRhaW5lclxuICAgIGJsb2NrLmFkZFRvVG9vbGJhciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB0YnguYXBwZW5kQ2hpbGQoZWwpXG4gICAgfVxufVxuXG5jb25zdHJ1Y3RvcnMucGFyYWdyYXBoID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIC8vYmMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG4gICAgbGV0IHJlID0gLzxkaXZ8cHxoPi9naTtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIG15OiB0aGlzLFxuICAgICAgICBpZDogaWQsIC8vISEhISEhISEhISEhISEhISEhISAgICBcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBlZGl0b3I6IGVkaXRvcixcbiAgICAgICAgX3A6IGJjLFxuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3AuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fcC5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5wID0gYmxjLmVkaXRvci5hZGROZXdCbG9jayhcInBhcmFncmFwaFwiLCB7IFwidGV4dFwiOiBcIlwiIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgLy9ucCA9IG5ld2x5IGluc2VydGVkIGJsb2NrIGlkXG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmRpdmlkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGhyIC8+XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImhlYWRlclwiLFxuICAgICAgICBcImRhdGFcIjogXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCLQl9Cw0LPQvtC70L7QstC+0LpcIixcbiAgICAgICAgICBcImxldmVsXCI6IDNcbiAgICAgICAgfVxuICAgIH1cblxuXG4qL1xuXG5jb25zdHJ1Y3RvcnMuaGVhZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgLy9teXRhZy5cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICAvL2lkOiBpZCxcbiAgICAgICAgdGV4dDogZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIkhlYWRlclwiLFxuICAgICAgICBsZXZlbDogZGF0YSAmJiBkYXRhLmxldmVsID8gZGF0YS5sZXZlbCA6IDEsXG4gICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MKVxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aClcblxuICAgICAgICB9LFxuICAgICAgICAvL215dGFnOiBcblxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKTtcbiAgICAgICAgICAgIC8vdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4geyBcInRleHRcIjogdHh0LCBcImxldmVsXCI6IHRoaXMubGV2ZWwgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vb3B0cy50eXBlPVwic2VsZWN0XCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIGlmIChpID09IGJsYy5sZXZlbCkge1xuICAgICAgICAgICAgb3B0LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbiAgICBvcHRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG52ID0gb3B0c1tvcHRzLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBibGMubGV2ZWwgPSBudjtcbiAgICAgICAgYmxjLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cylcbiAgICByZXR1cm4gYmxjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVR5cGljYWxFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHsgc2VsZWN0b3I6IGVsIH0pO1xuXG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnBhcmFncmFwaCxcbiAgICAgICAgbGFiZWw6IFwicFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5kaXZpZGVyLFxuICAgICAgICBsYWJlbDogJy0tJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5oZWFkZXIsXG4gICAgICAgIGxhYmVsOiAnSCdcbiAgICB9KTtcblxuICAgIHJldHVybiBlZGl0b3I7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==