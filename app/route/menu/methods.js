const menu = require("../../model/Menu");


exports.list = function(req, res, next){
  menu.find({}).then(function(response){
    res.send(response);
  })
}

exports.create = function(req, res){
    menu.create(req.body)
  .then(function(response){
    console.log(response);
    res.send(response);
  }).catch(error =>[
    res.send(error)
  ])
}

//get un registro por id
exports.findById = function(req, res) {
  menu.findById(req.params.id, function(err, menu) {
    if(err) return res.send(500, err.message);
    console.log('GET /menu/' + req.params.id);
    res.status(200).jsonp(menu);
  });
}; 

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  menu.findById(req.params.id, function(err, menu) {
    menu.remove(function(err) {
      if(err) return res.send(500, err.message);
      res.json({menu:menu, message: 'Successfully deleted' });
      console.log('Successfully deleted')
     });
  });
};


//PUT - actualizar un registro existente
exports.update = function(req, res) {
 menu.findById(req.params.id, function(err, menu) {
  menu.title = req.body.title;
  menu.url = req.body.url;
  menu.save(function(err) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp(menu);
   console.log('Successfully updated')
  });
 });
};