//Endpoints de menu
const methods = require('./methods');

module.exports = function(app){
  app.get('/menu', methods.list);
  app.post('/menu', methods.create);
  app.get('/menu/:id',methods.findById);
  app.delete('/menu/:id',methods.delete);
  app.put('/menu/:id',methods.update);
}