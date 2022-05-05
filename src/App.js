/* eslint-disable */
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Main from "./routes/Main";
import NotFound from "./routes/NotFound";
import { stockContext } from "../src/components/StockContext";
import Cart from "./routes/Cart";
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
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <stockContext.Provider value={[stock, setStock]}>
        <Routes>
          <Route
            path="/"
            element={<Main shoes={shoes} setShoes={setShoes} />}
          />

          <Route
            path="/detail/:id"
            element={<Detail shoes={shoes} stock={stock} setStock={setStock} />}
          />

          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/event" element={<EventPage></EventPage>}>
            <Route
              path="one"
              element={<p>Get one free with the first order</p>}
            />
            <Route path="two" element={<p>Get a birthday coupon</p>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </stockContext.Provider>
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
