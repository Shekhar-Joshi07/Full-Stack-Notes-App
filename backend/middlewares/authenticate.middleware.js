const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{
    const token = req.headers.token

    
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                req.body.user = decoded.userID
                next()
            }else{
                res.send({"msg":"Please Login"})
            }
        })
    
}

module.exports = {
    authenticate
}