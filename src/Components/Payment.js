import { client } from "../utils/api-client";
import * as React from "react";
import { useLocation } from "react-router-dom";
import MySwal from "./Swal";
import { useAuth } from "../Context/auth-context";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Payment = ({ profile, setDisplay }) => {
  const {
    user: { token },
    setStepInfo,
  } = useAuth();

  let query = useQuery();
  const paymentID = query.get("payment_id");
  const paymentStatus = query.get("payment_status");
  const paymentRequestId = query.get("payment_request_id");

  React.useEffect(() => {
    setStepInfo({
      progress: 25,
      breadCrumb: "Complete Payment",
    });
    if (paymentID && paymentStatus && paymentRequestId) {
      setDisplay("loading");

      client(
        `thankyou?payment_id=${paymentID}&payment_status=${paymentStatus}&payment_request_id=${paymentRequestId}`,
        { token }
      )
        .then(({ data }) =>
          MySwal.fire("Success", data.message, "success").then(() => {
            setStepInfo({
              progress: 100,
              breadCrumb: "Scan QR Code",
            });
            setDisplay("qr");
          })
        )
        .catch((e) => MySwal.fire("Failure", e.message, "error"));
    }
  });

  const handlePayment = () => {
    setDisplay("loading");
    client("pay", { token }).then(({ data }) => {
      setStepInfo({
        progress: 50,
        breadCrumb: "Complete Payment",
      });
      window.location.assign(data.lognurl);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="card" style={{ width: "18rem" }}>
        <img
          class="card-img-top"
          src="../../assets/img/theme/img-1-1000x600.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Pay For E-Summit 2019</h5>
          <p class="card-text">
            &#8377;{profile?.uni === "kiit university" ? "850" : "1050"}/-
          </p>
          <button class="btn btn-primary" onClick={() => handlePayment()}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
