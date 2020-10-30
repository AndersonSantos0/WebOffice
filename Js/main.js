//---------------------//
// Sistema de pesquisa //
//---------------------//

$(function(){
	$('#pesquisa input').keyup(function() {
		if($(this).val() != ""){
			$(this).offsetParent().children('div').addClass('on');
			if($(this).offsetParent().children('div').children('img').attr('src') != 'svg/lup.on.svg'){
			$(this).offsetParent().children('div').children('img').attr('src','svg/lup.on.svg');
			}
		}else {
			$(this).offsetParent().children('div').removeClass('on');
			if($(this).offsetParent().children('div').children('img').attr('src') != 'svg/lup.svg'){
			$(this).offsetParent().children('div').children('img').attr('src','svg/lup.svg');
			}
		}
	});
	//-----
	//#####
	//-----
	$('div#user p').click(function() {
		var select = $('div#user-select');
		select.toggleClass('on');
		$(this).toggleClass('on');
		if(select.attr('class') == "on" && $(this).attr('class') == "on"){
			tempo = setTimeout(function(){
			select.removeClass('on');
			$("div#user p").removeClass('on'); },8000);
		}else {
			clearTimeout(tempo);
		}
	});
});

//------------------//
// Página principal //
//------------------//

$(function(){
	$(".mainButton").hover(function() {
		$(this).addClass('on');
	}, function() {
		$(this).removeClass('on');
	});
});

//-------//
// Aside //
//-------//

$(function(){
	function tempo(){}
	$('div#filters-select').click(function(){
		$(this).toggleClass('on');
		if($(this).hasClass('on') == true){
			tempo = setTimeout(function(){ $('div#filters-select').removeClass('on') },5000);
		}else{
			clearTimeout(tempo);
		}
	});
	//-----
	//#####
	//-----
	$('div#filters-select li.option').click(function(){
		var filtro = $(this).text();

		if($('div#filters-select li#selected-filter').text() == filtro){
			$('div#filters-select li.option').removeClass('on');
			$('div#filters-select li#selected-filter').text("Filtrar projetos");
		}else{
			$('div#filters-select li.option').removeClass('on');
			$(this).addClass('on');
			$('div#filters-select li#selected-filter').text(filtro);
		}

	});
	//-----------------//
	//#################//
	//-----------------//
	$('#skills-select').submit(function(){
		if($(this).children('input').val() != ""){
			tag = $('#skills-select input').val();
			$('.skillTags').append('<p class="skill" tag="'+tag+'">'+ tag +'</p>');
			$(this).children('input').val("");
		}

		$('div.skillTags p.skill[tag="'+tag+'"]').hover(function() {
			$('div.skillTags p.skill.click').removeClass('click');
			$(this).addClass('click');
			$(this).click(function() {
				$(this).fadeOut('1000', function(){ $(this).remove(); });
			});
		});

		return false;
	});

	
});

//-----
// Sistemas do Cadastro
//-----

$(function(){
	$('h2.switch').click(function() {
		$('section.container-cadastro').toggleClass('off');
	});
	$('h2.switch').click(function() {
		$('body').toggleClass('Emp');
	});
});

//-----
// Sistema de placeholder
//-----


$(function(){
	$('.container-cadastro input,.access input').focus(function() {
		$(this).offsetParent().children('label').addClass('on');
	});
	$('.container-cadastro input,.access input').blur(function() {
		if($(this).val() == ""){
			$(this).offsetParent().children('label').removeClass('on');
		}
	});
});

$(function(){
	setInterval(function(){
		//console.log($('#user p').text().substring(6, 0));
		firstName = $('#user p').text().substring($('#user p').text().indexOf(" "), 0);
		if(firstName != ""){
			$('#user p').text(firstName);
		}
		userWidth = $('#user p').width();
		$('#user-select').width(userWidth + 35);
	});
});

$(function(){

	function formatNumber(num) {
  		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	$('.count').each(function () {
   		$(this).prop('Counter',0).animate({
        	Counter: $(this).text()
   		}, {
        	duration: 3000,
        	easing: 'swing',
        	step: function (now) {
            		$(this).text(formatNumber(Math.ceil(now)));
        	}
    	});
	});
});