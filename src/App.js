import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        // style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div className="Container">
        <div className="row">
          {shoes.map((data, i) => {
            return <Card shoes={data} i={i + 1}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
