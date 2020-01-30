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
/*! exports provided: addPlusButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });


function addPlusButton(eb, menu) {
    eb.style.position = "relative";
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
       dd.style.top="100%";
       dd.style.left = 0;
       dd.style.padding = "5px";
       dd.style.backgroundColor = "silver";
       dd.style.borderRadius = "5px"
       dd.style.border = "1px solid gray"
       menu.forEach(element => {
           let mi = document.createElement("div");
           mi.innerHTML = element.label;
           mi.style.backgroundColor= "white";
           mi.style.padding = "2px"
           mi.style.borderRadius = "5px";
           mi.style.margin = "2px";
           mi.style.cursor = "pointer";
           mi.addEventListener("click" , e=> {element.handler(eb.dataset.block_id); 
            dd.style.display = "none" ;
            menuhidden = true;});
           dd.appendChild(mi)
       });
       //
       eb.appendChild(dd);


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

    button.addEventListener("click" , function(e){
        //menuhidden = !menuhidden;
        //document.querySelectorAll(".block_editor_add_dropdown")
       // .forEach(e=>e.style.display="none");
        let ishidden = dd.style.display=="none";
        //console.log(ishidden)
        if(!ishidden){
            menuhidden = true;
            dd.style.display = "none"
        }else{
            menuhidden = false;
            dd.style.display = "block"
        }
    })

    eb.addEventListener("mouseover", function (e) {

        button.style.opacity = 1.0;
        button.style.zIndex = 10;
        e.preventDefault();
        return true;
    })
    eb.addEventListener("mouseout", function (e) {
        if (dd.style.display=="none") {
            button.style.opacity = 0;
            button.style.zIndex = "initial";
        }
    })
    eb.appendChild(button);

 

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
    let they = document.querySelector(selector);
    they.innerHTML = "";
    they.appendChild(mine);
    this.element = mine; //this element is mine

    this.editors = {};// null; //params.editors; //  available blocks editors
    this.blocks = null; // blocks array
    this.addMenu = [];

    var _current_id = 0;

    this._makeID = function () {
        _current_id++;
        return _current_id;
    }

    this.start = function (blocks) {
        this.element.innerHTML = "";
        this.blocks = [];
        console.log(this.editors)
        Object.keys(this.editors).forEach(function(e){
            //console.log(e);
            let val = my.editors[e];
            my.addMenu.push({                
                "label" : val.label,
                "icon": val.icon ? val.icon : null,
                "handler": function(refid){
                    my.addNewBlock(e, null,refid);
                }
            })
        })
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
        if (refid) {
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
            _beui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](domblock , this.addMenu);

            bcontent.classList.add("block_content_container");
            var block = this.editors[type].make(data, bcontent, bID, this); //block made
            this.blocks[bID] = block;
        } else {
            console.log("no editor for", type);
            return null;
        }

        //create DOM element for editor

        // domblock.appendChild(block.element);


        //add corresponding dom el. to container
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
        this.blocks[id].delete();
        //remove dom element
        this.element.querySelectorAll(".block_editor_unit").item(elidx).remove();
        //del block from registry
        delete (this.blocks[id]);
    } //remove block

    this.save = function () {
        let dt = [];
        this.element.querySelectorAll(".block_editor_unit")
            .forEach(function (e) {
                console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUM7QUFDOUM7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBLEM7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFdEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEIsc0JBQXNCLFFBQVEsa0JBQWtCO0FBQ2hELHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFnQjs7QUFFNUI7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsOERBQThELGFBQWE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDO0FBQ0EsMEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxrQ0FBa0MsZUFBZTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQyIsImZpbGUiOiJibG9ja2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tlZGl0b3IuanNcIik7XG4iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsdXNCdXR0b24oZWIsIG1lbnUpIHtcbiAgICBlYi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBsZXQgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgaWYgKCFtZW51KSB7XG4gICAgICAgIG1lbnUgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUgY2xpY2tlZFwiKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0MlwiLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwibWVudTIgY2xpY2tlZFwiKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0M1wiLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwibWVudTMgY2xpY2tlZFwiKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG4gICAgICAgLy9tZW51XG4gICAgICAgbGV0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICBkZC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKTtcbiAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgZGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgZGQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgZGQuc3R5bGUudG9wPVwiMTAwJVwiO1xuICAgICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgICAgZGQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIlxuICAgICAgIGRkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGdyYXlcIlxuICAgICAgIG1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgbWkuaW5uZXJIVE1MID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgICAgbWkuc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIndoaXRlXCI7XG4gICAgICAgICAgIG1pLnN0eWxlLnBhZGRpbmcgPSBcIjJweFwiXG4gICAgICAgICAgIG1pLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICAgICAgIG1pLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XG4gICAgICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIGU9PiB7ZWxlbWVudC5oYW5kbGVyKGViLmRhdGFzZXQuYmxvY2tfaWQpOyBcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gdHJ1ZTt9KTtcbiAgICAgICAgICAgZGQuYXBwZW5kQ2hpbGQobWkpXG4gICAgICAgfSk7XG4gICAgICAgLy9cbiAgICAgICBlYi5hcHBlbmRDaGlsZChkZCk7XG5cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGRvd25cIik7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjE5cHhcIjtcbiAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTJweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IC41c1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcblxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxLjA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSA1O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgLy8gLmZvckVhY2goZT0+ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKTtcbiAgICAgICAgbGV0IGlzaGlkZGVuID0gZGQuc3R5bGUuZGlzcGxheT09XCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmKCFpc2hpZGRlbil7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBlYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxLjA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuICAgIGViLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZGQuc3R5bGUuZGlzcGxheT09XCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZWIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuIFxuXG59IiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vYmV1aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tFZGl0b3Ioe1xuICAgIHNlbGVjdG9yXG59KSB7XG4gICAgY29uc3QgbXkgPSB0aGlzO1xuICAgIC8vXG4gICAgbGV0IG1pbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbmUuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9vdXRlcl9jb250YWluZXJcIik7XG4gICAgbGV0IHRoZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhleS5hcHBlbmRDaGlsZChtaW5lKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBtaW5lOyAvL3RoaXMgZWxlbWVudCBpcyBtaW5lXG5cbiAgICB0aGlzLmVkaXRvcnMgPSB7fTsvLyBudWxsOyAvL3BhcmFtcy5lZGl0b3JzOyAvLyAgYXZhaWxhYmxlIGJsb2NrcyBlZGl0b3JzXG4gICAgdGhpcy5ibG9ja3MgPSBudWxsOyAvLyBibG9ja3MgYXJyYXlcbiAgICB0aGlzLmFkZE1lbnUgPSBbXTtcblxuICAgIHZhciBfY3VycmVudF9pZCA9IDA7XG5cbiAgICB0aGlzLl9tYWtlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jdXJyZW50X2lkKys7XG4gICAgICAgIHJldHVybiBfY3VycmVudF9pZDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lZGl0b3JzKVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG15LmVkaXRvcnNbZV07XG4gICAgICAgICAgICBteS5hZGRNZW51LnB1c2goeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbihyZWZpZCl7XG4gICAgICAgICAgICAgICAgICAgIG15LmFkZE5ld0Jsb2NrKGUsIG51bGwscmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZCkge1xuICAgICAgICAgICAgbGV0IG5leHRpZHggPSB0aGlzLklEMkluZGV4KHJlZmlkKSArIDE7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgobmV4dGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBibG9jayBvZiB0eXBlIFxuICAgICAgICBpZiAodHlwZSBpbiB0aGlzLmVkaXRvcnMpIHtcblxuXG4gICAgICAgICAgICB2YXIgZG9tYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGJJRCA9IHRoaXMuX21ha2VJRCgpO1xuICAgICAgICAgICAgbGV0IGJjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJjb250ZW50KTtcbiAgICAgICAgICAgIGRvbWJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfdW5pdFwiKTtcbiAgICAgICAgICAgIGRvbWJsb2NrLmRhdGFzZXQuYmxvY2tfaWQgPSBiSUQ7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX3R5cGUgPSB0eXBlO1xuICAgICAgICAgICAgVUkuYWRkUGx1c0J1dHRvbihkb21ibG9jayAsIHRoaXMuYWRkTWVudSk7XG5cbiAgICAgICAgICAgIGJjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZWRpdG9yc1t0eXBlXS5tYWtlKGRhdGEsIGJjb250ZW50LCBiSUQsIHRoaXMpOyAvL2Jsb2NrIG1hZGVcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2JJRF0gPSBibG9jaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgRE9NIGVsZW1lbnQgZm9yIGVkaXRvclxuXG4gICAgICAgIC8vIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJsb2NrLmVsZW1lbnQpO1xuXG5cbiAgICAgICAgLy9hZGQgY29ycmVzcG9uZGluZyBkb20gZWwuIHRvIGNvbnRhaW5lclxuICAgICAgICBpZiAocmVmaWQgJiYgcmVmZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tYmxvY2ssIHJlZmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkb21ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2sucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiBiSUQ7XG4gICAgfSAvL2FkZCBuZXcgYmxvY2tcblxuICAgIHRoaXMucmVtb3ZlQmxvY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9maW5kIGJsb2NrIGluZGV4XG4gICAgICAgIGxldCBlbGlkeCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2Fubm91bmNlIGRlbGV0aW9uIHRvIGJsb2NrXG4gICAgICAgIHRoaXMuYmxvY2tzW2lkXS5kZWxldGUoKTtcbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlICh0aGlzLmJsb2Nrc1tpZF0pO1xuICAgIH0gLy9yZW1vdmUgYmxvY2tcblxuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGR0ID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIGR0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZS5kYXRhc2V0LmJsb2NrX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBteS5ibG9ja3NbZS5kYXRhc2V0LmJsb2NrX2lkXS5zYXZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgbGV0IG15ZGF0YSA9IHtcbiAgICAgICAgICAgIFwiYmxvY2tzXCI6IGR0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdG9yIHNhdmluZ1wiLCBteWRhdGEpO1xuICAgICAgICByZXR1cm4gbXlkYXRhO1xuICAgIH1cblxufVxuXG52YXIgY29uc3RydWN0b3JzID0ge307XG52YXIgdGVtcGxhdGVzID0ge31cblxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgdGJ4LnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRieC5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIjtcbiAgICAvKlxuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIgLCBmdW5jdGlvbigpe1xuICAgICAgICB0Ynguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9KVxuXG4qL1xuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YngpOyAvL2FkZCB0byBlZGl0b3JfaXRlbSwgIW5vdCEgYmxvY2sgY29udGVudCBjb250YWluZXJcbiAgICBibG9jay5hZGRUb1Rvb2xiYXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdGJ4LmFwcGVuZENoaWxkKGVsKVxuICAgIH1cbn1cblxuY29uc3RydWN0b3JzLnBhcmFncmFwaCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBiYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAvL2JjLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZS13cmFwXCI7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmMpO1xuICAgIGxldCByZSA9IC88ZGl2fHB8aD4vZ2k7XG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBteTogdGhpcyxcbiAgICAgICAgaWQ6IGlkLCAvLyEhISEhISEhISEhISEhISEhISEgICAgXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge1xuICAgICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgZWRpdG9yOiBlZGl0b3IsXG4gICAgICAgIF9wOiBiYyxcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgY2xlYW46IGZ1bmN0aW9uICh0KSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9wLmlubmVySFRNTCA9IHRoaXMuZGF0YS50ZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3AuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibGMuX3AuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBwcmVzc2VkXCIsIGUuc2hpZnRLZXkgPT0gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBucCA9IGJsYy5lZGl0b3IuYWRkTmV3QmxvY2soXCJwYXJhZ3JhcGhcIiwgeyBcInRleHRcIjogXCJcIiB9LCBibGMuaWQpO1xuICAgICAgICAgICAgICAgIC8vbnAgPSBuZXdseSBpbnNlcnRlZCBibG9jayBpZFxuICAgICAgICAgICAgICAgIGJsYy5lZGl0b3IuYmxvY2tzW25wXS5fcC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5kaXZpZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxociAvPlwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qXG4gICAge1xuICAgICAgICBcInR5cGVcIjogXCJoZWFkZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXG4gICAgICAgICAgXCJsZXZlbFwiOiAzXG4gICAgICAgIH1cbiAgICB9XG5cblxuKi9cblxuY29uc3RydWN0b3JzLmhlYWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIC8vbXl0YWcuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgLy9pZDogaWQsXG4gICAgICAgIHRleHQ6IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCJIZWFkZXJcIixcbiAgICAgICAgbGV2ZWw6IGRhdGEgJiYgZGF0YS5sZXZlbCA/IGRhdGEubGV2ZWwgOiAxLFxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTClcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpXG5cbiAgICAgICAgfSxcbiAgICAgICAgLy9teXRhZzogXG4gICAgIFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7ICAgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKTsgICAgICAgIFxuICAgICAgICAgICAgLy90aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHR4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHJldHVybiB7IFwidGV4dFwiOiB0eHQsIFwibGV2ZWxcIjogdGhpcy5sZXZlbCB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBvcHRzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy9vcHRzLnR5cGU9XCJzZWxlY3RcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICBvcHQudmFsdWUgPSBpO1xuICAgICAgICBvcHQubGFiZWwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgaWYgKGkgPT0gYmxjLmxldmVsKSB7XG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIG9wdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbnYgPSBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGJsYy5sZXZlbCA9IG52O1xuICAgICAgICBibGMucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKVxuICAgIHJldHVybiBibGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVHlwaWNhbEVkaXRvcihlbCkge1xuICAgIGxldCBlZGl0b3IgPSBuZXcgQmxvY2tFZGl0b3IoeyBzZWxlY3RvcjogZWwgfSk7XG5cbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMucGFyYWdyYXBoLFxuICAgICAgICBsYWJlbDogXCJwXCJcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImRpdmlkZXJcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmRpdmlkZXIsXG4gICAgICAgIGxhYmVsOiAnLS0nXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmhlYWRlcixcbiAgICAgICAgbGFiZWw6ICdIJ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkaXRvcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9