$(function  () {
	//滑动菜单效果
	$("#enterConMin ul li").mouseover(function  () {
		//移入显示隐藏
		$(this).addClass("liclick").siblings().removeClass('liclick')
		//获取索引值
		var index=$(this).index();
		//显示对应内容
		$(".content").eq(index).stop(true,true).fadeIn();
		//隐藏其他内容
		$(".content").eq(index).siblings().css("display","none");
	})
	
	
	
	
	
	
//鼠标聚焦/失去焦点事件绑定
//用户名聚焦
$("#username").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#username").prop('placeholder','')
		});

//用户名失去焦点
$("#username").blur(function  () {
		//设置一个属性，
		$("#username").prop('placeholder','用户名')
	});

//密码聚焦事件
$("#password").focus(function  () {
	//设置一个属性placeholder的值为空
	$("#password").prop('placeholder','')
});

//失去焦点事件
$("#password").blur(function  () {
	//设置一个属性，
	$("#password").prop('placeholder','建议设置两种字符密码')
});




//鼠标移入二维码显示后边手机图片
$("#saoma .saoma_o").hover(function  () {
	//移入显示
	$("#saoma .saoma_t").stop(true,true).fadeIn();
},function  () {
	//移出隐藏
	$("#saoma .saoma_t").stop(true,true).fadeOut();
})



//用户名键盘抬起事件
			
			$("#username").keyup(function  () {
			var a=$("#username").val().length;
			if (a>0) {
				$("#img").css("display","block");
			} else{
				$("#img").css("display","none");
			}
		});
//点击按钮，清空内容，图片隐藏
		$("#img").click(function  () {
			$("#username").focus();
			$("#username").val("");
			$(this).css("display","none")
		})

$("#myform").submit( function  () {
	//用户名正则，
	var use=$("#username").val();
	var uPattern = /^[a-zA-Z0-9_]{4,16}$/;
	if (use==0) {
		$(".dis_listO").html("<span class='dis_list'>请输入用户名</span>")
		return false;
	} else if (!uPattern.test(use)) {
		$(".dis_listO").html("<span class='dis_list'>用户名输入有误</span>")
		return false;
	}  else{
		$(".dis_listO").html("<span class='dis_list'></span>")
	}{

	}
	
	//密码强度正则
	var pPattern =/^[a-zA-Z]\w{5,17}$/;
	var  passwo=$("#password").val();
	if (passwo==0) {
		$(".dis_listO").html("<span class='dis_list'>请输入密码</span>")
		return false;
	} else if (!pPattern.test(passwo)) {
		
		$(".dis_listO").html("<span class='dis_list'>密码输入有误</span>")
		return false;
	} else{
		$(".dis_listO").html("<span class='dis_list'></span>")
	}
	
	
	
	
	
})

//js原生代码
		
		/*myform.onsubmit=function () {
			console.log(username,myform);
			var usernamere=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
				var tishi=document.getElementsByClassName("tishi");
				console.log(tishi);
			if(!usernamere.test(username.value)){
				
				alert("用户名输入有误，字母开头，允许5-16字节，允许字母数字下划线");
				
				return false;
			}
			var passwordre=/^[a-zA-Z]\w{5,17}$/;
			var password1=document.getElementById("password");
			console.log(password1);
		
			if(!passwordre.test(password1.value)){
				alert("密码输入有误，以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
				
				return false;
			}
		}*/
		
		





})













