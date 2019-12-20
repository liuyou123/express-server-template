const jwt = require('jsonwebtoken');
const  CONSTANT  = require('../common/secretKey.js');

module.exports.interface = ({code=null,errorMessage=null,resultObject=null,success=true})=>{
return {code,errorMessage,resultObject,success}
}
module.exports.isLoginState = (userInfo) =>{
  if (userInfo) return true;
  return false
}


//解析token
module.exports.verToken = function (token) {
  return new Promise((resolve, reject) => {
      var info = jwt.verify(token, CONSTANT.SECRET_KEY ,(error, decoded) => {
          if (error) {
            
            return new Error(error)
          }
         return decoded
        });
      resolve(info);
  })
}


// module.exports.setToken = function (id) {
  
//   return new Promise((resolve, reject) => {
//       const token = jwt.sign({
//           userId: id
//       }, CONSTANT.SECRET_KEY, { expiresIn:  60 * 60 * 24 * 3 });
//       // let info = jwt.verify(token.split(' ')[1], signkey)
//       // console.log(info);
//       resolve(token);
//   })
// }