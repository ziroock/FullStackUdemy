// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	//we are in production - return the prod set of keys
	module.exports = require('./prod');
} else {
	//we are in development - return the dev keys !!!
	//export and require in the dev.js file at the same time
	module.exports = require('./dev');
}

/*
prod
Atlas credentials:
mongodb+srv://userone:gNEeMLfWuO7Bglta@cluster0-pnsg3.mongodb.net/test?retryWrites=true&w=majority

googleOauth:
id: 255565718467-rgc1hqq0tu7dtk93ad38sf788e27odrr.apps.googleusercontent.com
secret: iChPD4wWwMSWv5PZvLb64HfE

faceBook ouath:
id:538565907004657
secret: e7369c6001e76ed3fa3776289f78ee8e
*/