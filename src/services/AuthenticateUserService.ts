import { getCustomRepository } from "typeorm";
import { UserRrepository } from "../repositories/UserRepository";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';


interface IAuthenticareRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticareRequest) {
    const userRepository = await getCustomRepository(UserRrepository);
    const user = await userRepository.findOne({email});

    if(!user) {
      throw new Error('Email/password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error('Email/password incorrect');
    }

    return sign({
      email: user.email
    }, 'dd706e318aef47a268862a0ab229f4bd', {//node nlw valoriza
      subject: user.id,
      expiresIn: "1d"
    });

  }

}

export { AuthenticateUserService }
