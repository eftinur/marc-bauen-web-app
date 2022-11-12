import React, { useContext } from "react";
import './Registration.css';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/UserContext/UserContext";
import useTitle from "../../Hooks/useTitle";

const Registration = () => {
  useTitle('Register');
  const { registerUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      handleUpdateUserProfile(name, photo);
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleUpdateUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo
    }
    updateUserProfile(profile)
    .then( () => {

    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col sm:w-3/4 md:w-2/4 lg:w-1/4 xl:w-2/4">
          <div className="text-center">
            <h1 className="text-5xl font-bold register-title text-center">Register here</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
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
                  name="password"
                  type="password"
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
            </form>
          </div>
        </div>
      </div>
  );
};

export default Registration;
