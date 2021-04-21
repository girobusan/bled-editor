

function bless(e){
//console.log("bless" , e);
 e.classList.add("block-editor-ui-element");
 return e;
}
export function blessed(ename, ...classes){
  let novice =  bless(document.createElement(ename));
  if(classes.length>0)
  {
    classes.forEach((c)=>novice.classList.add(c));
  }
  return novice;
}
export function addUIpart(block , uipart){
//funny animation GO

block.appendChild(uipart);
}

////////BUILDERS/////////////

export function wrapToDiv(wclass, ...elems){
  let wrapper = blessed("div" , wclass );
  elems.forEach(e=>wrapper.appendChild(e));
  return wrapper;

}
export function topLabel(lbl , el){
   let le = blessed("div" , "vgroup");
   let lb = blessed("label");
   le.appendChild(lb);
   le.appendChild(el);
   return le;
}

export function wrapToPanel(...elems){
  return wrapToDiv("panel" , ...elems);
}

export function wrapToRow(...elems){
  return wrapToDiv("row" , ...elems);
}

export function group(...els){
  let g = blessed("div" , "group");
  els.forEach(function(e){
  g.appendChild(e);
  });
  return g;
}
export function vgroup(...els){
  let g = blessed("div" , "vgroup");
  els.forEach(function(e){
  g.appendChild(e);
  });
  return g;
}

export function addLabel(lbl , el){
  let l = blessed("label");
  l.innerText = lbl;
  return wrapToRow(l , el);
}

export function wrapToPanelWithHeader(hdr , ...els){
  let h = blessed("h5");
  h.innerText(hdr);
  wrapToPanel.apply( null , [h].concat(els ));
}
