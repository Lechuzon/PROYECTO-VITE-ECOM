import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Abril, 2023</p>
          <h5 className="title">Un hermoso inicio de domingo por la mañana.</h5>
          <p className="desc">
            lorem ipsum dolor sit amet, consectetur adipis occ occurence velit
            sed diam nonumy euismod. Lore merat, consectetur adipis
          </p>
          <Link to="/blog/:id" className="button">
            Leer más
          </Link>
        </div>
      </div>
    
  );
};

export default BlogCard;
