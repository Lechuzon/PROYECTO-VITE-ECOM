import React, {useState} from "react";
import BreadCrumb from "../../components/BreadCrumb/index";
import Meta from "../../components/Meta/index";
import ReactStarts from "react-rating-stars-component";
import ProductCard from "../../components/ProductCard";
import Color from "../../components/Color/index";
import Container from "../../components/Container"

function OurStore() {
  const [grid,setGrid] = useState(4);
  
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Mostrar por categorias</h3>
                <div>
                  <ul className="ps-0">
                    <li>Reloj</li>
                    <li>Tv</li>
                    <li>Cámara</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filtrar por</h3>
                <div>
                  <h5 className="sub-title">Disponibilidad</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        En Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Sin Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Precio</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control"
                        id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">Desde</label>
                    </div>
                    <div className="form-floating">
                      <input type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To" />
                      <label htmlFor="floatingInput1">Hasta</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colores</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Tamaño</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Etiquetas</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Audífono
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Móvil
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Cableado
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Productos Random</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Audífonos multicolor para niños estudiantes
                      </h5>
                      <ReactStarts
                        count={5}
                        size={24}
                        value={4}
                        edit="false"
                        activeColor="#ffd700"
                      />
                      <b>S/ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Audífonos multicolor para niños estudiantes
                      </h5>
                      <ReactStarts
                        count={5}
                        size={24}
                        value={4}
                        edit="false"
                        activeColor="#ffd700"
                      />
                      <b>S/ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between        align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{width: "100px"}}>Mostrar por:</p>
                    <select name="" defaultValue={"DEFAULT"} className="form-control form-select" id="">
                      <option disabled value="DEFAULT"></option>
                      <option value="manual">Más relevantes</option>
                      <option value="best-selling" selected="selected">
                        Más vendidos
                      </option>
                      <option value="title-ascending">Alfabeticamente,A-Z
                      </option>
                      <option value="title-descending">Alfabeticamente, Z-A
                      </option>
                      <option value="price-ascending">Precio, menor a mayor</option>
                      <option value="price-descending">Price, mayor a menor</option>
                      <option value="created-ascending">Fecha, más antiguos
                      </option>
                      <option value="created-descending">Fecha, más recientes
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Productos</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={()=>{setGrid(3);}} src="./src/images/gr4.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={()=>{setGrid(4);}} src="./src/images/gr3.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={()=>{setGrid(6);}} src="./src/images/gr2.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={()=>{setGrid(12);}} src="./src/images/gr.svg" className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default OurStore;