import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";
import { userRef, storage } from "./api/firebaseAPI"

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
    async GetUser(): Promise<User[]> {

        const snapshot = await userRef.get()

        let data = snapshot.docs.map((doc: { data: () => any; }) => doc.data());

        return data.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName, user.gender, user.dateOfBirth, user.email, user.imageURL));
    }

    async CreateUser(data: any): Promise<String> {

        var imageURL: any;

        async function uploadTaskPromise() {
            return new Promise(function (resolve, reject) {
                var uploadTask = storage.ref(`images/${data.image.name}`).put(data.image);

                uploadTask.on('state_changed',
                    (snapshot: any) => { },
                    (error: any) => { },
                    () => {
                        storage.ref('images').child(data.image.name).getDownloadURL().then((url: any) => {
                            imageURL = url;
                           resolve(imageURL)
                        })
                    })

            })
        }

        var storageUrl = await uploadTaskPromise()

        let imageURL = storageUrl

        await userRef
            .doc(data.data.id)
            .set({
                id: data.data.id,
                firstName: data.data.firstName,
                middleName: data.data.middleName,
                lastName: data.data.lastName,
                dateOfBirth: data.data.dateOfBirth,
                gender: data.data.gender,
                email: data.data.email,
                imageURL: imageURL
            })
            .catch((err: any) => {
                throw (err)
            }).then(() => {

            });

        return imageURL
    }

    UpdateUser(data: any): [] {
        var imageURL: any;
        console.log(data)

        const uploadTask = storage.ref(`images/${data.image.name}`).put(data.image);

        uploadTask.on('state_changed',
            (snapshot: any) => { },
            (error: any) => { },
            () => {
                storage.ref('images').child(data.image.name).getDownloadURL().then((url: any) => {
                    imageURL = url;
                    console.log(url)
                    userRef
                        .doc(data.id)
                        .set({
                            firstName: data.firstName,
                            middleName: data.middleName,
                            lastName: data.lastName,
                            dateOfBirth: data.dateOfBirth,
                            gender: data.gender,
                            email: data.email,
                            imageURL: imageURL
                        }, { merge: true })
                        .catch((err: any) => {
                            throw (err)
                        })
                        .then(() => {

                        });
                })
            })

        console.log(imageURL)
        console.log(imageURL)
        console.log(imageURL)

        return data.userList

    }

    DeleteUser(data: any): [] {
        userRef
            .doc(data.id)
            .delete()
            .catch((err: any) => {
                throw (err)
            })
        return data.userList
    }

    SelectUser(data: User): User {

        var gender = data.gender, firstName = data.firstName, middleName = data.middleName, lastName = data.lastName, dateOfBirth = data.dateOfBirth, email = data.email, id = data.id, imageURL = data.imageURL;
        return new User(id, firstName, middleName, lastName, gender, dateOfBirth, email, imageURL);
    }
}