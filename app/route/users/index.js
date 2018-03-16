const middleware = require('../../service/middleware.js');
const methods = require('./methods');

module.exports = function(app){
	app.get('/users',middleware.ensureAuthenticated, methods.list);
	app.post('/users',middleware.ensureAuthenticated,methods.create);
	app.get('/users/:id',middleware.ensureAuthenticated,methods.findById);
	app.delete('/users/:id',middleware.ensureAuthenticated,methods.delete);
	app.put('/users/:id',middleware.ensureAuthenticated,methods.update);
	app.post('/users/:userName',methods.login);
	app.get('/users/userName/:userName',middleware.ensureAuthenticated,methods.findByName);
}