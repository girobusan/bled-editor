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
        zero.style.height = "8px";
        zero.style.width = "100%";
        zero.style.marginLeft = "-32px";
        zero.dataset.block_id = "start";
        _ui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](zero, this.addMenu);
        mine.appendChild(zero);
        //
        this.setBlocks(blocks);
        //start UI
        _ui__WEBPACK_IMPORTED_MODULE_0__["tooltips"]();
        _ui__WEBPACK_IMPORTED_MODULE_0__["textTools"]();
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
            bcontent.style.backgroundColor =  "silver";
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
            "editor": "",
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
    blc._p.addEventListener("paste" , function(e){
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
    cd.addEventListener("paste" , function(e){
        //we need to strip formatting here
        let paste = (event.clipboardData || window.clipboardData).getData('text');          
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));    
        event.preventDefault();
    })
    el.appendChild(pre);
    let langs = ["None" , "Auto", "Arduino", 'JavaScript', "Processing", "Python", "C++", "Bash", "Basic", "Brainfuck"];
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
            cd.innerHTML = data && data.code ? data.code : "#  type\n#  here";
        },
        save: function () {
            return {
                code: cd.innerHTML,
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
    blcite.innerHTML = data && data.caption ? data.caption : ""
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
                pimg.src = r.file.url;
                srcinput.value = r.file.url;
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
        data: data ? data : {file: {url: null}},
        render: function () { },
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
                vtag.src = r.file.url;
                srcinput.value = r.file.url;
                blc.data.file.url = r.file.url;
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
    if(!(data&& data.file && data.file.url)){
        blc.goEditMode();
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
        render: function () { },
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

function makeBasicEditor(el) {
    let editor = new BlockEditor({
        selector: el
    });

    editor.registerEditor({
        type: "paragraph",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.paragraph,
        make: constructors.paragraph,
        label: "Paragraph"
    });
    editor.registerEditor({
        type: "divider",
        make: constructors.divider,
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].divider,
        label: 'Divider'
    });
    editor.registerEditor({
        type: "header",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].header,
        make: constructors.header,
        label: 'Header'
    });
    editor.registerEditor({
        type: "code",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].code,
        make: constructors.code,
        label: 'Code snippet'
    });
    editor.registerEditor({
        type: "raw",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].raw,
        make: constructors.raw,
        label: 'Raw HTML'
    });
    editor.registerEditor({
        type: "quote",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.quote,
        make: constructors.blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.image,
        make: constructors.image,
        label: 'Image'
    });
    editor.registerEditor({
        type: "video",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.video,
        make: constructors.video,
        label: 'Video'
    });
    editor.registerEditor({
        type: "list",
        icon: _ui__WEBPACK_IMPORTED_MODULE_0__["icons"].material.list,
        make: constructors.list,
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

/***/ "./src/bled/ui.js":
/*!************************!*\
  !*** ./src/bled/ui.js ***!
  \************************/
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
icons.header = __webpack_require__(/*! ./svg/header-24px.svg */ "./src/bled/svg/header-24px.svg");
icons.code = __webpack_require__(/*! ./svg/code-my-24px.svg */ "./src/bled/svg/code-my-24px.svg");
icons.raw = __webpack_require__(/*! ./svg/code-24px.svg */ "./src/bled/svg/code-24px.svg");
icons.noformat = __webpack_require__(/*! ./svg/remove-format.svg */ "./src/bled/svg/remove-format.svg");

icons.up = __webpack_require__(/*! ./svg/arrow_upward-24px.svg */ "./src/bled/svg/arrow_upward-24px.svg");
icons.down = __webpack_require__(/*! ./svg/arrow_downward-24px.svg */ "./src/bled/svg/arrow_downward-24px.svg");
icons.del = __webpack_require__(/*! ./svg/clear-24px.svg */ "./src/bled/svg/clear-24px.svg");
icons.add = __webpack_require__(/*! ./svg/add-24px.svg */ "./src/bled/svg/add-24px.svg");
icons.divider = __webpack_require__(/*! ./svg/divider-24px.svg */ "./src/bled/svg/divider-24px.svg");

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
    ttin.style.backgroundColor = "rgba(100%, 100%, 100%, 0.9)";
    ttin.style.color = "#888888";
    ttin.style.pointerEvents = "none";
    ttin.style.fontSize = "12px";
    ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "2px";
    ttin.style.boxShadow = "2px 2px 2px 2px #00000022";
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

function textTools() {
    let ttools = document.createElement("div");
    ttools.style.minWidth = "100px";
    ttools.classList.add("text_toolbox");
    //ttools.style.minHeight = "24px";
    ttools.style.backgroundColor = mycyan;
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
        b.onmouseover = ()=> b.style.fill = "black";
        b.onmouseout = ()=> b.style.fill = "white";
        let sv = b.querySelector("svg");
        sv.style.pointerEvents = "none";//.style.pointerEvents("none");
        if (hint) { b.dataset.hint = hint };
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
            .catch(r=>console.log(r));
        e.preventDefault();
    }, "Make link")
    addButton(icons.material.linkoff, function (e) {
        document.execCommand("unlink");
        e.preventDefault();
    }, "Remove link")
    addButton(icons.noformat, function (e) {
        document.execCommand("removeFormat");
        e.preventDefault();
    }, "Remove formatting")

    //
    function testEditableContainer(el){
        //console.log("test");
        let ce = el;
        //if(!ce){return null};
        while(!ce.getAttribute("contenteditable") && ce.nodeName!="BODY"){            
            ce = ce.parentNode;
            if(!ce){return null};
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
        mi.style.boxSizing = "borfer-box";
        mi.style.padding = "4px"
        mi.style.borderRadius = "5px";
        mi.style.margin = "0px";
        mi.style.cursor = "pointer";
        mi.style.display = "inline-block";
        mi.style.overflow = "hidden";
        mi.style.textAlign = "center";
        mi.style.fill = mycyan;
        mi.style.color = mycyan;
        mi.style.width = "24px";
        mi.style.height = "24px"
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
    /**
     * 
     * block_editor_unit
     */
    block.style.padding="0 32px";
    block.style.width = "100%";
    block.style.margin = "0 -32px"
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
    ctrls.style.boxSizing = "border-box";
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvYmxvY2tlZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2FkZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYXJyb3dfZG93bndhcmQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Fycm93X3Vwd2FyZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvY2xlYXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtbXktMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2RpdmlkZXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9ib2xkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfaXRhbGljLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfc3RyaWtldGhyb3VnaC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvZm9ybWF0X3VuZGVybGluZWQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2hlYWRlci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9saW5rLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9saW5rX29mZi0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvcGFyYWdyYXBoLXJlbWl4LTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9yZW1vdmUtZm9ybWF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9ib2xkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9pdGFsaWMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X2xpbmsuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N0cmlrZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3ViLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3VuZGVybGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3ZpZGVvY2FtLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjs7QUFFcEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7OztBQUd4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxrQkFBa0I7QUFDakMsdUJBQXVCO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBVztBQUNuQixRQUFRLDZDQUFZO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQVc7QUFDbkIsUUFBUSw2Q0FBWTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0UsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBZ0I7QUFDeEIsUUFBUSxvREFBbUI7O0FBRTNCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDBDQUFTO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBDQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBDQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU8sV0FBVztBQUMvQyw2QkFBNkIsRUFBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEVBQUU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzdpQ0EsK0w7Ozs7Ozs7Ozs7O0FDQUEsZ0g7Ozs7Ozs7Ozs7O0FDQUEsNkc7Ozs7Ozs7Ozs7O0FDQUEsdUo7Ozs7Ozs7Ozs7O0FDQUEsd1A7Ozs7Ozs7Ozs7O0FDQUEsME5BQTBOLHlEQUF5RCxXQUFXLHdOOzs7Ozs7Ozs7OztBQ0E5UiwwTkFBME4seURBQXlELFdBQVcsd2M7Ozs7Ozs7Ozs7O0FDQTlSLGlZOzs7Ozs7Ozs7OztBQ0FBLDRNOzs7Ozs7Ozs7OztBQ0FBLGtUOzs7Ozs7Ozs7OztBQ0FBLG9NOzs7Ozs7Ozs7OztBQ0FBLGtOOzs7Ozs7Ozs7OztBQ0FBLCtROzs7Ozs7Ozs7OztBQ0FBLDBOQUEwTix5REFBeUQsV0FBVyxnUzs7Ozs7Ozs7Ozs7QUNBOVIsdVM7Ozs7Ozs7Ozs7O0FDQUEsK1c7Ozs7Ozs7Ozs7O0FDQUEsd2dCOzs7Ozs7Ozs7OztBQ0FBLDBOQUEwTix5REFBeUQsV0FBVyw2STs7Ozs7Ozs7Ozs7QUNBOVIscWlCOzs7Ozs7Ozs7OztBQ0FBLGl5Rzs7Ozs7Ozs7Ozs7QUNBQSxpNUQ7Ozs7Ozs7Ozs7O0FDQUEsNjRGOzs7Ozs7Ozs7OztBQ0FBLHM1RTs7Ozs7Ozs7Ozs7QUNBQSx3cUM7Ozs7Ozs7Ozs7O0FDQUEsa2pFOzs7Ozs7Ozs7OztBQ0FBLDBzRjs7Ozs7Ozs7Ozs7QUNBQSw2UTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87O0FBRVAsYUFBYSxtQkFBTyxDQUFDLHlEQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsNkRBQXVCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEwQjtBQUNwRCxlQUFlLG1CQUFPLENBQUMsNkRBQXVCO0FBQzlDLFlBQVksbUJBQU8sQ0FBQyx1REFBb0I7QUFDeEMsWUFBWSxtQkFBTyxDQUFDLHVEQUFvQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMseURBQXFCO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyw2REFBdUI7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLCtEQUF3QjtBQUM3QyxZQUFZLG1CQUFPLENBQUMseURBQXFCO0FBQ3pDLGlCQUFpQixtQkFBTyxDQUFDLGlFQUF5Qjs7QUFFbEQsV0FBVyxtQkFBTyxDQUFDLHlFQUE2QjtBQUNoRCxhQUFhLG1CQUFPLENBQUMsNkVBQStCO0FBQ3BELFlBQVksbUJBQU8sQ0FBQywyREFBc0I7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVEQUFvQjtBQUN4QyxnQkFBZ0IsbUJBQU8sQ0FBQywrREFBd0I7O0FBRWhEOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLHVFQUE0QjtBQUMxRCx3QkFBd0IsbUJBQU8sQ0FBQywyRUFBOEI7QUFDOUQsMkJBQTJCLG1CQUFPLENBQUMsbUZBQWtDO0FBQ3JFLHdCQUF3QixtQkFBTyxDQUFDLHlGQUFxQztBQUNyRSxzQkFBc0IsbUJBQU8sQ0FBQyx5REFBcUI7QUFDbkQseUJBQXlCLG1CQUFPLENBQUMsaUVBQXlCOztBQUUxRCx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBNkI7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMseUZBQXFDO0FBQ25FLHVCQUF1QixtQkFBTyxDQUFDLGlFQUF5QjtBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBNkI7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsMkZBQXNDO0FBQ3JFLDJCQUEyQixtQkFBTyxDQUFDLCtFQUFnQzs7OztBQUk1RDs7O0FBR0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsYUFBYTs7QUFFMUI7QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWEsT0FBTztBQUNwQyxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBFO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCw4QkFBOEIsc0JBQXNCOzs7QUFHcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0IsZ0NBQWdDO0FBQ3ZHLDhDQUE4QyxnQ0FBZ0MsK0JBQStCOztBQUU3RywrQ0FBK0Msd0JBQXdCLGdDQUFnQztBQUN2Ryw4Q0FBOEMsZ0NBQWdDLCtCQUErQjs7OztBQUk3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDIiwiZmlsZSI6ImJsb2NrZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibGVkL2Jsb2NrZWRpdG9yLmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrRWRpdG9yKHtcbiAgICBzZWxlY3RvclxufSkge1xuICAgIGNvbnN0IG15ID0gdGhpcztcbiAgICAvL1xuICAgIGxldCBtaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5lLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3Jfb3V0ZXJfY29udGFpbmVyXCIpO1xuICAgIG1pbmUuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgbWluZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoZXkuYXBwZW5kQ2hpbGQobWluZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWluZTsgLy90aGlzIGVsZW1lbnQgaXMgbWluZVxuXG5cbiAgICB0aGlzLmVkaXRvcnMgPSB7XG4gICAgICAgIC8vXCJ6ZXJvXCI6e1xuICAgICAgICAvL1xuICAgICAgICAvL31cbiAgICB9OyAvLyBudWxsOyAvL3BhcmFtcy5lZGl0b3JzOyAvLyAgYXZhaWxhYmxlIGJsb2NrcyBlZGl0b3JzXG4gICAgdGhpcy5ibG9ja3MgPSBudWxsOyAvLyBibG9ja3MgYXJyYXlcbiAgICB0aGlzLmFkZE1lbnUgPSBbXTtcblxuICAgIHZhciBfY3VycmVudF9pZCA9IDA7XG5cbiAgICB0aGlzLl9tYWtlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jdXJyZW50X2lkKys7XG4gICAgICAgIHJldHVybiBfY3VycmVudF9pZDtcbiAgICB9XG5cbiAgICB0aGlzLnVwbG9hZCA9IGZ1bmN0aW9uIChmLCB0ZXN0dXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdGluZyB1cGxvYWRcIiwgZik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIjFcIiAsXG4gICAgICAgICAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgICAgICAgICAgdXJsOiB0ZXN0dXJsID8gdGVzdHVybCA6IFwia2l0dHkuanBlZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFVwbG9hZEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgdGhpcy51cGxvYWQgPSBmdW5jO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXRCbG9ja3MgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIHRoaXMuYmxvY2tzID0ge307XG4gICAgICAgIG1pbmUucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRfaWQgPSAxO1xuICAgICAgICBpZiAoYmxvY2tzKSB7XG4gICAgICAgICAgICBibG9ja3MuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlKGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRoZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGV5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgICAgIFVJLnRleHRUb29scygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIC8vYWRkIHNlcm8gYmxvY2tcblxuICAgICAgICAvL3RoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRpdG9ycylcbiAgICAgICAgLy9cImFkZFwiIG1lbnVcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhZGRlZCBoYW5kbGVyIGZvclwiLCBlKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBteS5lZGl0b3JzW2VdO1xuICAgICAgICAgICAgbXkuYWRkTWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHZhbC5sYWJlbCxcbiAgICAgICAgICAgICAgICBcImljb25cIjogdmFsLmljb24gPyB2YWwuaWNvbiA6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uIChyZWZpZCkge1xuICAgICAgICAgICAgICAgICAgICBteS5hZGROZXdCbG9jayhlLCBudWxsLCByZWZpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy9aZXJvIGJsb2NrXG5cbiAgICAgICAgbGV0IHplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB6ZXJvLmNsYXNzTGlzdC5hZGQoXCJzdGFydGluZ19ibG9ja1wiKTtcbiAgICAgICAgemVyby5zdHlsZS5oZWlnaHQgPSBcIjhweFwiO1xuICAgICAgICB6ZXJvLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luTGVmdCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5kYXRhc2V0LmJsb2NrX2lkID0gXCJzdGFydFwiO1xuICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKHplcm8sIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIG1pbmUuYXBwZW5kQ2hpbGQoemVybyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuc2V0QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgIC8vc3RhcnQgVUlcbiAgICAgICAgVUkudG9vbHRpcHMoKTtcbiAgICAgICAgVUkudGV4dFRvb2xzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZCA9PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgICAgIC8vIHZhciBzdGFydCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIGJJRCA9IHRoaXMuX21ha2VJRCgpO1xuICAgICAgICBsZXQgYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgIGRvbWJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3JfdW5pdFwiKTtcbiAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja19pZCA9IGJJRDtcbiAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcblxuXG4gICAgICAgIGJjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB7c2F2ZTogKCk9PiBkYXRhICwgcmVuZGVyOiAoKT0+IG51bGx9XG4gICAgICAgICAgICAvL3RoaXMuYmxvY2tzW2JJRF0gPSBibG9jaztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIC8vcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBiY29udGVudC5pbm5lckhUTUwgPSBcIlVua25vd24gYmxvY2s6IDxzdHJvbmc+XCIrdHlwZSArIFwiPC9zdHJvbmc+XCI7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAgXCJzaWx2ZXJcIjtcbiAgICAgICAgICAgIGJjb250ZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgYmNvbnRlbnQuc3R5bGUuZm9udFNpemUgPSBcIjJlbVwiO1xuICAgICAgICAgICAgYmNvbnRlbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBiY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIyZW0gMGVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKGRvbWJsb2NrLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBVSS5hZGRCbG9ja0NvbnRyb2xzKGRvbWJsb2NrLCBudWxsLCB0aGlzKTtcblxuICAgICAgICBpZiAocmVmaWQgJiYgcmVmZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tYmxvY2ssIHJlZmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkb21ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2sucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiBiSUQ7XG4gICAgfSAvL2FkZCBuZXcgYmxvY2tcblxuICAgIHRoaXMucmVtb3ZlQmxvY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy9maW5kIGJsb2NrIGluZGV4XG4gICAgICAgIGxldCBlbGlkeCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICAvL2Fubm91bmNlIGRlbGV0aW9uIHRvIGJsb2NrXG4gICAgICAgIGlmIChcImJlZm9yZURlbGV0ZVwiIGluIHRoaXMuYmxvY2tzW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5ibG9ja3NbaWRdLmJlZm9yZURlbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVtb3ZlIGRvbSBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oZWxpZHgpLnJlbW92ZSgpO1xuICAgICAgICAvL2RlbCBibG9jayBmcm9tIHJlZ2lzdHJ5XG4gICAgICAgIGRlbGV0ZSAodGhpcy5ibG9ja3NbaWRdKTtcbiAgICB9IC8vcmVtb3ZlIGJsb2NrXG5cbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoY2xiKSB7XG4gICAgICAgIGxldCBkdCA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIGR0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZS5kYXRhc2V0LmJsb2NrX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBteS5ibG9ja3NbZS5kYXRhc2V0LmJsb2NrX2lkXS5zYXZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGxldCBteWRhdGEgPSB7XG4gICAgICAgICAgICBcImVkaXRvclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJibG9ja3NcIjogZHRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcIiVjRWRpdG9yIHNhdmluZ1wiLCAoXCJjb2xvcjogXCIgKyBVSS5teWN5YW4pKTtcbiAgICAgICAgY29uc29sZS5sb2cobXlkYXRhKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgIGlmIChjbGIpIHtcbiAgICAgICAgICAgIGNsYihteWRhdGEpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBteWRhdGE7XG4gICAgfVxuXG59XG5cbnZhciBjb25zdHJ1Y3RvcnMgPSB7fTtcbnZhciB0ZW1wbGF0ZXMgPSB7fVxuXG50ZW1wbGF0ZXMuZm9ybVJvdyA9IGZ1bmN0aW9uIChlbGVtZW50c19hcnJheSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWxlbWVudHNfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjhweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09IFwiTEFCRUxcIiAmJiBpICE9IDApIHtcbiAgICAgICAgICAgIGUuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgdGJ4LnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHRieC5zdHlsZS5mb250U2l6ZSA9IFwiLjhlbVwiXG4gICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0Ynguc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XG5cbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09IFwiTEFCRUxcIikge1xuICAgICAgICAgICAgZWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbnRlbXBsYXRlcy50d29QYW5lbHMgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAvL2xldCBtb2RlID0gXCJwcmV2aWV3XCI7XG4gICAgbGV0IHBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfcHJldmlld19wYW5lbFwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgcHAuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgcHAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgcHAuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgIGxldCBlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRfcGFuZWxcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIGVwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIC8vZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlcC5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXAuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgLy9cbiAgICBsZXQgZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdF9idXR0b25cIik7XG4gICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICBlYnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcbiAgICBlYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZWJ0bi5zdHlsZS56SW5kZXggPSA1O1xuICAgIGVidG4uc3R5bGUucmlnaHQgPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZWRpdG1vZGUgPSBlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiO1xuICAgICAgICBpZiAoZWRpdG1vZGUpIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9cbiAgICBwcC5hcHBlbmRDaGlsZChlYnRuKTtcbiAgICAvL1xuICAgIGNvbnNvbGUubG9nKGJsb2NrKVxuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHApO1xuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXApO1xuICAgIC8vXG4gICAgYmxvY2suYWRkVG9QcmV2aWV3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBibG9jay5hZGRUb0VkaXRvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgYmxvY2suZ29FZGl0TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG5cbiAgICB9XG4gICAgYmxvY2suZ29QcmV2aWV3TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcblxuICAgIH1cbiAgICBibG9jay5pc0luRWRpdE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZXAuc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIik7XG4gICAgfVxuXG59XG5cbmNvbnN0cnVjdG9ycy5wYXJhZ3JhcGggPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgLy9iYy5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtd3JhcFwiO1xuICAgIGVsLmFwcGVuZENoaWxkKGJjKTtcbiAgICBsZXQgcmUgPSAvPGRpdnxwfGg+L2dpO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgbXk6IHRoaXMsXG4gICAgICAgIGlkOiBpZCwgLy8hISEhISEhISEhISEhISEhISEhICAgIFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGVkaXRvcjogZWRpdG9yLFxuICAgICAgICBfcDogYmMsXG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGNsZWFuOiBmdW5jdGlvbiAodCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fcC5pbm5lckhUTUwgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9wLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvL3dlIG5lZWQgdG8gc3RyaXAgZm9ybWF0dGluZyBoZXJlXG4gICAgICAgIGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0Jyk7ICAgICAgICAgIFxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2VsZWN0aW9uLmRlbGV0ZUZyb21Eb2N1bWVudCgpO1xuICAgICAgICBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKS5pbnNlcnROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhc3RlKSk7ICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IG1hZ2ljID0gXCIjISNcIlxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCBtYWdpYyk7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrYXQgPSBibGMuX3AuaW5uZXJIVE1MLmluZGV4T2YobWFnaWMpXG4gICAgICAgICAgICAgICAgbGV0IHRleHRsZWZ0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgY2xpY2thdCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRuZXh0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoY2xpY2thdCArIG1hZ2ljLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0bGVmdCwgXCJ8XCIgLCB0ZXh0bmV4dCk7XG4gICAgICAgICAgICAgICAgYmxjLl9wLmlubmVySFRNTCA9IHRleHRsZWZ0OyAvL2JsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKDAgLCBjbGlja2F0KTtcbiAgICAgICAgICAgICAgICBsZXQgbnAgPSBlZGl0b3IuYWRkTmV3QmxvY2soXCJwYXJhZ3JhcGhcIiwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0bmV4dFxuICAgICAgICAgICAgICAgIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgLy9zZWwuYW5jaG9yTm9kZS5pbm5lckhUTUwgPSBsZWF2ZWhlcmU7XG4gICAgICAgICAgICAgICAgLy9ucCA9IG5ld2x5IGluc2VydGVkIGJsb2NrIGlkXG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5kaXZpZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxociAvPlwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3RydWN0b3JzLmhlYWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIC8vbXl0YWcuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgLy9pZDogaWQsXG4gICAgICAgIHRleHQ6IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCJIZWFkZXJcIixcbiAgICAgICAgbGV2ZWw6IGRhdGEgJiYgZGF0YS5sZXZlbCA/IGRhdGEubGV2ZWwgOiAxLFxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTClcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpXG5cbiAgICAgICAgfSxcbiAgICAgICAgLy9teXRhZzogXG5cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aCk7XG4gICAgICAgICAgICAvL3RoaXMucmVmcmVzaCgpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdHh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogdHh0LFxuICAgICAgICAgICAgICAgIFwibGV2ZWxcIjogdGhpcy5sZXZlbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vb3B0cy50eXBlPVwic2VsZWN0XCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIG9wdC5pbm5lckhUTUwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgaWYgKGkgPT0gYmxjLmxldmVsKSB7XG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIG9wdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbnYgPSBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGJsYy5sZXZlbCA9IG52O1xuICAgICAgICBibGMucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5jb2RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgbGV0IGNkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgcHJlLmFwcGVuZENoaWxkKGNkKTtcbiAgICBjZC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgY2QuZGF0YXNldC5ub190ZXh0X3Rvb2xib3ggPSB0cnVlO1xuICAgIGNkLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiICwgZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vd2UgbmVlZCB0byBzdHJpcCBmb3JtYXR0aW5nIGhlcmVcbiAgICAgICAgbGV0IHBhc3RlID0gKGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTsgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzZWxlY3Rpb24uZGVsZXRlRnJvbURvY3VtZW50KCk7XG4gICAgICAgIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmluc2VydE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFzdGUpKTsgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBlbC5hcHBlbmRDaGlsZChwcmUpO1xuICAgIGxldCBsYW5ncyA9IFtcIk5vbmVcIiAsIFwiQXV0b1wiLCBcIkFyZHVpbm9cIiwgJ0phdmFTY3JpcHQnLCBcIlByb2Nlc3NpbmdcIiwgXCJQeXRob25cIiwgXCJDKytcIiwgXCJCYXNoXCIsIFwiQmFzaWNcIiwgXCJCcmFpbmZ1Y2tcIl07XG4gICAgLy9cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBtaS52YWx1ZSA9IGU7XG4gICAgICAgIG1pLmxhYmVsID0gZTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sYW5ndWFnZSAmJiBlID09IGRhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIG1pLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcbiAgICAvL1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2QuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLmNvZGUgPyBkYXRhLmNvZGUgOiBcIiMgIHR5cGVcXG4jICBoZXJlXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29kZTogY2QuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cyk7XG4gICAgcmV0dXJuIGJsYztcblxufVxuXG5jb25zdHJ1Y3RvcnMucmF3ID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG5cbiAgICBsZXQgZWRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGVkaS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGVkaS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBlZGkuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgZWRpLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIFwiICsgVUkubXljeWFuO1xuICAgIGVkaS5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmh0bWwpIHtcbiAgICAgICAgZWRpLnZhbHVlID0gZGF0YS5odG1sO1xuICAgIH1cblxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlZGkpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWw6IGVkaS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJsY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xuICAgIGJsY3RhZy5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgYmxjaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGJsY2luLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBsZXQgYmxmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBsZXQgYmxjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNpdGVcIik7XG4gICAgYmxmb290LmFwcGVuZENoaWxkKGJsY2l0ZSk7XG4gICAgYmxjaXRlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGNpbik7XG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsZm9vdCk7XG4gICAgYmxjaW4uaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcItCm0LjRgtCw0YLQsFwiO1xuICAgIGJsY2l0ZS5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwiXCJcbiAgICBsZXQgYmxvY2sgPSB7XG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYmxjdGFnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBibGNpbi5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogYmxjaXRlLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBibG9jaztcblxufVxuXG5jb25zdHJ1Y3RvcnMuaW1hZ2UgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgZmlndGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcbiAgICBsZXQgcGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGltZy5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwJVwiO1xuICAgIGxldCBmYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xuICAgIGZjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBmYy5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwiXCI7XG4gICAgZmlndGFnLmFwcGVuZENoaWxkKHBpbWcpO1xuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChmYyk7XG4gICAgcGltZy5zcmMgPSBkYXRhICYmIGRhdGEuZmlsZSA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgaW1hZ2VcIilcbiAgICAgICAgfSxcbiAgICB9XG4gICAgdGVtcGxhdGVzLnR3b1BhbmVscyhibGMpO1xuICAgIGJsYy5hZGRUb1ByZXZpZXcoZmlndGFnKTtcbiAgICAvL2VkaXRcbiAgICAvLy8vdXBsb2FkXG4gICAgbGV0IHVwbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZC50eXBlID0gXCJmaWxlXCI7XG4gICAgdXBsZC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbGV0IHVwbGRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZGJ0bi52YWx1ZSA9IFwidXBsb2FkXCI7XG4gICAgdXBsZGJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHVwbGRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVkaXRvci51cGxvYWQodXBsZC5maWxlc1swXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgcGltZy5zcmMgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgIHNyY2lucHV0LnZhbHVlID0gci5maWxlLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHBpbWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3JjbGFiZWwsIHNyY2lucHV0XSkpO1xuICAgIC8vLy9jbGFzc2VzXG4gICAgLy8vLy8vc3RyZXRjaGVkXG4gICAgbGV0IHN0cmV0Y2hsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdHJldGNobGFiZWwuaW5uZXJIVE1MID0gXCJzdHJldGNoZWRcIlxuICAgIGxldCBzdHJldGNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RyZXRjaGVkLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgc3RyZXRjaGVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbm9yZXNpemUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlndGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJldGNoZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuc3RyZXRjaGVkO1xuICAgIC8vLy8vL25vcmVzaXplXG4gICAgbGV0IG5ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbnJsYWJlbC5pbm5lckhUTUwgPSBcIm5vIHJlc2l6ZVwiXG4gICAgbGV0IG5vcmVzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vcmVzaXplLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbm9yZXNpemUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBub3Jlc2l6ZS5jaGVja2VkID0gZGF0YSAmJiAoZGF0YS5ub3Jlc2l6ZSB8fCBkYXRhLndpdGhiYWNrZ3JvdW5kKTtcbiAgICAvLy8vL2xlZnRcbiAgICBsZXQgbGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxsYWJlbC5pbm5lckhUTUwgPSBcImxlZnRcIlxuICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxlZnQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsZWZ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGVmdC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmxlZnQ7XG4gICAgLy8vL3JpZ2h0XG4gICAgbGV0IHJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBybGFiZWwuaW5uZXJIVE1MID0gXCJyaWdodFwiXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHJpZ2h0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcmlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGVmdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmlnaHQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5yaWdodDtcblxuICAgIC8vLy9ib3JkZXJcbiAgICBsZXQgYmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGJsYWJlbC5pbm5lckhUTUwgPSBcImJvcmRlclwiXG4gICAgbGV0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBib3JkZXIudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBib3JkZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcGltZy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlcmVkXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYm9yZGVyLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuYm9yZGVyO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzdHJldGNoZWQsIHN0cmV0Y2hsYWJlbCxcbiAgICAgICAgbm9yZXNpemUsIG5ybGFiZWwsXG4gICAgICAgIGxlZnQsIGxsYWJlbCxcbiAgICAgICAgcmlnaHQsIHJsYWJlbCxcbiAgICAgICAgYm9yZGVyLCBibGFiZWxcbiAgICBdKSk7XG5cbiAgICAvL1xuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyZXRjaGVkOiBzdHJldGNoZWQuY2hlY2tlZCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodC5jaGVja2VkLFxuICAgICAgICAgICAgbGVmdDogbGVmdC5jaGVja2VkLFxuICAgICAgICAgICAgbm9yZXNpemU6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQmFja2dyb3VuZDogbm9yZXNpemUuY2hlY2tlZCxcbiAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQm9yZGVyOiBib3JkZXIuY2hlY2tlZCxcbiAgICAgICAgICAgIGNhcHRpb246IGZjLmlubmVySFRNTCxcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IHNyY2lucHV0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5maWxlICYmIGRhdGEuZmlsZS51cmwpIHtcbiAgICAgICAgYmxjLmdvUHJldmlld01vZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy52aWRlbyA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge2ZpbGU6IHt1cmw6IG51bGx9fSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgfVxuICAgIGlmICghYmxjLmRhdGEuZmlsZSkge1xuICAgICAgICBibGMuZGF0YS5maWxlID0ge307XG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICAvL3ByZXZpZXdcbiAgICBsZXQgdnRhZyA9IGJsYy5hZGRUb1ByZXZpZXcoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpKTtcbiAgICB2dGFnLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgLy9sZXQgc3JjdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgICAvL3Z0YWcuYXBwZW5kQ2hpbGQoc3JjdGFnKTtcbiAgICB2dGFnLnNyYyA9IGRhdGEgJiYgZGF0YS5maWxlLnVybCA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuICAgIC8vZWRpdG9yXG4gICAgLy8vL3VwbG9hZCAgICAgXG4gICAgbGV0IHVwbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZC50eXBlID0gXCJmaWxlXCI7XG4gICAgdXBsZC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbGV0IHVwbGRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZGJ0bi52YWx1ZSA9IFwidXBsb2FkXCI7XG4gICAgdXBsZGJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHVwbGRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVkaXRvci51cGxvYWQodXBsZC5maWxlc1swXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgdnRhZy5zcmMgPSByLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgIHNyY2lucHV0LnZhbHVlID0gci5maWxlLnVybDtcbiAgICAgICAgICAgICAgICBibGMuZGF0YS5maWxlLnVybCA9IHIuZmlsZS51cmw7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFt1cGxkLCB1cGxkYnRuXSkpO1xuICAgIC8vLy9lZGl0IHNyY1xuICAgIGxldCBzcmNsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzcmNsYWJlbC5pbm5lckhUTUwgPSBcIlNvdXJjZSBVUkxcIjtcbiAgICBsZXQgc3JjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3JjaW5wdXQuc3R5bGUuZmxleEdyb3cgPSAyO1xuICAgIHNyY2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBzcmNpbnB1dC52YWx1ZSA9IGRhdGEgJiYgZGF0YS5maWxlLnVybCA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuICAgIHNyY2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2dGFnLnNyYyA9IHRoaXMudmFsdWU7XG4gICAgICAgIGJsYy5kYXRhLmZpbGUudXJsID0gdGhpcy52YWx1ZTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3JjbGFiZWwsIHNyY2lucHV0XSkpO1xuICAgIC8vLy9wYXJhbXNcbiAgICBsZXQgcGFyYW1zID0gW3tcbiAgICAgICAgbmFtZTogXCJhdXRvcGxheVwiLFxuICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuYXV0b3BsYXksXG4gICAgICAgIGxhYmVsOiBcImF1dG9wbGF5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJjb250cm9sc1wiLFxuICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuY29udHJvbHMsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibG9vcFwiLFxuICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEubG9vcCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJtdXRlZFwiLFxuICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEubXV0ZWQsXG4gICAgfSxcblxuICAgIF1cbiAgICBsZXQgcGVscyA9IFtdO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYmxjLmRhdGFbZS5uYW1lXSkge1xuICAgICAgICAgICAgYmxjLmRhdGFbZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHBsYWJlbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgICAgIHBsYWJlbC5pbm5lckhUTUwgPSBlLm5hbWU7XG4gICAgICAgIGxldCBwY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHBjaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBwY2hlY2suY2hlY2tlZCA9IGRhdGEgJiYgZGF0YVtlLm5hbWVdO1xuICAgICAgICBwY2hlY2sub25jbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgYmxjLmRhdGEsIGUubmFtZSk7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgdnRhZy5zZXRBdHRyaWJ1dGUoZS5uYW1lLCB0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9O1xuICAgICAgICBwZWxzLnB1c2gocGNoZWNrKTtcbiAgICAgICAgcGVscy5wdXNoKHBsYWJlbCk7XG5cblxuICAgIH0pO1xuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhwZWxzKSk7XG5cbiAgICBibGMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJsYy5kYXRhO1xuICAgIH1cbiAgICBpZighKGRhdGEmJiBkYXRhLmZpbGUgJiYgZGF0YS5maWxlLnVybCkpe1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBibGM7XG59XG4vKipcbiAqIHtcbiAgICBcInR5cGVcIiA6IFwibGlzdFwiLFxuICAgIFwiZGF0YVwiIDoge1xuICAgICAgICBcInN0eWxlXCIgOiBcInVub3JkZXJlZFwiLFxuICAgICAgICBcIml0ZW1zXCIgOiBbXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBibG9jay1zdHlsZWQgZWRpdG9yXCIsXG4gICAgICAgICAgICBcIkNsZWFuIG91dHB1dCBkYXRhXCIsXG4gICAgICAgICAgICBcIlNpbXBsZSBhbmQgcG93ZXJmdWwgQVBJXCJcbiAgICAgICAgXVxuICAgIH1cbn0sXG4gKi9cblxuY29uc3RydWN0b3JzLmxpc3QgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgbGlzdF9lbGVtZW50OiBudWxsLFxuICAgICAgICB0eXBlOiBkYXRhICYmIGRhdGEuc3R5bGUgJiYgZGF0YS5zdHlsZSA9PSBcIm9yZGVyZWRcIiA/IFwib2xcIiA6IFwidWxcIixcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBibGMudHlwZSA9PSBcIm9sXCIgPyBcIm9yZGVyZWRcIiA6IFwidW5vcmRlcmVkXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBBcnJheS5mcm9tKHRoaXMubGlzdF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkubWFwKGUgPT4gZS5pbm5lckhUTUwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL2VkaXRvclxuICAgIC8vLy9vdXRlciBsaXN0XG4gICAgYmxjLmxpc3RfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYmxjLnR5cGUpO1xuICAgIGVsLmFwcGVuZENoaWxkKGJsYy5saXN0X2VsZW1lbnQpO1xuICAgIC8vLy9kbyB3ZSBoYXZlIGRhdGFcbiAgICBpZiAoZGF0YSAmJiBkYXRhLml0ZW1zKSB7XG4gICAgICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsLmlubmVySFRNTCA9IGU7XG4gICAgICAgICAgICBsLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGFkZFNtYXJ0UmVtb3ZlKGwpXG4gICAgICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKGwpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvLy8vL21ha2UgTEkgZGVsZXRhYmxlIFxuICAgIGZ1bmN0aW9uIGFkZFNtYXJ0UmVtb3ZlKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUua2V5Q29kZSAsIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDggJiYgdGhpcy5pbm5lckhUTUwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMyAmJiB0aGlzLmlubmVySFRNTC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCBuaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBuaS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy93aGVyZT9cbiAgICAgICAgICAgICAgICBsZXQgbXluZXh0ID0gdGhpcy5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAobXluZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuaW5zZXJ0QmVmb3JlKG5pLCBteW5leHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuYXBwZW5kQ2hpbGQobmkpOyAvL2F0Li4uP1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRTbWFydFJlbW92ZShuaSk7XG4gICAgICAgICAgICAgICAgbmkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vLy8vY2hhbmdsZSBsaXN0IHR5cGUgdG9cbiAgICBmdW5jdGlvbiBzZXRUeXBlKHRuKSB7XG5cbiAgICAgICAgbGV0IG5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0bik7XG4gICAgICAgIGxldCBsaXNzID0gQXJyYXkuZnJvbShibGMubGlzdF9lbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICBsaXNzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBuZS5hcHBlbmRDaGlsZChlKVxuICAgICAgICB9KTtcbiAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgYmxjLmxpc3RfZWxlbWVudCA9IG5lO1xuICAgICAgICBibGMudHlwZSA9IHRuO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChuZSk7XG4gICAgfVxuICAgIC8vLy9cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIC8vcmFkaW9idXR0b25zXG4gICAgLy9cbiAgICBsZXQgcmJ0bnMgPSBbe1xuICAgICAgICB2YWx1ZTogXCJ1bFwiLFxuICAgICAgICBsYWJlbDogXCJVbm9yZGVyZWRcIlxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHZhbHVlOiBcIm9sXCIsXG4gICAgICAgIGxhYmVsOiBcIk9yZGVyZWRcIlxuICAgIH1cbiAgICBdO1xuICAgIHJidG5zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJsaXN0X2J1dHRvbnNfXCIgKyBpZDtcbiAgICAgICAgcmFkaW8udmFsdWUgPSBlLnZhbHVlO1xuICAgICAgICByYWRpby5jaGVja2VkID0gKGJsYy50eXBlID09IGUudmFsdWUpO1xuICAgICAgICByYWRpby5vbmNoYW5nZSA9IGV2ID0+IHNldFR5cGUoZS52YWx1ZSk7XG4gICAgICAgIGxldCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxibC5pbm5lckhUTUwgPSBlLmxhYmVsO1xuICAgICAgICBibGMuYWRkVG9Ub29sYmFyKHJhZGlvKTtcbiAgICAgICAgYmxjLmFkZFRvVG9vbGJhcihsYmwpO1xuICAgIH0pO1xuICAgIC8vLy8gYWRkIGJ1dHRvblxuICAgIGxldCBhZGRfYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRfYi50eXBlID0gXCJidXR0b25cIjtcbiAgICBhZGRfYi52YWx1ZSA9IFwiK2l0ZW1cIjtcbiAgICBhZGRfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld2xpLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgYWRkU21hcnRSZW1vdmUobmV3bGkpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKG5ld2xpKTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb1Rvb2xiYXIoYWRkX2IpO1xuICAgIHJldHVybiBibGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQmFzaWNFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHtcbiAgICAgICAgc2VsZWN0b3I6IGVsXG4gICAgfSk7XG5cbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5wYXJhZ3JhcGgsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5wYXJhZ3JhcGgsXG4gICAgICAgIGxhYmVsOiBcIlBhcmFncmFwaFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5kaXZpZGVyLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5kaXZpZGVyLFxuICAgICAgICBsYWJlbDogJ0RpdmlkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuaGVhZGVyLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaGVhZGVyLFxuICAgICAgICBsYWJlbDogJ0hlYWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImNvZGVcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuY29kZSxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmNvZGUsXG4gICAgICAgIGxhYmVsOiAnQ29kZSBzbmlwcGV0J1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicmF3XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLnJhdyxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnJhdyxcbiAgICAgICAgbGFiZWw6ICdSYXcgSFRNTCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnF1b3RlLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuYmxvY2txdW90ZSxcbiAgICAgICAgbGFiZWw6ICdCbG9ja3F1b3RlJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMubWF0ZXJpYWwuaW1hZ2UsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5pbWFnZSxcbiAgICAgICAgbGFiZWw6ICdJbWFnZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInZpZGVvXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnZpZGVvLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMudmlkZW8sXG4gICAgICAgIGxhYmVsOiAnVmlkZW8nXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLmxpc3QsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5saXN0LFxuICAgICAgICBsYWJlbDogXCJMaXN0XCIsXG4gICAgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhVSS5pY29ucy5tYXRlcmlhbC5saXN0KTtcblxuICAgIHJldHVybiBlZGl0b3I7XG59XG4vLyAgbXkuY3VycmVudF9lZGl0b3IgPSBuZXcgZWRpdG9yX2ZuKGw0LCBlZGl0b3JfZWxlbWVudCwgbXkuY3VycmVudF92aWV3LmZpbGUuY29udGVudCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGF0aWRFZGl0b3IobDQsIGVkaXRvcl9lbGVtZW50X3NlbGVjdG9yLCBmaWxlX2NvbnRlbnQpIHtcbiAgICBsZXQgZWQgPSBtYWtlQmFzaWNFZGl0b3IoZWRpdG9yX2VsZW1lbnRfc2VsZWN0b3IpO1xuICAgIGVkLnNldEJsb2NrcyhmaWxlX2NvbnRlbnQpO1xuICAgIHJldHVybiBlZDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNMjAgMTJsLTEuNDEtMS40MUwxMyAxNi4xN1Y0aC0ydjEyLjE3bC01LjU4LTUuNTlMNCAxMmw4IDggOC04elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTJsMS40MSAxLjQxTDExIDcuODNWMjBoMlY3LjgzbDUuNTggNS41OUwyMCAxMmwtOC04LTggOHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48Zz48cGF0aCBkPVxcXCJNNS43LDEzLjNoMTEuNXYySDUuN1YxMy4zeiBNNi4zLDcuOGgxMS41djJINi4zVjcuOHogTTkuMywzLjJoMS44TDksMjAuNkg3LjJMOS4zLDMuMnogTTE0LjMsMy4yaDEuOGwtMi4xLDE3LjRoLTEuOSBMMTQuMywzLjJ6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiNC41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyAtNi40NTY3IDE3LjU0MzMpXFxcIiB3aWR0aD1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI3LjFcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNy41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyA2LjQ1NjcgMzAuNDU2NylcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjcuMVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjFcXFwiIHk9XFxcIjExXFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCg2LjEyMzIzNGUtMTcgLTEgMSA2LjEyMzIzNGUtMTcgNi4yMDQ5NjhlLTAyIDI0LjA2MilcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjEuOVxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNS42IDEwLjc5Yy45Ny0uNjcgMS42NS0xLjc3IDEuNjUtMi43OSAwLTIuMjYtMS43NS00LTQtNEg3djE0aDcuMDRjMi4wOSAwIDMuNzEtMS43IDMuNzEtMy43OSAwLTEuNTItLjg2LTIuODItMi4xNS0zLjQyek0xMCA2LjVoM2MuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41aC0zdi0zem0zLjUgOUgxMHYtM2gzLjVjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMCA0djNoMi4yMWwtMy40MiA4SDZ2M2g4di0zaC0yLjIxbDMuNDItOEgxOFY0elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTAuNWMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41em0wLTZjLS44IDAtMS41LjctMS41IDEuNVMzLjIgNy41IDQgNy41IDUuNSA2LjggNS41IDYgNC44IDQuNSA0IDQuNXptMCAxMmMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41ek03IDE5aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnptMC04djJoMTRWNUg3elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02IDE3aDNsMi00VjdINXY2aDN6bTggMGgzbDItNFY3aC02djZoM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMCAxOWg0di0zaC00djN6TTUgNHYzaDV2M2g0VjdoNVY0SDV6TTMgMTRoMTh2LTJIM3YyelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgMTdjMy4zMSAwIDYtMi42OSA2LTZWM2gtMi41djhjMCAxLjkzLTEuNTcgMy41LTMuNSAzLjVTOC41IDEyLjkzIDguNSAxMVYzSDZ2OGMwIDMuMzEgMi42OSA2IDYgNnptLTcgMnYyaDE0di0ySDV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIxMFxcXCIgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiNFxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE4XFxcIiB3aWR0aD1cXFwiMTJcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNC44NiA4Ljg2bC0zIDMuODdMOSAxMy4xNCA2IDE3aDEybC0zLjg2LTUuMTR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zLjkgMTJjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFoNFY3SDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xek04IDEzaDh2LTJIOHYyem05LTZoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjFzLTEuMzkgMy4xLTMuMSAzLjFoLTRWMTdoNGMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDBWMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTcgN2gtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMSAwIDEuNDMtLjk4IDIuNjMtMi4zMSAyLjk4bDEuNDYgMS40NkMyMC44OCAxNS42MSAyMiAxMy45NSAyMiAxMmMwLTIuNzYtMi4yNC01LTUtNXptLTEgNGgtMi4xOWwyIDJIMTZ6TTIgNC4yN2wzLjExIDMuMTFDMy4yOSA4LjEyIDIgOS45MSAyIDEyYzAgMi43NiAyLjI0IDUgNSA1aDR2LTEuOUg3Yy0xLjcxIDAtMy4xLTEuMzktMy4xLTMuMSAwLTEuNTkgMS4yMS0yLjkgMi43Ni0zLjA3TDguNzMgMTFIOHYyaDIuNzNMMTMgMTUuMjdWMTdoMS43M2w0LjAxIDRMMjAgMTkuNzQgMy4yNyAzIDIgNC4yN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAyNFYwXFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBkPVxcXCJNOSwxMXYxMGgyVjVoMnYxNmgyVjVoMlYzSDlDNi44LDMsNSw0LjgsNSw3UzYuOCwxMSw5LDExelxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0wLDBoMjR2MjRIMFYwelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgNjQwIDUxMlxcXCI+PHBhdGggZD1cXFwiTTMzNiA0MTZoLTExLjE3bDkuMjYtMjcuNzdMMjY3IDMzNi40IDI0MC40OSA0MTZIMjA4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZ6bTI5Ny44MiA0Mi4xTDM3NyAyNTkuNTkgNDI2LjE3IDExMkg1NDR2MzJhMTYgMTYgMCAwIDAgMTYgMTZoMzJhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZIMTc2YTE2IDE2IDAgMCAwLTE2IDE2djQzLjlMNDUuNDYgMy4zOEExNiAxNiAwIDAgMCAyMyA2LjE5TDMuMzcgMzEuNDZhMTYgMTYgMCAwIDAgMi44MSAyMi40NWw1ODguMzYgNDU0LjcyYTE2IDE2IDAgMCAwIDIyLjQ2LTIuODFsMTkuNjQtMjUuMjdhMTYgMTYgMCAwIDAtMi44Mi0yMi40NXpNMzA5LjkxIDIwNy43NkwyMjQgMTQxLjM2VjExMmgxMTcuODN6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjMwNjggMTkuMzI0MkMxMC44Njc0IDE5LjU3NDIgMTEuMzk3NyAxOS42OTkyIDExLjg5NzcgMTkuNjk5MkMxNC43NDYyIDE5LjY5OTIgMTYuMTcwNSAxOC4zOTA2IDE2LjE3MDUgMTUuNzczNEMxNi4xNzA1IDE0Ljg4MjggMTYuMDE1MiAxNC4xNzk3IDE1LjcwNDUgMTMuNjY0MUMxNS41IDEzLjMyMDMgMTUuMjY3IDEzLjAzMTIgMTUuMDA1NyAxMi43OTY5QzE0Ljc0NDMgMTIuNTYyNSAxNC40ODg2IDEyLjM4MDkgMTQuMjM4NiAxMi4yNTJDMTMuOTg4NiAxMi4xMjMgMTMuNjgzNyAxMi4wMjU0IDEzLjMyMzkgMTEuOTU5QzEyLjk2NCAxMS44OTI2IDEyLjY0NTggMTEuODUxNiAxMi4zNjkzIDExLjgzNTlDMTIuMDkyOCAxMS44MjAzIDExLjczNDggMTEuODEyNSAxMS4yOTU1IDExLjgxMjVDMTAuNzQyNCAxMS44MTI1IDEwLjM1OTggMTEuODUxNiAxMC4xNDc3IDExLjkyOTdDMTAuMTQ3NyAxMi4zNDM4IDEwLjE0NTggMTIuOTY0OCAxMC4xNDIgMTMuNzkzQzEwLjEzODMgMTQuNjIxMSAxMC4xMzY0IDE1LjIzODMgMTAuMTM2NCAxNS42NDQ1QzEwLjEzNjQgMTUuNzA3IDEwLjEzMjYgMTUuOTcwNyAxMC4xMjUgMTYuNDM1NUMxMC4xMTc0IDE2LjkwMDQgMTAuMTE1NSAxNy4yNzczIDEwLjExOTMgMTcuNTY2NEMxMC4xMjMxIDE3Ljg1NTUgMTAuMTQwMiAxOC4xODE2IDEwLjE3MDUgMTguNTQ0OUMxMC4yMDA4IDE4LjkwODIgMTAuMjQ2MiAxOS4xNjggMTAuMzA2OCAxOS4zMjQyWk0xMC4xNDc3IDEwLjU4MkMxMC40NjU5IDEwLjYzNjcgMTAuODc4OCAxMC42NjQxIDExLjM4NjQgMTAuNjY0MUMxMi4wMDc2IDEwLjY2NDEgMTIuNTQ5MiAxMC42MTMzIDEzLjAxMTQgMTAuNTExN0MxMy40NzM1IDEwLjQxMDIgMTMuODkwMiAxMC4yMzYzIDE0LjI2MTQgOS45OTAyM0MxNC42MzI2IDkuNzQ0MTQgMTQuOTE0OCA5LjM5NDUzIDE1LjEwOCA4Ljk0MTQxQzE1LjMwMTEgOC40ODgyOCAxNS4zOTc3IDcuOTMzNTkgMTUuMzk3NyA3LjI3NzM0QzE1LjM5NzcgNi43MzA0NyAxNS4yODc5IDYuMjUxOTUgMTUuMDY4MiA1Ljg0MThDMTQuODQ4NSA1LjQzMTY0IDE0LjU0OTIgNS4xMTEzMyAxNC4xNzA1IDQuODgwODZDMTMuNzkxNyA0LjY1MDM5IDEzLjM4MjYgNC40ODA0NyAxMi45NDMyIDQuMzcxMDlDMTIuNTAzOCA0LjI2MTcyIDEyLjAzNDEgNC4yMDcwMyAxMS41MzQxIDQuMjA3MDNDMTEuMTU1MyA0LjIwNzAzIDEwLjY2MjkgNC4yNTc4MSAxMC4wNTY4IDQuMzU5MzhDMTAuMDU2OCA0Ljc1IDEwLjA3MiA1LjMzOTg0IDEwLjEwMjMgNi4xMjg5MUMxMC4xMzI2IDYuOTE3OTcgMTAuMTQ3NyA3LjUxMTcyIDEwLjE0NzcgNy45MTAxNkMxMC4xNDc3IDguMTIxMDkgMTAuMTQ1OCA4LjQzMzU5IDEwLjE0MiA4Ljg0NzY2QzEwLjEzODMgOS4yNjE3MiAxMC4xMzY0IDkuNTcwMzEgMTAuMTM2NCA5Ljc3MzQ0QzEwLjEzNjQgMTAuMTMyOCAxMC4xNDAyIDEwLjQwMjMgMTAuMTQ3NyAxMC41ODJaTTQgMjFMNC4wMjI3MyAxOS44OTg0QzQuMTM2MzYgMTkuODY3MiA0LjQ1ODMzIDE5LjgwNDcgNC45ODg2NCAxOS43MTA5QzUuNTE4OTQgMTkuNjE3MiA1LjkyMDQ1IDE5LjUxMTcgNi4xOTMxOCAxOS4zOTQ1QzYuMjQ2MjEgMTkuMzAwOCA2LjI5MzU2IDE5LjE5NTMgNi4zMzUyMyAxOS4wNzgxQzYuMzc2ODkgMTguOTYwOSA2LjQwOTA5IDE4LjgzMDEgNi40MzE4MiAxOC42ODU1QzYuNDU0NTUgMTguNTQxIDYuNDc1MzggMTguNDE0MSA2LjQ5NDMyIDE4LjMwNDdDNi41MTMyNiAxOC4xOTUzIDYuNTI0NjIgMTguMDQ4OCA2LjUyODQxIDE3Ljg2NTJDNi41MzIyIDE3LjY4MTYgNi41MzQwOSAxNy41NDg4IDYuNTM0MDkgMTcuNDY2OFYxNi42OTkyQzYuNTM0MDkgOS4wMjczNCA2LjQ1MDc2IDUuMDIzNDQgNi4yODQwOSA0LjY4NzVDNi4yNTM3OSA0LjYyNSA2LjE3MDQ1IDQuNTY4MzYgNi4wMzQwOSA0LjUxNzU4QzUuODk3NzMgNC40NjY4IDUuNzI5MTcgNC40MjM4MyA1LjUyODQxIDQuMzg4NjdDNS4zMjc2NSA0LjM1MzUyIDUuMTQwMTUgNC4zMjYxNyA0Ljk2NTkxIDQuMzA2NjRDNC43OTE2NyA0LjI4NzExIDQuNjA3OTUgNC4yNjk1MyA0LjQxNDc3IDQuMjUzOTFDNC4yMjE1OSA0LjIzODI4IDQuMTA2MDYgNC4yMjY1NiA0LjA2ODE4IDQuMjE4NzVMNC4wMjI3MyAzLjI0NjA5QzQuNzY1MTUgMy4yMzA0NyA2LjA1MzAzIDMuMTg1NTUgNy44ODYzNiAzLjExMTMzQzkuNzE5NyAzLjAzNzExIDExLjEzMjYgMyAxMi4xMjUgM0MxMi4yOTkyIDMgMTIuNTU2OCAzLjAwMTk1IDEyLjg5NzcgMy4wMDU4NkMxMy4yMzg2IDMuMDA5NzcgMTMuNDk2MiAzLjAxMTcyIDEzLjY3MDUgMy4wMTE3MkMxNC4yMDA4IDMuMDExNzIgMTQuNzE3OCAzLjA2MjUgMTUuMjIxNiAzLjE2NDA2QzE1LjcyNTQgMy4yNjU2MiAxNi4yMTIxIDMuNDI5NjkgMTYuNjgxOCAzLjY1NjI1QzE3LjE1MTUgMy44ODI4MSAxNy41NjA2IDQuMTYwMTYgMTcuOTA5MSA0LjQ4ODI4QzE4LjI1NzYgNC44MTY0MSAxOC41Mzc5IDUuMjI0NjEgMTguNzUgNS43MTI4OUMxOC45NjIxIDYuMjAxMTcgMTkuMDY4MiA2LjczODI4IDE5LjA2ODIgNy4zMjQyMkMxOS4wNjgyIDcuNzMwNDcgMTkuMDA1NyA4LjEwMzUyIDE4Ljg4MDcgOC40NDMzNkMxOC43NTU3IDguNzgzMiAxOC42MDggOS4wNjQ0NSAxOC40Mzc1IDkuMjg3MTFDMTguMjY3IDkuNTA5NzcgMTguMDIyNyA5LjczNDM4IDE3LjcwNDUgOS45NjA5NEMxNy4zODY0IDEwLjE4NzUgMTcuMTA5OCAxMC4zNjMzIDE2Ljg3NSAxMC40ODgzQzE2LjY0MDIgMTAuNjEzMyAxNi4zMjIgMTAuNzY5NSAxNS45MjA1IDEwLjk1N0MxNy4wODcxIDExLjIzMDUgMTguMDU4NyAxMS43NTM5IDE4LjgzNTIgMTIuNTI3M0MxOS42MTE3IDEzLjMwMDggMjAgMTQuMjY5NSAyMCAxNS40MzM2QzIwIDE2LjIxNDggMTkuODY3NCAxNi45MTYgMTkuNjAyMyAxNy41MzcxQzE5LjMzNzEgMTguMTU4MiAxOC45ODMgMTguNjY4IDE4LjUzOTggMTkuMDY2NEMxOC4wOTY2IDE5LjQ2NDggMTcuNTczOSAxOS43OTg4IDE2Ljk3MTYgMjAuMDY4NEMxNi4zNjkzIDIwLjMzNzkgMTUuNzUgMjAuNTI3MyAxNS4xMTM2IDIwLjYzNjdDMTQuNDc3MyAyMC43NDYxIDEzLjgxMDYgMjAuODAwOCAxMy4xMTM2IDIwLjgwMDhDMTIuNzgwMyAyMC44MDA4IDEyLjI4MDMgMjAuNzg5MSAxMS42MTM2IDIwLjc2NTZDMTAuOTQ3IDIwLjc0MjIgMTAuNDQ3IDIwLjczMDUgMTAuMTEzNiAyMC43MzA1QzkuMzEwNjEgMjAuNzMwNSA4LjE0NzczIDIwLjc3MzQgNi42MjUgMjAuODU5NEM1LjEwMjI3IDIwLjk0NTMgNC4yMjcyNyAyMC45OTIyIDQgMjFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTYgMjAuOTc2Nkw2LjE5OTIyIDE5Ljk4MDVDNi4zNzEwOSAxOS45MjU4IDYuNjExMzMgMTkuODYxMyA2LjkxOTkyIDE5Ljc4NzFDNy4yMjg1MiAxOS43MTI5IDcuNTA5NzcgMTkuNjM4NyA3Ljc2MzY3IDE5LjU2NDVDOC4wMTc1OCAxOS40OTAyIDguMjUgMTkuMzk4NCA4LjQ2MDk0IDE5LjI4OTFDOC42Nzk2OSAxOS4wMTU2IDguODM5ODQgMTguNjIxMSA4Ljk0MTQxIDE4LjEwNTVDOC45NDkyMiAxOC4wNTA4IDkuMTkxNDEgMTYuOTIxOSA5LjY2Nzk3IDE0LjcxODhDMTAuMTQ0NSAxMi41MTU2IDEwLjU4OTggMTAuMzkyNiAxMS4wMDM5IDguMzQ5NjFDMTEuNDE4IDYuMzA2NjQgMTEuNjIxMSA1LjE0ODQ0IDExLjYxMzMgNC44NzVWNC41ODIwM0MxMS40MjU4IDQuNDgwNDcgMTEuMjEyOSA0LjQwODIgMTAuOTc0NiA0LjM2NTIzQzEwLjczNjMgNC4zMjIyNyAxMC40NjQ4IDQuMjkxMDIgMTAuMTYwMiA0LjI3MTQ4QzkuODU1NDcgNC4yNTE5NSA5LjYyODkxIDQuMjMwNDcgOS40ODA0NyA0LjIwNzAzTDkuNzAzMTIgM0M5Ljk2MDk0IDMuMDE1NjIgMTAuNDI5NyAzLjA0MTAyIDExLjEwOTQgMy4wNzYxN0MxMS43ODkxIDMuMTExMzMgMTIuMzczIDMuMTM4NjcgMTIuODYxMyAzLjE1ODJDMTMuMzQ5NiAzLjE3NzczIDEzLjgyMDMgMy4xODc1IDE0LjI3MzQgMy4xODc1QzE0LjY0ODQgMy4xODc1IDE1LjAzMzIgMy4xNzc3MyAxNS40Mjc3IDMuMTU4MkMxNS44MjIzIDMuMTM4NjcgMTYuMjk0OSAzLjExMTMzIDE2Ljg0NTcgMy4wNzYxN0MxNy4zOTY1IDMuMDQxMDIgMTcuNzgxMiAzLjAxNTYyIDE4IDNDMTcuOTYwOSAzLjMwNDY5IDE3Ljg4NjcgMy42NTIzNCAxNy43NzczIDQuMDQyOTdDMTcuNTQzIDQuMTIxMDkgMTcuMTQ2NSA0LjIzMjQyIDE2LjU4NzkgNC4zNzY5NUMxNi4wMjkzIDQuNTIxNDggMTUuNjA1NSA0LjY1MjM0IDE1LjMxNjQgNC43Njk1M0MxNS4yNTM5IDQuOTE3OTcgMTUuMTk5MiA1LjA4Mzk4IDE1LjE1MjMgNS4yNjc1OEMxNS4xMDU1IDUuNDUxMTcgMTUuMDcwMyA1LjYwNzQyIDE1LjA0NjkgNS43MzYzM0MxNS4wMjM0IDUuODY1MjMgMTQuOTk0MSA2LjA0Mjk3IDE0Ljk1OSA2LjI2OTUzQzE0LjkyMzggNi40OTYwOSAxNC44OTg0IDYuNjYwMTYgMTQuODgyOCA2Ljc2MTcyQzE0LjY3MTkgNy45MTc5NyAxNC4zMzAxIDkuNTU2NjQgMTMuODU3NCAxMS42Nzc3QzEzLjM4NDggMTMuNzk4OCAxMy4wODIgMTUuMTg3NSAxMi45NDkyIDE1Ljg0MzhDMTIuOTMzNiAxNS45MTQxIDEyLjg4MjggMTYuMTQwNiAxMi43OTY5IDE2LjUyMzRDMTIuNzEwOSAxNi45MDYyIDEyLjYzMjggMTcuMjU3OCAxMi41NjI1IDE3LjU3ODFDMTIuNDkyMiAxNy44OTg0IDEyLjQyOTcgMTguMjI0NiAxMi4zNzUgMTguNTU2NkMxMi4zMjAzIDE4Ljg4ODcgMTIuMjk2OSAxOS4xMTMzIDEyLjMwNDcgMTkuMjMwNUwxMi4zMTY0IDE5LjQ0MTRDMTIuNDQ5MiAxOS40NzI3IDEzLjE3MTkgMTkuNTkzOCAxNC40ODQ0IDE5LjgwNDdDMTQuNDYwOSAyMC4xNDg0IDE0LjM5ODQgMjAuNTM1MiAxNC4yOTY5IDIwLjk2NDhDMTQuMjEwOSAyMC45NjQ4IDE0LjA4NCAyMC45NzA3IDEzLjkxNiAyMC45ODI0QzEzLjc0OCAyMC45OTQxIDEzLjYyMTEgMjEgMTMuNTM1MiAyMUMxMy4zMDg2IDIxIDEyLjk2ODggMjAuOTYwOSAxMi41MTU2IDIwLjg4MjhDMTIuMDYyNSAyMC44MDQ3IDExLjcyNjYgMjAuNzY1NiAxMS41MDc4IDIwLjc2NTZDMTAuNDI5NyAyMC43NSA5LjYyNSAyMC43NDIyIDkuMDkzNzUgMjAuNzQyMkM4LjY5NTMxIDIwLjc0MjIgOC4xMzY3MiAyMC43NzczIDcuNDE3OTcgMjAuODQ3N0M2LjY5OTIyIDIwLjkxOCA2LjIyNjU2IDIwLjk2MDkgNiAyMC45NzY2WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xOC4xMTc2IDE1Ljc2NDdDMTguMTE3NiAxNS41MDMzIDE4LjAyNjEgMTUuMjgxIDE3Ljg0MzEgMTUuMDk4TDE1LjgwMzkgMTMuMDU4OEMxNS42MjA5IDEyLjg3NTggMTUuMzk4NyAxMi43ODQzIDE1LjEzNzMgMTIuNzg0M0MxNC44NjI3IDEyLjc4NDMgMTQuNjI3NSAxMi44ODg5IDE0LjQzMTQgMTMuMDk4QzE0LjQ1MSAxMy4xMTc2IDE0LjUxMzEgMTMuMTc4MSAxNC42MTc2IDEzLjI3OTRDMTQuNzIyMiAxMy4zODA3IDE0Ljc5MjUgMTMuNDUxIDE0LjgyODQgMTMuNDkwMkMxNC44NjQ0IDEzLjUyOTQgMTQuOTEzNCAxMy41OTE1IDE0Ljk3NTUgMTMuNjc2NUMxNS4wMzc2IDEzLjc2MTQgMTUuMDgwMSAxMy44NDQ4IDE1LjEwMjkgMTMuOTI2NUMxNS4xMjU4IDE0LjAwODIgMTUuMTM3MyAxNC4wOTggMTUuMTM3MyAxNC4xOTYxQzE1LjEzNzMgMTQuNDU3NSAxNS4wNDU4IDE0LjY3OTcgMTQuODYyNyAxNC44NjI3QzE0LjY3OTcgMTUuMDQ1OCAxNC40NTc1IDE1LjEzNzMgMTQuMTk2MSAxNS4xMzczQzE0LjA5OCAxNS4xMzczIDE0LjAwODIgMTUuMTI1OCAxMy45MjY1IDE1LjEwMjlDMTMuODQ0OCAxNS4wODAxIDEzLjc2MTQgMTUuMDM3NiAxMy42NzY1IDE0Ljk3NTVDMTMuNTkxNSAxNC45MTM0IDEzLjUyOTQgMTQuODY0NCAxMy40OTAyIDE0LjgyODRDMTMuNDUxIDE0Ljc5MjUgMTMuMzgwNyAxNC43MjIyIDEzLjI3OTQgMTQuNjE3NkMxMy4xNzgxIDE0LjUxMzEgMTMuMTE3NiAxNC40NTEgMTMuMDk4IDE0LjQzMTRDMTIuODgyNCAxNC42MzQgMTIuNzc0NSAxNC44NzI1IDEyLjc3NDUgMTUuMTQ3MUMxMi43NzQ1IDE1LjQwODUgMTIuODY2IDE1LjYzMDcgMTMuMDQ5IDE1LjgxMzdMMTUuMDY4NiAxNy44NDMxQzE1LjI0NTEgMTguMDE5NiAxNS40NjczIDE4LjEwNzggMTUuNzM1MyAxOC4xMDc4QzE1Ljk5NjcgMTguMTA3OCAxNi4yMTkgMTguMDIyOSAxNi40MDIgMTcuODUyOUwxNy44NDMxIDE2LjQyMTZDMTguMDI2MSAxNi4yMzg2IDE4LjExNzYgMTYuMDE5NiAxOC4xMTc2IDE1Ljc2NDdaTTExLjIyNTUgOC44NTI5NEMxMS4yMjU1IDguNTkxNSAxMS4xMzQgOC4zNjkyOCAxMC45NTEgOC4xODYyN0w4LjkzMTM3IDYuMTU2ODZDOC43NDgzNyA1Ljk3Mzg2IDguNTI2MTQgNS44ODIzNSA4LjI2NDcxIDUuODgyMzVDOC4wMDk4IDUuODgyMzUgNy43ODc1OCA1Ljk3MDU5IDcuNTk4MDQgNi4xNDcwNkw2LjE1Njg2IDcuNTc4NDNDNS45NzM4NiA3Ljc2MTQ0IDUuODgyMzUgNy45ODAzOSA1Ljg4MjM1IDguMjM1MjlDNS44ODIzNSA4LjQ5NjczIDUuOTczODYgOC43MTg5NSA2LjE1Njg2IDguOTAxOTZMOC4xOTYwOCAxMC45NDEyQzguMzcyNTUgMTEuMTE3NiA4LjU5NDc3IDExLjIwNTkgOC44NjI3NSAxMS4yMDU5QzkuMTM3MjYgMTEuMjA1OSA5LjM3MjU1IDExLjEwNDYgOS41Njg2MyAxMC45MDJDOS41NDkwMiAxMC44ODI0IDkuNDg2OTMgMTAuODIxOSA5LjM4MjM1IDEwLjcyMDZDOS4yNzc3OCAxMC42MTkzIDkuMjA3NTIgMTAuNTQ5IDkuMTcxNTcgMTAuNTA5OEM5LjEzNTYyIDEwLjQ3MDYgOS4wODY2IDEwLjQwODUgOS4wMjQ1MSAxMC4zMjM1QzguOTYyNDIgMTAuMjM4NiA4LjkxOTkzIDEwLjE1NTIgOC44OTcwNiAxMC4wNzM1QzguODc0MTggOS45OTE4MyA4Ljg2Mjc1IDkuOTAxOTYgOC44NjI3NSA5LjgwMzkyQzguODYyNzUgOS41NDI0OCA4Ljk1NDI1IDkuMzIwMjYgOS4xMzcyNiA5LjEzNzI2QzkuMzIwMjYgOC45NTQyNSA5LjU0MjQ4IDguODYyNzUgOS44MDM5MiA4Ljg2Mjc1QzkuOTAxOTYgOC44NjI3NSA5Ljk5MTgzIDguODc0MTggMTAuMDczNSA4Ljg5NzA2QzEwLjE1NTIgOC45MTk5MyAxMC4yMzg2IDguOTYyNDIgMTAuMzIzNSA5LjAyNDUxQzEwLjQwODUgOS4wODY2IDEwLjQ3MDYgOS4xMzU2MiAxMC41MDk4IDkuMTcxNTdDMTAuNTQ5IDkuMjA3NTIgMTAuNjE5MyA5LjI3Nzc4IDEwLjcyMDYgOS4zODIzNUMxMC44MjE5IDkuNDg2OTMgMTAuODgyNCA5LjU0OTAyIDEwLjkwMiA5LjU2ODYzQzExLjExNzYgOS4zNjYwMSAxMS4yMjU1IDkuMTI3NDUgMTEuMjI1NSA4Ljg1Mjk0Wk0yMCAxNS43NjQ3QzIwIDE2LjU0OSAxOS43MjIyIDE3LjIxMjQgMTkuMTY2NyAxNy43NTQ5TDE3LjcyNTUgMTkuMTg2M0MxNy4xODMgMTkuNzI4OCAxNi41MTk2IDIwIDE1LjczNTMgMjBDMTQuOTQ0NCAyMCAxNC4yNzc4IDE5LjcyMjIgMTMuNzM1MyAxOS4xNjY3TDExLjcxNTcgMTcuMTM3M0MxMS4xNzMyIDE2LjU5NDggMTAuOTAyIDE1LjkzMTQgMTAuOTAyIDE1LjE0NzFDMTAuOTAyIDE0LjM0MzEgMTEuMTg5NSAxMy42NjAxIDExLjc2NDcgMTMuMDk4TDEwLjkwMiAxMi4yMzUzQzEwLjMzOTkgMTIuODEwNSA5LjY2MDEzIDEzLjA5OCA4Ljg2Mjc1IDEzLjA5OEM4LjA3ODQzIDEzLjA5OCA3LjQxMTc2IDEyLjgyMzUgNi44NjI3NSAxMi4yNzQ1TDQuODIzNTMgMTAuMjM1M0M0LjI3NDUxIDkuNjg2MjcgNCA5LjAxOTYxIDQgOC4yMzUyOUM0IDcuNDUwOTggNC4yNzc3OCA2Ljc4NzU4IDQuODMzMzMgNi4yNDUxTDYuMjc0NTEgNC44MTM3M0M2LjgxNjk5IDQuMjcxMjQgNy40ODAzOSA0IDguMjY0NzEgNEM5LjA1NTU2IDQgOS43MjIyMiA0LjI3Nzc4IDEwLjI2NDcgNC44MzMzM0wxMi4yODQzIDYuODYyNzVDMTIuODI2OCA3LjQwNTIzIDEzLjA5OCA4LjA2ODYzIDEzLjA5OCA4Ljg1Mjk0QzEzLjA5OCA5LjY1Njg2IDEyLjgxMDUgMTAuMzM5OSAxMi4yMzUzIDEwLjkwMkwxMy4wOTggMTEuNzY0N0MxMy42NjAxIDExLjE4OTUgMTQuMzM5OSAxMC45MDIgMTUuMTM3MyAxMC45MDJDMTUuOTIxNiAxMC45MDIgMTYuNTg4MiAxMS4xNzY1IDE3LjEzNzMgMTEuNzI1NUwxOS4xNzY1IDEzLjc2NDdDMTkuNzI1NSAxNC4zMTM3IDIwIDE0Ljk4MDQgMjAgMTUuNzY0N1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjEuNzk4MyAxMkMyMS45MDg2IDEyIDIxLjk5OTIgMTIuMDM1MiAyMi4wNzAxIDEyLjEwNTVDMjIuMTQxIDEyLjE3NTggMjIuMTc2NSAxMi4yNjU2IDIyLjE3NjUgMTIuMzc1VjEzLjEyNUMyMi4xNzY1IDEzLjIzNDQgMjIuMTQxIDEzLjMyNDIgMjIuMDcwMSAxMy4zOTQ1QzIxLjk5OTIgMTMuNDY0OCAyMS45MDg2IDEzLjUgMjEuNzk4MyAxMy41SDEuMzc4MTVDMS4yNjc4NiAxMy41IDEuMTc3MjYgMTMuNDY0OCAxLjEwNjM2IDEzLjM5NDVDMS4wMzU0NSAxMy4zMjQyIDEgMTMuMjM0NCAxIDEzLjEyNVYxMi4zNzVDMSAxMi4yNjU2IDEuMDM1NDUgMTIuMTc1OCAxLjEwNjM2IDEyLjEwNTVDMS4xNzcyNiAxMi4wMzUyIDEuMjY3ODYgMTIgMS4zNzgxNSAxMkgyMS43OTgzWk02LjcwNzcyIDExLjI1QzYuNDg3MTMgMTAuOTc2NiA2LjI4NjI0IDEwLjY2NDEgNi4xMDUwNCAxMC4zMTI1QzUuNzI2ODkgOS41NDY4OCA1LjUzNzgyIDguODEyNSA1LjUzNzgyIDguMTA5MzhDNS41Mzc4MiA2LjY5NTMxIDYuMDY1NjUgNS40ODgyOCA3LjEyMTMyIDQuNDg4MjhDOC4xNjkxMiAzLjQ5NjA5IDkuNzE3MTcgMyAxMS43NjU1IDNDMTIuMTU5NCAzIDEyLjgxNzIgMy4wNzQyMiAxMy43MzkgMy4yMjI2NkMxNC4yNTg5IDMuMzE2NDEgMTQuOTU2MSAzLjUwMzkxIDE1LjgzMDYgMy43ODUxNkMxNS45MDk0IDQuMDgyMDMgMTUuOTkyMSA0LjU0Mjk3IDE2LjA3ODggNS4xNjc5N0MxNi4xODkxIDYuMTI4OTEgMTYuMjQ0MiA2Ljg0Mzc1IDE2LjI0NDIgNy4zMTI1QzE2LjI0NDIgNy40NTMxMiAxNi4yMjQ1IDcuNjI4OTEgMTYuMTg1MSA3LjgzOTg0TDE2LjA0MzMgNy44NzVMMTUuMDUwNyA3LjgwNDY5TDE0Ljg4NTIgNy43ODEyNUMxNC40OTEzIDYuNjE3MTkgMTQuMDg1NiA1LjgxNjQxIDEzLjY2ODEgNS4zNzg5MUMxMi45NzQ4IDQuNjY3OTcgMTIuMTQ3NiA0LjMxMjUgMTEuMTg2NCA0LjMxMjVDMTAuMjg4MyA0LjMxMjUgOS41NzE0MyA0LjU0Mjk3IDkuMDM1NzEgNS4wMDM5MUM4LjUwNzg4IDUuNDU3MDMgOC4yNDM5NiA2LjAyNzM0IDguMjQzOTYgNi43MTQ4NEM4LjI0Mzk2IDcuMjg1MTYgOC41MDM5NCA3LjgzMjAzIDkuMDIzOSA4LjM1NTQ3QzkuNTQzODUgOC44Nzg5MSAxMC42NDI5IDkuMzgyODEgMTIuMzIwOSA5Ljg2NzE5QzEyLjg2NDUgMTAuMDIzNCAxMy41NDYgMTAuMjgxMiAxNC4zNjUzIDEwLjY0MDZDMTQuODIyMiAxMC44NTk0IDE1LjE5NjQgMTEuMDYyNSAxNS40ODc5IDExLjI1SDYuNzA3NzJaTTEyLjY5OTEgMTQuMjVIMTcuNTU1OUMxNy42MTExIDE0LjU1NDcgMTcuNjM4NyAxNC45MTQxIDE3LjYzODcgMTUuMzI4MUMxNy42Mzg3IDE2LjE5NTMgMTcuNDc3MiAxNy4wMjM0IDE3LjE1NDEgMTcuODEyNUMxNi45NzMgMTguMjUgMTYuNjkzMyAxOC42NTYyIDE2LjMxNTEgMTkuMDMxMkMxNi4wMjM2IDE5LjMwNDcgMTUuNTk0MyAxOS42MjExIDE1LjAyNyAxOS45ODA1QzE0LjM5NjggMjAuMzU1NSAxMy43OTQxIDIwLjYxMzMgMTMuMjE5IDIwLjc1MzlDMTIuNTg4OCAyMC45MTggMTEuNzg5MSAyMSAxMC44MjAxIDIxQzkuOTIyMDEgMjEgOS4xNTM4OSAyMC45MTAyIDguNTE1NzYgMjAuNzMwNUw2Ljg2MTM0IDIwLjI2MTdDNi40MTIyOSAyMC4xMzY3IDYuMTI4NjggMjAuMDI3MyA2LjAxMDUgMTkuOTMzNkM1Ljk0NzQ4IDE5Ljg3MTEgNS45MTU5NyAxOS43ODUyIDUuOTE1OTcgMTkuNjc1OFYxOS41MjM0QzUuOTE1OTcgMTguNjc5NyA1LjkwODA5IDE4LjA3MDMgNS44OTIzMyAxNy42OTUzQzUuODg0NDUgMTcuNDYwOSA1Ljg4NDQ1IDE3LjE5NTMgNS44OTIzMyAxNi44OTg0TDUuOTE1OTcgMTYuNDY0OFYxNS45NDkyTDcuMTIxMzIgMTUuOTI1OEM3LjIzOTUgMTYuMTkxNCA3LjM1NzY3IDE2LjQ2ODggNy40NzU4NCAxNi43NTc4QzcuNTk0MDEgMTcuMDQ2OSA3LjY4MjY0IDE3LjI2NTYgNy43NDE3MyAxNy40MTQxQzcuODAwODEgMTcuNTYyNSA3Ljg1MDA1IDE3LjY2OCA3Ljg4OTQ0IDE3LjczMDVDOC4xNjUxOCAxOC4xNzU4IDguNDgwMyAxOC41NDMgOC44MzQ4MiAxOC44MzJDOS4xNzM1OCAxOS4xMTMzIDkuNTg3MTggMTkuMzM1OSAxMC4wNzU2IDE5LjVDMTAuNTQwNCAxOS42NzE5IDExLjA2MDQgMTkuNzU3OCAxMS42MzU1IDE5Ljc1NzhDMTIuMTM5NyAxOS43NTc4IDEyLjY4NzIgMTkuNjUyMyAxMy4yNzgxIDE5LjQ0MTRDMTMuODg0NyAxOS4yMzgzIDE0LjM2NTMgMTguOTAyMyAxNC43MTk4IDE4LjQzMzZDMTUuMDkwMSAxNy45NTcgMTUuMjc1MiAxNy40NTMxIDE1LjI3NTIgMTYuOTIxOUMxNS4yNzUyIDE2LjI2NTYgMTQuOTU2MSAxNS42NTIzIDE0LjMxOCAxNS4wODJDMTQuMDUwMiAxNC44NTU1IDEzLjUxMDUgMTQuNTc4MSAxMi42OTkxIDE0LjI1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk03IDQuNTU1NTZDNyA0LjQwNTA5IDcuMDU1NjYgNC4yNzQ4OSA3LjE2Njk5IDQuMTY0OTNDNy4yNzgzMiA0LjA1NDk4IDcuNDEwMTYgNCA3LjU2MjUgNEwxNS40Mzc1IDRDMTUuNTg5OCA0IDE1LjcyMTcgNC4wNTQ5OCAxNS44MzMgNC4xNjQ5M0MxNS45NDQzIDQuMjc0ODggMTYgNC40MDUwOSAxNiA0LjU1NTU2QzE2IDQuNzA2MDIgMTUuOTQ0MyA0LjgzNjIzIDE1LjgzMyA0Ljk0NjE4TDExLjg5NTUgOC44MzUwN0MxMS43ODQyIDguOTQ1MDIgMTEuNjUyMyA5IDExLjUgOUMxMS4zNDc3IDkgMTEuMjE1OCA4Ljk0NTAyIDExLjEwNDUgOC44MzUwN0w3LjE2Njk5IDQuOTQ2MThDNy4wNTU2NiA0LjgzNjIzIDcgNC43MDYwMiA3IDQuNTU1NTZaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE0LjM5NTUgMjFIOS40MzQ1N1YxOS45MjU4TDExLjcxOTcgMTcuNTIzNEMxMi4yODI5IDE2Ljg4MjIgMTIuNTY0NSAxNi4zNzI3IDEyLjU2NDUgMTUuOTk1MUMxMi41NjQ1IDE1LjY4OTEgMTIuNDk3NyAxNS40NTY0IDEyLjM2NDMgMTUuMjk2OUMxMi4yMzA4IDE1LjEzNzQgMTIuMDM3MSAxNS4wNTc2IDExLjc4MzIgMTUuMDU3NkMxMS41MzI2IDE1LjA1NzYgMTEuMzI5MSAxNS4xNjUgMTEuMTcyOSAxNS4zNzk5QzExLjAxNjYgMTUuNTkxNSAxMC45Mzg1IDE1Ljg1NjggMTAuOTM4NSAxNi4xNzU4SDkuMjg4MDlDOS4yODgwOSAxNS43Mzk2IDkuMzk3MTQgMTUuMzM3NiA5LjYxNTIzIDE0Ljk2OTdDOS44MzMzMyAxNC41OTg2IDEwLjEzNjEgMTQuMzA4OSAxMC41MjM0IDE0LjEwMDZDMTAuOTEwOCAxMy44OTIzIDExLjM0MzggMTMuNzg4MSAxMS44MjIzIDEzLjc4ODFDMTIuNTkwNSAxMy43ODgxIDEzLjE4MTMgMTMuOTY1NSAxMy41OTQ3IDE0LjMyMDNDMTQuMDExNCAxNC42NzUxIDE0LjIxOTcgMTUuMTg0NiAxNC4yMTk3IDE1Ljg0ODZDMTQuMjE5NyAxNi4xMjg2IDE0LjE2NzYgMTYuNDAyIDE0LjA2MzUgMTYuNjY4OUMxMy45NTkzIDE2LjkzMjYgMTMuNzk2NSAxNy4yMTA5IDEzLjU3NTIgMTcuNTAzOUMxMy4zNTcxIDE3Ljc5MzYgMTMuMDAzOSAxOC4xODI2IDEyLjUxNTYgMTguNjcwOUwxMS41OTc3IDE5LjczMDVIMTQuMzk1NVYyMVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuNjQ5MyA0LjE4NzVWNC44NzMwNUMxMC42NDkzIDQuOTIzODMgMTAuNjI4NCA0Ljk2NjggMTAuNTg2NyA1LjAwMTk1QzEwLjU0NDkgNS4wMzcxMSAxMC40OTU1IDUuMDU0NjkgMTAuNDM4NCA1LjA1NDY5SDguNDczOTZWOS44MTI1QzguNDczOTYgOS44NjMyOCA4LjQ1NDE5IDkuOTA3MjMgOC40MTQ2MyA5Ljk0NDM0QzguMzc1MDggOS45ODE0NSA4LjMyNjc0IDEwIDguMjY5NjEgMTBINy4zNzk3QzcuMzIyNTcgMTAgNy4yNzMxMyA5Ljk4MjQyIDcuMjMxMzggOS45NDcyN0M3LjE4OTYzIDkuOTEyMTEgNy4xNjg3NSA5Ljg2NzE5IDcuMTY4NzUgOS44MTI1VjUuMDU0NjlINS4yMTA5NEM1LjE1MzgxIDUuMDU0NjkgNS4xMDQzNyA1LjAzNzExIDUuMDYyNjIgNS4wMDE5NUM1LjAyMDg3IDQuOTY2OCA1IDQuOTIzODMgNSA0Ljg3MzA1VjQuMTg3NUM1IDQuMTMyODEgNS4wMTk3OCA0LjA4Nzg5IDUuMDU5MzMgNC4wNTI3M0M1LjA5ODg4IDQuMDE3NTggNS4xNDk0MiA0IDUuMjEwOTQgNEgxMC40Mzg0QzEwLjQ5NTUgNCAxMC41NDQ5IDQuMDE4NTUgMTAuNTg2NyA0LjA1NTY2QzEwLjYyODQgNC4wOTI3NyAxMC42NDkzIDQuMTM2NzIgMTAuNjQ5MyA0LjE4NzVaTTE3LjQ5MTggNC4xNjk5MkwxNy45OTkzIDkuODAwNzhDMTguMDAzNyA5Ljg1MTU2IDE3Ljk4NjIgOS44OTg0NCAxNy45NDY2IDkuOTQxNDFDMTcuOTAyNyA5Ljk4MDQ3IDE3Ljg1MjEgMTAgMTcuNzk1IDEwSDE2LjkxMTdDMTYuODU4OSAxMCAxNi44MTI4IDkuOTgzNCAxNi43NzMyIDkuOTUwMkMxNi43MzM3IDkuOTE2OTkgMTYuNzExNyA5Ljg3Njk1IDE2LjcwNzMgOS44MzAwOEwxNi40MDQxIDYuMzg0NzdMMTUuMTU4MiA4Ljg3NUMxNS4xMjMgOC45NDkyMiAxNS4wNTkzIDguOTg2MzMgMTQuOTY3IDguOTg2MzNIMTQuMTc2QzE0LjA4ODEgOC45ODYzMyAxNC4wMjQ0IDguOTQ5MjIgMTMuOTg0OCA4Ljg3NUwxMi43NDU2IDYuMzczMDVMMTIuNDQ4OSA5LjgzMDA4QzEyLjQ0NDUgOS44NzY5NSAxMi40MjI1IDkuOTE2OTkgMTIuMzgzIDkuOTUwMkMxMi4zNDM0IDkuOTgzNCAxMi4yOTczIDEwIDEyLjI0NDYgMTBIMTEuMzU0NkMxMS4yOTc1IDEwIDExLjI0NyA5Ljk4MDQ3IDExLjIwMyA5Ljk0MTQxQzExLjE2MzUgOS45MDIzNCAxMS4xNDM3IDkuODU1NDcgMTEuMTQzNyA5LjgwMDc4TDExLjY1NzkgNC4xNjk5MkMxMS42NjIzIDQuMTIzMDUgMTEuNjg0MiA0LjA4MzAxIDExLjcyMzggNC4wNDk4QzExLjc2MzMgNC4wMTY2IDExLjgwOTUgNCAxMS44NjIyIDRIMTIuNzk4M0MxMi44ODYyIDQgMTIuOTQ5OSA0LjAzNzExIDEyLjk4OTUgNC4xMTEzM0wxNC40Mzk3IDcuMTU4MkMxNC40ODM2IDcuMjUxOTUgMTQuNTI3NiA3LjM1MTU2IDE0LjU3MTUgNy40NTcwM0MxNC41ODQ3IDcuNDI5NjkgMTQuNjA1NiA3LjM4MTg0IDE0LjYzNDEgNy4zMTM0OEMxNC42NjI3IDcuMjQ1MTIgMTQuNjg1OCA3LjE5MzM2IDE0LjcwMzQgNy4xNTgyTDE2LjE2MDIgNC4xMTEzM0MxNi4xOTk3IDQuMDM3MTEgMTYuMjYzNSA0IDE2LjM1MTQgNEgxNy4yODA4QzE3LjMzNzkgNCAxNy4zODYzIDQuMDE2NiAxNy40MjU4IDQuMDQ5OEMxNy40NjU0IDQuMDgzMDEgMTcuNDg3NCA0LjEyMzA1IDE3LjQ5MTggNC4xNjk5MlpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYgMjAuNDQ0NEMxNiAyMC41OTQ5IDE1Ljk0NDMgMjAuNzI1MSAxNS44MzMgMjAuODM1MUMxNS43MjE3IDIwLjk0NSAxNS41ODk4IDIxIDE1LjQzNzUgMjFINy41NjI1QzcuNDEwMTYgMjEgNy4yNzgzMiAyMC45NDUgNy4xNjY5OSAyMC44MzUxQzcuMDU1NjYgMjAuNzI1MSA3IDIwLjU5NDkgNyAyMC40NDQ0QzcgMjAuMjk0IDcuMDU1NjYgMjAuMTYzOCA3LjE2Njk5IDIwLjA1MzhMMTEuMTA0NSAxNi4xNjQ5QzExLjIxNTggMTYuMDU1IDExLjM0NzcgMTYgMTEuNSAxNkMxMS42NTIzIDE2IDExLjc4NDIgMTYuMDU1IDExLjg5NTUgMTYuMTY0OUwxNS44MzMgMjAuMDUzOEMxNS45NDQzIDIwLjE2MzggMTYgMjAuMjk0IDE2IDIwLjQ0NDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMuNTYyNSA0LjExMzI4QzMuMjczNDQgNC4wOTc2NiAzLjA5NzY2IDQuMDgyMDMgMy4wMzUxNiA0LjA2NjQxTDMgMy4wMzUxNkMzLjEwMTU2IDMuMDI3MzQgMy4yNTc4MSAzLjAyMzQ0IDMuNDY4NzUgMy4wMjM0NEMzLjkzNzUgMy4wMjM0NCA0LjM3NSAzLjAzOTA2IDQuNzgxMjUgMy4wNzAzMUM1LjgxMjUgMy4xMjUgNi40NjA5NCAzLjE1MjM0IDYuNzI2NTYgMy4xNTIzNEM3LjM5ODQ0IDMuMTUyMzQgOC4wNTQ2OSAzLjE0MDYyIDguNjk1MzEgMy4xMTcxOUM5LjYwMTU2IDMuMDg1OTQgMTAuMTcxOSAzLjA2NjQxIDEwLjQwNjIgMy4wNTg1OUMxMC44NDM4IDMuMDU4NTkgMTEuMTc5NyAzLjA1MDc4IDExLjQxNDEgMy4wMzUxNkwxMS40MDIzIDMuMTk5MjJMMTEuNDI1OCAzLjk0OTIyVjQuMDU0NjlDMTAuOTU3IDQuMTI1IDEwLjQ3MjcgNC4xNjAxNiA5Ljk3MjY2IDQuMTYwMTZDOS41MDM5MSA0LjE2MDE2IDkuMTk1MzEgNC4yNTc4MSA5LjA0Njg4IDQuNDUzMTJDOC45NDUzMSA0LjU2MjUgOC44OTQ1MyA1LjA3ODEyIDguODk0NTMgNkM4Ljg5NDUzIDYuMTAxNTYgOC44OTY0OCA2LjIyODUyIDguOTAwMzkgNi4zODA4NkM4LjkwNDMgNi41MzMyIDguOTA2MjUgNi42MzI4MSA4LjkwNjI1IDYuNjc5NjlMOC45MTc5NyA5LjM2MzI4TDkuMDgyMDMgMTIuNjQ0NUM5LjEyODkxIDEzLjYxMzMgOS4zMjgxMiAxNC40MDIzIDkuNjc5NjkgMTUuMDExN0M5Ljk1MzEyIDE1LjQ3MjcgMTAuMzI4MSAxNS44MzIgMTAuODA0NyAxNi4wODk4QzExLjQ5MjIgMTYuNDU3IDEyLjE4MzYgMTYuNjQwNiAxMi44Nzg5IDE2LjY0MDZDMTMuNjkxNCAxNi42NDA2IDE0LjQzNzUgMTYuNTMxMiAxNS4xMTcyIDE2LjMxMjVDMTUuNTU0NyAxNi4xNzE5IDE1Ljk0MTQgMTUuOTcyNyAxNi4yNzczIDE1LjcxNDhDMTYuNjUyMyAxNS40MzM2IDE2LjkwNjIgMTUuMTgzNiAxNy4wMzkxIDE0Ljk2NDhDMTcuMzIwMyAxNC41MjczIDE3LjUyNzMgMTQuMDgyIDE3LjY2MDIgMTMuNjI4OUMxNy44MjQyIDEzLjA1ODYgMTcuOTA2MiAxMi4xNjQxIDE3LjkwNjIgMTAuOTQ1M0MxNy45MDYyIDEwLjMyODEgMTcuODkyNiA5LjgyODEyIDE3Ljg2NTIgOS40NDUzMUMxNy44Mzc5IDkuMDYyNSAxNy43OTQ5IDguNTgzOTggMTcuNzM2MyA4LjAwOTc3QzE3LjY3NzcgNy40MzU1NSAxNy42MjUgNi44MTI1IDE3LjU3ODEgNi4xNDA2MkwxNy41MzEyIDUuNDQ5MjJDMTcuNDkyMiA0LjkyNTc4IDE3LjM5ODQgNC41ODIwMyAxNy4yNSA0LjQxNzk3QzE2Ljk4NDQgNC4xNDQ1MyAxNi42ODM2IDQuMDExNzIgMTYuMzQ3NyA0LjAxOTUzTDE1LjE3NTggNC4wNDI5N0wxNS4wMTE3IDQuMDA3ODFMMTUuMDM1MiAzSDE2LjAxOTVMMTguNDIxOSAzLjExNzE5QzE5LjAxNTYgMy4xNDA2MiAxOS43ODEyIDMuMTAxNTYgMjAuNzE4OCAzTDIwLjkyOTcgMy4wMjM0NEMyMC45NzY2IDMuMzIwMzEgMjEgMy41MTk1MyAyMSAzLjYyMTA5QzIxIDMuNjc1NzggMjAuOTg0NCAzLjc5Njg4IDIwLjk1MzEgMy45ODQzOEMyMC42MDE2IDQuMDc4MTIgMjAuMjczNCA0LjEyODkxIDE5Ljk2ODggNC4xMzY3MkMxOS4zOTg0IDQuMjIyNjYgMTkuMDg5OCA0LjI4OTA2IDE5LjA0MyA0LjMzNTk0QzE4LjkyNTggNC40NTMxMiAxOC44NjcyIDQuNjEzMjggMTguODY3MiA0LjgxNjQxQzE4Ljg2NzIgNC44NzEwOSAxOC44NzMgNC45NzY1NiAxOC44ODQ4IDUuMTMyODFDMTguODk2NSA1LjI4OTA2IDE4LjkwMjMgNS40MTAxNiAxOC45MDIzIDUuNDk2MDlDMTguOTY0OCA1LjY0NDUzIDE5LjA1MDggNy4xOTE0MSAxOS4xNjAyIDEwLjEzNjdDMTkuMjA3IDExLjY2MDIgMTkuMTQ4NCAxMi44NDc3IDE4Ljk4NDQgMTMuNjk5MkMxOC44NjcyIDE0LjI5MyAxOC43MDcgMTQuNzY5NSAxOC41MDM5IDE1LjEyODlDMTguMjA3IDE1LjYzNjcgMTcuNzY5NSAxNi4xMTcyIDE3LjE5MTQgMTYuNTcwM0MxNi42MDU1IDE3LjAxNTYgMTUuODk0NSAxNy4zNjMzIDE1LjA1ODYgMTcuNjEzM0MxNC4yMDcgMTcuODcxMSAxMy4yMTA5IDE4IDEyLjA3MDMgMThDMTAuNzY1NiAxOCA5LjY1NjI1IDE3LjgyMDMgOC43NDIxOSAxNy40NjA5QzcuODEyNSAxNy4wOTM4IDcuMTEzMjggMTYuNjE3MiA2LjY0NDUzIDE2LjAzMTJDNi4xNjc5NyAxNS40Mzc1IDUuODQzNzUgMTQuNjc1OCA1LjY3MTg4IDEzLjc0NjFDNS41NDY4OCAxMy4xMjExIDUuNDg0MzggMTIuMTk1MyA1LjQ4NDM4IDEwLjk2ODhWNy4wNjY0MUM1LjQ4NDM4IDUuNTk3NjYgNS40MTc5NyA0Ljc2NTYyIDUuMjg1MTYgNC41NzAzMUM1LjA4OTg0IDQuMjg5MDYgNC41MTU2MiA0LjEzNjcyIDMuNTYyNSA0LjExMzI4Wk0yMSAyMC42MjVWMTkuODc1QzIxIDE5Ljc2NTYgMjAuOTY0OCAxOS42NzU4IDIwLjg5NDUgMTkuNjA1NUMyMC44MjQyIDE5LjUzNTIgMjAuNzM0NCAxOS41IDIwLjYyNSAxOS41SDMuMzc1QzMuMjY1NjIgMTkuNSAzLjE3NTc4IDE5LjUzNTIgMy4xMDU0NyAxOS42MDU1QzMuMDM1MTYgMTkuNjc1OCAzIDE5Ljc2NTYgMyAxOS44NzVWMjAuNjI1QzMgMjAuNzM0NCAzLjAzNTE2IDIwLjgyNDIgMy4xMDU0NyAyMC44OTQ1QzMuMTc1NzggMjAuOTY0OCAzLjI2NTYyIDIxIDMuMzc1IDIxSDIwLjYyNUMyMC43MzQ0IDIxIDIwLjgyNDIgMjAuOTY0OCAyMC44OTQ1IDIwLjg5NDVDMjAuOTY0OCAyMC44MjQyIDIxIDIwLjczNDQgMjEgMjAuNjI1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNSA4djhINVY4aDEwbTEtMkg0Yy0uNTUgMC0xIC40NS0xIDF2MTBjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xdi0zLjVsNCA0di0xMWwtNCA0VjdjMC0uNTUtLjQ1LTEtMS0xelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiZXhwb3J0IHZhciBpY29ucyA9IHt9O1xuXG5pY29ucy5ib2xkID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfYm9sZC5zdmdcIik7XG5pY29ucy5pdGFsaWMgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9pdGFsaWMuc3ZnXCIpO1xuaWNvbnMudW5kZXJsaW5lID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfdW5kZXJsaW5lLnN2Z1wiKTtcbmljb25zLnN0cmlrZSA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N0cmlrZS5zdmdcIik7XG5pY29ucy5zdXAgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdXAuc3ZnXCIpO1xuaWNvbnMuc3ViID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3ViLnN2Z1wiKTtcbmljb25zLmxpbmsgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9saW5rLnN2Z1wiKTtcbmljb25zLmhlYWRlciA9IHJlcXVpcmUoXCIuL3N2Zy9oZWFkZXItMjRweC5zdmdcIik7XG5pY29ucy5jb2RlID0gcmVxdWlyZShcIi4vc3ZnL2NvZGUtbXktMjRweC5zdmdcIik7XG5pY29ucy5yYXcgPSByZXF1aXJlKFwiLi9zdmcvY29kZS0yNHB4LnN2Z1wiKTtcbmljb25zLm5vZm9ybWF0ID0gcmVxdWlyZShcIi4vc3ZnL3JlbW92ZS1mb3JtYXQuc3ZnXCIpO1xuXG5pY29ucy51cCA9IHJlcXVpcmUoXCIuL3N2Zy9hcnJvd191cHdhcmQtMjRweC5zdmdcIik7XG5pY29ucy5kb3duID0gcmVxdWlyZShcIi4vc3ZnL2Fycm93X2Rvd253YXJkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZGVsID0gcmVxdWlyZShcIi4vc3ZnL2NsZWFyLTI0cHguc3ZnXCIpO1xuaWNvbnMuYWRkID0gcmVxdWlyZShcIi4vc3ZnL2FkZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRpdmlkZXIgPSByZXF1aXJlKFwiLi9zdmcvZGl2aWRlci0yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwgPSB7fTtcblxuaWNvbnMubWF0ZXJpYWwuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfYm9sZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLml0YWxpYyA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfaXRhbGljLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwudW5kZXJsaW5lID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF91bmRlcmxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuc3RyaWtlID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9zdHJpa2V0aHJvdWdoLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGluayA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlua29mZiA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rX29mZi0yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlzdCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnZpZGVvID0gcmVxdWlyZShcIi4vc3ZnL3ZpZGVvY2FtLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuaW1hZ2UgPSByZXF1aXJlKFwiLi9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucGFyYWdyYXBoID0gcmVxdWlyZShcIi4vc3ZnL3BhcmFncmFwaC1yZW1peC0yNHB4LnN2Z1wiKTtcblxuXG5cbmV4cG9ydCB2YXIgbXljeWFuID0gXCIjM0VEOUUzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFN0eWxlKHN0c3RyKXtcbiAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzLmlubmVySFRNTCA9IHN0c3RyO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG59XG5cbi8vaW5qZWN0U3R5bGUoYGJvZHl7Y29sb3I6ICM0NDQ7fWApO1xuXG5leHBvcnQgZnVuY3Rpb24gQXNrKHByKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHIgPSBwcm9tcHQocHIpO1xuICAgICAgICBpZiAocikgeyByZXNvbHZlKHIpIH0gZWxzZSB7IHJlamVjdChcIk5vIGlucHV0XCIpIH07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgIGxldCB0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHR0LnN0eWxlLnpJbmRleCA9IDIwO1xuICAgIHR0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICAgIGxldCB0dGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dC5hcHBlbmRDaGlsZCh0dGluKTtcbiAgICB0dGluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjkpXCI7XG4gICAgdHRpbi5zdHlsZS5jb2xvciA9IFwiIzg4ODg4OFwiO1xuICAgIHR0aW4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHR0aW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcbiAgICB0dGluLnN0eWxlLnBhZGRpbmcgPSBcIjRweCA4cHhcIjtcbiAgICB0dGluLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHR0aW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIycHhcIjtcbiAgICB0dGluLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCAycHggMnB4ICMwMDAwMDAyMlwiO1xuICAgIHR0aW4uc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIHR0aW4uc3R5bGUuYm90dG9tID0gXCIxNnB4XCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR0KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCB0dGIgPSB0dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIHR0LnN0eWxlLnRvcCA9IChlLmNsaWVudFkgLSB0dGIgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG4gICAgICAgIHR0LnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XG5cbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5kYXRhc2V0LmhpbnQpIHtcbiAgICAgICAgICAgIHR0aW4uaW5uZXJIVE1MID0gZS50YXJnZXQuZGF0YXNldC5oaW50O1xuICAgICAgICAgICAgLy8gdHQuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICAgICAgICAgICAgLy8gIHR0LnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XG4gICAgICAgICAgICB0dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRUb29scygpIHtcbiAgICBsZXQgdHRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dG9vbHMuc3R5bGUubWluV2lkdGggPSBcIjEwMHB4XCI7XG4gICAgdHRvb2xzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0X3Rvb2xib3hcIik7XG4gICAgLy90dG9vbHMuc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgdHRvb2xzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG15Y3lhbjtcbiAgICB0dG9vbHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dG9vbHMuc3R5bGUucGFkZGluZyA9IFwiMHB4IDhweFwiO1xuICAgIGNvbnNvbGUubG9nKFwiYXBwZW5kIHRleHQgdG9vbHNcIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR0b29scyk7XG4gICAgLy9idXR0b25zXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uKGxibCwgZnVuYywgaGludCkge1xuICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGIuaW5uZXJIVE1MID0gbGJsO1xuICAgICAgICBiLnN0eWxlLndpZHRoID0gXCIxOHB4XCI7XG4gICAgICAgIGIuc3R5bGUuaGVpZ2h0ID0gXCIxOHB4XCI7XG4gICAgICAgIGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgYi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jKTtcbiAgICAgICAgYi5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgICAgICBiLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBiLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgICAgICBiLm9ubW91c2VvdmVyID0gKCk9PiBiLnN0eWxlLmZpbGwgPSBcImJsYWNrXCI7XG4gICAgICAgIGIub25tb3VzZW91dCA9ICgpPT4gYi5zdHlsZS5maWxsID0gXCJ3aGl0ZVwiO1xuICAgICAgICBsZXQgc3YgPSBiLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gICAgICAgIHN2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjsvLy5zdHlsZS5wb2ludGVyRXZlbnRzKFwibm9uZVwiKTtcbiAgICAgICAgaWYgKGhpbnQpIHsgYi5kYXRhc2V0LmhpbnQgPSBoaW50IH07XG4gICAgICAgIHR0b29scy5hcHBlbmRDaGlsZChiKTtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwuYm9sZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJvbGRcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiQm9sZFwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5tYXRlcmlhbC5pdGFsaWMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJJdGFsaWNcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwudW5kZXJsaW5lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlVuZGVybGluZVwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5tYXRlcmlhbC5zdHJpa2UsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN0cmlrZVwiKVxuICAgIC8qXG4gICAgYWRkQnV0dG9uKFwic21hbGxcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWNyZWFzZUZvbnRTaXplXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICAqL1xuICAgIGFkZEJ1dHRvbihpY29ucy5zdXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3VwZXJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3ViLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdWJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubWF0ZXJpYWwubGluaywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgQXNrKFwiRW50ZXIgVVJMXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiLCBmYWxzZSwgdW5lc2NhcGUocikpKVxuICAgICAgICAgICAgLmNhdGNoKHI9PmNvbnNvbGUubG9nKHIpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiTWFrZSBsaW5rXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLm1hdGVyaWFsLmxpbmtvZmYsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5saW5rXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJSZW1vdmUgbGlua1wiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5ub2Zvcm1hdCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJyZW1vdmVGb3JtYXRcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlJlbW92ZSBmb3JtYXR0aW5nXCIpXG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlbCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBsZXQgY2UgPSBlbDtcbiAgICAgICAgLy9pZighY2Upe3JldHVybiBudWxsfTtcbiAgICAgICAgd2hpbGUoIWNlLmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiBjZS5ub2RlTmFtZSE9XCJCT0RZXCIpeyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2UgPSBjZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYoIWNlKXtyZXR1cm4gbnVsbH07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXB0b1wiICwgY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpe1xuICAgICAgICAgICAgcmV0dXJuIGNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpO1xuICAgICAgICBsZXQgZWljID0gdGVzdEVkaXRhYmxlQ29udGFpbmVyKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKGVpYyAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlaWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUubGVmdCA9IHRndC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGxldCB0dGhlID0gdHRvb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcCAtIHR0aGUgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG5cbiAgICAgICAgLy99IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRfdG9vbGJveFwiKSkge1xuICAgICAgICAgICAgLy90dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGJsb2NrLCBtZW51KSB7XG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vbWVudVxuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgIGRkLnN0eWxlLnRvcCA9IFwiMTAwJVwiO1xuICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBkZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLm1heFdpZHRoID0gXCIxMDBweFwiO1xuICAgIGRkLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCA2cHggcmdiYSgwJSwgMCUsIDAlLCAwLjMwNClcIlxuICAgIC8vZGQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JheVwiXG4gICAgbWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlbGVtZW50Lmljb247XG4gICAgICAgIC8vbWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBtaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmZlci1ib3hcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiNHB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBtaS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG1pLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmZpbGwgPSBteWN5YW47XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gbXljeWFuO1xuICAgICAgICBtaS5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICBtaS5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIlxuICAgICAgICBsZXQgbWlzdmcgPSBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBpZihtaXN2Zyl7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aD1cIjI0cHhcIjtcbiAgICAgICAgICAgIG1pc3ZnLnN0eWxlLmhlaWdodD1cIjI0cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBtaS5vbm1vdXNlb3ZlciA9ICgpPT4ge21pLnN0eWxlLmZpbGw9XCJibGFja1wiIDsgbWkuc3R5bGUuY29sb3I9XCJibGFja1wifTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpPT4ge21pLnN0eWxlLmZpbGw9bXljeWFuIDsgbWkuc3R5bGUuY29sb3I9bXljeWFufTtcblxuICAgICAgICBcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkZC5hcHBlbmRDaGlsZChtaSlcbiAgICB9KTtcbiAgICAvL1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGRkKTtcblxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZG93blwiKTtcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjAxMSlcIjtcbiAgICBidXR0b24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuZmlsbCA9IG15Y3lhbjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrQ29udHJvbHMoYmxvY2ssIGl0ZW1zLCBlZCkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGJsb2NrX2VkaXRvcl91bml0XG4gICAgICovXG4gICAgYmxvY2suc3R5bGUucGFkZGluZz1cIjAgMzJweFwiO1xuICAgIGJsb2NrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgYmxvY2suc3R5bGUubWFyZ2luID0gXCIwIC0zMnB4XCJcbiAgICBpZiAoIWl0ZW1zICYmIGVkKSB7XG4gICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpY29ucy51cCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgZG93blwiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLmRvd24sXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcImRlbGV0ZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLmRlbCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLnJlbW92ZUJsb2NrKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiICsgYmxvY2suZGF0YXNldC5ibG9ja19pZDtcbiAgICBsZXQgY3RybHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQoXCJjb21tb25fYmxvY2tfY29udHJvbHNcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChvdXJjbGFzcyk7XG4gICAgY3RybHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY3RybHMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBjdHJscy5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBjdHJscy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZlZVwiO1xuICAgIGN0cmxzLnN0eWxlLmJvcmRlckxlZnQgPSBcIjNweCBzb2xpZCBcIiArIG15Y3lhbjtcbiAgICBjdHJscy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBjdHJscy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gNjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiB9KTtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIH0pO1xuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7IGN0cmxzLnN0eWxlLnpJbmRleCA9IDU7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIgfSk7XG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiB9KTtcblxuXG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGUuaWNvbjtcbiAgICAgICAgbWkucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBtaS5zdHlsZS5oZWlnaHQ9XCIyNHB4XCI7XG4gICAgICAgIG1pLnN0eWxlLmZpbGwgPSBteWN5YW47XG4gICAgICAgIG1pLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGUubGFiZWw7XG4gICAgICAgIGN0cmxzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGN0cmxzKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==