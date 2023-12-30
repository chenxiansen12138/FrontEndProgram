/**
 * ES6引入新的生命字符串方式 「``」「''」「""」
 */
//1.声明
// let str = `我也是一个字符串哦`;
// console.log(str, typeof str);
//2.内容中可以直接出现换行符
let str = `<ul>
                    <li>白石茉莉奈</li>
                    <li>金谷宇乃</li>
                    <li>弥生美月</li>
                  </ul>`;

//3.变量拼接
let pornstar = '白石茉莉奈';
let word = `${pornstar}是我最喜欢的AV女优`;
console.log(word);