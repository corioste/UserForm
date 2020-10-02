import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetUser(): any;
    CreateUser(data: User): void;
    UpdateUser(data: any): void;
    DeleteUser(data: User): void;
    SelectUser(data: User): User;
}

export class UserServiceImpl implements UserService {
  userRepo: UsersRepository;

  constructor(userRepo: UsersRepository) {
    this.userRepo = userRepo;
  }
  GetUser(): any {
    var userList = this.userRepo.GetUser()

    console.log(this.userRepo.GetUser())

    userList.map((user: any) => {
      var birthday = +new Date(user.dateOfBirth);
      var age =  ~~((Date.now() - birthday) / (31557600000));
      user.fullName = user.lastName + ", " + user.firstName + " " + user.middleName;
      user.age = age;
    });
    
    console.log(userList)

    return userList;
  }
  CreateUser(data:User) {
    this.userRepo.CreateUser(data);  
  }

  DeleteUser(data:User) {
    this.userRepo.DeleteUser(data);
  }

  UpdateUser(data:any){
    this.userRepo.UpdateUser(data)
  }
  SelectUser(data: any): User{
    return this.userRepo.SelectUser(data)
  }
}
