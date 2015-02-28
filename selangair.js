// ==UserScript==
// @name        selangair
// @namespace   semprot.com
// @version     1
// @include     http://96.30.52.192/*
// @include     http://semprot.com/*
// @require     http://zeptojs.com/zepto.min.js
// ==/UserScript==

console.log('script loaded');
$(document).prop('title', 'System Test');
$('#favicon').remove();
$('head').append('<style>\
                  #imb {position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background:rgba(85,107,47,0.85)}\n \
                  #imc {position:absolute; top:5%; left:5%; text-align:center; width:90%; height:90%}\n\
                  #lodpic {width: 31px; height: 31px; margin: -16px 0 0 -16px; position: absolute; top: 48%; left: 50%; color: white; font-size: 1.2em;}\n\
                  #imc img {height:95%; border: 20px solid #777; border-bottom:30px solid #777}\n\
                 </style>');


//ads
$('#ad_global_below_navbar').hide();
$(".semprot_floating_banner_top").hide();
$("#semprot_floating_banner_bottom").hide();
$("#semprot_ads_side_left").hide();
$("#semprot_ads_side_right").hide();
$("div.semprot_ads").hide();
//navbar
$("div#navbar").find("a[href='forumdisplay.php/166-PP-Spa']").attr("href","forumdisplay.php/90-Jabodetabek");
$("div#navbar").find("a[href='forumdisplay.php/21-Underground-Information']").attr("href","forumdisplay.php/33-JaBoDeTaBek");
$("div#navbar").find("a[href='forumdisplay.php/20-FR']").attr("href","forumdisplay.php/38-FR-Jabodetabek?s=&pp=20&daysprune=-1&sort=dateline&prefixid=&order=desc");
$("li#tab_odk0_789").children().replaceWith('<a class="navtab" href="subscription.php?do=viewsubscription&folderid=all">Lapak Bagus</a></li>');
//thread list
$('div#above_threadlist').css('margin-bottom','5px');
$('div.above_body').css('padding-top','10px');
$('div#forumbits').hide();
$('ol#stickies').children().hide();
$('ol#stickies li:first').show().find('p').css('padding','0.5em');
$('ol#stickies li:last').show();
$('ol#stickies li:first>div').click(function() {$('ol#stickies').children().toggle();$('ol#stickies li:first').show();$('ol#stickies li:last').show();});
$("form#notices").detach().insertAfter('div#below_threadlist');
//$('ol#threads a').attr('target','_blank');
$('ol#threads div.author a.username').css({'color':'red'});
//thread
$('div#pagetitle').hide();
$('div#similar_threads_list').hide();
$('div#similar_threads h4').click(function(){$('div#similar_threads_list').toggle();});
$('div#threaded_view').detach().appendTo('div#postlist');

//image
$('body').append($('<div id=imb><div id=imc></div><div id="lodpic" style="">LOADING....</div></div>').hide());
$('div#imb').click(function(){$('div#imc').empty(); $('div#imb').fadeOut();});
//imgbox
$('a[href*=imgbox]').click(function(e){
  e.preventDefault(); var ur = $(this).attr('href'); var $resp = $('<p>'); $('div#imb').fadeIn(800);$('div#lodpic').show();
  var jxh = $.getJSON('http://whateverorigin.org/get?url='+encodeURIComponent(ur) + '&callback=?',function(data){$resp.html(data.contents);} );
  //bedah imgbox
  jxh.complete(function(){ $('#imc').html($resp.find('img#img'));$('div#lodpic').hide();  });  jxh.failed(function(){alert('gagal');} );
});
//imagebam
$('a[href*=imagebam]').click(function(e){
  e.preventDefault(); var ur = $(this).attr('href'); var $resp = $('<p>'); $('div#imb').fadeIn(800);$('div#lodpic').show();
  var jxh = $.getJSON('http://whateverorigin.org/get?url='+encodeURIComponent(ur) + '&callback=?',function(data){$resp.html(data.contents);} );
  //bedah imgbox
  jxh.complete(function(){ $('#imc').html($resp.find('div#imageContainer img[alt=loading]').removeAttr("style"));$('div#lodpic').hide();  });  jxh.failed(function(){alert('gagal');} );
});



//$('a[href*=facebook]').parent().hide();
//$("div#forumbits").detach().insertAfter('div#below_threadlist');
//$('ol#stickies').detach().insertAfter('div#forumbits');
