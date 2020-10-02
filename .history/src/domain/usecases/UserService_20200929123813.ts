import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetUser(): User[];
    CreateUser(data: User): User[];
    UpdateUser(data: any): User[];
    DeleteUser(data: User): User[];
}

export class UserServiceImpl implements UserService {
  userRepo: UsersRepository;

  constructor(userRepo: UsersRepository) {
    this.userRepo = userRepo;
  }
  GetUser(): User[] {
    console.log(his.userRepo.GetUser())
    return this.userRepo.GetUser();
  }
  CreateUser(data:User): User[] {
    return this.userRepo.CreateUser(data);  
  }

  DeleteUser(data:User): User[]{
    return this.userRepo.DeleteUser(data);
  }

  UpdateUser(data:any): User[]{
    return this.userRepo.UpdateUser(data)
  }
}
