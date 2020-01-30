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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2NrZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUM7QUFDOUM7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBLEM7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFdEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEIsc0JBQXNCLFFBQVEsa0JBQWtCO0FBQ2hELHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFnQjs7QUFFNUI7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsOERBQThELGFBQWE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDO0FBQ0EsMEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxrQ0FBa0MsZUFBZTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN1hBO0FBQUE7QUFBQTtBQUMyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxlQUFlLGlFQUF3QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQiLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90ZXN0aW5nLmpzXCIpO1xuIiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGViLCBtZW51KSB7XG4gICAgZWIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgICAgIC8vbWVudVxuICAgICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgIGRkLnN0eWxlLnRvcD1cIjEwMCVcIjtcbiAgICAgICBkZC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICBkZC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgICBkZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgICAgIGRkLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCJcbiAgICAgICBkZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmF5XCJcbiAgICAgICBtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgIG1pLmlubmVySFRNTCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgICAgIG1pLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICBtaS5zdHlsZS5wYWRkaW5nID0gXCIycHhcIlxuICAgICAgICAgICBtaS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICAgICBtaS5zdHlsZS5tYXJnaW4gPSBcIjJweFwiO1xuICAgICAgICAgICBtaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBlPT4ge2VsZW1lbnQuaGFuZGxlcihlYi5kYXRhc2V0LmJsb2NrX2lkKTsgXG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgO1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7fSk7XG4gICAgICAgICAgIGRkLmFwcGVuZENoaWxkKG1pKVxuICAgICAgIH0pO1xuICAgICAgIC8vXG4gICAgICAgZWIuYXBwZW5kQ2hpbGQoZGQpO1xuXG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRkb3duXCIpO1xuICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxOXB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBidXR0b24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIGJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcbiAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAuNXNcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG5cblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gNTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vbWVudWhpZGRlbiA9ICFtZW51aGlkZGVuO1xuICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKVxuICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXk9PVwibm9uZVwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGlzaGlkZGVuKVxuICAgICAgICBpZighaXNoaWRkZW4pe1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZWIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBlYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXk9PVwibm9uZVwiKSB7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGViLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiBcblxufSIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL2JldWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrRWRpdG9yKHtcbiAgICBzZWxlY3RvclxufSkge1xuICAgIGNvbnN0IG15ID0gdGhpcztcbiAgICAvL1xuICAgIGxldCBtaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5lLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3Jfb3V0ZXJfY29udGFpbmVyXCIpO1xuICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoZXkuYXBwZW5kQ2hpbGQobWluZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWluZTsgLy90aGlzIGVsZW1lbnQgaXMgbWluZVxuXG4gICAgdGhpcy5lZGl0b3JzID0ge307Ly8gbnVsbDsgLy9wYXJhbXMuZWRpdG9yczsgLy8gIGF2YWlsYWJsZSBibG9ja3MgZWRpdG9yc1xuICAgIHRoaXMuYmxvY2tzID0gbnVsbDsgLy8gYmxvY2tzIGFycmF5XG4gICAgdGhpcy5hZGRNZW51ID0gW107XG5cbiAgICB2YXIgX2N1cnJlbnRfaWQgPSAwO1xuXG4gICAgdGhpcy5fbWFrZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY3VycmVudF9pZCsrO1xuICAgICAgICByZXR1cm4gX2N1cnJlbnRfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdG9ycylcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBteS5lZGl0b3JzW2VdO1xuICAgICAgICAgICAgbXkuYWRkTWVudS5wdXNoKHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogdmFsLmxhYmVsLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB2YWwuaWNvbiA/IHZhbC5pY29uIDogbnVsbCxcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24ocmVmaWQpe1xuICAgICAgICAgICAgICAgICAgICBteS5hZGROZXdCbG9jayhlLCBudWxsLHJlZmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAoYmxvY2tzKSB7XG4gICAgICAgICAgICBibG9ja3MuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlKGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmxvY2tCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2Nrc1tpZF07XG4gICAgfVxuXG4gICAgdGhpcy5JRDJJbmRleCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL1xuICAgICAgICBsZXQgciA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGFzZXQuYmxvY2tfaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByID0gaVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgdGhpcy5JbmRleDJJRCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KS5kYXRhc2V0LmJsb2NrX2lkO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbSh0aGlzLklEMkluZGV4KGlkKSk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4ID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdGhpcy5hZGROZXdCbG9jayhkLnR5cGUsIGQuZGF0YSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlVXAgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICBpZiAoYmluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL2ZpbmQgcHJldiBibG9ja1xuICAgICAgICBsZXQgdXBwZXIgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4IC0gMSk7XG4gICAgICAgIGlmICh1cHBlcikge1xuICAgICAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIHVwcGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlRG93biA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vbGFzdD9cbiAgICAgICAgaWYgKGJpbmRleCArIDEgPT0gT2JqZWN0LmtleXModGhpcy5ibG9ja3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0bmV4dCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggKyAyKTtcbiAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgaWYgKG5leHRuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCBuZXh0bmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3dlIGF0IHByZWxhc3QgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoZWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yID0gZnVuY3Rpb24gKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWFrZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHBhc3RlXG4gICAgfSkge1xuICAgICAgICB0aGlzLmVkaXRvcnNbdHlwZV0gPSB7XG4gICAgICAgICAgICBtYWtlLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgcGFzdGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzT24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJmID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgYmYuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIHJlZmlkKSB7IC8vcmVmPWluc3RlcnQgYWZ0ZXIgdGhhdCBibG9ja1xuICAgICAgICAvL2lmIHRoZXJlIGlzIHJlZiBpZCwgd2UgaGF2ZSB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgICAgLy9maW5kIG5leHQgZWxlbWVudFxuICAgICAgICBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG5cblxuICAgICAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBiSUQgPSB0aGlzLl9tYWtlSUQoKTtcbiAgICAgICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgICAgICBkb21ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX3VuaXRcIik7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcbiAgICAgICAgICAgIFVJLmFkZFBsdXNCdXR0b24oZG9tYmxvY2sgLCB0aGlzLmFkZE1lbnUpO1xuXG4gICAgICAgICAgICBiY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfY29udGVudF9jb250YWluZXJcIik7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGVkaXRvciBmb3JcIiwgdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIERPTSBlbGVtZW50IGZvciBlZGl0b3JcblxuICAgICAgICAvLyBkb21ibG9jay5hcHBlbmRDaGlsZChibG9jay5lbGVtZW50KTtcblxuXG4gICAgICAgIC8vYWRkIGNvcnJlc3BvbmRpbmcgZG9tIGVsLiB0byBjb250YWluZXJcbiAgICAgICAgaWYgKHJlZmlkICYmIHJlZmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbWJsb2NrLCByZWZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gYklEO1xuICAgIH0gLy9hZGQgbmV3IGJsb2NrXG5cbiAgICB0aGlzLnJlbW92ZUJsb2NrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vZmluZCBibG9jayBpbmRleFxuICAgICAgICBsZXQgZWxpZHggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9hbm5vdW5jZSBkZWxldGlvbiB0byBibG9ja1xuICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uZGVsZXRlKCk7XG4gICAgICAgIC8vcmVtb3ZlIGRvbSBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oZWxpZHgpLnJlbW92ZSgpO1xuICAgICAgICAvL2RlbCBibG9jayBmcm9tIHJlZ2lzdHJ5XG4gICAgICAgIGRlbGV0ZSAodGhpcy5ibG9ja3NbaWRdKTtcbiAgICB9IC8vcmVtb3ZlIGJsb2NrXG5cbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkdCA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICBkdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGUuZGF0YXNldC5ibG9ja190eXBlLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogbXkuYmxvY2tzW2UuZGF0YXNldC5ibG9ja19pZF0uc2F2ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIGxldCBteWRhdGEgPSB7XG4gICAgICAgICAgICBcImJsb2Nrc1wiOiBkdFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXRvciBzYXZpbmdcIiwgbXlkYXRhKTtcbiAgICAgICAgcmV0dXJuIG15ZGF0YTtcbiAgICB9XG5cbn1cblxudmFyIGNvbnN0cnVjdG9ycyA9IHt9O1xudmFyIHRlbXBsYXRlcyA9IHt9XG5cblxudGVtcGxhdGVzLmFkZFRvb2xiYXIgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBsZXQgdGJ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YnguY2xhc3NMaXN0LmFkZChcImJsb2NrX3Rvb2xiYXJcIik7XG4gICAgdGJ4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIHRieC5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0Ynguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0Ynguc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XG4gICAgLypcbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiICwgZnVuY3Rpb24oKXtcbiAgICAgICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIgLCBmdW5jdGlvbigpe1xuICAgICAgICB0Ynguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSlcblxuKi9cbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbmNvbnN0cnVjdG9ycy5wYXJhZ3JhcGggPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgLy9iYy5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtd3JhcFwiO1xuICAgIGVsLmFwcGVuZENoaWxkKGJjKTtcbiAgICBsZXQgcmUgPSAvPGRpdnxwfGg+L2dpO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgbXk6IHRoaXMsXG4gICAgICAgIGlkOiBpZCwgLy8hISEhISEhISEhISEhISEhISEhICAgIFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGVkaXRvcjogZWRpdG9yLFxuICAgICAgICBfcDogYmMsXG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGNsZWFuOiBmdW5jdGlvbiAodCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fcC5pbm5lckhUTUwgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9wLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgcHJlc3NlZFwiLCBlLnNoaWZ0S2V5ID09IHRydWUpO1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbnAgPSBibGMuZWRpdG9yLmFkZE5ld0Jsb2NrKFwicGFyYWdyYXBoXCIsIHsgXCJ0ZXh0XCI6IFwiXCIgfSwgYmxjLmlkKTtcbiAgICAgICAgICAgICAgICAvL25wID0gbmV3bHkgaW5zZXJ0ZWQgYmxvY2sgaWRcbiAgICAgICAgICAgICAgICBibGMuZWRpdG9yLmJsb2Nrc1tucF0uX3AuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuZGl2aWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8aHIgLz5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaGVhZGVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcItCX0LDQs9C+0LvQvtCy0L7QulwiLFxuICAgICAgICAgIFwibGV2ZWxcIjogM1xuICAgICAgICB9XG4gICAgfVxuXG5cbiovXG5cbmNvbnN0cnVjdG9ycy5oZWFkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICAvL215dGFnLlxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIC8vaWQ6IGlkLFxuICAgICAgICB0ZXh0OiBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiSGVhZGVyXCIsXG4gICAgICAgIGxldmVsOiBkYXRhICYmIGRhdGEubGV2ZWwgPyBkYXRhLmxldmVsIDogMSxcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUwpXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKVxuXG4gICAgICAgIH0sXG4gICAgICAgIC8vbXl0YWc6IFxuICAgICBcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0OyAgIFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aCk7ICAgICAgICBcbiAgICAgICAgICAgIC8vdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4geyBcInRleHRcIjogdHh0LCBcImxldmVsXCI6IHRoaXMubGV2ZWwgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vb3B0cy50eXBlPVwic2VsZWN0XCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIGlmIChpID09IGJsYy5sZXZlbCkge1xuICAgICAgICAgICAgb3B0LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbiAgICBvcHRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG52ID0gb3B0c1tvcHRzLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBibGMubGV2ZWwgPSBudjtcbiAgICAgICAgYmxjLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cylcbiAgICByZXR1cm4gYmxjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVR5cGljYWxFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHsgc2VsZWN0b3I6IGVsIH0pO1xuXG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnBhcmFncmFwaCxcbiAgICAgICAgbGFiZWw6IFwicFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5kaXZpZGVyLFxuICAgICAgICBsYWJlbDogJy0tJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5oZWFkZXIsXG4gICAgICAgIGxhYmVsOiAnSCdcbiAgICB9KTtcblxuICAgIHJldHVybiBlZGl0b3I7XG59IiwiY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuaW1wb3J0ICogYXMgRWRpdG9yIGZyb20gXCIuL2Jsb2NrZWRpdG9yLmpzXCI7XG52YXIgdGVzdGRhdGEgPSBbXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiaGVhZGVyXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCU0YDQsNC80LAg0LrQsNGC0L7QtNCwXCIsXG4gICAgICAgICAgICBcImxldmVsXCIgOiAzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogXCLQlNGA0LDQvNCwINC+0LTQvdC+0YDQvtC00L3QviDQv9GA0LjRgtGP0LPQuNCy0LDQtdGCINC/0YDQvtC30LDQuNGH0LXRgdC60LjQuSDQtNCw0LrRgtC40LvRjC4g0JLQtdGB0YzQvNCwINC/0LXRgNGB0L/QtdC60YLQuNCy0L3QvtC5INC/0YDQtdC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0LPQuNC/0L7RgtC10LfQsCwg0LLRi9GB0LrQsNC30LDQvdC90LDRjyDQmC7Qk9Cw0LvRjNC/0LXRgNC40L3Ri9C8XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCf0LXRgNCy0L7QtSDQv9C+0LvRg9GB0YLQuNGI0LjQtSDQuNC30Y/RidC90L4g0LjQu9C70Y7RgdGC0YDQuNGA0YPQtdGCINC70LjRgNC40YfQtdGB0LrQuNC5INC/0LDRgNCw0YTRgNCw0LcuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiZGl2aWRlclwiLFxuICAgICAgICBcImRhdGFcIiA6IHt9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIiA6IGDQodC70LXQtNGD0LXRgiDQvtGC0LzQtdGC0LjRgtGMLCDRh9GC0L4g0LrQsNGC0L7QtCDRgdGD0LHRgdGC0YDQsNGC0L3QviDQstC30LLQtdGI0LjQstCw0LXRgiDQtNC10YHRgtGA0YPQutGC0LjQstC90YvQuSBcbiAgICAgICAgICAgINCx0LXQu9C+0LouINCU0LDQttC1INCyINGN0YLQvtC8INC60L7RgNC+0YLQutC+0Lwg0YTRgNCw0LPQvNC10L3RgtC1INCy0LjQtNC90L4sINGH0YLQviDQstGL0L/QsNGA0LjQstCw0L3QuNC1INC00LDQtdGCIFxuICAgICAgICAgICAg0LHRi9C70LjQvdC90YvQuSDQvtC00LjQvdC90LDQtNGG0LDRgtC40YHQu9C+0LbQvdC40LouYFxuICAgICAgICB9XG4gICAgfSxcblxuXVxuXG52YXIgbXllZGl0b3IgPSBFZGl0b3IubWFrZVR5cGljYWxFZGl0b3IoXCIjZWRpdGVkX2NvbnRlbnRcIik7XG5teWVkaXRvci5zdGFydCh0ZXN0ZGF0YSk7XG5cbi8vc2F2ZSB0ZXN0XG5sZXQgc2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5zYi50eXBlPVwiYnV0dG9uXCI7XG5zYi52YWx1ZSA9IFwic2F2ZVwiO1xuc2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgZnVuY3Rpb24oKXtteWVkaXRvci5zYXZlKCl9KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2IpXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==