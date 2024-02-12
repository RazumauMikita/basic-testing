// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const testLinkedList = generateLinkedList([1, 2, 3, 4, 5]);
    expect(generateLinkedList([1, 2, 3, 4, 5])).toStrictEqual(testLinkedList);
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList([2, 3, 4, 5, 6])).toMatchSnapshot();
  });
});
