import { getDirName, checkFileExists } from "../utils.js";
import path from "node:path";
import fs from "node:fs/promises";

const remove = async () => {
    const __filename = path.join(getDirName(import.meta.url), 'files/fileToRemove.txt');
    const isFileExists = await checkFileExists(__filename);

    if( isFileExists) {
        fs.rm(__filename);
    } else {
        throw new Error ('FS operation failed');
    }
};

await remove();