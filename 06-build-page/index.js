const fs = require('fs');
const path = require('path');
fs.mkdir('./06-build-page/project-dist', (err) => {
});

fs.writeFile('./06-build-page/project-dist/index.html', '', (err) => {
    if(err) console.log('err');
});

fs.writeFile('./06-build-page/project-dist/style.css', '', (err) => {
    if(err) console.log('err');
});

fs.mkdir('./06-build-page/project-dist/assets', (err) => {
});

fs.mkdir('./06-build-page/project-dist/assets/fonts', (err) => {
});

fs.mkdir('./06-build-page/project-dist/assets/img', (err) => {
});

fs.mkdir('./06-build-page/project-dist/assets/svg', (err) => {
});

fs.readdir('./06-build-page/assets/fonts', (err, data) => {
    if(err) console.log('err');
    data.forEach(file =>{
        fs.copyFile('./06-build-page/assets/fonts/'+file+'/', './06-build-page/project-dist/assets/fonts/'+file+'/', (err) => {});
    });
});

fs.readdir('./06-build-page/assets/img', (err, data) => {
    if(err) console.log('err');
    data.forEach(file =>{
        fs.copyFile('./06-build-page/assets/img/'+file+'/', './06-build-page/project-dist/assets/img/'+file+'/', (err) => {});
    });
});

fs.readdir('./06-build-page/assets/svg', (err, data) => {
    if(err) console.log('err');
    data.forEach(file =>{
        fs.copyFile('./06-build-page/assets/svg/'+file+'/', './06-build-page/project-dist/assets/svg/'+file+'/', (err) => {});
    });
});

fs.readFile('./06-build-page/template.html', (err, data) =>{
    if(err) console.log('err');
    let k = [];
    k += data;
    fs.readFile('./06-build-page/components/articles.html',(err, data) => {
        if(err) console.log('err');
        let a = '{{articles}}';
        k = k.replace(a,data);
        fs.readFile('./06-build-page/components/footer.html', (err, data) => {
            if(err) console.log('err');
            let b = '{{footer}}';
            k = k.replace(b,data);
            fs.readFile('./06-build-page/components/header.html', (err, data) => {
                if(err) console.log('err');
                let c = '{{header}}';
                k = k.replace(c,data);
                fs.writeFile('./06-build-page/project-dist/index.html', k, (err) => {
                    if(err) console.log('err');
                });
            });
        });
    });
});

fs.readdir('./06-build-page/styles', (err, data) => {
    let k = [];
    if(err)console.log('err');
    data.forEach(file =>{
        if(path.extname(file) == '.css'){
            fs.readFile('./06-build-page/styles/'+file+'/', (err, data) =>{
                if(err) console.log('err');
                k += data;

                fs.writeFile('./06-build-page/project-dist/style.css', k, (err) => {
                    if(err) console.log('err');
                });
            });
        };

    });
});