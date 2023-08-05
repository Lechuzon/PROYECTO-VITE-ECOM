import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog1.jpeg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">6 Mayo, 2023</p>
          <h5 className="title">Google no funciona: el buscador está caído en varias partes del mundo</h5>
          <p className="desc">
          No, no es tu conexión a Internet. Google ha dejado de funcionar este viernes en varios países del mundo, incluido España. Los problemas parecen no ser exclusivos del buscador de Alphabet. Otros servicios del gigante de Mountain View, como la plataforma de vídeos YouTube, también están dando fallos.
          </p>
          <Link to="/blog/:id" className="button">
            Leer más
          </Link>
        </div>
      </div>
    
  );
};

export default BlogCard;
