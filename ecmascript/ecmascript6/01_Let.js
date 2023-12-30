//声明变量
let a;
let b, c, d;
let e = 100;
let f = 521, g = 'i love you ', h = [];



//1.变量不能重复声明
// let star = '罗志祥';
// let star = '小猪';

/**
 * 2.作用域
 * 块级作用域 全局作用域 函数作用域 eval
 * 块级作用域：只在括号内有效相当于局部变量
 */
// {
//     let girl = '周扬青';
// }
// console.log(girl);



//3.不存在变量提升
// console.log(song);
// let song = '恋爱达人';



//4.不影响作用域链
{
    let school = '清华大学';
    function fn(){
        console.log(school);
    }
    fn();
}
// 使用 let
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // 每个闭包捕获了正确的 i 值
    }, 1000);
}

// 使用 var
for (var j = 0; j < 5; j++) {
    setTimeout(function() {
        console.log(j); // 所有闭包共享相同的 j 值（闭包捕获的是同一个 j）
    }, 1000);
}
