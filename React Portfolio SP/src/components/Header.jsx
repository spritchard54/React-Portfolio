// import { Container } from "react-bootstrap";
import "../styles/headerStyle.css";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
      <header className="header">
        <Row>
          <Col>
        <h1>Steve Pritchard</h1>
        </Col>
        <Col>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
          <li>Resume</li>
        </ul>
        </Col>
        </Row>
      </header>
  );
}

export default Header;
