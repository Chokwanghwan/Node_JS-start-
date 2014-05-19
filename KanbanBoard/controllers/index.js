var initialTasks = require('../models/initial-tasks');

// title, TO-DO, In-Progress, Done 정 및 확장
exports.index = function (req, res){
	res.render('index', {
		title : 'My Kanban Board',
		todoTasks : initialTasks.getTasks().todo,
		inProgressTasks : initialTasks.getTasks().inProgress,
		doneTasks : initialTasks.getTasks().done
	});
};
