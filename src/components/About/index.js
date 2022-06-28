import React from 'react';
import { Icon } from '@iconify/react';

function About() {
  return (
    <div className='mb-auto'>

    <div className="max-w-lg mx-auto py-6 px-4 sm:px-6 lg:px-8">

        <div className='font-bold'>I'm</div>
        <div className='mb-5 text-5xl font-extrabold' id='text-shadow'>Cassandra.</div>

        <div className='flex flex-wrap justify-end'>
        <div className='mb-1 text-center max-w-sm' id='overlay-text'>Full-Stack Web Developer & UI Designer<span id='overlay-title'></span></div>
        <div className='pb-5 text-right max-w-sm' id='sm-blur'>I have a passion for creating bold,<br></br> intuitive, and responsive user interfaces.</div>
        </div>
        
        <div className='flex justify-end'>
        <Icon className='mr-3' icon="akar-icons:github-fill" color="black" height="40" />
        <Icon icon="akar-icons:linkedin-box-fill" color="black" height="40" />
        </div>
        
    </div>
    </div>
  );
}

export default About;