let pornstars1 = ['白石茉莉奈', '妃光莉', '风间由美', '翔田千里', '永井玛利亚', '风间由美', '翔田千里'];
let pornstars2 = ['弥生美月', '朝桐光', '风间由美', '翔田千里', '北条麻妃'];

//去重
let porndist = [...new Set(pornstars1)];
console.log(porndist);
//交集
let pornuni = [...new Set(pornstars1)].filter(item => new Set(pornstars2).has(item));
console.log(pornuni);
//并集
let pornwith = [...new Set(pornstars1), ...new Set(pornstars2)];
console.log(pornwith);

//差集
let pornmin = [...new Set(pornstars1)].filter(item => !new Set(pornstars2).has(item));
console.log(pornmin);