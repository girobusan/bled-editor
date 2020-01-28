function editor(params) {

    this.element = document.querySelector(params.selector);

    this.editors = params.editors; // {}; //block 
    this.blocks = {};
    this._current_id = 0;

    this._makeID = function () {
        this._current_id++;
        return this._current_id;
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
        //
        return this.element.querySelectorAll(".block_editor_unit").item(idx).dataset.block_id;
    }


    this.addNewBlock = function (type, data, refid) { //ref=?
        //if there is ref id, insert after
        //find next element
        if (refid) {
            let nextidx = this.ID2Index(refid) + 1;
            var refel = this.element.querySelectorAll(".block_editor_unit").item(nextidx);
        }
        //let nextn = refid

        //generate ID
        let bID = this._makeID();

        //create block of type 
        if (name in this.editors) {
            let belement = document.createElement("div");
            belement.classList.add("block_content_container")
            var block = this.editors[name](data, belement, bID, this);
        } else {
            console.log("no editor for", name);
            return null;
        }

        //create DOM element
        let domblock = document.createElement("div");
        domblock.appendChild(block.element);
        domblock.classList.add("block_editor_unit");
        domblock.dataset.block_id = bID;
        domblock.dataset.block_type = btype;

        //add block to my dictionary
        this.blocks[bID] = block;
        //add corresponding dom el. to container
        if (refid && refel) {
            refel.insertBefore(domblock);
        } else {
            this.element.appendChild(domblock);
        }
        block.render();

    } //add new block

    this.removeBlock = function (id) {
        //find block index
        let elidx = this.ID2Index(id);
        //announce deletion to block
        this.blocks[id].delete();
        //remove dom element
        this.element.querySelectorAll(".be_unit").item(elidx).remove();
        //del block from registry
        delete(this.blocks[id]);
    } //remove block



    this.save = function () {
        let dt = [];
        this.element.querySelectorAll(".be_item")
            .forEach(e => dt.push({
                "type": e.dataset.block_type,
                "data": this.blocks[e.dataset.block_id].save()
            }));
        let mydata = {
            "blocks": dt
        };
        console.log("Editor saving", mydata);
        return mydata;
    }


}



function addToolbox(block) {
    let tbx = document.createElement("div");
    tbx.classList.add("toolbox");
    block.element.appendChild(tbx);
    block.addToToolbox = function (el) {
        tbx.appendChild(el)
    }
}

/**
 * 
 * @param {Object} data - obj | null
 */

function paragraph(data, el, id, editor) {
    let bc = document.createElement("p");
    bc.setAttribute("contenteditable", true);
    el.appendChild(bc);

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
        render: function () {
            this._p.innerHTML = this.data.text;
        },
        save: function () {
            return {
                text: this._p.innerHTML
            }
        }
    }

    blc._p.addEventListener("keyup", function (e) {
        if (e.keyCode == 13) {
            console.log("enter pressed")
        }
    })
    return blc;
}