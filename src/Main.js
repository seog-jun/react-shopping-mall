export default function Main(props) {
  return (
    <>
      <div
        className="main-bg"
        // style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div className="Container">
        <div className="row">
          {props.shoes.map((data, i) => {
            return <Card shoes={data} i={i + 1}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
