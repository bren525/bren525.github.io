$(document).ready(function(){
	var pics = {"b1":"GhostFiddle.jpg","a1":"GhostGlass1.jpg"
				,"b2":"GA.jpg","a2":"PredPreyGraph.png"
				,"b3":"PipelinedZoom.png","a3":"VerilogWave.png"}
	$(".picLabel").hover(function(){
		var num = $(this).attr("name");
		$("#exp" + num).attr("src",pics["a"+num]);
		$(".t"+num).toggleClass("hidden");
		$("#exp" + num).css({"opacity":"1"});
	}, function(){
		var num = $(this).attr("name");
		$("#exp" + num).attr("src",pics["b"+num])
		$(".t"+num).toggleClass("hidden");
		$("#exp" + num).css({"opacity":"1"});
	}).click(function(){
		var num = $(this).attr("name");
		if($("#des" +num).hasClass("hidden")){
			$(".projDescription").css({"height":"0"})
			.css({"width":"0"})
			.addClass("hidden");
			$("#des" +num).toggleClass("hidden")
			.animate({"width":"100%"},100)
			.animate({"height":"200px"},300);
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