import React from 'react';


const Service = ({service}) => {
    const {name,img,fee}=service

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
                  <button className="btn  btn-primary">PURCHASE</button>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Service;