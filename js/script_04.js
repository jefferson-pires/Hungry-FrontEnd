var restaurante;
$(function($){
	//No id #botao assim que clicar executa a funcao
	$("#botao").click(function(){
		var nome = $("#nome").val();
		var telefone = $("#telefone").val();
		var email = $("#email").val();
		
		
		$.ajax({
			type : "POST",
			url : "http://localhost:8080/hungry/rest/cliente",
			data : JSON.stringify({"nome": nome, "telefone": telefone, "email": email}),
			dataType: 'json',
			success : function(){
				alert("Cadastrado com sucesso!");
			}
			
		});
		
		alert("Cadastrado com sucesso!");
		
	});
});