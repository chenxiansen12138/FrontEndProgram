/**
 * ES6 引入rest参数,用于获取函数的实际参数,用来代替arguments
 */

//ES5获取实参的方式
function pornstarOld(){
    console.log(arguments);
}

//rest参数
function pornstarNew(...args){
    console.log(args);
}

pornstarOld('风间由美','小早川怜子','青山葵');
pornstarNew('弥生美月','白石茉莉奈','三上悠亚'); //结果为数组类型