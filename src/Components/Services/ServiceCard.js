import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

export const ServiceCard = (props) => {
  const { title, img, description } = props;
  return (
    <>
      <div className="col-md-4 col-10  mx-auto mt-3 ">
        <div className="card ">
          <img src={img} class="card-img-top" alt={img} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to="" class="btn btn-warning">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
