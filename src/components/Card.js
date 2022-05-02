/* eslint-disable */
import { useNavigate } from "react-router-dom";
import noImage from "../img/noImage.png";
export default function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          navigate("/detail/" + props.shoes.id + "");
        }}
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
