const passport = require('passport');
const GoolgleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//WE NEED TO INSTRUCT PASSPORT THAT IT NEEDTS TO MAKE USE OF
// COOKIES TO TKAE CARE OF AUTHENTICATION FOR US


// connectiong User.js
const User = mongoose.model('users');


//encodes the dession
//done needs to be called after any work passport does to let it know it is done
//turning user (mongoDB instance) to an id
passport.serializeUser((user, done) => {
	done(null, user.id);
	//user.id reffers to the id in our DB
	//using user.id allows us to keep multiple ID's from different providors FB,twitter...
});

//turning an id into a mongoDB instance (user)
passport.deserializeUser((id, done) => {
	//findById is a query
	User.findById(id)
		.then(user => {
			//null means everything worked ok
			done(null, user);
		});
});

passport.use(
	new GoolgleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, 
	//callback function called by the google startegy
	(accessToken, refreshToken, profile, done) => {
		console.log('access token:', accessToken);
		console.log('refresh token:', refreshToken);
		console.log('profile:', profile);

		//promise is the way javascript deals with asynchrinous programming
		//find the first time this profile was recored to avoid duplicates in DB
		User.findOne({googleID: profile.id})
			.then((existingUser) => {
				if (existingUser) {
					//we already have a record with the given profile ID
					// we tell passport that we are all done so continuea to authenticate
					done(null, existingUser); 
				} else {//existingUser is NULL
					//we don't have a user record with this ID, make a new record
					new User({googleID: profile.id})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);


passport.use(
	new FacebookStrategy({
		clientID: keys.facebookClientID,
		clientSecret: keys.facebookClientSecret,
		callbackURL: '/auth/facebook/callback',
		profileFields: ['email']
	},

	//callback function called by the google startegy
	(accessToken, refreshToken, profile, done) => {
		console.log('access token:', accessToken);
		console.log('refresh token:', refreshToken);
		console.log('profile:', profile);

		//promise is the way javascript deals with asynchrinous programming
		//find the first time this profile was recored to avoid duplicates in DB
		User.findOne({facebookID: profile.id})
			.then((existingUser) => {
				if (existingUser) {
					//we already have a record with the given profile ID
					// we tell passport that we are all done so continuea to authenticate
					done(null, existingUser); 
				} else {//existingUser is NULL
					//we don't have a user record with this ID, make a new record
					new User({facebookID: profile.id})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);


/*
	O'Auth's only purpouse is to allow someoone to sing in. 
	After that, we use our own internal ID's!!!!!!
*/