type interval = number[];
type pair = interval[];

export function part1(lines: string[]): number {
  return parsePairs(lines)
    .map(([int1, int2]) => {
      if (int1[0] > int2[0] || (int1[0] == int2[0] && int1[1] < int2[1])) {
        [int1, int2] = [int2, int1];
      }
      return int1[1] >= int2[1];
    })
    .reduce((count, interlaps) => count + +interlaps, 0);
}

export function part2(lines: string[]): number {
  return parsePairs(lines)
    .map(([int1, int2]) => {
      if (int1[0] > int2[0]) {
        [int1, int2] = [int2, int1];
      }
      return int1[1] >= int2[0];
    })
    .reduce((count, interlaps) => count + +interlaps, 0);
}

function parsePairs(lines: string[]): pair[] {
  return lines.map((line) =>
    line.split(",").map((pair) => pair.split("-").map((n) => parseInt(n)))
  );
}
