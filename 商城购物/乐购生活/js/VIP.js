$(function  () {
	//轮播配置参数
	$("#boxAnimate").tyslide({
			boxh:476,//盒子的高度
			w:724,//盒子的宽度
			h:476,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:false,//是否显示左右按钮
			controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:16,//控制按钮宽度
			controlsH:16,//控制按钮高度
			radius:8,//控制按钮圆角度数
			controlsColor:"#666",//普通控制按钮的颜色
			controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	
	//鼠标移入显示购物车
	$("#legoquanCon .legoquanConMin").mouseover(function  () {
		//鼠标移入商品框显示购物车移开就隐藏
		$(this).find(".legoquanConMinC").stop(true).slideDown();
		$(this).siblings().find(".legoquanConMinC").stop(true).delay(10).slideUp();
	});
	
	
//鼠标移入显示购物车
	$("#VIPCon .legoquanConMin").mouseover(function  () {
		//鼠标移入商品框显示购物车移开就隐藏
		$(this).find(".legoquanConMinC").stop(true).slideDown();
		$(this).siblings().find(".legoquanConMinC").stop(true).delay(10).slideUp();
	})
	




});