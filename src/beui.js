export var mycyan = "#3ED9E3";

export function tooltips(){
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
    ttin.style.fontSize="12px";
    ttin.style.padding = "4px 8px";
    ttin.style.position = "relative";
    ttin.style.borderRadius = "4px";
    ttin.style.boxShadow = "2px 2px 2px 1px gray";
    ttin.style.right = "50%";
    ttin.style.bottom = "8px";

    document.body.appendChild(tt);

    window.addEventListener("mousemove" , function(e){
        let ttb = tt.getBoundingClientRect().height;
        tt.style.top = (e.clientY - ttb + window.scrollY) + "px";
        tt.style.left = e.clientX + "px";

    })
        window.addEventListener("mouseover" , function(e){
        if(e.target&&e.target.dataset.hint){
        ttin.innerHTML = e.target.dataset.hint;
       // tt.style.top = e.clientY + "px";
          //  tt.style.left = e.clientX + "px";
        tt.style.display = "block";
        }else{            
            tt.style.display = "none";
        }
    })
}

export function textTools(){
    let ttools = document.createElement("div");
    ttools.style.minWidth = "100px";
    ttools.classList.add("text_toolbox");
    ttools.style.height = "24px";
    ttools.style.backgroundColor = mycyan;
    ttools.style.position = "absolute";
    ttools.style.display = "none";

    document.body.appendChild(ttools);

    document.body.addEventListener("click" , function(e){
        //console.log(e.target.getAttribute("contenteditable"));
    if(e.target.getAttribute("contenteditable") && !e.target.dataset.no_text_toolbox){
        //console.log("click" , ttools);
        let tgt = e.target.getBoundingClientRect();
        ttools.style.left = tgt.left + "px";
        ttools.style.top = (tgt.top-24 + window.scrollY) + "px";
        ttools.style.display = "block";
    }else if(e.target.classList.contains("text_toolbox")){
        ttools.style.display = "block";
    }else{
        ttools.style.display = "none";
    }
    });
     
 
    
}
export function addPlusButton(block, menu) {
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
        mi.style.padding = "2px"
        mi.style.borderRadius = "5px";
        mi.style.margin = "2px";
        mi.style.cursor = "pointer";
        mi.style.display = "inline-block";
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
    button.style.color = mycyan;
    button.style.opacity = "0";
    button.style.display = "block"
    //button.style.borderRadius = "12px";
    button.style.transition = "opacity .5s";
    button.dataset.hint = "Add new block";
    button.innerHTML = "+";


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

export function addBlockControls(block, items , ed) {
    if (!items&&ed) {
        items = [
            {
                label: "move block up",
                icon: "🡡",
                handler: function () { ed.moveUp(block.dataset.block_id)}
            },
            {
                label: "move block down",
                icon: "🡣",
                handler: function () { ed.moveDown(block.dataset.block_id) }
            },
            {
                label: "delete block",
                icon: "✕",
                handler: function () { ed.removeBlock(block.dataset.block_id) }
            }
        ]
    }else{
        items=[];
    }
    //
    block.style.position = "relative";
    let ourclass = "ctrls"+block.dataset.block_id;
    let ctrls = document.createElement("div");
    ctrls.classList.add("common_block_controls");
    ctrls.classList.add(ourclass);
    ctrls.style.position = "absolute";
    ctrls.style.top = "0px";
    ctrls.style.right = "0px";
    ctrls.style.width = "32px";
    ctrls.style.backgroundColor = mycyan;
    ctrls.style.color = "white";
    ctrls.style.textAlign = "center";
    ctrls.style.display = "none";
    ctrls.addEventListener("mouseover", () => {ctrls.style.zIndex=6 ; ctrls.style.display = "block"} );
    ctrls.addEventListener("mouseout", () => {ctrls.style.zIndex="initial" ;  ctrls.style.display = "none"});

    block.addEventListener("mouseover", () => { ctrls.style.zIndex=5 ; ctrls.style.display = "block"});
    block.addEventListener("mouseout", () => { ctrls.style.zIndex="initial" ; ctrls.style.display = "none"});



    items.forEach(function (e) {
        let mi = document.createElement("div");
        mi.innerHTML = e.icon;
        mi.style.cursor = "pointer";
        mi.addEventListener("click", function () {
            e.handler(block.dataset.block_id);
        });
        mi.dataset.hint = e.label;
        ctrls.appendChild(mi);
    });

    block.appendChild(ctrls)

}