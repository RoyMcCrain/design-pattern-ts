import main from "../03_Template_Method/template_method";
test("consoleに表示される", (): void => {
  const spyLog = jest
    .spyOn(console, "log")
    .mockImplementation((x: any): any => x);
  main();
  expect(spyLog.mock.calls[0][0]).toEqual("<<");
  expect(spyLog.mock.calls[1][0]).toEqual("H");
  expect(spyLog.mock.calls[2][0]).toEqual("H");
  expect(spyLog.mock.calls[3][0]).toEqual("H");
  expect(spyLog.mock.calls[4][0]).toEqual("H");
  expect(spyLog.mock.calls[5][0]).toEqual("H");
  expect(spyLog.mock.calls[6][0]).toEqual(">>");
  expect(spyLog.mock.calls[7][0]).toEqual("+-------------+");
  expect(spyLog.mock.calls[8][0]).toEqual("|Hello, World.|");
  expect(spyLog.mock.calls[9][0]).toEqual("|Hello, World.|");
  expect(spyLog.mock.calls[10][0]).toEqual("|Hello, World.|");
  expect(spyLog.mock.calls[11][0]).toEqual("|Hello, World.|");
  expect(spyLog.mock.calls[12][0]).toEqual("|Hello, World.|");
  expect(spyLog.mock.calls[13][0]).toEqual("+-------------+");
  expect(spyLog.mock.calls[14][0]).toEqual("+------+");
  expect(spyLog.mock.calls[15][0]).toEqual("|こんにちは。|");
  expect(spyLog.mock.calls[16][0]).toEqual("|こんにちは。|");
  expect(spyLog.mock.calls[17][0]).toEqual("|こんにちは。|");
  expect(spyLog.mock.calls[18][0]).toEqual("|こんにちは。|");
  expect(spyLog.mock.calls[19][0]).toEqual("|こんにちは。|");
  expect(spyLog.mock.calls[20][0]).toEqual("+------+");
  spyLog.mockReset();
  spyLog.mockRestore();
});
