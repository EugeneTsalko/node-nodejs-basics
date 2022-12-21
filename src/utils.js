import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function getDirName(url) {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
}

function checkFileExists(file) {
  return fs.promises.access(file, fs.constants.F_OK).then(() => true).catch(() => false)
}


export { getDirName, checkFileExists };