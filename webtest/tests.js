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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bled/testing.js");
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
            _ui__WEBPACK_IMPORTED_MODULE_0__["addPlusButton"](domblock, this.addMenu);
            _ui__WEBPACK_IMPORTED_MODULE_0__["addBlockControls"](domblock, null, this);

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
            "editor" : "",
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

/***/ "./src/bled/svg/header-24px.svg":
/*!**************************************!*\
  !*** ./src/bled/svg/header-24px.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path><rect x=\"4\" y=\"10\" width=\"14\" height=\"2\"></rect><rect x=\"4\" y=\"4\" width=\"16\" height=\"4\"></rect><rect x=\"4\" y=\"14\" width=\"16\" height=\"2\"></rect><rect x=\"4\" y=\"18\" width=\"12\" height=\"2\"></rect></svg>"

/***/ }),

/***/ "./src/bled/svg/link-24px.svg":
/*!************************************!*\
  !*** ./src/bled/svg/link-24px.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></svg>"

/***/ }),

/***/ "./src/bled/svg/paragraph-remix-24px.svg":
/*!***********************************************!*\
  !*** ./src/bled/svg/paragraph-remix-24px.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path d=\"M9,11v10h2V5h2v16h2V5h2V3H9C6.8,3,5,4.8,5,7S6.8,11,9,11z\"></path><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path></svg>"

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

/***/ }),

