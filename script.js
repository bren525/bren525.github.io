$(document).ready(function(){
	$("#exp1").hover(function(){
		$(this).attr("src","http://dummyimage.com/1100x1100");
		$(".t1").toggleClass("hidden");
	}, function(){
		$(this).attr("src","GhostFiddle.jpg")
		$(".t1").toggleClass("hidden");
	}).click(function(){
			
	});
	$("#exp2").hover(function(){
		$(this).attr("src","http://dummyimage.com/1100x1100");
		$(".t2").toggleClass("hidden");
	}, function(){
		$(this).attr("src","GA.jpg");
		$(".t2").toggleClass("hidden");
	}).click(function(){
			
	});
	$("#exp3").hover(function(){
		$(this).attr("src","http://dummyimage.com/1100x1100");
		$(".t3").toggleClass("hidden");
	}, function(){
		$(this).attr("src","GhostFiddle.jpg");
		$(".t3").toggleClass("hidden");
	}).click(function(){
			
	});

});