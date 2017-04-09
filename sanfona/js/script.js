$(function() {

    $('.titulo').click(function(){

    	//encapsula o filho com a class conteudo .... this ('.titulo') volta no parent no ancestral ('.caixa')
    	var conteudo = $(this).parent().find('.conteudo');
    	
    	//verifica se o elemento filho não contém a class show
    	if(!conteudo.hasClass('show')){//se não tiver a class show
    		
    		//busca o elemento que contém a class show e a substitui pela class hide e que está em exibição
    		$('.caixa').find('.show')
    				  .slideUp('fast', function(){
    				  		$(this).removeClass('show')
    				  			   .addClass('hide');
    				  });

    		//exibe o conteudo
    		conteudo.slideDown('slow', function(){
    			$(this).removeClass('hide')
    				   .addClass('show');
    		});		  
    	}
    });

});