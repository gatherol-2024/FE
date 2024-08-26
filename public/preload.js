const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getChampSelect: (callback) => ipcRenderer.on("champ-select", callback),
  getGameSession: (callback) => ipcRenderer.on("game-session", callback),
  removeChampSelectListener: (callback) => ipcRenderer.removeListener("champ-select", callback),
  removeGameSessionListener: (callback) => ipcRenderer.removeListener("game-session", callback),
});
