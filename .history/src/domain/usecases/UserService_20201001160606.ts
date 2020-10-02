import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
  GetUser(): Promise<User[]>;
  CreateUser(data: User): Promise<[]>;
  UpdateUser(data: any): void;
  DeleteUser(data: User): User[];
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
      var age = ~~((Date.now() - birthday) / (31557600000));
      user.fullName = user.lastName + ", " + user.firstName + " " + user.middleName;
      user.age = age;
    });
    console.log(userList)
    return userList;
  }
  async CreateUser(data: any): Promise<[]> {
    var imageURL = await this.userRepo.CreateUser(data);
    console.log(imageURL)
    var newUser = data.data
    var birthday = +new Date(newUser.dateOfBirth);
    var age = ~~((Date.now() - birthday) / (31557600000));
    newUser.fullName = newUser.lastName + ", " + newUser.firstName + " " + newUser.middleName;
    newUser.age = age;
    var userList = data.userList.push(newUser)
    console.log(userList)
    return []
  }

  DeleteUser(data: any): User[] {
    this.userRepo.DeleteUser(data);

    var res = data.userList
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].id)
      if (data.id === res[i].id) {
        res.splice(i, 1);
        break;
      }
    }

    return res;
  }

  UpdateUser(data: any) {
    this.userRepo.UpdateUser(data);
    var res = data.userList;
    for (let i = 0; i < res.length; i++) {
      if (data.id === res[i].id) {
        var birthday = +new Date(data.dateOfBirth);
        var age = ~~((Date.now() - birthday) / (31557600000));
        res[i].firstName = data.firstName
        res[i].fullName = data.lastName + ", " + data.firstName + " " + data.middleName;
        res[i].middleName = data.middleName
        res[i].lastName = data.lastName
        res[i].dateOfBirth = data.dateOfBirth
        res[i].email = data.email
        res[i].age = age
        break;
      }
    }
    console.log(res)
    return res;

  }
  SelectUser(data: any): User {
    return this.userRepo.SelectUser(data)
  }
}
