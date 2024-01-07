/**
 * 正则扩展: 命名捕获分组
 * @type {string}
 */
// let str = '<a href="http://www.baidu.com">百度</a>'
// let reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
// const result = reg.exec(str);
// console.log(result.groups.text, result.groups.url)


/**
 * 正则扩展:反向断言
 */
// let info = '白石茉莉奈是一名从事日本AV行业的女优,她今年38岁,是带着孩子入的AV行业';
// //正向断言
// let ageReg = /\d+(?=岁)/;
// let age = ageReg.exec(info);
// console.log(age);
//
// //反向断言
// let avReg = /(?<=本)[A-Z]+/;
// let av = avReg.exec(info);
// console.log(av);

/**
 * 正则扩展: dotAll模式
 */

let pornInfo = `<ul>
<li>
<a>风间由美</a>
<p>46岁</p>
</li>
<li>
<a>白石茉莉奈</a>
<p>38岁</p>
</li>
</ul>`

let infoReg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;

let porn;
let data = [];
while (porn = infoReg.exec(pornInfo)) {
    data.push({name: porn[1],age: porn[2]});
}
console.log(data)