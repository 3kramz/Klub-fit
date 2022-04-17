import React from 'react';
import Banner from '../Banner/Banner';
import Memberships from '../Memberships/Memberships';

const Home = () => {
    return (
        <div className='container mt-5'>
          <Banner></Banner>
          <Memberships></Memberships>

        </div>
    );
};

export default Home;