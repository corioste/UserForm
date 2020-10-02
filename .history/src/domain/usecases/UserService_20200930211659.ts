import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
    GetUser(): Promise<User[]>;
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
  CreateUser(data:User) {
    this.userRepo.CreateUser(data);  
  }

  DeleteUser(data:any): User[] {
    this.userRepo.DeleteUser(data);

    console.log(intData)
    
    var res = data.userList
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].id)
      if (data.id === res[i].id) {
          res.splice(i, 1);
          break;
      }
    }
    console.log(res)
    return res;
  }

  UpdateUser(data:any){
    this.userRepo.UpdateUser(data)
  }
  SelectUser(data: any): User{
    return this.userRepo.SelectUser(data)
  }
}
