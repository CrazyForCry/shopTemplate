
$(function  () {
			//焦点事件绑定
//用户名聚焦事件
		$("#username").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#username").prop('placeholder','')
		});
		
		//失去焦点事件
		$("#username").blur(function  () {
			//设置一个属性，
			$("#username").prop('placeholder','您的帐户名和登录名')
		});

//密码聚焦事件
		$("#passworld").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#passworld").prop('placeholder','')
		});
		
		//失去焦点事件
		$("#passworld").blur(function  () {
			//设置一个属性，
			$("#passworld").prop('placeholder','建议设置两种字符密码')
		});
		//再次输入密码聚焦事件
		$("#passworldT").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#passworldT").prop('placeholder','')
		});
		
		//失去焦点事件
		$("#passworldT").blur(function  () {
			//设置一个属性，
			$("#passworldT").prop('placeholder','再次输入密码')
		});

//手机号聚焦事件
		$("#tle").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#tle").prop('placeholder','')
		});
		
		//失去焦点事件
		$("#tle").blur(function  () {
			//设置一个属性，
			$("#tle").prop('placeholder','建议使用常用手机号')
		});

//验证码聚焦事件
		$("#verify").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#verify").prop('placeholder','')
		});
		
		//失去焦点事件
		$("#verify").blur(function  () {
			//设置一个属性，
			$("#verify").prop('placeholder','请输入验证码')
		});

//手机验证码聚焦事件
		$("#tleverify").focus(function  () {
			//设置一个属性placeholder的值为空
			$("#tleverify").prop('placeholder','')
		});
		
		//失去焦点事件
		$("#tleverify").blur(function  () {
			//设置一个属性，
			$("#tleverify").prop('placeholder','输入手机验证码')
		});
		
		
		
//表单验证	
$("#msgform").submit(function  () {
 	//用户名验证，4到16位（字母，数字，下划线，减号）
	var username=$("#username").val();
	var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
	if (username.length==0) {
		$("#username_hint").html("<p class='publicCon_hint_crux'>*<span class='publicCon_hint_crux'>请输入内容</span></p>");
		return false;
	}else if (!uPattern.test(username)) {
		$("#username_hint").html("<p class='publicCon_hint_common'>用户名输入格式有误</span></p>");
		return false;
	} else{
		$("#username_hint").html("<p class='publicCon_hint_common'></span></p>");
		
	}
	
	//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
	var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
	var passwords=$("#passworld").val();
	//console.log(passwords)

	if (passwords.length==0) {
		$("#password_hint").html("<p class='publicCon_hint_crux'>*<span class='publicCon_hint_crux'>请输入密码</span></p>");
		return false;
	}else if (!pPattern.test(passwords)) {
		$("#password_hint").html("<p class='publicCon_hint_common'>密码输入格式有误</span></p>");
		return false;
	} else{
		$("#password_hint").html("<p class='publicCon_hint_common'></p>");
		
	}
	

//确认密码
var passworldT=$("#passworldT").val();
	
		if (passworldT.length==0) {
			$("#passworldT_hint").html("<p class='publicCon_hint_crux'>*<span class='publicCon_hint_crux'>确认密码不能为空，请再次输入密码</span></p>");
			return false;
		}else if (!passworldT==passwords) {
			$("#passworldT_hint").html("<p class='publicCon_hint_crux'>*<span class='publicCon_hint_crux'>两次密码不一致</span></p>");
			return false;
		}else{
			$("#passworldT_hint").html("<p class='publicCon_hint_crux'><span class='publicCon_hint_crux'></span></p>");
			
		}

	
	//手机号正则
	var mPattern = /^[1][3][0-9]{9}$/;
	var tle=$("#tle").val();
	

	if (tle.length==0) {
		$("#tle_hint").html("<p class='publicCon_hint_crux'>*<span class='publicCon_hint_crux'>请输入手机号</span></p>");
		return false;
	}else if (!mPattern.test(tle)) {
		$("#tle_hint").html("<p class='publicCon_hint_common'>请输入正确的手机号</span></p>");
		return false;
	} else{
		
	
	}

	
	
	
	//选中框
	 var checkbox1 = $('.checkbox111').prop("checked");
	 //console.log(checkbox1);
	if (checkbox1==true) {
		return true;
		
	}else{
		return false;
	}
	
})
		


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
		});
		

