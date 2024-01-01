/**
 * 根据顺序打印出 风间由美 一色桃子 白木优子 间隔一秒
 */

function getFeng() {
setTimeout(()=>{
    let data = '风间由美';
    iterator.next(data);
},1000)
}

function getYi() {
setTimeout(()=>{
    let data = '一色桃子';
    iterator.next(data);
},1000)
}

function getBai() {
setTimeout(()=>{
    let data = '白木优子';
    iterator.next(data);
},1000)
}

function* getAll() {
    let feng = yield getFeng();
    console.log(feng);
    let yi = yield getYi();
    console.log(yi);
    let bai = yield getBai();
    console.log(bai);
}

let iterator = getAll();
iterator.next();