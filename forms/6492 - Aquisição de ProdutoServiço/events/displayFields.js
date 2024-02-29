function displayFields(form,customHTML){ 
    var Now_State = parseInt(getValue("WKNumState"));
    var NumProcesso = getValue("WKNumProces");
    var usuario = getValue("WKUser");
    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    switch(Now_State){
    

        //Solicitação
        case 0:
                form.setValue("slc_NomeSolicita",usuario);
                form.setValue("txt_DataSolicita",data.format(new Date()));
                form.setVisibleById("Numero_Process_Atual",false);
                

                /*var f1 = new Array(usuario);
                
                datasetsuperior = DatasetFactory.getDataset("dsSuperior", f1, null, null);
                numerosuperior = datasetsuperior.getValue(0, "CHAPASUPERIOR");
                nomesuperior = datasetsuperior.getValue(0, "NOMESUPERIOR");
                descricao = datasetsuperior.getValue(0, "DESCRICAO");
                nome = datasetsuperior.getValue(0, "NOME");
                form.setValue("hdn_nome",nome);
                form.setValue("hdn_numSuperior",numerosuperior);
                form.setValue("txt_GerenteSolicitante",nomesuperior);
                form.setValue("txt_UnidadeSolicitante",descricao);
               */
        break;

        case 5:
            form.setValue("hdn_status",Now_State);
            form.setValue("txt_NumProcess",NumProcesso);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
        break;
        
        case 9:
            form.setValue("hdn_status",Now_State);
            //form.setValue("slc_NomeSolicita",usuario);
            if(form.getValue('txt_DataSolicita') == "" || form.getValue('txt_DataSolicita') == null){
                form.setValue("txt_DataSolicita",data.format(new Date()));
            }

           /*var f1 = new Array(usuario);
                
                datasetsuperior = DatasetFactory.getDataset("dsSuperior", f1, null, null);
                numerosuperior = datasetsuperior.getValue(0, "CHAPASUPERIOR");
                nomesuperior = datasetsuperior.getValue(0, "NOMESUPERIOR");
                descricao = datasetsuperior.getValue(0, "DESCRICAO");
                nome = datasetsuperior.getValue(0, "NOME");
                form.setValue("hdn_nome",nome);
                form.setValue("hdn_numSuperior",numerosuperior);
                form.setValue("txt_GerenteSolicitante",nomesuperior);
                form.setValue("txt_UnidadeSolicitante",descricao);
        */
             break;

        case 18:
            form.setValue("hdn_status",Now_State);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
        break;

        case 20:
            form.setValue("hdn_status",Now_State);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
        break;

        case 54:
        	form.setValue("hdn_status",Now_State);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
        break;

        case 55:
        	form.setValue("hdn_status",Now_State);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
        break;

        case 60:
        	form.setValue("hdn_status",Now_State);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
        break;

        default:
    }

}