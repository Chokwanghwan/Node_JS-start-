// binding mongoose module
var mongoose = require('mongoose');

// connection uri
var dbURI = 'mongodb://localhost/test';

// exports connect function to app.js
exports.connect = function () {

	// get the database connection pool
	mongoose.connect(dbURI);

	// DB Connection Events
	// Succeed to connect database
	mongoose.connection.on('connected', function () {
		console.log('mongoose에서 데이터베이스 연결을 성공했습니다., dbURI : ' + dbURI);
	});

	// Failed to connect database
	mongoose.connection.on('error', function (err) {
		console.log('mongoose에서 데이터베이스 연결을 실패했습니다, error : ' + err);
	});

	// When the connection has disconnected
	mongoose.connection.on('disconnected', function () {
		console.log('데이터베이스가 연결되지 않았습니다.');
	});

	// If the Node.js process is going down, close database
	// connection pool
	process.on('SIGINT', function () {
		mongoose.connection.close(function () {
			console.log('Application process가 다운됐습니다, 데이터베이스 connection에 연결되지 않았습니다.');
		});
	});
}