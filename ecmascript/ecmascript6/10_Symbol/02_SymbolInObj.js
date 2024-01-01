/**
 * Symbol可以用来向对象中添加方法
 */

let pornstar = {
    name: 'AV女优',
    // oldStar() {
    //     console.log('风间由美');
    // },
    // newStar() {
    //     console.log('白石茉莉奈')
    // }
}

let methods = {
    oldStar: Symbol(),
    newStar: Symbol(),
}

pornstar[methods.newStar] = function () {
    console.log('北条麻妃');
}

pornstar[methods.oldStar] = function () {
    console.log('弥生美月');
}

pornstar[methods.newStar]();
pornstar[methods.oldStar]();


let AVSymbol =  Symbol('AV')
let foreignStar = {
    name: '欧美女优',
    [AVSymbol]: function (){
        console.log('my favourite star is Angela White');
    }
}
foreignStar[AVSymbol]();