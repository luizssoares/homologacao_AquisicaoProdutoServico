function validateForm(form){
	var Now_State 		= parseInt(getValue("WKNumState"));
	var completTask 	= getValue("WKCompletTask");
	var errorMsg 		= "";
  var endofline 		= "</br>";
  
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
	String.prototype.isEmpty = function(){ 
		return (!this || 0 === this.length); 
    };
    
    var dataInicio      = form.getValue("txt_dataInicio");
    var dataTermino     = form.getValue("txt_dataTermino");
    var dataArpovDirex  = form.getValue("txt_dataAprovDirex");
    var Justif          = form.getValue("txt_justificativa");
    var objCotrat       = form.getValue("txt_objetoContratacao");
    var detalhContrat   = form.getValue("txt_detalhiContratacao");
    var qualificTecn    = form.getValue("txt_qualificTecnica");
    var obrigContrat    = form.getValue("txt_obrigContratada");
    var EstimaCusto     = form.getValue("txt_CustoTotal");
    var Contrapartida   = form.getValue("txt_Contrapartida");
    var modalidade      = form.getValue("txt_modalidade");
    var Pagamento       = form.getValue("txt_Pagamento");
    var Parcelas        = form.getValue("txt_Parcelas");
    var Gerente        = form.getValue("cmb_GerenteSolicitante");
    
    
    fields 	= [dataInicio, dataTermino, modalidade, Justif, objCotrat, detalhContrat, qualificTecn, obrigContrat, EstimaCusto, Gerente]
    names	= ["Data de Iní­cio", "Data de Término", "Modalidade", "Justificativa da Contratação", "Objeto da Contratação", "Detalhamento da Contratação",
              "Qualificação Técnica", "Obrigações Específicas da Contratada", "Estimativa de Custo","Gerente para Aprovação"]

	if(Now_State == 0 || Now_State == 4 || Now_State == 0 &&(completTask == "true")){
		
		for(var i = 0; i < fields.length; i++){
			if(fields[i] == null || fields[i] == '' || fields[i] == "Selecione" || fields[i] == "0,00" || fields[i] == "0"){
			errorMsg += "Favor preencher campo "+"<b>" +names[i]+"</b>" + endofline;
			}
    }
    if(dataInicio  > dataTermino){
      errorMsg += "<b>Data de inicio</b> não pode ser posterior que a data de término"  +endofline;        
    }
    if(modalidade == "1"){
      if(dataArpovDirex == null || dataArpovDirex == '' || dataArpovDirex == "Selecione" || dataArpovDirex == "0,00"){
        errorMsg += "Favor preencher campo "+"<b>" +"Data de aprovação Direx"+"</b>" + endofline;
      }
    }
    enableValida()
    prazoSocilitacao()
    //rateioValidate()
    rateioValidate1()
        
        if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
  }

  function rateioValidate(){
    var idxrateio = form.getChildrenIndexes("dadosrateio");
        if(idxrateio.length <= 0){
        errorMsg += "Favor adicionar <b>rateio</b>"  +endofline;	
        }
        var count = 0;
        var sald = 0
        //var totalpercent = 0;
        for (var i = 0; i < idxrateio.length; i++) {
            //totalpercent = totalpercent + parseInt(form.getValue("txt_percentual___" + idxrateio[i]));
            if (form.getValue("txt_projeto___" + idxrateio[i]) == "" || form.getValue("txt_projeto___" + idxrateio[i]) == null){
            //errorMsg += "Campo projeto obrigatório." +endofline;
            count++
            }
            if(form.getValue("txt_acao___" + idxrateio[i]) == "" || form.getValue("txt_acao___" + idxrateio[i]) == null){	
            //errorMsg += "Campo ação é obrigatório." +endofline;	
            count++
            }
            if(form.getValue("txt_recursos___" + idxrateio[i]) == "" || form.getValue("txt_recursos___" + idxrateio[i]) == null){
            //errorMsg += "Campo recurso é obrigatório." +endofline;
            count++
            }
            if(form.getValue("txt_percentual___" + idxrateio[i]) == "" || form.getValue("txt_percentual___" + idxrateio[i]) == null){
            //errorMsg += "Campo percentual é obrigatório." +endofline;
            count++
            }
            if(form.getValue("txt_saldo___" + idxrateio[i]) == "" || form.getValue("txt_saldo___" + idxrateio[i]) == null ||
            form.getValue("txt_saldo___" + idxrateio[i]) == "0,00"){
            //errorMsg += "Favor incluir o rateio novamente para calcular o saldo." +endofline;
            sald++
            }
        }
        if(count != 0){ errorMsg += "Favor preencher Campo(s) não preenchidos em detalhes do <b>Rateio</b>." +endofline; }
        if(sald != 0){ errorMsg += "Não existe <b>saldo</b> no centro de custo." +endofline; }
    }
    function rateioValidate1(){
      var idxrateio = form.getChildrenIndexes("dadosrateio");
          if(idxrateio.length <= 0){
          errorMsg += "Favor <b>adicionar rateio</b>!"  +endofline;	
          }
          var count = 0;
          var sald = 0
          var a = 'txt_codprojeto___'
          var b = 'txt_codacao___'
          var c = 'txt_codrecurso___'
          for (var i = 0; i < idxrateio.length; i++) {
              if (form.getValue(a + idxrateio[i]) == "" || form.getValue(a + idxrateio[i]) == null){
              count++
              }
              if(form.getValue(b + idxrateio[i]) == "" || form.getValue(b + idxrateio[i]) == null){	
              count++
              }
             /* if(form.getValue(c + idxrateio[i]) == "" || form.getValue(c + idxrateio[i]) == null){
              count++
              }
              if(form.getValue("txt_valorUtil___" + idxrateio[i]) == "" || form.getValue("txt_valorUtil___" + idxrateio[i]) == null){
              count++
              }*/
              //if(form.getValue("txt_saldo___" + idxrateio[i]) == "" || form.getValue("txt_saldo___" + idxrateio[i]) == null){
                  //||form.getValue("txt_saldo___" + idxrateio[i]) == "0,00"
              //sald++
              //}
          }
          if(count != 0){ errorMsg += "Favor preencher Campo(s) não preenchidos em detalhes do <b>Rateio</b>." +endofline; }
          //if(sald != 0){ errorMsg += "Não existe <b>saldo</b> no <b>centro de custo</b>." +endofline; }
      }

  function prazoSocilitacao(){
    var dataInicial = new String(dataInicio);
    var data = new Date();
    var date = new Date()
    var diaN = 0
    for(i = 0; i < diaN; i++){
        date.setDate(date.getDate() + 1);
        var dia_N_Util = date+'';
        var patt1 = /Sat+/g;
        var patt2 = /Sun+/g; 
        if(dia_N_Util.match(patt1) || dia_N_Util.match(patt2)){
            diaN++
        }
    }
    var d = data.addDays(diaN);
    var Ano = d.getFullYear();
    var mes = new Array();
        mes[0] = "01"
        mes[1] = "02"
        mes[2] = "03"
        mes[3] = "04"
        mes[4] = "05"
        mes[5] = "06"
        mes[6] = "07"
        mes[7] = "08"
        mes[8] = "09"
        mes[9] = "10"
        mes[10] = "11"
        mes[11] = "12"
    var dia = new Array();
        dia[1] = "01"
        dia[2] = "02"
        dia[3] = "03"
        dia[4] = "04"
        dia[5] = "05"
        dia[6] = "06"
        dia[7] = "07"
        dia[8] = "08"
        dia[9] = "09"
    var Mes = mes[d.getMonth()];
    if(d.getDate() <= 9){
    var Dia = dia[d.getDate()];
    }else{
    var Dia = d.getDate()
    }
    var dataFinal = [Ano+"-"+Mes+"-"+Dia];
    if(dataFinal  > dataInicial){
        //errorMsg += "Favor preencher campo <b>Data de Início</b> com no minimo <b>17 dias</b> de antecendência"+endofline;        
        errorMsg += "<b>Data de inicio</b> não pode ser anterior a data atual"+endofline;      
      }
    }
  function enableValida(){      
    var check = form.getValue("radiotypes");  
    if(check == ""){ errorMsg += "É neccessário selecionar ao menos uma opção referente aos <b>Dados da Receita Prevista a Receber</b>"+ endofline; }
    if(check == "sim"){
      if(Pagamento == "Especie"){
        fields = [Contrapartida, Pagamento]
        names = ["Valor da Contrapartida", "Forma de Pagamento"]
        for(var i = 0; i < fields.length; i++){
            if(fields[i] == null || fields[i] == '' || fields[i] == "Selecione" || fields[i] == "0,00"){
            errorMsg += "Favor preencher campo <b>" + names[i] +"</b>"+ endofline;
            }    
        }
    }else{
      fields = [Contrapartida, Pagamento, Parcelas]
      names = ["Valor da Contrapartida", "Forma de Pagamento", "Número de Parcelas"]
      for(var i = 0; i < fields.length; i++){
        if(fields[i] == null || fields[i] == '' || fields[i] == "Selecione" || fields[i] == "0,00"){
          errorMsg += "Favor preencher campo <b>" + names[i] +"</b>"+ endofline;
        }
      }
    }
    }
  }
  
}
