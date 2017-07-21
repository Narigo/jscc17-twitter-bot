const Twit = require("twit");
const config = require("./config.json");

const theBot = new Twit({
  ...config
});

