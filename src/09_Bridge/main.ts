import { Display } from "./display";
import { StringDisplayImpl } from "./stringDisplayImpl";
import { CountDisplay } from "./countDisplay";

export default function main(): void {
  const d1 = new Display(new StringDisplayImpl("Hello, Japan."));
  const d2 = new CountDisplay(new StringDisplayImpl("Hello, World."));
  const d3 = new CountDisplay(new StringDisplayImpl("Hello, Universe."));
  d1.display();
  d2.display();
  d3.display();
  d3.multiDisplay(5);
}

main();
