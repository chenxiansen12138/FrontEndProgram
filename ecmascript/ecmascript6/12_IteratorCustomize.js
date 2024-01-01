/**
 * 自定义遍历对象
 */

const Pornstars = {
    info: 'AV女优',
    names: [
        '叶爱',
        '金谷宇乃',
        '永野司',
        '青山葵'
    ],
    [Symbol.iterator]() {
        //定义索引
        let index = 0;
        let _this = this;
        return {
            next: function () {
                if (index < _this.names.length) {
                    const result = {value: _this.names[index], done: false};
                    index++;
                    return result;
                } else {
                    const result = {value: undefined, done: true};
                    return result;
                }
            }
        };
    }
}

for (const pornstar of Pornstars) {
    console.log(pornstar);
}