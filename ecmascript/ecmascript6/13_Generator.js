/**
 * 生成器就是一个特殊的函数,是一个异步函数,纯回调函数;
 * 关键字yield:函数代码的分割符
 */

function * pornstars(){
    console.log('1---------------1');
    yield '佐山爱';
    console.log('2---------------2');
    yield '冲田杏梨';
    console.log('3---------------3');
    yield '织田真子';
    console.log('4---------------4');
}

let iterator = pornstars();
let one = iterator.next();
let two = iterator.next();
let three = iterator.next();
let four = iterator.next();

console.log(one);
console.log(two);
console.log(three);
console.log(four);


for (const pornstar of pornstars()) {
    console.log(pornstar);
}