var express = require('express');
var router = express.Router();
const {getAuditShop, addShop, getShop, getOne, getApplyShop, consentApply, updateShop, delShop, getAuditShopById, getAuditByPage, getAllShop, auditShop } = require('../service/shopService');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

const qnconfig = require('../config.js')
// 处理请求
router.get('/token', (req, res, next) => {
  // console.log(qnconfig.uploadToken)
  res.status(200).send(qnconfig.uploadToken)
})
//获取所有门店
router.get('/getShop', async function (req, res, next) {
  res.send(await getShop(req.query));
})

//获取审核通过门店
router.get('/getAuditShopById', async function (req, res, next) {
  res.send(await getAuditShopById(req.query));
})
//获取门店详情
router.post('/getOne', async function (req, res, next) {
  res.send(await getOne(req.body));
})

//新增门店
router.post('/addShop', async function (req, res, next) {
  // console.log(req.body)
  res.send(await addShop(req.body));
});
//获取待审核门店
router.get('/getApplyShop', async function (req, res, next) {
  res.send(await getApplyShop());
});
//通过审核
router.post('/consentApply', async function (req, res, next) {
  res.send(await consentApply(req.body));
});
//修改门店信息
router.post('/updateShop', async function (req, res, next) {
  res.send(await updateShop(req.body));
});
//删除门店
router.post('/delShop', async function (req, res, next) {
  res.send(await delShop(req.body));
});

//订单项：通过用户ID获取店铺信息
router.post('/getShopByUsers', async function (req, res, next) {
  res.send(await getAllShop(req.body));
});

//审核门店信息
router.post('/auditShop', async function (req, res, next) {
  res.send(await auditShop(req.body))
})

//获取待审核用户
router.get('/getAuditByPage', async function (req, res, next) {
  res.send(await getAuditByPage(req.query))
});
//获取审核通过门店--小程序
router.get('/getAuditShop', async function (req, res, next) {
  res.send(await getAuditShop());
})
module.exports = router;