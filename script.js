$(document).ready(function(){
	var pics = {"b1":"GhostFiddle.jpg","a1":"http://dummyimage.com/1100x1100"
				,"b2":"GA.jpg","a2":"http://dummyimage.com/1100x1100"
				,"b3":"PipelinedZoom.png","a3":"http://dummyimage.com/1100x1100"}
	$(".picLabel").hover(function(){
		var num = $(this).attr("name");
		$("#exp" + num).attr("src",pics["a"+num]);
		$(".t"+num).toggleClass("hidden");
	}, function(){
		var num = $(this).attr("name");
		$("#exp" + num).attr("src",pics["b"+num])
		$(".t"+num).toggleClass("hidden");
	}).click(function(){
		var num = $(this).attr("name");
		if($("#des" +num).hasClass("hidden")){
			$(".projDescription").css({"height":"0"})
			.css({"width":"0"})
			.addClass("hidden");
			$("#des" +num).toggleClass("hidden")
			.animate({"width":"100%"},100)
			.animate({"height":"300px"},300);
		}else{
			$("#des" +num).css({"height":"0"})
			.css({"width":"0"})
			.toggleClass("hidden");
		}
			
	});
	$("#nav li").click(function(){
		var loc = "#" + $(this).attr('name');
		console.log(loc);
		$(document.body).animate({'scrollTop':$(loc).offset().top}, 300); 
	});

});