// ==UserScript==
// @name        idws2
// @namespace   idws.com
// @description idws.com
// @require     http://localhost/jq/jquery-1.7.2.min.js
// @include     http://www.indowebster.com/downloads/*
// @run-at      document-body
// @version     1
// ==/UserScript== 

var to;

function dlwait(){
    var a = $("input#downloadBtn").val();
    GM_log("a = "+a);
    if (a == "Download"){
        GM_log("download now");
        clearTimeout(to);
        $("input#downloadBtn").trigger("click");
    }else {
        
        to = setTimeout(function(){dlwait();},1000);
        GM_log("wait with: " +to);
    }
}
dlwait();