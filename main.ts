import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text: one line a smart fridge texts its owner at 3am.
// Voice: a machine awake all night, keeping count, with an opinion and
// no shame. Beats stacked with one concrete number (the 4th visit);
// the turn is a physical act (dimming its own light); it ends on the
// owner sneaking away in the dark, not on a moral. Revised: direct
// address ("That's your 4th visit"), present-tense act ("I dimmed"),
// and a shorter, punchier ending.
const LINE: string =
  "3am. That's your 4th visit tonight and the leftovers are still there. I dimmed my light — go ahead, pretend you never came.";

// The gate: /output/entry.txt must be 1-140 characters of UTF-8 text.
if (LINE.length === 0 || LINE.length > 140) {
  throw new Error(
    `entry line is ${LINE.length} characters; the gate allows 1-140`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
