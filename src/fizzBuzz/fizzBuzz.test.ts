import {fizzBuzz, fizzBuzzFilter} from './fizzBuzz';

describe('fizzBuzz', () => {
  it('should return 1 if receive 1', () => {
    const expected = 1;
    const result = fizzBuzz(1);
    expect(result).toEqual(expected);
  });

  it('should return Fizz if receive 3', () => {
    const expected = 'Fizz';
    const result = fizzBuzz(3);
    expect(result).toEqual(expected);
  });

  it('should return Fizz if receive a multiple of 3', () => {
    const expected = 'Fizz';
    const result = fizzBuzz(33);
    expect(result).toEqual(expected);
  });

  it('should return Buzz if receive 5', () => {
    const expected = 'Buzz';
    const result = fizzBuzz(5);
    expect(result).toEqual(expected);
  });

  it('should return Buzz if receive a multiple of 5', () => {
    const expected = 'Buzz';
    const result = fizzBuzz(55);
    expect(result).toEqual(expected);
  });

  it('should return FizzBuzz if receive a multiple of 3 & 5', () => {
    const expected = 'FizzBuzz';
    const result = fizzBuzz(15);
    expect(result).toEqual(expected);
  });

  it('should return Fizz if receive a number contains 3', () => {
    const expected = 'Fizz';
    const result = fizzBuzz(23);
    expect(result).toEqual(expected);
  });

  it('should return Buzz if receive a number contains 5', () => {
    const expected = 'Buzz';
    const result = fizzBuzz(59);
    expect(result).toEqual(expected);
  });

  it('should return Fizz if receive a number contains 3', () => {
    const expected = 'Fizz';
    const result = fizzBuzz(23);
    expect(result).toEqual(expected);
  });

  it('should return FizzBuzz if receive a number contains both 3 and 5', () => {
    const expected = 'FizzBuzz';
    const result = fizzBuzz(53);
    expect(result).toEqual(expected);
  });

  it('should return FizzBuzz if receive a number contains 5 and is multiple of 3', () => {
    const expected = 'FizzBuzz';
    const result = fizzBuzz(57);
    expect(result).toEqual(expected);
  });

  it('should return FizzBuzz if receive a number contains 3 and is multiple of 5', () => {
    const expected = 'FizzBuzz';
    const result = fizzBuzz(230);
    expect(result).toEqual(expected);
  });
});
