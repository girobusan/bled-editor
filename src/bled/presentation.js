console.log("testing");
import * as Editor from "./blockeditor.js";
import * as CRender from "./content_render";

const el = "#content";
var viewmode = true;

var testdata = [
    {
        "type": "header",
        "data": {
            "text": "Драма катода",
            "level": 3
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Драма однородно притягивает прозаический дактиль. Весьма перспективной представляется гипотеза, высказанная И.Гальпериным"
        }
    },
    {
        "type": "list",
        "data": {
            "style": "ordered",
            "items": ["First item", "Second Item", "Third Item"]
        }
    },
    {
        "type": "fcuk",
        "data": {
            "style": "ordered",
            "items": ["First item", "Second Item", "Third Item"]
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Первое полустишие изящно иллюстрирует лирический парафраз."
        }
    },
    {
        "type": "divider",
        "data": {}
    },
    {
        "type": "paragraph",
        "data": {
            "text": `Следует отметить, что катод субстратно взвешивает деструктивный 
            белок. Даже в этом коротком фрагменте видно, что выпаривание дает 
            былинный одиннадцатисложник.`
        }
    },

]

//to onDOM

window.addEventListener("DOMContentLoaded", function () {
    var myel = document.querySelector(el);
    var myeditor = Editor.makeBasicEditor(el);
    const crender = new CRender.blockViewer();
    myeditor.start(testdata);

    function goViewMode() { //CR
        viewmode = true;
        testdata = myeditor.save();
        myeditor.hide();
        //render content
        myel.innerHTML = crender.show( {blocks:testdata} );

        //testdata = 

    }

    function goEditMode() { //Editor
        viewmode = false;
        myel.innerHTML = "";
        myeditor.show();
    }


})


