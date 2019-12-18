const {getAuditShop, addShop, getShop, getOne, getApplyShop, getAuditByPage, consentApply, auditShop, updateShop, delShop, getAuditShopById, getAllShop } = require('../dao/shopDao');
//新增
module.exports.addShop = async function (shop) {
    return await addShop(shop);
}
//获取所有门店
module.exports.getShop = async function (shop) {
    return await getShop(shop);
}
//获取所有门店--小程序
module.exports.getAuditShop = async function () {
    return await getAuditShop();
}

module.exports.getAuditShopById = async function (shop) {
    return await getAuditShopById(shop);
}
//获取门店详情
module.exports.getOne = async function (shop) {
    return await getOne(shop);
}
//获取待审核门店
module.exports.getApplyShop = async function () {
    return await getApplyShop();
}
//通过审核
module.exports.consentApply = async function (consent) {
    return await consentApply(consent);
}
//修改门店信息
module.exports.updateShop = async function (shop) {
    return await updateShop(shop);
}
//删除门店
module.exports.delShop = async function (shop) {
    return await delShop(shop);
}

//订单项：获取门店信息getAllShop
module.exports.getAllShop = async data => await getAllShop(data)

// 审核用户信息
module.exports.auditShop = async data => await auditShop(data);

//获取待审核用户
module.exports.getAuditByPage = async data => await getAuditByPage(data);