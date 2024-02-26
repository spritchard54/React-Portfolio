import "../styles/aboutStyle.css";
import profile from  "../assets/IMG_6552.jpeg";

export default function About() {
    return (
      <div>
        <h1>About Page</h1>
        <img src={profile}/>
        <p>
          My name is a Steve, and I&apos;m a technology professional. My focus at the moment is on web development, but I have an extensive background in Organizational Change Management after working for seven years at Deloitte Consulting, and two-plus years experience working in MarTech with a focus on Web Experimentation.
          <br></br>
          <br></br>
          As of March 2024, I will have completed a 6-month Full Stack Web Development Bootcamp. The bootcamp has provided me with the skills to develop this website. Skills include, but are not limited to:
          <br></br>
          <br></br>
          <ul className="about">
            <li className="about">
              HTML
            </li>
            <li className="about">
              CSS
            </li>
            <li className="about">
              JavaScript
            </li>
            <li className="about">
              Node.js
            </li>
            <li className="about">
              MVC
            </li>
            <li className="about">
              React
            </li>
            <li className="about">
              SQL & Mongo.db
            </li>

          </ul>
        </p>
      </div>
    );
  }