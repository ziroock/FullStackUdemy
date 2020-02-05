const mongoose = require('mongoose');
// same as Schema = mongoose.Schema;
const { Schema } = mongoose;

//user shema that is going to describe all the different propperties
// aka describes what the user is going to look like
const userSchema = new Schema ({
	googleID: String,
	facebookID: String
});

mongoose.model('users', userSchema);