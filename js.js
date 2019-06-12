
$(document).ready(function(){
	
	//Alerta de boas vindas
	$( window ).load(function() {
		d = new Date();
		hour = d.getHours();
		  if(hour >= 6 && hour < 12)
		{
		   $("#boas_vindas").html("<h2>Olá, Bom dia!</h2><br>");
		}
		else
		if(hour >= 12 && hour < 18)
		{
		    $("#boas_vindas").html("<h2>Olá, Boa tarde!</h2><br>");
		}
		else
		if(hour >= 18 || hour < 6)
		{
		   $("#boas_vindas").html("<h2>Olá, boa noite!</h2><br>");
		}
	});

	$("#btn_enviar").click(function(){

		//verifica E-mail
		var email = $("#inputEmail").val();
		 if ((email.length != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 1)))
		  {
		    alert('Email inválido');
		  }


		  //verifica mensagem
		  var mensagem = $("#comment").val();
		  if((mensagem.length < 3) && (mensagem.length >= 1)) {
		  	alert('Mensagem inválida');
		  }

		//Verifica CNPJ

		var cnpj = $("#cnpj").val();
		if((cnpj.length > 0) && (cnpj.indexOf(".") < 2) && (cnpj.indexOf(".") < 6) && (cnpj.indexOf("/") < 10) && (cnpj.indexOf("-") < 15) || (cnpj.length > 18)){
			alert("cnpj invalido");
		}
		
		});

		$( "#vendedores" ).change(function() {
		  var vendedor = $( "#vendedores option:selected" ).text();
		$('#vendedor_input').val(vendedor);
		});

		
	$( "#compra1" ).change(function() {
		 var compra = $( "#compra1 option:selected" ).text();
		 if(compra = "Cadeira"){
		 	$('#descricao1').val("Cadeira super confortavel");
		 	$('#valor_unitario1').val('150');
		 }

		  if(compra = "Mesa"){
		 	$('#descricao1').val("Mesa grande");
		 	$('#valor_unitario1').val('300');
		 }

		 if(compra = "Estante"){
		 	$('#descricao1').val("Estante bonita");
		 	$('#valor_unitario1').val('450');
		 }

	});

	$('#valor_total1').click(function() {
		var qtde = $('#quantidade1').text();
		var valor = $('#valor_unitario1').text();
		var soma = qtde + valor;
		$('#valor_total1').val(soma);
	});



	$( "#compra2" ).change(function() {
		 var compra = $( "#compra2 option:selected" ).text();
		 if(compra = "Cadeira"){
		 	$('#descricao2').val("Cadeira super confortavel");
		 	$('#valor_unitario2').val('150');
		 }

		  if(compra = "Mesa"){
		 	$('#descricao2').val("Mesa grande");
		 	$('#valor_unitario2').val('300');
		 }

		 if(compra = "Estante"){
		 	$('#descricao2').val("Estante bonita");
		 	$('#valor_unitario2').val('450');
		 }

	});


	$( "#compra3" ).change(function() {
		 var compra = $( "#compra3 option:selected" ).text();
		 if(compra = "Cadeira"){
		 	$('#descricao3').val("Cadeira super confortavel");
		 	$('#valor_unitario3').val('150');
		 }

		  if(compra = "Mesa"){
		 	$('#descricao3').val("Mesa grande");
		 	$('#valor_unitario3').val('300');
		 }

		 if(compra = "Estante"){
		 	$('#descrica3').val("Estante bonita");
		 	$('#valor_unitario3').val('450');
		 }

	});




});