import fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function getDirName(url) {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
}

async function checkFileExists(path) {
  try {  
    const isPathValid = await fs.access(path, fs.constants.F_OK).then(() => true).catch(() => false);

    if (isPathValid) {
      const stats = await fs.lstat(path);
  
      return stats.isFile();
    }
  
    return false;
  } catch (err) {
    console.log(err);
  }
}

async function checkFolderExists(path) {
  try {
    const isPathValid = await fs.access(path, fs.constants.F_OK).then(() => true).catch(() => false);

    if (isPathValid) {
      const stats = await fs.lstat(path);
  
      return stats.isDirectory();
    }
  
    return false;
  } catch (err) {
    console.log(err);
  }
}

async function checkFolderEmpty(path) {
  try {
    const files = await fs.readdir(path);
    return !files.length;
  } catch (err) {
    console.log(err);
  }
}



export { getDirName, checkFileExists, checkFolderExists, checkFolderEmpty };