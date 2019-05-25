import { Factory } from "../flamework/factory";
import { IDCard } from "./idcard";

export class IDCardFactory extends Factory {
  private owners: string[] = [];
  protected createProduct(owner: string): IDCard {
    return new IDCard(owner);
  }
  protected registerProduct(idcard: IDCard): void {
    this.owners.push(idcard.getOwner());
  }
  public getOwners(): string[] {
    return this.owners;
  }
}
