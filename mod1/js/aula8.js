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
	
	//event focusin ao ganhar o foco
	$('.ev1').focus(function(){
		ex.text($(this).attr('title'));
	}).keyup(function(){
		if($(this).val() == 'pontocom'){ //ao encontrar o valor pontocom muda o foco
			$('.ev2').focus(); //passa o foco para o ev2
		}
	});

	//event blur ao perder o foco
	$('.ev1').blur(function(){
		ex.text('Saida do campo: ' + $(this).attr('name'));
	});

	//event change ao mudar o estado/valor do campo
	$('.ev3').change(function(){
		ex.text('Mudança do estado/valor do campo: ' + $(this).val());
	});

	//event click, event select and form submit block
	$('.selecionar').click(function(){
		$('.ev4').select();
		$('form').submit(function(){
			return false;
		});
	});

});