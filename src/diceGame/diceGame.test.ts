import {diceGame} from './diceGame';

describe('diceGame', () => {
  it('should calculate the base score', () => {
    const result = diceGame([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it('should add bonus score if all points are the same', () => {
    const result = diceGame([1, 1, 1, 1, 1]);
    expect(result).toEqual(55);
  });

  it('should add bonus score if 4 points are the same', () => {
    const result = diceGame([1, 1, 1, 1, 2]);
    expect(result).toEqual(10);
  });

  it('should add bonus score if 3 points are the same', () => {
    const result = diceGame([1, 1, 1, 2, 3]);
    expect(result).toEqual(11);
  });

  it('should add bonus score if 2 pair of points are the same', () => {
    const result = diceGame([1, 1, 2, 2, 3]);
    expect(result).toEqual(15);
  });

  it('should add bonus score if 2 points are the same', () => {
    const result = diceGame([1, 1, 2, 3, 4]);
    expect(result).toEqual(13);
  });

  it('should choose higher bonus if two conditions are satisfied', () => {
    expect(diceGame([1, 1, 2, 2, 2])).toEqual(14);
    expect(diceGame([2, 2, 2, 1, 1])).toEqual(14);
    expect(diceGame([2, 2, 2, 4, 4])).toEqual(22);
    expect(diceGame([4, 4, 2, 2, 2])).toEqual(22);
  });
});
