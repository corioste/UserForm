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
    return this.todoRepo.CreateTodo(data);  
  }

  DeleteTodo(data:Todo): Todo[]{
    if (data.isDone) {
      window.alert("CHECK TODO CANNOT BE DELETED!");
      throw ("CHECK TODO CANNOT BE DELETED!");
    }
    
    return this.todoRepo.DeleteTodo(data);
  }
  UpdateTodo(data:any): Todo[]{
    var isDone = data.isDone;
    var task = data.task;
    if(data.btnName === "CHECK") {
      isDone = !isDone;
      task = data.originalTask;
    }
    data = {
      id:data.id,
      task: task,
      isDone: isDone
    }


    return this.todoRepo.UpdateTodo(data)
  }
}
