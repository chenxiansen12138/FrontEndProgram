const mongo = require('mongoose');
let BookSchema = new mongo.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
});
//创建模型对象 对文档操作的封装对象
let BookModel = mongo.model('books', BookSchema);
module.exports = BookModel;