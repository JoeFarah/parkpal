import React from 'react';

import './ContactStyles.css'


const Contact = () => {

    return (
        <div className='contact-container'>
            <h1 className='contact-title'>Contact details</h1>
            <p className='contact-paragraph'>
            Feel free to get in touch with us about any matter – we promise we won't bite! 
            Your questions and feedback are important to us, and we're here to assist you 
            every step of the way.
            </p>
            <br />
            <h2 className='contact-subtitle'>Email:</h2>
            <p className='contact-paragraph'>
                park-pal@outlook.com
            </p>
            <br />
            <h2 className='contact-subtitle'>Phone:</h2>
            <p className='contact-paragraph'>
                +44 7444 816 550
            </p>
            <br />
            <h2 className='contact-subtitle'>Correspondance address:</h2>
            <p className='contact-paragraph'>
                56 Cameron Square, CR4 3SH, Mitcham
            </p>
            <br />
            <h2 className='contact-subtitle'>Response policy:</h2>
            <p className='contact-paragraph'>
                We at Park Pal will aim to limit any response time to a maximum of 5 working days although 
                usually we respond on the same day. We pride ourselves on being a small interpersonal business
                where customers will know our representatives by name.
            </p>
        </div>
    );
    };

export default Contact;