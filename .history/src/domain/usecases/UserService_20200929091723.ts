import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetTodo(): Todo[];
}

export class TodoServiceImpl implements TodoService {
  todoRepo: TodoRepository;

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo;
  }
  
  GetTodo(): Todo[] {
    return this.todoRepo.GetTodo();
  }
  CreateTodo(data:Todo): Todo[] {
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
