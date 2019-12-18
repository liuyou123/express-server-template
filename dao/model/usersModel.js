const mongoose = require('mongoose');
// 定义数据结构
const usersSchema = new mongoose.Schema({
    //账号
    username:String,
    //密码
    password:String,
    //账号状态
    state:String,
    //邮箱
    email:String
})
// 通过数据结构来创建数据模型
mongoose.model("usersModel", usersSchema, "users");

module.exports.usersModel = mongoose.model("usersModel");

