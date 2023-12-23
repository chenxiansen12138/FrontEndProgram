const mongo = require('mongoose');

//连接mongodb
mongo.connect("mongodb://192.168.10.46:27017");
//设置回调
//once 事件回调函数只执行一次
mongo.connection.once('open',()=>{
    //console.log('连接成功～～')
    //创建文档的结构对象
    //设置文档中的集合的属性和类型
    let BookSchema = new mongo.Schema({
        name: String,
        author: String,
        price: Number
    });
    //创建模型对象 对文档操作的封装对象
    let BookModel = mongo.model('books',BookSchema);
    BookModel.create({name: '西游记', author: '吴承恩', price: '19.9'})
        .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
});//设置连接成功的回调
mongo.connection.on('error',()=>{
    console.log('连接失败！！！')
})//设置连接失败的回调
mongo.connection.on('close',()=>{
    console.log('连接关闭。。')
})//设置连接关闭的回调

// setTimeout(()=>{
//     mongo.disconnect();
// },2000);