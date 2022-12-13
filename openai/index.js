const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function openAIClient(code, event) {
    switch (event) {
        case "translate-code":
            //TODO: how to format the prompt?
            return await openai.createCompletion({
                model: "code-davinci-002",
                prompt: code,
                temperature: 0,
                max_tokens: 54,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["###"],
            });
        case "explain-code":
            return await openai.createCompletion({
                model: "code-davinci-002",
                prompt: code,
                temperature: 0,
                max_tokens: 64,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["\"\"\""],
            });
        case "time-complexity":
            return await openai.createCompletion({
                model: "code-davinci-003",
                prompt: code,
                temperature: 0,
                max_tokens: 64,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["\n"],
            });
    }
}

