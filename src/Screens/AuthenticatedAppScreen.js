import Footer from "./Footer";
import { ProfileEditForm } from "../Components/ProfileEditFrom";
import SideNav from "./SideNav";
import Breadcrumb from "./BreadCrumb";
import { logout } from "../utils/auth-provider";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent, FullPageSpinner } from "../utils/lib";
import * as React from "react";
import ProgressBar from "./ProgressBar";
import { useAuth } from "../Context/auth-context";

const ScreenAuthenticatedApp = ({ ComponentToRender }) => {
  const {
    user: { userDetails: user },
  } = useAuth();
  return (
    <>
      <SideNav />
      <div className="main-content" id="panel">
        {/* TOP NAVBAR */}
        <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-center  ml-md-auto ">
                <li className="nav-item d-xl-none">
                  <div
                    className="pr-3 sidenav-toggler sidenav-toggler-dark"
                    data-action="sidenav-pin"
                    data-target="#sidenav-main"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                    </div>
                  </div>
                </li>
                <li className="nav-item d-sm-none">
                  <a
                    className="nav-link"
                    href="#"
                    data-action="search-show"
                    data-target="#navbar-search-main"
                  >
                    <i className="ni ni-zoom-split-in"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pr-0"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="media align-items-center">
                      {/* <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="../assets/img/theme/team-4.jpg"
                        />
                      </span> */}
                      <div className="media-body  ml-2  d-none d-lg-block">
                        <span className="mb-0 text-sm  font-weight-bold">
                          {user?.email}
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu  dropdown-menu-right ">
                    <div className="dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome!</h6>
                    </div>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-single-02"></i>
                      <span>My profile</span>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-settings-gear-65"></i>
                      <span>Settings</span>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-calendar-grid-58"></i>
                      <span>Activity</span>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-support-16"></i>
                      <span>Support</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <span
                      href="#!"
                      className="dropdown-item"
                      onClick={() => logout()}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="ni ni-user-run"></i>
                      <span>Logout</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* MAIN CONTENT  */}
        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <ProgressBar />
              <div className="row align-items-center py-4">
                <Breadcrumb />
              </div>
              {/* STEP CARD */}
            </div>
          </div>
        </div>

        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header bg-transparent">
                  <div className="align-items-center">
                    <ErrorBoundary FallbackComponent={ErrorComponent}>
                      {ComponentToRender()}
                    </ErrorBoundary>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export { ScreenAuthenticatedApp };
