import { useNavigate } from "react-router-dom";

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
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
