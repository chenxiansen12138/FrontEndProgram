function doAjax(url) {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        ajax.open('Get', url);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status === 200) {
                    resolve('白石茉莉奈');
                } else {
                    reject('风间由美');
                }
            }
        }
    })
}

async function pornstar() {
    try {
        let result = await doAjax('http://localhost:8080')
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

pornstar();