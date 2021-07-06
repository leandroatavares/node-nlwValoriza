import { getCustomRepository } from "typeorm"
import { Complimentrepository } from "../repositories/ComplimentsRepository"


class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(Complimentrepository);
    
    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"],
    })

    return compliments;
  }
}

export { ListUserReceiveComplimentsService }