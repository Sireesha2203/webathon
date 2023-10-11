import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './EntrepreneurDisplayPage.css';
import { Outlet } from "react-router-dom";


export default function MentorDisplayPage() {
    let navigate=useNavigate();
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
                
                <h6>Idea: <span className="fw-bold">{obj.idea}</span></h6>
                <video width="320" height="240" controls autoPlay >
                    <source src={obj.link} type="video/mp4"/>
                </video>
            </div>
            <div className="card-footer text-end" id={val}>
                <button  className="btn btn-warning" onClick={()=>{navigate('/investordisplay/ent1')}}>More Details</button>
            </div>
    <Outlet/>
    </div>
    )}
</div>)
        
     }