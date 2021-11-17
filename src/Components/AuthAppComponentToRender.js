import * as React from "react";

import { Spinner } from "../utils/lib";
import { client } from "../utils/api-client";
import { ProfileEditForm } from "./ProfileEditFrom";
import Payment from "./Payment";
import QrGen from "./QrGen";
import { useAuth } from "../Context/auth-context";

const AuthAppComponentToRender = () => {
  const {
    user: { userDetails: user, token },
    setStepInfo,
  } = useAuth();
  const [userProfile, setUserProfile] = React.useState(null);
  const [display, setDisplay] = React.useState("loading");

  // console.log(display, userProfile);

  React.useEffect(() => {
    if (userProfile) return;

    setDisplay("loading");

    client("profile", { token }).then(({ data }) => {
      if (data.success === false && data.message === "Profile Not Complete")
        return setDisplay("profile");

      const { message: userProfile } = data;
      setUserProfile(userProfile);
      if (!userProfile) setDisplay("profile");
      else if (
        userProfile &&
        userProfile.profileComplete &&
        !userProfile.paymentStatus
      )
        setDisplay("payment");
      else if (
        userProfile &&
        userProfile.profileComplete &&
        userProfile.paymentStatus &&
        !userProfile.selectedTwoEvents
      )
        setDisplay("qr");
    });
  }, [token, user, userProfile]);

  switch (display) {
    case "loading":
      return <Spinner />;
    case "profile":
      return <ProfileEditForm setDisplay={setDisplay} />;
    case "payment":
      return <Payment profile={userProfile} setDisplay={setDisplay} />;
    case "qr":
      return <QrGen setDisplay={setDisplay} />;
    default:
      return <ProfileEditForm setDisplay={setDisplay} />;
  }
};

export default AuthAppComponentToRender;
