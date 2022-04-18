import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Login from '../Login/Login/Login';
import Memberships from '../Memberships/Memberships';

const Home = () => {
    return (
        <div className='container mt-5'>
          <Banner></Banner>
          <Memberships></Memberships>
          <Services></Services>
          <Login></Login>


        </div>
    );
};

export default Home;