const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/kuke';  // 其中 爱宠邦 为连接的数据库名称
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});