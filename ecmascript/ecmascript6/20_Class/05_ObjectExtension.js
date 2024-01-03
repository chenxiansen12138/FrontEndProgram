/**
 * 对象方法扩展
 */

console.log(Object.is(100,100));
console.log(Object.is(NaN,NaN));

const pornstar1 = {
    name: '风间由美',
    age: 48,
    country: '日本',
    married: true,
    hasSon: false
}

const pornstar2 = {
    name: '田中瞳',
    age: 38,
    country: '日本',
    married: false,
    exit: true
}

let assign = Object.assign(pornstar1,pornstar2);
console.log(assign);
