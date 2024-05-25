const {G4F} = require("g4f");

module.exports.chatUtil = async (prompt: string) => {
    const g4f = new G4F();

    const options = {
        provider: g4f.providers.GPT,
        model: "gpt-3.5-turbo-0613",
        response_format: {type: "json_object"},
        debug: true,
        proxy: "",
    };

    const messages = [{role: "user", content: prompt}];

    try {
        return await g4f.chatCompletion(messages, options);
    } catch (error) {
        console.error("Error during G4F chat completion:", error);
        throw error;
    }
};