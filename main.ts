// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
//
// The entry is exactly one word: the single word a grandma would text
// about AI. This program writes that word to /output/entry.txt.
//
// The word: "roomba"
// Why: ask Grandma about AI and she does not picture a neural network —
// she pictures the little round robot her grandkids bought her, the one
// that bumps into the skirting board and eats the rug fringe. She would
// text "roomba" and mean all of artificial intelligence. Warm, a little
// baffled, funny in a single word, and tied to a real machine.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "roomba";
const OUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The entry must be exactly one word: fail loudly rather than ever
// writing two words, a blank, or a trailing newline.
if (!WORD || /\s/.test(WORD)) {
  throw new Error(`Entry must be exactly one word, got ${JSON.stringify(WORD)}`);
}

// No trailing newline: the file must hold exactly the one word, so the
// gate sees 6 characters, not 7.
mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");
