const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// Current Redirect: https://6add97f060bb.ngrok.io

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req,res) => {
       res.send('Thanks for the review!');
    });

    // parseObject: extracts just the surveyId and choice
    // new URL(url).pathname: extract the path from the url, aka /api/survey/surveyId/choice
    // match will be object or null if there is no surveyId or choice
    app.post('/api/surveys/webhooks', (req, res) => {
        const parseObject = new Path('/api/surveys/:surveyId/:choice');

        const events = _.chain(req.body)
            .map( ({ email, url }) => {
                const match = parseObject.test(new URL(url).pathname);
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            .compact()
            .uniqWith(_.isEqual)
            .value();

        console.log(events);
        res.send({});
    });

    // TODO: Need to make sure that surveys can be sent only from api/surveys/new
    app.post('/api/surveys', requireLogin, requireCredits,  async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title: title,
            subject: subject,
            body: body,
            // recipients: recipients.split(',').map(email => { return { email: email.trim() }})
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            // Error 424 unprocessable entity aka something is wrong with the data you sent us
            res.status(424).send(err);
        }
    });
};

// !!!!!!!!!!!! IF WRITING CODE FOR SPEED USE THIS INSTEAD OF LODASH !!!!!!!!!!!!
// app.post('/api/surveys/webhooks', (req, res) => {
//     const parseObject = new Path('/api/surveys/:surveyId/:choice');
//
//     const events = (req.body).map( ({ email, url }) => {
//         const match = parseObject.test(new URL(url).pathname);
//         if (match) {
//             return { email, surveyId: match.surveyId, choice: match.choice };
//         }
//     });
//     //gets rid of null or undefined
//     const compactEvents = events.filter(event => !!event);
//     const uniqueEvents = [...new Set(compactEvents)];
//
//     console.log(uniqueEvents);
//     res.send({});
// });