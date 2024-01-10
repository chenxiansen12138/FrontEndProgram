/**
 * 可选链操作符
 */

function info(pornstar) {
    let name = pornstar?.pornstar?.name;
    console.log(name)
}

info({
    pornstar: {
        name: '白石茉莉奈',
        age: '38'
    }
})