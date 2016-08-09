;$(function(){
	var $menu = $('#nav-menu'),
	 	$mask = $('.mask'),
	 	$sidebar =$('#sidebar'),
	 	$pagetop=$('#btn_pagetop');
	 	$pagetop_a=$('#btn_pagetop_a');

	function showaside(){
		$mask.fadeIn();
		$sidebar.css('right',0);
	}
	function hideaside(){
		$mask.fadeOut();
		$sidebar.css('right',-$sidebar.width());
	}

	$menu.click(showaside);
	$mask.click(hideaside);
	$pagetop_a.click(function(){
		$('html,body').animate({scrollTop:0},800);
		return false;
	}).mouseover(function(){
		$(this).css('opacity',0.5);
	}).mouseout(function () {
		$(this).css('opacity',1);
	});
	$(window).on('scroll',function(){
		console.log($(window).scrollTop()+400);
		console.log($('.content').offset().top);
		if ($(window).scrollTop()+400>$('.content').offset().top)
		{
			$pagetop.fadeIn();
		}else{
			$pagetop.fadeOut();
		}
	}).trigger('scroll')

});