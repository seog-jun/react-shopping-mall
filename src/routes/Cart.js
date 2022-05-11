/* eslint-disable */
import React from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { stockContext } from "../components/StockContext";
import { useContext } from "react";
import { increment, decrement, remove } from "../redux/slice/cartSlice";
import { close } from "../redux/slice/alertSlice";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

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
        {state.cart.map((data, i) => {
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
                    dispatch(
                      decrement({ i: i, dStock: defaultStock[data.id] })
                    );
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
                      dispatch(
                        increment({ i: i, dStock: defaultStock[data.id] })
                      );
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
                    dispatch(remove(i));
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
      {state.alert ? (
        <div className="alert alert-warning mx-3">
          <p>Get 20% discount now!</p>
          <button
            onClick={() => {
              dispatch(close());
            }}
          >
            close
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
