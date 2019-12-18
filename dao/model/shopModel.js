const mongoose = require('mongoose');
// 定义数据结构
const shopSchema = new mongoose.Schema({
    //与门店关联
    shopUserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopUsersModel"
    },
    //门店名字
    shopName:String,
    //执照号码
    licence:String,
    //执照图片
    licenceImg:String,
    //门店地址
    address:String,
    //经纬度
    gps:String,
    //门店法人
    legalEntity:String,
    //电话
    phone:String,
    //门店激活状态
    state:Boolean
})
// 通过数据结构来创建数据模型
mongoose.model("shopModel", shopSchema, "shop");

module.exports.shopModel = mongoose.model("shopModel");