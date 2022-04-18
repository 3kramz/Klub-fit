import React from 'react';

const Banner = () => {
    return (
        <>
            <h4 className="text-center fs-1 text-primary">Welcome To <span className="text-black-50 fw-bold">Klub Fit</span></h4>
            <p className="text-center fs-4">Learn Yoga, fitness & meditation for diseases to get cured and also earn money independently for sure.<span className="text-black-50 fw-bold">Klub Fit</span> Institute Facilitates Mental Health, Physical Health, Beauty Care And Also Certified Courses With Qualified And Experienced Trainers & Teachers.</p>
            <div className="d-flex flex-column flex-md-row mt-5">
          
                <div className='p-3'>
                    <img className="w-100 d-block rounded" src="https://img.freepik.com/free-photo/close-up-female-hands-unrolling-yoga-matress_1163-5427.jpg?t=st=1650182220~exp=1650182820~hmac=5557e6d9f96ec86c6e51ce7cc92462fa1a994cad258e8ae9e264530192b31fd6&w=740" alt="" />
                </div>
             
                <div className="text-black-50 p-3">
                    <h4>Full Rejuvenation</h4>
                    <p>Restorative yoga poses focuses your attention to your breath. The breath slows down the nervous system, allowing you to manage stress and emotions with more patience and clarity.</p>
                    <h3>Extension of Spring</h3>
                    <p>As an adult, it can help with managing moods and stress, improve self-confidence, increase concentration, increase physical skills like reaction time, endurance, and hand-eye coordination.</p>
                    <h4>Against Aging</h4>
                    <p>Through yoga, one learns to manage stress by not letting outside influences disturb internal peace.</p>
                </div>
            </div>
            
        </>
    );
};

export default Banner;