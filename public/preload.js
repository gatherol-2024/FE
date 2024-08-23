const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
  ipcRenderer: ipcRenderer,
  test: () => ipcRenderer.on("test", (e, data) => console.log("test", e, data)),
});
