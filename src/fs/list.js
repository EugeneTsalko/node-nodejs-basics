import { getDirName, checkFolderExists } from "../utils.js";
import path from "node:path";
import fs from "node:fs/promises";

const list = async () => {
    const __dirname = path.join(getDirName(import.meta.url), 'files');
    const isFilesExists = await checkFolderExists(__dirname);

    if (isFilesExists) {
      const files = await fs.readdir(__dirname);
      
      for (const file of files) {
        console.log(file);
      }
    } else {
        throw new Error ('FS operation failed');
    }
};

await list();