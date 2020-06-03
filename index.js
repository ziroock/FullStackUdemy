const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');//where we define models class (always load before passport)
require('./models/Survey');
require('./services/passport');//get passport

mongoose.connect(keys.mongoURI);

const app = express(); //create express application (you can have multiple but in majority of projects usually use one)
//same as const authRoutes = require('./...');
//		  authRoutes(app);
//so it basically imports the file and runs the exported function with app as a parameter
//require('./...') returns the function and (app) sends the parameter app

app.use(bodyParser.json());
//Tell express that it needs to use cookies in our application
app.use(
	cookieSession({
		//how long can the cookie exist before it expires 30 days in our case
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// it serves to encrypted
		keys: [keys.cookieKey] 
	})
);

//merge successful ??
//fully completes the authentication flow
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
// runs only in production
if(process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize route
	// a.k.a catch all request when the route or whatever is not found in client
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});

}

//environmental variable from Heroku or my own port
const PORT = process.env.PORT || 5000;
app.listen(PORT);




































/*
USEFULL THINGS

// Different type of requests like get(get info), post(Senf Info), put(Update all 
// he properties of something), delete(Delete something), patch(Update one or two roperties)

//app -> Express App that is used to register route handler
//get -> This method watches for incoming requests
// '/' -> / is default, we can have /animals, /cats, /dogs, etc...
//req -> Object representing the incoming request
//res -> Object representing the outgoing response
//res.send({hi: 'there'}); -> Immediately send some JSON back to whoever made this request
app.get('/', (req, res) => {
	res.send({bye: 'buddy'});
});
*/