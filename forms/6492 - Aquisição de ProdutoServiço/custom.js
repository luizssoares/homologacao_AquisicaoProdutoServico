/*function montarArray() {
	
	let tab			= document.getElementById("dadosrateio")
	let tabody		= tab.tBodies[0]; let rowtab	= tabody.rows
	var array 		= []
	let index 		= ["txt_codprojeto___", "hd_percentual___", "txt_saldo___","txt_codacao___", "txt_codrecurso___"]
	
	console.log(rowtab)
	
	if(rowtab.length > 1){		
		for(i = 1; i < rowtab.length; i++){
			let row		= rowtab[i].getElementsByTagName("input") 
			for(y = 0; y < row.length; y++){
				for(j = 0; j < index.length; j++){
					if(row[y].id.match(index[j])){
						console.log(row[y].id.match(index[j]))
						let vlr	=	array.length
						console.log(array)
						console.log(vlr)
						if(vlr != 0){
							let vlrr		= array.length++
							console.log(vlrr)
							array[vlr] 	= row[y].id; 
							console.log(array)
						}else{ array[0]	= row[y].id;console.log(array) }
						if(j == 4){document.getElementById("hdn_array").value = array + "+" }
					}
				} 
			}
		}
	}
}
function hdn_array(){ 
	/*document.getElementsByName("addIndex")[0].onclick = function () { montarArray() } *//*
	document.getElementById("txt_obrigContratada").onclick = function () { montarArray() }
}
window.addEventListener("load", hdn_array)
*/


//Habilita os Boletos de acordo com a quantidade
function habilitar(){
    var valor = document.getElementById("txt_modalidade").value;
    console.log (valor);
    if(valor == "0"){
    	console.log (valor);
        document.getElementById("NomeFornecedor").style.display = "none";
        document.getElementById("checkInex").style.display = "none";
        document.getElementById("checkLicit").style.display = "none";
        document.getElementById("checkDisp").style.display = "none";
        document.getElementById("checkAta").style.display = "none";
        }
    console.log (valor);
    if(valor == "Licitação"){
    	console.log (valor);
    	document.getElementById("NomeFornecedor").style.display = "none";
    	document.getElementById("checkInex").style.display = "none";
    	document.getElementById("checkLicit").style.display = "block";
        document.getElementById("checkDisp").style.display = "none";
        document.getElementById("checkAta").style.display = "none";
    }
    if(valor == "Dispensa"){
    	console.log (valor);
    	document.getElementById("NomeFornecedor").style.display = "block";
    	document.getElementById("checkLicit").style.display = "none";
    	document.getElementById("checkInex").style.display = "none";
        document.getElementById("checkDisp").style.display = "block";
        document.getElementById("checkAta").style.display = "none";
    }
    if(valor == "Inexigibilidade"){
    	console.log (valor);
    	document.getElementById("NomeFornecedor").style.display = "block";
    	document.getElementById("checkInex").style.display = "block";
    	document.getElementById("checkLicit").style.display = "none";
        document.getElementById("checkDisp").style.display = "none";
        document.getElementById("checkAta").style.display = "none";
    }
	if(valor == "Adesão à Ata de Registro de Preço"){
		console.log (valor);
		document.getElementById("NomeFornecedor").style.display = "block";
		document.getElementById("checkInex").style.display = "none";
    	document.getElementById("checkLicit").style.display = "none";
        document.getElementById("checkDisp").style.display = "none";
        document.getElementById("checkAta").style.display = "block";
	}   
    
}


