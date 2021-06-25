import { getCustomRepository } from "typeorm"
import { UserRrepository } from "../repositories/UserRepository"

interface UserRequest {
  name:string;
  email:string;
  admin?:boolean
}

class CreateUserService {

  async execute({name, email, admin}: UserRequest) {
    const userRepository = getCustomRepository(UserRrepository);

    if(!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadExixts = await userRepository.findOne({email});
    if(userAlreadExixts) {
      throw new Error("User alread exists");
    }

    const user = userRepository.create({
      name, email, admin
    });

    await userRepository.save(user);
  }

}

export { CreateUserService }