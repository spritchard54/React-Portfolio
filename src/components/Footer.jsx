import "../styles/footerStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gh from "../assets/github-24.png";
import linked from "../assets/linkedin-24.png";

function Footer() {
  return (
    <footer className="footer">
      &copy; Steve Pritchard 2024
      <a target="blank" href="https://github.com/spritchard54">
        <img className="footIMG" src={gh} />
      </a>
      <a target="blank" href="https://www.linkedin.com/in/swpritchard/">
      <img className="footIMG" src={linked} />
      </a>
    </footer>
  );
}

export default Footer;
