# MASS-SURVEY-EMAIL-SENDING  
## APP BASED ON UDEMY COURSE

## Project Intent, Functionality & Learned How To
### Intent
- This project is with fully educational purpose, and I followed directions and was  
learning from a 25h+ Udemy Course on **Node with React: Full Stack Development**:  
https://www.udemy.com/course/node-with-react-fullstack-web-development/
### Functionality
#### Navigation Bar
- When not authenticated **NavBar** shows the Logo and Login With Google buttons.  
- The logo takes you to home screen, and the Login to register/authenticate.
- To start you can authenticate using google, which will create an account   
using your Google ID if you don't already have one.
- When signed in the **NavBar** shows the Logo, AddCredits button, credits left  
and logout.
#### Home/Dashboard
- The home is a dashboard containing all the surveys sent by the user.
- The surveys are displayed based on most recent to earliest sent.
- To create a **survey** click on the add button in the bottom left corner.
- Once a survey is sent it will show inside the dashboard and when a user  
answers on the yes/no survey by clicking the yes/no link, the count of replies  
will change for this survey.
#### Credits Handling
- Add credits prompts a stripe window where you can add credits.   
- For simplicity, you can only add 5 credits at a time. To add credits use any  
real or fictional email.   
- For the credit card PLEASE DO NOT USE ANY REAL INFORMATION!!! Use the  
following card number *4242 4242 4242 4242*, any 3 digit CVC and an expiration  
date that is in the future from the day you are using the application.
- Credits change when you spend some for a mass email survey.
#### Creatating Surveys
- To create a **survey** click on the add button in the bottom left corner  
inside dashboard.
- This will send you to a simple form where it will prompt you to enter:  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Survey Title:** The title used inside the email body.  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Subject Line:** The subject line used by the email.  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Email Body:** A simple yes/no question that you want your email receivers to answer,  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Recipient List:** A comma separated list with emails that will receive your survey.
- There is error handling for each field. Every field is a required field.  
- Once everything is filled in correctly the next step is to review allow the user  
to review the form one last time before they send it.
- Sending it will send it to all recipients. 
###Learned How To:
- make architectural considerations of building a full stack app.
- connect a front-end Create-React-App server to a NodeJS and Express backend.  
- properly communicate data from your Mongo database to your React application.  
- route user requests on the front end with React Router and on the backend   
with Express.
- build reusable user inputs with Redux Form, complete with navigation.
- handle credit cards and receive payments from your users with Stripe.
- engage your users with automated emails.
- enhance authentication flows in your app with Google OAuth authentication.
- separate production and development resources with advanced API key handling  
 techniques.
- educate your users on how to use your app with custom build landing pages.
## How to run the project
### Hosted on a server (heroku) in production mode:
- Go to: https://shielded-mountain-06419.herokuapp.com/

### Locally in development mode:
#### For the first time
1. Clone the project folder from the following repository: https://github.com/ziroock/mass-survey-emails.git
2. Make sure you have Node and NPM installed.
3. Run **npm install** inside the root folder to install the server side   
dependencies.
4. Ron **npm install** inside the client folder to install the client side  
dependencies.
5. Create a file inside the *config* folder called *dev.js* with the following content:  
 *module.exports = {   
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mongoURI: 'mongoKey',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; googleClientID: 'googleID',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; googleClientSecret: 'googleSecret',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cookieKey: 'constant key that you generate',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; stripePublishableKey: 'stripePublicKey',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; stripeSecretKey: 'stripePrivateKey',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sendGridKey: 'sendGridKey',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; redirectDomain: 'http://localhost:3000',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; facebookClientID: 'facebookID',  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; facebookClientSecret: 'facebookSecret',  
  }*  
 Insert the values from your API's. Currently, the facebook auth is working;  
 however, it is not wired up to the client side and is not being used.
6. To start the project inside the root folder run **npm run dev**.
7. To access the project type http://localhost:3000 in a new browser window.
8. To stop the server, and the client press **CTRL^C** twice inside terminal. 
 
#### Once everything is set up
1. To start the project inside the root folder run **npm run dev**. 
2. To access the project type http://localhost:3000 in a new browser window.
3. To stop the server, and the client press **CTRL^C** twice inside terminal. 

## Future Changes/TODO List
**TODO: Finish Section**

## Versions used to implement the project
- Node v12.16.3
- NPM v6.14.4

## Time Spent
**TODO: Finish Section**