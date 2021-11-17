import MySwal from "../Components/Swal";
import "../App.css";

const ErrorComponent = ({ error }) => {
  console.log("hello");
  return MySwal.fire(
    "Uh oh... There's a problem. Try refreshing the app.",
    error.message,
    "error"
  );
};

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        <div class="loader"></div>
      </h1>
    </div>
  );
}

const FullPageSpinner = () => {
  return (
    <div className="fullPage">
      <div id="loader"></div>
    </div>
  );
};

export { ErrorComponent, Spinner, FullPageSpinner };
