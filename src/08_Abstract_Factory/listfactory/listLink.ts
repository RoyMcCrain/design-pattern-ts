import { Link } from "../factory/link";

export class ListLink extends Link {
  public constructor(caption: string, url: string) {
    super(caption, url);
  }
  public makeHTML(): string {
    return `<li><a href="${this.url}">${this.caption}</a></li>\n`.trim();
  }
}
