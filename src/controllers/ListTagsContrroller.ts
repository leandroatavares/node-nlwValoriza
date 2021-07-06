import { Request, Response } from 'express';
import { ListTagsService } from '../services/ListTagsService';

export class ListTagsController {
  async handle(req: Request, res: Response) {
      const service = new ListTagsService();

      const tags = await service.execute();

      return res.json(tags);
  }
}