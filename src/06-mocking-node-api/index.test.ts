// Uncomment the code below and write your tests
import {
  /*readFileAsynchronously, */ doStuffByTimeout,
  doStuffByInterval,
} from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const setTimeOutSpy = jest.spyOn(global, 'setTimeout');

    const callback = jest.fn();
    const time = 10;
    doStuffByTimeout(callback, time);
    expect(setTimeOutSpy).toBeCalledWith(callback, time);
  });

  test('should call callback only after timeout', () => {
    //const setTimeOutSpy = jest.spyOn(global, 'setTimeout');

    const callback = jest.fn();
    const time = 10;
    doStuffByTimeout(callback, time);
  });

  describe('doStuffByInterval', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test('should set interval with provided callback and timeout', () => {
      const callback = jest.fn();
      const setIntervalSpy = jest.spyOn(global, 'setInterval');
      const time = 10;
      doStuffByInterval(callback, time);
      expect(setIntervalSpy).toBeCalledWith(callback, time);
    });
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
