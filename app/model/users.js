//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let UsersSchema = new mongoose.Schema({
	firstName: { type: String, required:true },
	lastName: { type: String, required:true },
	userName: { type: String, required:true },
	password:{ type: String, required:true },
	email:{ type:String, required:true },
  perfil:{ type:String, required:false }
});

//exportamos el modelo
module.exports = mongoose.model('users', UsersSchema );

