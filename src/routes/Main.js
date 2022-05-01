import Card from "../components/Card";

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
