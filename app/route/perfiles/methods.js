const perfiles = require("../../model/Perfiles");


exports.list = (req, res, next) => {
  perfiles.find({}).then((response) =>{
    res.status(200)
      .send(response);
  })
}

exports.create = (req, res) => {
  if (req.body.perfilName ==='' || req.body.sections.url === '' ) return res.status(400).send({mensaje:{tipo:"error", message:'Debe LLenar todos lo campos!'}});
  perfiles.create(req.body)
    .then((response) => {
      res.status(201)
        .send({perfil:response, mensaje:{tipo: "success", message:"Registro guardado satisfactoriamente!"}});
  }).catch(error =>[
    res.status(400)
      .send({error:error, mensaje:{tipo: "error", message:"Oops!! hubo un error!"}})
  ])
}

//get un registro por id
exports.findById = (req, res) => {
  perfiles.findById(req.params.id, (err, perfiles) => {
    if(err) return res.send(500, err.message);
    res.status(200)
      .jsonp(perfiles);
  });
}; 

//DELETE - Borrar un registro con el id
exports.delete = (req, res) => {
  perfiles.findById(req.params.id, (err, perfiles) => {
    perfiles.remove((err) => {
      if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.status(200)
        .json({perfiles:perfiles, mensaje:{tipo:"success", message:'Successfully deleted'} });
     });
  });
};


//PUT - actualizar un registro existente
exports.update = (req, res) => {
 perfiles.findById(req.params.id, (err, perfiles) => {
  perfiles.perfilName = req.body.perfilName;
  perfiles.sections = req.body.sections;
  perfiles.save((err) => {
   if(err) return res.send(500, err.message);
   res.status(200)
    .json({perfiles:perfiles,mensaje:{tipo:"success", message:'Registro actualizado!'} });
  });
 });
};