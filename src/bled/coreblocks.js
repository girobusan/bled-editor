import * as UI from "./ui";
import {bless , blessed} from "./ui_parts";
import {
    templates
} from "./tools";
//import { curveBundle } from "d3";
import * as uiparts from "./ui_parts";
require("./scss/blockeditor.scss");

const d3 = Object.assign({}, require("d3-selection"));
//UTILITY

export const str2dom = function(s){
let ts = document.createElement("span");
ts.innerHTML = s;
return ts.firstChild;


};


function createMagic(txt){
 return "#!#"; //:REDO
}

//export var constructors = {};
export var blocks = {};

blocks.paragraph = function(){
  function paragraph_editor( data , saver , blockeditor , bbox  ){
  
    //create editor    
    if(!data ||!("text" in data)){data = {text: "Lorem ipsum"}}

    let myeditor =  str2dom(`<p><span contenteditable='true' >${data.text}</span></p>`) ; 
    let editform = d3.select(myeditor).select("span").node();

    //save data on any change
    myeditor.addEventListener("input", ()=>saver(myeditor , {text: editform.innerHTML}));
    saver(myeditor , {text: editform.innerHTML});

    //split on enter
    myeditor.addEventListener("keydown", function (e) {
      var magic = createMagic(myeditor.innerHTML);
      if (e.keyCode == 13) { //Enter key
        if (e.shiftKey) {
          // Do nothing if Shift+Enter
          // Sorry, no <br> for you
        } else {
          let currentSel = document.getSelection();
          if(!currentSel.isCollapsed){
            return ; 
          }
          //node, where caret is
          //console.log(currentSel);
          let clickedNode = currentSel.focusNode;
          let offset = currentSel.focusOffset;

          //insert MAGIC (it's bad, but fast)
          clickedNode.textContent= 
          clickedNode.textContent.substring(0,offset) 
          + magic 
          + clickedNode.textContent.substring(offset)
          ;

          let clickat = editform.innerHTML.indexOf(magic)
          let textleft = editform.innerHTML.substring(0, clickat);
          let textright =  editform.innerHTML.substring(clickat + magic.length);
          //console.log(textleft, "|" , textright);
          editform.innerHTML = textleft; 
          saver(myeditor , {text: textleft});

          let newpara = blockeditor.addNewBlock("paragraph", {
            text: textright
          }, myeditor);

          let newpara_edited = blockeditor.editBlock(newpara);
          //move cursor to the end of it if textright is empty
          if(true){

            //move cursor to the end if new paragraph
            let eform = d3.select(newpara_edited).select("span").node();
            let lch = eform.lastChild || eform;
            var sel = window.getSelection()
            let range = document.createRange()

            range.setStart(lch , lch.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);

          }
          e.preventDefault();
          return;
        };
      }
    })
  return myeditor
  };

  return {
    view: function(data){if(!data||!("text" in data)){data = {text: "Lorem ipsum"}};
    console.log("Paragraph view" , data);
    return str2dom(`<p>${data.text}</p>`)  },
    edit: paragraph_editor 
  }
};

blocks.divider = function(){
  return{
    view: function(){return str2dom("<hr>")},
    edit: function(data){if(!data){data = {}}
    return str2dom("<hr>")}
  }
}

blocks.header = function(){
  
  let headerViewer = function(data){
    if(!data||!data.text){data = {text: "Lorem Ipsum" , level: 1 , class: ""}};
    return str2dom(`<h${data.level} class="${data.class||""}">${data.text}</h${data.level}>`)
  }

  let headerEditor = function( data , saver ){
  
    function textListener(){
     data_private.text = this.innerHTML;
     saver(outer , data_private);
    }  

    if(!data||!data.text){data = {text: "Lorem Ipsum" , level: 1 , class: ""}};
    //we will keep private copy of data
    var data_private =  data;
    let outer = document.createElement("span");
    let inner = headerViewer(data);
    inner.setAttribute("contenteditable" , "true");
    outer.appendChild(inner);

    //save text on any edit
    inner.addEventListener("input", textListener);
    //save data
    saver(outer , data_private);
    //add some UI
    // -- set level
    const levels = [1,2,3,4,5,6].map(e=>({"label" : "H" + e , "value" : e}));
    console.log("Blessing select");
    let sel = blessed("select");
    console.log("Select" , sel);
    
    //create and populate levels dropdown
    levels.forEach(function(l){
     let opt = blessed("option") ;
     opt.value = l.value;
     opt.innerHTML = l.label;
     if(data && data.level && data.level==parseInt(l.value)){
       opt.setAttribute("selected", true);
     }
     sel.appendChild(opt);
     
    });
    sel.addEventListener("change", function(){
         data_private.level = parseInt(sel.value);
         //show changes in editor!
         let hhtml = inner.innerHTML;
         let inew = document.createElement("h" + data_private.level);
         inew.setAttribute("contenteditable", true);
         inew.setAttribute("class", data_private.class || "");
         inew.innerHTML = hhtml;
         inew.addEventListener("input", textListener);
         outer.insertBefore(inew, inner);
         inner.remove();
         inner = inew;
         //save them
         saver(outer , data_private);
         
    })
    // -- set class?
    // :LATER
    let UI = uiparts.wrapToPanel(
    uiparts.addLabel("Level" , sel)
    );

    uiparts.addUIpart(outer, UI);
    return outer;
  }//header editor

  return {
    view: headerViewer,
    edit: headerEditor
  }

}//header
