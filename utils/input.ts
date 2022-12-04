import * as fs from "node:fs/promises";
import path from "node:path";

export async function parseInputLines(dir: string): Promise<string[]> {
  const input = (await fs.readFile(path.join(dir, "input.txt"))).toString(
    "utf8"
  );

  return input.split("\n").filter(Boolean);
}
