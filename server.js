//CREATE EXPRES APP
const exp = require("express")
const app=exp()
require('dotenv').config()
const port=process.env.PORT||3500
//assign port number
app.listen(port,()=>console.log("server is listening to the portnumber ",port))


const path=require("path")
//connect react build
app.use(exp.static(path.join(__dirname,'./build')))




//get mongo client
const mClient=require('mongodb').MongoClient;

//connect to DB server using mongo client
mClient.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1")
.then((dbRef)=>{
    //connect to database
    const dbObj=dbRef.db('b1db')
    //connect to collection of this database
    const userCollectionObj=dbObj.collection('usersCollection')
    const prodCollectionObj=dbObj.collection('prodCollection')

    //share collection to APIs
    app.set('userCollectionObj',userCollectionObj)
    app.set('prodCollectionObj',prodCollectionObj)

    console.log("DB connecion success")
})
.catch((err)=>console.log("database connect error:",err))


//import userApp
const userApp=require("./APIs/userApi")

//connect user app
app.use("/user-api",userApp)

//invalid path
const invalidPathMiddleware=(request,response,next)=>{
    response.send({message:"Invalid Path"})
}
app.use("*",invalidPathMiddleware)

// //error handling middleware
const errHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errHandlingMiddleware)