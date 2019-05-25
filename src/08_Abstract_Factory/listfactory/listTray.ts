import { Tray } from "../factory/tray";

export class ListTray extends Tray {
  public constructor(caption: string) {
    super(caption);
  }
  public makeHTML(): string {
    return `
    <li>
      ${this.caption}
      <ul>
        ${[...this.tray.map((v): string => v.makeHTML())].join("\n")}
      </ul>
    </li>
    `.trim();
  }
}
