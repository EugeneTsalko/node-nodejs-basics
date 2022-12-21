import fs from 'node:fs';
import { getDirName, checkFileExists } from '../utils.js';
import path from 'node:path';

const create = async () => {
    const __dirname = getDirName(import.meta.url);
    const __filename = path.join(__dirname, '/files/fresh.txt');
    const text = 'I am fresh and young';

    const isFileExists = await checkFileExists(__filename);

    if (!isFileExists) {
        fs.writeFile(__filename, text, (err) => {
            if (err) throw err;
        });
    } else {
        throw new Error ('FS operation failed');
    }

};

await create();