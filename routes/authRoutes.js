const passport = require('passport');

//1.Forward users's request to Google
//2. Ask user if they grat permission
//3. User grants permision, gets code and gets directed to
//		-> localgost:5000/auth/google/callback?code=000000
module.exports = app => {
	app.get('/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);
	
	//4.Put user on hold, take the'code' from the URL
	app.get('/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	//routine for current user to logout
	app.get('/api/logout', (req, res) => {
		//attatched to the req object automatically by passport
		req.logout();
		res.redirect('/');
	});

	//test to check if someone logged in and got access to user aka check for curr_usr
	app.get('/api/current_user',(req, res) => {
		res.send(req.user);
	});

	app.get('/auth/facebook', 
		passport.authenticate('facebook', {
			scope: ['email']})
	);
	
	//4.Put user on hold, take the'code' from the URL
	app.get('/auth/facebook/callback', 
		passport.authenticate('facebook')
	);
};