// ==UserScript==
// @name         GitHub Script Loader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load a script from a GitHub repository
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const scriptUrl = '<Raw-Github-URL>';
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = function() {
        console.log(`${GM_info.script.name} by ${GM_info.script.author} loaded successfully.`);
    };
    document.head.appendChild(script);
})();
