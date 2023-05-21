const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  readDirectory: async (path) => ipcRenderer.invoke('read-directory', path),
  readFile: async (path) => ipcRenderer.invoke('read-file', path),
  writeFile: async (path, data) => ipcRenderer.invoke('write-file', path, data),
});

console.log('preload.js loaded');
