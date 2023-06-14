import {useState} from 'react'
import axios from 'axios'
import { response } from 'express'

function UserLoginStore({children}){
    let [selectedUser,setSelectedUser]=useState({})
    let [loginErr,setLoginErr]=useState("")
 
    const loginUser=(userCredentialsObj)=>{
        axios.post("http://localhost:3500/user-api/user-login",userCredentialsObj)
        .then(response=>{
            if(response.data.message==="Success"){
                //navigate to user-profile
                setSelectedUser(response.data.user)
                setLoginErr("")               
            }
            else{
                setLoginErr(response.data.message)
            }
        })
        .catch(err=>{
            console.log("err",err)
            setLoginErr(err)
        })
    }

    return(
        <loginContext.Provider value={[user,loginUser,loginErr]}>
            {children}
        </loginContext.Provider>
    )

}
export default UserLoginStore;
