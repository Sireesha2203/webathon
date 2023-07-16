const jwt=require("jsonwebtoken")

//write a middleware function to verify token
const verifyToken=(request,response,next)=>{
    //get bearer token from req.headers
    const bearerToken=request.headers.authorization//Bearer token
    //if bearer token not found
    if(bearerToken===undefined){
        response.send({message:"unauthorized access..Plz login first"})
    }
    //if bearer token is expired
    else{
        //get token from Bearer token 
        const token=bearerToken.split(" ")[1] 
        //verify token
        try{
            jwt.verify(token,"abcdef")
            next()
        }
        catch(err){
            //forward err to err handling middleware
            next(new Error("Session expired.Please relogin to continue"))
        }
    }
}
module.exports=verifyToken