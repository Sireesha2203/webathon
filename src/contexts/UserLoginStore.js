import {useState} from 'react'
import axios from 'axios'
import { loginContext } from './loginContext';

function UserLoginStore({children}){
    let [selectedUser,setSelectedUser]=useState({})
    let [loginErr,setLoginErr]=useState("")
    const [userLoginStatus,setUserLoginStatus]=useState(false)

 
    const loginUser=(userCredentialsObj)=>{
        axios.post("http://localhost:3500/user-api/user-login",userCredentialsObj)
        .then(response=>{
            if(response.data.message==="Success"){
                //navigate to user-profile
                setSelectedUser(...response.data.user)
                setLoginErr("")   
                setUserLoginStatus(true)            
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
        <loginContext.Provider value={[selectedUser,loginUser,userLoginStatus,loginErr]}>
            {children}
        </loginContext.Provider>
    )

}
export default UserLoginStore;
