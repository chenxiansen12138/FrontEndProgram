// 声明一个变量a,同时指定它的类型为number
// @ts-ignore

let a: number;
// a的类型设置为了number,在以后的使用中a只能为数字
a = 10;
// a = 'hello';
let b: string;
b = '法外狂徒'

// 声明完变量直接赋值
// let c: boolean = true;
// 如果变量的声明和赋值同时进行,TS可以自动对变量进行类型检测
let c = false;
// c = 123
// JS中的函数时不考虑参数的类型和个数的
// function sum(a, b) {
//     return a + b;
// }
//TS可以对函数的参数指定类型,也能指定返回值的类型
function sum(a: number, b: number): number {
    return a + b;
}

// sum(123, "456");

// 使用字面量进行类型声明,值无法再更改,可以使用 | 来连接多个类型
let num: 10;
// num = 11;

let toge: number | string;
toge = 10;
toge = 'hello';

// any表示的是任意类型,一个变量设置为any类型后相当于对该变量关闭了TS的类型检测,并且可以赋值给任意变量
// 使用TS时,不建议使用any类型
let d: any;
d = 'a';
d = 123;
// 声明变量如果不指定类型,则TS解析器会自动判断变量的类型为any(隐式的any)
let e;
e = 10;
e = 'hello';

// unkown 表示未知类型的值,实际上是一个类型安全的any,unknow类型的变量,不能直接赋值给其他变量
let f: unknown;
f = 'zhangsna';
f = false;
//如果unkown想赋值有两种方式 1:类型判断 2:类型断言
//1.类型判断
if (typeof f == "string") {
    f = toge;
}
//2.类型断言
f = toge as string;
f = <string>toge;

// void用来表示空,以函数为例,就表示没有返回值的函数
function fn(): void {
    return;
}

// 根据返回值的类型进行判断(返回ture或者string)
function fn2(): boolean | string {
    return true;
}

// never表示永远不会返回结果,用来表示死循环或者抛出异常
// 抛出异常
function fn3(): never {
    throw new Error('报错了');
}

//死循环
function fn4(): never {
    while (true) {

    }
}

// object表示一个js对象
let g: object;
g = {};
g = function () {
};
// {}用来指定对象中可以包含哪些属性
// 语法: {属性名:属性值,属性名:属性值}
// 在属性名后加上?,表示属性是可选的

let h: { name: string, age?: number };
h = {name: 'hangman', age: 18};
h = {name: 'hangman'};

// [propName: string]:any 表示任意类型的属性
let i: { name: string, [propName: string]: any };
i = {name: 'hangman', age: 18};

// 设置函数结构的类型声明
// 语法: (形参:类型,形参:类型)=>返回值的类型
let j: (a: number, b: number) => number;
j = function n(num1: number, num2: number): number {
    return num1 + num2;
};

// 数组的类型声明
// 类型[]
let k: string[];
k = ['a', 'b', 'c'];
// Array<类型>
let l: Array<number>;
l = [1, 2, 3];

// 元组,固定长度的数组
let m: [string, number];
m = ['hello', 123];
// m = [123, 'hello'];//错误

// enum 枚举
enum Enum {
    A,
    B,
    C   //默认从0开始
}

let person: { name: string, gender: Enum };
person = {name: 'hang', gender: Enum.A};

let a1 = Enum.A;
console.log(a1); //0

// & 表示同时
let n: { name: string } & { age: number };
n = {name: 'hang', age: 18};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let o: myType;
o = 3;
//o = 6; //错误