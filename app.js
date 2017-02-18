const electron = require('electron')
const { app, BrowserWindow, globalShorcut } = electron

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700
  })

  mainWindow.setTitle('PelisApp')
  mainWindow.loadURL('http://pelispedia.tv')

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
})
