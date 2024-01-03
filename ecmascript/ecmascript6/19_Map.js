let map = new Map();
map.set('name', '白石茉莉奈');
let key = {
    name: 'AV',
}
map.set(key, ['永井玛利亚', '深谷咏美'])
map.set('function', function () {
    console.log('金谷宇乃')
});

map.get(key);
map.has(key);
map.clear();
for (const mapElement of map) {
    console.log(mapElement);
}