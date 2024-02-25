import Header from "./components/header";
import Footer from "./components/Footer"
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container fluid >
      <Header />
      <Footer />
    </Container>
  );
}

export default App;
