
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x5='rgba(0,0,0,0)',x4='rgba(255,254,237,1.00)',x13='Rectangle',x14='rgb(0, 0, 0)',g='image',b='block',x15='1',e16='${Rectangle}',x12='auto',x10='900px',d='display',x8='rgba(255,255,255,1)',o='opacity',m='rect',x7='rgba(255,255,255,1.00)',xc='rgba(0,0,0,1)',x9='0px',x11='400px',i='none';var g6='iconEducacao.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'bgIndex3',t:m,r:['110px','161px','676px','412px','auto','auto'],br:["17px","17px","17px","17px 17px"],f:[x4],s:[0,xc,i]},{id:'iconEducacao',t:g,r:['40px','272px','40px','35px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'fader',t:m,r:['1px','0px','900px','600px','auto','auto'],f:[x7],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:0,a:y,data:[]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,r:[x9,x9,x10,x11,x12,x12],v:b,id:x13,s:[0,x14,i],o:x15,f:[x7]}],style:{'${symbolSelector}':{r:[_,_,x10,x11]}}},tt:{d:500,a:y,data:[["eid11",o,0,500,"easeInOutQuad",e16,'1','0'],["eid12",d,0,0,"easeInOutQuad",e16,b,b],["eid13",d,500,0,"easeInOutQuad",e16,b,i]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-191321653");
console.log(window.process);(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){$(document).on('click','a',function(event){event.preventDefault();window.open($(this).attr('href'),'_system');return false;});sym.$('fader').fadeOut(function(){sym.$('fader').hide();});$('\
         <style scoped contenteditable="">\
          ::-webkit-scrollbar {\
              width: 5px;\
          }\
          /* Track */\
          ::-webkit-scrollbar-track {\
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\
              -webkit-border-radius: 10px;\
              border-radius: 10px;\
          }\
          ::-webkit-scrollbar-thumb {\
              -webkit-border-radius: 10px;\
              border-radius: 10px;\
              background: rgba(130,130,130,0.8);\
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\
          }\
          ::-webkit-scrollbar-thumb:window-inactive {\
                    background: rgba(130,130,130,0.4);\
          }\
          </style>\
         ').appendTo("head");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fadeIn'
(function(symbolName){})("fadeIn");
//Edge symbol end:'fadeIn'
})})(AdobeEdge.$,AdobeEdge,"EDGE-191321653");