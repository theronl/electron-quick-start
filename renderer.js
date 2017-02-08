// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const path = require('path')
const icon_path = path.join(__dirname, 'assets/drag_drop_icon.ico')

const ipcRenderer = require('electron').ipcRenderer
const log = require('electron-log');
// Type this in to the console window of running app:
// require('devtron').install();

log.transports.console.level = 'debug'
log.transports.file.level = 'debug'
log.debug('Within renderer.js')




// wait for jQuery to load
function initWhenReady(method) {
    if (window.jQuery) {
        $(document).ready(method);
    } else {
        setTimeout(function() { initWhenReady(method) }, 50);
    }
}

// check for jQuery and continue when loaded
initWhenReady(init);

/*
 * Initiates the drag events from outside to electron app
*/
function initDragIn(){
            log.debug('****** initDragIn called ******');
    window.ondragover = function(e) {
 
    $('body').addClass('file-hover');
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // link, copy, move, or none.
    return false;
  };

  window.ondrop = function(e) {
    e.preventDefault();
       // log.debug('****** here is some stuff 2. ******');
      // log.debug(e);
    $('body').removeClass('file-hover');
    for (var i = 0; i < e.dataTransfer.files.length; ++i) {
      console.log(e.dataTransfer.files[i].path);
    }
    return false;
  };

  window.ondragleave = function () {
    $('body').removeClass('file-hover');
    return false;
  };
}

/*
 * Init Drag out (elelctron —> os)
*/
function initDragOut(){
    log.debug('****** initDragOut ******');
 
  document.getElementById('drag').ondragstart = (event) => {
    event.preventDefault()
    ipcRenderer.send('ondragstart', icon_path)
  }
}

/*
 * Initiates drag'n'drop
*/
function init(){
        log.debug('init called');
    console.log('init was called');
 
  initDragIn();
  initDragOut();
}
