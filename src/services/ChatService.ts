const { chatUtil } = require("../util/ChatUtil");

import { Prompt } from "../model/Prompt";
import { CLASS_INSTRUCTION, CLASS_JSON_FORMAT } from "../config/constants";

export class ChatService {
  async convert(plantUML: string) {
    try {
      const userPrompt = new Prompt(plantUML, CLASS_INSTRUCTION, CLASS_JSON_FORMAT)
      const response = await chatUtil(userPrompt.prompt)
      return JSON.parse(response)
    } catch (error) {
      console.error("Error in ChatService convert method:", error);
      throw error;
    }
  }
}
