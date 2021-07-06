import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRrepository } from "../repositories/UserRepository";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const userRepository = getCustomRepository(UserRrepository);

  const { user_id } = req;
  const { admin } = await userRepository.findOne(user_id);
  if(admin) {
    return next();
  }

  return res.status(401).json({
    status: 'Unauthorized',
    message: 'User is not an administrator.'
  });
}
