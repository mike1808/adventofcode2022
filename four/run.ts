import { parseInputLines } from "../utils/input";
import { part1, part2 } from "./pairs";

async function main() {
  const input = await parseInputLines(__dirname);
  console.log(part1(input));
  console.log(part2(input));
}

main();
