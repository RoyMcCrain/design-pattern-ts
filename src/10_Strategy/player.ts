import { Strategy } from "./strategy";
import { Hand } from "./hand";

export class Player {
  private playerName: string;
  private strategy: Strategy;
  private wincount: number = 0;
  private losecount: number = 0;
  private gamecount: number = 0;
  public constructor(name: string, strategy: Strategy) {
    this.playerName = name;
    this.strategy = strategy;
  }
  public nextHand(): Hand {
    return this.strategy.nextHand();
  }
  public win(): void {
    this.strategy.study(true);
    this.wincount++;
    this.gamecount++;
  }
  public lose(): void {
    this.strategy.study(false);
    this.losecount++;
    this.gamecount++;
  }
  public even(): void {
    this.gamecount++;
  }
  public toString(): string {
    return `[${this.playerName}:${this.gamecount}games,${this.wincount}win,${
      this.losecount
    }lose]`;
  }
}
