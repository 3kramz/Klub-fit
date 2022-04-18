import React from 'react';

import useLoadData from '../../../Hooks/useLoadData'
import Course from './Course/Course';


const Courses = () => {
    const courses=useLoadData("courses.json")
    
    return (
        <div className="container mt-3" id="courses">
           <h2 className="text-center">Our Member Passes</h2>
           <div className="card-deck">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {courses.map(course=> <Course key={course.id} course={course}></Course>)}
            </div>
           </div>
        </div>
    );
};

export default Courses;