/**
 * 生成器参数传递有两种方式,第一种可以直接在生成器的函数里传递参数,第二种在next()里传递参数,传递的结果作为上一个yield的返回值
 */

function * porn(args){
    console.log(args);
    console.log(yield '永井玛利亚')
    console.log(yield '弥生美月')
    console.log(yield '金谷宇乃')
}

let iterator = porn('AV女优的信息');
let one = iterator.next('1991年出生');      //没有yield对应
let two = iterator.next('1996年出生');      //对应永井玛利亚
let three = iterator.next('1986年出生');    //对应弥生美月
let four = iterator.next('1981年出生');     //对应金谷宇乃

