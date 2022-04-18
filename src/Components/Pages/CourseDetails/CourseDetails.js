import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
 
    return (
        <div className='container text-center'>
            <h2 className="fs-2 my-3">Welcome to Course Details </h2>
            <div className=''>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;