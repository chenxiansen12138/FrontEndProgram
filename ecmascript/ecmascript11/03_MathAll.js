/**
 * 字符串扩展 matchAll
 * @type {string}
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

let result = pornInfo.matchAll(infoReg);

// for (let res of result) {
//     console.log(res);
// }

let arr = [...result];
console.log(arr)