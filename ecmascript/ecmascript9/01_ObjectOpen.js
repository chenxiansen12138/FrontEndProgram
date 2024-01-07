/**
 * Rest参数与spread扩展运算符在ES6中已经引入,不过ES6中只针对数组,
 * 在ES9中为对象提供了像数组一样的rest参数和扩展运算符
 */

function pornstar({bai,feng,...porn}){
    console.log(bai);
    console.log(feng);
    console.log(porn);
}

pornstar({
    bai: '白石茉莉奈',
    feng: '风间由美',
    yong: '永井玛利亚',
    tian: '田中瞳'
})

const xi = {
    xi: '夕季千岁',
}
const xiang = {
    xiang: '翔田千里'
}

const jin = {
    jin: '金谷宇乃'
}

const pornArr = {...xi,...jin,...xiang};
console.log(pornArr);