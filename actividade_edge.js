
(function(compId){var _=null,y=true,n=false,x11='break-word',x28='none solid rgb(80, 77, 76)',x9='700',x65='rgb(0, 0, 0)',b='block',e53='${ilustAnimal}',x43='rgba(255,255,255,1.00)',d='display',i='none',e52='${ilustGestaoArvoredo}',x5='rgba(255,255,255,0.70)',e49='${ilustEspacosVerdes}',x4='rgba(236,234,222,1.00)',e66='${Rectangle}',x62='auto',e51='${ilustMobilidade}',x60='900px',x44='rgba(255,255,255,1)',x27='400',e45='${mapaEquipamentos}',xc='rgba(0,0,0,1)',x61='400px',x1='6.0.0',x12='nowrap',x2='5.0.0',x24='rgba(0,0,0,0)',x64='Rectangle',e47='${ilustRuidoMapa}',g='image',e55='${ilustQualidadeAr}',e48='${ilustEspacosVerdesLegenda}',x='text',m='rect',x7='11',p='px',e54='${ilustestruturaEcologica}',o='opacity',x63='1',e58='${ilustQualidadeArEscala}',x59='0px',l='normal',e57='${ilustBiodiversidade}',x8='Locator, Geneva, Verdana, sans-serif',e56='${ilustResiduos}',e50='${ilustBandeiraAzul}',x10='none solid rgb(0, 0, 0)',e46='${ilustRuido}',x3='6.0.0.400';var g29='mapaEquipamentos.svg',g25='iconActividade.svg',g35='ilustQualidadeAr.svg',g37='ilustMobilidade.svg',g42='ilustBandeiraAzul.svg',g36='ilustQualidadeArEscala.svg',g31='ilustBiodiversidade.svg',g30='ilustAnimal.svg',g33='iconRuidoMapa.svg',g34='ilustestruturaEcologica.svg',g38='ilustEspacosVerdes.svg',g41='ilustGestaoArvoredo.svg',g40='ilustResiduos.svg',g39='ilustEspacosVerdesLegenda.svg',g32='ilustRuido.svg';var s17="Alterações Climáticas",s22="Gestão Arvoredo",s19="Estrutura Ecológica",s14="Linhas de Água/Bandeira Azul",s15="Ruído - Reclamações e FAQs",s16="Ruído - Gestão",s6="Bem-Estar Animal",s23="Biodiversidade",s26="SElleccione a actividade no menu lateral.",s21="Espaços Verdes",s13="Mobilidade",s18="Qualidade do Ar",s20="Resíduos";var im='images/',aud='media/',vid='media/',js='js/',fonts={'Locator, Geneva, Verdana, sans-serif':'<link rel=\"stylesheet\" type=\"text/css\" href=\"fonts/Locator-Regular/font.css\">'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["edge_includes/jquery-2.1.1.min.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'bgIndex3',t:m,r:['110px','161px','676px','412px','auto','auto'],br:["17px","17px","17px","17px 17px"],f:[x4],s:[0,xc,i]},{id:'Rectangle',t:m,r:['60px','224px','165px','291px','auto','auto'],br:["16px","16px","16px","16px 16px"],f:[x5],s:[0,xc,i]},{id:'btns',t:'group',r:['66','230','157','277','auto','auto'],c:[{id:'btnAnimal',t:x,r:['0px','266px','auto','auto','auto','auto'],cu:'pointer',text:s6,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnMobilidade',t:x,r:['0px','242px','auto','auto','auto','auto'],cu:'pointer',text:s13,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnAguaBandeira',t:x,r:['0px','218px','auto','auto','auto','auto'],cu:'pointer',text:s14,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnRuidoReclamacoes',t:x,r:['0px','193px','auto','auto','auto','auto'],cu:'pointer',text:s15,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnRuidoGestao',t:x,r:['0px','169px','auto','auto','auto','auto'],cu:'pointer',text:s16,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnAlteracoesClimaticas',t:x,r:['0px','145px','auto','auto','auto','auto'],cu:'pointer',text:s17,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnQualidadeAr',t:x,r:['0px','121px','auto','auto','auto','auto'],cu:'pointer',text:s18,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnEstrutura',t:x,r:['0px','97px','auto','auto','auto','auto'],cu:'pointer',text:s19,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnResiduos',t:x,r:['0px','73px','auto','auto','auto','auto'],cu:'pointer',text:s20,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnEspaco',t:x,r:['0px','48px','auto','auto','auto','auto'],cu:'pointer',text:s21,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnGestao',t:x,r:['0px','24px','auto','auto','auto','auto'],cu:'pointer',text:s22,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]},{id:'btnBiodiversidade',t:x,r:['0px','0px','auto','auto','auto','auto'],cu:'pointer',text:s23,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1.00)",x9,x10,l,x11,x12]}]},{id:'iconActividade',t:g,r:['23px','260px','37px','33px','auto','auto'],f:[x24,im+g25,'0px','0px']},{id:'actividadeText',t:x,r:['256px','230px','265px','319px','auto','auto'],overflow:'auto',text:s26,align:"left",n:[x8,[x7,p],"rgba(80,77,76,1)",x27,x28,l,x11,l]},{id:'mapaEquipamentos',v:i,t:g,r:['535px','356px','349px','164px','auto','auto'],f:[x24,im+g29,'0px','0px']},{id:'ilustAnimal',v:i,t:g,r:['543px','305px','306px','226px','auto','auto'],f:[x24,im+g30,'0px','0px']},{id:'ilustBiodiversidade',v:b,t:g,r:['541px','229px','293px','319px','auto','auto'],f:[x24,im+g31,'0px','0px']},{id:'ilustRuido',v:i,t:g,r:['539px','230px','323px','319px','auto','auto'],f:[x24,im+g32,'0px','0px']},{id:'ilustRuidoMapa',v:i,t:g,r:['538px','293px','358px','212px','auto','auto'],f:[x24,im+g33,'0px','0px']},{id:'ilustestruturaEcologica',v:i,t:g,r:['541px','272px','348px','213px','auto','auto'],f:[x24,im+g34,'0px','0px']},{id:'ilustQualidadeAr',v:i,t:g,r:['541','313px','323px','195px','auto','auto'],f:[x24,im+g35,'0px','0px']},{id:'ilustQualidadeArEscala',v:i,t:g,r:['541','259px','323px','30px','auto','auto'],f:[x24,im+g36,'0px','0px']},{id:'ilustMobilidade',v:i,t:g,r:['542px','272px','346px','214px','auto','auto'],f:[x24,im+g37,'0px','0px']},{id:'ilustEspacosVerdes',v:i,t:g,r:['534px','388px','346px','158px','auto','auto'],f:[x24,im+g38,'0px','0px']},{id:'ilustEspacosVerdesLegenda',v:i,t:g,r:['534px','254px','348px','126px','auto','auto'],f:[x24,im+g39,'0px','0px']},{id:'ilustResiduos',v:i,t:g,r:['559px','234px','219px','319px','auto','auto'],f:[x24,im+g40,'0px','0px']},{id:'ilustGestaoArvoredo',v:i,t:g,r:['541','248px','328px','254px','auto','auto'],f:[x24,im+g41,'0px','0px']},{id:'ilustBandeiraAzul',v:i,t:g,r:['541','266px','337px','244px','auto','auto'],f:[x24,im+g42,'0px','0px']},{id:'fader',t:m,r:['0px','0px','900px','600px','auto','auto'],f:[x43],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','900px','600px','auto','auto'],overflow:'hidden',f:[x44]}}},tt:{d:0,a:y,data:[["eid14",d,0,0,"linear",e45,i,i],["eid15",d,0,0,"linear",e46,i,i],["eid18",d,0,0,"linear",e47,i,i],["eid20",d,0,0,"linear",e48,i,i],["eid21",d,0,0,"linear",e49,i,i],["eid29",d,0,0,"linear",e50,i,i],["eid24",d,0,0,"linear",e51,i,i],["eid28",d,0,0,"linear",e52,i,i],["eid16",d,0,0,"linear",e53,i,i],["eid27",d,0,0,"linear",e54,i,i],["eid26",d,0,0,"linear",e55,i,i],["eid19",d,0,0,"linear",e56,i,i],["eid17",d,0,0,"linear",e57,b,b],["eid25",d,0,0,"linear",e58,i,i]]}},"fadeIn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x59,x59,x60,x61,x62,x62],t:m,o:x63,id:x64,s:[0,x65,i],v:b,f:[x43]}],style:{'${symbolSelector}':{r:[_,_,x60,x61]}}},tt:{d:500,a:y,data:[["eid12",d,0,0,"easeInOutQuad",e66,b,b],["eid13",d,500,0,"easeInOutQuad",e66,b,i],["eid11",o,0,500,"easeInOutQuad",e66,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-191321653");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("ilustBiodiversidade").fadeIn();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/biodiversidade.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});sym.$('fader').fadeOut(function(){sym.$('fader').hide();});$('\
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
Symbol.bindElementAction(compId,symbolName,"${btnBiodiversidade}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeIn();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/biodiversidade.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnGestao}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeIn();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/arvoredo.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnEspaco}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeIn();sym.$("ilustEspacosVerdesLegenda").fadeIn();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/espacosVerdes.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnResiduos}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeIn();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/residuos.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnEstrutura}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeIn();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/estrutura.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnQualidadeAr}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeIn();sym.$("ilustQualidadeArEscala").fadeIn();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/qualidadeAr.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnAlteracoesClimaticas}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/alteracoesClimaticas.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnRuidoGestao}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeIn();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/ruidoGestao.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnRuidoReclamacoes}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeIn();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/ruidoFaqs.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnAguaBandeira}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeIn();sym.$("mercadosTabela").fadeOut();var targ='html_includes/linhasAgua.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnMobilidade}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeOut();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeIn();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/mobilidade.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btnAnimal}","click",function(sym,e){sym.$("ilustBiodiversidade").fadeOut();sym.$("ilustAnimal").fadeIn();sym.$("ilustResiduos").fadeOut();sym.$("ilustRuido").fadeOut();sym.$("ilustRuidoMapa").fadeOut();sym.$("mapaEquipamentos").fadeOut();sym.$("ilustestruturaEcologica").fadeOut();sym.$("ilustQualidadeAr").fadeOut();sym.$("ilustQualidadeArEscala").fadeOut();sym.$("ilustMobilidade").fadeOut();sym.$("ilustEspacosVerdes").fadeOut();sym.$("ilustEspacosVerdesLegenda").fadeOut();sym.$("ilustGestaoArvoredo").fadeOut();sym.$("ilustBandeiraAzul").fadeOut();sym.$("mercadosTabela").fadeOut();var targ='html_includes/animal.html';sym.$("actividadeText").fadeOut(function(){$.ajax({url:targ,success:function(data){sym.$("actividadeText").html(data);sym.$("actividadeText").fadeIn();}});});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fadeIn'
(function(symbolName){})("fadeIn");
//Edge symbol end:'fadeIn'
})})(AdobeEdge.$,AdobeEdge,"EDGE-191321653");