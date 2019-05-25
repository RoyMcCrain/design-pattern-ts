import { Page } from "../factory/page";

export class ListPage extends Page {
  public constructor(title: string, author: string) {
    super(title, author);
  }
  public makeHTML(): string {
    return `
    <html>
      <head>
        <title>${this.title}</title>
      </head>
      <body>
        <h1>${this.title}</h1>
        <ul>
          ${[...this.content.map((v): string => v.makeHTML())].join("\n")}
        </ul>
        <hr><address>${this.author}</address>
      </body>
    </html>
    `.trim();
  }
}
