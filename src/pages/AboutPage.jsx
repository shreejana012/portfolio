import MyImage from "../assets/photo.jpeg";
import MyResume from "../assets/shrijana-poudel-resume.pdf";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <h1>Shrijana Poudel</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={MyImage} alt="Shrijana" height={"100px"} width={"100px"} />
          <div style={{ marginTop: "20px" }}>
            <a href={MyResume} className="btn btn-primary" download >Download Resume</a>
          </div>
        </div>
        <p>Hi 👋🏻, I'm Shrijana, a Software Developer with 6 years of experience working in the computer software industry. 👩‍💻 I’m a dedicated individual who effectively contributes to company success and works well within a team.
          <br />
          <br />
          I’m experienced in
          <br />
          - Ruby on Rails - 6 years<br />
          - ReactJS - 6 years<br />
          - VueJS- 1 year
          <br />
          <br />
          Some things I love (outside of work)
          <br />
          - Pizza 🍕 <br />
          - Cats 🐈 <br />
        </p>

        <div class="skills">
          <h2>Professional Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="card">C++</div>
            <div className="card">C#</div>
            <div className="card">JavaScript (JS)</div>
            <div className="card">Node.js</div>
            <div className="card">React</div>
            <div className="card">Ruby</div>
            <div className="card">Git</div>
          </div>
        </div>
        <div className="tools">
          <h2>Tools I Use</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="card">macOS</div>
            <div className="card">Visual Studio</div>
            <div className="card">Slack</div>
            <div className="card">Jira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;