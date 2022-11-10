import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext/UserContext";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./ServiceDetails.css";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  // order API
  // fetch(`http://localhost:5000/reviews?email=${user?.email}`)

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const text = form.text.value;

    const review = {
      name: name,
      photo: user?.photoURL,
      email: user?.email,
      service: service._id,
      serviceName: service.title,
      reviewText: text,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const notify = () => toast('Review added successfully')

  return (
    <div className="ser-main min-h-screen">
      <Toaster></Toaster>
      <div className="w-3/4 mx-auto my-16">
        <h3>{service.title}</h3>
        <div className="service-photo w-full shadow-2xl">
          <img src={service.image} alt="" />
        </div>
        <div className="service-details mt-9">
          <p>{service.brief}</p>
          <h5>$ {service.price}</h5>
          <Link to="/" className="btn common-btn">
            Hire now
          </Link>
        </div>
      </div>

      <div className="review-main w-2/4 mx-auto">
      
        {user?.email ? (
          <>
              <form
            onSubmit={handleReviews}
            className="card-body w-full shadow-2xl bg-base-100"
          >
            <h2 className="text-center">Write a review</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <label className="label mt-6">
              <span className="label-text">Write a review</span>
            </label>
            <textarea
              name="text"
              className="textarea textarea-bordered "
            ></textarea>
            <div className="form-control mt-6 mx-auto">
              <button onClick={notify} className="btn common-btn w-fit">post</button>
            </div>
          </form>
            <div className="mt-12">
              <h2 className="text-center">See reviews</h2>
              {reviews.map((review) => (
                <ReviewDetails key={review._id} review={review}></ReviewDetails>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center  py-16">
            <h2 className="text-center">Please Login to add a review</h2>
            <Link to='/login' className="btn common-btn">Log in</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