function teste(index, idx){  
    var n = 0;
    if(idx == 1){
        n = "z3"
    }else{ n = "z1"}
    var spn1 = document.getElementById(n).children[0].children[2]
    var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
    var li2 = ul1.childNodes[0]
    console.log(ul1.childNodes[0])
    if(li2.title != ""){
        ul1.removeChild(ul1.childNodes[0]);
        li2 = ul1.childNodes[0]
        console.log(ul1.childNodes[0])
    }
    var elem = document.createElement("LI")
    ul1.replaceChild(elem, ul1.childNodes[0])
    console.log(ul1.childNodes[0])
    ul1.appendChild(li2)
    var ipt = li2.children[0]
    ipt.placeholder=""
    ipt.style="width: 0.75em;"
    var li1 = ul1.children[0]
    li1.className = "select2-selection__choice"
    li1.title = index
    li1.innerHTML = "<span class=\"select2-selection__choice__remove\" role=\"presentation\">×<\/span>"+index
    

    ul1.childNodes[0].onclick = function () { teste2();console.log("asdasfasf") }
}
function teste2(){
    var spn1 = document.getElementById("z3").children[0].children[2]
    var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
    ul1.removeChild(ul1.childNodes[0])
    var spn1 = document.getElementById("z1").children[0].children[2]
    var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
    ul1.removeChild(ul1.childNodes[0])
    var fields = ["txt_CNPJ_CPF"]
    for(i = 0; i < fields.length; i++){
        document.getElementById(fields[i]).value = "";
    }
}
function init(){ document.getElementById("txt_Favorecido").onchange = function () { inputAuto(this) }; 
//document.getElementById("txt_NomeFantasia").onchange = function () { inputAuto(this) }

                document.getElementById("txt_CNPJ_CPF").onchange = function () { inputAuto(this) }}

function MrTime(){ setTimeout(init, 6000); }
function inputAuto(elem){
    var f = elem.value
    var selectIndex = elem.selectedIndex
    var nome = 0;
    var idx  = 0;
    var nomeidx  = 0;
    var n = 0;
    if(elem.id == "txt_Favorecido"){
        nome    = "NOME"
        idx     = 3;
        nomeidx = "txt_CNPJ_CPF"
        n       = "z3";
    }else if(elem.id == "txt_CNPJ_CPF"){ nome = "CGCCFO"; idx = 1; nomeidx = "txt_Favorecido"; n = "z1";
            //document.getElementById("txt_Favorecido").value = elem.value 
        }/*else if((elem.id == "txt_CNPJ_CPF"){
            nome    = "Pedido_de_Pagamento.html"
            idx     = 3;
            nomeidx = "txt_NomeFantasia"
            n       = "z2";
        }*/

    var fields = []
    if(selectIndex != -1){
        var c = DatasetFactory.createConstraint(nome, f, f, ConstraintType.MUST);
        var constraint = new Array(c);
        var dataset = DatasetFactory.getDataset("dsc_Favorecido", null, constraint, null);
        var Order  = ["5", "4", "6", "8", "10"];
        for(i = 0; i < Order.length; i++){
            var Obj         = dataset.values[0];
            var index       = Order[i]
            //document.getElementById(fields[i]).value = Obj[dataset.columns[index]];
        }
        var indexZ = Obj[dataset.columns[idx]];
        document.getElementById(nomeidx).innerHTML = "<option value=\""+Obj[dataset.columns[idx]]+"\">"+
        Obj[dataset.columns[idx]]+"<\/option>"
        document.getElementById(nomeidx).value = Obj[dataset.columns[idx]]
        teste(indexZ, idx)
    } else {
        for(i = 0; i < fields.length; i++){
            document.getElementById(fields[i]).value = "";
        }   
        var spn1 = document.getElementById(n).children[0].children[2]
        var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
        ul1.removeChild(ul1.childNodes[0])    
        var li1 = ul1.childNodes[0]
        var ipt = li1.children[0];
        ipt.placeholder="Escolha o Favorecido"
        ipt.style="width: 372.409px;"
        document.getElementById(nomeidx).value = ""
    }
}
window.addEventListener("load", MrTime)

function PegaNome(){
	var nomeUser = document.getElementById("_slc_NomeSolicita").textContent;
	console.log(nomeUser);
	//document.getElementById("hdn_nome").value = nomeUser;
	setTimeout((document.getElementById("hdn_nome").value = nomeUser), 6000);
}
    


function setSuper(){
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}
function getSuper(){
    var hdn_Super   = document.getElementById("hdn_numSuperior")
    //console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
} 
window.addEventListener("load", setSuper)


function montarArray() {
	var status = document.getElementById("hdn_status").value
	var valorTotal = []
	console.log(status)
	if(status == 9){
		document.getElementById("hdn_array").value = "";
	}
	if(status == 5){
		arrayRateio(valorTotal)
	}
}

