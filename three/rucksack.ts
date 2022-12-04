import * as fs from "node:fs/promises";
import path from "node:path";

async function main(part2 = process.argv[2] === "2") {
  const input = (await fs.readFile(path.join(__dirname, "input.txt"))).toString(
    "utf8"
  );

  const lines: string[] = input.split("\n").filter(Boolean);

  const answer = (
    part2
      ? lines.reduce((lines, line, index) => {
          const i = Math.floor(index / 3);
          if (!lines[i]) lines[i] = [];
          lines[i].push(line.split(""));
          return lines;
        }, [] as string[][][])
      : lines.map((line) => {
          const chars = line.split("");
          return [
            chars.slice(0, chars.length / 2),
            chars.slice(chars.length / 2),
          ];
        })
  )
    .map((parts) => {
      const items = new Array(52).fill(0);

      parts.forEach((part, index) =>
        part.forEach((ch) => (items[charToPriority(ch)] |= 1 << index))
      );

      const mask = (1 << parts.length) - 1;
      const index = items.findIndex((item) => item === mask);
      if (index === -1) {
        throw new Error(`unexpected no char found`);
      }

      return index + 1;
    })
    .reduce((sum, priority) => sum + priority);

  console.log(answer);
}

const charToPriority = (char: string): number => {
  const code = char.charCodeAt(0);

  let priority = code - "a".charCodeAt(0);

  if (priority < 0) {
    priority = code - "A".charCodeAt(0) + 26;
  }

  return priority;
};

main();
