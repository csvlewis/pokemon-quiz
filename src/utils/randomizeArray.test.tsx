import { randomizeArray } from "./randomizeArray";

describe("randomizeArray", () => {
  it("should randomized Array", () => {
    const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomizedArray = randomizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(randomizedArray).not.toEqual(initial);
    expect(randomizedArray.length).toBe(initial.length);
    expect(randomizedArray.sort()).toEqual(initial.sort());
  });
});
