import React, { useState } from 'react';
import './Ent1.css';
import {useForm} from 'react-hook-form';

function Ent1() {
    
  let { register, handleSubmit, formState: { errors } } = useForm();
    let [sty,setSty]=useState({display:'none'})
    let submitForm=(auctionvalue)=>{
        console.log(auctionvalue);
    }
    const auct=()=>{
        setSty({display:'block'});
    }
  return (
    <div>
        <button onClick={()=>auct()} className="btn btne1">Opt-in for Auction</button>
        <div className="auction" style={sty}>
            <div>
                <form onSubmit={handleSubmit(submitForm)}>
                    <label htmlFor="auction">Auction Amount</label>
                    <input type="number" name="auction" id="auction" className="form-control mx-auto" {...register("auction",{required:{value:"true",message:"* auction is required"},minLength:{value:4,message:"* auction is Too Small"},maxLength:{value:10,message:"* auction is Too Big"}})} />
                    {errors.auction?.message &&<p className="text-danger">{errors.auction?.message}</p>}
                    <button  className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Ent1;
