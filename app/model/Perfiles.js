//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let PerfilesSchema = new mongoose.Schema({
  perfilName: { type: String, required:true},
  sections:[{ title: String, url: String, menu: Boolean}],
});
/*
let perfDef = mongoose.model('perfiles',PerfilesSchema);
let defaultPerfil = new perfDef({
 perfilName: "Admin",
  sections:[
  { title: "Config", url: "/Config"},
  { title: "Secciones", url: "/Secciones"},
  { title: "Perfiles", url: "/Perfiles"},
  { title: "Users", url: "/users"}
  ],
});*/
//exportamos el modelo
module.exports = mongoose.model('perfiles', PerfilesSchema );
