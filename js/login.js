"use strict";$("#box").validate({rules:{username:{required:!0,email:!0},password:{required:!0}},messages:{username:{required:"请填写用户名",email:"请输入邮箱"},password:{required:"请填写密码"}},submitHandler:function(){var a=$("#username").val(),e=$("#password").val();$.ajax({url:"../api/login.php",method:"post",data:{username:a,password:e},success:function(e){1==(e=JSON.parse(e)).code?(setCookie("login",a),location.href="./index.html"):alert("账号或密码不正确")}})}});