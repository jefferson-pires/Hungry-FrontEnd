var restaurantes;

function carregar(){
	$.ajax({
		type : "GET",
		url : "http://localhost:8080/hungry/rest/restaurante/restaurantes",
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
				item += 
                            + "<tr>"
                            +   "<td>" + restaurante.id + "</td>"
                            +   "<td>" + restaurante.nome + "</td>"
                            +   "<td>" + restaurante.fone + "</td>"
							+   "<td>" + restaurante.endereco + "</td>"
							+   "<td>" + restaurante.preco_minimo + "</td>"
							+   "<td>" + restaurante.preco_maximo + "</td>"
                            + "</tr>"
			});
			
			item += "</tbody>";
			
			$("#resultado").append(item);
		}
	
	});
}

carregar();