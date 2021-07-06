import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  // console.log('auth', token.substr(7))

  if(!authToken) {
    return res.status(401).end();
  }

  //authToken.substr(7)
  const [, token] = authToken.split(' ') //<- ignorre position 0 [,var]
  try {
    const { sub } = verify(token, 'dd706e318aef47a268862a0ab229f4bd') as IPayload;
    req.user_id = sub;
    
    return next();
  } catch(err) {
    return res.status(401).end();
  }

}
