$(function(){
	
	$('.place').each(function(){
				var place =$(this).attr('title');
				var input = $(this); // pega o input com esta class
				
				input
					.val(place)
					.css('color', '#ccc')
					.focusin(function(){
						if(input.val() == place){
							input.val('');
							input.css('color', '#000');
						}})
					.focusout(function(){
						if(input.val() == ''){
							input.val($(this).attr('title'));
							input.css('color', '#ccc');
						}
					});
			});

	//keypress captura algums teclas com exceção do shift ...
	var ex = $('.ex1');
	$('.key_press').keypress(function(){
		ex.text($(this).val());
	});

	//keydown captura todas as teclas sem exceção
	$('.key_down').keydown(function(){
		ex.text($(this).val());
	});

	//keyup para disparar o evento em tempo real
	$('.key_up').keyup(function(){
		ex.text($(this).val());
	});

});