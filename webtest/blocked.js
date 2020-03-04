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
/* harmony import */ var _coreblocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreblocks */ "./src/bled/coreblocks.js");



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
        rect.style.fontSize = "10px";
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
        _ui__WEBPACK_IMPORTED_MODULE_0__["addCommonStyles"](this.element);
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
            "editor": "BlEd/" + "1.0.1",
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




function makeBasicEditor(el) {
    let editor = new BlockEditor({
        selector: el
    });

    editor.registerEditor({
        type: "paragraph",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.paragraph,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].paragraph,
        label: "Paragraph"
    });
    editor.registerEditor({
        type: "divider",
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].divider,
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].divider,
        label: 'Divider'
    });
    editor.registerEditor({
        type: "header",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].header,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].header,
        label: 'Header'
    });
    editor.registerEditor({
        type: "code",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].code,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].code,
        label: 'Code snippet'
    });
    editor.registerEditor({
        type: "raw",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].raw,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].raw,
        label: 'Raw HTML'
    });
    editor.registerEditor({
        type: "quote",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.quote,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.image,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].image,
        label: 'Image'
    });
    editor.registerEditor({
        type: "video",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.video,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].video,
        label: 'Video'
    });
    editor.registerEditor({
        type: "list",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.list,
        make: _coreblocks__WEBPACK_IMPORTED_MODULE_1__["constructors"].list,
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

/***/ "./src/bled/coreblocks.js":
/*!********************************!*\
  !*** ./src/bled/coreblocks.js ***!
  \********************************/
/*! exports provided: constructors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructors", function() { return constructors; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/bled/ui.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "./src/bled/tools.js");



var constructors = {};


constructors.paragraph = function (data, el, id, editor) {
    let bc = document.createElement("p");
    bc.setAttribute("contenteditable", true);
    el.appendChild(bc);
    //let re = /<div|p|h>/gi;

    let blc = {
        my: this,
        id: id, //!!!!!!!!!!!!!!!!!!!    
        data: data ? data : {
            text: ""
        },
        element: el,
        editor: editor,
        _p: bc,
        //type: "paragraph",
        //clean: function (t) {
        //},
        render: function () {
            this._p.innerHTML = this.data.text;
        },
        save: function () {
            return {
                text: this._p.innerHTML
            }
        }
    }
    blc._p.addEventListener("paste", function (e) {
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
            let alreadythere = this.element.querySelector("h1,h2,h3,h4,h5,h6");
            if (alreadythere) {
                this.text = alreadythere.innerHTML;
            }
            this.element.innerHTML = "";
            let myh = document.createElement("h" + this.level);
            myh.setAttribute("contenteditable", true);
            myh.innerHTML = this.text;
            this.element.appendChild(myh);
        },
        //mytag: 
        render: function () {
            this.refresh();
        },
        save: function () {
            let txt = this.element.querySelector("h1,h2,h3,h4,h5,h6").innerHTML;
            return {
                "text": txt,
                "level": this.level
            }
        }
    }
    let opts = document.createElement("select");
    opts.style.display = "block";   
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
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].addToolbar(blc);
    blc.addToToolbar(opts)
    return blc;
}

constructors.code = function (data, el, id, editor) {
    let pre = document.createElement("pre");
    let cd = document.createElement("code");
    pre.appendChild(cd);
    cd.setAttribute("contenteditable", true);
    cd.dataset.no_text_toolbox = true;
    cd.addEventListener("paste", function (e) {
        //we need to strip formatting here
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));
        event.preventDefault();
    })
    el.appendChild(pre);
    let langs = [    "", "auto", "arduino", "bash", "basic" , "cpp", "html", 'javascript',  "processing", "python",   ];
    let lbls =  ["No highlighting", "Auto", "Arduino", "Bash", "Basic" , "C++", "HTML", 'Java Script', "Processing", "Python",   ];
    //
    let opts = document.createElement("select");
    langs.forEach(function (e ,i) {
        let mi = document.createElement("option");
        mi.value = e;
        mi.label = lbls[i];
        mi.innerHTML = e;
        if (data && data.language && e == data.language) {
            mi.selected = true;        }
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
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].addToolbar(blc);
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
    blcite.innerHTML = data && data.caption ? data.caption : "";

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
    pimg.src = data && data.file ? data.file.url : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMwMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjI5OSIgaGVpZ2h0PSIxOTkiIGZpbGw9IiNDNEM0QzQiIHN0cm9rZT0iYmxhY2siLz4KPGxpbmUgeTE9Ii0wLjUiIHgyPSIzNDkuNTY5IiB5Mj0iLTAuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NTgxOTkgLTAuNTEzMzE3IDAuODU3MjU3IDAuNTE0ODg4IDAgMTgwKSIgc3Ryb2tlPSIjNkY2RjZGIi8+CjxsaW5lIHkxPSItMC41IiB4Mj0iMzQ4LjMxIiB5Mj0iLTAuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NTc3MjkgMC41MTQxMDIgLTAuODU3NzI5IDAuNTE0MTAyIDAgMC41NjAxODEpIiBzdHJva2U9IiM2RjZGNkYiLz4KPC9nPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjI5OSIgaGVpZ2h0PSIxNzkiIHN0cm9rZT0iIzZGNkY2RiIvPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

    let blc = {
        element: el,
        render: function () {
            console.log("render image")
        },
    }
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].twoPanels(blc);
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

    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([upld, upldbtn]));
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
    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([srclabel, srcinput]));
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

    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([stretched, stretchlabel,
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
        data: data ? data : {
            file: {
                url: null
            }
        },
        render: function () {},
    }
    if (!blc.data.file) {
        blc.data.file = {};
    }
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].twoPanels(blc);
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

    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([upld, upldbtn]));
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
    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow([srclabel, srcinput]));
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
    blc.addToEditor(_tools__WEBPACK_IMPORTED_MODULE_1__["templates"].formRow(pels));

    blc.save = function () {
        return blc.data;
    }
    if (!(data && data.file && data.file.url)) {
        blc.goEditMode();
    }

    return blc;
}


constructors.list = function (data, el, id, editor) {
    let blc = {
        element: el,
        list_element: null,
        type: data && data.style && data.style == "ordered" ? "ol" : "ul",
        render: function () {},
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
    _tools__WEBPACK_IMPORTED_MODULE_1__["templates"].addToolbar(blc);
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

/***/ "./src/bled/svg/symbols_24px.svg":
/*!***************************************!*\
  !*** ./src/bled/svg/symbols_24px.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M12.7266 7.3335H10.4092V8.95361H12.8086C14.5654 8.95361 15.9565 9.38086 16.9819 10.2354C18.0142 11.083 18.5303 12.228 18.5303 13.6704C18.5303 15.1196 18.0176 16.2852 16.9922 17.167C15.9736 18.042 14.6167 18.4863 12.9214 18.5H7.3125V7.3335H5.55908V5.45703H7.3125V3.57031H10.4092V5.45703H12.7266V7.3335ZM10.4092 11.4351V16.0288H12.8599C13.646 16.0288 14.2715 15.8135 14.7363 15.3828C15.208 14.9521 15.4438 14.3745 15.4438 13.6499C15.4438 12.9731 15.2183 12.4399 14.7671 12.0503C14.3228 11.6538 13.7109 11.4487 12.9316 11.4351H10.4092Z\"></path></g><defs><clipPath id=\"clip0\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs></svg>"

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

/***/ "./src/bled/tools.js":
/*!***************************!*\
  !*** ./src/bled/tools.js ***!
  \***************************/
/*! exports provided: templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/bled/ui.js");


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

/***/ }),

/***/ "./src/bled/ui.js":
/*!************************!*\
  !*** ./src/bled/ui.js ***!
  \************************/
/*! exports provided: icons, mycyan, Colours, Ask, tooltips, textTools, addPlusButton, addCommonStyles, addBlockControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mycyan", function() { return mycyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colours", function() { return Colours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltips", function() { return tooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTools", function() { return textTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlusButton", function() { return addPlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommonStyles", function() { return addCommonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockControls", function() { return addBlockControls; });
/*
import {
    css,
    cx
} from 'emotion';
*/


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
icons.symbols = __webpack_require__(/*! ./svg/symbols_24px.svg */ "./src/bled/svg/symbols_24px.svg");

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
    //console.log("engaging tooltips");
    let teststyle = document.createElement("style");
    teststyle.id = "test_style";
    teststyle.innerHTML = `.editortooltip{
        background-color: ${ Colours.dark};
        color: white;
        padding: 4px 8px;
    }`
    document.head.appendChild(teststyle);

    let tt = document.createElement("div");
    tt.style.position = "absolute";
    tt.style.display = "none";
    tt.style.zIndex = 20;
    tt.style.pointerEvents = "none";

    let ttin = document.createElement("div");

    ttin.classList.add("editortooltip")
    tt.appendChild(ttin);
    //ttin.style.backgroundColor = Colours.dark;
    //ttin.style.color = "white";
    ttin.style.pointerEvents = "none";
    ttin.style.fontSize = "12px";
    //ttin.style.padding = "4px 8px";
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

function getSymbol(posX, posY) {
    console.log("position", posX, posY)
    const symbols = "«»“”–—·¶Ѣѣ¤₽€£×≈".split("");

    //create table
    return new Promise(function (res, rej) {
        let test = document.querySelector(".block_editor_symbols_table");
        if (test) {
            test.remove();
            rej();
        }
        let symboltable = document.createElement("div");
        symboltable.classList.add("block_editor_symbols_table")
        symboltable.style.display = "flex";
        symboltable.style.flexWrap = "wrap";
        symboltable.style.position = "absolute";
        symboltable.style.width = "96px";
        symboltable.style.boxSizing = "content-box"
        symboltable.style.backgroundColor = "white";
        symboltable.style.borderColor = "black";
        symboltable.style.borderTop = "1px solid black";
        symboltable.style.borderLeft = "1px solid black";
        symboltable.style.position = "absolute";
        symboltable.style.top = posY + "px";
        symboltable.style.left = posX + "px";
        //populate
        symbols.forEach(function (z) {
            let sb = document.createElement("div");
            sb.style.display = "inline-block";
            sb.classList.add("symbol_table_cell_button");
            sb.classList.add("text_toolbox")
            sb.style.width = "24px";
            sb.style.height = "24px";
            sb.style.textAlign = "center";
            sb.style.borderBottom = "1px solid black";
            sb.style.borderRight = "1px solid black";
            sb.style.borderColor = '#000000';
            sb.style.boxSizing = "border-box"
            sb.innerText = z;
            sb.style.cursor = "pointer";
            sb.style.fontSize = "16px";
            sb.style.lineHeight = "23px";
            sb.addEventListener("mouseover" , function(){this.style.backgroundColor = Colours.light})
            sb.addEventListener("mouseout" , function(){this.style.backgroundColor = "white"})
            sb.addEventListener("mouseup", (e) => {
                //console.log(z);
                symboltable.remove();
                res(z);
            })
            symboltable.appendChild(sb);
        })
        //   
        
        document.body.appendChild(symboltable);  
        if(posY>symboltable.getBoundingClientRect().height){
        symboltable.style.top = (posY - symboltable.getBoundingClientRect().height - 8) + "px" ;        
        }
        document.addEventListener("mouseup" , function(e){
            if(e.target && !e.target.classList.contains("symbol_table_cell_button")){
                symboltable.remove();
            }
        })        
    });
}

