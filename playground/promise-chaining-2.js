require('../src/db/mongoose');
const Task = require('../src/models/task');

// 5f4510e15a5e6506da846153
// Task.findByIdAndDelete('5f4512c355290b07e5c9e40c')
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	const deleted = await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('5f4510e15a5e6506da846153')
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
