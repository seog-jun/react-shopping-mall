import Card from "../components/Card";
import { DropdownButton, Dropdown } from "react-bootstrap";
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
    </>
  );
}
