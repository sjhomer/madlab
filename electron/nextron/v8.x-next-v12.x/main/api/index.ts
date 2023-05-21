import {ipcMain} from 'electron';
import path from 'node:path'
import fs from 'node:fs'

export const rootPath = "./.nxtron"

ipcMain.handle('read-directory', async (event) => {
  return fs.promises.readdir(rootPath).then(async (files) => {
    // Filter out files that don't have the .nxtron extension, and remove the extension from the file names.
    return files.filter((file) => file.endsWith('.nxtron')).map((file) => file.slice(0, -7));
  })
});

ipcMain.handle('read-file', async (event, file) => {
  return fs.promises.readFile(path.join(rootPath, `${file}.nxtron`), 'utf8').then((data) => {
    // Parse the data as JSON, and ensure it respects the schema
    const parsed = JSON.parse(data);

    if(!Array.isArray(parsed)) {
      throw new Error('Invalid data');
    }

    return parsed;
  });
});

ipcMain.handle('write-file', async (event, file, data) => {
  return fs.promises.writeFile(path.join(rootPath, `${file}.nxtron`), data);
});
