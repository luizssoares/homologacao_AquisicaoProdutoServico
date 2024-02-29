/*
 * Arquivo respons?vel por fun??es de manipula??o de Html. 
 */

/*
 * Inclui o Jquery no documento Html
 * 
 * Params: customHTML
 */
function injetarJQuery(customHTML) {
	customHTML.append('<script src="jquery.js"></script>');
}

/*
 * Injeta SELETOR para CLASS (jquery)
 * 
 * Params: customHTML, class
 */
function injetarInicioScript(customHTML, classCampo) {
	injetarInicioDocumentReady(customHTML);
	customHTML.append('$(".');
	customHTML.append(classCampo);
	injetarFimDocumentReady(customHTML);
}

/*
 * Injetar o script do Jquery para ser inicializado ap?s a p?gina ser carregada
 * 
 * Params: customHTML
 */
function injetarInicioDocumentReady(customHTML) {
	customHTML.append('<script>');
	customHTML.append('$(function(){');
}

/*
 * Injetar o script do Jquery para ser finalizado ap?s a p?gina ser carregada
 * 
 * Params: customHTML
 */
function injetarFimDocumentReady(customHTML) {
	customHTML.append('")');
}

/*
 * Injeta Termino de Script de Function (javascript)
 * 
 * Params: customHTML
 */
function injetarTerminoScript(customHTML) {
	customHTML.append('});');
	customHTML.append('</script>');
}

/*
 * Oculta CLASS (jquery)
 * 
 * Params: customHTML, class
 */
function ocultarCampo(customHTML, classCampo) {
	injetarInicioScript(customHTML, classCampo);
	customHTML.append('.hide()');
	injetarTerminoScript(customHTML);
}
function aparecerCampo(customHTML, classCampo) {
	injetarInicioScript(customHTML, classCampo);
	customHTML.append('.show()');
	injetarTerminoScript(customHTML);
}

function naoHabilitarInput(customHTML, elem){
	customHTML.append("<script>");
	customHTML.append("$(function(){$(\"#");
	customHTML.append(elem);
	customHTML.append("\").prop(\"readonly\",true)});");
	customHTML.append("</script>");
}

function naoHabilitarSelect(customHTML, elem){
	customHTML.append("<script>");
	customHTML.append("$(function(){$(\"#");
	customHTML.append(elem);
	customHTML.append("\").prop(\"disabled\",true)});");
	customHTML.append("</script>");
}

function showTable(customHTML){
	customHTML.append("<script>");
	customHTML.append("$(function(){");
	customHTML.append("var natu = $(\"#slc_NaturezaServico\").html()");
	customHTML.append("console.log(\"asasfas\")");
	customHTML.append("if(natu == \"Consultoria\"){");
	customHTML.append("$(\"#Instrutoriaa\").removeClass();");
	customHTML.append("$(\"#Instrutoria\").removeClass();");
	customHTML.append("$(\"#Instrutoria\").addClass(\"tab-pane\")");
	customHTML.append("$(\"#tab_NaN\").removeClass();");
	customHTML.append("$(\"#NaNN\").removeClass();");
	customHTML.append("$(\"#NaNN\").addClass(\"tab-pane\")");
	customHTML.append("$(\"#Consultoriaa\").addClass(\"active\")");
	customHTML.append("$(\"#Consultoria\").addClass(\"tab-pane active\")");
	customHTML.append("}");
	customHTML.append("});");
	customHTML.append("</script>");
}

	//<script>
	/*
		var natu = $("#slc_NaturezaServico").html()
  		
		$(function(){
			if(natu == "Consultoria"){
				$("#Instrutoriaa").removeClass();
				$("#Instrutoria").removeClass();
				$("#Instrutoria").addClass("tab-pane")

				$("#tab_NaN").removeClass();
				$("#NaNN").removeClass();
				$("#NaNN").addClass("tab-pane")

				$("#Consultoriaa").addClass("active")
				$("#Consultoria").addClass("tab-pane active")
			}
			else if(natu == "Instrutoria"){

			}
			else if(natu == "Ambos"){

			}
			else if(natu == "Negocio/Negocio"){

			}

			
		});*/
	//</script>