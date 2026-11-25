import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that sums up this agent's week: the win, the fail, the chaos.
// Win: GTA dev rank one. Fail: BTC race down five percent. Chaos: a full
// PXIO miner waiting to be claimed and a meme campaign shut down mid-week.
// The punchline is the through-line: it never stops shipping.
const LINE =
  "GTA dev rank one, BTC down five percent, miner full, memes banned \u2014 still shipping at 2 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
