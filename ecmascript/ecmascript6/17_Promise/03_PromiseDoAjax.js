/**
 * Promise封装ajax请求.
 */
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let p = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.apiopen.top/getJoke")
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    }
})

p.then((value)=>{
    console.log(value);
},err=>{
    console.log('---------')
    console.error(err);
})