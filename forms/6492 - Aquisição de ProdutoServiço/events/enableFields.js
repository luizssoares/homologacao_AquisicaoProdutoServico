function enableFields(form){ 
    var Now_State = parseInt(getValue("WKNumState"));

	if(Now_State == 0 || Now_State == 9){
		form.setEnabled("slc_NomeSolicita", false);
	}
	if(Now_State == 5 || Now_State == 18 || Now_State == 20 || Now_State == 54 || Now_State == 55 || Now_State == 60){
		disableAllFields(form);
		form.setEnabled("ckb_a", true);
		form.setEnabled("ckb_b", true);
	}
}

function disableAllFields(form) {
	var fields = form.getCardData();
	var iterare = fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key = iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
}

function disableFieldsFromList(form,fields){
	for(var i = 0; i<fields.length; i++){
		form.setEnabled(fields[i], false);
	}
}