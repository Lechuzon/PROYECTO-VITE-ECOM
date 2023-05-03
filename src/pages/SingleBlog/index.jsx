import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import blog from "../../../src/images/blog-1.jpg";
import Container from "../../components/Container"

const SingleBlog = () => {
  return (
   <>
    <Meta title={"Blog de Mall Tech Store"} />
    <BreadCrumb title="Blog de Mall Tech Store" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                           <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center gap-10">
                                    <HiOutlineArrowLeft className="fs-4 "/>Volver a Blogs
                                </Link>
                                <h3 className='title'>
                                Cuidado con el malware que se hace pasar por inteligencia artificial, alerta Meta
                                </h3>
                                <img src={blog} className="img-fluid w-100 my-4" alt="blog"/>
                                <p>
                                En abril, los analistas de seguridad del gigante de las redes sociales encontraron software malicioso que se hacía pasar por ChatGPT o herramientas de IA similares, dijo el director de seguridad de la información de Meta.
                                </p>
                           </div>
                        </div>
                    </div>
            </Container>
   </>
  )
}

export default SingleBlog