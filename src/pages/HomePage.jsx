import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DesktopLogo from "../assets/desk.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const HomePage = () => {

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <header className="hero-section">
          <div style={{ flex: 1 }}>
            <h1>Shrijana Poudel</h1>
            <h2>Software Developer</h2>
            <p>Aspiring to create impactful software solutions, I am committed to continuous learning and collaboration. I strive to deliver high-quality projects that drive progress and innovation.</p>
            <Link to="/about" className="btn btn-primary">About Me</Link>
          </div>
          <div>
            <img src={DesktopLogo} />
          </div>
        </header>

        <section className="hero-section">
          <div>
            <h1>Find me on</h1>
            <div className="hero-section-1">
              <p>Feel free to conect with me</p>
              <a href="https://www.linkedin.com/in/shrijana" target="_blank"><FaLinkedin size={30} /></a>
              <a href="https://twitter.com/shrijnapoudel" target="_blank"><FaSquareTwitter size={30} /></a>
              <a href="https://shreejana012.github.io/" target="_blank"><CgWebsite size={30} /></a>
              <a href="https://github.com/shreejana012" target="_blank"><FaGithub size={30} /></a>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default HomePage;