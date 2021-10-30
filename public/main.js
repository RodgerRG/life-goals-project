const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 800,
      webPreferences: {
        nodeIntegration: true
      }
    });

    //TODO: Add in a variable that we can use from the .env for what the URL is
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools({mode: 'detach' });
  }

  app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});