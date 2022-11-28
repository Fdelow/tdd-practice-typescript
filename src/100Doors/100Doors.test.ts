import {door} from './100Doors';

describe('100 doors', () => {
  it('should throw error if number of doors is less than or equals to 0', () => {
    expect(() => door(-1)).toThrow('must be more than 0');
    expect(() => door(0)).toThrow('must be more than 0');
  });

  it('should return right status if there is only 1 door', () => {
    expect(door(1)).toBe('#');
  });

  it('should return right status if there are 2 doors', () => {
    expect(door(2)).toBe('#@');
  });

  it('should return right status if there are 10 doors', () => {
    expect(door(10)).toBe('#@@#@@@@#@');
  });

  it('should return right status if there are 100 doors', () => {
    expect(door(100).slice(0, 10)).toBe('#@@#@@@@#@');
    expect(door(100).slice(-10)).toBe('@@@@@@@@@#');
  });
});
