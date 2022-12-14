const { App } = require('@slack/bolt');
const reqOpenAI = require('./openai/index')
require("dotenv").config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

app.command("/explain", async ({ command, ack, say }) => {
  try {
    await ack();
    say("Please provide your code");
    
    app.event('message', async ({ event, say }) => {
      try {
        await ack();
        answer = await reqOpenAI(event.text, "explain")
        say(answer);
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
    say("Please specify source language")

    app.event("message", async ({event, say}) => {
      let source = event.text

      say("Please specify target language")

      app.event("message", async ({event, say}) => {
        let target = event.text

        say("Please provide your code")

        app.event("me_message", async ({event, say}) => {
          try {
            const answer = await reqOpenAI(event.text, "translate-code", {
              sourceLanguage: source,
              targetLanguage: target
            })
            say(answer);
          } catch (error) {
            console.log("err")
            console.error(error);
          }
        })
      })
    })
    
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
        await ack();
        const answer = await reqOpenAI(event.text, "time-complexity")
        say(answer)
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