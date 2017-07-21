const Twit = require("twit");
const config = require("./config.json");

const theBot = new Twit({
  ...config
});

const stream = theBot.stream('statuses/filter', { track: 'jscc17' });

stream.on("tweet", console.log);
