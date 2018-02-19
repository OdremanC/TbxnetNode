// todas las configuraciones del proyecto
module.exports = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8081,
	ip: process.env.IP || '0.0.0.0',
	cors: process.env.CORS || true,
	mongo: {
		url: process.env.MONGODB_URI || 'mongodb://127.0.0.1/dev',
		options: {
			useMongoClient: true
		}
	}
};