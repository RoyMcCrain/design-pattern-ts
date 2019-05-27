import { Player } from "./player";
import { WinningStrategy } from "./winningStrategy";
import { ProbStrategy } from "./probStrategy";

export default function main(seed1: number, seed2: number): void {
  const player1 = new Player("Taro", new WinningStrategy(seed1));
  const player2 = new Player("Hana", new ProbStrategy(seed2));
  [...Array(10000)].forEach(
    (): void => {
      debugger;
      const nextHand1 = player1.nextHand();
      const nextHand2 = player2.nextHand();
      if (nextHand1.isStrongerThan(nextHand2)) {
        console.log(`Winner: ${player1}`);
        player1.win();
        player2.lose();
      } else if (nextHand2.isStrongerThan(nextHand1)) {
        console.log(`Winner: ${player2}`);
        player1.lose();
        player2.win();
      } else {
        console.log("Even...");
        player1.even();
        player1.even();
      }
    }
  );
  console.log(`Total Result:\n${player1.toString()}\n${player2.toString()}`);
}

main(314, 15);
