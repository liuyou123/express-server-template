const { usersModel } = require('./model/usersModel');

//平台登陆
module.exports.login = async function (data) {
    return await usersModel.find(data)
}

//新增门店管理用户
module.exports.addUsers = async function (data) {
    return await usersModel.create(data);
}

//验证平台用户是否重复
module.exports.isUsers = async function ({ username }) {
    return await usersModel.find({ username });
}

// 分页查询所有服务
module.exports.getAllByPage = async function({currentPage,eachPage}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await usersModel.countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await usersModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
    return {currentPage,eachPage,totalNum,totalPage,data}
}



// 修改用户信息
module.exports.updateUsers = async ({_id,username,password})=>{
    return await usersModel.updateOne({_id},{username,password});
}

//删除平台用户信息
module.exports.removeUsers = async function(data){
    return await usersModel.remove(data)
}