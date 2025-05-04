import { generateResourceUrls } from "./generateResourceUrls";

describe("generateResourceUrls", () => {
  it("should return a given number of random resource URLs", () => {
    const number = 5;
    const urls = generateResourceUrls(number);

    expect(urls.length).toBe(number);
    urls.forEach((url) => {
      expect(url).toMatch(/\/api\/v2\/pokemon\/\d+/);
    });
  });
});
