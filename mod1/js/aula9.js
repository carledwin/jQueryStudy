$(function(){
	
	var ex = $('.ex1');

	//hide esconde o elemento (this).hide('slow'); //(), ('slow'), ('fast'), ('1000')
	$('.ev1a').click(function(){
		ex.hide();
	});

	$('.ev1b').click(function(){
		ex.hide('slow');
	});

	$('.ev1c').click(function(){
		ex.hide('fast');
	});

	$('.ev1d').click(function(){
		ex.hide(5000);
	});


	//show exibe o elemento
	$('.ev2a').click(function(){
		ex.show();
	});

	$('.ev2b').click(function(){
		ex.show('slow');
	});

	$('.ev2c').click(function(){
		ex.show('fast');
	});

	$('.ev2d').click(function(){
		ex.show(3000);
	});

	//toggle alterna entre hide e show,  if element hide > show or element show > hide
	$('.ev3a').click(function(){
		ex.toggle();
	});

	$('.ev3b').click(function(){
		ex.toggle('slow');
	});

	$('.ev3c').click(function(){
		ex.toggle('fast');
	});

	$('.ev3d').click(function(){
		ex.toggle(7000);
	});

	//event keyup ao terminar de digitar
	$('.ev4').keyup(function(){
		var texto = $(this).val();

		if(texto == 'hide'){
			ex.hide();
		}

		if(texto == 'show'){
			ex.show();
		}

		if(texto == 'toggle'){
			ex.toggle();
		}
	});

});