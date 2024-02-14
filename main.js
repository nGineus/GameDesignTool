const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function onReady () {
  win = new BrowserWindow({width: 1400, height: 920})
  win.loadURL(url.format({
    pathname: path.join(
      __dirname,
      'dist/game-design-tool/browser/index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', onReady);
