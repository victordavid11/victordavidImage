import React from "react";
import { NavLink } from "react-router-dom";
import HEAD from "../assets/cata-front/TRS_2676.jpg";
import FESTIVE from "../assets/cata-front/blaq.jpg";
import PORTRAIT from "../assets/cata-front/BIGG1750.jpg";
import LIFESTYLE from "../assets/cata-front/UXP_7771.jpg";


const Catalogue = () => {
  const categories = [
    { img: HEAD, title: "HEADSHOTS", to: "/catalogue" },
    { img: FESTIVE, title: "FESTIVE" },
    { img: LIFESTYLE, title: "LIFESTYLE" },
    { img: PORTRAIT, title: "PORTRAIT" },
  ];

  return (
    <div className=''>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-4 gap-4">
        {categories.map((category, index) => (
               <NavLink 
            to={category.to} 
            key={index} 
            className="relative block"
          >
          <div key={index} className="relative">
            <div className="relative">
              <img
                className="h-screen object-cover rounded-2xl"
                src={category.img}
                alt={category.title}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <h1 className="text-3xl font-bold text-white text-center  drop-shadow-md px-4 py-2 rounded-lg">
                  {category.title}
                </h1>
              </div>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
