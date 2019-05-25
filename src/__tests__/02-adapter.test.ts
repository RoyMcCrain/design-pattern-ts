import mainClass from "../02_Adapter/adapter_class";
import mainInstance from "../02_Adapter/adapter_instance";
test("consoleに(こんにちは、クラス)と*こんにちは、クラス*が表示される", (): void => {
  const spyLog = jest
    .spyOn(console, "log")
    .mockImplementation((x: any): any => x);
  mainClass();
  expect(spyLog.mock.calls[0][0]).toEqual("(こんにちは、クラス)");
  expect(spyLog.mock.calls[1][0]).toEqual("*こんにちは、クラス*");
  spyLog.mockReset();
  spyLog.mockRestore();
});
test("consoleに(こんにちは、インスタンス)と*こんにちは、インスタンス*が表示される", (): void => {
  const spyLog = jest
    .spyOn(console, "log")
    .mockImplementation((x: any): any => x);
  mainInstance();
  expect(spyLog.mock.calls[0][0]).toEqual("(こんにちは、インスタンス)");
  expect(spyLog.mock.calls[1][0]).toEqual("*こんにちは、インスタンス*");
  spyLog.mockReset();
  spyLog.mockRestore();
});
