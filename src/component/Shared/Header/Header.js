import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then({

    })
    .catch(error => {
      console.log(error);
    })
  }   

  return (
    <div className="navbar w-3/4 p-6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <div className="logo text-center">
            <p>
              {" "}
              MARC <br /> <span>BAUEN</span>{" "}
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {
          user ?
          <>
          <li>
            <Link to="/myreviews">My reviews</Link>
          </li>
          <li>
            <Link to="/addservices">Add services</Link>
          </li>
          <p className="text-xs">{user?.email}</p>
          <Link onClick={handleLogOut} className="btn common-btn ml-4">Log out</Link>
          </>
          :
          <Link to='/login' className="btn common-btn ml-4">Log in</Link>
        }
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
