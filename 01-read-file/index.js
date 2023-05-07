const fs = require('fs');

let text = fs.readFile('01-read-file/text.txt', 'utf-8',(err, data) => {
    console.log(data);
});