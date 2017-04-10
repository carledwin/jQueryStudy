$(function(){

	var composObrigatorios = $('.composObrigatorios');
	$(':text').css({'border':'#ccc solid 1px'});
	
	var empCnpj = $(':text#empCnpj');
	var empRazaoSocial = $(':text#empRazaoSocial');
	var empNomeFantasia = $(':text#empNomeFantasia');
	var empEmail = $(':text#empEmail');
	var empDdd = $(':text#empDdd');
	var empTipoTelefone = $(':text#empTipoTelefone');
	var empTelefone = $(':text#empTelefone');
	
	var respCpf = $(':text#respCpf');
	var respNomeCompleto = $(':text#respNomeCompleto');
	var respDdd = $(':text#respDdd');
	var respTipoTelefone = $(':text#respTipoTelefone');
	var respTelefone = $(':text#respTelefone');

	var atenCpf = $(':text#atenCpf');
	var atenNomeCompleto = $(':text#atenNomeCompleto');
	var atenDdd = $(':text#atenDdd');
	var atenTipoTelefone = $(':text#atenTipoTelefone');
	var atenTelefone = $(':text#atenTelefone');


	$('#btn-cadastrar').click(function(){

		$(':text').css({'border':'#ccc solid 1px'})
				  .each(function(){

				  		composObrigatorios.text('Os campos: ');

						if($(this).val() == ''){
							$(this).css({'border':'red solid 1px'});	
							var name = $(this).attr('name');
							var textoCamposObrigatorios = composObrigatorios.val() + name;
							
							composObrigatorios.text(textoCamposObrigatorios);
						}


	
				  });
		
		
	});
});