$(function  () {
	//添加购物车点击事件
	$(".backCardAdd").click(function  () {
		//点击后复制目标节点
	var a='<div class="backCardNew clear">'+
				'<p class="but">银行卡<img class="xuanzhong" src="img/xuanzhong.png"/></p>'+
				'<p><span>中国国招商银行</span><span class="backCardred ">网银</span><span class="backCardgay">最近使用</span></p>'+
				'<p class="backCardAdd backCardAddOther">删除银行卡+</p>'+
			'</div>';
		//把复制的加到目标位置
		$("#backCardleft").append(a);
		
	});
	
	//银行卡点击效果事件绑定
	$("#backCardleft").delegate(".but","click",function  () {
		//点击改变颜色
			$(this).css("border","solid 1px red");
			//其他的恢复颜色
			$(this).parent().siblings().find("p").css("border","solid 1px #bfbfbf");
			//点击出的图片角标显示
			$(this).find(".xuanzhong").css("display","block");
			//其他的隐藏
			$(this).parent().siblings().find(".xuanzhong").css("display","none");
		});
	//添加后的银行卡删除事件绑定
	$("#backCardleft").delegate(".backCardAddOther","click",function  () {
		//点击对应位置删除此行
			$(this).parent().remove();
		});
		
		
		
});
