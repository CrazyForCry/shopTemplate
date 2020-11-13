$(function () {
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
	$(".boxAnimate1").tyslide({
			boxh:227,//盒子的高度
			w:330,//盒子的宽度
			h:227,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:20,//控制按钮宽度
			controlsH:4,//控制按钮高度
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	$(".boxAnimate2").tyslide({
			boxh:340,//盒子的高度
			w:424,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:20,//控制按钮宽度
			controlsH:4,//控制按钮高度
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
			isNumber:false //是否需要数字
	});
	
});