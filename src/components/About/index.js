import React from 'react';
import { Icon } from '@iconify/react';

function About() {
  return (
    <div className='mb-auto'>

    <div className='grid grid-cols-1 mb-12 pb-12'>
        <div className='ml-9 font-bold'>I'm</div>
        <div className='ml-9 mb-5 text-4xl font-extrabold' id='text-shadow'>Cassandra.</div>
        <div className='mb-1 mx-9 text-center' id='overlay-text'>Full-Stack Web Developer & UI Designer<span id='overlay-title'></span></div>
        <div className='mx-7 pb-5 text-right'>I have a passion for creating bold, intuitive, and responsive user interfaces.</div>
        <div className='flex justify-end mx-7'>
        <Icon className='mr-3' icon="akar-icons:github-fill" color="black" height="40" />
        <Icon icon="akar-icons:linkedin-box-fill" color="black" height="40" />
        </div>
        
    </div>
    </div>
  );
}

export default About;