function textTools() {
    let current_element = null;
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
    }, "Remove link");

    addButton(icons.symbols, function (e) {
        //document.execCommand("unlink");
        const magic = "|#?";
        let prevtext = current_element.innerHTML;
        document.execCommand("insertText", false, magic);
        let textwithanchor = current_element.innerHTML;
        current_element.innerHTML = prevtext;
        //let csel = saveSelection()
        console.log("EVENT", e);
        getSymbol(e.clientX, e.clientY + window.scrollY)
            .then(r => {
                console.log('Entered symbol', r);
                current_element.innerHTML = textwithanchor.replace(magic, r)
            })
            .catch()
        e.preventDefault();
    }, "Symbols");

    addButton(icons.noformat, function (e) {
        document.execCommand("removeFormat");
        let ifcolalpsed = document.getSelection().isCollapsed
        if (ifcolalpsed) {
            //console.log("CURRENT" , current_element , current_element.contenteditable)
            current_element.innerHTML = current_element.innerHTML.replace(/\<[^>]*\>/g, "");
        } else {
            document.execCommand("removeFormat");
        }
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
        if(e.target.classList.contains("text_toolbox")){
            return;
        }
        if (eic && !e.target.dataset.no_text_toolbox) {
            current_element = eic;
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
function addCommonStyles(editorel) {
    let styleid = "blockeditor_common_styles";
    if (!document.getElementById(styleid)) {
        let stag = document.createElement("style");
        stag.id = styleid;
        stag.innerHTML =
            "*[contenteditable='true']:empty{ " +
            "background-color:" + Colours.pale + ";" +
            "border-bottom: 1px dashed " + Colours.dark + ";" +
            "min-height: 1rem;" +
            "min-width: 1rem;" +
            "display: block;" +
            "}" +
            ".block_editor_unit{" +
            "border: 1px solid transparent;" +
            "border-width: 1px 1px 1px 1px ;" +
            "}" +
            ".block_editor_unit:hover{" +
            "border-color:" + Colours.pale + ";" +
            "}" +
            "div.common_block_controls div:hover svg{fill:black;}"
        "div.ddown:hover svg{fill:black;}"
        editorel.appendChild(stag);
    }

}

function addBlockControls(block, items, ed) {
    /**
     * 
     * block_editor_unit
     */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvYmxvY2tlZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvY29yZWJsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYWRkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9hcnJvd19kb3dud2FyZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYXJyb3dfdXB3YXJkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9jbGVhci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvY29kZS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvY29kZS1teS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZGl2aWRlci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X2JvbGQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9pdGFsaWMtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9saXN0X2J1bGxldGVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfcXVvdGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9zdHJpa2V0aHJvdWdoLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfdW5kZXJsaW5lZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvaGVhZGVyLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9pbnNlcnRfcGhvdG8tb3V0bGluZWQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2xpbmstMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2xpbmtfb2ZmLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9wYXJhZ3JhcGgtcmVtaXgtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3JlbW92ZS1mb3JtYXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9zeW1ib2xzXzI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X2JvbGQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X2l0YWxpYy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfbGluay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3RyaWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdWIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N1cC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfdW5kZXJsaW5lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdmlkZW9jYW0tMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvdWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixLQUFLOztBQUVMLG9CQUFvQixnREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLGdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCwyQ0FBMkM7QUFDcEcsd0RBQXdELHFDQUFxQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQSwrQztBQUNBO0FBQ0EsZ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxtREFBbUQ7QUFDbkQsNERBQTREO0FBQzVELDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLGNBQWM7QUFDZCxnQ0FBZ0M7QUFDaEMsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1QyxjQUFjO0FBQ2Qsc0NBQXNDO0FBQ3RDLCtDQUErQztBQUMvQyxjQUFjO0FBQ2QscURBQXFELFlBQVk7QUFDakUsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsQyIsImZpbGUiOiJibG9ja2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxlZC9ibG9ja2VkaXRvci5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge2NvbnN0cnVjdG9ycyBhcyBDb3JlYmxvY2tzIH0gICBmcm9tIFwiLi9jb3JlYmxvY2tzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0VkaXRvcih7XG4gICAgc2VsZWN0b3Jcbn0pIHtcbiAgICBjb25zdCBteSA9IHRoaXM7XG4gICAgLy9cbiAgICBsZXQgbWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX291dGVyX2NvbnRhaW5lclwiKTtcbiAgICBtaW5lLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIG1pbmUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGV5LmFwcGVuZENoaWxkKG1pbmUpO1xuICAgIHRoaXMuZWxlbWVudCA9IG1pbmU7IC8vdGhpcyBlbGVtZW50IGlzIG1pbmVcblxuXG4gICAgdGhpcy5lZGl0b3JzID0ge1xuICAgICAgICAvL1wiemVyb1wiOntcbiAgICAgICAgLy9cbiAgICAgICAgLy99XG4gICAgfTsgLy8gbnVsbDsgLy9wYXJhbXMuZWRpdG9yczsgLy8gIGF2YWlsYWJsZSBibG9ja3MgZWRpdG9yc1xuICAgIHRoaXMuYmxvY2tzID0gbnVsbDsgLy8gYmxvY2tzIGFycmF5XG4gICAgdGhpcy5hZGRNZW51ID0gW107XG5cbiAgICB2YXIgX2N1cnJlbnRfaWQgPSAwO1xuXG4gICAgdGhpcy5fbWFrZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY3VycmVudF9pZCsrO1xuICAgICAgICByZXR1cm4gX2N1cnJlbnRfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGxvYWQgPSBmdW5jdGlvbiAoZiwgdGVzdHVybCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RpbmcgdXBsb2FkXCIsIGYpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCIxXCIgLFxuICAgICAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgIHVybDogdGVzdHVybCA/IHRlc3R1cmwgOiBcImtpdHR5LmpwZWdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRVcGxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIHRoaXMudXBsb2FkID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuc2V0QmxvY2tzID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgICAgICBtaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLl9jdXJyZW50X2lkID0gMTtcbiAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgYmxvY2tzLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZShlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhleS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBVSS50b29sdGlwcygpO1xuICAgICAgICBVSS50ZXh0VG9vbHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICAvL2FkZCBzZXJvIGJsb2NrXG5cbiAgICAgICAgLy90aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkaXRvcnMpXG4gICAgICAgIC8vXCJhZGRcIiBtZW51XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZWRpdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWRkZWQgaGFuZGxlciBmb3JcIiwgZSk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbXkuZWRpdG9yc1tlXTtcbiAgICAgICAgICAgIG15LmFkZE1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVmaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXkuYWRkTmV3QmxvY2soZSwgbnVsbCwgcmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vWmVybyBibG9ja1xuXG4gICAgICAgIGxldCB6ZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgemVyby5jbGFzc0xpc3QuYWRkKFwic3RhcnRpbmdfYmxvY2tcIik7XG4gICAgICAgIC8vemVyby5zdHlsZS5oZWlnaHQgPSBcIjhweFwiO1xuICAgICAgICB6ZXJvLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luTGVmdCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5zdHlsZS5wYWRkaW5nID0gXCIwcHggMzJweFwiXG4gICAgICAgIHplcm8uZGF0YXNldC5ibG9ja19pZCA9IFwic3RhcnRcIjtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJLkNvbG91cnMubGlnaHQ7XG4gICAgICAgIHJlY3Quc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHJlY3QuaW5uZXJIVE1MID0gXCJFRElUIE1PREVcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5wYWRkaW5nID0gXCIwLjVlbSAwcHhcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gXCIuNWVtXCI7XG4gICAgICAgIHJlY3Quc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcbiAgICAgICAgcmVjdC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIHJlY3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgIHJlY3Quc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgemVyby5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgVUkuYWRkUGx1c0J1dHRvbih6ZXJvLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBtaW5lLmFwcGVuZENoaWxkKHplcm8pO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLnNldEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAvL3N0YXJ0IFVJXG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgICAgIFVJLnRleHRUb29scygpO1xuICAgICAgICBVSS5hZGRDb21tb25TdHlsZXModGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9ja3NbaWRdO1xuICAgIH1cblxuICAgIHRoaXMuSUQySW5kZXggPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHIgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhc2V0LmJsb2NrX2lkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgciA9IGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHRoaXMuSW5kZXgySUQgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCkuZGF0YXNldC5ibG9ja19pZDtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0odGhpcy5JRDJJbmRleChpZCkpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrRnJvbVNvdXJjZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXMuYWRkTmV3QmxvY2soZC50eXBlLCBkLmRhdGEsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMubW92ZVVwID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgaWYgKGJpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9maW5kIHByZXYgYmxvY2tcbiAgICAgICAgbGV0IHVwcGVyID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCAtIDEpO1xuICAgICAgICBpZiAodXBwZXIpIHtcbiAgICAgICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCB1cHBlcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubW92ZURvd24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2xhc3Q/XG4gICAgICAgIGlmIChiaW5kZXggKyAxID09IE9iamVjdC5rZXlzKHRoaXMuYmxvY2tzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dG5leHQgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4ICsgMik7XG4gICAgICAgIGxldCB0aGVibG9jayA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgIGlmIChuZXh0bmV4dCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgbmV4dG5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy93ZSBhdCBwcmVsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGVibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpc3RlckVkaXRvciA9IGZ1bmN0aW9uICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIG1ha2UsXG4gICAgICAgIGljb24sXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBwYXN0ZVxuICAgIH0pIHtcbiAgICAgICAgdGhpcy5lZGl0b3JzW3R5cGVdID0ge1xuICAgICAgICAgICAgbWFrZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIHBhc3RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c09uID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiZiA9IHRoaXMuYmxvY2tFbGVtZW50QnlJRChpZCk7XG4gICAgICAgIGJmLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9jayA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCByZWZpZCkgeyAvL3JlZj1pbnN0ZXJ0IGFmdGVyIHRoYXQgYmxvY2tcbiAgICAgICAgLy9pZiB0aGVyZSBpcyByZWYgaWQsIHdlIGhhdmUgdG8gaW5zZXJ0IGFmdGVyXG4gICAgICAgIC8vZmluZCBuZXh0IGVsZW1lbnRcbiAgICAgICAgaWYgKHJlZmlkID09IFwic3RhcnRcIikge1xuICAgICAgICAgICAgLy8gdmFyIHN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciByZWZlbCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWZpZCkge1xuICAgICAgICAgICAgbGV0IG5leHRpZHggPSB0aGlzLklEMkluZGV4KHJlZmlkKSArIDE7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgobmV4dGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBibG9jayBvZiB0eXBlIFxuICAgICAgICB2YXIgZG9tYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgYklEID0gdGhpcy5fbWFrZUlEKCk7XG4gICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRvbWJsb2NrLmFwcGVuZENoaWxkKGJjb250ZW50KTtcbiAgICAgICAgZG9tYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl91bml0XCIpO1xuICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX3R5cGUgPSB0eXBlO1xuXG5cbiAgICAgICAgYmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAodHlwZSBpbiB0aGlzLmVkaXRvcnMpIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZWRpdG9yc1t0eXBlXS5tYWtlKGRhdGEsIGJjb250ZW50LCBiSUQsIHRoaXMpOyAvL2Jsb2NrIG1hZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHtzYXZlOiAoKT0+IGRhdGEgLCByZW5kZXI6ICgpPT4gbnVsbH1cbiAgICAgICAgICAgIC8vdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBlZGl0b3IgZm9yXCIsIHR5cGUpO1xuICAgICAgICAgICAgLy9yZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGJjb250ZW50LmlubmVySFRNTCA9IFwiVW5rbm93biBibG9jazogPHN0cm9uZz5cIit0eXBlICsgXCI8L3N0cm9uZz5cIjtcbiAgICAgICAgICAgIGJjb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICBVSS5Db2xvdXJzLmxpZ2h0O1xuICAgICAgICAgICAgYmNvbnRlbnQuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS5mb250U2l6ZSA9IFwiMmVtXCI7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGJjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjJlbSAwZW1cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgIFVJLmFkZFBsdXNCdXR0b24oZG9tYmxvY2ssIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIFVJLmFkZEJsb2NrQ29udHJvbHMoZG9tYmxvY2ssIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIGlmIChyZWZpZCAmJiByZWZlbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkb21ibG9jaywgcmVmZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvbWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIGJJRDtcbiAgICB9IC8vYWRkIG5ldyBibG9ja1xuXG4gICAgdGhpcy5yZW1vdmVCbG9jayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL2ZpbmQgYmxvY2sgaW5kZXhcbiAgICAgICAgbGV0IGVsaWR4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vYW5ub3VuY2UgZGVsZXRpb24gdG8gYmxvY2tcbiAgICAgICAgaWYgKFwiYmVmb3JlRGVsZXRlXCIgaW4gdGhpcy5ibG9ja3NbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uYmVmb3JlRGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlICh0aGlzLmJsb2Nrc1tpZF0pO1xuICAgIH0gLy9yZW1vdmUgYmxvY2tcblxuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChjbGIpIHtcbiAgICAgICAgbGV0IGR0ID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgZHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBlLmRhdGFzZXQuYmxvY2tfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG15LmJsb2Nrc1tlLmRhdGFzZXQuYmxvY2tfaWRdLnNhdmUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgbGV0IG15ZGF0YSA9IHtcbiAgICAgICAgICAgIFwiZWRpdG9yXCI6IFwiQmxFZC9cIiArIFwiMS4wLjFcIixcbiAgICAgICAgICAgIFwiYmxvY2tzXCI6IGR0XG4gICAgICAgIH07XG4gICAgICAgXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXCIlY0VkaXRvciBzYXZpbmdcIiwgKFwiY29sb3I6IFwiICsgVUkubXljeWFuKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG15ZGF0YSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgICAgICBpZiAoY2xiKSB7XG4gICAgICAgICAgICBjbGIobXlkYXRhKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbXlkYXRhO1xuICAgIH1cblxufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUJhc2ljRWRpdG9yKGVsKSB7XG4gICAgbGV0IGVkaXRvciA9IG5ldyBCbG9ja0VkaXRvcih7XG4gICAgICAgIHNlbGVjdG9yOiBlbFxuICAgIH0pO1xuXG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMubWF0ZXJpYWwucGFyYWdyYXBoLFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLnBhcmFncmFwaCxcbiAgICAgICAgbGFiZWw6IFwiUGFyYWdyYXBoXCJcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImRpdmlkZXJcIixcbiAgICAgICAgbWFrZTogQ29yZWJsb2Nrcy5kaXZpZGVyLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5kaXZpZGVyLFxuICAgICAgICBsYWJlbDogJ0RpdmlkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuaGVhZGVyLFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLmhlYWRlcixcbiAgICAgICAgbGFiZWw6ICdIZWFkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLmNvZGUsXG4gICAgICAgIG1ha2U6IENvcmVibG9ja3MuY29kZSxcbiAgICAgICAgbGFiZWw6ICdDb2RlIHNuaXBwZXQnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJyYXdcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMucmF3LFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLnJhdyxcbiAgICAgICAgbGFiZWw6ICdSYXcgSFRNTCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnF1b3RlLFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLmJsb2NrcXVvdGUsXG4gICAgICAgIGxhYmVsOiAnQmxvY2txdW90ZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLmltYWdlLFxuICAgICAgICBtYWtlOiBDb3JlYmxvY2tzLmltYWdlLFxuICAgICAgICBsYWJlbDogJ0ltYWdlJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwidmlkZW9cIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMubWF0ZXJpYWwudmlkZW8sXG4gICAgICAgIG1ha2U6IENvcmVibG9ja3MudmlkZW8sXG4gICAgICAgIGxhYmVsOiAnVmlkZW8nXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLmxpc3QsXG4gICAgICAgIG1ha2U6IENvcmVibG9ja3MubGlzdCxcbiAgICAgICAgbGFiZWw6IFwiTGlzdFwiLFxuICAgIH0pO1xuICAgIC8vY29uc29sZS5sb2coVUkuaWNvbnMubWF0ZXJpYWwubGlzdCk7XG5cbiAgICByZXR1cm4gZWRpdG9yO1xufVxuLy8gIG15LmN1cnJlbnRfZWRpdG9yID0gbmV3IGVkaXRvcl9mbihsNCwgZWRpdG9yX2VsZW1lbnQsIG15LmN1cnJlbnRfdmlldy5maWxlLmNvbnRlbnQpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxhdGlkRWRpdG9yKGw0LCBlZGl0b3JfZWxlbWVudF9zZWxlY3RvciwgZmlsZV9jb250ZW50KSB7XG4gICAgbGV0IGVkID0gbWFrZUJhc2ljRWRpdG9yKGVkaXRvcl9lbGVtZW50X3NlbGVjdG9yKTtcbiAgICBlZC5zZXRCbG9ja3MoZmlsZV9jb250ZW50KTtcbiAgICByZXR1cm4gZWQ7XG59IiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vdWlcIjtcbmltcG9ydCB7XG4gICAgdGVtcGxhdGVzXG59IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmV4cG9ydCB2YXIgY29uc3RydWN0b3JzID0ge307XG5cblxuY29uc3RydWN0b3JzLnBhcmFncmFwaCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBiYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG4gICAgLy9sZXQgcmUgPSAvPGRpdnxwfGg+L2dpO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgbXk6IHRoaXMsXG4gICAgICAgIGlkOiBpZCwgLy8hISEhISEhISEhISEhISEhISEhICAgIFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGVkaXRvcjogZWRpdG9yLFxuICAgICAgICBfcDogYmMsXG4gICAgICAgIC8vdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgLy9jbGVhbjogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgLy99LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3AuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fcC5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBibGMuX3AuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vd2UgbmVlZCB0byBzdHJpcCBmb3JtYXR0aW5nIGhlcmVcbiAgICAgICAgbGV0IHBhc3RlID0gKGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHNlbGVjdGlvbi5kZWxldGVGcm9tRG9jdW1lbnQoKTtcbiAgICAgICAgc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuaW5zZXJ0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXN0ZSkpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IG1hZ2ljID0gXCIjISNcIlxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW50ZXIgcHJlc3NlZFwiLCBlLnNoaWZ0S2V5ID09IHRydWUpO1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydFRleHRcIiwgZmFsc2UsIG1hZ2ljKTtcbiAgICAgICAgICAgICAgICBsZXQgY2xpY2thdCA9IGJsYy5fcC5pbm5lckhUTUwuaW5kZXhPZihtYWdpYylcbiAgICAgICAgICAgICAgICBsZXQgdGV4dGxlZnQgPSBibGMuX3AuaW5uZXJIVE1MLnN1YnN0cmluZygwLCBjbGlja2F0KTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dG5leHQgPSBibGMuX3AuaW5uZXJIVE1MLnN1YnN0cmluZyhjbGlja2F0ICsgbWFnaWMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRleHRsZWZ0LCBcInxcIiAsIHRleHRuZXh0KTtcbiAgICAgICAgICAgICAgICBibGMuX3AuaW5uZXJIVE1MID0gdGV4dGxlZnQ7IC8vYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoMCAsIGNsaWNrYXQpO1xuICAgICAgICAgICAgICAgIGxldCBucCA9IGVkaXRvci5hZGROZXdCbG9jayhcInBhcmFncmFwaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRuZXh0XG4gICAgICAgICAgICAgICAgfSwgYmxjLmlkKTtcbiAgICAgICAgICAgICAgICBibGMuZWRpdG9yLmJsb2Nrc1tucF0uX3AuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmRpdmlkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGhyPlwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3RydWN0b3JzLmhlYWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIC8vbXl0YWcuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgLy9pZDogaWQsXG4gICAgICAgIHRleHQ6IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCJIZWFkZXJcIixcbiAgICAgICAgbGV2ZWw6IGRhdGEgJiYgZGF0YS5sZXZlbCA/IGRhdGEubGV2ZWwgOiAxLFxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgYWxyZWFkeXRoZXJlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSxoMixoMyxoNCxoNSxoNlwiKTtcbiAgICAgICAgICAgIGlmIChhbHJlYWR5dGhlcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSBhbHJlYWR5dGhlcmUuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9teXRhZzogXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxLGgyLGgzLGg0LGg1LGg2XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHR4dCxcbiAgICAgICAgICAgICAgICBcImxldmVsXCI6IHRoaXMubGV2ZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgIFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHQudmFsdWUgPSBpO1xuICAgICAgICBvcHQubGFiZWwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgb3B0LmlubmVySFRNTCA9IFwibGV2ZWwgXCIgKyBpO1xuICAgICAgICBpZiAoaSA9PSBibGMubGV2ZWwpIHtcbiAgICAgICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIG9wdHMuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9XG4gICAgb3B0cy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBudiA9IG9wdHNbb3B0cy5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgYmxjLmxldmVsID0gbnY7XG4gICAgICAgIGJsYy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICBibGMuYWRkVG9Ub29sYmFyKG9wdHMpXG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgICBsZXQgY2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcbiAgICBwcmUuYXBwZW5kQ2hpbGQoY2QpO1xuICAgIGNkLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBjZC5kYXRhc2V0Lm5vX3RleHRfdG9vbGJveCA9IHRydWU7XG4gICAgY2QuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vd2UgbmVlZCB0byBzdHJpcCBmb3JtYXR0aW5nIGhlcmVcbiAgICAgICAgbGV0IHBhc3RlID0gKGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHNlbGVjdGlvbi5kZWxldGVGcm9tRG9jdW1lbnQoKTtcbiAgICAgICAgc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuaW5zZXJ0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXN0ZSkpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgZWwuYXBwZW5kQ2hpbGQocHJlKTtcbiAgICBsZXQgbGFuZ3MgPSBbICAgIFwiXCIsIFwiYXV0b1wiLCBcImFyZHVpbm9cIiwgXCJiYXNoXCIsIFwiYmFzaWNcIiAsIFwiY3BwXCIsIFwiaHRtbFwiLCAnamF2YXNjcmlwdCcsICBcInByb2Nlc3NpbmdcIiwgXCJweXRob25cIiwgICBdO1xuICAgIGxldCBsYmxzID0gIFtcIk5vIGhpZ2hsaWdodGluZ1wiLCBcIkF1dG9cIiwgXCJBcmR1aW5vXCIsIFwiQmFzaFwiLCBcIkJhc2ljXCIgLCBcIkMrK1wiLCBcIkhUTUxcIiwgJ0phdmEgU2NyaXB0JywgXCJQcm9jZXNzaW5nXCIsIFwiUHl0aG9uXCIsICAgXTtcbiAgICAvL1xuICAgIGxldCBvcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBsYW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChlICxpKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1pLnZhbHVlID0gZTtcbiAgICAgICAgbWkubGFiZWwgPSBsYmxzW2ldO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxhbmd1YWdlICYmIGUgPT0gZGF0YS5sYW5ndWFnZSkge1xuICAgICAgICAgICAgbWkuc2VsZWN0ZWQgPSB0cnVlOyAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcbiAgICAvL1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2QuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLmNvZGUgPyBkYXRhLmNvZGUgOiBcIiMgIHR5cGVcXG4jICBoZXJlXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29kZTogY2QuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cyk7XG4gICAgcmV0dXJuIGJsYztcbn1cblxuY29uc3RydWN0b3JzLnJhdyA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuXG4gICAgbGV0IGVkaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBlZGkuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBlZGkuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgZWRpLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGVkaS5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlZGkuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5odG1sKSB7XG4gICAgICAgIGVkaS52YWx1ZSA9IGRhdGEuaHRtbDtcbiAgICB9XG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlZGkpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWw6IGVkaS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuYmxvY2txdW90ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBibGN0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYmxvY2txdW90ZVwiKTtcbiAgICBibGN0YWcuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgbGV0IGJsY2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICBibGNpbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgbGV0IGJsZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgbGV0IGJsY2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjaXRlXCIpO1xuICAgIGJsZm9vdC5hcHBlbmRDaGlsZChibGNpdGUpO1xuICAgIGJsY2l0ZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG5cbiAgICBibGN0YWcuYXBwZW5kQ2hpbGQoYmxjaW4pO1xuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGZvb3QpO1xuICAgIGJsY2luLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCLQptC40YLQsNGC0LBcIjtcbiAgICBibGNpdGUuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLmNhcHRpb24gPyBkYXRhLmNhcHRpb24gOiBcIlwiO1xuXG4gICAgbGV0IGJsb2NrID0ge1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGJsY3RhZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogYmxjaW4uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGNhcHRpb246IGJsY2l0ZS5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxvY2s7XG59XG5cbmNvbnN0cnVjdG9ycy5pbWFnZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBmaWd0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGxldCBwaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwaW1nLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgbGV0IGZjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XG4gICAgZmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGZjLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCJcIjtcbiAgICBmaWd0YWcuYXBwZW5kQ2hpbGQocGltZyk7XG4gICAgZmlndGFnLmFwcGVuZENoaWxkKGZjKTtcbiAgICBwaW1nLnNyYyA9IGRhdGEgJiYgZGF0YS5maWxlID8gZGF0YS5maWxlLnVybCA6IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpBd0lpQm9aV2xuYUhROUlqRTRNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdNQ0F4T0RBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanhuSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd01Da2lQZ284Y21WamRDQjRQU0l3TGpVaUlIazlJakF1TlNJZ2QybGtkR2c5SWpJNU9TSWdhR1ZwWjJoMFBTSXhPVGtpSUdacGJHdzlJaU5ETkVNMFF6UWlJSE4wY205clpUMGlZbXhoWTJzaUx6NEtQR3hwYm1VZ2VURTlJaTB3TGpVaUlIZ3lQU0l6TkRrdU5UWTVJaUI1TWowaUxUQXVOU0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTUM0NE5UZ3hPVGtnTFRBdU5URXpNekUzSURBdU9EVTNNalUzSURBdU5URTBPRGc0SURBZ01UZ3dLU0lnYzNSeWIydGxQU0lqTmtZMlJqWkdJaTgrQ2p4c2FXNWxJSGt4UFNJdE1DNDFJaUI0TWowaU16UTRMak14SWlCNU1qMGlMVEF1TlNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01DNDROVGMzTWprZ01DNDFNVFF4TURJZ0xUQXVPRFUzTnpJNUlEQXVOVEUwTVRBeUlEQWdNQzQxTmpBeE9ERXBJaUJ6ZEhKdmEyVTlJaU0yUmpaR05rWWlMejRLUEM5blBnbzhjbVZqZENCNFBTSXdMalVpSUhrOUlqQXVOU0lnZDJsa2RHZzlJakk1T1NJZ2FHVnBaMmgwUFNJeE56a2lJSE4wY205clpUMGlJelpHTmtZMlJpSXZQZ284WkdWbWN6NEtQR05zYVhCUVlYUm9JR2xrUFNKamJHbHdNQ0krQ2p3dlkyeHBjRkJoZEdnK0Nqd3ZaR1ZtY3o0S1BDOXpkbWMrQ2c9PVwiO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgaW1hZ2VcIilcbiAgICAgICAgfSxcbiAgICB9XG4gICAgdGVtcGxhdGVzLnR3b1BhbmVscyhibGMpO1xuICAgIGJsYy5hZGRUb1ByZXZpZXcoZmlndGFnKTtcbiAgICAvL2VkaXRcbiAgICAvLy8vdXBsb2FkXG4gICAgbGV0IHVwbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZC50eXBlID0gXCJmaWxlXCI7XG4gICAgdXBsZC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbGV0IHVwbGRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZGJ0bi52YWx1ZSA9IFwidXBsb2FkXCI7XG4gICAgdXBsZGJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHVwbGRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVkaXRvci51cGxvYWQodXBsZC5maWxlc1swXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgcGltZy5zcmMgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgIHNyY2lucHV0LnZhbHVlID0gci5maWxlLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHBpbWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3JjbGFiZWwsIHNyY2lucHV0XSkpO1xuICAgIC8vLy9jbGFzc2VzXG4gICAgLy8vLy8vc3RyZXRjaGVkXG4gICAgbGV0IHN0cmV0Y2hsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdHJldGNobGFiZWwuaW5uZXJIVE1MID0gXCJzdHJldGNoZWRcIlxuICAgIGxldCBzdHJldGNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RyZXRjaGVkLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgc3RyZXRjaGVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbm9yZXNpemUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlndGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJldGNoZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuc3RyZXRjaGVkO1xuICAgIC8vLy8vL25vcmVzaXplXG4gICAgbGV0IG5ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbnJsYWJlbC5pbm5lckhUTUwgPSBcIm5vIHJlc2l6ZVwiXG4gICAgbGV0IG5vcmVzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vcmVzaXplLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbm9yZXNpemUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBub3Jlc2l6ZS5jaGVja2VkID0gZGF0YSAmJiAoZGF0YS5ub3Jlc2l6ZSB8fCBkYXRhLndpdGhiYWNrZ3JvdW5kKTtcbiAgICAvLy8vL2xlZnRcbiAgICBsZXQgbGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxsYWJlbC5pbm5lckhUTUwgPSBcImxlZnRcIlxuICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxlZnQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsZWZ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGVmdC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmxlZnQ7XG4gICAgLy8vL3JpZ2h0XG4gICAgbGV0IHJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBybGFiZWwuaW5uZXJIVE1MID0gXCJyaWdodFwiXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHJpZ2h0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcmlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGVmdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmlnaHQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5yaWdodDtcblxuICAgIC8vLy9ib3JkZXJcbiAgICBsZXQgYmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGJsYWJlbC5pbm5lckhUTUwgPSBcImJvcmRlclwiXG4gICAgbGV0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBib3JkZXIudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBib3JkZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcGltZy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlcmVkXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYm9yZGVyLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuYm9yZGVyO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzdHJldGNoZWQsIHN0cmV0Y2hsYWJlbCxcbiAgICAgICAgbm9yZXNpemUsIG5ybGFiZWwsXG4gICAgICAgIGxlZnQsIGxsYWJlbCxcbiAgICAgICAgcmlnaHQsIHJsYWJlbCxcbiAgICAgICAgYm9yZGVyLCBibGFiZWxcbiAgICBdKSk7XG5cbiAgICAvL1xuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyZXRjaGVkOiBzdHJldGNoZWQuY2hlY2tlZCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodC5jaGVja2VkLFxuICAgICAgICAgICAgbGVmdDogbGVmdC5jaGVja2VkLFxuICAgICAgICAgICAgbm9yZXNpemU6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQmFja2dyb3VuZDogbm9yZXNpemUuY2hlY2tlZCxcbiAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQm9yZGVyOiBib3JkZXIuY2hlY2tlZCxcbiAgICAgICAgICAgIGNhcHRpb246IGZjLmlubmVySFRNTCxcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IHNyY2lucHV0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5maWxlICYmIGRhdGEuZmlsZS51cmwpIHtcbiAgICAgICAgYmxjLmdvUHJldmlld01vZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy52aWRlbyA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge1xuICAgICAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgICAgIHVybDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH1cbiAgICBpZiAoIWJsYy5kYXRhLmZpbGUpIHtcbiAgICAgICAgYmxjLmRhdGEuZmlsZSA9IHt9O1xuICAgIH1cbiAgICB0ZW1wbGF0ZXMudHdvUGFuZWxzKGJsYyk7XG4gICAgLy9wcmV2aWV3XG4gICAgbGV0IHZ0YWcgPSBibGMuYWRkVG9QcmV2aWV3KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSk7XG4gICAgdnRhZy5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwJVwiO1xuICAgIC8vbGV0IHNyY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gICAgLy92dGFnLmFwcGVuZENoaWxkKHNyY3RhZyk7XG4gICAgdnRhZy5zcmMgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICAvL2VkaXRvclxuICAgIC8vLy91cGxvYWQgICAgIFxuICAgIGxldCB1cGxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGQudHlwZSA9IFwiZmlsZVwiO1xuICAgIHVwbGQuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIGxldCB1cGxkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGRidG4udmFsdWUgPSBcInVwbG9hZFwiO1xuICAgIHVwbGRidG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICB1cGxkYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlZGl0b3IudXBsb2FkKHVwbGQuZmlsZXNbMF0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHZ0YWcuc3JjID0gci5maWxlLnVybDtcbiAgICAgICAgICAgICAgICBzcmNpbnB1dC52YWx1ZSA9IHIuZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgYmxjLmRhdGEuZmlsZS51cmwgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbdXBsZCwgdXBsZGJ0bl0pKTtcbiAgICAvLy8vZWRpdCBzcmNcbiAgICBsZXQgc3JjbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3JjbGFiZWwuaW5uZXJIVE1MID0gXCJTb3VyY2UgVVJMXCI7XG4gICAgbGV0IHNyY2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNyY2lucHV0LnN0eWxlLmZsZXhHcm93ID0gMjtcbiAgICBzcmNpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc3JjaW5wdXQudmFsdWUgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICBzcmNpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdnRhZy5zcmMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBibGMuZGF0YS5maWxlLnVybCA9IHRoaXMudmFsdWU7XG4gICAgfSlcbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3NyY2xhYmVsLCBzcmNpbnB1dF0pKTtcbiAgICAvLy8vcGFyYW1zXG4gICAgbGV0IHBhcmFtcyA9IFt7XG4gICAgICAgICAgICBuYW1lOiBcImF1dG9wbGF5XCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuYXV0b3BsYXksXG4gICAgICAgICAgICBsYWJlbDogXCJhdXRvcGxheVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5jb250cm9scyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJsb29wXCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEubG9vcCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtdXRlZFwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLm11dGVkLFxuICAgICAgICB9LFxuXG4gICAgXVxuICAgIGxldCBwZWxzID0gW107XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFibGMuZGF0YVtlLm5hbWVdKSB7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcGxhYmVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgcGxhYmVsLmlubmVySFRNTCA9IGUubmFtZTtcbiAgICAgICAgbGV0IHBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcGNoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIHBjaGVjay5jaGVja2VkID0gZGF0YSAmJiBkYXRhW2UubmFtZV07XG4gICAgICAgIHBjaGVjay5vbmNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBibGMuZGF0YSwgZS5uYW1lKTtcbiAgICAgICAgICAgIGJsYy5kYXRhW2UubmFtZV0gPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB2dGFnLnNldEF0dHJpYnV0ZShlLm5hbWUsIHRoaXMuY2hlY2tlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHBlbHMucHVzaChwY2hlY2spO1xuICAgICAgICBwZWxzLnB1c2gocGxhYmVsKTtcblxuXG4gICAgfSk7XG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KHBlbHMpKTtcblxuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmxjLmRhdGE7XG4gICAgfVxuICAgIGlmICghKGRhdGEgJiYgZGF0YS5maWxlICYmIGRhdGEuZmlsZS51cmwpKSB7XG4gICAgICAgIGJsYy5nb0VkaXRNb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYztcbn1cblxuXG5jb25zdHJ1Y3RvcnMubGlzdCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBsaXN0X2VsZW1lbnQ6IG51bGwsXG4gICAgICAgIHR5cGU6IGRhdGEgJiYgZGF0YS5zdHlsZSAmJiBkYXRhLnN0eWxlID09IFwib3JkZXJlZFwiID8gXCJvbFwiIDogXCJ1bFwiLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjogYmxjLnR5cGUgPT0gXCJvbFwiID8gXCJvcmRlcmVkXCIgOiBcInVub3JkZXJlZFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogQXJyYXkuZnJvbSh0aGlzLmxpc3RfZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikpLm1hcChlID0+IGUuaW5uZXJIVE1MKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9lZGl0b3JcbiAgICAvLy8vb3V0ZXIgbGlzdFxuICAgIGJsYy5saXN0X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGJsYy50eXBlKTtcbiAgICBlbC5hcHBlbmRDaGlsZChibGMubGlzdF9lbGVtZW50KTtcbiAgICAvLy8vZG8gd2UgaGF2ZSBkYXRhXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pdGVtcykge1xuICAgICAgICBkYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbC5pbm5lckhUTUwgPSBlO1xuICAgICAgICAgICAgbC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBhZGRTbWFydFJlbW92ZShsKVxuICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChsKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8vLy9tYWtlIExJIGRlbGV0YWJsZSBcbiAgICBmdW5jdGlvbiBhZGRTbWFydFJlbW92ZShlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLmtleUNvZGUgLCB0aGlzLmlubmVySFRNTC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA4ICYmIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMgJiYgdGhpcy5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgbmkuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vd2hlcmU/XG4gICAgICAgICAgICAgICAgbGV0IG15bmV4dCA9IHRoaXMubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKG15bmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBibGMubGlzdF9lbGVtZW50Lmluc2VydEJlZm9yZShuaSwgbXluZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKG5pKTsgLy9hdC4uLj9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkU21hcnRSZW1vdmUobmkpO1xuICAgICAgICAgICAgICAgIG5pLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLy8vL2NoYW5nbGUgbGlzdCB0eXBlIHRvXG4gICAgZnVuY3Rpb24gc2V0VHlwZSh0bikge1xuXG4gICAgICAgIGxldCBuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG4pO1xuICAgICAgICBsZXQgbGlzcyA9IEFycmF5LmZyb20oYmxjLmxpc3RfZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgbGlzcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgbmUuYXBwZW5kQ2hpbGQoZSlcbiAgICAgICAgfSk7XG4gICAgICAgIGJsYy5saXN0X2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGJsYy5saXN0X2VsZW1lbnQgPSBuZTtcbiAgICAgICAgYmxjLnR5cGUgPSB0bjtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQobmUpO1xuICAgIH1cbiAgICAvLy8vXG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICAvL3JhZGlvYnV0dG9uc1xuICAgIC8vXG4gICAgbGV0IHJidG5zID0gW3tcbiAgICAgICAgICAgIHZhbHVlOiBcInVsXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJVbm9yZGVyZWRcIlxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIm9sXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJPcmRlcmVkXCJcbiAgICAgICAgfVxuICAgIF07XG4gICAgcmJ0bnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcImxpc3RfYnV0dG9uc19cIiArIGlkO1xuICAgICAgICByYWRpby52YWx1ZSA9IGUudmFsdWU7XG4gICAgICAgIHJhZGlvLmNoZWNrZWQgPSAoYmxjLnR5cGUgPT0gZS52YWx1ZSk7XG4gICAgICAgIHJhZGlvLm9uY2hhbmdlID0gZXYgPT4gc2V0VHlwZShlLnZhbHVlKTtcbiAgICAgICAgbGV0IGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGJsLmlubmVySFRNTCA9IGUubGFiZWw7XG4gICAgICAgIGJsYy5hZGRUb1Rvb2xiYXIocmFkaW8pO1xuICAgICAgICBibGMuYWRkVG9Ub29sYmFyKGxibCk7XG4gICAgfSk7XG4gICAgLy8vLyBhZGQgYnV0dG9uXG4gICAgbGV0IGFkZF9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZF9iLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGFkZF9iLnZhbHVlID0gXCIraXRlbVwiO1xuICAgIGFkZF9iLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBsaXN0IGl0ZW1cIjtcbiAgICBhZGRfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld2xpLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgYWRkU21hcnRSZW1vdmUobmV3bGkpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKG5ld2xpKTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb1Rvb2xiYXIoYWRkX2IpO1xuICAgIHJldHVybiBibGM7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTIwIDEybC0xLjQxLTEuNDFMMTMgMTYuMTdWNGgtMnYxMi4xN2wtNS41OC01LjU5TDQgMTJsOCA4IDgtOHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk00IDEybDEuNDEgMS40MUwxMSA3LjgzVjIwaDJWNy44M2w1LjU4IDUuNTlMMjAgMTJsLTgtOC04IDh6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05LjQgMTYuNkw0LjggMTJsNC42LTQuNkw4IDZsLTYgNiA2IDYgMS40LTEuNHptNS4yIDBsNC42LTQuNi00LjYtNC42TDE2IDZsNiA2LTYgNi0xLjQtMS40elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PGc+PHBhdGggZD1cXFwiTTUuNywxMy4zaDExLjV2Mkg1LjdWMTMuM3ogTTYuMyw3LjhoMTEuNXYySDYuM1Y3Ljh6IE05LjMsMy4yaDEuOEw5LDIwLjZINy4yTDkuMywzLjJ6IE0xNC4zLDMuMmgxLjhsLTIuMSwxNy40aC0xLjkgTDE0LjMsMy4yelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj4gLnN0MHtmaWxsOm5vbmU7fSA8L3N0eWxlPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0wLDBoMjR2MjRIMFYwelxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjQuNVxcXCIgeT1cXFwiOC41XFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCg5LjA0MjI2OWUtMTMgLTEgMSA5LjA0MjI2OWUtMTMgLTYuNDU2NyAxNy41NDMzKVxcXCIgd2lkdGg9XFxcIjJcXFwiIGhlaWdodD1cXFwiNy4xXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTcuNVxcXCIgeT1cXFwiOC41XFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCg5LjA0MjI2OWUtMTMgLTEgMSA5LjA0MjI2OWUtMTMgNi40NTY3IDMwLjQ1NjcpXFxcIiB3aWR0aD1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI3LjFcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxMS4xXFxcIiB5PVxcXCIxMVxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoNi4xMjMyMzRlLTE3IC0xIDEgNi4xMjMyMzRlLTE3IDYuMjA0OTY4ZS0wMiAyNC4wNjIpXFxcIiB3aWR0aD1cXFwiMlxcXCIgaGVpZ2h0PVxcXCIxLjlcXFwiPjwvcmVjdD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTUuNiAxMC43OWMuOTctLjY3IDEuNjUtMS43NyAxLjY1LTIuNzkgMC0yLjI2LTEuNzUtNC00LTRIN3YxNGg3LjA0YzIuMDkgMCAzLjcxLTEuNyAzLjcxLTMuNzkgMC0xLjUyLS44Ni0yLjgyLTIuMTUtMy40MnpNMTAgNi41aDNjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNWgtM3YtM3ptMy41IDlIMTB2LTNoMy41Yy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk00IDEwLjVjLS44IDAtMS41LjctMS41IDEuNXMuNyAxLjUgMS41IDEuNSAxLjUtLjcgMS41LTEuNS0uNy0xLjUtMS41LTEuNXptMC02Yy0uOCAwLTEuNS43LTEuNSAxLjVTMy4yIDcuNSA0IDcuNSA1LjUgNi44IDUuNSA2IDQuOCA0LjUgNCA0LjV6bTAgMTJjLS44IDAtMS41LjctMS41IDEuNXMuNyAxLjUgMS41IDEuNSAxLjUtLjcgMS41LTEuNS0uNy0xLjUtMS41LTEuNXpNNyAxOWgxNHYtMkg3djJ6bTAtNmgxNHYtMkg3djJ6bTAtOHYyaDE0VjVIN3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiAxN2gzbDItNFY3SDV2Nmgzem04IDBoM2wyLTRWN2gtNnY2aDN6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAgMTloNHYtM2gtNHYzek01IDR2M2g1djNoNFY3aDVWNEg1ek0zIDE0aDE4di0ySDN2MnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiMTBcXFwiIHdpZHRoPVxcXCIxNFxcXCIgaGVpZ2h0PVxcXCIyXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiNFxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjRcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIxNFxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIxOFxcXCIgd2lkdGg9XFxcIjEyXFxcIiBoZWlnaHQ9XFxcIjJcXFwiPjwvcmVjdD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDBWMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTQuODYgOC44NmwtMyAzLjg3TDkgMTMuMTQgNiAxN2gxMmwtMy44Ni01LjE0elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMy45IDEyYzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xaDRWN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDR2LTEuOUg3Yy0xLjcxIDAtMy4xLTEuMzktMy4xLTMuMXpNOCAxM2g4di0ySDh2MnptOS02aC00djEuOWg0YzEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xcy0xLjM5IDMuMS0zLjEgMy4xaC00VjE3aDRjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE3IDdoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjEgMCAxLjQzLS45OCAyLjYzLTIuMzEgMi45OGwxLjQ2IDEuNDZDMjAuODggMTUuNjEgMjIgMTMuOTUgMjIgMTJjMC0yLjc2LTIuMjQtNS01LTV6bS0xIDRoLTIuMTlsMiAySDE2ek0yIDQuMjdsMy4xMSAzLjExQzMuMjkgOC4xMiAyIDkuOTEgMiAxMmMwIDIuNzYgMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjEgMC0xLjU5IDEuMjEtMi45IDIuNzYtMy4wN0w4LjczIDExSDh2MmgyLjczTDEzIDE1LjI3VjE3aDEuNzNsNC4wMSA0TDIwIDE5Ljc0IDMuMjcgMyAyIDQuMjd6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMjRWMFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggZD1cXFwiTTksMTF2MTBoMlY1aDJ2MTZoMlY1aDJWM0g5QzYuOCwzLDUsNC44LDUsN1M2LjgsMTEsOSwxMXpcXFwiPjwvcGF0aD48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDY0MCA1MTJcXFwiPjxwYXRoIGQ9XFxcIk0zMzYgNDE2aC0xMS4xN2w5LjI2LTI3Ljc3TDI2NyAzMzYuNCAyNDAuNDkgNDE2SDIwOGExNiAxNiAwIDAgMC0xNiAxNnYzMmExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2em0yOTcuODIgNDIuMUwzNzcgMjU5LjU5IDQyNi4xNyAxMTJINTQ0djMyYTE2IDE2IDAgMCAwIDE2IDE2aDMyYTE2IDE2IDAgMCAwIDE2LTE2VjQ4YTE2IDE2IDAgMCAwLTE2LTE2SDE3NmExNiAxNiAwIDAgMC0xNiAxNnY0My45TDQ1LjQ2IDMuMzhBMTYgMTYgMCAwIDAgMjMgNi4xOUwzLjM3IDMxLjQ2YTE2IDE2IDAgMCAwIDIuODEgMjIuNDVsNTg4LjM2IDQ1NC43MmExNiAxNiAwIDAgMCAyMi40Ni0yLjgxbDE5LjY0LTI1LjI3YTE2IDE2IDAgMCAwLTIuODItMjIuNDV6TTMwOS45MSAyMDcuNzZMMjI0IDE0MS4zNlYxMTJoMTE3LjgzelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxnIGNsaXAtcGF0aD1cXFwidXJsKCNjbGlwMClcXFwiPjxwYXRoIGQ9XFxcIk0xMi43MjY2IDcuMzMzNUgxMC40MDkyVjguOTUzNjFIMTIuODA4NkMxNC41NjU0IDguOTUzNjEgMTUuOTU2NSA5LjM4MDg2IDE2Ljk4MTkgMTAuMjM1NEMxOC4wMTQyIDExLjA4MyAxOC41MzAzIDEyLjIyOCAxOC41MzAzIDEzLjY3MDRDMTguNTMwMyAxNS4xMTk2IDE4LjAxNzYgMTYuMjg1MiAxNi45OTIyIDE3LjE2N0MxNS45NzM2IDE4LjA0MiAxNC42MTY3IDE4LjQ4NjMgMTIuOTIxNCAxOC41SDcuMzEyNVY3LjMzMzVINS41NTkwOFY1LjQ1NzAzSDcuMzEyNVYzLjU3MDMxSDEwLjQwOTJWNS40NTcwM0gxMi43MjY2VjcuMzMzNVpNMTAuNDA5MiAxMS40MzUxVjE2LjAyODhIMTIuODU5OUMxMy42NDYgMTYuMDI4OCAxNC4yNzE1IDE1LjgxMzUgMTQuNzM2MyAxNS4zODI4QzE1LjIwOCAxNC45NTIxIDE1LjQ0MzggMTQuMzc0NSAxNS40NDM4IDEzLjY0OTlDMTUuNDQzOCAxMi45NzMxIDE1LjIxODMgMTIuNDM5OSAxNC43NjcxIDEyLjA1MDNDMTQuMzIyOCAxMS42NTM4IDEzLjcxMDkgMTEuNDQ4NyAxMi45MzE2IDExLjQzNTFIMTAuNDA5MlpcXFwiPjwvcGF0aD48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPVxcXCJjbGlwMFxcXCI+PHJlY3Qgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCI+PC9yZWN0PjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMC4zMDY4IDE5LjMyNDJDMTAuODY3NCAxOS41NzQyIDExLjM5NzcgMTkuNjk5MiAxMS44OTc3IDE5LjY5OTJDMTQuNzQ2MiAxOS42OTkyIDE2LjE3MDUgMTguMzkwNiAxNi4xNzA1IDE1Ljc3MzRDMTYuMTcwNSAxNC44ODI4IDE2LjAxNTIgMTQuMTc5NyAxNS43MDQ1IDEzLjY2NDFDMTUuNSAxMy4zMjAzIDE1LjI2NyAxMy4wMzEyIDE1LjAwNTcgMTIuNzk2OUMxNC43NDQzIDEyLjU2MjUgMTQuNDg4NiAxMi4zODA5IDE0LjIzODYgMTIuMjUyQzEzLjk4ODYgMTIuMTIzIDEzLjY4MzcgMTIuMDI1NCAxMy4zMjM5IDExLjk1OUMxMi45NjQgMTEuODkyNiAxMi42NDU4IDExLjg1MTYgMTIuMzY5MyAxMS44MzU5QzEyLjA5MjggMTEuODIwMyAxMS43MzQ4IDExLjgxMjUgMTEuMjk1NSAxMS44MTI1QzEwLjc0MjQgMTEuODEyNSAxMC4zNTk4IDExLjg1MTYgMTAuMTQ3NyAxMS45Mjk3QzEwLjE0NzcgMTIuMzQzOCAxMC4xNDU4IDEyLjk2NDggMTAuMTQyIDEzLjc5M0MxMC4xMzgzIDE0LjYyMTEgMTAuMTM2NCAxNS4yMzgzIDEwLjEzNjQgMTUuNjQ0NUMxMC4xMzY0IDE1LjcwNyAxMC4xMzI2IDE1Ljk3MDcgMTAuMTI1IDE2LjQzNTVDMTAuMTE3NCAxNi45MDA0IDEwLjExNTUgMTcuMjc3MyAxMC4xMTkzIDE3LjU2NjRDMTAuMTIzMSAxNy44NTU1IDEwLjE0MDIgMTguMTgxNiAxMC4xNzA1IDE4LjU0NDlDMTAuMjAwOCAxOC45MDgyIDEwLjI0NjIgMTkuMTY4IDEwLjMwNjggMTkuMzI0MlpNMTAuMTQ3NyAxMC41ODJDMTAuNDY1OSAxMC42MzY3IDEwLjg3ODggMTAuNjY0MSAxMS4zODY0IDEwLjY2NDFDMTIuMDA3NiAxMC42NjQxIDEyLjU0OTIgMTAuNjEzMyAxMy4wMTE0IDEwLjUxMTdDMTMuNDczNSAxMC40MTAyIDEzLjg5MDIgMTAuMjM2MyAxNC4yNjE0IDkuOTkwMjNDMTQuNjMyNiA5Ljc0NDE0IDE0LjkxNDggOS4zOTQ1MyAxNS4xMDggOC45NDE0MUMxNS4zMDExIDguNDg4MjggMTUuMzk3NyA3LjkzMzU5IDE1LjM5NzcgNy4yNzczNEMxNS4zOTc3IDYuNzMwNDcgMTUuMjg3OSA2LjI1MTk1IDE1LjA2ODIgNS44NDE4QzE0Ljg0ODUgNS40MzE2NCAxNC41NDkyIDUuMTExMzMgMTQuMTcwNSA0Ljg4MDg2QzEzLjc5MTcgNC42NTAzOSAxMy4zODI2IDQuNDgwNDcgMTIuOTQzMiA0LjM3MTA5QzEyLjUwMzggNC4yNjE3MiAxMi4wMzQxIDQuMjA3MDMgMTEuNTM0MSA0LjIwNzAzQzExLjE1NTMgNC4yMDcwMyAxMC42NjI5IDQuMjU3ODEgMTAuMDU2OCA0LjM1OTM4QzEwLjA1NjggNC43NSAxMC4wNzIgNS4zMzk4NCAxMC4xMDIzIDYuMTI4OTFDMTAuMTMyNiA2LjkxNzk3IDEwLjE0NzcgNy41MTE3MiAxMC4xNDc3IDcuOTEwMTZDMTAuMTQ3NyA4LjEyMTA5IDEwLjE0NTggOC40MzM1OSAxMC4xNDIgOC44NDc2NkMxMC4xMzgzIDkuMjYxNzIgMTAuMTM2NCA5LjU3MDMxIDEwLjEzNjQgOS43NzM0NEMxMC4xMzY0IDEwLjEzMjggMTAuMTQwMiAxMC40MDIzIDEwLjE0NzcgMTAuNTgyWk00IDIxTDQuMDIyNzMgMTkuODk4NEM0LjEzNjM2IDE5Ljg2NzIgNC40NTgzMyAxOS44MDQ3IDQuOTg4NjQgMTkuNzEwOUM1LjUxODk0IDE5LjYxNzIgNS45MjA0NSAxOS41MTE3IDYuMTkzMTggMTkuMzk0NUM2LjI0NjIxIDE5LjMwMDggNi4yOTM1NiAxOS4xOTUzIDYuMzM1MjMgMTkuMDc4MUM2LjM3Njg5IDE4Ljk2MDkgNi40MDkwOSAxOC44MzAxIDYuNDMxODIgMTguNjg1NUM2LjQ1NDU1IDE4LjU0MSA2LjQ3NTM4IDE4LjQxNDEgNi40OTQzMiAxOC4zMDQ3QzYuNTEzMjYgMTguMTk1MyA2LjUyNDYyIDE4LjA0ODggNi41Mjg0MSAxNy44NjUyQzYuNTMyMiAxNy42ODE2IDYuNTM0MDkgMTcuNTQ4OCA2LjUzNDA5IDE3LjQ2NjhWMTYuNjk5MkM2LjUzNDA5IDkuMDI3MzQgNi40NTA3NiA1LjAyMzQ0IDYuMjg0MDkgNC42ODc1QzYuMjUzNzkgNC42MjUgNi4xNzA0NSA0LjU2ODM2IDYuMDM0MDkgNC41MTc1OEM1Ljg5NzczIDQuNDY2OCA1LjcyOTE3IDQuNDIzODMgNS41Mjg0MSA0LjM4ODY3QzUuMzI3NjUgNC4zNTM1MiA1LjE0MDE1IDQuMzI2MTcgNC45NjU5MSA0LjMwNjY0QzQuNzkxNjcgNC4yODcxMSA0LjYwNzk1IDQuMjY5NTMgNC40MTQ3NyA0LjI1MzkxQzQuMjIxNTkgNC4yMzgyOCA0LjEwNjA2IDQuMjI2NTYgNC4wNjgxOCA0LjIxODc1TDQuMDIyNzMgMy4yNDYwOUM0Ljc2NTE1IDMuMjMwNDcgNi4wNTMwMyAzLjE4NTU1IDcuODg2MzYgMy4xMTEzM0M5LjcxOTcgMy4wMzcxMSAxMS4xMzI2IDMgMTIuMTI1IDNDMTIuMjk5MiAzIDEyLjU1NjggMy4wMDE5NSAxMi44OTc3IDMuMDA1ODZDMTMuMjM4NiAzLjAwOTc3IDEzLjQ5NjIgMy4wMTE3MiAxMy42NzA1IDMuMDExNzJDMTQuMjAwOCAzLjAxMTcyIDE0LjcxNzggMy4wNjI1IDE1LjIyMTYgMy4xNjQwNkMxNS43MjU0IDMuMjY1NjIgMTYuMjEyMSAzLjQyOTY5IDE2LjY4MTggMy42NTYyNUMxNy4xNTE1IDMuODgyODEgMTcuNTYwNiA0LjE2MDE2IDE3LjkwOTEgNC40ODgyOEMxOC4yNTc2IDQuODE2NDEgMTguNTM3OSA1LjIyNDYxIDE4Ljc1IDUuNzEyODlDMTguOTYyMSA2LjIwMTE3IDE5LjA2ODIgNi43MzgyOCAxOS4wNjgyIDcuMzI0MjJDMTkuMDY4MiA3LjczMDQ3IDE5LjAwNTcgOC4xMDM1MiAxOC44ODA3IDguNDQzMzZDMTguNzU1NyA4Ljc4MzIgMTguNjA4IDkuMDY0NDUgMTguNDM3NSA5LjI4NzExQzE4LjI2NyA5LjUwOTc3IDE4LjAyMjcgOS43MzQzOCAxNy43MDQ1IDkuOTYwOTRDMTcuMzg2NCAxMC4xODc1IDE3LjEwOTggMTAuMzYzMyAxNi44NzUgMTAuNDg4M0MxNi42NDAyIDEwLjYxMzMgMTYuMzIyIDEwLjc2OTUgMTUuOTIwNSAxMC45NTdDMTcuMDg3MSAxMS4yMzA1IDE4LjA1ODcgMTEuNzUzOSAxOC44MzUyIDEyLjUyNzNDMTkuNjExNyAxMy4zMDA4IDIwIDE0LjI2OTUgMjAgMTUuNDMzNkMyMCAxNi4yMTQ4IDE5Ljg2NzQgMTYuOTE2IDE5LjYwMjMgMTcuNTM3MUMxOS4zMzcxIDE4LjE1ODIgMTguOTgzIDE4LjY2OCAxOC41Mzk4IDE5LjA2NjRDMTguMDk2NiAxOS40NjQ4IDE3LjU3MzkgMTkuNzk4OCAxNi45NzE2IDIwLjA2ODRDMTYuMzY5MyAyMC4zMzc5IDE1Ljc1IDIwLjUyNzMgMTUuMTEzNiAyMC42MzY3QzE0LjQ3NzMgMjAuNzQ2MSAxMy44MTA2IDIwLjgwMDggMTMuMTEzNiAyMC44MDA4QzEyLjc4MDMgMjAuODAwOCAxMi4yODAzIDIwLjc4OTEgMTEuNjEzNiAyMC43NjU2QzEwLjk0NyAyMC43NDIyIDEwLjQ0NyAyMC43MzA1IDEwLjExMzYgMjAuNzMwNUM5LjMxMDYxIDIwLjczMDUgOC4xNDc3MyAyMC43NzM0IDYuNjI1IDIwLjg1OTRDNS4xMDIyNyAyMC45NDUzIDQuMjI3MjcgMjAuOTkyMiA0IDIxWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk02IDIwLjk3NjZMNi4xOTkyMiAxOS45ODA1QzYuMzcxMDkgMTkuOTI1OCA2LjYxMTMzIDE5Ljg2MTMgNi45MTk5MiAxOS43ODcxQzcuMjI4NTIgMTkuNzEyOSA3LjUwOTc3IDE5LjYzODcgNy43NjM2NyAxOS41NjQ1QzguMDE3NTggMTkuNDkwMiA4LjI1IDE5LjM5ODQgOC40NjA5NCAxOS4yODkxQzguNjc5NjkgMTkuMDE1NiA4LjgzOTg0IDE4LjYyMTEgOC45NDE0MSAxOC4xMDU1QzguOTQ5MjIgMTguMDUwOCA5LjE5MTQxIDE2LjkyMTkgOS42Njc5NyAxNC43MTg4QzEwLjE0NDUgMTIuNTE1NiAxMC41ODk4IDEwLjM5MjYgMTEuMDAzOSA4LjM0OTYxQzExLjQxOCA2LjMwNjY0IDExLjYyMTEgNS4xNDg0NCAxMS42MTMzIDQuODc1VjQuNTgyMDNDMTEuNDI1OCA0LjQ4MDQ3IDExLjIxMjkgNC40MDgyIDEwLjk3NDYgNC4zNjUyM0MxMC43MzYzIDQuMzIyMjcgMTAuNDY0OCA0LjI5MTAyIDEwLjE2MDIgNC4yNzE0OEM5Ljg1NTQ3IDQuMjUxOTUgOS42Mjg5MSA0LjIzMDQ3IDkuNDgwNDcgNC4yMDcwM0w5LjcwMzEyIDNDOS45NjA5NCAzLjAxNTYyIDEwLjQyOTcgMy4wNDEwMiAxMS4xMDk0IDMuMDc2MTdDMTEuNzg5MSAzLjExMTMzIDEyLjM3MyAzLjEzODY3IDEyLjg2MTMgMy4xNTgyQzEzLjM0OTYgMy4xNzc3MyAxMy44MjAzIDMuMTg3NSAxNC4yNzM0IDMuMTg3NUMxNC42NDg0IDMuMTg3NSAxNS4wMzMyIDMuMTc3NzMgMTUuNDI3NyAzLjE1ODJDMTUuODIyMyAzLjEzODY3IDE2LjI5NDkgMy4xMTEzMyAxNi44NDU3IDMuMDc2MTdDMTcuMzk2NSAzLjA0MTAyIDE3Ljc4MTIgMy4wMTU2MiAxOCAzQzE3Ljk2MDkgMy4zMDQ2OSAxNy44ODY3IDMuNjUyMzQgMTcuNzc3MyA0LjA0Mjk3QzE3LjU0MyA0LjEyMTA5IDE3LjE0NjUgNC4yMzI0MiAxNi41ODc5IDQuMzc2OTVDMTYuMDI5MyA0LjUyMTQ4IDE1LjYwNTUgNC42NTIzNCAxNS4zMTY0IDQuNzY5NTNDMTUuMjUzOSA0LjkxNzk3IDE1LjE5OTIgNS4wODM5OCAxNS4xNTIzIDUuMjY3NThDMTUuMTA1NSA1LjQ1MTE3IDE1LjA3MDMgNS42MDc0MiAxNS4wNDY5IDUuNzM2MzNDMTUuMDIzNCA1Ljg2NTIzIDE0Ljk5NDEgNi4wNDI5NyAxNC45NTkgNi4yNjk1M0MxNC45MjM4IDYuNDk2MDkgMTQuODk4NCA2LjY2MDE2IDE0Ljg4MjggNi43NjE3MkMxNC42NzE5IDcuOTE3OTcgMTQuMzMwMSA5LjU1NjY0IDEzLjg1NzQgMTEuNjc3N0MxMy4zODQ4IDEzLjc5ODggMTMuMDgyIDE1LjE4NzUgMTIuOTQ5MiAxNS44NDM4QzEyLjkzMzYgMTUuOTE0MSAxMi44ODI4IDE2LjE0MDYgMTIuNzk2OSAxNi41MjM0QzEyLjcxMDkgMTYuOTA2MiAxMi42MzI4IDE3LjI1NzggMTIuNTYyNSAxNy41NzgxQzEyLjQ5MjIgMTcuODk4NCAxMi40Mjk3IDE4LjIyNDYgMTIuMzc1IDE4LjU1NjZDMTIuMzIwMyAxOC44ODg3IDEyLjI5NjkgMTkuMTEzMyAxMi4zMDQ3IDE5LjIzMDVMMTIuMzE2NCAxOS40NDE0QzEyLjQ0OTIgMTkuNDcyNyAxMy4xNzE5IDE5LjU5MzggMTQuNDg0NCAxOS44MDQ3QzE0LjQ2MDkgMjAuMTQ4NCAxNC4zOTg0IDIwLjUzNTIgMTQuMjk2OSAyMC45NjQ4QzE0LjIxMDkgMjAuOTY0OCAxNC4wODQgMjAuOTcwNyAxMy45MTYgMjAuOTgyNEMxMy43NDggMjAuOTk0MSAxMy42MjExIDIxIDEzLjUzNTIgMjFDMTMuMzA4NiAyMSAxMi45Njg4IDIwLjk2MDkgMTIuNTE1NiAyMC44ODI4QzEyLjA2MjUgMjAuODA0NyAxMS43MjY2IDIwLjc2NTYgMTEuNTA3OCAyMC43NjU2QzEwLjQyOTcgMjAuNzUgOS42MjUgMjAuNzQyMiA5LjA5Mzc1IDIwLjc0MjJDOC42OTUzMSAyMC43NDIyIDguMTM2NzIgMjAuNzc3MyA3LjQxNzk3IDIwLjg0NzdDNi42OTkyMiAyMC45MTggNi4yMjY1NiAyMC45NjA5IDYgMjAuOTc2NlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTguMTE3NiAxNS43NjQ3QzE4LjExNzYgMTUuNTAzMyAxOC4wMjYxIDE1LjI4MSAxNy44NDMxIDE1LjA5OEwxNS44MDM5IDEzLjA1ODhDMTUuNjIwOSAxMi44NzU4IDE1LjM5ODcgMTIuNzg0MyAxNS4xMzczIDEyLjc4NDNDMTQuODYyNyAxMi43ODQzIDE0LjYyNzUgMTIuODg4OSAxNC40MzE0IDEzLjA5OEMxNC40NTEgMTMuMTE3NiAxNC41MTMxIDEzLjE3ODEgMTQuNjE3NiAxMy4yNzk0QzE0LjcyMjIgMTMuMzgwNyAxNC43OTI1IDEzLjQ1MSAxNC44Mjg0IDEzLjQ5MDJDMTQuODY0NCAxMy41Mjk0IDE0LjkxMzQgMTMuNTkxNSAxNC45NzU1IDEzLjY3NjVDMTUuMDM3NiAxMy43NjE0IDE1LjA4MDEgMTMuODQ0OCAxNS4xMDI5IDEzLjkyNjVDMTUuMTI1OCAxNC4wMDgyIDE1LjEzNzMgMTQuMDk4IDE1LjEzNzMgMTQuMTk2MUMxNS4xMzczIDE0LjQ1NzUgMTUuMDQ1OCAxNC42Nzk3IDE0Ljg2MjcgMTQuODYyN0MxNC42Nzk3IDE1LjA0NTggMTQuNDU3NSAxNS4xMzczIDE0LjE5NjEgMTUuMTM3M0MxNC4wOTggMTUuMTM3MyAxNC4wMDgyIDE1LjEyNTggMTMuOTI2NSAxNS4xMDI5QzEzLjg0NDggMTUuMDgwMSAxMy43NjE0IDE1LjAzNzYgMTMuNjc2NSAxNC45NzU1QzEzLjU5MTUgMTQuOTEzNCAxMy41Mjk0IDE0Ljg2NDQgMTMuNDkwMiAxNC44Mjg0QzEzLjQ1MSAxNC43OTI1IDEzLjM4MDcgMTQuNzIyMiAxMy4yNzk0IDE0LjYxNzZDMTMuMTc4MSAxNC41MTMxIDEzLjExNzYgMTQuNDUxIDEzLjA5OCAxNC40MzE0QzEyLjg4MjQgMTQuNjM0IDEyLjc3NDUgMTQuODcyNSAxMi43NzQ1IDE1LjE0NzFDMTIuNzc0NSAxNS40MDg1IDEyLjg2NiAxNS42MzA3IDEzLjA0OSAxNS44MTM3TDE1LjA2ODYgMTcuODQzMUMxNS4yNDUxIDE4LjAxOTYgMTUuNDY3MyAxOC4xMDc4IDE1LjczNTMgMTguMTA3OEMxNS45OTY3IDE4LjEwNzggMTYuMjE5IDE4LjAyMjkgMTYuNDAyIDE3Ljg1MjlMMTcuODQzMSAxNi40MjE2QzE4LjAyNjEgMTYuMjM4NiAxOC4xMTc2IDE2LjAxOTYgMTguMTE3NiAxNS43NjQ3Wk0xMS4yMjU1IDguODUyOTRDMTEuMjI1NSA4LjU5MTUgMTEuMTM0IDguMzY5MjggMTAuOTUxIDguMTg2MjdMOC45MzEzNyA2LjE1Njg2QzguNzQ4MzcgNS45NzM4NiA4LjUyNjE0IDUuODgyMzUgOC4yNjQ3MSA1Ljg4MjM1QzguMDA5OCA1Ljg4MjM1IDcuNzg3NTggNS45NzA1OSA3LjU5ODA0IDYuMTQ3MDZMNi4xNTY4NiA3LjU3ODQzQzUuOTczODYgNy43NjE0NCA1Ljg4MjM1IDcuOTgwMzkgNS44ODIzNSA4LjIzNTI5QzUuODgyMzUgOC40OTY3MyA1Ljk3Mzg2IDguNzE4OTUgNi4xNTY4NiA4LjkwMTk2TDguMTk2MDggMTAuOTQxMkM4LjM3MjU1IDExLjExNzYgOC41OTQ3NyAxMS4yMDU5IDguODYyNzUgMTEuMjA1OUM5LjEzNzI2IDExLjIwNTkgOS4zNzI1NSAxMS4xMDQ2IDkuNTY4NjMgMTAuOTAyQzkuNTQ5MDIgMTAuODgyNCA5LjQ4NjkzIDEwLjgyMTkgOS4zODIzNSAxMC43MjA2QzkuMjc3NzggMTAuNjE5MyA5LjIwNzUyIDEwLjU0OSA5LjE3MTU3IDEwLjUwOThDOS4xMzU2MiAxMC40NzA2IDkuMDg2NiAxMC40MDg1IDkuMDI0NTEgMTAuMzIzNUM4Ljk2MjQyIDEwLjIzODYgOC45MTk5MyAxMC4xNTUyIDguODk3MDYgMTAuMDczNUM4Ljg3NDE4IDkuOTkxODMgOC44NjI3NSA5LjkwMTk2IDguODYyNzUgOS44MDM5MkM4Ljg2Mjc1IDkuNTQyNDggOC45NTQyNSA5LjMyMDI2IDkuMTM3MjYgOS4xMzcyNkM5LjMyMDI2IDguOTU0MjUgOS41NDI0OCA4Ljg2Mjc1IDkuODAzOTIgOC44NjI3NUM5LjkwMTk2IDguODYyNzUgOS45OTE4MyA4Ljg3NDE4IDEwLjA3MzUgOC44OTcwNkMxMC4xNTUyIDguOTE5OTMgMTAuMjM4NiA4Ljk2MjQyIDEwLjMyMzUgOS4wMjQ1MUMxMC40MDg1IDkuMDg2NiAxMC40NzA2IDkuMTM1NjIgMTAuNTA5OCA5LjE3MTU3QzEwLjU0OSA5LjIwNzUyIDEwLjYxOTMgOS4yNzc3OCAxMC43MjA2IDkuMzgyMzVDMTAuODIxOSA5LjQ4NjkzIDEwLjg4MjQgOS41NDkwMiAxMC45MDIgOS41Njg2M0MxMS4xMTc2IDkuMzY2MDEgMTEuMjI1NSA5LjEyNzQ1IDExLjIyNTUgOC44NTI5NFpNMjAgMTUuNzY0N0MyMCAxNi41NDkgMTkuNzIyMiAxNy4yMTI0IDE5LjE2NjcgMTcuNzU0OUwxNy43MjU1IDE5LjE4NjNDMTcuMTgzIDE5LjcyODggMTYuNTE5NiAyMCAxNS43MzUzIDIwQzE0Ljk0NDQgMjAgMTQuMjc3OCAxOS43MjIyIDEzLjczNTMgMTkuMTY2N0wxMS43MTU3IDE3LjEzNzNDMTEuMTczMiAxNi41OTQ4IDEwLjkwMiAxNS45MzE0IDEwLjkwMiAxNS4xNDcxQzEwLjkwMiAxNC4zNDMxIDExLjE4OTUgMTMuNjYwMSAxMS43NjQ3IDEzLjA5OEwxMC45MDIgMTIuMjM1M0MxMC4zMzk5IDEyLjgxMDUgOS42NjAxMyAxMy4wOTggOC44NjI3NSAxMy4wOThDOC4wNzg0MyAxMy4wOTggNy40MTE3NiAxMi44MjM1IDYuODYyNzUgMTIuMjc0NUw0LjgyMzUzIDEwLjIzNTNDNC4yNzQ1MSA5LjY4NjI3IDQgOS4wMTk2MSA0IDguMjM1MjlDNCA3LjQ1MDk4IDQuMjc3NzggNi43ODc1OCA0LjgzMzMzIDYuMjQ1MUw2LjI3NDUxIDQuODEzNzNDNi44MTY5OSA0LjI3MTI0IDcuNDgwMzkgNCA4LjI2NDcxIDRDOS4wNTU1NiA0IDkuNzIyMjIgNC4yNzc3OCAxMC4yNjQ3IDQuODMzMzNMMTIuMjg0MyA2Ljg2Mjc1QzEyLjgyNjggNy40MDUyMyAxMy4wOTggOC4wNjg2MyAxMy4wOTggOC44NTI5NEMxMy4wOTggOS42NTY4NiAxMi44MTA1IDEwLjMzOTkgMTIuMjM1MyAxMC45MDJMMTMuMDk4IDExLjc2NDdDMTMuNjYwMSAxMS4xODk1IDE0LjMzOTkgMTAuOTAyIDE1LjEzNzMgMTAuOTAyQzE1LjkyMTYgMTAuOTAyIDE2LjU4ODIgMTEuMTc2NSAxNy4xMzczIDExLjcyNTVMMTkuMTc2NSAxMy43NjQ3QzE5LjcyNTUgMTQuMzEzNyAyMCAxNC45ODA0IDIwIDE1Ljc2NDdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTIxLjc5ODMgMTJDMjEuOTA4NiAxMiAyMS45OTkyIDEyLjAzNTIgMjIuMDcwMSAxMi4xMDU1QzIyLjE0MSAxMi4xNzU4IDIyLjE3NjUgMTIuMjY1NiAyMi4xNzY1IDEyLjM3NVYxMy4xMjVDMjIuMTc2NSAxMy4yMzQ0IDIyLjE0MSAxMy4zMjQyIDIyLjA3MDEgMTMuMzk0NUMyMS45OTkyIDEzLjQ2NDggMjEuOTA4NiAxMy41IDIxLjc5ODMgMTMuNUgxLjM3ODE1QzEuMjY3ODYgMTMuNSAxLjE3NzI2IDEzLjQ2NDggMS4xMDYzNiAxMy4zOTQ1QzEuMDM1NDUgMTMuMzI0MiAxIDEzLjIzNDQgMSAxMy4xMjVWMTIuMzc1QzEgMTIuMjY1NiAxLjAzNTQ1IDEyLjE3NTggMS4xMDYzNiAxMi4xMDU1QzEuMTc3MjYgMTIuMDM1MiAxLjI2Nzg2IDEyIDEuMzc4MTUgMTJIMjEuNzk4M1pNNi43MDc3MiAxMS4yNUM2LjQ4NzEzIDEwLjk3NjYgNi4yODYyNCAxMC42NjQxIDYuMTA1MDQgMTAuMzEyNUM1LjcyNjg5IDkuNTQ2ODggNS41Mzc4MiA4LjgxMjUgNS41Mzc4MiA4LjEwOTM4QzUuNTM3ODIgNi42OTUzMSA2LjA2NTY1IDUuNDg4MjggNy4xMjEzMiA0LjQ4ODI4QzguMTY5MTIgMy40OTYwOSA5LjcxNzE3IDMgMTEuNzY1NSAzQzEyLjE1OTQgMyAxMi44MTcyIDMuMDc0MjIgMTMuNzM5IDMuMjIyNjZDMTQuMjU4OSAzLjMxNjQxIDE0Ljk1NjEgMy41MDM5MSAxNS44MzA2IDMuNzg1MTZDMTUuOTA5NCA0LjA4MjAzIDE1Ljk5MjEgNC41NDI5NyAxNi4wNzg4IDUuMTY3OTdDMTYuMTg5MSA2LjEyODkxIDE2LjI0NDIgNi44NDM3NSAxNi4yNDQyIDcuMzEyNUMxNi4yNDQyIDcuNDUzMTIgMTYuMjI0NSA3LjYyODkxIDE2LjE4NTEgNy44Mzk4NEwxNi4wNDMzIDcuODc1TDE1LjA1MDcgNy44MDQ2OUwxNC44ODUyIDcuNzgxMjVDMTQuNDkxMyA2LjYxNzE5IDE0LjA4NTYgNS44MTY0MSAxMy42NjgxIDUuMzc4OTFDMTIuOTc0OCA0LjY2Nzk3IDEyLjE0NzYgNC4zMTI1IDExLjE4NjQgNC4zMTI1QzEwLjI4ODMgNC4zMTI1IDkuNTcxNDMgNC41NDI5NyA5LjAzNTcxIDUuMDAzOTFDOC41MDc4OCA1LjQ1NzAzIDguMjQzOTYgNi4wMjczNCA4LjI0Mzk2IDYuNzE0ODRDOC4yNDM5NiA3LjI4NTE2IDguNTAzOTQgNy44MzIwMyA5LjAyMzkgOC4zNTU0N0M5LjU0Mzg1IDguODc4OTEgMTAuNjQyOSA5LjM4MjgxIDEyLjMyMDkgOS44NjcxOUMxMi44NjQ1IDEwLjAyMzQgMTMuNTQ2IDEwLjI4MTIgMTQuMzY1MyAxMC42NDA2QzE0LjgyMjIgMTAuODU5NCAxNS4xOTY0IDExLjA2MjUgMTUuNDg3OSAxMS4yNUg2LjcwNzcyWk0xMi42OTkxIDE0LjI1SDE3LjU1NTlDMTcuNjExMSAxNC41NTQ3IDE3LjYzODcgMTQuOTE0MSAxNy42Mzg3IDE1LjMyODFDMTcuNjM4NyAxNi4xOTUzIDE3LjQ3NzIgMTcuMDIzNCAxNy4xNTQxIDE3LjgxMjVDMTYuOTczIDE4LjI1IDE2LjY5MzMgMTguNjU2MiAxNi4zMTUxIDE5LjAzMTJDMTYuMDIzNiAxOS4zMDQ3IDE1LjU5NDMgMTkuNjIxMSAxNS4wMjcgMTkuOTgwNUMxNC4zOTY4IDIwLjM1NTUgMTMuNzk0MSAyMC42MTMzIDEzLjIxOSAyMC43NTM5QzEyLjU4ODggMjAuOTE4IDExLjc4OTEgMjEgMTAuODIwMSAyMUM5LjkyMjAxIDIxIDkuMTUzODkgMjAuOTEwMiA4LjUxNTc2IDIwLjczMDVMNi44NjEzNCAyMC4yNjE3QzYuNDEyMjkgMjAuMTM2NyA2LjEyODY4IDIwLjAyNzMgNi4wMTA1IDE5LjkzMzZDNS45NDc0OCAxOS44NzExIDUuOTE1OTcgMTkuNzg1MiA1LjkxNTk3IDE5LjY3NThWMTkuNTIzNEM1LjkxNTk3IDE4LjY3OTcgNS45MDgwOSAxOC4wNzAzIDUuODkyMzMgMTcuNjk1M0M1Ljg4NDQ1IDE3LjQ2MDkgNS44ODQ0NSAxNy4xOTUzIDUuODkyMzMgMTYuODk4NEw1LjkxNTk3IDE2LjQ2NDhWMTUuOTQ5Mkw3LjEyMTMyIDE1LjkyNThDNy4yMzk1IDE2LjE5MTQgNy4zNTc2NyAxNi40Njg4IDcuNDc1ODQgMTYuNzU3OEM3LjU5NDAxIDE3LjA0NjkgNy42ODI2NCAxNy4yNjU2IDcuNzQxNzMgMTcuNDE0MUM3LjgwMDgxIDE3LjU2MjUgNy44NTAwNSAxNy42NjggNy44ODk0NCAxNy43MzA1QzguMTY1MTggMTguMTc1OCA4LjQ4MDMgMTguNTQzIDguODM0ODIgMTguODMyQzkuMTczNTggMTkuMTEzMyA5LjU4NzE4IDE5LjMzNTkgMTAuMDc1NiAxOS41QzEwLjU0MDQgMTkuNjcxOSAxMS4wNjA0IDE5Ljc1NzggMTEuNjM1NSAxOS43NTc4QzEyLjEzOTcgMTkuNzU3OCAxMi42ODcyIDE5LjY1MjMgMTMuMjc4MSAxOS40NDE0QzEzLjg4NDcgMTkuMjM4MyAxNC4zNjUzIDE4LjkwMjMgMTQuNzE5OCAxOC40MzM2QzE1LjA5MDEgMTcuOTU3IDE1LjI3NTIgMTcuNDUzMSAxNS4yNzUyIDE2LjkyMTlDMTUuMjc1MiAxNi4yNjU2IDE0Ljk1NjEgMTUuNjUyMyAxNC4zMTggMTUuMDgyQzE0LjA1MDIgMTQuODU1NSAxMy41MTA1IDE0LjU3ODEgMTIuNjk5MSAxNC4yNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNyA0LjU1NTU2QzcgNC40MDUwOSA3LjA1NTY2IDQuMjc0ODkgNy4xNjY5OSA0LjE2NDkzQzcuMjc4MzIgNC4wNTQ5OCA3LjQxMDE2IDQgNy41NjI1IDRMMTUuNDM3NSA0QzE1LjU4OTggNCAxNS43MjE3IDQuMDU0OTggMTUuODMzIDQuMTY0OTNDMTUuOTQ0MyA0LjI3NDg4IDE2IDQuNDA1MDkgMTYgNC41NTU1NkMxNiA0LjcwNjAyIDE1Ljk0NDMgNC44MzYyMyAxNS44MzMgNC45NDYxOEwxMS44OTU1IDguODM1MDdDMTEuNzg0MiA4Ljk0NTAyIDExLjY1MjMgOSAxMS41IDlDMTEuMzQ3NyA5IDExLjIxNTggOC45NDUwMiAxMS4xMDQ1IDguODM1MDdMNy4xNjY5OSA0Ljk0NjE4QzcuMDU1NjYgNC44MzYyMyA3IDQuNzA2MDIgNyA0LjU1NTU2WlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNC4zOTU1IDIxSDkuNDM0NTdWMTkuOTI1OEwxMS43MTk3IDE3LjUyMzRDMTIuMjgyOSAxNi44ODIyIDEyLjU2NDUgMTYuMzcyNyAxMi41NjQ1IDE1Ljk5NTFDMTIuNTY0NSAxNS42ODkxIDEyLjQ5NzcgMTUuNDU2NCAxMi4zNjQzIDE1LjI5NjlDMTIuMjMwOCAxNS4xMzc0IDEyLjAzNzEgMTUuMDU3NiAxMS43ODMyIDE1LjA1NzZDMTEuNTMyNiAxNS4wNTc2IDExLjMyOTEgMTUuMTY1IDExLjE3MjkgMTUuMzc5OUMxMS4wMTY2IDE1LjU5MTUgMTAuOTM4NSAxNS44NTY4IDEwLjkzODUgMTYuMTc1OEg5LjI4ODA5QzkuMjg4MDkgMTUuNzM5NiA5LjM5NzE0IDE1LjMzNzYgOS42MTUyMyAxNC45Njk3QzkuODMzMzMgMTQuNTk4NiAxMC4xMzYxIDE0LjMwODkgMTAuNTIzNCAxNC4xMDA2QzEwLjkxMDggMTMuODkyMyAxMS4zNDM4IDEzLjc4ODEgMTEuODIyMyAxMy43ODgxQzEyLjU5MDUgMTMuNzg4MSAxMy4xODEzIDEzLjk2NTUgMTMuNTk0NyAxNC4zMjAzQzE0LjAxMTQgMTQuNjc1MSAxNC4yMTk3IDE1LjE4NDYgMTQuMjE5NyAxNS44NDg2QzE0LjIxOTcgMTYuMTI4NiAxNC4xNjc2IDE2LjQwMiAxNC4wNjM1IDE2LjY2ODlDMTMuOTU5MyAxNi45MzI2IDEzLjc5NjUgMTcuMjEwOSAxMy41NzUyIDE3LjUwMzlDMTMuMzU3MSAxNy43OTM2IDEzLjAwMzkgMTguMTgyNiAxMi41MTU2IDE4LjY3MDlMMTEuNTk3NyAxOS43MzA1SDE0LjM5NTVWMjFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjY0OTMgNC4xODc1VjQuODczMDVDMTAuNjQ5MyA0LjkyMzgzIDEwLjYyODQgNC45NjY4IDEwLjU4NjcgNS4wMDE5NUMxMC41NDQ5IDUuMDM3MTEgMTAuNDk1NSA1LjA1NDY5IDEwLjQzODQgNS4wNTQ2OUg4LjQ3Mzk2VjkuODEyNUM4LjQ3Mzk2IDkuODYzMjggOC40NTQxOSA5LjkwNzIzIDguNDE0NjMgOS45NDQzNEM4LjM3NTA4IDkuOTgxNDUgOC4zMjY3NCAxMCA4LjI2OTYxIDEwSDcuMzc5N0M3LjMyMjU3IDEwIDcuMjczMTMgOS45ODI0MiA3LjIzMTM4IDkuOTQ3MjdDNy4xODk2MyA5LjkxMjExIDcuMTY4NzUgOS44NjcxOSA3LjE2ODc1IDkuODEyNVY1LjA1NDY5SDUuMjEwOTRDNS4xNTM4MSA1LjA1NDY5IDUuMTA0MzcgNS4wMzcxMSA1LjA2MjYyIDUuMDAxOTVDNS4wMjA4NyA0Ljk2NjggNSA0LjkyMzgzIDUgNC44NzMwNVY0LjE4NzVDNSA0LjEzMjgxIDUuMDE5NzggNC4wODc4OSA1LjA1OTMzIDQuMDUyNzNDNS4wOTg4OCA0LjAxNzU4IDUuMTQ5NDIgNCA1LjIxMDk0IDRIMTAuNDM4NEMxMC40OTU1IDQgMTAuNTQ0OSA0LjAxODU1IDEwLjU4NjcgNC4wNTU2NkMxMC42Mjg0IDQuMDkyNzcgMTAuNjQ5MyA0LjEzNjcyIDEwLjY0OTMgNC4xODc1Wk0xNy40OTE4IDQuMTY5OTJMMTcuOTk5MyA5LjgwMDc4QzE4LjAwMzcgOS44NTE1NiAxNy45ODYyIDkuODk4NDQgMTcuOTQ2NiA5Ljk0MTQxQzE3LjkwMjcgOS45ODA0NyAxNy44NTIxIDEwIDE3Ljc5NSAxMEgxNi45MTE3QzE2Ljg1ODkgMTAgMTYuODEyOCA5Ljk4MzQgMTYuNzczMiA5Ljk1MDJDMTYuNzMzNyA5LjkxNjk5IDE2LjcxMTcgOS44NzY5NSAxNi43MDczIDkuODMwMDhMMTYuNDA0MSA2LjM4NDc3TDE1LjE1ODIgOC44NzVDMTUuMTIzIDguOTQ5MjIgMTUuMDU5MyA4Ljk4NjMzIDE0Ljk2NyA4Ljk4NjMzSDE0LjE3NkMxNC4wODgxIDguOTg2MzMgMTQuMDI0NCA4Ljk0OTIyIDEzLjk4NDggOC44NzVMMTIuNzQ1NiA2LjM3MzA1TDEyLjQ0ODkgOS44MzAwOEMxMi40NDQ1IDkuODc2OTUgMTIuNDIyNSA5LjkxNjk5IDEyLjM4MyA5Ljk1MDJDMTIuMzQzNCA5Ljk4MzQgMTIuMjk3MyAxMCAxMi4yNDQ2IDEwSDExLjM1NDZDMTEuMjk3NSAxMCAxMS4yNDcgOS45ODA0NyAxMS4yMDMgOS45NDE0MUMxMS4xNjM1IDkuOTAyMzQgMTEuMTQzNyA5Ljg1NTQ3IDExLjE0MzcgOS44MDA3OEwxMS42NTc5IDQuMTY5OTJDMTEuNjYyMyA0LjEyMzA1IDExLjY4NDIgNC4wODMwMSAxMS43MjM4IDQuMDQ5OEMxMS43NjMzIDQuMDE2NiAxMS44MDk1IDQgMTEuODYyMiA0SDEyLjc5ODNDMTIuODg2MiA0IDEyLjk0OTkgNC4wMzcxMSAxMi45ODk1IDQuMTExMzNMMTQuNDM5NyA3LjE1ODJDMTQuNDgzNiA3LjI1MTk1IDE0LjUyNzYgNy4zNTE1NiAxNC41NzE1IDcuNDU3MDNDMTQuNTg0NyA3LjQyOTY5IDE0LjYwNTYgNy4zODE4NCAxNC42MzQxIDcuMzEzNDhDMTQuNjYyNyA3LjI0NTEyIDE0LjY4NTggNy4xOTMzNiAxNC43MDM0IDcuMTU4MkwxNi4xNjAyIDQuMTExMzNDMTYuMTk5NyA0LjAzNzExIDE2LjI2MzUgNCAxNi4zNTE0IDRIMTcuMjgwOEMxNy4zMzc5IDQgMTcuMzg2MyA0LjAxNjYgMTcuNDI1OCA0LjA0OThDMTcuNDY1NCA0LjA4MzAxIDE3LjQ4NzQgNC4xMjMwNSAxNy40OTE4IDQuMTY5OTJaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE2IDIwLjQ0NDRDMTYgMjAuNTk0OSAxNS45NDQzIDIwLjcyNTEgMTUuODMzIDIwLjgzNTFDMTUuNzIxNyAyMC45NDUgMTUuNTg5OCAyMSAxNS40Mzc1IDIxSDcuNTYyNUM3LjQxMDE2IDIxIDcuMjc4MzIgMjAuOTQ1IDcuMTY2OTkgMjAuODM1MUM3LjA1NTY2IDIwLjcyNTEgNyAyMC41OTQ5IDcgMjAuNDQ0NEM3IDIwLjI5NCA3LjA1NTY2IDIwLjE2MzggNy4xNjY5OSAyMC4wNTM4TDExLjEwNDUgMTYuMTY0OUMxMS4yMTU4IDE2LjA1NSAxMS4zNDc3IDE2IDExLjUgMTZDMTEuNjUyMyAxNiAxMS43ODQyIDE2LjA1NSAxMS44OTU1IDE2LjE2NDlMMTUuODMzIDIwLjA1MzhDMTUuOTQ0MyAyMC4xNjM4IDE2IDIwLjI5NCAxNiAyMC40NDQ0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zLjU2MjUgNC4xMTMyOEMzLjI3MzQ0IDQuMDk3NjYgMy4wOTc2NiA0LjA4MjAzIDMuMDM1MTYgNC4wNjY0MUwzIDMuMDM1MTZDMy4xMDE1NiAzLjAyNzM0IDMuMjU3ODEgMy4wMjM0NCAzLjQ2ODc1IDMuMDIzNDRDMy45Mzc1IDMuMDIzNDQgNC4zNzUgMy4wMzkwNiA0Ljc4MTI1IDMuMDcwMzFDNS44MTI1IDMuMTI1IDYuNDYwOTQgMy4xNTIzNCA2LjcyNjU2IDMuMTUyMzRDNy4zOTg0NCAzLjE1MjM0IDguMDU0NjkgMy4xNDA2MiA4LjY5NTMxIDMuMTE3MTlDOS42MDE1NiAzLjA4NTk0IDEwLjE3MTkgMy4wNjY0MSAxMC40MDYyIDMuMDU4NTlDMTAuODQzOCAzLjA1ODU5IDExLjE3OTcgMy4wNTA3OCAxMS40MTQxIDMuMDM1MTZMMTEuNDAyMyAzLjE5OTIyTDExLjQyNTggMy45NDkyMlY0LjA1NDY5QzEwLjk1NyA0LjEyNSAxMC40NzI3IDQuMTYwMTYgOS45NzI2NiA0LjE2MDE2QzkuNTAzOTEgNC4xNjAxNiA5LjE5NTMxIDQuMjU3ODEgOS4wNDY4OCA0LjQ1MzEyQzguOTQ1MzEgNC41NjI1IDguODk0NTMgNS4wNzgxMiA4Ljg5NDUzIDZDOC44OTQ1MyA2LjEwMTU2IDguODk2NDggNi4yMjg1MiA4LjkwMDM5IDYuMzgwODZDOC45MDQzIDYuNTMzMiA4LjkwNjI1IDYuNjMyODEgOC45MDYyNSA2LjY3OTY5TDguOTE3OTcgOS4zNjMyOEw5LjA4MjAzIDEyLjY0NDVDOS4xMjg5MSAxMy42MTMzIDkuMzI4MTIgMTQuNDAyMyA5LjY3OTY5IDE1LjAxMTdDOS45NTMxMiAxNS40NzI3IDEwLjMyODEgMTUuODMyIDEwLjgwNDcgMTYuMDg5OEMxMS40OTIyIDE2LjQ1NyAxMi4xODM2IDE2LjY0MDYgMTIuODc4OSAxNi42NDA2QzEzLjY5MTQgMTYuNjQwNiAxNC40Mzc1IDE2LjUzMTIgMTUuMTE3MiAxNi4zMTI1QzE1LjU1NDcgMTYuMTcxOSAxNS45NDE0IDE1Ljk3MjcgMTYuMjc3MyAxNS43MTQ4QzE2LjY1MjMgMTUuNDMzNiAxNi45MDYyIDE1LjE4MzYgMTcuMDM5MSAxNC45NjQ4QzE3LjMyMDMgMTQuNTI3MyAxNy41MjczIDE0LjA4MiAxNy42NjAyIDEzLjYyODlDMTcuODI0MiAxMy4wNTg2IDE3LjkwNjIgMTIuMTY0MSAxNy45MDYyIDEwLjk0NTNDMTcuOTA2MiAxMC4zMjgxIDE3Ljg5MjYgOS44MjgxMiAxNy44NjUyIDkuNDQ1MzFDMTcuODM3OSA5LjA2MjUgMTcuNzk0OSA4LjU4Mzk4IDE3LjczNjMgOC4wMDk3N0MxNy42Nzc3IDcuNDM1NTUgMTcuNjI1IDYuODEyNSAxNy41NzgxIDYuMTQwNjJMMTcuNTMxMiA1LjQ0OTIyQzE3LjQ5MjIgNC45MjU3OCAxNy4zOTg0IDQuNTgyMDMgMTcuMjUgNC40MTc5N0MxNi45ODQ0IDQuMTQ0NTMgMTYuNjgzNiA0LjAxMTcyIDE2LjM0NzcgNC4wMTk1M0wxNS4xNzU4IDQuMDQyOTdMMTUuMDExNyA0LjAwNzgxTDE1LjAzNTIgM0gxNi4wMTk1TDE4LjQyMTkgMy4xMTcxOUMxOS4wMTU2IDMuMTQwNjIgMTkuNzgxMiAzLjEwMTU2IDIwLjcxODggM0wyMC45Mjk3IDMuMDIzNDRDMjAuOTc2NiAzLjMyMDMxIDIxIDMuNTE5NTMgMjEgMy42MjEwOUMyMSAzLjY3NTc4IDIwLjk4NDQgMy43OTY4OCAyMC45NTMxIDMuOTg0MzhDMjAuNjAxNiA0LjA3ODEyIDIwLjI3MzQgNC4xMjg5MSAxOS45Njg4IDQuMTM2NzJDMTkuMzk4NCA0LjIyMjY2IDE5LjA4OTggNC4yODkwNiAxOS4wNDMgNC4zMzU5NEMxOC45MjU4IDQuNDUzMTIgMTguODY3MiA0LjYxMzI4IDE4Ljg2NzIgNC44MTY0MUMxOC44NjcyIDQuODcxMDkgMTguODczIDQuOTc2NTYgMTguODg0OCA1LjEzMjgxQzE4Ljg5NjUgNS4yODkwNiAxOC45MDIzIDUuNDEwMTYgMTguOTAyMyA1LjQ5NjA5QzE4Ljk2NDggNS42NDQ1MyAxOS4wNTA4IDcuMTkxNDEgMTkuMTYwMiAxMC4xMzY3QzE5LjIwNyAxMS42NjAyIDE5LjE0ODQgMTIuODQ3NyAxOC45ODQ0IDEzLjY5OTJDMTguODY3MiAxNC4yOTMgMTguNzA3IDE0Ljc2OTUgMTguNTAzOSAxNS4xMjg5QzE4LjIwNyAxNS42MzY3IDE3Ljc2OTUgMTYuMTE3MiAxNy4xOTE0IDE2LjU3MDNDMTYuNjA1NSAxNy4wMTU2IDE1Ljg5NDUgMTcuMzYzMyAxNS4wNTg2IDE3LjYxMzNDMTQuMjA3IDE3Ljg3MTEgMTMuMjEwOSAxOCAxMi4wNzAzIDE4QzEwLjc2NTYgMTggOS42NTYyNSAxNy44MjAzIDguNzQyMTkgMTcuNDYwOUM3LjgxMjUgMTcuMDkzOCA3LjExMzI4IDE2LjYxNzIgNi42NDQ1MyAxNi4wMzEyQzYuMTY3OTcgMTUuNDM3NSA1Ljg0Mzc1IDE0LjY3NTggNS42NzE4OCAxMy43NDYxQzUuNTQ2ODggMTMuMTIxMSA1LjQ4NDM4IDEyLjE5NTMgNS40ODQzOCAxMC45Njg4VjcuMDY2NDFDNS40ODQzOCA1LjU5NzY2IDUuNDE3OTcgNC43NjU2MiA1LjI4NTE2IDQuNTcwMzFDNS4wODk4NCA0LjI4OTA2IDQuNTE1NjIgNC4xMzY3MiAzLjU2MjUgNC4xMTMyOFpNMjEgMjAuNjI1VjE5Ljg3NUMyMSAxOS43NjU2IDIwLjk2NDggMTkuNjc1OCAyMC44OTQ1IDE5LjYwNTVDMjAuODI0MiAxOS41MzUyIDIwLjczNDQgMTkuNSAyMC42MjUgMTkuNUgzLjM3NUMzLjI2NTYyIDE5LjUgMy4xNzU3OCAxOS41MzUyIDMuMTA1NDcgMTkuNjA1NUMzLjAzNTE2IDE5LjY3NTggMyAxOS43NjU2IDMgMTkuODc1VjIwLjYyNUMzIDIwLjczNDQgMy4wMzUxNiAyMC44MjQyIDMuMTA1NDcgMjAuODk0NUMzLjE3NTc4IDIwLjk2NDggMy4yNjU2MiAyMSAzLjM3NSAyMUgyMC42MjVDMjAuNzM0NCAyMSAyMC44MjQyIDIwLjk2NDggMjAuODk0NSAyMC44OTQ1QzIwLjk2NDggMjAuODI0MiAyMSAyMC43MzQ0IDIxIDIwLjYyNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDBWMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTUgOHY4SDVWOGgxMG0xLTJINGMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMXYtMy41bDQgNHYtMTFsLTQgNFY3YzAtLjU1LS40NS0xLTEtMXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL3VpXCJcblxuZXhwb3J0IHZhciB0ZW1wbGF0ZXMgPSB7fVxuXG50ZW1wbGF0ZXMuZm9ybVJvdyA9IGZ1bmN0aW9uIChlbGVtZW50c19hcnJheSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWxlbWVudHNfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjhweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09IFwiTEFCRUxcIiAmJiBpICE9IDApIHtcbiAgICAgICAgICAgIGUuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVUkuQ29sb3Vycy5wYWxlO1xuICAgIHRieC5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0Ynguc3R5bGUuZm9udFNpemUgPSBcIi44ZW1cIlxuICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGJ4LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuICAgIC8vdGJ4LnN0eWxlLmJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSg2MiwyMTcsMjI3LDAuNSkgMTAwJSlcIiAgOyBcblxuICAgIGJsb2NrLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YngpOyAvL2FkZCB0byBlZGl0b3JfaXRlbSwgIW5vdCEgYmxvY2sgY29udGVudCBjb250YWluZXJcbiAgICBibG9jay5hZGRUb1Rvb2xiYXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsLnRhZ05hbWUgPT0gXCJMQUJFTFwiKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGJ4LmFwcGVuZENoaWxkKGVsKVxuICAgIH1cbn1cblxudGVtcGxhdGVzLnR3b1BhbmVscyA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIC8vbGV0IG1vZGUgPSBcInByZXZpZXdcIjtcbiAgICBsZXQgcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBwLmNsYXNzTGlzdC5hZGQoXCJibG9ja19wcmV2aWV3X3BhbmVsXCIpO1xuICAgIHBwLmNsYXNzTGlzdC5hZGQoXCJvbmVfb2ZfdHdvX3BhbmVsc1wiKTtcbiAgICBwcC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBwcC5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBwcC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgbGV0IGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdF9wYW5lbFwiKTtcbiAgICBlcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgZXAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgLy9lcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGVwLnN0eWxlLmJvcmRlclRvcCA9IFwiMnB4IHNvbGlkIFwiICsgVUkubXljeWFuO1xuICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlcC5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICAvL1xuICAgIGxldCBlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlYnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0X2J1dHRvblwiKTtcbiAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuICAgIGVidG4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZWJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNpbHZlclwiO1xuICAgIGVidG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDRweFwiO1xuICAgIGVidG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbiAgICBlYnRuLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgZWJ0bi5zdHlsZS5yaWdodCA9IFwiOHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5ib3R0b20gPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICBlYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBlZGl0bW9kZSA9IGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCI7XG4gICAgICAgIGlmIChlZGl0bW9kZSkge1xuICAgICAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiUFJFVklFV1wiO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAvL1xuICAgIHBwLmFwcGVuZENoaWxkKGVidG4pO1xuICAgIC8vXG4gICAgY29uc29sZS5sb2coYmxvY2spXG4gICAgYmxvY2suZWxlbWVudC5hcHBlbmRDaGlsZChwcCk7XG4gICAgYmxvY2suZWxlbWVudC5hcHBlbmRDaGlsZChlcCk7XG4gICAgLy9cbiAgICBibG9jay5hZGRUb1ByZXZpZXcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBwcC5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGJsb2NrLmFkZFRvRWRpdG9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBibG9jay5nb0VkaXRNb2RlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcblxuICAgIH1cbiAgICBibG9jay5nb1ByZXZpZXdNb2RlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuXG4gICAgfVxuICAgIGJsb2NrLmlzSW5FZGl0TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiKTtcbiAgICB9XG5cbn0iLCIvKlxuaW1wb3J0IHtcbiAgICBjc3MsXG4gICAgY3hcbn0gZnJvbSAnZW1vdGlvbic7XG4qL1xuXG5cbmV4cG9ydCB2YXIgaWNvbnMgPSB7fTtcblxuaWNvbnMuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2JvbGQuc3ZnXCIpO1xuaWNvbnMuaXRhbGljID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfaXRhbGljLnN2Z1wiKTtcbmljb25zLnVuZGVybGluZSA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3VuZGVybGluZS5zdmdcIik7XG5pY29ucy5zdHJpa2UgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdHJpa2Uuc3ZnXCIpO1xuaWNvbnMuc3VwID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3VwLnN2Z1wiKTtcbmljb25zLnN1YiA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1Yi5zdmdcIik7XG5pY29ucy5saW5rID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfbGluay5zdmdcIik7XG5cbmljb25zLmhlYWRlciA9IHJlcXVpcmUoXCIuL3N2Zy9oZWFkZXItMjRweC5zdmdcIik7XG5pY29ucy5jb2RlID0gcmVxdWlyZShcIi4vc3ZnL2NvZGUtbXktMjRweC5zdmdcIik7XG5pY29ucy5yYXcgPSByZXF1aXJlKFwiLi9zdmcvY29kZS0yNHB4LnN2Z1wiKTtcbmljb25zLm5vZm9ybWF0ID0gcmVxdWlyZShcIi4vc3ZnL3JlbW92ZS1mb3JtYXQuc3ZnXCIpO1xuXG5pY29ucy51cCA9IHJlcXVpcmUoXCIuL3N2Zy9hcnJvd191cHdhcmQtMjRweC5zdmdcIik7XG5pY29ucy5kb3duID0gcmVxdWlyZShcIi4vc3ZnL2Fycm93X2Rvd253YXJkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZGVsID0gcmVxdWlyZShcIi4vc3ZnL2NsZWFyLTI0cHguc3ZnXCIpO1xuaWNvbnMuYWRkID0gcmVxdWlyZShcIi4vc3ZnL2FkZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRpdmlkZXIgPSByZXF1aXJlKFwiLi9zdmcvZGl2aWRlci0yNHB4LnN2Z1wiKTtcbmljb25zLnN5bWJvbHMgPSByZXF1aXJlKFwiLi9zdmcvc3ltYm9sc18yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwgPSB7fTtcblxuaWNvbnMubWF0ZXJpYWwuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfYm9sZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLml0YWxpYyA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfaXRhbGljLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwudW5kZXJsaW5lID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF91bmRlcmxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuc3RyaWtlID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9zdHJpa2V0aHJvdWdoLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGluayA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlua29mZiA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rX29mZi0yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlzdCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnZpZGVvID0gcmVxdWlyZShcIi4vc3ZnL3ZpZGVvY2FtLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuaW1hZ2UgPSByZXF1aXJlKFwiLi9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucGFyYWdyYXBoID0gcmVxdWlyZShcIi4vc3ZnL3BhcmFncmFwaC1yZW1peC0yNHB4LnN2Z1wiKTtcblxuXG5cbmV4cG9ydCB2YXIgbXljeWFuID0gXCIjM0VEOUUzXCI7IC8vcmVtb3ZlXG5leHBvcnQgdmFyIENvbG91cnMgPSB7XG4gICAgXCJsaWdodFwiOiBcIiMzRUQ5RTNcIixcbiAgICBcImRhcmtcIjogXCIjMDBBMUFCXCIsXG4gICAgXCJwYWxlXCI6IFwiI0M0RjdGQVwiLFxuXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQXNrKHByKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHIgPSBwcm9tcHQocHIpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgcmVzb2x2ZShyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KFwiTm8gaW5wdXRcIilcbiAgICAgICAgfTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImVuZ2FnaW5nIHRvb2x0aXBzXCIpO1xuICAgIGxldCB0ZXN0c3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgdGVzdHN0eWxlLmlkID0gXCJ0ZXN0X3N0eWxlXCI7XG4gICAgdGVzdHN0eWxlLmlubmVySFRNTCA9IGAuZWRpdG9ydG9vbHRpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgQ29sb3Vycy5kYXJrfTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIH1gXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZXN0c3R5bGUpO1xuXG4gICAgbGV0IHR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHQuc3R5bGUuekluZGV4ID0gMjA7XG4gICAgdHQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gICAgbGV0IHR0aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdHRpbi5jbGFzc0xpc3QuYWRkKFwiZWRpdG9ydG9vbHRpcFwiKVxuICAgIHR0LmFwcGVuZENoaWxkKHR0aW4pO1xuICAgIC8vdHRpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBDb2xvdXJzLmRhcms7XG4gICAgLy90dGluLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHR0aW4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHR0aW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcbiAgICAvL3R0aW4uc3R5bGUucGFkZGluZyA9IFwiNHB4IDhweFwiO1xuICAgIHR0aW4uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjJweFwiO1xuICAgIHR0aW4uc3R5bGUuYm94U2hhZG93ID0gXCIxcHggMXB4IDNweCAycHggIzAwMDAwMDIyXCI7XG4gICAgdHRpbi5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3R0b20gPSBcIjE2cHhcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHQpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHR0YiA9IHR0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgdHQuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIHR0YiArIHdpbmRvdy5zY3JvbGxZKSArIFwicHhcIjtcbiAgICAgICAgdHQuc3R5bGUubGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcblxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmRhdGFzZXQuaGludCkge1xuICAgICAgICAgICAgdHRpbi5pbm5lckhUTUwgPSBlLnRhcmdldC5kYXRhc2V0LmhpbnQ7XG4gICAgICAgICAgICAvLyB0dC5zdHlsZS50b3AgPSBlLmNsaWVudFkgKyBcInB4XCI7XG4gICAgICAgICAgICAvLyAgdHQuc3R5bGUubGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRTeW1ib2wocG9zWCwgcG9zWSkge1xuICAgIGNvbnNvbGUubG9nKFwicG9zaXRpb25cIiwgcG9zWCwgcG9zWSlcbiAgICBjb25zdCBzeW1ib2xzID0gXCLCq8K74oCc4oCd4oCT4oCUwrfCttGi0aPCpOKCveKCrMKjw5fiiYhcIi5zcGxpdChcIlwiKTtcblxuICAgIC8vY3JlYXRlIHRhYmxlXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICBsZXQgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tfZWRpdG9yX3N5bWJvbHNfdGFibGVcIik7XG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgcmVqKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN5bWJvbHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3ltYm9sdGFibGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9zeW1ib2xzX3RhYmxlXCIpXG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUuZmxleFdyYXAgPSBcIndyYXBcIjtcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLndpZHRoID0gXCI5NnB4XCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLmJveFNpemluZyA9IFwiY29udGVudC1ib3hcIlxuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5ib3JkZXJUb3AgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICBzeW1ib2x0YWJsZS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLnRvcCA9IHBvc1kgKyBcInB4XCI7XG4gICAgICAgIHN5bWJvbHRhYmxlLnN0eWxlLmxlZnQgPSBwb3NYICsgXCJweFwiO1xuICAgICAgICAvL3BvcHVsYXRlXG4gICAgICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAoeikge1xuICAgICAgICAgICAgbGV0IHNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNiLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgc2IuY2xhc3NMaXN0LmFkZChcInN5bWJvbF90YWJsZV9jZWxsX2J1dHRvblwiKTtcbiAgICAgICAgICAgIHNiLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIilcbiAgICAgICAgICAgIHNiLnN0eWxlLndpZHRoID0gXCIyNHB4XCI7XG4gICAgICAgICAgICBzYi5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICAgICAgICAgIHNiLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBzYi5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICAgICAgc2Iuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICAgICAgc2Iuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgICAgICBzYi5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIlxuICAgICAgICAgICAgc2IuaW5uZXJUZXh0ID0gejtcbiAgICAgICAgICAgIHNiLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgc2Iuc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcbiAgICAgICAgICAgIHNiLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjIzcHhcIjtcbiAgICAgICAgICAgIHNiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiAsIGZ1bmN0aW9uKCl7dGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBDb2xvdXJzLmxpZ2h0fSlcbiAgICAgICAgICAgIHNiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiICwgZnVuY3Rpb24oKXt0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIn0pXG4gICAgICAgICAgICBzYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coeik7XG4gICAgICAgICAgICAgICAgc3ltYm9sdGFibGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmVzKHopO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHN5bWJvbHRhYmxlLmFwcGVuZENoaWxkKHNiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gICBcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ltYm9sdGFibGUpOyAgXG4gICAgICAgIGlmKHBvc1k+c3ltYm9sdGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KXtcbiAgICAgICAgc3ltYm9sdGFibGUuc3R5bGUudG9wID0gKHBvc1kgLSBzeW1ib2x0YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSA4KSArIFwicHhcIiA7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiICwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZihlLnRhcmdldCAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ltYm9sX3RhYmxlX2NlbGxfYnV0dG9uXCIpKXtcbiAgICAgICAgICAgICAgICBzeW1ib2x0YWJsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgICAgICAgIFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFRvb2xzKCkge1xuICAgIGxldCBjdXJyZW50X2VsZW1lbnQgPSBudWxsO1xuICAgIGxldCB0dG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0b29scy5zdHlsZS5taW5XaWR0aCA9IFwiMTAwcHhcIjtcbiAgICB0dG9vbHMuY2xhc3NMaXN0LmFkZChcInRleHRfdG9vbGJveFwiKTtcbiAgICAvL3R0b29scy5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0dG9vbHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQ29sb3Vycy5kYXJrO1xuICAgIHR0b29scy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHR0b29scy5zdHlsZS5wYWRkaW5nID0gXCIwcHggOHB4XCI7XG4gICAgY29uc29sZS5sb2coXCJhcHBlbmQgdGV4dCB0b29sc1wiKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHRvb2xzKTtcbiAgICAvL2J1dHRvbnNcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24obGJsLCBmdW5jLCBoaW50KSB7XG4gICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgYi5pbm5lckhUTUwgPSBsYmw7XG4gICAgICAgIGIuc3R5bGUud2lkdGggPSBcIjE4cHhcIjtcbiAgICAgICAgYi5zdHlsZS5oZWlnaHQgPSBcIjE4cHhcIjtcbiAgICAgICAgYi5zdHlsZS5maWxsID0gXCJ3aGl0ZVwiO1xuICAgICAgICBiLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmMpO1xuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgICAgIGIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIGIuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgICAgIGIub25tb3VzZW92ZXIgPSAoKSA9PiBiLnN0eWxlLmZpbGwgPSBcImJsYWNrXCI7XG4gICAgICAgIGIub25tb3VzZW91dCA9ICgpID0+IGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgbGV0IHN2ID0gYi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBzdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7IC8vLnN0eWxlLnBvaW50ZXJFdmVudHMoXCJub25lXCIpO1xuICAgICAgICBpZiAoaGludCkge1xuICAgICAgICAgICAgYi5kYXRhc2V0LmhpbnQgPSBoaW50XG4gICAgICAgIH07XG4gICAgICAgIHR0b29scy5hcHBlbmRDaGlsZChiKTtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwuYm9sZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJvbGRcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiQm9sZFwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5tYXRlcmlhbC5pdGFsaWMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJJdGFsaWNcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwudW5kZXJsaW5lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlVuZGVybGluZVwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5tYXRlcmlhbC5zdHJpa2UsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN0cmlrZVwiKVxuICAgIC8qXG4gICAgYWRkQnV0dG9uKFwic21hbGxcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWNyZWFzZUZvbnRTaXplXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICAqL1xuICAgIGFkZEJ1dHRvbihpY29ucy5zdXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3VwZXJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3ViLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdWJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwubGluaywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgQXNrKFwiRW50ZXIgVVJMXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiLCBmYWxzZSwgdW5lc2NhcGUocikpKVxuICAgICAgICAgICAgLmNhdGNoKHIgPT4gY29uc29sZS5sb2cocikpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJNYWtlIGxpbmtcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwubGlua29mZiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmxpbmtcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlJlbW92ZSBsaW5rXCIpO1xuXG4gICAgYWRkQnV0dG9uKGljb25zLnN5bWJvbHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmxpbmtcIik7XG4gICAgICAgIGNvbnN0IG1hZ2ljID0gXCJ8Iz9cIjtcbiAgICAgICAgbGV0IHByZXZ0ZXh0ID0gY3VycmVudF9lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCBtYWdpYyk7XG4gICAgICAgIGxldCB0ZXh0d2l0aGFuY2hvciA9IGN1cnJlbnRfZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgIGN1cnJlbnRfZWxlbWVudC5pbm5lckhUTUwgPSBwcmV2dGV4dDtcbiAgICAgICAgLy9sZXQgY3NlbCA9IHNhdmVTZWxlY3Rpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVWRU5UXCIsIGUpO1xuICAgICAgICBnZXRTeW1ib2woZS5jbGllbnRYLCBlLmNsaWVudFkgKyB3aW5kb3cuc2Nyb2xsWSlcbiAgICAgICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbnRlcmVkIHN5bWJvbCcsIHIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0d2l0aGFuY2hvci5yZXBsYWNlKG1hZ2ljLCByKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN5bWJvbHNcIik7XG5cbiAgICBhZGRCdXR0b24oaWNvbnMubm9mb3JtYXQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwicmVtb3ZlRm9ybWF0XCIpO1xuICAgICAgICBsZXQgaWZjb2xhbHBzZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZFxuICAgICAgICBpZiAoaWZjb2xhbHBzZWQpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDVVJSRU5UXCIgLCBjdXJyZW50X2VsZW1lbnQgLCBjdXJyZW50X2VsZW1lbnQuY29udGVudGVkaXRhYmxlKVxuICAgICAgICAgICAgY3VycmVudF9lbGVtZW50LmlubmVySFRNTCA9IGN1cnJlbnRfZWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgvXFw8W14+XSpcXD4vZywgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInJlbW92ZUZvcm1hdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJSZW1vdmUgZm9ybWF0dGluZ1wiKVxuXG4gICAgLy9cbiAgICBmdW5jdGlvbiB0ZXN0RWRpdGFibGVDb250YWluZXIoZWwpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgICAgIGxldCBjZSA9IGVsO1xuICAgICAgICAvL2lmKCFjZSl7cmV0dXJuIG51bGx9O1xuICAgICAgICB3aGlsZSAoIWNlLmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiBjZS5ub2RlTmFtZSAhPSBcIkJPRFlcIikge1xuICAgICAgICAgICAgY2UgPSBjZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKCFjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVwdG9cIiAsIGNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2UuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKTtcbiAgICAgICAgbGV0IGVpYyA9IHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlLnRhcmdldCk7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRfdG9vbGJveFwiKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVpYyAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVpYztcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlaWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUubGVmdCA9IHRndC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGxldCB0dGhlID0gdHRvb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcCAtIHR0aGUgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG5cbiAgICAgICAgICAgIC8vfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0X3Rvb2xib3hcIikpIHtcbiAgICAgICAgICAgIC8vdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkUGx1c0J1dHRvbihibG9jaywgbWVudSkge1xuICAgIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxldCBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAoIW1lbnUpIHtcbiAgICAgICAgbWVudSA9IFt7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgY2xpY2tlZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZW51MiBjbGlja2VkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG4gICAgLy9tZW51XG4gICAgbGV0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX2FkZF9kcm9wZG93blwiKTtcbiAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZGQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgZGQuc3R5bGUudG9wID0gXCIxMDAlXCI7XG4gICAgZGQuc3R5bGUubGVmdCA9IDA7XG4gICAgZGQuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGRkLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgZGQuc3R5bGUubWF4V2lkdGggPSBcIjEwMHB4XCI7XG4gICAgZGQuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMnB4IDZweCByZ2JhKDAlLCAwJSwgMCUsIDAuMzA0KVwiXG4gICAgLy9kZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmF5XCJcbiAgICBtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGVsZW1lbnQuaWNvbjtcbiAgICAgICAgLy9taS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIG1pLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZmVyLWJveFwiO1xuICAgICAgICBtaS5zdHlsZS5wYWRkaW5nID0gXCI0cHhcIlxuICAgICAgICBtaS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgICBtaS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICAgICAgICBtaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIG1pLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgbWkuc3R5bGUuZmlsbCA9IENvbG91cnMubGlnaHQ7XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gQ29sb3Vycy5saWdodDtcbiAgICAgICAgbWkuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICAgICAgbWkuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCJcbiAgICAgICAgbGV0IG1pc3ZnID0gbWkucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgaWYgKG1pc3ZnKSB7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICAgICAgbWlzdmcuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgbWkub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBtaS5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICAgICAgbWkuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgfTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1pLnN0eWxlLmZpbGwgPSBDb2xvdXJzLmxpZ2h0O1xuICAgICAgICAgICAgbWkuc3R5bGUuY29sb3IgPSBDb2xvdXJzLmxpZ2h0XG4gICAgICAgIH07XG5cblxuICAgICAgICBtaS5kYXRhc2V0LmhpbnQgPSBlbGVtZW50LmxhYmVsO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmhhbmRsZXIoYmxvY2suZGF0YXNldC5ibG9ja19pZCk7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRkLmFwcGVuZENoaWxkKG1pKVxuICAgIH0pO1xuICAgIC8vXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoZGQpO1xuXG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRkb3duXCIpO1xuICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDEwMCUsIDEwMCUsIDEwMCUsIDAuMDExKVwiO1xuICAgIGJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGJ1dHRvbi5zdHlsZS5maWxsID0gQ29sb3Vycy5saWdodDtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tb25TdHlsZXMoZWRpdG9yZWwpIHtcbiAgICBsZXQgc3R5bGVpZCA9IFwiYmxvY2tlZGl0b3JfY29tbW9uX3N0eWxlc1wiO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVpZCkpIHtcbiAgICAgICAgbGV0IHN0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0YWcuaWQgPSBzdHlsZWlkO1xuICAgICAgICBzdGFnLmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIipbY29udGVudGVkaXRhYmxlPSd0cnVlJ106ZW1wdHl7IFwiICtcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjpcIiArIENvbG91cnMucGFsZSArIFwiO1wiICtcbiAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBcIiArIENvbG91cnMuZGFyayArIFwiO1wiICtcbiAgICAgICAgICAgIFwibWluLWhlaWdodDogMXJlbTtcIiArXG4gICAgICAgICAgICBcIm1pbi13aWR0aDogMXJlbTtcIiArXG4gICAgICAgICAgICBcImRpc3BsYXk6IGJsb2NrO1wiICtcbiAgICAgICAgICAgIFwifVwiICtcbiAgICAgICAgICAgIFwiLmJsb2NrX2VkaXRvcl91bml0e1wiICtcbiAgICAgICAgICAgIFwiYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XCIgK1xuICAgICAgICAgICAgXCJib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDFweCA7XCIgK1xuICAgICAgICAgICAgXCJ9XCIgK1xuICAgICAgICAgICAgXCIuYmxvY2tfZWRpdG9yX3VuaXQ6aG92ZXJ7XCIgK1xuICAgICAgICAgICAgXCJib3JkZXItY29sb3I6XCIgKyBDb2xvdXJzLnBhbGUgKyBcIjtcIiArXG4gICAgICAgICAgICBcIn1cIiArXG4gICAgICAgICAgICBcImRpdi5jb21tb25fYmxvY2tfY29udHJvbHMgZGl2OmhvdmVyIHN2Z3tmaWxsOmJsYWNrO31cIlxuICAgICAgICBcImRpdi5kZG93bjpob3ZlciBzdmd7ZmlsbDpibGFjazt9XCJcbiAgICAgICAgZWRpdG9yZWwuYXBwZW5kQ2hpbGQoc3RhZyk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCbG9ja0NvbnRyb2xzKGJsb2NrLCBpdGVtcywgZWQpIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBibG9ja19lZGl0b3JfdW5pdFxuICAgICAqL1xuXG4gICAgYmxvY2suc3R5bGUucGFkZGluZyA9IFwiMCAzMnB4XCI7XG4gICAgYmxvY2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBibG9jay5zdHlsZS5tYXJnaW4gPSBcIjAgLTMycHhcIlxuICAgIGlmICghaXRlbXMgJiYgZWQpIHtcbiAgICAgICAgaXRlbXMgPSBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpY29ucy51cCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZG93bixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkLm1vdmVEb3duKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEZWxldGUgYmxvY2tcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpY29ucy5kZWwsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlZC5yZW1vdmVCbG9jayhibG9jay5kYXRhc2V0LmJsb2NrX2lkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiICsgYmxvY2suZGF0YXNldC5ibG9ja19pZDtcbiAgICBsZXQgY3RybHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQoXCJjb21tb25fYmxvY2tfY29udHJvbHNcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChvdXJjbGFzcyk7XG4gICAgY3RybHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY3RybHMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBjdHJscy5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBjdHJscy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZlZVwiO1xuICAgIC8vY3RybHMuc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIFwiICsgQ29sb3Vycy5saWdodDtcbiAgICBjdHJscy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBjdHJscy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgY3RybHMuc3R5bGUuekluZGV4ID0gNjtcbiAgICAgICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIGN0cmxzLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xuICAgICAgICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9KTtcblxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBjdHJscy5zdHlsZS56SW5kZXggPSA1O1xuICAgICAgICBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSk7XG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgY3RybHMuc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0pO1xuXG5cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZS5pY29uO1xuICAgICAgICBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xuICAgICAgICBtaS5zdHlsZS5maWxsID0gQ29sb3Vycy5saWdodDtcbiAgICAgICAgbWkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZS5sYWJlbDtcbiAgICAgICAgY3RybHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY3RybHMpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9