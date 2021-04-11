import React from 'react';
import SocialConnect from '../UI/SocialConnect'
import './style.css'
import Card from '../UI/Card'

const Contact = () => {
    return (
        <div className= 'container' >
            <Card className= ' m-auto'>
                <p className='text-center mtb-10'>Have any project in mind? {''}
                <span className='primaryColor'>Say hello At</span></p>
                <p className='text-center font-25 '>rifqiluthfi05@gmail.com</p>
            </Card>
        </div>
    );
}

export default Contact;
