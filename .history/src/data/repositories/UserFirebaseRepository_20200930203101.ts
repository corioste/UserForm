import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";
import { dataRef } from "./api/firebaseAPI"





class UserDTO {

    id: number = 0;
    firstName: string = "";
    middleName: string = "";
    lastName: string = "";
    dateOfBirth: string = "";
    gender: string = ""; 
    email: string = "";

}



export class UserLocalStorageRepositoryImpl implements UsersRepository {
    async GetUser(): Promise<User[]> {

        docRef.get().then(function(doc) {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.
            console.log("Cached document data:", doc.data());
        }).catch(function(error) {
            console.log("Error getting cached document:", error);
        });
    //     console.log(itemArray)
    //     return itemArray.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName,user.gender, user.dateOfBirth, user.email));
    }

    async CreateUser(data: User) {
        dataRef
        .doc(data.id)
        .set({
            id:data.id,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            email: data.email,
        })
        .then(()=>{
            
        })
        .catch((err: any)=>{
            alert(err)
        })


    }

    async UpdateUser(data: User) {

        dataRef
        .doc(data.id)
        .set({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            email: data.email
        }, { merge: true })
            .then(() => {
                
            })
            .catch((err: any) => {
                alert(err)
            })
    }

    async DeleteUser(data: User) {

        await dataRef
        .doc(data.id).delete()
        .then(() => {
           console.log("DELETED")
        }).catch((err: any) => {
            alert(err)
        })


    }

    SelectUser(data: User): User {
        
        var gender = data.gender,firstName=data.firstName, middleName=data.middleName, lastName=data.lastName, dateOfBirth = data.dateOfBirth, email = data.email, id=data.id;
        return new User(id, firstName, middleName, lastName,gender, dateOfBirth, email);
    }
}