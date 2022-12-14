const { App } = require('@slack/bolt');
const reqOpenAI = require('./openai/index')
require("dotenv").config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

app.event("message", async ({ event, say }) => {
  try {
    answer = await reqOpenAI(event.text)
    say(answer);
  } catch (error) {
    console.log("err")
    console.error(error);
  }
});


(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log(`⚡️ Bolt app is running!`);
})();