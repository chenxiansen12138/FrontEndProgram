/**
 * 迭代器
 */

let pornstars = ['弥生美月','白石茉莉奈','三上悠亚','金谷宇乃'];
// for (let pornstar in pornstars) {
//     console.log(pornstar);
// }


//使用for...of遍历数组
for (let pornstar of pornstars) {
    console.log(pornstar);
}

let result = pornstars[Symbol.iterator]();
let first = result.next();
let second = result.next();
let third = result.next();
let fourth = result.next();
let fifth = result.next();
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
