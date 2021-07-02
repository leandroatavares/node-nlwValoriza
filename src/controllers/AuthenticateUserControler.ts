import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserControler {
  async handle(req: Request, res: Response) {

    const authenticateUserService = new AuthenticateUserService();

    const { email, password } = req.body;

    
    const token = await authenticateUserService.execute({email, password});

    return res.json({"token": token});
  }
}

export { AuthenticateUserControler }