/***/ "./src/bled/testing.js":
/*!*****************************!*\
  !*** ./src/bled/testing.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockeditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockeditor.js */ "./src/bled/blockeditor.js");
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
        "type" : "list",
        "data" :{
            "style" : "ordered",
            "items" :  ["First item" , "Second Item" , "Third Item"]
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

var myeditor = _blockeditor_js__WEBPACK_IMPORTED_MODULE_0__["makeBasicEditor"]("#edited_content");
myeditor.start(testdata);

//save test
let sb = document.createElement("input");
sb.type="button";
sb.value = "save";
sb.addEventListener('click' , function(){myeditor.save()});
document.body.appendChild(sb)




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

icons.up = __webpack_require__(/*! ./svg/arrow_upward-24px.svg */ "./src/bled/svg/arrow_upward-24px.svg");
icons.down = __webpack_require__(/*! ./svg/arrow_downward-24px.svg */ "./src/bled/svg/arrow_downward-24px.svg");
icons.del = __webpack_require__(/*! ./svg/clear-24px.svg */ "./src/bled/svg/clear-24px.svg");
icons.add = __webpack_require__(/*! ./svg/add-24px.svg */ "./src/bled/svg/add-24px.svg");
icons.divider = __webpack_require__(/*! ./svg/divider-24px.svg */ "./src/bled/svg/divider-24px.svg");

icons.material = {};

icons.material.link = __webpack_require__(/*! ./svg/link-24px.svg */ "./src/bled/svg/link-24px.svg");
icons.material.quote = __webpack_require__(/*! ./svg/format_quote-24px.svg */ "./src/bled/svg/format_quote-24px.svg");
icons.material.list = __webpack_require__(/*! ./svg/format_list_bulleted-24px.svg */ "./src/bled/svg/format_list_bulleted-24px.svg");
icons.material.video = __webpack_require__(/*! ./svg/play_circle_filled-24px.svg */ "./src/bled/svg/play_circle_filled-24px.svg");
icons.material.quote = __webpack_require__(/*! ./svg/format_quote-24px.svg */ "./src/bled/svg/format_quote-24px.svg");
icons.material.image = __webpack_require__(/*! ./svg/add_photo_alternate-24px.svg */ "./src/bled/svg/add_photo_alternate-24px.svg");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvYmxvY2tlZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2FkZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYWRkX3Bob3RvX2FsdGVybmF0ZS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYXJyb3dfZG93bndhcmQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Fycm93X3Vwd2FyZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvY2xlYXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtbXktMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2RpdmlkZXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9saXN0X2J1bGxldGVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfcXVvdGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2hlYWRlci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvbGluay0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvcGFyYWdyYXBoLXJlbWl4LTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9wbGF5X2NpcmNsZV9maWxsZWQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfYm9sZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfaXRhbGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9saW5rLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdHJpa2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3VwLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF91bmRlcmxpbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3Rlc3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvdWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCOztBQUVwQjtBQUNQO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7OztBQUd4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxrQkFBa0I7QUFDakMsdUJBQXVCO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBVztBQUNuQixRQUFRLDZDQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsWUFBWSxpREFBZ0I7QUFDNUIsWUFBWSxvREFBbUI7O0FBRS9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMENBQVMsRztBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywwQ0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBDQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzNnQ0EsK0w7Ozs7Ozs7Ozs7O0FDQUEscVQ7Ozs7Ozs7Ozs7O0FDQUEsZ0g7Ozs7Ozs7Ozs7O0FDQUEsNkc7Ozs7Ozs7Ozs7O0FDQUEsdUo7Ozs7Ozs7Ozs7O0FDQUEsd1A7Ozs7Ozs7Ozs7O0FDQUEsME5BQTBOLHlEQUF5RCxXQUFXLHdOOzs7Ozs7Ozs7OztBQ0E5UiwwTkFBME4seURBQXlELFdBQVcsd2M7Ozs7Ozs7Ozs7O0FDQTlSLGtUOzs7Ozs7Ozs7OztBQ0FBLG9NOzs7Ozs7Ozs7OztBQ0FBLDBOQUEwTix5REFBeUQsV0FBVyxnUzs7Ozs7Ozs7Ozs7QUNBOVIsK1c7Ozs7Ozs7Ozs7O0FDQUEsME5BQTBOLHlEQUF5RCxXQUFXLDZJOzs7Ozs7Ozs7OztBQ0E5UixzUDs7Ozs7Ozs7Ozs7QUNBQSxpeUc7Ozs7Ozs7Ozs7O0FDQUEsaTVEOzs7Ozs7Ozs7OztBQ0FBLDY0Rjs7Ozs7Ozs7Ozs7QUNBQSxzNUU7Ozs7Ozs7Ozs7O0FDQUEsd3FDOzs7Ozs7Ozs7OztBQ0FBLGtqRTs7Ozs7Ozs7Ozs7QUNBQSwwc0Y7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUMyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsZUFBZSwrREFBc0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0JBQWdCO0FBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87O0FBRVAsYUFBYSxtQkFBTyxDQUFDLHlEQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsNkRBQXVCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEwQjtBQUNwRCxlQUFlLG1CQUFPLENBQUMsNkRBQXVCO0FBQzlDLFlBQVksbUJBQU8sQ0FBQyx1REFBb0I7QUFDeEMsWUFBWSxtQkFBTyxDQUFDLHVEQUFvQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMseURBQXFCO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyw2REFBdUI7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLCtEQUF3QjtBQUM3QyxZQUFZLG1CQUFPLENBQUMseURBQXFCOztBQUV6QyxXQUFXLG1CQUFPLENBQUMseUVBQTZCO0FBQ2hELGFBQWEsbUJBQU8sQ0FBQyw2RUFBK0I7QUFDcEQsWUFBWSxtQkFBTyxDQUFDLDJEQUFzQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdURBQW9CO0FBQ3hDLGdCQUFnQixtQkFBTyxDQUFDLCtEQUF3Qjs7QUFFaEQ7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMseURBQXFCO0FBQ25ELHVCQUF1QixtQkFBTyxDQUFDLHlFQUE2QjtBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx5RkFBcUM7QUFDbkUsdUJBQXVCLG1CQUFPLENBQUMscUZBQW1DO0FBQ2xFLHVCQUF1QixtQkFBTyxDQUFDLHlFQUE2QjtBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQyx1RkFBb0M7QUFDbkUsMkJBQTJCLG1CQUFPLENBQUMsK0VBQWdDOzs7O0FBSTVEOzs7QUFHQTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixhQUFhOztBQUUxQjtBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYSxPQUFPO0FBQ3BDLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBFO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCw4QkFBOEIsc0JBQXNCOzs7QUFHcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCLGdDQUFnQztBQUN2Ryw4Q0FBOEMsZ0NBQWdDLCtCQUErQjs7QUFFN0csK0NBQStDLHdCQUF3QixnQ0FBZ0M7QUFDdkcsOENBQThDLGdDQUFnQywrQkFBK0I7Ozs7QUFJN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsQyIsImZpbGUiOiJ0ZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JsZWQvdGVzdGluZy5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuL3VpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0VkaXRvcih7XG4gICAgc2VsZWN0b3Jcbn0pIHtcbiAgICBjb25zdCBteSA9IHRoaXM7XG4gICAgLy9cbiAgICBsZXQgbWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX291dGVyX2NvbnRhaW5lclwiKTtcbiAgICBtaW5lLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIGxldCB0aGV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoZXkuYXBwZW5kQ2hpbGQobWluZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWluZTsgLy90aGlzIGVsZW1lbnQgaXMgbWluZVxuXG5cbiAgICB0aGlzLmVkaXRvcnMgPSB7XG4gICAgICAgIC8vXCJ6ZXJvXCI6e1xuICAgICAgICAvL1xuICAgICAgICAvL31cbiAgICB9OyAvLyBudWxsOyAvL3BhcmFtcy5lZGl0b3JzOyAvLyAgYXZhaWxhYmxlIGJsb2NrcyBlZGl0b3JzXG4gICAgdGhpcy5ibG9ja3MgPSBudWxsOyAvLyBibG9ja3MgYXJyYXlcbiAgICB0aGlzLmFkZE1lbnUgPSBbXTtcblxuICAgIHZhciBfY3VycmVudF9pZCA9IDA7XG5cbiAgICB0aGlzLl9tYWtlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jdXJyZW50X2lkKys7XG4gICAgICAgIHJldHVybiBfY3VycmVudF9pZDtcbiAgICB9XG5cbiAgICB0aGlzLnVwbG9hZCA9IGZ1bmN0aW9uIChmLCB0ZXN0dXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdGluZyB1cGxvYWRcIiwgZik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICB1cmw6IHRlc3R1cmwgPyB0ZXN0dXJsIDogXCJraXR0eS5qcGVnXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VXBsb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICB0aGlzLnVwbG9hZCA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldEJsb2NrcyA9IGZ1bmN0aW9uIChibG9ja3MpIHtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICAgICAgbWluZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5fY3VycmVudF9pZCA9IDE7XG4gICAgICAgIGlmIChibG9ja3MpIHtcbiAgICAgICAgICAgIGJsb2Nrcy5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB0aGV5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoZXkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgIH1cblxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIC8vYWRkIHNlcm8gYmxvY2tcblxuICAgICAgICAvL3RoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRpdG9ycylcbiAgICAgICAgLy9cImFkZFwiIG1lbnVcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhZGRlZCBoYW5kbGVyIGZvclwiLCBlKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBteS5lZGl0b3JzW2VdO1xuICAgICAgICAgICAgbXkuYWRkTWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHZhbC5sYWJlbCxcbiAgICAgICAgICAgICAgICBcImljb25cIjogdmFsLmljb24gPyB2YWwuaWNvbiA6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uIChyZWZpZCkge1xuICAgICAgICAgICAgICAgICAgICBteS5hZGROZXdCbG9jayhlLCBudWxsLCByZWZpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy9aZXJvIGJsb2NrXG5cbiAgICAgICAgbGV0IHplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB6ZXJvLmNsYXNzTGlzdC5hZGQoXCJzdGFydGluZ19ibG9ja1wiKTtcbiAgICAgICAgemVyby5zdHlsZS5oZWlnaHQgPSBcIjhweFwiO1xuICAgICAgICB6ZXJvLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIHplcm8uc3R5bGUubWFyZ2luTGVmdCA9IFwiLTMycHhcIjtcbiAgICAgICAgemVyby5kYXRhc2V0LmJsb2NrX2lkID0gXCJzdGFydFwiO1xuICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKHplcm8sIHRoaXMuYWRkTWVudSk7XG4gICAgICAgIG1pbmUuYXBwZW5kQ2hpbGQoemVybyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuc2V0QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgIC8vc3RhcnQgVUlcbiAgICAgICAgVUkudG9vbHRpcHMoKTtcbiAgICAgICAgVUkudGV4dFRvb2xzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0J5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzW2lkXTtcbiAgICB9XG5cbiAgICB0aGlzLklEMkluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YXNldC5ibG9ja19pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHIgPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0aGlzLkluZGV4MklEID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpLmRhdGFzZXQuYmxvY2tfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKHRoaXMuSUQySW5kZXgoaWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXggPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGlkeCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCbG9ja0Zyb21Tb3VyY2UgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzLmFkZE5ld0Jsb2NrKGQudHlwZSwgZC5kYXRhLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIGlmIChiaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBwcmV2IGJsb2NrXG4gICAgICAgIGxldCB1cHBlciA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGVibG9jaywgdXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBiaW5kZXggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9sYXN0P1xuICAgICAgICBpZiAoYmluZGV4ICsgMSA9PSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRuZXh0ID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KGJpbmRleCArIDIpO1xuICAgICAgICBsZXQgdGhlYmxvY2sgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBpZiAobmV4dG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIG5leHRuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2UgYXQgcHJlbGFzdCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IgPSBmdW5jdGlvbiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBtYWtlLFxuICAgICAgICBpY29uLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcGFzdGVcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc1t0eXBlXSA9IHtcbiAgICAgICAgICAgIG1ha2UsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBwYXN0ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNPbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmYgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SUQoaWQpO1xuICAgICAgICBiZi5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2sgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgcmVmaWQpIHsgLy9yZWY9aW5zdGVydCBhZnRlciB0aGF0IGJsb2NrXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVmIGlkLCB3ZSBoYXZlIHRvIGluc2VydCBhZnRlclxuICAgICAgICAvL2ZpbmQgbmV4dCBlbGVtZW50XG4gICAgICAgIGlmIChyZWZpZCA9PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgICAgIC8vIHZhciBzdGFydCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcmVmZWwgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVmaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0aWR4ID0gdGhpcy5JRDJJbmRleChyZWZpZCkgKyAxO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KG5leHRpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYmxvY2sgb2YgdHlwZSBcbiAgICAgICAgaWYgKHR5cGUgaW4gdGhpcy5lZGl0b3JzKSB7XG5cblxuICAgICAgICAgICAgdmFyIGRvbWJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBiSUQgPSB0aGlzLl9tYWtlSUQoKTtcbiAgICAgICAgICAgIGxldCBiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkb21ibG9jay5hcHBlbmRDaGlsZChiY29udGVudCk7XG4gICAgICAgICAgICBkb21ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfZWRpdG9yX3VuaXRcIik7XG4gICAgICAgICAgICBkb21ibG9jay5kYXRhc2V0LmJsb2NrX2lkID0gYklEO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja190eXBlID0gdHlwZTtcblxuXG4gICAgICAgICAgICBiY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfY29udGVudF9jb250YWluZXJcIik7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmVkaXRvcnNbdHlwZV0ubWFrZShkYXRhLCBiY29udGVudCwgYklELCB0aGlzKTsgLy9ibG9jayBtYWRlXG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tiSURdID0gYmxvY2s7XG4gICAgICAgICAgICBVSS5hZGRQbHVzQnV0dG9uKGRvbWJsb2NrLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICAgICAgVUkuYWRkQmxvY2tDb250cm9scyhkb21ibG9jaywgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZWRpdG9yIGZvclwiLCB0eXBlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZmlkICYmIHJlZmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbWJsb2NrLCByZWZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gYklEO1xuICAgIH0gLy9hZGQgbmV3IGJsb2NrXG5cbiAgICB0aGlzLnJlbW92ZUJsb2NrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vZmluZCBibG9jayBpbmRleFxuICAgICAgICBsZXQgZWxpZHggPSB0aGlzLklEMkluZGV4KGlkKTtcbiAgICAgICAgLy9hbm5vdW5jZSBkZWxldGlvbiB0byBibG9ja1xuICAgICAgICBpZiAoXCJiZWZvcmVEZWxldGVcIiBpbiB0aGlzLmJsb2Nrc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2lkXS5iZWZvcmVEZWxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBkb20gZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5pdGVtKGVsaWR4KS5yZW1vdmUoKTtcbiAgICAgICAgLy9kZWwgYmxvY2sgZnJvbSByZWdpc3RyeVxuICAgICAgICBkZWxldGUodGhpcy5ibG9ja3NbaWRdKTtcbiAgICB9IC8vcmVtb3ZlIGJsb2NrXG5cbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoY2xiKSB7XG4gICAgICAgIGxldCBkdCA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIGR0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogZS5kYXRhc2V0LmJsb2NrX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBteS5ibG9ja3NbZS5kYXRhc2V0LmJsb2NrX2lkXS5zYXZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGxldCBteWRhdGEgPSB7XG4gICAgICAgICAgICBcImVkaXRvclwiIDogXCJcIixcbiAgICAgICAgICAgIFwiYmxvY2tzXCI6IGR0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXCIlY0VkaXRvciBzYXZpbmdcIiwgKFwiY29sb3I6IFwiICsgVUkubXljeWFuKSk7ICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2cobXlkYXRhKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgIGlmIChjbGIpIHtcbiAgICAgICAgICAgIGNsYihteWRhdGEpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBteWRhdGE7XG4gICAgfVxuXG59XG5cbnZhciBjb25zdHJ1Y3RvcnMgPSB7fTtcbnZhciB0ZW1wbGF0ZXMgPSB7fVxuXG50ZW1wbGF0ZXMuZm9ybVJvdyA9IGZ1bmN0aW9uIChlbGVtZW50c19hcnJheSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWxlbWVudHNfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjhweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09IFwiTEFCRUxcIiAmJiBpICE9IDApIHtcbiAgICAgICAgICAgIGUuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93O1xufVxuXG50ZW1wbGF0ZXMuYWRkVG9vbGJhciA9IGZ1bmN0aW9uIChibG9jaykge1xuICAgIGxldCB0YnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRieC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfdG9vbGJhclwiKTtcbiAgICB0Ynguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgdGJ4LnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHRieC5zdHlsZS5mb250U2l6ZSA9IFwiLjhlbVwiXG4gICAgdGJ4LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0Ynguc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XG5cbiAgICBibG9jay5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGJ4KTsgLy9hZGQgdG8gZWRpdG9yX2l0ZW0sICFub3QhIGJsb2NrIGNvbnRlbnQgY29udGFpbmVyXG4gICAgYmxvY2suYWRkVG9Ub29sYmFyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09IFwiTEFCRUxcIikge1xuICAgICAgICAgICAgZWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRieC5hcHBlbmRDaGlsZChlbClcbiAgICB9XG59XG5cbnRlbXBsYXRlcy50d29QYW5lbHMgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAvL2xldCBtb2RlID0gXCJwcmV2aWV3XCI7XG4gICAgbGV0IHBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfcHJldmlld19wYW5lbFwiKTtcbiAgICBwcC5jbGFzc0xpc3QuYWRkKFwib25lX29mX3R3b19wYW5lbHNcIik7XG4gICAgcHAuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgcHAuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgcHAuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgIGxldCBlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRfcGFuZWxcIik7XG4gICAgZXAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIGVwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIC8vZXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlcC5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXAuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgLy9cbiAgICBsZXQgZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdF9idXR0b25cIik7XG4gICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICBlYnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzaWx2ZXJcIjtcbiAgICBlYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcbiAgICBlYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZWJ0bi5zdHlsZS56SW5kZXggPSA1O1xuICAgIGVidG4uc3R5bGUucmlnaHQgPSBcIjhweFwiO1xuICAgIGVidG4uc3R5bGUuYm90dG9tID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZWRpdG1vZGUgPSBlcC5zdHlsZS5kaXNwbGF5ICE9IFwibm9uZVwiO1xuICAgICAgICBpZiAoZWRpdG1vZGUpIHtcbiAgICAgICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIlBSRVZJRVdcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9cbiAgICBwcC5hcHBlbmRDaGlsZChlYnRuKTtcbiAgICAvL1xuICAgIGNvbnNvbGUubG9nKGJsb2NrKVxuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHApO1xuICAgIGJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXApO1xuICAgIC8vXG4gICAgYmxvY2suYWRkVG9QcmV2aWV3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHAuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBibG9jay5hZGRUb0VkaXRvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgYmxvY2suZ29FZGl0TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG5cbiAgICB9XG4gICAgYmxvY2suZ29QcmV2aWV3TW9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWJ0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcblxuICAgIH1cbiAgICBibG9jay5pc0luRWRpdE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZXAuc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIik7XG4gICAgfVxuXG59XG5cbmNvbnN0cnVjdG9ycy5wYXJhZ3JhcGggPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiYy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgLy9iYy5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtd3JhcFwiO1xuICAgIGVsLmFwcGVuZENoaWxkKGJjKTtcbiAgICBsZXQgcmUgPSAvPGRpdnxwfGg+L2dpO1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgbXk6IHRoaXMsXG4gICAgICAgIGlkOiBpZCwgLy8hISEhISEhISEhISEhISEhISEhICAgIFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGVkaXRvcjogZWRpdG9yLFxuICAgICAgICBfcDogYmMsXG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIGNsZWFuOiBmdW5jdGlvbiAodCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fcC5pbm5lckhUTUwgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9wLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmxjLl9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IG1hZ2ljID0gXCIjISNcIlxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIHByZXNzZWRcIiwgZS5zaGlmdEtleSA9PSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCBtYWdpYyk7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrYXQgPSBibGMuX3AuaW5uZXJIVE1MLmluZGV4T2YobWFnaWMpXG4gICAgICAgICAgICAgICAgbGV0IHRleHRsZWZ0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgY2xpY2thdCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRuZXh0ID0gYmxjLl9wLmlubmVySFRNTC5zdWJzdHJpbmcoY2xpY2thdCArIG1hZ2ljLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0bGVmdCwgXCJ8XCIgLCB0ZXh0bmV4dCk7XG4gICAgICAgICAgICAgICAgYmxjLl9wLmlubmVySFRNTCA9IHRleHRsZWZ0OyAvL2JsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKDAgLCBjbGlja2F0KTtcbiAgICAgICAgICAgICAgICBsZXQgbnAgPSBlZGl0b3IuYWRkTmV3QmxvY2soXCJwYXJhZ3JhcGhcIiwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0bmV4dFxuICAgICAgICAgICAgICAgIH0sIGJsYy5pZCk7XG4gICAgICAgICAgICAgICAgLy9zZWwuYW5jaG9yTm9kZS5pbm5lckhUTUwgPSBsZWF2ZWhlcmU7XG4gICAgICAgICAgICAgICAgLy9ucCA9IG5ld2x5IGluc2VydGVkIGJsb2NrIGlkXG4gICAgICAgICAgICAgICAgYmxjLmVkaXRvci5ibG9ja3NbbnBdLl9wLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5kaXZpZGVyID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxociAvPlwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3RydWN0b3JzLmhlYWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIC8vbXl0YWcuXG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgLy9pZDogaWQsXG4gICAgICAgIHRleHQ6IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCJIZWFkZXJcIixcbiAgICAgICAgbGV2ZWw6IGRhdGEgJiYgZGF0YS5sZXZlbCA/IGRhdGEubGV2ZWwgOiAxLFxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTClcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpXG5cbiAgICAgICAgfSxcbiAgICAgICAgLy9teXRhZzogXG5cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbXloID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIiArIHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgbXloLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG15aC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3ByZXZpZXdcIik7XG4gICAgICAgICAgICBteWguaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG15aCk7XG4gICAgICAgICAgICAvL3RoaXMucmVmcmVzaCgpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdHh0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3ByZXZpZXdcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogdHh0LFxuICAgICAgICAgICAgICAgIFwibGV2ZWxcIjogdGhpcy5sZXZlbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgb3B0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vb3B0cy50eXBlPVwic2VsZWN0XCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LmxhYmVsID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIG9wdC5pbm5lckhUTUwgPSBcImxldmVsIFwiICsgaTtcbiAgICAgICAgaWYgKGkgPT0gYmxjLmxldmVsKSB7XG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuICAgIG9wdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbnYgPSBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGJsYy5sZXZlbCA9IG52O1xuICAgICAgICBibGMucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgYmxjLmFkZFRvVG9vbGJhcihvcHRzKVxuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy5jb2RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgbGV0IGNkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgcHJlLmFwcGVuZENoaWxkKGNkKTtcbiAgICBjZC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgY2QuZGF0YXNldC5ub190ZXh0X3Rvb2xib3ggPSB0cnVlO1xuICAgIGVsLmFwcGVuZENoaWxkKHByZSk7XG4gICAgbGV0IGxhbmdzID0gW1wiQXV0b1wiLCBcIkFyZHVpbm9cIiwgJ0phdmFTY3JpcHQnLCBcIlByb2Nlc3NpbmdcIiwgXCJQeXRob25cIiwgXCJDKytcIiwgXCJCYXNoXCIsIFwiQmFzaWNcIiwgXCJCcmFpbmZ1Y2tcIl07XG4gICAgLy9cbiAgICBsZXQgb3B0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBtaS52YWx1ZSA9IGU7XG4gICAgICAgIG1pLmxhYmVsID0gZTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sYW5ndWFnZSAmJiBlID09IGRhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIG1pLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcbiAgICAvL1xuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2QuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcIiMgIHR5cGVcXG4jICBoZXJlXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogY2QuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBvcHRzW29wdHMuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cyk7XG4gICAgcmV0dXJuIGJsYztcblxufVxuXG5jb25zdHJ1Y3RvcnMucmF3ID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG5cbiAgICBsZXQgZWRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGVkaS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGVkaS5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBlZGkuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgZWRpLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIFwiICsgVUkubXljeWFuO1xuICAgIGVkaS5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmh0bWwpIHtcbiAgICAgICAgZWRpLnZhbHVlID0gZGF0YS5odG1sO1xuICAgIH1cblxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlZGkpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWw6IGVkaS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxjO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5ibG9ja3F1b3RlID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJsY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xuICAgIGJsY3RhZy5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICBsZXQgYmxjaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGJsY2luLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBsZXQgYmxmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBsZXQgYmxjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNpdGVcIik7XG4gICAgYmxmb290LmFwcGVuZENoaWxkKGJsY2l0ZSk7XG4gICAgYmxjaXRlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcblxuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGNpbik7XG4gICAgYmxjdGFnLmFwcGVuZENoaWxkKGJsZm9vdCk7XG4gICAgYmxjaW4uaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLnRleHQgPyBkYXRhLnRleHQgOiBcItCm0LjRgtCw0YLQsFwiO1xuICAgIGJsY2l0ZS5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwi0J/QvtC00L/QuNGB0YxcIlxuICAgIGxldCBibG9jayA9IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChibGN0YWcpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGJsY2luLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBibGNpdGUuaW5uZXJIVE1MXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrO1xuXG59XG5cbmNvbnN0cnVjdG9ycy5pbWFnZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBmaWd0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGxldCBwaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwaW1nLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgbGV0IGZjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XG4gICAgZmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGZjLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS5jYXB0aW9uID8gZGF0YS5jYXB0aW9uIDogXCLQn9C+0LTQv9C40YFcIlxuICAgIGZpZ3RhZy5hcHBlbmRDaGlsZChwaW1nKTtcbiAgICBmaWd0YWcuYXBwZW5kQ2hpbGQoZmMpO1xuICAgIHBpbWcuc3JjID0gZGF0YSAmJiBkYXRhLmZpbGUgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGltYWdlXCIpXG4gICAgICAgIH0sXG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICBibGMuYWRkVG9QcmV2aWV3KGZpZ3RhZyk7XG4gICAgLy9lZGl0XG4gICAgLy8vL3VwbG9hZFxuICAgIGxldCB1cGxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGQudHlwZSA9IFwiZmlsZVwiO1xuICAgIHVwbGQuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIGxldCB1cGxkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGRidG4udmFsdWUgPSBcInVwbG9hZFwiO1xuICAgIHVwbGRidG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICB1cGxkYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlZGl0b3IudXBsb2FkKHVwbGQuZmlsZXNbMF0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHBpbWcuc3JjID0gci51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHBpbWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3JjbGFiZWwsIHNyY2lucHV0XSkpO1xuICAgIC8vLy9jbGFzc2VzXG4gICAgLy8vLy8vc3RyZXRjaGVkXG4gICAgbGV0IHN0cmV0Y2hsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdHJldGNobGFiZWwuaW5uZXJIVE1MID0gXCJzdHJldGNoZWRcIlxuICAgIGxldCBzdHJldGNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RyZXRjaGVkLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgc3RyZXRjaGVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbm9yZXNpemUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlndGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJldGNoZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuc3RyZXRjaGVkO1xuICAgIC8vLy8vL25vcmVzaXplXG4gICAgbGV0IG5ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbnJsYWJlbC5pbm5lckhUTUwgPSBcIm5vIHJlc2l6ZVwiXG4gICAgbGV0IG5vcmVzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vcmVzaXplLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbm9yZXNpemUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBub3Jlc2l6ZS5jaGVja2VkID0gZGF0YSAmJiAoZGF0YS5ub3Jlc2l6ZSB8fCBkYXRhLndpdGhiYWNrZ3JvdW5kKTtcbiAgICAvLy8vL2xlZnRcbiAgICBsZXQgbGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxsYWJlbC5pbm5lckhUTUwgPSBcImxlZnRcIlxuICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxlZnQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsZWZ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGVmdC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmxlZnQ7XG4gICAgLy8vL3JpZ2h0XG4gICAgbGV0IHJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBybGFiZWwuaW5uZXJIVE1MID0gXCJyaWdodFwiXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHJpZ2h0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcmlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGVmdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmlnaHQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5yaWdodDtcblxuICAgIC8vLy9ib3JkZXJcbiAgICBsZXQgYmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGJsYWJlbC5pbm5lckhUTUwgPSBcImJvcmRlclwiXG4gICAgbGV0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBib3JkZXIudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBib3JkZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcGltZy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlcmVkXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYm9yZGVyLmNoZWNrZWQgPSBkYXRhICYmIGRhdGEuYm9yZGVyO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzdHJldGNoZWQsIHN0cmV0Y2hsYWJlbCxcbiAgICAgICAgbm9yZXNpemUsIG5ybGFiZWwsXG4gICAgICAgIGxlZnQsIGxsYWJlbCxcbiAgICAgICAgcmlnaHQsIHJsYWJlbCxcbiAgICAgICAgYm9yZGVyLCBibGFiZWxcbiAgICBdKSk7XG5cbiAgICAvL1xuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyZXRjaGVkOiBzdHJldGNoZWQuY2hlY2tlZCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodC5jaGVja2VkLFxuICAgICAgICAgICAgbGVmdDogbGVmdC5jaGVja2VkLFxuICAgICAgICAgICAgbm9yZXNpemU6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQmFja2dyb3VuZDogbm9yZXNpemUuY2hlY2tlZCxcbiAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICB3aXRoQm9yZGVyOiBib3JkZXIuY2hlY2tlZCxcbiAgICAgICAgICAgIGNhcHRpb246IGZjLmlubmVySFRNTCxcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IHNyY2lucHV0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5maWxlICYmIGRhdGEuZmlsZS51cmwpIHtcbiAgICAgICAgYmxjLmdvUHJldmlld01vZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibGMuZ29FZGl0TW9kZSgpO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBibGM7XG59XG5cbmNvbnN0cnVjdG9ycy52aWRlbyA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhIDoge30sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge30sXG4gICAgfVxuICAgIGlmICghYmxjLmRhdGEuZmlsZSkge1xuICAgICAgICBibGMuZGF0YS5maWxlID0ge307XG4gICAgfVxuICAgIHRlbXBsYXRlcy50d29QYW5lbHMoYmxjKTtcbiAgICAvL3ByZXZpZXdcbiAgICBsZXQgdnRhZyA9IGJsYy5hZGRUb1ByZXZpZXcoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpKTtcbiAgICB2dGFnLnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG4gICAgLy9sZXQgc3JjdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgICAvL3Z0YWcuYXBwZW5kQ2hpbGQoc3JjdGFnKTtcbiAgICB2dGFnLnNyYyA9IGRhdGEgJiYgZGF0YS5maWxlLnVybCA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuICAgIC8vZWRpdG9yXG4gICAgLy8vL3VwbG9hZCAgICAgXG4gICAgbGV0IHVwbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZC50eXBlID0gXCJmaWxlXCI7XG4gICAgdXBsZC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbGV0IHVwbGRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdXBsZGJ0bi52YWx1ZSA9IFwidXBsb2FkXCI7XG4gICAgdXBsZGJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHVwbGRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVkaXRvci51cGxvYWQodXBsZC5maWxlc1swXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgdnRhZy5zcmMgPSByLnVybDtcbiAgICAgICAgICAgICAgICBzcmNpbnB1dC52YWx1ZSA9IHIudXJsO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbdXBsZCwgdXBsZGJ0bl0pKTtcbiAgICAvLy8vZWRpdCBzcmNcbiAgICBsZXQgc3JjbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3JjbGFiZWwuaW5uZXJIVE1MID0gXCJTb3VyY2UgVVJMXCI7XG4gICAgbGV0IHNyY2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNyY2lucHV0LnN0eWxlLmZsZXhHcm93ID0gMjtcbiAgICBzcmNpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc3JjaW5wdXQudmFsdWUgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICBzcmNpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdnRhZy5zcmMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBibGMuZGF0YS5maWxlLnVybCA9IHRoaXMudmFsdWU7XG4gICAgfSlcbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3NyY2xhYmVsLCBzcmNpbnB1dF0pKTtcbiAgICAvLy8vcGFyYW1zXG4gICAgbGV0IHBhcmFtcyA9IFt7XG4gICAgICAgICAgICBuYW1lOiBcImF1dG9wbGF5XCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuYXV0b3BsYXksXG4gICAgICAgICAgICBsYWJlbDogXCJhdXRvcGxheVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5jb250cm9scyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJsb29wXCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEubG9vcCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtdXRlZFwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLm11dGVkLFxuICAgICAgICB9LFxuXG4gICAgXVxuICAgIGxldCBwZWxzID0gW107XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFibGMuZGF0YVtlLm5hbWVdKSB7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcGxhYmVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgcGxhYmVsLmlubmVySFRNTCA9IGUubmFtZTtcbiAgICAgICAgbGV0IHBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcGNoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIHBjaGVjay5jaGVja2VkID0gZGF0YSAmJiBkYXRhW2UubmFtZV07XG4gICAgICAgIHBjaGVjay5vbmNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBibGMuZGF0YSwgZS5uYW1lKTtcbiAgICAgICAgICAgIGJsYy5kYXRhW2UubmFtZV0gPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB2dGFnLnNldEF0dHJpYnV0ZShlLm5hbWUsIHRoaXMuY2hlY2tlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHBlbHMucHVzaChwY2hlY2spO1xuICAgICAgICBwZWxzLnB1c2gocGxhYmVsKTtcblxuXG4gICAgfSk7XG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KHBlbHMpKTtcblxuICAgIGJsYy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmxjLmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYztcbn1cbi8qKlxuICoge1xuICAgIFwidHlwZVwiIDogXCJsaXN0XCIsXG4gICAgXCJkYXRhXCIgOiB7XG4gICAgICAgIFwic3R5bGVcIiA6IFwidW5vcmRlcmVkXCIsXG4gICAgICAgIFwiaXRlbXNcIiA6IFtcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIGJsb2NrLXN0eWxlZCBlZGl0b3JcIixcbiAgICAgICAgICAgIFwiQ2xlYW4gb3V0cHV0IGRhdGFcIixcbiAgICAgICAgICAgIFwiU2ltcGxlIGFuZCBwb3dlcmZ1bCBBUElcIlxuICAgICAgICBdXG4gICAgfVxufSxcbiAqL1xuXG5jb25zdHJ1Y3RvcnMubGlzdCA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBsaXN0X2VsZW1lbnQ6IG51bGwsXG4gICAgICAgIHR5cGU6IGRhdGEgJiYgZGF0YS5zdHlsZSAmJiBkYXRhLnN0eWxlID09IFwib3JkZXJlZFwiID8gXCJvbFwiIDogXCJ1bFwiLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjogdGhpcy50eXBlID09IFwib2xcIiA/IFwib3JkZXJlZFwiIDogXCJ1bm9yZGVyZWRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IEFycmF5LmZyb20odGhpcy5saXN0X2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpKS5tYXAoZSA9PiBlLmlubmVySFRNTClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vZWRpdG9yXG4gICAgLy8vL291dGVyIGxpc3RcbiAgICBibGMubGlzdF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChibGMudHlwZSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYmxjLmxpc3RfZWxlbWVudCk7XG4gICAgLy8vL2RvIHdlIGhhdmUgZGF0YVxuICAgIGlmIChkYXRhICYmIGRhdGEuaXRlbXMpIHtcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGwuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgIGwuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgYWRkU21hcnRSZW1vdmUobClcbiAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuYXBwZW5kQ2hpbGQobCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vLy8vbWFrZSBMSSBkZWxldGFibGUgXG4gICAgZnVuY3Rpb24gYWRkU21hcnRSZW1vdmUoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5rZXlDb2RlICwgdGhpcy5pbm5lckhUTUwubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiB0aGlzLmlubmVySFRNTC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzICYmIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIG5pLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvL3doZXJlP1xuICAgICAgICAgICAgICAgIGxldCBteW5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChteW5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5pbnNlcnRCZWZvcmUobmksIG15bmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChuaSk7IC8vYXQuLi4/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFNtYXJ0UmVtb3ZlKG5pKTtcbiAgICAgICAgICAgICAgICBuaS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8vLy9jaGFuZ2xlIGxpc3QgdHlwZSB0b1xuICAgIGZ1bmN0aW9uIHNldFR5cGUodG4pIHtcblxuICAgICAgICBsZXQgbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRuKTtcbiAgICAgICAgbGV0IGxpc3MgPSBBcnJheS5mcm9tKGJsYy5saXN0X2VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGxpc3MuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIG5lLmFwcGVuZENoaWxkKGUpXG4gICAgICAgIH0pO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50ID0gbmU7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKG5lKTtcbiAgICB9XG4gICAgLy8vL1xuICAgIHRlbXBsYXRlcy5hZGRUb29sYmFyKGJsYyk7XG4gICAgLy9yYWRpb2J1dHRvbnNcbiAgICAvL1xuICAgIGxldCByYnRucyA9IFt7XG4gICAgICAgICAgICB2YWx1ZTogXCJ1bFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiVW5vcmRlcmVkXCJcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJvbFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiT3JkZXJlZFwiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHJidG5zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJsaXN0X2J1dHRvbnNfXCIgKyBpZDtcbiAgICAgICAgcmFkaW8udmFsdWUgPSBlLnZhbHVlO1xuICAgICAgICByYWRpby5jaGVja2VkID0gKGJsYy50eXBlID09IGUudmFsdWUpO1xuICAgICAgICByYWRpby5vbmNoYW5nZSA9IGV2ID0+IHNldFR5cGUoZS52YWx1ZSk7XG4gICAgICAgIGxldCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxibC5pbm5lckhUTUwgPSBlLmxhYmVsO1xuICAgICAgICBibGMuYWRkVG9Ub29sYmFyKHJhZGlvKTtcbiAgICAgICAgYmxjLmFkZFRvVG9vbGJhcihsYmwpO1xuICAgIH0pO1xuICAgIC8vLy8gYWRkIGJ1dHRvblxuICAgIGxldCBhZGRfYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRfYi50eXBlID0gXCJidXR0b25cIjtcbiAgICBhZGRfYi52YWx1ZSA9IFwiK2l0ZW1cIjtcbiAgICBhZGRfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld2xpLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgYWRkU21hcnRSZW1vdmUobmV3bGkpO1xuICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKG5ld2xpKTtcbiAgICB9KVxuICAgIGJsYy5hZGRUb1Rvb2xiYXIoYWRkX2IpO1xuICAgIHJldHVybiBibGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQmFzaWNFZGl0b3IoZWwpIHtcbiAgICBsZXQgZWRpdG9yID0gbmV3IEJsb2NrRWRpdG9yKHtcbiAgICAgICAgc2VsZWN0b3I6IGVsXG4gICAgfSk7XG5cbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5wYXJhZ3JhcGgsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5wYXJhZ3JhcGgsXG4gICAgICAgIGxhYmVsOiBcIlBhcmFncmFwaFwiXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5kaXZpZGVyLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5kaXZpZGVyLFxuICAgICAgICBsYWJlbDogJ0RpdmlkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuaGVhZGVyLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaGVhZGVyLFxuICAgICAgICBsYWJlbDogJ0hlYWRlcidcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImNvZGVcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuY29kZSxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmNvZGUsXG4gICAgICAgIGxhYmVsOiAnQ29kZSBzbmlwcGV0J1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwicmF3XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLnJhdyxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnJhdyxcbiAgICAgICAgbGFiZWw6ICdSYXcgSFRNTCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnF1b3RlLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuYmxvY2txdW90ZSxcbiAgICAgICAgbGFiZWw6ICdCbG9ja3F1b3RlJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMubWF0ZXJpYWwuaW1hZ2UsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5pbWFnZSxcbiAgICAgICAgbGFiZWw6ICdJbWFnZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInZpZGVvXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLnZpZGVvLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMudmlkZW8sXG4gICAgICAgIGxhYmVsOiAnVmlkZW8nXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLmxpc3QsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5saXN0LFxuICAgICAgICBsYWJlbDogXCJMaXN0XCIsXG4gICAgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhVSS5pY29ucy5tYXRlcmlhbC5saXN0KTtcblxuICAgIHJldHVybiBlZGl0b3I7XG59XG4vLyAgbXkuY3VycmVudF9lZGl0b3IgPSBuZXcgZWRpdG9yX2ZuKGw0LCBlZGl0b3JfZWxlbWVudCwgbXkuY3VycmVudF92aWV3LmZpbGUuY29udGVudCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGF0aWRFZGl0b3IobDQsIGVkaXRvcl9lbGVtZW50X3NlbGVjdG9yLCBmaWxlX2NvbnRlbnQpIHtcbiAgICBsZXQgZWQgPSBtYWtlVHlwaWNhbEVkaXRvcihlZGl0b3JfZWxlbWVudF9zZWxlY3Rvcik7XG4gICAgZWQuc2V0QmxvY2tzKGZpbGVfY29udGVudCk7XG4gICAgcmV0dXJuIGVkO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTkgN3YyLjk5cy0xLjk5LjAxLTIgMFY3aC0zcy4wMS0xLjk5IDAtMmgzVjJoMnYzaDN2MmgtM3ptLTMgNFY4aC0zVjVINWMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMnYtOGgtM3pNNSAxOWwzLTQgMiAzIDMtNCA0IDVINXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNMjAgMTJsLTEuNDEtMS40MUwxMyAxNi4xN1Y0aC0ydjEyLjE3bC01LjU4LTUuNTlMNCAxMmw4IDggOC04elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTJsMS40MSAxLjQxTDExIDcuODNWMjBoMlY3LjgzbDUuNTggNS41OUwyMCAxMmwtOC04LTggOHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48Zz48cGF0aCBkPVxcXCJNNS43LDEzLjNoMTEuNXYySDUuN1YxMy4zeiBNNi4zLDcuOGgxMS41djJINi4zVjcuOHogTTkuMywzLjJoMS44TDksMjAuNkg3LjJMOS4zLDMuMnogTTE0LjMsMy4yaDEuOGwtMi4xLDE3LjRoLTEuOSBMMTQuMywzLjJ6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiNC41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyAtNi40NTY3IDE3LjU0MzMpXFxcIiB3aWR0aD1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI3LjFcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNy41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyA2LjQ1NjcgMzAuNDU2NylcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjcuMVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjFcXFwiIHk9XFxcIjExXFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCg2LjEyMzIzNGUtMTcgLTEgMSA2LjEyMzIzNGUtMTcgNi4yMDQ5NjhlLTAyIDI0LjA2MilcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjEuOVxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTAuNWMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41em0wLTZjLS44IDAtMS41LjctMS41IDEuNVMzLjIgNy41IDQgNy41IDUuNSA2LjggNS41IDYgNC44IDQuNSA0IDQuNXptMCAxMmMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41ek03IDE5aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnptMC04djJoMTRWNUg3elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02IDE3aDNsMi00VjdINXY2aDN6bTggMGgzbDItNFY3aC02djZoM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIxMFxcXCIgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiNFxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE4XFxcIiB3aWR0aD1cXFwiMTJcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMy45IDEyYzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xaDRWN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDR2LTEuOUg3Yy0xLjcxIDAtMy4xLTEuMzktMy4xLTMuMXpNOCAxM2g4di0ySDh2MnptOS02aC00djEuOWg0YzEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xcy0xLjM5IDMuMS0zLjEgMy4xaC00VjE3aDRjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBkPVxcXCJNOSwxMXYxMGgyVjVoMnYxNmgyVjVoMlYzSDlDNi44LDMsNSw0LjgsNSw3UzYuOCwxMSw5LDExelxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJzdDBcXFwiIGQ9XFxcIk0wLDBoMjR2MjRIMFYwelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTQuNXYtOWw2IDQuNS02IDQuNXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuMzA2OCAxOS4zMjQyQzEwLjg2NzQgMTkuNTc0MiAxMS4zOTc3IDE5LjY5OTIgMTEuODk3NyAxOS42OTkyQzE0Ljc0NjIgMTkuNjk5MiAxNi4xNzA1IDE4LjM5MDYgMTYuMTcwNSAxNS43NzM0QzE2LjE3MDUgMTQuODgyOCAxNi4wMTUyIDE0LjE3OTcgMTUuNzA0NSAxMy42NjQxQzE1LjUgMTMuMzIwMyAxNS4yNjcgMTMuMDMxMiAxNS4wMDU3IDEyLjc5NjlDMTQuNzQ0MyAxMi41NjI1IDE0LjQ4ODYgMTIuMzgwOSAxNC4yMzg2IDEyLjI1MkMxMy45ODg2IDEyLjEyMyAxMy42ODM3IDEyLjAyNTQgMTMuMzIzOSAxMS45NTlDMTIuOTY0IDExLjg5MjYgMTIuNjQ1OCAxMS44NTE2IDEyLjM2OTMgMTEuODM1OUMxMi4wOTI4IDExLjgyMDMgMTEuNzM0OCAxMS44MTI1IDExLjI5NTUgMTEuODEyNUMxMC43NDI0IDExLjgxMjUgMTAuMzU5OCAxMS44NTE2IDEwLjE0NzcgMTEuOTI5N0MxMC4xNDc3IDEyLjM0MzggMTAuMTQ1OCAxMi45NjQ4IDEwLjE0MiAxMy43OTNDMTAuMTM4MyAxNC42MjExIDEwLjEzNjQgMTUuMjM4MyAxMC4xMzY0IDE1LjY0NDVDMTAuMTM2NCAxNS43MDcgMTAuMTMyNiAxNS45NzA3IDEwLjEyNSAxNi40MzU1QzEwLjExNzQgMTYuOTAwNCAxMC4xMTU1IDE3LjI3NzMgMTAuMTE5MyAxNy41NjY0QzEwLjEyMzEgMTcuODU1NSAxMC4xNDAyIDE4LjE4MTYgMTAuMTcwNSAxOC41NDQ5QzEwLjIwMDggMTguOTA4MiAxMC4yNDYyIDE5LjE2OCAxMC4zMDY4IDE5LjMyNDJaTTEwLjE0NzcgMTAuNTgyQzEwLjQ2NTkgMTAuNjM2NyAxMC44Nzg4IDEwLjY2NDEgMTEuMzg2NCAxMC42NjQxQzEyLjAwNzYgMTAuNjY0MSAxMi41NDkyIDEwLjYxMzMgMTMuMDExNCAxMC41MTE3QzEzLjQ3MzUgMTAuNDEwMiAxMy44OTAyIDEwLjIzNjMgMTQuMjYxNCA5Ljk5MDIzQzE0LjYzMjYgOS43NDQxNCAxNC45MTQ4IDkuMzk0NTMgMTUuMTA4IDguOTQxNDFDMTUuMzAxMSA4LjQ4ODI4IDE1LjM5NzcgNy45MzM1OSAxNS4zOTc3IDcuMjc3MzRDMTUuMzk3NyA2LjczMDQ3IDE1LjI4NzkgNi4yNTE5NSAxNS4wNjgyIDUuODQxOEMxNC44NDg1IDUuNDMxNjQgMTQuNTQ5MiA1LjExMTMzIDE0LjE3MDUgNC44ODA4NkMxMy43OTE3IDQuNjUwMzkgMTMuMzgyNiA0LjQ4MDQ3IDEyLjk0MzIgNC4zNzEwOUMxMi41MDM4IDQuMjYxNzIgMTIuMDM0MSA0LjIwNzAzIDExLjUzNDEgNC4yMDcwM0MxMS4xNTUzIDQuMjA3MDMgMTAuNjYyOSA0LjI1NzgxIDEwLjA1NjggNC4zNTkzOEMxMC4wNTY4IDQuNzUgMTAuMDcyIDUuMzM5ODQgMTAuMTAyMyA2LjEyODkxQzEwLjEzMjYgNi45MTc5NyAxMC4xNDc3IDcuNTExNzIgMTAuMTQ3NyA3LjkxMDE2QzEwLjE0NzcgOC4xMjEwOSAxMC4xNDU4IDguNDMzNTkgMTAuMTQyIDguODQ3NjZDMTAuMTM4MyA5LjI2MTcyIDEwLjEzNjQgOS41NzAzMSAxMC4xMzY0IDkuNzczNDRDMTAuMTM2NCAxMC4xMzI4IDEwLjE0MDIgMTAuNDAyMyAxMC4xNDc3IDEwLjU4MlpNNCAyMUw0LjAyMjczIDE5Ljg5ODRDNC4xMzYzNiAxOS44NjcyIDQuNDU4MzMgMTkuODA0NyA0Ljk4ODY0IDE5LjcxMDlDNS41MTg5NCAxOS42MTcyIDUuOTIwNDUgMTkuNTExNyA2LjE5MzE4IDE5LjM5NDVDNi4yNDYyMSAxOS4zMDA4IDYuMjkzNTYgMTkuMTk1MyA2LjMzNTIzIDE5LjA3ODFDNi4zNzY4OSAxOC45NjA5IDYuNDA5MDkgMTguODMwMSA2LjQzMTgyIDE4LjY4NTVDNi40NTQ1NSAxOC41NDEgNi40NzUzOCAxOC40MTQxIDYuNDk0MzIgMTguMzA0N0M2LjUxMzI2IDE4LjE5NTMgNi41MjQ2MiAxOC4wNDg4IDYuNTI4NDEgMTcuODY1MkM2LjUzMjIgMTcuNjgxNiA2LjUzNDA5IDE3LjU0ODggNi41MzQwOSAxNy40NjY4VjE2LjY5OTJDNi41MzQwOSA5LjAyNzM0IDYuNDUwNzYgNS4wMjM0NCA2LjI4NDA5IDQuNjg3NUM2LjI1Mzc5IDQuNjI1IDYuMTcwNDUgNC41NjgzNiA2LjAzNDA5IDQuNTE3NThDNS44OTc3MyA0LjQ2NjggNS43MjkxNyA0LjQyMzgzIDUuNTI4NDEgNC4zODg2N0M1LjMyNzY1IDQuMzUzNTIgNS4xNDAxNSA0LjMyNjE3IDQuOTY1OTEgNC4zMDY2NEM0Ljc5MTY3IDQuMjg3MTEgNC42MDc5NSA0LjI2OTUzIDQuNDE0NzcgNC4yNTM5MUM0LjIyMTU5IDQuMjM4MjggNC4xMDYwNiA0LjIyNjU2IDQuMDY4MTggNC4yMTg3NUw0LjAyMjczIDMuMjQ2MDlDNC43NjUxNSAzLjIzMDQ3IDYuMDUzMDMgMy4xODU1NSA3Ljg4NjM2IDMuMTExMzNDOS43MTk3IDMuMDM3MTEgMTEuMTMyNiAzIDEyLjEyNSAzQzEyLjI5OTIgMyAxMi41NTY4IDMuMDAxOTUgMTIuODk3NyAzLjAwNTg2QzEzLjIzODYgMy4wMDk3NyAxMy40OTYyIDMuMDExNzIgMTMuNjcwNSAzLjAxMTcyQzE0LjIwMDggMy4wMTE3MiAxNC43MTc4IDMuMDYyNSAxNS4yMjE2IDMuMTY0MDZDMTUuNzI1NCAzLjI2NTYyIDE2LjIxMjEgMy40Mjk2OSAxNi42ODE4IDMuNjU2MjVDMTcuMTUxNSAzLjg4MjgxIDE3LjU2MDYgNC4xNjAxNiAxNy45MDkxIDQuNDg4MjhDMTguMjU3NiA0LjgxNjQxIDE4LjUzNzkgNS4yMjQ2MSAxOC43NSA1LjcxMjg5QzE4Ljk2MjEgNi4yMDExNyAxOS4wNjgyIDYuNzM4MjggMTkuMDY4MiA3LjMyNDIyQzE5LjA2ODIgNy43MzA0NyAxOS4wMDU3IDguMTAzNTIgMTguODgwNyA4LjQ0MzM2QzE4Ljc1NTcgOC43ODMyIDE4LjYwOCA5LjA2NDQ1IDE4LjQzNzUgOS4yODcxMUMxOC4yNjcgOS41MDk3NyAxOC4wMjI3IDkuNzM0MzggMTcuNzA0NSA5Ljk2MDk0QzE3LjM4NjQgMTAuMTg3NSAxNy4xMDk4IDEwLjM2MzMgMTYuODc1IDEwLjQ4ODNDMTYuNjQwMiAxMC42MTMzIDE2LjMyMiAxMC43Njk1IDE1LjkyMDUgMTAuOTU3QzE3LjA4NzEgMTEuMjMwNSAxOC4wNTg3IDExLjc1MzkgMTguODM1MiAxMi41MjczQzE5LjYxMTcgMTMuMzAwOCAyMCAxNC4yNjk1IDIwIDE1LjQzMzZDMjAgMTYuMjE0OCAxOS44Njc0IDE2LjkxNiAxOS42MDIzIDE3LjUzNzFDMTkuMzM3MSAxOC4xNTgyIDE4Ljk4MyAxOC42NjggMTguNTM5OCAxOS4wNjY0QzE4LjA5NjYgMTkuNDY0OCAxNy41NzM5IDE5Ljc5ODggMTYuOTcxNiAyMC4wNjg0QzE2LjM2OTMgMjAuMzM3OSAxNS43NSAyMC41MjczIDE1LjExMzYgMjAuNjM2N0MxNC40NzczIDIwLjc0NjEgMTMuODEwNiAyMC44MDA4IDEzLjExMzYgMjAuODAwOEMxMi43ODAzIDIwLjgwMDggMTIuMjgwMyAyMC43ODkxIDExLjYxMzYgMjAuNzY1NkMxMC45NDcgMjAuNzQyMiAxMC40NDcgMjAuNzMwNSAxMC4xMTM2IDIwLjczMDVDOS4zMTA2MSAyMC43MzA1IDguMTQ3NzMgMjAuNzczNCA2LjYyNSAyMC44NTk0QzUuMTAyMjcgMjAuOTQ1MyA0LjIyNzI3IDIwLjk5MjIgNCAyMVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNiAyMC45NzY2TDYuMTk5MjIgMTkuOTgwNUM2LjM3MTA5IDE5LjkyNTggNi42MTEzMyAxOS44NjEzIDYuOTE5OTIgMTkuNzg3MUM3LjIyODUyIDE5LjcxMjkgNy41MDk3NyAxOS42Mzg3IDcuNzYzNjcgMTkuNTY0NUM4LjAxNzU4IDE5LjQ5MDIgOC4yNSAxOS4zOTg0IDguNDYwOTQgMTkuMjg5MUM4LjY3OTY5IDE5LjAxNTYgOC44Mzk4NCAxOC42MjExIDguOTQxNDEgMTguMTA1NUM4Ljk0OTIyIDE4LjA1MDggOS4xOTE0MSAxNi45MjE5IDkuNjY3OTcgMTQuNzE4OEMxMC4xNDQ1IDEyLjUxNTYgMTAuNTg5OCAxMC4zOTI2IDExLjAwMzkgOC4zNDk2MUMxMS40MTggNi4zMDY2NCAxMS42MjExIDUuMTQ4NDQgMTEuNjEzMyA0Ljg3NVY0LjU4MjAzQzExLjQyNTggNC40ODA0NyAxMS4yMTI5IDQuNDA4MiAxMC45NzQ2IDQuMzY1MjNDMTAuNzM2MyA0LjMyMjI3IDEwLjQ2NDggNC4yOTEwMiAxMC4xNjAyIDQuMjcxNDhDOS44NTU0NyA0LjI1MTk1IDkuNjI4OTEgNC4yMzA0NyA5LjQ4MDQ3IDQuMjA3MDNMOS43MDMxMiAzQzkuOTYwOTQgMy4wMTU2MiAxMC40Mjk3IDMuMDQxMDIgMTEuMTA5NCAzLjA3NjE3QzExLjc4OTEgMy4xMTEzMyAxMi4zNzMgMy4xMzg2NyAxMi44NjEzIDMuMTU4MkMxMy4zNDk2IDMuMTc3NzMgMTMuODIwMyAzLjE4NzUgMTQuMjczNCAzLjE4NzVDMTQuNjQ4NCAzLjE4NzUgMTUuMDMzMiAzLjE3NzczIDE1LjQyNzcgMy4xNTgyQzE1LjgyMjMgMy4xMzg2NyAxNi4yOTQ5IDMuMTExMzMgMTYuODQ1NyAzLjA3NjE3QzE3LjM5NjUgMy4wNDEwMiAxNy43ODEyIDMuMDE1NjIgMTggM0MxNy45NjA5IDMuMzA0NjkgMTcuODg2NyAzLjY1MjM0IDE3Ljc3NzMgNC4wNDI5N0MxNy41NDMgNC4xMjEwOSAxNy4xNDY1IDQuMjMyNDIgMTYuNTg3OSA0LjM3Njk1QzE2LjAyOTMgNC41MjE0OCAxNS42MDU1IDQuNjUyMzQgMTUuMzE2NCA0Ljc2OTUzQzE1LjI1MzkgNC45MTc5NyAxNS4xOTkyIDUuMDgzOTggMTUuMTUyMyA1LjI2NzU4QzE1LjEwNTUgNS40NTExNyAxNS4wNzAzIDUuNjA3NDIgMTUuMDQ2OSA1LjczNjMzQzE1LjAyMzQgNS44NjUyMyAxNC45OTQxIDYuMDQyOTcgMTQuOTU5IDYuMjY5NTNDMTQuOTIzOCA2LjQ5NjA5IDE0Ljg5ODQgNi42NjAxNiAxNC44ODI4IDYuNzYxNzJDMTQuNjcxOSA3LjkxNzk3IDE0LjMzMDEgOS41NTY2NCAxMy44NTc0IDExLjY3NzdDMTMuMzg0OCAxMy43OTg4IDEzLjA4MiAxNS4xODc1IDEyLjk0OTIgMTUuODQzOEMxMi45MzM2IDE1LjkxNDEgMTIuODgyOCAxNi4xNDA2IDEyLjc5NjkgMTYuNTIzNEMxMi43MTA5IDE2LjkwNjIgMTIuNjMyOCAxNy4yNTc4IDEyLjU2MjUgMTcuNTc4MUMxMi40OTIyIDE3Ljg5ODQgMTIuNDI5NyAxOC4yMjQ2IDEyLjM3NSAxOC41NTY2QzEyLjMyMDMgMTguODg4NyAxMi4yOTY5IDE5LjExMzMgMTIuMzA0NyAxOS4yMzA1TDEyLjMxNjQgMTkuNDQxNEMxMi40NDkyIDE5LjQ3MjcgMTMuMTcxOSAxOS41OTM4IDE0LjQ4NDQgMTkuODA0N0MxNC40NjA5IDIwLjE0ODQgMTQuMzk4NCAyMC41MzUyIDE0LjI5NjkgMjAuOTY0OEMxNC4yMTA5IDIwLjk2NDggMTQuMDg0IDIwLjk3MDcgMTMuOTE2IDIwLjk4MjRDMTMuNzQ4IDIwLjk5NDEgMTMuNjIxMSAyMSAxMy41MzUyIDIxQzEzLjMwODYgMjEgMTIuOTY4OCAyMC45NjA5IDEyLjUxNTYgMjAuODgyOEMxMi4wNjI1IDIwLjgwNDcgMTEuNzI2NiAyMC43NjU2IDExLjUwNzggMjAuNzY1NkMxMC40Mjk3IDIwLjc1IDkuNjI1IDIwLjc0MjIgOS4wOTM3NSAyMC43NDIyQzguNjk1MzEgMjAuNzQyMiA4LjEzNjcyIDIwLjc3NzMgNy40MTc5NyAyMC44NDc3QzYuNjk5MjIgMjAuOTE4IDYuMjI2NTYgMjAuOTYwOSA2IDIwLjk3NjZaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTE4LjExNzYgMTUuNzY0N0MxOC4xMTc2IDE1LjUwMzMgMTguMDI2MSAxNS4yODEgMTcuODQzMSAxNS4wOThMMTUuODAzOSAxMy4wNTg4QzE1LjYyMDkgMTIuODc1OCAxNS4zOTg3IDEyLjc4NDMgMTUuMTM3MyAxMi43ODQzQzE0Ljg2MjcgMTIuNzg0MyAxNC42Mjc1IDEyLjg4ODkgMTQuNDMxNCAxMy4wOThDMTQuNDUxIDEzLjExNzYgMTQuNTEzMSAxMy4xNzgxIDE0LjYxNzYgMTMuMjc5NEMxNC43MjIyIDEzLjM4MDcgMTQuNzkyNSAxMy40NTEgMTQuODI4NCAxMy40OTAyQzE0Ljg2NDQgMTMuNTI5NCAxNC45MTM0IDEzLjU5MTUgMTQuOTc1NSAxMy42NzY1QzE1LjAzNzYgMTMuNzYxNCAxNS4wODAxIDEzLjg0NDggMTUuMTAyOSAxMy45MjY1QzE1LjEyNTggMTQuMDA4MiAxNS4xMzczIDE0LjA5OCAxNS4xMzczIDE0LjE5NjFDMTUuMTM3MyAxNC40NTc1IDE1LjA0NTggMTQuNjc5NyAxNC44NjI3IDE0Ljg2MjdDMTQuNjc5NyAxNS4wNDU4IDE0LjQ1NzUgMTUuMTM3MyAxNC4xOTYxIDE1LjEzNzNDMTQuMDk4IDE1LjEzNzMgMTQuMDA4MiAxNS4xMjU4IDEzLjkyNjUgMTUuMTAyOUMxMy44NDQ4IDE1LjA4MDEgMTMuNzYxNCAxNS4wMzc2IDEzLjY3NjUgMTQuOTc1NUMxMy41OTE1IDE0LjkxMzQgMTMuNTI5NCAxNC44NjQ0IDEzLjQ5MDIgMTQuODI4NEMxMy40NTEgMTQuNzkyNSAxMy4zODA3IDE0LjcyMjIgMTMuMjc5NCAxNC42MTc2QzEzLjE3ODEgMTQuNTEzMSAxMy4xMTc2IDE0LjQ1MSAxMy4wOTggMTQuNDMxNEMxMi44ODI0IDE0LjYzNCAxMi43NzQ1IDE0Ljg3MjUgMTIuNzc0NSAxNS4xNDcxQzEyLjc3NDUgMTUuNDA4NSAxMi44NjYgMTUuNjMwNyAxMy4wNDkgMTUuODEzN0wxNS4wNjg2IDE3Ljg0MzFDMTUuMjQ1MSAxOC4wMTk2IDE1LjQ2NzMgMTguMTA3OCAxNS43MzUzIDE4LjEwNzhDMTUuOTk2NyAxOC4xMDc4IDE2LjIxOSAxOC4wMjI5IDE2LjQwMiAxNy44NTI5TDE3Ljg0MzEgMTYuNDIxNkMxOC4wMjYxIDE2LjIzODYgMTguMTE3NiAxNi4wMTk2IDE4LjExNzYgMTUuNzY0N1pNMTEuMjI1NSA4Ljg1Mjk0QzExLjIyNTUgOC41OTE1IDExLjEzNCA4LjM2OTI4IDEwLjk1MSA4LjE4NjI3TDguOTMxMzcgNi4xNTY4NkM4Ljc0ODM3IDUuOTczODYgOC41MjYxNCA1Ljg4MjM1IDguMjY0NzEgNS44ODIzNUM4LjAwOTggNS44ODIzNSA3Ljc4NzU4IDUuOTcwNTkgNy41OTgwNCA2LjE0NzA2TDYuMTU2ODYgNy41Nzg0M0M1Ljk3Mzg2IDcuNzYxNDQgNS44ODIzNSA3Ljk4MDM5IDUuODgyMzUgOC4yMzUyOUM1Ljg4MjM1IDguNDk2NzMgNS45NzM4NiA4LjcxODk1IDYuMTU2ODYgOC45MDE5Nkw4LjE5NjA4IDEwLjk0MTJDOC4zNzI1NSAxMS4xMTc2IDguNTk0NzcgMTEuMjA1OSA4Ljg2Mjc1IDExLjIwNTlDOS4xMzcyNiAxMS4yMDU5IDkuMzcyNTUgMTEuMTA0NiA5LjU2ODYzIDEwLjkwMkM5LjU0OTAyIDEwLjg4MjQgOS40ODY5MyAxMC44MjE5IDkuMzgyMzUgMTAuNzIwNkM5LjI3Nzc4IDEwLjYxOTMgOS4yMDc1MiAxMC41NDkgOS4xNzE1NyAxMC41MDk4QzkuMTM1NjIgMTAuNDcwNiA5LjA4NjYgMTAuNDA4NSA5LjAyNDUxIDEwLjMyMzVDOC45NjI0MiAxMC4yMzg2IDguOTE5OTMgMTAuMTU1MiA4Ljg5NzA2IDEwLjA3MzVDOC44NzQxOCA5Ljk5MTgzIDguODYyNzUgOS45MDE5NiA4Ljg2Mjc1IDkuODAzOTJDOC44NjI3NSA5LjU0MjQ4IDguOTU0MjUgOS4zMjAyNiA5LjEzNzI2IDkuMTM3MjZDOS4zMjAyNiA4Ljk1NDI1IDkuNTQyNDggOC44NjI3NSA5LjgwMzkyIDguODYyNzVDOS45MDE5NiA4Ljg2Mjc1IDkuOTkxODMgOC44NzQxOCAxMC4wNzM1IDguODk3MDZDMTAuMTU1MiA4LjkxOTkzIDEwLjIzODYgOC45NjI0MiAxMC4zMjM1IDkuMDI0NTFDMTAuNDA4NSA5LjA4NjYgMTAuNDcwNiA5LjEzNTYyIDEwLjUwOTggOS4xNzE1N0MxMC41NDkgOS4yMDc1MiAxMC42MTkzIDkuMjc3NzggMTAuNzIwNiA5LjM4MjM1QzEwLjgyMTkgOS40ODY5MyAxMC44ODI0IDkuNTQ5MDIgMTAuOTAyIDkuNTY4NjNDMTEuMTE3NiA5LjM2NjAxIDExLjIyNTUgOS4xMjc0NSAxMS4yMjU1IDguODUyOTRaTTIwIDE1Ljc2NDdDMjAgMTYuNTQ5IDE5LjcyMjIgMTcuMjEyNCAxOS4xNjY3IDE3Ljc1NDlMMTcuNzI1NSAxOS4xODYzQzE3LjE4MyAxOS43Mjg4IDE2LjUxOTYgMjAgMTUuNzM1MyAyMEMxNC45NDQ0IDIwIDE0LjI3NzggMTkuNzIyMiAxMy43MzUzIDE5LjE2NjdMMTEuNzE1NyAxNy4xMzczQzExLjE3MzIgMTYuNTk0OCAxMC45MDIgMTUuOTMxNCAxMC45MDIgMTUuMTQ3MUMxMC45MDIgMTQuMzQzMSAxMS4xODk1IDEzLjY2MDEgMTEuNzY0NyAxMy4wOThMMTAuOTAyIDEyLjIzNTNDMTAuMzM5OSAxMi44MTA1IDkuNjYwMTMgMTMuMDk4IDguODYyNzUgMTMuMDk4QzguMDc4NDMgMTMuMDk4IDcuNDExNzYgMTIuODIzNSA2Ljg2Mjc1IDEyLjI3NDVMNC44MjM1MyAxMC4yMzUzQzQuMjc0NTEgOS42ODYyNyA0IDkuMDE5NjEgNCA4LjIzNTI5QzQgNy40NTA5OCA0LjI3Nzc4IDYuNzg3NTggNC44MzMzMyA2LjI0NTFMNi4yNzQ1MSA0LjgxMzczQzYuODE2OTkgNC4yNzEyNCA3LjQ4MDM5IDQgOC4yNjQ3MSA0QzkuMDU1NTYgNCA5LjcyMjIyIDQuMjc3NzggMTAuMjY0NyA0LjgzMzMzTDEyLjI4NDMgNi44NjI3NUMxMi44MjY4IDcuNDA1MjMgMTMuMDk4IDguMDY4NjMgMTMuMDk4IDguODUyOTRDMTMuMDk4IDkuNjU2ODYgMTIuODEwNSAxMC4zMzk5IDEyLjIzNTMgMTAuOTAyTDEzLjA5OCAxMS43NjQ3QzEzLjY2MDEgMTEuMTg5NSAxNC4zMzk5IDEwLjkwMiAxNS4xMzczIDEwLjkwMkMxNS45MjE2IDEwLjkwMiAxNi41ODgyIDExLjE3NjUgMTcuMTM3MyAxMS43MjU1TDE5LjE3NjUgMTMuNzY0N0MxOS43MjU1IDE0LjMxMzcgMjAgMTQuOTgwNCAyMCAxNS43NjQ3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yMS43OTgzIDEyQzIxLjkwODYgMTIgMjEuOTk5MiAxMi4wMzUyIDIyLjA3MDEgMTIuMTA1NUMyMi4xNDEgMTIuMTc1OCAyMi4xNzY1IDEyLjI2NTYgMjIuMTc2NSAxMi4zNzVWMTMuMTI1QzIyLjE3NjUgMTMuMjM0NCAyMi4xNDEgMTMuMzI0MiAyMi4wNzAxIDEzLjM5NDVDMjEuOTk5MiAxMy40NjQ4IDIxLjkwODYgMTMuNSAyMS43OTgzIDEzLjVIMS4zNzgxNUMxLjI2Nzg2IDEzLjUgMS4xNzcyNiAxMy40NjQ4IDEuMTA2MzYgMTMuMzk0NUMxLjAzNTQ1IDEzLjMyNDIgMSAxMy4yMzQ0IDEgMTMuMTI1VjEyLjM3NUMxIDEyLjI2NTYgMS4wMzU0NSAxMi4xNzU4IDEuMTA2MzYgMTIuMTA1NUMxLjE3NzI2IDEyLjAzNTIgMS4yNjc4NiAxMiAxLjM3ODE1IDEySDIxLjc5ODNaTTYuNzA3NzIgMTEuMjVDNi40ODcxMyAxMC45NzY2IDYuMjg2MjQgMTAuNjY0MSA2LjEwNTA0IDEwLjMxMjVDNS43MjY4OSA5LjU0Njg4IDUuNTM3ODIgOC44MTI1IDUuNTM3ODIgOC4xMDkzOEM1LjUzNzgyIDYuNjk1MzEgNi4wNjU2NSA1LjQ4ODI4IDcuMTIxMzIgNC40ODgyOEM4LjE2OTEyIDMuNDk2MDkgOS43MTcxNyAzIDExLjc2NTUgM0MxMi4xNTk0IDMgMTIuODE3MiAzLjA3NDIyIDEzLjczOSAzLjIyMjY2QzE0LjI1ODkgMy4zMTY0MSAxNC45NTYxIDMuNTAzOTEgMTUuODMwNiAzLjc4NTE2QzE1LjkwOTQgNC4wODIwMyAxNS45OTIxIDQuNTQyOTcgMTYuMDc4OCA1LjE2Nzk3QzE2LjE4OTEgNi4xMjg5MSAxNi4yNDQyIDYuODQzNzUgMTYuMjQ0MiA3LjMxMjVDMTYuMjQ0MiA3LjQ1MzEyIDE2LjIyNDUgNy42Mjg5MSAxNi4xODUxIDcuODM5ODRMMTYuMDQzMyA3Ljg3NUwxNS4wNTA3IDcuODA0NjlMMTQuODg1MiA3Ljc4MTI1QzE0LjQ5MTMgNi42MTcxOSAxNC4wODU2IDUuODE2NDEgMTMuNjY4MSA1LjM3ODkxQzEyLjk3NDggNC42Njc5NyAxMi4xNDc2IDQuMzEyNSAxMS4xODY0IDQuMzEyNUMxMC4yODgzIDQuMzEyNSA5LjU3MTQzIDQuNTQyOTcgOS4wMzU3MSA1LjAwMzkxQzguNTA3ODggNS40NTcwMyA4LjI0Mzk2IDYuMDI3MzQgOC4yNDM5NiA2LjcxNDg0QzguMjQzOTYgNy4yODUxNiA4LjUwMzk0IDcuODMyMDMgOS4wMjM5IDguMzU1NDdDOS41NDM4NSA4Ljg3ODkxIDEwLjY0MjkgOS4zODI4MSAxMi4zMjA5IDkuODY3MTlDMTIuODY0NSAxMC4wMjM0IDEzLjU0NiAxMC4yODEyIDE0LjM2NTMgMTAuNjQwNkMxNC44MjIyIDEwLjg1OTQgMTUuMTk2NCAxMS4wNjI1IDE1LjQ4NzkgMTEuMjVINi43MDc3MlpNMTIuNjk5MSAxNC4yNUgxNy41NTU5QzE3LjYxMTEgMTQuNTU0NyAxNy42Mzg3IDE0LjkxNDEgMTcuNjM4NyAxNS4zMjgxQzE3LjYzODcgMTYuMTk1MyAxNy40NzcyIDE3LjAyMzQgMTcuMTU0MSAxNy44MTI1QzE2Ljk3MyAxOC4yNSAxNi42OTMzIDE4LjY1NjIgMTYuMzE1MSAxOS4wMzEyQzE2LjAyMzYgMTkuMzA0NyAxNS41OTQzIDE5LjYyMTEgMTUuMDI3IDE5Ljk4MDVDMTQuMzk2OCAyMC4zNTU1IDEzLjc5NDEgMjAuNjEzMyAxMy4yMTkgMjAuNzUzOUMxMi41ODg4IDIwLjkxOCAxMS43ODkxIDIxIDEwLjgyMDEgMjFDOS45MjIwMSAyMSA5LjE1Mzg5IDIwLjkxMDIgOC41MTU3NiAyMC43MzA1TDYuODYxMzQgMjAuMjYxN0M2LjQxMjI5IDIwLjEzNjcgNi4xMjg2OCAyMC4wMjczIDYuMDEwNSAxOS45MzM2QzUuOTQ3NDggMTkuODcxMSA1LjkxNTk3IDE5Ljc4NTIgNS45MTU5NyAxOS42NzU4VjE5LjUyMzRDNS45MTU5NyAxOC42Nzk3IDUuOTA4MDkgMTguMDcwMyA1Ljg5MjMzIDE3LjY5NTNDNS44ODQ0NSAxNy40NjA5IDUuODg0NDUgMTcuMTk1MyA1Ljg5MjMzIDE2Ljg5ODRMNS45MTU5NyAxNi40NjQ4VjE1Ljk0OTJMNy4xMjEzMiAxNS45MjU4QzcuMjM5NSAxNi4xOTE0IDcuMzU3NjcgMTYuNDY4OCA3LjQ3NTg0IDE2Ljc1NzhDNy41OTQwMSAxNy4wNDY5IDcuNjgyNjQgMTcuMjY1NiA3Ljc0MTczIDE3LjQxNDFDNy44MDA4MSAxNy41NjI1IDcuODUwMDUgMTcuNjY4IDcuODg5NDQgMTcuNzMwNUM4LjE2NTE4IDE4LjE3NTggOC40ODAzIDE4LjU0MyA4LjgzNDgyIDE4LjgzMkM5LjE3MzU4IDE5LjExMzMgOS41ODcxOCAxOS4zMzU5IDEwLjA3NTYgMTkuNUMxMC41NDA0IDE5LjY3MTkgMTEuMDYwNCAxOS43NTc4IDExLjYzNTUgMTkuNzU3OEMxMi4xMzk3IDE5Ljc1NzggMTIuNjg3MiAxOS42NTIzIDEzLjI3ODEgMTkuNDQxNEMxMy44ODQ3IDE5LjIzODMgMTQuMzY1MyAxOC45MDIzIDE0LjcxOTggMTguNDMzNkMxNS4wOTAxIDE3Ljk1NyAxNS4yNzUyIDE3LjQ1MzEgMTUuMjc1MiAxNi45MjE5QzE1LjI3NTIgMTYuMjY1NiAxNC45NTYxIDE1LjY1MjMgMTQuMzE4IDE1LjA4MkMxNC4wNTAyIDE0Ljg1NTUgMTMuNTEwNSAxNC41NzgxIDEyLjY5OTEgMTQuMjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTcgNC41NTU1NkM3IDQuNDA1MDkgNy4wNTU2NiA0LjI3NDg5IDcuMTY2OTkgNC4xNjQ5M0M3LjI3ODMyIDQuMDU0OTggNy40MTAxNiA0IDcuNTYyNSA0TDE1LjQzNzUgNEMxNS41ODk4IDQgMTUuNzIxNyA0LjA1NDk4IDE1LjgzMyA0LjE2NDkzQzE1Ljk0NDMgNC4yNzQ4OCAxNiA0LjQwNTA5IDE2IDQuNTU1NTZDMTYgNC43MDYwMiAxNS45NDQzIDQuODM2MjMgMTUuODMzIDQuOTQ2MThMMTEuODk1NSA4LjgzNTA3QzExLjc4NDIgOC45NDUwMiAxMS42NTIzIDkgMTEuNSA5QzExLjM0NzcgOSAxMS4yMTU4IDguOTQ1MDIgMTEuMTA0NSA4LjgzNTA3TDcuMTY2OTkgNC45NDYxOEM3LjA1NTY2IDQuODM2MjMgNyA0LjcwNjAyIDcgNC41NTU1NlpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQuMzk1NSAyMUg5LjQzNDU3VjE5LjkyNThMMTEuNzE5NyAxNy41MjM0QzEyLjI4MjkgMTYuODgyMiAxMi41NjQ1IDE2LjM3MjcgMTIuNTY0NSAxNS45OTUxQzEyLjU2NDUgMTUuNjg5MSAxMi40OTc3IDE1LjQ1NjQgMTIuMzY0MyAxNS4yOTY5QzEyLjIzMDggMTUuMTM3NCAxMi4wMzcxIDE1LjA1NzYgMTEuNzgzMiAxNS4wNTc2QzExLjUzMjYgMTUuMDU3NiAxMS4zMjkxIDE1LjE2NSAxMS4xNzI5IDE1LjM3OTlDMTEuMDE2NiAxNS41OTE1IDEwLjkzODUgMTUuODU2OCAxMC45Mzg1IDE2LjE3NThIOS4yODgwOUM5LjI4ODA5IDE1LjczOTYgOS4zOTcxNCAxNS4zMzc2IDkuNjE1MjMgMTQuOTY5N0M5LjgzMzMzIDE0LjU5ODYgMTAuMTM2MSAxNC4zMDg5IDEwLjUyMzQgMTQuMTAwNkMxMC45MTA4IDEzLjg5MjMgMTEuMzQzOCAxMy43ODgxIDExLjgyMjMgMTMuNzg4MUMxMi41OTA1IDEzLjc4ODEgMTMuMTgxMyAxMy45NjU1IDEzLjU5NDcgMTQuMzIwM0MxNC4wMTE0IDE0LjY3NTEgMTQuMjE5NyAxNS4xODQ2IDE0LjIxOTcgMTUuODQ4NkMxNC4yMTk3IDE2LjEyODYgMTQuMTY3NiAxNi40MDIgMTQuMDYzNSAxNi42Njg5QzEzLjk1OTMgMTYuOTMyNiAxMy43OTY1IDE3LjIxMDkgMTMuNTc1MiAxNy41MDM5QzEzLjM1NzEgMTcuNzkzNiAxMy4wMDM5IDE4LjE4MjYgMTIuNTE1NiAxOC42NzA5TDExLjU5NzcgMTkuNzMwNUgxNC4zOTU1VjIxWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMC42NDkzIDQuMTg3NVY0Ljg3MzA1QzEwLjY0OTMgNC45MjM4MyAxMC42Mjg0IDQuOTY2OCAxMC41ODY3IDUuMDAxOTVDMTAuNTQ0OSA1LjAzNzExIDEwLjQ5NTUgNS4wNTQ2OSAxMC40Mzg0IDUuMDU0NjlIOC40NzM5NlY5LjgxMjVDOC40NzM5NiA5Ljg2MzI4IDguNDU0MTkgOS45MDcyMyA4LjQxNDYzIDkuOTQ0MzRDOC4zNzUwOCA5Ljk4MTQ1IDguMzI2NzQgMTAgOC4yNjk2MSAxMEg3LjM3OTdDNy4zMjI1NyAxMCA3LjI3MzEzIDkuOTgyNDIgNy4yMzEzOCA5Ljk0NzI3QzcuMTg5NjMgOS45MTIxMSA3LjE2ODc1IDkuODY3MTkgNy4xNjg3NSA5LjgxMjVWNS4wNTQ2OUg1LjIxMDk0QzUuMTUzODEgNS4wNTQ2OSA1LjEwNDM3IDUuMDM3MTEgNS4wNjI2MiA1LjAwMTk1QzUuMDIwODcgNC45NjY4IDUgNC45MjM4MyA1IDQuODczMDVWNC4xODc1QzUgNC4xMzI4MSA1LjAxOTc4IDQuMDg3ODkgNS4wNTkzMyA0LjA1MjczQzUuMDk4ODggNC4wMTc1OCA1LjE0OTQyIDQgNS4yMTA5NCA0SDEwLjQzODRDMTAuNDk1NSA0IDEwLjU0NDkgNC4wMTg1NSAxMC41ODY3IDQuMDU1NjZDMTAuNjI4NCA0LjA5Mjc3IDEwLjY0OTMgNC4xMzY3MiAxMC42NDkzIDQuMTg3NVpNMTcuNDkxOCA0LjE2OTkyTDE3Ljk5OTMgOS44MDA3OEMxOC4wMDM3IDkuODUxNTYgMTcuOTg2MiA5Ljg5ODQ0IDE3Ljk0NjYgOS45NDE0MUMxNy45MDI3IDkuOTgwNDcgMTcuODUyMSAxMCAxNy43OTUgMTBIMTYuOTExN0MxNi44NTg5IDEwIDE2LjgxMjggOS45ODM0IDE2Ljc3MzIgOS45NTAyQzE2LjczMzcgOS45MTY5OSAxNi43MTE3IDkuODc2OTUgMTYuNzA3MyA5LjgzMDA4TDE2LjQwNDEgNi4zODQ3N0wxNS4xNTgyIDguODc1QzE1LjEyMyA4Ljk0OTIyIDE1LjA1OTMgOC45ODYzMyAxNC45NjcgOC45ODYzM0gxNC4xNzZDMTQuMDg4MSA4Ljk4NjMzIDE0LjAyNDQgOC45NDkyMiAxMy45ODQ4IDguODc1TDEyLjc0NTYgNi4zNzMwNUwxMi40NDg5IDkuODMwMDhDMTIuNDQ0NSA5Ljg3Njk1IDEyLjQyMjUgOS45MTY5OSAxMi4zODMgOS45NTAyQzEyLjM0MzQgOS45ODM0IDEyLjI5NzMgMTAgMTIuMjQ0NiAxMEgxMS4zNTQ2QzExLjI5NzUgMTAgMTEuMjQ3IDkuOTgwNDcgMTEuMjAzIDkuOTQxNDFDMTEuMTYzNSA5LjkwMjM0IDExLjE0MzcgOS44NTU0NyAxMS4xNDM3IDkuODAwNzhMMTEuNjU3OSA0LjE2OTkyQzExLjY2MjMgNC4xMjMwNSAxMS42ODQyIDQuMDgzMDEgMTEuNzIzOCA0LjA0OThDMTEuNzYzMyA0LjAxNjYgMTEuODA5NSA0IDExLjg2MjIgNEgxMi43OTgzQzEyLjg4NjIgNCAxMi45NDk5IDQuMDM3MTEgMTIuOTg5NSA0LjExMTMzTDE0LjQzOTcgNy4xNTgyQzE0LjQ4MzYgNy4yNTE5NSAxNC41Mjc2IDcuMzUxNTYgMTQuNTcxNSA3LjQ1NzAzQzE0LjU4NDcgNy40Mjk2OSAxNC42MDU2IDcuMzgxODQgMTQuNjM0MSA3LjMxMzQ4QzE0LjY2MjcgNy4yNDUxMiAxNC42ODU4IDcuMTkzMzYgMTQuNzAzNCA3LjE1ODJMMTYuMTYwMiA0LjExMTMzQzE2LjE5OTcgNC4wMzcxMSAxNi4yNjM1IDQgMTYuMzUxNCA0SDE3LjI4MDhDMTcuMzM3OSA0IDE3LjM4NjMgNC4wMTY2IDE3LjQyNTggNC4wNDk4QzE3LjQ2NTQgNC4wODMwMSAxNy40ODc0IDQuMTIzMDUgMTcuNDkxOCA0LjE2OTkyWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNiAyMC40NDQ0QzE2IDIwLjU5NDkgMTUuOTQ0MyAyMC43MjUxIDE1LjgzMyAyMC44MzUxQzE1LjcyMTcgMjAuOTQ1IDE1LjU4OTggMjEgMTUuNDM3NSAyMUg3LjU2MjVDNy40MTAxNiAyMSA3LjI3ODMyIDIwLjk0NSA3LjE2Njk5IDIwLjgzNTFDNy4wNTU2NiAyMC43MjUxIDcgMjAuNTk0OSA3IDIwLjQ0NDRDNyAyMC4yOTQgNy4wNTU2NiAyMC4xNjM4IDcuMTY2OTkgMjAuMDUzOEwxMS4xMDQ1IDE2LjE2NDlDMTEuMjE1OCAxNi4wNTUgMTEuMzQ3NyAxNiAxMS41IDE2QzExLjY1MjMgMTYgMTEuNzg0MiAxNi4wNTUgMTEuODk1NSAxNi4xNjQ5TDE1LjgzMyAyMC4wNTM4QzE1Ljk0NDMgMjAuMTYzOCAxNiAyMC4yOTQgMTYgMjAuNDQ0NFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMy41NjI1IDQuMTEzMjhDMy4yNzM0NCA0LjA5NzY2IDMuMDk3NjYgNC4wODIwMyAzLjAzNTE2IDQuMDY2NDFMMyAzLjAzNTE2QzMuMTAxNTYgMy4wMjczNCAzLjI1NzgxIDMuMDIzNDQgMy40Njg3NSAzLjAyMzQ0QzMuOTM3NSAzLjAyMzQ0IDQuMzc1IDMuMDM5MDYgNC43ODEyNSAzLjA3MDMxQzUuODEyNSAzLjEyNSA2LjQ2MDk0IDMuMTUyMzQgNi43MjY1NiAzLjE1MjM0QzcuMzk4NDQgMy4xNTIzNCA4LjA1NDY5IDMuMTQwNjIgOC42OTUzMSAzLjExNzE5QzkuNjAxNTYgMy4wODU5NCAxMC4xNzE5IDMuMDY2NDEgMTAuNDA2MiAzLjA1ODU5QzEwLjg0MzggMy4wNTg1OSAxMS4xNzk3IDMuMDUwNzggMTEuNDE0MSAzLjAzNTE2TDExLjQwMjMgMy4xOTkyMkwxMS40MjU4IDMuOTQ5MjJWNC4wNTQ2OUMxMC45NTcgNC4xMjUgMTAuNDcyNyA0LjE2MDE2IDkuOTcyNjYgNC4xNjAxNkM5LjUwMzkxIDQuMTYwMTYgOS4xOTUzMSA0LjI1NzgxIDkuMDQ2ODggNC40NTMxMkM4Ljk0NTMxIDQuNTYyNSA4Ljg5NDUzIDUuMDc4MTIgOC44OTQ1MyA2QzguODk0NTMgNi4xMDE1NiA4Ljg5NjQ4IDYuMjI4NTIgOC45MDAzOSA2LjM4MDg2QzguOTA0MyA2LjUzMzIgOC45MDYyNSA2LjYzMjgxIDguOTA2MjUgNi42Nzk2OUw4LjkxNzk3IDkuMzYzMjhMOS4wODIwMyAxMi42NDQ1QzkuMTI4OTEgMTMuNjEzMyA5LjMyODEyIDE0LjQwMjMgOS42Nzk2OSAxNS4wMTE3QzkuOTUzMTIgMTUuNDcyNyAxMC4zMjgxIDE1LjgzMiAxMC44MDQ3IDE2LjA4OThDMTEuNDkyMiAxNi40NTcgMTIuMTgzNiAxNi42NDA2IDEyLjg3ODkgMTYuNjQwNkMxMy42OTE0IDE2LjY0MDYgMTQuNDM3NSAxNi41MzEyIDE1LjExNzIgMTYuMzEyNUMxNS41NTQ3IDE2LjE3MTkgMTUuOTQxNCAxNS45NzI3IDE2LjI3NzMgMTUuNzE0OEMxNi42NTIzIDE1LjQzMzYgMTYuOTA2MiAxNS4xODM2IDE3LjAzOTEgMTQuOTY0OEMxNy4zMjAzIDE0LjUyNzMgMTcuNTI3MyAxNC4wODIgMTcuNjYwMiAxMy42Mjg5QzE3LjgyNDIgMTMuMDU4NiAxNy45MDYyIDEyLjE2NDEgMTcuOTA2MiAxMC45NDUzQzE3LjkwNjIgMTAuMzI4MSAxNy44OTI2IDkuODI4MTIgMTcuODY1MiA5LjQ0NTMxQzE3LjgzNzkgOS4wNjI1IDE3Ljc5NDkgOC41ODM5OCAxNy43MzYzIDguMDA5NzdDMTcuNjc3NyA3LjQzNTU1IDE3LjYyNSA2LjgxMjUgMTcuNTc4MSA2LjE0MDYyTDE3LjUzMTIgNS40NDkyMkMxNy40OTIyIDQuOTI1NzggMTcuMzk4NCA0LjU4MjAzIDE3LjI1IDQuNDE3OTdDMTYuOTg0NCA0LjE0NDUzIDE2LjY4MzYgNC4wMTE3MiAxNi4zNDc3IDQuMDE5NTNMMTUuMTc1OCA0LjA0Mjk3TDE1LjAxMTcgNC4wMDc4MUwxNS4wMzUyIDNIMTYuMDE5NUwxOC40MjE5IDMuMTE3MTlDMTkuMDE1NiAzLjE0MDYyIDE5Ljc4MTIgMy4xMDE1NiAyMC43MTg4IDNMMjAuOTI5NyAzLjAyMzQ0QzIwLjk3NjYgMy4zMjAzMSAyMSAzLjUxOTUzIDIxIDMuNjIxMDlDMjEgMy42NzU3OCAyMC45ODQ0IDMuNzk2ODggMjAuOTUzMSAzLjk4NDM4QzIwLjYwMTYgNC4wNzgxMiAyMC4yNzM0IDQuMTI4OTEgMTkuOTY4OCA0LjEzNjcyQzE5LjM5ODQgNC4yMjI2NiAxOS4wODk4IDQuMjg5MDYgMTkuMDQzIDQuMzM1OTRDMTguOTI1OCA0LjQ1MzEyIDE4Ljg2NzIgNC42MTMyOCAxOC44NjcyIDQuODE2NDFDMTguODY3MiA0Ljg3MTA5IDE4Ljg3MyA0Ljk3NjU2IDE4Ljg4NDggNS4xMzI4MUMxOC44OTY1IDUuMjg5MDYgMTguOTAyMyA1LjQxMDE2IDE4LjkwMjMgNS40OTYwOUMxOC45NjQ4IDUuNjQ0NTMgMTkuMDUwOCA3LjE5MTQxIDE5LjE2MDIgMTAuMTM2N0MxOS4yMDcgMTEuNjYwMiAxOS4xNDg0IDEyLjg0NzcgMTguOTg0NCAxMy42OTkyQzE4Ljg2NzIgMTQuMjkzIDE4LjcwNyAxNC43Njk1IDE4LjUwMzkgMTUuMTI4OUMxOC4yMDcgMTUuNjM2NyAxNy43Njk1IDE2LjExNzIgMTcuMTkxNCAxNi41NzAzQzE2LjYwNTUgMTcuMDE1NiAxNS44OTQ1IDE3LjM2MzMgMTUuMDU4NiAxNy42MTMzQzE0LjIwNyAxNy44NzExIDEzLjIxMDkgMTggMTIuMDcwMyAxOEMxMC43NjU2IDE4IDkuNjU2MjUgMTcuODIwMyA4Ljc0MjE5IDE3LjQ2MDlDNy44MTI1IDE3LjA5MzggNy4xMTMyOCAxNi42MTcyIDYuNjQ0NTMgMTYuMDMxMkM2LjE2Nzk3IDE1LjQzNzUgNS44NDM3NSAxNC42NzU4IDUuNjcxODggMTMuNzQ2MUM1LjU0Njg4IDEzLjEyMTEgNS40ODQzOCAxMi4xOTUzIDUuNDg0MzggMTAuOTY4OFY3LjA2NjQxQzUuNDg0MzggNS41OTc2NiA1LjQxNzk3IDQuNzY1NjIgNS4yODUxNiA0LjU3MDMxQzUuMDg5ODQgNC4yODkwNiA0LjUxNTYyIDQuMTM2NzIgMy41NjI1IDQuMTEzMjhaTTIxIDIwLjYyNVYxOS44NzVDMjEgMTkuNzY1NiAyMC45NjQ4IDE5LjY3NTggMjAuODk0NSAxOS42MDU1QzIwLjgyNDIgMTkuNTM1MiAyMC43MzQ0IDE5LjUgMjAuNjI1IDE5LjVIMy4zNzVDMy4yNjU2MiAxOS41IDMuMTc1NzggMTkuNTM1MiAzLjEwNTQ3IDE5LjYwNTVDMy4wMzUxNiAxOS42NzU4IDMgMTkuNzY1NiAzIDE5Ljg3NVYyMC42MjVDMyAyMC43MzQ0IDMuMDM1MTYgMjAuODI0MiAzLjEwNTQ3IDIwLjg5NDVDMy4xNzU3OCAyMC45NjQ4IDMuMjY1NjIgMjEgMy4zNzUgMjFIMjAuNjI1QzIwLjczNDQgMjEgMjAuODI0MiAyMC45NjQ4IDIwLjg5NDUgMjAuODk0NUMyMC45NjQ4IDIwLjgyNDIgMjEgMjAuNzM0NCAyMSAyMC42MjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJjb25zb2xlLmxvZyhcInRlc3RpbmdcIik7XG5pbXBvcnQgKiBhcyBFZGl0b3IgZnJvbSBcIi4vYmxvY2tlZGl0b3IuanNcIjtcbnZhciB0ZXN0ZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJoZWFkZXJcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIiA6IFwi0JTRgNCw0LzQsCDQutCw0YLQvtC00LBcIixcbiAgICAgICAgICAgIFwibGV2ZWxcIiA6IDNcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCU0YDQsNC80LAg0L7QtNC90L7RgNC+0LTQvdC+INC/0YDQuNGC0Y/Qs9C40LLQsNC10YIg0L/RgNC+0LfQsNC40YfQtdGB0LrQuNC5INC00LDQutGC0LjQu9GMLiDQktC10YHRjNC80LAg0L/QtdGA0YHQv9C10LrRgtC40LLQvdC+0Lkg0L/RgNC10LTRgdGC0LDQstC70Y/QtdGC0YHRjyDQs9C40L/QvtGC0LXQt9CwLCDQstGL0YHQutCw0LfQsNC90L3QsNGPINCYLtCT0LDQu9GM0L/QtdGA0LjQvdGL0LxcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJsaXN0XCIsXG4gICAgICAgIFwiZGF0YVwiIDp7XG4gICAgICAgICAgICBcInN0eWxlXCIgOiBcIm9yZGVyZWRcIixcbiAgICAgICAgICAgIFwiaXRlbXNcIiA6ICBbXCJGaXJzdCBpdGVtXCIgLCBcIlNlY29uZCBJdGVtXCIgLCBcIlRoaXJkIEl0ZW1cIl1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCf0LXRgNCy0L7QtSDQv9C+0LvRg9GB0YLQuNGI0LjQtSDQuNC30Y/RidC90L4g0LjQu9C70Y7RgdGC0YDQuNGA0YPQtdGCINC70LjRgNC40YfQtdGB0LrQuNC5INC/0LDRgNCw0YTRgNCw0LcuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiZGl2aWRlclwiLFxuICAgICAgICBcImRhdGFcIiA6IHt9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiIDogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIiA6IGDQodC70LXQtNGD0LXRgiDQvtGC0LzQtdGC0LjRgtGMLCDRh9GC0L4g0LrQsNGC0L7QtCDRgdGD0LHRgdGC0YDQsNGC0L3QviDQstC30LLQtdGI0LjQstCw0LXRgiDQtNC10YHRgtGA0YPQutGC0LjQstC90YvQuSBcbiAgICAgICAgICAgINCx0LXQu9C+0LouINCU0LDQttC1INCyINGN0YLQvtC8INC60L7RgNC+0YLQutC+0Lwg0YTRgNCw0LPQvNC10L3RgtC1INCy0LjQtNC90L4sINGH0YLQviDQstGL0L/QsNGA0LjQstCw0L3QuNC1INC00LDQtdGCIFxuICAgICAgICAgICAg0LHRi9C70LjQvdC90YvQuSDQvtC00LjQvdC90LDQtNGG0LDRgtC40YHQu9C+0LbQvdC40LouYFxuICAgICAgICB9XG4gICAgfSxcblxuXVxuXG52YXIgbXllZGl0b3IgPSBFZGl0b3IubWFrZUJhc2ljRWRpdG9yKFwiI2VkaXRlZF9jb250ZW50XCIpO1xubXllZGl0b3Iuc3RhcnQodGVzdGRhdGEpO1xuXG4vL3NhdmUgdGVzdFxubGV0IHNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuc2IudHlwZT1cImJ1dHRvblwiO1xuc2IudmFsdWUgPSBcInNhdmVcIjtcbnNiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIGZ1bmN0aW9uKCl7bXllZGl0b3Iuc2F2ZSgpfSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNiKVxuXG5cbiIsImV4cG9ydCB2YXIgaWNvbnMgPSB7fTtcblxuaWNvbnMuYm9sZCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2JvbGQuc3ZnXCIpO1xuaWNvbnMuaXRhbGljID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfaXRhbGljLnN2Z1wiKTtcbmljb25zLnVuZGVybGluZSA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3VuZGVybGluZS5zdmdcIik7XG5pY29ucy5zdHJpa2UgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdHJpa2Uuc3ZnXCIpO1xuaWNvbnMuc3VwID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3VwLnN2Z1wiKTtcbmljb25zLnN1YiA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1Yi5zdmdcIik7XG5pY29ucy5saW5rID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfbGluay5zdmdcIik7XG5pY29ucy5oZWFkZXIgPSByZXF1aXJlKFwiLi9zdmcvaGVhZGVyLTI0cHguc3ZnXCIpO1xuaWNvbnMuY29kZSA9IHJlcXVpcmUoXCIuL3N2Zy9jb2RlLW15LTI0cHguc3ZnXCIpO1xuaWNvbnMucmF3ID0gcmVxdWlyZShcIi4vc3ZnL2NvZGUtMjRweC5zdmdcIik7XG5cbmljb25zLnVwID0gcmVxdWlyZShcIi4vc3ZnL2Fycm93X3Vwd2FyZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRvd24gPSByZXF1aXJlKFwiLi9zdmcvYXJyb3dfZG93bndhcmQtMjRweC5zdmdcIik7XG5pY29ucy5kZWwgPSByZXF1aXJlKFwiLi9zdmcvY2xlYXItMjRweC5zdmdcIik7XG5pY29ucy5hZGQgPSByZXF1aXJlKFwiLi9zdmcvYWRkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZGl2aWRlciA9IHJlcXVpcmUoXCIuL3N2Zy9kaXZpZGVyLTI0cHguc3ZnXCIpO1xuXG5pY29ucy5tYXRlcmlhbCA9IHt9O1xuXG5pY29ucy5tYXRlcmlhbC5saW5rID0gcmVxdWlyZShcIi4vc3ZnL2xpbmstMjRweC5zdmdcIik7XG5pY29ucy5tYXRlcmlhbC5xdW90ZSA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfcXVvdGUtMjRweC5zdmdcIik7XG5pY29ucy5tYXRlcmlhbC5saXN0ID0gcmVxdWlyZShcIi4vc3ZnL2Zvcm1hdF9saXN0X2J1bGxldGVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwudmlkZW8gPSByZXF1aXJlKFwiLi9zdmcvcGxheV9jaXJjbGVfZmlsbGVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuaW1hZ2UgPSByZXF1aXJlKFwiLi9zdmcvYWRkX3Bob3RvX2FsdGVybmF0ZS0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnBhcmFncmFwaCA9IHJlcXVpcmUoXCIuL3N2Zy9wYXJhZ3JhcGgtcmVtaXgtMjRweC5zdmdcIik7XG5cblxuXG5leHBvcnQgdmFyIG15Y3lhbiA9IFwiIzNFRDlFM1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTdHlsZShzdHN0cil7XG4gICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgcy5pbm5lckhUTUwgPSBzdHN0cjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xufVxuXG4vL2luamVjdFN0eWxlKGBib2R5e2NvbG9yOiAjNDQ0O31gKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFzayhwcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCByID0gcHJvbXB0KHByKTtcbiAgICAgICAgaWYgKHIpIHsgcmVzb2x2ZShyKSB9IGVsc2UgeyByZWplY3QoXCJObyBpbnB1dFwiKSB9O1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICBsZXQgdHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0dC5zdHlsZS56SW5kZXggPSAyMDtcbiAgICB0dC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgICBsZXQgdHRpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuYXBwZW5kQ2hpbGQodHRpbik7XG4gICAgdHRpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTAwJSwgMTAwJSwgMTAwJSwgMC44KVwiO1xuICAgIHR0aW4uc3R5bGUuY29sb3IgPSBcIiM4ODg4ODhcIjtcbiAgICB0dGluLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0dGluLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XG4gICAgdHRpbi5zdHlsZS5wYWRkaW5nID0gXCI0cHggOHB4XCI7XG4gICAgdHRpbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0dGluLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XG4gICAgdHRpbi5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggMnB4IDFweCBncmF5XCI7XG4gICAgdHRpbi5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgdHRpbi5zdHlsZS5ib3R0b20gPSBcIjhweFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuZGF0YXNldC5oaW50KSB7XG4gICAgICAgICAgICB0dGluLmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQuaGludDtcbiAgICAgICAgICAgIC8vIHR0LnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcbiAgICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9vbHMoKSB7XG4gICAgbGV0IHR0b29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHRvb2xzLnN0eWxlLm1pbldpZHRoID0gXCIxMDBweFwiO1xuICAgIHR0b29scy5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgIC8vdHRvb2xzLnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHR0b29scy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBteWN5YW47XG4gICAgdHRvb2xzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHRvb2xzLnN0eWxlLnBhZGRpbmcgPSBcIjBweCA0cHhcIjtcbiAgICBjb25zb2xlLmxvZyhcImFwcGVuZCB0ZXh0IHRvb2xzXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dG9vbHMpO1xuICAgIC8vYnV0dG9uc1xuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihsYmwsIGZ1bmMsIGhpbnQpIHtcbiAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBiLmlubmVySFRNTCA9IGxibDtcbiAgICAgICAgYi5zdHlsZS53aWR0aCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmhlaWdodCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XG4gICAgICAgIGIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuYyk7XG4gICAgICAgIGIuY2xhc3NMaXN0LmFkZChcInRleHRfdG9vbGJveFwiKTtcbiAgICAgICAgYi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgYi5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICAgICAgYi5vbm1vdXNlb3ZlciA9ICgpPT4gYi5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICBiLm9ubW91c2VvdXQgPSAoKT0+IGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgbGV0IHN2ID0gYi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBzdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7Ly8uc3R5bGUucG9pbnRlckV2ZW50cyhcIm5vbmVcIik7XG4gICAgICAgIGlmIChoaW50KSB7IGIuZGF0YXNldC5oaW50ID0gaGludCB9O1xuICAgICAgICB0dG9vbHMuYXBwZW5kQ2hpbGQoYik7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGljb25zLmJvbGQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9sZFwiLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJCb2xkXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLml0YWxpYywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWNcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJJdGFsaWNcIilcbiAgICBhZGRCdXR0b24oaWNvbnMudW5kZXJsaW5lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlVuZGVybGluZVwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5zdHJpa2UsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN0cmlrZVwiKVxuICAgIC8qXG4gICAgYWRkQnV0dG9uKFwic21hbGxcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWNyZWFzZUZvbnRTaXplXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICAqL1xuICAgIGFkZEJ1dHRvbihpY29ucy5zdXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3VwZXJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3ViLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdWJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubGluaywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgQXNrKFwiRW50ZXIgVVJMXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiLCBmYWxzZSwgdW5lc2NhcGUocikpKVxuICAgICAgICAgICAgLmNhdGNoKHI9PmNvbnNvbGUubG9nKHIpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiTWFrZSBsaW5rXCIpXG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlbCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBsZXQgY2UgPSBlbDtcbiAgICAgICAgLy9pZighY2Upe3JldHVybiBudWxsfTtcbiAgICAgICAgd2hpbGUoIWNlLmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiBjZS5ub2RlTmFtZSE9XCJCT0RZXCIpeyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2UgPSBjZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYoIWNlKXtyZXR1cm4gbnVsbH07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXB0b1wiICwgY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpe1xuICAgICAgICAgICAgcmV0dXJuIGNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpO1xuICAgICAgICBsZXQgZWljID0gdGVzdEVkaXRhYmxlQ29udGFpbmVyKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKGVpYyAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlaWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUubGVmdCA9IHRndC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGxldCB0dGhlID0gdHRvb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcCAtIHR0aGUgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG5cbiAgICAgICAgLy99IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRfdG9vbGJveFwiKSkge1xuICAgICAgICAgICAgLy90dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGJsb2NrLCBtZW51KSB7XG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vbWVudVxuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgIGRkLnN0eWxlLnRvcCA9IFwiMTAwJVwiO1xuICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBkZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLm1heFdpZHRoID0gXCIxMDBweFwiO1xuICAgIGRkLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCA2cHggcmdiYSgwJSwgMCUsIDAlLCAwLjMwNClcIlxuICAgIC8vZGQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JheVwiXG4gICAgbWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlbGVtZW50Lmljb247XG4gICAgICAgIC8vbWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBtaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmZlci1ib3hcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiNHB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBtaS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG1pLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmZpbGwgPSBteWN5YW47XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gbXljeWFuO1xuICAgICAgICBtaS5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICBtaS5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIlxuICAgICAgICBsZXQgbWlzdmcgPSBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBpZihtaXN2Zyl7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aD1cIjI0cHhcIjtcbiAgICAgICAgICAgIG1pc3ZnLnN0eWxlLmhlaWdodD1cIjI0cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBtaS5vbm1vdXNlb3ZlciA9ICgpPT4ge21pLnN0eWxlLmZpbGw9XCJibGFja1wiIDsgbWkuc3R5bGUuY29sb3I9XCJibGFja1wifTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpPT4ge21pLnN0eWxlLmZpbGw9bXljeWFuIDsgbWkuc3R5bGUuY29sb3I9bXljeWFufTtcblxuICAgICAgICBcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkZC5hcHBlbmRDaGlsZChtaSlcbiAgICB9KTtcbiAgICAvL1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGRkKTtcblxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZG93blwiKTtcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjAxMSlcIjtcbiAgICBidXR0b24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuZmlsbCA9IG15Y3lhbjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrQ29udHJvbHMoYmxvY2ssIGl0ZW1zLCBlZCkge1xuICAgIGlmICghaXRlbXMgJiYgZWQpIHtcbiAgICAgICAgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayB1cFwiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLnVwLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgZWQubW92ZVVwKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibW92ZSBibG9jayBkb3duXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZG93bixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVEb3duKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiZGVsZXRlIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbnMuZGVsLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgZWQucmVtb3ZlQmxvY2soYmxvY2suZGF0YXNldC5ibG9ja19pZCkgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICB9XG4gICAgLy9cbiAgICBibG9jay5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBsZXQgb3VyY2xhc3MgPSBcImN0cmxzXCIgKyBibG9jay5kYXRhc2V0LmJsb2NrX2lkO1xuICAgIGxldCBjdHJscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChcImNvbW1vbl9ibG9ja19jb250cm9sc1wiKTtcbiAgICBjdHJscy5jbGFzc0xpc3QuYWRkKG91cmNsYXNzKTtcbiAgICBjdHJscy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBjdHJscy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIGN0cmxzLnN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS53aWR0aCA9IFwiMzJweFwiO1xuICAgIGN0cmxzLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGN0cmxzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZmVlXCI7XG4gICAgY3RybHMuc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIFwiICsgbXljeWFuO1xuICAgIGN0cmxzLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGN0cmxzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSA2OyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiIH0pO1xuICAgIGN0cmxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7IGN0cmxzLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiOyBjdHJscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgfSk7XG5cbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gNTsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiB9KTtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIH0pO1xuXG5cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWkuaW5uZXJIVE1MID0gZS5pY29uO1xuICAgICAgICBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmhlaWdodD1cIjI0cHhcIjtcbiAgICAgICAgbWkuc3R5bGUuZmlsbCA9IG15Y3lhbjtcbiAgICAgICAgbWkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBtaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZS5sYWJlbDtcbiAgICAgICAgY3RybHMuYXBwZW5kQ2hpbGQobWkpO1xuICAgIH0pO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY3RybHMpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9