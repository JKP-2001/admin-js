const argon2 = require('argon2');

module.exports.beforeNewUser = async (request)=>{
    if(request.method === 'post'){
        const {password ,...otherParams} = request.payload;

        if(password){
            const encryptedPassword = await argon2.hash(password);

            return {
                ...request,
                payload:{
                    ...otherParams,
                    encryptedPassword
                }
            }
        }
    }
}
