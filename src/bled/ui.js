
require("./scss/forms.scss");
const smalltalk = require("../minortalk/lib/smalltalk");


export var icons = {};

icons.bold = require("./svg/text_bold.svg");
icons.italic = require("./svg/text_italic.svg");
icons.underline = require("./svg/text_underline.svg");
icons.strike = require("./svg/text_strike.svg");
icons.sup = require("./svg/text_sup.svg");
icons.sub = require("./svg/text_sub.svg");
icons.link = require("./svg/text_link.svg");

icons.header = require("./svg/header-24px.svg");
icons.code = require("./svg/code-my-24px.svg");
icons.raw = require("./svg/code-24px.svg");
icons.noformat = require("./svg/remove-format.svg");

icons.up = require("./svg/arrow_upward-24px.svg");
icons.down = require("./svg/arrow_downward-24px.svg");
icons.del = require("./svg/clear-24px.svg");
icons.add = require("./svg/add-24px.svg");
icons.divider = require("./svg/divider-24px.svg");
icons.symbols = require("./svg/symbols_24px.svg");
icons.question = require("./svg/question-24px.svg");
icons.markdown = require("./svg/markdown-24px.svg");

icons.material = {};

icons.material.bold = require("./svg/format_bold-24px.svg");
icons.material.italic = require("./svg/format_italic-24px.svg");
icons.material.underline = require("./svg/format_underlined-24px.svg");
icons.material.strike = require("./svg/format_strikethrough-24px.svg");
icons.material.link = require("./svg/link-24px.svg");
icons.material.linkoff = require("./svg/link_off-24px.svg");
icons.material.audio = require("./svg/music_note-24px.svg");
//icons.material.download = require("./svg/cloud_download-24px.svg");
//icons.material.file = require("./svg/insert_drive_file-24px.svg");
icons.material.attachment = require("./svg/attach_file-24px.svg");


icons.material.report = require("./svg/report-24px.svg");

//icons.material.quote = require("./svg/format_quote-24px.svg");
icons.material.list = require("./svg/format_list_bulleted-24px.svg");
icons.material.video = require("./svg/videocam-24px.svg");
icons.material.quote = require("./svg/format_quote-24px.svg");
icons.material.image = require("./svg/insert_photo-outlined-24px.svg");
icons.material.paragraph = require("./svg/paragraph-remix-24px.svg");
icons.material.tune = require("./svg/tune.svg");
icons.material.edit = require("./svg/pencil-outline.svg");




export var mycyan = "#3ED9E3"; //remove
export var Colours = {
    "light": "#3ED9E3",
    "dark": "#00A1AB",
    "pale": "#C4F7FA",

}

//from https://gist.github.com/dantaex/543e721be845c18d2f92652c0ebe06aa

function saveSelection() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

function restoreSelection(range) {
    if (range) {
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.selection && range.select) {
            range.select();
        }
    }
}

//smalltalk.prompt("Latid", question, "");



export function Ask(pr) {
     return  smalltalk.prompt("Block editor" , pr , "")
}

export function editorOverlay(blockeditor){
  var overlay = {};
  overlay.overlayedNode = null;

  
  function checkTarget(element , condition){
    if( element.nodeName=='BODY' || element.nodeName=='HTML'  ){
      return null
    }
    if(condition(element)){
      return element;
    }
    //See, mom, I'm doing recursion
    return checkTarget(element.parentNode , condition);
  }

  window.addEventListener("mouseup", function(){
  //if something overlayed?
  console.log("Window click")
  if(!overlay.overlayedNode){
  return;
  }else{
  blockeditor.editBlock(overlay.overlayedNode);
  }
  })

  

  
  window.addEventListener("mouseover", function(e){
    //console.log("mouseover...")
    if(e.target.id=="block-editor-overlay"){
      return;
    }
    //console.log(e.target);

    let weAt = checkTarget(e.target , function(n){
      return (n.classList.contains("block-editor-content-block") &&
      !n.classList.contains("block-editor-content-editor"))

    });
    if(!weAt){
      if(overlay.overlayedNode){
        overlay.overlayedNode.classList.remove("block-editor-overlayed-block")
        overlay.overlayedNode= null;
      }
      return;

    }
    overlay.overlayedNode = weAt;
    overlay.overlayedNode.classList.add("block-editor-overlayed-block")
    

    //console.log("RUN!");
    //it's a block
    let targetBbox = weAt.getBoundingClientRect();
    
    //console.log("Show overlay" , weAt.classList);
  })
}

