$(function() {
	// 引入头部
	$("#header").load("header.html", function() {
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
		//
		$(".s_app").hover(function() {
			$(".app_qrcode").css("display", "block")
		}, function() {
			$(".app_qrcode").css("display", "none")
		})
		//
		$(".allSort").find(".more").hover(function() {
			$(".storbox_ul").css("display", "block");
		}, function() {
			$(".storbox_ul").css("display", "none");
		})
		//
		$(".storbox_ul").hover(function() {
			$(".storbox_ul").css("display", "block");
		}, function() {
			$(".storbox_ul").css("display", "none");
		})

		// 注册登录
		//登录后JS
		var loginedUser = localStorage.getItem('loginedUser');
		// "test"  ""
		if(loginedUser) {
			// 请登录字样隐藏
			$('.login').css({
				display: "none"
			});
			// 欢迎字样显示出来
			$('.exit').css({
				display: "block"
			});
			// 同时显示登录的用户名
			$('.exit').html(loginedUser + "<a style='color: red' class='leave'>，注销</a>");
		} else {
			// 请登录字样显示出来
			$('.login').css({
				display: "block"
			});
			// 欢迎字样隐藏
			$('.exit').css({
				display: "none"
			});
		}
		$(".leave").click(function() {
			// 取消登录状态
			localStorage.removegetItem('loginedUser');
			// 立刻刷新
			// location.reload();
			// 跳转到登录页面
			location.href = "login.html";
		});
	})
	// 头部引入结束

	var id = location.search;
	id = id.split("=");
	$.ajax({
		type: "get",
		url: "product.json",
		success: function(res) {
			//			console.log(res.goods[id[1]].goodid);

			$(".list").append("<span style='padding-left: 5px;'>" + res.goods[id[1]].name + "</span>");

			var $div = $(
				"<div class='img1'>" +
				"<img src='" + res.goods[id[1]].img + "'>" +
				"<div class='block1'></div>" +
				"<div class='img3'>" +
				"<img src='" + res.goods[id[1]].img + "'>" +
				"</div></div><div class='img2'>" +
				"<div class='viewImg'>" +
				"<div class='moveImg'>" +
				"<img src='" + res.goods[id[1]].image + "'>" +
				"<img src='" + res.goods[id[1]].image1 + "'>" +
				"</div></div></div>" +
				"<div class='share'>" +
				"<span>商品编码：" + res.goods[id[1]].id + "</span>" +
				"<a><span style='background-position:-100px -1135px;'></span>收藏</a>" +
				"<div class='share1_1'>" +
				"<a href='' class='share1'>" +
				"<span></span>" +
				"<span style='background: none; width: 45px;'>分享" +
				"<span></span></span></a>" +
				"<div class='shareImg'>" +
				"<a></a><a></a><a></a><a></a>" +
				"</div></div></div></div>");

			$(".showImg").append($div);
			$(".show_center_div").append("<p><b>" + res.goods[id[1]].name + "</b></p>")
			$(".dSec").append("<p>药网价: </p><p>¥" + res.goods[id[1]].price + "<p>累计评论：</p><p>26</p>");


//////////////////////////////////////////////////////////////////


			$("img", ".moveImg").mouseenter(function() {
				$(this).css({
					"border-color": "red"
				}).siblings().css({
					"border-color": "#f1f1f1"
				})
				$("img", ".img1").attr("src", "img/380_" + ($(this).index() + 1) + ".jpg")
			});
			$(".img1").hover(function() {
				$(".block1").css({
					display: "block"
				});
				$(".img3").css({
					display: "block"
				})
			}, function() {
				$(".block1").css({
					display: "none"
				});
				$(".img3").css({
					display: "none"
				});
			}).mousemove(function(e) {
				var toLeft = e.pageX - $('.block1').get(0).offsetWidth / 2 - $(this).get(0).offsetLeft;
				var toTop = e.pageY - $('.block1').get(0).offsetHeight / 2 - $(this).get(0).offsetTop;
				var rate = ($("img", ".img3").get(0).offsetWidth - $(".img3").get(0).offsetWidth) / ($("img", ".img1").get(0).offsetWidth - $(".block1").get(0).offsetWidth);
				if(toLeft < 0) {
					toLeft = 0;
				} else if(toLeft > 180) {
					toLeft = 180;
				}
				if(toTop < 0) {
					toTop = 0;
				} else if(toTop > 180) {
					toTop = 180;
				}
				$(".block1").css({
					left: toLeft,
					top: toTop
				});
				$("img", ".img3").css({
					left: -toLeft * rate,
					top: -toTop * rate
				});
			});

			$(".share1_1").hover(function() {
				$(".shareImg").css({
					display: "block"
				});
			}, function() {
				$(".shareImg").css({
					display: "none"
				})
			});
			
			///////////////////////////////////
					$(".shopping_cart_div").click(function() {
						//获取该商品的信息	
						
							var proName = res.goods[id[1]].name;
//							console.log(proName);
							var proQuan = parseInt($(".num input").val());
							var proPri = res.goods[id[1]].price;
							var proSrc = res.goods[id[1]].img;
							var proId = res.goods[id[1]].goodid;
							//console.log(proName, proQuan, proPri, proSrc);
							console.log(proPri)
							console.log(proSrc)
							// 获取整个购物车原来有的所有商品
							var cartStr = localStorage.getItem('cart') ? localStorage.getItem('cart') : "{}";
							var cartObj = JSON.parse(cartStr);
							// 判断该商品是否之前已经进入过购物车
							if(proId in cartObj) {
								cartObj[proId].num += proQuan;
							} else {
								cartObj[proId] = {
									name: proName,
									price: proPri,
									src: proSrc,
									num: proQuan
								};
							}
							// 将购物车信息的obj重新转为字符串, 以便存回cookie
							cartStr = JSON.stringify(cartObj);
							localStorage.setItem('cart', cartStr, 1);
						
					});
			///////////////////////////////////
		}
	});

	$("p", ".dThi").not(".checked").hover(function() {
		$(this).css({
			"border-color": "red"
		}).siblings().not(".checked").css({
			"border-color": "#f1f1f1"
		});
	}, function() {
		$(this).css({
			"border-color": "#f1f1f1"
		})
	});

	$(".preS").click(function() {
		var val = Number($(this).parent().siblings("input").val());
		$(this).parent().siblings("input").val(val + 1);
	})

	$(".nextS").click(function() {
		var val = Number($(this).parent().siblings("input").val());
		if(val == 1) {
			val = 2;
		}
		$(this).parent().siblings("input").val(val - 1);
	});

	$("a", ".codePhone").hover(function() {
		$(".codeMove").css({
			"display": "block"
		}).animate({
			"top": -160
		}, 700)
	}, function() {
		$(".codeMove").animate({
			"top": -190
		}, 700, function() {
			$(".codeMove").css({
				"display": "none"
			})
		})
	});

	$(".shopping_cart_div").hover(function() {
		$(this).css({
			"background-color": "#D42418",
			"border-color": "#D42418"
		})
	}, function() {
		$(this).css({
			"background-color": "#E72418",
			"border-color": "#9a0900"
		})
	});

	$(window).scroll(function() {
		var y = $(window).scrollTop();
		if(y <= 720) {
			$(".moveNav span").css({
				"display": "none"
			});
			$(".moveNav").css({
				position: "static"
			})
			$("li", ".moveNav").eq(1).click(function() {
				$(window).scrollTop(720);
			}).end().eq(2).click(function() {
				$(window).scrollTop(720);
			});
		} else {
			$(".moveNav span").css({
				"display": "block"
			});
			$(".moveNav").css({
				position: "fixed",
				top: 0,
				"z-index": 999,
				width: 950
			});
			$("li", ".moveNav").click(function() {
				$(window).scrollTop(720);
			});
		}
		
	});
	
	$("li", ".moveNav").click(function() {
		$(".viewNav>div").removeClass("viewShow").eq($(this).index()).addClass("viewShow")
	})

	//引入尾部

	$("#fooder").load("fooder.html", function() {
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