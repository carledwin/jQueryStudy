$(function(){
	

	/*
	$('img').error(function(){
		$('img').attr("src","img/error.jpg");	
	});
	*/

	$('img').error(function(){
		var imagem = $(this).attr('src');
		/* 
		alert('Imagem ' + imagem+ ' indisponível.');
		*/
		$(this).attr('src', 'img/error.jpg')
	});

	$('img')
		.width($(window).width())
		.height($(window).height());

	$(window).resize(function(){
					$('img')
						.width($(window).width())
						.height($(window).height());
				});						


	$('body').css('height','2000px');

	$(window).scroll(function(){
				var topo = $(window).scrollTop();
				//alert(topo);
				if(topo > 60){
					$('img').fadeOut('1000');
				}else{
					$('img').fadeIn('1000');
				}
				});
});