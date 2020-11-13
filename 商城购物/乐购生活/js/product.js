$(function  () {
	//默认第一个添加样式和显示图片
	$(".shopingSelect:eq(0)").css("border","#ff6700 2px solid");
		$(".shopingSelect:eq(0)").find("img").css("display","block");
	//种类选择点击事件
	$(".shopingSelect").click(function  () {
		//点击的添加样式和显示图片，其他的去除样式隐藏图片
		$(this).css("border","#ff6700 2px solid");
		$(this).siblings().css("border","#6c6c6c 2px solid");
		$(this).find("img").css("display","block");
		$(this).siblings().find("img").css("display","none");
});
	
	
	
	//购物车前面商品数量点击事件
	var a=$("#number input").val();
	//鼠标点击加号事件绑定
	$(".numberJia").click(function  () {
		//点击一次赋值input文本加一
		$("#number input").val(a++);
	});
	//鼠标点击减号事件绑定
	$(".numberjian").click(function  () {
		//判断商品数量是否为负数或0
		//如果小于等于0则不再自减
		if (a==1) {
			$("#number input").val(1);
		} else{
			//如果不小于等于0则点击一次赋值input文本减一
		$("#number input").val(a--);
		}
	});
	
	
	//移入移除商品添加/去除class样式
	$("#showCon .showConMin").mouseover(function  () {
		//移除全部的新样式
		$("#showCon .showConMin").removeClass("showConMinClick");
		//添加移入的地方的class属性
		$(this).addClass("showConMinClick");
	});
	
//绑定鼠标移入事件
$("#contentRTitle p").mouseover(function () {
	$(this).addClass("titleclick").siblings().removeClass("titleclick");
	var index=$(this).index();
	$(".contentR_con").stop(true).hide();
	$(".contentR_con").eq(index).stop(true).fadeIn();
})
	
	
	
	
	
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
		
	
//移入评价事件绑定	
$(".pingjia li ").mouseover(function  () {
	//对应标题加高亮其他移除
	$(this).find("a").addClass("current");
	$(this).siblings().find("a").removeClass("current");
	//获取索引
	var index=$(this).index();
	//显示对应内容，隐藏其他内容
		$(".pingjia_con").stop(true).fadeOut();
	$(".pingjia_con").eq(index).stop(true).fadeIn();
})
	
	
	
	
	
	
	
	
	
	
});












