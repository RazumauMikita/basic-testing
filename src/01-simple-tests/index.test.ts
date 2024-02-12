// Uncomment the code below and write your tests
import { simpleCalculator, Action, RawCalculatorInput } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const rawInput: RawCalculatorInput = { a: 5, b: 14, action: Action.Add };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(19);
  });

  test('should subtract two numbers', () => {
    const rawInput: RawCalculatorInput = {
      a: 5,
      b: 14,
      action: Action.Subtract,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(-9);
  });

  test('should multiply two numbers', () => {
    const rawInput: RawCalculatorInput = {
      a: 5,
      b: 14,
      action: Action.Multiply,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(70);
  });

  test('should divide two numbers', () => {
    const rawInput: RawCalculatorInput = { a: 10, b: 2, action: Action.Divide };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const rawInput: RawCalculatorInput = {
      a: 3,
      b: 3,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(27);
  });

  test('should return null for invalid action', () => {
    const rawInput: RawCalculatorInput = {
      a: 10,
      b: 2,
      action: 'invalidAction',
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const rawInput: RawCalculatorInput = {
      a: 'five',
      b: '2',
      action: Action.Add,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(null);
  });
});
