const fs = require('fs');
const path = require('path');
const readline = require('readline');

fs.writeFile('./02-write-file/text.txt', '', (err) => {
    if (err) console.log('Error');
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

let writeableStream = fs.createWriteStream('./02-write-file/text.txt');
rec();
function rec(){
    rl.question('Введите ваш текст\n', (answer) => {
        if(answer == 'exit'){
            rl.close();
        }else{
        writeableStream.write(answer+'\n');
        rec();
    }
      });
}