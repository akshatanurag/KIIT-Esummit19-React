import QRCode from "qrcode.react";
import * as React from "react";
import { client } from "../utils/api-client";
import { Spinner } from "../utils/lib";
import { useAuth } from "../Context/auth-context";

const QrGen = ({ setDisplay }) => {
  const {
    user: { token },
    setStepInfo,
  } = useAuth();

  const [qr, setQr] = React.useState(null);
  React.useEffect(() => {
    if (qr) return;
    client("qr-gen", { token }).then(({ data }) => {
      setQr(data.token);
      setStepInfo({
        progress: 100,
        breadCrumb: "Scan QR Code",
      });
    });
  });
  return qr ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200%",
      }}
    >
      <QRCode value={qr} size="300" />
    </div>
  ) : (
    "Generating QR Code ..."
  );
};

export default QrGen;
