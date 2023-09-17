import React,{ useState} from 'react';
import {useForm} from 'react-hook-form';
import "./EntrepreneurRegister.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EntrepreneurRegister() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  let navigate=useNavigate();
  let [error,setError]=useState("")
  let submitForm=(userObj)=>{
    axios
      .post("http://localhost:3500/user-api/user-signup",userObj)
      .then((response)=>{
        console.log("response is",response)
        if(response.status===201){
          //navigate to login component
          navigate('../login')
        }
        if(response.status!==201) {
          setError(response.data.message)
          console.log(error)
        }
      })
      .catch((err)=>{
        //the client was given an error response
        if(err.response){
          setError(err.message);
        }
        //the client never received a response
        else if(err.request){
          setError(err.message);
        }
        //for other error
        else{
          setError(err.message);
        }
      })
  }

  console.log("error",error)
  
  return (    
    <div className="reg container">
      <style> @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); </style>
      <h1 className="head display-3">Registration Form </h1>
      {error.length!==0 && <p className='display-1 text-danger text-center'>{error}</p>}
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="container fluid">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col c1">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" className="form-control mx-auto" {...register("firstname",{required:{value:"true",message:"* Firstname is required"},minLength:{value:4,message:"* Firstname is Too Small"},maxLength:{value:10,message:"* Firstname is Too Big"}})} />
                    {errors.firstname?.message &&<p className="text-danger">{errors.firstname?.message}</p>}
                </div>
                <div className="col c1">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" className="form-control mx-auto" {...register("lastname",{required:{value:"true",message:"* Lastname is required"},minLength:{value:4,message:"* Lastname is Too Small"},maxLength:{value:10,message:"* Lastname is Too Big"}})}/>
                    {errors.lastname?.message &&<p className="text-danger">{errors.lastname?.message}</p>}
                </div>
                <div className="col c1">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" className='form-control rounded  m-4 mx-auto' {...register("username",{required:{value:"true",message:"* Username is required"},minLength:{value:4,message:"* Username is Too Small"},maxLength:{value:20,message:"* Username is Too Big"}})}/>
                    {errors.username?.message &&<p className="text-danger">{errors.username?.message}</p>}
                </div>
                <div className="col c1">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className='form-control rounded  m-4 mx-auto'  {...register("password",{required:{value:"true",message:"* Password is required"},minLength:{value:4,message:"* Password is Too Small"},maxLength:{value:10,message:"* Password is Too Big"}})}/>
                    {errors.password?.message &&<p className="text-danger">{errors.password?.message}</p>}
                </div>
                {/* <div className="col c1">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" name="birthday" id="birthday" className="form-control mx-auto" {...register("birthday",{required:{value:"true",message:"* Birthday is required"},max:{value:"2005-12-20",message:"* You're not old enough"}})}/>
                    {errors.birthday?.message &&<p className="text-danger">{errors.birthday?.message}</p>}
                </div> */}
                <div className="col c1">
                    <label htmlFor="gender">Gender</label>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="male" name="gender" value="male" {...register("gender",{required:{value:"true",message:"* Please select gender"}})}/>
                                <label htmlFor="male" className="form-check-label">Male</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="female" name="gender" value="female" {...register("gender",{required:{value:"true",message:"* Please select gender"}})}/>
                                <label htmlFor="female" className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                    {errors.gender?.message &&<p className="text-danger">{errors.gender?.message}</p>}
                </div>
                <div className="col c1">
                    <label htmlFor="mail">Email</label>
                    <input type="email" name="mail" id="mail" className="form-control" {...register("mail",{required:{value:"true",message:"* Email is required"}})}/>
                    {errors.mail?.message &&<p className="text-danger">{errors.mail?.message}</p>}
                </div>
                
                <div className="col c1">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input type="number" name="phonenumber" id="phonenumber" className="form-control" {...register("phonenumber",{required:{value:"true",message:"* Phonenumber is required"},minLength:{value:10,message:"* Phonenumber must be 10-digit"},maxLength:{value:10,message:"* Phonenumber must be 10-digit"}})}/>
                    {errors.phonenumber?.message &&<p className="text-danger">{errors.phonenumber?.message}</p>}
                </div>
            </div>
            <div className="row row-cols-1">
                <div className="col c1">
                <label htmlFor="subject">Subject</label>
                <select className="form-select" name="subject" id="subject" {...register("subject",{required:{value:"true",message:"* Please select Subject"}})} defaultValue="" >
                    <option value="" disabled hidden>Choose Subject...</option>
                    <option value="trading">Trading</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="technical">Technical</option>
                    <option value="non-technical">Non-Technical</option>
                </select>
                {errors.subject?.message &&<p className="text-danger">{errors.subject?.message}</p>}
                </div>
            </div>
            <div className="row row-cols-6">
                <div className="col c1 mx-auto">
                    <button  className="btn  btn-warning text-dark" type="submit">Submit</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default EntrepreneurRegister