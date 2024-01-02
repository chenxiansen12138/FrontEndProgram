/**
 * Promise基本语法
 */
const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // let pornstar = '田中瞳';
        // resolve(pornstar);
        let pornstar = '三上悠亚';
        reject(pornstar);
    },1000)
});
p.then((value)=>{
    console.log(value);
},(err)=>{
    console.error(err);
})