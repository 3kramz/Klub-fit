import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

import { toast, ToastContainer } from 'react-toastify';


const CheckOut = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    
   
    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
   
        toast(`Hello ${name}, Thank you for Purchesing our course. we will email and text your ${email} and ${phone}`);
    }

    return (

        <div className='container w-50 mx-auto'>
          
            <h2 className='text-primary text-center mt-2'>Please give your info</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control ref={phoneRef} type="text" placeholder="Enter Phone" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control type="text" placeholder="Enter Address" required />
                </Form.Group>

              

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
           
        
           
            <ToastContainer/>
        </div>
    );
};



export default CheckOut;