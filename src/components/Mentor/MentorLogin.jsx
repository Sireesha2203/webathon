import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import './MentorLogin.css'

function MentorLogin() {
  let  {register,handleSubmit,formState:{errors}}=useForm();
  let navigate=useNavigate();
  // let [Logindetails,setLogin]=useState([]);
  //let authentication=false;
  useEffect(()=>{
    fetch("http://localhost:4000/MentorDetails")
    .then(res=>res.json())
    // .then(data=>setLogin(data))
    .then(data=>console.log(data))
    .catch(ree=>console.error("error is",ree))
  },[])
  console.log(errors);

  // function authentor(obj){
  //   let authentication=false;
  //   for(let i=0;i<Logindetails.length;i++){      
  //   if(Logindetails[i].username==obj.username){
  //     if(Logindetails[i].password==obj.password){
  //       authentication=true;
  //       break;
  //     }
  //     else{
  //       authentication=false;
  //     }}
  //     else{
  //       authentication=false;

  //     }}
  //     console.log(authentication);
  //     return authentication;
  // }

  function Login(obj){
    // let render=authentor(obj)
  }


  return (
    <div className='container text-center' id='body'>
      <h2>Mentor Login</h2>
          <div id='formm' className='w-25 mx-auto rounded'><form onSubmit={handleSubmit(Login)}>
        <input type="text" className='form-control rounded mb-2' placeholder='Username' {...register("username",{required:{value:true,message:"* Username is required"},minLength:{value:4,message:"* please type atleast 4 characters"},maxLength:{value:10,message:"* Sorry you cannot use more than 10 characters"}})}>
        </input>
         {errors.username?.message ? <p className="text-danger">{errors.username?.message}</p>:<p className='mt-2'><br/></p>}
        <input type="password" className='form-control rounded mt-2 mb-2' placeholder='Password' {...register("password",{required:true,})}>

        </input>
        {errors.password?.type==="required" ? <p className="text-danger">* Password is required</p>:<p className='mt-2'><br/></p>}
        <button type="submit" className='btn btn-warning' onClick={()=>navigate('/mentordisplay')}>
            Login
        </button>
        </form>
        </div>
        
    </div>
  )
}

export default MentorLogin;