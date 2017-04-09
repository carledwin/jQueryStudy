$(function(){

	//pegando o elemento com id slide o primeiro elemento filho index 0
	$('#slide img:eq(0)').addClass("ativo").show();	

	var texto = $('.ativo').attr('alt');
	$('#slide').prepend('<p>'+texto+'</p>');

	//temporizador
	setInterval(slide,3000);

	function slide(){
		//se a proxima imagem existir
		if($('.ativo').next().size()){
			$('.ativo').fadeOut()
					   .removeClass("ativo")
					   .next()
					   .fadeIn()
					   .addClass("ativo");
		}else{
			$('.ativo').fadeOut()
						.removeClass("ativo");
			$('#slide img:eq(0)').fadeIn()
								 .addClass("ativo");
		}

		var texto =$('.ativo').attr("alt");
		$('#slide p').hide()
					 .html(texto)
					 .delay(500)
					 .fadeIn();
	}
     
});