import React from 'react';
import BlogPost from '../components/BlogPost';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import mtn from "../images/mtn.jpg"
import col from "../images/col2.jpg"
import help from "../images/drink.png"
const blogPosts = [
  {
    title: 'Help lab',
    description: 'Breast Cancer Awareness: Our focus was on educating students about the nature of breast cancer, preventive measures, and recognizing its symptoms. Additionally, we offered words of encouragement to those bravely battling cancer.',
    link:"https://youtu.be/5d-MRvPPaC8?si=S7cbdqy4UrbuCvFs",
    image: mtn,
  },
  {
    title: 'Hunt for treasure',
    description: 'MTN: Through interviews with MTN agents, we gained insights into their work dynamics and income generation. Our research revealed that various factors, including working hours, the documentation system from Irembo, salary, and inflation, significantly impact their earnings.',
    link:"https://youtu.be/E6iRpb9jJWI?si=_ZKHx1iruBaiiAXg",
    image: help,
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navigation></Navigation>
    <div className="container mx-auto py-8 font-libre ">
      <div className='px-28 mb-16'>
      <h1 className="text-4xl font-bold  pt-10 ">Elab Challenges</h1>
      <div className='w-10  mt-4  rounded-sm  bg-[#CCCCCC] h-1 '>
      </div>
      </div>
      

      <div>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} description={post.description} image={post.image} link={post.link} />
        ))}
      </div>
      <div className='px-24'>
      <h1 className="text-4xl font-bold pl-4 mb-10 pt-10  text-center text-[#F5AB12] "> Our Gallery</h1>
   
        <img src={col}/>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default BlogPage;
