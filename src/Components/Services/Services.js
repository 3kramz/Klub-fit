import React from 'react';

import useLoadData from '../Hooks/useLoadData'
import Service from './Service/Service';


const Services = () => {
    const services=useLoadData("services.json")
    
    return (
        <div className="container mt-3">
           <h2 className="text-center">Our Passes</h2>
           <div className="card-deck">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service=> <Service key={service.id} service={service}></Service>)}
            </div>
           </div>
        </div>
    );
};

export default Services;