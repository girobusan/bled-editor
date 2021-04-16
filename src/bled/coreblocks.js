import * as UI from "./ui";
import {
    templates
} from "./tools";
//import { curveBundle } from "d3";

const d3 = Object.assign({}, require("d3-selection"));
//UTILITY

const str2dom = function(s){
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
    let myeditor =  str2dom(`<p style="contenteditable:true">${data.text}</p>`) ; 
    //save data on any change
    myeditor.addEventListener("input", ()=>saver({text: myeditr.innerHTML}));
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
          let clickedNode = currentSel.startContainer;
          let offset = currentSel.startOffset;
          //insert MAGIC (it's bad, but fast)
          clickedNode.innerHTML = 
          clickedNode.innerHTML.substring(0,offset) 
          + magic 
          + clickedNode.innerHTML.substring(offset)
          ;

          let clickat = myeditor.innerHTML.indexOf(magic)
          let textleft = myeditor.innerHTML.substring(0, clickat);
          let textright =  myeditor.innerHTML.substring(clickat + magic.length);
          //console.log(textleft, "|" , textnext);
          myeditor.innerHTML = textleft; //blc._p.innerHTML.substring(0 , clickat);

          blockeditor.addNewBlock("paragraph", {
            text: textright
          }, myeditor);
          e.preventDefault();
          return;
        };
      }
    })
  };

  return {
    view: function(data){return str2dom(`<p>${data.text}</p>`)  },
    edit: paragraph_editor 
  }
};

blocks.divider = function(){
  return{
  view: function(){return str2dom("<hr>")},
  edit: this.view
  }
}


