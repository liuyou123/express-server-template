const { shopModel } = require('./model/shopModel');
//新增
module.exports.addShop = async function (shop) {
    return await shopModel.create(shop);
}
//获取所有门店
module.exports.getShop = async function (shop) {
    return await shopModel.find(shop);
}

module.exports.getAuditShopById = async function ({ shopUserID }) {
    return await shopModel.find({ shopUserID, state: true });
}
//获取所有门店---小程序
module.exports.getAuditShop = async function () {
    return await shopModel.find({ state: true });
}
//删除门店
module.exports.delShop = async function (shop) {
    return await shopModel.deleteOne(shop);
}
//获取门店详情
module.exports.getOne = async function (shop) {
    return await shopModel.find(shop);
}
//获取待审核门店
module.exports.getApplyShop = async function () {
    let data = await shopModel.find().or([{
        state: false
    }])
    return data
}
//通过审核
module.exports.consentApply = async function ({ _id, state }) {
    return await shopModel.updateOne({ _id }, { state })
}
//修改门店信息
module.exports.updateShop = async function ({ _id, shopName, address, phone, legalEntity, licence, licenceImg, gps, shopUserID, state }) {
    return await shopModel.updateOne({ _id }, { shopName, address, phone, legalEntity, licence, licenceImg, gps, shopUserID, state })
}

//订单项：获取门店信息
module.exports.getAllShop = async ({_id}) => await shopModel.find({shopUserID:_id})

// 审核用户信息
module.exports.auditShop = async ({_id,state})=>{
    return await shopModel.updateOne({_id},{state});
}


//获取待审核用户
module.exports.getAuditByPage = async ({currentPage,eachPage})=>{
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await shopModel.find({state:false}).countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await shopModel
        .find({state:false})
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
    return {currentPage,eachPage,totalNum,totalPage,data}
}