import adder from '../js/index';

describe('Adder', () => {
  test('adds two numbers', () => {
    expect(adder(1, 2)).toEqual(3);
  });
});