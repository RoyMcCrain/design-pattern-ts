export class Banner {
  private stringA: string;
  public constructor(stringA: string) {
    this.stringA = stringA;
  }
  public showWithParen(): void {
    console.log(`(${this.stringA})`);
  }
  public showWithAster(): void {
    console.log(`*${this.stringA}*`);
  }
}

interface Print {
  printWeak: () => void;
  printStrong: () => void;
}

class PrintBanner extends Banner implements Print {
  public constructor(stringB: string) {
    super(stringB);
  }
  public printWeak(): void {
    this.showWithParen();
  }
  public printStrong(): void {
    this.showWithAster();
  }
}

export default function main(): void {
  const p = new PrintBanner("こんにちは、クラス");
  p.printWeak();
  p.printStrong();
}

main();
