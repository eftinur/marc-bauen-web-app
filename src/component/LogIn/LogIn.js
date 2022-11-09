import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col  lg:w-1/4">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold register-title">Login here</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
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
                  <span>Already have an account? <Link to='/register' className="login-btn">register</Link></span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary common-btn">Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;