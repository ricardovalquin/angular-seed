export class Video {
  id: string;
  createdOn: string;
  description: string;
  link: string;
  metadata: object;
  name: string;
  picture: string;
  plays: number;
  url: string;
  user: object;

  constructor(link: string, name: string, picture: string, uri: string, plays: number, metadata: object, user: object,
              description: string, createdOn: string) {
    this.id = uri;
    this.createdOn = createdOn;
    this.description = description;
    this.link = link;
    this.metadata = metadata;
    this.name = name;
    this.picture = picture;
    this.plays = plays;
    this.user = user;
    this.url = 'https://player.vimeo.com/video/' + this.id;
  }
}
