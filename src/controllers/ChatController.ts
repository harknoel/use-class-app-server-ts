import { Request, Response } from "express";
import { ChatService } from "../services/ChatService";

const chatService = new ChatService();

export const convert = (req: Request, res: Response) => {
  const chat = chatService.convert(req.body);
  res.json(chat);
};