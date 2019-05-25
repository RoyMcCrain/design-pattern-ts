import { Tray } from "../factory/tray";

export class TableTray extends Tray {
  public constructor(caption: string) {
    super(caption);
  }
  public makeHTML(): string {
    return `
    <td>
      <table width="100%" border="1">
        <tr>
          <td bgcolor="#cccccc" align="center" colspan="${this.tray.length}">
            <b>${this.caption}</b>
          </td>
        </tr>
        <tr>
          ${[...this.tray.map((v): string => v.makeHTML())].join("\n")}
        </tr>
      </table>
    </td>
    `.trim();
  }
}
