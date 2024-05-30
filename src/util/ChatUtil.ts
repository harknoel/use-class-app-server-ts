const { G4F } = require("g4f");
const g4f = new G4F();

module.exports.chatUtil = async (prompt: string) => {
  const options = {
    provider: g4f.providers.GPT,
    model: "gpt-4",
    response_format: { type: "json_object" },
    debug: true,
    proxy: "",
  };
  const messages = [{ role: "user", content: prompt }];

  try {
    const text = await g4f.chatCompletion(messages, options);
    return text;
  } catch (error) {
    console.error("Error during G4F chat completion:", error);
    throw error;
  }
};