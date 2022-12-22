import { checkFileExists, getDirName } from "../utils.js";
import path from "node:path";
import fs from "node:fs/promises";

const rename = async () => {
    const __files = path.join(getDirName(import.meta.url), 'files');
    const isWrongFileExists = await checkFileExists(path.join(__files, 'wrongFilename.txt'));
    const isProperFileExists = await checkFileExists(path.join(__files, 'properFilename.md'));
    const isRenamePossible = isWrongFileExists && !isProperFileExists;

    if (isRenamePossible) {
      fs.rename(path.join(__files, 'wrongFilename.txt'), path.join(__files, 'properFilename.md'));
    } else {
        throw new Error ('FS operation failed');
    }
};

await rename();