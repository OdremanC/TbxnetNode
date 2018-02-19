//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let PerfilesSchema = new mongoose.Schema({
  perfilName: { type: String, required:true},
  sections:[{ sectionID: String, Permission:Number}],
});
//exportamos el modelo
module.exports = mongoose.model('perfiles', PerfilesSchema );
