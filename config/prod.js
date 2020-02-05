// prod.js - production keys are here!!! MAKE SURE TO COMMIT
module.exports = {
	// the clientID is a public token that can be shared with anyone
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	//clientSecret is something we don't want anyone to see
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	facebookClientID: process.env.FACEBOOK_CLIENT_ID,
	facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
};