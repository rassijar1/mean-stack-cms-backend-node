
/*=============================================
ESQUEMA PARA MODELO CONECTOR A MONGODB
=============================================*/
const mongoose = require('mongoose');

let Schema= mongoose.Schema;
let slideSchema= new Schema({

imagen:{

	type:String,
	required: [true, "La imagen es obligatoria"]
},
titulo:{

	type:String,
	required: false
},
descripcion:{

	type:String,
	required: false
}



})

/*=============================================
EXPORTAR EL MODELO
=============================================*/

module.exports = mongoose.model("slides", slideSchema);
