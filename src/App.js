import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail.js";
import Main from "./Main";
function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoesMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">Home </Link>
      <Link to="/detail">Detail</Link> */}

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
