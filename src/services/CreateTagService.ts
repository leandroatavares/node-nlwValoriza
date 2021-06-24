import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class CreateTagService {

  async execute(name: string) {
    const repository = getCustomRepository(TagsRepository);

    if(!name) {
      throw new Error('incorrect name.');
    }

    const tagAlreadExists = await repository.findOne({name});
    if(tagAlreadExists) {
      throw new Error('Tag alread exist.');
    }

    const tag = repository.create({ name });
    await repository.save(tag);

    return tag;
  }
}

export { CreateTagService }
