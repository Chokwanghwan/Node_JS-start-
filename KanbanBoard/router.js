// binding task controller 
var task = require('./controllers/task-controller.js');

// 주 리스트, 생성, 갱신, 제거 테스크로 라우트하는 라우터 생성
exports.route = function(app) {
	app.get('/', task.list);
	app.post('/createTask', task.create);
	app.post('/updateTask', task.update);
	app.post('/removeTask', task.remove);
};