export class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    imageURL: string;
  
    constructor(
        id: number, 
        firstName: string, 
        middleName:string,
        lastName: string,
        gender: string,
        dateOfBirth: string,
        email: string,
        imageURL: string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.email = email;
      this.imageURL = imageURL;
    }
  }
  