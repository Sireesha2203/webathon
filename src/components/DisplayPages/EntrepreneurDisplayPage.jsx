
import { useEffect, useState } from "react";
import './EntrepreneurDisplayPage.css'

function EntrepreneurDisplayPage() {
    let [card,getcard]=useState({});
    useEffect(()=>{
        fetch(' http://localhost:4000/MentorDetails')
        .then(res=>res.json())
        .then(data=>getcard(data))
        .catch(err=>console.log('error is ',err));
    },[])
    let [moreDet,setMore]=useState(card[0]);
    {console.log(card[1])}
    {console.log(moreDet)}

  return (
    <div className="container-fluid bg-info row row-cols-auto gap-2 justify-content-center p-5 m-0">
        
        {Object.entries(card).map(([val,obj])=><div className="card col" key={val} id={val}>
            <div className="card-header">
                <img src={obj.image} width="200px"/>
            </div>
            <div className="card-body text">
                <h5 className="text-center">{obj.firstName} {obj.lastName}</h5>
                <h6>Username: <span className="fw-bold">{obj.username}</span></h6>
                <h6>Location: <span className="fw-bold">{obj.Location}</span></h6>
                <h6>College: <span className="fw-bolder">{obj.College}</span></h6>
                <h6>Degree: <span className="fw-bold">{obj.Degree}</span></h6>
                <h6>Specialization: <span className="fw-bold">{obj.Specialization}</span></h6>
            </div>
            <div className="card-footer text-end" id={val}>
                <button  className="btn btn-warning" onClick={()=>setMore(obj)}>More Details</button>
            </div>
    </div>
    )}
</div>
  )
}

export default EntrepreneurDisplayPage