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
		
		
		$(".list1").attr("sign", false).click(function() {
			var l = $(this).children("div").get(0).offsetHeight;
			$(this).get(0).sign = !$(this).get(0).sign;
			if($(this).get(0).sign) {
				$(this).animate({
					height: 36 + l
				}, 500);
			} else {
				$(this).animate({
					height: 36
				}, 500);
			}
		});
	
		// AJAX
		$.ajax({
			url: "product_list.json",
			success: function(res) {
				var $ul = $("<ul>").addClass("module_last");
				for(var i = 0; i < 50; i++) {
					var $li = $("<li><a href='product.html?id="+res.goods[i].goodid+"'>" +
						"<img class='index_goods_img' src='" + res.goods[i].thumb + "'>" +
						"<p class='product_list_name'>" + res.goods[i].name + "</p>" +
						"<p class='product_list_brand'>" + res.goods[i].brand + "</p>" +
						"<p class='product_list_salePrice'>￥" + res.goods[i].salePrice + "</p>" +
						"</a>" +
						"<div class='quantity clear-fix'><span class='minusPro'>-</span><input value='1' disabled><span class='addPro'>+</span></div>" +
						"<div class='shopCart'><span>加入购物车</span></div><li>");
					$ul.append($li)
				}
				$(".product_list").append($ul);
				
				// 加入购物车
				
				
				$(".quantity").each(function() {
					// 增加
					$(this).find(".addPro").click(function() {
						var val = parseInt($(this).parent().find("input").val());

						val += 1;

						$(this).parent().find("input").val(val);
					});
					// 减少
					$(this).find(".minusPro").click(function() {
						var val = parseInt($(this).parent().find("input").val());
						val -= 1;
						if(val < 1) {
							val = 1;
						}
						$(this).parent().find("input").val(val);
					});
				})
				
				
				for(let i = 0;i < $(".shopCart").length;i++){
					$(".shopCart").eq(i).click(function() {
						//获取该商品的信息	
//							
							var proName = res.goods[$(this).index()].name;
//							console.log(proName);
							var proQuan = parseInt($(".quantity input").val());
							var proPri = res.goods[$(this).index()].salePrice;
							var proSrc = res.goods[$(this).index()].thumb;
							var proId = res.goods[$(this).index()].goodid;
//							console.log(proName, proQuan, proPri, proSrc);
							console.log(proQuan)
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
//							console.log(cartObj);
							// 将购物车信息的obj重新转为字符串, 以便存回cookie
							cartStr = JSON.stringify(cartObj);
							localStorage.setItem('cart', cartStr);
							
							
					});
				}
			}
		});
		
//		$(".shopping_cart").click(function() {
//			location.href = "../shopping_cart/shopping_cart.html";
//		})

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