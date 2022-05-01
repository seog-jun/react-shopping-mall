import { useParams } from "react-router-dom";

export default function Detail(props) {
  let { id } = useParams();

  let shoes = props.shoes.find((o) => {
    return o.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (shoes.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          <button className="btn btn-danger">Order</button>
        </div>
      </div>
    </div>
  );
}
