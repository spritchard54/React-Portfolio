import "../styles/portfolioStyle.css";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WFD from "../assets/WFD.png";
import oSpace from "../assets/ourspace.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Container fluid>
        <Row>
          <Col>
            <a
              target="blank"
              href="https://nguyent0275.github.io/whats-for-dinner/"
            >
              <img className="mx-auto d-block" src={WFD} />
            </a>
          </Col>
          <Col>
            <a
              target="blank"
              href="https://our--space-1c334f1f25f8.herokuapp.com/"
            >
              <img className="mx-auto d-block" src={oSpace} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
