const secciones = require("../../model/Secciones");

exports.list = (req, res, next) => {
  secciones.find({}).then((response) => {
    res.status(200)
      .send(response);
  });
}

exports.create = (req, res) => {
  secciones.create(req.body)
    .then((response) => {
      res.status(201)
        .send({secciones:response, mensaje:{tipo: "success", message:"Registro guardado!"}});
  }).catch(error =>[
    res.status(400)
      .send({error:error, mensaje:{tipo: "error", message:"Oops!! hubo un error!"}})
  ]);
}

//get un registro por id
exports.findById = (req, res) => {
  secciones.findById(req.params.id, (err, secciones) => {
    if(err) return res.send(500, err.message);
    res.status(200)
      .jsonp(secciones);
  });
}; 

//DELETE - Borrar un registro con el id
exports.delete = (req, res) => {
  secciones.findById(req.params.id, (err, secciones) => {
    secciones.remove((err) => {
     if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.status(200)
        .json({secciones:secciones, mensaje:{tipo:"success", message:'Registo eliminado'} });
     });
  });
};

//PUT - actualizar un registro existente
exports.update = (req, res) => {
 secciones.findById(req.params.id,(err, secciones) => {
  secciones.title = req.body.title;
  secciones.url = req.body.url;
  secciones.menu = req.body.menu;
  secciones.save((err) => {
   if(err) return res.send(500, err.message);
    res.status(200)
      .json({secciones:secciones,mensaje:{tipo:"success", message:'Registro actualizado!'} });
  });
 });
};