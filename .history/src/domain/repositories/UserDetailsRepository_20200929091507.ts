import { User } from "../entities/User";

export interface UsersRepository {
  GetUserDetails(): User[];
  CreateUserDetails(data: UserDetails): UserDetails[];
  UpdateUserDetails(data: any): UserDetails[];
  DeleteUser(data: UserDetails): UserDetails[];
}
