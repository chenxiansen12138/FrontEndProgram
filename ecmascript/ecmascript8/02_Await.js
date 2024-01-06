/**
 * await必须在async函数中,await返回的是成功的Promise对象,如果失败的话需要try-catch捕获
 */


let promise = new Promise((resolve, reject) => {
    resolve('金谷宇乃');
})

async function pornstar() {
    let result = await promise;
    console.log(result)
}

pornstar();


let promise1 = new Promise((resolve, reject) => {
    reject('叶爱');
})

async function pornstar1() {
    try {
        let result = await promise1;
        console.log(result);
    } catch (e) {
        console.log(e);
    }

}

pornstar1();