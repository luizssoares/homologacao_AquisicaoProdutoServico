function dinamicTable() {
    this.counter        = false;
    this.tableId        = 0;
    this.elems          = 0;
    this.accountant();
    this.delIndex();
    this.addIndex();
}

dinamicTable.prototype.addIndex = function () {
	var alvos = document.getElementsByTagName('button');
	for(i = 0; i < alvos.length; i++){
		var alvo = alvos[i];
		var Attribute = String(alvo.getAttribute('name'));
		if (Attribute.toLowerCase().match('addindex')) {
            id = String(this.tableId)
            alvo.onclick = function () { wdkAddChild(id); myDinamicTable.delIndex(); myDinamicTable.accountant(); 
                insertINP()             //inseridos por instabilidade na integracao RM
                insertINPun()}          //inseridos por instabilidade na integracao RM
		}
	}
}
dinamicTable.prototype.accountant = function () {
    arrayElems = document.getElementsByTagName("table")
    for(i = 0; i < arrayElems.length; i++){
        var alvo 		= arrayElems[i]; 
        var Attribute 	= String(alvo.getAttribute('title'));
        if (Attribute.toLowerCase().match('counter')){
            this.elems = alvo
            this.tableId = alvo.id
        } 
    }
    var iten 	= this.elems.getElementsByTagName("tbody")
    var alvos    = document.getElementsByTagName("input")  
    for(y = 0; y < alvos.length; y++){
        var alvo        = alvos[y]
        var Attribute   = String(alvo.getAttribute('title'));
        if(Attribute.toLowerCase().match('accountant')){
            alvo.value  = iten[0].childElementCount - 1

        }
    }
}
dinamicTable.prototype.delIndex = function () {
    iten 		= this.elems.getElementsByTagName("tbody")
    iten        = iten[0].getElementsByTagName("i")
    for(y = 0; y < iten.length; y++){
        var alvo = iten[y]
        var Attribute 	= String(alvo.getAttribute('title'));
        if (Attribute.toLowerCase().match('delindex')) {
            alvo.onclick = function () { fnWdkRemoveChild(this); myDinamicTable.accountant();}
		}
    }
}

function initTable() { myDinamicTable = new dinamicTable(); }
window.addEventListener("load", initTable);