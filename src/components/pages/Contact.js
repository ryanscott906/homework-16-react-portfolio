import React, { Component } from 'react';
import resume from '../../assets/Ryan_Scott_Resume.pdf';
import Social from '../Social';

export default function Contact() {
        return (
            <div className='contact'>
              <p className='heading'>Contact Info</p>
              <p className='entry'>Email: rmscott456@gmail.com<br/> 
                                   Phone: 512-658-7386<br/>
              <a href={resume}><u>Resume Link</u></a>
              </p>
              <Social />
            </div>   
        )
}
    
    
 