//Endpoints de menu
const methods = require('./methods');

module.exports = function(app){
  app.get('/secciones', methods.list);
  app.post('/secciones', methods.create);
  app.get('/secciones/:id',methods.findById);
  app.delete('/secciones/:id',methods.delete);
  app.put('/secciones/:id',methods.update);
}