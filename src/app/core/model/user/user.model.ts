export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;

  constructor(id: number, username: string, firstName: string, lastName: string, password: string) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
