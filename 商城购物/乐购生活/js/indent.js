$(function  () {
	$(".xuanzhongPublicaddress").css("border","#ff6700 2px solid");
	$(".xuanzhongPublicaddress").find("img").css("display","block");
	//种类选择点击事件
	$("#addressMin .xuanzhongPublic").click(function  () {
		$(this).css("border","#ff6700 2px solid");
		$(this).siblings("#addressMin .xuanzhongPublic").css("border","#e6e6e6 2px solid");
		$(this).find("img").css("display","block");
		$(this).siblings().find("img").css("display","none");
});
	
		$("#alipay .xuanzhongPublic").click(function  () {
		$(this).css("border","#ff6700 2px solid");
		$(this).siblings("#alipay .xuanzhongPublic").css("border","#e6e6e6 2px solid");
		$(this).find("img").css("display","block");
		$(this).siblings().find("img").css("display","none");
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
		
	
	
	
});