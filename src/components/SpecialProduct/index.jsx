import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Samsung</h5>
            <h6 className="title">
              Samsung Galaxy Note10 256GB
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit="false"
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">S/.100</span> &nbsp; <strike>S/.200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b> dias
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Productos: 5</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <Link className="button">Añadir al carrito</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
