const fs = require('fs');
const path = require('path');
fs.readdir('./03-files-in-folder/secret-folder/', (err, data) => {
    console.log(data);
    data.forEach(file =>{
        console.log(file+' - '+path.extname(file)+' - '+fs.statSync('./03-files-in-folder/secret-folder/'+file).size+'B');
        console.log()
    });
});