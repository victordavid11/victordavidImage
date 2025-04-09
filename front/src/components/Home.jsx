import React from 'react'
import AB from "../assets/about/About.jpg"
import About from './About';



const Home = () => {
  return (
    <>
      <div className="pt-28  overflow-hidden h-screen">
        <div className="overflow-hidden flex justify-center  items-center aling-center  ">
          <img className="w-56 " src={AB} alt="About Me" />
        </div>
        <div>
          <h1 className=" overflow-hidden  text-[13vw] font-thin  tracking-wide uppercase w-full text-center lg:mt-20 mt-40 ">
            VICTOR DAVID
          </h1>
        </div>
      </div>
     
    </>
  );
}

export default Home