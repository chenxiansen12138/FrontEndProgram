/**
 * ES6 允许在大括号内,直接写入变量和函数,作为对象的属性和方法.
 */

let name = '白石茉莉奈';
let video = function (){
    console.log(`${name}演了很多好看的AV`)
}
const pornstar = {
    name,
    video,
    experience(){
        console.log('她拥有超过三百人的性经验');
    }
}
video();
let {experience} = pornstar;
experience();