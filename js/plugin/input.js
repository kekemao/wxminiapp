define(["jquery","plugin/dialog"],function($,d){
	var inputText=$(".input-text");
	inputText.focus(function(){
	var target=$(this);
	target.addClass("focus");
	});
	inputText.blur(function(){
		var target=$(this);
		target.removeClass("focus");
	});
	function sayHi(){
		alert("Hi"+d);
		console.log(d.name);
	}
	function sayhello(){
		alert("hello")
	}
	
	return {
		sayHi:sayHi,
		sayhello:sayhello

	}; 
})
