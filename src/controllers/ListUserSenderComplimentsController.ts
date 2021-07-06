
import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController {
  async handle(req: Request, res: Response) {
    const service = new ListUserSenderComplimentsService();

    const { user_id } = req;

    const compliments = await service.execute(user_id);

    return res.json(compliments);
  }
}

export { ListUserSenderComplimentsController }