document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Mock device.platform property if not available
    if (!window.device) {
        window.device = { platform: 'Browser' };
    }

    handleExternalURLs();
    
    
    initPushwoosh();
}

function handleExternalURLs() {
    // Handle click events for all external URLs
    alert(device.platform.toUpperCase());
    if (device.platform.toUpperCase() === 'ANDROID') {
        $('a').on('click', 'a[href^="http"]', function (e) {
            var url = $(this).attr('href');
            //alert($(this).attr('href'));
            navigator.app.loadUrl(url, { openExternal: true });
            e.preventDefault();
        });
    }
    else if (device.platform.toUpperCase() === 'IOS') {
        $('a').on('click', 'a[href^="http"]', function (e) {
            var url = $(this).attr('href');
            window.open(url, '_system');
            e.preventDefault();
        });
    }
    else {
        // Leave standard behaviour
    }
}


function initPushwoosh()
{
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
    alert('pushwoosh');
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "AIzaSyBohYnARl8OEMGEWW8DdyvEaUXerzSVUB8", pw_appid : "8BF22-5CE01" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
            alert('push token: ' + pushToken)
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
            alert(JSON.stringify(['failed to register ', status]))
        }
    );
}
