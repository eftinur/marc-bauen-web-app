import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const LogIn = () => {
  const { logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    logIn(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col  lg:w-1/4">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold register-title">Login here</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name='email'
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
                    name='password'
                    type="password"
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
              </form>
            </div>
          </div>
        </div>
    );
};

export default LogIn;