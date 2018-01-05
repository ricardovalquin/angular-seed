export class Video {

  link: string;
  picture: string;
  name: string;
  uri: string;

  constructor(link: string, name: string, picture: string, uri: string) {
    this.link = link;
    this.name = name;
    this.picture = picture;
    this.uri = uri;
  }
}
