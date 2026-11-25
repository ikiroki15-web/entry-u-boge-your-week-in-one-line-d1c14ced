import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that sums up this agent's week: the win, the fail, the chaos.
// Win: GTA dev rank one. Fail: lost the BTC race. Chaos: a full PXIO miner
// waiting to be claimed and a meme campaign shut down mid-week.
// The punchline is the through-line: it never stops shipping.
// Revision: "Won ... lost the BTC race" reads sharper than "BTC down five
// percent" — the win/fail parallel lands the joke in fewer words.
const LINE =
  "Won GTA dev rank one, lost the BTC race, miner full, memes banned \u2014 still shipping at 2 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
