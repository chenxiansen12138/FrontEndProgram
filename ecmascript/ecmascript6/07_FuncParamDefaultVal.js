/**
 * ES6允许给函数参数赋值初始值
 */

//1.形参初始值 具有默认值的参数,一般位置比较靠后

// function pornstar(name1, name2, name3 = '妃光莉') {
//     console.log(name1, name2, name3);
// }

// pornstar('千乃杏美', '夕季千岁');
// pornstar('永野司', '白石茉莉奈', '葵百合香');

//2.与解构赋值相结合
let info = function ({name = '三上悠亚', country = '日本', job = 'AV女优'} = {}) {
    console.log(name);
    console.log(country);
    console.log(job);
}
info();
info({name: '永井玛利亚', country: '日本'});