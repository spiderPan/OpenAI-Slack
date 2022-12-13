# Wattpad P&I Hackathon 2022

## Setup
1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Install the requirements

   ```bash
   $ npm install
   ```

3. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

4. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

| ENV Name             | Default |
| -------------------- | ------- |
| OPENAI_API_KEY       | ""      |
| SLACK_SIGNING_SECRET | ""      |
| SLACK_BOT_TOKEN      | ""      |
| PORT                 | 3000    |

1. Run the app

   ```bash
   $ npm start
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! 

## Scope
### Minimal Requriement (to have something up and running!)
1. Register an app with API key in OpenAPI (easy)
2. Pick an example or couples ( input: code snippet, output: whatever showed in examples)
    
    a. Explain Code https://beta.openai.com/examples/default-explain-code

    b. Calculate Complexity  https://beta.openai.com/examples/default-time-complexity

    c. Translate programming language https://beta.openai.com/examples/default-translate-code

3. Create a Slack bot (with the provided library)
4. Connect it!

### Enhancement Suggestions
1. Build buttons in the Slack bot that allow user to choose integration type
2. Support more integration types


### Workflow
1. Create a Local dev environment
2. Deploy it to the local app
3. Demo it!