export function tooltips() {
    //console.log("engaging tooltips");
    const tt_id = "block-editor-ui-tooltip";
    if(document.getElementById(tt_id)){
      return;
    }
    let tt = document.createElement("div");
    tt.id = tt_id;
    tt.style.position = "absolute";
    tt.style.display = "none";
    tt.style.zIndex = 20;
    tt.style.pointerEvents = "none";

    let ttin = document.createElement("div");

    ttin.classList.add("editortooltip")
    tt.appendChild(ttin);

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
    //console.log("position", posX, posY)
    const symbols = "???????????????????????????????????????".split("");

    //create table
    return new Promise(function (res, rej) {
        let test = document.querySelector(".block_editor_symbols_table");
        if (test) {
            test.remove();
            rej();
        }
        let symboltable = document.createElement("div");
        symboltable.classList.add("block_editor_symbols_table")
        symboltable.style.all = "initial";
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

export function textTools() {
  const ttools_id = "blockeditor-text-tools";
  if(document.getElementById(ttools_id)){
    return;
  }
console.log("Init text tools");
    let current_element = null;
    let ttools = document.createElement("div");
    ttools.style.minWidth = "100px";
    ttools.classList.add("text_toolbox");
    ttools.id = ttools_id;
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
        b.style.boxSizing = "content-box";
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
        sv.style.width="100%";
        sv.style.height = "auto";
        sv.style.display = "block";
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
        let selected = saveSelection();
        Ask("Enter URL")
            .then(r => {console.log('Result:' , r) ; restoreSelection(selected); document.execCommand("createLink", false, unescape(r))})
            .catch(r => console.log("No result: " , r));
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
        let ce = el;
        //if(!ce){return null};
        while (!(ce.isContentEditable) && ce.nodeName != "BODY") {
            ce = ce.parentNode;
            if (!ce) {
                return null
            };
        }
        if (ce.isContentEditable) {
            return ce;
        } else {
            return null;
        }
    }

    document.body.addEventListener("click", function (e) {
        let eic = testEditableContainer(e.target);
        if (eic && !e.target.dataset.no_text_toolbox && !e.target.classList.contains("blockeditor-no-text-tools")) {
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
export function addPlusButton(block, menu , blockeditor) {
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
    dd.style.maxWidth = "140px";
    dd.style.boxShadow = "2px 2px 6px rgba(0%, 0%, 0%, 0.304)"
    //dd.style.border = "1px solid gray"
    menu.forEach(element => {
        let mi = document.createElement("div");
        mi.innerHTML = element.icon;
        //mi.style.backgroundColor = "white";
        mi.style.boxSizing = "content-box";
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
          console.log("Create new" , element.type)
            
            blockeditor.editBlock(blockeditor.addNewBlock(element.type, {}, block));
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
    button.style.left = "-24px";
    button.style.bottom - "-12px";
    button.style.fontSize = "24px";
    button.style.cursor = "pointer";
    button.style.position = "absolute";
    button.style.backgroundColor = "rgba(100%, 100%, 100%, 0.011)";
    button.style.textAlign = "center";
    button.style.fill = Colours.light;
    button.style.opacity = "1";
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
            button.style.opacity = 1;
            button.style.zIndex = "initial";
        }
    })
    block.appendChild(button);
}

export function addBlockControls(block, ed) {
    /**
     * 
    */

    var items = [{
      label: "Move block up",
      icon: icons.up,
      handler: function () {
        ed.moveUp(block)
      }
    },
    {
      label: "Move block down",
      icon: icons.down,
      handler: function () {
        ed.moveDown(block)
      }
    },
    {
      label: "Delete block",
      icon: icons.del,
      color: "#EC663C",
      handler: function () {
        ed.removeBlock(block)
      }
    }
    ];
    //
    let bs = window.getComputedStyle(block).getPropertyValue("position");
    let bd = window.getComputedStyle(block).getPropertyValue("display");

    if(bs=='static'|| !bs)
    {
      block.style.position = "relative";
    }
    if(bd=='inline' || !bd){
      block.style.display = "block";
    }

    let ctrls = document.createElement("div");
    ctrls.classList.add("common_block_controls");
    ctrls.style.position = "absolute";
    ctrls.style.padding="4px 0";
    ctrls.style.borderRadius = "2px";
    ctrls.style.top = "50%";
    ctrls.style.marginTop = "-45px";
    ctrls.style.right = "-32px";
    ctrls.style.width = "24px";
    ctrls.style.boxSizing = "border-box";
    ctrls.style.backgroundColor = "transparent";
    ctrls.style.border = "0 solid " + Colours.light ;
    ctrls.style.color = "white";
    ctrls.style.textAlign = "center";
    ctrls.style.display = "block";

    items.forEach(function (e) {
        let mi = document.createElement("div");
        mi.innerHTML = e.icon;
        mi.style.boxSizing = "border-box"
        mi.querySelector("svg").style.pointerEvents = "none";
        mi.querySelector("svg").setAttribute("viewBox", "0 0 24 24")
        mi.querySelector("svg").setAttribute("width", "16")
        mi.style.cursor = "pointer";
        mi.style.height = "24px";
        mi.style.width= "24px";
        mi.style.borderRadius = "12px";
        mi.style.paddingTop = "4px";
        mi.style.marginBottom = "4px";
        mi.style.backgroundColor = e.color ? e.color : Colours.light;
        mi.style.paddingLeft="1px";
        mi.style.fill = "white";
        mi.style.overflow = "hidden";
        mi.addEventListener("click", function () {
            e.handler();
        });
        mi.dataset.hint = e.label;
        ctrls.appendChild(mi);
    });

    block.appendChild(ctrls)

}
