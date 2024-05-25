import { Request, Response } from "express";

export const echoRequest = (req: Request, res: Response) => {
  res.json(req.body);
};
