/*=============================================
ESQUEMA PARA MODELO CONECTOR A MONGODB
=============================================*/
const mongoose = require('mongoose');

let Schema= mongoose.Schema;
let galeriaSchema= new Schema({

foto:{

	type:String,
	required: [true, "La imagen es obligatoria"]
}



})

/*=============================================
EXPORTAR EL MODELO
=============================================*/

module.exports = mongoose.model("galerias", galeriaSchema);
