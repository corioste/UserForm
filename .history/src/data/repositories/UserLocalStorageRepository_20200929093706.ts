import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";

class UserDTO {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
}


export class UserLocalStorageRepositoryImpl implements UsersRepository {

    GetUser(): User[] {

        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')
        console.log(res)
        return res.map((user: UserDTO) => new User(user.id,user.firstName,user.middleName,user.lastName,user.dateOfBirth,user.email));
    }

    CreateUser(data: User): User[] {

        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')
        res.push(data)
        localStorage.setItem("todos", JSON.stringify(res))
        return res.map((user: UserDTO) => new User(user.id,user.firstName,user.middleName,user.lastName,user.dateOfBirth,user.email));
    }

    UpdateUser(data: User): User[] {
        var intData = parseInt(data.id.toString());
        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')

        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id){
                res[i].task = data.task
                res[i].isDone = data.isDone
              break;
            }
          }
        
        localStorage.setItem("userList", JSON.stringify(res))
        

        return res.map((user: UserDTO) => new User(user.id,user.firstName,user.middleName,user.lastName,user.dateOfBirth,user.email));
    }

    DeleteUser(data: User): User[] {

        var intData = parseInt(data.id.toString())
        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')
        
        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                res.splice(i, 1);
                break;
            }
        }

        localStorage.setItem("userList", JSON.stringify(res))

        return res.map((user: UserDTO) => new User(user.id,user.firstName,user.middleName,user.lastName,user.dateOfBirth,user.email));
    }
}
