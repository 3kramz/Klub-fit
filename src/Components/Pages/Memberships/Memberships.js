import React from 'react';
import useLoadData from '../../Hooks/useLoadData'
import Membership from './Membership/Membership';

const Memberships = () => {
    const memberships=useLoadData("membership.json")
   
    return (
        <div className="container mt-3" id="memberships">
           <h2 className="text-center">Our Passes</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
               {memberships.map(membership=><Membership membership={membership} key={membership.id}></Membership>)}
            </div>
        </div>
    );
};

export default Memberships;