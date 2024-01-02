const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('02_PromiseReadFile.txt', (err, data) => {
        if (err) {
            throw err;
            reject(err);
        }else {
            resolve(data);
        }
    })
})
p.then((value)=>{
    console.log(value.toString());
},(err)=>{
    console.log(err);
})