$(function(){
	$('form').submit(function(){
		if($(this).children('div.cadiv').children('input').val() == ""){
			return false;
		}else {
			return true;
		}
	});
	//-----
	$('.switch-cpf').click(function(){
		$('div.divcpf div').toggleClass('off');
		$(this).toggleClass('on');
		$('.cadF .divcpf input').blur().val("");
	});
});

$(function(){
	//mascaras
	$('input.cpf').mask('000.000.000-00');
	$('input.cnpj').mask('00.000.000/0000-00');
	$('input.cep').mask('00000-0000');
	$('input.tel').mask('(00) 00000-0000');
});

$(function(){
	$('input.cnpj').keypress(function(){
		alert('teste')
	})
})

//---- Validação

$(function(){
	$('section.cadF form').submit(function() {
		if($(this).children('input#nome').val() != ""){
			alert('erro');
			return false;
		}else{
			return true;	
		}
	});
});