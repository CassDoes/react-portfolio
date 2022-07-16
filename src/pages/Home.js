import React from "react";
import Layout from "../components/Layout";
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <Layout>

<div className="flex h-screen items-center">

<div className="max-w-md md:max-w-xl sm:max-w-lg lg:max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

    <div className='font-bold text-xl md:text-2xl lg:text-3xl'>I'm</div>
    <div className='mb-5 text-5xl md:text-6xl lg:text-7xl font-extrabold' id='text-shadow'>Cassandra.</div>

    <div className='flex flex-wrap justify-end'>
    <div className='mb-1 text-center text-base sm:text-xl md:text-2xl lg:text-3xl max-w-sm md:max-w-lg lg:max-w-xl' id='overlay-text'>Full-Stack Web Developer & UI Designer<span id='overlay-title'></span></div>
    <div className='mb-5 py-1 text-right text-lg md:text-xl font-semibold max-w-sm md:max-w-lg lg:text-2xl' id='home-blur'>I have a passion for creating bold,<br></br> intuitive, and responsive user interfaces.</div>
    </div>
    
    <div className='flex justify-end'>
      <a href="https://github.com/CassDoes/hello-world" id="github"><Icon icon="akar-icons:github-fill" height="40" /></a>
      <a href="/" id="linkedin" className="ml-3"><Icon icon="akar-icons:linkedin-box-fill" height="40" /></a>
    </div>
    
</div>
</div>

    </Layout>
  )
}

export default Home;