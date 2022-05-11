/* eslint-disable */
import { useEffect, useState, useContext } from "react";
import { Nav, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import noImage from "../img/noImage.png";
import { stockContext } from "../components/StockContext";
import "./Detail.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import View from "../components/View";
import { orderItem } from "../redux/slice/cartSlice";

function Detail(props) {
  let navigate = useNavigate();
  let [stock, setStock] = useContext(stockContext);
  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(0);
    }, 5000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  let [tab, setTab] = useState(0);
  let [end, setEnd] = useState("");
  let [visible, setVisible] = useState(1);
  let { id } = useParams();
  let [order, setOrder] = useState(1);
  let [minusAlert, minusSetAlert] = useState(false);
  let [plusAlert, plusSetAlert] = useState(false);
  let [disable, setDisable] = useState("");

  let shoes = props.shoes.find((o) => {
    return o.id == id;
  });
  useEffect(() => {
    setEnd("end");
  }, []);

  useEffect(() => {
    if (stock[shoes.id] > 0) setDisable([]);
    else setDisable("disabled");
  }, [stock]);

  let [view, setView] = useState();

  let store;
  let found;
  useEffect(() => {
    if (localStorage.getItem("viewed") != null) {
      store = JSON.parse(localStorage.getItem("viewed"));
      setView([...store]);
      found = store.find((a) => {
        return a.id == shoes.id;
      });
      if (!found) {
        store.push(shoes);
        setView([...store]);
        console.log(view);
        localStorage.setItem("viewed", JSON.stringify(store));
      }
    } else {
      setView([shoes]);
      localStorage.setItem("viewed", JSON.stringify([shoes]));
    }
  }, []);

  let dispatch = useDispatch();

  return (
    <div className="row">
      <div className={"column left container start " + end}>
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
            <h4 className="pt-5">{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
            {stock[shoes.id] > 0 ? (
              <p>{stock[shoes.id]} left in stock</p>
            ) : (
              <p className="alert alert-danger mx-5">Out of Stock</p>
            )}
            {minusAlert ? (
              <div class="alert alert-warning" role="alert">
                Minimum order quantity is 1
              </div>
            ) : null}
            {plusAlert ? (
              <div class="alert alert-warning" role="alert">
                Maximum order quantity is {stock[shoes.id]}
              </div>
            ) : null}
            <Button
              variant="dark"
              onClick={() => {
                plusSetAlert(false);

                if (stock[shoes.id] > 0) {
                  if (order > 1) {
                    setOrder(order - 1);
                  } else {
                    minusSetAlert(true);
                  }
                }
              }}
            >
              -
            </Button>{" "}
            {order}{" "}
            <Button
              variant="dark"
              onClick={() => {
                minusSetAlert(false);
                if (stock[shoes.id] > 0) {
                  if (order < stock[shoes.id]) {
                    setOrder(order + 1);
                  } else {
                    plusSetAlert(true);
                  }
                }
              }}
            >
              +
            </Button>
            &nbsp; &nbsp;
            <button
              className={"btn btn-danger " + disable}
              onClick={() => {
                let copyStock = [...stock];
                if (copyStock[shoes.id] > 0) {
                  copyStock[shoes.id] = copyStock[shoes.id] - order;
                  setStock(copyStock);
                } else {
                }
                dispatch(
                  orderItem({
                    id: shoes.id,
                    name: shoes.title,
                    quan: order,
                    price: shoes.price,
                    stock: stock[shoes.id] - order,
                  })
                );
                navigate("/cart");
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
      <div className="column right">
        <h5>Recently viewed</h5>
        {view
          ? view.map((data, i) => {
              return <View key={i} view={data} i={i}></View>;
            })
          : null}
      </div>
    </div>
  );
}

function TabContent(props) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [props.tab]);

  return (
    <div className={`start ${fade}`}>
      {
        [<div>Not ready</div>, <div>Not ready</div>, <div>Not ready</div>][
          props.tab
        ]
      }
    </div>
  );
}

export default Detail;
