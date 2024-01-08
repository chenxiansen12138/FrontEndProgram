/**
 * Flat和FlatMap
 * flat将多维数组转换为低维数组
 *
 */


const pornstar = ['风间由美','永野司',['白石茉莉奈','永井玛利亚',['青山葵','田中瞳']]];
console.log(pornstar.flat());
console.log(pornstar.flat(2));

const arr = [1,2,3,4];
const result = arr.flatMap(item=>item * 10);
console.log(result);
