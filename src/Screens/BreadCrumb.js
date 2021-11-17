import { useAuth } from "../Context/auth-context";

const Breadcrumb = () => {
  const {
    stepInfo: { breadCrumb },
  } = useAuth();

  // console.log(breadCrumb);

  return (
    <div className="col-lg-6 col-7">
      <h6 className="h2 text-white d-inline-block mb-0">Current Step</h6>
      <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
          {/* <li className="breadcrumb-item">
            <a href="#">
              <i className="ni ni-single-02 text-yellow"></i>
            </a>
          </li> */}
          <li className="breadcrumb-item">{breadCrumb}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
