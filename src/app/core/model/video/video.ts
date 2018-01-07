export class Video {
  id: string;
  link: string;
  picture: string;
  name: string;

  constructor(link: string, name: string, picture: string, uri: string) {
    this.id = uri;
    this.link = link;
    this.name = name;
    this.picture = picture;
  }
}
