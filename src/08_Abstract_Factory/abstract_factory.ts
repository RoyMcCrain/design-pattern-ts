import { TableFactory } from "./factory/factory";

export default function main(args?: string): void {
  if (!args) {
    throw new Error("error");
  }
  const factory = TableFactory.getFactory(args);
  const asahi = factory.createLink("朝日新聞", "https://www.asahi.com");
  const yomiuri = factory.createLink("読売新聞", "https://www.yomiuri.co.jp");
  const usYahoo = factory.createLink("Yahoo!", "https://www.yahoo.com");
  const jpYahoo = factory.createLink("Yahoo!Japan", "https://www.yahoo.co.jp");
  const excite = factory.createLink("Excite", "https://www.excite.com");
  const google = factory.createLink("Google", "https://www.google.com");

  const trayNews = factory.createTray("新聞");
  trayNews.add(asahi);
  trayNews.add(yomiuri);

  const trayYahoo = factory.createTray("Yahoo!");
  trayYahoo.add(usYahoo);
  trayYahoo.add(jpYahoo);

  const traySerach = factory.createTray("サーチエンジン");
  traySerach.add(trayYahoo);
  traySerach.add(excite);
  traySerach.add(google);

  const page = factory.createPage("LinkPage", "結城浩");
  page.add(trayNews);
  page.add(traySerach);
  page.output();
}

main("TableFactory");
