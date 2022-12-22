import { getDirName, checkFileExists } from "../utils.js";
import path from "node:path";
import fs from "node:fs/promises";

const read = async () => {
    const __filename = path.join(getDirName(import.meta.url), 'files/fileToRead.txt');
    const isFileExists = await checkFileExists(__filename);

    if (isFileExists) {
        const content = await fs.readFile(__filename, { encoding: 'utf8' });
        console.log(content);
    } else throw new Error ('FS operation failed');
};

await read();