const { app, BrowserWindow, ipcMain, webContents } = require("electron");
var lc = require("league-connect");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  const startUrl = process.env.ELECTRON_START_URL;
  win.webContents.openDevTools();

  const getLOLData = async () => {
    console.log("getLOLData");
    const ws = await lc.createWebSocketConnection({
      authenticationOptions: {
        awaitConnection: {
          awaitConnection: true,
          pollInterval: 1000,
        },
      },
    });
    ws.subscribe("/lol-champ-select/v1/session", (data) => {
      win.webContents.send("champ-select", { data: data });
    });
    ws.subscribe("/lol-gameflow/v1/session", (data) => {
      win.webContents.send("game-session", { data: data });
    });
  };
  getLOLData();
  win.loadURL(startUrl);
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
