const { chatUtil, cleanAndParseJSON } = require("../util/util");

import { Prompt } from "../model/Prompt";
import { CLASS_INSTRUCTION, CLASS_JSON_FORMAT } from "../config/constants";

export class ChatService {
  async convert(plantUML: string) {
    try {
      const userPrompt = new Prompt(
        plantUML,
        CLASS_INSTRUCTION,
        CLASS_JSON_FORMAT
      );
      const response = await chatUtil(userPrompt.prompt);
      const cleanJSON = cleanAndParseJSON(response)
      // console.log(response)
      // console.log(cleanJSON)
      return JSON.parse(cleanJSON);
    } catch (error) {
      console.error("Error in ChatService convert method:", error);
      this.convert(plantUML)
    }
  }
}
