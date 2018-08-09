define(["jquery"],function($){
	return dialog={
		int:function(){
			var dialogHTML="<div class='dialog'></div><div title='点击返回' class='dialog-mask'></div>";
			var body=$("body");
			body.append(dialogHTML);
			$(".dialog-mask").click(function() {
				dialog.hide();
			})

		},
		show:function(content){
			var dialog=$(".dialog");
			dialog.html(content);
			dialog.fadeIn(100).next().fadeIn(100);
		},
		hide:function(){
			var dialog=$(".dialog");
			dialog.fadeOut(100).next().fadeOut(100);

		},
		name:"zhangsan"
	}
})