$(function  () {
	list_conmmen () ;
	
	//全选/反选
	$(".check_all").click(function () {
		//获取当前选框选中状态
		var check=$(this).prop("checked");
		//console.log(check)
		//给其他选框同步选中状态
		$(".check_min").prop("checked",check);
		$(".check_all").prop("checked",check);
		
		list_conmmen () ;
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
list_conmmen () ;
})
//封装  商品数量 已选商品数量    总价
	function list_conmmen () {
		var  num=0;
		var  num_two=0;
		var  price_box=0;
		
		$(".shopCon").each(function  () {
			//获取商品总量
			num++;
			var check_min=$(this).find(".check_min").prop("checked");
			if (check_min==true) {
				
				//已选商品数量
				num_two++;
					//已选商品总价
				var price=parseFloat($(this).find(".price_min").text());
				price_box+=price;
				//console.log(price_box)
				
				
			}
		})
		$(".misg .num_button").text(num);
		$("#mun_t .num_button").text(num_two);
		$(".indentR_box span").text(price_box.toFixed(2));
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
