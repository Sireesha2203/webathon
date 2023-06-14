//create mini-express app
const exp=require("express")
const userApp=exp.Router()

const expressAsyncHandler=require("express-async-handler")

const bcryptjs=require("bcryptjs")

const jwt=require("jsonwebtoken")

const verifyToken=require("./middlewares/verifyToken")


//body parser
userApp.use(exp.json())


//create a middleware1
const middleware1=(request,response,next)=>{
    //some logic to verify request
    console.log("middleware1 executed")
    //forward middleware to next
    next()
    // response.send({message:"anauthorized request"})
}

//create a middleware2
const middleware2=(request,response,next)=>{
    //some logic to verify request
    console.log("middleware2 executed")
    //forward middleware to next
    next()
    // response.send({message:"anauthorized request"})
}


//user middleware2 for every request
userApp.use(middleware2);


//create user API


//get users
userApp.get('/get-users',middleware1,expressAsyncHandler( async(request,response)=>{
    
    //get usersCollectionObj
    const userCollectionObj=request.app.get("userCollectionObj")
    
    //get users from db
    let usersList = await userCollectionObj.find().toArray()
    response.status(200).send({message:"List of Users ",payload:usersList})
    
}))





//get user by id     //middleware for specific routes
//make it as a private route
userApp.get('/get-user/:username',verifyToken,middleware1,middleware2,expressAsyncHandler(async(request,response)=>{
    
    //get usersCollectionObj
     const userCollectionObj=request.app.get("userCollectionObj")

    //get userId from url
    let usernameFromUrl=request.params.username

    //find user
    const user = await userCollectionObj.findOne({username:usernameFromUrl})
    if(user===null){
        response.status(200).send({message:"User not existed"})
    }
    else{
        //remove password from user details
        delete user.password
        response.status(200).send({message:"User",payload:user})
    }
}))



// create user 
userApp.post("/user-signup",expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj=request.app.get("userCollectionObj")
    
    //get newUser from request
    const newUser = request.body ;


    //check for duplicate user by username
    let userOfDB=await userCollectionObj.findOne({username:newUser.username})
    //if user already existed,send res to client as "user already existed"
    if(userOfDB!=null){
        response.status(200).send({message:"User already existed"})
    }
    //if not ,hash the password and replace with plain pass with hash
    else{
        let hashedPass=await bcryptjs.hash(newUser.password,5)
        newUser.password=hashedPass
        await userCollectionObj.insertOne(newUser)
        response.status(201).send({message:"User Created"})
    }
    //insert user by id
    // let dbRes= await userCollectionObj.insertOne(newUser)
    // response.status(201).send({message:"User created"})
}))


//user login
userApp.post('/user-login', expressAsyncHandler(async(request,response)=>{

    
    //get userCollectionObj
    const userCollectionObj=request.app.get("userCollectionObj")

    //get user credentials from req
    const userCredObj=request.body

    //verify username
    let userOfDB=await userCollectionObj.findOne({username:userCredObj.username})

    //if invalid
    if(userOfDB===null){
        response.status(200).send({message:"Invalid Username"})
    }
    //if valid
    else{
        //verify password
        let isEqual=await bcryptjs.compare(userCredObj.password,userOfDB.password)
        if(isEqual===false){
            response.status(200).send({message:"Invalid password"})
        }
        else{
            //create JWT Token
            let jwtToken=jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:20})
            //send token in response
            response.status(200).send({message:"Success",token:jwtToken})
        }
    }

}))


// update user
userApp.put('/update-user',expressAsyncHandler(async(request,response)=>{
   
    //get userCollectionObj 
    const userCollectionObj=request.app.get("userCollectionObj")

    //get modified user from client
    let modifiedUser=request.body;

    //update user  in db
    let dbRes=await userCollectionObj.updateOne({id:modifiedUser.id},{$set:{...modifiedUser}})
    response.status(200).send({message:"User Updated"})

}))



// delete user 
userApp.delete('/delete-user/:userName',expressAsyncHandler(async(request,response)=>{
 
    //get usersCollectionObj
    const userCollectionObj=request.app.get("userCollectionObj")
 
    let userName = request.params.userName
    //get username
    let userOfDB=await userCollectionObj.findOne({username:userName}) 
    
    //delete user from db
    await userCollectionObj.deleteOne({username:userOfDB.username})
    response.status(200).send({message:"User deleted"})
 
 }))



 //private route
 userApp.get("/test",verifyToken,(request,res)=>{
    
    res.send({message:"reply from private route"})
 })


//export userApp
module.exports=userApp;