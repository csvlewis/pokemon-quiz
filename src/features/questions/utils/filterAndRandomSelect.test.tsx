import { filterAndRandomSelect } from "./filterAndRandomSelect";

describe("filterAndRandomSelect", () => {
  it("should return a random selection from the array that does not contain the given values", () => {
    const dataArray = ["a", "b", "c", "d", "e"];
    const selectedData = ["a", "b"];
    const amount = 2;

    const result = filterAndRandomSelect({
      dataArray,
      selectedData,
      amount,
    });

    expect(result.length).toBe(2);
    expect(result).not.toContain("a");
    expect(result).not.toContain("b");
    expect(dataArray).toContain(result[0]);
    expect(dataArray).toContain(result[1]);
  });
});
