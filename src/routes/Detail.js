/* eslint-disable */
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import noImage from "../img/noImage.png";

export default function Detail(props) {
  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(0);
    }, 5000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {});
  let [tab, setTab] = useState(0);
  let [val, setVal] = useState("");
  let [visible, setVisible] = useState(1);
  let { id } = useParams();
  let shoes = props.shoes.find((o) => {
    return o.id == id;
  });

  return (
    <div className="container">
      {visible ? (
        <div className="alert alert-warning">
          Get a discount within 5 seconds!
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (shoes.id + 1) +
              ".jpg"
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = noImage;
            }}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          {/* <input
            type="text"
            pattern="[0-9]*"
            value={val}
            onChange={(e) =>
              setVal((v) => (e.target.validity.valid ? e.target.value : v ))
            }
          /> */}
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          {props.stock[shoes.id] > 0 ? (
            <p>{props.stock[shoes.id]} left in stock</p>
          ) : (
            <p className="alert alert-danger mx-5">Out of Stock</p>
          )}

          <button
            className="btn btn-danger"
            onClick={() => {
              let copyStock = [...props.stock];
              if (copyStock[shoes.id] > 0) {
                copyStock[shoes.id] = copyStock[shoes.id] - 1;
                props.setStock(copyStock);
              } else {
              }
            }}
          >
            Order
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            Product Information
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            Q & A
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            Reviews
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent(props) {
  if (props.tab == 0) {
    return <div></div>;
  } else if (props.tab == 1) {
    return <div></div>;
  } else if (props.tab == 2) {
    return <div></div>;
  }
}
