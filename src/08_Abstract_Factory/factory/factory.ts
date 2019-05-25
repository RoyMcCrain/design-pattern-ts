import { Link } from "./link";
import { Tray } from "./tray";
import { Page } from "./page";
import { TableLink } from "../tablefactory/tableLink";
import { TableTray } from "../tablefactory/tableTray";
import { TablePage } from "../tablefactory/tablePage";
import { ListLink } from "../listfactory/listLink";
import { ListTray } from "../listfactory/listTray";
import { ListPage } from "../listfactory/listPage";

export abstract class Factory {
  public static getFactory(classname: string): Factory {
    switch (classname) {
      case "TableFactory":
        return new TableFactory(); // eslint-disable-line @typescript-eslint/no-use-before-define
      case "ListFactory":
        return new ListFactory(); // eslint-disable-line @typescript-eslint/no-use-before-define
      default:
        throw new Error(`クラス名が見つからない: ${classname}`);
    }
  }
  public abstract createLink(caption: string, url: string): Link;
  public abstract createTray(caption: string): Tray;
  public abstract createPage(title: string, author: string): Page;
}

export class TableFactory extends Factory {
  public createLink(caption: string, url: string): Link {
    return new TableLink(caption, url);
  }
  public createTray(caption: string): Tray {
    return new TableTray(caption);
  }
  public createPage(title: string, author: string): Page {
    return new TablePage(title, author);
  }
}

export class ListFactory extends Factory {
  public createLink(caption: string, url: string): Link {
    return new ListLink(caption, url);
  }
  public createTray(caption: string): Tray {
    return new ListTray(caption);
  }
  public createPage(title: string, author: string): Page {
    return new ListPage(title, author);
  }
}
