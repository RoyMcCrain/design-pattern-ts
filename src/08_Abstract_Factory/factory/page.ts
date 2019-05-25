import { Item } from "./item";
import fs from "fs";

export abstract class Page {
  protected title: string;
  protected author: string;
  protected content: Item[] = [];
  public constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public add(item: Item): void {
    this.content.push(item);
  }
  public output(): void {
    const filename = `${this.title}.html`;
    try {
      fs.writeFileSync(filename, this.makeHTML());
      console.log(`${filename}を作成しました。`);
    } catch (e) {
      throw Error(e);
    }
  }
  public abstract makeHTML(): string;
}
