import { DisplayImpl } from "./displayImpl";

export class StringDisplayImpl extends DisplayImpl {
  private stringA: string;
  private width: number;

  public constructor(stringA: string) {
    super();
    this.stringA = stringA;
    this.width = stringA.length;
  }
  public rawOpen(): void {
    this.printLine();
  }
  public rawPrint(): void {
    console.log(`|${this.stringA}|`);
  }
  public rawClose(): void {
    this.printLine();
  }
  private printLine(): void {
    let printString = "+";
    [...Array(this.width)].forEach(
      (): void => {
        printString = printString + "-";
      }
    );
    printString = printString + "+";
    console.log(printString);
  }
}
