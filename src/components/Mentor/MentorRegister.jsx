
import React from 'react'
import {useForm} from "react-hook-form"
import './MentorRegister.css'

function MentorRegister() {
  let {register,handleSubmit,formState:{errors}}=useForm();
    
    function SignUp(obj)
    {
        fetch(" http://localhost:4000/MentorDetails", {method: "POST", headers: {
            "Content-Type": "application/json"},body:JSON.stringify(obj)})
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(ree=>console.error("error is",ree))
    
    }
  return (
    <div class="container w-50">
      <h2>Mentor Sign Up</h2>
      <form onSubmit={handleSubmit(SignUp)} class="needs-validation" novalidate>
        <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='username' name="username"{...register("username")}>
        </input>
        <input type="password" className='form-control rounded  m-4 mx-auto' placeholder='password' {...register("password")}>
        </input>
        <div className=' row'>
          <div className='col-sm-6'>
            <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='First name' {...register("first name")}>
          </input>
          </div>
          <div className='col-sm-6'>
            <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='Last name' {...register("Last name")}>
          </input>
          </div>
        </div>
        <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='Location' {...register("Location")}>
        </input>
        <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='College' {...register("College")}>
        </input>
        <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='Degree' {...register("Degree")}>
        </input>
        <input type="text" className='form-control rounded  m-4 mx-auto' placeholder='Specilization' {...register("Specilization")}>
        </input>
        <div id='button'>
          <button type="submit" className='btn btn-warning display-1 text-white' onClick={()=>{}} >
              Login
          </button>
        </div>
      </form>
    </div>    
  )
  }

export default MentorRegister