const fs = require('fs');
const process = require('process');
const axios = require('axios');

function read(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.error(`Unable to read at ${path} Error: ${err}`);
            process.exit(1);
        } else{
            console.log(data);
        }
    })
}























let path;
let out;
if(process.argv[2] === '--out'){
    out= process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}

if(path.slice(0,4) === 'http'){
    webCat(path, out);
} else {
    read(path, out);
}