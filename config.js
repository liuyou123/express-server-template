/*
七牛云配置
*/
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = 'Aq8iTqLtfEYOTFkLM9VLlW7S7fAzkVQ-YbOvry6A'
const secretKey = '3bt6WvOLpd-dMbp-oe_veNzeGJ-5bWrQzRR3ejf0'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'images',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}