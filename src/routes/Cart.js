/* eslint-disable */
import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { stockContext } from "../components/StockContext";
import { useContext, useEffect, useState } from "react";

function Cart(props) {
  let [disable, setDisable] = useState("");
  let [stock, setStock] = useContext(stockContext);
  let defaultStock = [10, 10, 10, 10, 10, 10, 10, 10, 10];

  useEffect(
    (i) => {
      if (stock[i] >= defaultStock[i]) {
        setDisable("disabled");
      }
    },
    [stock]
  );
  return (
    <div>
      {console.log(stock)}
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
                  variant={"light " + disable}
                  onClick={() => {
                    let copyStock = [...stock];
                    copyStock[data.id]--;
                    setStock(copyStock);
                    props.dispatch({
                      type: "Increment",
                      payload: i,
                      payload2: defaultStock[data.id],
                    });
                  }}
                >
                  +
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
