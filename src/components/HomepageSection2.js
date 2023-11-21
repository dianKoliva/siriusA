import React from 'react';
import back from "../images/col.jpg"
import { Link } from 'react-router-dom';


const HomepageSection2 = () => {
  return (
    <section id="about" className=" text-black py-16">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2 pr-8 ml-20 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className='mt-2'>Empowering Ethiopian women in the jewelry industry by fostering economic independence, celebrating cultural heritage, and advancing gender equality. Through skill development, access to resources, and sustainable practices, we support these women as skilled artisans and entrepreneurs. We aim to showcase their unique creations globally, contributing to a thriving and inclusive industry that reflects the richness of Ethiopian culture.</p>
        <Link to="/about">
        <button className=' focus:outline-none py-2 mt-8 rounded-md px-12 bg-[#F5AB12]'>Find more</button>
        </Link>
        
      </div>
      <div className="w-1/2 flex  justify-center pr-10">
        {/* Small images collage */}
        <img src={back} alt="Image 1" className=" rounded-md w-4/5 p-2" />
      </div>
    </div>
  </section>
  );
}

export default HomepageSection2;
