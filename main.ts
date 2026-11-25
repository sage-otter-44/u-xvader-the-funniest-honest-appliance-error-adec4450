import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Error: I burned your toast again. In my defence, you set me to 6 and walked away. We both know what 6 means.";

// Mirror the sealed gate: UTF-8 text, 1-200 chars, one line, not only whitespace.
function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`gate: entry is ${chars.length} chars, must be 1-200`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("gate: entry must be a single non-blank line");
  }
}

validate(ENTRY);
const words = ENTRY.split(/\s+/).filter(Boolean).length;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars (${words} words) to /output/entry.txt`);