function arrayRateio(valorTotal){
	var tabela_itens = document.getElementById("dadosrateio");
	var itens = tabela_itens.getElementsByTagName("input");
	console.log(itens)
	for (var i = 0; i < itens.length; i++) {
		if (itens[i].id != null && itens[i].id.indexOf("txt_projeto___") != -1) {
			valorTotal[0]= itens[i].value;
			console.log(valorTotal[0])
		}		
		if (itens[i].id != null && itens[i].id.indexOf("txt_acao___") != -1) {
			valorTotal[1]= itens[i].value;
			console.log(valorTotal[1])
		}	
		if (itens[i].id != null && itens[i].id.indexOf("txt_recursos___") != -1) {
			valorTotal[2]= itens[i].value;
			console.log(valorTotal[2])
			var valorAnt = document.getElementById("hdn_array").value
			if(valorAnt == null){
				document.getElementById("hdn_array").value = valorTotal + "___"
			}else {
				document.getElementById("hdn_array").value = valorAnt + valorTotal + "___"
			}
		}	
		if (itens[i].id != null && itens[i].id.indexOf("txt_percentual___") != -1) {
			valorTotal[3]= itens[i].value;
			console.log(valorTotal[3])
		}
		if (itens[i].id != null && itens[i].id.indexOf("txt_saldo___") != -1) {
			var valorAlt = moeda.desformatar(itens[i].value)
			valorTotal[4]= valorAlt;
			console.log(valorTotal[4])
		}	
	}
}

//window.addEventListener("load", montarArray)









function controlCheck(){ 
	let a = document.getElementById("ckb_a")
	let b = document.getElementById("ckb_b")
	if(a.checked == true){ a.value = "on" }else{ a.value = "off"}
	if(b.checked == true){ b.value = "on" }else{ b.value = "off"}
	a.onclick = function () { if(a.checked == true){ a.value = "on" }else{ a.value = "off"} };
	b.onclick = function () { if(b.checked == true){ b.value = "on" }else{ b.value = "off"} };
}
window.addEventListener("load", controlCheck);

function setSelectedZoomItem(selectedItem) {

	var indice = -1;
	var arraySelectedItem = selectedItem.inputId.split("___");

	if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
		indice = arraySelectedItem[1];
	}

	if (selectedItem["inputId"] == "txt_projeto___" + indice) {

		document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

		reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

	}
	if (selectedItem["inputId"] == "txt_acao___" + indice) {

		document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

		reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

		buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))
		
		var saldo = document.getElementById("txt_saldo___"+indice).value
		saldo = formataCasasDecimais(saldo)
		saldo = moeda.formatar(saldo)
		document.getElementById("txt_saldo___"+indice).value = saldo
	
	}
}
function buscaSaldo(projeto, acao) {

	console.log("projeto VALUE: " + projeto.value);
	console.log("acao VALUE: " + acao.value);

	var campo = acao;

	if (campo.value != "") {
		var id = projeto.name.replace("txt_codprojeto___", "");
		console.log("cc id " + id);
		var cc1 = new Array(projeto.value + "." + acao.value);
		datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);

		console.log("DATASET SALDO LENGHT " + datasetsaldo.values.length);
		console.log(datasetsaldo);
		if (datasetsaldo.values.length > 0) {
			var record = datasetsaldo.values[0];
			saldo = eval("record[\"SALDO\"]");
		}
		if(saldo == 0 || saldo == "0,00"){
			document.getElementById("txt_saldo___" + id).value = saldo;
			document.getElementById("txt_saldo___" + id).style = "background-color:#ea8989";
		} 
		else if(saldo != 0 || saldo != "0,00") {
			document.getElementById("txt_saldo___"+ id).value = saldo;
			document.getElementById("txt_saldo___" +id).style = "background-color:#86dc9c";
		}
		
	}
}

function validadePercentual(elem) {
	var id = elem.id
	id = id.split("___")
	id = id[1]
	var percentual = elem.value
	var valor = document.getElementById("txt_saldo___" + id).value
	valor = moeda.desformatar(valor)
	valorInterm = formataCasasDecimais(valor);
	var valorFinal = percentual / 100 * valorInterm
	valorFinal = formataCasasDecimais(valorFinal)

	document.getElementById("hd_percentual___" + id).value = valorFinal
}

