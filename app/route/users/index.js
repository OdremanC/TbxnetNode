//
const methods = require('./methods');

module.exports = function(app){
	app.get('/users', methods.list);
	app.post('/users', methods.create);
	app.get('/users/:id',methods.findById);
	app.delete('/users/:id',methods.delete);
	app.put('/users/:id',methods.update);
	app.post('/users/:userName',methods.login);
	app.get('/users/userName/:userName',methods.findByName);
}