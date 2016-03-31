/*jslint node: true */
/*jslint nomen: true */
'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

//reload for development
require('electron-reload')(__dirname);


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed. OSX specific
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// This method will be called after Electron has loaded.
app.on('ready', function () {
  // Create the browser window.
    mainWindow = new BrowserWindow({width: 1200, height: 800});

  // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
    mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});