function enableContrapartida(elem) {
	var check = elem.value
	var Contrapartida = document.getElementById("txt_Contrapartida");
	var Pagamento = document.getElementById("txt_Pagamento");
	var Parcelas = document.getElementById("txt_Parcelas");

	if (check == "Nao") {
		var disabled = document.createAttribute("readonly");
		Contrapartida.attributes.setNamedItem(disabled);
		Pagamento.disabled = true;
		var disabled = document.createAttribute("readonly");
		Parcelas.attributes.setNamedItem(disabled);
		document.getElementById("txt_Contrapartida").value = "0,00"
		document.getElementById("txt_Pagamento").value = "Selecione"
		document.getElementById("txt_Parcelas").value = ""
	
	}
	else {
		Contrapartida.attributes.removeNamedItem("readonly");
		Pagamento.disabled = false;
		Parcelas.attributes.removeNamedItem("readonly");
	}

}

function checkedValidate(){
	var panel = document.getElementById("ReceitaPrevista");
	var check = panel.getElementsByTagName("input")
	var Contrapartida = document.getElementById("txt_Contrapartida");
	var Pagamento = document.getElementById("txt_Pagamento");
	var Parcelas = document.getElementById("txt_Parcelas");
	for(i=0; i < check.length;i++){
		if(check[i].type == "radio" && check[i].checked == true){
			if(check[i].value == "Nao"){
				var disabled = document.createAttribute("readonly");
				Contrapartida.attributes.setNamedItem(disabled);
				Pagamento.disabled = true;
				var disabled = document.createAttribute("readonly");
				Parcelas.attributes.setNamedItem(disabled);
				document.getElementById("txt_Contrapartida").value = "0,00"
				document.getElementById("txt_Pagamento").value = "Selecione"
				document.getElementById("txt_Parcelas").value = ""
			}/*else{
				Contrapartida.attributes.removeNamedItem("readonly");
				Pagamento.disabled = false;
				Parcelas.attributes.removeNamedItem("readonly");

				PorcentContra()
			}*/
		}
	}
}

function validaContra(){
	var valor = document.getElementById("txt_Pagamento").value
	var Parcelas = document.getElementById("txt_Parcelas");
	if(valor == "Especie"){
		var disabled = document.createAttribute("readonly");
		Parcelas.attributes.setNamedItem(disabled);
		document.getElementById("txt_Parcelas").value = ""
	}
	else{
		Parcelas.attributes.removeNamedItem("readonly");
	}
}

function formatarMoeda(elem) {
	var id = elem.id
	var valor = moeda.desformatar(elem.value)
	var valorDif = moeda.formatar(valor)
	document.getElementById(id).value = valorDif
}

var moeda = {
	desformatar: function (num) {															//*Desformata valores com a formatação da função instanciada na 'var moeda'
		num = num.replace(/\./g, "");
		num = num.replace(/\,/g, ".");
		return parseFloat(num);
	},
	formatar: function (num) {																//*Formata os valores
		x = 0;
		if (num < 0) {
			num 	= Math.abs(num);
			x 		= 1;
		}
		if (isNaN(num)) num = "0";
		
		cents 	= Math.floor((num * 100 + 0.5) % 100);
		num 	= Math.floor((num * 100 + 0.5) / 100).toString();
		
		if (cents < 10) cents = "0" + cents;
		
		for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++){
			num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
		}

		ret = num + ',' + cents;
		if (x == 1) ret = ' – ' + ret;
		return ret;
	},
	arredondar: function (num) {															//*Valores com centavos de 4 digitos transformados em 2 digitos
		return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);							
	}
}

function formataCasasDecimais(valor) {
	valor = "" + valor;

	if (valor.lastIndexOf(".") == -1) {
		valor = valor + ".00";
	}
	else {
		var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
		if (casasDecimais.length > 2)
			casasDecimais = casasDecimais.substring(0, 2);
		else {
			while (casasDecimais.length < 2) {
				casasDecimais = casasDecimais + "0";
			}
		}
		valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
	}

	return valor;
}


function setSuper(){
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}
function getSuper(){
    var hdn_Super   = document.getElementById("hdn_numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset     = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for(i = 0; i < dataset.values.length; i++){
        var mat     = dataset.values[i].Matricula
        if(mat == hdn_Super.value){
            var un  = dataset.values[i].NomeUnidade
            document.getElementById("txt_UnidadeSolicitante").value = un
        }
    }
} 
window.addEventListener("load", setSuper)