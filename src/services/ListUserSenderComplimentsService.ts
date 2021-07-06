import { getCustomRepository } from "typeorm"
import { Complimentrepository } from "../repositories/ComplimentsRepository"

class ListUserSenderComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(Complimentrepository);
    
    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
      },
      relations: ["userSender", "userReceiver", "tag"],
    })

    return compliments;
  }

}

export { ListUserSenderComplimentsService }