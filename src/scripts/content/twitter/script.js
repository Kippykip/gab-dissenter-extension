/**
 * @description - Gab Dissenter - Twitter content script
 */
var GDTwitter = function() {
    //Global scope
    var scope = this;

    var tweetPermalinks = [];
    var selectedTweet = null;

    /**
     * @description - Finds tweets, appends dissent button to each
     * @function fetchElements
     * @return {Boolean} success
     */
    function fetchElements() {
        //All tweet list items on page
        var tweets = document.querySelectorAll('div.tweet.js-actionable-tweet');

        //Make sure exists
        if (!tweets || tweets.length == 0) return false;

        //Cycle through tweets to find the action bar
        for (var i = 0; i < tweets.length; i++) {
            var tweetBlock = tweets[i];

            //Get permalink from tweet block
            var permalink = getTweetPermalinkFromBlock(tweetBlock);
            if (!permalink) continue;
            if (tweetPermalinks.indexOf(permalink) > -1) continue;

            //Push new permalink to list
            tweetPermalinks.push(permalink);

            //Get "action block" to append new button to
            var actionsBlock = tweetBlock.querySelector('div.ProfileTweet-actionList.js-actions');

            //Create new btn, append and add action
            var dissentBtn = createDissentBtn();
            actionsBlock.appendChild(dissentBtn);
            dissentBtn.onclick = dissentThisTweet.bind(null, permalink);
        };

        //Every 2 seconds check if there's more tweets and if so add new "Dissent This" btns
        setTimeout(fetchElements, 2000);
    };

    /**
     * @description - Helper to create "Dissent This" button with styles
     * @function createDissentBtn
     * @return {Node}
     */
    function createDissentBtn() {
        //Create btn
        var button = document.createElement("a");
        button.setAttribute('title', 'Dissent');
        button.style.setProperty("display", 'inline-block', "important");
        button.style.setProperty("position", 'absolute', "important");
        button.style.setProperty("height", '18px', "important");
        button.style.setProperty("width", '20px', "important");
        button.style.setProperty("vertical-align", 'bottom', "important");
        button.style.setProperty("right", '12px', "important");
        button.style.setProperty("bottom", '8px', "important");

        //Create "g" dissent icon
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("version", "1.0");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "18px");
        svg.setAttribute("height", "18px");
        svg.setAttribute("viewBox", "0 0 1280 1280");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("fill", "#637481");
        g.setAttribute("stroke", "none");
        button.onmouseover = function() {
            g.style.setProperty("fill", '#4040FF', "important");
        };
        button.onmouseout = function() {
            g.style.setProperty("fill", '#637481', "important");
        };

        var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", "M 292,823 C 23,814 11,533 117,372 220,216 437,180 623,183 1007,189 1229,298 1229,582 c 0,283 -484,517 -855,506 C 2,1077 821,839 292,823 Z");

        g.appendChild(p);
        svg.appendChild(g);

        button.appendChild(svg);

        //Return
        return button;
    };

    /**
     * @description - Makes a request to the background to open a new dissenter comment window with current page url
     * @function dissentThisTweet
     */
    function dissentThisTweet(permalink) {
        //Get height
        var height = window.innerHeight;

        //Send message to background to open popup window
        __BROWSER__.runtime.sendMessage({
            action: BACKGROUND_ACTION_OPEN_POPUP,
            url: permalink,
            height: height
        });
    };

    /**
     * @description Helper to get tweet permalink from tweet block
     * @param {Node} tweetBlock
     * @return {String}
     */
    function getTweetPermalinkFromBlock(tweetBlock) {
        //Make sure exists
        if (!tweetBlock) return null;

        //Get attribute
        var permalink = tweetBlock.getAttribute('data-permalink-path');
        //Must exist
        if (!permalink || !isString(permalink)) return null;

        //Append
        var url = 'https://www.twitter.com' + permalink;

        //Return
        return url;
    };

    //Global functions


    /**
     * @description - Init script on open
     * @function scope.init
     */
    scope.init = function() {
        fetchElements();
    };
};

//Wait for page to be ready and loaded
ready(function() {
    //Get config keys from background
    __BROWSER__.runtime.sendMessage({
        action: BACKGROUND_ACTION_GET_KEY,
        key: TWITTER_BUTTONS_ENABLED
    }, function(enabled) {
        if (!enabled) return false;

        //Delay a bit
        setTimeout(function () {
            //Init new script
            var gdt = new GDTwitter();
            gdt.init();
        }, 150);
    });
});
