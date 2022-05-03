/* eslint-disable */
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Main from "./routes/Main";
import NotFound from "./routes/NotFound";

function App() {
  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 10, 10, 10, 10, 10, 10, 10, 10]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoesMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes} stock={stock} setStock={setStock} />}
        />

        <Route path="/event" element={<EventPage></EventPage>}>
          <Route
            path="one"
            element={<p>Get one free with the first order</p>}
          />
          <Route path="two" element={<p>Get a birthday coupon</p>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4> Events Today </h4>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
