import { Product } from "../flamework/product";

export class IDCard extends Product {
  private owner: string;
  public constructor(owner: string) {
    super();
    console.log(`${owner}のカードを作ります。`);
    this.owner = owner;
  }
  public use(): void {
    console.log(`${this.owner}のカードを使います。`);
  }
  public getOwner(): string {
    return this.owner;
  }
}
