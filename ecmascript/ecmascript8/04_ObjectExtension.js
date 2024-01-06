/**
 * 对象方法扩展
 */

let pornstar = {
    name: '白石茉莉奈',
    age: '38',
    tag: ['巨臀', '风骚', '人妻', '巨乳']
}

const star_key = Object.keys(pornstar);
console.log(star_key);
const start_values = Object.values(pornstar);
console.log(start_values);
const map = new Map(Object.entries(pornstar));
console.log(map);
//对象属性的描述对象
console.log(Object.getOwnPropertyDescriptor(pornstar))
