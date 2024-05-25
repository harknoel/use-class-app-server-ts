export class Chat {
  formattedJSON: string;
  instructions: string;
  prompt: string;

  constructor(formattedJSON: string, instructions: string, prompt: string) {
    this.formattedJSON = formattedJSON;
    this.instructions = instructions;
    this.prompt = prompt;
  }
}
