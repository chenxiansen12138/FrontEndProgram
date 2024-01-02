const fs = require('fs');

new Promise((resolve, reject) => {
    fs.readFile('05_Bai.txt', (err, data) => {
        resolve(data);
    })
}).then((value)=>{
    return new Promise((resolve, reject) => {
        fs.readFile('05_Feng.txt',(err, data)=>{
            resolve([value,data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('05_Yong.txt',(err, data)=>{
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})