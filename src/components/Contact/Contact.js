import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData,  [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_i53a8ma',
            'contact_form',
            e.target, 
            'iEkjdFpKGdDq1t9C0'
        )
        .then((result) => {
            console.log('Success!', result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log('Failed...', error.text);
            alert('Message failed to send.');
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    
    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <form id="contact-form" onSubmit={ handleSubmit }>
                <input
                    type='text'
                    name='name'
                    placeholder='First Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                
                <textarea 
                    name='message'
                    placeholder='What would you like to talk about?'
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Send!</button>
            </form>
        </div>
    );
}

export default Contact