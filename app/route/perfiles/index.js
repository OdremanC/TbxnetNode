//
const methods = require('./methods');

module.exports = function(app){
  app.get('/perfiles', methods.list);
  app.post('/perfiles', methods.create);
  app.get('/perfiles/:id',methods.findById);
  app.delete('/perfiles/:id',methods.delete);
  app.put('/perfiles/:id',methods.update);
}