//각 Task의 메뉴 정의
exports.getTasks = function () {
	var tasks = {
		todo: [ "design model", "integration test"],
		inProgress: [ "develop main page"],
		done: [ "design main page" ]
	};
	return tasks;
};
