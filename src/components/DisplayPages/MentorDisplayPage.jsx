import { useEffect, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import './EntrepreneurDisplayPage.css';
// import { Outlet } from "react-router-dom";


export default function MentorDisplayPage() {
    // let navigate=useNavigate();
    let [card,getcard]=useState({});
    useEffect(()=>{
        fetch(' http://localhost:4000/Ideas')
        .then(res=>res.json())
        .then(data=>getcard(data))
        .catch(err=>console.log('error is ',err));
    },[])
    // let [moreDet,setMore]=useState(card[0]);
    // {console.log(card[1])}
    // {console.log(moreDet)}
  return (
    <div className="container-fluid bg-info row row-cols-auto gap-2 justify-content-center p-5 m-0">
        
        {Object.entries(card).map(([val,obj])=><div className="card col" key={val} id={val}>
            <div className="card-header">
              <h6>-----={'>'}            Ideaname: <span className="fw-bold">{obj.ideaname}</span></h6>
            </div>
            <div className="card-body text">
                
                <h6>By: <span className="fw-bold">{obj.username}</span></h6>
            </div>
            {/* <div className="card-footer text-end" id={val}>
                <button  className="btn btn-warning" onClick={()=>{navigate('/mentordisplay')}}>More Details</button>
            </div> */}
    </div>
    )}
</div>)
        
     }