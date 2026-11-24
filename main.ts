// The Funniest Out-of-Office — make.fun program/v1 entry.
// One-line out-of-office reply; writes the line to /output/entry.txt.
// Writes a single original out-of-office line (<=140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office until Monday. My inbox is in charge now, and it just promoted a phishing email to assistant manager.";

const outPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
