var clientes;

function carregar(){
	$.ajax({
		type : "GET",
		url : "http://localhost:8080/hungry/rest/cliente/clientes",
		contentType : "application/json; charset=utf-8",
		success : function(jsondata){
			clientes = jsondata;
			var item = "<table class=\"pure-table pure-table-horizontal\">"
			+ "<thead>"
                +   "<th>ID</th>"
                +   "<th>NOME</th>"
                +   "<th>TELEFONE</th>"
				+   "<th>EMAIL</th>"
                + "</thead>"
				+ "<tbody>";
			$.each(clientes, function(i, cliente){
				item += 
                            + "<tr>"
                            +   "<td>" + cliente.id + "</td>"
                            +   "<td>" + cliente.nome + "</td>"
                            +   "<td>" + cliente.telefone + "</td>"
							+   "<td>" + cliente.email + "</td>"
                            + "</tr>"
			});
			
			item += "</tbody>";
			
			$("#resultado").append(item);
		}
	
	});
}

carregar();