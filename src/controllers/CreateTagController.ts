import { Request, response, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {

  async handle(req: Request, res: Response) {
    const service = new CreateTagService();
    const { name } = req.body;

    const tag = await service.execute(name);

    return res.json(tag);
  }

}

export { CreateTagController }
