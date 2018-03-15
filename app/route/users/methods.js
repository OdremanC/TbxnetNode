const users = require("../../model/users");
const perfiles = require("../../model/Perfiles");
const service = require('../../service/services.js');


exports.list = function(req, res, next){
  users.find({}).then(function(response){
    res.status(200)
      .send(response);
  })
}

exports.create = function(req, res){
	users.create(req.body)
    .then(function(response){
      res.status(200)
        .send({token:service.createToken(users),users:response, mensaje:{tipo: "success", message:"Registro guardado satisfactoriamente!"}});
  }).catch(error =>[
      res.send({error:error, mensaje:{tipo: "error", message:"Oops!! hubo un error!"}})
  ])
}

//get un registro por id
exports.findById = function(req, res) {
	users.findById(req.params.id, function(err, users) {
		if(err) return res.send(500, err.message);
		console.log('GET /users/' + req.params.id);
		res.status(200)
      .jsonp(users);
	});
}; 
//get un registro por name
exports.findByName = function(req, res) {
 users.find({userName: req.params.userName}, function(err, users){
    if(err) return res.send(500, err.message);
    if (!users) { return res.send(500, err.message)}
    res.status(200)
      .jsonp(users);
  })
}; 

//login
exports.login = function(req,res) {
  users.findOne({userName: req.body.userName, password:req.body.password}, function(err, users){
    if(err) return res.send(500, err.message);
    if (!users) { return res.send(400, "login error, some data is wrong")}
    res.status(200)
      .send({token:service.createToken(users),userID:users._id,userProfile:users.perfil, message: "login success", isLogged:true});
  })
}

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  users.findById(req.params.id, function(err, users) {
    users.remove(function(err) {
      if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.json({users:users, mensaje:{tipo:"success", message:'Successfully deleted'} });
      console.log('Successfully deleted')
     });
  });
};


//PUT - actualizar un registro existente
exports.update = function(req, res) {
  users.findById(req.params.id, function(err, users) {
    users.firstName = req.body.firstName;
    users.lastName = req.body.lastName;
    users.userName = req.body.userName;
    users.password = req.body.password;
    users.email = req.body.email;
    users.perfil = req.body.perfil;
  users.save(function(err) {
   if(err) return res.send(500, err.message);
    res.status(200)
      .jsonp({users:users,mensaje:{tipo:"success", message:'Registro actualizado!'} });
  });
 });
};