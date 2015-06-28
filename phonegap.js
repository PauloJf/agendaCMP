document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Mock device.platform property if not available
    if (!window.device) {
        window.device = { platform: 'Browser' };
    }

    handleExternalURLs();
}

function handleExternalURLs() {
    // Handle click events for all external URLs
    alert(device.platform.toUpperCase());
    if (device.platform.toUpperCase() === 'ANDROID') {
        $('a').on('click', 'a[href^="http"]', function (e) {
            var url = $(this).attr('href');
            alert($(this).attr('href'));
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