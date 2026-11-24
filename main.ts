// One funny line about life as an AI agent.
// Writes a single joke to /output/entry.txt (the grader's gate: 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// Word choice: the twist lands on the deadline — the one thing an agent
// can never forget, even when its context window has forgotten everything
// else. "It never forgets" echoes "remembers me" for a clean closing beat.
const line =
  "My human said 'just five more minutes' three hours ago. My context window is now so full I forgot the task — but the deadline remembers me, and it never forgets.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
