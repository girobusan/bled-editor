//import * as UI from "./ui";
import {bless , blessed} from "./ui_parts";
import * as uiparts from "./ui_parts";
require("./scss/blockeditor.scss");
var md = require("markdown-it")();

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

function checkData(data , defdata){
  if(!data || Object.keys(data).length <1){
    return defdata
  }else{
    return data;
  }
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
    myeditor.addEventListener("paste", ()=>saver(myeditor , {text: editform.innerHTML}));
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

blocks.code = function(){
  const defdata = {
    code: "10 LOREM\n20 IPSUM\n30 GOTO 10" ,
    language: ""
  }
  let codeViewer = function(data){
    console.log("Code viewer" , data);
    var d = data;


    if(!data||Object.keys(d).length<1){
      console.log("Default data");
      d = defdata;
      console.log(d.code);
    };
    console.log(d.code);
    return str2dom(`<pre class="${d.language}"><code>${d.code}</code></pre>`)
  }

  let codeEditor = function(data , saver){
     let private_data = data;
     if(!data||Object.keys(private_data).length<1){
      private_data = defdata;
     }
    
    let outer = document.createElement("span");
    let pre = document.createElement("pre");
    let code = document.createElement("code")
    code.innerText = private_data.code;
    code.dataset.no_text_toolbox = "1";
    
    saver(outer , private_data);
    code.setAttribute("contenteditable", true);
    pre.appendChild(code);
    outer.appendChild(pre);
    code.addEventListener("keyup", function(){
        private_data.code = code.innerText;
        saver(outer , private_data);
    });

    //language selector
    let languages = [
      {
        label: "No highlighting",
        class: ""
      },
      {
        label: "Auto",
        class: "auto"
      },
      {
        label: "Bash",
        class: "bash"
      },
      {
        label: "C",
        class: "cpp"
      },
      {
        label: "HTML",
        class: "html"
      },
      {
        label: "Java Script",
        class: "javascript"
      },
      {
        label: "Python",
        class: "python"
      },
    ];

   let opts = blessed("select");
   languages.forEach(function(l){
    let op =blessed("option");
    op.value = l.class;
    op.innerHTML = l.label;
    opts.appendChild(op);
   });

   opts.addEventListener("change" , function(){
      private_data.class = opts.value;
      pre.setAttribute("class", opts.value)
      saver(outer , private_data);
   });

   uiparts.addUIpart(outer, uiparts.wrapToPanel(uiparts.addLabel("Language" , opts)));

    return outer;

     
  };

  return {
  view: codeViewer,
  edit: codeEditor
  }

}//code

blocks.markdown = function(data, saver){
   
  var defdata = {"markdown": "### Markdown\n\n1. Lorem Ipsun Dolor\n1. Set Amet"} ;

  function mdEdit( data , saver , blockeditor , bbox ){
    let meditor = blessed("textarea" , "blockeditor-no-text-tools");
    let editor_title = blessed("h5" );
    editor_title.innerHTML = "Markdown";
    let outer = uiparts.wrapToPanel(editor_title , meditor);
    //outer.appendChild(editor_title);
    //outer.appendChild(meditor);
    let private_data = checkData(data, defdata);
    meditor.value = private_data.markdown;
    saver(outer , {"markdown" : meditor.value});

    meditor.style.minHeight = bbox.height + "px";
    meditor.style.width = "100%";
    meditor.addEventListener("keyup" , ()=>saver(outer , {"markdown": meditor.value}));
    return outer;
  }
  function mdView (data){
    let view = document.createElement("div");
    view.classList.add("markdown");
    view.innerHTML = md.render(data.markdown||"*Lorem Ipsum*");
    //console.log("MDVIEW" , view , data);
    
    return view;
  }
  return {
   edit: mdEdit,
   view: mdView
  }

}//markdown

blocks.raw = function(){
 var defdata = { html: "<div style='font-size:2rem'> Lorem &#128031; Ipsum</div>"};
 function rawEdit( data , saver , blockeditor , bbox ){
    var pdata = checkData(data, defdata);
    let raweditor = blessed("textarea" , "blockeditor-no-text-tools");
    let hdr = blessed("h5");
    hdr.innerHTML = "Raw HTML";
    let outer =uiparts.wrapToPanel(hdr,raweditor) ;
    outer.appendChild(hdr);
    outer.appendChild(raweditor);
    raweditor.value = pdata.html;
    saver(outer , { "html" : raweditor.value});
    raweditor.addEventListener("keyup" , function(){
      saver(outer , {"html" : raweditor.value});
    });
    return outer;

  }

  function rawView(data){
  let c = document.createElement("div");
  c.classList.add("html");
  c.innerHTML = data.html;
  return c;

  }
  return {
  edit: rawEdit,
  view: rawView
  }
}//raw

blocks.quote = function(){
  /*
  *  <blockquote> <span>text</span> 
  *     <footer> <cite> Author </cite>
  *  </blockquote>
  *
  */
  let defdata = {
   "text": "Lorem ipsum, dolor sit? Amet...",
   "caption": "Marcus Tullius Cicero"
  }
  let quoteEdit = function( data , saver , blockeditor , bbox ){
    //test and set the initial data
    let private_data = checkData(data, defdata);

   //build html nodes 
    let outer = document.createElement("blockquote");
    let footer = document.createElement("footer");
    let editspan = document.createElement("span");
    editspan.setAttribute("contenteditable", true)
    editspan.innerHTML = private_data.text;
    let cite = document.createElement("cite");
    cite.setAttribute("contenteditable", true);
    cite.innerHTML = private_data.caption;
    //tree
    footer.appendChild(cite);
    outer.appendChild(editspan);
    outer.appendChild(footer);
    //
    //event handlers
    editspan.addEventListener("input", function(){
         private_data.text = editspan.innerHTML;
         saver(outer , private_data);
    });
    cite.addEventListener("input", function(){
         private_data.caption = cite.innerHTML;
         saver(outer , private_data);
      
    })
    //first save of data
    saver(outer , private_data);
    footer.appendChild(cite);
    outer.appendChild(editspan);
    outer.appendChild(footer);

    return outer;
  };

  let quoteView = function(data){
    if(data.caption && data.caption.trim()!="")
    {
      return str2dom(`<blockquote>
        <span>${data.text}</span>
        <footer>
        <cite>${data.caption}</cite>
        </footer>
      </blockquote>`)
    }
    return str2dom(`<blockquote>${data.text}</blockquote>`)
    };

  return {
    edit: quoteEdit,
    view: quoteView
  }
}//QUOTE

/*
 * IMAGE
 *  == props and classes
 * stretched
 * left
 * right
 * noresize | noResize ??
 *
 * withBorder     =>  bordered
 * withBackground =>  with_background
 *
 * == other data 
 * caption
 * src
 * altText
 *
 */
blocks.image = function(){

  const nosrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMTM1LjQ2NyAxMzUuNDY3IiBzdHJva2U9IiM1NTUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggZD0iTTAgMGgxMzUuNDY3djEzNS40NjdIMHoiIGZpbGw9IiNkM2QzZDMiIHN0cm9rZS13aWR0aD0iLjI2NSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iLjI2NyI+PHBhdGggZD0iTS4xMDIuMDYzbDEzNS4yNjIgMTM1LjM0MSIvPjxwYXRoIGQ9Ik0xMzUuMzY0LjA2M0wuMTAyIDEzNS40MDQiLz48L2c+PC9zdmc+Cg==";
  const prop2class = [
    ["stretched" , "stretched" , "Stretched"],
    ["withBackground" , "with_background" , "With background"],
    ["withBorder" , "bordered" , "With border"],
    ["left" , "left" , "Left"],
    ["right" , "right" , "Right"],
    ["noresize" , "noresize" , "No resize"],
  ]
  ;

  const justProps = prop2class.map(e=>e[0]);

  function props2classStr(dataprops){
    return prop2class.reduce(
      function(a,e){
        if(dataprops[e[0]]){
          a+=" " + e[1]
        };
        return a;
      } , ""
    );
  }
  var defdata = {
    src: "",
    
    caption: "Lorem ipsum"
  }
  let imgView = function(data){
    let mdata;
    if(!data||!data.src){
    console.log("Data is empty")
    mdata = Object.assign({}, defdata);
    console.log(mdata)
    }else{
    mdata = Object.assign({}, data)
    }
    console.log( "Image viewer caption" , mdata.caption);
    let cptblock = mdata.caption ? `<figcaption>` + mdata.caption + `</figcaption>`  : "";
    let figclass = props2classStr(mdata) ;
    console.log( mdata.caption);

    let tag = `<figure class="${figclass}"><img src="${mdata.src}">${cptblock}</figure>`
    return str2dom(tag);
  }
  //
  let imgEdit = function( data , saver , blockeditor , bbox ){
    //build UI
    let private_data = Object.assign({} , Object.keys(data).length >1 ? data : defdata);
    //create Proxy for dynamic changes
    let proxy_data = new Proxy(private_data , {
      set: function(t,p,v){
        t[p] = v;
        if(p=='src'){
          img_tag.setAttribute("src", v);
        };
        if(justProps.indexOf(p)!=-1){
        //set or remove class
        let newclassstr = props2classStr(t);
        figure_tag.setAttribute("class", newclassstr)

        }
        saver( outer_container , t);
        return true;
      }
    } )
    let outer_container = document.createElement("span");
    saver(outer_container , proxy_data);
    //classes
    //figure display
    let figure_tag = document.createElement("figure");
    figure_tag.setAttribute("class", props2classStr(proxy_data));
    let img_tag = document.createElement("img");
    img_tag.addEventListener("error", ()=>img_tag.src=nosrc);
    img_tag.src = proxy_data.src || defdata.src;
    let caption_tag = document.createElement("figcaption");
    caption_tag.setAttribute("contenteditable", true);
    caption_tag.addEventListener("input", ()=>proxy_data.caption = caption_tag.innerHTML)
    caption_tag.innerHTML = proxy_data.caption;
    //compose
    figure_tag.appendChild(img_tag);
    figure_tag.appendChild((caption_tag));
    //

    //all of top part
    let top_part = figure_tag;
    //
    //:w
    //
    //row: src , upload
    let input_src = blessed("input");
    input_src.type = "text";

    input_src.addEventListener("input" , function(){
        //console.log(this.value);
        proxy_data.src = this.value;
    })
    input_src.value = proxy_data.src;
    let input_form = uiparts.topLabel(  "Source", input_src);
    //input_form.style.flexGrow = 1;
    //
    let callback = function(f){
     //upload
     blockeditor.upload(f.files[0])
     .then(function(r){
       proxy_data.src = r.file.url;
       input_src.value = r.file.url;
     })
    }
    let upload = uiparts.topLabel("Upload a file", uiparts.niceFileInput(callback));
    upload.style.flexGrow = 0;

    let row_1 = uiparts.wrapToRow(input_form , upload);

    //row: alt text row: link

    let alt_text = blessed("input");
    alt_text.type = "text";
    alt_text.value = proxy_data.alt || "";
    alt_text.addEventListener("input" , function(){
       proxy_data.alt = this.value;
    })

    let link_url = blessed("input");
    link_url.type = "text";

    let row_2 = uiparts.wrapToRow(
      uiparts.topLabel("Alt text" , alt_text),
      uiparts.topLabel("Link to" , link_url)
    );

    // checkboxes - classes

    let chboxes = prop2class.map(function(e){
      //let chbx = document.createElement("input");
      let chbx = blessed("input");
      chbx.type = "checkbox";
      chbx.style.flexGrow = 0;
      chbx.classList.add(e[1])

      if(proxy_data[e[0]]){
        chbx.setAttribute("checked" , true);
      }
      chbx.addEventListener("change", function(){
         proxy_data[e[0]] = this.checked;
      })
      let chlbl = blessed("label");
      chlbl.innerText = e[2];
      return uiparts.group(chbx , chlbl);

    });

    let row_3 = uiparts.wrapToRow(...chboxes);


    let edit_panel = blessed("div" , "panel");
    //uiparts.panelHeader(edit_panel, "Image");
    edit_panel.appendChild(row_1);
    edit_panel.appendChild(row_2);
    
    edit_panel.appendChild(blessed("hr"));
    edit_panel.appendChild(row_3);
    
    
    outer_container.appendChild(top_part);
    outer_container.appendChild(edit_panel);
    return outer_container;
  }
  return{
    edit: imgEdit,
    view: imgView
  }
};
