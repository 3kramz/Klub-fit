import React from 'react';
import { useNavigate } from 'react-router-dom';


const Course = ({course}) => {
    const { id, name, img, fee }=course
    const navigate = useNavigate();

    const navigateToCourseDetail = id =>{
        navigate(`/course/${id}`);
    }

    return (
        <div>
           <div className="col">
             <div className="card">
                <img src={img} className="card-img-top  h-100" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-start">{name}</h5>  
                    <p className="card-title text-start">{fee}</p>  
                </div>
                <div className="card-footer ">
                  <button onClick={() => navigateToCourseDetail(id)} className="btn  btn-primary">PURCHASE</button>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Course;