const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: '0b3885c3c954fd4d624855f42122e3fc',
  token: 'xoxb-4510978239459-4504539151814-C4ZzeDOsgdtdG61puXqk0fBv',
  socketMode: true,
  appToken: 'xapp-1-A04F137VARY-4511446837843-5e49f6cc66ba033f0a3e03cd17ba85c1b49f7cfab766cd33c204e821bd1b57de'
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