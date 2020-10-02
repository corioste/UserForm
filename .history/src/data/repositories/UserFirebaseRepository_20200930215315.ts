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
        const snapshot = await dataRef.get()

        let data = snapshot.docs.map((doc: { data: () => any; }) => doc.data());
       
        return data.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName, user.gender, user.dateOfBirth, user.email));
    }

    async CreateUser(data: User): [] {
        dataRef
            .doc(data.id)
            .set({
                id: data.id,
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                email: data.email,
            })
            .then(() => {

            })
            .catch((err: any) => {
                alert(err)
            })
        return data.userList
    }

    async UpdateUser(data: User) {

        dataRef
            .doc(data.id)
            .update({
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                email: data.email
            }, { merge: true })
            .catch((err: any) => {
                alert(err)
            })
    }

    DeleteUser(data: any): [] {
        dataRef
            .doc(data.id)
            .delete()
            .catch((err: any) => {
                alert(err)
            })
        return data.userList
    }

    SelectUser(data: User): User {

        var gender = data.gender, firstName = data.firstName, middleName = data.middleName, lastName = data.lastName, dateOfBirth = data.dateOfBirth, email = data.email, id = data.id;
        return new User(id, firstName, middleName, lastName, gender, dateOfBirth, email);
    }
}