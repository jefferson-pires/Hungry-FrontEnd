var restaurante;
$(function($){
	//No id #botao assim que clicar executa a funcao
	$("#botao").click(function(){
		var id = $("#id").val();
		
		$.ajax({
			type : "DELETE",
			url : "http://localhost:8080/hungry/rest/restaurante/"+id,
			success : function(){
				alert("Deletado com sucesso!");
			}
			
		});
		
		alert("Deletado com sucesso!");
		
	});
});