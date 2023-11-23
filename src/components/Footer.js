import React from 'react';

const Footer = () => {
  return (
    <footer className=" mt-auto mb-0  pt-8 font-libre w-full ">
      <div className="container text-white mx-auto w-screen  bg-black flex flex-col md:flex-row">
        {/* Three parallel text sections */}
        <div className="mb-4 w-1/3 md:mb-0 md:mr-4 p-10">
          <h4 className="text-2xl font-bold mb-2 text-[#F5AB12]">About</h4>
          <p>Empowering Ethiopian women in the jewelry industry by fostering economic independence, celebrating cultural heritage, and advancing gender equality. Through skill development, access to resources, and sustainable practices, we support these women as skilled artisans and more ...</p>
        </div>
        <div className="mb-4 w-1/3 md:mb-0 md:mr-4 p-10">
          <h4 className="text-2xl font-bold mb-2 text-[#F5AB12]">Elab</h4>
          <p>Are you interested in the Elab Challenges we worked on? Explore our list of Elab Challenges that we worked on like the help lab and more ..</p>
        </div>
        <div className="mb-4 w-1/3 md:mb-0 md:mr-4 p-10">
          <h4 className="text-2xl font-bold mb-2 text-[#F5AB12]">Contact Us</h4>
          <p>Kigali, Bumbogo</p>
          <p className='mt-2'>siriusa@gmail.com</p>
          <p className='mt-2'>+250-999-878-878</p>
        </div>
       
      </div>

      {/* Social media icons and copyright section */}
      <div className="mt-8 px-8 pb-4 text-black flex items-center justify-between ">
        
        <div className="flex space-x-4 mr-12">
          {/* Navigation links with animated underline */}
          <a href="#home" className="nav-link mr-6">Home</a>
          <a href="#about" className="nav-link mr-6 ">About</a>
          <a href="#articles" className="nav-link mr-6">Articles</a>
          <a href="#contact" className="nav-link mr-6">Contact</a>
          {/* Add other links as needed */}
        </div>
      
        {/* Social media icons */}
        <div>
          <a href="#" className="text-black hover:text-gray-400 mr-4"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-black hover:text-gray-400 mr-4"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-black hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        </div>
        {/* Copyright information */}
        <p className="text-sm">&copy; 2023 Sirius A. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
