const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function reqOpenAI(input, task, options = null) {
  let model = "code-davinci-002"
  let prompt = input

  switch(task){
    case "time-complexity":
      model = "text-davinci-003"
      prompt += "\n\"\"\"\nThe time complexity of the above code snippet is"
      break;
    
    case "explain":
      prompt += "\n\"\"\"\nHere is what the above code snippet is doing:\n1."
      break;

    case "translate-code":
      prompt = "\"\"\"" + options.sourceLanguage + "\n" + input + "\n\"\"\"" + options.targetLanguage + "\n"
      break;

    default:
      break;
  }

  const completion = await openai.createCompletion({
    model: model,
    prompt: prompt,
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\"\"\""]
  });

  let parts = prompt.split("\"\"\"")
  const response = "```" + parts[0] + "```" + parts[1] + completion.data.choices[0].text

  return response
}