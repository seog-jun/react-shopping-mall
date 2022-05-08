/* eslint-disable */
import Card from "../components/Card";
import { DropdownButton, Dropdown, Button, Image } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import loadingImg from "../img/loading.gif";
import React from "react";
import { connect } from "react-redux";
function Main(props) {
  function compareTitle(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function comparePrice(a, b) {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  }

  let [visible, setVisible] = useState(true);
  let [loading, setLoading] = useState(false);

  return (
    <>
      <div className="main-bg"></div>
      <DropdownButton
        id="dropdown-basic-button"
        title="Sort by: Featured"
        style={{ textAlign: "right", margin: 30 }}
      >
        <Dropdown.Item
          onClick={() => {
            let copyShoes = [...props.shoes];
            copyShoes.sort(compareTitle);
            props.setShoes(copyShoes);
          }}
        >
          Title:A to Z
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            let copyShoes = [...props.shoes];
            copyShoes.sort(compareTitle);
            copyShoes.reverse();
            props.setShoes(copyShoes);
          }}
        >
          Title:Z to A
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            let copyShoes = [...props.shoes];
            copyShoes.sort(comparePrice);
            props.setShoes(copyShoes);
          }}
        >
          Price:Low to High
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            let copyShoes = [...props.shoes];
            copyShoes.sort(comparePrice);
            copyShoes.reverse();
            props.setShoes(copyShoes);
          }}
        >
          Price:High to Low
        </Dropdown.Item>
      </DropdownButton>
      <div className="Container">
        <div className="row">
          {props.shoes.map((data, i) => {
            return <Card shoes={data} key={i}></Card>;
          })}
        </div>
      </div>
      {visible ? (
        <Button
          variant="secondary"
          onClick={() => {
            setLoading(true);
            axios
              .get(
                "https://codingapple1.github.io/shop/data" +
                  props.count +
                  ".json"
              )
              .then((result) => {
                let newShoes = result.data;
                let copyShoes = [...props.shoes];
                let updatedShoes = copyShoes.concat(newShoes);
                props.setShoes(updatedShoes);
                props.dispatch({ type: "CountUp" });

                setLoading(false);
              })
              .catch((error) => {
                setLoading(false);
              });
          }}
        >
          {props.count == 4 ? setVisible(false) : null}
          More
        </Button>
      ) : null}
      {loading ? <Image src={loadingImg} /> : null}
    </>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    alert: state.alertReducer,
    count: state.countReducer,
  };
}

export default connect(mapStateToProps)(Main);
