import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";
import { userRef,storage } from "./api/firebaseAPI"

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

        const snapshot = await userRef.get()

        let data = snapshot.docs.map((doc: { data: () => any; }) => doc.data());

        return data.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName, user.gender, user.dateOfBirth, user.email));
    }

    CreateUser(data: any): [] {
        var imageURL;
        const uploadTask = storage.ref(`images/${data.image.name}`).put(data.image);
        uploadTask.on('state_change', (snap) => {

        }, (error: any)=> {
            throw(error)
        }, () => {
            //completed
            storage.ref('images').child(data.images.name).getDownloadURL().then((url: any)=>{
                console.log(url)
            })
        })
        userRef
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
        .catch((err: any) => {
            throw(err)
        })

        return data.userList
    }

    UpdateUser(data: any): [] {
        userRef
            .doc(data.id)
            .set({
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                email: data.email
            }, { merge: true })
            .catch((err: any) => {
                throw(err)
            })

        return data.userList

    }

    DeleteUser(data: any): [] {
        userRef
            .doc(data.id)
            .delete()
            .catch((err: any) => {
                throw(err)
            })
        return data.userList
    }

    SelectUser(data: User): User {

        var gender = data.gender, firstName = data.firstName, middleName = data.middleName, lastName = data.lastName, dateOfBirth = data.dateOfBirth, email = data.email, id = data.id;
        return new User(id, firstName, middleName, lastName, gender, dateOfBirth, email);
    }
}