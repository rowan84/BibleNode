'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('145950702:AAFP2xrvD68yKHBnwXU-_xCb_cvcqxzQNMU')

var bibleRefRegex = /(?:\d\s*)?[A-Z]?[a-z]+\s*\d+(?:[:-]\d+)?(?:\s*-\s*\d+)?(?::\d+|(?:\s*[A-Z]?[a-z]+\s*\d+:\d+))?/;

class VerseController extends TelegramBaseController {
   
	/**
     * @param {Scope} $
     */
    verseHandler($) {
        $.sendMessage('And we know that in all things God works for the good of those who love him, who have been called according to his purpose. Romans 8:28 (NIV)')
    }

    get routes() {
        return {
            'verse': 'verseHandler',
            'Verse': 'verseHandler',
            'VERSE': 'verseHandler',
        }
    }
}

class BibleController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    handle($) {
    	entry = $.query[0];
    	
    	if(bibleRefRegex.test(entry))
    	{
    		$.sendMessage('You have requested: ' + entry);
    	}
    	else
    	{
    		$.sendMessage('hello that is an invalid entry...for Now');
    	}
    }
}

tg.router
    .when(['verse'], new VerseController())
    .when(['Verse'], new VerseController())
    .when(['VERSE'], new VerseController())
    .otherwise(new BibleController())

/*const http = require('http');


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World - Gerhard!!!\n');
});

server.listen(port, () => {
  console.log('Server running at http');
});
*/