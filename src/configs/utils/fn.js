const path = require('path')
const fs = require('fs')
global.downloadDir = path.join(__dirname, 'tempDownload');

function rmdir(dir) {
    var list = fs.readdirSync(dir);
    for(var i = 0; i < list.length; i++) {
      var filename = path.join(dir, list[i]);
      var stat = fs.statSync(filename);
  
      if(filename == "." || filename == "..") {
      } else if(stat.isDirectory()) {
        rmdir(filename);
      } else {
        fs.unlinkSync(filename);
      }
    }
    fs.rmdirSync(dir);
  }

  function createDir() {
    if (!fs.existsSync(downloadDir)){
        fs.mkdirSync(downloadDir);
    }
  }

  module.exports = {
    rmdir,
    createDir
}