import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner">
        <div className="sidenav-header  align-items-center">
          <Link className="navbar-brand" to="#">
            <img
              src="../assets/img/icons/icon.png"
              className="navbar-brand-img"
              alt="..."
            />
            <h4 className="text-dark">E-Summit'19</h4>
          </Link>
        </div>
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  <i className="ni ni-tv-2 text-primary"></i>
                  <span className="nav-link-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="ni ni-single-02 text-yellow"></i>
                  <span className="nav-link-text">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ticket">
                  <i className="ni ni-badge text-orange"></i>
                  <span className="nav-link-text">Download Ticket</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reset-password">
                  <i className="ni ni-key-25 text-info"></i>
                  <span className="nav-link-text">Change Password</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nucleya">
                  <i className="ni ni-circle-08 text-pink"></i>
                  <span className="nav-link-text">Nucleya Registration</span>
                </Link>
              </li>
            </ul>
            <hr className="my-3" />
            <h6 className="navbar-heading p-0 text-muted">
              <span className="docs-normal">Links</span>
            </h6>
            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://ecell.org.in"
                  target="_blank"
                >
                  <i className="ni ni-spaceship"></i>
                  <span className="nav-link-text">KIIT E-Cell</span>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="ni ni-support-16"></i>
                  <span className="nav-link-text">Support</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active active-pro"
                  href="https://www.linkedin.com/in/akshatanurag/"
                  target="_blank"
                >
                  <i className="ni ni-atom text-blue"></i>
                  <span
                    className="nav-link-text"
                    style={{ textAlign: "center" }}
                  >
                    Made with{" "}
                    <i class="fas fa-heart" style={{ color: "red" }}></i>
                    <br />
                    Akshat Anurag
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
