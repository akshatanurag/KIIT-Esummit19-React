import { Link } from "react-router-dom";
const AuthNav = () => {
  return (
    <nav
      id="navbar-main"
      className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../assets/img/icons/icon.png" />
          <h2 style={{ color: "white" }}>E-Summit'19</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse navbar-custom-collapse collapse"
          id="navbar-collapse"
        >
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="dashboard.html">
                  <img src="../assets/img/brand/blue.png" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <hr className="d-lg-none" />
          <ul className="navbar-nav align-items-lg-center ml-lg-auto">
            <li className="nav-item">
              <Link className="nav-link nav-link-icon" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-icon" to="/signup">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-icon" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
