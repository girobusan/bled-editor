import * as UI from "./ui";
import { blocks as Coreblocks } from "./coreblocks";
import "./scss/forms.css";
export const version = "1.0.06";
const d3 = Object.assign({}, require("d3-selection"));
//UTILITY

const str2dom = function(s){
  const parser = new DOMParser();
  return parser
  .parseFromString(s, "text/xml")
  .firstChild
  ;

};


export function BlockEditor({ selector }) {
    const my = this;
    // Element for Block Editor.
    my.element = document.querySelector(selector);
    my.element.classList.add("block-editor-content-container");
    //element cleared 
    my.element.innerHTML = "";


    this.editors = {
    }; 
    this.blocks = [];
    this.addMenu = [];  // units for add block menu
    this.zeroblock = {
     render: function(){ return str2dom(`<div class="block-editor-ui-element zeroblock"><span>Edit mode</span></div>`) },
     edit: this.render
    }

    //Unique ID generation. 
    //Not needed in thos version?
    var _current_id = 0;
    this._makeID = function () {
        _current_id++;
        return _current_id;
    };

    //File upload function
    //Default code is for demos
    this.upload = function (f, testurl) {
        console.log("Testing upload", f);
        return new Promise(function (resolve, reject) {
            resolve({
                success: "1",
                file: {
                    url: testurl ? testurl : "http://placekitten.com/600/400"
                }
            });
        })
    }

    this.setUploadFunction = function (func) {
        this.upload = func;
        return this;
    }
    this.setBlocks = function (blocks) {
        my.element.innerHTML = "";
        if (blocks) {
          blocks.forEach(e => this.addNewBlock(
            e.type, e.data
          ));
        }
    }

    this.hide = function () {
        this.blockdata = this.save();
        this.element.innerHTML = "";
        
    }

    this.show = function () {
        this.setBlocks(this.blockdata);
        UI.tooltips();
        UI.textTools();
    }

    this.start = function (blocks) {
        //add zero block

        //this.element.innerHTML = "";
        this.blocks = {};
        //
        //Fill ADD menu from editors list
        Object.keys(this.editors).forEach(function (e) {
            //console.info("Аdded handler for", e);
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
        //zero.style.height = "8px";
        zero.style.boxSizing = "content-box";
        zero.style.width = "100%";
        zero.style.marginLeft = "-32px";
        zero.style.marginRight = "-32px";
        zero.style.padding = "0px 32px"
        zero.dataset.block_id = "start";
        //
        let rect = document.createElement("div");
        //rect.style.backgroundColor = UI.Colours.light;
        rect.style.color = UI.Colours.light;
        rect.innerHTML = "Edit mode";
        rect.style.padding = "0.5em 0.5em";
        rect.style.letterSpacing = ".1em";
        rect.style.fontSize = "10px";
        //rect.style.fontWeight = "bold";
        rect.style.height = "100%";
        rect.style.textAlign = "center";
        //rect.style.userSelect = "none";
        zero.appendChild(rect);
        UI.addPlusButton(zero, this.addMenu);
        my.element.appendChild(zero);
        //
        this.setBlocks(blocks);
        //start UI
        UI.tooltips();
        UI.textTools();
        UI.editorOverlay(my);
        //UI.addCommonStyles(this.element);
        return my;
    }



    this.moveUp = function (block) {
        //find previous block
        let previous = block.previousSibling;
        //we're already at top
        if(!previous){
           return;
        }
        previous.insertAjasentElement("beforebegin" , block);
        return block;
    }

    this.moveDown = function (id) {
        //find next block
        let next = block.nextSibling;
        //we're already at top
        if(!next){
           return;
        }
        previous.insertAjasentElement("afterend" , block);
        return block;
    }

    this.registerEditor = function ({
      type,
      view,
      edit,
      icon,
      label,
    }) {
      console.info("Editor: " , type)
      this.editors[type] = {
        type,
        view,
        edit,
        icon,
        label,
      };
      return my;
    }

    this.unknownBlock = function(type , data , exeption){
     return str2dom(`<div class="unknown-block" data-type="unknown">Unknown block: ${type}</div>`);
    }
    

    this.addNewBlock = function (type, data, refelement) { 
        console.info("Added block" , type , data)
        function inserter(e){
           refelement.insertAjasentElement("afterend" , e);
        }
        if (!refelement) {
          inserter = function(e){my.element.appendChild(e)};
        }
        //make block
        try{
          var new_block = my.editors[type].view(data);     
        }catch (e){
          console.error("Error adding block", e);
          new_block = my.unknownBlock(type , data , e);
        };
        //add bells and whistles
        //--classes
        console.log("Before D3" , new_block)
        d3.select(new_block)
        .attr("class" , "block-editor-content-block")
        .attr("data-block-data" , JSON.stringify(data))
        .attr("data-block-type" , type)
        //--
        //insert
        inserter(new_block);
        return new_block;
    };//-/add new block

    this.editBlock = function(block){
      //create editor
      console.log("data" , block.dataset.blockData);
      var edited = my.editors[block.dataset.blockType].edit(
        JSON.parse(block.dataset.blockData),
        function(e,d){ 
          e.dataset.blockData = JSON.stringify(d) 
        },
        my,
        block.getElementBoundingBox
      );
      //add bells and whistles
      d3.select(edited)
      .classed("block-editor-content-editor" , true)
      .classed("block-editor-content-block" , true)
      .attr("data-block-type" , block.dataset.blockType)
      //add:
      // - move up
      // - move down
      // - delete
      UI.addPlusButton(edited, my.addMenu);

      //replace block with editor
      my.element.insertBefore( edited , block);
      block.remove();
      return edited;
    };

    this.viewBlock = function(block){
      //check if it's edited, if no -- it's already viewed
      if(!block.classList.contains("block-editor-content-editor")){
        return;
      }
      let viewed = my.editors[block.dataset.blockType].view(
        JSON.parse(block.dataset.blockData)
      );
      my.element.insertBefore(viewed , block);
      block.remove();
      return viewed;
    };

    this.removeBlock = function (block) {
     block.remove();
    } //remove block

    this.save = function (clb) {
        let datas = Array.from(
        my.element.querySelectorAll(".block-editor-content-block"))
        .map(function(e){
          return {
           type: e.dataset.blockType,
           data: e.dataset.blockData
          }
        });
        let ts = new Date();
        let mydata = {
            "editor": "BlEd2/" + version,
            "stime": ts.toISOString(),
            "time": ts.getTime(), //legacy
            "blocks": datas
        };

        console.groupCollapsed("%cEditor saving", ("color: " + UI.mycyan));
        console.log(mydata);
        console.groupEnd();

        if (clb) {
            clb(mydata)
        };
        return mydata;
    }//-/save

}




export function makeBasicEditor(el) {
    let editor = new BlockEditor({
        selector: el
    });

    editor.registerEditor({
        type: "paragraph",
        view: Coreblocks.paragraph().view,
        edit: Coreblocks.paragraph().edit,
        icon: UI.icons.material.paragraph,
        label: "Paragraph"
    });
    editor.registerEditor({
        type: "divider",
        view: Coreblocks.divider().view,
        edit: Coreblocks.divider().edit,
        icon: UI.icons.divider,
        label: 'Divider'
    });
    /*
    editor.registerEditor({
        type: "header",
        icon: UI.icons.header,
        make: Coreblocks.header,
        label: 'Header'
    });
    editor.registerEditor({
        type: "code",
        icon: UI.icons.code,
        make: Coreblocks.code,
        label: 'Code snippet'
    });
    editor.registerEditor({
        type: "raw",
        icon: UI.icons.raw,
        make: Coreblocks.raw,
        label: 'Raw HTML'
    });
    editor.registerEditor({
        type: "quote",
        icon: UI.icons.material.quote,
        make: Coreblocks.blockquote,
        label: 'Blockquote'
    });
    editor.registerEditor({
        type: "image",
        icon: UI.icons.material.image,
        make: Coreblocks.image,
        label: 'Image'
    });
    editor.registerEditor({
        type: "video",
        icon: UI.icons.material.video,
        make: Coreblocks.video,
        label: 'Video'
    });
    editor.registerEditor({
        type: "list",
        icon: UI.icons.material.list,
        make: Coreblocks.list,
        label: "List",
    });
    editor.registerEditor({
        type: "audio",
        icon: UI.icons.material.audio,
        make: Coreblocks.audio,
        label: "Audio",
    });
    editor.registerEditor({
        type: "attachment",
        icon: UI.icons.material.attachment,
        make: Coreblocks.attachment,
        label: "Attach file",
    });
    editor.registerEditor({
        type: "badge",
        icon: UI.icons.material.report,
        make: Coreblocks.badge,
        label: "Badge",
    });
    editor.registerEditor({
        type: "markdown",
        icon: UI.icons.markdown,
        make: Coreblocks.markdown,
        label: "Markdown block",
    });
    */
    //console.log(UI.icons.material.list);

    return editor;
}
//  my.current_editor = new editor_fn(l4, editor_element, my.current_view.file.content);

export function makeLatidEditor(l4, editor_element_selector, file_content) {
    let ed = makeBasicEditor(editor_element_selector);
    ed.setBlocks(file_content);
    return ed;
}
