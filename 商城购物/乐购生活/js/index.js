$(function  () {
	//鼠标移入li事件banner左边菜单栏样式和是否显示
	$("#navleft li").mouseover(function  () {
		//给当前的p加新的样式
		$(this).find(".title").addClass("navleftlip");
//显示对应的内容
		$(this).find(".navleftcon").css("display","block");
	});
		//鼠标移出li事件
	$("#navleft li").mouseout  (function  () {
		//给当前的p移除新的样式
		$(this).find(".title").removeClass("navleftlip");
//隐藏对应的内容
		$(this).find(".navleftcon").css("display","none");
	}) ;
	
	
	
	
	
	
	
//领券中心	
$("#ticket_title_two").hover(function  () {
	
	//移入显示对应内容，
	$("#ticket_title_two_min").stop(true.true).fadeIn();
	
},function  () {
	
	//移出显示对应内容，
	$("#ticket_title_two_min").stop(true.true).fadeOut();
	
})

	
	
			
	//搜索框
	
	//聚焦事件绑定
$("#navmaxtext").focus(function  () {
	//聚焦时隐藏placeholder的文字
	$(this).prop("placeholder","");
	$(this).css("outline","none")
})
//失去焦点事件绑定
$("#navmaxtext").blur(function  () {
	//失去焦点时显示placeholder的文字
	$(this).prop("placeholder","创意文具");
})
		
			
	//顶部搜索框
	
	//聚焦事件绑定
$("#serch_top_text").focus(function  () {
	//聚焦时隐藏placeholder的文字
	$(this).prop("placeholder","");
	$(this).css("outline","none")
})
//失去焦点事件绑定
$("#serch_top_text").blur(function  () {
	//失去焦点时显示placeholder的文字
	$(this).prop("placeholder","创意文具");
})


	
	//滑动菜单效果
	


//电子书滑动菜单效果
$("#textbook .textbookleft .publicTitle ul li").mouseover(function  () {
	//鼠标移入添加对应样式，其他兄弟取消此样式
	$(this).addClass("bookClick").siblings().removeClass("bookClick");
	//获取当前索引值
	var index=$(this).index();
	console.log(index);
	//鼠标移入标题显示或隐藏对应的内容
	$("#textbook .textbookleft .bookClickMin").css("display","none")
	$("#textbook .textbookleft .bookClickMin").eq(index).css("display","block");

})

//服饰滑动菜单效果
$("#cloth .publicTitle ul li").mouseover(function  () {
	//鼠标移入添加对应样式，其他兄弟取消此样式
	$(this).addClass("bookClick").siblings().removeClass("bookClick");
		//获取当前索引值
	var index=$(this).index();
	console.log(index);
	//鼠标移入标题显示或隐藏对应的内容
	$("#cloth  .clothCon").css("display","none")
	$("#cloth .clothCon").eq(index).css("display","block");

})




//户外运动滑动菜单效果
$("#sport .publicTitle ul li").mouseover(function  () {
	//鼠标移入添加对应样式，其他兄弟取消此样式
	$(this).addClass("bookClick").siblings().removeClass("bookClick");
		//获取当前索引值
	var index=$(this).index();
	console.log(index);
	//鼠标移入标题显示或隐藏对应的内容
	$("#sport  .sportCon").css("display","none")
	$("#sport .sportCon").eq(index).css("display","block");

})

//童装滑动菜单效果
$("#children .publicTitle ul li").mouseover(function  () {
	//鼠标移入添加对应样式，其他兄弟取消此样式
	$(this).addClass("bookClick").siblings().removeClass("bookClick");
	//获取当前索引值
	var index=$(this).index();
	console.log(index);
	//鼠标移入标题显示或隐藏对应的内容
	$("#children  .childrenCon").css("display","none")
	$("#children .childrenCon").eq(index).css("display","block");

})

//推广商品
//鼠标移入事件绑定
$("#generalizeCon_one .generalizeMin").mouseover(function() {
	//移入添加背景，其他兄弟去除背景
	$(this).addClass("current").siblings().removeClass("current");
});
//鼠标移入事件绑定
$("#generalizeCon_two .generalizeMin").mouseover(function() {
	//移入添加背景，其他兄弟去除背景
	$(this).addClass("current").siblings().removeClass("current");
});
		

//推广商品切换效果
$("#generalize .generalizeC ul li").mouseover(function  () {
	//添加、移除高亮显示
	$(this).siblings().removeClass("current");
	$(this).addClass("current")
	//获取索引
	var index=$(this).index();
	//显示隐藏相应内容
	$(".generalizeCon").hide();
	$(".generalizeCon").eq(index).show();

})
	

//电子书菜单展开效果
//绑定鼠标移入事件
$("#textbookright ul li").mouseover(function () {
	//鼠标移入隐藏所有内容，显示所有标题
	$("#textbookright ul li").find(".textbook_con").hide();
	$("#textbookright ul li").find(".textbook_title").show();
	//显示对应内容，隐藏对应标题
	$(this).find(".textbook_con").show();
	$(this).find(".textbook_title").hide();
})








//楼层滚动效果
var color_list;
	color_list=["#93d46f","#f65727","#bb9dee","#ff7394","#c2ec51","#ffda0d","#666666"];
	//console.log(color_list)
	
	//移入移出事件绑定
$("#floor_con li").hover(function  () {
	//显示文字颜色
	$(this).css("color","#fff");
	//定位图片移动
	$(this).css("background-position-x","-40px");
	
	//背景颜色
	var index=$(this).index();
	$(this).css("background-color",color_list[index]);
	//ul变宽
	$(this).stop(true,true).animate({"width":"50px"},60);
	
},function  () {
	//ul变窄
	$(this).stop(true,true).animate({"width":"0px"},60);
	//隐藏文字颜色
	$(this).css("color","#000");
	//定位图片移动还原
	$(this).css("background-position-x","0px");
	
	//背景颜色去除
	var index=$(this).index();
	$(this).css("background-color","#fff");
	
})
//设置楼梯点击后回到的高度
//点击事件
$("#floor_con li:not(:last)").click(function  () {
	//获取点击位置的索引值
	var scroll_top_index=$(this).index();
	//console.log(scroll_top_index);
	//当前层楼梯的内容scroll高度
	var  louti_top=$(".louti_top").eq(scroll_top_index).offset().top;
		//console.log(louti_top)
$("html,body").animate({"scrollTop":louti_top},100);
})

$("#floor_con li:last").click(function  () {
	//获取点击位置的索引值
	
$("html,body").animate({"scrollTop":"0"},100);

})
//获取滚动条高度
$(document).scroll(function  () {
	var scroll=$("html").scrollTop();
	console.log(scroll)
	//如果scrollTop大于100就显示顶部搜索，否则显示
	if (scroll<=100) {
		$("#serch_top").stop().fadeOut(500);
	} else {
		$("#serch_top").stop().fadeIn(500);
	}
	
	
	
	//如果scrollTop小于400就隐藏楼层栏，否则显示
	if (scroll>=400) {
		$("#floor").stop(true).fadeIn ();
	} else {
		$("#floor").stop(true).fadeOut();
	}
	//如果在1000到1500显示电子书楼层展开样式
	if (scroll>=1040&&scroll<1460) {
			//显示文字颜色
	$("#floor_textbook").css("color","#fff");
	//定位图片移动
	$("#floor_textbook").css("background-position-x","-40px");
	
	//背景颜色
	
	$("#floor_textbook").css("background-color","#93d46f");
	//ul变宽
	$("#floor_textbook").stop(true,true).animate({"width":"50px"},40);
	} else{
		//ul变宽
	$("#floor_textbook").stop(true,true).animate({"width":"0px"},40);
		
		$("#floor_textbook").css("color","#fff");
	//定位图片移动
	$("#floor_textbook").css("background-position-x","0px");
	
	//背景颜色
	
	$("#floor_textbook").css("background-color","#fff");
	
	}
	
	
	
		//如果在1580到2100显示服装楼层展开样式
	if (scroll>=1540&&scroll<2060) {
			//显示文字颜色
	$("#floor_cloth").css("color","#fff");
	//定位图片移动
	$("#floor_cloth").css("background-position-x","-40px");
	
	//背景颜色
	
	$("#floor_cloth").css("background-color","#f65727");
	//ul变宽
	$("#floor_cloth").stop(true,true).animate({"width":"50px"},40);
	} else{
		//ul变宽
	$("#floor_cloth").stop(true,true).animate({"width":"0px"},40);
		
		$("#floor_cloth").css("color","#fff");
	//定位图片移动
	$("#floor_cloth").css("background-position-x","0px");
	
	//背景颜色
	
	$("#floor_cloth").css("background-color","#fff");
	
	}
	
		
	
		//如果在1580到2100显示户外楼层展开样式
	if (scroll>=2100&&scroll<2660) {
			//显示文字颜色
	$("#floor_sport").css("color","#fff");
	//定位图片移动
	$("#floor_sport").css("background-position-x","-40px");
	
	//背景颜色
	
	$("#floor_sport").css("background-color","#bb9dee");
	//ul变宽
	$("#floor_sport").stop(true,true).animate({"width":"50px"},40);
	} else{
		//ul变宽
	$("#floor_sport").stop(true,true).animate({"width":"0px"},40);
		
		$("#floor_sport").css("color","#fff");
	//定位图片移动
	$("#floor_sport").css("background-position-x","0px");
	
	//背景颜色
	
	$("#floor_sport").css("background-color","#fff");
	
	}
	
	
	
		
	
		//如果在1580到2100显示童装楼层展开样式
	if (scroll>=2740&&scroll<3320) {
			//显示文字颜色
	$("#floor_children").css("color","#fff");
	//定位图片移动
	$("#floor_children").css("background-position-x","-40px");
	
	//背景颜色
	
	$("#floor_children").css("background-color","#ff7394");
	//ul变宽
	$("#floor_children").stop(true,true).animate({"width":"50px"},40);
	} else{
		//ul变宽
	$("#floor_children").stop(true,true).animate({"width":"0px"},40);
		
		$("#floor_children").css("color","#fff");
	//定位图片移动
	$("#floor_children").css("background-position-x","0px");
	
	//背景颜色
	
	$("#floor_children").css("background-color","#fff");
	
	}
	
		
	
		//如果在1580到2100显示家居楼层展开样式
	if (scroll>=3360&&scroll<3920) {
			//显示文字颜色
	$("#floor_household").css("color","#fff");
	//定位图片移动
	$("#floor_household").css("background-position-x","-40px");
	
	//背景颜色
	
	$("#floor_household").css("background-color","#c2ec51");
	//ul变宽
	$("#floor_household").stop(true,true).animate({"width":"50px"},40);
	} else{
		//ul变宽
	$("#floor_household").stop(true,true).animate({"width":"0px"},40);
		
		$("#floor_household").css("color","#fff");
	//定位图片移动
	$("#floor_household").css("background-position-x","0px");
	
	//背景颜色
	
	$("#floor_household").css("background-color","#fff");
	
	}
	
		
	
		//如果在1580到2100显示推广楼层展开样式
	if (scroll>=3960&&scroll<4530) {
			//显示文字颜色
	$("#floor_generalize").css("color","#fff");
	//定位图片移动
	$("#floor_generalize").css("background-position-x","-40px");
	
	//背景颜色
	
	$("#floor_generalize").css("background-color","#ffda0d");
	//ul变宽
	$("#floor_generalize").stop(true,true).animate({"width":"50px"},40);
	} else{
		//ul变宽
	$("#floor_generalize").stop(true,true).animate({"width":"0px"},40);
		
		$("#floor_generalize").css("color","#fff");
	//定位图片移动
	$("#floor_generalize").css("background-position-x","0px");
	
	//背景颜色
	
	$("#floor_generalize").css("background-color","#fff");
	
	}
	
	
	
	
	
	
	
	
})

//点击返回顶部
$("#fanhuitop").click(function  () {
	$("html,body").animate({"scrollTop":"0"},1000);
})






		
});