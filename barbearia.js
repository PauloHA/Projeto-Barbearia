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