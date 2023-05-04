import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin, BsFacebook, BsYoutube, BsInstagram} from "react-icons/bs";
import newsletter from "../../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Regístrese para recibir el email</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Tu direccion de correo electronico"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Suscribir
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contactenos</h4>
              <div>
                <address className="text-white fs-6">
                  Wilson Plaza Av.Bolivia 180 - Cercado
                  <br /> Lima, Perú <br />
                  Codigo Pin: 234107
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +51 926495434
                </a>
                <a
                  href="mail:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  malltechstore@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className=" fs-5"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-5"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsFacebook className="fs-5"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-5"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Información</h4>
              <div className="footer-link d-flex flex-column ">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Politica de privacidad</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Politica de reembolso</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Politica de envios</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Terminos & Condiciones</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Cuenta</h4>
              <div className="footer-link d-flex flex-column ">
                <Link className="text-white py-2 mb-1">Buscar</Link>
                <Link className="text-white py-2 mb-1">Acerca de nosotros</Link>
                <Link className="text-white py-2 mb-1">Preguntas frecuentes</Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
                {/* <Link className="text-white py-2 mb-1">Cuadro de Tallas</Link> */}
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Enlaces rápidos</h4>
              <div className="footer-link d-flex flex-column ">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Auriculares</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Relojes Smart</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Desarrollado por Mall Tech Store
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
