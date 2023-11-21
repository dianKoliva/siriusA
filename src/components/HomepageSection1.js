import React from 'react';
import back from "../images/women.jpg"

const HomepageSection1 = () => {
  return (
    <section id="home" className="h-screen flex items-center relative">
      <img
        src={back}
        alt="Background"
        className="w-full h-full object-cover absolute z-0 grayscale"
      />
      <div className="container mx-auto text-center relative z-10">
      <h1 className="text-5xl font-bold mb-2 text-[#F5AB12] typing-animation">
 Women Of Almaz
    </h1>
        <p className="text-lg font-bold text-white">Empowering women through the beauty of African cultural jewelry.</p>
      </div>
    </section>
  );
}

export default HomepageSection1;
