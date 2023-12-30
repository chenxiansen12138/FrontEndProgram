/**
 * ES6引入了一种新的原始数据类型,表示独一无二的值.它是第七种数据类型,是一种类似于字符串的数据类型
 *      1)Symbol的值时唯一的,用来解决命名冲突的问题
 *      2)Symbol的值不能与其他数据进行运算
 *      3)Symbol定义的对象属性不能使用for...in循环,但是可以使用Reflect.ownKeys来获取对象的所有键名
 */

//Symbol的创建
let pornstar = Symbol('白石茉莉奈');
let pornstar2 = Symbol('白石茉莉奈');
console.log(pornstar === pornstar2);

let pornstar3 = Symbol.for('永井玛利亚');
let pornstar4 = Symbol.for('永井玛利亚');
console.log(pornstar3 === pornstar4);