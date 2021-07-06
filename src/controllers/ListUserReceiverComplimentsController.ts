import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiverComplimentsController {
  async handle(req: Request, res: Response) {
    const service = new ListUserReceiveComplimentsService();

    const { user_id } = req;

    const compliments = await service.execute(user_id);

    return res.json(compliments);
  }
}

export { ListUserReceiverComplimentsController }