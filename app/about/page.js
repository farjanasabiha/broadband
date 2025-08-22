import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import OurMission from "../Components/About/OurMission";
import Timeline from "../Components/About/Timeline";
import AboutTab from "../Components/About/AboutTab";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import CommonHeader from "../Components/Common/CommonHeader";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <div className="space-y-24">
        <CommonHeader
          title={"Asian Network"}
          header={"About Us"}
          desc={
            "Currently, we are serving high-speed internet solutions to over 3000+ active users.Know our vision, mission, working process, and other stuff.That will help you to know about the best high-speed broadband internet service provider in Tongi, Gazipur, Dhaka."
          }
        />
        <OurMission
          title={"Our Mission"}
          desc={`To revolutionize the digital landscape of Bangladesh by providing the
          fastest, most reliable, and affordable internet service, empowering
          communities, businesses, and individuals to thrive in an increasingly
          connected world. We are dedicated to delivering unmatched customer
          experiences through innovative technology, seamless service, and a
          commitment to excellence in every interaction.`}
          img={
            "https://asiannetworkbd.net/wp-content/uploads/2024/07/asian-network-mission-1024x638.jpg"
          }
        />
        <OurMission
          title={"Our Vision"}
          desc={`Asian Network’s vision is to connect people with happiness. It aspires to become Bangladesh’s leading digital enabler, transforming how people connect, work, and live. The goal is to bridge the digital divide, ensuring that access to cutting-edge technology is available to every corner of the country.`}
          img={
            "https://asiannetworkbd.net/wp-content/uploads/2024/07/asian-network-vission-1024x576.jpg"
          }
        />
        <OurMission
          title={"Our Goal"}
          desc={`To drive national growth by connecting communities, enabling businesses to flourish, and making internet access a fundamental right, not a luxury. Asian Network aims to provide seamless, affordable, and reliable services that positively impact the lives of millions.`}
          img={
            "https://asiannetworkbd.net/wp-content/uploads/2024/11/our-goal-asian-network-1024x620.jpg"
          }
        />
        <Timeline />
        <AboutTab />
        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default page;
