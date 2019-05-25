import { Banner } from "./adapter_class";

abstract class Print {
  abstract printWeak(): void;
  abstract printStrong(): void;
}

class PrintBanner extends Print {
  private banner: Banner;
  public constructor(stringB: string) {
    super();
    this.banner = new Banner(stringB);
  }
  public printWeak(): void {
    this.banner.showWithParen();
  }
  public printStrong(): void {
    this.banner.showWithAster();
  }
}

export default function main(): void {
  const p = new PrintBanner("こんにちは、インスタンス");
  p.printWeak();
  p.printStrong();
}

main();
