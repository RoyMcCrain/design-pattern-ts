import main from "../01_Iterator/iterator";
const spyLog = jest.spyOn(console, "log");
spyLog.mockImplementation((x: any): any => x);
test("consoleの本の名前が4つ表示される", (): void => {
  main();
  expect(spyLog.mock.calls[0][0]).toEqual("デザインパターン入門");
  expect(spyLog.mock.calls[1][0]).toEqual(
    "デザインパターン入門マルチスレッド編"
  );
  expect(spyLog.mock.calls[2][0]).toEqual("プログラマのための数学");
  expect(spyLog.mock.calls[3][0]).toEqual("数学ガール");
  spyLog.mockReset();
  spyLog.mockRestore();
});
