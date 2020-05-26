const passport = require('passport');
const GoolgleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//WE NEED TO INSTRUCT PASSPORT THAT IT NEEDS TO MAKE USE OF
// COOKIES TO TAKE CARE OF AUTHENTICATION FOR US


// connecting User.js
const User = mongoose.model('users');


//encodes the decision
//done needs to be called after any work passport does to let it know it is done
//turning user (mongoDB instance) to an id
passport.serializeUser((user, done) => {
	done(null, user.id);
	//user.id refers to the id in our DB
	//using user.id allows us to keep multiple ID's from different providers FB,twitter...
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
	new GoolgleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
	//callback function called by the google strategy
		async (accessToken, refreshToken, profile, done) => {
			console.log('access token:', accessToken);
			console.log('refresh token:', refreshToken);
			console.log('profile:', profile);
			//promise is the way javascript deals with asynchronous programming
			//find the first time this profile was recorded to avoid duplicates in DB
			const existingUser = await User.findOne({googleID: profile.id});

			//we already have a record with the given profile ID
			// we tell passport that we are all done so continue to authenticate
			if (existingUser) {
				return done(null, existingUser);
			}

			//existingUser is NULL
			//we don't have a user record with this ID, make a new record
			const user = await new User({googleID: profile.id}).save();
			done(null, user);
		}
	)
);


passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},

	(accessToken, refreshToken, profile, done) => {
		console.log('access token:', accessToken);
		console.log('refresh token:', refreshToken);
		console.log('profile:', profile);

		User.findOne({facebookID: profile.id})
			.then((existingUser) => {
				if (existingUser) {
					done(null, existingUser); 
				} else {
					new User({facebookID: profile.id})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);


/*
	O'Auth's only purpose is to allow someone to sing in.
	After that, we use our own internal ID's!!!!!!
*/