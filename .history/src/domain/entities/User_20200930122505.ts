export class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: String;
    email: string;
  
    constructor(
        id: number, 
        firstName: string, 
        middleName:string,
        lastName: string,
        gender: String,
        dateOfBirth: string,
        email: string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.email = email;
    }
  }
  