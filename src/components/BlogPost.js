import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, description, image,link }) => {
  return (
    <div className="flex items-center mb-8  px-24">
        <div className='w-1/5'>
        <img src={image} alt={title} className=" w-36 h-36 rounded-full mr-4" />
        </div>
      
      <div className='w-4/5 '>
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
        <div className='py-1'>
        <Link className='text-[#F5AB12] hover:underline ' target={"_blank"} to={link}>Read more</Link>
        </div>
       
        <div className="border-b border-gray-300 mt-2"></div>
      </div>
    </div>
  );
}

export default BlogPost;
