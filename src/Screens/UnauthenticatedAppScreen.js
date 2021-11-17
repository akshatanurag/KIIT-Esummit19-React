import * as React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

const UnauthenticatedAppScreen = ({ formSubmitHandler, form }) => {
  return (
    <div className="bg-default">
      <AuthNav />
      <div className="main-content">
        <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-white"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary border-0 mb-0">
                <div className="card-header bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon">
                        <img src="../assets/img/icons/common/github.svg" />
                      </span>
                      <span className="btn-inner--text">Github</span>
                    </a>
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon">
                        <img src="../assets/img/icons/common/google.svg" />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={(e) => formSubmitHandler(e, form)}>
                    {form === "register" ? (
                      <div className="form-group mb-3">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-single-02"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Full Name"
                            type="text"
                            id="fullName"
                          />
                        </div>
                      </div>
                    ) : null}
                    <div className="form-group mb-3">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          id="password"
                        />
                      </div>
                    </div>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      {/* <label
                        className="custom-control-label"
                        for=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label> */}
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary my-4">
                        {form === "register" ? "Sign Up" : "Sign In"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <Link to="reset-password" className="text-light">
                    <small>Forgot password?</small>
                  </Link>
                </div>
                <div className="col-6 text-right">
                  {form === "register" ? (
                    <Link to="/login" className="text-light">
                      <small>Login Here</small>
                    </Link>
                  ) : (
                    <Link to="/signup" className="text-light">
                      <small>Create new account</small>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UnauthenticatedAppScreen };
