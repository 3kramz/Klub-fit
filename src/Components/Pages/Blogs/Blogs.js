import React from 'react';
import './blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5'>

                <div className="d-flex border my-4 p-3"> 
                    <img className='img ' src="https://img.freepik.com/free-vector/qualification-increase-course-skills-improvement-coaching_335657-3310.jpg?t=st=1650272696~exp=1650273296~hmac=6c5f0b3656cdb5f10934285a10e6d8474c9331b0e465519db504d74ca4ed0b5e&w=740" alt="" />
                    
                    <div className="my-5">
                        <h4 className='text-center text-primary'>What is the  difference between Authorization and Authentication?</h4>
                        <p>Simply Authorization is a permission of access of another resource. It is the process of verifying what specific applications, files, and data a user has access to. It works through settings that are implemented and maintained by the organization. This organaization could e=be a third party. </p>
                        <p>On the other hand, Authentication is the process of varifying someoneto give an access to use thier resources. In this process it confirm your identity. If you are unknown you will deny autimatically. </p>
                    </div>


                    
                </div>
                <div className="d-flex border my-4 p-3"> 
                    
                <div className="my-5">
                        <h4 className='text-center text-primary'>Why are you using firebase? What other options do you have to implement authentication?</h4>

                        <p>Google firebase is apllication software baked by google for developers to easiar theis development work. It provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.
                      </p>

                        <p>It offers a robust feature set that focuses on three main pillars:
                        <li>Helping you to build apps faster</li>
                        <li>Releasing apps with confidence, performance, and stability</li>
                        <li>Increasing user engagement after releasing the app </li>
                        
                        </p>
                    </div>
                    <img className='img ' src="https://img.freepik.com/free-vector/data-management-collective-database-tower-people-share-commonplace-centralized-mainframe-widespread-info-stored-files-custom-regulation-vector-isolated-concept-metaphor-illustration_335657-2129.jpg?t=st=1650274789~exp=1650275389~hmac=6d74f76117096f635d41e0d60e45fb2ff3498eabe0f7e3ccda2707282c21fc56&w=740" alt="" />
                    
                   
                </div>
                <div className="d-flex border my-2 p-3"> 
                    <img className='img ' src="https://img.freepik.com/free-vector/data-scientist-data-analytics-manager-database-developer-administrator-working-big-data-job-database-developers-careers-big-data-concept_335657-1881.jpg?t=st=1650275693~exp=1650276293~hmac=5d4b6db430dc0e8f8d3b82e3958b54d777cc656554b6f9a5bcf2a64aadf19e42&w=740" alt="" />
                    
                    <div className="my-5 px-3">
                        <h4 className='text-center text-primary'>What other services does firebase provide other than authentication?</h4>

                       <p>There are many services which Firebase provides, Most useful of them are::
                            <li> Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>                 
                        </p>
                    </div>
                </div>
            
        </div>
    );
};

export default Blogs;