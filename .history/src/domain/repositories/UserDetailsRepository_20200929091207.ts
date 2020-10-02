import { Todo } from "../entities/UserDetails";

export interface UserDetailsRepository {
  GetTodo(): Todo[];
  CreateTodo(data: Todo): Todo[];
  UpdateTodo(data: any): Todo[];
  DeleteTodo(data: Todo): Todo[];
}
