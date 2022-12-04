import { part1, part2 } from "./pairs";

describe("part1", () => {
  test("input", () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split("\n");

    const ans = part1(input);

    expect(ans).toBe(2);
  });

  test("non interlapping", () => {
    expect(part1(['1-5,6-8'])).toBe(0);
    expect(part1(['1-5,5-8'])).toBe(0);
    expect(part1(['1-5,3-8'])).toBe(0);
    expect(part1(['1-5,2-8'])).toBe(0);
    expect(part1(['1-5,2-5'])).toBe(1);
    expect(part1(['1-5,2-4'])).toBe(1);

    expect(part1(['6-8,1-5'])).toBe(0);
    expect(part1(['5-8,1-5'])).toBe(0);
    expect(part1(['3-8,1-5'])).toBe(0);
    expect(part1(['2-8,1-5'])).toBe(0);
    expect(part1(['2-5,1-5'])).toBe(1);
    expect(part1(['2-4,1-5'])).toBe(1);
  });

  test("interlapping", () => {
    expect(part1(['2-2,2-3'])).toBe(1);
    expect(part1(['2-3,2-2'])).toBe(1);
  });
});
describe("part2", () => {

  test("input", () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split("\n");

    expect(part2(input)).toBe(4);
  });

  test("other", () => {
    expect(part2(['1-5,6-8'])).toBe(0);
    expect(part2(['1-5,5-8'])).toBe(1);
    expect(part2(['1-5,3-8'])).toBe(1);
    expect(part2(['1-5,2-8'])).toBe(1);
    expect(part2(['1-5,2-5'])).toBe(1);
    expect(part2(['1-5,2-4'])).toBe(1);

    expect(part2(['6-8,1-5'])).toBe(0);
    expect(part2(['5-8,1-5'])).toBe(1);
    expect(part2(['3-8,1-5'])).toBe(1);
    expect(part2(['2-8,1-5'])).toBe(1);
    expect(part2(['2-5,1-5'])).toBe(1);
    expect(part2(['2-4,1-5'])).toBe(1);
    expect(part2(['2-2,2-3'])).toBe(1);

    expect(part2(['2-3,2-2'])).toBe(1);
  });
});
