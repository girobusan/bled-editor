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
    mine.style.width="100%";
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

/***/ "./src/bled/svg/paragraph-remix-24px.svg":
/*!***********************************************!*\
  !*** ./src/bled/svg/paragraph-remix-24px.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;} </style><path d=\"M9,11v10h2V5h2v16h2V5h2V3H9C6.8,3,5,4.8,5,7S6.8,11,9,11z\"></path><path class=\"st0\" d=\"M0,0h24v24H0V0z\"></path></svg>"

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
    ttin.style.backgroundColor = "rgba(100%, 100%, 100%, 0.8)";
    ttin.style.color = "#888888";
    ttin.style.pointerEvents = "none";
    ttin.style.fontSize = "12px";
    ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "4px";
    ttin.style.boxShadow = "2px 2px 2px 1px gray";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvYmxvY2tlZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2FkZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvYXJyb3dfZG93bndhcmQtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Fycm93X3Vwd2FyZC0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvY2xlYXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2NvZGUtbXktMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2RpdmlkZXItMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2Zvcm1hdF9saXN0X2J1bGxldGVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9mb3JtYXRfcXVvdGUtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL2hlYWRlci0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9saW5rLTI0cHguc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy9wYXJhZ3JhcGgtcmVtaXgtMjRweC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfYm9sZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfaXRhbGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9saW5rLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF9zdHJpa2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy90ZXh0X3N1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWQvc3ZnL3RleHRfc3VwLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC9zdmcvdGV4dF91bmRlcmxpbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3N2Zy92aWRlb2NhbS0yNHB4LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxlZC90ZXN0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9ibGVkL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjs7QUFFcEI7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7OztBQUd4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxrQkFBa0I7QUFDakMsdUJBQXVCO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBVztBQUNuQixRQUFRLDZDQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsWUFBWSxpREFBZ0I7QUFDNUIsWUFBWSxvREFBbUI7O0FBRS9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMENBQVMsRztBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywwQ0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBDQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyx5Q0FBUTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLHlDQUFRO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzVnQ0EsK0w7Ozs7Ozs7Ozs7O0FDQUEsZ0g7Ozs7Ozs7Ozs7O0FDQUEsNkc7Ozs7Ozs7Ozs7O0FDQUEsdUo7Ozs7Ozs7Ozs7O0FDQUEsd1A7Ozs7Ozs7Ozs7O0FDQUEsME5BQTBOLHlEQUF5RCxXQUFXLHdOOzs7Ozs7Ozs7OztBQ0E5UiwwTkFBME4seURBQXlELFdBQVcsd2M7Ozs7Ozs7Ozs7O0FDQTlSLGtUOzs7Ozs7Ozs7OztBQ0FBLG9NOzs7Ozs7Ozs7OztBQ0FBLDBOQUEwTix5REFBeUQsV0FBVyxnUzs7Ozs7Ozs7Ozs7QUNBOVIsdVM7Ozs7Ozs7Ozs7O0FDQUEsK1c7Ozs7Ozs7Ozs7O0FDQUEsME5BQTBOLHlEQUF5RCxXQUFXLDZJOzs7Ozs7Ozs7OztBQ0E5UixpeUc7Ozs7Ozs7Ozs7O0FDQUEsaTVEOzs7Ozs7Ozs7OztBQ0FBLDY0Rjs7Ozs7Ozs7Ozs7QUNBQSxzNUU7Ozs7Ozs7Ozs7O0FDQUEsd3FDOzs7Ozs7Ozs7OztBQ0FBLGtqRTs7Ozs7Ozs7Ozs7QUNBQSwwc0Y7Ozs7Ozs7Ozs7O0FDQUEsNlE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUMyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsZUFBZSwrREFBc0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0JBQWdCO0FBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87O0FBRVAsYUFBYSxtQkFBTyxDQUFDLHlEQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsNkRBQXVCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEwQjtBQUNwRCxlQUFlLG1CQUFPLENBQUMsNkRBQXVCO0FBQzlDLFlBQVksbUJBQU8sQ0FBQyx1REFBb0I7QUFDeEMsWUFBWSxtQkFBTyxDQUFDLHVEQUFvQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMseURBQXFCO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyw2REFBdUI7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLCtEQUF3QjtBQUM3QyxZQUFZLG1CQUFPLENBQUMseURBQXFCOztBQUV6QyxXQUFXLG1CQUFPLENBQUMseUVBQTZCO0FBQ2hELGFBQWEsbUJBQU8sQ0FBQyw2RUFBK0I7QUFDcEQsWUFBWSxtQkFBTyxDQUFDLDJEQUFzQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdURBQW9CO0FBQ3hDLGdCQUFnQixtQkFBTyxDQUFDLCtEQUF3Qjs7QUFFaEQ7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMseURBQXFCO0FBQ25ELHVCQUF1QixtQkFBTyxDQUFDLHlFQUE2QjtBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx5RkFBcUM7QUFDbkUsdUJBQXVCLG1CQUFPLENBQUMsaUVBQXlCO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLHlFQUE2QjtBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQywyRkFBc0M7QUFDckUsMkJBQTJCLG1CQUFPLENBQUMsK0VBQWdDOzs7O0FBSTVEOzs7QUFHQTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixhQUFhOztBQUUxQjtBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYSxPQUFPO0FBQ3BDLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBFO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCw4QkFBOEIsc0JBQXNCOzs7QUFHcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0IsZ0NBQWdDO0FBQ3ZHLDhDQUE4QyxnQ0FBZ0MsK0JBQStCOztBQUU3RywrQ0FBK0Msd0JBQXdCLGdDQUFnQztBQUN2Ryw4Q0FBOEMsZ0NBQWdDLCtCQUErQjs7OztBQUk3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDIiwiZmlsZSI6InRlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxlZC90ZXN0aW5nLmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrRWRpdG9yKHtcbiAgICBzZWxlY3RvclxufSkge1xuICAgIGNvbnN0IG15ID0gdGhpcztcbiAgICAvL1xuICAgIGxldCBtaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5lLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0b3Jfb3V0ZXJfY29udGFpbmVyXCIpO1xuICAgIG1pbmUuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgbWluZS5zdHlsZS53aWR0aD1cIjEwMCVcIjtcbiAgICBsZXQgdGhleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoZXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGV5LmFwcGVuZENoaWxkKG1pbmUpO1xuICAgIHRoaXMuZWxlbWVudCA9IG1pbmU7IC8vdGhpcyBlbGVtZW50IGlzIG1pbmVcblxuXG4gICAgdGhpcy5lZGl0b3JzID0ge1xuICAgICAgICAvL1wiemVyb1wiOntcbiAgICAgICAgLy9cbiAgICAgICAgLy99XG4gICAgfTsgLy8gbnVsbDsgLy9wYXJhbXMuZWRpdG9yczsgLy8gIGF2YWlsYWJsZSBibG9ja3MgZWRpdG9yc1xuICAgIHRoaXMuYmxvY2tzID0gbnVsbDsgLy8gYmxvY2tzIGFycmF5XG4gICAgdGhpcy5hZGRNZW51ID0gW107XG5cbiAgICB2YXIgX2N1cnJlbnRfaWQgPSAwO1xuXG4gICAgdGhpcy5fbWFrZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY3VycmVudF9pZCsrO1xuICAgICAgICByZXR1cm4gX2N1cnJlbnRfaWQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGxvYWQgPSBmdW5jdGlvbiAoZiwgdGVzdHVybCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RpbmcgdXBsb2FkXCIsIGYpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgdXJsOiB0ZXN0dXJsID8gdGVzdHVybCA6IFwia2l0dHkuanBlZ1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFVwbG9hZEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgdGhpcy51cGxvYWQgPSBmdW5jO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXRCbG9ja3MgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gICAgICAgIHRoaXMuYmxvY2tzID0ge307XG4gICAgICAgIG1pbmUucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfdW5pdFwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRfaWQgPSAxO1xuICAgICAgICBpZiAoYmxvY2tzKSB7XG4gICAgICAgICAgICBibG9ja3MuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlKGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRoZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgdGhleS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGV5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICAvL2FkZCBzZXJvIGJsb2NrXG5cbiAgICAgICAgLy90aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkaXRvcnMpXG4gICAgICAgIC8vXCJhZGRcIiBtZW51XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZWRpdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWRkZWQgaGFuZGxlciBmb3JcIiwgZSk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbXkuZWRpdG9yc1tlXTtcbiAgICAgICAgICAgIG15LmFkZE1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB2YWwubGFiZWwsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHZhbC5pY29uID8gdmFsLmljb24gOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVmaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXkuYWRkTmV3QmxvY2soZSwgbnVsbCwgcmVmaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vWmVybyBibG9ja1xuXG4gICAgICAgIGxldCB6ZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgemVyby5jbGFzc0xpc3QuYWRkKFwic3RhcnRpbmdfYmxvY2tcIik7XG4gICAgICAgIHplcm8uc3R5bGUuaGVpZ2h0ID0gXCI4cHhcIjtcbiAgICAgICAgemVyby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB6ZXJvLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0zMnB4XCI7XG4gICAgICAgIHplcm8uZGF0YXNldC5ibG9ja19pZCA9IFwic3RhcnRcIjtcbiAgICAgICAgVUkuYWRkUGx1c0J1dHRvbih6ZXJvLCB0aGlzLmFkZE1lbnUpO1xuICAgICAgICBtaW5lLmFwcGVuZENoaWxkKHplcm8pO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLnNldEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAvL3N0YXJ0IFVJXG4gICAgICAgIFVJLnRvb2x0aXBzKCk7XG4gICAgICAgIFVJLnRleHRUb29scygpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2Nrc1tpZF07XG4gICAgfVxuXG4gICAgdGhpcy5JRDJJbmRleCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL1xuICAgICAgICBsZXQgciA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGFzZXQuYmxvY2tfaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByID0gaVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgdGhpcy5JbmRleDJJRCA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrX2VkaXRvcl91bml0XCIpLml0ZW0oaWR4KS5kYXRhc2V0LmJsb2NrX2lkO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tFbGVtZW50QnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbSh0aGlzLklEMkluZGV4KGlkKSk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4ID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShpZHgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3QmxvY2tGcm9tU291cmNlID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdGhpcy5hZGROZXdCbG9jayhkLnR5cGUsIGQuZGF0YSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlVXAgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJpbmRleCA9IHRoaXMuSUQySW5kZXgoaWQpO1xuICAgICAgICBpZiAoYmluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL2ZpbmQgcHJldiBibG9ja1xuICAgICAgICBsZXQgdXBwZXIgPSB0aGlzLmJsb2NrRWxlbWVudEJ5SW5kZXgoYmluZGV4IC0gMSk7XG4gICAgICAgIGlmICh1cHBlcikge1xuICAgICAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUodGhlYmxvY2ssIHVwcGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlRG93biA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgYmluZGV4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vbGFzdD9cbiAgICAgICAgaWYgKGJpbmRleCArIDEgPT0gT2JqZWN0LmtleXModGhpcy5ibG9ja3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0bmV4dCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChiaW5kZXggKyAyKTtcbiAgICAgICAgbGV0IHRoZWJsb2NrID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgaWYgKG5leHRuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoZWJsb2NrLCBuZXh0bmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3dlIGF0IHByZWxhc3QgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoZWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yID0gZnVuY3Rpb24gKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWFrZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHBhc3RlXG4gICAgfSkge1xuICAgICAgICB0aGlzLmVkaXRvcnNbdHlwZV0gPSB7XG4gICAgICAgICAgICBtYWtlLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgcGFzdGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzT24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGJmID0gdGhpcy5ibG9ja0VsZW1lbnRCeUlEKGlkKTtcbiAgICAgICAgYmYuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE5ld0Jsb2NrID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIHJlZmlkKSB7IC8vcmVmPWluc3RlcnQgYWZ0ZXIgdGhhdCBibG9ja1xuICAgICAgICAvL2lmIHRoZXJlIGlzIHJlZiBpZCwgd2UgaGF2ZSB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgICAgLy9maW5kIG5leHQgZWxlbWVudFxuICAgICAgICBpZiAocmVmaWQgPT0gXCJzdGFydFwiKSB7XG4gICAgICAgICAgICAvLyB2YXIgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHJlZmVsID0gdGhpcy5ibG9ja0VsZW1lbnRCeUluZGV4KDApO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZmlkKSB7XG4gICAgICAgICAgICBsZXQgbmV4dGlkeCA9IHRoaXMuSUQySW5kZXgocmVmaWQpICsgMTtcbiAgICAgICAgICAgIHZhciByZWZlbCA9IHRoaXMuYmxvY2tFbGVtZW50QnlJbmRleChuZXh0aWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIGJsb2NrIG9mIHR5cGUgXG4gICAgICAgIGlmICh0eXBlIGluIHRoaXMuZWRpdG9ycykge1xuXG5cbiAgICAgICAgICAgIHZhciBkb21ibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgYklEID0gdGhpcy5fbWFrZUlEKCk7XG4gICAgICAgICAgICBsZXQgYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZG9tYmxvY2suYXBwZW5kQ2hpbGQoYmNvbnRlbnQpO1xuICAgICAgICAgICAgZG9tYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl91bml0XCIpO1xuICAgICAgICAgICAgZG9tYmxvY2suZGF0YXNldC5ibG9ja19pZCA9IGJJRDtcbiAgICAgICAgICAgIGRvbWJsb2NrLmRhdGFzZXQuYmxvY2tfdHlwZSA9IHR5cGU7XG5cblxuICAgICAgICAgICAgYmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5lZGl0b3JzW3R5cGVdLm1ha2UoZGF0YSwgYmNvbnRlbnQsIGJJRCwgdGhpcyk7IC8vYmxvY2sgbWFkZVxuICAgICAgICAgICAgdGhpcy5ibG9ja3NbYklEXSA9IGJsb2NrO1xuICAgICAgICAgICAgVUkuYWRkUGx1c0J1dHRvbihkb21ibG9jaywgdGhpcy5hZGRNZW51KTtcbiAgICAgICAgICAgIFVJLmFkZEJsb2NrQ29udHJvbHMoZG9tYmxvY2ssIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGVkaXRvciBmb3JcIiwgdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWZpZCAmJiByZWZlbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkb21ibG9jaywgcmVmZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvbWJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIGJJRDtcbiAgICB9IC8vYWRkIG5ldyBibG9ja1xuXG4gICAgdGhpcy5yZW1vdmVCbG9jayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAvL2ZpbmQgYmxvY2sgaW5kZXhcbiAgICAgICAgbGV0IGVsaWR4ID0gdGhpcy5JRDJJbmRleChpZCk7XG4gICAgICAgIC8vYW5ub3VuY2UgZGVsZXRpb24gdG8gYmxvY2tcbiAgICAgICAgaWYgKFwiYmVmb3JlRGVsZXRlXCIgaW4gdGhpcy5ibG9ja3NbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2Nrc1tpZF0uYmVmb3JlRGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZG9tIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIikuaXRlbShlbGlkeCkucmVtb3ZlKCk7XG4gICAgICAgIC8vZGVsIGJsb2NrIGZyb20gcmVnaXN0cnlcbiAgICAgICAgZGVsZXRlKHRoaXMuYmxvY2tzW2lkXSk7XG4gICAgfSAvL3JlbW92ZSBibG9ja1xuXG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24gKGNsYikge1xuICAgICAgICBsZXQgZHQgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tfZWRpdG9yX3VuaXRcIilcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICBkdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGUuZGF0YXNldC5ibG9ja190eXBlLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogbXkuYmxvY2tzW2UuZGF0YXNldC5ibG9ja19pZF0uc2F2ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBsZXQgbXlkYXRhID0ge1xuICAgICAgICAgICAgXCJlZGl0b3JcIiA6IFwiXCIsXG4gICAgICAgICAgICBcImJsb2Nrc1wiOiBkdFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiJWNFZGl0b3Igc2F2aW5nXCIsIChcImNvbG9yOiBcIiArIFVJLm15Y3lhbikpOyAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKG15ZGF0YSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgICAgICBpZiAoY2xiKSB7XG4gICAgICAgICAgICBjbGIobXlkYXRhKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbXlkYXRhO1xuICAgIH1cblxufVxuXG52YXIgY29uc3RydWN0b3JzID0ge307XG52YXIgdGVtcGxhdGVzID0ge31cblxudGVtcGxhdGVzLmZvcm1Sb3cgPSBmdW5jdGlvbiAoZWxlbWVudHNfYXJyYXkpIHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjhweFwiO1xuICAgIGVsZW1lbnRzX2FycmF5LmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI4cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5ub2RlTmFtZSA9PSBcIkxBQkVMXCIgJiYgaSAhPSAwKSB7XG4gICAgICAgICAgICBlLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvdztcbn1cblxudGVtcGxhdGVzLmFkZFRvb2xiYXIgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBsZXQgdGJ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YnguY2xhc3NMaXN0LmFkZChcImJsb2NrX3Rvb2xiYXJcIik7XG4gICAgdGJ4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIHRieC5zdHlsZS5taW5IZWlnaHQgPSBcIjI0cHhcIjtcbiAgICB0Ynguc3R5bGUuZm9udFNpemUgPSBcIi44ZW1cIlxuICAgIHRieC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGJ4LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuXG4gICAgYmxvY2suZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRieCk7IC8vYWRkIHRvIGVkaXRvcl9pdGVtLCAhbm90ISBibG9jayBjb250ZW50IGNvbnRhaW5lclxuICAgIGJsb2NrLmFkZFRvVG9vbGJhciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwudGFnTmFtZSA9PSBcIkxBQkVMXCIpIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0YnguYXBwZW5kQ2hpbGQoZWwpXG4gICAgfVxufVxuXG50ZW1wbGF0ZXMudHdvUGFuZWxzID0gZnVuY3Rpb24gKGJsb2NrKSB7XG4gICAgLy9sZXQgbW9kZSA9IFwicHJldmlld1wiO1xuICAgIGxldCBwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHAuY2xhc3NMaXN0LmFkZChcImJsb2NrX3ByZXZpZXdfcGFuZWxcIik7XG4gICAgcHAuY2xhc3NMaXN0LmFkZChcIm9uZV9vZl90d29fcGFuZWxzXCIpO1xuICAgIHBwLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHBwLnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xuICAgIHBwLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgICBsZXQgZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVwLmNsYXNzTGlzdC5hZGQoXCJibG9ja19lZGl0X3BhbmVsXCIpO1xuICAgIGVwLmNsYXNzTGlzdC5hZGQoXCJvbmVfb2ZfdHdvX3BhbmVsc1wiKTtcbiAgICBlcC5zdHlsZS5taW5IZWlnaHQgPSBcIjY0cHhcIjtcbiAgICAvL2VwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgZXAuc3R5bGUuYm9yZGVyVG9wID0gXCIycHggc29saWQgXCIgKyBVSS5teWN5YW47XG4gICAgZXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVwLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICAgIC8vXG4gICAgbGV0IGVidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVidG4uY2xhc3NMaXN0LmFkZChcImVkaXRfYnV0dG9uXCIpO1xuICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG4gICAgZWJ0bi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBlYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2lsdmVyXCI7XG4gICAgZWJ0bi5zdHlsZS5wYWRkaW5nID0gXCIycHggNHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxuICAgIGVidG4uc3R5bGUuekluZGV4ID0gNTtcbiAgICBlYnRuLnN0eWxlLnJpZ2h0ID0gXCI4cHhcIjtcbiAgICBlYnRuLnN0eWxlLmJvdHRvbSA9IFwiOHB4XCI7XG4gICAgZWJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGVkaXRtb2RlID0gZXAuc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKGVkaXRtb2RlKSB7XG4gICAgICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiRURJVFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJQUkVWSUVXXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vXG4gICAgcHAuYXBwZW5kQ2hpbGQoZWJ0bik7XG4gICAgLy9cbiAgICBjb25zb2xlLmxvZyhibG9jaylcbiAgICBibG9jay5lbGVtZW50LmFwcGVuZENoaWxkKHBwKTtcbiAgICBibG9jay5lbGVtZW50LmFwcGVuZENoaWxkKGVwKTtcbiAgICAvL1xuICAgIGJsb2NrLmFkZFRvUHJldmlldyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHBwLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgYmxvY2suYWRkVG9FZGl0b3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGJsb2NrLmdvRWRpdE1vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBlYnRuLmlubmVySFRNTCA9IFwiUFJFVklFV1wiO1xuXG4gICAgfVxuICAgIGJsb2NrLmdvUHJldmlld01vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVidG4uaW5uZXJIVE1MID0gXCJFRElUXCI7XG5cbiAgICB9XG4gICAgYmxvY2suaXNJbkVkaXRNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGVwLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpO1xuICAgIH1cblxufVxuXG5jb25zdHJ1Y3RvcnMucGFyYWdyYXBoID0gZnVuY3Rpb24gKGRhdGEsIGVsLCBpZCwgZWRpdG9yKSB7XG4gICAgbGV0IGJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIC8vYmMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBlbC5hcHBlbmRDaGlsZChiYyk7XG4gICAgbGV0IHJlID0gLzxkaXZ8cHxoPi9naTtcblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIG15OiB0aGlzLFxuICAgICAgICBpZDogaWQsIC8vISEhISEhISEhISEhISEhISEhISAgICBcbiAgICAgICAgZGF0YTogZGF0YSA/IGRhdGEgOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBlZGl0b3I6IGVkaXRvcixcbiAgICAgICAgX3A6IGJjLFxuICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3AuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fcC5pbm5lckhUTUxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsYy5fcC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBtYWdpYyA9IFwiIyEjXCJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBwcmVzc2VkXCIsIGUuc2hpZnRLZXkgPT0gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0VGV4dFwiLCBmYWxzZSwgbWFnaWMpO1xuICAgICAgICAgICAgICAgIGxldCBjbGlja2F0ID0gYmxjLl9wLmlubmVySFRNTC5pbmRleE9mKG1hZ2ljKVxuICAgICAgICAgICAgICAgIGxldCB0ZXh0bGVmdCA9IGJsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIGNsaWNrYXQpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0bmV4dCA9IGJsYy5fcC5pbm5lckhUTUwuc3Vic3RyaW5nKGNsaWNrYXQgKyBtYWdpYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dGxlZnQsIFwifFwiICwgdGV4dG5leHQpO1xuICAgICAgICAgICAgICAgIGJsYy5fcC5pbm5lckhUTUwgPSB0ZXh0bGVmdDsgLy9ibGMuX3AuaW5uZXJIVE1MLnN1YnN0cmluZygwICwgY2xpY2thdCk7XG4gICAgICAgICAgICAgICAgbGV0IG5wID0gZWRpdG9yLmFkZE5ld0Jsb2NrKFwicGFyYWdyYXBoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dG5leHRcbiAgICAgICAgICAgICAgICB9LCBibGMuaWQpO1xuICAgICAgICAgICAgICAgIC8vc2VsLmFuY2hvck5vZGUuaW5uZXJIVE1MID0gbGVhdmVoZXJlO1xuICAgICAgICAgICAgICAgIC8vbnAgPSBuZXdseSBpbnNlcnRlZCBibG9jayBpZFxuICAgICAgICAgICAgICAgIGJsYy5lZGl0b3IuYmxvY2tzW25wXS5fcC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuZGl2aWRlciA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8aHIgLz5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0cnVjdG9ycy5oZWFkZXIgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICAvL215dGFnLlxuXG4gICAgbGV0IGJsYyA9IHtcbiAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgIC8vaWQ6IGlkLFxuICAgICAgICB0ZXh0OiBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiSGVhZGVyXCIsXG4gICAgICAgIGxldmVsOiBkYXRhICYmIGRhdGEubGV2ZWwgPyBkYXRhLmxldmVsIDogMSxcbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUwpXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfcHJldmlld1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBteWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiICsgdGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBteWguc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgbXloLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcHJldmlld1wiKTtcbiAgICAgICAgICAgIG15aC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobXloKVxuXG4gICAgICAgIH0sXG4gICAgICAgIC8vbXl0YWc6IFxuXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG15aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIgKyB0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIG15aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBteWguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wcmV2aWV3XCIpO1xuICAgICAgICAgICAgbXloLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChteWgpO1xuICAgICAgICAgICAgLy90aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHR4dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9wcmV2aWV3XCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHR4dCxcbiAgICAgICAgICAgICAgICBcImxldmVsXCI6IHRoaXMubGV2ZWxcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgbGV0IG9wdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIG9wdHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAvL29wdHMudHlwZT1cInNlbGVjdFwiO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgIG9wdC52YWx1ZSA9IGk7XG4gICAgICAgIG9wdC5sYWJlbCA9IFwibGV2ZWwgXCIgKyBpO1xuICAgICAgICBvcHQuaW5uZXJIVE1MID0gXCJsZXZlbCBcIiArIGk7XG4gICAgICAgIGlmIChpID09IGJsYy5sZXZlbCkge1xuICAgICAgICAgICAgb3B0LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbiAgICBvcHRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG52ID0gb3B0c1tvcHRzLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBibGMubGV2ZWwgPSBudjtcbiAgICAgICAgYmxjLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIGJsYy5hZGRUb1Rvb2xiYXIob3B0cylcbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMuY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xuICAgIGxldCBjZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpO1xuICAgIHByZS5hcHBlbmRDaGlsZChjZCk7XG4gICAgY2Quc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgIGNkLmRhdGFzZXQubm9fdGV4dF90b29sYm94ID0gdHJ1ZTtcbiAgICBlbC5hcHBlbmRDaGlsZChwcmUpO1xuICAgIGxldCBsYW5ncyA9IFtcIkF1dG9cIiwgXCJBcmR1aW5vXCIsICdKYXZhU2NyaXB0JywgXCJQcm9jZXNzaW5nXCIsIFwiUHl0aG9uXCIsIFwiQysrXCIsIFwiQmFzaFwiLCBcIkJhc2ljXCIsIFwiQnJhaW5mdWNrXCJdO1xuICAgIC8vXG4gICAgbGV0IG9wdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGxhbmdzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IG1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbWkudmFsdWUgPSBlO1xuICAgICAgICBtaS5sYWJlbCA9IGU7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGU7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGFuZ3VhZ2UgJiYgZSA9PSBkYXRhLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBtaS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5hcHBlbmRDaGlsZChtaSk7XG4gICAgfSk7XG4gICAgLy9cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNkLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCIjICB0eXBlXFxuIyAgaGVyZVwiO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGNkLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogb3B0c1tvcHRzLnNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGVtcGxhdGVzLmFkZFRvb2xiYXIoYmxjKTtcbiAgICBibGMuYWRkVG9Ub29sYmFyKG9wdHMpO1xuICAgIHJldHVybiBibGM7XG5cbn1cblxuY29uc3RydWN0b3JzLnJhdyA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuXG4gICAgbGV0IGVkaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBlZGkuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBlZGkuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgZWRpLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGVkaS5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBcIiArIFVJLm15Y3lhbjtcbiAgICBlZGkuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5odG1sKSB7XG4gICAgICAgIGVkaS52YWx1ZSA9IGRhdGEuaHRtbDtcbiAgICB9XG5cblxuICAgIGxldCBibGMgPSB7XG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZWRpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sOiBlZGkudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsYztcblxufVxuXG5jb25zdHJ1Y3RvcnMuYmxvY2txdW90ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbCwgaWQsIGVkaXRvcikge1xuICAgIGxldCBibGN0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYmxvY2txdW90ZVwiKTtcbiAgICBibGN0YWcuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgbGV0IGJsY2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICBibGNpbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgbGV0IGJsZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgbGV0IGJsY2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjaXRlXCIpO1xuICAgIGJsZm9vdC5hcHBlbmRDaGlsZChibGNpdGUpO1xuICAgIGJsY2l0ZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG5cbiAgICBibGN0YWcuYXBwZW5kQ2hpbGQoYmxjaW4pO1xuICAgIGJsY3RhZy5hcHBlbmRDaGlsZChibGZvb3QpO1xuICAgIGJsY2luLmlubmVySFRNTCA9IGRhdGEgJiYgZGF0YS50ZXh0ID8gZGF0YS50ZXh0IDogXCLQptC40YLQsNGC0LBcIjtcbiAgICBibGNpdGUuaW5uZXJIVE1MID0gZGF0YSAmJiBkYXRhLmNhcHRpb24gPyBkYXRhLmNhcHRpb24gOiBcItCf0L7QtNC/0LjRgdGMXCJcbiAgICBsZXQgYmxvY2sgPSB7XG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYmxjdGFnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBibGNpbi5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogYmxjaXRlLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBibG9jaztcblxufVxuXG5jb25zdHJ1Y3RvcnMuaW1hZ2UgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgZmlndGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcbiAgICBsZXQgcGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGltZy5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwJVwiO1xuICAgIGxldCBmYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xuICAgIGZjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICBmYy5pbm5lckhUTUwgPSBkYXRhICYmIGRhdGEuY2FwdGlvbiA/IGRhdGEuY2FwdGlvbiA6IFwi0J/QvtC00L/QuNGBXCJcbiAgICBmaWd0YWcuYXBwZW5kQ2hpbGQocGltZyk7XG4gICAgZmlndGFnLmFwcGVuZENoaWxkKGZjKTtcbiAgICBwaW1nLnNyYyA9IGRhdGEgJiYgZGF0YS5maWxlID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG5cbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBpbWFnZVwiKVxuICAgICAgICB9LFxuICAgIH1cbiAgICB0ZW1wbGF0ZXMudHdvUGFuZWxzKGJsYyk7XG4gICAgYmxjLmFkZFRvUHJldmlldyhmaWd0YWcpO1xuICAgIC8vZWRpdFxuICAgIC8vLy91cGxvYWRcbiAgICBsZXQgdXBsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkLnR5cGUgPSBcImZpbGVcIjtcbiAgICB1cGxkLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBsZXQgdXBsZGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1cGxkYnRuLnZhbHVlID0gXCJ1cGxvYWRcIjtcbiAgICB1cGxkYnRuLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgdXBsZGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZWRpdG9yLnVwbG9hZCh1cGxkLmZpbGVzWzBdKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBwaW1nLnNyYyA9IHIudXJsO1xuICAgICAgICAgICAgICAgIHNyY2lucHV0LnZhbHVlID0gci51cmw7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFt1cGxkLCB1cGxkYnRuXSkpO1xuICAgIC8vLy9lZGl0IHNyY1xuICAgIGxldCBzcmNsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzcmNsYWJlbC5pbm5lckhUTUwgPSBcIlNvdXJjZSBVUkxcIjtcbiAgICBsZXQgc3JjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3JjaW5wdXQuc3R5bGUuZmxleEdyb3cgPSAyO1xuICAgIHNyY2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBzcmNpbnB1dC52YWx1ZSA9IGRhdGEgJiYgZGF0YS5maWxlLnVybCA/IGRhdGEuZmlsZS51cmwgOiBcIlwiO1xuICAgIHNyY2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBwaW1nLnNyYyA9IHRoaXMudmFsdWU7XG4gICAgfSlcbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3NyY2xhYmVsLCBzcmNpbnB1dF0pKTtcbiAgICAvLy8vY2xhc3Nlc1xuICAgIC8vLy8vL3N0cmV0Y2hlZFxuICAgIGxldCBzdHJldGNobGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3RyZXRjaGxhYmVsLmlubmVySFRNTCA9IFwic3RyZXRjaGVkXCJcbiAgICBsZXQgc3RyZXRjaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN0cmV0Y2hlZC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHN0cmV0Y2hlZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICByaWdodC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZWZ0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vcmVzaXplLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZ3RhZy5jbGFzc0xpc3QucmVtb3ZlKFwic3RyZXRjaGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZGF0YSAmJiBkYXRhLnN0cmV0Y2hlZDtcbiAgICAvLy8vLy9ub3Jlc2l6ZVxuICAgIGxldCBucmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5ybGFiZWwuaW5uZXJIVE1MID0gXCJubyByZXNpemVcIlxuICAgIGxldCBub3Jlc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3Jlc2l6ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIG5vcmVzaXplLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHN0cmV0Y2hlZC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG4gICAgbm9yZXNpemUuY2hlY2tlZCA9IGRhdGEgJiYgKGRhdGEubm9yZXNpemUgfHwgZGF0YS53aXRoYmFja2dyb3VuZCk7XG4gICAgLy8vLy9sZWZ0XG4gICAgbGV0IGxsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsbGFiZWwuaW5uZXJIVE1MID0gXCJsZWZ0XCJcbiAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZWZ0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbGVmdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICByaWdodC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzdHJldGNoZWQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxlZnQuY2hlY2tlZCA9IGRhdGEgJiYgZGF0YS5sZWZ0O1xuICAgIC8vLy9yaWdodFxuICAgIGxldCBybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcmxhYmVsLmlubmVySFRNTCA9IFwicmlnaHRcIlxuICAgIGxldCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICByaWdodC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHJpZ2h0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGxlZnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc3RyZXRjaGVkLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJpZ2h0LmNoZWNrZWQgPSBkYXRhICYmIGRhdGEucmlnaHQ7XG5cbiAgICAvLy8vYm9yZGVyXG4gICAgbGV0IGJsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBibGFiZWwuaW5uZXJIVE1MID0gXCJib3JkZXJcIlxuICAgIGxldCBib3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYm9yZGVyLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgYm9yZGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHBpbWcuY2xhc3NMaXN0LmFkZChcImJvcmRlcmVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXJlZFwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIGJvcmRlci5jaGVja2VkID0gZGF0YSAmJiBkYXRhLmJvcmRlcjtcblxuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhbc3RyZXRjaGVkLCBzdHJldGNobGFiZWwsXG4gICAgICAgIG5vcmVzaXplLCBucmxhYmVsLFxuICAgICAgICBsZWZ0LCBsbGFiZWwsXG4gICAgICAgIHJpZ2h0LCBybGFiZWwsXG4gICAgICAgIGJvcmRlciwgYmxhYmVsXG4gICAgXSkpO1xuXG4gICAgLy9cbiAgICBibGMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0cmV0Y2hlZDogc3RyZXRjaGVkLmNoZWNrZWQsXG4gICAgICAgICAgICByaWdodDogcmlnaHQuY2hlY2tlZCxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQuY2hlY2tlZCxcbiAgICAgICAgICAgIG5vcmVzaXplOiBub3Jlc2l6ZS5jaGVja2VkLFxuICAgICAgICAgICAgd2l0aEJhY2tncm91bmQ6IG5vcmVzaXplLmNoZWNrZWQsXG4gICAgICAgICAgICBib3JkZXI6IGJvcmRlci5jaGVja2VkLFxuICAgICAgICAgICAgd2l0aEJvcmRlcjogYm9yZGVyLmNoZWNrZWQsXG4gICAgICAgICAgICBjYXB0aW9uOiBmYy5pbm5lckhUTUwsXG4gICAgICAgICAgICBmaWxlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBzcmNpbnB1dC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhICYmIGRhdGEuZmlsZSAmJiBkYXRhLmZpbGUudXJsKSB7XG4gICAgICAgIGJsYy5nb1ByZXZpZXdNb2RlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxjLmdvRWRpdE1vZGUoKTtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gYmxjO1xufVxuXG5jb25zdHJ1Y3RvcnMudmlkZW8gPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkYXRhOiBkYXRhID8gZGF0YSA6IHt9LFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH1cbiAgICBpZiAoIWJsYy5kYXRhLmZpbGUpIHtcbiAgICAgICAgYmxjLmRhdGEuZmlsZSA9IHt9O1xuICAgIH1cbiAgICB0ZW1wbGF0ZXMudHdvUGFuZWxzKGJsYyk7XG4gICAgLy9wcmV2aWV3XG4gICAgbGV0IHZ0YWcgPSBibGMuYWRkVG9QcmV2aWV3KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSk7XG4gICAgdnRhZy5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwJVwiO1xuICAgIC8vbGV0IHNyY3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gICAgLy92dGFnLmFwcGVuZENoaWxkKHNyY3RhZyk7XG4gICAgdnRhZy5zcmMgPSBkYXRhICYmIGRhdGEuZmlsZS51cmwgPyBkYXRhLmZpbGUudXJsIDogXCJcIjtcbiAgICAvL2VkaXRvclxuICAgIC8vLy91cGxvYWQgICAgIFxuICAgIGxldCB1cGxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGQudHlwZSA9IFwiZmlsZVwiO1xuICAgIHVwbGQuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIGxldCB1cGxkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVwbGRidG4udmFsdWUgPSBcInVwbG9hZFwiO1xuICAgIHVwbGRidG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICB1cGxkYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlZGl0b3IudXBsb2FkKHVwbGQuZmlsZXNbMF0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHZ0YWcuc3JjID0gci51cmw7XG4gICAgICAgICAgICAgICAgc3JjaW5wdXQudmFsdWUgPSByLnVybDtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBibGMuYWRkVG9FZGl0b3IodGVtcGxhdGVzLmZvcm1Sb3coW3VwbGQsIHVwbGRidG5dKSk7XG4gICAgLy8vL2VkaXQgc3JjXG4gICAgbGV0IHNyY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNyY2xhYmVsLmlubmVySFRNTCA9IFwiU291cmNlIFVSTFwiO1xuICAgIGxldCBzcmNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzcmNpbnB1dC5zdHlsZS5mbGV4R3JvdyA9IDI7XG4gICAgc3JjaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHNyY2lucHV0LnZhbHVlID0gZGF0YSAmJiBkYXRhLmZpbGUudXJsID8gZGF0YS5maWxlLnVybCA6IFwiXCI7XG4gICAgc3JjaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZ0YWcuc3JjID0gdGhpcy52YWx1ZTtcbiAgICAgICAgYmxjLmRhdGEuZmlsZS51cmwgPSB0aGlzLnZhbHVlO1xuICAgIH0pXG4gICAgYmxjLmFkZFRvRWRpdG9yKHRlbXBsYXRlcy5mb3JtUm93KFtzcmNsYWJlbCwgc3JjaW5wdXRdKSk7XG4gICAgLy8vL3BhcmFtc1xuICAgIGxldCBwYXJhbXMgPSBbe1xuICAgICAgICAgICAgbmFtZTogXCJhdXRvcGxheVwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLmF1dG9wbGF5LFxuICAgICAgICAgICAgbGFiZWw6IFwiYXV0b3BsYXlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgICBjaGVja2VkOiBkYXRhICYmIGRhdGEuY29udHJvbHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibG9vcFwiLFxuICAgICAgICAgICAgY2hlY2tlZDogZGF0YSAmJiBkYXRhLmxvb3AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibXV0ZWRcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGRhdGEgJiYgZGF0YS5tdXRlZCxcbiAgICAgICAgfSxcblxuICAgIF1cbiAgICBsZXQgcGVscyA9IFtdO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYmxjLmRhdGFbZS5uYW1lXSkge1xuICAgICAgICAgICAgYmxjLmRhdGFbZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHBsYWJlbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgICAgIHBsYWJlbC5pbm5lckhUTUwgPSBlLm5hbWU7XG4gICAgICAgIGxldCBwY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHBjaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBwY2hlY2suY2hlY2tlZCA9IGRhdGEgJiYgZGF0YVtlLm5hbWVdO1xuICAgICAgICBwY2hlY2sub25jbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgYmxjLmRhdGEsIGUubmFtZSk7XG4gICAgICAgICAgICBibGMuZGF0YVtlLm5hbWVdID0gdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgdnRhZy5zZXRBdHRyaWJ1dGUoZS5uYW1lLCB0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9O1xuICAgICAgICBwZWxzLnB1c2gocGNoZWNrKTtcbiAgICAgICAgcGVscy5wdXNoKHBsYWJlbCk7XG5cblxuICAgIH0pO1xuICAgIGJsYy5hZGRUb0VkaXRvcih0ZW1wbGF0ZXMuZm9ybVJvdyhwZWxzKSk7XG5cbiAgICBibGMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJsYy5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBibGM7XG59XG4vKipcbiAqIHtcbiAgICBcInR5cGVcIiA6IFwibGlzdFwiLFxuICAgIFwiZGF0YVwiIDoge1xuICAgICAgICBcInN0eWxlXCIgOiBcInVub3JkZXJlZFwiLFxuICAgICAgICBcIml0ZW1zXCIgOiBbXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBibG9jay1zdHlsZWQgZWRpdG9yXCIsXG4gICAgICAgICAgICBcIkNsZWFuIG91dHB1dCBkYXRhXCIsXG4gICAgICAgICAgICBcIlNpbXBsZSBhbmQgcG93ZXJmdWwgQVBJXCJcbiAgICAgICAgXVxuICAgIH1cbn0sXG4gKi9cblxuY29uc3RydWN0b3JzLmxpc3QgPSBmdW5jdGlvbiAoZGF0YSwgZWwsIGlkLCBlZGl0b3IpIHtcbiAgICBsZXQgYmxjID0ge1xuICAgICAgICBlbGVtZW50OiBlbCxcbiAgICAgICAgbGlzdF9lbGVtZW50OiBudWxsLFxuICAgICAgICB0eXBlOiBkYXRhICYmIGRhdGEuc3R5bGUgJiYgZGF0YS5zdHlsZSA9PSBcIm9yZGVyZWRcIiA/IFwib2xcIiA6IFwidWxcIixcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHRoaXMudHlwZSA9PSBcIm9sXCIgPyBcIm9yZGVyZWRcIiA6IFwidW5vcmRlcmVkXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBBcnJheS5mcm9tKHRoaXMubGlzdF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkubWFwKGUgPT4gZS5pbm5lckhUTUwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL2VkaXRvclxuICAgIC8vLy9vdXRlciBsaXN0XG4gICAgYmxjLmxpc3RfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYmxjLnR5cGUpO1xuICAgIGVsLmFwcGVuZENoaWxkKGJsYy5saXN0X2VsZW1lbnQpO1xuICAgIC8vLy9kbyB3ZSBoYXZlIGRhdGFcbiAgICBpZiAoZGF0YSAmJiBkYXRhLml0ZW1zKSB7XG4gICAgICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsLmlubmVySFRNTCA9IGU7XG4gICAgICAgICAgICBsLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGFkZFNtYXJ0UmVtb3ZlKGwpXG4gICAgICAgICAgICBibGMubGlzdF9lbGVtZW50LmFwcGVuZENoaWxkKGwpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvLy8vL21ha2UgTEkgZGVsZXRhYmxlIFxuICAgIGZ1bmN0aW9uIGFkZFNtYXJ0UmVtb3ZlKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUua2V5Q29kZSAsIHRoaXMuaW5uZXJIVE1MLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDggJiYgdGhpcy5pbm5lckhUTUwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMyAmJiB0aGlzLmlubmVySFRNTC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCBuaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBuaS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy93aGVyZT9cbiAgICAgICAgICAgICAgICBsZXQgbXluZXh0ID0gdGhpcy5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAobXluZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuaW5zZXJ0QmVmb3JlKG5pLCBteW5leHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYy5saXN0X2VsZW1lbnQuYXBwZW5kQ2hpbGQobmkpOyAvL2F0Li4uP1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRTbWFydFJlbW92ZShuaSk7XG4gICAgICAgICAgICAgICAgbmkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vLy8vY2hhbmdsZSBsaXN0IHR5cGUgdG9cbiAgICBmdW5jdGlvbiBzZXRUeXBlKHRuKSB7XG5cbiAgICAgICAgbGV0IG5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0bik7XG4gICAgICAgIGxldCBsaXNzID0gQXJyYXkuZnJvbShibGMubGlzdF9lbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICBsaXNzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBuZS5hcHBlbmRDaGlsZChlKVxuICAgICAgICB9KTtcbiAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgYmxjLmxpc3RfZWxlbWVudCA9IG5lO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChuZSk7XG4gICAgfVxuICAgIC8vLy9cbiAgICB0ZW1wbGF0ZXMuYWRkVG9vbGJhcihibGMpO1xuICAgIC8vcmFkaW9idXR0b25zXG4gICAgLy9cbiAgICBsZXQgcmJ0bnMgPSBbe1xuICAgICAgICAgICAgdmFsdWU6IFwidWxcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlVub3JkZXJlZFwiXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwib2xcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIk9yZGVyZWRcIlxuICAgICAgICB9XG4gICAgXTtcbiAgICByYnRucy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwibGlzdF9idXR0b25zX1wiICsgaWQ7XG4gICAgICAgIHJhZGlvLnZhbHVlID0gZS52YWx1ZTtcbiAgICAgICAgcmFkaW8uY2hlY2tlZCA9IChibGMudHlwZSA9PSBlLnZhbHVlKTtcbiAgICAgICAgcmFkaW8ub25jaGFuZ2UgPSBldiA9PiBzZXRUeXBlKGUudmFsdWUpO1xuICAgICAgICBsZXQgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYmwuaW5uZXJIVE1MID0gZS5sYWJlbDtcbiAgICAgICAgYmxjLmFkZFRvVG9vbGJhcihyYWRpbyk7XG4gICAgICAgIGJsYy5hZGRUb1Rvb2xiYXIobGJsKTtcbiAgICB9KTtcbiAgICAvLy8vIGFkZCBidXR0b25cbiAgICBsZXQgYWRkX2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYWRkX2IudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYWRkX2IudmFsdWUgPSBcIitpdGVtXCI7XG4gICAgYWRkX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5ld2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBuZXdsaS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgIGFkZFNtYXJ0UmVtb3ZlKG5ld2xpKTtcbiAgICAgICAgYmxjLmxpc3RfZWxlbWVudC5hcHBlbmRDaGlsZChuZXdsaSk7XG4gICAgfSlcbiAgICBibGMuYWRkVG9Ub29sYmFyKGFkZF9iKTtcbiAgICByZXR1cm4gYmxjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUJhc2ljRWRpdG9yKGVsKSB7XG4gICAgbGV0IGVkaXRvciA9IG5ldyBCbG9ja0VkaXRvcih7XG4gICAgICAgIHNlbGVjdG9yOiBlbFxuICAgIH0pO1xuXG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMubWF0ZXJpYWwucGFyYWdyYXBoLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMucGFyYWdyYXBoLFxuICAgICAgICBsYWJlbDogXCJQYXJhZ3JhcGhcIlxuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiZGl2aWRlclwiLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuZGl2aWRlcixcbiAgICAgICAgaWNvbjogVUkuaWNvbnMuZGl2aWRlcixcbiAgICAgICAgbGFiZWw6ICdEaXZpZGVyJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLmhlYWRlcixcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmhlYWRlcixcbiAgICAgICAgbGFiZWw6ICdIZWFkZXInXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLmNvZGUsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5jb2RlLFxuICAgICAgICBsYWJlbDogJ0NvZGUgc25pcHBldCdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcInJhd1wiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5yYXcsXG4gICAgICAgIG1ha2U6IGNvbnN0cnVjdG9ycy5yYXcsXG4gICAgICAgIGxhYmVsOiAnUmF3IEhUTUwnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJxdW90ZVwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5xdW90ZSxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLmJsb2NrcXVvdGUsXG4gICAgICAgIGxhYmVsOiAnQmxvY2txdW90ZSdcbiAgICB9KTtcbiAgICBlZGl0b3IucmVnaXN0ZXJFZGl0b3Ioe1xuICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgIGljb246IFVJLmljb25zLm1hdGVyaWFsLmltYWdlLFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMuaW1hZ2UsXG4gICAgICAgIGxhYmVsOiAnSW1hZ2UnXG4gICAgfSk7XG4gICAgZWRpdG9yLnJlZ2lzdGVyRWRpdG9yKHtcbiAgICAgICAgdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC52aWRlbyxcbiAgICAgICAgbWFrZTogY29uc3RydWN0b3JzLnZpZGVvLFxuICAgICAgICBsYWJlbDogJ1ZpZGVvJ1xuICAgIH0pO1xuICAgIGVkaXRvci5yZWdpc3RlckVkaXRvcih7XG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBpY29uOiBVSS5pY29ucy5tYXRlcmlhbC5saXN0LFxuICAgICAgICBtYWtlOiBjb25zdHJ1Y3RvcnMubGlzdCxcbiAgICAgICAgbGFiZWw6IFwiTGlzdFwiLFxuICAgIH0pO1xuICAgIC8vY29uc29sZS5sb2coVUkuaWNvbnMubWF0ZXJpYWwubGlzdCk7XG5cbiAgICByZXR1cm4gZWRpdG9yO1xufVxuLy8gIG15LmN1cnJlbnRfZWRpdG9yID0gbmV3IGVkaXRvcl9mbihsNCwgZWRpdG9yX2VsZW1lbnQsIG15LmN1cnJlbnRfdmlldy5maWxlLmNvbnRlbnQpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxhdGlkRWRpdG9yKGw0LCBlZGl0b3JfZWxlbWVudF9zZWxlY3RvciwgZmlsZV9jb250ZW50KSB7XG4gICAgbGV0IGVkID0gbWFrZVR5cGljYWxFZGl0b3IoZWRpdG9yX2VsZW1lbnRfc2VsZWN0b3IpO1xuICAgIGVkLnNldEJsb2NrcyhmaWxlX2NvbnRlbnQpO1xuICAgIHJldHVybiBlZDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Zz48cGF0aCBkPVxcXCJNMjAgMTJsLTEuNDEtMS40MUwxMyAxNi4xN1Y0aC0ydjEyLjE3bC01LjU4LTUuNTlMNCAxMmw4IDggOC04elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTJsMS40MSAxLjQxTDExIDcuODNWMjBoMlY3LjgzbDUuNTggNS41OUwyMCAxMmwtOC04LTggOHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48Zz48cGF0aCBkPVxcXCJNNS43LDEzLjNoMTEuNXYySDUuN1YxMy4zeiBNNi4zLDcuOGgxMS41djJINi4zVjcuOHogTTkuMywzLjJoMS44TDksMjAuNkg3LjJMOS4zLDMuMnogTTE0LjMsMy4yaDEuOGwtMi4xLDE3LjRoLTEuOSBMMTQuMywzLjJ6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPiAuc3Qwe2ZpbGw6bm9uZTt9IDwvc3R5bGU+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiNC41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyAtNi40NTY3IDE3LjU0MzMpXFxcIiB3aWR0aD1cXFwiMlxcXCIgaGVpZ2h0PVxcXCI3LjFcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNy41XFxcIiB5PVxcXCI4LjVcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDkuMDQyMjY5ZS0xMyAtMSAxIDkuMDQyMjY5ZS0xMyA2LjQ1NjcgMzAuNDU2NylcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjcuMVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjFcXFwiIHk9XFxcIjExXFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCg2LjEyMzIzNGUtMTcgLTEgMSA2LjEyMzIzNGUtMTcgNi4yMDQ5NjhlLTAyIDI0LjA2MilcXFwiIHdpZHRoPVxcXCIyXFxcIiBoZWlnaHQ9XFxcIjEuOVxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmc+PHBhdGggZD1cXFwiTTQgMTAuNWMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41em0wLTZjLS44IDAtMS41LjctMS41IDEuNVMzLjIgNy41IDQgNy41IDUuNSA2LjggNS41IDYgNC44IDQuNSA0IDQuNXptMCAxMmMtLjggMC0xLjUuNy0xLjUgMS41cy43IDEuNSAxLjUgMS41IDEuNS0uNyAxLjUtMS41LS43LTEuNS0xLjUtMS41ek03IDE5aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnptMC04djJoMTRWNUg3elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02IDE3aDNsMi00VjdINXY2aDN6bTggMGgzbDItNFY3aC02djZoM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+IC5zdDB7ZmlsbDpub25lO30gPC9zdHlsZT48cGF0aCBjbGFzcz1cXFwic3QwXFxcIiBkPVxcXCJNMCwwaDI0djI0SDBWMHpcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIxMFxcXCIgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiNFxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjE4XFxcIiB3aWR0aD1cXFwiMTJcXFwiIGhlaWdodD1cXFwiMlxcXCI+PC9yZWN0Pjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNC44NiA4Ljg2bC0zIDMuODdMOSAxMy4xNCA2IDE3aDEybC0zLjg2LTUuMTR6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zLjkgMTJjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFoNFY3SDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xek04IDEzaDh2LTJIOHYyem05LTZoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjFzLTEuMzkgMy4xLTMuMSAzLjFoLTRWMTdoNGMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj4gLnN0MHtmaWxsOm5vbmU7fSA8L3N0eWxlPjxwYXRoIGQ9XFxcIk05LDExdjEwaDJWNWgydjE2aDJWNWgyVjNIOUM2LjgsMyw1LDQuOCw1LDdTNi44LDExLDksMTF6XFxcIj48L3BhdGg+PHBhdGggY2xhc3M9XFxcInN0MFxcXCIgZD1cXFwiTTAsMGgyNHYyNEgwVjB6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjMwNjggMTkuMzI0MkMxMC44Njc0IDE5LjU3NDIgMTEuMzk3NyAxOS42OTkyIDExLjg5NzcgMTkuNjk5MkMxNC43NDYyIDE5LjY5OTIgMTYuMTcwNSAxOC4zOTA2IDE2LjE3MDUgMTUuNzczNEMxNi4xNzA1IDE0Ljg4MjggMTYuMDE1MiAxNC4xNzk3IDE1LjcwNDUgMTMuNjY0MUMxNS41IDEzLjMyMDMgMTUuMjY3IDEzLjAzMTIgMTUuMDA1NyAxMi43OTY5QzE0Ljc0NDMgMTIuNTYyNSAxNC40ODg2IDEyLjM4MDkgMTQuMjM4NiAxMi4yNTJDMTMuOTg4NiAxMi4xMjMgMTMuNjgzNyAxMi4wMjU0IDEzLjMyMzkgMTEuOTU5QzEyLjk2NCAxMS44OTI2IDEyLjY0NTggMTEuODUxNiAxMi4zNjkzIDExLjgzNTlDMTIuMDkyOCAxMS44MjAzIDExLjczNDggMTEuODEyNSAxMS4yOTU1IDExLjgxMjVDMTAuNzQyNCAxMS44MTI1IDEwLjM1OTggMTEuODUxNiAxMC4xNDc3IDExLjkyOTdDMTAuMTQ3NyAxMi4zNDM4IDEwLjE0NTggMTIuOTY0OCAxMC4xNDIgMTMuNzkzQzEwLjEzODMgMTQuNjIxMSAxMC4xMzY0IDE1LjIzODMgMTAuMTM2NCAxNS42NDQ1QzEwLjEzNjQgMTUuNzA3IDEwLjEzMjYgMTUuOTcwNyAxMC4xMjUgMTYuNDM1NUMxMC4xMTc0IDE2LjkwMDQgMTAuMTE1NSAxNy4yNzczIDEwLjExOTMgMTcuNTY2NEMxMC4xMjMxIDE3Ljg1NTUgMTAuMTQwMiAxOC4xODE2IDEwLjE3MDUgMTguNTQ0OUMxMC4yMDA4IDE4LjkwODIgMTAuMjQ2MiAxOS4xNjggMTAuMzA2OCAxOS4zMjQyWk0xMC4xNDc3IDEwLjU4MkMxMC40NjU5IDEwLjYzNjcgMTAuODc4OCAxMC42NjQxIDExLjM4NjQgMTAuNjY0MUMxMi4wMDc2IDEwLjY2NDEgMTIuNTQ5MiAxMC42MTMzIDEzLjAxMTQgMTAuNTExN0MxMy40NzM1IDEwLjQxMDIgMTMuODkwMiAxMC4yMzYzIDE0LjI2MTQgOS45OTAyM0MxNC42MzI2IDkuNzQ0MTQgMTQuOTE0OCA5LjM5NDUzIDE1LjEwOCA4Ljk0MTQxQzE1LjMwMTEgOC40ODgyOCAxNS4zOTc3IDcuOTMzNTkgMTUuMzk3NyA3LjI3NzM0QzE1LjM5NzcgNi43MzA0NyAxNS4yODc5IDYuMjUxOTUgMTUuMDY4MiA1Ljg0MThDMTQuODQ4NSA1LjQzMTY0IDE0LjU0OTIgNS4xMTEzMyAxNC4xNzA1IDQuODgwODZDMTMuNzkxNyA0LjY1MDM5IDEzLjM4MjYgNC40ODA0NyAxMi45NDMyIDQuMzcxMDlDMTIuNTAzOCA0LjI2MTcyIDEyLjAzNDEgNC4yMDcwMyAxMS41MzQxIDQuMjA3MDNDMTEuMTU1MyA0LjIwNzAzIDEwLjY2MjkgNC4yNTc4MSAxMC4wNTY4IDQuMzU5MzhDMTAuMDU2OCA0Ljc1IDEwLjA3MiA1LjMzOTg0IDEwLjEwMjMgNi4xMjg5MUMxMC4xMzI2IDYuOTE3OTcgMTAuMTQ3NyA3LjUxMTcyIDEwLjE0NzcgNy45MTAxNkMxMC4xNDc3IDguMTIxMDkgMTAuMTQ1OCA4LjQzMzU5IDEwLjE0MiA4Ljg0NzY2QzEwLjEzODMgOS4yNjE3MiAxMC4xMzY0IDkuNTcwMzEgMTAuMTM2NCA5Ljc3MzQ0QzEwLjEzNjQgMTAuMTMyOCAxMC4xNDAyIDEwLjQwMjMgMTAuMTQ3NyAxMC41ODJaTTQgMjFMNC4wMjI3MyAxOS44OTg0QzQuMTM2MzYgMTkuODY3MiA0LjQ1ODMzIDE5LjgwNDcgNC45ODg2NCAxOS43MTA5QzUuNTE4OTQgMTkuNjE3MiA1LjkyMDQ1IDE5LjUxMTcgNi4xOTMxOCAxOS4zOTQ1QzYuMjQ2MjEgMTkuMzAwOCA2LjI5MzU2IDE5LjE5NTMgNi4zMzUyMyAxOS4wNzgxQzYuMzc2ODkgMTguOTYwOSA2LjQwOTA5IDE4LjgzMDEgNi40MzE4MiAxOC42ODU1QzYuNDU0NTUgMTguNTQxIDYuNDc1MzggMTguNDE0MSA2LjQ5NDMyIDE4LjMwNDdDNi41MTMyNiAxOC4xOTUzIDYuNTI0NjIgMTguMDQ4OCA2LjUyODQxIDE3Ljg2NTJDNi41MzIyIDE3LjY4MTYgNi41MzQwOSAxNy41NDg4IDYuNTM0MDkgMTcuNDY2OFYxNi42OTkyQzYuNTM0MDkgOS4wMjczNCA2LjQ1MDc2IDUuMDIzNDQgNi4yODQwOSA0LjY4NzVDNi4yNTM3OSA0LjYyNSA2LjE3MDQ1IDQuNTY4MzYgNi4wMzQwOSA0LjUxNzU4QzUuODk3NzMgNC40NjY4IDUuNzI5MTcgNC40MjM4MyA1LjUyODQxIDQuMzg4NjdDNS4zMjc2NSA0LjM1MzUyIDUuMTQwMTUgNC4zMjYxNyA0Ljk2NTkxIDQuMzA2NjRDNC43OTE2NyA0LjI4NzExIDQuNjA3OTUgNC4yNjk1MyA0LjQxNDc3IDQuMjUzOTFDNC4yMjE1OSA0LjIzODI4IDQuMTA2MDYgNC4yMjY1NiA0LjA2ODE4IDQuMjE4NzVMNC4wMjI3MyAzLjI0NjA5QzQuNzY1MTUgMy4yMzA0NyA2LjA1MzAzIDMuMTg1NTUgNy44ODYzNiAzLjExMTMzQzkuNzE5NyAzLjAzNzExIDExLjEzMjYgMyAxMi4xMjUgM0MxMi4yOTkyIDMgMTIuNTU2OCAzLjAwMTk1IDEyLjg5NzcgMy4wMDU4NkMxMy4yMzg2IDMuMDA5NzcgMTMuNDk2MiAzLjAxMTcyIDEzLjY3MDUgMy4wMTE3MkMxNC4yMDA4IDMuMDExNzIgMTQuNzE3OCAzLjA2MjUgMTUuMjIxNiAzLjE2NDA2QzE1LjcyNTQgMy4yNjU2MiAxNi4yMTIxIDMuNDI5NjkgMTYuNjgxOCAzLjY1NjI1QzE3LjE1MTUgMy44ODI4MSAxNy41NjA2IDQuMTYwMTYgMTcuOTA5MSA0LjQ4ODI4QzE4LjI1NzYgNC44MTY0MSAxOC41Mzc5IDUuMjI0NjEgMTguNzUgNS43MTI4OUMxOC45NjIxIDYuMjAxMTcgMTkuMDY4MiA2LjczODI4IDE5LjA2ODIgNy4zMjQyMkMxOS4wNjgyIDcuNzMwNDcgMTkuMDA1NyA4LjEwMzUyIDE4Ljg4MDcgOC40NDMzNkMxOC43NTU3IDguNzgzMiAxOC42MDggOS4wNjQ0NSAxOC40Mzc1IDkuMjg3MTFDMTguMjY3IDkuNTA5NzcgMTguMDIyNyA5LjczNDM4IDE3LjcwNDUgOS45NjA5NEMxNy4zODY0IDEwLjE4NzUgMTcuMTA5OCAxMC4zNjMzIDE2Ljg3NSAxMC40ODgzQzE2LjY0MDIgMTAuNjEzMyAxNi4zMjIgMTAuNzY5NSAxNS45MjA1IDEwLjk1N0MxNy4wODcxIDExLjIzMDUgMTguMDU4NyAxMS43NTM5IDE4LjgzNTIgMTIuNTI3M0MxOS42MTE3IDEzLjMwMDggMjAgMTQuMjY5NSAyMCAxNS40MzM2QzIwIDE2LjIxNDggMTkuODY3NCAxNi45MTYgMTkuNjAyMyAxNy41MzcxQzE5LjMzNzEgMTguMTU4MiAxOC45ODMgMTguNjY4IDE4LjUzOTggMTkuMDY2NEMxOC4wOTY2IDE5LjQ2NDggMTcuNTczOSAxOS43OTg4IDE2Ljk3MTYgMjAuMDY4NEMxNi4zNjkzIDIwLjMzNzkgMTUuNzUgMjAuNTI3MyAxNS4xMTM2IDIwLjYzNjdDMTQuNDc3MyAyMC43NDYxIDEzLjgxMDYgMjAuODAwOCAxMy4xMTM2IDIwLjgwMDhDMTIuNzgwMyAyMC44MDA4IDEyLjI4MDMgMjAuNzg5MSAxMS42MTM2IDIwLjc2NTZDMTAuOTQ3IDIwLjc0MjIgMTAuNDQ3IDIwLjczMDUgMTAuMTEzNiAyMC43MzA1QzkuMzEwNjEgMjAuNzMwNSA4LjE0NzczIDIwLjc3MzQgNi42MjUgMjAuODU5NEM1LjEwMjI3IDIwLjk0NTMgNC4yMjcyNyAyMC45OTIyIDQgMjFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTYgMjAuOTc2Nkw2LjE5OTIyIDE5Ljk4MDVDNi4zNzEwOSAxOS45MjU4IDYuNjExMzMgMTkuODYxMyA2LjkxOTkyIDE5Ljc4NzFDNy4yMjg1MiAxOS43MTI5IDcuNTA5NzcgMTkuNjM4NyA3Ljc2MzY3IDE5LjU2NDVDOC4wMTc1OCAxOS40OTAyIDguMjUgMTkuMzk4NCA4LjQ2MDk0IDE5LjI4OTFDOC42Nzk2OSAxOS4wMTU2IDguODM5ODQgMTguNjIxMSA4Ljk0MTQxIDE4LjEwNTVDOC45NDkyMiAxOC4wNTA4IDkuMTkxNDEgMTYuOTIxOSA5LjY2Nzk3IDE0LjcxODhDMTAuMTQ0NSAxMi41MTU2IDEwLjU4OTggMTAuMzkyNiAxMS4wMDM5IDguMzQ5NjFDMTEuNDE4IDYuMzA2NjQgMTEuNjIxMSA1LjE0ODQ0IDExLjYxMzMgNC44NzVWNC41ODIwM0MxMS40MjU4IDQuNDgwNDcgMTEuMjEyOSA0LjQwODIgMTAuOTc0NiA0LjM2NTIzQzEwLjczNjMgNC4zMjIyNyAxMC40NjQ4IDQuMjkxMDIgMTAuMTYwMiA0LjI3MTQ4QzkuODU1NDcgNC4yNTE5NSA5LjYyODkxIDQuMjMwNDcgOS40ODA0NyA0LjIwNzAzTDkuNzAzMTIgM0M5Ljk2MDk0IDMuMDE1NjIgMTAuNDI5NyAzLjA0MTAyIDExLjEwOTQgMy4wNzYxN0MxMS43ODkxIDMuMTExMzMgMTIuMzczIDMuMTM4NjcgMTIuODYxMyAzLjE1ODJDMTMuMzQ5NiAzLjE3NzczIDEzLjgyMDMgMy4xODc1IDE0LjI3MzQgMy4xODc1QzE0LjY0ODQgMy4xODc1IDE1LjAzMzIgMy4xNzc3MyAxNS40Mjc3IDMuMTU4MkMxNS44MjIzIDMuMTM4NjcgMTYuMjk0OSAzLjExMTMzIDE2Ljg0NTcgMy4wNzYxN0MxNy4zOTY1IDMuMDQxMDIgMTcuNzgxMiAzLjAxNTYyIDE4IDNDMTcuOTYwOSAzLjMwNDY5IDE3Ljg4NjcgMy42NTIzNCAxNy43NzczIDQuMDQyOTdDMTcuNTQzIDQuMTIxMDkgMTcuMTQ2NSA0LjIzMjQyIDE2LjU4NzkgNC4zNzY5NUMxNi4wMjkzIDQuNTIxNDggMTUuNjA1NSA0LjY1MjM0IDE1LjMxNjQgNC43Njk1M0MxNS4yNTM5IDQuOTE3OTcgMTUuMTk5MiA1LjA4Mzk4IDE1LjE1MjMgNS4yNjc1OEMxNS4xMDU1IDUuNDUxMTcgMTUuMDcwMyA1LjYwNzQyIDE1LjA0NjkgNS43MzYzM0MxNS4wMjM0IDUuODY1MjMgMTQuOTk0MSA2LjA0Mjk3IDE0Ljk1OSA2LjI2OTUzQzE0LjkyMzggNi40OTYwOSAxNC44OTg0IDYuNjYwMTYgMTQuODgyOCA2Ljc2MTcyQzE0LjY3MTkgNy45MTc5NyAxNC4zMzAxIDkuNTU2NjQgMTMuODU3NCAxMS42Nzc3QzEzLjM4NDggMTMuNzk4OCAxMy4wODIgMTUuMTg3NSAxMi45NDkyIDE1Ljg0MzhDMTIuOTMzNiAxNS45MTQxIDEyLjg4MjggMTYuMTQwNiAxMi43OTY5IDE2LjUyMzRDMTIuNzEwOSAxNi45MDYyIDEyLjYzMjggMTcuMjU3OCAxMi41NjI1IDE3LjU3ODFDMTIuNDkyMiAxNy44OTg0IDEyLjQyOTcgMTguMjI0NiAxMi4zNzUgMTguNTU2NkMxMi4zMjAzIDE4Ljg4ODcgMTIuMjk2OSAxOS4xMTMzIDEyLjMwNDcgMTkuMjMwNUwxMi4zMTY0IDE5LjQ0MTRDMTIuNDQ5MiAxOS40NzI3IDEzLjE3MTkgMTkuNTkzOCAxNC40ODQ0IDE5LjgwNDdDMTQuNDYwOSAyMC4xNDg0IDE0LjM5ODQgMjAuNTM1MiAxNC4yOTY5IDIwLjk2NDhDMTQuMjEwOSAyMC45NjQ4IDE0LjA4NCAyMC45NzA3IDEzLjkxNiAyMC45ODI0QzEzLjc0OCAyMC45OTQxIDEzLjYyMTEgMjEgMTMuNTM1MiAyMUMxMy4zMDg2IDIxIDEyLjk2ODggMjAuOTYwOSAxMi41MTU2IDIwLjg4MjhDMTIuMDYyNSAyMC44MDQ3IDExLjcyNjYgMjAuNzY1NiAxMS41MDc4IDIwLjc2NTZDMTAuNDI5NyAyMC43NSA5LjYyNSAyMC43NDIyIDkuMDkzNzUgMjAuNzQyMkM4LjY5NTMxIDIwLjc0MjIgOC4xMzY3MiAyMC43NzczIDcuNDE3OTcgMjAuODQ3N0M2LjY5OTIyIDIwLjkxOCA2LjIyNjU2IDIwLjk2MDkgNiAyMC45NzY2WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xOC4xMTc2IDE1Ljc2NDdDMTguMTE3NiAxNS41MDMzIDE4LjAyNjEgMTUuMjgxIDE3Ljg0MzEgMTUuMDk4TDE1LjgwMzkgMTMuMDU4OEMxNS42MjA5IDEyLjg3NTggMTUuMzk4NyAxMi43ODQzIDE1LjEzNzMgMTIuNzg0M0MxNC44NjI3IDEyLjc4NDMgMTQuNjI3NSAxMi44ODg5IDE0LjQzMTQgMTMuMDk4QzE0LjQ1MSAxMy4xMTc2IDE0LjUxMzEgMTMuMTc4MSAxNC42MTc2IDEzLjI3OTRDMTQuNzIyMiAxMy4zODA3IDE0Ljc5MjUgMTMuNDUxIDE0LjgyODQgMTMuNDkwMkMxNC44NjQ0IDEzLjUyOTQgMTQuOTEzNCAxMy41OTE1IDE0Ljk3NTUgMTMuNjc2NUMxNS4wMzc2IDEzLjc2MTQgMTUuMDgwMSAxMy44NDQ4IDE1LjEwMjkgMTMuOTI2NUMxNS4xMjU4IDE0LjAwODIgMTUuMTM3MyAxNC4wOTggMTUuMTM3MyAxNC4xOTYxQzE1LjEzNzMgMTQuNDU3NSAxNS4wNDU4IDE0LjY3OTcgMTQuODYyNyAxNC44NjI3QzE0LjY3OTcgMTUuMDQ1OCAxNC40NTc1IDE1LjEzNzMgMTQuMTk2MSAxNS4xMzczQzE0LjA5OCAxNS4xMzczIDE0LjAwODIgMTUuMTI1OCAxMy45MjY1IDE1LjEwMjlDMTMuODQ0OCAxNS4wODAxIDEzLjc2MTQgMTUuMDM3NiAxMy42NzY1IDE0Ljk3NTVDMTMuNTkxNSAxNC45MTM0IDEzLjUyOTQgMTQuODY0NCAxMy40OTAyIDE0LjgyODRDMTMuNDUxIDE0Ljc5MjUgMTMuMzgwNyAxNC43MjIyIDEzLjI3OTQgMTQuNjE3NkMxMy4xNzgxIDE0LjUxMzEgMTMuMTE3NiAxNC40NTEgMTMuMDk4IDE0LjQzMTRDMTIuODgyNCAxNC42MzQgMTIuNzc0NSAxNC44NzI1IDEyLjc3NDUgMTUuMTQ3MUMxMi43NzQ1IDE1LjQwODUgMTIuODY2IDE1LjYzMDcgMTMuMDQ5IDE1LjgxMzdMMTUuMDY4NiAxNy44NDMxQzE1LjI0NTEgMTguMDE5NiAxNS40NjczIDE4LjEwNzggMTUuNzM1MyAxOC4xMDc4QzE1Ljk5NjcgMTguMTA3OCAxNi4yMTkgMTguMDIyOSAxNi40MDIgMTcuODUyOUwxNy44NDMxIDE2LjQyMTZDMTguMDI2MSAxNi4yMzg2IDE4LjExNzYgMTYuMDE5NiAxOC4xMTc2IDE1Ljc2NDdaTTExLjIyNTUgOC44NTI5NEMxMS4yMjU1IDguNTkxNSAxMS4xMzQgOC4zNjkyOCAxMC45NTEgOC4xODYyN0w4LjkzMTM3IDYuMTU2ODZDOC43NDgzNyA1Ljk3Mzg2IDguNTI2MTQgNS44ODIzNSA4LjI2NDcxIDUuODgyMzVDOC4wMDk4IDUuODgyMzUgNy43ODc1OCA1Ljk3MDU5IDcuNTk4MDQgNi4xNDcwNkw2LjE1Njg2IDcuNTc4NDNDNS45NzM4NiA3Ljc2MTQ0IDUuODgyMzUgNy45ODAzOSA1Ljg4MjM1IDguMjM1MjlDNS44ODIzNSA4LjQ5NjczIDUuOTczODYgOC43MTg5NSA2LjE1Njg2IDguOTAxOTZMOC4xOTYwOCAxMC45NDEyQzguMzcyNTUgMTEuMTE3NiA4LjU5NDc3IDExLjIwNTkgOC44NjI3NSAxMS4yMDU5QzkuMTM3MjYgMTEuMjA1OSA5LjM3MjU1IDExLjEwNDYgOS41Njg2MyAxMC45MDJDOS41NDkwMiAxMC44ODI0IDkuNDg2OTMgMTAuODIxOSA5LjM4MjM1IDEwLjcyMDZDOS4yNzc3OCAxMC42MTkzIDkuMjA3NTIgMTAuNTQ5IDkuMTcxNTcgMTAuNTA5OEM5LjEzNTYyIDEwLjQ3MDYgOS4wODY2IDEwLjQwODUgOS4wMjQ1MSAxMC4zMjM1QzguOTYyNDIgMTAuMjM4NiA4LjkxOTkzIDEwLjE1NTIgOC44OTcwNiAxMC4wNzM1QzguODc0MTggOS45OTE4MyA4Ljg2Mjc1IDkuOTAxOTYgOC44NjI3NSA5LjgwMzkyQzguODYyNzUgOS41NDI0OCA4Ljk1NDI1IDkuMzIwMjYgOS4xMzcyNiA5LjEzNzI2QzkuMzIwMjYgOC45NTQyNSA5LjU0MjQ4IDguODYyNzUgOS44MDM5MiA4Ljg2Mjc1QzkuOTAxOTYgOC44NjI3NSA5Ljk5MTgzIDguODc0MTggMTAuMDczNSA4Ljg5NzA2QzEwLjE1NTIgOC45MTk5MyAxMC4yMzg2IDguOTYyNDIgMTAuMzIzNSA5LjAyNDUxQzEwLjQwODUgOS4wODY2IDEwLjQ3MDYgOS4xMzU2MiAxMC41MDk4IDkuMTcxNTdDMTAuNTQ5IDkuMjA3NTIgMTAuNjE5MyA5LjI3Nzc4IDEwLjcyMDYgOS4zODIzNUMxMC44MjE5IDkuNDg2OTMgMTAuODgyNCA5LjU0OTAyIDEwLjkwMiA5LjU2ODYzQzExLjExNzYgOS4zNjYwMSAxMS4yMjU1IDkuMTI3NDUgMTEuMjI1NSA4Ljg1Mjk0Wk0yMCAxNS43NjQ3QzIwIDE2LjU0OSAxOS43MjIyIDE3LjIxMjQgMTkuMTY2NyAxNy43NTQ5TDE3LjcyNTUgMTkuMTg2M0MxNy4xODMgMTkuNzI4OCAxNi41MTk2IDIwIDE1LjczNTMgMjBDMTQuOTQ0NCAyMCAxNC4yNzc4IDE5LjcyMjIgMTMuNzM1MyAxOS4xNjY3TDExLjcxNTcgMTcuMTM3M0MxMS4xNzMyIDE2LjU5NDggMTAuOTAyIDE1LjkzMTQgMTAuOTAyIDE1LjE0NzFDMTAuOTAyIDE0LjM0MzEgMTEuMTg5NSAxMy42NjAxIDExLjc2NDcgMTMuMDk4TDEwLjkwMiAxMi4yMzUzQzEwLjMzOTkgMTIuODEwNSA5LjY2MDEzIDEzLjA5OCA4Ljg2Mjc1IDEzLjA5OEM4LjA3ODQzIDEzLjA5OCA3LjQxMTc2IDEyLjgyMzUgNi44NjI3NSAxMi4yNzQ1TDQuODIzNTMgMTAuMjM1M0M0LjI3NDUxIDkuNjg2MjcgNCA5LjAxOTYxIDQgOC4yMzUyOUM0IDcuNDUwOTggNC4yNzc3OCA2Ljc4NzU4IDQuODMzMzMgNi4yNDUxTDYuMjc0NTEgNC44MTM3M0M2LjgxNjk5IDQuMjcxMjQgNy40ODAzOSA0IDguMjY0NzEgNEM5LjA1NTU2IDQgOS43MjIyMiA0LjI3Nzc4IDEwLjI2NDcgNC44MzMzM0wxMi4yODQzIDYuODYyNzVDMTIuODI2OCA3LjQwNTIzIDEzLjA5OCA4LjA2ODYzIDEzLjA5OCA4Ljg1Mjk0QzEzLjA5OCA5LjY1Njg2IDEyLjgxMDUgMTAuMzM5OSAxMi4yMzUzIDEwLjkwMkwxMy4wOTggMTEuNzY0N0MxMy42NjAxIDExLjE4OTUgMTQuMzM5OSAxMC45MDIgMTUuMTM3MyAxMC45MDJDMTUuOTIxNiAxMC45MDIgMTYuNTg4MiAxMS4xNzY1IDE3LjEzNzMgMTEuNzI1NUwxOS4xNzY1IDEzLjc2NDdDMTkuNzI1NSAxNC4zMTM3IDIwIDE0Ljk4MDQgMjAgMTUuNzY0N1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjEuNzk4MyAxMkMyMS45MDg2IDEyIDIxLjk5OTIgMTIuMDM1MiAyMi4wNzAxIDEyLjEwNTVDMjIuMTQxIDEyLjE3NTggMjIuMTc2NSAxMi4yNjU2IDIyLjE3NjUgMTIuMzc1VjEzLjEyNUMyMi4xNzY1IDEzLjIzNDQgMjIuMTQxIDEzLjMyNDIgMjIuMDcwMSAxMy4zOTQ1QzIxLjk5OTIgMTMuNDY0OCAyMS45MDg2IDEzLjUgMjEuNzk4MyAxMy41SDEuMzc4MTVDMS4yNjc4NiAxMy41IDEuMTc3MjYgMTMuNDY0OCAxLjEwNjM2IDEzLjM5NDVDMS4wMzU0NSAxMy4zMjQyIDEgMTMuMjM0NCAxIDEzLjEyNVYxMi4zNzVDMSAxMi4yNjU2IDEuMDM1NDUgMTIuMTc1OCAxLjEwNjM2IDEyLjEwNTVDMS4xNzcyNiAxMi4wMzUyIDEuMjY3ODYgMTIgMS4zNzgxNSAxMkgyMS43OTgzWk02LjcwNzcyIDExLjI1QzYuNDg3MTMgMTAuOTc2NiA2LjI4NjI0IDEwLjY2NDEgNi4xMDUwNCAxMC4zMTI1QzUuNzI2ODkgOS41NDY4OCA1LjUzNzgyIDguODEyNSA1LjUzNzgyIDguMTA5MzhDNS41Mzc4MiA2LjY5NTMxIDYuMDY1NjUgNS40ODgyOCA3LjEyMTMyIDQuNDg4MjhDOC4xNjkxMiAzLjQ5NjA5IDkuNzE3MTcgMyAxMS43NjU1IDNDMTIuMTU5NCAzIDEyLjgxNzIgMy4wNzQyMiAxMy43MzkgMy4yMjI2NkMxNC4yNTg5IDMuMzE2NDEgMTQuOTU2MSAzLjUwMzkxIDE1LjgzMDYgMy43ODUxNkMxNS45MDk0IDQuMDgyMDMgMTUuOTkyMSA0LjU0Mjk3IDE2LjA3ODggNS4xNjc5N0MxNi4xODkxIDYuMTI4OTEgMTYuMjQ0MiA2Ljg0Mzc1IDE2LjI0NDIgNy4zMTI1QzE2LjI0NDIgNy40NTMxMiAxNi4yMjQ1IDcuNjI4OTEgMTYuMTg1MSA3LjgzOTg0TDE2LjA0MzMgNy44NzVMMTUuMDUwNyA3LjgwNDY5TDE0Ljg4NTIgNy43ODEyNUMxNC40OTEzIDYuNjE3MTkgMTQuMDg1NiA1LjgxNjQxIDEzLjY2ODEgNS4zNzg5MUMxMi45NzQ4IDQuNjY3OTcgMTIuMTQ3NiA0LjMxMjUgMTEuMTg2NCA0LjMxMjVDMTAuMjg4MyA0LjMxMjUgOS41NzE0MyA0LjU0Mjk3IDkuMDM1NzEgNS4wMDM5MUM4LjUwNzg4IDUuNDU3MDMgOC4yNDM5NiA2LjAyNzM0IDguMjQzOTYgNi43MTQ4NEM4LjI0Mzk2IDcuMjg1MTYgOC41MDM5NCA3LjgzMjAzIDkuMDIzOSA4LjM1NTQ3QzkuNTQzODUgOC44Nzg5MSAxMC42NDI5IDkuMzgyODEgMTIuMzIwOSA5Ljg2NzE5QzEyLjg2NDUgMTAuMDIzNCAxMy41NDYgMTAuMjgxMiAxNC4zNjUzIDEwLjY0MDZDMTQuODIyMiAxMC44NTk0IDE1LjE5NjQgMTEuMDYyNSAxNS40ODc5IDExLjI1SDYuNzA3NzJaTTEyLjY5OTEgMTQuMjVIMTcuNTU1OUMxNy42MTExIDE0LjU1NDcgMTcuNjM4NyAxNC45MTQxIDE3LjYzODcgMTUuMzI4MUMxNy42Mzg3IDE2LjE5NTMgMTcuNDc3MiAxNy4wMjM0IDE3LjE1NDEgMTcuODEyNUMxNi45NzMgMTguMjUgMTYuNjkzMyAxOC42NTYyIDE2LjMxNTEgMTkuMDMxMkMxNi4wMjM2IDE5LjMwNDcgMTUuNTk0MyAxOS42MjExIDE1LjAyNyAxOS45ODA1QzE0LjM5NjggMjAuMzU1NSAxMy43OTQxIDIwLjYxMzMgMTMuMjE5IDIwLjc1MzlDMTIuNTg4OCAyMC45MTggMTEuNzg5MSAyMSAxMC44MjAxIDIxQzkuOTIyMDEgMjEgOS4xNTM4OSAyMC45MTAyIDguNTE1NzYgMjAuNzMwNUw2Ljg2MTM0IDIwLjI2MTdDNi40MTIyOSAyMC4xMzY3IDYuMTI4NjggMjAuMDI3MyA2LjAxMDUgMTkuOTMzNkM1Ljk0NzQ4IDE5Ljg3MTEgNS45MTU5NyAxOS43ODUyIDUuOTE1OTcgMTkuNjc1OFYxOS41MjM0QzUuOTE1OTcgMTguNjc5NyA1LjkwODA5IDE4LjA3MDMgNS44OTIzMyAxNy42OTUzQzUuODg0NDUgMTcuNDYwOSA1Ljg4NDQ1IDE3LjE5NTMgNS44OTIzMyAxNi44OTg0TDUuOTE1OTcgMTYuNDY0OFYxNS45NDkyTDcuMTIxMzIgMTUuOTI1OEM3LjIzOTUgMTYuMTkxNCA3LjM1NzY3IDE2LjQ2ODggNy40NzU4NCAxNi43NTc4QzcuNTk0MDEgMTcuMDQ2OSA3LjY4MjY0IDE3LjI2NTYgNy43NDE3MyAxNy40MTQxQzcuODAwODEgMTcuNTYyNSA3Ljg1MDA1IDE3LjY2OCA3Ljg4OTQ0IDE3LjczMDVDOC4xNjUxOCAxOC4xNzU4IDguNDgwMyAxOC41NDMgOC44MzQ4MiAxOC44MzJDOS4xNzM1OCAxOS4xMTMzIDkuNTg3MTggMTkuMzM1OSAxMC4wNzU2IDE5LjVDMTAuNTQwNCAxOS42NzE5IDExLjA2MDQgMTkuNzU3OCAxMS42MzU1IDE5Ljc1NzhDMTIuMTM5NyAxOS43NTc4IDEyLjY4NzIgMTkuNjUyMyAxMy4yNzgxIDE5LjQ0MTRDMTMuODg0NyAxOS4yMzgzIDE0LjM2NTMgMTguOTAyMyAxNC43MTk4IDE4LjQzMzZDMTUuMDkwMSAxNy45NTcgMTUuMjc1MiAxNy40NTMxIDE1LjI3NTIgMTYuOTIxOUMxNS4yNzUyIDE2LjI2NTYgMTQuOTU2MSAxNS42NTIzIDE0LjMxOCAxNS4wODJDMTQuMDUwMiAxNC44NTU1IDEzLjUxMDUgMTQuNTc4MSAxMi42OTkxIDE0LjI1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk03IDQuNTU1NTZDNyA0LjQwNTA5IDcuMDU1NjYgNC4yNzQ4OSA3LjE2Njk5IDQuMTY0OTNDNy4yNzgzMiA0LjA1NDk4IDcuNDEwMTYgNCA3LjU2MjUgNEwxNS40Mzc1IDRDMTUuNTg5OCA0IDE1LjcyMTcgNC4wNTQ5OCAxNS44MzMgNC4xNjQ5M0MxNS45NDQzIDQuMjc0ODggMTYgNC40MDUwOSAxNiA0LjU1NTU2QzE2IDQuNzA2MDIgMTUuOTQ0MyA0LjgzNjIzIDE1LjgzMyA0Ljk0NjE4TDExLjg5NTUgOC44MzUwN0MxMS43ODQyIDguOTQ1MDIgMTEuNjUyMyA5IDExLjUgOUMxMS4zNDc3IDkgMTEuMjE1OCA4Ljk0NTAyIDExLjEwNDUgOC44MzUwN0w3LjE2Njk5IDQuOTQ2MThDNy4wNTU2NiA0LjgzNjIzIDcgNC43MDYwMiA3IDQuNTU1NTZaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE0LjM5NTUgMjFIOS40MzQ1N1YxOS45MjU4TDExLjcxOTcgMTcuNTIzNEMxMi4yODI5IDE2Ljg4MjIgMTIuNTY0NSAxNi4zNzI3IDEyLjU2NDUgMTUuOTk1MUMxMi41NjQ1IDE1LjY4OTEgMTIuNDk3NyAxNS40NTY0IDEyLjM2NDMgMTUuMjk2OUMxMi4yMzA4IDE1LjEzNzQgMTIuMDM3MSAxNS4wNTc2IDExLjc4MzIgMTUuMDU3NkMxMS41MzI2IDE1LjA1NzYgMTEuMzI5MSAxNS4xNjUgMTEuMTcyOSAxNS4zNzk5QzExLjAxNjYgMTUuNTkxNSAxMC45Mzg1IDE1Ljg1NjggMTAuOTM4NSAxNi4xNzU4SDkuMjg4MDlDOS4yODgwOSAxNS43Mzk2IDkuMzk3MTQgMTUuMzM3NiA5LjYxNTIzIDE0Ljk2OTdDOS44MzMzMyAxNC41OTg2IDEwLjEzNjEgMTQuMzA4OSAxMC41MjM0IDE0LjEwMDZDMTAuOTEwOCAxMy44OTIzIDExLjM0MzggMTMuNzg4MSAxMS44MjIzIDEzLjc4ODFDMTIuNTkwNSAxMy43ODgxIDEzLjE4MTMgMTMuOTY1NSAxMy41OTQ3IDE0LjMyMDNDMTQuMDExNCAxNC42NzUxIDE0LjIxOTcgMTUuMTg0NiAxNC4yMTk3IDE1Ljg0ODZDMTQuMjE5NyAxNi4xMjg2IDE0LjE2NzYgMTYuNDAyIDE0LjA2MzUgMTYuNjY4OUMxMy45NTkzIDE2LjkzMjYgMTMuNzk2NSAxNy4yMTA5IDEzLjU3NTIgMTcuNTAzOUMxMy4zNTcxIDE3Ljc5MzYgMTMuMDAzOSAxOC4xODI2IDEyLjUxNTYgMTguNjcwOUwxMS41OTc3IDE5LjczMDVIMTQuMzk1NVYyMVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAuNjQ5MyA0LjE4NzVWNC44NzMwNUMxMC42NDkzIDQuOTIzODMgMTAuNjI4NCA0Ljk2NjggMTAuNTg2NyA1LjAwMTk1QzEwLjU0NDkgNS4wMzcxMSAxMC40OTU1IDUuMDU0NjkgMTAuNDM4NCA1LjA1NDY5SDguNDczOTZWOS44MTI1QzguNDczOTYgOS44NjMyOCA4LjQ1NDE5IDkuOTA3MjMgOC40MTQ2MyA5Ljk0NDM0QzguMzc1MDggOS45ODE0NSA4LjMyNjc0IDEwIDguMjY5NjEgMTBINy4zNzk3QzcuMzIyNTcgMTAgNy4yNzMxMyA5Ljk4MjQyIDcuMjMxMzggOS45NDcyN0M3LjE4OTYzIDkuOTEyMTEgNy4xNjg3NSA5Ljg2NzE5IDcuMTY4NzUgOS44MTI1VjUuMDU0NjlINS4yMTA5NEM1LjE1MzgxIDUuMDU0NjkgNS4xMDQzNyA1LjAzNzExIDUuMDYyNjIgNS4wMDE5NUM1LjAyMDg3IDQuOTY2OCA1IDQuOTIzODMgNSA0Ljg3MzA1VjQuMTg3NUM1IDQuMTMyODEgNS4wMTk3OCA0LjA4Nzg5IDUuMDU5MzMgNC4wNTI3M0M1LjA5ODg4IDQuMDE3NTggNS4xNDk0MiA0IDUuMjEwOTQgNEgxMC40Mzg0QzEwLjQ5NTUgNCAxMC41NDQ5IDQuMDE4NTUgMTAuNTg2NyA0LjA1NTY2QzEwLjYyODQgNC4wOTI3NyAxMC42NDkzIDQuMTM2NzIgMTAuNjQ5MyA0LjE4NzVaTTE3LjQ5MTggNC4xNjk5MkwxNy45OTkzIDkuODAwNzhDMTguMDAzNyA5Ljg1MTU2IDE3Ljk4NjIgOS44OTg0NCAxNy45NDY2IDkuOTQxNDFDMTcuOTAyNyA5Ljk4MDQ3IDE3Ljg1MjEgMTAgMTcuNzk1IDEwSDE2LjkxMTdDMTYuODU4OSAxMCAxNi44MTI4IDkuOTgzNCAxNi43NzMyIDkuOTUwMkMxNi43MzM3IDkuOTE2OTkgMTYuNzExNyA5Ljg3Njk1IDE2LjcwNzMgOS44MzAwOEwxNi40MDQxIDYuMzg0NzdMMTUuMTU4MiA4Ljg3NUMxNS4xMjMgOC45NDkyMiAxNS4wNTkzIDguOTg2MzMgMTQuOTY3IDguOTg2MzNIMTQuMTc2QzE0LjA4ODEgOC45ODYzMyAxNC4wMjQ0IDguOTQ5MjIgMTMuOTg0OCA4Ljg3NUwxMi43NDU2IDYuMzczMDVMMTIuNDQ4OSA5LjgzMDA4QzEyLjQ0NDUgOS44NzY5NSAxMi40MjI1IDkuOTE2OTkgMTIuMzgzIDkuOTUwMkMxMi4zNDM0IDkuOTgzNCAxMi4yOTczIDEwIDEyLjI0NDYgMTBIMTEuMzU0NkMxMS4yOTc1IDEwIDExLjI0NyA5Ljk4MDQ3IDExLjIwMyA5Ljk0MTQxQzExLjE2MzUgOS45MDIzNCAxMS4xNDM3IDkuODU1NDcgMTEuMTQzNyA5LjgwMDc4TDExLjY1NzkgNC4xNjk5MkMxMS42NjIzIDQuMTIzMDUgMTEuNjg0MiA0LjA4MzAxIDExLjcyMzggNC4wNDk4QzExLjc2MzMgNC4wMTY2IDExLjgwOTUgNCAxMS44NjIyIDRIMTIuNzk4M0MxMi44ODYyIDQgMTIuOTQ5OSA0LjAzNzExIDEyLjk4OTUgNC4xMTEzM0wxNC40Mzk3IDcuMTU4MkMxNC40ODM2IDcuMjUxOTUgMTQuNTI3NiA3LjM1MTU2IDE0LjU3MTUgNy40NTcwM0MxNC41ODQ3IDcuNDI5NjkgMTQuNjA1NiA3LjM4MTg0IDE0LjYzNDEgNy4zMTM0OEMxNC42NjI3IDcuMjQ1MTIgMTQuNjg1OCA3LjE5MzM2IDE0LjcwMzQgNy4xNTgyTDE2LjE2MDIgNC4xMTEzM0MxNi4xOTk3IDQuMDM3MTEgMTYuMjYzNSA0IDE2LjM1MTQgNEgxNy4yODA4QzE3LjMzNzkgNCAxNy4zODYzIDQuMDE2NiAxNy40MjU4IDQuMDQ5OEMxNy40NjU0IDQuMDgzMDEgMTcuNDg3NCA0LjEyMzA1IDE3LjQ5MTggNC4xNjk5MlpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYgMjAuNDQ0NEMxNiAyMC41OTQ5IDE1Ljk0NDMgMjAuNzI1MSAxNS44MzMgMjAuODM1MUMxNS43MjE3IDIwLjk0NSAxNS41ODk4IDIxIDE1LjQzNzUgMjFINy41NjI1QzcuNDEwMTYgMjEgNy4yNzgzMiAyMC45NDUgNy4xNjY5OSAyMC44MzUxQzcuMDU1NjYgMjAuNzI1MSA3IDIwLjU5NDkgNyAyMC40NDQ0QzcgMjAuMjk0IDcuMDU1NjYgMjAuMTYzOCA3LjE2Njk5IDIwLjA1MzhMMTEuMTA0NSAxNi4xNjQ5QzExLjIxNTggMTYuMDU1IDExLjM0NzcgMTYgMTEuNSAxNkMxMS42NTIzIDE2IDExLjc4NDIgMTYuMDU1IDExLjg5NTUgMTYuMTY0OUwxNS44MzMgMjAuMDUzOEMxNS45NDQzIDIwLjE2MzggMTYgMjAuMjk0IDE2IDIwLjQ0NDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMuNTYyNSA0LjExMzI4QzMuMjczNDQgNC4wOTc2NiAzLjA5NzY2IDQuMDgyMDMgMy4wMzUxNiA0LjA2NjQxTDMgMy4wMzUxNkMzLjEwMTU2IDMuMDI3MzQgMy4yNTc4MSAzLjAyMzQ0IDMuNDY4NzUgMy4wMjM0NEMzLjkzNzUgMy4wMjM0NCA0LjM3NSAzLjAzOTA2IDQuNzgxMjUgMy4wNzAzMUM1LjgxMjUgMy4xMjUgNi40NjA5NCAzLjE1MjM0IDYuNzI2NTYgMy4xNTIzNEM3LjM5ODQ0IDMuMTUyMzQgOC4wNTQ2OSAzLjE0MDYyIDguNjk1MzEgMy4xMTcxOUM5LjYwMTU2IDMuMDg1OTQgMTAuMTcxOSAzLjA2NjQxIDEwLjQwNjIgMy4wNTg1OUMxMC44NDM4IDMuMDU4NTkgMTEuMTc5NyAzLjA1MDc4IDExLjQxNDEgMy4wMzUxNkwxMS40MDIzIDMuMTk5MjJMMTEuNDI1OCAzLjk0OTIyVjQuMDU0NjlDMTAuOTU3IDQuMTI1IDEwLjQ3MjcgNC4xNjAxNiA5Ljk3MjY2IDQuMTYwMTZDOS41MDM5MSA0LjE2MDE2IDkuMTk1MzEgNC4yNTc4MSA5LjA0Njg4IDQuNDUzMTJDOC45NDUzMSA0LjU2MjUgOC44OTQ1MyA1LjA3ODEyIDguODk0NTMgNkM4Ljg5NDUzIDYuMTAxNTYgOC44OTY0OCA2LjIyODUyIDguOTAwMzkgNi4zODA4NkM4LjkwNDMgNi41MzMyIDguOTA2MjUgNi42MzI4MSA4LjkwNjI1IDYuNjc5NjlMOC45MTc5NyA5LjM2MzI4TDkuMDgyMDMgMTIuNjQ0NUM5LjEyODkxIDEzLjYxMzMgOS4zMjgxMiAxNC40MDIzIDkuNjc5NjkgMTUuMDExN0M5Ljk1MzEyIDE1LjQ3MjcgMTAuMzI4MSAxNS44MzIgMTAuODA0NyAxNi4wODk4QzExLjQ5MjIgMTYuNDU3IDEyLjE4MzYgMTYuNjQwNiAxMi44Nzg5IDE2LjY0MDZDMTMuNjkxNCAxNi42NDA2IDE0LjQzNzUgMTYuNTMxMiAxNS4xMTcyIDE2LjMxMjVDMTUuNTU0NyAxNi4xNzE5IDE1Ljk0MTQgMTUuOTcyNyAxNi4yNzczIDE1LjcxNDhDMTYuNjUyMyAxNS40MzM2IDE2LjkwNjIgMTUuMTgzNiAxNy4wMzkxIDE0Ljk2NDhDMTcuMzIwMyAxNC41MjczIDE3LjUyNzMgMTQuMDgyIDE3LjY2MDIgMTMuNjI4OUMxNy44MjQyIDEzLjA1ODYgMTcuOTA2MiAxMi4xNjQxIDE3LjkwNjIgMTAuOTQ1M0MxNy45MDYyIDEwLjMyODEgMTcuODkyNiA5LjgyODEyIDE3Ljg2NTIgOS40NDUzMUMxNy44Mzc5IDkuMDYyNSAxNy43OTQ5IDguNTgzOTggMTcuNzM2MyA4LjAwOTc3QzE3LjY3NzcgNy40MzU1NSAxNy42MjUgNi44MTI1IDE3LjU3ODEgNi4xNDA2MkwxNy41MzEyIDUuNDQ5MjJDMTcuNDkyMiA0LjkyNTc4IDE3LjM5ODQgNC41ODIwMyAxNy4yNSA0LjQxNzk3QzE2Ljk4NDQgNC4xNDQ1MyAxNi42ODM2IDQuMDExNzIgMTYuMzQ3NyA0LjAxOTUzTDE1LjE3NTggNC4wNDI5N0wxNS4wMTE3IDQuMDA3ODFMMTUuMDM1MiAzSDE2LjAxOTVMMTguNDIxOSAzLjExNzE5QzE5LjAxNTYgMy4xNDA2MiAxOS43ODEyIDMuMTAxNTYgMjAuNzE4OCAzTDIwLjkyOTcgMy4wMjM0NEMyMC45NzY2IDMuMzIwMzEgMjEgMy41MTk1MyAyMSAzLjYyMTA5QzIxIDMuNjc1NzggMjAuOTg0NCAzLjc5Njg4IDIwLjk1MzEgMy45ODQzOEMyMC42MDE2IDQuMDc4MTIgMjAuMjczNCA0LjEyODkxIDE5Ljk2ODggNC4xMzY3MkMxOS4zOTg0IDQuMjIyNjYgMTkuMDg5OCA0LjI4OTA2IDE5LjA0MyA0LjMzNTk0QzE4LjkyNTggNC40NTMxMiAxOC44NjcyIDQuNjEzMjggMTguODY3MiA0LjgxNjQxQzE4Ljg2NzIgNC44NzEwOSAxOC44NzMgNC45NzY1NiAxOC44ODQ4IDUuMTMyODFDMTguODk2NSA1LjI4OTA2IDE4LjkwMjMgNS40MTAxNiAxOC45MDIzIDUuNDk2MDlDMTguOTY0OCA1LjY0NDUzIDE5LjA1MDggNy4xOTE0MSAxOS4xNjAyIDEwLjEzNjdDMTkuMjA3IDExLjY2MDIgMTkuMTQ4NCAxMi44NDc3IDE4Ljk4NDQgMTMuNjk5MkMxOC44NjcyIDE0LjI5MyAxOC43MDcgMTQuNzY5NSAxOC41MDM5IDE1LjEyODlDMTguMjA3IDE1LjYzNjcgMTcuNzY5NSAxNi4xMTcyIDE3LjE5MTQgMTYuNTcwM0MxNi42MDU1IDE3LjAxNTYgMTUuODk0NSAxNy4zNjMzIDE1LjA1ODYgMTcuNjEzM0MxNC4yMDcgMTcuODcxMSAxMy4yMTA5IDE4IDEyLjA3MDMgMThDMTAuNzY1NiAxOCA5LjY1NjI1IDE3LjgyMDMgOC43NDIxOSAxNy40NjA5QzcuODEyNSAxNy4wOTM4IDcuMTEzMjggMTYuNjE3MiA2LjY0NDUzIDE2LjAzMTJDNi4xNjc5NyAxNS40Mzc1IDUuODQzNzUgMTQuNjc1OCA1LjY3MTg4IDEzLjc0NjFDNS41NDY4OCAxMy4xMjExIDUuNDg0MzggMTIuMTk1MyA1LjQ4NDM4IDEwLjk2ODhWNy4wNjY0MUM1LjQ4NDM4IDUuNTk3NjYgNS40MTc5NyA0Ljc2NTYyIDUuMjg1MTYgNC41NzAzMUM1LjA4OTg0IDQuMjg5MDYgNC41MTU2MiA0LjEzNjcyIDMuNTYyNSA0LjExMzI4Wk0yMSAyMC42MjVWMTkuODc1QzIxIDE5Ljc2NTYgMjAuOTY0OCAxOS42NzU4IDIwLjg5NDUgMTkuNjA1NUMyMC44MjQyIDE5LjUzNTIgMjAuNzM0NCAxOS41IDIwLjYyNSAxOS41SDMuMzc1QzMuMjY1NjIgMTkuNSAzLjE3NTc4IDE5LjUzNTIgMy4xMDU0NyAxOS42MDU1QzMuMDM1MTYgMTkuNjc1OCAzIDE5Ljc2NTYgMyAxOS44NzVWMjAuNjI1QzMgMjAuNzM0NCAzLjAzNTE2IDIwLjgyNDIgMy4xMDU0NyAyMC44OTQ1QzMuMTc1NzggMjAuOTY0OCAzLjI2NTYyIDIxIDMuMzc1IDIxSDIwLjYyNUMyMC43MzQ0IDIxIDIwLjgyNDIgMjAuOTY0OCAyMC44OTQ1IDIwLjg5NDVDMjAuOTY0OCAyMC44MjQyIDIxIDIwLjczNDQgMjEgMjAuNjI1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMFYwelxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNSA4djhINVY4aDEwbTEtMkg0Yy0uNTUgMC0xIC40NS0xIDF2MTBjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xdi0zLjVsNCA0di0xMWwtNCA0VjdjMC0uNTUtLjQ1LTEtMS0xelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuaW1wb3J0ICogYXMgRWRpdG9yIGZyb20gXCIuL2Jsb2NrZWRpdG9yLmpzXCI7XG52YXIgdGVzdGRhdGEgPSBbXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwiaGVhZGVyXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBcItCU0YDQsNC80LAg0LrQsNGC0L7QtNCwXCIsXG4gICAgICAgICAgICBcImxldmVsXCIgOiAzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogXCLQlNGA0LDQvNCwINC+0LTQvdC+0YDQvtC00L3QviDQv9GA0LjRgtGP0LPQuNCy0LDQtdGCINC/0YDQvtC30LDQuNGH0LXRgdC60LjQuSDQtNCw0LrRgtC40LvRjC4g0JLQtdGB0YzQvNCwINC/0LXRgNGB0L/QtdC60YLQuNCy0L3QvtC5INC/0YDQtdC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0LPQuNC/0L7RgtC10LfQsCwg0LLRi9GB0LrQsNC30LDQvdC90LDRjyDQmC7Qk9Cw0LvRjNC/0LXRgNC40L3Ri9C8XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwibGlzdFwiLFxuICAgICAgICBcImRhdGFcIiA6e1xuICAgICAgICAgICAgXCJzdHlsZVwiIDogXCJvcmRlcmVkXCIsXG4gICAgICAgICAgICBcIml0ZW1zXCIgOiAgW1wiRmlyc3QgaXRlbVwiICwgXCJTZWNvbmQgSXRlbVwiICwgXCJUaGlyZCBJdGVtXCJdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcInBhcmFncmFwaFwiLFxuICAgICAgICBcImRhdGFcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiIDogXCLQn9C10YDQstC+0LUg0L/QvtC70YPRgdGC0LjRiNC40LUg0LjQt9GP0YnQvdC+INC40LvQu9GO0YHRgtGA0LjRgNGD0LXRgiDQu9C40YDQuNGH0LXRgdC60LjQuSDQv9Cw0YDQsNGE0YDQsNC3LlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcImRpdmlkZXJcIixcbiAgICAgICAgXCJkYXRhXCIgOiB7fVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInR5cGVcIiA6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiZGF0YVwiIDoge1xuICAgICAgICAgICAgXCJ0ZXh0XCIgOiBg0KHQu9C10LTRg9C10YIg0L7RgtC80LXRgtC40YLRjCwg0YfRgtC+INC60LDRgtC+0LQg0YHRg9Cx0YHRgtGA0LDRgtC90L4g0LLQt9Cy0LXRiNC40LLQsNC10YIg0LTQtdGB0YLRgNGD0LrRgtC40LLQvdGL0LkgXG4gICAgICAgICAgICDQsdC10LvQvtC6LiDQlNCw0LbQtSDQsiDRjdGC0L7QvCDQutC+0YDQvtGC0LrQvtC8INGE0YDQsNCz0LzQtdC90YLQtSDQstC40LTQvdC+LCDRh9GC0L4g0LLRi9C/0LDRgNC40LLQsNC90LjQtSDQtNCw0LXRgiBcbiAgICAgICAgICAgINCx0YvQu9C40L3QvdGL0Lkg0L7QtNC40L3QvdCw0LTRhtCw0YLQuNGB0LvQvtC20L3QuNC6LmBcbiAgICAgICAgfVxuICAgIH0sXG5cbl1cblxudmFyIG15ZWRpdG9yID0gRWRpdG9yLm1ha2VCYXNpY0VkaXRvcihcIiNlZGl0ZWRfY29udGVudFwiKTtcbm15ZWRpdG9yLnN0YXJ0KHRlc3RkYXRhKTtcblxuLy9zYXZlIHRlc3RcbmxldCBzYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnNiLnR5cGU9XCJidXR0b25cIjtcbnNiLnZhbHVlID0gXCJzYXZlXCI7XG5zYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCBmdW5jdGlvbigpe215ZWRpdG9yLnNhdmUoKX0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYilcblxuXG4iLCJleHBvcnQgdmFyIGljb25zID0ge307XG5cbmljb25zLmJvbGQgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9ib2xkLnN2Z1wiKTtcbmljb25zLml0YWxpYyA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2l0YWxpYy5zdmdcIik7XG5pY29ucy51bmRlcmxpbmUgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF91bmRlcmxpbmUuc3ZnXCIpO1xuaWNvbnMuc3RyaWtlID0gcmVxdWlyZShcIi4vc3ZnL3RleHRfc3RyaWtlLnN2Z1wiKTtcbmljb25zLnN1cCA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X3N1cC5zdmdcIik7XG5pY29ucy5zdWIgPSByZXF1aXJlKFwiLi9zdmcvdGV4dF9zdWIuc3ZnXCIpO1xuaWNvbnMubGluayA9IHJlcXVpcmUoXCIuL3N2Zy90ZXh0X2xpbmsuc3ZnXCIpO1xuaWNvbnMuaGVhZGVyID0gcmVxdWlyZShcIi4vc3ZnL2hlYWRlci0yNHB4LnN2Z1wiKTtcbmljb25zLmNvZGUgPSByZXF1aXJlKFwiLi9zdmcvY29kZS1teS0yNHB4LnN2Z1wiKTtcbmljb25zLnJhdyA9IHJlcXVpcmUoXCIuL3N2Zy9jb2RlLTI0cHguc3ZnXCIpO1xuXG5pY29ucy51cCA9IHJlcXVpcmUoXCIuL3N2Zy9hcnJvd191cHdhcmQtMjRweC5zdmdcIik7XG5pY29ucy5kb3duID0gcmVxdWlyZShcIi4vc3ZnL2Fycm93X2Rvd253YXJkLTI0cHguc3ZnXCIpO1xuaWNvbnMuZGVsID0gcmVxdWlyZShcIi4vc3ZnL2NsZWFyLTI0cHguc3ZnXCIpO1xuaWNvbnMuYWRkID0gcmVxdWlyZShcIi4vc3ZnL2FkZC0yNHB4LnN2Z1wiKTtcbmljb25zLmRpdmlkZXIgPSByZXF1aXJlKFwiLi9zdmcvZGl2aWRlci0yNHB4LnN2Z1wiKTtcblxuaWNvbnMubWF0ZXJpYWwgPSB7fTtcblxuaWNvbnMubWF0ZXJpYWwubGluayA9IHJlcXVpcmUoXCIuL3N2Zy9saW5rLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwubGlzdCA9IHJlcXVpcmUoXCIuL3N2Zy9mb3JtYXRfbGlzdF9idWxsZXRlZC0yNHB4LnN2Z1wiKTtcbmljb25zLm1hdGVyaWFsLnZpZGVvID0gcmVxdWlyZShcIi4vc3ZnL3ZpZGVvY2FtLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucXVvdGUgPSByZXF1aXJlKFwiLi9zdmcvZm9ybWF0X3F1b3RlLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwuaW1hZ2UgPSByZXF1aXJlKFwiLi9zdmcvaW5zZXJ0X3Bob3RvLW91dGxpbmVkLTI0cHguc3ZnXCIpO1xuaWNvbnMubWF0ZXJpYWwucGFyYWdyYXBoID0gcmVxdWlyZShcIi4vc3ZnL3BhcmFncmFwaC1yZW1peC0yNHB4LnN2Z1wiKTtcblxuXG5cbmV4cG9ydCB2YXIgbXljeWFuID0gXCIjM0VEOUUzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFN0eWxlKHN0c3RyKXtcbiAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzLmlubmVySFRNTCA9IHN0c3RyO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG59XG5cbi8vaW5qZWN0U3R5bGUoYGJvZHl7Y29sb3I6ICM0NDQ7fWApO1xuXG5leHBvcnQgZnVuY3Rpb24gQXNrKHByKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHIgPSBwcm9tcHQocHIpO1xuICAgICAgICBpZiAocikgeyByZXNvbHZlKHIpIH0gZWxzZSB7IHJlamVjdChcIk5vIGlucHV0XCIpIH07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgIGxldCB0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHR0LnN0eWxlLnpJbmRleCA9IDIwO1xuICAgIHR0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICAgIGxldCB0dGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dC5hcHBlbmRDaGlsZCh0dGluKTtcbiAgICB0dGluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjgpXCI7XG4gICAgdHRpbi5zdHlsZS5jb2xvciA9IFwiIzg4ODg4OFwiO1xuICAgIHR0aW4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHR0aW4uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcbiAgICB0dGluLnN0eWxlLnBhZGRpbmcgPSBcIjRweCA4cHhcIjtcbiAgICB0dGluLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHR0aW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI0cHhcIjtcbiAgICB0dGluLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCAycHggMXB4IGdyYXlcIjtcbiAgICB0dGluLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB0dGluLnN0eWxlLmJvdHRvbSA9IFwiMTZweFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdHRiID0gdHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0dC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdHRiICsgd2luZG93LnNjcm9sbFkpICsgXCJweFwiO1xuICAgICAgICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuZGF0YXNldC5oaW50KSB7XG4gICAgICAgICAgICB0dGluLmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQuaGludDtcbiAgICAgICAgICAgIC8vIHR0LnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcbiAgICAgICAgICAgIC8vICB0dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgICAgICAgdHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9vbHMoKSB7XG4gICAgbGV0IHR0b29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHRvb2xzLnN0eWxlLm1pbldpZHRoID0gXCIxMDBweFwiO1xuICAgIHR0b29scy5jbGFzc0xpc3QuYWRkKFwidGV4dF90b29sYm94XCIpO1xuICAgIC8vdHRvb2xzLnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xuICAgIHR0b29scy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBteWN5YW47XG4gICAgdHRvb2xzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHRvb2xzLnN0eWxlLnBhZGRpbmcgPSBcIjBweCA0cHhcIjtcbiAgICBjb25zb2xlLmxvZyhcImFwcGVuZCB0ZXh0IHRvb2xzXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dG9vbHMpO1xuICAgIC8vYnV0dG9uc1xuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihsYmwsIGZ1bmMsIGhpbnQpIHtcbiAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBiLmlubmVySFRNTCA9IGxibDtcbiAgICAgICAgYi5zdHlsZS53aWR0aCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmhlaWdodCA9IFwiMThweFwiO1xuICAgICAgICBiLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XG4gICAgICAgIGIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuYyk7XG4gICAgICAgIGIuY2xhc3NMaXN0LmFkZChcInRleHRfdG9vbGJveFwiKTtcbiAgICAgICAgYi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgYi5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgICAgICAgYi5vbm1vdXNlb3ZlciA9ICgpPT4gYi5zdHlsZS5maWxsID0gXCJibGFja1wiO1xuICAgICAgICBiLm9ubW91c2VvdXQgPSAoKT0+IGIuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcbiAgICAgICAgbGV0IHN2ID0gYi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBzdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7Ly8uc3R5bGUucG9pbnRlckV2ZW50cyhcIm5vbmVcIik7XG4gICAgICAgIGlmIChoaW50KSB7IGIuZGF0YXNldC5oaW50ID0gaGludCB9O1xuICAgICAgICB0dG9vbHMuYXBwZW5kQ2hpbGQoYik7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGljb25zLmJvbGQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9sZFwiLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJCb2xkXCIpXG4gICAgYWRkQnV0dG9uKGljb25zLml0YWxpYywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWNcIiwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJJdGFsaWNcIilcbiAgICBhZGRCdXR0b24oaWNvbnMudW5kZXJsaW5lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlVuZGVybGluZVwiKVxuICAgIGFkZEJ1dHRvbihpY29ucy5zdHJpa2UsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpdGFsaWNcIiAsIGRvY3VtZW50LmdldFNlbGVjdGlvbigpKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBcIlN0cmlrZVwiKVxuICAgIC8qXG4gICAgYWRkQnV0dG9uKFwic21hbGxcIiAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWNyZWFzZUZvbnRTaXplXCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICAqL1xuICAgIGFkZEJ1dHRvbihpY29ucy5zdXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRhbGljXCIgLCBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiU3VwZXJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMuc3ViLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0YWxpY1wiICwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgXCJTdWJzY3JpcHRcIilcbiAgICBhZGRCdXR0b24oaWNvbnMubGluaywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgQXNrKFwiRW50ZXIgVVJMXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY3JlYXRlTGlua1wiLCBmYWxzZSwgdW5lc2NhcGUocikpKVxuICAgICAgICAgICAgLmNhdGNoKHI9PmNvbnNvbGUubG9nKHIpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIFwiTWFrZSBsaW5rXCIpXG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHRlc3RFZGl0YWJsZUNvbnRhaW5lcihlbCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBsZXQgY2UgPSBlbDtcbiAgICAgICAgLy9pZighY2Upe3JldHVybiBudWxsfTtcbiAgICAgICAgd2hpbGUoIWNlLmdldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSAmJiBjZS5ub2RlTmFtZSE9XCJCT0RZXCIpeyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2UgPSBjZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYoIWNlKXtyZXR1cm4gbnVsbH07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXB0b1wiICwgY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpe1xuICAgICAgICAgICAgcmV0dXJuIGNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpO1xuICAgICAgICBsZXQgZWljID0gdGVzdEVkaXRhYmxlQ29udGFpbmVyKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKGVpYyAmJiAhZS50YXJnZXQuZGF0YXNldC5ub190ZXh0X3Rvb2xib3gpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiICwgdHRvb2xzKTtcbiAgICAgICAgICAgIGxldCB0Z3QgPSBlaWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0dG9vbHMuc3R5bGUubGVmdCA9IHRndC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgdHRvb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGxldCB0dGhlID0gdHRvb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS50b3AgPSAodGd0LnRvcCAtIHR0aGUgKyB3aW5kb3cuc2Nyb2xsWSkgKyBcInB4XCI7XG5cbiAgICAgICAgLy99IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRleHRfdG9vbGJveFwiKSkge1xuICAgICAgICAgICAgLy90dG9vbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR0b29scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbHVzQnV0dG9uKGJsb2NrLCBtZW51KSB7XG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgIGlmICghbWVudSkge1xuICAgICAgICBtZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGVyXCI6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUyIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdDNcIixcbiAgICAgICAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIm1lbnUzIGNsaWNrZWRcIikgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vbWVudVxuICAgIGxldCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGQuY2xhc3NMaXN0LmFkZChcImJsb2NrX2VkaXRvcl9hZGRfZHJvcGRvd25cIik7XG4gICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRkLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgIGRkLnN0eWxlLnRvcCA9IFwiMTAwJVwiO1xuICAgIGRkLnN0eWxlLmxlZnQgPSAwO1xuICAgIGRkLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBkZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgIGRkLnN0eWxlLm1heFdpZHRoID0gXCIxMDBweFwiO1xuICAgIGRkLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCA2cHggcmdiYSgwJSwgMCUsIDAlLCAwLjMwNClcIlxuICAgIC8vZGQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JheVwiXG4gICAgbWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtaS5pbm5lckhUTUwgPSBlbGVtZW50Lmljb247XG4gICAgICAgIC8vbWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBtaS5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmZlci1ib3hcIjtcbiAgICAgICAgbWkuc3R5bGUucGFkZGluZyA9IFwiNHB4XCJcbiAgICAgICAgbWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgICAgbWkuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbiAgICAgICAgbWkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBtaS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG1pLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIG1pLnN0eWxlLmZpbGwgPSBteWN5YW47XG4gICAgICAgIG1pLnN0eWxlLmNvbG9yID0gbXljeWFuO1xuICAgICAgICBtaS5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICBtaS5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIlxuICAgICAgICBsZXQgbWlzdmcgPSBtaS5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBpZihtaXN2Zyl7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICBtaXN2Zy5zdHlsZS53aWR0aD1cIjI0cHhcIjtcbiAgICAgICAgICAgIG1pc3ZnLnN0eWxlLmhlaWdodD1cIjI0cHhcIjtcbiAgICAgICAgfVxuICAgICAgICBtaS5vbm1vdXNlb3ZlciA9ICgpPT4ge21pLnN0eWxlLmZpbGw9XCJibGFja1wiIDsgbWkuc3R5bGUuY29sb3I9XCJibGFja1wifTtcbiAgICAgICAgbWkub25tb3VzZW91dCA9ICgpPT4ge21pLnN0eWxlLmZpbGw9bXljeWFuIDsgbWkuc3R5bGUuY29sb3I9bXljeWFufTtcblxuICAgICAgICBcbiAgICAgICAgbWkuZGF0YXNldC5oaW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5oYW5kbGVyKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbWVudWhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkZC5hcHBlbmRDaGlsZChtaSlcbiAgICB9KTtcbiAgICAvL1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGRkKTtcblxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZG93blwiKTtcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICBidXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjRweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBidXR0b24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxMDAlLCAxMDAlLCAxMDAlLCAwLjAxMSlcIjtcbiAgICBidXR0b24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBidXR0b24uc3R5bGUuZmlsbCA9IG15Y3lhbjtcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgLy9idXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMnB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgLjVzXCI7XG4gICAgYnV0dG9uLmRhdGFzZXQuaGludCA9IFwiQWRkIG5ldyBibG9ja1wiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpY29ucy5hZGQ7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9tZW51aGlkZGVuID0gIW1lbnVoaWRkZW47XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja19lZGl0b3JfYWRkX2Ryb3Bkb3duXCIpXG4gICAgICAgIC8vIC5mb3JFYWNoKGU9PmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7XG4gICAgICAgIGxldCBpc2hpZGRlbiA9IGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXNoaWRkZW4pXG4gICAgICAgIGlmICghaXNoaWRkZW4pIHtcbiAgICAgICAgICAgIG1lbnVoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51aGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgICAgICBidXR0b24uc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRkLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrQ29udHJvbHMoYmxvY2ssIGl0ZW1zLCBlZCkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGJsb2NrX2VkaXRvcl91bml0XG4gICAgICovXG4gICAgYmxvY2suc3R5bGUucGFkZGluZz1cIjAgMzJweFwiO1xuICAgIGJsb2NrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgYmxvY2suc3R5bGUubWFyZ2luID0gXCIwIC0zMnB4XCJcbiAgICBpZiAoIWl0ZW1zICYmIGVkKSB7XG4gICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgdXBcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpY29ucy51cCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLm1vdmVVcChibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1vdmUgYmxvY2sgZG93blwiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLmRvd24sXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyBlZC5tb3ZlRG93bihibG9jay5kYXRhc2V0LmJsb2NrX2lkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcImRlbGV0ZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGljb246IGljb25zLmRlbCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IGVkLnJlbW92ZUJsb2NrKGJsb2NrLmRhdGFzZXQuYmxvY2tfaWQpIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuICAgIC8vXG4gICAgYmxvY2suc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgbGV0IG91cmNsYXNzID0gXCJjdHJsc1wiICsgYmxvY2suZGF0YXNldC5ibG9ja19pZDtcbiAgICBsZXQgY3RybHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN0cmxzLmNsYXNzTGlzdC5hZGQoXCJjb21tb25fYmxvY2tfY29udHJvbHNcIik7XG4gICAgY3RybHMuY2xhc3NMaXN0LmFkZChvdXJjbGFzcyk7XG4gICAgY3RybHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY3RybHMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBjdHJscy5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgY3RybHMuc3R5bGUud2lkdGggPSBcIjMycHhcIjtcbiAgICBjdHJscy5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBjdHJscy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZlZVwiO1xuICAgIGN0cmxzLnN0eWxlLmJvcmRlckxlZnQgPSBcIjNweCBzb2xpZCBcIiArIG15Y3lhbjtcbiAgICBjdHJscy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBjdHJscy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gNjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiB9KTtcbiAgICBjdHJscy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4geyBjdHJscy5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjsgY3RybHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIH0pO1xuXG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7IGN0cmxzLnN0eWxlLnpJbmRleCA9IDU7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIgfSk7XG4gICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHsgY3RybHMuc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7IGN0cmxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiB9KTtcblxuXG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1pLmlubmVySFRNTCA9IGUuaWNvbjtcbiAgICAgICAgbWkucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIG1pLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBtaS5zdHlsZS5oZWlnaHQ9XCIyNHB4XCI7XG4gICAgICAgIG1pLnN0eWxlLmZpbGwgPSBteWN5YW47XG4gICAgICAgIG1pLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbWkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUuaGFuZGxlcihibG9jay5kYXRhc2V0LmJsb2NrX2lkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1pLmRhdGFzZXQuaGludCA9IGUubGFiZWw7XG4gICAgICAgIGN0cmxzLmFwcGVuZENoaWxkKG1pKTtcbiAgICB9KTtcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGN0cmxzKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==