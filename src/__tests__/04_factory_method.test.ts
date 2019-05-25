import main from "../04_Factory_Method/factory_method";
test("consoleに表示される", (): void => {
  const spyLog = jest
    .spyOn(console, "log")
    .mockImplementation((x: any): any => x);
  main();
  expect(spyLog.mock.calls[0][0]).toEqual("結城浩のカードを作ります。");
  expect(spyLog.mock.calls[1][0]).toEqual("とむらのカードを作ります。");
  expect(spyLog.mock.calls[2][0]).toEqual("佐藤花子のカードを作ります。");
  expect(spyLog.mock.calls[3][0]).toEqual("結城浩のカードを使います。");
  expect(spyLog.mock.calls[4][0]).toEqual("とむらのカードを使います。");
  expect(spyLog.mock.calls[5][0]).toEqual("佐藤花子のカードを使います。");
  spyLog.mockReset();
  spyLog.mockRestore();
});
