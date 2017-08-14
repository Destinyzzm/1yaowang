// 头部导航JS

$(function() {
	$("#header").load("header.html",function(){
		$(".site-nav-bd-l").hover(function() {
			$(".site-nav-span").css("background-position", "right -9px");
			$(this).css("background", "white");
			$(".hd_provinceList").css("display", " block");
		}, function() {
			$(".site-nav-span").css("background-position", "right 16px");
			$(this).css("background", "#F1F1F1");
			$(".hd_provinceList").css("display", "none");
		});

		$(".head_order").hover(function() {
			$(".menu_bd_panel").css("display", "block");
			$(".menu_bd").css("display", "block");
		}, function() {
			$(".menu_bd_panel").css("display", "none");
			$(".menu_bd").css("display", "none");
		});

		$(".menu-hd-app").hover(function() {
			$(".menu-hd-erd").css("display", "block")
		}, function() {
			$(".menu-hd-erd").css("display", "none")
		})
		$(".s_app").hover(function() {
			$(".app_qrcode").css("display", "block")
		}, function() {
			$(".app_qrcode").css("display", "none")
		})

		// Tab切换JS
		$(".stitle").hover(function() {
			$(this).find("div").eq(0).stop().animate({
				"margin-left": "10px"
			}, 300)
			$(this).find("a").eq(0).css({
				"background": "white",
				"color": "black"
			})
			$(this).find(".category").eq(0).css("display", "block");
		}, function() {
			$(this).find("div").eq(0).stop().animate({
				"margin-left": "0"
			}, 300)
			$(this).find("a").eq(0).css({
				"background-color": "#314349",
				"color": "white"
			})
			$(this).find(".category").eq(0).css("display", "none");
		});
		
		// 注册登录
		   //登录后JS
      var loginedUser = localStorage.getItem('loginedUser');
//  console.log()
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
        location.href = "login.html";
    });
	
	})
		
	// 头部引入结束
	
	
	$(".close_ico").click(function() {
		$(this).parents(".safe_warm").css({
			display: "none"
		});
	});



	$(".s_a").hover(function() {
		$(".app_qrcode").css("display", "block");
	}, function() {
		$(".app_qrcode").css("display", "none");
	})

	//主轮播图

	$(".tsSlide").append($('.tsSlide').find("a").eq(0).clone(true));
	$(".tsSlide").css("width", $(".tsSlide").find("a").eq(0).width() * $(".tsSlide a").length + 'px');

	$lw = $(".tsSlide").find("a").eq(0).width();
	var i = 0;
	var timer_1 = null;
	timer_1 = setInterval(function() {
		i++;
		move();
	}, 3000);
	$(".main-l").mouseenter(function() {
		clearInterval(timer_1);
	})
	$(".main-l").mouseleave(function() {
		//		console.log("bbb");
		timer_1 = setInterval(function() {
			i++;
			move();
		}, 3000);
	})
	$('.slideSwitchid span').mouseover(function() {
		i = $(this).index();
		move();
	})

	function move() {
		if(i == $(".tsSlide a").length) {
			i = 1;
			$(".tsSlide").css("left", 0);
		}
		$(".slideSwitchid span").removeClass('cur');
		if(i == $('.tsSlide a').length - 1) {
			$('.slideSwitchid').find("span").eq(0).addClass('cur');
		} else {
			$(".slideSwitchid span").eq(i).addClass('cur');
		}
		$(".tsSlide").stop().animate({
			"left": -i * $lw + 'px'
		}, 1000);
	}

	// 主轮播图右侧JS

	$(".consult_tt").eq(0).on("click", function() {
		$(".consult_tt").find("li").eq(1).removeClass("on")
		$(".consult_text").eq(0).removeClass("hide");
		$(".consult_text").eq(1).addClass("hide");
		$(this).addClass("on")
	})
	$(".consult_tt").eq(1).on("click", function() {
		$(".consult_tt").eq(0).removeClass("tabMenu_cur")
		$(".consult_text").eq(1).removeClass("hide");
		$(".consult_text").eq(0).addClass("hide");
		$(this).addClass("tabMenu_cur");
	})
	$(".service_ico").hover(function() {
		$(this).stop().animate({
			"margin-top": "-10px"
		}, 100)
	}, function() {
		$(this).stop().animate({
			"margin-top": "0"
		}, 100)
	})

	$(".server_tab").find("li").eq(0).on("click", function() {
		$(".server_tab").find("li").eq(1).removeClass("on");
		$(".news_div").addClass("hide");
		$(".service_div").removeClass("hide");
		$(this).addClass("on")
	})
	$(".server_tab").find("li").eq(1).on("click", function() {
		$(".server_tab").find("li").eq(0).removeClass("on");
		$(".news_div").removeClass("hide");
		$(".service_div").addClass("hide");
		$(this).addClass("on")
	})

	//楼层轮播图
	var timer1 = null;
	$(".sale_slider").append($('.sale_slider').find("a").eq(0).clone(true));
	$(".sale_slider").css("width", $(".sale_slider").find("a").eq(0).width() * $(".sale1 .sale_slider a").length + 'px');

	$lw1 = $(".sale_slider").find("a").eq(0).width();
	var k = 0;
	move1();
	timer1 = setInterval(function() {
		k++;
		move1();
	}, 3000);
	$(".sale").mouseenter(function() {
		clearInterval(timer1);
	})
	$(".sale").mouseleave(function() {
		timer1 = setInterval(function() {
			k++;
			move1();
		}, 3000);
	})
	$('.slideSwitchid_1 span').mouseover(function() {
		k = $(this).index();
		//					console.log(i)
		move1();
	})

	function move1() {
		//					console.log(k)
		if(k == $(".sale1 .sale_slider a").length) {
			k = 1;
			$(".sale_slider").css("left", 0);
		}
		$(".slideSwitchid_1 span").removeClass('cur');
		if(k == $('.sale1 .sale_slider a').length - 1) {
			$('.slideSwitchid_1').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_2').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_3').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_4').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_5').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_6').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_7').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_8').find("span").eq(0).addClass('cur');
			$('.slideSwitchid_9').find("span").eq(0).addClass('cur');
		} else {
			$(".slideSwitchid_1 span").eq(k).addClass('cur');
			$(".slideSwitchid_2 span").eq(k).addClass('cur');
			$(".slideSwitchid_3 span").eq(k).addClass('cur');
			$(".slideSwitchid_4 span").eq(k).addClass('cur');
			$(".slideSwitchid_5 span").eq(k).addClass('cur');
			$(".slideSwitchid_6 span").eq(k).addClass('cur');
			$(".slideSwitchid_7 span").eq(k).addClass('cur');
			$(".slideSwitchid_8 span").eq(k).addClass('cur');
			$(".slideSwitchid_9 span").eq(k).addClass('cur');

		}
		$(".sale_slider").stop().animate({
			"left": -k * $lw1 + 'px'
		}, 1000);
	}

	// 底部及侧边栏JS
	//  楼梯效果
    $(".floorLeft li").click(function () {
        if ($(this).index() == 0) {
            $('body,html').animate({scrollTop: 645}, 500);
        } else {
            $('body,html').animate({scrollTop: 925 + ($(this).index() - 1) * 520}, 500);
        }
    });
    
    var floorObj = {
        "0": ["今日特惠", "今日特惠"],
        "1": ["1F", "家庭常备"],
        "2": ["2F", "专科用药"],
        "3": ["3F", "医疗器械"],
        "4": ["4F", "隐形眼镜"],
        "5": ["5F", "滋补保健"],
        "6": ["6F", "维生素钙"],
        "7": ["7F", "药妆个护"],
        "8": ["8F", "情趣用品"],
        "9": ["9F", "母婴用品"]
    };
    
    $(window).scroll(function () {
        var y = $(window).scrollTop();
        if (y < 445) {
            $(".floorLeft").css({display: "none"});
        }
        else if (y > 5450) {
            $(".floorLeft").css({display: "none"});
        }
        else {
            $(".floorLeft").css({display: "block"});
        }
        var ind = Math.floor(((y - 725) / 520) + 1);
        if (ind > 9) {
            ind = 9;
        }
        else if (ind < 0) {
            ind = 0;
        }
        $("li", ".floorLeft").html(function (index) {
            return floorObj[index][0];
        }).eq(ind).html(floorObj[ind][1]).addClass("fLi1")
            .siblings().removeClass("fLi1");
    });
    $("li", ".floorLeft").not(".fLi1").hover(function () {
        $(this).html(function () {
            return floorObj[$(this).index()][1];
        }).addClass("fLi2")
    }, function () {
        $(this).html(function () {
            return floorObj[$(this).index()][0];
        }).removeClass("fLi2");
    });
    
	//  引入fooder
	$("#fooder").load("fooder.html",function(){
		$(".fri_tit li").on("mouseover", function() {
			$(this).addClass("cir").siblings().removeClass("cir");
			if($(this).index() == 0) {
				$(".friendly").css("display", "none");
				$(".flagship_store").css("display", "block")
			} else {
				$(".friendly").css("display", "block");
				$(".flagship_store").css("display", "none")
			}
		})

		$(".iconImg div").hover(function() {
			$(this).stop().animate({
				"margin-top": "-10px"
			}, 300)
		}, function() {
			$(this).stop().animate({
				"margin-top": "0"
			}, 300)
		})
		
			// 侧边栏
	$(".f_home").hover(function() {
		$(".showConsult").css("display", "block");
	}, function() {
		$(".showConsult").css("display", "none");
	})
	$(".f_wei").hover(function() {
		$(".none_tips").css("display", "block");
		$(this).find("i").css("display", "none");
	}, function() {
		$(".none_tips").css("display", "none");
		$(this).find("i").css("display", "block");
	})
	// 回到顶部
	var timer = null;
	$(".f_top").on("click", function() {
		clearInterval(timer);
		timer = setInterval(function() {
			$scrollTop = $(window).scrollTop();
			$iSpeed = $scrollTop / 8;
			document.documentElement.scrollTop = document.body.scrollTop = $scrollTop - $iSpeed;
			if($iSpeed == 0) {
				clearInterval(timer);
			}
		}, 30)
	})
	})
    
 
   
})
