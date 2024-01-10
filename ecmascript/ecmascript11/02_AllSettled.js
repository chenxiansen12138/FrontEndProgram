let p1 = new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve('白石茉莉奈');
        reject('永井玛利亚');
    },1000);
});

let p2 = new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve('风间由美');
    },1000);
});

let result1 = Promise.allSettled([p1,p2]);

console.log(result1);

let result2 = Promise.all([p1,p2]);
console.log(result2);
