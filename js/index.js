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
            console.log(data.test);
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
    
    cordova.plugins.notification.local.schedule({
        id: 1,
        text: 'Test Message 1',
        at: moment().add(5, 'seconds').toDate(),
        sound: null
    });
}