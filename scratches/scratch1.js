email = 'a@a.com'
choice = 'yes' || 'no'

// first part finds the appropriate survey
Survey.updateOne({
   id: surveyId,
    recipients: {
       $elemMatch: { email: email, responded: false }
    }
},
    //second part updates
    {
    //increment to either yes or no by 1
    // [choice] is ES6 a key interpolation
    $inc: { [choice]: 1 },
    // get to recipients and make sure you grab and set responded value
    $set: { 'recipients.$.responded': true}
});