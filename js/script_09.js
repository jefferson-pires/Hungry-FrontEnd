var restaurantes;
var loop = 0;
$(document).ready(function (){
$(function($){
	var valor  = $("#preco").val();
	$("#botao").click(function(){
		var v = parseInt(valor);
		alert('valor = ' + valor);
		
		$.ajax({
			type : "GET",
			url  : "http://localhost:8080/hungry/rest/restaurante/restaurantes",
			contentType : "application/json; charset=utf-8",
			success : function(jsondata){
				restaurantes = jsondata;
				var item = "<table class=\"pure-table pure-table-horizontal\">"
				+ "<thead>"
                +   "<th>ID</th>"
                +   "<th>NOME</th>"
                +   "<th>FONE</th>"
				+   "<th>ENDERECO</th>"
				+   "<th>PRECO MINÍMO</th>"
				+   "<th>PRECO MAXÍMO</th>"
                + "</thead>"
				+  "<tbody>";
			$.each(restaurantes, function(i, restaurante){
				if(restaurante.preco_minimo < 15){
				item += 
                            + "<tr>"
                            +   "<td>" + restaurante.id + "</td>"
                            +   "<td>" + restaurante.nome + "</td>"
                            +   "<td>" + restaurante.fone + "</td>"
							+   "<td>" + restaurante.endereco + "</td>"
							+   "<td>" + restaurante.preco_minimo + "</td>"
							+   "<td>" + restaurante.preco_maximo + "</td>"
                            + "</tr>"
				}
			});
			

			
			item += "</tbody>";
			
			$("#resultado").append(item);	
			
			}
			
		});
	});
});

});



