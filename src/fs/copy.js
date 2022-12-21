import { getDirName, checkFolderExists, checkFolderEmpty } from "../utils.js";
import path from "node:path";
import fs from "node:fs/promises";

const copy = async () => {
    const __dirname = getDirName(import.meta.url);
    const __files = path.join(__dirname, 'files');
    const __filesCopy = path.join(__dirname, 'files_copy');

    const isFolderExists = await checkFolderExists(__files);
    const isFolderCopyExists = await checkFolderExists(__filesCopy);
    const isCopyPossible = isFolderExists && !isFolderCopyExists;

    if (isCopyPossible) {
        fs.mkdir(__filesCopy);
        const files = await fs.readdir(__files);

        for (const file of files) {
            fs.copyFile(path.join(__files, file), path.join(__filesCopy, file));
        }
    } else {
        throw new Error('FS operation failed');
    }
};

await copy();
