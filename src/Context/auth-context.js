import * as React from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../utils/auth-provider";
import { ErrorComponent, FullPageSpinner } from "../utils/lib";
import MySwal from "../Components/Swal";
import jwtDecode from "jwt-decode";

const authContext = React.createContext();

const AuthProvider = (props) => {
  const history = useHistory();

  const [display, setDisplay] = React.useState("idle");
  const [user, setUser] = React.useState({
    userDetails: null,
    token: null,
  });
  const [stepInfo, setStepInfo] = React.useState({
    progress: 0,
    breadCrumb: "Loading...",
  });
  // console.log(stepInfo);

  React.useEffect(() => {
    if ((user.userDetails && user.token) || user.error) {
      return;
    }
    setDisplay("loading");
    auth
      .getTokenFromLocalStorage()
      .then((token) => {
        if (!token) {
          setDisplay("idle");
          return;
        }
        setUser({ userDetails: jwtDecode(token), token });
        setDisplay("success");
      })
      .catch((e) => {
        MySwal.fire("Error.", e.message, "error").then(() =>
          setDisplay("idle")
        );
      });
  }, [user]);

  const login = (data) => auth.login({ data, setUser, setDisplay });
  const signup = (data) => auth.signup({ data, history, setDisplay });

  const value = {
    login,
    display,
    user,
    signup,
    stepInfo,
    setStepInfo,
  };
  switch (display) {
    case "idle":
      return <authContext.Provider value={value} {...props} />;
    case "loading":
      return <FullPageSpinner />;
    case "success":
      return <authContext.Provider value={value} {...props} />;
    case "error":
      return <ErrorComponent error={user} />;
    default:
      throw new Error(`Unhandled status: ${user}`);
  }
};

const useAuth = () => {
  const context = React.useContext(authContext);
  // console.log(context);
  if (context === undefined)
    throw new Error(`useAuth must be used within a AuthProvider`);

  return context;
};

export { useAuth, AuthProvider };
