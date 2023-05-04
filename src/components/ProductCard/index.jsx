import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../../images/prodcompare.svg";
import wish from "../../images/wish.svg";
import wishlist from "../../images/wishlist.svg";
import watch from "../../images/watch.jpg";
import reloj from "../../images/watch.jpg";
import addcart from "../../images/view.svg";
import view from "../../images/view.svg";

const ProductCard= (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={reloj} className="img-fluid" width={270} alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Huawei</h6>
            <h5 className="product-title">
              Reloj Huawei Fit Pantalla vívida AMOLED de 1.64"
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolamet consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </p>
            <p className="price">S/.99.90</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product imag" />
            <img src={reloj} className="img-fluid" width={270} alt="product imag" />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <h5 className="product-title">
            Reloj Smart SW2 para teléfonos Android
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolamet consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </p>
            <p className="price">S/.89.90</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>

  );
}

export default ProductCard;
