import Navbar from "../components/Navbar";
import { FaCode } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaChalkboardUser } from "react-icons/fa6";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="services-page">
        <h1>Services I Offer</h1>
        <div className="services-container">
          <div className="service">
            <FaCode size={70} />
            <h2>General Programming</h2>
            <p>With a strong background in multiple programming languages including JavaScript, TypeScript, Ruby, C++, and Java, I offer versatile programming solutions.</p>
          </div>

          <div className="service">
            <IoLogoWebComponent size={70} />
            <h2>Full-Stack Web Development</h2>
            <p>Experienced in both front-end and back-end technologies, I can develop robust web applications tailored to your business needs.</p>
            {/* <img src="/path-to-full-stack-web-development-image.jpg" alt="Full-Stack Web Development" /> */}
          </div>

          <div className="service">
            <FaMobileScreenButton size={70} />
            <h2>Mobile App Development</h2>
            <p>Utilizing React Native and modern frameworks, I create seamless and responsive mobile applications for both Android and iOS platforms.</p>
            {/* <img src="/path-to-mobile-app-development-image.jpg" alt="Mobile App Development" /> */}
          </div>

          <div className="service">
            <FaChalkboardUser size={70} />
            <h2>Mentorship and Training</h2>
            <p>As an experienced mentor, I provide guidance and training to aspiring developers, helping them achieve success in their projects and careers.</p>
            {/* <img src="/path-to-mentorship-image.jpg" alt="Mentorship and Training" /> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesPage;
