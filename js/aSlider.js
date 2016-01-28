$(document).ready(function(){
	
	var image_height=$("#slider li img").height();
	var no_li=$("#slider ul li").size();
	var emSize = parseFloat($("body").css("font-size")); 
	var max_width=$("#slider li img").width();;
	
	$( "#slider li img" ).each(function( index ) {
  		if ( $(this).width() < max_width ){
  			max_width=$(this).width();
  		}
	});

	image_width=max_width;

	$("#left, #right").css(
  		"top", -image_height/2-50
  	);

  	$("#right").css(
  		"left", image_width+6*emSize
  	);

	$("#slider, #slider ul li").css(
  		"width", image_width
  	);

  	$("#slider ul").css(
  		"width", image_width*no_li
  	);

  	$("#slider ul img").css(
  		"max-width", image_width
  	);

	add_click();
		
	function move_right(){

		remove_click();

		$("#slider ul").css("margin-left",-image_width);
		$("#slider ul li:last").prependTo("#slider ul");
		$("#slider ul").animate({"margin-Left":0},1000,function(){
			add_click();
		});	
	};

	function move_left(){

		remove_click();

		$("#slider ul").animate({
			"margin-left" : "-="+image_width+"px"
			}, 1000,function(){

			$("#slider ul li:first").appendTo("#slider ul");
			$("#slider ul").css("margin-left",0);
			add_click();
		});
	};

	function remove_click(){
		$("#right").unbind();
		$("#left").unbind();
	}

	function add_click(){
		$("#right").bind("click", move_right);
		$("#left").bind("click", move_left);
	}
		
});
