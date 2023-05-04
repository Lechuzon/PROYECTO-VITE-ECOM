import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import Color from "../../components/Color";
import watch from "../../images/watch.jpg";
import Container from "../../components/Container";

const CompareProduct = () => {
  return (
    <>
         <Meta title={"Comparar Productos"} />
         <BreadCrumb title="Comparar Productos" />
         <Container className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Marca:</h5>
                                        <p>Casio</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tipo:</h5>
                                        <p>Reloj</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Disponibilidad:</h5>
                                        <p>En Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tamaño:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Marca:</h5>
                                        <p>Casio</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tipo:</h5>
                                        <p>Reloj</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Disponibilidad:</h5>
                                        <p>En Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tamaño:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </Container>
    </>
    
  );
};

export default CompareProduct;