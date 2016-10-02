var restaurante;
$(function($){
	//No id #botao assim que clicar executa a funcao
	$("#botao").click(function(){
		var id = $("#id").val();
		var nome = $("#nome").val();
		
		$.ajax({
			type : "PUT",
			url : "http://localhost:8080/hungry/rest/restaurante/"+id,
			data : JSON.stringify({"nome": nome}),
			dataType: 'json',
			success : function(){
				alert("Atualizado com sucesso!");
			}
			
		});
		
		alert("Atualizado com sucesso!");
		
	});
});