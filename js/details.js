"use strict";var id=location.search.slice(1).split("=")[1];function getData(){$.ajax({url:"../api/getDetail.php",method:"post",data:{id:id},success:function(t){renderHtml((t=JSON.parse(t)).detail)}})}function renderHtml(t){str=' <div class="title"><h3>'+t.title+'</h3></div>\n        <div class="content">'+t.content+"</div>",$(".main").html(str)}getData(id),$(".btn").click(function(){var e=getCookie("login");if(!e)return alert("没有登录请到登录页面进行登录"),localStorage.setItem("url",location.href),void(location.href="../html/login.html");$.ajax({url:"../api/addCar.php",method:"post",data:{collection_id:id,userName:e},success:function(t){"已收藏"==(t=JSON.parse(t)).msg&&(alert("该头条已收藏在个人页"),open("http://test.com/projectToutiao/html/collection.html?user="+e,"_self")),"添加成功"==t.msg&&alert("收藏成功")}})});