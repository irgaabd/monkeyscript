// ==UserScript==
// @name        kru
// @namespace   krucil.com
// @include     http://www.krucil.net/*
// @require     http://code.jquery.com/jquery-1.11.1.min.js
// @version     1
// @grant       none
// ==/UserScript==


$("div.KD_close").trigger("click");
$("div#ad_floating_top").hide();
$("div#ad_main").hide();
$("div#ad_floating_right").hide();
$("div#ad_floating_left").hide();
$("div#ad_floating_bottom").hide();
$("div#ad_board_below_whats_going_on").hide();
$('body').find('a[href="http://www.ole777.com/"]').hide();
$('body').css({"padding-top":"5px"});

//warningphp
$('body').find('img[title="Close"]').trigger("click");
$('body').find('a[href="forumdisplay.php?f=34"]').trigger("click");

