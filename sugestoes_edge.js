
(function(compId){var _=null,y=true,n=false,x7='break-word',x8='nowrap',x2='5.0.0',o='opacity',x1='5.0.1',x15='rgb(0, 0, 0)',x17='1',b='block',x6='Arial, Helvetica, sans-serif',d='display',l='normal',e18='${Rectangle}',x14='auto',x16='Rectangle',m='rect',x='text',x12='900px',x10='rgba(255,255,255,1)',x11='0px',x5='24',x9='rgba(255,255,255,1.00)',x3='5.0.1.386',xc='rgba(0,0,0,1)',x13='400px',i='none';var s4="Section";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Text',t:x,r:['410px','187px','auto','auto','auto','auto'],text:s4,n:[x6,[x5,],xc,l,i,"",x7,x8]},{id:'fader',t:m,r:['1px','0px','900px','600px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:0,a:y,data:[]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x11,x11,x12,x13,x14,x14],t:m,s:[0,x15,i],id:x16,o:x17,v:b,f:[x9]}],style:{'${symbolSelector}':{r:[_,_,x12,x13]}}},tt:{d:500,a:y,data:[["eid12",d,0,0,"easeInOutQuad",e18,b,b],["eid13",d,500,0,"easeInOutQuad",e18,b,i],["eid11",o,0,500,"easeInOutQuad",e18,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-191321653");
console.log(window.process);(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){function notifyMe(Msg){var notification=new Notification(Msg);}
notifyMe("Hi there!");var OSName="Unknown OS";if(navigator.appVersion.indexOf("Win")!=-1)OSName="Windows";if(navigator.appVersion.indexOf("Mac")!=-1)OSName="MacOS";if(navigator.appVersion.indexOf("X11")!=-1)OSName="UNIX";if(navigator.appVersion.indexOf("Linux")!=-1)OSName="Linux";sym.$('fader').fadeOut(function(){sym.$('fader').hide();});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fadeIn'
(function(symbolName){})("fadeIn");
//Edge symbol end:'fadeIn'
})})(AdobeEdge.$,AdobeEdge,"EDGE-191321653");