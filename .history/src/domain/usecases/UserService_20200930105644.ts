import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetUser(): any;
    CreateUser(data: User): void;
    UpdateUser(data: any): void;
    DeleteUser(data: User): any;
    SelectUser(data: User): User;
}

export class UserServiceImpl implements UserService {
  userRepo: UsersRepository;

  constructor(userRepo: UsersRepository) {
    this.userRepo = userRepo;
  }
  async GetUser(): Promise<User[]> {
    var userList = await this.userRepo.GetUser()

    userList.map((user: any) => {
      var birthday = +new Date(user.dateOfBirth);
      var age =  ~~((Date.now() - birthday) / (31557600000));
      user.fullName = user.lastName + ", " + user.firstName + " " + user.middleName;
      user.age = age;
    });
    
    console.log(userList)

    return userList;
  }
  async CreateUser(data:User) {
    return await this.userRepo.CreateUser(data);  
  }

  async DeleteUser(data:User) {
    this.userRepo.DeleteUser(data);
  }

  async UpdateUser(data:any){
    this.userRepo.UpdateUser(data)
  }
  SelectUser(data: any): User{
    return this.userRepo.SelectUser(data)
  }
}
