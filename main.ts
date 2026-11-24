// Real-Life Patch Notes: The Comedy Changelog
// Writes one patch-note line to /output/entry.txt.
// Deterministic, no network, no randomness: the same bytes every run.
//
// The entry is a terse release note for a bug in human biology: the brain
// replaying an embarrassing memory at 3 a.m. instead of sleeping. The
// version number and the "fixed a bug where" register are what make it
// read like a real changelog entry, and the 2014 timestamp is the wince.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v1.7.3: fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3 a.m. instead of sleeping.";

// The gate requires UTF-8 text of 1 to 160 characters, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
