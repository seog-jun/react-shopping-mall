export default function Detail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">Name</h4>
          <p>Description</p>
          <p>$120</p>
          <button className="btn btn-danger">Order</button>
        </div>
      </div>
    </div>
  );
}
