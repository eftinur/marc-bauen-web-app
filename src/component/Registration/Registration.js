import React from "react";
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/4 lg:w-1/4">
          <div className="text-center">
            <h1 className="text-5xl font-bold register-title text-center">Register here</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="login-toggle">
                <span>Already have an account? <Link to='/login' className="login-btn">Log in</Link></span>
              </div>
              <div className="form-control mt-6">
                <button className="btn common-btn">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
