import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Userlogin = () => {
  return (
    <div className="userlogin">
      <div className="container w-75">
        <div className="row mt-3 pt-3">
          <div
            className=" col bg-image w-100 p-5 text-center shadow-1-strong rounded mb-5 text-white"
            style={{
              backgroundImage:
                "url(" +
                "https://mdbootstrap.com/img/Photos/Others/images/76.jpg" +
                ")",
            }}
          >
            <h1 className="display-4">Welcome back Writer</h1>
          </div>
        </div>
        <div className="row bg-light justify-content-center text-center">
          <div className="col p-3  ">
            <Link className="nav-link h3 text-dark " to="/signin">
              Sign In
            </Link>
          </div>
          <div className="col p-3  ">
            <Link className="nav-link h3 text-dark" to="/userlogin">
              Log In
            </Link>
          </div>
        </div>
        <div className="row bg-light">
          <div className="col mb-5 text-center">
            <h1 className="h3 py-5">Login with email</h1>
            <form className="my-3">
              <div className=" w-50 ms-auto me-auto mb-4">
                <label htmlfor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="w-50 ms-auto me-auto mb-4">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
