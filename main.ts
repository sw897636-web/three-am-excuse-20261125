// The 3 AM Excuse: a hardware wallet refuses to sign at 3 AM.
// Writes the single-line excuse (under 200 characters) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Absolutely not: nothing good has ever been signed at 3 AM, not leases, not texts to your ex, and certainly not whatever $FROGLORD is, so ask me again after coffee.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
