const fs = require('fs');
const path = require('path');


fs.writeFile('./05-merge-styles/project-dist/bundle.css', '', (err) => {
    if(err) console.log('err');
})
fs.readdir('./05-merge-styles/styles', (err, data) => {
    let k = [];
    if(err)console.log('err');
    console.log(data);
    data.forEach(file =>{
        if(path.extname(file) == '.css'){
            fs.readFile('./05-merge-styles/styles/'+file+'/', (err, data) =>{
                if(err) console.log('err');
                k += data;

                fs.writeFile('./05-merge-styles/project-dist/bundle.css', k, (err) => {
                    if(err) console.log('err');
                });
            });
        };

    });
});
