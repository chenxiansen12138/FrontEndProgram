/**
 * 当函数之前加了async,此时函数返回值如果不是一个Promise对象,则会被当成Promise对象,如果抛出一场则返回一个失败的promise对象
 * 如果返回值是Promise对象,函数返回值与返回的Promise对象保持一致
 */

async function pornstar(){
    return '白石茉莉奈';
}
let bai = pornstar();
console.log(bai);

// async function pornstar1(){
//     throw new Error('永井玛利亚');
// }
// let yong = pornstar1();
// console.log(yong);

async function pornstar2(){
    return new Promise((resolve, reject)=>{
        resolve('田中瞳')
    })
}
let tian = pornstar2();
tian.then((value)=>{
    console.log(value)
})

