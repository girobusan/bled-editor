console.log("testing");
require("./scss/example.scss");
//require("gutenberg-web-type");
import * as Editor from "./blockeditor.js";
import * as CRender from "./content_render";

const el = "#content";
var viewmode = true;

var small_testdata = 
[
    {
       "type":"paragraph",
       "data":{
          "text":"Он не очень хорош в наборе текстов, хотя и содержит все основные возможности для редактирования текстов. <i>Курсив</i>, индексы<sup>2</sup>&nbsp; и многое другое, например, вставку ссылок и спѣциальных символов."
       }
    },
    {
       "type":"divider",
       "data":{
 
       }
    },
    {
       "type":"paragraph",
       "data":{
          "text":"Но основной его смысл в том, чтобы собрать страницу из визуальных блоков. Например, список — отдельный блок со своими параметрами."
       }
    }
 ]
 
var testdata = 
[
    {
       "type":"header",
       "data":{
          "text":"Это — блочный редактор.",
          "level":1
       }
    },
    {
       "type":"paragraph",
       "data":{
          "text":"Он не очень хорош в наборе текстов, хотя и содержит все основные возможности для редактирования текстов. <i>Курсив</i>, индексы<sup>2</sup>&nbsp; и многое другое, например, вставку ссылок и спѣциальных символов."
       }
    },
    {
       "type":"paragraph",
       "data":{
          "text":"Но основной его смысл в том, чтобы собрать страницу из визуальных блоков. Например, список — отдельный блок со своими параметрами."
       }
    },
    {"type":"markdown",
   
   "data": {
      "markdown" : `
      An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and monospace. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.`
   }},
    {
       "type":"header",
       "data":{
          "text":"Список:",
          "level":3
       }
    },
    {
       "type":"list",
       "data":{
          "style":"ordered",
          "items":[
             "Может быть нумерованным или с «буллитами»",
             "Елементы списка могут иметь <b>любое</b> текстовое форматирование.",
             "Вложенных списков (пока) нет. Все равно они некрасивые"
          ]
       }
    },
    {
       "type":"header",
       "data":{
          "text":"Мультимедиа",
          "level":3
       }
    },
    {
       "type":"paragraph",
       "data":{
          "text":"Самое главное, конечно, в том, что можно вставлять картинки, видео, аудио, цитаты, произвольный HTML код.&nbsp;"
       }
    },{
        "type": "video",
        "data": {
          "file": {
            "url": "file_example_MP4_480_1_5MG.mp4"
          },
          "autoplay": false,
          "controls": true,
          "loop": true,
          "muted": false
        }
      },
    {
       "type":"header",
       "data":{
          "text":"Примеры",
          "level":3
       }
    },
    {
       "type":"image",
       "data":{
          "stretched":false,
          "right":false,
          "left":false,
          "noresize":false,
          "withBackground":false,
          "border":false,
          "withBorder":false,
          "caption":"Спасибо сайту <a href=\"https://placekitten.com/\">Placekitten.com</a>",
          "file":{
             "url":"https://placekitten.com/g/800/400"
          }
       }
    },
    {
       "type":"paragraph",
       "data":{
          "text":"Иногда абзацы хочется отбить линейками, и это тоже предусмотрено.&nbsp;"
       }
    },
    {
       "type":"divider",
       "data":{
 
       }
    }
 ]

//to onDOM

window.addEventListener("DOMContentLoaded", function () {
    var myel = document.querySelector("#container");
    var myeditor = Editor.makeBasicEditor("#container");
    myeditor.start(small_testdata);

})


