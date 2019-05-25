import main from "../05_Singleton/singleton";
test("consoleに表示される", (): void => {
  const spyLog = jest
    .spyOn(console, "log")
    .mockImplementation((x: any): any => x);
  main();
  expect(spyLog.mock.calls[0][0]).toEqual("Start.");
  expect(spyLog.mock.calls[1][0]).toEqual("obj1とobj2は同じインスタンスです。");
  expect(spyLog.mock.calls[2][0]).toEqual("End.");
  spyLog.mockReset();
  spyLog.mockRestore();
});
