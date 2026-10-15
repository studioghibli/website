/*
 * Temporary workaround for running the pre-upgrade stack on modern Node.
 *
 * Next 10.0.2 deep-imports `postcss/lib/parser`. The postcss 8.1.7 it bundles
 * exposes that file through the legacy subpath folder mapping `"./": "./"`,
 * which Node supported up to v16 and removed in v17. On Node 17+ the import
 * fails with ERR_PACKAGE_PATH_NOT_EXPORTED, and `next dev` never starts.
 * Rewriting the mapping as one explicit subpath restores the import; it is the
 * only postcss deep import anywhere in Next's dist.
 *
 * Runs on postinstall so a fresh `yarn install` lands in a working state.
 * Delete this file, the `postinstall` script and the `--openssl-legacy-provider`
 * flags in package.json once Next is upgraded. See TASKS.md.
 */
const fs = require('fs');
const path = require('path');

const target = path.join(
  __dirname,
  '..',
  'node_modules',
  'next',
  'node_modules',
  'postcss',
  'package.json'
);

if (!fs.existsSync(target)) {
  // Next no longer bundles its own postcss — nothing to do.
  process.exit(0);
}

const raw = fs.readFileSync(target, 'utf8');

if (raw.includes('"./lib/parser"')) {
  process.exit(0); // Already patched.
}

if (!raw.includes('"./": "./"')) {
  console.warn(
    `[patch-postcss-exports] Unexpected exports map in ${target}; leaving it untouched.`
  );
  process.exit(0);
}

fs.writeFileSync(
  target,
  raw.replace('"./": "./"', '"./lib/parser": "./lib/parser.js"')
);
console.log('[patch-postcss-exports] Exposed postcss/lib/parser for Next 10 on modern Node.');
