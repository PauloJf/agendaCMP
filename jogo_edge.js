
(function(compId){var _=null,y=true,n=false,x7='break-word',x8='nowrap',x3='6.0.0.400',x2='5.0.0',x23='true',o='opacity',x22='rgba(238,9,9,1.00)',x16='Rectangle',x17='rgb(0, 0, 0)',x20='144px',x21='89px',d='display',b='block',x6='Arial, Helvetica, sans-serif',x18='1',l='normal',e19='${Rectangle}',x15='auto',x13='900px',x='text',x12='0px',x11='rgba(255,255,255,1)',x1='6.0.0',x5='24',x9='rgba(255,255,255,1.00)',x10='rgba(192,192,192,1)',xc='rgba(0,0,0,1)',m='rect',x14='400px',i='none';var s4="Section";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["edge_includes/jquery-2.1.1.min.js","edge_includes/jquery-ui-1.10.4.min.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Text',t:x,r:['410px','187px','auto','auto','auto','auto'],text:s4,n:[x6,[x5,],xc,l,i,"",x7,x8]},{id:'fader',t:m,r:['0px','0px','900px','600px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'targ',t:m,r:['291px','269px','164px','167px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'targ2',t:m,r:['472px','269px','164px','167px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'targ3',t:m,r:['658px','269px','164px','167px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'part',symbolName:'part',t:m,r:['83','333','144','89','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:0,a:y,data:[]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,r:[x12,x12,x13,x14,x15,x15],v:b,id:x16,s:[0,x17,i],o:x18,f:[x9]}],style:{'${symbolSelector}':{r:[_,_,x13,x14]}}},tt:{d:500,a:y,data:[["eid11",o,0,500,"easeInOutQuad",e19,'1','0'],["eid12",d,0,0,"easeInOutQuad",e19,b,b],["eid13",d,500,0,"easeInOutQuad",e19,b,i]]}},"part":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x12,x12,x20,x21,x15,x15],id:x16,s:[0,xc,i],t:m,f:[x22]}],style:{'${symbolSelector}':{isStage:x23,r:[undefined,undefined,x20,x21]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-191321653");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("part").draggable();sym.$("targ").droppable({drop:function(event,ui){$(ui.draggable).fadeOut();}});sym.$("targ2").droppable({drop:function(event,ui){alert("Bingo");}});sym.$("targ3").droppable({drop:function(event,ui){alert("Bingo");}});var gui=require('nw.gui');$(document).on('click','a',function(event){event.preventDefault();gui.Shell.openExternal($(this).attr('href'))
return false;});sym.$('fader').fadeOut(function(){sym.$('fader').hide();});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fadeIn'
(function(symbolName){})("fadeIn");
//Edge symbol end:'fadeIn'

//=========================================================

//Edge symbol: 'part'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Rectangle}","click",function(sym,e){});
//Edge binding end
})("part");
//Edge symbol end:'part'
})})(AdobeEdge.$,AdobeEdge,"EDGE-191321653");