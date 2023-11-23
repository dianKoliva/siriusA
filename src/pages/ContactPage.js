import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const ContactPage = () => {
  return (
    <div className=' font-libre overflow-x-hidden '>
        <Navigation/>
 <div className="container mx-auto flex">

           <ContactInfo />
      <ContactForm />
  
    </div>
    <Footer/>
    </div>
   
  );
}

export default ContactPage;
