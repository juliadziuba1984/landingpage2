$(document).ready(function(){
/*block_menu_services_mobile_links click*/
 $('.block_menu_services_mobile_links_inner a').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	if($(this).parent().hasClass('closed')){
		$(this).parent().css('height','auto');
		$(this).parent().toggleClass('closed');
	}
	else{
		$(this).parent().css('height','46px');
		$('.block_menu_services_mobile_links_inner').toggleClass('closed');
		location.href=$(this).attr('href');
	}
})
$('body').click(function(){
    $('.block_menu_services_mobile_links_inner').addClass('closed');
    $('.block_menu_services_mobile_links_inner').css('height','46px');
})
/*end block_menu_services_mobile_links click*/

/*reviews_slider*/
var reviews_slider = new Swiper('.block_reviews .swiper-container', {
	slidesPerView: '1',
	spaceBetween: 0,
	loop:true,
	nextButton: '.block_reviews .js_next',
	prevButton: '.block_reviews .js_prev',
	mousewheelControl: false,
	speed:700,
	effect: 'slide'
});	
/*end reviews_slider*/
    	
/*Revealing list click*/
$('.js_holder.active').find('.js_block').css('display', 'block');
$('.js_heading').click(function(e){
	e.preventDefault();
	if($(this).parent().hasClass('active')){
		
		$(this).parent().find('.js_block').slideUp(300,function(){
			$(this).parent().removeClass('active');
		});
	 }
	 else{
		$(this).parent().addClass('active');
		$(this).parent().find('.js_block').slideDown();
	 }
});	
/*end Revealing list click-*/	

/*show mobile menu*/
$('.btn_menu').click(function(e){
	e.preventDefault();
	$('.block_menu_inner').slideToggle();
})
/*end show mobile menu*/  
})