import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetUser(): any;
    CreateUser(data: User): User[];
    UpdateUser(data: any): User[];
    DeleteUser(data: User): User[];
    SelectUser(data: User): User;
}

export class UserServiceImpl implements UserService {
  userRepo: UsersRepository;

  constructor(userRepo: UsersRepository) {
    this.userRepo = userRepo;
  }
  GetUser(): any {
    var userList = this.userRepo.GetUser()

    userList.map((user: any) => {
      user.fullName = user.lastName + ", " + user.firstName + " " + user.middleName
    });

    userList[0].newValue = "NEW VALUE"
    
    console.log(userList)

    return userList;
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
  SelectUser(data: any): User{
    return this.userRepo.SelectUser(data)
  }
}
