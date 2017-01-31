// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const path = require('path')
const icon_path = path.join(__dirname, 'assets/drag_drop_icon.ico')

var ipcRenderer = require('electron').ipcRenderer



// wait for jQuery to load
function initWhenReady(method) {
    if (window.jQuery) {
        $(document).ready(init);
    } else {
        setTimeout(function() { initWhenReady(method) }, 50);
    }
}

// check for jQuery and continue when loaded
initWhenReady();

/*
 * Initiates the drag events from outside to electron app
*/
function initDragIn(){
  window.ondragover = function(e) {
    $('body').addClass('file-hover');
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    return false;
  };

  window.ondrop = function(e) {
    e.preventDefault();
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
  document.getElementById('drag').ondragstart = (event) => {
    event.preventDefault()
    ipcRenderer.send('ondragstart', icon_path)
  }
}

/*
 * Initiates drag'n'drop
*/
function init(){
  initDragIn();
  initDragOut();
}
