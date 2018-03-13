//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let seccionesSchema = new mongoose.Schema({
  title: { type: String, required:true },
  url: { type: String, required:true },
  menu: {type: Boolean, required: false }
});
//exportamos el modelo
module.exports = mongoose.model('secciones', seccionesSchema );

