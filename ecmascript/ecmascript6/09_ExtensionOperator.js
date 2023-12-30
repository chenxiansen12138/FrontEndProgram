/**
 * 扩展运算符能将数组转换为逗号分隔的参数序列
 */

// const names = ['永井玛利亚','白石茉莉奈','金谷宇乃'];
//
// function pornstar(){
//     console.log(arguments);
// }
//
// pornstar(names);
// console.log('--------------------------');
// pornstar(...names);//相当于pornstar('永井玛利亚','白石茉莉奈','金谷宇乃');

//数组的合并
const pornstarOld = ['风间由美','小泽玛利亚','白木优子'];
const pornstarNew = ['叶爱','妃光莉','田中宁宁'];
const pornstar = [...pornstarOld,...pornstarNew];
console.log(pornstar);

//数组的拷贝
const pornstarCopy = [...pornstar];
console.log(pornstarCopy);

//将伪数组转化称为真正的数组
const args = arguments;
const arg = [...args];
console.log(arg)
