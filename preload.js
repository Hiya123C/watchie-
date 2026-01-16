const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    showContextMenu: () => ipcRenderer.send('show-context-menu'),
    toggleMoveMode: () => ipcRenderer.send('toggle-move-mode'),
    onMoveMode: (callback) => ipcRenderer.on('set-move-mode', (_, value) => callback(value))
});