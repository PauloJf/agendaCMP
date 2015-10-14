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


function initPushwoosh(){
    alert('pushwoosh');
 	var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");

	//set push notifications handler
	document.addEventListener('push-notification',
		function(event)
		{
            var title = event.notification.title;
            var userData = event.notification.userdata;

            //dump custom data to the console if it exists
            if(typeof(userData) != "undefined") {
				alert('user data: ' + JSON.stringify(userData));
			}

			//and show alert
			alert(title);

			//stopping geopushes
			//pushNotification.stopGeoPushes();
		}
	);

	//initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
	pushNotification.onDeviceReady({ projectid: "802197003667", appid : "8BF22-5CE01" });

	//register for push notifications
	pushNotification.registerDevice(
		function(token)
		{
			alert(token);
			//callback when pushwoosh is ready
			onPushwooshAndroidInitialized(token);
		},
		function(status)
		{
			alert("failed to register: " +  status);
		    alert(JSON.stringify(['failed to register ', status]));
		}
	);
}

function onPushwooshAndroidInitialized(pushToken)
{
	//output the token to the console
	console.warn('push token: ' + pushToken);

	var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
	
	//if you need push token at a later time you can always get it from Pushwoosh plugin
	pushNotification.getPushToken(
		function(token)
		{
			alert('push token: ' + token);
		}
	);

	//and HWID if you want to communicate with Pushwoosh API
	pushNotification.getPushwooshHWID(
		function(token) {
    		alert('Pushwoosh HWID: ' + token);
		}
	);
	
	pushNotification.getTags(
		function(tags)
		{
			alert('tags for the device: ' + JSON.stringify(tags));
		},
		function(error)
		{
			alert('get tags error: ' + JSON.stringify(error));
		}
	);
	 

	//set multi notificaiton mode
	//pushNotification.setMultiNotificationMode();
	//pushNotification.setEnableLED(true);
	
	//set single notification mode
	//pushNotification.setSingleNotificationMode();
	
	//disable sound and vibration
	//pushNotification.setSoundType(1);
	//pushNotification.setVibrateType(1);
	
	pushNotification.setLightScreenOnNotification(false);
	
	//setting list tags
	//pushNotification.setTags({"MyTag":["hello", "world"]});
	
	//settings tags
	pushNotification.setTags({deviceName:"hello", deviceId:10},
		function(status) {
			alert('setTags success');
		},
		function(status) {
			alert('setTags failed');
		}
	);

	//Pushwoosh Android specific method that cares for the battery
	//pushNotification.startGeoPushes();
}
