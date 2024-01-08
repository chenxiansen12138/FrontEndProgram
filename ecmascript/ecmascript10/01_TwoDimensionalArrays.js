/**
 * 二维数组
 */

//二维数组转换为对象
const pornstar = Object.fromEntries(
    [
        ['name', '白石茉莉奈'],
        ['age', '36岁']
    ]
)
console.log(pornstar);

//Map
const map = new Map();
map.set('name', '风间由美');
const res = Object.fromEntries(map);
console.log(res);

//Object.entries ES8
const arr = Object.entries({
    name: '永井玛利亚'
})
console.log(arr);