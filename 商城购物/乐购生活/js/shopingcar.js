$(function  () {
		//调用函数  封装  商品数量 已选商品数量    总价
	list_conmmen ();
	
	//全选/反选
	$(".check_all").click(function () {
		//获取当前选框选中状态
		var check=$(this).prop("checked");
		//console.log(check)
		//给其他选框同步选中状态
		$(".check_min").prop("checked",check);
		$(".check_all").prop("checked",check);
		//调用函数  封装  商品数量 已选商品数量    总价
		list_conmmen ();
	})
	//点击单行商品选中事件绑定	
$(".check_min").click(function () {
	
	var check_all=0;
	var check_new=0;
	$(".check_min").each(function () {
		check_all++
		var check=$(this).prop("checked");
		if (check==true) {
			check_new++;
		}
	})
	if (check_all==check_new) {
		$(".check_min").prop("checked","checked");
		$(".check_all").prop("checked","checked");
	}else{
		$(".check_all").prop("checked","");
	}
	
	
	
	//调用函数  封装  商品数量 已选商品数量    总价
		list_conmmen ();
})

	
	//加减绑定点击事件
	$(".jia").click(function () {
		//获取商品数量
		var num=parseInt($(this).prev().val());
		//console.log(num)
		//点击一次自加1
		num++;
		//赋值数量
		$(this).prev().val(num);
		//计算
		//获取单个价格
		var prace= parseFloat($(this).parent().prev().text());
		//console.log(prace)
		//获取自加后的商品数量
		num_new=parseInt($(this).prev().val());
		//赋值单行总价
		 $(this).parent().next().text((prace*num_new).toFixed(2));
		 	//调用函数  封装  商品数量 已选商品数量    总价
		 list_conmmen ();
	})
	
	//减
		$(".jian").click(function () {
		//获取单行商品数量
		var num_jian= parseInt($(this).parent().find(".text").val());
		//console.log(num_jian)
		//判断小于1停止自减
		if (num_jian>1) {
			num_jian--;
		}
		
		//赋值数量
		$(this).parent().find(".text").val(num_jian);
		
		//计算
		//获取单行单价
		var prace_jian= parseFloat($(this).parent().prev().text());
		//console.log(prace)
		//获取自减后的商品数量
		num_jian_new= $(this).parent().find(".text").val();
		//赋值单行总价
		 $(this).parent().next().text((prace_jian*num_jian_new).toFixed(2));
		 	//调用函数  封装  商品数量 已选商品数量    总价
		list_conmmen ();
	})
	
$(".text").blur(function  () {
	//获取单行单价
	var prace= parseFloat($(this).parent().prev().text());
	
	//获取单行商品数量
		var num= parseInt($(this).val());
	//赋值给单行总价
	$(this).parent().next().text((prace*num).toFixed(2));
	//判断输入数量小于1
	if ( num<1) {
		$(this).val(1);
		$(this).parent().next().text(	prace.toFixed(2));
	}
		//调用函数  封装  商品数量 已选商品数量    总价
	list_conmmen ();
})


	//封装  商品数量 已选商品数量    总价
	function list_conmmen () {
		var  num=0;
		var  num_two=0;
		var  price_box=0;
		var price=0;
		
		$(".shopCon").each(function  () {
			//获取商品总量
			num++;
			var check_min=$(this).find(".check_min").prop("checked");
			if (check_min==true) {
				
				//已选商品数量
				var num_o =parseInt($(this).find(".text").val());
				
				num_two+=num_o;
					//已选商品总价
				var price=parseFloat($(this).find(".price").text());
				price_box+=price;
				//console.log(price_box)
				
				
			}
			//单行的总价
				var price1=parseFloat($(this).find(".price_min").text());
				var num1=parseInt($(this).find(".text").val());
				price=price1*num1;
			//console.log(price1)
			//console.log(num1)
			$(this).find(".price").text(price.toFixed(2));
		})
		$(".misg .num_button").text(num);
		$("#mun_t .num_button").text(num_two);
		$(".indentR_box span").text(price_box.toFixed(2));
		
		
	}
	
	
	
	
	
	
	
	//移入商品显示背景颜色
	$(".showConMin").mouseover(function () {
		$(this).addClass("showConMinClick").siblings().removeClass("showConMinClick");
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})






