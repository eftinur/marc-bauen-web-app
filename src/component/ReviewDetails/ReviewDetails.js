import React from "react";
import { Link } from "react-router-dom";
import "./ReviewDetails.css";

const ReviewDetails = ({ review }) => {
  return (
    <div className="review-main w-2/4 mx-auto shadow-2xl bg-base-100 my-6 text-center">
      <div className="reviewer my-4">
        <span>{review.name}</span>
        <div className="avatar mx-5">
          <div className="w-12 rounded">
            <img src={review.photo} alt="" />
          </div>
        </div>
      </div>
      <h5>{review.serviceName}</h5>
      <p className="mb-7">{review.reviewText}</p>
      <Link className="review-btn">Edit</Link>
      <Link className="review-btn ml-4">Delete</Link>
    </div>
  );
};

export default ReviewDetails;
