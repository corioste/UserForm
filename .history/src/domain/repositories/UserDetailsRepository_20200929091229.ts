import { UserDetails } from "../entities/UserDetails";

export interface UserDetailsRepository {
  GetUserDetails(): User[];
  CreateTodo(data: Todo): Todo[];
  UpdateTodo(data: any): Todo[];
  DeleteTodo(data: Todo): Todo[];
}
