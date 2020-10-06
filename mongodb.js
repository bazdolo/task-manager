// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('unable to connect to database');
	}

	const db = client.db(databaseName);

	// db.collection('users').insertOne({
	// 	_id: id,
	// 	name: 'tom',
	// 	age: 24
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('unable to insert user');
	// 	}
	// 	console.log(result.ops);
	// });

	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'Do some node js',
	// 		completed: false
	// 	},
	// 	{
	// 		description: 'Get shopping',
	// 		completed: true
	// 	},
	// 	{
	// 		description: 'Make dinner',
	// 		completed: true
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('unable to insert user');
	// 	}
	// 	console.log(result.ops);
	// });

	// db.collection('users').findOne({ _id: new ObjectID('5f2728d5715c0b056e560142') }, (error, user) => {
	// 	if (error) {
	// 		return console.log('unable to fetch');
	// 	}
	// 	console.log(user);
	// });

	// db.collection('users').find({ age: 27 }).toArray((error, users) => {
	// 	console.log(users);
	// });

	// db.collection('users').find({ age: 27 }).count((error, users) => {
	// 	console.log(users);
	// });

	// db.collection('tasks').findOne({ _id: new ObjectID('5f2717453d4dd004b1cb7180') }, (error, task) => {
	// 	if (error) {
	// 		return console.log('unable to fetch');
	// 	}
	// 	console.log(task);
	// });

	// db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
	// 	if (error) {
	// 		return console.log('unable to fetch');
	// 	}
	// 	console.log(tasks);
	// });

	// const updatePromise = db
	// 	.collection('users')
	// 	.updateOne(
	// 		{
	// 			_id: new ObjectID('5f2728d5715c0b056e560142')
	// 		},
	// 		{
	// 			$inc: {
	// 				age: 1
	// 			}
	// 		}
	// 	)
	// 	.then((result) => {
	// 		console.log(result);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	// const updateManyPromise = db
	// 	.collection('tasks')
	// 	.updateMany(
	// 		{
	// 			completed: false
	// 		},
	// 		{
	// 			$set: {
	// 				completed: true
	// 			}
	// 		}
	// 	)
	// 	.then((result) => {
	// 		console.log(result.modifiedCount);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	// const deleteMany = () => {
	// 	db
	// 		.collection('users')
	// 		.deleteMany({
	// 			age: '30'
	// 		})
	// 		.then((result) => {
	// 			console.log(result);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	// deleteMany();

	const deleteOne = db
		.collection('tasks')
		.deleteOne({
			description: 'Get shopping'
		})
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});
