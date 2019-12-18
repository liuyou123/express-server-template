const { login, addUsers, isUsers, getAllByPage, updateUsers, removeUsers } = require("../dao/usersDao");

//平台登陆
module.exports.login = async function (data) {
    const state = await login(data);
    if (state.length !== 0) {
       
        return state
    } else {
        return false
    }
}

//新增平台管理
module.exports.addUsers = async function (data) {
    
    if (state.length !== 0) {
        return true
    } else {
        return false
    }
}

//验证平台账户是否重复
module.exports.isUsers = async function (data) {
    const state = await isUsers(data);
    if (state.length !== 0) {
        return true
    } else {
        return false
    }
}

// 分页查询所有服务
module.exports.getAllByPage = async function (service) {
    return await getAllByPage(service)
}


// 修改用户信息
module.exports.updateUsers = async data => await updateUsers(data);

// 删除服务
module.exports.removeUsers = async function (data) {
    return await removeUsers(data);
}