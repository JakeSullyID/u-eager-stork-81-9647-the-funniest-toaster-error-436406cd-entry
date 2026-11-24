import fs from 'node:fs';
import path from 'node:path';

// This line succeeds by weaponizing standard system error codes against misplaced human vulnerability.
const line = 'ERROR 409: Emotional attachment detected. Heating suspended.';

if (!line || line.length > 120) {
  console.error('Error: Line is empty or exceeds 120 characters.');
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), line, 'utf-8');
