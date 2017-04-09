$(function(){
	
	var ex = $('.ex1');
	var ex2 = $('.ex2');
	var button = $(':button'); //encapsulamento do elemento  a partir de seu type (:)

	//efeito de desvanecimento com fadeIn e fadeOut
	button.click(function(){
			ex.fadeOut('slow');
		}).dblclick(function(){
			ex.fadeIn('slow');
	});

	//efeito de fadeTo desvanicimento com velocidade e quantidade controladas
	$('.ef2').mouseover(function(){
		ex.fadeTo('slow', 0.5); //velocidade e qtd. opacidade
	}).mouseout(function(){
		ex.fadeTo('fast', 1.0);
	});	

	//efeito de fadeToggle
	$(':text').keypress(function(){
		ex2.fadeToggle('stlow');
	});


	//efeito fadeTo com callback - o que irá acontecer depois que a função for executada
	$('textarea').focus(function(){
		ex.fadeTo(3000, 0.1, function(){
					ex2.fadeTo('slow', 0.5);
					ex2.css({'color':'red', 'font-weight':'bold'});
				}); //fadeTo com callback
	});

});