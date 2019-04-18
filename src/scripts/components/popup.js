/**
 * @description - Popup
 * @return function
 */
var Popup = function() {

    var scope = this;

    //Elements
    var iframe = document.getElementById('popup-iframe');

    var currentActiveUrl = '';

    //Global functions

    /**
     * @description - On Popup open
     * @function scope.init
     * @param  {Object} activeTab - Active tab object
     * @param  {String} activeTab.url - Active tab title
     */
    scope.onPopupOpen = function(activeTab) {
        //Must be object
        if (!isObject(activeTab)) return false;

        //Get url
        var url = activeTab['url'] || '';
		//Quick and dirty edits for better facebook support
		if(url.substring(0, 24).toLowerCase() == 'https://www.facebook.com' || url.substring(0, 22).toLowerCase() == 'https://m.facebook.com')
		{
			url = url.split('?type=3')[0]; //Junk characters after ?type=3, usually appears when clicking the posts timestamp or theater mode.
			url = url.split('&set=')[0]; //Junk characters after &set=, usually appears when clicking on posts that are from groups.
			url = url.split('&comment_id=')[0]; //Junk characters after &comment_id, usually appears when clicking from notifications.
			url = url.split('&notif_id=')[0]; //Junk characters after &notif_id, notifications tend to add this junk next to all URLs.
			url = url.split('&eid=')[0]; //Junk characters after &eid, usually appears when you click on page names.
			url = url.split('&notif_t=')[0]; //Junk characters after &notif_t, mostly used on m.facebook.com.
			url = url.split('&refid=')[0]; //Junk characters after &refid, mostly used on m.facebook.com.
			url = url.split('&fs=1')[0]; //Junk characters after &fs, mostly used on m.facebook.com.
			url = url.split('&focus_composer=')[0]; //Junk characters after &focus_composer, mostly used on m.facebook.com.
		}

        //If same as currently active, don't reload
        if (currentActiveUrl === url) return false;
        //Set currently active if different
        currentActiveUrl = url;

        //Encode current tab url along with base dissenter.com url
        var encoded = encodeURIComponent(url);
        var commentUrl = BASE_URI + encoded;

        //Show iframe after delay
        setTimeout(function() {
            //Set src, make visible
            iframe.setAttribute('src', commentUrl);
            iframe.classList.remove('hidden');
        }, 250);
    };

    /**
     * @description - Init popup on open
     * @param {string|null} url
     * @function scope.init
     */
    scope.init = function(url) {
        //Check if url exists
        if (url && isString(url)) {
            //Open popup now
            scope.onPopupOpen({'url': url});

            //Don't continue
            return;
        }

        if (BROWSER_CONFIG.slug === BROWSER_SAFARI_SLUG) {
           var activeWindow = safari.application.activeBrowserWindow;
           var activeTab = activeWindow.activeTab;

           scope.onPopupOpen(activeTab);

           /**
            * @description - Event listener for popover
            */
           safari.application.addEventListener("popover", function(event) {
               //Check if currentActiveUrl is not the page we're on. If not, reload popover
               if (currentActiveUrl !== activeTab['url']) {
                   safari.extension.popovers[0].contentWindow.location.reload();
               }
           }, true);
       }
       else {
            //On popup open, get current tab
            __BROWSER__.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                if (!tabs || !isArray(tabs)) return false;

                var activeTab = tabs[0];

                scope.onPopupOpen(activeTab);
            });
        }
    };
};

if (BROWSER_CONFIG.slug === BROWSER_SAFARI_SLUG) {
    //Init popup on load for Safari
    var popup = new Popup();
    popup.init();
}
else {
    /**
     * @description - On popup load
     */
    document.addEventListener('DOMContentLoaded', function() {
        //Check if there's an incoming query string for the url
        //E.g. from content scripts, using a popup window
        var url = getQueryStringValue('url');

        //Create and init Popup
        var popup = new Popup();
        popup.init(url);
		
    });
}
