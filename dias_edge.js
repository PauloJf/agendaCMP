
(function(compId){var _=null,y=true,n=false,x12='break-word',x13='nowrap',x2='5.0.0',x5='rgba(0,0,0,0)',x19='Rectangle',x20='rgb(0, 0, 0)',g='image',b='block',x21='1',x='text',m='rect',x7='rgba(255,255,255,1.00)',i='none',x3='6.0.0.400',p='px',o='opacity',x4='rgba(255,254,237,1.00)',x10='Arial, Helvetica, sans-serif',l='normal',e22='${Rectangle}',x18='auto',x16='900px',x14='rgba(255,255,255,1)',x9='24',x11='400',d='display',xc='rgba(0,0,0,1)',x1='6.0.0',x17='400px',x15='0px';var g6='iconEducacao.svg';var s8="<p style=\"margin: 0px;\">​Dias</p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'bgIndex3',t:m,r:['110px','161px','676px','412px','auto','auto'],br:["17px","17px","17px","17px 17px"],f:[x4],s:[0,xc,i]},{id:'iconEducacao',t:g,r:['40px','272px','40px','35px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'fader',t:m,r:['0px','0px','900px','600px','auto','auto'],f:[x7],s:[0,"rgb(0, 0, 0)",i]},{id:'Text',t:x,r:['302','301','auto','auto','auto','auto'],text:s8,align:"left",n:[x10,[x9,p],xc,x11,i,l,x12,x13],ts:["","","","",i]}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x14]}}},tt:{d:0,a:y,data:[]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,r:[x15,x15,x16,x17,x18,x18],v:b,id:x19,s:[0,x20,i],o:x21,f:[x7]}],style:{'${symbolSelector}':{r:[_,_,x16,x17]}}},tt:{d:500,a:y,data:[["eid11",o,0,500,"easeInOutQuad",e22,'1','0'],["eid12",d,0,0,"easeInOutQuad",e22,b,b],["eid13",d,500,0,"easeInOutQuad",e22,b,i]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-191321653");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
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