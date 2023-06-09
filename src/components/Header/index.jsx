import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../../images/compare.svg";
import wishlist from "../../images/wishlist.svg";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import menu from "../../images/menu.svg";
import rayo from "../../assets/rayo.svg";
import bars from "../../images/icon-hamburger.svg"

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
              Envío gratis a partir de S/.100  y devoluciones gratis
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Cel:
                <a className="text-white" >
                  +51 953675245
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white"><img className="logo" src={rayo} /><div className="store"> Mall Tech Store</div> </Link>
              </h2>
            </div>
            <div className="col-5" id="buscador">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Busque productos aqui ... "
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5" id="menu">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Productos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                    Lista de <br />  deseos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log in <br /> Mi cuenta
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0"> S/.0.00</p>
                    </div>
                  </Link>
                </div>
                {/* <label for= "check" class="checkbtn"><i class="fas fa-bars"></i></label>
                <img src= {bars} /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/icon-hamburger.svg" id="hamburger" alt=""/><span className="me-5 d-inline-block"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/login" className="dropdown-item text-white">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/compare-product" className="dropdown-item text-white" >
                          Compare Productos
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist" className="dropdown-item text-white" >
                          Lista de deseos
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart" className="dropdown-item text-white" >
                          Carrito
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Nuestra tienda</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contactenos</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
