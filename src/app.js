//region configs
const configs = require('./configs');
const pjson = require('../package.json');
//endregion

//region External dependencies
const express = require('express');
const builder = require('botbuilder');
const axios = require('axios');
//endregion

//region internal dependencies
const ImgurService = require('./services/imgur');
const ChuckNorrisService = require('./services/chucknorris');
const rngHelper  = require('./helpers/rngHelper');
const GiphyService = require('./services/giphy');
const QuotesService = require('./services/quotes');
const ImpraiseService = require('./services/impraise');
//endregion

//region api http clients
const imgurHttpClient = axios.create({
  baseURL: configs.imgur.baseUrl,
  timeout: configs.imgur.timeout,
  headers: {'Authorization': `Client-ID ${configs.imgur.clientID}`}
});  

const chuckNorrisHttpClient = axios.create({
  baseURL: configs.chucknorris.baseUrl,
  timeout: configs.chucknorris.timeout,
}); 

const giphyHttpClient = axios.create({
  baseURL: configs.giphy.baseUrl,
  timeout:configs.giphy.timeout

});

giphyHttpClient.interceptors.request.use((request)=>{
  request.url +=`&api_key=${configs.giphy.clientID}`;
  return request;
});

//endregion

//region services
const giphy = new GiphyService(giphyHttpClient);
const imgur = new ImgurService(imgurHttpClient);
const chuckNorris = new ChuckNorrisService(chuckNorrisHttpClient);
const quotes = new QuotesService();
const impraise = new ImpraiseService();
//endregions

//region Dialogs
const PhotoDialogHandler = require('./dialogs/photo/photoDialogHandler');
const DebugDialogHandler = require('./dialogs/debug/debugDialogHandler');
const HelpDialogHandler = require('./dialogs/help/helpDialogHandler');
const ChuckNorrisDialogHandler = require('./dialogs/chucknorris/chuckNorrisDialogHandler');
const GiphyDialogHandler = require('./dialogs/giphy/giphyDialogHandler');
const QuotesDialogHandler = require('./dialogs/quotes/quotesDialogHandler');
const ImpraiseDialogHandler = require('./dialogs/impraise/impraiseDialogHandler');
const DialogsInstaller = require('./dialogs/dialogsInstaller');

const handlers = [];
handlers.push( PhotoDialogHandler(imgur,builder,configs.dialogs,rngHelper));
handlers.push( DebugDialogHandler(pjson));
handlers.push( HelpDialogHandler());
handlers.push( ChuckNorrisDialogHandler(chuckNorris,builder));
handlers.push( GiphyDialogHandler(giphy,builder));
handlers.push( QuotesDialogHandler(quotes));
handlers.push( ImpraiseDialogHandler(impraise));


/*default intentThreshold is 0.1
on group chat the match score is < 0.1 so i had to tweak it to pass the intent match.
score = matched.length / context.message.text.length; botbuilder v3.5.4 */
const intents = new builder.IntentDialog({ intentThreshold: 0.01 });
intents.onDefault((session)=>session.endDialog('Hello! Type `help` to get more info about available commands.'));

const dialogInstaller = new DialogsInstaller(intents,handlers);
dialogInstaller.Install(intents);
//endregion

//region bot setup
const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const bot = new builder.UniversalBot(connector);
bot.dialog('/',intents);

bot.on('conversationUpdate', function (message) {
  // Check for group conversations
  if (message.address.conversation.isGroup) {
    // Send a hello message when bot is added
    if (message.membersAdded) {
      message.membersAdded.forEach(function (identity) {
        if (identity.id === message.address.bot.id) {
          var reply = new builder.Message()
            .address(message.address)
            .text('Hello everyone!');
          bot.send(reply);
        }
      });
    }
    
    // Send a goodbye message when bot is removed
    if (message.membersRemoved) {
      message.membersRemoved.forEach(function (identity) {
        if (identity.id === message.address.bot.id) {
          var reply = new builder.Message()
            .address(message.address)
            .text('Goodbye');
          bot.send(reply);
        }
      });
    }
  }
  else{
    if (message.membersAdded) {
      message.membersAdded.forEach(function (identity) {
        if (identity.id !== message.address.bot.id) {
          var reply = new builder.Message()
            .address(message.address)
            .text(`Hello ${identity.name}!`);
          bot.send(reply);
        }
      }); 
    }
  }
  
});

bot.on('contactRelationUpdate', function (message) {
  if (message.action === 'add') {
    var name = message.user ? message.user.name : null;
    var reply = new builder.Message()
      .address(message.address)
      .text('Hello %s! Thanks for adding me.', name || 'there');
    bot.send(reply);
  } else {
    //TODO:s delete their data
  }
});

bot.on('deleteUserData', function (message) {
  console.log(message);
  // TODO: User asked to delete their data
});
//endregion

//region express server setup
const port = process.env.PORT || 3000;
const app = express();
app.listen(port,()=>{
  console.log(`Server listening on port ${port}.`);
});

app.post('/api/messages', connector.listen());
//endregion