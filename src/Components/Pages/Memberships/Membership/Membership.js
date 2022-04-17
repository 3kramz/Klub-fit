import React from 'react';

const Membership = ({membership}) => {

    const {img,name}=membership

    return (
         <div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">{name}</h5>   
            </div>
          </div>
        </div>
    );
};

export default Membership;