import { getCustomRepository } from "typeorm"
import { UserRrepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface UserRequest {
  name:string;
  email:string;
  admin?:boolean;
  password:string;
}

class CreateUserService {

  async execute({name, email, admin, password}: UserRequest) {
    const userRepository = getCustomRepository(UserRrepository);

    if(!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadExixts = await userRepository.findOne({email});
    if(userAlreadExixts) {
      throw new Error("User alread exists");
    }

    const passwordHash = await hash(password, 8);
    
    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });

    await userRepository.save(user);
  }

}

export { CreateUserService }
