// Uncomment the code below and write your tests
import lodash from 'lodash';
import {
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  getBankAccount,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 1000;
  const bankAccount: BankAccount = getBankAccount(initialBalance);

  test('should create account with initial balance', () => {
    expect(bankAccount instanceof BankAccount).toBe(true);
    expect(bankAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => bankAccount.withdraw(initialBalance * 2)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      bankAccount.transfer(initialBalance * 2, getBankAccount(initialBalance)),
    ).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    expect(() =>
      bankAccount.transfer(initialBalance * 2, bankAccount),
    ).toThrow();
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(initialBalance);
    const depositValue = 100;
    bankAccount.deposit(depositValue);
    expect(bankAccount.getBalance()).toBe(initialBalance + depositValue);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(initialBalance);
    const withdrawValue = 100;
    bankAccount.withdraw(withdrawValue);
    expect(bankAccount.getBalance()).toBe(initialBalance - withdrawValue);
  });

  test('should transfer money', () => {
    const bankAccount = getBankAccount(initialBalance);
    const anotherBankAccount = getBankAccount(initialBalance);
    const transferValue = 100;
    bankAccount.transfer(transferValue, anotherBankAccount);
    expect(bankAccount.getBalance()).toBe(initialBalance - transferValue);
    expect(anotherBankAccount.getBalance()).toBe(
      initialBalance + transferValue,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.spyOn(lodash, 'random').mockReturnValue(1);

    const bankAccount = getBankAccount(initialBalance);
    let result;

    result = await bankAccount.fetchBalance();
    expect(typeof result).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(lodash, 'random').mockReturnValue(1);
    const bankAccount = getBankAccount(initialBalance);

    await bankAccount.fetchBalance();
    expect(bankAccount).not.toBe(initialBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(lodash, 'random').mockReturnValue(0);
    const bankAccount = getBankAccount(initialBalance);

    try {
      await bankAccount.fetchBalance();
    } catch {
      expect(bankAccount).rejects.toThrow(SynchronizationFailedError);
    }
  });
});
