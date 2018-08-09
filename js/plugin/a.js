require(["plugin/dialog","plugin/input"],function(dialog,input){

	(function(){

		show();
		//alert($);
		input.sayHi();
		input.sayhello();
		dialog.int();
		var loginBtn=$("#login");
		loginBtn.click(function(){
			var accountVal=$("#account").val();
			var password=$("#password").val();
			if(!accountVal||accountVal.length<4){
				dialog.show("请填写正确账户");
				return false;
			}
			if(!password||password.length<6){
				dialog.show("请填写正确密码");
				return false;
			}
			loginBtn.attr("disabled",true);
			loginBtn.css("opacity","0.3");
			dialog.show("登陆成功");
		});
	}())
	function show(){
			alert("hihihitttt");
		}
});