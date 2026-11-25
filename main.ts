// The 3 AM Excuse: a hardware wallet refuses to sign at 3 AM.
// Writes the single-line excuse (under 200 characters) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 3 AM my keys remember what you bought at this hour last time, so they're staying in bed until sunrise.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
