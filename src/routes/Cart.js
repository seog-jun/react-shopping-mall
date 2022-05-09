/* eslint-disable */
import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { stockContext } from "../components/StockContext";
import { useContext } from "react";

function Cart(props) {
  let [stock, setStock] = useContext(stockContext);
  let defaultStock = [10, 10, 10, 10, 10, 10, 10, 10, 10];

  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        {props.cart.map((data, i) => {
          return (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.quan}</td>
              <td>{data.quan * data.price}</td>
              <td>
                <Button
                  variant="light"
                  onClick={() => {
                    let copyStock = [...stock];
                    copyStock[data.id]++;
                    setStock(copyStock);
                    props.dispatch({
                      type: "Decrement",
                      payload: i,
                      payload2: defaultStock[data.id],
                    });
                  }}
                >
                  -
                </Button>{" "}
                <Button
                  variant="light"
                  onClick={() => {
                    let copyStock = [...stock];
                    if (copyStock[data.id] > 0) {
                      copyStock[data.id]--;
                      setStock(copyStock);
                      props.dispatch({
                        type: "Increment",
                        payload: i,
                        payload2: defaultStock[data.id],
                      });
                    }
                  }}
                >
                  +
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    props.dispatch({
                      type: "Remove",
                      payload: i,
                    });
                    let copyStock = [...stock];
                    copyStock[data.id] = defaultStock[data.id];
                    setStock(copyStock);
                  }}
                >
                  Remove
                </Button>
              </td>
            </tr>
          );
        })}
      </Table>
      {props.alert ? (
        <div className="alert alert-warning mx-3">
          <p>Get 20% discount now!</p>
          <button
            onClick={() => {
              props.dispatch({ type: "Close" });
            }}
          >
            close
          </button>
        </div>
      ) : null}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    alert: state.alertReducer,
  };
}

export default connect(mapStateToProps)(Cart);
