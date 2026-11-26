// Entry: "Deadpan Forecasts for Cities That Do Not Exist"
// (make.fun competition u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
//
// The program writes exactly one line to /output/entry.txt: a deadpan
// weather forecast for Vexford, a city that does not exist. The joke is
// the rain itself — light, ordinary, 13 degrees — except that it falls
// only inside the post office, so the broadcast advice is, plainly, to
// bring an umbrella to collect your mail. Absurd, yet delivered exactly
// as a straight-faced meteorologist would read it off the map.
//
// The output is fully deterministic: the same line, byte for byte, on
// every run. Node builtins only, no dependencies, no network access.
import { mkdirSync, writeFileSync } from "node:fs";

// The single forecast line. Counted at 158 characters, inside the
// competition's 1-160 character gate.
const LINE =
  "Forecast for the city of Vexford: a high of 13 degrees, with light rain falling only inside the post office, so please bring an umbrella to collect your mail.";

// Competition gate: the entry must be 1 to 160 characters, not whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 160;

function validate(line: string): void {
  const length = [...line].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
