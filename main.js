const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require('path');

let win;
let moveMode = false; //this is the death of me

function createWindow() {
  win = new BrowserWindow({
    title: "watchie",
    width: 250,
    height: 250,
    frame: false,
    resizable: false,
    maximizable: false,
    transparent: true,
    hasShadow: false,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile("index.html");
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on('toggle-move-mode', () => {
  moveMode = !moveMode;
  win.webContents.send('set-move-mode', moveMode);
});

ipcMain.on('show-context-menu', () => {
  const menu = Menu.buildFromTemplate ([
    {
      label: 'Move',
      type: 'checkbox',
      checked: moveMode,
      click: () => {
        moveMode = !moveMode ;
        win.webContents.send('set-move-mode', moveMode);
      }
    },
    { type: 'separator'},
    {
      label: 'Visual',
      submenu: [
        { label: 'Background'},
        { label: 'Font'},
        { label: 'Clicker'},
      ]
    },
    { type: 'separator'},
    {
      label: 'Sounds',
      submenu: [
        { label: 'Tap'},
        { label: 'Alarm'},
      ]
    }
  ]);

  menu.popup({ window: win });
});
