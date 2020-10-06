require('../src/db/mongoose');
const User = require('../src/models/user');

// 5f4510e15a5e6506da846153
// User.findByIdAndUpdate('5f4510e15a5e6506da846153', { age: 5 })
// 	.then((user) => {
// 		console.log(user);
// 		return User.countDocuments({ age: 5 });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

updateAgeAndCount('5f4510e15a5e6506da846153', 2)
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
