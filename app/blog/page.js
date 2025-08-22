import React from 'react';
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import Blog from '../Components/Blog/Blog';
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
const page = () => {
    return (
    <div className='space-y-24'>
      <TopBar />
      <Navbar />
      <Blog/>
      <Testimonial/>
      <CTA/>
      <FAQ/>
      <Footer />
    </div>
    );
};

export default page;