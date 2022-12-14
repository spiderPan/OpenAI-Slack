const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function reqOpenAI(input) {
  const explainCompletion = await openai.createCompletion({
    model: "code-davinci-002",
    prompt: input + "\n\"\"\"\nHere is what the above code snippet is doing:\n1.",
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\"\"\""]
  });

  const tcCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input + "\n\"\"\"\nThe time complexity of the above code snippet is",
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\"\"\""]
  });

  return "*Explanation:*\n1." + explainCompletion.data.choices[0].text + "\n\n*Time Complexity:*\nThe time complexity of the above code snippet is" + tcCompletion.data.choices[0].text + "\n"
}