const express = require('express');
const app = express(); //create express application (you can have multiple but in majority of projects usually use one)

// Different type of requests like get(get info), post(Senf Info), put(Update all 
// he properties of something), delete(Delete something), patch(Update one or two roperties)

//app -> Express App that is used to register route handler
//get -> This method watches for incoming requests
// '/' -> / is default, we can have /animals, /cats, /dogs, etc...
//req -> Object representing the incoming request
//res -> Object representing the outgoing response
//res.send({hi: 'there'}); -> Immediately send some JSON back to whoever made this request

app.get('/', (req, res) => {
	res.send({hi: 'there'});
});

//environmental variable from Heroku or my own port
const PORT = process.env.PORT || 5000;
app.listen(PORT);