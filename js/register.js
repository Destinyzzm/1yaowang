/**
 * Created by Zero on 2017/5/2.
 */
$(document).ready(function () {
    var signP = false, signPwd1 = false, signPwd2 = false, signCheck = false;
    $(".phoneNum").focus(function () {
        $(".errorP1").css({display: "none"});
        $(".errorP2").html("");
    }).blur(function () {
        var con = $(this).val();
        var pattern = /1[0-9]{10}/;
        var res = pattern.test(con);
        if (con == "") {
            $(".errorP1").css({display: "block"});
        }
        else if (!res) {
            $(".errorP2").html("手机号格式不正确");
        }
        else if (res) {
            signP = true;
        }
    });
    $(".pwd1").focus(function () {
        $(".errorPwd1").html("6-20位字符，建议由字母，数字和符号两种以上组合");
    }).blur(function () {
        var con = $(this).val();
        var pattern = /^\w{6,20}$/;
        var res = pattern.test(con);
        if (!res) {
            $(".errorPwd1").html("密码只能为6-20位字符");
        }
        else {
            $(".errorPwd1").html("");
            signPwd1 = true;
        }
    });
    $(".pwd2").focus(function () {
        $(".errorPwd2").html("");
    }).blur(function () {
        var con = $(".pwd1").val();
        if ($(this).val() != con) {
            $(".errorPwd2").html("密码不一致");
        }
        else {
            signPwd2 = true;
        }
    });
    $(".btn").click(function () {
        var signCheck = $("[name='check']").prop("checked");
        console.log(signP, signPwd1, signPwd2, signCheck);
        if (signP && signPwd1 && signPwd2 && signCheck) {
            // 进行注册用户
            // 1. 先获取所有注册过的用户, 看是否用户名重复
            var userStr = localStorage.getItem('registerUsers');
            console.log(userStr);
            // ""
            userStr = userStr ? userStr : "{}";
            // 将取出的字符串转为方便js操作的对象
            var userObj = JSON.parse(userStr);
            // 判断userObj中是否存在已注册的用户(键)
            // 2. 如果用户不重复, 那么添加一个用户名和密码
            if ($(".phoneNum").val() in userObj) {
                alert("用户名已存在");
            } else {
                // 添加一个用户
                userObj[$(".phoneNum").val()] = $(".pwd1").val();
                // 将对象转为json格式字符串
                userStr = JSON.stringify(userObj);
                // 再将添加用户后的对象存回cookie\n
                localStorage.setItem("registerUsers", userStr, 7);
                alert("注册成功");
                location.href = "login.html";
            }
        }
        else {
            alert("请填写完整再注册");
        }
    });
});