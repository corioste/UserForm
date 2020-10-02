import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetTodo(): User[];
}

export class UserServiceImpl implements UserService {
  userRepo: UsersRepository;

  constructor(userRepo: UsersRepository) {
    this.userRepo = userRepo;
  }
  
  GetUser(): User[] {
    return this.userRepo.GetUser();
  }
  CreateUser(data:User): User[] {
    return this.userRepo.CreateUser(data);  
  }

  DeleteUser(data:User): User[]{
    return this.todoRepo.DeleteTodo(data);
  }

  UpdateTodo(data:any): Todo[]{
    return this.todoRepo.UpdateTodo(data)
  }
}
