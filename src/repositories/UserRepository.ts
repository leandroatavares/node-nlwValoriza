import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UserRrepository extends Repository<User>{ }

export { UserRrepository }
