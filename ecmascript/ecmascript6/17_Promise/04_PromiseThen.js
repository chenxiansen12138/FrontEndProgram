/**
 * 当Promise调用then方法时,then方法返回的结果是Promise对象,对象状态由回调函数的执行结果决定
 *     1.如果回调方法返回的结果是非Promise类型的属性,则then方法返回的状态是成功,返回值为回调成功的值,如果没有返回值,则为undefined
 *     2.如果回调方法返回的结果是Promise类型的属性,则then方法返回的状态与回调方法返回的保持一致
 *     3.如果结果为抛出错误,则then返回的也是错误
 */

const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('夕季千岁');
    },1000);
});
// 返回值为非Promise类型的属性
// let result = p.then((data)=>{
//     console.log(data);
//     return '风间由美';
// },err=>{
//     console.error(err);
// });

//返回值为Promise类型的属性
// let result = p.then((data)=>{
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//         reject('白石茉莉奈');
//     });
// },err=>{
//     console.error(err);
// });

//抛出异常
let result = p.then((data)=>{
 throw new Error('永井玛利亚')
},err=>{
    console.error(err);
});
console.log(result);

//链式调用
result.then().then().then();