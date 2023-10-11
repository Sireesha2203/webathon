import {React} from 'react';
import {useForm} from 'react-hook-form';
import Countdown from 'react-countdown';
// import { Outlet } from 'react-router-dom';
import "./Entrepreneurship.css"

function Entrepreneurship() {
  // const locale = 'en';
  const today = new Date();
  const hour = today.getHours(); 
  const minute=today.getMinutes();
  const difference=((9-hour)*3600+(-minute)*60)*1000;
  let { register, handleSubmit, formState: { errors } } = useForm();
  let submitForm=(idea)=>{
    console.log(idea);
    fetch("http://localhost:4000/ideas",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(idea)
    })
    .catch(err=>console.log("err is ",err))
  };
  return (
    <div className='auc mt-0 mx-auto '> 
      <center className='head mt-0'>
      <h3 className='auch'>Auction Time: EveryDay 12:00AM to 3:00PM </h3>
      <div className='text-white'>Today's Results will be posted by 8:00PM </div>
      </center>
        {(((hour>=9)&&(hour<15))) ? <div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div  className="container container1 fluid ">
              <div className="row row-cols-1 row-cols-lg-1 ">
                  <div className="col c1">
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" id="username" placeholder='Enter Username' className="form-control mx-auto" {...register("ideaname",{required:{value:"true",message:"* Ideaname is required"},minLength:{value:4,message:"* Ideaname is Too Small"},maxLength:{value:600,message:"* Ideaname is Too Big"}})} />
                      {errors.ideaname?.message &&<p className="text-danger">{errors.ideaname?.message}</p>}
                  </div>
                  <div className="col c1">
                      <label htmlFor="ideaname">Idea Name</label>
                      <input type="text" name="ideaname" id="ideaname" placeholder='Enter your Idea Name' className="form-control mx-auto" {...register("ideaname",{required:{value:"true",message:"* Ideaname is required"},minLength:{value:4,message:"* Ideaname is Too Small"},maxLength:{value:600,message:"* Ideaname is Too Big"}})} />
                      {errors.ideaname?.message &&<p className="text-danger">{errors.ideaname?.message}</p>}
                  </div>
                  <div className='col c1'>
                    <label htmlFor="idea">Idea</label>
                    <textarea name="idea" id="idea" cols="10" rows="10" placeholder='Describe your Idea here' className="form-control mx-auto" {...register("idea",{required:{value:"true",message:"* Idea is required"},minLength:{value:4,message:"* Idea is Too Small"},maxLength:{value:6000,message:"* Idea is Too Big"}})}></textarea>
                    {errors.idea?.message &&<p className="text-danger">{errors.idea?.message}</p>}
                  </div>
        
                  <div className='col c1' >
                    <label htmlFor="link"   style={{cursor:'pointer'}}>
                      Paste Your Video Link here...
                    </label>
                    <input type="text" id="link"name="link" className="form-control" {...register("link",{required: {value:"true",message:"* Video Link is required"}})}/>
                    {errors.link?.message &&<p className="text-danger">{errors.link?.message}</p>}
                    <br />
                  </div>

                  <div className=" row row-cols-6 mb-5">
                      <div className=" col c1 mx-auto">
                          <button  className="btn btn1 " type="submit">Submit</button>
                      </div>
                  </div>
              </div>
            </div>
          </form>       
        </div>:console.log("1")}
              <hr />
        <center className='timer mt-2'>            
        {difference> 0 ?   <div>
          <h3 className=''>Auction starts within:</h3>
         <Countdown className='count fs-2' date={Date.now() + difference}   /> </div>: console.log("2")}
        {difference<(-21600000) ? <h2 >Auction Ended Come Again Tomorrow </h2> : console.log("3")}
        </center>
    </div>
  )
}

export default Entrepreneurship;