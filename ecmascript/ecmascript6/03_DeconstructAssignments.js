/**
 * 解构赋值
 * ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，被称为解构赋值
 */


//1.数组的解构
const Four = ['张三','李四','王五','赵六'];
let [a,b,c,d] = Four;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//2.对象的解构
const Person = {
    name: '白石茉莉奈',
    age: '三十四',
    job: 'AV女优',
    body: function (){
        console.log('屁股很大很骚，业内人称白妈');
    }
}
// let {name, age,job,body} = Person;
// console.log(name);
// console.log(age);
// console.log(job);
// body();

let {body} = Person;
body();