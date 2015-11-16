
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x12='nowrap',x2='5.0.0',x5='rgba(0,0,0,0)',x35='rgb(0, 0, 0)',x4='both',x10='Locator, Geneva, Verdana, sans-serif',x34='1',x='text',x9='7',m='rect',x13='rgba(255,255,255,0.80)',i='none',x3='6.0.0.400',x24='161px',p='px',o='opacity',d='display',x33='Rectangle',b='block',x26='412px',g='image',x23='110px',x29='0px',l='normal',e36='${Rectangle}',x27='auto',x25='676px',x30='900px',x31='600px',x22='bgIndex2',x21='rgba(255,255,255,1)',x20='rgba(255,255,255,1.00)',xc='rgba(0,0,0,1)',x32='400px',x11='break-word';var g16='btnSugestoes.svg',g7='logoCMP2.svg',g15='btnActividade.svg',g28='bgIndex.svg',g14='btnEducacao.svg',g6='LogoAmbiente.svg',g18='btnContactos.svg',g19='btnJogo.svg',g17='btnDias.svg';var s8="Design: Atelier João Borges . Developed: GatoSerio.com";var im='images/',aud='media/',vid='media/',js='js/',fonts={'Locator, Geneva, Verdana, sans-serif':'<link rel=\"stylesheet\" type=\"text/css\" href=\"fonts/Locator-Regular/font.css\">'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["edge_includes/jquery-2.1.1.min.js","edge_includes/EdgeCommons.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:x4,cg:x4,rI:n,cn:{dom:[{id:'content',symbolName:'content',t:m,r:['0px','0px','900px','600px','auto','auto']},{id:'LogoAmbiente',t:g,r:['112px','50px','476px','71px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'logoCMP2',t:g,r:['686px','54px','96px','49px','auto','auto'],f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['1.10877','1.10877']]},{id:'Copy',t:x,tag:'p',r:['110px','573px','auto','auto','auto','auto'],text:s8,n:[x10,[x9,p],"rgba(111,109,108,1.00)",l,i,"",x11,x12]},{id:'barraTranparenteMenu',t:m,r:['110px','173px','676px','47px','auto','auto'],f:[x13],s:[0,xc,i]},{id:'btnEducacao',t:g,r:['319px','122px','79px','88px','auto','auto'],cl:'rect(0px 79px 88px 16.45703125px)',cu:'pointer',f:[x5,im+g14,'0px','0px']},{id:'btnActividade',t:g,r:['411px','122px','74px','90px','auto','auto'],cl:'rect(0px 74px 90px 11.99609375px)',cu:'pointer',f:[x5,im+g15,'0px','0px']},{id:'btnSugestoes',t:g,r:['496px','122px','76px','90px','auto','auto'],cl:'rect(0px 76px 90px 13.955078125px)',cu:'pointer',f:[x5,im+g16,'0px','0px']},{id:'btnDias',t:g,r:['588px','118px','74px','91px','auto','auto'],cl:'rect(3.0654296875px 74.4755859375px 91px 0.34130859375px)',cu:'pointer',f:[x5,im+g17,'0px','0px']},{id:'btnContactos',t:g,r:['675px','122px','69px','88px','auto','auto'],cl:'rect(0px 69px 88px 6.5322265625px)',cu:'pointer',f:[x5,im+g18,'0px','0px']},{id:'btnJogo',t:g,r:['754px','121px','79px','77px','auto','auto'],cl:'rect(0px 79px 77px 16.6943359375px)',cu:'pointer',f:[x5,im+g19,'0px','0px']},{id:'fader',t:m,r:['1px','0px','900px','600px','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x21]}}},tt:{d:0,a:y,data:[]}},"content":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:y,cn:{dom:[{t:g,id:x22,r:[x23,x24,x25,x26,x27,x27],f:[x5,im+g28,x29,x29]}],style:{'${symbolSelector}':{r:[_,_,x30,x31]}}},tt:{d:0,a:y,data:[]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,r:[x29,x29,x30,x32,x27,x27],v:b,id:x33,o:x34,s:[0,x35,i],f:[x20]}],style:{'${symbolSelector}':{r:[_,_,x30,x32]}}},tt:{d:500,a:y,data:[["eid12",d,0,0,"easeInOutQuad",e36,b,b],["eid13",d,500,0,"easeInOutQuad",e36,b,i],["eid11",o,0,500,"easeInOutQuad",e36,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("CMPAGENDA");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${btnEducacao}","click",function(sym,e){var content=EC.loadComposition("educacao.html",sym.getSymbol("content"));content.done(function(comp){var stage=comp.getStage();$('iframe').contents().find('a').click(function(event){event.preventDefault();window.open($(this).attr('href'),'_system');console.log($(this).attr('href'));return false;});});});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({load:["css/style.css"],complete:function(){EC.debug("edge common loaded","edgetools")}});sym.$('fader').hide();sym.$('fader').fadeOut(2000,function(){sym.$('fader').hide();});$('\
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
          body, html{\
           overflow: hidden;\
          \
          \
          }\
          </style>\
         ').appendTo("head");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnJogo}","click",function(sym,e){var content=EC.loadComposition("jogo.html",sym.getSymbol("content"));content.done(function(comp){var stage=comp.getStage();$('iframe').contents().find('a').click(function(event){event.preventDefault();window.open($(this).attr('href'),'_system');console.log($(this).attr('href'));return false;});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnContactos}","click",function(sym,e){var content=EC.loadComposition("contactos.html",sym.getSymbol("content"));content.done(function(comp){var stage=comp.getStage();$('iframe').contents().find('a').click(function(event){event.preventDefault();window.open($(this).attr('href'),'_system');console.log($(this).attr('href'));return false;});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnDias}","click",function(sym,e){var content=EC.loadComposition("dias.html",sym.getSymbol("content"));content.done(function(comp){var stage=comp.getStage();$('iframe').contents().find('a').click(function(event){event.preventDefault();window.open($(this).attr('href'),'_system');console.log($(this).attr('href'));return false;});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnSugestoes}","click",function(sym,e){var content=EC.loadComposition("sugestoes.html",sym.getSymbol("content"));content.done(function(comp){var stage=comp.getStage();$('iframe').contents().find('a').click(function(event){event.preventDefault();window.open($(this).attr('href'),'_system');console.log($(this).attr('href'));return false;});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnActividade}","click",function(sym,e){var content=EC.loadComposition("actividade.html",sym.getSymbol("content"));content.done(function(comp){var stage=comp.getStage();$('iframe').contents().find('a').click(function(event){event.preventDefault();window.open($(this).attr('href'),'_system');console.log($(this).attr('href'));return false;});});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'content'
(function(symbolName){})("content");
//Edge symbol end:'content'

//=========================================================

//Edge symbol: 'fadeIn'
(function(symbolName){})("fadeIn");
//Edge symbol end:'fadeIn'
})})(AdobeEdge.$,AdobeEdge,"CMPAGENDA");