"use strict";var getData=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=keyWord,t.next=3,$.ajax({url:"../api/search.php",method:"post",data:{findsth:e},dataType:"json"});case 3:data=t.sent,console.log(data),renderHtml(data);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();function _asyncToGenerator(t){return function(){var s=t.apply(this,arguments);return new Promise(function(i,o){return function e(t,n){try{var r=s[t](n),a=r.value}catch(t){return void o(t)}if(!r.done)return Promise.resolve(a).then(function(t){e("next",t)},function(t){e("throw",t)});i(a)}("next")})}}var keyWord1=location.search.slice(1).split("=")[1],keyWord=decodeURI(keyWord1);getData(keyWord),$("#btn").click(function(){var t=$("#findsth").val();location.href="http://test.com/projectToutiao/html/search.html?keyWord="+t});var num=30,flag=!0,numBer=void 0;function renderHtml(t){for(var e="",n=0;n<30;n++)e+=' <div class="no-mode">\n                <div class="title-box"><a class="link" index="'+t.list[n].id+'">'+t.list[n].title+'</a></div>\n                <div class="footer-bar">\n                    <div class="footer-bar-left">\n                        <a class="footer-bar-action source">&nbsp;'+t.list[n].author+"&nbsp;⋅</a>\n                    </div>\n                </div>\n            </div>";$(".feed-container").html(e),$(".link").click(function(){var t=this.getAttribute("index");open("http://test.com/projectToutiao/html/detail.html?id="+t,"_self")})}function render(t){for(var e="",n=num;n<numBer;n++)e+=' <div class="no-mode">\n                <div class="title-box"><a class="link" index="'+t.list[n].id+'">'+t.list[n].title+'</a></div>\n                <div class="footer-bar">\n                    <div class="footer-bar-left">\n                        <a class="footer-bar-action source">&nbsp;'+t.list[n].author+"&nbsp;⋅</a>\n                    </div>\n                </div>\n            </div>";$(".feed-container").append(e),flag=!0,$(".link").click(function(){var t=this.getAttribute("index");open("http://test.com/projectToutiao/html/detail.html?id="+t,"_self")})}window.addEventListener("scroll",function(){var t=Object.keys(data.list);$(window).scrollTop()+$(window).height()>=$(".feed-container").height()-100&&flag&&(flag=!1,t<(numBer=num+30)&&(numBer=t),render(data),num=numBer)});