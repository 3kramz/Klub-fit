import React from 'react';
import Courses from './Courses/Courses';
import Banner from './Banner/Banner';
import Memberships from './Memberships/Memberships';

const Home = () => {
    return (
        <div className='container mt-5' id="home">
            <Banner></Banner>
            <Memberships></Memberships>
            <Courses></Courses>
        </div>
    );
};

export default Home;