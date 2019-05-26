import main from "../09_Bridge/main";
test("consoleに表示される", (): void => {
  const spyLog = jest
    .spyOn(console, "log")
    .mockImplementation((x: any): any => x);
  main();
  expect(spyLog.mock.calls[0][0]).toEqual("+-------------+");
  expect(spyLog.mock.calls[1][0]).toEqual("|Hello, Japan.|");
  expect(spyLog.mock.calls[2][0]).toEqual("+-------------+");
  expect(spyLog.mock.calls[3][0]).toEqual("+-------------+");
  expect(spyLog.mock.calls[4][0]).toEqual("|Hello, World.|");
  expect(spyLog.mock.calls[5][0]).toEqual("+-------------+");
  expect(spyLog.mock.calls[6][0]).toEqual("+----------------+");
  expect(spyLog.mock.calls[7][0]).toEqual("|Hello, Universe.|");
  expect(spyLog.mock.calls[8][0]).toEqual("+----------------+");
  expect(spyLog.mock.calls[9][0]).toEqual("+----------------+");
  expect(spyLog.mock.calls[10][0]).toEqual("|Hello, Universe.|");
  expect(spyLog.mock.calls[11][0]).toEqual("|Hello, Universe.|");
  expect(spyLog.mock.calls[12][0]).toEqual("|Hello, Universe.|");
  expect(spyLog.mock.calls[13][0]).toEqual("|Hello, Universe.|");
  expect(spyLog.mock.calls[14][0]).toEqual("|Hello, Universe.|");
  expect(spyLog.mock.calls[15][0]).toEqual("+----------------+");
  spyLog.mockReset();
  spyLog.mockRestore();
});
