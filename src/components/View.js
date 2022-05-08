/* eslint-disable */
export default function View(props) {
  return (
    <div>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.view.id + 1) +
          ".jpg"
        }
        width="150"
        height="150"
      />
      <div>{props.view.title}</div>
      <br></br>
    </div>
  );
}
