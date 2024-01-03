/**
 * 集合中的Set
 */

let s1 = new Set();
let s2 = new Set(['风间由美','弥生美月','织田真子','田中瞳','弥生美月']);
console.log(s2)

//集合中的个数
console.log(s2.size);
//添加新元素
s2.add('白石茉莉奈');
//删除元素
s2.delete('田中瞳');
//检测
console.log(s2.has('风间由美'));
//清空
// s2.clear();
//遍历
for (const name of s2) {
    console.log(name);
}
