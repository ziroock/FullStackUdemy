const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
    // we are only passing in the reference to the function requireLogin(), that will be executed
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create(
            {
                amount: 500,
                currency: 'usd',
                source: req.body.id,
                description: '5$ for 5 credits',
            }
        );

        req.user.credits += 5;
        //putting hte saved user in a variable to make sure that we get hte most up to date information
        const user = await req.user.save();
        res.send(user);
    });
};