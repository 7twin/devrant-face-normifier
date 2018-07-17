// ==UserScript==
// @name         Devrant Face Normifier
// @namespace    http://devrant.com/
// @version      0.2
// @description  remove all avatar expressions
// @author       7twin
// @match        *devrant.com/*
// @match        *devrant.io/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ajaxStop(function () {
        $("img").each(function(){
            $(this).attr("src",$(this).attr("src").replace(/22-\d{1,4}/g,"22-1"));
        });
    });
})();
