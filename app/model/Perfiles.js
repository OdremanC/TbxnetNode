//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let PerfilesSchema = new mongoose.Schema({
  perfilName: { type: String, required:true},
  sections:[{ title: String, url: String}],
});
//exportamos el modelo
module.exports = mongoose.model('perfiles', PerfilesSchema );
