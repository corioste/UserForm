import { UserDetails } from "../entities/UserDetails";

export interface UserDetailsRepository {
  GetUserDetails(): UserDetails[];
  CreateUserDetails(data: UserDetails): UserDetails[];
  UpdateUserDetails(data: any): UserDetails[];
  DeleteUser(data: UserDetails): UserDetails[];
}
