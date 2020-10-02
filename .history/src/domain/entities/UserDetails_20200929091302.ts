export class Todo {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
  
    constructor(
        id: number, 
        firstName: string, 
        middleName:string,
        lastName: string,
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
  