"use strict";$("#first").on("click",function(){$("html,body").animate({scrollTop:0},2e3)});var login=getCookie("login");$(".name").append("<span>"+login+"</span>"),$(".search-btn").click(function(){var n=$(".search-input").val();open("./search.html?keyWord="+n,"_self")});var num=1,len=30,flag=!0;function getData(){$.ajax({url:"../api/getData.php",method:"post",data:{start:num,len:len},success:function(n){renderHtml((n=JSON.parse(n)).list),flag=!0}})}function renderHtml(n){var o="";n.forEach(function(n,e){o+=' <div class="no-mode">\n        <div class="title-box"><a class="link" index="'+n.id+'">'+n.title+'</a></div>\n        <div class="footer-bar">\n            <div class="footer-bar-left">\n                <a class="footer-bar-action source">&nbsp;'+n.author+"&nbsp;⋅</a>\n            </div>\n        </div>\n    </div>"}),$(".feed-container").append(o),$(".link").click(function(){var n=this.getAttribute("index");open("./detail.html?id="+n,"_self")})}getData(num,len),window.addEventListener("scroll",function(){$(window).scrollTop()+$(window).height()>=$(".feed-container").height()-100&&flag&&(flag=!1,getData(++num,len)),$(window).scrollTop()<50&&$(".channel").removeClass("channel-fixed"),50<=$(window).scrollTop()&&$(".channel").addClass("channel-fixed"),$(window).scrollTop()<2e3&&$("#first").hide(),2e3<=$(window).scrollTop()&&$("#first").show()}),$(".logout").click(function(){delCookie("login")});