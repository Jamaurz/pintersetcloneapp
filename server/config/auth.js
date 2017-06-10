'use strict';

module.exports = {
    'twitterAuth' : {
        'consumerKey'       : process.env.CONSUMER_KEY,
        'consumerSecret'    : process.env.CONSUMER_SECRET,
        'callbackURL'       : process.env.APP_URL + 'auth/twitter/callback'
    },
};