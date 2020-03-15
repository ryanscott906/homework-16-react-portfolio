import React, { Component } from 'react';
import profilepic from '../../assets/ryan_picture.png';
import Social from '../Social';

export default function Home() {
        return (
            <div>
            <img src={profilepic} className="profilepic" alt='ryan_picture'></img>
            <h1>Hello and thanks for viewing this page! My name is Ryan Scott and 
                as you can easily tell there's a lot more I have to learn about 
                React and coding in general. The bright side is that I'm slightly better
                than when I first got into all of this a few months ago.
            </h1>
            <Social />
            </div>
            )
        }
    
    
   