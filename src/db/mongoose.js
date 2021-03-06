const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

// const User = mongoose.model('User', {
// 	name: {
// 		type: String,
// 		required: true,
// 		trim: true
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,
// 		validate(value) {
// 			if (!validator.isEmail(value)) {
// 				throw new Error('Email is not valid');
// 			}
// 		}
// 	},
// 	age: {
// 		type: Number,
// 		default: 0,
// 		validate(value) {
// 			if (value < 0) {
// 				throw new Error('Age must be a positive number');
// 			}
// 		}
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 7,
// 		validate(value) {
// 			if (value.toLowerCase().includes('password')) {
// 				throw new Error('Age must be a positive number');
// 			}
// 		}
// 	}
// });

// const me = new User({
// 	name: '    barry     ',
// 	email: 'MIKE@mail.IO    ',
// 	password: 'phone098!'
// });

// me
// 	.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log('there was an error ', error);
// 	});

// const Task = mongoose.model('task', {
// 	description: {
// 		type: String,
// 		trim: true,
// 		required: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	}
// });

// const task = new Task({
// 	description: 'Learn the mongoose library',
// 	completed: false
// });

// task
// 	.save()
// 	.then(() => {
// 		console.log(task);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
