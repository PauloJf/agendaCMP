/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function initPushwoosh() {
    //alert('initpush');
	var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
	if(device.platform == "Android")
	{
		registerPushwooshAndroid();
        
        $('a').on('click', 'a[href^="http"]', function (e) {
            var url = $(this).attr('href');
            //alert($(this).attr('href'));
            navigator.app.loadUrl(url, { openExternal: true });
            e.preventDefault();
        });
	}

	if(device.platform == "iPhone" || device.platform == "iOS")
	{
		registerPushwooshIOS();
        
        $('a').on('click', 'a[href^="http"]', function (e) {
            var url = $(this).attr('href');
            window.open(url, '_system');
            e.preventDefault();
        });
	}

	if (device.platform == "Win32NT") {
	    registerPushwooshWP();
	}

}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        initPushwoosh();
        
        cordova.plugins.notification.local.on('schedule', function (notification) {
            console.log('onschedule', arguments);
            // showToast('scheduled: ' + notification.id);
        });

        cordova.plugins.notification.local.on('update', function (notification) {
            console.log('onupdate', arguments);
            // showToast('updated: ' + notification.id);
        });

        cordova.plugins.notification.local.on('trigger', function (notification) {
            console.log('ontrigger', arguments);
        });

        cordova.plugins.notification.local.on('click', function (notification) {
            console.log('onclick', arguments);
            data = JSON.parse(arguments[0].data);
            console.log(data.url);
            if(data.url){
                window.open(url, '_system');
            } else {
                console.log('No data url found');
            }
            showToast('clicked: ' + notification.id);
        });

        cordova.plugins.notification.local.on('cancel', function (notification) {
            console.log('oncancel', arguments);
            // showToast('canceled: ' + notification.id);
        });

        cordova.plugins.notification.local.on('clear', function (notification) {
            console.log('onclear', arguments);
            showToast('cleared: ' + notification.id);
        });

        cordova.plugins.notification.local.on('cancelall', function () {
            console.log('oncancelall', arguments);
            // showToast('canceled all');
        });

        cordova.plugins.notification.local.on('clearall', function () {
            console.log('onclearall', arguments);
            // showToast('cleared all');
        });
        
        scheduleNotifications()
        
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function scheduleNotifications(){
    //moment('2015-09-12 17:30').toDate()
    
    cordova.plugins.notification.local.hasPermission(function (granted) {
        console.log('Permission has been granted: ' + granted);
    });
    //Default hour for notifications, changes the hour on all the notifications
    var hour = '10:00';
    var titleApp = 'Agenda Ambiental';
    var scheduled = [{
        id: 1,
        title: titleApp,
        text: 'Hoje é o dia Nacional da Água, participe no AquaPorto este fim de semana',
        at: moment('2015-10-01 '+hour).toDate(),
        data: {'url':'http://pavilhaodaagua.blogspot.pt/'}
    }, {
        id: 2,
        title: titleApp,
        text: 'Hoje é dia do animal. Adote um animal de companhia no Canil Municipal',
        at: moment('2015-10-04 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/ambiente/canil-municipal-servico-de-profilaxia-da-raiva'}
    }, {
        id: 3,
        title: titleApp,
        text: 'Hoje há mudança de hora. Não se esqueça de atrasar o relógio!',
        at: moment('2015-10-25 '+hour).toDate(),
        data: {'url':'http://oal.ul.pt/hora-legal/'}
    }, {
        id: 4,
        title: titleApp,
        text: 'Sábado, 31/10 há "Ambiente em Família" no CEA do Núcleo Rural/Parque da Cidade',
        at: moment('2015-10-28 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 5,
        title: titleApp,
        text: 'Hoje é o Dia das Bruxas: aproveite para fazer deliciosa compota de abóbora',
        at: moment('2015-10-31 '+hour).toDate(),
        data: {'inapp':'ecoSugesFrascosVidro'}
    }, {
        id: 6,
        title: titleApp,
        text: 'Sábado, 07/11 há "Ambiente em Família" no CEA Jardins Palácio cristal',
        at: moment('2015-11-04 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 7,
        title: titleApp,
        text: 'Hoje é dia da floresta autóctone: conhece o projeto Futuro 100.000 árvores?',
        at: moment('2015-11-23 '+hour).toDate(),
        data: {'url':'http://embaixadadafloresta.blogspot.pt/'}
    }, {
        id: 8,
        title: titleApp,
        text: 'Sábado, 28/11 há "Ambiente em Família" no CEA da Quinta do Covelo',
        at: moment('2015-11-25 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 9,
        title: titleApp,
        text: 'Sábado, 05/12 há "Ambiente em Família" no CEA Jardins Palácio Cristal',
        at: moment('2015-12-02 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 10,
        title: titleApp,
        text:'Sábado, 19/12 há "Ambiente em Família" no CEA da Quinta do Covelo',
        at: moment('2015-12-16 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 11,
        title: titleApp,
        text: 'Solstício de Inverno - hoje é a noite mais longa do ano.',
        at: moment('2015-12-21 '+hour).toDate(),
        data: {'url':'http://pt.wikipedia.org/wiki/Solst%C3%ADcio'}
    }, {
        id: 12,
        title: titleApp,
        text: 'Feliz Natal!',
        at: moment('2015-12-23 '+hour).toDate()
    }, {
        id: 13,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família" ',
        at: moment('2016-01-05 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 14,
        title: titleApp,
        text: 'Sabia que 2016 é o ano internacional das leguminosas?',
        at: moment('2016-01-12 '+hour).toDate(),
        data: {'url':'http://www.fao.org/pulses-2016/en/'}
    }, {
        id: 15,
        title: titleApp,
        text: 'Já se inscreveu nas oficinas Sazonais de Carnaval? www.cm-porto.pt',
        at: moment('2016-01-22 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 16,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família"',
        at: moment('2016-01-25 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 17,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família"',
        at: moment('2016-02-01 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 18,
        title: titleApp,
        text: 'Hoje é o dia Mundial das Zonas Húmidas. Conhece os "Charcos com Vida"?',
        at: moment('2016-02-05 '+hour).toDate(),
        data: {'url':'http://www.charcoscomvida.org/'}
    }, {
        id: 19,
        title: titleApp,
        text: 'Conheça o programa de oficinas sazonais páscoa/primavera www.cm-porto.pt',
        at: moment('2016-02-11 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 20,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família"',
        at: moment('2016-02-22 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 21,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família"',
        at: moment('2016-02-29 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 22,
        title: titleApp,
        text: 'A exposição “Porto Cidade das Camélias” é já este fim de semana.',
        at: moment('2016-03-01 '+hour).toDate()
    }, {
        id: 23,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família"',
        at: moment('2016-03-14 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 24,
        title: titleApp,
        text: 'Hoje é o Equinócio de Primavera - o dia e a noite têm a mesma duração.',
        at: moment('2016-03-20 '+hour).toDate(),
        data: {'url':'http://pt.wikipedia.org/wiki/Equin%C3%B3cio'}
    }, {
        id: 25,
        title: titleApp,
        text: 'Hoje é dia mundial da Floresta. Visite um parque ou jardim perto de si.',
        at: moment('2016-03-21 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/arvoredo-alertas'}
    }, {
        id: 26,
        title: titleApp,
        text: 'Hoje é o dia Mundial da Água. Poupe este recurso precioso!',
        at: moment('2016-03-22 '+hour).toDate(),
        data: {'url':'http://www.pavilhaodaagua.com/'}
    }, {
        id: 27,
        title: titleApp,
        text: 'Hoje há mudança de hora. Não se esqueça de adiantar o relógio!',
        at: moment('2016-03-27 '+hour).toDate(),
        data: {'url':'http://oal.ul.pt/hora-legal/mudanca-da-hora/#seg'}
    }, {
        id: 28,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família"',
        at: moment('2016-03-28 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 29,
        title: titleApp,
        text: 'Hoje é dia internacional das aves. Coloque um abrigo no seu jardim.',
        at: moment('2016-04-01 '+hour).toDate(),
        data: {'url':'http://www.spea.pt/pt/'}
    }, {
        id: 30,
        title: titleApp,
        text: 'Conhece a feira de produtos de agricultura biológica do Núcleo Rural do Parque da Cidade?',
        at: moment('2016-04-13 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 31,
        title: titleApp,
        text: 'Hoje é dia mundial da terra.',
        at: moment('2016-04-22 '+hour).toDate(),
        data: {'url':'http://www.earthday.org/takeaction/index.html'}
    }, {
        id: 32,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em Família" ',
        at: moment('2016-04-25 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 33,
        title: titleApp,
        text: 'Conheça o programa das oficinas sazonais de Verão',
        at: moment('2016-04-29 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 34,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família" no CEA da Quinta do Covelo ',
        at: moment('2016-05-02 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 35,
        title: titleApp,
        text: 'Já se inscreveu nas Oficinas Sazonais de Verão? ',
        at: moment('2016-05-13 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 36,
        title: titleApp,
        text: 'Hoje é dia Internacional dos anos 80 e 90! ',
        at: moment('2016-05-18 '+hour).toDate()
    }, {
        id: 37,
        title: titleApp,
        text: 'Não liberte espécies exóticas na Natureza. Hoje é Dia Mundial da Biodiversidade.',
        at: moment('2016-05-22 '+hour).toDate(),
        data: {'url':'http://www.cbd.int/idb '}
    }, {
        id: 38,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-05-23 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 39,
        title: titleApp,
        text: 'Apague a luz que já não precisa. Hoje é Dia Nacional da Energia. ',
        at: moment('2016-05-29 '+hour).toDate(),
        data: {'url':'http://www.adeporto.eu/'}
    }, {
        id: 40,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-05-30 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 41,
        title: titleApp,
        text: 'Dia Mundial do Ambiente, 5 junho. ',
        at: moment('2016-06-05 '+hour).toDate(),
        data: {'url':'http://www.apambiente.pt/index.php?ref=16&subref=90'}
    }, {
        id: 42,
        title: titleApp,
        text: 'Dê um mergulho numa das praias do Porto: hoje é dia dos Oceanos! ',
        at: moment('2016-06-08 '+hour).toDate(),
        data: {'url':'http://www.praiasdoporto.pt/'}
    }, {
        id: 43,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-06-13 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 44,
        title: titleApp,
        text: 'Não abandone o seu animal de estimação nas férias!',
        at: moment('2016-06-17 '+hour).toDate(),
        data: {'url':'http://www.arcadenoe.pt/article.php?id=288'}
    }, {
        id: 45,
        title: titleApp,
        text: 'Solstício de Verão. Hoje é o dia mais longo do ano',
        at: moment('2016-06-21 '+hour).toDate(),
        data: {'url':'http://pt.wikipedia.org/wiki/Solst%C3%ADcio '}
    }, {
        id: 46,
        title: titleApp,
        text: 'Na noite de S. João lembre-se: sardinha só maior de 11 cm',
        at: moment('2016-06-23 '+hour).toDate(),
        data: {'url':'http://www.dgpm.mam.gov.pt/Pages/Regua.aspx '}
    }, {
        id: 47,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-06-27 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 48,
        title: titleApp,
        text: 'De 9 a 12 de julho, não perca o Cidade+ nos Jardins do Palácio de Cristal',
        at: moment('2016-07-03 '+hour).toDate(),
        data: {'url':'http://cidademais.pt/site/'}
    }, {
        id: 49,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-07-25 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 50,
        title: titleApp,
        text: 'Hoje é dia Nacional da Conservação da Natureza',
        at: moment('2016-07-28 '+hour).toDate(),
        data: {'url':'http://www.icnf.pt/portal/agir/comemora/dia-conserv-nat'}
    }, {
        id: 51,
        title: titleApp,
        text: 'Aproveite o melhor do verão em segurança',
        at: moment('2016-08-03 '+hour).toDate(),
        data: {'url':'http://www.dgs.pt/saude-ambiental-calor/verao-em-seguranca.aspx'}
    }, {
        id: 52,
        title: titleApp,
        text: 'Faça do Sol um amigo!',
        at: moment('2016-08-10 '+hour).toDate(),
        data: {'url':'http://www.apcancrocutaneo.pt/index.php/prevencao/cuidados-a-ter'}
    }, {
        id: 53,
        title: titleApp,
        text: 'Participe nas atividades “Bandeira Azul” da sua praia',
        at: moment('2016-08-16 '+hour).toDate(),
        data: {'url':'http://www.abae.pt/BandeiraAzul/index.php?p=aea'}
    }, {
        id: 54,
        title: titleApp,
        text: 'Saiba mais sobre a radiação ultravioleta ',
        at: moment('2016-08-23 '+hour).toDate(),
        data: {'url':'https://www.ipma.pt/pt/enciclopedia/amb.atmosfera/uv/index.html'}
    }, {
        id: 55,
        title: titleApp,
        text: 'https://www.ipma.pt/pt/enciclopedia/amb.atmosfera/uv/index.html',
        at: moment('2016-08-26 '+hour).toDate(),
        data: {'url':'http://balcaovirtual.cm-porto.pt/PT/cidadaos/guiatematico/cid_ass/reutilizacaodelivrosescolares/Paginas/reutilizacao%20de%20livros%20escolares.aspx'}
    }, {
        id: 56,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-08-29 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 57,
        title: titleApp,
        text: 'Hoje é dia Mundial para a preservação da camada de ozono.',
        at: moment('2016-09-16 '+hour).toDate(),
        data: {'url':'http://www.apambiente.pt/index.php?ref=16&subref=83'}
    }, {
        id: 58,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-09-19 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }, {
        id: 59,
        title: titleApp,
        text: 'Deixe o carro em casa. Hoje é o dia Europeu sem carros.',
        at: moment('2016-09-22 '+hour).toDate(),
        data: {'url':'http://www.apambiente.pt/index.php?ref=19&subref=138&sub2ref=168'}
    }, {
        id: 60,
        title: titleApp,
        text: 'Hoje é o equinócio de Outono - o dia e a noite têm a mesma duração.',
        at: moment('2016-09-23 '+hour).toDate(),
        data: {'url':'http://pt.wikipedia.org/wiki/Equin%C3%B3cio'}
    }, {
        id: 61,
        title: titleApp,
        text: 'No próximo sábado há "Ambiente em família"',
        at: moment('2016-09-26 '+hour).toDate(),
        data: {'url':'http://www.cm-porto.pt/educacao-ambiental'}
    }];
    var i=scheduled.length;
    while(i--){
        if(moment().isAfter(scheduled[i].at)){
            scheduled.splice(i,1);
        }
    }
    cordova.plugins.notification.local.schedule(scheduled);
}