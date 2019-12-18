const jwt = require('jsonwebtoken');

module.exports.interface = ({code=null,errorMessage=null,resultObject=null,success})=>{
return {code,errorMessage,resultObject,success}
}
module.exports.isLoginState = (userInfo) =>{
  if (userInfo) return true;
  return false
}


const CONSTANT = {
  SECRET_KEY: 'screttKey'
};

module.exports.setToken = function (id) {
  return new Promise((resolve, reject) => {
      const token = jwt.sign({
          userId: id
      }, CONSTANT.SECRET_KEY, { expiresIn:  60 * 60 * 24 * 3 });
      // let info = jwt.verify(token.split(' ')[1], signkey)
      // console.log(info);
      resolve(token);
  })
}