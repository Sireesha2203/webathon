import React, { useContext } from 'react'
import {useForm} from "react-hook-form"
// import { useNavigate } from 'react-router-dom';
import './EntrepreneurLogin.css'
// import axios from 'axios';
import { loginContext } from '../../contexts/loginContext';


function EntrepreneurLogin() {
     
  let [selectedUser,loginUser,userLoginStatus,loginErr]=useContext(loginContext)

    //error state
    // let [error, setError]=useState("")

    //navigate
    // const navigate=useNavigate();
    let {
      register,
      handleSubmit,
      formState:{errors},
    }=useForm();

    //adding new user
    let handleSubmitUser=(userCredObj)=>{
      loginUser(userCredObj)
    }
  
  return (
    <div className='container text-center' id='body'>
    <h2>Entrepreneur Login</h2>
    <div id='formm' className='w-25 mx-auto rounded'>


    {loginErr.length!==0 && (
      <p className="display-3 text-danger text-center">{loginErr}</p>
    )}

      <form onSubmit={handleSubmit(handleSubmitUser)}>
      <input type="text" className='form-control rounded mb-2' 
        placeholder='Username' {...register("username",{required:{value:true,message:"* Username is required"}
        ,minLength:{value:4,message:"* please type atleast 4 characters"}
        ,maxLength:{value:20,message:"* Sorry you cannot use more than 20 characters"}})}>
      </input> 

       {errors.username?.message ? <p className="text-danger">{errors.username?.message}</p>:<p className='mt-2'><br/></p>}


      <input type="password" className='form-control rounded mt-2 mb-2'
        placeholder='Password' {...register("password",{required:true,})}>
      </input>

      <button type="submit" className='btn btn-warning' >
        Login
      </button>

      </form>

      </div>
      
  </div>
  )
}

export default EntrepreneurLogin