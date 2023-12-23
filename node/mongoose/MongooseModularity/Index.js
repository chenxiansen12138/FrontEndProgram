const db = require('./db/DB');
const BookModel = require('./model/BookModel')
db(() => {
    BookModel.create({
        name: '红楼梦',
        author: '曹雪芹',
        price: '19.9',
        is_hot: true,
        tags: ['情感', '心计', '灵异'],
        pub_time: new Date()
    })
        .then((data) => {
            console.log(data);
        }).catch((err) => {
        console.log(err);
    })
}, () => {
    console.log('连接失败')
});
