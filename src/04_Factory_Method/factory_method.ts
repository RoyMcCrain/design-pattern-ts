import { IDCardFactory } from "./idcard/idCardFactory";

export default function main(): void {
  const factory = new IDCardFactory();
  const card1 = factory.create("結城浩");
  const card2 = factory.create("とむら");
  const card3 = factory.create("佐藤花子");
  card1.use();
  card2.use();
  card3.use();
}

main();
