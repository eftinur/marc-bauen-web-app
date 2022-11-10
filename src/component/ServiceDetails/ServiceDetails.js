import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext/UserContext";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

//   review API called

const [reviews, setReviews] = useState();
useEffect( () => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setReviews(data);
        console.log(data);
    })
}, [user?.email])

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
    }
    console.log(review)

    fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div className="ser-main min-h-screen">
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
        <div>
          <form onSubmit={handleReviews} className="card-body w-full shadow-2xl bg-base-100">
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
              <button className="btn common-btn w-fit">post</button>
            </div>
          </form>
        </div>

        <div className="my-6">
            <h2 className="text-center">See reviews</h2>

            <span>{reviews.length}</span>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceDetails;
