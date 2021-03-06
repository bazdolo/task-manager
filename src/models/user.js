const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is not valid');
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 7,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error('Age must be a positive number');
			}
		}
	}
});

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });
	console.log(user);

	if (!user) {
		throw new Error('Unable to log in');
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw new Error('Unable to log in');
	}

	return user;
};

// does not take an arrow function since arrow function do not bind this
userSchema.pre('save', async function(next) {
	const user = this;
	console.log(this);

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

console.log(this);

const User = mongoose.model('User', userSchema);

module.exports = User;
