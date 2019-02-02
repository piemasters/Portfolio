import { Technology } from './technology.model';

export class Project {
  public id: number;
  public title: string;
  public img: string;
  public url: string;
  public overview: string;
  public technologies: Technology[];
  public details: any[];

  constructor(id: number, title: string, img: string, url: string, overview: string, technologies: Technology[], details: any[]) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.url = url;
    this.overview = overview;
    this.technologies = technologies;
    this.details = details;
  }
}
