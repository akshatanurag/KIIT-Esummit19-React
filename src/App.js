import "./App.css";

import * as React from "react";

import Unauthenticatedapp from "./Components/UnauthenticatedApp";
import AuthenticatedApp from "./Components/AuthenticatedApp";
import { useAuth } from "./Context/auth-context";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user.userDetails && user.token ? (
        <AuthenticatedApp />
      ) : (
        <Unauthenticatedapp />
      )}
    </>
  );
}

export default App;
