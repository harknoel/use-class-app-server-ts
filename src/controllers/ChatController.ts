import { Request, Response } from "express";
import { ChatService } from "../services/ChatService";

const chatService = new ChatService();

export const convert = async (req: Request, res: Response) => {
  try {
    const chat = await chatService.convert(req.body);
    console.log(chat)
    res.json(chat);
  } catch (error) {
    console.error("Error in convert function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};