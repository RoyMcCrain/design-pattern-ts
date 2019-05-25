import { Page } from "../factory/page";

export class TablePage extends Page {
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
          <table width="80%" border="3">
            ${[
              ...this.content.map((v): string => `<tr>${v.makeHTML()}</tr>`)
            ].join("\n")}
          </table>
          <hr><address>${this.author}</address>
        </body>
      </html>
    `.trim();
  }
}
