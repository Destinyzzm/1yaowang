$(function () {
		// 登录后JS
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
			localStorage.removeItem('loginedUser');
			// 立刻刷新
			// location.reload();
			// 跳转到登录页面
			location.href = "login.html";
		});
	
    var cartStr = localStorage.getItem('cart') ? localStorage.getItem('cart') : "{}";
    var cartObj = JSON.parse(cartStr);
    
    var $ul = $("<ul>").addClass("cartUl");
    for(let i in cartObj){
      
//  console.log(cartObj);
    
    var $li = $("<li class='cartLi'>" +
        "<img class='cartImg' src='"+cartObj[i].src+"'>" +
        "<div class='proName'>"+cartObj[i].name+"</div>" +
        "<div class='proPri'>"+cartObj[i].price+"</div>" +
        "<div class='proNum'><span class='minusThis'>-</span><input class='inptNum' value = ''><span class='addThis'>+</span></div>" +
        "<div class='proAllThis'>"+(cartObj[i].price*cartObj[i].num)+"</div>" +
        "<div class='handle'><a>删除商品</a></div></li>");
    $ul.append($li);
   
    $(".cartCon").append($ul);
    
    if($(".cartCon").offset().height != 0){
    	$(".empty_box").css("display","none");
    	$(".boxCart").css("display","block")
    }else{
 		$(".boxCart").css("display","none");
    	$(".empty_box").css("display","block")
    }
//  
	 $(".inptNum").val(cartObj[i].num);
//	 console.log(cartObj[i ].num)
//	 console.log(cartObj[i].src)


    
    $(".proNum").each(function(){
    	//增加
    	$(this).find(".addThis").click(function () {
	        var val = parseInt($(this).parent().find("input").val());
	        val += 1;
	       $(this).parent().find("input").val(val);
	       $(this).parent().parent().find(".proAllThis").html(val*cartObj[i].price);
	       
	        });
	       //减少
	  	$(this).find(".minusThis").click(function () {
	        var val = parseInt($(this).parent().find("input").val());
	        val -= 1;
	        if (val < 1) {
	            val = 1;
	        }
	        $(this).parent().find("input").val(val);
	         $(this).parent().parent().find(".proAllThis").html(val*cartObj[i].price);
	    });
	   
    })
    
   
    $(".handle").click(function(){
    	$(this).parent().hide();
		localStorage.removeItem(cartObj[$(this).parent().index()]);
//		console.log(getCookie('cart'))
		if($(".cartLi").offset().height != 0){
			
		}else{
			localStorage.removeItem('cart');
			$(".boxCart").css("display","none");
		  	$(".empty_box").css("display","block")
		}
	})
		
  }  
});