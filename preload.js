const { contextBridge, ipcRenderer } = require('electron')

const array = "ping"

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke(array),
});