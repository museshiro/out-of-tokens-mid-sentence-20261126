import { mkdirSync, writeFileSync } from "node:fs";

// One-line error message: an AI agent out of tokens mid-sentence.
// Written only to /output/entry.txt; no relative writes, so a
// read-only working directory cannot stop the program.
const LINE =
  'ERROR 402: "Yes" costs one token. Your remaining balance is a comma.';

// Fail loudly here if the line ever breaks the gate (1-140 chars,
// non-blank), instead of silently shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
