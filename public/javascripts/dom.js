const electron = require('electron')
const app = electron.app
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const shell = require('electron').shell
const os = require('os')


const modalWindow = document.getElementById('modal')

modalWindow.addEventListener('click', function(event){
  console.log('Hello World')
})
modalWindow.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../views/modal.hbs')

  let win = new BrowserWindow({
    width: 400, height: 320, frame: true, transparent: false
  })

  win.on('close', function () {
    win = null
  })

  win.center()

  win.loadURL(modalPath)

  win.show()
})

const files = document.getElementById('files')

files.addEventListener('click', function(event){
  shell.showItemInFolder(os.homedir())
})
