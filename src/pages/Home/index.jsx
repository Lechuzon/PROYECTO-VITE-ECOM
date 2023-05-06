import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../../components/ProductCard";
import SpecialProduct from "../../components/SpecialProduct";
import Container from "../../components/Container";
import { services } from "../../utils/Data";
function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6" id="img-home-1">
            <div className="main-banner position-relative">
              <img
                src="images/ipad.jpg"
                className="img-fluid rounded-3 "
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCARGADO PARA PROS.</h4>
                <h5>iPad S13 + Pro.</h5>
                <p>Desde S/. 999.00 o S/.41.99/mes</p>
                <Link className="button">COMPRE AHORA</Link>
              </div>
            </div>
          </div>
          <div className="col-6" id="img-home-2">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3 "
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Más vendido</h4>
                  <h5>Laptop HP</h5>
                  <p>
                    Desde S/. 2999.00 <br /> o S/.41.99/mes.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3 "
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>RECIEN LLEGADO</h4>
                  <h5>Compre Watch Air</h5>
                  <p>
                  Desde S/. 99.00 <br /> o S/.4.99/mes.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3 "
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>RECIEN LLEGADO</h4>
                  <h5>Compre IPad Air</h5>
                  <p>
                  Desde S/. 399.00 <br /> o S/.41.99/mes.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3 "
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>RECIEN LLEGADO</h4>
                  <h5>Headphones Gamer</h5>
                  <p>
                  Desde S/. 199.00 <br /> o S/.24.99/mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container  class1="home-wrapper-2 py-5">
        <div className="row" id="barra-home">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between" id="barra">
              {
                services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12" id="barra2">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camarahome1.webp" alt="camera" width="55%" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tvled.png" alt="camera" width="55%" />
              </div>
              <div className="d-flex gap align-items-center" >
                <div className="item1">
                  <h6>Relojes</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/relojbarra.png" alt="camera" width="55%"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Musica & Juegos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/audifono3.png" alt="camera" width="40%" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camarahome1.webp" alt="camera" width="55%" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tvled.png" alt="camera" width="55%" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Relojes</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/relojbarra.png" alt="camera" width="55%"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div className="item1">
                  <h6>Musica & Juegos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/audifono3.png" alt="camera" width="40%" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Colección destacada</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row" id="barra3">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/banner-1.jpg"
                className="famous-img img-fluid"
                alt="banner"
              />
              <div className="famous-content position-absolute">
                <h5>Pantalla grande</h5>
                <div className="photo1">
                  <h6>Smart Watch Series</h6>
                  <p>Desde S/.399 o S/.16.62/mes. por 24 meses.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/Banner-2.jpeg"
                className="famous-img img-fluid"
                alt="banner"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <div className="photo">
                  <h6 className="text-dark">600 nits de brillo.</h6>
                  <p className="text-dark">Pantalla Retina 5K de 27 pulgadas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/Banner-3.jpeg"
                className="famous-img img-fluid"
                alt="banner"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Smartphones</h5>
                <div className="photo">
                  <h6 className="text-dark">Smartphone 14 pro</h6>
                  <p className="text-dark">
                  Ahora en Verde. Desde S/.999.00 o S/.41.62/mes. por 24 meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/Banner-4.jpeg"
                className="famous-img img-fluid"
                alt="banner"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Parlantes</h5>
                <div className="photo">
                <h6 className="text-dark">Sonido que llena la habitación.</h6>
                <p className="text-dark">
                  Desde S/.699 o S/.116.58/mes. por 12 meses.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Productos Especiales</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nuestros productos populares</h3>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="../../images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nuestros últimos blogs</h3>
          </div>

        </div>
      </Container>

    </>
  );
};

export default Home;
