const Browser = require('./browser');

//

const chrome = new Browser({
    name: 'Google Chrome',
    slug: 'chrome',
    version: '0.1.6',
    scriptVariableMap: {
        BROWSER: 'chrome',
        MESSENGER: 'extension',
    },
    manifestMap: {
        "background.persistent": false,
        "offline_enabled": false,
        "version_name": "0.1.6",
        "version": "0.1.6",
        "options_page": "options/options.html",
    },
});

const firefox = new Browser({
    name: 'Mozilla Firefox',
    slug: 'firefox',
    version: '0.1.6',
    scriptVariableMap: {
        BROWSER: 'browser',
        MESSENGER: 'runtime',
    },
    manifestMap: {
        "version": "0.1.6",
        "sidebar_action": {
            "default_title": "Dissenter",
            "default_panel": "sidebar/sidebar.html",
            "default_icon": "assets/images/logo/icon-128.png"
        },
        "options_ui": {
            "page": "options/options.html",
            "browser_style": true,
        },
        "permissions": [
            "activeTab",
            "tabs",
            "https://*.dissenter.com/*",
        ],
    },
});

const edge = new Browser({
    name: 'Microsoft Edge',
    slug: 'edge',
    version: '0.1.6',
    scriptVariableMap: {
        BROWSER: 'browser',
        MESSENGER: 'runtime',
    },
    manifestMap: {
        "background.persistent": false,
        "version": "0.1.6",
        "author": "Gab.com",
        "options_ui": {
            "page": "options/options.html",
            "browser_style": true,
        },
    },
});

const safari = new Browser({
    name: 'Apple Safari',
    slug: 'safari',
    version: '0.1.5',
    scriptVariableMap: {
        BROWSER: 'browser',
        CONTEXT_MENUS: 'menu',
    },
    manifestMap: {
    },
});

//

const Browsers = [
    chrome,
    firefox,
    edge,
    safari,
];

module.exports = Browsers;
