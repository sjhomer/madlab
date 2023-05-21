import { ipcRenderer } from 'electron';

export const rootDir = './'

export const api ={
  readDirectory: async () => ipcRenderer.invoke('read-directory'),
  readFile: async (file) => ipcRenderer.invoke('read-file', file),
  writeFile: async (file, data) => ipcRenderer.invoke('write-file', file, data),
};
