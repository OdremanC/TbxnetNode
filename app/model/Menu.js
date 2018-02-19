//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let MenuSchema = new mongoose.Schema({
  title: { type: String, required:true},
  url: { type: String, required:true}
});
//exportamos el modelo
module.exports = mongoose.model('menu', MenuSchema );

