

export function addPlusButton(eb, menu) {
    eb.style.position = "relative";
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
       dd.style.top="100%";
       dd.style.left = 0;
       dd.style.padding = "5px";
       dd.style.backgroundColor = "silver";
       dd.style.borderRadius = "5px"
       dd.style.border = "1px solid gray"
       menu.forEach(element => {
           let mi = document.createElement("div");
           mi.innerHTML = element.label;
           mi.style.backgroundColor= "white";
           mi.style.padding = "2px"
           mi.style.borderRadius = "5px";
           mi.style.margin = "2px";
           mi.style.cursor = "pointer";
           mi.addEventListener("click" , e=> {element.handler(eb.dataset.block_id); 
            dd.style.display = "none" ;
            menuhidden = true;});
           dd.appendChild(mi)
       });
       //
       eb.appendChild(dd);


    let button = document.createElement("div");
    button.classList.add("ddown");
    button.style.width = "24px";
    button.style.height = "24px";
    button.style.left = "0px";
    button.style.fontSize = "19px";
    button.style.cursor = "pointer";
    button.style.bottom = "0px";
    button.style.position = "absolute";
    button.style.backgroundColor = "silver";
    button.style.textAlign = "center";
    button.style.color = "white";
    button.style.opacity = "0";
    button.style.display = "block"
    button.style.borderRadius = "12px";
    button.style.transition = "opacity .5s";
    button.innerHTML = "+";


    button.addEventListener("mouseover", function (e) {
        button.style.opacity = 1.0;
        button.style.zIndex = 5;
        e.preventDefault();
        return true;
    })

    button.addEventListener("click" , function(e){
        //menuhidden = !menuhidden;
        //document.querySelectorAll(".block_editor_add_dropdown")
       // .forEach(e=>e.style.display="none");
        let ishidden = dd.style.display=="none";
        //console.log(ishidden)
        if(!ishidden){
            menuhidden = true;
            dd.style.display = "none"
        }else{
            menuhidden = false;
            dd.style.display = "block"
        }
    })

    eb.addEventListener("mouseover", function (e) {

        button.style.opacity = 1.0;
        button.style.zIndex = 10;
        e.preventDefault();
        return true;
    })
    eb.addEventListener("mouseout", function (e) {
        if (dd.style.display=="none") {
            button.style.opacity = 0;
            button.style.zIndex = "initial";
        }
    })
    eb.appendChild(button);

 

}