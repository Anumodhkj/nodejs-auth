const jwt=require('jsonwebtoken');


module.exports = function (req,res,next){
    const token=req.header('auth-token');
    if(!token) return res.status(401).send("ACCESS DENIED");


    try {
        const verified=jwt.verify(token,process.env.tokensecret);
        req.user=verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}