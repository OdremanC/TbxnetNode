//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let PermisosSchema = new mongoose.Schema({
  tipo: { type: String, required:true},
  nivel: { type: Number, required:true},
});
//exportamos el modelo
module.exports = mongoose.model('permisos', PermisosSchema );

