import { unitConversion } from "./lengthConversion";

describe("UnitConversion", () => {
  it("should return 0 if receive 0", () => {
    const result = unitConversion(0);
    expect(0).toEqual(result);
  });

  it("should return 3 foot if input 1 yard and want foot", () => {
    const result = unitConversion(1, "yard", "foot");
    expect(3).toEqual(result);
  });

  it("should return 12 inch if input 1 foot and want inch", () => {
    const result = unitConversion(1, "foot", "inch");
    expect(12).toEqual(result);
  });

  it("should return 36 inch if input 1 yard and want inch", () => {
    const result = unitConversion(1, "yard", "inch");
    expect(36).toEqual(result);
  });

  it("should return 1 foot if input 12 inch and want foot", () => {
    const result = unitConversion(12, "inch", "foot");
    expect(1).toEqual(result);
  });

  it("should return 1 yard if input 3 foot and want yard", () => {
    const result = unitConversion(3, "foot", "yard");
    expect(1).toEqual(result);
  });

  it("should return 1 yard if input 36 inch and want yard", () => {
    const result = unitConversion(36, "inch", "yard");
    expect(1).toEqual(result);
  });

  it("should throw error if input is less than 0", () => {
    expect(() => unitConversion(-1)).toThrow();
  });

  it("should throw error if input a non-zero number without origin or target unit", () => {
    expect(() => unitConversion(5)).toThrow();
    expect(() => unitConversion(5, "inch")).toThrow();
    expect(() => unitConversion(5, undefined, "foot")).toThrow();
  });
});
