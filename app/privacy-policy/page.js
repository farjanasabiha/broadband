import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import Privacy from "../Components/privacy-policy/Privacy";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Asian Network"}
        header={"Privacy Policy"}
        desc={
          "Please read our privacy policy. If you have queries? Contact Us."
        }
      />
      <div className="space-y-24">
        {/* First block (only title + description) */}
        <Privacy
          title="Broadband Internet Service Privacy Policy"
          des="Asian Network is committed to protecting the privacy of its Broadband Internet service customers. Users should review this privacy policy to better understand Asian Network’s views and practices, and how they pertain to them as customers of Asian Network’s web service."
        />

        <Privacy
          title="What types of information does the Asian Network collect?"
          des="Asian Network may collect two types of information: personal information and non-personal information. “Personal information” refers to information that is particular to you, such as your name, address, phone number, fax number, and e-mail address. “Non-personal information” refers to information that does not by itself identify a specific individual. This information may include the Asian Network site’s Uniform Resource Locator (“URL”) that you just came from, what browser you are using and your Internet Protocol (“IP”) address."
        />

        {/*  title + description + multiple subsections */}
        <Privacy
          title="How do we collect information from you?"
          des="Asian Network does not collect personal information on this site without your knowledge and active participation. In general, you can visit our site without divulging any personal information; however, there are areas of this site that might require personal information in order to contact Twin Lakes directly, specifically, when registering e-mails, obtaining remote access, and contacting online technical support."
          sections={[
            {
              title: "Browsing our site",
              des: "Asian Network may collect IP addresses for the purposes of system administration, to gather broad demographic information, and to monitor the level of activity on our site. Asian Network may collect information from visitors to our site regarding the referring URL, your IP address, which browser you used to come to our site, the pages of our site that you viewed during your visit, and any search terms entered on our site.",
            },
            {
              title: "Cookies",
              des: "“Cookies” are small pieces of information that are stored by your browser on your computer hard drive. Our cookies do not contain any personally identifying information. Your web browser may allow you to be notified when you are receiving a cookie, giving you the choice to accept it or not. While you can still navigate through our site if you do not accept cookies, you may not be able to register for e-mails or obtain remote access from Asian Network.",
            },
            {
              title: "E-mail",
              des: "As noted above, on this Asian Network site, you are given the opportunity to send an e-mail to us. Asian Network retains the information in any e-mail that you send to us, such as your name, e-mail address, address, telephone number, etc. Asian Network may periodically send you e-mails or other company information. Asian Network will not send you e-mails if you have previously requested us not to do so and/or have not registered to receive them.",
            },
          ]}
        />
        <Privacy
          title="How is your personal information used?"
          des="Asian Network uses your information in connection with delivering its products and services to you. More importantly, Asian Network wants to deliver a compelling online experience that will keep customers coming back to visit the service again and again. Asian Network uses the information supplied to it as a means to personalize portions of the service. Some of these personalized services are made available directly by Asian Network, while others may be offered by its content partners. In addition, Asian Network analyzes and evaluates customer preferences, comments, and criticisms of its offerings in order to make improvements to the present and future versions of the service."
          sections={[
            {
              title: "",
              des: "Asian Network uses the personal information it collects to provide you with information or samples that you have requested. In addition, we use the non-personal information we collect to provide you with a better site experience in the future. Asian Network does not rent, sell or trade your private information to any non-affiliated third party.",
            },
          ]}
        />

        <Privacy
          title="How does Asian Network protect your personal information?"
          des="Asian Network takes reasonable precautions to protect your personal information against unauthorized access by storing the information on a secure server, which is accessible only by authorized personnel."
          sections={[
            {
              title: "",
              des: "Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure and we will not be held liable should a third party illegally obtain your personal information. While we have made significant efforts to protect your personal information, we cannot ensure or warrant the security of any information you transmit to us, and you do so at your own risk.",
            },
            {
              title: "",
              des: "Asian Network takes special care to protect the safety and privacy of young people using its services. The Asian Network site does not knowingly collect information about children and the majority of its site is not specifically directed to children. Asian Network believes that children should get their parents’ consent before giving out any personal information. Asian Network encourages parents and legal guardians to participate in their child’s experience on its website. Children should always ask a parent for permission before sending personal information to Asian Network, or to anyone on the Internet.",
            },
          ]}
        />

        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default page;
