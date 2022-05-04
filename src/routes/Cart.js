/* eslint-disable */
import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
function Cart(props) {
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
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.quan}</td>
              <td>{data.quan * data.price}</td>
              <td>
                <Button
                  variant="light"
                  onClick={() => {
                    props.dispatch({ type: "Decrement", payload: i });
                  }}
                >
                  -
                </Button>{" "}
                <Button
                  variant="light"
                  onClick={() => {
                    props.dispatch({ type: "Increment", payload: i });
                  }}
                >
                  +
                </Button>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state,
  };
}

export default connect(mapStateToProps)(Cart);
