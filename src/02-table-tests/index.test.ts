import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },

  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 20, b: 2, action: Action.Multiply, expected: 40 },
  { a: 3, b: 10, action: Action.Multiply, expected: 30 },

  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 200, b: 10, action: Action.Divide, expected: 20 },
  { a: 55, b: 11, action: Action.Divide, expected: 5 },

  { a: 2, b: 8, action: Action.Exponentiate, expected: 256 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 31, b: 1, action: Action.Exponentiate, expected: 31 },

  { a: 2, b: 8, action: 'InvalidAction', expected: null },

  { a: 'two', b: '8', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('Table tests', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
});
