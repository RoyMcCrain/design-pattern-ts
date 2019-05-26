import { Display } from "./display";
import { DisplayImpl } from "./displayImpl";

export class CountDisplay extends Display {
  public constructor(impl: DisplayImpl) {
    super(impl);
  }
  public multiDisplay(times: number): void {
    this.open();
    [...Array(times)].forEach(
      (): void => {
        this.print();
      }
    );
    this.close();
  }
}
