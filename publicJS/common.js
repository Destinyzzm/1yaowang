$(document).ready(function () {
    $(".close_ico").click(function () {
        $(this).parents(".safe_warm").css({display: "none"});
    });
    $(".nav_l_ul").hover(function () {
        $(".menu p").css({"background-color": "#fff"});
        $(".menu_p").css({display: "block"});
    }, function () {
        $(".menu p").css({"background-color": "#f1f1f1"});
        $(".menu_p").css({display: "none"});
    });
    $(".nav_li div").mouseover(function () {
        $(this).css({"background-color": "#fff"});
        $(".secMenu").css({display: "block"});
    }).mouseout(function () {
        $(".secMenu").css({display: "none"});
        $(this).css({"background-color": "#f1f1f1"});
    });
    $(".moveUl li").hover(function () {
        $(this).stop(false, true).siblings().stop(false, true);
        $(this).children("a").animate({"left": 10}, 500);
        $(this).children("a").css({
            "background-color": "#fff",
            color: "#5E5E5E"
        }).end().children("div").css({"display": "block"});
    }, function () {
        $(this).children("a").animate({"left": 0}, 500);
        $(this).children("a").css({
            "background-color": "#333333",
            color: "#fff"
        }).end().children("div").css({"display": "none"});
    });
    $("div",".iconImg").mouseover(function () {
        $(this).css({position:"relative"}).animate({top:"-15"},100, function () {
            $(this).animate({top:"0"},200);
        })
    });
    var loginedUser = localStorage.getItem('loginedUser');
    console.log()
    // "test"  ""
    if(loginedUser){
        // 请登录字样隐藏
        $('.login').css({display:"none"});
        // 欢迎字样显示出来
        $('.exit').css({display:"block"});
        // 同时显示登录的用户名
        $('.exit').html(loginedUser+"<a style='color: red' class='leave'>，注销</a>");
    } else {
        // 请登录字样显示出来
        $('.login').css({display:"block"});
        // 欢迎字样隐藏
        $('.exit').css({display:"none"});
    }
    $(".leave").click(function (){
        // 取消登录状态
        localStorage.removeItem('loginedUser');
        // 立刻刷新
        // location.reload();
        // 跳转到登录页面
        location.href = "../../login/login.html";
    });
});
