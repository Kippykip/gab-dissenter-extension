/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Microsoft Edge",slug:"edge",version:"0.1.5"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",COMMENT_COUNT_URI="https://dissenter.com/notification/comment-count?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",BACKGROUND_ACTION_SET_BADGE="set_badge",BACKGROUND_ACTION_TAB_UPDATED="tab_updated",COLOR_DISSENTER_BLUE="#4040FF",STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",WEBSITE_COMMENT_BADGE_ENABLED="website_comment_badge_enabled",DISSENT_DISQUS_BUTTONS_ENABLED="dissent_disqus_buttons_enabled",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED]=!0;var STORAGE_KEY_ALL="all",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var e=document;"loading"==e.readyState?e.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var GDTwitterV2=function(){var s=[];function a(){var t=document.querySelectorAll('div[aria-label="Share Tweet"]');if(setTimeout(a,2e3),!t||0==t.length)return!1;for(var e=0;e<t.length;e++){var r=t[e],n=p(r);if(n&&!(-1<s.indexOf(n))){s.push(n);var i=r.parentElement.parentElement.parentElement,o=l();i.appendChild(o),o.onclick=u.bind(null,n)}}}function l(){var t=document.createElement("a");t.setAttribute("title","Dissent"),t.style.setProperty("display","inline-block","important"),t.style.setProperty("height","35px","important"),t.style.setProperty("width","35px","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("right","-6px","important"),t.style.setProperty("bottom","-8px","important"),t.style.setProperty("border-radius","50%","important");var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.style.setProperty("display","block","important"),e.style.setProperty("margin","9px","important"),e.setAttribute("version","1.0"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("width","18px"),e.setAttribute("height","18px"),e.setAttribute("viewBox","0 0 1280 1280"),e.setAttribute("preserveAspectRatio","xMidYMid meet");var r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("fill","#657786"),r.setAttribute("stroke","none"),t.onmouseover=function(){r.style.setProperty("fill","#4040FF","important"),t.style.setProperty("background-color","rgba(64,64,255,.1)","important")},t.onmouseout=function(){r.style.setProperty("fill","#657786","important"),t.style.removeProperty("background-color")};var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d","M 292,823 C 23,814 11,533 117,372 220,216 437,180 623,183 1007,189 1229,298 1229,582 c 0,283 -484,517 -855,506 C 2,1077 821,839 292,823 Z"),r.appendChild(n),e.appendChild(r),t.appendChild(e),t}function u(t){var e=window.innerHeight;browser.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}function p(t){if(!t)return null;var e=t.parentElement.parentElement.parentElement.querySelectorAll('a[href*="/status/"]')[0];if(!e)return null;var r=e.getAttribute("href");return r&&isString(r)?"https://www.twitter.com"+r:null}this.init=function(){a()}};ready(function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:TWITTER_BUTTONS_ENABLED},function(t){if(!t)return!1;setTimeout(function(){(new GDTwitterV2).init()},150)})});var GDTwitter=function(){var s=[];function a(){var t=document.querySelectorAll("div.tweet.js-actionable-tweet");if(!t||0==t.length)return!1;for(var e=0;e<t.length;e++){var r=t[e],n=p(r);if(n&&!(-1<s.indexOf(n))){s.push(n);var i=r.querySelector("div.ProfileTweet-actionList.js-actions"),o=l();i.appendChild(o),o.onclick=u.bind(null,n)}}setTimeout(a,2e3)}function l(){var t=document.createElement("a");t.setAttribute("title","Dissent"),t.style.setProperty("display","inline-block","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("height","18px","important"),t.style.setProperty("width","20px","important"),t.style.setProperty("vertical-align","bottom","important"),t.style.setProperty("right","12px","important"),t.style.setProperty("bottom","8px","important");var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("version","1.0"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("width","18px"),e.setAttribute("height","18px"),e.setAttribute("viewBox","0 0 1280 1280"),e.setAttribute("preserveAspectRatio","xMidYMid meet");var r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("fill","#637481"),r.setAttribute("stroke","none"),t.onmouseover=function(){r.style.setProperty("fill","#4040FF","important")},t.onmouseout=function(){r.style.setProperty("fill","#637481","important")};var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d","M 292,823 C 23,814 11,533 117,372 220,216 437,180 623,183 1007,189 1229,298 1229,582 c 0,283 -484,517 -855,506 C 2,1077 821,839 292,823 Z"),r.appendChild(n),e.appendChild(r),t.appendChild(e),t}function u(t){var e=window.innerHeight;browser.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}function p(t){if(!t)return null;var e=t.getAttribute("data-permalink-path");return e&&isString(e)?"https://www.twitter.com"+e:null}this.init=function(){a()}};ready(function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:TWITTER_BUTTONS_ENABLED},function(t){if(!t)return!1;setTimeout(function(){(new GDTwitter).init()},150)})});