import { NextFunction, Request, Response } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  //TODO: verificar admin por jwt
  const admin = true;

  if(admin) {
    return next();
  }

  return res.status(401).json({
    status: 'Unauthorized',
    message: 'User is not an administrator.'
  });
}
