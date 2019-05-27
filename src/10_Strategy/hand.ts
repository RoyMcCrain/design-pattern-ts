export class Hand {
  public static HANDVALUE_GUU: Readonly<0> = 0;
  public static HANDVALUE_CHO: Readonly<1> = 1;
  public static HANDVALUE_PAA: Readonly<2> = 2;

  public static hand: Hand[] = [
    new Hand(Hand.HANDVALUE_GUU),
    new Hand(Hand.HANDVALUE_CHO),
    new Hand(Hand.HANDVALUE_PAA)
  ];
  private static handName: string[] = ["グー", "チョキ", "パー"];
  private handvalue: number;

  private constructor(handvalue: number) {
    this.handvalue = handvalue;
  }

  public static getHand(handvalue: number): Hand {
    return this.hand[handvalue];
  }

  public isStrongerThan(h: Hand): boolean {
    return this.fight(h) === 1;
  }

  public isWeakerThan(h: Hand): boolean {
    return this.fight(h) === -1;
  }

  private fight(h: Hand): -1 | 0 | 1 {
    if (this === h) {
      return 0;
    } else if ((this.handvalue + 1) % 3 === h.handvalue) {
      return 1;
    } else {
      return -1;
    }
  }

  public toString(): string {
    return Hand.handName[this.handvalue];
  }
}
