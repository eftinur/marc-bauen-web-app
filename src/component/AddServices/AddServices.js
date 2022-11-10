import React from "react";
import { Link } from "react-router-dom";

const AddServices = () => {
  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const brief = form.brief.value;
    const price = form.price.value;

    const newService = {
      title: title,
      image: image,
      brief: brief,
      price: price,
    };

    console.log(newService);

    // fetch("http://localhost:5000/allservices", {
    //     method: 'POST',
    //     headers: {
    //        'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(newService)
    // })
    // .then(res => res.json()
    // .then(data => {
    //     console.log(data)
    // }))

    
    fetch("http://localhost:5000/allservices", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newService),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err))

  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col w-2/4 lg:w-1/4">
        <div className="text-center">
          <h1 className="text-5xl font-bold register-title text-center">
            Add new Service
          </h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleAddServices} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Service title"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Enter service photo URL"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Brief Detail</span>
              </label>
              <input
                name="brief"
                type="text"
                placeholder="Enter service detail"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input
                name="price"
                type="number"
                placeholder="Enter service price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn common-btn">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
