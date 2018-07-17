// ==UserScript==
// @name         Devrant Face Normifier
// @namespace    http://devrant.com/
// @version      0.1
// @description  remove all avatar expressions
// @author       7twin
// @match        *devrant.com/*
// @match        *devrant.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ajaxStop(function () {
        $("img").each(function(){
            $(this).attr("src",$(this).attr("src").replace(/22-\d/g,"22-1"));
        });
    });
})();
