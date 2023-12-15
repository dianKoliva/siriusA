import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import col2 from "../images/col2.jpg"


const AboutPage = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Navigation/>
    <div id="about" className=" font-libre  py-16">
      <div className="container mx-auto text-center p-4 px-20">
        <h2 className="text-4xl font-bold  ">Who are we</h2>
        <p className='mt-4 text-[#676666] leading-8 '>We empower Ethiopian women in the jewelry industry by fostering economic independence, celebrating cultural heritage, and advancing gender equality. Through skill development, access to resources, and sustainable practices, we support these women as skilled artisans and entrepreneurs. We aim to showcase their unique creations globally, contributing to a thriving and inclusive industry that reflects the richness of Ethiopian culture.</p>
      </div>
      <div className="container mx-auto mt-8 text-center p-4 px-20">
        <h2 className="text-4xl font-bold ">Problem Statement</h2>
        <p className='mt-4 text-[#676666] leading-8'>According to the World Bank, the labor force participation rate among Ethiopian females is 75 percent and males are 86.2 percent as of 2022. Ethiopian Labor Force Survey data (2005), showed that female workers earned 66% of male hourly wages, especially in Arts, design, and culture. Downstream activities such as crafting, designing, and creating jewelry, will result in economic diversification, inclusiveness, and the integration of SMEs into global value chains. Even though many women entrepreneurs and artisans in Ethiopia's jewelry sector, they face considerable obstacles such as inadequate market access, a lack of acknowledgment of their cultural contributions, and unequal economic prospects that prevent them from being fully economically empowered and participating. How can women be given the resources to become financially secure and promote Ethiopian jewelry worldwide?

</p>
      </div>
      <div className="container mx-auto mt-8 text-center px-20">
        <h2 className="text-4xl font-bold  ">Our Mission</h2>
        <p className='mt-4 text-[#676666] leading-8'>Our mission is to champion economic independence, honor cultural heritage, and promote gender equality by empowering women in the African handmade jewelry industry as both skilled artisans and successful business owners.</p>
      </div>
      {/* <div className=''>
        <p className=' pl-28  text-4xl  text-center px-20 font-bold mt-8'>
          Our Prototype 
        </p>
     


      </div> */}
    </div>
    <Footer/>
    </div>
  );
}

export default AboutPage;
