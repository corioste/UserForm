import { UserDetails } from "../entities/UserDetails";

export interface UserDetailsRepository {
  GetUserDetails(): UserDetails[];
  CreateUserDetails(data: UserDetails): UserDetails[];
  UpdateTodo(data: any): UserDetails[];
  DeleteTodo(data: UserDetails): UserDetails[];
}
