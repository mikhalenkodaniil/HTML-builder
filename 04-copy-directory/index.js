const fs = require('fs');
const path = require('path');

  fs.mkdir('./04-copy-directory/files-copy', (err) => {
  });
fs.readdir('./04-copy-directory/files/', (err, data) => {
    data.forEach(file =>{
        fs.copyFile('./04-copy-directory/files/'+file+'/', './04-copy-directory/files-copy/'+file+'/', (err) => {});
    });
});