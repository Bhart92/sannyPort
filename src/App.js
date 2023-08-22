import Container from "react-bootstrap/Container";
import Router from "./router/Router";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <header className="App-header">
            <NavBar />
          </header>
          <Container>
            <Router />
          </Container>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
