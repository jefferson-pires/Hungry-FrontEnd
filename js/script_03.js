var restaurante;
$(function($){
	//No id #botao assim que clicar executa a funcao
	$("#botao").click(function(){
		var nome = $("#nome").val();
		var telefone = $("#telefone").val();
		var endereco = $("#endereco").val();
		var preco_min = $("#preco_min").val();
		var preco_max = $("#preco_max").val();
		
		$.ajax({
			type : "POST",
			url : "http://localhost:8080/hungry/rest/restaurante",
			data : JSON.stringify({"nome": nome, "fone": telefone, "endereco": endereco, "preco_minimo": preco_min, "preco_maximo": preco_max}),
			dataType: 'json',
			success : function(){
				alert("Cadastrado com sucesso!");
			}
			
		});
		
		alert("Cadastrado com sucesso!");
		
	});
});