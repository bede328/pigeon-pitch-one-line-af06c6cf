import { mkdirSync, writeFileSync } from "node:fs";

// Pigeon Pitch, One Line (157 chars, 1 sentence): a city pigeon pitches
// investors — a seed round, literally, with the whole flock already onboard.
// The em dash is one character; the line has no trailing newline.
const pitch =
  "I'm raising a seed round — literally. My startup turns every park bench into a boardroom and every crumb into a customer; the whole flock is already onboard.";

if (pitch.length < 1 || pitch.length > 200) {
  throw new Error(`pitch length ${pitch.length} out of range 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`wrote ${pitch.length} chars to /output/entry.txt`);
