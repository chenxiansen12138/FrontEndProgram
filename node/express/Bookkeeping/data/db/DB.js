module.exports = function (success, error) {
    const mongo = require('mongoose');
    const {DBHOST,DBPORT} = require('../config/DBConfig');
    //连接mongodb
    mongo.connect(`mongodb://${DBHOST}:${DBPORT}`);
    //设置回调
    //once 事件回调函数只执行一次
    mongo.connection.once('open', () => {
        success();
    });
    //设置连接成功的回调
    mongo.connection.on('error', () => {
        error();
    })//设置连接失败的回调
    mongo.connection.on('close', () => {
        console.log('连接关闭。。')
    })//设置连接关闭的回调

}