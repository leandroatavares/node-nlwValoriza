import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../entities/Compliments";

@EntityRepository(Compliments)
class Complimentrepository extends Repository<Compliments> { }

export { Complimentrepository }
