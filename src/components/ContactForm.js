import React from 'react';

const ContactForm = () => {
  return (
    <div className="md:w-1/2 p-4">
      {/* <h2 className="text-3xl font-bold mb-4 ">Contact Us</h2> */}
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className=" border-b-[1px] border-gray 700 w-96 focus:outline-none form-input" />
        </div>
        <div className="mb-4 mt-8">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="form-input focus:outline-none border-b-[1px] border-gray w-96" />
        </div>
        <div className="mb-4 mt-8">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <input type="text" id="name" name="name" className=" border-b-[1px] border-gray 700 w-96 focus:outline-none form-input" />
        </div>
        <button type="submit" className="bg-[#F5AB12] w-96 mt-8 focus:outline-none text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
