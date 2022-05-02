/* eslint-disable */
import Card from "../components/Card";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main(props) {
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

  let [loading, setLoading] = useState(0);
  let [count, setCount] = useState(2);

  // useEffect(() => {
  //   {

  //   }
  // }, [loading]);
  return (
    <>
      <div
        className="main-bg"
        // style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
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
            setLoading(1);
            console.log(loading);
            axios
              .get("https://codingapple1.github.io/shop/data" + count + ".json")
              .then((result) => {
                let newShoes = result.data;
                let copyShoes = [...props.shoes];
                let updatedShoes = copyShoes.concat(newShoes);
                props.setShoes(updatedShoes);
                setCount(count + 1);
                setLoading(0);
                console.log(loading);
              })
              .catch((error) => {
                console.log(error);
                setLoading(0);
                console.log(loading);
              });
          }}
        >
          {count == 4 ? setVisible(false) : null}
          More
        </Button>
      ) : null}
      {loading ? (
        <h1>
          loading...........................................................
        </h1>
      ) : null}
    </>
  );
}
