import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";

class UserDTO {

    id: number = 0;
    firstName: string = "";
    middleName: string = "";
    lastName: string = "";
    dateOfBirth: string = "";
    gender: string = "";
    email: string = "";
    imageURL: string = "";
}


export class UserLocalStorageRepositoryImpl implements UsersRepository {

    GetUser(): Promise<User[]> {

        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')
        console.log(res)
        return res.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName, user.dateOfBirth, user.gender, user.email,user.imageURL));
    }

    CreateUser(data: User): [] {

        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')
        res.push(data)
        localStorage.setItem("userList", JSON.stringify(res))
       
        return res;
    }

    UpdateUser(data: User): [] {
        var intData = parseInt(data.id.toString());
        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')

        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                res[i].firstName = data.firstName
                res[i].middleName = data.middleName
                res[i].lastName = data.lastName
                res[i].dateOfBirth = data.dateOfBirth
                res[i].email = data.email
                break;
            }
        }

        localStorage.setItem("userList", JSON.stringify(res))

        return res;


       
    }

    DeleteUser(data: User): [] {

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

        return res;

    }

    SelectUser(data: User): User {

        var intData = parseInt(data.id.toString());
        var jsonString = localStorage.getItem("userList");
        var res = JSON.parse(jsonString || '[]');
        var firstName, middleName, lastName, dateOfBirth, email,gender, id,imageURL;
        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                
                firstName = res[i].firstName;
                middleName = res[i].middleName;
                lastName = res[i].lastName;
                dateOfBirth = res[i].dateOfBirth;
                email = res[i].email;
                id =  res[i].id;
                gender = res[id].gender
                break;
            }
        }

        
        return new User(id, firstName, middleName, lastName, dateOfBirth,gender, email);

    }
}
