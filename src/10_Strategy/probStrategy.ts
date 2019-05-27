import { Strategy } from "./strategy";
import { Hand } from "./hand";
import { XorShift } from "./xorShift";

export class ProbStrategy implements Strategy {
  private random: XorShift;
  private prevHandValue: number = 0;
  private currentHandValue: number = 0;
  private history: [number, number, number][] = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];
  public constructor(seed: number) {
    this.random = new XorShift(seed);
  }
  public nextHand(): Hand {
    let bet = this.random.nextInt(0, this.getSum(this.currentHandValue));
    let handvalue = 0;
    if (bet < this.history[this.currentHandValue][0]) {
      handvalue = 0;
    } else if (
      bet <
      this.history[this.currentHandValue][0] +
        this.history[this.currentHandValue][1]
    ) {
      handvalue = 1;
    } else {
      handvalue = 2;
    }
    this.prevHandValue = this.currentHandValue;
    this.currentHandValue = handvalue;
    return Hand.getHand(handvalue);
  }
  private getSum(hv: number): number {
    return this.history[hv].reduce(
      (sum: number, v: number): number => sum + v,
      0
    );
  }
  public study(isWin: boolean): void {
    if (isWin) {
      this.history[this.prevHandValue][this.currentHandValue]++;
    } else {
      this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
      this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
    }
  }
}
