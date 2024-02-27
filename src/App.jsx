import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      
      <Row className="text-bg-secondary">
        <Col className="  px-0 m-5">
          <Header />
        </Col>
        <Col className="  px-0 m-5">
          <Navigation />
        </Col>
      </Row>

      <Row>
        <Outlet />
      </Row>
     
      <Row>
        <Footer />
      </Row>

    </Container>
  );
}

export default App;
