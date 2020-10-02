import { UserDetails } from "../entities/UserDetails";

export interface UserDetailsRepository {
  GetUserDetails(): UserDetails[];
  CreateTodo(data: UserDetails): UserDetails[];
  UpdateTodo(data: any): UserDetails[];
  DeleteTodo(data: UserDetails): UserDetails[];
}
