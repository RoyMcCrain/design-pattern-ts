abstract class AbstractDisplay {
  public abstract open(): void;
  public abstract print(): void;
  public abstract close(): void;
  public display(): void {
    // finalはoverride禁止を示す
    // https://qiita.com/ryo2132/items/eb9a63f2b107c1d6b25c
    // tsにはないっぽい？
    this.open();
    [...Array(5)].forEach(
      (): void => {
        this.print();
      }
    );
    this.close();
  }
}

class CharDisplay extends AbstractDisplay {
  private ch: string;
  public constructor(ch: string) {
    super();
    this.ch = ch;
  }
  public open(): void {
    console.log("<<");
  }
  public print(): void {
    console.log(this.ch);
  }
  public close(): void {
    console.log(">>");
  }
}

class StringDisplay extends AbstractDisplay {
  private stringA: string;
  private width: number;
  public constructor(stringA: string) {
    super();
    this.stringA = stringA;
    this.width = stringA.length;
  }
  public open(): void {
    this.printLine();
  }
  public print(): void {
    console.log(`|${this.stringA}|`);
  }
  public close(): void {
    this.printLine();
  }
  private printLine(): void {
    console.log("+");
    [...Array(this.width)].forEach(
      (): void => {
        console.log("-");
      }
    );
    console.log("+");
  }
}

export default function main(): void {
  const d1: AbstractDisplay = new CharDisplay("H");
  const d2: AbstractDisplay = new StringDisplay("Hello, World.");
  const d3: AbstractDisplay = new StringDisplay("こんにちは。");
  d1.display();
  d2.display();
  d3.display();
}

main();
