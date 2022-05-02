import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(0);
    }, 5000);
    console.log(2);

    return () => {
      console.log(1);
      clearTimeout(a);
    };
  }, []);

  let [visible, setVisible] = useState(1);
  let { id } = useParams();
  let shoes = props.shoes.find((o) => {
    return o.id == id;
  });

  return (
    <div className="container">
      {visible ? (
        <div className="alert alert-warning">
          Get a discount within 5 seconds!
        </div>
      ) : null}
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
          <input></input>
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          <button className="btn btn-danger">Order</button>
        </div>
      </div>
    </div>
  );
}
