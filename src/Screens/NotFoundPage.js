import * as React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

const NotFoundPage = ({ home = "/login" }) => {
  return (
    <div className="bg-default">
      {/* <AuthNav /> */}
      <div className="main-content">
        <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                  <img src="../error.png" alt="404" height="300" />
                  <br />
                  <br />
                  <h1 className="text-white">404 Not Found!</h1>
                  <p className="text-lead text-white">
                    Opps! The page you are looking for does not exist. Go &nbsp;
                    <Link
                      to={home}
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Home
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NotFoundPage };
