export class Comment {
  createdOn: string;
  text: string;
  user: object;

  constructor(createdOn: string, text: string, user: object) {
    this.createdOn = createdOn;
    this.text = text;
    this.user = user;
  }
}
