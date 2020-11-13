
$(function  () {
	
	   //配置轮播的参数
	$("#boxAnimate").tyslide({
			boxh:434,//盒子的高度
			w:1000,//盒子的宽度
			h:400,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:1,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:30,//控制按钮宽度
			controlsH:30,//控制按钮高度
			radius:15,//控制按钮圆角度数
			controlsColor:"#666",//普通控制按钮的颜色
			controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
			isNumber:true //是否需要数字
	});
	
	
	//滑动菜单显示隐藏事件绑定
	$(".menu_list li").mouseover(function  () {	
		
		//隐藏其他内容
		$(this).siblings().find(".menu_list_con").stop(true,true).hide();
		//显示当前内容
		$(this).find(".menu_list_con").stop(true,true).show();
		//隐藏当前标题
			$(this).find(".menu_list_title").stop(true,true).hide();
			//显示其他标题
		$(this).siblings().find(".menu_list_title").stop(true,true).show();
	})
	
	//电子书菜单展开效果
//绑定鼠标移入事件
$(".New_books_right ul li").mouseover(function () {
	//console.log(1111)
	//鼠标移入隐藏所有内容，显示所有标题
	$(".New_books_right ul li").find(".New_books_right_con").stop(true).slideUp();
	$(".New_books_right ul li").find(".textbook_title").stop(true).slideDown();
	//显示对应内容，隐藏对应标题
	$(this).find(".New_books_right_con").stop(true).slideDown();
	$(this).find(".textbook_title").stop(true).slideUp();
})
	
	//独家提供的所有样式
	/*
							显示隐藏  
								点击不同的标题，显示对应的内容
								
								控制的做法一样
							
							点击左右按钮的时候：
							1. 先获取标题的样式，从而获取索引值。
							2. 显示对应内容，隐藏全部内容
							3. 标题加上高亮显示
							4. 控制器加上高亮样式
							
							
							
							*/
						
	//移入标题
	$(".New_books_title_li li").mouseover(function  () {
//		移入加高亮样式，其他的移除高亮样式
		$(this).addClass("current").siblings().removeClass("current");
		//获取索引值
		var index=$(this).index();
		//显示对应内容，隐藏其他的内容
		$(".exclusive_con_small").stop(true).fadeOut();
		$(".exclusive_con_small").eq(index).stop(true).fadeIn();
		//给当前控制按钮加高亮,其他的恢复
		$(".exclusive_controls li").eq(index).addClass("currents").siblings().removeClass("currents");
		
	})
	
	
	//移入控制器
	$(".exclusive_controls li").mouseover(function  () {
//		移入加高亮样式，其他的移除高亮样式
		$(this).addClass("currents").siblings().removeClass("currents");
		//获取索引值
		var index=$(this).index();
		//显示对应内容，隐藏其他的内容
		$(".exclusive_con_small").stop(true).fadeOut();
		$(".exclusive_con_small").eq(index).stop(true).fadeIn();
		//给当前标题加高亮,其他的恢复
		$(".New_books_title_li li").eq(index).addClass("current").siblings().removeClass("current");
		
	})
		
	//点击右箭头
	$(".imgright").click(function  () {
		//获取索引值
		/*var a=$(".New_books_title_li current").index();
		console.log(a)*/
		/*$(".New_books_title_li li").each(function  (index) {
			//var a=$(this).hasClass("current");
			if ($(this).hasClass("current")) {
				var a=$(".New_books_title_li .current").index()
				console.log(a	)
			}
		})*/
		
		var a=$(".New_books_title_li").find(".current").index();
		a++;
		if (a>6) {
			a=0;
		}
		console.log(a)
		//移除当前，显示下一个的样式
		$(".New_books_title_li li").removeClass("current");
		$(".New_books_title_li li").eq(a).addClass("current");
		//显示对应内容隐藏其他
		$(".exclusive_con_small").stop(true).fadeOut();
		$(".exclusive_con_small").stop(true).eq(a).fadeIn();
		//给当前控制按钮加高亮,其他的恢复
		$(".exclusive_controls li").removeClass("currents");
		$(".exclusive_controls li").eq(a).addClass("currents");
		/*if (a>4) {
			$(".imgright").unbind("click");
		}*/
		
	})	
	
		//点击左箭头
		
	$(".imgleft").click(function  () {
		//获取索引值
		/*if ($(".New_books_title_li li").hasClass("current")) {
				var a=$(".New_books_title_li .current").index();
			}
		console.log(a)*/
		var a=$(".New_books_title_li").find(".current").index();
		a--;
		if (a<0) {
			a=6;
		}
		console.log(a)
		
		//移除当前，显示下一个的样式
		$(".New_books_title_li li").removeClass("current");
		$(".New_books_title_li li").eq(a).addClass("current");
		//显示对应内容隐藏其他
		$(".exclusive_con_small").stop(true).fadeOut();
		$(".exclusive_con_small").eq(a).stop(true).fadeIn();
		//给当前控制按钮加高亮,其他的恢复
		$(".exclusive_controls li").removeClass("currents");
		$(".exclusive_controls li").eq(a).addClass("currents");
		/*if (a<2) {
			$(".imgleft").unbind("click");
		}*/
		
	})	
	
/*	if ($(".New_books_title_li li").hasClass("current")) {
				var imgleft=$(".New_books_title_li .current").index();
				if (imgleft==0) {
			$(".imgleft").unbind("click");
		}
		}else{
			$(".imgleft").bind("click");
		}
	console.log(imgleft)*/
	
	//左右箭头移入移除大盒子高亮效果
	$(".exclusive_con_box").hover(function  () {
		$(".imgclick").addClass("hover");
	},function  () {
		$(".imgclick").removeClass("hover");
	})
	
	
	//左右箭头鼠标按下抬起高亮效果
	$(".imgclick").mousedown(function  () {
		$(".imgclick").addClass("imgsub");
	});
	$(".imgclick").mouseup(function  () {
		$(".imgclick").removeClass("imgsub");
	});
	
	
	
	
	
	
		//聚焦事件绑定
$("#navmaxtext").focus(function  () {
	//聚焦时隐藏placeholder的文字
	$(this).prop("placeholder","");
	$(this).css("outline","none")
})
//失去焦点事件绑定
$("#navmaxtext").blur(function  () {
	//失去焦点时显示placeholder的文字
	$(this).prop("placeholder","设计中的设计");
})
		
	
	
	
	//鼠标移入事件绑定
$(".showConMin").mouseover(function() {
	//移入添加背景，其他兄弟去除背景
	$(this).addClass("showConMinClick").siblings().removeClass("showConMinClick");
});

	
	
	
	
	
	
	
	
	
	
	
	
	
})

