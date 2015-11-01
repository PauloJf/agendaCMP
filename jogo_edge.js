
(function(compId){var _=null,y=true,n=false,x13='break-word',x43='lixoOleo',x32='rgb(0, 0, 0)',x42='65px',x37='89px',b='block',x4='rgba(255,255,255,1.00)',x36='144px',i='none',x72='rgba(192,192,192,1)',x3='6.0.0.400',x50='16px',e35='${Rectangle}',x31='auto',x77='447px',x29='900px',x27='rgba(255,255,255,1)',x12='400',xc='rgba(0,0,0,1)',x30='400px',x1='6.0.0',x14='nowrap',x2='5.0.0',x51='17px',x5='rgba(0,0,0,0)',x33='Rectangle',g='image',po='center',x41='67px',x46='63px',x34='1',x45='5px',x78='293px',x39='7px',x59='lixoPapel',x='text',x68='13px',x71='solid',m='rect',x28='0px',x74='40px',x73='62px',x70='RoundRect',x69='13px 13px',x67='283px',x66='437px',x38='rgba(238,9,9,1.00)',x48='lixoVidro',p='px',o='opacity',e65='${lixoPapel}',d='display',x57='74px',x47='88px',x52='58px',x61='true',l='normal',e62='${lixoVidro}',x58='66px',x56='22px',x75='Text',x53='68px',x11='Locator, Geneva, Verdana, sans-serif',x10='24',x40='23px',e63='${lixoOleo}',e64='${lixoEmbalagem}',x54='lixoEmbalagem';var g6='jogoNuvens.svg',g55='lixoEmbalagem.svg',g8='bidaoOleo.svg',g44='lixoOleo.svg',g25='Sound%20design%20multimedia%20accent%20error%20message%20negative%20chime%20beep%20high%20tech%2011_SFXBible_ss03518.mp3',g18='bidaoPapel.svg',g21='embalagens.svg',g22='papel.svg',g17='bidaoEmbalagens.svg',g23='sacoLixo.svg',g24='Dig%20Dug%20game%20over_AOS02031.mp3',g16='bidaoVidro.svg',g19='oleos.svg',g60='lixoPapel.svg',g20='vidro.svg',g7='jogoBg.svg',g49='lixovidro.svg',g26='FOLEY%20COIN%20DIMES%20DROP%20DRAWER%20COIN%20DISPENSOR%2001.mp3';var s9="<p style=\"margin: 0px;\">​Pontuação</p>",s76="<p style=\"margin: 0px;\">​<span style=\"font-size: 108px;\">Ups...</span> </p><p style=\"margin: 0px;\">Não conseguiste reciclar o lixo</p><p style=\"margin: 0px;\">nos recepientes certos :(</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Queres tentar novamente?&nbsp;</p>",s15="<p style=\"margin: 0px;\">0</p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={'Locator, Geneva, Verdana, sans-serif':'<link rel=\"stylesheet\" type=\"text/css\" href=\"fonts/Locator-Regular/font.css\">'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["edge_includes/jquery-2.1.1.min.js","edge_includes/jquery-ui-1.10.4.min.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'fader',t:m,r:['0px','0px','900px','600px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'jogoNuvens',t:g,r:['375px','222px','451px','248px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'jogoBg',t:g,r:['182px','431px','547px','140px','auto','auto'],f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['1.49023']]},{id:'bidaoOleo',t:g,r:['430px','343px','88px','123px','auto','auto'],f:[x5,im+g8,'0px','0px']},{id:'Group',t:'group',r:['703px','516px','138','25','auto','auto'],c:[{id:'Text2',t:x,r:['0px','0px','auto','auto','auto','auto'],cu:'default',text:s9,align:"left",n:[x11,[x10,p],xc,x12,i,l,x13,x14],ts:["","","","",i]},{id:'pontosTxt',t:x,r:['123px','0px','auto','auto','auto','auto'],cu:'default',text:s15,align:"left",n:[x11,[x10,p],xc,x12,i,l,x13,x14],ts:["","","","",i]}]},{id:'bidaoVidro',t:g,r:['535px','349px','88px','117px','auto','auto'],f:[x5,im+g16,'0px','0px']},{id:'bidaoEmbalagens',t:g,r:['622px','349px','88px','117px','auto','auto'],f:[x5,im+g17,'0px','0px']},{id:'bidaoPapel',t:g,r:['710px','349px','88px','117px','auto','auto'],f:[x5,im+g18,'0px','0px']},{id:'oleos',t:g,r:['401px','474px','109px','33px','auto','auto'],f:[x5,im+g19,'0px','0px']},{id:'vidro',t:g,r:['552px','472px','47px','9px','auto','auto'],f:[x5,im+g20,'0px','0px']},{id:'embalagens',t:g,r:['612px','467px','107px','9px','auto','auto'],f:[x5,im+g21,'0px','0px']},{id:'papel',t:g,r:['724px','472px','59px','19px','auto','auto'],f:[x5,im+g22,'0px','0px']},{id:'lixo',symbolName:'lixo',t:m,r:['96px','177px','74','88','auto','auto']},{id:'sacoLixo',t:g,r:['88px','453px','67px','82px','auto','auto'],f:[x5,im+g23,'0px','0px']},{id:'sacoLixoCopy',t:g,r:['137px','453px','67px','82px','auto','auto'],f:[x5,im+g23,'0px','0px'],tf:[[],[],[],['-1']]},{id:'gameover',symbolName:'gameover',t:m,r:['241','225px','447','293','auto','auto']},{id:'gameover2',v:i,t:'audio',tag:'audio',r:['972','400','320px','45px','auto','auto'],sr:[aud+g24],pr:'auto'},{id:'error',v:i,t:'audio',tag:'audio',r:['972','400','320px','45px','auto','auto'],sr:[aud+g25],pr:'auto'},{id:'trash',v:i,t:'audio',tag:'audio',r:['972','400','320px','45px','auto','auto'],sr:[aud+g26],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x27]}}},tt:{d:4000,a:y,data:[]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x28,x28,x29,x30,x31,x31],t:m,s:[0,x32,i],id:x33,o:x34,v:b,f:[x4]}],style:{'${symbolSelector}':{r:[_,_,x29,x30]}}},tt:{d:500,a:y,data:[["eid11",o,0,500,"easeInOutQuad",e35,'1','0'],["eid12",d,0,0,"easeInOutQuad",e35,b,b],["eid13",d,500,0,"easeInOutQuad",e35,b,i]]}},"part":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,id:x33,s:[0,xc,i],r:[x28,x28,x36,x37,x31,x31],f:[x38]}],style:{'${symbolSelector}':{r:[_,_,x36,x37]}}},tt:{d:0,a:y,data:[]}},"lixo":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x39,x40,x41,x42,x31,x31],id:x43,t:g,v:b,f:[x5,im+g44,x28,x28]},{r:[x45,x28,x46,x47,x31,x31],id:x48,t:g,v:i,f:[x5,im+g49,x28,x28]},{r:[x50,x51,x52,x53,x31,x31],id:x54,t:g,v:i,f:[x5,im+g55,x28,x28]},{r:[x28,x56,x57,x58,x31,x31],id:x59,t:g,v:i,f:[x5,im+g60,x28,x28]}],style:{'${symbolSelector}':{isStage:x61,r:[undefined,undefined,x57,x47]}}},tt:{d:4000,a:y,l:{"oleo":0,"vidro":1000,"embalagem":2000,"papel":3000},data:[["eid18",d,1000,0,"linear",e62,i,b],["eid19",d,2000,0,"linear",e62,b,i],["eid16",d,0,0,"linear",e63,b,b],["eid17",d,1000,0,"linear",e63,b,i],["eid20",d,2000,0,"linear",e64,i,b],["eid21",d,3000,0,"linear",e64,b,i],["eid31",d,3000,0,"linear",e65,i,b],["eid25",d,4000,0,"linear",e65,b,i]]}},"gameover":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x28,x28,x66,x67,x31,x31],br:[x68,x68,x68,x69],id:x70,s:[5,xc,x71],t:m,f:[x72]},{r:[x73,x74,x31,x31,x31,x31],n:[x11,[24,''],xc,l,i,'',x13,x14],id:x75,text:s76,align:po,t:x}],style:{'${symbolSelector}':{isStage:x61,r:[undefined,undefined,x77,x78]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-191321653");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var mouseEventTypes={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};for(originalType in mouseEventTypes){document.addEventListener(originalType,function(originalEvent){if(originalEvent.type=='click')
return;if(originalEvent.type!='touchstart'&&originalEvent.type!='touchend'){originalEvent.preventDefault();}
event=document.createEvent("MouseEvents");touch=originalEvent.changedTouches[0];event.initMouseEvent(mouseEventTypes[originalEvent.type],true,true,window,0,touch.screenX,touch.screenY,touch.clientX,touch.clientY,touch.ctrlKey,touch.altKey,touch.shiftKey,touch.metaKey,0,null);originalEvent.target.dispatchEvent(event);event.preventDefault();});}
pontos=10;dif=3000;sym.$("gameover").hide();sym.$("pontosTxt").html(pontos);sym.$("lixo").draggable({start:function(event,ui){sym.$("lixo").stop(true);},stop:function(event,ui){sym.$("lixo").stop(true);sym.$("lixo").animate({left:96,top:177},250,function(){dif*=0.9;sym.dropLixo()});}});sym.dropLixo=function(){sym.$("lixo").animate({top:432},dif,function(){dif=Math.max(dif*0.9,100);pontos--
sym.getSymbol("lixo").stop(getRandomInt(0,3)*1000);sym.$('lixo').css({'left':96,'top':177});sym.$("pontosTxt").html(pontos);if(pontos==0){alert('Gamo Over');sym.$("gameover").show();sym.$("gameover2")[0].play();sym.$('lixo').draggable("destroy");}else{sym.$("error")[0].play();sym.dropLixo()}});}
sym.dropLixo();sym.$("bidaoPapel").droppable({drop:function(event,ui){nome=$(ui.draggable).attr('id').split("_")[$(ui.draggable).attr('id').split("_").length-1]
if(sym.getSymbol($(ui.draggable)).getPosition()==3000){pontos++
sym.$("trash")[0].play();$(ui.draggable).fadeOut();}else{pontos--
sym.$("error")[0].play();$(ui.draggable).fadeOut();}
sym.getSymbol("lixo").stop(getRandomInt(0,3)*1000);$(ui.draggable).css('left',96);$(ui.draggable).css('top',177);$(ui.draggable).fadeIn();sym.$("pontosTxt").html(pontos);if(pontos==0){alert('Gamo Over')
sym.$("gameover").show();sym.$("gameover2")[0].play();sym.$('lixo').draggable("destroy");}}});sym.$("bidaoEmbalagens").droppable({drop:function(event,ui){nome=$(ui.draggable).attr('id').split("_")[$(ui.draggable).attr('id').split("_").length-1]
if(sym.getSymbol($(ui.draggable)).getPosition()==2000){pontos++
sym.$("trash")[0].play();$(ui.draggable).fadeOut();}else{pontos--
sym.$("error")[0].play();$(ui.draggable).fadeOut();}
sym.getSymbol("lixo").stop(getRandomInt(0,3)*1000);$(ui.draggable).css('left',96);$(ui.draggable).css('top',177);$(ui.draggable).fadeIn();sym.$("pontosTxt").html(pontos);if(pontos==0){alert('Gamo Over')
sym.$("gameover").show();sym.$("gameover2")[0].play();sym.$('lixo').draggable("destroy");}}});sym.$("bidaoVidro").droppable({drop:function(event,ui){nome=$(ui.draggable).attr('id').split("_")[$(ui.draggable).attr('id').split("_").length-1]
if(sym.getSymbol($(ui.draggable)).getPosition()==1000){pontos++
sym.$("trash")[0].play();$(ui.draggable).fadeOut();}else{pontos--
sym.$("error")[0].play();$(ui.draggable).fadeOut();}
sym.getSymbol("lixo").stop(getRandomInt(0,3)*1000);$(ui.draggable).css('left',96);$(ui.draggable).css('top',177);$(ui.draggable).fadeIn();sym.$("pontosTxt").html(pontos);if(pontos==0){alert('Gamo Over')
sym.$("gameover").show();sym.$("gameover2")[0].play();sym.$('lixo').draggable("destroy");}}});sym.$("bidaoOleo").droppable({drop:function(event,ui){nome=$(ui.draggable).attr('id').split("_")[$(ui.draggable).attr('id').split("_").length-1]
if(sym.getSymbol($(ui.draggable)).getPosition()==0){pontos++
sym.$("trash")[0].play();$(ui.draggable).fadeOut();}else{pontos--
sym.$("error")[0].play();$(ui.draggable).fadeOut();}
sym.getSymbol("lixo").stop(getRandomInt(0,3)*1000);$(ui.draggable).css('left',96);$(ui.draggable).css('top',177);$(ui.draggable).fadeIn();sym.$("pontosTxt").html(pontos);if(pontos==0){alert('Gamo Over')
sym.$("gameover").show();sym.$("gameover2")[0].play();sym.$('lixo').draggable("destroy");}}});function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
var gui=require('nw.gui');$(document).on('click','a',function(event){event.preventDefault();window.open($(this).attr('href'),'_system');return false;});sym.$('fader').fadeOut(function(){sym.$('fader').hide();});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${gameover}","click",function(sym,e){pontos=10;dif=3000;sym.dropLixo()
sym.$("pontosTxt").html(pontos);sym.$("gameover").fadeOut();});
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

//=========================================================

//Edge symbol: 'lixo'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("lixo");
//Edge symbol end:'lixo'

//=========================================================

//Edge symbol: 'gameover'
(function(symbolName){})("gameover");
//Edge symbol end:'gameover'
})})(AdobeEdge.$,AdobeEdge,"EDGE-191321653");