/**
 * ES6允许使用「箭头」(=>)定义函数
 */
//声明一个函数
// let fn = function () {
//     console.log('白石茉莉奈')
// }
// let fn1 = (a, b) => {
//     return a + b;
// }
// //调用函数
// fn()
// let fn2 = fn1(1, 2);
// console.log(fn2);

//1.this是静态的,this始终指向函数声明时所在作用域下的this的值

// let name = '叶爱';
// function getName(){
//     console.log(this.name);
// }
//
// let getName2 = ()=>{
//     console.log(this.name);
// }
// //设置window对象的属性name
//
// const school = {
//     name: '金谷宇乃',
// }
//
// getName(); //叶爱
// getName2();//叶爱
//
//
//
// getName.call(school);   //金谷宇乃
// getName2.call(school);  //叶爱

//2.不能作为构造实例化对象
// let PornStar = (name,age) =>{
//     this.name = name;
//     this.age = age;
// }
// let pornStar = new PornStar('弥生美月','25');
// console.log(pornStar);

//3.不能使用arguments变量
// {
//     function fn0() {
//         console.log(arguments);
//     }
//
//     let fn1 = () => {
//         console.log(arguments);
//     }
//     fn0(4, 5, 6);
//     fn1(1, 2, 3);
// }
//
//
/**
 * 4.箭头函数的缩写
 *      1) 当有且只有一个形参时,可以省略()
 *      2) 当方法体只有一行时,可以省略{},如果有return,必须省略return
 */

let PornStar = name =>{
    console.log(name);
}
PornStar('田中瞳');

let Adult = video => console.log(video);
Adult('MMBS-006')

/**
 * 总结: 箭头函数适合与this无关的回调,定时器,数组的方法回调
 *      箭头函数不适合与this有关的回调,事件回调.对象的方法
 */

