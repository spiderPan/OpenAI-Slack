const { App } = require('@slack/bolt');
require("dotenv").config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

/* Add functionality here */

app.command("/explain", async ({ command, ack, say }) => {
  try {
    await ack();
    say("Please provide your code");
    
    app.event("message", async ({ event, say }) => {
      try {
        //event.text is what we need
        console.log(event);
        say("Yaaay! that command works!");
      } catch (error) {
        console.log("err")
        console.error(error);
      }
    });
    
  } catch (error) {
    console.log("err")
    console.error(error);
  }
});

app.command("/translate-code", async ({ command, ack, say }) => {
  try {
    await ack();
    say("PLease provide your code and comments to specify the source and target languages");

    app.event("message", async ({ event, say }) => {
      try {
        //event.text is what we need
        console.log(event);
        say("Yaaay! that command works!");
      } catch (error) {
        console.log("err")
        console.error(error);
      }
    });
    
  } catch (error) {
    console.log("err")
    console.error(error);
  }
});

app.command("/time-complexity", async ({ command, ack, say }) => {
  try {
    await ack();
    say("Please provide your code to calculate time complexity");

    app.event("message", async ({ event, say }) => {
      try {
        //event.text is what we need
        console.log(event);
        say("Yaaay! that command works!");
      } catch (error) {
        console.log("err")
        console.error(error);
      }
    });
    
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