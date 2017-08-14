$(document).ready(function () {
    $(".btn").click(function () {
        var usn = $('.phoneNum').val();
        var pwd = $('.pwd1').val();
        // 作用户名和密码的校验
        var userStr = localStorage.getItem('registerUsers');
//      console.log(userStr);
        userStr = userStr ? userStr : "{}";
        // 将取出的字符串转为对象
        var userObj = JSON.parse(userStr);
        if (userObj[usn] == pwd) {
            // 在cookie设置登录状态
            localStorage.setItem('loginedUser', usn);
            // 跳转
            location.href = "index.html";
        } else {
            alert('用户名或密码错误');
        }
    });
});