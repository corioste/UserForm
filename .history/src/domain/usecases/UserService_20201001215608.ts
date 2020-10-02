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
    
    return userList;
  }
  async CreateUser(data: any): Promise<any> {

    var newData = await this.userRepo.CreateUser(data);

    var newUser = newData.data.data

    var birthday = +new Date(newUser.dateOfBirth);
    
    var age = ~~((Date.now() - birthday) / (31557600000));
    newUser.fullName = newUser.lastName + ", " + newUser.firstName + " " + newUser.middleName;
    newUser.age = age;
    newUser.imageURL = newData.imageURL

    const userList = [...newData.data.userList,  newUser]


    
    return userList
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

  async UpdateUser(data: any): Promise<any> {
    console.log(data.id)
    console.log("GETTING DATA")
    var image = await this.userRepo.UpdateUser(data);
    console.log(image)
    var res = data.userList;
  
    for (let i = 0; i < res.length; i++) {
      console.log(data.id)
      console.log(typeof  res[i].id)
      if (data.id === res[i].id) {
        var birthday = +new Date(data.dateOfBirth);
        var age = ~~((Date.now() - birthday) / (31557600000));
        res[i].id = data.id
        res[i].firstName = data.firstName
        res[i].fullName = data.lastName + ", " + data.firstName + " " + data.middleName;
        res[i].middleName = data.middleName
        res[i].lastName = data.lastName
        res[i].dateOfBirth = data.dateOfBirth
        res[i].email = data.email
        res[i].age = age
        res[i].imageURL = image
        break;
      }
    }
    console.log(res)
    console.log("DONE")
    
    return res;

  }
  SelectUser(data: any): User {

      //This function select user for update 

      var fullname = data.fullname.toString().split(/[\s,]+/);

      let id = data.id;
      let firstName = fullname[1];
      let middleName = fullname[2];
      let lastName = fullname[0];
      let dateOfBirth = data.dateOfBirth;
      let gender = data.gender;
      let email = data.email;
      let imageURL = data.imageURL;


    return new User(id , firstName , middleName, lastName, dateOfBirth , gender, email, imageURL)
  }
}
