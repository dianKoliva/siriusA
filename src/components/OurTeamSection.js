import React from 'react';
import Slider from 'react-slick';
import back from "../images/background-image.jpg"
import pretty from "../images/pre.png"
import ruth from "../images/ru.png"
import rania from "../images/rania.png"
import walid from "../images/walid.png"
import paccy from "../images/paccy.png"

const teamMembers = [
  { name: 'Ruth Sebsibe', description: 'Distinguished by commitment to delivering exceptional projects, this individual brings forth a potent blend of energy, creativity, and expertise. As an observant and productive team member, she possesses robust interpersonal skills and an adaptable problem-solving approach. Her leadership style is characterized by effective communication,integrity, and commitment to achieving results.', image: ruth },
  { name: 'Paccifique Uwineza', description: 'A serene, brave, and fervent individual devoted to tackling Africa\'s unemployment crisis. I firmly believe in the transformative influence of positive change and am steadfastly on a mission to establish opportunities for all. Prioritizing practical solutions, my aim is to effect a significant impact and contribute to a more promising future for the continent  ', image: paccy},
  { name: 'Diane Pretty', description: 'Ever cheerful and eager to accommodate others, she infuses the team with a lively atmosphere, and her wit is unmatched. As the tech lead, she oversees software development and UI design responsibilities within the team. Pretty\'s presence on the team has led to substantial transformations, contributing significantly to decision-making processes and the overall growth of the team.', image: pretty},
  { name: 'Walid Hirwa', description: 'Ever cheerful and eager to accommodate others, she infuses the team with a lively atmosphere, and her wit is unmatched. As the tech lead, she oversees software development and UI design responsibilities within the team. Pretty\'s presence on the team has led to substantial transformations, contributing significantly to decision-making processes and the overall growth of the team.', image: walid },
  { name: 'Rania Irakabaho', description: 'Lorie embodies a vibrant optimism, consistently offering robust support to her teammates and actively seeking their input. Her commitment to fostering a harmonious atmosphere within the think tank is evident through her regular check-ins with colleagues, ensuring their needs are met. Lorie diligently cultivates a team environment characterized by a spirited, motivated energy ', image: rania },

  
];

const OurTeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section id="team" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10  px-8 text-center ">Our Team</h2>
        {/* Carousel for team members */}
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className=" px-8 mb-4 text-center flex-none w-full md:w-1/2 lg:w-1/3">
              <div className="p-4  h-[24em] bg-white rounded-lg shadow-md">
                <img src={member.image} alt={member.name} className="rounded-full w-28 h-28 mx-auto mb-4" />
                <p className="text-lg font-bold text-[#F5AB12]">{member.name}</p>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurTeamSection;
