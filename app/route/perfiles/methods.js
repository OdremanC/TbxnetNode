const perfiles = require("../../model/Perfiles");


exports.list = function(req, res, next){
  perfiles.find({}).then(function(response){
    res.send(response);
  })
}

exports.create = function(req, res){
  if (req.body.perfilName ==='' || req.body.sections.url === '' ) return res.status(400).send({mensaje:{tipo:"error", message:'Debe LLenar todos lo campos!'}});
  perfiles.create(req.body)
  .then(function(response){
    console.log(response);
    res.send({perfil:response, mensaje:{tipo: "success", message:"Registro guardado satisfactoriamente!"}});
  }).catch(error =>[
    res.send({error:error, mensaje:{tipo: "error", message:"Oops!! hubo un error!"}})
  ])
}

//get un registro por id
exports.findById = function(req, res) {
  perfiles.findById(req.params.id, function(err, perfiles) {
    if(err) return res.send(500, err.message);
    console.log('GET /perfiles/' + req.params.id);
    res.status(200).jsonp(perfiles);
  });
}; 

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  perfiles.findById(req.params.id, function(err, perfiles) {
    perfiles.remove(function(err) {
      if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.json({perfiles:perfiles, mensaje:{tipo:"success", message:'Successfully deleted'} });
      console.log('Successfully deleted')
     });
  });
};


//PUT - actualizar un registro existente
exports.update = function(req, res) {
 perfiles.findById(req.params.id, function(err, perfiles) {
  perfiles.perfilName = req.body.perfilName;
  perfiles.sections = req.body.sections;
  perfiles.save(function(err) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp({perfiles:perfiles,mensaje:{tipo:"success", message:'Registro actualizado!'} });
   console.log('Successfully updated')
  });
 });
};