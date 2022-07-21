import React from "react";
import HelloWorld from '../assets/images/hello-world-img.png'
import Layout from "../components/Layout";

const Portfolio = () => {
  return (
    <Layout>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 md:pt-5">Portfolio <span className="font-normal text-xl md:text-2xl lg:text-3xl">&</span> Technologies</div>
      {/* breaks into 2 columns at large screensize */}
      <div className="flex justify-center w-full mt-5 lg:grid lg:grid-cols-2">
        <div className="max-w-xl px-5 py-2 mx-5" id="portfolio-box">
          <div className="font-semibold w-full mb-2">Project: Hello World</div>
          <a href="https://ut-hello-world.herokuapp.com/"><img src={HelloWorld} alt='hello world project'/></a>
          <div className="mt-2 font-semibold">Created Using:</div>
          <div className="flex">
            <ul className="font-normal text-lg px-5">
              <li>React</li>
              <li>Tailwind</li>
              <li>Apollo Client</li>
            </ul>
            <ul className="font-normal text-lg">
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </div>
      </div>
      {/* can add next project here */}
      </div>
    </Layout>
  );
}

export default Portfolio;