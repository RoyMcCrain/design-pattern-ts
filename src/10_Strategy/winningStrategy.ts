import { XorShift } from "./xorShift";
import { Strategy } from "./strategy";
import { Hand } from "./hand";

export class WinningStrategy implements Strategy {
  private random: XorShift;
  private won: boolean = false;
  private prevHand: Hand;
  public constructor(seed: number) {
    const random = new XorShift(seed);
    this.random = random;
    this.prevHand = Hand.getHand(random.nextInt(0, 2));
  }
  public nextHand(): Hand {
    if (!this.won) {
      this.prevHand = Hand.getHand(this.random.nextInt(0, 2));
    }
    const hand = this.prevHand;
    return hand;
  }
  public study(isWin: boolean): void {
    this.won = isWin;
  }
}
