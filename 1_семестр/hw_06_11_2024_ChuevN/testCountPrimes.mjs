import { execSync } from 'node:child_process';

const result = String(execSync('node countPrimes.mjs 15')).trim().replace('\n', ' ');

console.assert(result === '6', 'НЕУДАЧА!');